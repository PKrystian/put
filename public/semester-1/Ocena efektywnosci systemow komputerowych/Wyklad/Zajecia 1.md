# Ocena Efektywności Systemów Komputerowych (OESK)
### Wykład 1 – Wprowadzenie do oceny efektywności systemów komputerowych
**Prowadzący:** dr Klaus  
**Hasło do kursu:** `OESK2026`

---

## Informacje organizacyjne

###  Laboratoria
- 13 ćwiczeń laboratoryjnych.  
- Do każdego ćwiczenia dostępny **film instruktażowy** (większość nagrana przez studentów poprzednich roczników).  
- Filmy są dostępne na YouTube lub poprzez linki w chmurze uczelni.  
- Każde ćwiczenie można wykonać **na uczelni** lub **w domu** (forma dowolna).  

#### Formy zaliczenia laboratoriów:
1. **Klasyczna forma** – wykonanie wszystkich 13 ćwiczeń.  
2. **Forma skrócona** – wykonanie **jednego pełnego ćwiczenia z filmem** i opisem.  
3. **Projektowa forma** – opracowanie **projektu dla firmy** (może być realizowany zawodowo).  
   - Opis projektu powinien zawierać: cel, kontekst, narzędzia, sposób oceny efektywności, wyniki.  
   - Nie wymaga nagrania filmu, wystarczy dokumentacja.  

>  *Filmy nie powinny być publikowane publicznie (np. na YouTube). Wystarczy przesłać link do chmury, np. Google Drive lub OneDrive.*

#### Współpraca
- Można wykonywać ćwiczenia **w parach** (maks. 2 osoby).  
- Dozwolone jest wykonanie większej liczby ćwiczeń dla własnej satysfakcji – zaliczenie wymaga tylko jednego projektu lub zadania.

---

## Zaliczenie przedmiotu

### Egzamin
- Egzamin składa się z **6 pytań**:
  - 3 pytania **otwarte**,
  - 3 pytania **testowe (wielokrotnego wyboru)**.
- W niektórych latach egzamin bywał zastępowany oceną z laboratoriów, ale nie jest to gwarantowane.  
- Warto uczestniczyć w kursie online (Moodle / eKursy).

### Platforma e-learningowa
- Nazwa kursu: `OESKdrKlaus` lub podobna (w zależności od roku).  
- Hasło do zapisu: `OESK2026`.  
- Dostępne sekcje: ogłoszenia, literatura, laboratoria, egzamin, przykładowe projekty, filmy.  
- System śledzi aktywność studentów (czas logowania, liczba wejść itp.).

---

## Tematyka przedmiotu

### Plan wykładów
1. **Wprowadzenie do oceny efektywności systemów komputerowych**  
2. **Typowe miary efektywności**  
3. **Czynniki wpływające na efektywność systemów informatycznych**  
4. **Metody pomiaru i testowania wydajności**  
5. **Metody statystyczne i porównywanie alternatyw**  
6. **Projektowanie eksperymentów**  
7. **Symulacja i modelowanie (np. modele kolejkowe)**

---

## Wprowadzenie do pojęcia efektywności

Ocena efektywności systemów komputerowych (SIZ – Systemów Informatycznych Zarządzania) polega na analizie, **czy dane rozwiązanie informatyczne jest opłacalne i skuteczne** w kontekście technicznym, ekonomicznym i organizacyjnym.

### Dwie sytuacje decyzyjne:
1. **Ocena jednego wariantu SIZ**  
   → pytanie: *czy wdrożenie systemu będzie opłacalne?*  
   → narzędzie: **ROI (Return on Investment)**  

   **Wzór:**  
```

ROI = E / I

```
gdzie:  
- `E` – efekt wynikający z zastosowania systemu,  
- `I` – poniesione nakłady inwestycyjne.  

Jeśli ROI > 1, inwestycja jest opłacalna.

2. **Wybór spośród wielu wariantów**  
→ pytanie: *który system wybrać?*  
→ wymaga porównania względnej efektywności.

---

## Czynniki wpływające na efektywność systemów informatycznych

1. **Techniczne** – sprzęt (hardware), oprogramowanie (software), sieci, infrastruktura, komunikacja.  
2. **Ekonomiczne** – koszt wdrożenia, zwrot z inwestycji, wpływ na przychody, redukcja kosztów.  
3. **Organizacyjne** – zmiany struktury firmy, procesów i przepływu informacji.  
4. **Socjologiczno-psychologiczne** – wpływ systemu na pracowników (motywacja, opór, adaptacja).  
5. **Prawne** – regulacje dotyczące danych, RODO, licencje, umowy, audyty.

>  *Efektywność techniczna nie zawsze równa się efektywności ekonomicznej.*

---

## Skuteczność a efektywność

### Definicje:
- **Skuteczność (effectiveness)** – *czy osiągnięto założony cel?*  
- **Efektywność (efficiency)** – *jakim kosztem osiągnięto ten cel?*

**Przykład:**  
System może działać sprawnie (efektywnie), ale nie przynosi oczekiwanego zysku (nie jest skuteczny).  
Z kolei skuteczny system, który wymaga ogromnych nakładów, może być nieefektywny.

---

## Przykład: szkolnictwo wyższe jako system

Profesor przywołał przykład edukacji, by zilustrować różnicę między efektywnością a skutecznością.

| Aspekt | Przykład |
|--------|-----------|
| **Efektywność** | Ilu studentów kończy studia (proces działa) |
| **Skuteczność** | Ilu absolwentów znajduje dobrze płatną pracę (rezultat ekonomiczny) |

Z punktu widzenia **podatnika** (inwestora systemu edukacji), skuteczność uczelni można mierzyć m.in. tym:
- ilu absolwentów płaci podatki w kraju,  
- jakie mają zarobki,  
- ilu wyjechało za granicę.  

---

## Metodologia oceny efektywności systemów komputerowych

1. **Dobór technik i metod oceny**  
- pomiar czasu odpowiedzi,  
- przepustowość systemu,  
- wykorzystanie zasobów (CPU, RAM, sieć).  

2. **Wybór rodzaju obciążenia testowego**  
- testy syntetyczne,  
- testy rzeczywiste (z aplikacjami produkcyjnymi).  

3. **Poprawny pomiar wydajności**  
- unikanie błędów pomiarowych,  
- wielokrotne próby,  
- analiza odchyleń statystycznych.  

4. **Metody statystyczne**  
- porównywanie wariantów,  
- analiza wariancji (ANOVA),  
- estymacja błędu pomiaru.  

5. **Projektowanie eksperymentów**  
- minimalny nakład pracy przy maksymalnej ilości informacji,  
- badanie wpływu poszczególnych komponentów (np. CPU vs GPU).  

6. **Symulacje komputerowe**  
- ocena hipotetycznych scenariuszy,  
- określenie długości symulacji i stabilizacji wyników.  

7. **Modele wydajności (np. kolejkowe)**  
- uproszczone modele pozwalające prognozować zachowanie systemu przy różnych obciążeniach.  

---

## Przykładowe techniki testowania (z wykładu)

Podczas pandemii testowano wydajność platform takich jak **Zoom** i **Microsoft Teams**:
- studenci wprowadzali komentarze,
- mierzono **czas odpowiedzi systemu**,
- stopniowo zwiększano obciążenie (włączanie mikrofonów, kamer),
- analizowano moment, w którym system zaczynał się „zawieszać”.

Wnioski: takie testy pozwalają empirycznie określić **granice efektywności systemu**.

---

## Dodatkowe rozwinięcia (uzupełnienia)

### ROI (Return on Investment)
- W praktyce obliczane jako:
```

ROI = (Zysk - Koszt) / Koszt

```
- W projektach IT ROI rzadko mierzy się bezpośrednio w pieniądzach — często to **oszczędność czasu, redukcja błędów, zwiększona produktywność**.

### Modele kolejkowe
- Używane do modelowania obciążenia systemów.  
- Opisują zależność między:
- liczbą żądań użytkowników,
- czasem obsługi,
- średnim czasem oczekiwania.  
- Klasyczny model: **M/M/1** (jedna kolejka, jedno urządzenie obsługujące, rozkład Poissona).

### Efektywność względna
- Porównanie różnych systemów wykonujących to samo zadanie.  
- Używa się wskaźnika:
```

Efektywność_względna = (Wydajność_systemu_X / Wydajność_systemu_Y) * 100%

```

---

## Literatura i źródła
- Wykłady i materiały udostępnione przez dr Klausa (kurs Moodle).  
- Poprzednie edycje kursu – filmy i prezentacje studentów.  
- Rekomendowane:  
- Raj Jain, *The Art of Computer Systems Performance Analysis*, Wiley.  
- Gunther, *Analyzing Computer System Performance with Perl: Quantitative Performance Modeling*.  
- Materiały z laboratorium (ćwiczenia 1–13).

---

## Skrócone powtórzenie (ściąga)

- **Efektywność ≠ Skuteczność**  
- **ROI = E/I** → ocena opłacalności  
- **Czynniki efektywności:** techniczne, ekonomiczne, organizacyjne, psychologiczne, prawne  
- **Dwie decyzje:**  
1. Czy system się opłaca?  
2. Który system wybrać?  
- **Testy wydajności:** pomiar czasu odpowiedzi, obciążenie, symulacja, modele kolejkowe  
- **Laboratoria:** 13 ćwiczeń lub 1 projekt  
- **Egzamin:** 3 pytania otwarte + 3 testowe