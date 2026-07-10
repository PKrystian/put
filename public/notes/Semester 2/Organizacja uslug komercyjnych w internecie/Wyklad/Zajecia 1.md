# Bezpieczeństwo aplikacji webowych – OWASP, Secure Design i dobre praktyki projektowe

## Cel zajęć

Tematem zajęć były najczęściej spotykane błędy projektowe i implementacyjne wpływające na bezpieczeństwo aplikacji internetowych. Omówiono przede wszystkim:

- ochronę przed **Injection**,
    
- zasady bezpiecznego projektowania (Secure Design),
    
- zasadę najmniejszych uprawnień,
    
- bezpieczne uwierzytelnianie,
    
- projektowanie mechanizmów autoryzacji,
    
- wykorzystanie AI podczas tworzenia oprogramowania,
    
- praktyczne przykłady podatności spotykanych w rzeczywistych systemach.
    

---

# 1. Injection

## Czym jest Injection?

Injection to grupa podatności polegających na możliwości przekazania przez użytkownika danych interpretowanych jako polecenia przez inny komponent systemu.

Najczęściej spotykane odmiany:

- SQL Injection
    
- Command Injection
    
- LDAP Injection
    
- XPath Injection
    
- NoSQL Injection
    

Jest to jedna z najważniejszych kategorii podatności wymienianych przez OWASP.

---

## Najlepsze praktyki ochrony przed SQL Injection

### 1. Parametryzowane zapytania (Prepared Statements)

Najważniejszym sposobem ochrony jest stosowanie zapytań parametryzowanych.

**Niepoprawnie:**

```sql
SELECT * FROM users
WHERE login = '" + login + "'
AND password = '" + password + "'";
```

**Poprawnie:**

```sql
SELECT *
FROM users
WHERE login = ?
AND password = ?;
```

Silnik bazy danych oddziela wtedy dane od kodu SQL.

---

### 2. Walidacja danych wejściowych

Każde dane pochodzące od użytkownika powinny zostać zweryfikowane.

Należy sprawdzać m.in.:

- długość,
    
- format,
    
- zakres wartości,
    
- dozwolone znaki.
    

Przykłady:

- adres e-mail,
    
- numer telefonu,
    
- identyfikatory,
    
- daty.
    

Walidacja nie zastępuje parametryzowanych zapytań, lecz stanowi dodatkową warstwę ochrony.

---

### 3. Escaping danych

Jeżeli aplikacja dopuszcza fragmenty HTML (np. edytory treści w CMS-ach), należy stosować odpowiednie mechanizmy sanitizacji.

Nie należy:

- przepuszczać dowolnego HTML,
    
- przepuszczać JavaScript,
    
- umożliwiać wykonywania kodu klienta.
    

Najlepiej stosować listę dozwolonych znaczników (whitelist).

---

### 4. Ograniczanie liczby zwracanych rekordów

Aplikacja nie powinna zakładać, że zapytanie zawsze zwróci dokładnie jeden rekord.

Należy:

- sprawdzać liczbę wyników,
    
- odpowiednio obsługiwać sytuacje wyjątkowe,
    
- nie opierać logiki bezpieczeństwa na założeniu poprawności danych.
    

---

# 2. Zasada najmniejszych uprawnień (Least Privilege)

Jedna z najważniejszych zasad bezpieczeństwa.

Każdy użytkownik, proces i komponent powinien posiadać wyłącznie takie uprawnienia, które są niezbędne do wykonania aktualnego zadania.

---

## Przykład

Nie należy uruchamiać aplikacji korzystając z konta bazy danych posiadającego:

- `DROP TABLE`
    
- `ALTER`
    
- `CREATE`
    
- `GRANT`
    
- pełne prawa administracyjne
    

Jeżeli endpoint jedynie odczytuje produkty, konto powinno mieć wyłącznie:

```sql
SELECT
```

Jeżeli endpoint zapisuje zamówienia:

```sql
SELECT
INSERT
UPDATE
```

i nic więcej.

---

## Rozdzielanie kont bazodanowych

Dobrą praktyką jest stosowanie osobnych kont:

|Operacja|Uprawnienia|
|---|---|
|logowanie|SELECT|
|katalog produktów|SELECT|
|zamówienia|SELECT, INSERT|
|administracja|rozszerzone uprawnienia|

Dzięki temu przejęcie jednego komponentu nie oznacza pełnego przejęcia bazy danych.

---

# 3. Connection Pool

Podczas omawiania aplikacji webowych zwrócono uwagę na mechanizm puli połączeń.

HTTP jest protokołem bezstanowym.

Dlatego:

- aplikacja nie utrzymuje jednego połączenia z bazą przez całą sesję użytkownika,
    
- korzysta z puli gotowych połączeń,
    
- po zakończeniu obsługi żądania połączenie wraca do puli.
    

Korzyści:

- większa wydajność,
    
- mniejsze zużycie zasobów,
    
- możliwość obsługi tysięcy jednoczesnych użytkowników.
    

---

# 4. Command Injection

Command Injection polega na przekazaniu danych użytkownika bezpośrednio do interpretera poleceń systemowych.

Przykład niebezpiecznej konstrukcji:

```bash
ping <dane_użytkownika>
```

Jeżeli dane nie zostaną odpowiednio zweryfikowane, możliwe staje się wykonanie dodatkowych poleceń systemowych.

Ochrona:

- nie uruchamiać poleceń systemowych bez potrzeby,
    
- stosować whitelist,
    
- stosować gotowe biblioteki,
    
- unikać budowania komend tekstowych.
    

---

# 5. Secure Design

Prowadzący podkreślał, że bezpieczeństwo należy projektować już na etapie analizy systemu.

Implementacja nie naprawi błędów architektury.

---

## Dokumentacja projektu

Projekt powinien zawierać:

- architekturę,
    
- przepływy danych,
    
- przypadki użycia,
    
- model zagrożeń,
    
- wymagania bezpieczeństwa.
    

Dokumentacja znacząco ułatwia:

- code review,
    
- rozwój projektu,
    
- utrzymanie,
    
- analizę podatności.
    

---

## User Stories

User Story powinny określać:

- kto korzysta z funkcjonalności,
    
- jaki jest cel,
    
- jakie ograniczenia bezpieczeństwa obowiązują.
    

Przykład:

> Jako administrator chcę usuwać użytkowników, aby zarządzać systemem.

Od razu powinno pojawić się pytanie:

- kto jeszcze może wykonać tę operację?
    
- jakie są wymagane uprawnienia?
    
- czy operacja jest logowana?
    

---

# 6. Wykorzystanie AI podczas programowania

Omówiono wykorzystanie modeli generatywnych do tworzenia kodu.

Najważniejsze wnioski:

AI:

- przyspiesza tworzenie kodu,
    
- dobrze radzi sobie z prostymi fragmentami,
    
- wymaga dokładnej weryfikacji.
    

Im większy projekt:

- tym więcej czasu należy poświęcić analizie wygenerowanego kodu,
    
- tym większe ryzyko niespójności.
    

Kod wygenerowany przez AI należy traktować podobnie jak kod napisany przez innego programistę.

Powinien zostać poddany:

- code review,
    
- testom,
    
- analizie bezpieczeństwa.
    

---

# 7. Typowe błędy projektowe

## Pytania pomocnicze

Przykłady:

- nazwisko panieńskie matki,
    
- pierwsza szkoła,
    
- ulubiony kolor.
    

Problemy:

- odpowiedzi można znaleźć w mediach społecznościowych,
    
- użytkownicy często udzielają prawdziwych odpowiedzi,
    
- odpowiedzi mają małą entropię.
    

Obecnie zaleca się odchodzenie od pytań pomocniczych.

---

## Walidacja wyłącznie po stronie klienta

Nie wolno ufać walidacji JavaScript.

Każdą walidację należy powtórzyć po stronie serwera.

Przykład:

Frontend:

- sprawdza format adresu e-mail.
    

Backend:

- również musi go zweryfikować.
    

---

## Niebezpieczne przechowywanie haseł

Nigdy nie należy przechowywać:

- haseł w postaci jawnej,
    
- haseł zaszyfrowanych odwracalnym algorytmem.
    

Hasła powinny być przechowywane jako:

- funkcje skrótu,
    
- z wykorzystaniem soli (salt),
    
- z wykorzystaniem nowoczesnych algorytmów.
    

Rekomendowane algorytmy:

- Argon2id
    
- bcrypt
    
- scrypt
    

Nie należy używać:

- MD5
    
- SHA-1
    
- prostego SHA-256 bez odpowiedniej konstrukcji.
    

---

## Sekrety zapisane w kodzie

Bardzo częsty problem.

Nie należy przechowywać w repozytorium:

- haseł,
    
- tokenów,
    
- kluczy API,
    
- certyfikatów.
    

Zamiast tego należy stosować:

- zmienne środowiskowe,
    
- menedżery sekretów,
    
- systemy Vault.
    

---

## Przesyłanie danych metodą GET

Nie należy przekazywać poufnych informacji przez URL.

Przykład:

```
https://example.com/login?password=haslo123
```

Dlaczego?

Adres URL trafia do:

- historii przeglądarki,
    
- logów serwera,
    
- proxy,
    
- narzędzi monitorujących,
    
- nagłówka Referer.
    

Dane poufne powinny być przesyłane metodą POST lub innymi bezpiecznymi mechanizmami.

---

# 8. Ochrona przed atakami słownikowymi

Należy stosować:

- rate limiting,
    
- ograniczenie liczby prób logowania,
    
- czasowe blokady,
    
- CAPTCHA (gdy jest uzasadniona),
    
- analizę zachowania użytkownika.
    

Nie należy blokować wyłącznie:

- adresu IP,
    
- konta użytkownika.
    

Nowoczesne systemy analizują wiele czynników jednocześnie.

---

# 9. Resetowanie hasła

Nie należy wysyłać nowego hasła e-mailem.

Poprawny proces wygląda następująco:

1. wygenerowanie jednorazowego tokena,
    
2. wysłanie linku HTTPS,
    
3. ustawienie nowego hasła przez użytkownika,
    
4. unieważnienie tokena.
    

Token powinien:

- być losowy,
    
- mieć krótki czas życia,
    
- być jednorazowy.
    

---

# 10. Polityka haseł

## Długość hasła

Największy wpływ na bezpieczeństwo ma długość.

Silne hasło powinno:

- być długie,
    
- być unikalne,
    
- nie występować w słownikach.
    

---

## Złożoność

Znaki specjalne nadal zwiększają odporność na ataki słownikowe, jednak współczesne rekomendacje (m.in. NIST) kładą większy nacisk na długość i unikalność niż na wymuszanie skomplikowanych reguł.

---

## Rotacja haseł

Obecnie nie zaleca się okresowej zmiany haseł bez powodu.

Hasło należy zmienić:

- po wycieku,
    
- po podejrzeniu kompromitacji,
    
- po ujawnieniu sekretu.
    

Wymuszanie częstych zmian powoduje często:

- przewidywalne modyfikacje,
    
- zapisywanie haseł na kartkach,
    
- obniżenie bezpieczeństwa.
    

---

# 11. Uwierzytelnianie wieloskładnikowe (MFA)

MFA znacząco zwiększa bezpieczeństwo.

Najczęściej wykorzystywane składniki:

- coś, co użytkownik zna (hasło),
    
- coś, co posiada (telefon, token),
    
- coś, czym jest (biometria).
    

Przykłady:

- aplikacje TOTP,
    
- klucze U2F/FIDO2,
    
- powiadomienia Push,
    
- kody SMS (obecnie uznawane za słabsze).
    

Minusem MFA jest spadek wygody użytkownika, jednak zysk bezpieczeństwa zwykle przewyższa tę niedogodność.

---

# 12. Autoryzacja oparta na analizie ryzyka

Nowoczesne systemy analizują:

- lokalizację,
    
- adres IP,
    
- urządzenie,
    
- historię logowań,
    
- porę dnia,
    
- nietypowe zachowanie użytkownika.
    

Przykład:

Logowanie z Polski, a po kilku minutach z Chile lub innego odległego kraju może zostać uznane za niemożliwe z punktu widzenia fizyki (impossible travel) i wymagać dodatkowej weryfikacji.

Takie mechanizmy stosują m.in. Google, Microsoft oraz banki.

---

# 13. Biometria

Omówiono wykorzystanie:

- odcisku palca,
    
- skanowania twarzy,
    
- innych metod biometrycznych.
    

## Zalety

- wygoda,
    
- szybkość,
    
- brak konieczności pamiętania hasła.
    

## Wady

- dane biometryczne po wycieku są praktycznie niemożliwe do zmiany,
    
- możliwość fałszywych dopasowań,
    
- potencjalne problemy prywatności.
    

Biometria powinna stanowić element uwierzytelniania wieloskładnikowego, a nie jedyny mechanizm ochrony.

---

# 14. Zarządzanie sesją

Dobre praktyki:

- wylogowanie po okresie bezczynności,
    
- możliwość ręcznego wylogowania ze wszystkich urządzeń,
    
- odnawianie identyfikatorów sesji po logowaniu,
    
- stosowanie bezpiecznych plików cookie (`HttpOnly`, `Secure`, `SameSite`),
    
- unieważnianie sesji po zmianie hasła.
    

---

# 15. Single Sign-On (SSO)

SSO umożliwia logowanie jednym kontem do wielu usług.

## Zalety

- wygoda,
    
- jedno konto,
    
- centralne zarządzanie.
    

## Ryzyka

Kompromitacja jednego konta może zapewnić dostęp do wielu systemów jednocześnie.

Dlatego szczególnie ważne jest:

- MFA,
    
- monitorowanie aktywności,
    
- szybkie unieważnianie sesji.
    

---

# Najważniejsze zasady do zapamiętania

1. Zawsze stosuj zapytania parametryzowane.
    
2. Waliduj dane po stronie serwera.
    
3. Korzystaj z zasady najmniejszych uprawnień.
    
4. Nie przechowuj sekretów w kodzie źródłowym.
    
5. Hasła przechowuj wyłącznie jako bezpieczne skróty (Argon2id, bcrypt, scrypt).
    
6. Stosuj MFA wszędzie tam, gdzie jest to możliwe.
    
7. Nie przesyłaj danych poufnych metodą GET.
    
8. Projektuj bezpieczeństwo już na etapie architektury systemu.
    
9. Traktuj kod wygenerowany przez AI jak kod napisany przez innego programistę — zawsze poddawaj go przeglądowi.
    
10. Monitoruj zachowanie użytkowników i wykrywaj anomalie zamiast polegać wyłącznie na prostych regułach bezpieczeństwa.
    

---

# Powiązanie z OWASP Top 10 (2021)

|Temat z wykładu|Odpowiednia kategoria OWASP|
|---|---|
|SQL Injection|A03: Injection|
|Command Injection|A03: Injection|
|Błędy projektowe|A04: Insecure Design|
|Walidacja wejścia|A03: Injection / A05: Security Misconfiguration|
|Least Privilege|A01: Broken Access Control|
|Przechowywanie haseł|A02: Cryptographic Failures|
|Sekrety w kodzie|A05: Security Misconfiguration|
|Zarządzanie sesją|A07: Identification and Authentication Failures|
|MFA|A07: Identification and Authentication Failures|
|Rate Limiting|A07: Identification and Authentication Failures|
|Reset hasła|A07: Identification and Authentication Failures|
|SSO|A07: Identification and Authentication Failures|
|Wykorzystanie AI|Nie jest osobną kategorią OWASP, lecz wpływa na jakość implementacji i bezpieczeństwo projektu.|
