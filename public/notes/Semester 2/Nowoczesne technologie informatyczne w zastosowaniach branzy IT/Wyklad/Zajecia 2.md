# Wykład: Zastosowanie Data Science i AI w OLX Group

## Informacje o wykładzie

**Tematyka:** praktyczne zastosowanie Data Science, Machine Learning oraz AI w dużej platformie marketplace (OLX Group)

**Zakres:**

- architektura technologiczna OLX,
    
- przetwarzanie danych na dużą skalę,
    
- infrastruktura AWS,
    
- przykłady projektów Machine Learning,
    
- wykorzystanie Large Language Models (LLM),
    
- projektowanie systemów produkcyjnych.
    

---

# 1. OLX Group jako organizacja technologiczna

## OLX Group

OLX Group jest częścią międzynarodowej grupy Prosus (Naspers), posiadającej platformy marketplace działające na wielu kontynentach.

Przykładowe serwisy:

|Segment|Przykłady|
|---|---|
|Ogłoszenia ogólne|OLX|
|Motoryzacja|Otomoto|
|Nieruchomości|Otodom|
|Usługi|Fixly|

Platformy działają niezależnie w poszczególnych krajach, jednak wykorzystują wspólną infrastrukturę oraz rozwiązania Data Science.

---

# 2. Architektura technologiczna

## Migracja do chmury

Kilka lat temu OLX przeprowadził pełną migrację z własnych centrów danych do chmury Amazon Web Services (AWS).

Korzyści:

- skalowalność,
    
- wysoka dostępność,
    
- łatwiejsze wdrażanie nowych usług,
    
- automatyzacja infrastruktury,
    
- możliwość stosowania architektury serverless.
    

---

## Backend

Główne technologie:

- Go
    
- Kotlin
    
- Kubernetes (Amazon EKS)
    
- mikroserwisy
    

---

## Frontend

### Web

- React
    
- TypeScript
    
- nowoczesne frameworki JavaScript
    

### Mobile

Obecnie:

- Flutter
    
- Dart
    

Wcześniej:

- Android — Java/Kotlin
    
- iOS — Swift
    

### Zalety Fluttera

- jeden kod źródłowy,
    
- jednoczesne wdrażanie na Android i iOS,
    
- niższy koszt utrzymania,
    
- krótszy czas developmentu.
    

---

# 3. Dział Data

Prelegent pracuje w obszarze Data.

Celem zespołu jest:

- analiza zachowań użytkowników,
    
- budowa modeli ML,
    
- wspieranie decyzji biznesowych,
    
- automatyzacja procesów.
    

---

# 4. Dane użytkowników

Platforma rejestruje wiele typów zdarzeń.

Przykłady:

- kliknięcia,
    
- wyświetlenia,
    
- czas spędzony na stronie,
    
- przejścia między ekranami,
    
- wyszukiwania,
    
- publikowanie ogłoszeń,
    
- komunikację na czacie,
    
- korzystanie z aplikacji mobilnej,
    
- reakcje na reklamy.
    

Dzięki temu możliwe jest:

- analiza UX,
    
- wykrywanie problemów,
    
- personalizacja,
    
- rekomendacje,
    
- predykcja zachowań.
    

---

# 5. Testy A/B

Nowe funkcjonalności nie są wdrażane od razu wszystkim użytkownikom.

Proces:

1. Tworzone są dwie wersje.
    
2. Użytkownicy są losowo dzieleni.
    
3. Analizowane są metryki.
    
4. Wykonywane są testy statystyczne.
    
5. Lepsza wersja trafia do wszystkich użytkowników.
    

## Przykład

Zmiana koloru przycisku:

- zielony
    
- niebieski
    

Dopiero analiza danych pokazuje, która wersja zwiększa skuteczność.

---

# 6. Big Data w OLX

## Data Lake

Podstawowym magazynem danych jest:

**Amazon S3**

Przechowywane są:

- logi aplikacji,
    
- dane użytkowników,
    
- dane biznesowe,
    
- dane analityczne,
    
- dane treningowe.
    

Objętość:

- setki terabajtów skompresowanych danych.
    

---

## Hurtownia danych

Przetwarzane są:

- tysiące tabel,
    
- dziesiątki tysięcy kolumn,
    
- modele wymiarowe,
    
- tabele faktów.
    

Do analiz wykorzystywane są:

- Trino
    
- Redshift
    
- Spark
    
- SQL
    

---

# 7. RODO (GDPR)

Obowiązuje ścisła kontrola dostępu do danych.

Nie każdy pracownik ma dostęp do:

- danych osobowych,
    
- danych klientów,
    
- pełnych rekordów.
    

Stosowane są:

- anonimizacja,
    
- ograniczenia uprawnień,
    
- podział danych według poziomu dostępu.
    

---

# 8. Znaczenie danych dla AI

Kluczowa obserwacja wykładu:

> Rozwój współczesnych modeli AI był możliwy przede wszystkim dzięki zgromadzeniu ogromnych ilości danych.

Bez odpowiednich danych:

- modele nie mogą być trenowane,
    
- nie osiągają wysokiej jakości,
    
- nie rozwiązują rzeczywistych problemów.
    

---

# 9. Technologie wykorzystywane w projektach

## Języki

- Python
    
- SQL
    
- Go
    
- Kotlin
    

---

## Biblioteki

- Pandas
    
- NumPy
    
- GeoPy
    
- NLTK
    
- scikit-learn
    
- FastText
    

---

## Frameworki

- Apache Airflow
    
- Apache Spark
    
- Trino
    

---

## AWS

- Lambda
    
- S3
    
- SageMaker
    
- EventBridge
    
- DynamoDB
    
- Redshift
    
- EKS
    

---

# 10. Projekt: Wykrywanie transakcji na czacie

## Problem

Kupujący i sprzedający uzgadniają transakcję na czacie.

Firma chciała automatycznie wykrywać moment zawarcia transakcji.

---

## Problem ML

Nie istniały:

- oznaczone dane,
    
- gotowy zbiór treningowy,
    
- etykiety transakcji.
    

Klasyczny problem uczenia nadzorowanego.

---

## Rozwiązanie

Najpierw stworzono dane treningowe.

Proces:

1. użytkownik kończy rozmowę,
    
2. system pyta o rezultat,
    
3. odpowiedzi stają się etykietami,
    
4. powstaje zbiór treningowy.
    

Dopiero wtedy wytrenowano model.

---

## Wniosek

Największym problemem projektów ML bardzo często nie jest sam model, lecz pozyskanie odpowiednich danych.

---

# 11. Projekt: Automatyczna wycena nieruchomości (AVM)

Automated Valuation Model.

Cel:

oszacowanie wartości nieruchomości.

---

## Dane wejściowe

- lokalizacja,
    
- powierzchnia,
    
- liczba pokoi,
    
- piętro,
    
- rok budowy,
    
- opis,
    
- zdjęcia.
    

---

## Feature Engineering

Dodatkowo wykorzystywane są:

- otoczenie,
    
- sąsiedztwo,
    
- infrastruktura,
    
- komunikacja,
    
- odległość od obiektów.
    

---

## Wpływ otoczenia

Na cenę wpływają m.in.:

- szkoły,
    
- szpitale,
    
- komunikacja miejska,
    
- tereny zielone,
    
- hałas,
    
- obiekty religijne,
    
- centra handlowe.
    

---

## Aktualizacja cen historycznych

Rynek nieruchomości zmienia się dynamicznie.

Dlatego historyczne ceny muszą zostać:

- przeskalowane,
    
- znormalizowane,
    
- uwzględnione względem aktualnych trendów.
    

---

## LLM

Modele językowe służą do:

- analizy opisów,
    
- wydobywania brakujących parametrów,
    
- uzupełniania danych.
    

---

## Efekt

Model jest dostępny dla użytkowników Otodom.

Prezentowany jest:

- przewidywany przedział wartości nieruchomości.
    

---

# 12. Projekt: Automatyczne tworzenie ogłoszeń

Problem:

wypełnianie formularzy jest czasochłonne.

---

## Rozwiązanie

Po dodaniu zdjęć system automatycznie:

- wybiera kategorię,
    
- generuje opis,
    
- uzupełnia parametry,
    
- proponuje tytuł.
    

Wykorzystywane są modele LLM.

---

## Kluczowa metryka

Najważniejsza była:

**latencja (response time).**

Czas oczekiwania musi wynosić około 1–2 sekund.

Dłuższe oczekiwanie powoduje spadek satysfakcji użytkowników.

---

# 13. Projekt: Podsumowanie rozmów telefonicznych

Rozmowy konsultantów są:

1. nagrywane,
    
2. transkrybowane,
    
3. analizowane przez modele AI.
    

Automatycznie generowane są:

- streszczenia,
    
- sentyment,
    
- najważniejsze ustalenia,
    
- wiadomości follow-up.
    

Efekty:

- oszczędność czasu,
    
- większa produktywność,
    
- ujednolicenie dokumentacji.
    

---

# 14. Projekt: Wykrywanie duplikatów nieruchomości

## Problem

Ta sama nieruchomość może być opublikowana:

- wielokrotnie,
    
- przez różnych agentów,
    
- na wielu portalach.
    

---

## Cel

Automatyczne wykrycie, że dwa ogłoszenia opisują ten sam obiekt.

---

## Cechy modelu

Porównywane są m.in.:

- zdjęcia,
    
- cena,
    
- powierzchnia,
    
- piętro,
    
- lokalizacja,
    
- opis,
    
- liczba pokoi.
    

---

## Analiza obrazów

Zdjęcia przekształcane są do hashy (Image Hashing).

Porównywane są jedynie obrazy należące do tej samej kategorii:

- kuchnia ↔ kuchnia,
    
- łazienka ↔ łazienka,
    
- salon ↔ salon.
    

Zmniejsza to:

- liczbę porównań,
    
- liczbę fałszywych alarmów.
    

---

## Feature Importance

Największy wpływ miały:

1. podobieństwo zdjęć,
    
2. cena,
    
3. powierzchnia,
    
4. piętro,
    
5. lokalizacja.
    

---

# 15. Skalowanie

Problem:

porównywanie wszystkich ogłoszeń ze wszystkimi ma złożoność kwadratową.

Przy milionach rekordów jest to niewykonalne.

Stosowane są:

- filtrowanie kandydatów,
    
- przetwarzanie rozproszone,
    
- Spark,
    
- serverless,
    
- kolejkowanie zadań.
    

---

# 16. Architektura serverless

Przykładowy przepływ:

```
Nowe ogłoszenie
        │
        ▼
EventBridge
        │
        ▼
Lambda
        │
        ▼
S3
        │
        ▼
Hashowanie zdjęć
        │
        ▼
DynamoDB
        │
        ▼
Spark
        │
        ▼
Model ML
        │
        ▼
Predykcja
```

---

# 17. Amazon SageMaker

Usługa umożliwia:

- trenowanie modeli,
    
- deployment,
    
- hosting endpointów,
    
- eksperymenty,
    
- zarządzanie zbiorami danych,
    
- monitoring modeli.
    

Jest jednym z najważniejszych narzędzi AI w ekosystemie AWS.

---

# 18. Wnioski z wykładu

## Kompetencje techniczne

Najbardziej przydatne umiejętności:

- Python,
    
- SQL,
    
- AWS,
    
- Machine Learning,
    
- Data Engineering,
    
- Kubernetes,
    
- Spark,
    
- LLM,
    
- analiza danych,
    
- statystyka.
    

---

## Najważniejsze obserwacje

- Dane są najcenniejszym zasobem nowoczesnych firm technologicznych.
    
- Największym wyzwaniem projektów ML jest przygotowanie danych, a nie samo trenowanie modeli.
    
- W praktyce produkcyjnej ogromne znaczenie mają prostota, skalowalność i koszty utrzymania.
    
- LLM znacząco przyspieszają tworzenie nowych funkcjonalności, jednak nie zastępują klasycznych metod Data Science.
    
- W systemach produkcyjnych równie ważne jak dokładność modelu są wydajność, koszt działania oraz czas odpowiedzi.
    

---

# Słownik pojęć

| Pojęcie             | Znaczenie                                                            |
| ------------------- | -------------------------------------------------------------------- |
| AWS                 | Amazon Web Services                                                  |
| Data Lake           | Centralny magazyn danych                                             |
| Serverless          | Model uruchamiania kodu bez zarządzania serwerami                    |
| Lambda              | Funkcja wykonywana na żądanie w AWS                                  |
| SageMaker           | Platforma ML w AWS                                                   |
| Airflow             | System orkiestracji workflow                                         |
| Spark               | Silnik przetwarzania Big Data                                        |
| Trino               | Rozproszony silnik SQL                                               |
| Redshift            | Hurtownia danych AWS                                                 |
| Kubernetes          | Platforma orkiestracji kontenerów                                    |
| LLM                 | Large Language Model                                                 |
| A/B Test            | Eksperyment porównujący dwie wersje rozwiązania                      |
| Feature Engineering | Tworzenie cech wejściowych modelu                                    |
| Image Hash          | Reprezentacja obrazu umożliwiająca szybkie porównywanie podobieństwa |
| AVM                 | Automated Valuation Model — automatyczna wycena nieruchomości        |
| Latencja            | Czas odpowiedzi systemu                                              |
| GDPR / RODO         | Europejskie przepisy o ochronie danych osobowych                     |