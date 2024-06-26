const generalHealthData = [
   {
      id: 1,
      title: 'آیا از یک ماه گذشته تا به امروز احساس کرده اید که کاملاً خوب و سالم هستید؟',
      keys: [3, 2, 1, 0],
      values: ['به مراتب بیشتر از حد معمول','بیش از حد معمول','در حد معمول','اصلاً'],
   },
   {
      id: 2,
      title: 'آیا از یک ماه گذشته تا به امروز احساس کرده اید که به داروی تقویتی نیاز دارید؟',
      keys: [3, 2, 1, 0],
      values: ['به مراتب بیشتر از حد معمول','بیش از حد معمول','در حد معمول','اصلاً'],
   },
   {
      id: 3,
      title: 'آیا از یک ماه گذشته تا به امروز احساس ضعف و سستی کرده اید؟',
      keys: [3, 2, 1, 0],
      values: ['به مراتب بیشتر از حد معمول','بیش از حد معمول','در حد معمول','اصلاً'],
   },
   {
      id: 4,
      title: 'آیا از یک ماه گذشته تا به امروز احساس کرده اید که بیمار هستید؟',
      keys: [3, 2, 1, 0],
      values: ['به مراتب بیشتر از حد معمول','بیش از حد معمول','در حد معمول','اصلاً'],
   },
   {
      id: 5,
      title: 'آیا از یک ماه گذشته تا به امروز سر درد داشته اید؟',
      keys: [3, 2, 1, 0],
      values: ['به مراتب بیشتر از حد معمول','بیش از حد معمول','در حد معمول','اصلاً'],
   },
   {
      id: 6,
      title: 'آیا از یک ماه گذشته تا به امروز احساس کرده اید که سرتان را محکم با چیزی مثل دستمال بسته اید یا اینکه فشاری به سرتان وارد میشود؟',
      keys: [3, 2, 1, 0],
      values: ['به مراتب بیشتر از حد معمول','بیش از حد معمول','در حد معمول','اصلاً'],
   },
   {
      id: 7,
      title: 'آیا از یک ماه گذشته تا به امروز احساس کرده اید که بعضی وقتها بدنتان داغ و یا سرد می شود؟',
      keys: [3, 2, 1, 0],
      values: ['به مراتب بیشتر از حد معمول','بیش از حد معمول','در حد معمول','اصلاً'],
   },
   {
      id: 8,
      title: 'آیا از یک ماه گذشته تا به امروز اتفاق افتاده که بر اثر نگرانی دچار بی خوابی شده باشید؟',
      keys: [3, 2, 1, 0],
      values: ['به مراتب بیشتر از حد معمول','بیش از حد معمول','در حد معمول','اصلاً'],
   },
   {
      id: 9,
      title: 'آیا از یک ماه گذشته تا به امروز شب ها وسط خواب بیدار می شوید؟',
      keys: [3, 2, 1, 0],
      values: ['به مراتب بیشتر از حد معمول','بیش از حد معمول','در حد معمول','اصلاً'],
   },
   {
      id: 10,
      title: 'آیا از یک ماه گذشته تا به امروز احساس کرده اید که دائماً تحت فشار هستید؟',
      keys: [3, 2, 1, 0],
      values: ['به مراتب بیشتر از حد معمول','بیش از حد معمول','در حد معمول','اصلاً'],
   },
   {
      id: 11,
      title: 'آیا از یک ماه گذشته تا به امروز عصبانی و بد خلق شده اید؟',
      keys: [3, 2, 1, 0],
      values: ['به مراتب بیشتر از حد معمول','بیش از حد معمول','در حد معمول','اصلاً'],
   },
   {
      id: 12,
      title: 'آیا از یک ماه گذشته تا به امروز بدون هیچ دلیل قانع کننده ای هراسان و یا وحشت زده شده اید؟',
      keys: [3, 2, 1, 0],
      values: ['به مراتب بیشتر از حد معمول','بیش از حد معمول','در حد معمول','اصلاً'],
   },
   {
      id: 13,
      title: 'آیا از یک ماه گذشته تا به امروز متوجه شده اید که انجام هر کاری از توانایی شما خارج است؟',
      keys: [3, 2, 1, 0],
      values: ['به مراتب بیشتر از حد معمول','بیش از حد معمول','در حد معمول','اصلاً'],
   },
   {
      id: 14,
      title: 'آیا از یک ماه گذشته تا به امروز احساس کرده اید که در تمامی مدت عصبی هستید و دلشوره دارید؟',
      keys: [3, 2, 1, 0],
      values: ['به مراتب بیشتر از حد معمول','بیش از حد معمول','در حد معمول','اصلاً'],
   },
   {
      id: 15,
      title: 'آیا از یک ماه گذشته تا به امروز توانسته اید خودتان را مشغول و سرگرم نگه دارید؟',
      keys: [3, 2, 1, 0],
      values: ['به مراتب بیشتر از حد معمول','بیش از حد معمول','در حد معمول','اصلاً'],
   },
   {
      id: 16,
      title: 'آیا از یک ماه گذشته تا به امروز اتفاق افتاده که وقت بیشتری را صرف انجام کارها نمایید؟',
      keys: [3, 2, 1, 0],
      values: ['به مراتب بیشتر از حد معمول','بیش از حد معمول','در حد معمول','اصلاً'],
   },
   {
      id: 17,
      title: 'آیا از یک ماه گذشته تا به امروز بطور کلی احساس کرده اید که کارها را بخوبی انجام میدهید؟',
      keys: [3, 2, 1, 0],
      values: ['به مراتب بیشتر از حد معمول','بیش از حد معمول','در حد معمول','اصلاً'],
   },
   {
      id: 18,
      title: 'آیا از یک ماه گذشته تا به امروز از نحوه انجام کارهایتان احساس رضایت می کنید؟',
      keys: [3, 2, 1, 0],
      values: ['به مراتب بیشتر از حد معمول','بیش از حد معمول','در حد معمول','اصلاً'],
   },
   {
      id: 19,
      title: 'آیا از یک ماه گذشته تا به امروز احساس کرده اید که نقش مفیدی در انجام کارها بعهده دارید؟',
      keys: [3, 2, 1, 0],
      values: ['به مراتب بیشتر از حد معمول','بیش از حد معمول','در حد معمول','اصلاً'],
   },
   {
      id: 20,
      title: 'آیا از یک ماه گذشته تا به امروز توانایی تصمیم گیری درباره مسائل را داشته اید؟',
      keys: [3, 2, 1, 0],
      values: ['به مراتب بیشتر از حد معمول','بیش از حد معمول','در حد معمول','اصلاً'],
   },
   {
      id: 21,
      title: 'آیا از یک ماه گذشته تا به امروز قادر بوده اید از فعالیت های روزمره زندگی لذت ببرید؟',
      keys: [3, 2, 1, 0],
      values: ['به مراتب بیشتر از حد معمول','بیش از حد معمول','در حد معمول','اصلاً'],
   },
   {
      id: 22,
      title: 'آیا از یک ماه گذشته تا به امروز فکر کرده اید که شخص بی ارزشی هستید؟',
      keys: [3, 2, 1, 0],
      values: ['به مراتب بیشتر از حد معمول','بیش از حد معمول','در حد معمول','اصلاً'],
   },
   {
      id: 23,
      title: 'آیا از یک ماه گذشته تا به امروز احساس کرده اید که زندگی کاملاً ناامیدکننده است؟',
      keys: [3, 2, 1, 0],
      values: ['به مراتب بیشتر از حد معمول','بیش از حد معمول','در حد معمول','اصلاً'],
   },
   {
      id: 24,
      title: 'آیا از یک ماه گذشته تا به امروز احساس کرده اید که زندگی ارزش زنده بودن را ندارد؟',
      keys: [3, 2, 1, 0],
      values: ['به مراتب بیشتر از حد معمول','بیش از حد معمول','در حد معمول','اصلاً'],
   },
   {
      id: 25,
      title: 'آیا از یک ماه گذشته تا به امروز به این مسئله فکر کردهاید که ممکن است دست به خودکشی بزنید؟',
      keys: [3, 2, 1, 0],
      values: ['به مراتب بیشتر از حد معمول','بیش از حد معمول','در حد معمول','اصلاً'],
   },
   {
      id: 26,
      title: 'آیا از یک ماه گذشته تا به امروز به این مسئله فکر کرده اید که ممکن است دست به خودکشی بزنید؟',
      keys: [3, 2, 1, 0],
      values: ['به مراتب بیشتر از حد معمول','بیش از حد معمول','در حد معمول','اصلاً'],
   },
   {
      id: 27,
      title: 'آیا از یک ماه گذشته تا به امروز به این نتیجه رسیده اید که ای کاش مرده بودید و کلاً از شر زندگی خالص می شدید؟',
      keys: [3, 2, 1, 0],
      values: ['به مراتب بیشتر از حد معمول','بیش از حد معمول','در حد معمول','اصلاً'],
   },
   {
      id: 28,
      title: 'آیا از یک ماه گذشته تا به امروز این فکر به ذهنتان رسیده است که بخواهید به زندگیتان خاتمه دهید؟',
      keys: [3, 2, 1, 0],
      values: ['به مراتب بیشتر از حد معمول','بیش از حد معمول','در حد معمول','اصلاً'],
   },
]

export default generalHealthData;