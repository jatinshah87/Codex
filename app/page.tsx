import Link from "next/link";
import { ArrowRight, CheckCircle2, ClipboardCheck, FileSpreadsheet, Package2, ScanLine, ShieldCheck, Users2 } from "lucide-react";

import {
  itemMasterRecords,
  mobileCountSteps,
  platformStats,
  roleSummaries,
  stockTakePlans,
  technicalMilestones,
  uploadModules,
  varianceRows,
  warehouseTree,
  workflowSteps
} from "@/lib/data";

const totalVarianceLines = varianceRows.filter(
  (row) => row.firstCheck !== row.secondCheck || row.secondCheck !== row.systemStock
).length;

export default function HomePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
      <section id="overview" className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center rounded-full border border-cyan-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-700 shadow-sm">
            Android + iOS ready stocktake workflow
          </div>
          <div className="space-y-5">
            <h1 className="max-w-4xl font-display text-5xl leading-[0.95] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
              Asa Buy stock audit, counting, and reconciliation in one mobile-first platform.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              This application is designed around your exact process: audit-driven stocktake plans, first and second check assignments, barcode-based counting, Excel uploads for item master and system stock, and downloadable variance reports.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/shop/audit-console"
              className="inline-flex items-center rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-cyan-800"
            >
              View Audit Workspace
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-cyan-400 hover:text-cyan-700"
            >
              Review Solution Blueprint
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {platformStats.map((stat) => (
              <div key={stat.label} className="rounded-[28px] border border-white/80 bg-white/80 p-5 shadow-[0_20px_45px_rgba(15,23,42,0.06)] backdrop-blur">
                <p className="text-3xl font-bold tracking-tight text-slate-950">{stat.value}</p>
                <p className="mt-2 text-sm font-semibold text-slate-700">{stat.label}</p>
                <p className="mt-1 text-sm leading-6 text-slate-500">{stat.note}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[36px] border border-slate-200 bg-slate-950 p-6 text-white shadow-[0_30px_80px_rgba(15,23,42,0.24)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.28),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.18),transparent_24%)]" />
          <div className="relative space-y-6">
            <div className="flex items-center justify-between rounded-[24px] border border-white/10 bg-white/5 px-4 py-3">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-cyan-200">Live Cycle</p>
                <p className="mt-2 text-2xl font-semibold">April 2026 Week 3</p>
              </div>
              <div className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-200">
                In Progress
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[28px] border border-white/10 bg-white/5 p-5">
                <div className="flex items-center gap-3">
                  <ClipboardCheck className="h-5 w-5 text-cyan-300" />
                  <p className="text-sm font-semibold">Assigned Sites</p>
                </div>
                <p className="mt-4 text-4xl font-bold">3</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">First and second checks assigned by site and due date.</p>
              </div>
              <div className="rounded-[28px] border border-white/10 bg-white/5 p-5">
                <div className="flex items-center gap-3">
                  <ScanLine className="h-5 w-5 text-cyan-300" />
                  <p className="text-sm font-semibold">Variance Lines</p>
                </div>
                <p className="mt-4 text-4xl font-bold">{totalVarianceLines}</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">Discrepancies ready for audit review and Excel export.</p>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-5">
              <p className="text-xs uppercase tracking-[0.28em] text-cyan-200">Warehouse Snapshot</p>
              <div className="mt-4 space-y-4">
                {warehouseTree.map((warehouse) => (
                  <div key={warehouse.warehouse} className="rounded-2xl border border-white/10 bg-black/10 p-4">
                    <p className="font-semibold">{warehouse.warehouse}</p>
                    <p className="mt-1 text-sm text-slate-300">
                      {warehouse.sites.length} site(s), {warehouse.sites.reduce((sum, site) => sum + site.locations.length, 0)} barcode locations
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="workflow" className="mt-20 grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_24px_60px_rgba(15,23,42,0.06)]">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-700">Plan of Work</p>
          <h2 className="mt-4 font-display text-4xl tracking-tight text-slate-950">What I understood and what this application covers.</h2>
          <div className="mt-6 grid gap-4 text-sm leading-7 text-slate-600">
            <p>The app must support multiple warehouses, with each warehouse containing sites, each site containing barcode-enabled locations.</p>
            <p>Audit users create stocktake plans by warehouse and assign first check and second check staff site by site.</p>
            <p>Staff must complete the count on mobile devices by scanning location and item codes, selecting UOM, and entering physical quantity.</p>
            <p>Audit must upload item master and system stock through Excel, then generate two variance reports and download them in Excel format.</p>
          </div>
        </div>

        <div className="grid gap-4">
          {workflowSteps.map((step) => (
            <div key={step.phase} className="rounded-[28px] border border-slate-200 bg-white/85 p-6 shadow-[0_16px_40px_rgba(15,23,42,0.05)]">
              <p className="text-sm font-semibold text-cyan-700">{step.phase}</p>
              <p className="mt-2 text-base leading-7 text-slate-600">{step.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="roles" className="mt-20">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-700">Role Workspaces</p>
            <h2 className="mt-3 font-display text-4xl tracking-tight text-slate-950">Three user roles with clear ownership across the stocktake cycle.</h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-slate-600">
            The app is structured so each user sees only the actions that belong to them, which keeps the handheld experience fast and the audit process controlled.
          </p>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {roleSummaries.map((role, index) => {
            const Icon = index === 0 ? ShieldCheck : index === 1 ? FileSpreadsheet : Users2;

            return (
              <div key={role.role} className="rounded-[32px] border border-slate-200 bg-white p-7 shadow-[0_18px_48px_rgba(15,23,42,0.06)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700">
                  <Icon className="h-6 w-6" />
                </div>
                <p className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">{role.role}</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">{role.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{role.description}</p>
                <div className="mt-5 grid gap-3">
                  {role.responsibilities.map((item) => (
                    <div key={item} className="flex gap-3 text-sm leading-6 text-slate-600">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-5 rounded-2xl bg-slate-100 px-4 py-3 text-sm font-medium text-slate-700">{role.highlight}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section id="mobile" className="mt-20 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="rounded-[36px] border border-slate-200 bg-slate-950 p-6 text-white shadow-[0_28px_70px_rgba(15,23,42,0.2)]">
          <div className="mx-auto max-w-sm rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,#0f172a_0%,#111827_100%)] p-4">
            <div className="rounded-[28px] bg-slate-100 p-4 text-slate-900">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-cyan-700">First Check</p>
                  <p className="mt-1 text-lg font-semibold">Site A / A-01-01</p>
                </div>
                <div className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                  68% done
                </div>
              </div>

              <div className="mt-4 space-y-3">
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Scan Location</p>
                  <p className="mt-2 text-lg font-semibold text-slate-950">LOC-A-01-01</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Scan Item</p>
                  <p className="mt-2 text-lg font-semibold text-slate-950">ITM-100245</p>
                  <p className="mt-1 text-sm text-slate-500">Industrial gloves nitrile blue</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-slate-200 bg-white p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">UOM</p>
                    <p className="mt-2 text-base font-semibold">Carton</p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Quantity</p>
                    <p className="mt-2 text-base font-semibold">24</p>
                  </div>
                </div>
              </div>

              <button type="button" className="mt-4 w-full rounded-2xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white">
                Save Count
              </button>
            </div>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-700">Mobile Count Journey</p>
          <h2 className="mt-3 font-display text-4xl tracking-tight text-slate-950">Optimized for warehouse handhelds, tablets, and mobile browsers.</h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
            The counting experience is intentionally short and repetitive so staff can move quickly through racks and bins with minimal tapping. This structure works well for Android scanner devices today and can later support iPhone or iPad camera scanning if needed.
          </p>
          <div className="mt-6 grid gap-3">
            {mobileCountSteps.map((step, index) => (
              <div key={step} className="flex gap-4 rounded-[24px] border border-slate-200 bg-white p-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cyan-50 text-sm font-bold text-cyan-700">
                  {index + 1}
                </div>
                <p className="text-sm leading-7 text-slate-600">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-20 grid gap-8 lg:grid-cols-[1fr_1fr]">
        <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_18px_48px_rgba(15,23,42,0.06)]">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-700">Excel Imports</p>
          <h2 className="mt-3 font-display text-4xl tracking-tight text-slate-950">Audit-led master data onboarding and stock loading.</h2>
          <div className="mt-6 grid gap-4">
            {uploadModules.map((module) => (
              <div key={module.title} className="rounded-[24px] border border-slate-200 bg-slate-50 p-5">
                <div className="flex items-center gap-3">
                  <FileSpreadsheet className="h-5 w-5 text-cyan-700" />
                  <p className="text-lg font-semibold tracking-tight text-slate-950">{module.title}</p>
                </div>
                <p className="mt-2 text-sm leading-7 text-slate-600">{module.detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 overflow-hidden rounded-[24px] border border-slate-200">
            <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
              <thead className="bg-slate-950 text-white">
                <tr>
                  <th className="px-4 py-3 font-medium">Item #</th>
                  <th className="px-4 py-3 font-medium">Description</th>
                  <th className="px-4 py-3 font-medium">Location</th>
                  <th className="px-4 py-3 font-medium">UOM</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {itemMasterRecords.map((record) => (
                  <tr key={record.itemNumber}>
                    <td className="px-4 py-3 font-semibold text-slate-950">{record.itemNumber}</td>
                    <td className="px-4 py-3 text-slate-600">{record.description}</td>
                    <td className="px-4 py-3 text-slate-600">{record.location}</td>
                    <td className="px-4 py-3 text-slate-600">{record.uoms.join(", ")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_18px_48px_rgba(15,23,42,0.06)]">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-700">Active Plans</p>
          <h2 className="mt-3 font-display text-4xl tracking-tight text-slate-950">Warehouse-specific audit plans and site assignments.</h2>
          <div className="mt-6 grid gap-4">
            {stockTakePlans.map((plan) => (
              <div key={plan.warehouse} className="rounded-[28px] border border-slate-200 bg-slate-50 p-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-lg font-semibold text-slate-950">{plan.warehouse}</p>
                    <p className="text-sm text-slate-500">{plan.cycle}</p>
                  </div>
                  <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-800">
                    {plan.status}
                  </span>
                </div>
                <div className="mt-4 grid gap-3">
                  {plan.sites.map((site) => (
                    <div key={site.site} className="rounded-2xl border border-slate-200 bg-white p-4">
                      <div className="flex items-center justify-between gap-3">
                        <p className="font-semibold text-slate-900">{site.site}</p>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{site.dueDate}</p>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        First check: {site.firstCheck} | Second check: {site.secondCheck}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reports" className="mt-20 rounded-[36px] border border-slate-200 bg-slate-950 px-6 py-10 text-white shadow-[0_28px_80px_rgba(15,23,42,0.22)] sm:px-8 lg:px-10">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">Variance Reporting</p>
            <h2 className="mt-3 font-display text-4xl tracking-tight">Two reports exactly aligned to your process.</h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              Report 1 compares first check and second check quantities. Report 2 compares counted quantities against system stock. Both are structured to support Excel export from the audit workspace.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/shop/variance-reports"
              className="inline-flex items-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
            >
              Open Report Module
            </Link>
            <Link
              href="/faq"
              className="inline-flex items-center rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-200"
            >
              Review Process FAQ
            </Link>
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-[28px] border border-white/10">
          <table className="min-w-full divide-y divide-white/10 text-left text-sm">
            <thead className="bg-white/5">
              <tr>
                <th className="px-4 py-3 font-medium">Item</th>
                <th className="px-4 py-3 font-medium">Location</th>
                <th className="px-4 py-3 font-medium">UOM</th>
                <th className="px-4 py-3 font-medium">1st Check</th>
                <th className="px-4 py-3 font-medium">2nd Check</th>
                <th className="px-4 py-3 font-medium">System</th>
                <th className="px-4 py-3 font-medium">Variance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10 bg-slate-950/70">
              {varianceRows.map((row) => {
                const firstSecondVariance = row.firstCheck - row.secondCheck;
                const secondSystemVariance = row.secondCheck - row.systemStock;

                return (
                  <tr key={`${row.itemNumber}-${row.location}`}>
                    <td className="px-4 py-3 font-semibold text-white">{row.itemNumber}</td>
                    <td className="px-4 py-3 text-slate-300">{row.location}</td>
                    <td className="px-4 py-3 text-slate-300">{row.uom}</td>
                    <td className="px-4 py-3 text-slate-300">{row.firstCheck}</td>
                    <td className="px-4 py-3 text-slate-300">{row.secondCheck}</td>
                    <td className="px-4 py-3 text-slate-300">{row.systemStock}</td>
                    <td className="px-4 py-3">
                      <div className="flex flex-wrap gap-2">
                        <span className="rounded-full bg-amber-400/15 px-2.5 py-1 text-xs font-semibold text-amber-200">
                          1st vs 2nd: {firstSecondVariance > 0 ? `+${firstSecondVariance}` : firstSecondVariance}
                        </span>
                        <span className="rounded-full bg-cyan-400/15 px-2.5 py-1 text-xs font-semibold text-cyan-200">
                          2nd vs Sys: {secondSystemVariance > 0 ? `+${secondSystemVariance}` : secondSystemVariance}
                        </span>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-20 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_18px_48px_rgba(15,23,42,0.06)]">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-700">Technical Direction</p>
          <h2 className="mt-3 font-display text-4xl tracking-tight text-slate-950">How I would build this into a production-ready Android and iOS solution.</h2>
          <div className="mt-6 grid gap-3">
            {technicalMilestones.map((milestone) => (
              <div key={milestone} className="flex gap-3 rounded-[24px] border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-600">
                <Package2 className="mt-1 h-4 w-4 shrink-0 text-cyan-700" />
                <span>{milestone}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[32px] border border-slate-200 bg-[linear-gradient(135deg,#ecfeff,#ffffff,#eff6ff)] p-8 shadow-[0_18px_48px_rgba(15,23,42,0.06)]">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-700">Recommended Stack</p>
          <h2 className="mt-3 font-display text-4xl tracking-tight text-slate-950">Web-first now, mobile-ready next.</h2>
          <div className="mt-6 grid gap-4 text-sm leading-7 text-slate-600">
            <p><span className="font-semibold text-slate-900">Frontend:</span> Next.js responsive web app now, with layouts intentionally suitable for tablet and mobile browser operation.</p>
            <p><span className="font-semibold text-slate-900">Mobile path:</span> For full Android and iOS deployment later, I would extend this design into React Native or Expo while keeping the same workflow and API contract.</p>
            <p><span className="font-semibold text-slate-900">Backend:</span> Role-based auth, warehouse masters, Excel import jobs, stocktake transaction tables, and report export services.</p>
            <p><span className="font-semibold text-slate-900">Scanning:</span> Barcode scanner integration through handheld keyboard wedge support first, then native camera or device SDK integration if required.</p>
          </div>
          <Link href="/gifting" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-800">
            Review delivery roadmap <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
