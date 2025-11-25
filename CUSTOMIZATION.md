# Customization Guide

This guide will help you customize the COS landing page to fit your specific needs.

## 🎨 Colors

Edit `/app/globals.css` to change the color scheme:

```css
:root {
  --primary: #2563eb;        /* Main brand color (blue) */
  --primary-dark: #1e40af;   /* Darker shade for hover states */
  --secondary: #10b981;      /* Secondary color (green) */
  --accent: #f59e0b;         /* Accent color (amber) */
}
```

## 📝 Content Updates

### Company Information

Update company details in multiple files:

1. **Header.jsx** - Logo and phone number
2. **Hero.jsx** - Main headline and stats
3. **About.jsx** - Company history and mission
4. **Contact.jsx** - Contact information
5. **Footer.jsx** - Footer details

### Services

Edit `/components/Services.jsx` to modify the services array:

```javascript
const services = [
  {
    icon: Sparkles,
    title: 'Your Service Name',
    description: 'Your service description...',
  },
  // Add or remove services as needed
];
```

### Contact Form

The form in `/components/Contact.jsx` currently logs to console. To connect it to a backend:

```javascript
const onSubmit = async (data) => {
  // Replace with your API endpoint
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  // Handle response...
};
```

## 📱 Phone Numbers

Update phone numbers throughout:
- Current: (954) 654-6628
- WhatsApp: +1 (954) 654-6628

Search for `9546546628` and `19546546628` to replace all instances.

## 📧 Email Addresses

Current email: `contact@coscleaningandorganizationsolutions.com`

Update in:
- `/components/Contact.jsx`
- `/components/Footer.jsx`
- `/app/layout.js` (metadata)

## 🖼️ Images

To add real images:

1. Place images in `/public/` folder
2. Import and use Next.js Image component:

```javascript
import Image from 'next/image';

<Image
  src="/your-image.jpg"
  alt="Description"
  width={800}
  height={600}
  className="rounded-lg"
/>
```

## 🔍 SEO

Update metadata in `/app/layout.js`:

```javascript
export const metadata = {
  title: "Your Title",
  description: "Your description",
  keywords: "your, keywords, here",
  // ... other metadata
};
```

## 🎯 Call-to-Action Buttons

All CTA buttons link to:
- Phone: `tel:9546546628`
- WhatsApp: `https://wa.me/19546546628`

Update these throughout the components as needed.

## 📊 Analytics

To add Google Analytics:

1. Install package: `npm install @next/third-parties`
2. Add to `/app/layout.js`:

```javascript
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  )
}
```

## 🌐 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms

Build the project first:
```bash
npm run build
```

Then deploy the `.next` folder according to your hosting provider's instructions.

## 🔧 Common Customizations

### Change Font

Edit `/app/layout.js` to use different Google Fonts:

```javascript
import { Inter } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
```

### Add New Section

1. Create component in `/components/YourSection.jsx`
2. Import and add to `/app/page.js`:

```javascript
import { YourSection } from '@/components/YourSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <YourSection /> {/* Add here */}
        <Services />
        // ...
      </main>
      <Footer />
    </div>
  );
}
```

### Modify Navigation

Edit `/components/Header.jsx` to add/remove navigation items:

```javascript
<button onClick={() => scrollToSection('your-section-id')}>
  Your Section
</button>
```

## 💡 Tips

- Always test on mobile devices after changes
- Use browser DevTools to inspect responsive behavior
- Keep accessibility in mind (alt tags, ARIA labels)
- Test form validation with various inputs
- Optimize images before adding them

## 🆘 Need Help?

- Next.js Docs: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- React Hook Form: https://react-hook-form.com
- Lucide Icons: https://lucide.dev
