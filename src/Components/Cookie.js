import React, { useEffect } from 'react';
import '../Styles/Gallery.css'
import "../Styles/ProductsInfo.css";
import ActiveCategory from "./ActiveCategory";
import {motion} from 'framer-motion';

const pageVariants = {
    in: {
      opacity: 1,
      scale: 1,
      y:0,
    },
    out: {
      opacity:0,
      scale:0.8,
      y:"-40px"
    }
  }
  
  const pageTransition = {
    type:"tween",
    ease:"anticipate",
    duration: 1,
  }

const Cookie = () => {

useEffect(() => {
   window.scrollTo(0, 0)
})

    return ( 
        <>
        <ActiveCategory text="Polityka Prywatności" class="acWrapper wrapper"/>
        <motion.div 
        className="productsWrapper wrapper" 
        initial="out"
         animate="in"
         exit="out"
         variants={pageVariants}
         transition={pageTransition}>        
        <div className="products">
           
        <p className="productsInfo">Serwis nie zbiera w sposób automatyczny żadnych informacji, z wyjątkiem informacji zawartych w plikach cookies.
Pliki cookies (tzw. „ciasteczka”) stanowią dane informatyczne, w szczególności pliki tekstowe, które przechowywane są w urządzeniu końcowym Użytkownika Serwisu i przeznaczone są do korzystania ze stron internetowych Serwisu. Cookies zazwyczaj zawierają nazwę strony internetowej, z której pochodzą, czas przechowywania ich na urządzeniu końcowym oraz unikalny numer.
Podmiotem zamieszczającym na urządzeniu końcowym Użytkownika Serwisu pliki cookies oraz uzyskującym do nich dostęp jest operator Serwisu z siedzibą pod adresem <a className="FAdres" href="https://www.google.com/maps/place/Kolor-Plus+s.c.+Glajc-Chowaniec+Beata,+Chowaniec+Marian/@49.682271,19.2092888,15z/data=!4m2!3m1!1s0x0:0x6b416dd2a3e1abb7?sa=X&ved=2ahUKEwjK4cjLmsDrAhWwl4sKHVpfBY8Q_BIwCnoECBcQCA">
                Aleja Marszałka Józefa Piłsudskiego 80, 34-300 Żywiec.
              </a> Pliki cookies wykorzystywane są w celu:
</p>
<ul className="cookie">
    <li className="productsInfo">
Dostosowania zawartości stron internetowych Serwisu do preferencji Użytkownika oraz optymalizacji korzystania ze stron internetowych; w szczególności pliki te pozwalają rozpoznać urządzenie Użytkownika Serwisu i odpowiednio wyświetlić stronę internetową, dostosowaną do jego indywidualnych potrzeb;
</li>
<li className="productsInfo">
Tworzenia statystyk, które pomagają zrozumieć, w jaki sposób Użytkownicy Serwisu korzystają ze stron internetowych, co umożliwia ulepszanie ich struktury i zawartości;

</li>
</ul>
<p className="productsInfo">W ramach Serwisu stosowane są dwa zasadnicze rodzaje plików cookies: „sesyjne”  (session cookies) oraz „stałe” (persistent cookies). Cookies „sesyjne” są plikami tymczasowymi, które przechowywane są w urządzeniu końcowym Użytkownika do czasu wylogowania, opuszczenia strony internetowej lub wyłączenia oprogramowania (przeglądarki internetowej). „Stałe” pliki cookies przechowywane są w urządzeniu końcowym Użytkownika przez czas określony w parametrach plików cookies lub do czasu ich usunięcia przez Użytkownika.
W ramach Serwisu stosowane są następujące rodzaje plików cookies:</p>
<ul className="cookie">
    <li className="productsInfo">
„niezbędne” pliki cookies, umożliwiające korzystanie z usług dostępnych w ramach Serwisu, np. uwierzytelniające pliki cookies wykorzystywane do usług wymagających uwierzytelniania w ramach Serwisu;</li>

<li className="productsInfo">pliki cookies służące do zapewnienia bezpieczeństwa, np. wykorzystywane do wykrywania nadużyć w zakresie uwierzytelniania w ramach Serwisu;</li>

<li className="productsInfo">„wydajnościowe” pliki cookies, umożliwiające zbieranie informacji o sposobie korzystania ze stron internetowych Serwisu;</li>
</ul>


<p className="productsInfo">W wielu przypadkach oprogramowanie służące do przeglądania stron internetowych (przeglądarka internetowa) domyślnie dopuszcza przechowywanie plików cookies w urządzeniu końcowym Użytkownika. Użytkownicy Serwisu mogą dokonać w każdym czasie zmiany ustawień dotyczących plików cookies. Ustawienia te mogą zostać zmienione w szczególności w taki sposób, aby blokować automatyczną obsługę plików cookies w ustawieniach przeglądarki internetowej bądź informować o ich każdorazowym zamieszczeniu w urządzeniu Użytkownika Serwisu. Szczegółowe informacje o możliwości i sposobach obsługi plików cookies dostępne są w ustawieniach oprogramowania (przeglądarki internetowej).
Operator Serwisu informuje, że ograniczenia stosowania plików cookies mogą wpłynąć na niektóre funkcjonalności dostępne na stronach internetowych Serwisu.
Pliki cookies zamieszczane w urządzeniu końcowym Użytkownika Serwisu i wykorzystywane mogą być również przez współpracujących z operatorem Serwisu reklamodawców oraz partnerów.
Więcej informacji na temat plików cookies dostępnych jest pod  <a className="privacyPolitics" href="https://wszystkoociasteczkach.pl/po-co-sa-ciasteczka/">adresem</a> lub w sekcji „Pomoc” w menu przeglądarki internetowej.</p>
<p className="cookie"> Wzór polityki cookies chroniony jest prawem autorskim, które przysługują <a className="privacyPolitics" href="http://wszystkoociasteczkach.pl/"> IAB Polska.</a></p>
        </div>
        </motion.div>
        </>
     );
}
 
export default Cookie;