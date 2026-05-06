"use client";

import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";

type TabKey = "specialty" | "region" | "entity";

const SPECIALTIES = [
  { label: "تمريض", count: "١٤٨٠", icon: "activity" },
  { label: "طوارئ", count: "٦٢٠", icon: "zap" },
  { label: "جراحة", count: "٣٤٠", icon: "scissors" },
  { label: "أشعة", count: "٢٩٠", icon: "scan" },
  { label: "صيدلة", count: "٥١٠", icon: "pill" },
  { label: "أطفال", count: "٣٨٠", icon: "baby" },
  { label: "قلبية", count: "٢٢٠", icon: "heart" },
  { label: "فيزيائي", count: "١٦٠", icon: "person" },
];

const REGIONS = [
  { label: "الرياض", flag: "🇸🇦", count: "٨٦٠" },
  { label: "دبي", flag: "🇦🇪", count: "٦٤٠" },
  { label: "جدة", flag: "🇸🇦", count: "٥١٠" },
  { label: "الكويت", flag: "🇰🇼", count: "٣٨٠" },
  { label: "الدوحة", flag: "🇶🇦", count: "٣٢٠" },
  { label: "المنامة", flag: "🇧🇭", count: "١٨٠" },
  { label: "أبوظبي", flag: "🇦🇪", count: "٤٢٠" },
  { label: "مسقط", flag: "🇴🇲", count: "٢١٠" },
];

const ENTITIES = [
  { short: "MOH", name: "وزارة الصحة", city: "السعودية" },
  { short: "NGHA", name: "الحرس الوطني", city: "الرياض" },
  { short: "KFSH", name: "مستشفى الملك فيصل", city: "الرياض" },
  { short: "DHCC", name: "مدينة دبي الطبية", city: "دبي" },
  { short: "KHC", name: "مجمع الملك خالد", city: "جدة" },
  { short: "SEHA", name: "شبكة صحة", city: "أبوظبي" },
  { short: "HMC", name: "مؤسسة حمد الطبية", city: "قطر" },
  { short: "KSH", name: "مستشفى الملك سلمان", city: "الرياض" },
];

const JOBS = [
  {
    logo: "KFSH",
    title: "ممرض/ة أول — وحدة العناية المركزة",
    hospital: "مستشفى الملك فيصل التخصصي",
    city: "الرياض",
    type: "دوام كامل",
    salary: "١٢,٠٠٠ – ١٦,٠٠٠ ر.س",
    posted: "منذ يومين",
  },
  {
    logo: "DHCC",
    title: "أخصائي أشعة تشخيصية",
    hospital: "مدينة دبي الطبية",
    city: "دبي",
    type: "دوام كامل",
    salary: "٢٠,٠٠٠ – ٢٦,٠٠٠ د.إ",
    posted: "منذ ٣ أيام",
  },
  {
    logo: "NGHA",
    title: "صيدلاني سريري",
    hospital: "مستشفيات الحرس الوطني",
    city: "جدة",
    type: "دوام جزئي",
    salary: "٩,٠٠٠ – ١٢,٠٠٠ ر.س",
    posted: "منذ أسبوع",
  },
  {
    logo: "SEHA",
    title: "طبيب طوارئ",
    hospital: "شبكة صحة — أبوظبي",
    city: "أبوظبي",
    type: "عقد سنوي",
    salary: "٤٥,٠٠٠ – ٦٠,٠٠٠ د.إ",
    posted: "اليوم",
  },
];

function Icon({ name, size = 20, className = "" }: { name: string; size?: number; className?: string }) {
  const icons: Record<string, ReactNode> = {
    moon: <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />,
    bell: <><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></>,
    activity: <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />,
    zap: <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />,
    scissors: <><circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><line x1="20" y1="4" x2="8.12" y2="15.88" /><line x1="14.47" y1="14.48" x2="20" y2="20" /><line x1="8.12" y1="8.12" x2="12" y2="12" /></>,
    scan: <><path d="M3 7V5a2 2 0 0 1 2-2h2" /><path d="M17 3h2a2 2 0 0 1 2 2v2" /><path d="M21 17v2a2 2 0 0 1-2 2h-2" /><path d="M7 21H5a2 2 0 0 1-2-2v-2" /><rect x="7" y="7" width="10" height="10" rx="1" /></>,
    pill: <><path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" /><path d="m8.5 8.5 7 7" /></>,
    baby: <><path d="M9 12h.01" /><path d="M15 12h.01" /><path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" /><path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" /></>,
    heart: <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />,
    person: <><circle cx="12" cy="5" r="3" /><path d="M6.5 8a2 2 0 0 0-1.905 1.46L3 14h6l1 7h4l1-7h6l-1.595-4.54A2 2 0 0 0 17.5 8z" /></>,
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {icons[name]}
    </svg>
  );
}

const selectClass =
  "h-11 w-full rounded-xl bg-white px-3 text-sm text-zinc-900 outline-none ring-1 ring-zinc-200 transition focus:ring-zinc-400";

export default function NightShiftLanding() {
  const [tab, setTab] = useState<TabKey>("specialty");
  const [specialty, setSpecialty] = useState("");
  const [city, setCity] = useState("");
  const [type, setType] = useState("الكل");
  const [preferredEntity, setPreferredEntity] = useState("الكل");
  const [email, setEmail] = useState("");

  const tabs: { key: TabKey; label: string }[] = [
    { key: "specialty", label: "تصفح حسب التخصص" },
    { key: "region", label: "حسب المنطقة" },
    { key: "entity", label: "حسب الجهة" },
  ];

  return (
    <main dir="rtl" className="min-h-screen bg-white text-zinc-900">
      <div className="mx-auto w-full max-w-6xl px-6 pb-14 pt-8">
        <nav className="mb-14 flex items-center justify-between rounded-2xl bg-zinc-50 px-5 py-3">
          <div className="flex items-center gap-3">
            <div className="flex size-9 items-center justify-center rounded-lg bg-black text-white">
              <Icon name="moon" size={15} />
            </div>
            <p className="text-lg font-semibold tracking-tight">NightShift</p>
          </div>
          <div />
        </nav>

        <section className="mb-10 text-center">
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            احصل على تنبيهات الوظائف فور نشرها
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-zinc-600 md:text-base">
            اشترك الآن واستلم إشعارات فورية عن أحدث الوظائف الصحية في الخليج.
          </p>
        </section>

        <section className="mx-auto mb-12 max-w-4xl rounded-2xl bg-zinc-50 p-4 md:p-5">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            <select
              className={selectClass}
              value={specialty}
              onChange={(e) => setSpecialty(e.target.value)}
            >
              <option value="">اختر التخصص</option>
              {SPECIALTIES.map((s) => (
                <option key={s.label} value={s.label}>
                  {s.label}
                </option>
              ))}
            </select>
            <select
              className={selectClass}
              value={city}
              onChange={(e) => setCity(e.target.value)}
            >
              <option value="">اختر المدينة</option>
              {REGIONS.map((r) => (
                <option key={r.label} value={r.label}>
                  {r.label}
                </option>
              ))}
            </select>
            <select className={selectClass} value={type} onChange={(e) => setType(e.target.value)}>
              <option>الكل</option>
              <option>دوام كامل</option>
              <option>دوام جزئي</option>
              <option>لوكم</option>
            </select>
            <select className={selectClass} value={preferredEntity} onChange={(e) => setPreferredEntity(e.target.value)}>
              <option>الكل</option>
              <option>MOH - وزارة الصحة</option>
              <option>NGHA - الحرس الوطني</option>
              <option>KFSH - الملك فيصل</option>
              <option>SEHA - شبكة صحة</option>
              <option>HMC - مؤسسة حمد الطبية</option>
            </select>
            <select
              className={`${selectClass} md:col-span-2`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            >
              <option value="">اختر البريد الإلكتروني</option>
              <option value="m@email.com">m@email.com</option>
              <option value="hr@email.com">hr@email.com</option>
            </select>
            <Button className="h-11 w-full rounded-xl bg-black text-white hover:bg-zinc-800 md:col-span-2">
              <Icon name="bell" size={16} className="ml-1" />
              Notify me
            </Button>
          </div>
        </section>

        <section className="mb-10">
          <div className="mb-6 flex items-center justify-center gap-2">
            {tabs.map((t) => (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  tab === t.key
                    ? "bg-white text-black"
                    : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {tab === "specialty" && (
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {SPECIALTIES.map((s) => (
                <article key={s.label} className="rounded-2xl bg-zinc-50 p-4 transition hover:bg-zinc-100">
                  <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-zinc-200 text-zinc-700">
                    <Icon name={s.icon} size={18} />
                  </div>
                  <p className="text-sm font-medium">{s.label}</p>
                  <p className="mt-1 text-xs text-zinc-500">{s.count} وظيفة</p>
                </article>
              ))}
            </div>
          )}

          {tab === "region" && (
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {REGIONS.map((r) => (
                <article key={r.label} className="rounded-2xl bg-zinc-50 p-4 transition hover:bg-zinc-100">
                  <div className="mb-3 text-2xl">{r.flag}</div>
                  <p className="text-sm font-medium">{r.label}</p>
                  <p className="mt-1 text-xs text-zinc-500">{r.count} وظيفة</p>
                </article>
              ))}
            </div>
          )}

          {tab === "entity" && (
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {ENTITIES.map((h) => (
                <article key={h.short} className="rounded-2xl bg-zinc-50 p-4 transition hover:bg-zinc-100">
                  <div className="mb-3 flex size-11 items-center justify-center rounded-lg bg-zinc-200 text-xs font-bold">
                    {h.short}
                  </div>
                  <p className="text-sm font-medium">{h.name}</p>
                  <p className="mt-1 text-xs text-zinc-500">{h.city}</p>
                </article>
              ))}
            </div>
          )}
        </section>

        <section>
          <div className="mb-4 flex items-center justify-between">
            <p className="text-xl font-semibold">أحدث الوظائف</p>
            <button className="rounded-lg bg-zinc-100 px-3 py-1.5 text-xs text-zinc-700 transition hover:bg-zinc-200">
              عرض الكل
            </button>
          </div>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {JOBS.map((job) => (
              <article key={job.title} className="rounded-2xl bg-zinc-50 p-4 transition hover:bg-zinc-100">
                <div className="mb-3 flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold leading-6">{job.title}</p>
                    <p className="text-xs text-zinc-500">{job.hospital}</p>
                  </div>
                  <div className="rounded-lg bg-zinc-200 px-2 py-1 text-[10px] font-bold">{job.logo}</div>
                </div>
                <div className="mb-3 flex flex-wrap gap-2 text-xs text-zinc-700">
                  <span className="rounded-full bg-zinc-200 px-2 py-1">{job.city}</span>
                  <span className="rounded-full bg-zinc-200 px-2 py-1">{job.type}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold">{job.salary}</p>
                    <p className="text-xs text-zinc-400">{job.posted}</p>
                  </div>
                  <Button className="rounded-lg bg-black text-white hover:bg-zinc-800">قدّم الآن</Button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
