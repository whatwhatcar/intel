const translateData = {
  en: {
    dir: "ltr",
    timelineTitle: "Timeline",
    items: [
      "Intel is founded on July 18 by Robert Noyce and Gordon Moore.",
      "Launched the Intel 4004, the world’s first microprocessor.",
      "Introduced the 8086 chip, establishing the x86 architecture standard for modern PCs.",
      "IBM chose Intel’s processor for the first IBM PC, making Intel the 'brain' of the computer revolution.",
      "Intel stopped making memory chips (DRAM) to focus entirely on processors—a 'bet the company' move.",
      "Launched the 'Intel Inside' campaign, turning a component into a globally recognized brand.",
      "Switched to Core architecture (i3, i5, i7), focusing on power efficiency over raw speed.",
      "Heavy focus on AI PCs and the '5 nodes in 4 years' manufacturing blitz to return to the #1 spot."
    ],
    colHeaders: ["Client Computing", "Data Center & AI", "Foundry Services"],
    colSub: ["Intel Core™ Ultra", "Xeon® Scalable", "Intel 18A Node"],
    colDetails: [
      "Powering the next generation of AI-integrated personal laptops with built-in NPUs.",
      "Scaling enterprise AI workloads and cloud infrastructure with Gaudi® 3 accelerators.",
      "The backbone of Intel’s strategy, providing world-class manufacturing globally."
    ],
    subTitle: "Stay Powered by Innovation",
    subText: "Sign up for the latest updates on AI and hardware.",
    subBtn: "Subscribe",
    readMore: "Read More"
  },
  es: {
    dir: "rtl",
    timelineTitle: "Cronología",
    items: [
      "تأسست شركة إنتل في 18 يوليو على يد روبرت نويس وغوردون مور.",
      "إطلاق معالج Intel 4004، أول معالج دقيق في العالم.",
      "تقديم شريحة 8086، التي أرست معيار هندسة x86 لأجهزة الكمبيوتر الحديثة.",
      "اختارت شركة IBM معالج إنتل لأول جهاز كمبيوتر شخصي من IBM.",
      "توقفت إنتل عن تصنيع شرائح الذاكرة (DRAM) للتركيز بالكامل على المعالجات.",
      "إطلاق حملة 'Intel Inside'، مما حول المكون إلى علامة تجارية معروفة عالمياً.",
      "التحول إلى بنية Core، مع التركيز على كفاءة الطاقة بدلاً من السرعة الخام فقط.",
      "تركيز كبير على أجهزة الكمبيوتر المدعمة بالذكاء الاصطناعي لاستعادة المركز الأول."
    ],
    colHeaders: ["Informática de Cliente", "Centro de Datos y IA", "Servicios de Fundición"],
    colSub: ["Intel Core™ Ultra", "Xeon® Scalable", "Nodo Intel 18A"],
    colDetails: [
      "Potenciando la próxima generación de portátiles personales integrados con IA.",
      "Escalando cargas de trabajo de IA y nube con aceleradores Gaudi® 3.",
      "La base de la estrategia de Intel, ofreciendo fabricación de clase mundial."
    ],
    subTitle: "Mantente Impulsado por la Innovación",
    subText: "Regístrate para recibir las últimas actualizaciones sobre IA.",
    subBtn: "Suscribirse",
    readMore: "Leer más"
  }
  // You can add 'ar' (Arabic) here using the same structure!
};

function switchLanguage(lang) {
  const data = translateData[lang];
  if (!data) return;

  document.documentElement.dir = data.dir;
  document.documentElement.lang = lang;

  // 1. Titles & Timeline
  document.querySelector('.timeline-title').textContent = data.timelineTitle;

  // 2. Three Columns
  const headers = document.querySelectorAll('.column-header');
  const subs = document.querySelectorAll('.column-subheader');
  const details = document.querySelectorAll('.column-details');
  const readBtns = document.querySelectorAll('.btn-intel-action');

  const cards = document.querySelectorAll('.card-description');



  headers.forEach((h, i) => h.textContent = data.colHeaders[i]);
  subs.forEach((s, i) => s.textContent = data.colSub[i]);
  details.forEach((d, i) => d.textContent = data.colDetails[i]);

  cards.forEach((d, i) => d.textContent = data.items[i]);


  // Update all "Read More" buttons (excluding the Subscribe button)
  readBtns.forEach((b) => {
    if (b.type === "button") b.textContent = data.readMore;
  });

  // 3. Subscription Form
  document.querySelector('.section-title').textContent = data.subTitle;
  document.querySelector('.subscription-section .text-light-accessible').textContent = data.subText;
  document.querySelector('button[type="submit"]').textContent = data.subBtn;
}