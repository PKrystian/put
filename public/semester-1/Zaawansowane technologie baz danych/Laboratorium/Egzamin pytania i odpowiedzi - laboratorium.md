## a) Ogólne rozwiązania stosowane w PDI (Pentaho Data Integration)

## 1. ETL / ELT

### ETL (Extract, Transform, Load)

**Definicja (z prezentacji):**  
ETL to proces (lub zbiór procesów) zasilania hurtowni danych danymi pochodzącymi ze źródeł.

**Etapy ETL:**
- **Extract (Ekstrakcja)**
    - Połączenie ze źródłami danych
    - Pobranie danych w formie umożliwiającej dalsze przetwarzanie
        
- **Transform (Transformacja)**
    - Operacje na danych, m.in.:
        - sprawdzanie poprawności
        - konwersje typów
        - obliczanie agregatów
            
- **Load (Ładowanie)**
    - Wstawianie danych do hurtowni danych
    - Obejmuje m.in.:
        - zarządzanie kluczami
        - utrzymywanie historii wymiarów (ważne pod SCD – ale szczegóły później)

### ELT

- Alternatywne podejście do ETL
- Transformacje wykonywane **po załadowaniu danych do bazy**
- W PDI **występuje jako koncepcja**, ale klasyczne ETL jest podstawowe

 **Na test:** ETL = ekstrakcja → transformacja → ładowanie (w tej kolejności)

---

## 2. Agile Business Intelligence (Agile BI)

### Główna idea

- Procesy ETL rozwija się **jak oprogramowanie**
- Rosnąca popularność **zwinnych metodyk**
- **Agile BI** ma na celu:
    - szybką adaptację do zmian biznesowych

### Cechy Agile BI (z prezentacji):

- **Realizacja przyrostowa**
- **Szybkie tworzenie podstawowych elementów** (np. procesów ETL)
- **Łatwe i szybkie wprowadzanie zmian**

### Wymagania wobec narzędzia ETL:

- Narzędzie powinno **wspierać Agile BI**

 **Na test:** Agile BI = elastyczność, iteracyjność, szybkie zmiany

---

## 3. Pentaho Data Integration (PDI)

### Kettle

- **Community Edition** Pentaho DI
- Rozwinięcie nazwy:
    - **K**
    - **E** – Extraction
    - **T** – Transformation
    - **T** – Transportation
    - **L** – Loading
    - **E**

### Implementacja

- Język: **Java**
- Systemy:
    - Windows
    - Unix / Linux

---

## 4. Podstawowe składniki Kettle

### Spoon

- Graficzny interfejs użytkownika (GUI)
- Projektowanie:
    - transformacji
    - zadań (jobs)

### Kitchen

- Program do **uruchamiania zadań (jobs)**

### Pan

- Program do **uruchamiania transformacji**

 **Na test (bardzo ważne):**

- Spoon = projektowanie
- Pan = transformacje
- Kitchen = zadania

---

## 5. Podstawowe pojęcia w PDI

### Transformacja (Transformation)

- Wykonywanie działań na **wierszach danych**
- Składa się z wielu **kroków (steps)**, np.:
    - odczyt
    - filtrowanie
- **Kroki wykonywane są równolegle** ⚠️

### Zadanie (Job)

- Składa się z:
    - wielu transformacji
    - innych elementów (np. warunki, pliki)
- **Wykonanie sekwencyjne** ⚠️

 **Kontrast na test:**

- Transformacja → równolegle
- Zadanie → sekwencyjnie

---

### Połączenie (Hop)

- Reprezentuje **skierowany przepływ danych**
- Między:
    - krokami transformacji
    - elementami zadania
- Cechy:
    - bufor danych
    - **FIFO**
    - bufor ma **ograniczony rozmiar**

---

## 6. Krok (Step)

- Nazwany, **elementarny składnik transformacji**
- Może mieć:
    - wiele wejść
    - wiele wyjść
- **Nie istnieje krok początkowy**
- Wszystkie kroki:
    - wykonywane są **równolegle**
- Dane z wszystkich wejść:
    - muszą mieć **taką samą strukturę**

 Typowe pytanie testowe:  
„Czy w transformacji istnieje krok startowy?” → **NIE**

---

## 7. Repozytorium w PDI

### Co zawiera repozytorium?

- Zadania
- Transformacje
- Połączenia
- Inne elementy procesu ETL

### Rodzaje repozytorium

1. **Serwer Pentaho**
    - Dedykowany system do utrzymywania repozytorium
2. **Repozytorium w bazie danych**
    - Łatwe współdzielenie
    - Bezpieczeństwo zapewnia SZBD
3. **Repozytorium plikowe**
    - Virtual File System
    - Może być:
        - katalog
        - plik ZIP
        - zdalny serwer (np. FTP)

### Pliki poza repozytorium

- Zadania: `*.kjb`
- Transformacje: `*.ktr`
- Format: **XML**

---

## 8. Agile BI w Pentaho Data Integration

Pentaho DI **aktywnie wspiera Agile BI** poprzez:

- Łatwą instalację
- Minimalną liczbę parametrów
    - np. brak konieczności podawania klasy sterownika JDBC
- Predefiniowane, parametryzowane kroki transformacji
- Prawie cała funkcjonalność dostępna w GUI
- Minimalizację ilości informacji:
    - np. brak mapowań dla każdego pola
- Dowolne nazewnictwo komponentów
- Możliwość **podglądu przetwarzanych danych**

 **Na test:** Pentaho DI = narzędzie przyjazne Agile BI

---

## 9. Przykład transformacji (z prezentacji)

### Transformacja pracowników:

- Odczytuje tylko dane:
    - które uległy zmianie od ostatniego uruchomienia
- Odczytuje dane:
    - tylko z jednego sklepu
- Dla każdego pracownika:
    - wyznacza adres zamieszkania
    - używa **transformacji podrzędnej**
- Wprowadza zmiany do:
    - wymiaru **PRACOWNICY** w hurtowni danych

---

## 10. Transformacja podrzędna

- Wywoływana z innej transformacji
- Może:
    - pobierać parametry (np. ID pracownika)
    - zwracać wynik jako **strumień krotek**
- Funkcje:
    - odczyt danych adresowych z bazy
    - zamiana adresu dwukolumnowego na jeden atrybut
## b) Data Warehouse Staging Area (DSA) oraz Change Data Capture (CDC)

## 1. Data Warehouse Staging Area (DSA)

### Co to jest Data Warehouse Staging Area?

**Definicja (z prezentacji):**  
DSA to **miejsce składowania danych wykorzystywanych podczas procesów ETL**, które znajduje się:
- pomiędzy **źródłami danych a hurtownią danych**
- oraz pomiędzy **hurtownią danych a data martami**

 **Na test:**  
DSA ≠ hurtownia danych  
DSA ≠ data mart  
DSA = obszar _pośredni_ dla ETL

---

## 2. Cechy danych przechowywanych w DSA

Dane w DSA mogą:

-  **mieć charakter tymczasowy**
    - po poprawnym załadowaniu do HD mogą być **usuwane**
-  **pełnić rolę słowników**
    - wykorzystywanych w procesach ETL
- **zawierać poprzednie obrazy danych źródłowych**
    - np. do porównania z bieżącą wersją danych
-  **zawierać dane pośrednie**
    - powstające na kolejnych etapach ETL

 **Na test:**  
DSA **nie musi** przechowywać tylko danych tymczasowych – _może_, ale nie _musi_.

---

## 3. Do czego wykorzystywany jest DSA?

DSA może służyć do:
1. **Przechowywania danych z wielu źródeł**,  
    które będą **wielokrotnie wykorzystywane** w procesach ETL
2. **Szybkiego i prostego zrzutu danych ze źródeł**,  
    aby kolejne procesy ETL:
    - **nie obciążały systemów źródłowych**
3. **Wyszukiwania zmian**:
    - pomiędzy **bieżącą i poprzednią postacią systemów źródłowych**
    - w **bieżącej postaci hurtowni danych i data martów**
4. **Wieloetapowych transformacji danych**
    - ze składowaniem **pośrednich wyników przetwarzania**
5. **Wyznaczania agregatów**
6. **Przygotowania danych w postaci docelowej**
    - szczególnie **tabel faktów**
    - w celu **wydajnego ładowania do hurtowni danych**

 **Na test:**  
DSA = miejsce:

- porównań
- agregacji
- buforowania
- przygotowania danych końcowych

---

## 4. Change Data Capture (CDC)

### Co to jest CDC?

**Definicja (z prezentacji):**  
CDC to **proces wykrywania zmian w źródłach danych**.

---

## 5. Podział CDC

### CDC inwazyjne

#### a) Source-Based CDC

- Oparte bezpośrednio na danych źródłowych

#### b) Trigger-Based CDC

- Wykorzystuje **wyzwalacze (triggery)** w bazie danych

#### c) Snapshot-Based CDC

- Oparte na **porównaniu dwóch obrazów danych**
- Bieżącego i poprzedniego

---

### 2️ CDC nieinwazyjne

#### d) Log-Based CDC

- Oparte na **analizie dzienników bazy danych**
    - np. redo logs, transaction logs

 **Na test:**  
Tylko **Log-Based CDC** jest **nieinwazyjne**

---

## 6. Snapshot-Based CDC (ważne!)

### Na czym polega?

- Porównanie:
    - **poprzedniej wersji danych** (często w OSA / DSA)
    - z **bieżącą wersją danych**

### Wykrywane zmiany:

####  Wstawienia

```sql
SELECT * 
FROM DANE_BIEZACE 
WHERE ID NOT IN (SELECT ID FROM DANE_POPRZEDNIE)
```

####  Usunięcia

```sql
SELECT * 
FROM DANE_POPRZEDNIE 
WHERE ID NOT IN (SELECT ID FROM DANE_BIEZACE)
```

####  Modyfikacje

```sql
SELECT * 
FROM DANE_BIEZACE B 
JOIN DANE_POPRZEDNIE P ON (B.ID = P.ID) 
WHERE B.C1 <> P.C1 OR B.C2 <> P.C2 OR ...
```

 **Na test:**  
Snapshot-Based CDC:

- wykrywa INSERT / DELETE / UPDATE
- **nie wykrywa wielu modyfikacji tego samego rekordu**

---

## 7. Log-Based CDC

### Charakterystyka:

- Analiza **dzienników generowanych przez bazę danych**
- **Najmniej inwazyjny** sposób wykrywania zmian
- Bardzo często używany w praktyce

### Przykładowe narzędzia (z prezentacji):

- Oracle GoldenGate
- Qlik CDC (Attunity Stream)
- Wisdomforce
- Mysqlbinlog

 **Na test:**  
Log-Based CDC:

- wspiera systemy czasu rzeczywistego
- jest wydajne
- ale **wymaga zaangażowania administratora bazy**

---

## 8. Porównanie typów CDC (TABELA EGZAMINACYJNA)

Najważniejsze wnioski z tabeli:

### Rozróżnienie INSERT vs UPDATE

- ❌ Source-Based
- ✅ Trigger-Based
- ✅ Snapshot-Based
- ✅ Log-Based

### Detekcja wielu modyfikacji

- ❌ Source-Based
- ✅ Trigger-Based
- ❌ Snapshot-Based
- ✅ Log-Based

### Detekcja usunięć

- ❌ Source-Based
- ✅ Trigger-Based
- ✅ Snapshot-Based
- ✅ Log-Based

### Bezinwazyjność

- ❌ Source-Based
- ❌ Trigger-Based
- ❌ Snapshot-Based
- ✅ **Log-Based**

### Wsparcie systemów czasu rzeczywistego

- ❌ Source-Based
- ✅ Trigger-Based
- ❌ Snapshot-Based
- ✅ Log-Based

### Wymagane zaangażowanie administratora bazy

- ❌ Source-Based
- ✅ Trigger-Based
- ❌ Snapshot-Based
- ✅ Log-Based

### Niezależność od bazy danych

- ✅ Source-Based
- ❌ Trigger-Based
- ✅ Snapshot-Based
- ❌ Log-Based

# c) Slowly Changing Dimensions (SCD)

## 1. Czyszczenie danych (Data Cleansing)

### Czym jest czyszczenie danych?

Czyszczenie danych to:
- **bardzo złożone zagadnienie**
- obejmujące **wiele różnorodnych działań**
- mające wpływ na:
    - hurtownię danych
    - obszar **ODS**
    - a nawet **źródła danych**

### Kolejność działań

- Czyszczenie danych jest **poprzedzone oceną jakości danych**
- Ocena jakości = **profilowanie danych**

 **Na test:**
- Profilowanie danych **poprzedza** czyszczenie
- Czyszczenie danych **nie dotyczy wyłącznie hurtowni danych**

---

## 2. Slowly Changing Dimension – idea

### Założenia

- Hurtownia danych zawiera dane:
    - **trwałe**
    - **nieulotne**
- Nielotność wymusza:
    - **uwzględnianie zmian atrybutów wymiarów w czasie**

### Slowly Changing Dimensions (SCD)

SCD to **sposoby obsługi zmian w danych wymiarów**.

---

## 3. Typy Slowly Changing Dimensions

###  Type 0 – brak działań

- Zmiany **nie są uwzględniane**
- Wartości:
    - nigdy się nie zmieniają
- Przykład:
    - data urodzenia

👉 **Na test:**  
Type 0 = brak aktualizacji danych

---

###  Type 1 – nadpisywanie (Overwrite)

- **Poprzednie wartości są tracone**
- Aktualizacja:
    - nadpisuje stare dane nowymi
- Brak historii zmian

 **Cechy kluczowe:**
- brak śledzenia historii
- proste w implementacji

**Na test:**  
Type 1 ≠ historia zmian

---

### Type 2 – nowe wersje danych (najważniejszy!)

- Każda zmiana powoduje:
    - **dodanie nowego rekordu**
- Stare dane:
    - pozostają w tabeli
- Stosuje się dodatkowe atrybuty, np.:
    - **sztuczny klucz (surrogate key)**
    - numer wersji
    - daty obowiązywania:
        - `START`
        - `STOP`

 **Efekt:**
- Pełna historia zmian
- Wiele rekordów dla jednego bytu biznesowego

 **Na test:**  
Type 2 = **historia + wiele wersji + surrogate key**

---

###  Type 3 – dodatkowe atrybuty

- Przechowywana jest:
    - **bieżąca wartość**
    - **poprzednia wartość**
- Realizacja:
    - dodatkowe kolumny, np.:
        - `KOD_OLD`
        - `MIASTO_OLD`

 **Ograniczenie:**
- Historia **bardzo ograniczona** (zwykle tylko jedna zmiana)

 **Na test:**  
Type 3 ≠ pełna historia

---

###  Type 4 – osobna struktura historii

- Dane bieżące:
    - w **głównej tabeli wymiaru**
- Dane historyczne:
    - w **oddzielnej tabeli**
- Tabela historyczna:
    - posiada własny **sztuczny klucz**

 **Na test:**  
Type 4 = **dodatkowa tabela wymiaru**

---

## 4. Porównanie typów SCD (w skrócie)

|Typ|Historia|Mechanizm|
|---|---|---|
|Type 0|❌ brak|brak zmian|
|Type 1|❌ brak|nadpisywanie|
|Type 2|✅ pełna|nowe rekordy|
|Type 3|⚠️ ograniczona|dodatkowe kolumny|
|Type 4|✅ pełna|osobna tabela|

---

## 5. Wpływ SCD na relację tabel faktów

### Zależność faktów od typu SCD

- **Type 0**
    - brak zmian w faktach
- **Type 1**
    - brak zmian w faktach
- **Type 2**
    - tabela faktów:
        - posiada **klucz obcy**
        - oparty na **sztucznym kluczu głównym wymiaru (surrogate key)**
- **Type 3**
    - brak zmian w relacji faktów
- **Type 4**
    - dodatkowa tabela wymiaru
    - posiada **sztuczny klucz główny**
    - wymaga:
        - **dodatkowego klucza obcego w tabeli faktów**

**Najważniejsze pod test:**
- **Type 2 i Type 4 wpływają na klucze w tabeli faktów**
- Type 2 → jeden klucz obcy (surrogate key)
- Type 4 → **dodatkowy** klucz obcy