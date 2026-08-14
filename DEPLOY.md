# النشر والاستخدام — EslaM-X

## 1. ملف GitHub Profile README

الملف موجود في المشروع هنا: `github-profile/README.md`

خطوات الرفع:

1. افتح https://github.com/new
2. اسم المستودع لازم يكون **بالضبط**: `EslaM-X` (نفس اسم حسابك)
3. اختر **Public** وفعّل **Add a README file**
4. افتح المستودع → `README.md` → زر التعديل (قلم رصاص)
5. امسح المحتوى القديم والصق محتوى `github-profile/README.md` بالكامل
6. **مش محتاج ترفع الشعار في المستودع** — الشعار بقى بيتحمّل من الموقع مباشرة:
   `https://eslamx.vercel.app/x-crown-logo.jpg` (موجود في `public/x-crown-logo.jpg`). يكفي إن الموقع منشور على Vercel.
7. Commit changes → افتح https://github.com/EslaM-X وهتلاقي البروفايل بالشكل الجديد

## 2. النشر عبر Lovable (الأسرع)

اضغط زر **Publish** أعلى يمين المحرر. الموقع يتنشر على:
`https://project--959d682e-3677-4575-9a84-f86b30c36ef5.lovable.app`
ويمكن ربط دومين مخصص من Settings → Domains (مثال: `eslamx.dev`).

## 3. النشر على Vercel

المشروع TanStack Start (Vite) — خطوات النشر:

1. من Lovable: GitHub → **Connect / Export to GitHub** لدفع الكود لمستودع.
2. افتح https://vercel.com/new واختر المستودع.
3. الإعدادات:
   - Framework Preset: **Other / Vite**
   - Build Command: `npm run build`
   - Output Directory: `.output/public`
   - Install Command: `npm install`
4. Deploy → ثم Settings → Domains لإضافة دومينك.

> ملاحظة: إن ظهر أي اختلاف في مسار الإخراج، تحقق من `package.json` → سكربت `build`، ثم استخدم نفس مجلد الإخراج في إعدادات Vercel.

## 4. بعد النشر — SEO

- بعد ربط الدومين النهائي، حدّث الروابط المطلقة في:
  - `src/routes/index.tsx` (`SITE`)
  - `public/sitemap.xml`
  - `public/robots.txt`
- أضف الموقع في Google Search Console و Bing Webmaster Tools، وارفع `sitemap.xml`.
- صورة المشاركة الاجتماعية جاهزة في `public/og-image.jpg` (1200×630).

## 5. رابط الموقع داخل الريدمي (مهم)

في `github-profile/README.md` الرابط مكتوب كـ `https://eslamx.vercel.app` في عدة أماكن
(الشعار في الأعلى، زر ENTER THE SOVEREIGN PORTFOLIO، البادجات، التوقيع في الأسفل).
بعد ما تعرف دومين Vercel النهائي، افتح الملف على GitHub واستبدل كل `eslamx.vercel.app`
بالدومين بتاعك (Ctrl+H أو من محرر GitHub) — وخلاص.

الشعار في الريدمي بقى بيتحمّل من `https://eslamx.vercel.app/x-crown-logo.jpg` مباشرة،
فمفيش أي رفع مطلوب داخل المستودع — بس خلي الموقع منشور على Vercel.

كروت المشاريع والإنجازات اتحوّلت لبادچات `shields.io` (خدمة مستقرة 100%) بدل
`github-readme-stats` و`github-profile-trophy` اللي بيحصلهم rate-limit، وكروت الإحصائيات
اتضاف لها `cache_seconds=86400` لتقليل الفشل.
