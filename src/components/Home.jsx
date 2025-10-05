import Scene from "../Scene";
import LandingPage from "./LandingPage";
import React, { Suspense, lazy } from "react";
const CraftedPage = lazy(() => import("./CraftedPage"));

const FeaturePage = lazy(() => import("./FeaturePage"));

const Home = ({ isMobile }) => {
  return (
    <main className="">
      <Scene isMobile={isMobile} />
      <LandingPage />
      <Suspense fallback="loading">
        <FeaturePage />
      </Suspense>
      <Suspense fallback="loading">
        <CraftedPage />
      </Suspense>
    </main>
  );
};

export default React.memo(Home);
