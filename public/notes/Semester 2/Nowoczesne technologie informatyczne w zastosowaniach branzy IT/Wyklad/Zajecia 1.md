# Site Reliability Engineering (SRE) i DevOps

## Informacje o wykładzie

**Temat:** Wprowadzenie do Site Reliability Engineering (SRE) oraz relacji między SRE i DevOps.

**Prelegent:** Inżynier Site Reliability Engineering z wieloletnim doświadczeniem zawodowym (wcześniej Google Photos, obecnie Fitbit/Google Health).

---

# Wprowadzenie

Współczesne systemy informatyczne muszą nie tylko realizować wymagania funkcjonalne, ale również zapewniać wysoką **niezawodność**, **dostępność** oraz możliwość szybkiego odzyskiwania sprawności po awarii.

Jednym z głównych problemów współczesnej inżynierii oprogramowania jest zapewnienie wysokiej jakości działania systemów już po ich wdrożeniu na środowisko produkcyjne.

---

# Czym jest niezawodność systemu?

Niezawodność (*Reliability*) oznacza zdolność systemu do nieprzerwanego wykonywania swoich funkcji zgodnie z oczekiwaniami użytkowników.

Najważniejsze elementy niezawodności obejmują:

- wysoką dostępność usług (Availability),
- odporność na awarie,
- szybkie wykrywanie problemów,
- szybkie odzyskiwanie sprawności po awarii,
- minimalizację wpływu awarii na użytkowników.

## Discovery i Recovery

Podczas wykładu zwrócono uwagę na dwa istotne procesy:

### Discovery

Proces wykrywania awarii lub nieprawidłowego działania systemu.

Obejmuje m.in.:

- monitoring,
- alarmowanie,
- analizę logów,
- wykrywanie anomalii.

### Recovery

Proces przywracania poprawnego działania systemu.

Przykłady:

- automatyczne przełączenie na zapasowe serwery,
- uruchomienie instancji zapasowych,
- failover,
- odtworzenie usług po awarii.

Celem jest zminimalizowanie czasu niedostępności systemu.

---

# Koszt utrzymania oprogramowania

Jednym z najważniejszych zagadnień poruszonych podczas wykładu było rozróżnienie pomiędzy:

- kosztem stworzenia oprogramowania,
- kosztem jego utrzymania.

W praktyce często zakłada się, że największym wydatkiem jest implementacja systemu. W rzeczywistości badania pokazują, że:

> Koszt utrzymania oprogramowania może stanowić nawet około **90% całkowitego kosztu jego cyklu życia**.

Koszty utrzymania obejmują między innymi:

- monitorowanie systemu,
- usuwanie awarii,
- aktualizacje,
- rozwój infrastruktury,
- utrzymanie bezpieczeństwa,
- skalowanie usług,
- wsparcie użytkowników.

---

# Tradycyjny model wytwarzania oprogramowania

Historycznie proces wyglądał następująco:

```
Programiści
        │
        ▼
Przekazanie aplikacji
        │
        ▼
Administratorzy / Operatorzy
```

Odpowiedzialności były rozdzielone:

## Zespół developerski

Odpowiada za:

- tworzenie nowych funkcjonalności,
- rozwój produktu,
- szybkie wdrażanie zmian.

Ich celem jest:

- częste wydania,
- szybki rozwój produktu,
- dostarczanie nowych funkcji.

---

## Zespół operacyjny (Operations)

Odpowiada za:

- stabilność systemu,
- utrzymanie produkcji,
- monitorowanie,
- reagowanie na awarie.

Ich celem jest:

- jak najmniej zmian,
- maksymalna stabilność,
- ograniczenie ryzyka.

---

# Konflikt interesów

Między zespołami naturalnie powstaje konflikt.

## Perspektywa programistów

Programiści chcą:

- wdrażać zmiany szybko,
- publikować nowe wersje możliwie często,
- szybko otrzymywać informację zwrotną.

---

## Perspektywa operatorów

Operatorzy chcą:

- ograniczyć liczbę zmian,
- minimalizować ryzyko,
- utrzymywać stabilność systemu.

Każda zmiana wdrażana na produkcję oznacza potencjalne ryzyko awarii.

---

# DevOps

DevOps powstał jako odpowiedź na konflikt pomiędzy developmentem i operations.

## Idea DevOps

DevOps nie jest pojedynczym narzędziem ani stanowiskiem.

Jest to zbiór:

- praktyk,
- procesów,
- kultury organizacyjnej,
- metod współpracy.

Celem DevOps jest skrócenie czasu pomiędzy:

- napisaniem kodu,
- jego wdrożeniem,
- uzyskaniem informacji zwrotnej,
- utrzymaniem systemu.

---

# Definicja DevOps

DevOps można zdefiniować jako:

> Zbiór praktyk mających na celu usprawnienie współpracy pomiędzy zespołami tworzącymi i utrzymującymi oprogramowanie poprzez automatyzację procesów oraz ciągłe dostarczanie zmian.

---

# Najważniejsze założenia DevOps

## 1. Ograniczenie konfliktów organizacyjnych

Należy zmniejszać bariery pomiędzy:

- programistami,
- administratorami,
- architektami,
- testerami,
- właścicielami produktu.

---

## 2. Akceptacja faktu, że błędy są nieuniknione

W złożonych systemach:

- awarie będą się zdarzać,
- błędy są naturalnym elementem procesu.

Nie należy zakładać, że możliwe jest stworzenie całkowicie bezawaryjnego systemu.

Znacznie ważniejsze jest:

- szybkie wykrywanie,
- szybkie naprawianie,
- wyciąganie wniosków z incydentów.

---

## 3. Częste, małe wdrożenia

Lepszym rozwiązaniem jest:

- wiele niewielkich zmian,

niż:

- rzadkie i bardzo duże wydania.

Korzyści:

- łatwiejsza identyfikacja błędów,
- prostszy rollback,
- mniejsze ryzyko,
- krótszy czas przywrócenia działania.

---

## 4. Automatyzacja

DevOps zakłada maksymalną automatyzację procesów.

Automatyzowane są między innymi:

- budowanie aplikacji,
- testy,
- wdrożenia,
- konfiguracja infrastruktury,
- monitoring,
- reakcje na awarie.

Przykładowe narzędzia:

| Obszar | Przykłady |
|---------|-----------|
| CI/CD | Jenkins, GitHub Actions, GitLab CI |
| Kontenery | Docker |
| Orkiestracja | Kubernetes |
| IaC | Terraform, Ansible |
| Monitoring | Prometheus, Grafana |

---

## 5. Podejmowanie decyzji na podstawie danych

Jednym z fundamentów DevOps i SRE jest podejmowanie decyzji na podstawie:

- metryk,
- logów,
- monitoringu,
- statystyk wydajności,
- danych historycznych.

Nie należy opierać decyzji wyłącznie na intuicji.

---

# Site Reliability Engineering (SRE)

## Geneza

Site Reliability Engineering powstało w Google jako praktyczna implementacja idei DevOps.

SRE polega na stosowaniu metod inżynierii oprogramowania do rozwiązywania problemów operacyjnych.

---

## Definicja SRE

SRE (Site Reliability Engineering) to specjalizacja inżynierska zajmująca się projektowaniem, automatyzacją i utrzymaniem niezawodnych systemów informatycznych.

Inżynierowie SRE są przede wszystkim programistami, którzy tworzą narzędzia umożliwiające automatyczne zarządzanie infrastrukturą i usługami.

---

# Główne cele SRE

- zapewnienie wysokiej dostępności usług,
- ograniczenie kosztów utrzymania,
- automatyzacja pracy operacyjnej,
- zwiększenie niezawodności systemów,
- szybkie wykrywanie problemów,
- skracanie czasu usuwania awarii.

---

# Podejście oparte na danych

Jednym z fundamentów SRE jest podejmowanie decyzji na podstawie obiektywnych danych.

Do pomiaru jakości usług wykorzystuje się między innymi:

- metryki,
- monitoring,
- logi,
- alerty,
- wskaźniki wydajności.

W kolejnych częściach wykładu (zapowiedzianych przez prowadzącego) miały zostać omówione między innymi:

- **SLI (Service Level Indicators)**,
- **SLO (Service Level Objectives)**,
- **SLA (Service Level Agreements)**,

czyli podstawowe narzędzia pomiaru niezawodności wykorzystywane w SRE.

---

# Relacja między DevOps i SRE

```
                DevOps
      (filozofia i kultura pracy)

                │
                ▼

        Site Reliability Engineering
   (praktyczna implementacja DevOps)
```

Można przyjąć, że:

- DevOps opisuje **jak należy współpracować**,
- SRE opisuje **jak technicznie osiągnąć wysoką niezawodność systemu**.

---

# Najważniejsze wnioski

- Koszt utrzymania systemu często przewyższa koszt jego stworzenia.
- Tradycyjny podział na developerów i administratorów prowadzi do konfliktów interesów.
- DevOps ma na celu usprawnienie współpracy między zespołami.
- Błędy są naturalnym elementem funkcjonowania złożonych systemów.
- Małe i częste wdrożenia są bezpieczniejsze niż duże, rzadkie wydania.
- Automatyzacja jest podstawą nowoczesnego utrzymania infrastruktury.
- Site Reliability Engineering stanowi praktyczną realizację idei DevOps.
- SRE wykorzystuje podejście oparte na danych do zapewnienia wysokiej niezawodności usług.