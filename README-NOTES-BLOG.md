# PUT Notes - Notatki z Politechniki Poznańskiej

Aplikacja webowa służąca do przeglądania notatek studenckich z Politechniki Poznańskiej.

## Technologie

- **React** 19.2 z TypeScript
- **React Router** - nawigacja między stronami
- **Tailwind CSS** - stylizacja
- **React Markdown** - renderowanie plików Markdown
- **React Icons** - ikony

## Struktura projektu

```
put-notes-blog/
├── public/              # Pliki statyczne
│   └── semester-*/      # Pliki markdown (notatki)
├── src/
│   ├── components/      # Komponenty React
│   ├── pages/          # Strony aplikacji
│   ├── data/           # Dane o kursach i semestrach
│   ├── types/          # Typy TypeScript
│   └── utils/          # Funkcje pomocnicze
```

## Funkcje

- 📚 Przeglądanie notatek z różnych semestrów
- 📝 Renderowanie Markdown z pełnym wsparciem dla:
  - Nagłówków (h1-h6)
  - List (uporządkowanych i nieuporządkowanych)
  - Tabel
  - Bloków kodu
  - Cytatów
  - Linków i obrazów
  - **Pogrubienia** i *kursywy*
- 🎨 Responsywny design (desktop i mobile)
- 🔍 SEO-friendly struktura
- 🌙 Ciemny motyw

## Instalacja

```bash
# Zainstaluj zależności
npm install

# Uruchom serwer deweloperski
npm start

# Zbuduj produkcyjną wersję
npm build
```

## Dodawanie nowych notatek

1. Dodaj pliki `.md` do odpowiedniego folderu w `public/semester-X/notes/`
2. Zaktualizuj plik `src/data/coursesData.ts` jeśli dodajesz nowy przedmiot
3. Notatki powinny być w formacie Markdown

## Layout

Aplikacja wykorzystuje ten sam layout co portfolio - po lewej stronie stały sidebar z nawigacją (40% szerokości), po prawej scrollowalna zawartość (60%).

## Autorzy

Studenci Politechniki Poznańskiej

## Licencja

Materiały edukacyjne dla studentów PUT

