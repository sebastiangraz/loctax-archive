import React from "react";
import dynamic from "next/dynamic";

const Grid = dynamic(() => import("./grid"));
const Media = dynamic(() => import("./media"));
const Hero = dynamic(() => import("./hero"));
const Parallax = dynamic(() => import("./parallax"));
const ArticleList = dynamic(() => import("./articleList"));
const FeatureSelector = dynamic(() => import("./feature-selector"));
const FeatureHero = dynamic(() => import("./feature-hero"));
const Logotypes = dynamic(() => import("./logotypes"));

export const Module = ({ module, articleList }) => {
  const type = module._type;

  switch (type) {
    case "grid":
      return <Grid data={module} />;
    case "media":
      return <Media data={module} />;
    case "hero":
      return <Hero data={module} />;
    case "parallax":
      return <Parallax data={module} />;
    case "articleList":
      return <ArticleList data={module} />;
    case "featureSelector":
      return <FeatureSelector data={module} />;
    case "featureHero":
      return <FeatureHero data={module} />;
    case "logotypes":
      return <Logotypes data={module} />;
    default:
      return null;
  }
};
