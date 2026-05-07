"use client";

import {
  Activity,
  Bell,
  Bone,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  HeartPulse,
  MapPin,
  Microscope,
  Stethoscope,
  Syringe,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import { useMemo, useRef, useState } from "react";
import { Controller, useForm, useWatch } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SalaryListingCardProps {
  lang: "en" | "ar";
  title: string;
  titleAr: string;
  icon: LucideIcon;
  min: number;
  mid: number;
  max: number;
  city: string;
  category: string;
  toneIndex: number;
}

const alertSpecialties = [
  { label: "طب القلب" },
  { label: "جراحة العظام" },
  { label: "الجراحة العامة" },
  { label: "التخدير" },
  { label: "الأشعة" },
  { label: "الطب الباطني" },
];

const regions = [
  { label: "الرياض", count: "٨٦٠", note: "أعلى طلب هذا الأسبوع" },
  { label: "جدة", count: "٥١٠", note: "مناوبات مرنة" },
  { label: "الدمام", count: "٣٢٠", note: "توظيف سريع" },
  { label: "الخبر", count: "٢٢٠", note: "رواتب تنافسية" },
  { label: "مكة", count: "٢٦٠", note: "مستشفيات كبرى" },
  { label: "المدينة", count: "١٩٠", note: "مناوبات مستقرة" },
  { label: "أبها", count: "١٤٠", note: "فرص إقليمية" },
  { label: "بريدة", count: "١٢٠", note: "طلب متنامي" },
];

const countries = [
  { label: "السعودية" },
  { label: "الإمارات" },
  { label: "قطر" },
  { label: "الكويت" },
  { label: "البحرين" },
  { label: "عُمان" },
];

const workTypes = [
  { value: "all", label: "كل الأنواع" },
  { value: "full-time", label: "دوام كامل" },
  { value: "part-time", label: "دوام جزئي" },
  { value: "locum", label: "لوكم" },
  { value: "remote", label: "طب عن بعد" },
];

const alertFormSchema = z.object({
  specialty: z.string().min(1, "اختر التخصص."),
  email: z.string().email("ادخل بريدا إلكترونيا صحيحا."),
  cities: z.array(z.string()).min(1, "اختر مدينة واحدة على الأقل."),
  countries: z.array(z.string()).min(1, "اختر دولة واحدة على الأقل."),
  workTypes: z.array(z.string()).min(1, "اختر نوع عمل واحدا على الأقل."),
  hasValidScfhsLicense: z.boolean().refine((value) => value, { message: "يلزم تأكيد وجود ترخيص ساري." }),
});

type AlertFormValues = z.infer<typeof alertFormSchema>;

const salarySpecialties = [
  {
    key: "cardiology",
    category: "doctor",
    title: "Cardiology",
    titleAr: "طب القلب",
    icon: HeartPulse,
    min: 55000,
    mid: 72500,
    max: 90000,
    city: "الرياض",
  },
  {
    key: "orthopedic",
    category: "doctor",
    title: "Orthopedic surgery",
    titleAr: "جراحة العظام",
    icon: Bone,
    min: 50000,
    mid: 57500,
    max: 65000,
    city: "جدة",
  },
  {
    key: "general-surgery",
    category: "doctor",
    title: "General surgery",
    titleAr: "الجراحة العامة",
    icon: Microscope,
    min: 45000,
    mid: 52500,
    max: 60000,
    city: "الرياض",
  },
  {
    key: "anesthesiology",
    category: "doctor",
    title: "Anesthesiology",
    titleAr: "التخدير",
    icon: Syringe,
    min: 40000,
    mid: 47500,
    max: 55000,
    city: "الدمام",
  },
  {
    key: "radiology",
    category: "doctor",
    title: "Radiology",
    titleAr: "الأشعة",
    icon: Activity,
    min: 35000,
    mid: 42500,
    max: 50000,
    city: "جدة",
  },
  {
    key: "internal-medicine",
    category: "doctor",
    title: "Internal medicine",
    titleAr: "الطب الباطني",
    icon: Stethoscope,
    min: 30000,
    mid: 37500,
    max: 45000,
    city: "الرياض",
  },
  {
    key: "oral-surgery",
    category: "dentist",
    title: "Oral surgery",
    titleAr: "جراحة الفم",
    icon: Bone,
    min: 28000,
    mid: 36000,
    max: 44000,
    city: "الخبر",
  },
  {
    key: "orthodontics",
    category: "dentist",
    title: "Orthodontics",
    titleAr: "تقويم الأسنان",
    icon: Activity,
    min: 26000,
    mid: 34000,
    max: 42000,
    city: "الرياض",
  },
  {
    key: "icu-nursing",
    category: "nurse",
    title: "ICU nursing",
    titleAr: "تمريض العناية المركزة",
    icon: HeartPulse,
    min: 12000,
    mid: 15500,
    max: 19000,
    city: "مكة",
  },
  {
    key: "er-nursing",
    category: "nurse",
    title: "Emergency nursing",
    titleAr: "تمريض الطوارئ",
    icon: Activity,
    min: 11000,
    mid: 14500,
    max: 18000,
    city: "المدينة",
  },
  {
    key: "clinical-pharmacy",
    category: "pharmacy",
    title: "Clinical pharmacy",
    titleAr: "صيدلة سريرية",
    icon: Syringe,
    min: 16000,
    mid: 21000,
    max: 26000,
    city: "أبها",
  },
  {
    key: "hospital-pharmacy",
    category: "pharmacy",
    title: "Hospital pharmacy",
    titleAr: "صيدلة المستشفيات",
    icon: Stethoscope,
    min: 14000,
    mid: 18500,
    max: 23000,
    city: "بريدة",
  },
  {
    key: "physiotherapy",
    category: "healthcare",
    title: "Physiotherapy",
    titleAr: "العلاج الطبيعي",
    icon: Stethoscope,
    min: 12000,
    mid: 16500,
    max: 21000,
    city: "جدة",
  },
  {
    key: "lab",
    category: "healthcare",
    title: "Laboratory",
    titleAr: "المختبرات",
    icon: Microscope,
    min: 11000,
    mid: 15000,
    max: 19000,
    city: "الدمام",
  },
];

const marqueeJobs = [
  {
    key: "m-1",
    location: "الرياض",
    title: "أخصائي أشعة تشخيصية",
    unit: "أشعة الأوعية الدموية",
    shift: "نهاري، ٤×١٠",
    avgMonthly: 18500,
  },
  {
    key: "m-2",
    location: "جدة",
    title: "ممرض/ة قلب وأوعية",
    unit: "مختبر القسطرة",
    shift: "ليلي، ٣×١٢",
    avgMonthly: 14200,
  },
  {
    key: "m-3",
    location: "الدمام",
    title: "أخصائي علاج تنفسي",
    unit: "العناية المركزة",
    shift: "مناوبات، ٥×٨",
    avgMonthly: 16800,
  },
  {
    key: "m-4",
    location: "الخبر",
    title: "صيدلي/ة سريري",
    unit: "صيدلة الطوارئ",
    shift: "دوام كامل",
    avgMonthly: 19800,
  },
  {
    key: "m-5",
    location: "مكة",
    title: "ممرض/ة جراحة",
    unit: "الجراحة العامة",
    shift: "نهاري وليلي",
    avgMonthly: 13500,
  },
  {
    key: "m-6",
    location: "المدينة",
    title: "طبيب/ة طوارئ",
    unit: "قسم الطوارئ",
    shift: "١٢ ساعة",
    avgMonthly: 32000,
  },
  {
    key: "m-7",
    location: "أبها",
    title: "فني/ة مختبر",
    unit: "كيمياء حيوية",
    shift: "صباحي",
    avgMonthly: 9800,
  },
  {
    key: "m-8",
    location: "بريدة",
    title: "أخصائي تخدير",
    unit: "غرف العمليات",
    shift: "٤×١٠",
    avgMonthly: 28000,
  },
] as const;

type DestinationCity = {
  key: string;
  nameEn: string;
  nameAr: string;
  countryEn: string;
  properties: number;
  imageUrl: string;
};

function pickTopSalaryByCity(city: string) {
  const items = salarySpecialties.filter((specialty) => specialty.city === city);
  if (items.length === 0) return null;
  return items.reduce((best, current) => (current.max > best.max ? current : best), items[0]);
}

const salaryCollections = [
  {
    title: "تصفح حسب المدن",
    items: regions
      .map((region) => pickTopSalaryByCity(region.label))
      .filter((item): item is NonNullable<typeof item> => item !== null),
  },
  {
    title: "الأطباء",
    items: salarySpecialties.filter((specialty) => specialty.category === "doctor"),
  },
  {
    title: "أطباء الأسنان",
    items: salarySpecialties.filter((specialty) => specialty.category === "dentist"),
  },
  {
    title: "التمريض",
    items: salarySpecialties.filter((specialty) => specialty.category === "nurse"),
  },
  {
    title: "العلوم الصحية",
    items: salarySpecialties.filter((specialty) => ["healthcare", "pharmacy"].includes(specialty.category)),
  },
];

const salaryCardTones = [
  { bg: "#2A2A2A", ink: "#F3F4F6", soft: "rgba(243,244,246,0.8)" },
  { bg: "#1E4337", ink: "#F5FFF8", soft: "rgba(245,255,248,0.8)" },
  { bg: "#32314A", ink: "#F6F7FF", soft: "rgba(246,247,255,0.8)" },
  { bg: "#4A2F34", ink: "#FFF4F5", soft: "rgba(255,244,245,0.8)" },
  { bg: "#2C3E33", ink: "#F4FFF6", soft: "rgba(244,255,246,0.8)" },
  { bg: "#3A2F45", ink: "#FDF6FF", soft: "rgba(253,246,255,0.8)" },
];

function fmt(n: number, lang: "en" | "ar") {
  const locale = lang === "ar" ? "ar-SA" : "en-US";
  const value = new Intl.NumberFormat(locale).format(n);

  return lang === "ar" ? `${value} ر.س` : `SAR ${value}`;
}

function SalaryListingCard({ lang, title, titleAr, icon: Icon, min, mid, max, city, toneIndex }: SalaryListingCardProps) {
  const isAr = lang === "ar";
  const tone = salaryCardTones[toneIndex % salaryCardTones.length];

  return (
    <article
      dir={isAr ? "rtl" : "ltr"}
      className="relative h-[210px] w-[310px] shrink-0 overflow-hidden rounded-2xl p-6 shadow-sm sm:w-[360px]"
      style={{ background: tone.bg, color: tone.ink }}
    >
      <div className="relative z-10 flex h-full max-w-[72%] flex-col items-start">
        <p className="text-2xl font-bold leading-8">{isAr ? titleAr : title}</p>
        <h3 className="mt-2 text-xl font-semibold leading-7">{city}</h3>
        <p className="mt-1 text-3xl font-bold leading-none tracking-normal">{fmt(max, lang)}/شهر</p>
        <p className="mt-auto text-sm leading-6" style={{ color: tone.soft }}>
          نطاق {fmt(min, lang)} - {fmt(mid, lang)}
        </p>
      </div>
      <div className="absolute -bottom-8 -left-8 flex size-36 rotate-[-18deg] items-center justify-center rounded-2xl bg-white/10 text-white/35">
        <Icon className="size-20" strokeWidth={1.7} />
      </div>
    </article>
  );
}

function DestinationCard({
  city,
  variant,
}: {
  city: DestinationCity;
  variant: "featured" | "compact";
}) {
  const isFeatured = variant === "featured";

  return (
    <article
      className={[
        "group relative overflow-hidden rounded-2xl bg-slate-100 shadow-sm ring-1 ring-slate-200/70 dark:bg-white/5 dark:ring-white/10",
        isFeatured ? "h-[190px] sm:h-[220px]" : "h-[170px] sm:h-[190px]",
      ].join(" ")}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${city.imageUrl})` }}
      />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/10" />
      <div className="absolute inset-0 p-4 sm:p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="truncate text-lg font-semibold tracking-tight text-white sm:text-xl">{city.nameEn}</p>
          </div>
          <span className="shrink-0 rounded-md bg-emerald-600/90 px-2 py-1 text-[11px] font-semibold text-white shadow-sm">
            {city.countryEn}
          </span>
        </div>
        <p className="mt-0.5 text-sm text-white/85">{city.nameAr}</p>
      </div>
    </article>
  );
}

type MarqueeJob = (typeof marqueeJobs)[number];

function JobTickerCard({ location, title, unit, shift, avgMonthly }: Omit<MarqueeJob, "key">) {
  return (
    <article
      dir="rtl"
      className="w-[min(100vw-2rem,280px)] shrink-0 rounded-2xl border border-slate-200/90 bg-white p-4 shadow-sm sm:w-[300px] dark:border-white/10 dark:bg-card"
    >
      <p className="text-sm font-bold leading-snug text-[#202124] dark:text-foreground">
        {location} – متوسط الراتب {fmt(avgMonthly, "ar")}/شهر
      </p>
      <p className="mt-2 text-[15px] font-bold leading-snug text-[#202124] dark:text-foreground">{title}</p>
      <p className="mt-1.5 text-sm text-muted-foreground">{unit}</p>
      <p className="mt-1 text-sm text-muted-foreground">{shift}</p>
    </article>
  );
}

export default function NightShiftLanding() {
  const [isCollectingMore, setIsCollectingMore] = useState(false);
  const salaryLang = "ar" as const;
  const exploreScrollerRef = useRef<HTMLDivElement | null>(null);
  const destinations = useMemo<DestinationCity[]>(
    () => [
      {
        key: "makkah",
        nameEn: "Mecca",
        nameAr: "مكة",
        countryEn: "SA",
        properties: 656,
        imageUrl:
          "https://images.unsplash.com/photo-1567165221362-2d53b4c2d1a1?auto=format&fit=crop&w=1600&q=80",
      },
      {
        key: "jeddah",
        nameEn: "Jeddah",
        nameAr: "جدة",
        countryEn: "SA",
        properties: 1637,
        imageUrl:
          "https://images.unsplash.com/photo-1598591971443-0044d8f2fe7b?auto=format&fit=crop&w=1600&q=80",
      },
      {
        key: "riyadh",
        nameEn: "Riyadh",
        nameAr: "الرياض",
        countryEn: "SA",
        properties: 4312,
        imageUrl:
          "https://images.unsplash.com/photo-1617810349765-8d6c038c2f2c?auto=format&fit=crop&w=1600&q=80",
      },
      {
        key: "medina",
        nameEn: "Medina",
        nameAr: "المدينة",
        countryEn: "SA",
        properties: 1312,
        imageUrl:
          "https://images.unsplash.com/photo-1644491846419-6af72c56543b?auto=format&fit=crop&w=1600&q=80",
      },
      {
        key: "alkhobar",
        nameEn: "Al Khobar",
        nameAr: "الخبر",
        countryEn: "SA",
        properties: 508,
        imageUrl:
          "https://images.unsplash.com/photo-1519682577862-22b62b24e493?auto=format&fit=crop&w=1600&q=80",
      },
      {
        key: "taif",
        nameEn: "Taif",
        nameAr: "الطائف",
        countryEn: "SA",
        properties: 494,
        imageUrl:
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
      },
    ],
    [],
  );
  const trendingFeatured = destinations.slice(0, 2);
  const trendingRest = destinations.slice(2, 5);
  const form = useForm<AlertFormValues>({
    resolver: zodResolver(alertFormSchema),
    mode: "onSubmit",
    defaultValues: {
      specialty: "",
      email: "",
      cities: [],
      countries: [],
      workTypes: ["all"],
      hasValidScfhsLicense: false,
    },
  });
  const selectedCities = useWatch({ control: form.control, name: "cities" });
  const selectedCountries = useWatch({ control: form.control, name: "countries" });
  const selectedWorkTypes = useWatch({ control: form.control, name: "workTypes" });

  const toggleCity = (city: string) => {
    const next = selectedCities.includes(city)
      ? selectedCities.filter((item) => item !== city)
      : [...selectedCities, city];
    form.setValue("cities", next, { shouldDirty: true, shouldValidate: true });
  };

  const toggleCountry = (country: string) => {
    const next = selectedCountries.includes(country)
      ? selectedCountries.filter((item) => item !== country)
      : [...selectedCountries, country];
    form.setValue("countries", next, { shouldDirty: true, shouldValidate: true });
  };

  const toggleWorkType = (value: string) => {
    let next: string[] = [];
    if (value === "all") {
      next = ["all"];
    } else {
      const withoutAll = selectedWorkTypes.filter((item) => item !== "all");
      next = withoutAll.includes(value) ? withoutAll.filter((item) => item !== value) : [...withoutAll, value];
    }
    form.setValue("workTypes", next, { shouldDirty: true, shouldValidate: true });
  };

  const handleContinue = async () => {
    const isValidStep = await form.trigger(["specialty", "email"]);
    if (isValidStep) setIsCollectingMore(true);
  };

  const onSubmit = (data: AlertFormValues) => {
    console.log("Alert form data", data);
  };

  const scrollExplore = (direction: "prev" | "next") => {
    const el = exploreScrollerRef.current;
    if (!el) return;
    const delta = direction === "next" ? 560 : -560;
    el.scrollBy({ left: delta, behavior: "smooth" });
  };

  return (
    <main dir="rtl" className="min-h-screen bg-background text-foreground">
      <header className="bg-background/95">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-3" />
          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-1 rounded-full bg-muted p-1 sm:flex">
              <Button variant="secondary" size="sm" className="h-9 rounded-full px-4">
                للمنشآت
              </Button>
              <Separator orientation="vertical" className="h-6" />
              <Button variant="ghost" size="sm" className="h-9 rounded-full px-4">
                للأفراد
              </Button>
            </div>
            <Button size="sm" onClick={() => setIsCollectingMore(true)}>
              <Bell className="size-4" />
              ابدأ التنبيهات
            </Button>
          </div>
        </div>
      </header>

      <section className="bg-background">
        <div className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 lg:py-8">
          <div className="relative overflow-hidden rounded-3xl ring-1 ring-black/10">
            <Image
              src="/hero-reference.png"
              alt=""
              fill
              priority
              sizes="(min-width: 1024px) 1152px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/30" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.18),transparent_45%)]" />

            <div className="relative z-10 flex flex-col items-center px-4 py-8 text-center sm:px-8 sm:py-10 lg:py-12">
              <h1 className="max-w-2xl font-[var(--font-heading)] text-3xl font-semibold leading-[1.25] tracking-tight text-white sm:text-4xl lg:text-5xl">
                تنبيهات وظائف صحية تصل قبل الزحام
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/85 sm:text-base">
                ابدأ بالبريد والتخصص فقط. بعدها نكمل الأسئلة المهمة ونبني لك تنبيها يناسب ترخيصك ومدنك
              </p>

              <Card className="mt-6 w-full max-w-3xl rounded-2xl border-0 bg-white/10 text-start shadow-lg backdrop-blur-md ring-1 ring-white/15">
                <CardContent className="p-4 sm:p-5">
                  <form onSubmit={form.handleSubmit(onSubmit)} noValidate className="grid gap-4">
                    <div className="grid gap-3 rounded-xl bg-white/85 p-3 sm:grid-cols-[1fr_1fr_auto] sm:items-end">
                      <div className="grid gap-2">
                        <Label className="font-semibold text-slate-900">التخصص</Label>
                        <Controller
                          name="specialty"
                          control={form.control}
                          render={({ field, fieldState }) => (
                            <>
                              <Select dir="rtl" value={field.value} onValueChange={field.onChange}>
                                <SelectTrigger
                                  aria-invalid={fieldState.invalid}
                                  className="h-10 w-full border-slate-300 bg-white aria-invalid:border-red-500"
                                >
                                  <SelectValue placeholder="اختر التخصص" />
                                </SelectTrigger>
                                <SelectContent>
                                  {alertSpecialties.map((specialty) => (
                                    <SelectItem key={specialty.label} value={specialty.label}>
                                      {specialty.label}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              {fieldState.error ? <p className="text-xs text-red-600">{fieldState.error.message}</p> : null}
                            </>
                          )}
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label className="font-semibold text-slate-900">البريد الإلكتروني</Label>
                        <Controller
                          name="email"
                          control={form.control}
                          render={({ field, fieldState }) => (
                            <>
                              <Input
                                {...field}
                                type="email"
                                inputMode="email"
                                placeholder="name@example.com"
                                aria-invalid={fieldState.invalid}
                                className="h-10 border-slate-300 bg-white aria-invalid:border-red-500"
                              />
                              {fieldState.error ? <p className="text-xs text-red-600">{fieldState.error.message}</p> : null}
                            </>
                          )}
                        />
                      </div>
                      <Button
                        className="h-10 min-w-32 bg-slate-900 text-white hover:bg-slate-800"
                        type={isCollectingMore ? "submit" : "button"}
                        onClick={isCollectingMore ? undefined : handleContinue}
                      >
                        <Bell className="size-4" />
                        {isCollectingMore ? "فعّل" : "متابعة"}
                      </Button>
                    </div>

                    {isCollectingMore ? (
                      <div className="grid gap-4 rounded-xl border border-white/20 bg-white/10 p-3 pt-4 text-white backdrop-blur-md">
                        <div className="grid gap-2">
                          <Label className="font-semibold text-white">المدن المفضلة</Label>
                          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                            {regions.map((region) => {
                              const isSelected = selectedCities.includes(region.label);

                              return (
                                <button
                                  key={region.label}
                                  type="button"
                                  onClick={() => toggleCity(region.label)}
                                  className={`flex h-10 items-center justify-center gap-2 rounded-lg border px-3 text-sm transition ${
                                    isSelected
                                      ? "border-white/80 bg-white/85 text-slate-900"
                                      : "border-white/30 bg-white/10 text-white hover:bg-white/15"
                                  }`}
                                >
                                  {isSelected ? <CheckCircle2 className="size-4" /> : <MapPin className="size-4" />}
                                  {region.label}
                                </button>
                              );
                            })}
                          </div>
                          {form.formState.errors.cities ? (
                            <p className="text-xs text-red-200">{form.formState.errors.cities.message}</p>
                          ) : null}
                        </div>

                        <div className="grid gap-2">
                          <Label className="font-semibold text-white">الدول المفضلة</Label>
                          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                            {countries.map((country) => {
                              const isSelected = selectedCountries.includes(country.label);

                              return (
                                <button
                                  key={country.label}
                                  type="button"
                                  onClick={() => toggleCountry(country.label)}
                                  className={`flex h-10 items-center justify-center gap-2 rounded-lg border px-3 text-sm transition ${
                                    isSelected
                                      ? "border-white/80 bg-white/85 text-slate-900"
                                      : "border-white/30 bg-white/10 text-white hover:bg-white/15"
                                  }`}
                                >
                                  {isSelected ? <CheckCircle2 className="size-4" /> : null}
                                  {country.label}
                                </button>
                              );
                            })}
                          </div>
                          {form.formState.errors.countries ? (
                            <p className="text-xs text-red-200">{form.formState.errors.countries.message}</p>
                          ) : null}
                        </div>

                        <div className="grid gap-2">
                          <Label className="font-semibold text-white">نوع العمل</Label>
                          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                            {workTypes.map((workType) => {
                              const isSelected = selectedWorkTypes.includes(workType.value);

                              return (
                                <button
                                  key={workType.value}
                                  type="button"
                                  onClick={() => toggleWorkType(workType.value)}
                                  className={`flex h-10 items-center justify-center gap-2 rounded-lg border px-3 text-sm transition ${
                                    isSelected
                                      ? "border-white/80 bg-white/85 text-slate-900"
                                      : "border-white/30 bg-white/10 text-white hover:bg-white/15"
                                  }`}
                                >
                                  {isSelected ? <CheckCircle2 className="size-4" /> : null}
                                  {workType.label}
                                </button>
                              );
                            })}
                          </div>
                          {form.formState.errors.workTypes ? (
                            <p className="text-xs text-red-200">{form.formState.errors.workTypes.message}</p>
                          ) : null}
                        </div>

                        <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-white/20 bg-white/10 p-3">
                          <Controller
                            name="hasValidScfhsLicense"
                            control={form.control}
                            render={({ field }) => (
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={(checked) => field.onChange(checked === true)}
                                className="mt-0.5"
                                aria-invalid={Boolean(form.formState.errors.hasValidScfhsLicense)}
                              />
                            )}
                          />
                          <span className="text-sm leading-6 text-white/90">
                            لدي ترخيص ساري من الهيئة السعودية للتخصصات الصحية أو جهة ترخيص خليجية معادلة.
                          </span>
                        </label>
                        {form.formState.errors.hasValidScfhsLicense ? (
                          <p className="text-xs text-red-200">{form.formState.errors.hasValidScfhsLicense.message}</p>
                        ) : null}
                      </div>
                    ) : null}
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:py-12">
          <div dir="ltr" className="mb-6">
            <h2 className="text-2xl font-semibold tracking-tight text-[#202124]">Trending destinations</h2>
            <p className="mt-1 text-sm text-muted-foreground">Most popular choices for travelers from Saudi Arabia</p>
          </div>

          <div dir="ltr" className="grid gap-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {trendingFeatured.map((city) => (
                <DestinationCard key={city.key} city={city} variant="featured" />
              ))}
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {trendingRest.map((city) => (
                <DestinationCard key={city.key} city={city} variant="compact" />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto w-full max-w-7xl px-4 pb-12 sm:px-6 lg:pb-14">
          <div dir="ltr" className="mb-4 flex items-center justify-between gap-3">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-[#202124]">Explore Saudi Arabia</h2>
              <p className="mt-1 text-sm text-muted-foreground">These popular destinations have a lot to offer</p>
            </div>
            <div className="hidden items-center gap-2 sm:flex">
              <Button
                type="button"
                variant="secondary"
                size="icon"
                className="size-10 rounded-full"
                aria-label="Scroll left"
                onClick={() => scrollExplore("prev")}
              >
                <ChevronLeft className="size-4" />
              </Button>
              <Button
                type="button"
                variant="secondary"
                size="icon"
                className="size-10 rounded-full"
                aria-label="Scroll right"
                onClick={() => scrollExplore("next")}
              >
                <ChevronRight className="size-4" />
              </Button>
            </div>
          </div>

          <div
            dir="ltr"
            ref={exploreScrollerRef}
            className="flex gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {destinations.map((city) => (
              <article key={`explore-${city.key}`} className="w-[170px] shrink-0 sm:w-[190px]">
                <div
                  className="h-[108px] overflow-hidden rounded-xl bg-slate-100 bg-cover bg-center shadow-sm ring-1 ring-slate-200/70 dark:bg-white/5 dark:ring-white/10"
                  style={{ backgroundImage: `url(${city.imageUrl})` }}
                />
                <div className="mt-2">
                  <p className="text-sm font-semibold text-[#202124]">{city.nameEn}</p>
                  <p className="text-xs text-muted-foreground">{city.properties.toLocaleString("en-US")} properties</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:py-14">
          <div
            dir="rtl"
            className="mx-auto mb-8 max-w-3xl text-center"
          >
            <h2 className="text-2xl font-semibold tracking-normal">
              دليل رواتب الرعاية الصحية - المملكة العربية السعودية
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              الرواتب الشهرية بالريال السعودي - تقديرات ٢٠٢٥-٢٠٢٦
            </p>
          </div>

          <div className="space-y-10" dir="rtl">
            {salaryCollections.map((collection) => (
              <div key={collection.title}>
                <div className="mb-4 flex items-center gap-2">
                  <h3 className="text-xl font-semibold tracking-normal text-[#202124]">{collection.title}</h3>
                  <Button variant="secondary" size="icon" className="size-9 rounded-full" aria-label="عرض المزيد">
                    <ChevronLeft className="size-4" />
                  </Button>
                </div>
                <div className="flex gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                  {collection.items.map(({ key: specialtyKey, city, ...specialty }, index) => (
                    <SalaryListingCard
                      key={`${collection.title}-${city}-${specialtyKey}`}
                      lang={salaryLang}
                      city={city}
                      toneIndex={index}
                      {...specialty}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-center text-xs text-muted-foreground">
            المصادر: وزارة الصحة السعودية، PayScale، IHR Canada - تقديرات 2025-2026
          </p>
        </div>
      </section>

      <section
        className="border-t border-slate-200/80 bg-slate-50/90 py-14 dark:border-white/10 dark:bg-white/[0.03]"
        aria-label="عيّنة وظائف ومتوسط الأجر"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto mb-10 max-w-2xl text-center" dir="rtl">
            <h2 className="font-[var(--font-heading)] text-2xl font-semibold tracking-tight text-[#202124] sm:text-3xl dark:text-foreground">
              استكشف وظائف{" "}
              <span className="font-semibold italic text-orange-600">بمتوسط راتب قوي</span>
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">مناصب صحية ومتوسط الدفع الشهري (تقديري)</p>
          </div>

          <div className="flex flex-col gap-5" dir="ltr">
            <div className="overflow-hidden">
              <div className="job-marquee-track gap-4 pe-4">
                {[...marqueeJobs, ...marqueeJobs].map((job, index) => (
                  <JobTickerCard
                    key={`marquee-a-${job.key}-${index}`}
                    location={job.location}
                    title={job.title}
                    unit={job.unit}
                    shift={job.shift}
                    avgMonthly={job.avgMonthly}
                  />
                ))}
              </div>
            </div>
            <div className="overflow-hidden">
              <div className="job-marquee-track job-marquee-track--reverse gap-4 pe-4">
                {(() => {
                  const rotated = [...marqueeJobs.slice(4), ...marqueeJobs.slice(0, 4)];
                  return [...rotated, ...rotated].map((job, index) => (
                    <JobTickerCard
                      key={`marquee-b-${job.key}-${index}`}
                      location={job.location}
                      title={job.title}
                      unit={job.unit}
                      shift={job.shift}
                      avgMonthly={job.avgMonthly}
                    />
                  ));
                })()}
              </div>
            </div>
          </div>

          <div className="mt-10 flex justify-center" dir="rtl">
            <Button
              type="button"
              className="h-12 rounded-full bg-orange-500 px-10 text-base font-semibold text-white shadow-sm hover:bg-orange-600"
            >
              ابحث عن الوظائف
            </Button>
          </div>
        </div>
      </section>

      <footer className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>NightShift - منصة تنبيهات وظائف الرعاية الصحية.</p>
        <div className="flex items-center gap-3">
          <span>للأطباء</span>
          <Separator orientation="vertical" className="h-4" />
          <span>للتمريض</span>
          <Separator orientation="vertical" className="h-4" />
          <span>للصيدلة</span>
        </div>
      </footer>
    </main>
  );
}
