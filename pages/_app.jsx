import 'styles/globals.css'
import Script from 'next/scripts'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-SBFNG4F7X2" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-SBFNG4F7X2');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
