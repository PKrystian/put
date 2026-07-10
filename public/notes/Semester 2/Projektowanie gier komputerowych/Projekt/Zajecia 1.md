# Notatki z Zajęć - Projektowanie Gier

**Data:** 26 kwietnia 2026

---

## Część I: Organizacja Przedmiotu

### Wymogi Zaliczeniowe

**Założenie ogólne:** Brak zadań domowych. Zaliczenie opiera się wyłącznie na pracy wykonanej na laboratoriach.

**Uzasadnienie:** Doświadczenie wykazało, że ocena zadań domowych nie odzwierciedlała faktycznego wkładu pracy. Pomimo zapisanych w karcie ECTS wymaganych 100 godzin pracy własnej, przesyłane prace wskazywały na około 3 godziny faktycznej pracy.

### Struktura Zajęć

Laboratoria obejmują:

1. **Cztery główne zadania** - wykonywane na kolejnych laboratoriach
2. **Mini hakatony** - większe ćwiczenia praktyczne realizowane w 3-godzinnych blokach zajęć
3. **Prototypowanie gier** - tworzenie działającego prototypu gry
4. **Wybrane narzędzia** - demonstracja silnika do szybkiego prototypowania (pozwala na stworzenie działającej gry w 3 godziny)

### Ocena i Zaliczenie

- Prowadzący notuje osiągnięcia na podstawie czterech ćwiczeń
- Zaliczenie uzyskuje się poprzez uczestnictwo i aktywną pracę na zajęciach
- Minimalne wymagania: regularnie chodzić i coś robić
- **Opcja dodatkowa:** Możliwość pracy zaliczeniowej w domu dla studentów pragną podnieść ocenę (np. ze względów stypendialnych)
- Ocena wystawiana na koniec semestru

---

## Część II: Uproszczenia w Grach - Wstęp Teoretyczny

### Koncepcja Uproszczenia (Simplicity)

**Definicja:** Uproszczenie w kontekście projektowania gier odnosi się do celowego zmniejszenia złożoności mechaniki, interfejsu, otoczenia lub fabuły gry w porównaniu do wzorców gatunkowych.

**Cel zadania:** Przesunięcie perspektywy myślenia z poziomu gracza na poziom **projektanta**. Studenci muszą zidentyfikować, gdzie twórcy gry **ucięli pracę** - zredukowali zakres, by:

- Zmieścić się w budżecie i harmonogramie
- Uniknąć nadmiernego powiększania zakresu projektu (feature creep)
- Osiągnąć bardziej eleganckie rozwiązanie

### Metodologia Analizy

#### Subtractive Design

**Zasada:** Coś odjęliśmy z gry lub z znanego gatunku, aby uzyskać nową jakość.

- Zmiana ta musiała przynieść wartość dodaną
- Nowa jakość umożliwiła lub wspierała sprzedaż produktu
- Przykład: usunięcie elementu, który pozwolił na wyróżnienie się na rynku

#### Unique Selling Point (USP)

**Definicja:** Unikalna cecha sprzedażowa - to, co wyróżnia produkt na rynku.

**Ważne rozróżnienia:**

- Czy uproszczenie _jest_ USP produktu?
- Czy uproszczenie jest głównym powodem sukcesu sprzedażowego?
- Czy uproszczenie tylko nie przeszkadzało, ale produkt sprzedawał się dzięki czemuś innemu?

**Kontekst rynkowy:** W branży gier tworzy się zdecydowanie zbyt wiele produktów - około 90% nie osiąga sukcesu sprzedażowego. Dlatego podczas projektowania należy pytać: _Dlaczego ta gra miałaby się sprzedawać?_

---

## Część III: Analizy Konkretnych Gier

### Gra 1: Tekken (Fighting Game)

#### Uproszczenie Wymiarowe

**Oryginalny koncept:** Tradycyjne gry 3D walki pozwalały postaciom na pełną swobodę ruchu w trzech wymiarach.

**Uproszczenie w Tekken:**

- Postacie mogą poruszać się tylko wzdłuż **jednej osi** (forward/backward)
- Drugi wymiar (left/right movement) jest całkowicie **zablokowany**
- Trzeci wymiar (wysokość, ruch wertykalny) jest reprezentowany automatycznie - postaci zawsze pozostają na ustalonej osi względem siebie
- Arena się obraca, ale postacie automatycznie śledzą oś ruchu

**Konsekwencje uproszczenia:**

- Znacznie mniejsza złożoność dla gracza - łatwiej się nauczyć gry
- Dla projektanta: szybsza implementacja, mniejsza powierzchnia do testowania
- Gra byłaby znacznie bardziej skomplikowana w pełnym 3D ze swobodnym ruchem
- Porównanie: gry 2.5D (3D z widokiem bocznym bez swobodnego ruchu) nadal stanowią uproszczenie względem pełnego 3D

---

### Gra 2: Balatro (Poker Roguelike)

#### Ogólna Charakterystyka

**Gatunek:** Single-player roguelike inspirowany pokerem

**Rok wydania:** Hit z ostatnich lat; opracowany przez niezależnego dewelopera, osiągnął masowy sukces

#### Uproszczenia Względem Tradycyjnego Pokera

|Aspekt|Poker Tradycyjny|Balatro|
|---|---|---|
|Tryb gry|Multiplayer (rywalizacja)|Single player|
|Element psychologiczny|Czytanie mimiki graczy|Brak - gra się układami kart|
|Rywalizacja|O pulę pieniędzy|Brak|
|Dynamika zakładów|Podbijanie stawek|Brak - proste systemy punktacji|
|Cel|Zbicie kasy|Osiągnięcie wymaganej liczby punktów|
|Nagroda|Wygrana pula|Środki finansowe na ulepszenia|
|Świat gry|Różne sale pokerowe, atmosfera|Tylko stół + sklep (między poziomami)|
|Funkcja finansów|Część głównej mechaniki|Tylko do kupowania ulepszeń|

#### Interfejs - Uproszczenie Dla Gracza

- Gracz nie musi znać wszystkich kombinacji pokerowych z góry
- Ściągawka dostępna w grze pokazuje:
    - Kombinacje kart
    - Punkty za każdą kombinację
    - Dostępne mnożniki
- **Rezultat:** Niski próg wejścia - każdy może grać bez wcześniejszej znajomości pokera

#### Progresja i Balans

**System mnożników:**

- USB (Unique Selling Point?): rozwiązania na osiągnięcie największych wyników
- Mnożniki rosną **wykładniczo**
- Wymnaża się nawzajem, osiągając kosmicznie duże liczby
- Liczby znacznie przekraczają wymagania do pokonania danego poziomu

**Nagroda psychologiczna:** Gracz czuje ogromną satysfakcję z osiągania ogromnych liczb - podobnie jak w grach typu clicker/idle

#### Problem Balansowania - Rozwiązanie Przez Roguelike

**Wyzwanie:** Tradycyjne gry karciane z ustalonymi kartami pozwalają na zbudowanie perfekcyjnego deku, co prowadzi do:

- Gry zbyt łatwej
- Braku wyzwania w dalszej części
- Utraty zainteresowania graczem

**Rozwiązanie - Struktura Roguelike:**

- Każda rozgrywka zaczyna się od nowa (restart)
- Bonusy, power-upy i karty pojawiają się w **umiarkowanie losowy** sposób
- Przeciwieństwo do: tradycyjnego deck-buildera z kartami na stałe

**Automatyczne balansowanie:**

- Jeśli jakiś bonus pojawił się 3 razy i okazał się zbyt mocny, system automatycznie dostosowuje trudność
- Nie wymaga ręcznego balansowania per grę
- System roguelike'a wbudowuje elastyczność

#### Dodatkowe Parametry Gry

- **Curve trudności:** Stopniowe wprowadzanie wyzwań
- **Krzywa uczenia:** Gracze uczą się na bieżąco
- **Wymuszenie odświeżenia:** Losowość zapobiega stagnacji meta-gry

**Podsumowanie:** Balatro to przykład gry, która mimo widocznej prostoty (tylko stół i sklep, podstawowe mechaniki) jest naprawdę **rozbudowana**. Prostota wyglądu i interfejsu maskuje złożoność systemu.

---

## Część IV: Kluczowe Koncepty do Zapamiętania

### 1. Perspektywa Projektanta vs. Gracza

- Uproszczenia mogą być **niewidoczne** dla gracza
- Gracz czuje ich efekt (łatwość, intuicyjność, satysfakcja)
- Projektant musi odkryć, _gdzie_ zmniejszono złożoność dla zysku

### 2. Feature Creep (Rozrost Funkcjonalności)

**Problem:** Budżet i czas są zawsze ograniczone, ale scope projektu łatwo powiększa się 2x, potem jeszcze 2x.

**Rozwiązanie:** Świadome uproszczenia i cięcia funkcji na etapie koncepcji.

### 3. Rynek Gier

- 90% gier nie osiąga sukcesu komercyjnego
- Każda decyzja projektowa powinna być oparta o pytanie: _Po co gracz miałby to grać?_
- USP jest krytyczny

### 4. Elegancja Uproszczenia

Uproszczenie nie jest brakiem funkcjonalności - to **świadomy wybór projektowy**, który:

- Zmniejsza złożoność dla gracza
- Przyspiesza tworzenie
- Zwiększa elegancję rozwiązania
- Może stać się głównym atutem handlowym

---

## Zadanie dla Studentów

**Polecenie:** Każdy student powinien znaleźć przykład gry, która realizuje uproszczenie w wyrazie, zgodnie z zasadami omówionymi na wykładzie.

**Kryteria Analizy:**

1. Wskazać konkretny element, który został uproszczony (mechanika, interfejs, świat, fabuła)
2. Porównać z tradycyjnym gatunkiem lub poprzednikami
3. Wyjaśnić, dlaczego to uproszczenie miało sense
4. Ocenić, czy uproszczenie jest USP produktu
5. Przeanalizować wpływ na rynek i sprzedaż

**Cel:** Przećwiczenie myślenia jak projektant, a nie jak gracz.

---

## Notatki Dodatkowe

### Narzędzia do Nauki

- Prowadzący udostępnił nagrany wykład - zalecane obejrzenie przed zajęciami laboratoryjnymi
- Materiały są niezbędne do prawidłowego wykonania zadań

### Perspektywa na Przyszłość

- Kolejne zajęcia będą pracować nad elementami: projektowaniem poziomów, mechaniką rozgrywki, regulowaniem trudności
- Prototypowanie będzie ćwiczone na rzeczywistych narzędziach/silnikach
- Studenci będą wytwarzać działające prototypy gier w ramach laboratorium