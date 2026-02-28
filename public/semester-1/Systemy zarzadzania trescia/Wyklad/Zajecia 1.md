# **Notatki z wykładu: Systemy zarządzania treścią i bezpieczeństwo informacji**

## 1. Wprowadzenie do systemów zarządzania treścią (CMS)

Systemy zarządzania treścią (Content Management Systems – CMS) służą do tworzenia, przechowywania, organizowania oraz publikowania treści cyfrowych. Stanowią one kluczowy element infrastruktury informacyjnej organizacji.

### **Główne komponenty CMS**

- **Repozytorium danych** – przechowuje dane biznesowe, treści oraz metadane.
    
- **System tworzenia i gromadzenia treści** – umożliwia generowanie treści (ręcznie, automatycznie, przez AI) oraz importowanie danych z innych źródeł.
    
- **System zarządzania** – odpowiada za kontrolę dostępu, edycję, wersjonowanie, workflow.
    
- **System publikacji** – udostępnia dane odbiorcom w odpowiednim formacie (np. strony WWW, PDF, druk).
    

### **Przykłady zastosowań**

- Handel elektroniczny (np. Amazon, Allegro, OLX).
    
- Portale informacyjne (np. Onet, Twitter/X, Threads).
    
- Systemy ERP (Enterprise Resource Planning).
    
- Intranety korporacyjne i portale pracownicze.
    

---

## 2. Zarządzanie treścią i jej cykl życia

### **Cykl życia treści (Content Lifecycle)**

1. **Projektowanie i planowanie** – określenie celu i zakresu treści.
    
2. **Tworzenie / pozyskiwanie danych** – generowanie materiału przez użytkowników, narzędzia lub zewnętrzne źródła.
    
3. **Klasyfikacja i indeksacja** – tagowanie, etykietowanie, dodawanie metadanych.
    
4. **Recenzja i zatwierdzenie** – weryfikacja jakości i poprawności treści.
    
5. **Konwersja i publikacja** – przekształcenie danych do odpowiednich formatów (np. HTML, PDF).
    
6. **Przechowywanie i archiwizacja** – zapis danych w repozytoriach, wersjonowanie.
    
7. **Analiza i ponowne użycie** – raportowanie, aktualizacja, ponowne wykorzystanie treści.
    

---

## 3. Metadane

**Metadane** to dane opisujące inne dane. Ułatwiają organizację, wyszukiwanie i kontrolę dostępu do informacji.

**Przykłady metadanych:**

- Data utworzenia lub modyfikacji pliku.
    
- Autor, właściciel lub osoba edytująca.
    
- Typ i format pliku.
    
- Poziom dostępu i uprawnień.
    
- Wersja dokumentu.
    

**Relacyjna definicja:**

> _Metadane to dane o danych._

---

## 4. Ontologie i semantyka

### **Ontologia w systemach CMS**

Ontologia to formalny model pojęć oraz relacji między nimi w określonej dziedzinie wiedzy. Umożliwia spójne rozumienie terminologii między systemem a użytkownikiem.

**Przykład:**  
Dla systemu obsługującego sklep obuwniczy ontologia będzie zawierała pojęcia takie jak: _but, podeszwa, rozmiar, kolor, materiał_.

### **Znaczenie semantyki**

- Dodawanie znaczenia do tagów (tzw. **semantic markup**).
    
- Ułatwienie wyszukiwania i klasyfikowania treści.
    
- Budowa powiązań między danymi i kontekstami.
    

---

## 5. Personalizacja i profilowanie

Personalizacja polega na dostosowaniu treści i interfejsu do konkretnego użytkownika.

### **Rodzaje personalizacji**

- **Eksplizytna (explicit)** – użytkownik sam definiuje swoje preferencje (np. wybór gatunku muzyki w Spotify).
    
- **Kolaboracyjna (collaborative)** – system analizuje zachowania użytkownika i automatycznie dostosowuje treści.
    

### **Zastosowania:**

- Reklamy kontekstowe (remarketing).
    
- Rekomendacje produktów.
    
- Indywidualne pulpity użytkowników (np. w ERP).
    

---

## 6. Zarządzanie wiedzą i tagowanie

Tagowanie (oznaczanie treści słowami kluczowymi) pozwala:

- Ułatwić wyszukiwanie (np. wyszukiwanie pełnotekstowe).
    
- Grupować dane według kategorii.
    
- Budować zbiory powiązanych treści.
    

### **Przykłady zastosowań:**

- Systemy informacyjne (Facebook, LinkedIn).
    
- Bazy wiedzy (Wikipedia, Confluence).
    
- Archiwizacja dokumentów i klasyfikacja zasobów firmowych.
    

---

## 7. Technologie agentowe i przetwarzanie rozproszone

### **Technologie agentowe**

Systemy, w których zadania są dzielone pomiędzy tzw. agentów – niezależne jednostki wykonujące małe fragmenty większego problemu.

Zastosowanie:

- Systemy rozproszone.
    
- Analiza danych (data mining).
    
- Automatyzacja procesów biznesowych.
    

### **Eksploracja danych**

Analiza dużych zbiorów danych w celu odkrywania wzorców i zależności (np. analiza koszykowa – pieluchy + piwo).

---

## 8. Bezpieczeństwo informacji

### **Cel bezpieczeństwa**

Ochrona systemów przed nieautoryzowanym dostępem, modyfikacją, utratą lub ujawnieniem danych.

### **Zasada CIA**

Trzy główne filary bezpieczeństwa informacji:

|Skrót|Nazwa|Znaczenie|
|---|---|---|
|**C**|Confidentiality (Poufność)|Ograniczenie dostępu tylko do uprawnionych osób.|
|**I**|Integrity (Integralność)|Zachowanie spójności i poprawności danych.|
|**A**|Availability (Dostępność)|Zapewnienie, że dane są dostępne w razie potrzeby.|

---

## 9. Uwierzytelnianie i autoryzacja

### **Podstawowe pojęcia**

- **Uwierzytelnianie (Authentication)** – potwierdzenie tożsamości użytkownika.
    
- **Autoryzacja (Authorization)** – przyznanie lub odmowa dostępu do zasobów po uwierzytelnieniu.
    

**Kolejność:**

> Autoryzacja zawsze następuje po uwierzytelnieniu.

### **Rodzaje uwierzytelniania**

1. **Jednokierunkowe** – użytkownik uwierzytelnia się wobec systemu.
    
2. **Dwukierunkowe** – system i użytkownik wzajemnie się uwierzytelniają.
    
3. **Z udziałem trzeciej strony** – np. logowanie przez Google, Facebook (OAuth).
    

---

## 10. Metody uwierzytelniania

|Metoda|Opis|
|---|---|
|**Login i hasło**|Tradycyjna metoda uwierzytelniania.|
|**SSO (Single Sign-On)**|Jednokrotne logowanie zapewniające dostęp do wielu usług.|
|**OTP (One-Time Password)**|Hasło jednorazowe, często generowane przez aplikacje (np. Google Authenticator).|
|**Tokeny sprzętowe / softwarowe**|Urządzenia lub aplikacje generujące kody dostępu.|
|**Biometria**|Uwierzytelnianie na podstawie cech fizycznych (twarz, odcisk palca).|
|**2FA / MFA (Two-/Multi-Factor Authentication)**|Kombinacja kilku metod uwierzytelniania (np. hasło + SMS + aplikacja).|

---

## 11. Kryptografia

### **Rodzaje szyfrowania**

- **Symetryczne** – ten sam klucz do szyfrowania i deszyfrowania (np. AES, DES).
    
- **Asymetryczne** – para kluczy: publiczny i prywatny (np. RSA).
    

**Przykłady zastosowań:**

- HTTPS – komunikacja szyfrowana w przeglądarce.
    
- E-mail z certyfikatem (S/MIME).
    
- Tokeny bezpieczeństwa (np. JWT – JSON Web Token).
    

---

## 12. Systemy autoryzacji i uwierzytelniania w praktyce

- **OAuth 2.0** – standard autoryzacji oparty na tokenach, używany w logowaniu przez zewnętrzne serwisy (np. Google, GitHub).
    
- **OpenID Connect** – rozszerzenie OAuth, umożliwiające dodatkową warstwę identyfikacji.
    
- **Kerberos** – protokół uwierzytelniania sieciowego używany w systemach korporacyjnych (np. Active Directory).
    

---

## 13. AirGap (Airback / Aback)

**AirGap** – metoda fizycznego odizolowania systemu lub urządzenia od sieci w celu zwiększenia bezpieczeństwa.  
Zastosowanie:

- Systemy krytyczne (np. infrastruktura przemysłowa).
    
- Archiwa danych offline.
    
- Ochrona przed zdalnymi atakami.
    

---

## 14. Podsumowanie

Systemy zarządzania treścią i bezpieczeństwo informacji są kluczowymi elementami współczesnej infrastruktury IT. Wymagają integracji wiedzy z zakresu:

- inżynierii oprogramowania,
    
- bezpieczeństwa systemów,
    
- zarządzania danymi i wiedzą,
    
- semantyki i ontologii.
    

Efektywne wdrożenie CMS wymaga zrozumienia zarówno aspektów technicznych, jak i procesowych, a bezpieczeństwo danych musi być traktowane jako integralny element całego cyklu życia informacji.
