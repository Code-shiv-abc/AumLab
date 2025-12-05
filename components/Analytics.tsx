'use client';

import { Analytics as VercelAnalytics } from '@vercel/analytics/next';
// import Script from 'next/script';

export default function Analytics() {
  return (
    <>
      {/* Vercel Web Analytics */}
      <VercelAnalytics />

      {/* Google Analytics 4 - Placeholder */}
      {/*
        Uncomment and add your Measurement ID
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      */}

      {/* Microsoft Clarity - Placeholder */}
      {/*
        Uncomment and add your Clarity Project ID
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "YOUR_CLARITY_ID");
          `}
        </Script>
      */}
    </>
  );
}
