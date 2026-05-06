"use client";

import {
  Activity,
  Bell,
  BriefcaseMedical,
  Building2,
  CalendarClock,
  CheckCircle2,
  ChevronLeft,
  HeartPulse,
  MapPin,
  Moon,
  Search,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Syringe,
  Timer,
  Users,
} from "lucide-react";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const specialties = [
  { label: "تمريض", count: "١٤٨٠", icon: HeartPulse, tone: "text-rose-500 bg-rose-500/10" },
  { label: "طوارئ", count: "٦٢٠", icon: Activity, tone: "text-amber-500 bg-amber-500/10" },
  { label: "صيدلة", count: "٥١٠", icon: Syringe, tone: "text-emerald-500 bg-emerald-500/10" },
  { label: "أشعة", count: "٢٩٠", icon: Stethoscope, tone: "text-sky-500 bg-sky-500/10" },
  { label: "جراحة", count: "٣٤٠", icon: BriefcaseMedical, tone: "text-violet-500 bg-violet-500/10" },
  { label: "إدارة صحية", count: "٢٢٠", icon: Users, tone: "text-cyan-500 bg-cyan-500/10" },
];

const regions = [
  { label: "الرياض", count: "٨٦٠", note: "أعلى طلب هذا الأسبوع" },
  { label: "دبي", count: "٦٤٠", note: "عقود دولية نشطة" },
  { label: "جدة", count: "٥١٠", note: "مناوبات مرنة" },
  { label: "أبوظبي", count: "٤٢٠", note: "رواتب تنافسية" },
  { label: "الدوحة", count: "٣٢٠", note: "توظيف سريع" },
  { label: "الكويت", count: "٣٨٠", note: "مستشفيات خاصة" },
];

const entities = [
  { short: "KFSH", name: "مستشفى الملك فيصل", city: "الرياض", open: "٧٢" },
  { short: "NGHA", name: "الحرس الوطني", city: "الرياض", open: "٤٩" },
  { short: "SEHA", name: "شبكة صحة", city: "أبوظبي", open: "٣٨" },
  { short: "HMC", name: "مؤسسة حمد الطبية", city: "الدوحة", open: "٣١" },
  { short: "DHCC", name: "مدينة دبي الطبية", city: "دبي", open: "٢٧" },
  { short: "MOH", name: "وزارة الصحة", city: "السعودية", open: "١١٦" },
];

const jobs = [
  {
    logo: "KFSH",
    title: "ممرض/ة أول - وحدة العناية المركزة",
    hospital: "مستشفى الملك فيصل التخصصي",
    city: "الرياض",
    type: "دوام كامل",
    salary: "١٢,٠٠٠ - ١٦,٠٠٠ ر.س",
    posted: "منذ يومين",
    match: "٩٤٪",
    tags: ["عناية مركزة", "SCFHS", "خبرة ٣ سنوات"],
  },
  {
    logo: "DHCC",
    title: "أخصائي أشعة تشخيصية",
    hospital: "مدينة دبي الطبية",
    city: "دبي",
    type: "دوام كامل",
    salary: "٢٠,٠٠٠ - ٢٦,٠٠٠ د.إ",
    posted: "منذ ٣ أيام",
    match: "٨٩٪",
    tags: ["MRI", "CT", "ترخيص DHA"],
  },
  {
    logo: "NGHA",
    title: "صيدلاني سريري",
    hospital: "مستشفيات الحرس الوطني",
    city: "جدة",
    type: "دوام جزئي",
    salary: "٩,٠٠٠ - ١٢,٠٠٠ ر.س",
    posted: "منذ أسبوع",
    match: "٨٦٪",
    tags: ["أدوية حرجة", "مناوبات", "SCFHS"],
  },
  {
    logo: "SEHA",
    title: "طبيب طوارئ",
    hospital: "شبكة صحة",
    city: "أبوظبي",
    type: "عقد سنوي",
    salary: "٤٥,٠٠٠ - ٦٠,٠٠٠ د.إ",
    posted: "اليوم",
    match: "٩١٪",
    tags: ["ER", "ACLS", "ترخيص DOH"],
  },
];

const stats = [
  { label: "وظيفة نشطة", value: "٣,٩٤٠", icon: BriefcaseMedical },
  { label: "جهة موثقة", value: "١٢٨", icon: ShieldCheck },
  { label: "متوسط الرد", value: "٣٦ ساعة", icon: Timer },
];

export default function NightShiftLanding() {
  const [hasValidScfhsLicense, setHasValidScfhsLicense] = useState(false);

  return (
    <main dir="rtl" className="min-h-screen bg-background text-foreground">
      <header className="border-b bg-background/95">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Moon className="size-4" />
            </div>
            <div>
              <p className="text-base font-semibold leading-none">NightShift</p>
              <p className="mt-1 text-xs text-muted-foreground">وظائف صحية في الخليج</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
              للمنشآت
            </Button>
            <Button size="sm">
              <Bell className="size-4" />
              ابدأ التنبيهات
            </Button>
          </div>
        </div>
      </header>

      <section className="border-b bg-[linear-gradient(180deg,var(--background),var(--muted))]">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:py-12">
          <div className="flex flex-col justify-center">
            <Badge variant="outline" className="mb-5 w-fit gap-1.5 bg-background">
              <Sparkles className="size-3.5 text-emerald-500" />
              تنبيهات ذكية للفرص الصحية
            </Badge>
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-normal sm:text-5xl lg:text-6xl">
              NightShift
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              ابحث عن الوظائف الصحية المناسبة حسب الترخيص، المدينة، الجهة، ونوع المناوبة.
              تصل الفرص المهمة إلى بريدك قبل أن تضيع وسط الإعلانات العامة.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {stats.map((item) => (
                <div key={item.label} className="rounded-lg border bg-background p-4">
                  <item.icon className="mb-3 size-4 text-emerald-500" />
                  <p className="text-2xl font-semibold">{item.value}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <Card className="self-start shadow-sm">
            <CardHeader>
              <CardTitle>ابن تنبيهك الوظيفي</CardTitle>
              <CardDescription>اختر تفضيلاتك وسنرتب لك الفرص الأهم أولا.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label>التخصص</Label>
                  <Select dir="rtl">
                    <SelectTrigger className="h-10 w-full">
                      <SelectValue placeholder="اختر التخصص" />
                    </SelectTrigger>
                    <SelectContent>
                      {specialties.map((specialty) => (
                        <SelectItem key={specialty.label} value={specialty.label}>
                          {specialty.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label>المدينة</Label>
                  <Select dir="rtl">
                    <SelectTrigger className="h-10 w-full">
                      <SelectValue placeholder="اختر المدينة" />
                    </SelectTrigger>
                    <SelectContent>
                      {regions.map((region) => (
                        <SelectItem key={region.label} value={region.label}>
                          {region.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label>نوع العمل</Label>
                  <Select dir="rtl">
                    <SelectTrigger className="h-10 w-full">
                      <SelectValue placeholder="كل الأنواع" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">كل الأنواع</SelectItem>
                      <SelectItem value="full-time">دوام كامل</SelectItem>
                      <SelectItem value="part-time">دوام جزئي</SelectItem>
                      <SelectItem value="locum">لوكم</SelectItem>
                      <SelectItem value="remote">طب عن بعد</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label>البريد الإلكتروني</Label>
                  <Input type="email" inputMode="email" placeholder="name@example.com" className="h-10" />
                </div>
              </div>
              <label className="flex cursor-pointer items-start gap-3 rounded-lg border bg-muted/40 p-3">
                <Checkbox
                  checked={hasValidScfhsLicense}
                  onCheckedChange={(checked) => setHasValidScfhsLicense(checked === true)}
                  className="mt-0.5"
                />
                <span className="text-sm leading-6">
                  لدي ترخيص ساري من الهيئة السعودية للتخصصات الصحية أو جهة ترخيص خليجية معادلة.
                </span>
              </label>
            </CardContent>
            <CardFooter className="justify-between gap-3">
              <p className="text-xs text-muted-foreground">بدون رسائل مزعجة. يمكنك إيقاف التنبيهات في أي وقت.</p>
              <Button className="min-w-32">
                <Bell className="size-4" />
                فعّل التنبيه
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:py-10">
        <Tabs defaultValue="specialties" dir="rtl" className="gap-6">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-2xl font-semibold tracking-normal">استكشف السوق</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                تصفح الفرص حسب التخصص أو المدينة أو المنشأة.
              </p>
            </div>
            <TabsList className="w-full sm:w-auto">
              <TabsTrigger value="specialties">التخصصات</TabsTrigger>
              <TabsTrigger value="regions">المناطق</TabsTrigger>
              <TabsTrigger value="entities">الجهات</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="specialties" className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {specialties.map((specialty) => (
              <Card key={specialty.label} size="sm" className="transition-colors hover:bg-muted/40">
                <CardHeader>
                  <div className={`mb-2 flex size-10 items-center justify-center rounded-lg ${specialty.tone}`}>
                    <specialty.icon className="size-5" />
                  </div>
                  <CardTitle>{specialty.label}</CardTitle>
                  <CardDescription>{specialty.count} وظيفة متاحة الآن</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="regions" className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {regions.map((region) => (
              <Card key={region.label} size="sm" className="transition-colors hover:bg-muted/40">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="size-4 text-sky-500" />
                    {region.label}
                  </CardTitle>
                  <CardDescription>{region.note}</CardDescription>
                  <CardAction>
                    <Badge variant="secondary">{region.count}</Badge>
                  </CardAction>
                </CardHeader>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="entities" className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {entities.map((entity) => (
              <Card key={entity.short} size="sm" className="transition-colors hover:bg-muted/40">
                <CardHeader>
                  <div className="mb-2 flex size-10 items-center justify-center rounded-lg border bg-background text-xs font-semibold">
                    {entity.short}
                  </div>
                  <CardTitle>{entity.name}</CardTitle>
                  <CardDescription>{entity.city}</CardDescription>
                  <CardAction>
                    <Badge variant="outline">{entity.open} شاغرة</Badge>
                  </CardAction>
                </CardHeader>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </section>

      <section className="border-t bg-muted/40">
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:py-10">
          <div>
            <h2 className="text-2xl font-semibold tracking-normal">أحدث الوظائف المطابقة</h2>
            <p className="mt-2 text-sm leading-7 text-muted-foreground">
              ترتيب عملي يوضح الملاءمة، الراتب، الترخيص المطلوب، ووقت النشر بدون ضجيج.
            </p>
            <div className="mt-5 flex max-w-md items-center gap-2 rounded-lg border bg-background p-2">
              <Search className="ms-2 size-4 text-muted-foreground" />
              <Input className="h-8 border-0 bg-transparent shadow-none focus-visible:ring-0" placeholder="ابحث عن وظيفة أو جهة" />
              <Button size="sm">بحث</Button>
            </div>
          </div>

          <div className="grid gap-3">
            {jobs.map((job) => (
              <Card key={job.title} size="sm">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-lg border bg-background text-xs font-semibold">
                      {job.logo}
                    </div>
                    <div>
                      <CardTitle>{job.title}</CardTitle>
                      <CardDescription className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1">
                        <span className="inline-flex items-center gap-1">
                          <Building2 className="size-3.5" />
                          {job.hospital}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="size-3.5" />
                          {job.city}
                        </span>
                      </CardDescription>
                    </div>
                  </div>
                  <CardAction>
                    <Badge className="gap-1 bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/10">
                      <CheckCircle2 className="size-3" />
                      {job.match}
                    </Badge>
                  </CardAction>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
                    <span className="font-semibold">{job.salary}</span>
                    <span className="inline-flex items-center gap-1 text-muted-foreground">
                      <CalendarClock className="size-3.5" />
                      {job.posted}
                    </span>
                    <span className="text-muted-foreground">{job.type}</span>
                  </div>
                  <Button variant="outline" size="sm">
                    عرض التفاصيل
                    <ChevronLeft className="size-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
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
