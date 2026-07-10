# Notatki z wykładu  
**Prowadzący:** dr inż. Adam Wojciechowski  
**Data:** 11.10.2025  

---

## 1. Wprowadzenie i kontekst zajęć

Podczas zajęć prowadzący omówił zasady zaliczenia oraz charakter pracy laboratoryjnej i wykładowej.  
- **Zaliczenie laboratorium:** realizacja projektu lub zadania praktycznego.  
- **Zaliczenie wykładu:** esej o objętości około 8–10 stron.  
W ramach laboratoriów studenci wykonują zadania indywidualne lub zespołowe, które mają charakter aplikacyjny – ich celem jest opracowanie rozwiązania optymalizacyjnego lub projektowego.

Prowadzący podkreślił, że kluczową częścią nauki podczas laboratoriów jest **dyskusja** oraz **samodzielne rozwiązywanie problemów** – a nie samo kodowanie. Współpraca w grupie wymaga umiejętności komunikacyjnych oraz wyznaczenia lidera, co odzwierciedla rzeczywiste warunki pracy zespołowej w projektach IT.

---

## 2. Zarządzanie projektem i geneza pomysłu

Punktem wyjścia każdego projektu informatycznego jest **pomysł**, który stanowi fundament dalszych działań.  
Prowadzący zaznaczył, że skuteczne zarządzanie projektem jest możliwe wyłącznie wtedy, gdy istnieje jasno określony cel lub koncepcja rozwiązania problemu. Przykładowo, prośba użytkownika o stworzenie aplikacji do testów szkolnych może stanowić zalążek projektu programistycznego.

### Kluczowe etapy powstawania projektu:
1. **Identyfikacja potrzeby lub problemu.**  
2. **Analiza możliwości technicznych i zasobów.**  
3. **Opracowanie koncepcji i planu realizacji.**  
4. **Implementacja i testowanie rozwiązania.**

Ważnym elementem jest **realizm pomysłu** – prowadzący zwrócił uwagę, że podejmowanie się projektów, których technologicznie nie rozumiemy, jest błędem organizacyjnym.

---

## 3. Historia rozwoju aplikacji internetowych

Dr Wojciechowski przedstawił ewolucję stron internetowych i aplikacji webowych. W latach 90. XX wieku strony były proste i statyczne, często tworzone w HTML bez złożonej logiki. Z czasem pojawiły się technologie takie jak **Perl**, **PHP**, czy później **JavaScript**, które umożliwiły interaktywność i rozwój handlu internetowego.

### Przykład: pierwsze projekty e-commerce
Prowadzący opisał własne doświadczenia z budową sklepu internetowego w latach 90.:
- sklep sprzedawał książki i akcesoria turystyczne,
- proces zamawiania i wysyłki był w pełni manualny,
- brakowało zautomatyzowanych narzędzi i interfejsów API,
- problemy logistyczne (pakowanie, wysyłka, komunikacja z pocztą) stanowiły główne ograniczenie.

Mimo skromnych zysków, projekt umożliwił rozwój kompetencji programistycznych i przedsiębiorczych, a jego komponenty były później sprzedawane innym firmom jako gotowe rozwiązania.

---

## 4. Innowacja z potrzeby – geneza pomysłów

Prowadzący podkreślił, że **wiele udanych projektów informatycznych powstaje z potrzeby uproszczenia lub automatyzacji codziennych czynności.**

> „Każdy pomysł zaczyna się od momentu, w którym coś nas irytuje lub wydaje się zbyt czasochłonne.”

### Przykłady omawiane na zajęciach:
- Automatyzacja przypomnień i notyfikacji (aplikacje typu „To-Do”).  
- Narzędzia do zarządzania płatnościami cyklicznymi.  
- Komunikatory internetowe (np. ICQ, Gadu-Gadu) – rozwinięcie idei wymiany SMS-ów.  
- Optymalizatory zakupów internetowych – aplikacje porównujące ceny produktów w wielu sklepach.

---

## 5. Modele dystrybucji i monetyzacji oprogramowania

Omówiono różne modele udostępniania oprogramowania, które kształtowały rynek IT:

| Model | Charakterystyka | Przykład |
|-------|-----------------|-----------|
| **Freeware** | Darmowe użytkowanie, często z reklamami. | ICQ, Gadu-Gadu |
| **Shareware** | Darmowy okres próbny, później płatność. | WinRAR |
| **Open Source** | Kod otwarty, utrzymanie przez społeczność. | Linux |
| **Freemium** | Podstawowa wersja darmowa, dodatki płatne. | Spotify, Slack |

Prowadzący wskazał, że popularność programu może zostać przekształcona w **kapitał społeczny lub polityczny**, przywołując przykład twórcy komunikatora, który wykorzystał rozpoznawalność w kampanii wyborczej.

---

## 6. Mechanizm rozprzestrzeniania oprogramowania (model sieciowy)

Zwrócono uwagę na zjawisko **efektu sieciowego**, czyli sytuacji, gdy wartość produktu wzrasta wraz z liczbą użytkowników.  
Przykładem jest komunikator, który staje się użyteczny dopiero wtedy, gdy korzysta z niego grupa znajomych.  
Taki model jest skuteczny również w przypadku gier sieciowych, platform społecznościowych czy systemów współdzielenia danych.

---

## 7. Motywacja do tworzenia – prokrastynacja i automatyzacja

Istotnym wątkiem wykładu było zrozumienie motywacji, które prowadzą do tworzenia innowacji.  
Zjawisko **prokrastynacji** (odkładania zadań na później) może być impulsem do projektowania rozwiązań, które pomagają w organizacji pracy lub eliminują czynności niechętnie wykonywane przez ludzi.

> „Jeśli coś ci się nie chce robić – to być może jest to sygnał, że warto to zautomatyzować.”

### Przykłady:
- Automatyczne systemy nawadniania czy sprzątania.  
- Autonomiczne śmieciarki sterowane GPS.  
- Systemy logistyczne i rolnicze wykorzystujące sztuczną inteligencję.  

Wnioskiem było, że **każda niechęć do wykonania pracy fizycznej lub powtarzalnej** może stanowić punkt wyjścia dla nowego projektu technologicznego.

---

## 8. Przykład zadania optymalizacyjnego – zakupy online

Jednym z omawianych przypadków była **symulacja zakupów w wielu sklepach internetowych**.  
Celem projektu było znalezienie takiej kombinacji zakupów, która minimalizuje łączny koszt produktów wraz z kosztami dostawy.

### Założenia:
- Każdy sklep ma własne ceny i politykę dostaw (np. darmowa dostawa od 200 zł).  
- Problem ma charakter **kombinatoryczny** i jego złożoność rośnie wykładniczo z liczbą produktów i sklepów.  
- Przykład praktyczny zastosowania **algorytmów optymalizacji** i **programowania dynamicznego**.

---

## 9. Finansowanie pomysłów i rynek startupów

Omówiono funkcjonowanie **funduszy venture capital** i **inkubatorów przedsiębiorczości**, które wspierają projekty studenckie.  
Jednakże prowadzący zwrócił uwagę na realia:
- fundusze często przejmują większość udziałów (nawet 90–95%),  
- celem inwestora jest szybkie zwiększenie wartości spółki i jej sprzedaż,  
- młody przedsiębiorca często traci kontrolę nad własnym projektem.

Mimo to, współpraca z inwestorem może stanowić szansę na rozwój projektu, zdobycie doświadczenia i wejście na rynek.

---

## 10. Wnioski i przesłanie wykładu

1. **Pomysł rodzi się z potrzeby lub frustracji.**  
2. **Innowacja to często automatyzacja czynności, których ludzie nie chcą wykonywać.**  
3. **Projekty powinny rozwiązywać realne problemy, nie teoretyczne zagadnienia.**  
4. **Nawet nieudane projekty dostarczają wiedzy i doświadczenia.**  
5. **Efekt sieciowy i współpraca są kluczem do skalowania produktów IT.**

---

## 11. Dodatkowe informacje organizacyjne

**Kontakt do prowadzącego:**  
- e-mail: adam.wojciechowski@put.poznan.pl  

**Zaliczenie:**  
- Laboratoria: projekt/realizacja zadania.  
- Wykład: esej (8–10 stron, tematyka powiązana z innowacją, zarządzaniem projektem lub rozwiązaniami IT).