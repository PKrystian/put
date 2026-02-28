# Przewodnik dla Studentów - Jak dodawać notatki

## 📝 Jak dodać swoje notatki do systemu?

### Krok 1: Przygotuj swoje notatki w Markdown

Stwórz plik `.md` z notatkami. Przykład:

```markdown
# Nazwa Przedmiotu - Wykład 1

**Data:** 15 października 2025  
**Prowadzący:** dr Jan Kowalski

---

## Temat zajęć

Wprowadzenie do...

### Główne zagadnienia

- Punkt 1
- Punkt 2
- Punkt 3

```

### Krok 2: Umieść pliki w odpowiednim miejscu

Struktura folderów:
```
public/semester-X/notes/Nazwa Przedmiotu/
├── Sylabus.md (opcjonalny)
├── Wyklad/
│   ├── Zajecia 1.md
│   ├── Zajecia 2.md
│   └── Zajecia 3.md
├── Laboratorium/
│   └── Zajecia 1.md
└── Cwiczenia/
    └── Zajecia 1.md
```

**Ważne:**
- Nazwa folderu przedmiotu musi być DOKŁADNIE taka sama jak w konfiguracji
- Nazwy plików: `Zajecia 1.md`, `Zajecia 2.md` itd.
- Używaj polskich znaków w nazwach folderów

### Krok 3: Zaktualizuj konfigurację

Jeśli dodajesz NOWY przedmiot, edytuj plik:
`src/data/coursesData.ts`

Dodaj wpis:
```typescript
{
  id: 'programowanie-obiektowe',        // URL slug (bez spacji, małe litery)
  name: 'Programowanie obiektowe',      // Pełna nazwa (jak wyświetlać)
  path: 'Programowanie obiektowe',      // Nazwa folderu (dokładnie!)
  type: 'notes',                        // 'notes' lub 'project'
  semester: 2,                          // Numer semestru
}
```

I zaktualizuj `src/utils/courseStructure.ts`:

```typescript
'programowanie-obiektowe': {
  categories: ['Wyklad', 'Laboratorium'],  // Jakie kategorie ma przedmiot
  hasSyllabus: true                        // Czy ma sylabus?
},
```

Oraz ile plików jest w każdej kategorii:

```typescript
'programowanie-obiektowe': { 
  'Wyklad': 5,           // 5 plików wykładu
  'Laboratorium': 3      // 3 pliki laboratorium
},
```

### Krok 4: Przetestuj lokalnie

```bash
npm start
```

Sprawdź czy:
- ✅ Przedmiot pojawił się na liście
- ✅ Pliki się ładują
- ✅ Markdown renderuje się poprawnie
- ✅ Wszystkie linki działają

---

## 🎨 Markdown - Cheatsheet

### Nagłówki
```markdown
# H1 - Tytuł główny
## H2 - Sekcja
### H3 - Podsekcja
#### H4 - Punkt
```

### Formatowanie tekstu
```markdown
**Pogrubienie**
*Kursywa*
***Pogrubiona kursywa***
~~Przekreślenie~~
`kod inline`
```

### Listy
```markdown
- Punkt 1
- Punkt 2
  - Podpunkt 2a
  - Podpunkt 2b

1. Pierwszy
2. Drugi
3. Trzeci
```

### Linki i obrazy
```markdown
[Tekst linku](https://example.com)
![Alt text obrazka](url-do-obrazka.png)
```

### Cytaty
```markdown
> To jest cytat
> Może być wielolinijkowy
```

### Kod
````markdown
```javascript
function hello() {
  console.log("Hello world!");
}
```
````

### Tabele
```markdown
| Nagłówek 1 | Nagłówek 2 | Nagłówek 3 |
|------------|------------|------------|
| Dane 1     | Dane 2     | Dane 3     |
| Dane 4     | Dane 5     | Dane 6     |
```

### Separatory
```markdown
---
```

### Listy zadań (GitHub Flavored Markdown)
```markdown
- [x] Zadanie wykonane
- [ ] Zadanie do zrobienia
```

---

## 💡 Dobre praktyki

### ✅ Dobrze:
- Używaj nagłówków hierarchicznie (H1 → H2 → H3)
- Dodawaj datę i prowadzącego na początku notatek
- Używaj list dla wyliczenia punktów
- Formatuj kod używając bloków kodu
- Dodawaj separatory (---) między sekcjami

### ❌ Unikaj:
- Nie pomijaj poziomów nagłówków (H1 → H3)
- Nie używaj HTML zamiast Markdown
- Nie wklejaj bardzo długiego kodu bez formatowania
- Nie używaj wielkich obrazków (kompresuj je!)

---

## 📋 Template notatek

Skopiuj i użyj jako szablon:

```markdown
# Nazwa Przedmiotu – Wykład/Laboratorium X

**Data:** DD.MM.RRRR  
**Prowadzący:** Tytuł Imię Nazwisko  
**Temat:** Krótki opis tematu

---

## 1. Wprowadzenie

Opis wprowadzenia do tematu...

---

## 2. Główne zagadnienia

### 2.1. Pierwsze zagadnienie

Opis...

**Przykład:**
```
kod lub przykład
```

**Kluczowe punkty:**
- Punkt 1
- Punkt 2
- Punkt 3

### 2.2. Drugie zagadnienie

Opis...

---

## 3. Podsumowanie

Kluczowe wnioski:
- Wniosek 1
- Wniosek 2

---

## 4. Materiały dodatkowe

- [Link 1](url)
- [Link 2](url)

---

**Notatki przygotował:** Twoje Imię  
**Data aktualizacji:** DD.MM.RRRR
```

---

## 🤝 Współpraca

Jeśli chcesz współtworzyć notatki:
1. Fork repozytorium
2. Dodaj swoje notatki
3. Wyślij Pull Request
4. Czekaj na review

---

## ❓ Często zadawane pytania

**Q: Czy mogę dodawać obrazki?**  
A: Tak! Umieść je w folderze `public/images/` i linkuj relatywnie.

**Q: Czy mogę dodawać PDF-y?**  
A: Lepiej przekonwertuj na Markdown. Jeśli musisz, dodaj link do PDF.

**Q: Co jeśli przedmiot ma nietypową strukturę?**  
A: Skontaktuj się z maintainerem lub dostosuj konfigurację.

**Q: Jak dodać nowy semestr?**  
A: Dodaj wpis w `src/data/coursesData.ts` w tablicy `semesters`.

---

**Powodzenia z dodawaniem notatek!** 📚✨

