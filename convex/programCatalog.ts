import { mutation } from "./_generated/server";

const MEDICAL_SCIENCES_CLASS = {
  class: "العلوم الطبية",
  programs: [
    {
      title: "Diagnostic Radiology Medical Physics Specialty",
      titleAr: "الاختصاص الرئيس في الفيزياء الطبية للأشعة التشخيصية",
    },
    {
      title: "Therapeutic Radiology Medical Physics Specialty",
      titleAr: "الاختصاص الرئيس في برنامج الفيزياء الطبية للأشعة العلاجية",
    },
    {
      title: "MRI Medical Imaging Technology Specialty",
      titleAr: "الاختصاص الرئيس في تقنية الأشعة والتصوير الطبي في الرنين المغناطيسي",
    },
    {
      title: "CT Medical Imaging Technology Specialty",
      titleAr: "الاختصاص الرئيس في تقنية الأشعة والتصوير الطبي في الأشعة المقطعية",
    },
    {
      title: "Ultrasound Medical Imaging Technology Specialty",
      titleAr: "الاختصاص الرئيس في تقنية الأشعة والتصوير الطبي في الصوتية",
    },
    {
      title: "Nuclear Medicine Medical Imaging Technology Specialty",
      titleAr: "الاختصاص الرئيس في تقنية الأشعة والتصوير الطبي في الأشعة النووية",
    },
    {
      title: "Pediatric Physical Therapy Specialty",
      titleAr: "الاختصاص الرئيس في العلاج الطبيعي للأطفال",
    },
    {
      title: "Diploma in Swallowing and Communication Disorders",
      titleAr: "دبلوم اضطرابات البلع و التواصل",
    },
    {
      title: "Occupational Therapy Diploma",
      titleAr: "دبلوم العلاج الوظيفي",
    },
    {
      title: "Clinical Nutrition Diploma",
      titleAr: "دبلوم التغذية السريرية",
    },
    {
      title: "Musculoskeletal Physical Therapy Specialty",
      titleAr: "الاختصاص الرئيس في العلاج الطبيعي للجهاز الهيكلي العضلي",
    },
    {
      title: "Critical Care Respiratory Therapy Diploma",
      titleAr: "دبلوم الرعاية التنفسية الحرجة",
    },
    {
      title: "Medical Imaging Technology Specialty",
      titleAr: "الاختصاص الرئيس في تقنية الأشعة والتصوير الطبي",
    },
    {
      title: "Diploma in Women's Health Ultrasound Imaging",
      titleAr: "دبلوم تصوير الموجات فوق الصوتية للنساء والولادة",
    },
    {
      title: "Audiology Diploma",
      titleAr: "دبلوم السمعيات",
    },
    {
      title: "Blood Bank and Transfusion Diploma",
      titleAr: "دبلوم بنك و نقل الدم",
    },
    {
      title: "Clinical Biochemistry Specialty",
      titleAr: "الاختصاص الرئيس في علم الكيمياء الحيوية السريرية",
    },
    {
      title: "Medical Microbiology Specialty",
      titleAr: "الاختصاص الرئيس في علم الأحياء الدقيقة الطبية",
    },
  ],
};

const NURSING_CLASS = {
  class: "التمريض",
  programs: [
    {
      title: "Home Health Care Nursing Diploma",
      titleAr: "دبلوم تمريض الرعاية الصحية المنزلية",
    },
    {
      title: "Adult Oncology Nursing Diploma",
      titleAr: "دبلوم تمريض الأورام لدى الكبار",
    },
    {
      title: "Midwifery Nursing Diploma",
      titleAr: "دبلوم تمريض القبالة",
    },
    {
      title: "Emergency Nursing Diploma",
      titleAr: "دبلوم تمريض الطوارئ",
    },
    {
      title: "Cardiac Care Nursing Diploma",
      titleAr: "دبلوم تمريض العناية القلبية",
    },
    {
      title: "Neonatal Critical Care Nursing Diploma",
      titleAr: "دبلوم تمريض العناية الحرجة لحديثي الولادة",
    },
    {
      title: "Adult Critical Care Nursing Diploma",
      titleAr: "دبلوم تمريض العناية الحرجة لدى الكبار",
    },
  ],
};

/** Rich class row: English/Arabic titles, slug, and per-program salary bands. */
const DENTISTRY_CLASS_DOCUMENT = {
  title: "Dentistry",
  titleAr: "طب الأسنان",
  slug: "dentistry",
  salaryRangeType: "annual_gross_estimate",
  items: [
    {
      title: "Subspecialty in Dental Implants",
      titleAr: "الاختصاص الدقيق الفرعي في زراعة الأسنان",
      salaryRanges: {
        ksa: { currency: "SAR", min: 280000, max: 650000 },
        gcc: { currency: "USD", min: 85000, max: 210000 },
        uk: { currency: "GBP", min: 70000, max: 180000 },
        us: { currency: "USD", min: 220000, max: 420000 },
      },
    },
    {
      title: "Advanced Diploma in Oral Health and Dental Care",
      titleAr: "دبلوم صحة الفم و رعاية الأسنان المتقدم",
      salaryRanges: {
        ksa: { currency: "SAR", min: 70000, max: 180000 },
        gcc: { currency: "USD", min: 25000, max: 65000 },
        uk: { currency: "GBP", min: 30000, max: 50000 },
        us: { currency: "USD", min: 70000, max: 120000 },
      },
    },
    {
      title: "Advanced General Dentistry Diploma",
      titleAr: "دبلوم طب الأسنان العام المتقدم",
      salaryRanges: {
        ksa: { currency: "SAR", min: 100000, max: 360000 },
        gcc: { currency: "USD", min: 45000, max: 130000 },
        uk: { currency: "GBP", min: 52000, max: 112000 },
        us: { currency: "USD", min: 150000, max: 260000 },
      },
    },
    {
      title: "Family Dentistry Diploma",
      titleAr: "دبلوم طب أسنان الأسرة",
      salaryRanges: {
        ksa: { currency: "SAR", min: 100000, max: 330000 },
        gcc: { currency: "USD", min: 42000, max: 120000 },
        uk: { currency: "GBP", min: 52000, max: 110000 },
        us: { currency: "USD", min: 145000, max: 250000 },
      },
    },
    {
      title: "Orthodontics and Dentofacial Orthopedics Specialty",
      titleAr: "الاختصاص الرئيس في تقويم الأسنان و عظام الوجه و الفكين",
      salaryRanges: {
        ksa: { currency: "SAR", min: 320000, max: 750000 },
        gcc: { currency: "USD", min: 90000, max: 230000 },
        uk: { currency: "GBP", min: 85000, max: 200000 },
        us: { currency: "USD", min: 250000, max: 450000 },
      },
    },
    {
      title: "Restorative Dentistry Specialty",
      titleAr: "الاختصاص الرئيس في طب إصلاح الأسنان",
      salaryRanges: {
        ksa: { currency: "SAR", min: 220000, max: 520000 },
        gcc: { currency: "USD", min: 70000, max: 170000 },
        uk: { currency: "GBP", min: 65000, max: 160000 },
        us: { currency: "USD", min: 200000, max: 360000 },
      },
    },
    {
      title: "Prosthodontics Specialty",
      titleAr: "الاختصاص الرئيس في طب تعويضات الأسنان",
      salaryRanges: {
        ksa: { currency: "SAR", min: 270000, max: 650000 },
        gcc: { currency: "USD", min: 80000, max: 200000 },
        uk: { currency: "GBP", min: 70000, max: 180000 },
        us: { currency: "USD", min: 220000, max: 400000 },
      },
    },
    {
      title: "Periodontology Specialty",
      titleAr: "الاختصاص الرئيس في أمراض وجراحة اللثة",
      salaryRanges: {
        ksa: { currency: "SAR", min: 260000, max: 620000 },
        gcc: { currency: "USD", min: 80000, max: 200000 },
        uk: { currency: "GBP", min: 70000, max: 175000 },
        us: { currency: "USD", min: 220000, max: 410000 },
      },
    },
    {
      title: "Pediatric Dentistry Specialty",
      titleAr: "الاختصاص الرئيس في طب أسنان الأطفال",
      salaryRanges: {
        ksa: { currency: "SAR", min: 240000, max: 560000 },
        gcc: { currency: "USD", min: 75000, max: 185000 },
        uk: { currency: "GBP", min: 65000, max: 160000 },
        us: { currency: "USD", min: 210000, max: 390000 },
      },
    },
    {
      title: "Oral Medicine and Oral Pathology Specialty",
      titleAr: "الاختصاص الرئيس في طب وأمراض الفم",
      salaryRanges: {
        ksa: { currency: "SAR", min: 220000, max: 520000 },
        gcc: { currency: "USD", min: 70000, max: 170000 },
        uk: { currency: "GBP", min: 65000, max: 155000 },
        us: { currency: "USD", min: 190000, max: 350000 },
      },
    },
    {
      title: "Oral and Maxillofacial Surgery Specialty",
      titleAr: "الاختصاص الرئيس في جراحة الفم والوجه والفكين",
      salaryRanges: {
        ksa: { currency: "SAR", min: 380000, max: 900000 },
        gcc: { currency: "USD", min: 110000, max: 280000 },
        uk: { currency: "GBP", min: 100000, max: 220000 },
        us: { currency: "USD", min: 300000, max: 600000 },
      },
    },
    {
      title: "Family Dentistry Specialty",
      titleAr: "الاختصاص الرئيس في طب أسنان الأسرة",
      salaryRanges: {
        ksa: { currency: "SAR", min: 160000, max: 420000 },
        gcc: { currency: "USD", min: 55000, max: 150000 },
        uk: { currency: "GBP", min: 55000, max: 130000 },
        us: { currency: "USD", min: 170000, max: 300000 },
      },
    },
    {
      title: "Endodontics Specialty",
      titleAr: "الاختصاص الرئيس في طب جذور وعصب الأسنان",
      salaryRanges: {
        ksa: { currency: "SAR", min: 280000, max: 700000 },
        gcc: { currency: "USD", min: 85000, max: 220000 },
        uk: { currency: "GBP", min: 75000, max: 190000 },
        us: { currency: "USD", min: 240000, max: 450000 },
      },
    },
  ],
};

const DENTISTRY_CLASS = {
  class: "طب الأسنان",
  programs: DENTISTRY_CLASS_DOCUMENT.items.map(({ title, titleAr }) => ({ title, titleAr })),
};

const PHYSICIAN_CLASS = {
  class: "الطب البشري",
  programs: [
    {
      title: "Interventional Neuroradiology Subspecialty",
      titleAr: "الاختصاص الدقيق الفرعي في برنامج الأشعة العصبية التداخلية",
    },
    {
      title: "Lateral Skull Base Otologic Neurosurgery Subspecialty",
      titleAr: "الاختصاص الدقيق الفرعي في جراحة الأذن وأعصابها وقاع الجمجمة الجانبي",
    },
    {
      title: "Clinical Researcher Diploma",
      titleAr: "دبلوم الباحث الإكلينيكي",
    },
    {
      title: "Breast Diagnostic Imaging Subspecialty",
      titleAr: "الاختصاص الدقيق الفرعي في الأشعة التشخيصية للثدي",
    },
    {
      title: "Regional Anesthesia Subspecialty",
      titleAr: "الاختصاص الدقيق الفرعي في التخدير المناطقي",
    },
    {
      title: "Upper GI and Bariatric Minimally Invasive Surgery Subspecialty",
      titleAr: "الاختصاص الدقيق الفرعي في الجراحات طفيفة التوغل للجهاز الهضمي العلوي والسمنة",
    },
    {
      title: "Obesity Medicine Subspecialty",
      titleAr: "الاختصاص الدقيق الفرعي في طب السمنة",
    },
    {
      title: "Trauma and Acute Care Surgery Subspecialty",
      titleAr: "الاختصاص الدقيق الفرعي في جراحة الإصابات والرعاية المستعجلة",
    },
    {
      title: "Neurorehabilitation Physical Therapy Subspecialty",
      titleAr: "الاختصاص الدقيق الرئيس في العلاج الطبيعي لمرضى الأعصاب",
    },
    {
      title: "Advanced Cardiac Imaging Subspecialty",
      titleAr: "الاختصاص الدقيق الفرعي في التصوير المتقدم لأمراض القلب",
    },
    {
      title: "Burn Surgery Subspecialty",
      titleAr: "الاختصاص الدقيق الفرعي في جراحة الحروق",
    },
    {
      title: "Microvascular Reconstructive Surgery Subspecialty",
      titleAr: "الاختصاص الدقيق الرئيس في الجراحة الترميمية المجهرية",
    },
    {
      title: "Hematopathology Specialty",
      titleAr: "الاختصاص الرئيس في علم أمراض الدم",
    },
    {
      title: "Pediatric Surgery Subspecialty",
      titleAr: "الاختصاص الدقيق الرئيس في جراحة الأطفال",
    },
    {
      title: "Rhinology and Skull Base Surgery Subspecialty",
      titleAr: "الاختصاص الدقيق الفرعي في جراحة الأنف والجيوب الأنفية وقاع الجمجمة",
    },
    {
      title: "Head and Neck Oncology Surgery Subspecialty",
      titleAr: "الاختصاص الدقيق الرئيس في جراحة أورام الرأس والعنق",
    },
    {
      title: "Lifestyle Medicine Subspecialty",
      titleAr: "الاختصاص الدقيق الفرعي في طب نمط الحياة",
    },
    {
      title: "Adult Critical Care Medicine Specialty",
      titleAr: "الاختصاص الرئيس في طب العناية الحرجة لدى الكبار",
    },
    {
      title: "Home Health Care Medicine Diploma",
      titleAr: "دبلوم طب الرعاية الصحية المنزلية",
    },
    {
      title: "Cardiac Electrophysiology Subspecialty",
      titleAr: "الاختصاص الدقيق الرئيس في طب كهروفسيولوجيا وتنظيم القلب",
    },
    {
      title: "Pediatric Stem Cell Transplantation Subspecialty",
      titleAr: "الاختصاص الدقيق الفرعي في طب زراعة الخلايا الجذعية لدى الأطفال",
    },
    {
      title: "Kidney Transplant Medicine Subspecialty",
      titleAr: "الاختصاص الدقيق الرئيس في طب زراعة الكلى",
    },
    {
      title: "Male Infertility and Andrology Surgery Subspecialty",
      titleAr: "الاختصاص الدقيق الفرعي في جراحة العقم وأمراض الذكورة",
    },
    {
      title: "Women's Health Medicine Subspecialty",
      titleAr: "الاختصاص الدقيق الفرعي في طب صحة المرأة",
    },
    {
      title: "Pediatrics Diploma",
      titleAr: "دبلوم طب الأطفال",
    },
    {
      title: "Thoracic Surgery Subspecialty",
      titleAr: "الاختصاص الدقيق الرئيس في جراحة الصدر",
    },
    {
      title: "Emergency Medicine Diploma",
      titleAr: "دبلوم طب الطوارئ",
    },
    {
      title: "Urologic Neurosurgery Subspecialty",
      titleAr: "الاختصاص الدقيق الفرعي في جراحة أعصاب المسالك البولية",
    },
    {
      title: "Adult Cardiac Critical Care Subspecialty",
      titleAr: "الاختصاص الدقيق الفرعي في طب العناية الحرجة للقلب لدى الكبار",
    },
    {
      title: "Hospital Medicine Subspecialty",
      titleAr: "الاختصاص الدقيق الفرعي في طب المستشفيات",
    },
    {
      title: "Primary Care Mental Health Subspecialty",
      titleAr: "الاختصاص الدقيق الفرعي في طب الرعاية الصحية النفسية الأولية",
    },
    {
      title: "Sleep Medicine Subspecialty",
      titleAr: "الاختصاص الدقيق الرئيس في طب النوم",
    },
    {
      title: "Child Development and Behavior Subspecialty",
      titleAr: "الاختصاص الدقيق الرئيس في طب تطور وسلوك الأطفال",
    },
    {
      title: "Disaster and Emergency Medical Services Subspecialty",
      titleAr: "الاختصاص الدقيق الرئيس في الخدمات الطبية الطارئة وطب الكوارث",
    },
    {
      title: "Kidney Transplant Surgery Subspecialty",
      titleAr: "الاختصاص الدقيق الفرعي في جراحة زراعة الكلى",
    },
    {
      title: "Geriatric Medicine Subspecialty",
      titleAr: "الاختصاص الدقيق الفرعي في طب الشيخوخة",
    },
    {
      title: "Pediatric Cardiac Critical Care Subspecialty",
      titleAr: "الاختصاص الدقيق الفرعي في العناية الحرجة لقلب الأطفال",
    },
    {
      title: "Pediatric Orthopedic Surgery Subspecialty",
      titleAr: "الاختصاص الدقيق الفرعي في جراحة العظام لدى الأطفال",
    },
    {
      title: "Liver Transplant Medicine Subspecialty",
      titleAr: "الاختصاص الدقيق الرئيس في طب زراعة الكبد",
    },
    {
      title: "Therapeutic Endoscopy Subspecialty",
      titleAr: "الاختصاص الدقيق الفرعي في المناظير العلاجية",
    },
    {
      title: "Dialysis Vascular Access Subspecialty",
      titleAr: "الاختصاص الدقيق الفرعي في التوصيلات الوعائية لمرضى الغسيل الكلوي",
    },
    {
      title: "Urinary Tract Reconstruction Subspecialty",
      titleAr: "الاختصاص الدقيق الفرعي في ترميم مجرى البول",
    },
    {
      title: "Addiction Psychiatry Subspecialty",
      titleAr: "الاختصاص الدقيق الرئيس في الطب النفسي للإدمان",
    },
    {
      title: "Movement Disorders Neurology Subspecialty",
      titleAr: "الاختصاص الدقيق الفرعي في طب الأعصاب لاعتلالات الحركة",
    },
    {
      title: "Clinical Neurophysiology Subspecialty",
      titleAr: "الاختصاص الدقيق الرئيس في طب فسيولوجيا الأعصاب",
    },
    {
      title: "Adult Interventional Cardiology Subspecialty",
      titleAr: "الاختصاص الدقيق الرئيس في طب القلب التداخلي لدى الكبار",
    },
    {
      title: "Neuro-Ophthalmology Subspecialty",
      titleAr: "الاختصاص الدقيق الفرعي في طب وجراحة أعصاب العيون",
    },
    {
      title: "Vitreoretinal Medicine Subspecialty",
      titleAr: "الاختصاص الدقيق الفرعي في طب الشبكية والعنبية",
    },
    {
      title: "Glaucoma Subspecialty",
      titleAr: "الاختصاص الدقيق الفرعي في الجلوكوما",
    },
    {
      title: "Retina and Vitreous Surgery Subspecialty",
      titleAr: "الاختصاص الدقيق الفرعي في أمراض وجراحة الشبكية والجسم الزجاجي",
    },
    {
      title: "Oculoplastic and Orbital Surgery Subspecialty",
      titleAr: "الاختصاص الدقيق الفرعي في الجراحات التقويمية والتجميلية للعين والحجاج",
    },
    {
      title: "Cornea and External Eye Surgery Subspecialty",
      titleAr: "الاختصاص الدقيق الفرعي في جراحة القرنية والعين الخارجية",
    },
    {
      title: "Lymphoma and Plasma Cell Disorders Subspecialty",
      titleAr: "الاختصاص الدقيق الفرعي في اضطرابات الخلايا اللمفاوية والبلازما",
    },
    {
      title: "Orthopedic Trauma Surgery Subspecialty",
      titleAr: "الاختصاص الدقيق الفرعي في جراحة إصابات العظام",
    },
    {
      title: "Advanced General Pediatrics Subspecialty",
      titleAr: "الاختصاص الدقيق الرئيس في طب الأطفال العام المتقدم",
    },
    {
      title: "Adult Echocardiography Subspecialty",
      titleAr: "الاختصاص الدقيق الرئيس في التصوير بالموجات فوق الصوتية للقلب لدى الكبار",
    },
    {
      title: "Breast Diagnostic Radiology Subspecialty",
      titleAr: "الاختصاص الدقيق الفرعي في الأشعة التشخيصية للثدي",
    },
    {
      title: "Pain Medicine Subspecialty",
      titleAr: "الاختصاص الدقيق الرئيس في طب الألم",
    },
    {
      title: "Neuroradiology Subspecialty",
      titleAr: "الاختصاص الدقيق الرئيس في الأشعة التشخيصية العصبية",
    },
    {
      title: "Interventional Radiology Subspecialty",
      titleAr: "الاختصاص الدقيق الرئيس في القسطرة والأشعة التداخلية",
    },
    {
      title: "Adult Oncology Subspecialty",
      titleAr: "الاختصاص الدقيق الرئيس في طب الأورام لدى الكبار",
    },
    {
      title: "Adult Hematology Subspecialty",
      titleAr: "الاختصاص الدقيق الرئيس في طب الدم لدى الكبار",
    },
    {
      title: "Pediatric Otolaryngology Subspecialty",
      titleAr: "الاختصاص الدقيق الرئيس في جراحة الأنف والأذن والحنجرة لدى الأطفال",
    },
    {
      title: "Adult Endocrinology Subspecialty",
      titleAr: "الاختصاص الدقيق الرئيس في طب الغدد الصماء والاستقلاب لدى الكبار",
    },
    {
      title: "Obstetrics and Gynecology Specialty",
      titleAr: "الاختصاص الرئيس في طب وجراحة أمراض النساء والولادة",
    },
    {
      title: "Diagnostic Radiology Specialty",
      titleAr: "الاختصاص الرئيس في طب الأشعة التشخيصية",
    },
    {
      title: "Pediatric Neurology Specialty",
      titleAr: "الاختصاص الرئيس في طب الأعصاب لدى الأطفال",
    },
    {
      title: "Cardiac Surgery Specialty",
      titleAr: "الاختصاص الرئيس في جراحة القلب",
    },
    {
      title: "Anatomic Pathology Specialty",
      titleAr: "الاختصاص الرئيس في علم الأمراض التشريحي",
    },
    {
      title: "Radiation Oncology Specialty",
      titleAr: "الاختصاص الرئيس في طب الأورام الإشعاعي",
    },
    {
      title: "Adult Critical Care Subspecialty",
      titleAr: "الاختصاص الدقيق الرئيس في طب العناية الحرجة لدى الكبار",
    },
    {
      title: "Pediatric Cardiology Subspecialty",
      titleAr: "الاختصاص الدقيق الرئيس في طب القلب لدى الأطفال",
    },
    {
      title: "Pediatric Surgery Specialty",
      titleAr: "الاختصاص الرئيس في جراحة الأطفال",
    },
    {
      title: "Neonatal-Perinatal Medicine Subspecialty",
      titleAr: "الاختصاص الدقيق الرئيس في طب الأجنة والأطفال حديثي الولادة",
    },
    {
      title: "Pediatric Echocardiography Subspecialty",
      titleAr: "الاختصاص الدقيق الفرعي في التصوير بالموجات فوق الصوتية للقلب لدى الأطفال",
    },
    {
      title: "Urologic Surgery Specialty",
      titleAr: "الاختصاص الرئيس في جراحة المسالك البولية",
    },
    {
      title: "Pediatric Urologic Surgery Subspecialty",
      titleAr: "الاختصاص الدقيق الرئيس في جراحة المسالك البولية لدى الأطفال",
    },
    {
      title: "Psychiatry Specialty",
      titleAr: "الاختصاص الرئيس في الطب النفسي",
    },
    {
      title: "Child and Adolescent Psychiatry Subspecialty",
      titleAr: "الاختصاص الدقيق الرئيس في الطب النفسي لدى الأطفال والمراهقين",
    },
    {
      title: "Consultation-Liaison Psychiatry Subspecialty",
      titleAr: "الاختصاص الدقيق الرئيس في الطب النفسي الجسدي لدى الكبار",
    },
    {
      title: "Preventive Medicine Specialty",
      titleAr: "الاختصاص الرئيس في الطب الوقائي",
    },
    {
      title: "Plastic and Reconstructive Surgery Specialty",
      titleAr: "الاختصاص الرئيس في جراحة التجميل والترميم",
    },
    {
      title: "Physical Medicine and Rehabilitation Specialty",
      titleAr: "الاختصاص الرئيس في الطب الطبيعي وإعادة التأهيل",
    },
    {
      title: "Pediatric Pulmonology Subspecialty",
      titleAr: "الاختصاص الدقيق الرئيس في طب الجهاز التنفسي لدى الأطفال",
    },
    {
      title: "Pediatric Nephrology Subspecialty",
      titleAr: "الاختصاص الدقيق الرئيس في طب الكلى لدى الأطفال",
    },
    {
      title: "Pediatric Infectious Diseases Subspecialty",
      titleAr: "الاختصاص الدقيق الرئيس في طب الأمراض المعدية لدى الأطفال",
    },
    {
      title: "Pediatric Emergency Medicine Subspecialty",
      titleAr: "الاختصاص الدقيق الرئيس في طب الطوارئ لدى الأطفال",
    },
    {
      title: "Pediatrics Specialty",
      titleAr: "الاختصاص الرئيس في طب الأطفال",
    },
    {
      title: "Pediatric Rheumatology Subspecialty",
      titleAr: "الاختصاص الدقيق الرئيس في طب أمراض الروماتيزم لدى الأطفال",
    },
    {
      title: "Pediatric Hematology-Oncology Subspecialty",
      titleAr: "الاختصاص الدقيق الرئيس في طب الدم والأورام لدى الأطفال",
    },
    {
      title: "Pediatric Gastroenterology Subspecialty",
      titleAr: "الاختصاص الدقيق الرئيس في طب الجهاز الهضمي لدى الأطفال",
    },
    {
      title: "Pediatric Endocrinology Subspecialty",
      titleAr: "الاختصاص الدقيق الرئيس في طب الغدد الصماء والاستقلاب لدى الأطفال",
    },
    {
      title: "Pediatric Allergy and Immunology Subspecialty",
      titleAr: "الاختصاص الدقيق الرئيس في طب الحساسية والمناعة لدى الأطفال",
    },
    {
      title: "Medical Genetics and Genomics Subspecialty",
      titleAr: "الاختصاص الدقيق الرئيس في الوراثة الطبية وعلم الجينوم",
    },
    {
      title: "Otolaryngology–Head and Neck Surgery Specialty",
      titleAr: "الاختصاص الرئيس في جراحة الأنف والأذن والحنجرة والرأس والعنق",
    },
    {
      title: "Adult Reconstructive Orthopedic Surgery Subspecialty",
      titleAr: "الاختصاص الدقيق الفرعي في جراحة العظام الترميمية لدى الكبار",
    },
    {
      title: "Orthopedic Surgery Specialty",
      titleAr: "الاختصاص الرئيس في جراحة العظام",
    },
    {
      title: "Spinal Surgery Subspecialty",
      titleAr: "الاختصاص الدقيق الرئيس في جراحة العمود الفقري",
    },
    {
      title: "Musculoskeletal Oncology Surgery Subspecialty",
      titleAr: "الاختصاص الدقيق الفرعي في جراحة الأورام للجهاز الهيكلي العضلي",
    },
    {
      title: "Sports Medicine and Arthroscopic Surgery Subspecialty",
      titleAr: "الاختصاص الدقيق الرئيس في مناظير المفاصل وجراحة إصابات العظام الرياضية",
    },
    {
      title: "Pediatric Ophthalmology and Strabismus Subspecialty",
      titleAr: "الاختصاص الدقيق الرئيس في طب وجراحة العيون لدى الأطفال والحول",
    },
    {
      title: "Ophthalmology Specialty",
      titleAr: "الاختصاص الرئيس في طب وجراحة العيون",
    },
    {
      title: "Female Pelvic Medicine and Reconstructive Surgery Subspecialty",
      titleAr: "الاختصاص الدقيق الرئيس في جراحة المسالك البولية وترميم الحوض النسائية",
    },
    {
      title: "Infertility and Assisted Reproduction Subspecialty",
      titleAr: "الاختصاص الدقيق الفرعي في طب العقم وجراحة الإخصاب",
    },
    {
      title: "Maternal-Fetal Medicine Subspecialty",
      titleAr: "الاختصاص الدقيق الفرعي في طب الأمومة والجنين",
    },
    {
      title: "Gynecologic Oncology Surgery Subspecialty",
      titleAr: "الاختصاص الدقيق الرئيس في جراحة الأورام النسائية",
    },
    {
      title: "Skull Base Neurosurgery Subspecialty",
      titleAr: "الاختصاص الدقيق الفرعي في جراحة الأعصاب لقاع الجمجمة",
    },
    {
      title: "Pediatric Neurosurgery Subspecialty",
      titleAr: "الاختصاص الدقيق الفرعي في جراحة المخ والأعصاب لدى الأطفال",
    },
    {
      title: "Neurosurgery Specialty",
      titleAr: "الاختصاص الرئيس في جراحة المخ والأعصاب",
    },
    {
      title: "Stroke and Cerebrovascular Subspecialty",
      titleAr: "الاختصاص الدقيق الرئيس في السكتة الدماغية (الجلطات)",
    },
    {
      title: "Adult Neurology Specialty",
      titleAr: "الاختصاص الرئيس في طب الأعصاب لدى الكبار",
    },
    {
      title: "Epilepsy and Clinical Neurophysiology Subspecialty",
      titleAr: "الاختصاص الدقيق الفرعي في طب الصرع وتخطيط الدماغ",
    },
    {
      title: "Adult Rheumatology Subspecialty",
      titleAr: "الاختصاص الدقيق الرئيس في طب أمراض الروماتيزم لدى الكبار",
    },
    {
      title: "Internal Medicine Specialty",
      titleAr: "الاختصاص الرئيس في الطب الباطني",
    },
    {
      title: "Diabetes Medicine Subspecialty",
      titleAr: "الاختصاص الدقيق الفرعي في طب داء السكري",
    },
    {
      title: "Adult Allergy and Immunology Subspecialty",
      titleAr: "الاختصاص الدقيق الرئيس في طب الحساسية والمناعة لدى الكبار",
    },
    {
      title: "Adult Pulmonology Subspecialty",
      titleAr: "الاختصاص الدقيق الرئيس في طب الجهاز التنفسي لدى الكبار",
    },
    {
      title: "Adult Nephrology Subspecialty",
      titleAr: "الاختصاص الدقيق الرئيس في طب الكلى لدى الكبار",
    },
    {
      title: "Adult Infectious Diseases Subspecialty",
      titleAr: "الاختصاص الدقيق الرئيس في الأمراض المعدية لدى الكبار",
    },
    {
      title: "Adult Gastroenterology Subspecialty",
      titleAr: "الاختصاص الدقيق الرئيس في طب الجهاز الهضمي لدى الكبار",
    },
    {
      title: "Adult Cardiology Subspecialty",
      titleAr: "الاختصاص الدقيق الرئيس في طب القلب لدى الكبار",
    },
    {
      title: "Palliative Care Subspecialty",
      titleAr: "الاختصاص الدقيق الرئيس في طب الرعاية التلطيفية",
    },
    {
      title: "Vascular Surgery Subspecialty",
      titleAr: "الاختصاص الدقيق الرئيس في جراحة الأوعية الدموية",
    },
    {
      title: "Hepatobiliary and Pancreatic Surgery Subspecialty",
      titleAr: "الاختصاص الدقيق الرئيس في جراحة الكبد والقنوات الصفراوية والبنكرياس",
    },
    {
      title: "General Surgery Specialty",
      titleAr: "الاختصاص الرئيس في الجراحة العامة",
    },
    {
      title: "Breast and Endocrine Oncology Surgery Subspecialty",
      titleAr: "الاختصاص الدقيق الرئيس في جراحة أورام الثدي والغدد الصماء",
    },
    {
      title: "Colon and Rectal Surgery Subspecialty",
      titleAr: "الاختصاص الدقيق الرئيس في جراحة القولون والمستقيم",
    },
    {
      title: "Forensic Medicine Specialty",
      titleAr: "الاختصاص الرئيس في الطب الشرعي",
    },
    {
      title: "Family Medicine Specialty",
      titleAr: "الاختصاص الرئيس في طب الأسرة",
    },
    {
      title: "Emergency Medicine Specialty",
      titleAr: "الاختصاص الرئيس في طب الطوارئ",
    },
    {
      title: "Pediatric Diagnostic Radiology Subspecialty",
      titleAr: "الاختصاص الدقيق الرئيس في الأشعة التشخيصية لدى الأطفال",
    },
    {
      title: "Nuclear Medicine Subspecialty",
      titleAr: "الاختصاص الدقيق الرئيس في الطب النووي",
    },
    {
      title: "Musculoskeletal Diagnostic Radiology Subspecialty",
      titleAr: "الاختصاص الدقيق الفرعي في الأشعة التشخيصية للجهاز الهيكلي العضلي",
    },
    {
      title: "Cardiothoracic Diagnostic Radiology Subspecialty",
      titleAr: "الاختصاص الدقيق الفرعي في الأشعة التشخيصية للقلب والصدر",
    },
    {
      title: "Whole-Body Imaging Subspecialty",
      titleAr: "الاختصاص الدقيق الفرعي في تصوير الجسم بالأشعة",
    },
    {
      title: "Dermatology Specialty",
      titleAr: "الاختصاص الرئيس في طب الأمراض الجلدية",
    },
    {
      title: "Adult Stem Cell Transplantation Subspecialty",
      titleAr: "الاختصاص الدقيق الفرعي في زراعة الخلايا الجذعية لدى الكبار",
    },
    {
      title: "Pediatric Critical Care Subspecialty",
      titleAr: "الاختصاص الدقيق الرئيس في طب العناية الحرجة لدى الأطفال",
    },
    {
      title: "Renal Pathology Subspecialty",
      titleAr: "الاختصاص الدقيق الفرعي في علم الأمراض للكلى",
    },
    {
      title: "Breast and Gynecologic Pathology Subspecialty",
      titleAr: "الاختصاص الدقيق الفرعي في علم الأمراض للثدي والجهاز التناسلي الأنثوي",
    },
    {
      title: "Soft Tissue and Bone Pathology Subspecialty",
      titleAr: "الاختصاص الدقيق الفرعي في علم الأمراض للأنسجة الرخوية والعظام",
    },
    {
      title: "Pediatric Anesthesiology Subspecialty",
      titleAr: "الاختصاص الدقيق الرئيس في طب تخدير الأطفال",
    },
    {
      title: "Obstetric Anesthesiology Subspecialty",
      titleAr: "الاختصاص الدقيق الفرعي في طب تخدير النساء والولادة",
    },
    {
      title: "Cardiac Anesthesiology Subspecialty",
      titleAr: "الاختصاص الدقيق الرئيس في طب تخدير القلب",
    },
    {
      title: "Anesthesiology Specialty",
      titleAr: "الاختصاص الرئيس في طب التخدير",
    },
  ],
};

export const addMedicalSciencesPrograms = mutation({
  args: {},
  handler: async (ctx) => {
    const existing = await ctx.db
      .query("programClasses")
      .withIndex("by_class", (q) => q.eq("class", MEDICAL_SCIENCES_CLASS.class))
      .unique();

    if (existing) {
      await ctx.db.patch(existing._id, {
        programs: MEDICAL_SCIENCES_CLASS.programs,
      });
      return { status: "updated", id: existing._id };
    }

    const id = await ctx.db.insert("programClasses", MEDICAL_SCIENCES_CLASS);
    return { status: "inserted", id };
  },
});

export const addNursingPrograms = mutation({
  args: {},
  handler: async (ctx) => {
    const existing = await ctx.db
      .query("programClasses")
      .withIndex("by_class", (q) => q.eq("class", NURSING_CLASS.class))
      .unique();

    if (existing) {
      await ctx.db.patch(existing._id, {
        programs: NURSING_CLASS.programs,
      });
      return { status: "updated", id: existing._id };
    }

    const id = await ctx.db.insert("programClasses", NURSING_CLASS);
    return { status: "inserted", id };
  },
});

export const addDentistryPrograms = mutation({
  args: {},
  handler: async (ctx) => {
    const existing = await ctx.db
      .query("programClasses")
      .withIndex("by_class", (q) => q.eq("class", DENTISTRY_CLASS.class))
      .unique();

    if (existing) {
      await ctx.db.patch(existing._id, {
        programs: DENTISTRY_CLASS.programs,
      });
      return { status: "updated", id: existing._id };
    }

    const id = await ctx.db.insert("programClasses", DENTISTRY_CLASS);
    return { status: "inserted", id };
  },
});

export const upsertDentistryClass = mutation({
  args: {},
  handler: async (ctx) => {
    const existing = await ctx.db
      .query("classes")
      .withIndex("by_slug", (q) => q.eq("slug", DENTISTRY_CLASS_DOCUMENT.slug))
      .unique();

    if (existing) {
      await ctx.db.patch(existing._id, DENTISTRY_CLASS_DOCUMENT);
      return { status: "updated", id: existing._id };
    }

    const id = await ctx.db.insert("classes", DENTISTRY_CLASS_DOCUMENT);
    return { status: "inserted", id };
  },
});

export const addPhysicianPrograms = mutation({
  args: {},
  handler: async (ctx) => {
    const existing = await ctx.db
      .query("programClasses")
      .withIndex("by_class", (q) => q.eq("class", PHYSICIAN_CLASS.class))
      .unique();

    if (existing) {
      await ctx.db.patch(existing._id, {
        programs: PHYSICIAN_CLASS.programs,
      });
      return { status: "updated", id: existing._id };
    }

    const id = await ctx.db.insert("programClasses", PHYSICIAN_CLASS);
    return { status: "inserted", id };
  },
});
