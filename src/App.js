/** @format */
import { lazy, Suspense } from "react";
import { GlobalStyle } from "./globalStyles";
// Let import all the component
// we will use the lazy to import all components
const Home = lazy(() => import("./Pages/Home"));
const Header = lazy(() => import("./components/Header"));
const Footer = lazy(() => import("./components/Footer"));
const ScroolToTop = lazy(() => import("./components/ScrollToTop"));
function App() {
  return (
    <>
      <Suspense fallback={null}>
        <GlobalStyle />
        <Header />
        <Home />
        <Footer />
        <ScroolToTop />
      </Suspense>
    </>
  );
}

export default App;
