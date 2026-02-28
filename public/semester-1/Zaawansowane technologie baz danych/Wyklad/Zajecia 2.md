# Notatki z wykładu: **Model relacyjny i hurtownie danych**

## 1. Wprowadzenie do modelu relacyjnego

Model relacyjny jest jednym z podstawowych modeli danych wykorzystywanych w systemach baz danych. Jego twórcą jest **Edgar F. Codd**, matematyk związany z firmą IBM, który w latach 70. XX wieku sformalizował sposób przechowywania i przetwarzania danych w oparciu o teorię zbiorów.

### 1.1. Definicja relacji

Relacja (tabela) to zbiór krotek (wierszy), posiadających tę samą strukturę — zestaw atrybutów (kolumn). Każda relacja ma unikalną nazwę, a w jej obrębie:

- nazwy atrybutów są unikalne;
    
- kolejność krotek nie jest określona;
    
- nie występują powtarzające się krotki;
    
- krotki są identyfikowane przez wartości atrybutów.
    

Model relacyjny opiera się więc na matematycznej teorii zbiorów — relacja jest w tym kontekście zbiorem krotek, w którym obowiązuje unikalność elementów i brak określonego porządku.

### 1.2. Ograniczenia praktyczne

W praktycznych implementacjach systemów baz danych (np. w IBM System R) wprowadzono pewne odstępstwa od modelu Codd’a. Przykładowo, ze względu na ograniczenia pamięci w latach 70., dopuszczono powtarzające się wiersze. Ostatecznie przyjęto, że relacje mogą być „multizbiorami”, a więc mogą zawierać duplikaty.

### 1.3. Klucze i powiązania

Każda relacja powinna posiadać **klucz główny (primary key)** — atrybut lub zestaw atrybutów jednoznacznie identyfikujących krotkę. Związki między relacjami reprezentowane są poprzez **klucze obce (foreign keys)**.  
Przykład: relacja _Wypożyczenia_ może zawierać klucz obcy odwołujący się do tabel _Klienci_ i _Filmy_.

### 1.4. Normalizacja

**Normalizacja** to proces eliminowania redundancji danych poprzez podział relacji na mniejsze, powiązane ze sobą tabele.  
Jej celem jest:

- redukcja anomalii aktualizacji;
    
- zapewnienie spójności logicznej danych;
    
- reprezentacja każdego obiektu świata rzeczywistego tylko raz.
    

Przykład: zamiast przechowywać dane o piłkarzu i drużynie w jednej tabeli, dane o piłkarzu i drużynie umieszcza się w dwóch relacjach, powiązanych kluczem obcym.

---

## 2. Model wielowymiarowy (OLAP)

### 2.1. Pojęcie faktu i wymiaru

W modelu wielowymiarowym dane organizuje się wokół **faktów** (np. sprzedaż, wypożyczenie, ocena) i **wymiarów** (np. czas, lokalizacja, produkt).  
Każdy fakt posiada **miary** – wartości liczbowe opisujące zdarzenie (np. liczba sztuk, kwota sprzedaży).

Przykładowo, fakt _sprzedaż produktu_ może być opisany wymiarami:

- _produkt_ (nazwa, kategoria),
    
- _czas_ (dzień, miesiąc, rok),
    
- _lokalizacja_ (miasto, województwo, kraj).
    

### 2.2. Kostka danych (data cube)

Dane można wizualizować jako **kostkę wielowymiarową**, w której:

- każdy wymiar reprezentuje pewien aspekt analizy (np. produkt, czas, lokalizacja);
    
- komórki kostki zawierają wartości miar (np. sprzedaż, przychód).
    

W praktyce kostki mogą być:

- **2-wymiarowe** (np. produkt × lokalizacja),
    
- **3-wymiarowe** (np. produkt × lokalizacja × czas),
    
- **n-wymiarowe** (dowolna liczba wymiarów).
    

### 2.3. Hierarchie wymiarów

Wymiary mogą mieć strukturę hierarchiczną, np.:

```
Kraj → Województwo → Miasto → Sklep
```

Hierarchie pozwalają na analizę danych na różnych poziomach szczegółowości (np. sprzedaż krajowa, wojewódzka, miejska).

---

## 3. Schematy modelowania hurtowni danych

W projektowaniu hurtowni danych stosuje się różne schematy modelowania relacji między faktami a wymiarami.

### 3.1. Schemat gwiazdy (Star Schema)

- W centrum znajduje się **tabela faktów**, otoczona przez **tabele wymiarów**.
    
- W tabeli faktów przechowywane są miary oraz klucze obce do tabel wymiarów.
    
- Schemat ten jest **zdenormalizowany** – każda tabela wymiarów zawiera wszystkie niezbędne informacje.
    

**Zalety:**

- prostota i szybkość zapytań analitycznych;
    
- łatwe tworzenie indeksów.
    

**Wady:**

- redundancja danych w tabelach wymiarów.
    

### 3.2. Schemat płatka śniegu (Snowflake Schema)

- Rozwinięcie schematu gwiazdy;
    
- Tabele wymiarów są **znormalizowane**, tzn. rozbite na mniejsze tabele powiązane kluczami obcymi (np. wymiar lokalizacji: _Sklep_ → _Miasto_ → _Województwo_).
    

**Zalety:**

- mniejsza redundancja danych;
    
- większa elastyczność modyfikacji struktury.
    

**Wady:**

- większa liczba połączeń (JOIN) w zapytaniach, co obniża wydajność.
    

### 3.3. Schemat konstelacji faktów (Fact Constellation)

- Zawiera **wiele tabel faktów**, które mogą współdzielić tabele wymiarów.
    
- Stosowany w złożonych hurtowniach danych, np. sprzedaż, wypożyczenia i serwis współdzielą wymiary _czas_ i _klient_.
    

---

## 4. OLTP vs OLAP

|Cecha|OLTP (Online Transaction Processing)|OLAP (Online Analytical Processing)|
|---|---|---|
|Cel|Obsługa bieżących operacji|Analiza danych i raportowanie|
|Struktura danych|Znormalizowana|Zdenormalizowana|
|Operacje|Częste zapisy, aktualizacje|Głównie odczyty i agregacje|
|Wydajność|Optymalizacja transakcji|Optymalizacja zapytań analitycznych|
|Przykłady|System bankowy, e-commerce|Hurtownia danych, system BI|

---

## 5. Wymiar czasu

Wymiar **czasu** jest jednym z najczęściej występujących wymiarów w hurtowniach danych.  
Zawiera pola takie jak:

- data,
    
- rok,
    
- miesiąc,
    
- dzień tygodnia,
    
- kwartał,
    
- wskaźniki świąt i dni wolnych.
    

Zamiast przechowywać datę jako wartość w tabeli faktów, często tworzy się osobną tabelę wymiaru _Czas_, co umożliwia:

- łatwiejsze grupowanie i filtrowanie danych;
    
- szybsze indeksowanie;
    
- unikanie duplikacji informacji.
    

---

## 6. Architektura hurtowni danych

### 6.1. Proces ETL (Extract – Transform – Load)

1. **Extract** – pobieranie danych ze źródeł (bazy OLTP, pliki CSV, API).
    
2. **Transform** – przekształcanie danych (oczyszczanie, ujednolicanie formatów, agregacja).
    
3. **Load** – ładowanie przetworzonych danych do hurtowni.
    

### 6.2. Operacyjna składnica danych (ODS – Operational Data Store)

Warstwa pośrednia pomiędzy źródłami danych a hurtownią, która:

- pozwala przechowywać dane tymczasowe i nieulotne;
    
- ułatwia wykrywanie zmian między kolejnymi zrzutami danych;
    
- wspiera etap transformacji.
    

### 6.3. Data Mart (Hurtownia tematyczna)

- Podzbiór hurtowni danych, skoncentrowany na określonym obszarze (np. sprzedaż, marketing, finanse).
    
- Umożliwia szybszą analizę wąskiego zakresu informacji.
    
- Tworzony często na podstawie centralnej hurtowni w celu zachowania spójności terminologicznej i semantycznej danych.
    

---

## 7. Nowoczesne kierunki rozwoju

### 7.1. Hurtownie danych w chmurze

Współczesne rozwiązania coraz częściej wykorzystują środowiska chmurowe, takie jak:

- **Snowflake**, **Google BigQuery**, **Amazon Redshift**, **Azure Synapse Analytics**.
    

Zalety:

- skalowalność,
    
- wysoka dostępność,
    
- integracja z narzędziami BI.
    

### 7.2. Integracja z AI

Coraz częściej systemy bazodanowe wykorzystują **sztuczną inteligencję** do:

- optymalizacji zapytań SQL,
    
- automatycznego tworzenia indeksów,
    
- analizy wzorców użycia danych.
    

Na konferencjach branżowych (np. SIGMOD, VLDB) prezentowane są prace nad wykorzystaniem uczenia maszynowego w procesach optymalizacji i planowania zapytań.

---

## 8. Podsumowanie

Model relacyjny stanowi fundament współczesnych systemów baz danych, natomiast model wielowymiarowy rozwija jego ideę w kierunku analizy i raportowania. Hurtownie danych, zbudowane w oparciu o procesy ETL, stanowią kluczowy element systemów Business Intelligence.  
Współczesne trendy obejmują automatyzację procesów przetwarzania, integrację z rozwiązaniami chmurowymi oraz zastosowanie metod sztucznej inteligencji w optymalizacji pracy z danymi.