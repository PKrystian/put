# 🚀 Quick Start - PUT Notes Blog

## Uruchomienie w 3 krokach

### 1️⃣ Zainstaluj zależności
```bash
cd /Users/krystian/WebstormProjects/put/put-notes-blog
npm install
```

### 2️⃣ Uruchom aplikację
```bash
npm start
```

### 3️⃣ Otwórz w przeglądarce
```
http://localhost:3000
```

---

## ✅ To już działa!

Aplikacja jest **w pełni funkcjonalna** i zawiera:

### 📚 Notatki z Semestru 1:
- ✅ Język angielski (5 zajęć)
- ✅ Ocena efektywności systemów komputerowych
- ✅ Podstawowe szkolenie BHP
- ✅ Programowanie aplikacji internetowych
- ✅ Sieci komputerowe
- ✅ Systemy zarządzania treścią
- ✅ Zaawansowane technologie baz danych
- ✅ Zarządzanie projektami
- ✅ PUT Survivors (projekt)

### 🎨 Funkcje:
- ✅ Responsywny design (desktop + mobile)
- ✅ Layout 40/60 (sidebar + content)
- ✅ Renderowanie Markdown (nagłówki, tabele, kod, listy itp.)
- ✅ Ciemny motyw
- ✅ Smooth navigation

---

## 📖 Dokumentacja

- **INSTRUKCJA.md** - Pełna instrukcja obsługi
- **PRZEWODNIK.md** - Jak dodawać nowe notatki
- **DEPLOYMENT.md** - Jak wdrożyć na hosting
- **PODSUMOWANIE.md** - Szczegóły projektu

---

## 🔧 Komendy

```bash
# Development
npm start          # Uruchom dev server (localhost:3000)

# Production
npm run build      # Zbuduj wersję produkcyjną
npm run test       # Uruchom testy (jeśli są)

# Deployment
npm run deploy     # Deploy na GitHub Pages (po konfiguracji)
```

---

## 📁 Struktura

```
put-notes-blog/
├── public/
│   └── semester-1/notes/    # 📝 NOTATKI SĄ TUTAJ
├── src/
│   ├── components/          # Komponenty React
│   ├── pages/              # Strony aplikacji
│   ├── data/               # Konfiguracja przedmiotów
│   └── utils/              # Funkcje pomocnicze
└── README.md
```

---

## 🆘 Problemy?

### Port zajęty?
```bash
lsof -ti:3000 | xargs kill -9
npm start
```

### Błędy kompilacji?
```bash
rm -rf node_modules package-lock.json
npm install
npm start
```

### Cache'owane pliki?
```bash
rm -rf node_modules/.cache
npm start
```

---

## ✨ Gotowe!

**Aplikacja działa na: http://localhost:3000**

Miłej nauki! 📚

