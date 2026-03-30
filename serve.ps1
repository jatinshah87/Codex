$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$listener = [System.Net.Sockets.TcpListener]::new([System.Net.IPAddress]::Loopback, 8081)
$listener.Start()

Write-Output "Serving $root at http://localhost:8081/"

$contentTypes = @{
  ".html" = "text/html; charset=utf-8"
  ".css"  = "text/css; charset=utf-8"
  ".js"   = "application/javascript; charset=utf-8"
  ".png"  = "image/png"
  ".jpg"  = "image/jpeg"
  ".jpeg" = "image/jpeg"
  ".svg"  = "image/svg+xml"
  ".xml"  = "application/xml; charset=utf-8"
  ".txt"  = "text/plain; charset=utf-8"
}

function Send-Response {
  param(
    [System.Net.Sockets.NetworkStream]$Stream,
    [int]$StatusCode,
    [string]$StatusText,
    [byte[]]$Body,
    [string]$ContentType
  )

  $headers = "HTTP/1.1 $StatusCode $StatusText`r`nContent-Type: $ContentType`r`nContent-Length: $($Body.Length)`r`nConnection: close`r`n`r`n"
  $headerBytes = [System.Text.Encoding]::ASCII.GetBytes($headers)
  $Stream.Write($headerBytes, 0, $headerBytes.Length)
  $Stream.Write($Body, 0, $Body.Length)
}

try {
  while ($true) {
    $client = $listener.AcceptTcpClient()
    try {
      $stream = $client.GetStream()
      $buffer = New-Object byte[] 8192
      $bytesRead = $stream.Read($buffer, 0, $buffer.Length)
      if ($bytesRead -le 0) { continue }

      $requestText = [System.Text.Encoding]::ASCII.GetString($buffer, 0, $bytesRead)
      $requestLine = ($requestText -split "`r`n")[0]
      $parts = $requestLine -split " "
      $requestPath = "/"
      if ($parts.Length -ge 2) { $requestPath = $parts[1] }

      if ($requestPath -match '^https?://') {
        try {
          $requestPath = ([System.Uri]$requestPath).AbsolutePath
        } catch {}
      }

      $requestPath = $requestPath.Split("?")[0]
      if ([string]::IsNullOrWhiteSpace($requestPath) -or $requestPath -eq "/") {
        $requestPath = "/index.html"
      }

      $safePath = $requestPath.TrimStart("/") -replace "/", "\"
      $filePath = Join-Path $root $safePath

      if ((Test-Path -LiteralPath $filePath) -and -not (Get-Item -LiteralPath $filePath).PSIsContainer) {
        $extension = [System.IO.Path]::GetExtension($filePath).ToLowerInvariant()
        $body = [System.IO.File]::ReadAllBytes($filePath)
        $contentType = $contentTypes[$extension]
        if (-not $contentType) { $contentType = "application/octet-stream" }
        Send-Response -Stream $stream -StatusCode 200 -StatusText "OK" -Body $body -ContentType $contentType
      } else {
        $body = [System.Text.Encoding]::UTF8.GetBytes("Not Found")
        Send-Response -Stream $stream -StatusCode 404 -StatusText "Not Found" -Body $body -ContentType "text/plain; charset=utf-8"
      }
    } finally {
      if ($stream) { $stream.Dispose() }
      $client.Close()
    }
  }
} finally {
  $listener.Stop()
}
