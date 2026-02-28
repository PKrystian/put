## 1. Wprowadzenie do CMS (Content Management System)

### 1.1. CMS klasyczny vs Headless

- **CMS klasyczny** (np. WordPress, Joomla):
    
    - Panel administracyjny, baza danych i warstwa prezentacji są ściśle powiązane.
        
    - Content + wygląd są w jednej strukturze.
        
    - Dobrze sprawdza się przy tradycyjnych stronach WWW (blogi, wizytówki).
        
- **Headless CMS**:
    
    - CMS odpowiada jedynie za **zarządzanie treścią** i udostępnianie jej przez API.
        
    - **Warstwa prezentacji (frontend)** jest niezależna – może być aplikacją web, mobile, kiosk, digital signage itd.
        
    - **Visual agnostic** – system nie narzuca sposobu prezentacji treści.
        

**Wniosek z wykładu**: Rozwijany system ma być headless – panel służy do zarządzania treścią (dashboard), a backend jako API dostarcza dane.

---

## 2. Podział systemu – część kliencka i administracyjna

### 2.1. Część kliencka (CMS Dashboard)

- UI umożliwiające:
    
    - Tworzenie projektów.
        
    - Definiowanie typów kontentu.
        
    - Tworzenie i edycję wpisów.
        
    - Zarządzanie użytkownikami, tokenami, plikami, mediami.
        

### 2.2. Część administracyjna (Backend API)

- Implementacja modeli biznesowych:
    
    - Projekty.
        
    - Typy kontentu.
        
    - Wpisy.
        
    - Użytkownicy.
        
    - Media.
        
    - Tokeny API.
        
- Endpointy CRUD.
    
- Zasady walidacji i autoryzacji.
    

---

## 3. Koncepcja projektu w CMS – przykład

1. **Tworzymy projekt** – reprezentacja strony / aplikacji klienta.
    
    - Przykład: „Zakład mięsny Pani Basi”.
        
2. Każdy projekt posiada własną **przestrzeń kontentu**:
    
    - np. „Shopping list”
        
3. Tworzymy **typ kontentu**:
    
    - Nazwa: _shopping list_
        
    - Pola:
        
        - `title`: string, required
            
        - `items`: array of strings, required
            
4. Następnie generujemy wpisy (entries) oparte o zdefiniowany schemat
    
    - Wpis zawiera dane JSON zgodne z typem.
        

---

## 4. Struktura API

### 4.1. Endpointy administracyjne (protected)

- `/api/admin/projects`
    
- `/api/admin/content-types`
    
- `/api/admin/entries`
    
- `/api/admin/media`
    

Służą wyłącznie do:

- tworzenia projektów,
    
- definiowania typów kontentu,
    
- dodawania wpisów,
    
- edycji wpisów,
    
- usuwania danych.
    

Autoryzacja wymagana.

### 4.2. Endpointy publiczne

- `/api/{projectSlug}/{contentTypeSlug}`
    
    - Zwraca listę wpisów (opublikowanych).
        
- `/api/{projectSlug}/{contentTypeSlug}/{entryId}`
    
    - Zwraca pojedynczy wpis.
        

**Mechanizm draft**

- Wpis ma status: `draft`, `published`, ewentualnie `archived`.
    
- Wpisy w `draft` są widoczne w panelu, ale nie w endpointach publicznych.
    

---

## 5. Modele danych i relacje

Wykład zwraca dużą uwagę na bazę danych i relacje.

### 5.1. Główne tabele

#### `projects`

- id
    
- name
    
- slug
    
- created_at
    
- updated_at
    

#### `content_types`

- id
    
- project_id (FK)
    
- name
    
- slug
    
- schema (JSON opisujący pola)
    
- created_at
    
- updated_at
    

#### `entries`

- id
    
- content_type_id (FK)
    
- data (JSON)
    
- status
    
- created_at
    
- updated_at
    

#### `users`

- id
    
- username / email
    
- password_hash
    
- role
    
- created_at
    

#### `tokens`

- id
    
- user_id
    
- token_value (hash lub HMAC)
    
- expiration
    
- created_at
    

### 5.2. Media

- Trzymane w chmurze (Cloudflare R2 – odpowiednik AWS S3).
    
- W bazie przechowywane tylko metadane.
    
- Możliwość generowania pre-signed URL.
    

---

## 6. Technologie

### 6.1. Next.js (monorepo)

- Frontend (Dashboard) + Backend API w jednej aplikacji.
    
- API w folderze `/app/api` lub `/pages/api`.
    

### 6.2. Baza danych – D1

- Cloudflare D1, zgodna z SQL.
    
- Używa dialektu SQLite.
    
- Mimo nazwy: **nie „SQL Lite”** tylko **SQLite** wg dokumentacji.
    

### 6.3. Storage

- Cloudflare R2 – obiektowy storage.
    

### 6.4. UI

- React.
    
- TailwindCSS.
    
- Opcjonalnie biblioteki komponentów.
    

---

## 7. Autoryzacja i bezpieczeństwo

### 7.1. Logowanie

- Minimum e-mail + hasło.
    
- Odradzane wymyślanie lokalnych „username”.
    
- Reset hasła – opcjonalnie, zależne od mailingu.
    

### 7.2. Tokeny API

- Przechowywane w bazie.
    
- Jedno-do-jednego: user ↔ token lub wiele tokenów per user.
    
- Data wygaśnięcia (expiration date).
    
- Zabezpieczenie przed naruszeniami:
    
    - przechowywać jako hash, jak hasła,
        
    - nie plaintext.
        

### 7.3. Sesje

- Możliwość sesji utrzymywanych w DB (session store).
    
- Wiązanie IP z sesją jest niezalecane w środowiskach mobilnych lub dynamicznych.
    

### 7.4. Ataki i ryzyka

- Boty wysyłające formularze → potrzeba CAPTCHA.
    
- Atak na DNS → serwisy SaaS mogą paść (omówione anegdotycznie).
    
- Ataki na storage → rate-limits, anti-spam.
    

---

## 8. Migracje bazy danych

- Na początku proste migracje.
    
- Wraz z rozwojem projektu:
    
    - rozbudowa modeli,
        
    - relacje N:M,
        
    - osobne tabele kategorii/menu itd.
        

Przykład N:M:

`users_tasks - user_id - task_id`

---

## 9. Media i optymalizacja obrazów

- Upload → prerender → generowanie kilku rozmiarów:
    
    - thumbnail
        
    - medium
        
    - full
        
- Przechowywanie na R2.
    
- Limit rozmiaru pliku (np. 5MB).
    
- API powinno zwracać link do assetu, nie zawartość binarną.
    

---

## 10. Funkcjonalności dodatkowe

### 10.1. System ról

- Admin
    
- Editor
    
- Viewer
    
- Możliwa konfiguracja per projekt.
    

### 10.2. Wysyłanie maili

- Backend + mail provider.
    
- Personalizacja wysyłki.
    
- Problem throttlingu (limity maili na godzinę).
    
- Możliwość kolejki z opóźnieniem.
    

### 10.3. Export danych

- Zapisywanie wpisów do plików (np. CSV).
    
- Import masowy.
    

---

## 11. Settings tables (Twoja notatka)

Wiele systemów CMS stosuje **tabele ustawień globalnych**, np.:

- `settings`
    
    - `slug`: np. "site_title"
        
    - `value`: string / JSON
        

**lub** system translacji:

- `translations`
    
    - `key`
        
    - `language`
        
    - `value`
        

**Uwagi**:

- Użyteczne do stałych wartości, np. kontakt, stopka, nazwa firmy.
    
- Nie mieszają się z contentem publikacyjnym.
    

---

## 12. Harmonogram i wymagania

- **Prototyp za miesiąc** (zajęcia laboratoryjne).
    
- Oczekiwany progres:
    
    - API + podstawowa prezentacja danych.
        
    - Działające migracje DB.
        
    - Minimalny CRUD.
        

### 12.1. Ocena projektu

- Możliwe niezrealizowane cele, ale powinny stanowić mniejszość.
    
- Sekcja „cele niezrealizowane” jest akceptowalna.
    

---

## 13. Przykłady projektów studentów (omówione)

- System przydzielania zadań (użytkownicy ↔ administratorzy).
    
- CMS do prezentacji menu restauracji.
    
- CMS do portfolio artystycznego.
    

Każdy z nich można zaprojektować jako:

- **Projekt** → typy kontentu → wpisy.
    

---

## 14. Wnioski z wykładu

- Cały CMS powinien być modularny i **content agnostic**.
    
- Warstwa prezentacji = osobna rzecz.
    
- Priorytet:
    
    - API
        
    - bezpieczeństwo
        
    - poprawne modele danych
        
- Front to tylko narzędzie edycyjne, nie źródło prawdy.