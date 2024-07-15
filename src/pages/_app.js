import { Analytics } from "@vercel/analytics/react";
import "../styles/globals.css"; // Import your global CSS file if you have one

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
