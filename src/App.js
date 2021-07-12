import React, { Suspense, lazy, useEffect } from "react";
import "./App.css";
// eslint-disable-next-line
import firebaseApp from "./Components/firebase";
import { authAnony } from "../src/Components/firebase";
import Header from "./Components/Header";
// import Main from "./Components/Main";
import Footer from "./Components/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import CookieConsent from "react-cookie-consent";
import { pageTransition, pageVariants } from "./Global/GlobalVariables";

const GalleryComponent = lazy(() => import("./Components/Gallery"));
const Main = lazy(() => import("./Components/Main"));
const ColorComponent = lazy(() => import("./Components/Color"));
const ContactsComponent = lazy(() => import("./Components/Contacts"));
const ProductsComponent = lazy(() => import("./Components/Products"));
const AboutComponent = lazy(() => import("./Components/About"));
const CookieComponent = lazy(() => import("./Components/Cookie"));

let myContentStyle = {
  color: "white",
};

function App() {
  useEffect(() => {
    authAnony();
  });
  return (
    <BrowserRouter>
      <>
        <CookieConsent
          location="bottom"
          cookieName="ciasteczka"
          expires={365}
          overlay
          buttonText="Rozumiem, przejdz dalej"
          flipButtons="true"
          contentStyle={myContentStyle}
        >
          Ta strona używa plików cookie, aby uzyskać szczegółowe informacje na
          temat przetwarzania Twoich danych osobowych, znajdują się one w{" "}
          <a className="cookie" href="/privacy">
            polityce prywatności
          </a>
          .
        </CookieConsent>
        <Header />
        <Suspense fallback={<div className="loading">Wczytywanie...</div>}>
          <AnimatePresence>
            <Switch>
              <Route path="/" exact component={Main} />
              <Route
                path="/about"
                component={AboutComponent}
                variants={pageVariants}
                transition={pageTransition}
              />
              <Route path="/products" component={ProductsComponent} />
              <Route path="/contacts" component={ContactsComponent} />
              <Route path="/gallery" component={GalleryComponent} />
              <Route path="/color" component={ColorComponent} />
              <Route path="/privacy" component={CookieComponent} />
              <Route component={Main} />
            </Switch>
          </AnimatePresence>
        </Suspense>
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
