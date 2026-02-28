1. Przetwarzanie OLTP i OLAP – definicja, podstawowe różnice, cechy.
2. Architektury hurtowni danych (podstawowa, z ODS, z DM). Zalety i wady każdego z tych rozwiązań.
3. Czym jest proces czyszczenia danych.
4. Zastosowania operacyjnej składnicy danych.
5. Consistent Hashing – co to jest, jaki jest cel, ogólna zasada działania.
6. Kategorie analizowanych danych (fakty i wymiary). Umiejętność podania przykładu.
7. Schemat gwiazdy, płatka śniegu, konstelacji faktów w hurtowni danych ROLAP z umiejętnością
opracowania dla zadanej dziedziny rzeczywistości.
8. Porównanie schematu gwiazdy ze schematem płatka śniegu. Podanie przykładu (innego niż na
wykładzie i innego niż wypożyczalnia filmów).
9. Operacje w modelu wielowymiarowym MOLAP.
10. Właściwości BASE baz NoSQL.
11. Replikacja danych w bazach NoSQL: leader-follower oraz peer-to-peer.
12. Najważniejsze cechy, zalety i wady bazy NoSQL Klucz – Wartość.
13. Baza dokumentów NoSQL na przykładzie MongoDB: ogólna charakterystyka oraz modelowanie
referencje vs zagnieżdżenia.
14. Porównanie podejścia relacyjnego i NoSQL – najważniejsze aspekty, np. format danych, skalowalność,
spójność.
15. Koncepcja baz danych NewSQL – wady i zalety.
16. Twierdzenie CAP w kontekście NoSQL.

# Zagadnienia do egzaminu – Zaawansowane bazy danych

## 1. Przetwarzanie OLTP i OLAP – definicja, różnice, cechy

### OLTP (Online Transaction Processing)

**Definicja:**
OLTP to przetwarzanie transakcyjne realizowane na bieżąco, wspierające codzienną działalność operacyjną systemów informatycznych.

**Cechy charakterystyczne:**

* Duża liczba krótkich transakcji (INSERT, UPDATE, DELETE)
* Praca w czasie rzeczywistym
* Wysoka współbieżność użytkowników
* Dane szczegółowe (atomowe)
* Nacisk na integralność danych i zgodność z zasadami ACID
* Relacyjny, silnie znormalizowany model danych

**Przykłady zastosowań:**

* Systemy bankowe
* Systemy sprzedażowe (POS)
* Systemy rezerwacji

### OLAP (Online Analytical Processing)

**Definicja:**
OLAP to przetwarzanie analityczne służące do analizowania dużych zbiorów danych historycznych w celu wspomagania decyzji biznesowych.

**Cechy charakterystyczne:**

* Niewielka liczba złożonych zapytań
* Operacje głównie typu SELECT
* Dane historyczne, często zagregowane
* Użytkownicy: analitycy, menedżerowie
* Model wielowymiarowy (kostki OLAP)

**Przykłady zastosowań:**

* Analiza sprzedaży
* Raportowanie finansowe
* Prognozowanie trendów

### Podstawowe różnice OLTP vs OLAP

| Cecha       | OLTP                       | OLAP                     |
| ----------- | -------------------------- | ------------------------ |
| Cel         | Obsługa operacji bieżących | Analiza danych           |
| Typ danych  | Bieżące, szczegółowe       | Historyczne, zagregowane |
| Zapytania   | Proste, krótkie            | Złożone, długotrwałe     |
| Użytkownicy | Operatorzy systemu         | Analitycy                |

---

## 2. Architektury hurtowni danych

### a) Architektura podstawowa (bez ODS i DM)

**Opis:**
Dane z systemów źródłowych są bezpośrednio ładowane do hurtowni danych za pomocą procesu ETL.

**Zalety:**

* Prosta struktura
* Niższe koszty wdrożenia
* Łatwiejsze zarządzanie

**Wady:**

* Duże obciążenie systemów źródłowych
* Brak bufora na dane bieżące
* Mniejsza elastyczność analityczna

### b) Architektura z ODS (Operational Data Store)

**Opis:**
ODS to operacyjna składnica danych zawierająca aktualne, zintegrowane dane, stanowiąca pośredni etap między systemami OLTP a hurtownią danych.

**Zalety:**

* Odciążenie systemów transakcyjnych
* Lepsza jakość i spójność danych
* Możliwość raportowania operacyjnego

**Wady:**

* Dodatkowa warstwa architektury
* Wyższe koszty utrzymania
* Większa złożoność systemu

### c) Architektura z Data Mart (DM)

**Opis:**
Data Mart to tematyczna, wyspecjalizowana część hurtowni danych, dedykowana konkretnemu obszarowi biznesowemu (np. sprzedaż, finanse).

**Zalety:**

* Szybsze zapytania analityczne
* Lepsze dopasowanie do potrzeb użytkowników
* Skalowalność

**Wady:**

* Ryzyko niespójności danych między DM
* Dodatkowe procesy ETL
* Większe koszty projektowe

---

## 3. Proces czyszczenia danych (Data Cleansing)

**Definicja:**
Proces czyszczenia danych polega na identyfikacji i eliminacji błędów, niespójności oraz braków w danych w celu poprawy ich jakości.

**Główne etapy:**

* Usuwanie duplikatów
* Uzupełnianie brakujących wartości
* Standaryzacja formatów (np. dat, adresów)
* Korekta błędnych wartości
* Walidacja danych z regułami biznesowymi

**Znaczenie:**

* Zwiększenie wiarygodności analiz
* Lepsze decyzje biznesowe
* Poprawa jakości raportów

---

## 4. Zastosowania operacyjnej składnicy danych (ODS)

**ODS (Operational Data Store)** służy do przechowywania aktualnych, zintegrowanych danych operacyjnych.

**Zastosowania:**

* Raportowanie operacyjne w czasie bliskim rzeczywistemu
* Integracja danych z wielu systemów OLTP
* Źródło danych dla hurtowni danych
* Monitorowanie procesów biznesowych
* Wsparcie systemów CRM i ERP

**Cechy ODS:**

* Dane aktualne (krótkoterminowa historia)
* Brak zaawansowanych agregacji
* Częste aktualizacje danych

---

**Uwaga egzaminacyjna:**
Warto umieć porównać ODS z hurtownią danych oraz wskazać, kiedy stosowanie ODS jest uzasadnione architektonicznie.

## 5. Consistent Hashing – definicja, cel, zasada działania

**Definicja:**
Consistent Hashing (spójne haszowanie) to technika mapowania kluczy (np. rekordów danych) na węzły systemu rozproszonego w taki sposób, aby przy zmianie liczby węzłów (dodaniu lub usunięciu serwera) konieczne było przemieszczanie jak najmniejszej liczby danych.

**Cel:**

* Minimalizacja kosztu relokacji danych przy skalowaniu systemu
* Równomierne rozłożenie obciążenia między węzłami
* Zwiększenie dostępności i skalowalności systemów rozproszonych

**Ogólna zasada działania:**

* Zarówno dane, jak i węzły systemu są haszowane do tej samej przestrzeni wartości (pierścień hashy)
* Każdy klucz danych trafia do pierwszego węzła zgodnego z ruchem wskazówek zegara
* Dodanie/usunięcie węzła wpływa tylko na fragment danych przypisanych do sąsiednich węzłów
* Często stosuje się **wirtualne węzły**, aby poprawić równomierność rozkładu danych

**Zastosowania:**

* Systemy NoSQL (Cassandra, DynamoDB)
* Cache rozproszony (Redis Cluster)
* Load balancing

---

## 6. Kategorie analizowanych danych – fakty i wymiary

### Fakty

**Definicja:**
Fakty to mierzalne dane liczbowe opisujące zdarzenia biznesowe, przechowywane w tabelach faktów.

**Cechy:**

* Wartości numeryczne
* Podlegają agregacjom (SUM, AVG, COUNT)
* Odnoszą się do konkretnego zdarzenia w czasie

**Przykłady faktów:**

* Kwota sprzedaży
* Liczba sprzedanych sztuk
* Czas realizacji zamówienia

### Wymiary

**Definicja:**
Wymiary to dane opisowe, które nadają kontekst faktom i umożliwiają ich analizę.

**Cechy:**

* Dane opisowe (tekstowe, kategoryczne)
* Służą do filtrowania, grupowania i agregacji faktów
* Często zawierają hierarchie

**Przykłady wymiarów:**

* Czas (dzień → miesiąc → rok)
* Produkt (kategoria → podkategoria → produkt)
* Klient (kraj → miasto → klient)

**Przykład wspólny:**
Fakt: *wartość sprzedaży*
Wymiary: *czas*, *produkt*, *sklep*

---

## 7. Schematy w hurtowni danych ROLAP

### Schemat gwiazdy (Star Schema)

**Opis:**
Centralna tabela faktów połączona bezpośrednio z tabelami wymiarów.

**Cechy:**

* Prosta struktura
* Zdenormalizowane wymiary
* Szybkie zapytania

**Przykład (dziedzina: opieka zdrowotna):**

* Fakt: wizyty lekarskie (koszt, czas trwania)
* Wymiary: pacjent, lekarz, czas, placówka

---

### Schemat płatka śniegu (Snowflake Schema)

**Opis:**
Rozwinięcie schematu gwiazdy – wymiary są znormalizowane do wielu tabel.

**Cechy:**

* Mniejsze redundancje danych
* Bardziej złożone zapytania
* Więcej połączeń JOIN

**Przykład (opieka zdrowotna):**

* Wymiar lekarz → specjalizacja → dziedzina medycyny

---

### Schemat konstelacji faktów (Fact Constellation / Galaxy Schema)

**Opis:**
Wiele tabel faktów współdzielących wspólne wymiary.

**Cechy:**

* Obsługa wielu procesów biznesowych
* Duża elastyczność
* Wyższa złożoność projektowa

**Przykład:**

* Fakty: wizyty lekarskie, hospitalizacje
* Wspólne wymiary: pacjent, czas, placówka

---

## 8. Porównanie schematu gwiazdy i płatka śniegu

| Cecha              | Schemat gwiazdy | Schemat płatka śniegu |
| ------------------ | --------------- | --------------------- |
| Struktura          | Prosta          | Bardziej złożona      |
| Normalizacja       | Niska           | Wysoka                |
| Liczba JOIN        | Mała            | Duża                  |
| Wydajność zapytań  | Wysoka          | Niższa                |
| Redundancja danych | Większa         | Mniejsza              |

**Przykład (dziedzina: logistyka):**

* Schemat gwiazdy:
  Wymiar *lokalizacja* zawiera kraj, region i miasto w jednej tabeli.

* Schemat płatka śniegu:
  Lokalizacja podzielona na osobne tabele: kraj → region → miasto.

**Wniosek egzaminacyjny:**
Schemat gwiazdy jest prostszy i wydajniejszy analitycznie, natomiast schemat płatka śniegu lepiej redukuje redundancję danych kosztem złożoności zapytań.

## 9. Operacje w modelu wielowymiarowym MOLAP

**MOLAP (Multidimensional Online Analytical Processing)** wykorzystuje kostki wielowymiarowe do przechowywania i analizy danych.

**Podstawowe operacje:**

* **Roll-up (agregacja)** – przejście na wyższy poziom szczegółowości (np. dzień → miesiąc → rok)
* **Drill-down (dekompozycja)** – przejście na niższy poziom szczegółowości (np. rok → miesiąc → dzień)
* **Slice** – wybór jednego wymiaru o konkretnej wartości (np. sprzedaż tylko dla roku 2024)
* **Dice** – wybór podkostki poprzez filtrację wielu wymiarów (np. produkt A, region X, rok 2024)
* **Pivot (Rotate)** – zmiana orientacji osi analizy (zamiana wymiarów miejscami)

**Znaczenie:**
Operacje MOLAP umożliwiają szybkie i intuicyjne analizy wielowymiarowe przy bardzo dobrej wydajności zapytań.

---

## 10. Właściwości BASE baz NoSQL

**BASE** to model spójności stosowany w bazach NoSQL, stanowiący alternatywę dla ACID.

**Rozwinięcie skrótu BASE:**

* **Basically Available** – system jest zasadniczo zawsze dostępny
* **Soft State** – stan systemu może się tymczasowo zmieniać
* **Eventual Consistency** – spójność danych jest osiągana z czasem

**Cechy charakterystyczne:**

* Priorytet dostępności i skalowalności
* Akceptacja chwilowych niespójności danych
* Lepsze działanie w systemach rozproszonych

**Porównanie z ACID:**

* ACID: spójność i transakcyjność
* BASE: dostępność i wydajność

---

## 11. Replikacja danych w bazach NoSQL

### a) Leader–Follower (Master–Slave)

**Opis:**
Jeden węzeł (leader) obsługuje zapisy, a pozostałe (followers) replikują dane.

**Cechy:**

* Zapisy tylko na leaderze
* Odczyty możliwe z followerów
* Prosta kontrola spójności

**Zalety:**

* Łatwiejsze zarządzanie
* Spójność danych

**Wady:**

* Pojedynczy punkt zapisu
* Ryzyko niedostępności przy awarii leadera

---

### b) Peer-to-Peer (Multi-Master)

**Opis:**
Każdy węzeł może obsługiwać zapisy i odczyty.

**Cechy:**

* Brak centralnego węzła
* Dane replikowane między równorzędnymi węzłami

**Zalety:**

* Wysoka dostępność
* Brak pojedynczego punktu awarii

**Wady:**

* Trudniejsza kontrola spójności
* Konieczność rozwiązywania konfliktów

---

## 12. Bazy NoSQL typu Klucz–Wartość – cechy, zalety i wady

**Opis:**
Bazy klucz–wartość przechowują dane jako pary: unikalny klucz oraz przypisana do niego wartość.

**Najważniejsze cechy:**

* Bardzo prosty model danych
* Brak schematu
* Szybki dostęp do danych po kluczu

**Zalety:**

* Bardzo wysoka wydajność
* Łatwa skalowalność horyzontalna
* Prosta implementacja

**Wady:**

* Brak zapytań złożonych
* Brak relacji między danymi
* Ograniczone możliwości analityczne

**Przykłady baz:**

* Redis
* Amazon DynamoDB
* Riak

**Typowe zastosowania:**

* Cache danych
* Przechowywanie sesji użytkowników
* Dane konfiguracyjne

## 13. Bazy dokumentów NoSQL na przykładzie MongoDB

### Ogólna charakterystyka

**MongoDB** to dokumentowa baza danych NoSQL, w której dane przechowywane są w postaci dokumentów BSON (binarny JSON).

**Cechy charakterystyczne:**

* Brak sztywnego schematu danych
* Dokumenty grupowane w kolekcje
* Obsługa złożonych struktur danych (obiekty, tablice)
* Wysoka skalowalność horyzontalna (sharding)
* Mechanizmy replikacji (Replica Set)

**Zastosowania:**

* Aplikacje webowe i mobilne
* Systemy CMS
* Przetwarzanie danych półustrukturyzowanych

---

### Modelowanie danych: referencje vs zagnieżdżenia

#### Zagnieżdżenia (Embedding)

**Opis:**
Dokument zawiera w sobie inne dokumenty.

**Zalety:**

* Szybki odczyt (brak JOIN)
* Dane logicznie powiązane w jednym miejscu

**Wady:**

* Duplikacja danych
* Problemy przy dużych dokumentach

**Przykład:**
Dokument *zamówienie* zawiera listę pozycji zamówienia.

---

#### Referencje (References)

**Opis:**
Dokumenty są powiązane poprzez identyfikatory.

**Zalety:**

* Mniejsza redundancja danych
* Łatwiejsze aktualizacje

**Wady:**

* Konieczność wielu zapytań
* Wolniejszy odczyt

**Zasada projektowa:**
Zagnieżdżenia stosuje się przy relacjach 1:N o małej zmienności, referencje – przy dużych lub współdzielonych zbiorach danych.

---

## 14. Porównanie podejścia relacyjnego i NoSQL

| Aspekt       | Relacyjne bazy danych | NoSQL                         |
| ------------ | --------------------- | ----------------------------- |
| Model danych | Tabele, relacje       | Dokumenty, klucze, kolumny    |
| Schemat      | Sztywny               | Elastyczny                    |
| Skalowalność | Głównie wertykalna    | Horyzontalna                  |
| Spójność     | ACID                  | BASE / eventual consistency   |
| JOIN         | Tak                   | Ograniczone lub brak          |
| Zastosowania | Systemy transakcyjne  | Systemy rozproszone, Big Data |

**Wniosek:**
Bazy relacyjne zapewniają silną spójność, natomiast NoSQL oferuje elastyczność i skalowalność kosztem spójności.

---

## 15. Koncepcja baz danych NewSQL – zalety i wady

**Definicja:**
NewSQL to nowa generacja relacyjnych baz danych, łącząca zalety SQL i ACID z wysoką skalowalnością charakterystyczną dla NoSQL.

**Cechy:**

* Zachowanie języka SQL
* Pełne wsparcie transakcji ACID
* Architektura rozproszona

**Zalety:**

* Wysoka spójność danych
* Skalowalność horyzontalna
* Znany model relacyjny

**Wady:**

* Złożoność architektury
* Wyższe koszty wdrożenia
* Mniejsza dojrzałość niż klasyczne RDBMS

**Przykłady:**

* Google Spanner
* CockroachDB
* VoltDB

---

## 16. Twierdzenie CAP w kontekście NoSQL

**Twierdzenie CAP** mówi, że w **systemie rozproszonym** nie da się jednocześnie zagwarantować trzech właściwości:

- **C (Consistency – spójność)**  
    Każdy odczyt zwraca najbardziej aktualne, poprawne dane.
- **A (Availability – dostępność)**  
    Każde żądanie do systemu otrzymuje odpowiedź (nawet jeśli nie jest ona najnowsza).
- **P (Partition Tolerance – odporność na podział sieci)**  
    System działa poprawnie mimo przerw w komunikacji między węzłami.

**Możliwe jest spełnienie tylko dwóch z trzech cech jednocześnie.**

---

### CAP a bazy NoSQL

W praktyce systemy NoSQL **zawsze zakładają P (Partition Tolerance)**, bo działają w środowisku rozproszonym.  
Dlatego wybór dotyczy kompromisu między **C i A**:

- **CP (Consistency + Partition Tolerance)**
    - System zachowuje spójność kosztem dostępności
    - Przy problemach sieciowych może odrzucać żądania
    - Przykład: **HBase, MongoDB (w trybie majority)**
- **AP (Availability + Partition Tolerance)**
    - System jest zawsze dostępny
    - Dopuszcza chwilową niespójność danych (eventual consistency)
    - Przykład: **Cassandra, DynamoDB**
- **CA (Consistency + Availability)**
    - Brak odporności na podziały sieci
    - Rzadko spotykane w systemach rozproszonych
    - Typowe raczej dla klasycznych baz relacyjnych
