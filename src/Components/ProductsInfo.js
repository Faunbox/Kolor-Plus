import React from "react";
import ReadMore from "../Components/ReadMore";
import Novol from "../images/novol-1-min.jpg";
import Cromax from "../images/cromax-min.png";
import "../Styles/ProductsInfo.css";

const ProductsInfo = () => {
  return (
    <>
      <div className="productsWrapper">
        <div className="products cromax">
          <img className="products" src={Cromax} alt="Cromax logo"></img>
          <ReadMore>
            <div className="productsInfo">
              <strong>Cromax</strong> (dawniej należący do koncernu DuPont a w
              2013 roku przejęty przez firmę Axalta Coating System) to znany na
              całym świecie producent materiałów lakierniczych segmentu premium.
              Głównym celem marki Cromax jest osiągnięcie jak największej
              wydajności i produktywności w lakierni, co przekłada się na
              oszczędność czasu i zużytego materiału, przynosząc wymierne
              korzyści i zwiększając dochodowość. Cromax oferuje rozwiązania
              technologiczne zapewnieniające łatwość, szybkość i dokładność
              aplikacji oraz pragmatyczne innowacje, które upraszczają i
              skracają czas wykonania naprawy lakierniczej. W ofercie tej firmy
              znajduje się kilka systemów mieszalniczych dostosowanych do
              różnych potrzeb klientów:
              <ul className="productsInfo">
                <li className="productsInfo" key="1">
                  <strong>• Centari</strong> – Rozpuszczalnikowy system
                  lakierniczy. Dzięki połączeniu odpowiednich żywic i
                  skoncentrowanych pigmentów jeden mieszalnik pozwala na
                  uzyskanie pożądanego lakieru. System charakteryzuje się łatwym
                  dopasowaniem i wyjątkową trwałością koloru, bardzo dobrym
                  kryciem oraz łatwą aplikacją. Mieszalnik posiada ponad sto
                  pigmentów i cały czas tworzone są nowe, co pozwala dobrać
                  praktycznie każdy lakier samochodowy, a także wiele
                  ciężarowych i motocyklowych.
                </li>
                <li className="productsInfo" key="2">
                  <strong>• Cromax Pro</strong> – Najbardziej produktywny,
                  zaawansowany technologicznie wodorozcieńczalny lakier bazowy.
                  Opracowany dla zapewnienia optymalnej wydajności i szybkości
                  pracy w lakierni. W połączeniu z materiałami uzupełniającymi
                  każdy etap naprawy pozwala osiągnąć niespotykane wyniki.
                  System Cromax Pro pozwala znacząco zmniejszyć zużycie
                  produktów i energii potrzebnych do wykonania naprawy i oferuje
                  bardzo dokładne dopasowanie koloru.
                </li>
                <li className="productsInfo" key="3">
                  <strong>• Imron Fleet Line</strong> – System przeznaczony do
                  renowacji samochodów użytkowych, ciężarówek, ciągników i
                  maszyn przemysłowych. Jest zgodny z dyrektywą 2004/42/WE,
                  zapewnia doskonałe krycie, wspaniałą rozlewność.
                </li>
              </ul>
            </div>
          </ReadMore>
        </div>
        <div className="products novol">
          <img className="products" src={Novol} alt="Novol logo"></img>
          <ReadMore>
            <div className="productsInfo">
              <strong>NOVOL</strong> to międzynarodowa firma zajmująca się
              produkcją materiałów dla lakiernictwa samochodowego i nie tylko. W
              ramach kilku linii produktowych NOVOL oferuje chemię do renowacji
              powłok lakierniczych: od szpachli uniwersalnych o szerokim
              zastosowaniu, przez szpachlówki o specjalistycznym przeznaczeniu,
              aż po podkłady akrylowe, lakiery bazowe, lakiery bezbarwne oraz
              pełną paletę materiałów uzupełniających Do wspomnianych linii
              należą:
              <ul className="productsInfo">
                <li className="productsInfo" key="1">
                  <strong>• Professional</strong> - to system produktów dla
                  lakiernictwa samochodowego, będący kompleksowym rozwiązaniem
                  problemów w pracy profesjonalnego lakiernika. Zawiera również
                  szeroką gamę produktów spray.
                </li>
                <li className="productsInfo" key="2">
                  <strong>• Spectral</strong> - zaawansowana technologicznie
                  linia produktów premium dostosowana do potrzeb dużych lakierni
                  i serwisów.
                </li>
                <li className="productsInfo" key="3">
                  <strong>• "N" NOVOL</strong> - najnowsza linia wysokiej
                  jakości wyspecjalizowanych produktów takich jak szybki lakier
                  bazbarwny (osiągający twardość użytkową już po 1 godzinie),
                  szpachla z włóknem węglowym czy podkład "mokro na mokro".
                </li>
                <li className="productsInfo" key="4">
                  <strong>• Extreme</strong> - ekstremalna ochrona pak
                  pickup'ów, samochodów dostawczych a także burt, ram i nadwozia
                  pojazdów użytkowych i terenowych dzięki produktom takim jak
                  COBRA truck bedliner i masy natryskowe STP.
                </li>
                <li className="productsInfo" key="5">
                  <strong>• NFCC (Novol for classic car)</strong> - linia
                  przeznaczona do renowacji pojazdów zabytkowych
                </li>
                <li className="productsInfo" key="6">
                  <strong>• INDUSTRIAL</strong> - Coating Systems to pełna
                  technologia wymalowań przemysłowych, na którą składają się
                  lakiery, podkłady antykorozyjne, szpachlówki oraz materiały
                  uzupełniające mające swoje zastosowanie zarówno w przemyśle
                  lekkim, jak i ciężkim.
                </li>
              </ul>
            </div>
          </ReadMore>
        </div>
      </div>
    </>
  );
};

export default ProductsInfo;
