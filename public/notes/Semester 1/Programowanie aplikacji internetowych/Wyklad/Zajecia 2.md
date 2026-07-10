# Notatki z zajęć: Wprowadzenie do JavaScript, Node.js, programowania asynchronicznego oraz podstaw pracy z narzędziami webowymi

## 1. Wprowadzenie do środowiska i celu zajęć
Zajęcia dotyczą programowania aplikacji webowych z użyciem **JavaScript** oraz środowiska uruchomieniowego **Node.js**. Celem jest nauka zarówno podstaw języka, jak i umiejętność uruchamiania kodu poza przeglądarką, tworzenia serwerów, obsługi połączeń sieciowych oraz wykorzystywania mechanizmów asynchronicznych.

## 2. Konfiguracja środowiska
Wymagane narzędzia:
- **Visual Studio Code (VS Code)** – rekomendowane IDE
- **Node.js** – środowisko umożliwiające wykonywanie JavaScript poza przeglądarką
- **Terminal systemowy** (Linux/MacOS/Windows PowerShell)

Wskazówki:
- Komenda `code .` uruchamia VS Code w bieżącym katalogu.
- Node.js pozwala uruchamiać aplikacje JavaScript z wiersza poleceń, bez udziału przeglądarki.

## 3. Podstawy JavaScript – deklaracja zmiennych
W języku dostępne są trzy sposoby definiowania zmiennych:

| Słowo kluczowe | Zakres                   | Mutowalność | Uwagi                                 |
|----------------|--------------------------|-------------|----------------------------------------|
| `var`          | Funkcyjny lub globalny   | Tak         | Starszy mechanizm, unikać w nowych kodach |
| `let`          | Blokowy                  | Tak         | Najczęściej używane                   |
| `const`        | Blokowy                  | Nie         | Wartość niezmienialna                 |

### Brak typowania statycznego
JavaScript jest językiem **dynamicznie typowanym**, co oznacza, że typ zmiennej może ulegać zmianie w trakcie działania programu.

```js
let x = 10;      // number
x = "tekst";     // string – dopuszczalne
````

### Wypisywanie informacji

Najważniejszym narzędziem programisty w JS jest `console.log()`.

```js
console.log("Wynik:", x);
```

## 4. Konwersja i porównania

JavaScript dokonuje **automatycznej konwersji typów** (tzw. **coercion**) w zależności od kontekstu.

|Operator|Działanie|
|---|---|
|`=`|przypisanie|
|`==`|porównanie wartości z konwersją|
|`===`|porównanie wartości i typów|

Przykład:

```js
0 == false // true
0 === false // false
```

### Wartości “fałszywe”

Do wartości traktowanych jako `false` należą:  
`0`, `""`, `null`, `undefined`, `NaN`, `false`

---

## 5. Komentarze

```js
// komentarz w jednej linii
/*
    komentarz
    wieloliniowy
*/
```

---

## 6. Funkcje – podstawy i skrócone zapisy

### Deklaracja funkcji klasycznej

```js
function suma(a, b) {
    return a + b;
}
```

### Funkcja jako wyrażenie

```js
const suma = function(a, b) {
    return a + b;
}
```

### Funkcja strzałkowa (arrow function)

```js
const suma = (a, b) => a + b;
```

---

## 7. Hoisting

Zjawisko **hoistingu** polega na tym, że deklaracje funkcji i zmiennych są przenoszone przez interpreter na początek zakresu.

- funkcje **deklarowane** (`function`) podlegają hoistingowi w pełni
    
- zmienne `let` i `const` są przenoszone, lecz nie inicjalizowane
    

Przykład (działa):

```js
przywitaj();
function przywitaj() {
    console.log("Witaj");
}
```

Przykład (błąd):

```js
przywitaj();
const przywitaj = () => console.log("Witaj");
```

---

## 8. Programowanie asynchroniczne

JavaScript posiada **jednowątkowy model wykonawczy**, jednak wspiera asynchroniczność poprzez **event loop**.

### Funkcja `setTimeout`

```js
setTimeout(() => {
    console.log("Komunikat po 3s");
}, 3000);
```

### Funkcja `setInterval`

```js
setInterval(() => {
    console.log("Powtarzany komunikat");
}, 1000);
```

Obie funkcje zwracają uchwyt, który można zatrzymać:

```js
const id = setInterval(...);
clearInterval(id);
```

---

## 9. Node.js – moduły i praca sieciowa

Node.js umożliwia pracę z modułami poprzez funkcję `require`.

```js
const net = require('net');
```

### Przykład prostego serwera TCP (chat)

Serwer obsługuje wiele połączeń i rozsyła dane do pozostałych klientów.

Mechanizm:

1. Utworzenie serwera `net.createServer(...)`
    
2. Obsługa wydarzeń: `data` oraz `close`
    
3. Przechowywanie aktywnych socketów w tablicy
    
4. Rozsyłanie otrzymanych danych do pozostałych użytkowników
    

---

## 10. Podstawy protokołu HTTP w Node.js

```js
const http = require("http");

http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("Hello Web");
}).listen(8000);
```

Narzędzia pomocnicze:

- **Przeglądarka + DevTools (Network)**
    
- **curl**
    
    ```bash
    curl -i http://localhost:8000
    ```
    

---

## 11. Fetch API i praca z danymi zdalnymi

`fetch()` umożliwia pobieranie zasobów z sieci i działa asynchronicznie.

Wersja z `async / await`:

```js
async function pobierz() {
    const response = await fetch("https://example.com");
    const data = await response.text();
    console.log(data);
}
```

---

## 12. Wprowadzenie do TypeScript

Różnice kluczowe względem JavaScript:

- Silne typowanie
    
- Kompilacja do JavaScript (transpilacja)
    
- Obsługa interfejsów i klas
    
- Lepsze narzędzia dla dużych aplikacji
    

Przykład:

```ts
function suma(a: number, b: number): number {
    return a + b;
}
```

---

## 13. Frameworki CSS – teoria

### Style klasyczne vs. frameworki

|Metoda|Charakterystyka|
|---|---|
|klasyczne CSS|pełna kontrola, więcej pisania|
|frameworki|szybki rozwój, gotowe komponenty|

Najpopularniejsze:

- Bootstrap
    
- Material UI
    
- Tailwind CSS
    
- Foundation
    
- Radix UI
    

### Tailwind CSS – główne założenia

Tailwind umożliwia stosowanie klas narzędziowych (utility classes), np.:

```html
<p class="text-red-500 font-bold">Tekst przykładowy</p>
```

Zalety:

- szybkie prototypowanie
    
- brak konieczności przełączania kontekstu
    
- finalny build może usuwać nieużywane klasy (purge)
    

---

# Podsumowanie

Podczas zajęć omówiono:

1. Uruchamianie i konfigurację środowiska dla JavaScript oraz Node.js
    
2. Podstawy zmiennych, typów, funkcji i konwersji w języku
    
3. Mechanizmy asynchroniczne (`setTimeout`, `setInterval`)
    
4. Tworzenie serwerów i komunikacji sieciowej w Node.js
    
5. Programowanie w modelu HTTP oraz wykorzystanie `fetch()`
    
6. Podstawy TypeScript i jego główne założenia
    
7. Wprowadzenie do frameworków CSS oraz Tailwind
    