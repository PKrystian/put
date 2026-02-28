# Deployment Guide - PUT Notes Blog

## 🚀 Wdrożenie na GitHub Pages

### 1. Zaktualizuj `package.json`

Dodaj homepage:
```json
"homepage": "https://twoj-username.github.io/put-notes-blog"
```

Dodaj skrypty deploy:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

### 2. Zainstaluj gh-pages

```bash
npm install --save-dev gh-pages
```

### 3. Deploy

```bash
npm run deploy
```

### 4. Skonfiguruj GitHub Pages

1. Idź do ustawień repozytorium
2. Sekcja "Pages"
3. Source: `gh-pages` branch
4. Zapisz

---

## 🌐 Wdrożenie na Netlify

### Metoda 1: Drag & Drop

1. Zbuduj projekt: `npm run build`
2. Przeciągnij folder `build` na Netlify
3. Gotowe!

### Metoda 2: Git Integration

1. Połącz repozytorium z Netlify
2. Build command: `npm run build`
3. Publish directory: `build`
4. Deploy!

---

## 🔧 Wdrożenie na Vercel

```bash
# Zainstaluj Vercel CLI
npm install -g vercel

# Deploy
vercel
```

Lub:
1. Import projektu z GitHub
2. Framework Preset: Create React App
3. Deploy!

---

## 📋 Przed deployment - Checklist

- [ ] Zaktualizuj tytuł w `public/index.html`
- [ ] Zaktualizuj meta description
- [ ] Dodaj favicon
- [ ] Sprawdź `robots.txt`
- [ ] Zaktualizuj `manifest.json`
- [ ] Przetestuj build lokalnie: `npm run build && npx serve -s build`
- [ ] Sprawdź czy wszystkie linki działają
- [ ] Zoptymalizuj obrazki (jeśli są)

---

## 🔒 Environment Variables

Jeśli używasz zmiennych środowiskowych:

**.env.production**
```
REACT_APP_API_URL=https://api.example.com
```

---

## 📦 Build Output

Po `npm run build` otrzymasz zoptymalizowaną wersję w folderze `build/`:
- Minifikowane JS i CSS
- Hashed filenames dla cache busting
- Zoptymalizowane assety
- Production-ready React bundle

---

## 🎯 Performance Tips

1. **Code splitting** - React Router automatycznie splituje routes
2. **Lazy loading** - Używaj React.lazy() dla ciężkich komponentów
3. **Image optimization** - Kompresuj obrazy przed dodaniem
4. **CDN** - Rozważ użycie CDN dla statycznych assetów

---

## 📱 Progressive Web App (PWA)

Aplikacja jest już skonfigurowana jako PWA dzięki `manifest.json`.

Aby włączyć offline support:
1. Odkomentuj service worker w `index.tsx`
2. Build i deploy
3. Aplikacja będzie działać offline!

---

**Powodzenia z deployment!** 🚀

