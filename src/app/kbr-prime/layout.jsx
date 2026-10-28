import Script from "next/script";

export default function KbrLayout({ children }) {
  return (
    <>
      {/* Google tag (gtag.js) */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-J2HWCK240M"
      />
      <Script id="google-analytics-kbr" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-J2HWCK240M');
        `}
      </Script>
      {children}
    </>
  );
}
