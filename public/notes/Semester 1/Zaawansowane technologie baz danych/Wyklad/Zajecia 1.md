# Ocena Efektywności Systemów Komputerowych

_Notatki rozszerzone na podstawie wykładu i notatek własnych_  
Rok akademicki 2025/2026

---

## 1. Organizacja kursu

**Prowadzący:** Zakład Technologii Przetwarzania Danych  
**Forma zajęć:**

- 3 wykłady
- laboratoria (zajęcia praktyczne, testy, ćwiczenia)

**Zaliczenie:**

- test wielokrotnego wyboru (materiał z wykładów + laboratoria),
- ocena z aktywności na laboratoriach,
- dopuszczalne drobne nieobecności (do nadrobienia).

**Hasła do e-kursów (laboratoria):**

- **grupa 1:** `ztbd_ajajaj`
- **grupa 2:** `ztbd_ojojoj`

**Platforma e-kursów:**  
Materiały dydaktyczne są dostępne na systemie Moodle. Prawidłowy kurs ma nazwę z rokiem _2025/2026_.  
Niektóre starsze kursy są widoczne omyłkowo – należy korzystać tylko z aktualnego.

---

## 2. Wprowadzenie: komunikacja i społeczeństwo informacyjne

### 2.1. Komunikacja

**Komunikacja** – proces wymiany znaków symbolicznych, niekoniecznie językowych.  
Już w latach 70. XX w. rozwinięto teorie semiotyczne (znaki, symbole, znaczenia).  
Znaki komunikacyjne mogą być dźwiękowe, wizualne lub gestyczne.

**Człowiek jako istota komunikująca się:**

- Żyje w społeczeństwie, dziedziczy wiedzę poprzednich pokoleń.
- Komunikacja umożliwia przekazywanie doświadczenia i kultury.

### 2.2. Społeczność i rozwój cywilizacji

Ewolucja społeczeństw (wg ujęcia informatycznego i socjologicznego):

1. **Społeczeństwo agrarne** – oparte na uprawie ziemi i pracy fizycznej.
2. **Społeczeństwo przemysłowe** – oparte na przemyśle i energii.
3. **Społeczeństwo informacyjne** – oparte na wiedzy i technologii informacyjnej.

W latach 50. w Japonii zauważono, że gospodarka zaczyna się opierać nie na surowcach, lecz na **informacji i wiedzy**.  
W Europie koncepcja ta pojawiła się dopiero w latach 70., a w USA – została od razu przyjęta jako fakt.  
Powstała **Dolina Krzemowa (Silicon Valley)** – obszar uprzywilejowany dla firm technologicznych.

### 2.3. Wyzwania współczesności

- Dynamiczny rozwój technologii wymusza **uczenie się przez całe życie (lifelong learning)**.
- Zjawisko **utraconej wiedzy pokoleniowej** – młodsze pokolenia korzystają z technologii, nie rozumiejąc jej zasad działania.
- Pojawia się pytanie: _kto kontroluje sztuczną inteligencję i kod, którego nie rozumiemy?_

---

## 3. Historia rozwoju baz danych

### 3.1. Od abakusa do maszyny analitycznej

- **Abakus** – pierwowzór kalkulatora, stosowany 2400 lat p.n.e.
- **Mechanizm z Antykithiry** – antyczny przyrząd do obliczeń astronomicznych (II w. p.n.e.).
- **Pascalina** – mechaniczny kalkulator Pascala (1642 r.).
- **Karty perforowane** – początek automatyzacji danych (XIX w.).
- **Maszyna tabulacyjna Hermana Holleritha** – 1890 r., zastosowana w spisie powszechnym USA.
    - Dane zapisywane jako dziurki w kartach perforowanych.
    - Przyspieszyła obliczenia statystyczne z miesięcy do dni.
    - Hollerith założył firmę, która później przekształciła się w **IBM**.

### 3.2. Charles Babbage i Ada Lovelace

- **Charles Babbage** – twórca koncepcji maszyny analitycznej (XIX w.).
    - Zawierała elementy dzisiejszego komputera: pamięć, jednostkę obliczeniową i programy.
- **Ada Lovelace** – opracowała pierwszy program komputerowy (dla maszyny Babbage’a).
    - Uznawana za **pierwszą programistkę**.

### 3.3. Narodziny komputerów

- **Maszyna Z3 (1941)** – pierwszy w pełni działający komputer elektromechaniczny (Konrad Zuse, Niemcy).
- **ENIAC (1945)** – pierwszy komputer elektroniczny w USA.
- **John von Neumann** – twórca modelu architektury komputera, stosowanego do dziś (pamięć + program).

### 3.4. IBM i rewolucja danych

- IBM wprowadził pierwszy **dysk twardy (HDD)** w 1956 roku (pojemność 5 MB).  
    To umożliwiło **losowy dostęp** do danych i otworzyło drogę do tworzenia baz danych.
- Wcześniej dane były przechowywane sekwencyjnie na taśmach, co uniemożliwiało szybkie wyszukiwanie.

---

## 4. Modele baz danych

### 4.1. Pierwsza rewolucja: model hierarchiczny

- Dane zorganizowane w strukturze **drzewa** (rodzic – dziecko).
- Każdy element ma dokładnie jednego rodzica.
- Usunięcie rodzica powoduje usunięcie wszystkich jego potomków.
- Przykład: system IMS (IBM, lata 60., projekt Apollo).

**Wady:**

- Duplikacja danych przy wielu relacjach,
- Brak elastyczności (zmiana struktury = zmiana programu).

### 4.2. Model sieciowy

- Rozszerzenie modelu hierarchicznego: element może mieć wielu rodziców.
- Struktura grafu, łączenie przez wskaźniki.
- Problem: trudna implementacja, zależność od fizycznej organizacji danych.

### 4.3. Druga rewolucja: model relacyjny (E. F. Codd, 1970)

**Praca:** _A Relational Model of Data for Large Shared Data Banks_ (Communications of the ACM, 1970).

**Założenia:**

- Dane przechowywane w **tabelach (relacjach)**.
- Każdy wiersz = krotka, kolumna = atrybut.
- Każda relacja ma klucz główny (unikalny identyfikator).
- Związki między tabelami przez **klucze obce**.
- Operacje wykonywane za pomocą języka deklaratywnego (SQL).

**Zalety:**

- Niezależność logiczna od fizycznego zapisu,
- Łatwość w rozbudowie,
- Wysoki poziom abstrakcji.

### 4.4. Język SQL i transakcje

- Opracowany przez IBM (System R, lata 70.)
- Standaryzowany w ANSI (SQL-86, SQL-92, SQL:1999, SQL:2016 itd.).
- Operacje CRUD (Create, Read, Update, Delete).

**Właściwości transakcji (ACID):**

- **Atomicity** – transakcja jest niepodzielna,
- **Consistency** – zachowanie spójności danych,
- **Isolation** – niezależność transakcji,
- **Durability** – trwałość po zatwierdzeniu.

### 4.5. Kolejne pokolenia baz danych

- **Obiektowo-relacyjne (ORDBMS)** – rozszerzenie relacyjnego modelu o obiekty, typy złożone i dziedziczenie.
- **NoSQL** – systemy nierelacyjne: dokumentowe, klucz-wartość, grafowe, kolumnowe.
    - Przykłady: MongoDB, Cassandra, Neo4j, Redis.
    - Stosowane w Big Data i przetwarzaniu nienormowanych danych.
- **NewSQL** – nowoczesne systemy relacyjne o wysokiej skalowalności (np. CockroachDB, Google Spanner).

---

## 5. Systemy OLTP i OLAP

|Cecha|**OLTP (Online Transaction Processing)**|**OLAP (Online Analytical Processing)**|
|---|---|---|
|Użytkownik|Pracownik operacyjny („zwykły użytkownik”)|Analityk biznesowy|
|Funkcja|Bieżące operacje, kluczowe dla firmy|Wspomaganie decyzji|
|Dane|Bieżące, elementarne|Elementarne i zagregowane|
|Aplikacje|Powtarzalne działania|Analizy ad-hoc|
|Dostęp|Odczyt i zapis|Głównie odczyt|
|Transakcje|Krótkie (sekundy)|Długie (godziny)|
|Rekordy|Kilka–kilkadziesiąt|Miliony i więcej|
|Użytkownicy|Dziesiątki, tysiące|Kilku–kilkunastu|
|Rozmiar|Setki GB|Dziesiątki TB|

**OLTP** – systemy operacyjne, np. bankowe, sklepy internetowe, systemy rezerwacji.  
**OLAP** – analizy danych historycznych, np. sprzedaży, finansów, trendów.

**Problemy przy integracji OLTP z OLAP:**

- różna charakterystyka dostępu,
- konieczność centralizacji danych,
- równoczesna eksploatacja może obniżać wydajność.

---

## 6. Hurtownie danych

### 6.1. Definicja

**Hurtownia danych (Data Warehouse)** – zintegrowany system gromadzenia i analizy danych z wielu źródeł.  
Pozwala użytkownikom podejmować decyzje biznesowe na podstawie analizy zagregowanych danych.

**Według Billa Inmona:**

> Hurtownia danych to zorientowana tematycznie, zintegrowana, nieulotna i zmienna w czasie kolekcja danych, wspierająca proces podejmowania decyzji.

### 6.2. Cechy hurtowni danych

- **Zorientowana tematycznie** – dane dotyczą określonych obszarów (np. sprzedaż, marketing).
- **Zintegrowana** – dane pochodzą z różnych źródeł, ale mają spójny format i semantykę.
- **Nieulotna (non-volatile)** – dane są tylko odczytywane, nie modyfikowane.
- **Zmienna w czasie (time-variant)** – uwzględnia historię danych.

### 6.3. Cel stosowania hurtowni

- Jednolity dostęp do danych w przedsiębiorstwie.
- Wsparcie procesów decyzyjnych (DSS – Decision Support Systems).
- Analizy scenariuszy („what-if analysis”).
- Archiwizacja danych.
- Wykrywanie wzorców, zależności, anomalii.

**Technologia OLAP** stanowi logiczną warstwę nad hurtownią danych, umożliwiającą:

- eksplorację danych (drill-down, roll-up),
- klasyfikację, regresję, grupowanie,
- wykrywanie trendów i anomalii.

---

## 7. Współczesne kierunki i technologie

### 7.1. Big Data

- Ogromne wolumeny danych generowane przez Internet, IoT, systemy mobilne.
- Technologie: Hadoop, Spark, Hive.
- Cechy: **Volume, Variety, Velocity, Veracity, Value (5V)**.

### 7.2. Sztuczna inteligencja i bazy danych

- Analiza danych wspierana przez uczenie maszynowe (ML).
- Modele predykcyjne oparte na danych z hurtowni.
- Automatyczne indeksowanie i optymalizacja zapytań.

### 7.3. Cloud Computing i rozproszone systemy danych

- Bazy w chmurze: Amazon RDS, Google BigQuery, Azure SQL.
- Skalowalność, elastyczność, model pay-as-you-go.
- Nowe problemy: bezpieczeństwo, dostępność, zgodność (compliance).

---

## 8. Model relacyjny – podsumowanie

**Baza danych** = struktury + dane + operacje.  
Zbiór relacji (tabel), w których:

- nazwy atrybutów są unikalne,
- krotki (wiersze) nie powtarzają się,
- kolejność krotek nie ma znaczenia,
- relacje połączone są przez klucze obce,
- każda relacja opisuje pojedynczy obiekt lub fakt.

**Brak wskaźników:** powiązania logiczne oparte na wartościach atrybutów, nie na adresach w pamięci.

---

## 9. Podsumowanie i wnioski

Rozwój baz danych od mechanicznych maszyn obliczeniowych po współczesne rozproszone systemy odzwierciedla ewolucję sposobu, w jaki ludzkość gromadzi i przetwarza wiedzę.  
Od kart perforowanych po sztuczną inteligencję – celem zawsze było jedno: **efektywne zarządzanie informacją**.

Dziś systemy baz danych to nie tylko narzędzia informatyczne, lecz kluczowy element infrastruktury informacyjnej społeczeństwa.  
Ich efektywność decyduje o wydajności gospodarki, bezpieczeństwie danych i jakości decyzji biznesowych.