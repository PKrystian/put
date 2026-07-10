# Notatki z wykładu i laboratorium

**Temat:** Projektowanie i implementacja systemu CMS  
**Data:** 26 października 2025

---

## 1. Organizacja zajęć

Zajęcia mają charakter projektowo-laboratoryjny. Celem jest opracowanie autorskiego **systemu CMS** (Content Management System). Projekt stanowi **formę zaliczenia** przedmiotu i jest realizowany w grupach **jedno- lub dwuosobowych**.

Zajęcia odbywają się w formie pracy warsztatowej — studenci analizują, projektują i prezentują kolejne etapy realizacji projektu. Prowadzący kładzie nacisk na systematyczną pracę i prezentowanie postępów na bieżąco.

---

## 2. Cel i zakres projektu

### 2.1. Główny cel

Stworzenie od podstaw **autorskiego systemu CMS** pozwalającego na zarządzanie treściami strony internetowej. System powinien być:

- intuicyjny i przejrzysty dla użytkowników nietechnicznych (np. osoby takie jak „Pani Basia” czy „Wojtek”),
    
- rozszerzalny i zgodny z zasadami dobrego projektowania oprogramowania,
    
- przygotowany w taki sposób, by mógł być wykorzystany w przyszłym semestrze w ramach przedmiotu _Bezpieczeństwo systemów IT_.
    

### 2.2. Technologie i środowisko pracy

- **Backend:** Python (FastAPI), Docker, Pytest.
    
- **Frontend:** Czysty HTML, CSS, JavaScript, szablony (bez frameworków SPA).
    
- **Stylizacja:** Bootstrap 5.
    
- **Kontrola wersji i CI/CD:** GitHub, GitHub Actions (automatyczne testy).
    
- **Dokumentacja:** UML, opisy funkcjonalne i niefunkcjonalne, spójna struktura dokumentu.
    

Dopuszcza się również inne technologie, np. PHP, Node.js czy Java, pod warunkiem zachowania zasad projektu.

---

## 3. Struktura projektu CMS

### 3.1. Główne założenia funkcjonalne

System ma umożliwiać zarządzanie treścią strony internetowej (np. witryny firmowej, portfolio, bloga). Powinien zawierać następujące elementy:

- **Panel administracyjny:**
    
    - logowanie i autoryzacja użytkowników (rola: administrator, moderator),
        
    - dodawanie, edycja, usuwanie treści (artykułów, zdjęć, elementów menu),
        
    - zarządzanie strukturą nawigacji (menu i podmenu),
        
    - upload i przetwarzanie grafik (skalowanie, miniatury, zmiana nazw plików),
        
    - edytor WYSIWYG (np. TinyMCE, CKEditor).
        
- **Część publiczna:**
    
    - wyświetlanie treści i artykułów,
        
    - obsługa linków, formularzy kontaktowych, blogów, galerii,
        
    - możliwość włączenia/wyłączenia elementów (np. sekcji na stronie),
        
    - struktura drzewiasta dla kategorii i podkategorii treści.
        

System nie powinien być rozwijany na bazie gotowego CMS-a (np. WordPressa, Joomli, Drupala), lecz inspirować się ich rozwiązaniami w zakresie architektury, sposobu zarządzania danymi i sesjami użytkowników.

---

## 4. Wymagania projektowe

### 4.1. Wymagania funkcjonalne

- Możliwość zarządzania treściami z poziomu panelu administracyjnego.
    
- Tworzenie, edycja i usuwanie stron, artykułów, wpisów blogowych.
    
- Zarządzanie menu i jego hierarchią (drzewo kategorii).
    
- Zarządzanie użytkownikami i uprawnieniami.
    
- Upload plików i ich automatyczna obróbka (miniatury, skalowanie).
    
- Możliwość osadzania wideo (np. z YouTube po ID filmu).
    

### 4.2. Wymagania niefunkcjonalne

- Responsywność interfejsu użytkownika.
    
- Czas generowania strony nie dłuższy niż 300 ms.
    
- Zgodność z narzędziami analizy wydajności (PageSpeed, GTMetrix).
    
- Bezpieczeństwo (walidacja danych, ochrona przed XSS, SQLi).
    
- Czytelna struktura projektu i kodu (modularność, podział na warstwy).
    

---

## 5. Dokumentacja projektowa

Dokumentacja powinna mieć charakter **profesjonalnego dokumentu technicznego**, a nie zbioru notatek. Powinna zawierać:

1. **Stronę tytułową** (nazwa projektu, autorzy, data, prowadzący).
    
2. **Spis treści.**
    
3. **Cel projektu i jego uzasadnienie.**
    
4. **Analizę wymagań funkcjonalnych i niefunkcjonalnych.**
    
5. **Modele UML:**
    
    - diagram przypadków użycia (dla aktorów: użytkownik niezalogowany, użytkownik zalogowany, administrator),
        
    - diagram klas,
        
    - diagram przepływu danych lub sekwencji.
        
6. **Opis architektury systemu:**
    
    - struktura katalogów,
        
    - komponenty aplikacji,
        
    - wykorzystywane biblioteki i narzędzia.
        
7. **Opis implementacji:**
    
    - konfiguracja środowiska,
        
    - główne moduły kodu,
        
    - sposób uruchomienia (Docker, GitHub).
        
8. **Testy:**
    
    - opis przypadków testowych,
        
    - wyniki testów jednostkowych i integracyjnych.
        
9. **Podsumowanie:**
    
    - harmonogram,
        
    - podział zadań w zespole,
        
    - napotkane problemy i możliwe usprawnienia.
        

---

## 6. Dalsze wykorzystanie projektu

Projekt CMS będzie kontynuowany w kolejnym semestrze w ramach przedmiotu **Bezpieczeństwo systemów informatycznych**. Studenci będą:

- wymieniać się projektami z innymi grupami,
    
- testować cudze systemy (white-box i black-box),
    
- analizować bezpieczeństwo aplikacji webowych.
    

Dlatego aplikacja powinna być łatwa w **deploymencie** (preferowany **Docker** lub hosting lokalny).

---

## 7. Analiza systemów open source

W ramach przygotowania zaleca się analizę istniejących systemów CMS:

- **WordPress, Joomla, Drupal** – główne przykłady.
    
- Analiza sposobu przechowywania treści, struktury plików, mechanizmów sesji i autoryzacji.
    
- Wnioski z analizy należy zawrzeć w dokumentacji projektu.
    

---

## 8. Warstwa frontendowa

- Nie należy projektować od podstaw interfejsu graficznego.
    
- Można wykorzystać **gotowe darmowe szablony HTML/CSS** (np. z serwisów oferujących _free admin templates_).
    
- Frontend (zarówno publiczny, jak i panel administracyjny) powinien wykorzystywać **Bootstrap 5** i być dostosowany stylistycznie do wymagań projektu.
    

---

## 9. Praca zespołowa i zaliczenie

- Maksymalnie 2 osoby w grupie.
    
- Dopuszczalna praca indywidualna.
    
- Ocena końcowa opiera się na:
    
    - jakości projektu i dokumentacji,
        
    - regularnych prezentacjach postępów,
        
    - działającym prototypie CMS,
        
    - poprawnym wdrożeniu (Docker lub lokalny serwer).
        

W przypadku problemów technicznych dopuszczalne jest oddanie projektu niepełnego, pod warunkiem przedstawienia dokumentacji oraz implementacji kluczowych funkcji.

---

## 10. Uwagi końcowe

- Prowadzący oczekuje pracy merytorycznej na zajęciach — projekt ma charakter praktyczny.
    
- Nie wymaga się pełnej perfekcji kodu, lecz dbałości o jego czytelność i bezpieczeństwo.
    
- Celem zajęć jest nauka projektowania systemu w sposób profesjonalny, z uwzględnieniem cyklu życia oprogramowania i pracy zespołowej.
    
- Dokumentacja i implementacja powinny być utrzymane w stylu inżynierskim, zgodnym z zasadami tworzenia oprogramowania.
    

---

**Podsumowanie:**  
Projekt systemu CMS realizowany w ramach przedmiotu ma umożliwić studentom zdobycie doświadczenia w projektowaniu, dokumentowaniu i implementacji aplikacji webowej opartej na nowoczesnych technologiach. Nacisk położony jest na praktyczne aspekty pracy zespołowej, modularność, bezpieczeństwo oraz zgodność z zasadami inżynierii oprogramowania.
