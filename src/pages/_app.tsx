import type { AppProps } from "next/app";
import "@/styles/globals.css";
import ErrorBoundary from "@/components/errorBoundary/ErrorBoundary";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}

export default MyApp;
