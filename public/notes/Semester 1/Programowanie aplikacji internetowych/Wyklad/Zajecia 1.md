# Aplikacje Internetowe — Notatki z wykładu

**Prowadzący:** dr inż. Marcin Borowski  
**Data:** 11 października 2025  
**Forma zajęć:** wykład + live coding  
**Laboratoria:** prowadzący — Andrzej Urbański  
**Kontakt:** [https://www.cs.put.poznan.pl/mborowski/](https://www.cs.put.poznan.pl/mborowski/)  
**Preferowany kontakt:** Discord

---

## Organizacja zajęć

- **Obecność:** formalnie obowiązkowa zgodnie z regulaminem, ale bez konsekwencji za nieobecność.
    
- **Zaliczenie wykładów:** test jednokrotnego wyboru w e-kursach (ok. 30 pytań).
    
- **Zaliczenie laboratoriów:** zależne od prowadzącego (Urbański).
    
- **Materiały:** live coding + pliki udostępniane na Discordzie lub stronie prowadzącego.
    
- **Wymagania sprzętowe:**
    
    - Przynosić **laptopy** na zajęcia.
        
    - Zainstalowane środowisko (np. **VS Code**, **WebStorm**).
        
- **Komunikacja:** aktywna, można zadawać pytania w trakcie wykładu.
    

---

## Wprowadzenie do aplikacji internetowych

### Co dzieje się po wpisaniu adresu URL?

1. **Użytkownik** wprowadza np. `onet.pl`.
    
2. **Przeglądarka** sprawdza, czy ma zapisany adres IP domeny:
    
    - w **cache przeglądarki**,
        
    - w pliku `hosts` (`/etc/hosts` na Linux, `System32/drivers/etc/hosts` na Windows).
        
3. Jeśli nie — wysyła zapytanie do **DNS (Domain Name System)**.
    
4. Po uzyskaniu adresu IP łączy się z serwerem na odpowiednim **porcie**:
    
    - `80` dla **HTTP**,
        
    - `443` dla **HTTPS** (połączenie szyfrowane protokołem TLS).
        
5. **Serwer** odpowiada:
    
    - HTML (struktura strony),
        
    - JSON (dane),
        
    - pliki multimedialne, itp.
        

---

## Budowa aplikacji webowej

Aplikacja internetowa składa się z trzech podstawowych technologii:

|Warstwa|Technologia|Opis|
|---|---|---|
|Struktura|**HTML (HyperText Markup Language)**|Określa układ i elementy strony.|
|Prezentacja|**CSS (Cascading Style Sheets)**|Odpowiada za wygląd strony.|
|Logika|**JavaScript (JS)**|Nadaje interaktywność i funkcjonalność.|

Dodatkowo:

- **WebAssembly (WASM)** — język niskiego poziomu uruchamiany w przeglądarce, alternatywa dla JS w wydajnych aplikacjach.
    

---

## Krótka historia HTML

1. **HTML 1.0 (1991)** — tylko tekst, bez stylów i grafiki.
    
2. **HTML 2.0–3.2** — pierwsze znaczniki formatowania, kolorowanie tekstu.
    
3. **HTML 4.0 (1997)** — eksplozja przeglądarek (Netscape, IE).
    
4. **XHTML (2000)** — próba połączenia HTML i XML, większa restrykcyjność składni.
    
5. **HTML5 (2008–2014)** — ujednolicenie standardów, semantyka, obsługa multimediów, API przeglądarkowe.
    

---

## HTML5 — nowoczesne podejście

### Semantyczny HTML

Zamiast generycznych `<div>` i `<span>` używa się znaczeń opisowych:

```html
<header> – nagłówek strony  
<nav> – menu nawigacyjne  
<main> – główna treść  
<article> – artykuł  
<section> – sekcja logiczna  
<footer> – stopka
```

**Zalety:**

- lepsza dostępność (np. dla czytników ekranowych),
    
- poprawne indeksowanie przez wyszukiwarki (SEO),
    
- czytelniejszy kod.
    

---

## Elementy blokowe i liniowe

|Typ|Zachowanie|Przykłady|
|---|---|---|
|**Blokowy (block)**|zajmuje całą szerokość, nowa linia po każdym|`<div>`, `<section>`, `<article>`|
|**Liniowy (inline)**|zajmuje tylko tyle miejsca, ile treść|`<span>`, `<a>`, `<strong>`|
|**Inline-block**|łączy cechy obu|element zachowuje się liniowo, ale ma własne wymiary|

---

## Multimedia i osadzanie

Dawniej wymagano **Adobe Flash**, obecnie HTML5 umożliwia:

```html
<video controls>
  <source src="film.mp4" type="video/mp4" />
  <source src="film.webm" type="video/webm" />
</video>

<audio controls>
  <source src="dzwiek.ogg" type="audio/ogg" />
</audio>
```

> Różne przeglądarki obsługują różne formaty — warto podawać kilka źródeł.

---

## Formularze w HTML5

Nowe typy `<input>` ułatwiają walidację po stronie przeglądarki:

|Typ|Zastosowanie|
|---|---|
|`email`|sprawdza poprawność adresu e-mail|
|`number`|pola numeryczne ze spinnerem|
|`date`, `time`, `datetime-local`|pola wyboru daty/czasu|
|`range`|suwak wartości|
|`color`|wybór koloru|
|`pattern`|walidacja wyrażeniem regularnym|

Przykład:

```html
<input type="number" min="0" max="10" required />
```

---

## JavaScript — od jQuery do ES6+

- Kiedyś popularna biblioteka **jQuery** ułatwiała manipulację DOM.  
    Dziś jej funkcje są dostępne natywnie:
    
    ```js
    document.querySelector('#id');
    document.querySelectorAll('.class');
    ```
    
- **AJAX** (Asynchronous JavaScript and XML) — komunikacja z serwerem bez przeładowania strony.
    
- **JSON** zastąpił XML jako główny format wymiany danych.
    

---

## Web Storage API

Pozwala przechowywać dane po stronie przeglądarki:

|Typ|Zakres|Trwałość|
|---|---|---|
|`sessionStorage`|tylko w bieżącej karcie|do zamknięcia zakładki|
|`localStorage`|dla danej domeny|trwały (do momentu usunięcia)|

Przykład:

```js
localStorage.setItem('lang', 'pl');
console.log(localStorage.getItem('lang')); // 'pl'
```

> Dane przechowywane są w formacie klucz-wartość. Można zapisywać również obiekty JSON (po serializacji).

---

## PWA — Progressive Web Apps

**Progressive Web App** to aplikacja webowa zachowująca się jak natywna.

### Cechy:

- Możliwość „zainstalowania” na urządzeniu (ikona na ekranie).
    
- Działa w trybie **offline** (cache).
    
- Aktualizuje się automatycznie po połączeniu z siecią.
    
- Dostęp do funkcji systemowych (powiadomienia, geolokalizacja).
    

### Kluczowe elementy:

- `manifest.json` — opis aplikacji (nazwa, ikony, start URL, kolory).
    
- `service worker` — skrypt działający w tle, zarządza cachem i offline’em.
    

---

## Web Workers i WebSockets

- **Web Workers** — pozwalają wykonywać kod JS w osobnych wątkach (równoległość).
    
- **WebSockets** — umożliwiają dwukierunkową komunikację w czasie rzeczywistym między klientem a serwerem.  
    Używane np. w czatach, powiadomieniach, grach online.
    

---

## API przeglądarkowe

### Przykłady:

- **Geolocation API** — pozwala pobrać przybliżoną lokalizację użytkownika.
    
- **Notifications API** — wysyłanie powiadomień systemowych.
    
- **Drag & Drop API** — przeciąganie i upuszczanie plików.
    
- **File API** — dostęp do plików lokalnych (z ograniczeniami bezpieczeństwa).
    

---

## Przydatne narzędzia

- [**Can I Use**](https://caniuse.com/) — sprawdzanie kompatybilności funkcji webowych z przeglądarkami.
    
- [**MDN Web Docs**](https://developer.mozilla.org/) — najlepsze źródło dokumentacji webowej.
    
- **VS Code / WebStorm** — zalecane środowiska.
    

---

## Ćwiczenia proponowane przez prowadzącego

1. **Zbuduj układ trójkolumnowy** („Holy Grail Layout”) _bez_ użycia `flex` i `grid`.
    
2. **Sprawdź kompatybilność** elementów HTML5 w różnych przeglądarkach.
    
3. **Stwórz prostą aplikację PWA**, np. notatnik offline.
    

---

## Podsumowanie

> **Aplikacje internetowe** to dynamiczne, wielowarstwowe systemy oparte na HTML, CSS i JavaScript.  
> Dzisiejszy web to środowisko, które łączy w sobie elastyczność stron WWW z możliwościami aplikacji desktopowych.  
> Kluczem jest **semantyka**, **interoperacyjność**, **dostępność** oraz **wydajność**.