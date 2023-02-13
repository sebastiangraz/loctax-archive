import React, { useEffect, useMemo } from "react";
import Router from "next/router";
import Head from "next/head";
import { ThemeProvider } from "theme-ui";
import theme from "../public/theme";
import { Reset } from "../components/reset";
import { AnimatePresence } from "framer-motion";

import { isBrowser, useScrollRestoration } from "../lib/helpers";
import { pageTransitionSpeed } from "../lib/animate";

import {
  SiteContextProvider,
  useSiteContext,
  useTogglePageTransition,
} from "../lib/context";

const Site = ({ Component, pageProps, router }) => {
  const togglePageTransition = useTogglePageTransition();
  const { isPageTransition } = useSiteContext();
  // Handle scroll position on history change
  useScrollRestoration(router, pageTransitionSpeed);

  // Trigger our loading class
  useEffect(() => {
    if (isBrowser) {
      document.documentElement.classList.toggle("is-loading", isPageTransition);
    }
  }, [isPageTransition]);

  // Setup page transition loading states
  useEffect(() => {
    Router.events.on("routeChangeStart", (_, { shallow }) => {
      // Bail if we're just changing URL parameters
      if (shallow) return;

      // Otherwise, start loading
      togglePageTransition(true);
    });

    Router.events.on("routeChangeComplete", () => {
      setTimeout(() => togglePageTransition(false), pageTransitionSpeed);
    });

    Router.events.on("routeChangeError", () => {
      togglePageTransition(false);
    });
    // dont fix exhaustive-deps for memo leak lol
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* {isPageTransition && (
        <Head>
          <title>Loading...</title>
        </Head>
      )} */}
      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => {
          document.body.classList.remove("overflow-hidden");
        }}
      >
        <Component key={router.asPath.split("?")[0]} {...pageProps} />
      </AnimatePresence>
    </>
  );
};

// Site wrapped with Context Providers
const MyApp = ({ Component, pageProps, router }) => {
  const { data } = pageProps;
  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <SiteContextProvider data={{ ...data?.site }}>
        <Site Component={Component} pageProps={pageProps} router={router} />
      </SiteContextProvider>
    </ThemeProvider>
  );
};

export default MyApp;
