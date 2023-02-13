import React, { useEffect, useState } from "react";
import Script from "next/script";
import { motion } from "framer-motion";
import { pageTransitionSpeed } from "../lib/animate";
import HeadSEO from "../components/head-seo";
import CookieBar from "../components/cookie-bar";
import Header from "../components/header";
import Footer from "../components/footer";
import balanceText from "balance-text";
const variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: pageTransitionSpeed,
      delay: 0,
      ease: [0.83, 0, 0.17, 1],
      when: "afterChildren",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: pageTransitionSpeed,
      ease: [0.83, 0, 0.17, 1],
      when: "beforeChildren",
    },
  },
};

const Layout = ({ site = {}, page = {}, schema, children }) => {
  // React.useEffect(() => {
  //   const cookie = Object.fromEntries(
  //     document.cookie
  //       .split("; ")
  //       .map((v) => v.split(/=(.*)/s).map(decodeURIComponent))
  //   );
  //   Object.entries(cookie).map(([key, value]) => {
  //     !!key.match("set_cookie") && console.log(key, value);
  //   });
  //
  // }, []);
  //Balance all .balanced classes, usually H1s
  React.useEffect(() => {
    balanceText(".balanced", { watch: true });
  }, []);

  return (
    <>
      <HeadSEO site={site} page={page} schema={schema} />

      {site.gtmID && (
        <Script
          strategy="afterInteractive"
          id="gtm"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${site.gtmID}');`,
          }}
        />
      )}
      <Header data={site.header} />
      <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        variants={variants}
      >
        <CookieBar data={site.cookieConsent} />
        <div
          className="templateOverlay"
          // sx={{
          //   position: "fixed",
          //   top: 0,
          //   pointerEvents: "none",
          //   left: "50%",
          //   transform: "translate(-50%)",
          //   maxWidth: "1288px",
          //   height: "100vh",
          //   width: "88%",
          //   zIndex: 1000,
          //   background:
          //     "repeating-linear-gradient(90deg, rgba(0,0,0,0.03), rgba(0,0,0,0.03) 2px, transparent 2px, transparent calc(100 / (1288 / 56) * 1%) )",
          //   backgroundPosition: "-1px 0px",
          // }}
        />

        <main
          id="content"
          sx={{
            "& > * ": {
              mb: (theme) => `clamp(112px, ${theme.space[4]}, 172px)`,
            },
          }}
        >
          {children}
        </main>

        <Footer data={site.footer} />
      </motion.div>
    </>
  );
};

export default Layout;
