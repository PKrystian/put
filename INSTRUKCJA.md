# PUT Notes Blog - Instrukcja Użytkowania

## ✅ Aplikacja została pomyślnie uruchomiona!

Aplikacja działa na: **http://localhost:3000**

## 📋 Co zostało zaimplementowane

### 1. **Strona główna (HomePage)**
- Wyświetla listę wszystkich semestrów
- Sidebar z informacjami o projekcie i szybkim dostępem
- Responsywny design (desktop i mobile)
- Layout 40/60 jak w portfolio

### 2. **Strona semestru (SemesterPage)**
- Wyświetla wszystkie przedmioty i projekty z danego semestru
- Podział na "Przedmioty" i "Projekty"
- Nawigacja w sidebar
- Karty z informacjami o każdym kursie

### 3. **Strona przedmiotu (CoursePage)**
- Wyświetla notatki z wybranego przedmiotu
- Sidebar z listą plików (Sylabus, Wykład, Laboratorium, Ćwiczenia)
- Renderowanie Markdown z pełnym wsparciem formatowania
- Responsywny viewer notatek

### 4. **Komponenty**
- **Sidebar** - stały sidebar po lewej (40% szerokości)
- **MainContent** - scrollowalna zawartość po prawej (60%)
- **Card** - karty do wyświetlania przedmiotów/projektów
- **MarkdownRenderer** - komponent renderujący pliki .md z pełnym wsparciem:
  - Nagłówki (h1-h6)
  - Listy (uporządkowane i nieuporządkowane)
  - Tabele
  - Bloki kodu
  - Cytaty (blockquote)
  - Linki i obrazy
  - Pogrubienia i kursywa
  - GitHub Flavored Markdown (GFM)

## 🎨 Stylizacja

- **Tailwind CSS** - utility-first CSS framework
- **Ciemny motyw** - #111111 jako tło
- **Roboto font** - czcionka z Google Fonts
- **Responsywny design** - działa na desktop i mobile
- **Smooth scrolling** - płynne przewijanie
- **Hover effects** - interaktywne elementy

## 📁 Struktura projektu

```
put-notes-blog/
├── public/
│   ├── semester-1/          # Notatki z semestru 1
│   │   └── notes/
│   │       ├── Jezyk angielski/
│   │       ├── Programowanie aplikacji internetowych/
│   │       ├── Sieci komputerowe/
│   │       └── ...
│   └── index.html
├── src/
│   ├── components/          # Komponenty React
│   │   ├── Card.tsx
│   │   ├── MainContent.tsx
│   │   ├── MarkdownRenderer.tsx
│   │   └── Sidebar.tsx
│   ├── pages/              # Strony aplikacji
│   │   ├── CoursePage.tsx
│   │   ├── HomePage.tsx
│   │   └── SemesterPage.tsx
│   ├── data/               # Dane
│   │   └── coursesData.ts  # Lista przedmiotów i semestrów
│   ├── types/              # Typy TypeScript
│   │   └── index.ts
│   ├── utils/              # Funkcje pomocnicze
│   │   └── fileUtils.ts
│   ├── App.tsx             # Główny komponent
│   ├── index.tsx           # Entry point
│   └── index.css           # Style globalne
└── package.json
```

## 🚀 Jak dodać nowe notatki?

### 1. Dodaj pliki Markdown do folderu public
```bash
public/semester-X/notes/Nazwa Przedmiotu/
├── Sylabus.md
├── Wyklad/
│   ├── Zajecia 1.md
│   └── Zajecia 2.md
├── Laboratorium/
│   └── Zajecia 1.md
└── Cwiczenia/
    └── Zajecia 1.md
```

### 2. Zaktualizuj `src/data/coursesData.ts`

Dodaj nowy przedmiot do listy:

```typescript
{
  id: 'nazwa-przedmiotu',           // slug URL
  name: 'Pełna Nazwa Przedmiotu',   // wyświetlana nazwa
  path: 'Nazwa Przedmiotu',          // nazwa folderu
  type: 'notes',                     // lub 'project'
  semester: 1,                       // numer semestru
}
```

### 3. Gotowe! 
Aplikacja automatycznie wykryje nowy przedmiot i wyświetli go na liście.

## 📝 Format notatek Markdown

Notatki wspierają wszystkie funkcje Markdown:

```markdown
# Nagłówek 1
## Nagłówek 2
### Nagłówek 3

**Pogrubienie** i *kursywa*

- Lista
- Nieuporządkowana

1. Lista
2. Uporządkowana

> Cytat/blockquote

\`kod inline\`

\`\`\`javascript
// Blok kodu
const x = 10;
\`\`\`

| Kolumna 1 | Kolumna 2 |
|-----------|-----------|
| Dane 1    | Dane 2    |

[Link](https://example.com)

![Obrazek](url-do-obrazka.png)
```

## 🔧 Komendy npm

```bash
# Uruchom aplikację deweloperską
npm start

# Zbuduj produkcyjną wersję
npm run build

# Uruchom testy
npm test
```

## 🌐 Routing

- `/` - Strona główna z listą semestrów
- `/semester/:id` - Lista przedmiotów w semestrze
- `/semester/:id/course/:courseId` - Notatki z przedmiotu

## 🎯 SEO

Aplikacja jest zoptymalizowana pod SEO:
- Semantyczne nagłówki (h1-h6)
- Meta tagi w `public/index.html`
- Opis, keywords, Open Graph tags
- robots.txt i manifest.json

## 📱 Responsive Design

- **Desktop (lg)**: Sidebar 40% + Content 60%
- **Mobile**: Jednolaminowy layout ze stackowanymi elementami

## 🎨 Kolory

- Tło: `#111111`
- Karty: `#1a1a1a` / `#222222`
- Tekst: `white` / `gray-300` / `gray-400`
- Akcenty: `blue-400` (linki, przyciski)
- Borders: `gray-800`

## ✨ Funkcje dodatkowe

- Smooth scrolling
- Hover effects na kartach
- Active state dla wybranych plików
- Loading states
- Error handling
- Custom scrollbar

---

**Twórca**: Studenci Politechniki Poznańskiej  
**Technologie**: React 18, TypeScript, Tailwind CSS, React Router, React Markdown

