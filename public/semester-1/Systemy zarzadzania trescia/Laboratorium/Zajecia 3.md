## Projekt aplikacji webowej – architektura, model danych, wielojęzyczność, panel administracyjny

---

## 1. Architektura aplikacji – podział na Frontend i Panel Administracyjny

W projekcie przyjęto logiczny podział systemu na dwie główne części:

### 1.1. Warstwa publiczna (Frontend)

Część dostępna dla użytkowników niezalogowanych. Odpowiada za:

- wyświetlanie treści (strony, artykuły, elementy CMS),
    
- obsługę przełączania języków,
    
- renderowanie menu, nagłówka, stopki,
    
- prezentację formularzy (np. kontaktowego).
    

Frontend powinien korzystać wyłącznie z danych zatwierdzonych do publikacji oraz spełniających określone warunki (np. data publikacji ≤ aktualna data).

---

### 1.2. Panel administracyjny (`/admin`)

Osobna część systemu przeznaczona do zarządzania treścią. Logicznie traktowana jako oddzielny moduł aplikacji.

Zakres odpowiedzialności:

- zarządzanie stronami (Page),
    
- zarządzanie elementami treści (Content Item),
    
- zarządzanie językami,
    
- konfiguracja ustawień (Settings),
    
- zarządzanie użytkownikami i rolami,
    
- publikacja i harmonogramowanie treści.
    

Panel administracyjny powinien być dostępny wyłącznie po uwierzytelnieniu.

---

## 2. Role użytkowników i uwierzytelnianie

W systemie wyróżniono następujących aktorów:

- **Gość (Guest)** – użytkownik niezalogowany,
    
- **Moderator** – użytkownik zarządzający treścią,
    
- **Administrator** – użytkownik z pełnymi uprawnieniami.
    

### 2.1. Kluczowa zasada

Każdy użytkownik przed zalogowaniem jest **Gościem**.  
Dopiero po poprawnym uwierzytelnieniu system rozpoznaje jego rolę (Moderator / Administrator).

### 2.2. Dostęp do endpointów

- Formularz logowania – dostępny wyłącznie dla Gościa.
    
- Reset hasła – dostępny wyłącznie dla Gościa.
    
- Wylogowanie – dostępne wyłącznie dla użytkownika zalogowanego.
    
- Panel zarządzania – dostęp wyłącznie dla ról uprzywilejowanych.
    

Należy przewidzieć obsługę sytuacji, w której zalogowany użytkownik próbuje wejść na stronę logowania (np. przekierowanie do panelu zamiast ponownego wyświetlenia formularza).

---

## 3. Model treści – Page i Content Item

### 3.1. Strona (Page)

Strona jest logicznym kontenerem treści. Może zawierać:

- nagłówek (header),
    
- sekcję główną (main content),
    
- stopkę (footer),
    
- elementy menu,
    
- komponenty dynamiczne.
    

Strona może być zbudowana z wielu elementów typu Content Item.

---

### 3.2. Content Item – podejście modularne

Content Item reprezentuje pojedynczy element treści, np.:

- tytuł (H1),
    
- blok tekstu,
    
- galerię,
    
- sekcję z obrazami,
    
- kafelek informacyjny.
    

#### Podejścia do przechowywania treści:

1. **Monolityczne (całość jako jeden rekord HTML)**
    
    - szybkie wdrożenie,
        
    - brak elastyczności,
        
    - trudności przy tłumaczeniach,
        
    - brak granularnej kontroli nad elementami.
        
2. **Modularne (rozbicie na elementy)**
    
    - każdy element osobnym rekordem,
        
    - większa kontrola nad tłumaczeniami,
        
    - możliwość selektywnej edycji,
        
    - zgodność z zasadami projektowania CMS.
        

Rekomendowane jest podejście modularne.

---

## 4. Data publikacji i harmonogramowanie

W modelu treści należy przewidzieć pole typu:

- `publish_date` (data publikacji).
    

### 4.1. Zastosowanie

- umożliwia planowanie publikacji w przyszłości,
    
- pozwala filtrować treści:
    
    ```sql
    WHERE publish_date <= CURRENT_DATE
    ```
    
- umożliwia tworzenie wersji roboczych,
    
- wspiera logikę „aktywne dopiero od…”.
    

System powinien zawsze uwzględniać warunek publikacji przy renderowaniu treści publicznych.

---

## 5. Paginacja

W systemie zarządzania treścią należy wprowadzić paginację.

Przykład:

- `posts_per_page = 10`
    

Zalety:

- ograniczenie liczby rekordów ładowanych jednorazowo,
    
- poprawa wydajności,
    
- lepsza użyteczność interfejsu administracyjnego.
    

---

## 6. Wielojęzyczność – model danych

Podczas zajęć omówiono dwa podejścia do realizacji tłumaczeń.

---

### 6.1. Podejście 1 – tabela `translations`

Struktura:

- `reference_key`
    
- `language`
    
- `value`
    
- metadane (created_at, modified_at)
    

Problemy:

- konieczność ręcznego mapowania każdego elementu,
    
- skomplikowane wiązanie tłumaczeń z konkretnymi fragmentami strony,
    
- większa złożoność logiki aplikacyjnej.
    

---

### 6.2. Podejście 2 – język jako właściwość Content Item (rekomendowane)

Struktura:

#### Tabela `languages`

- `id`
    
- `code` (np. `pl`, `en`, `de`)
    
- `name`
    

#### Tabela `content_items`

- `id`
    
- `page_id`
    
- `language_id` (foreign key)
    
- `title`
    
- `body`
    
- `publish_date`
    
- inne pola
    

### 6.2.1. Zasada działania

Dla każdej wersji językowej tworzony jest osobny rekord.

Przykład:

|id|page_id|language_id|title|
|---|---|---|---|
|1|1|PL|O nas|
|2|1|EN|About us|
|3|1|DE|Über uns|

Przy przełączaniu języka:

```sql
WHERE language_id = X
```

System ładuje kompletny zestaw treści dla wybranego języka.

---

### 6.2.2. Zalety

- prostsze zapytania,
    
- brak skomplikowanego mapowania elementów,
    
- zgodność z zasadą trzeciej postaci normalnej,
    
- łatwiejsze zarządzanie przez moderatora.
    

---

## 7. Ustawienia systemowe (Settings)

Niektóre dane powinny być przechowywane w bazie, a nie w kodzie (nie hardcoded):

Przykłady:

- adres e-mail formularza kontaktowego,
    
- numer telefonu,
    
- adres siedziby,
    
- ustawienia widoczności modułów.
    

Zalecenia:

- przechowywać konfigurację w tabeli `settings`,
    
- umożliwić edycję z poziomu panelu administracyjnego,
    
- unikać wartości zakodowanych w plikach źródłowych.
    

---

## 8. Formularz kontaktowy – logika dynamiczna

Adres odbiorcy formularza nie powinien być wpisany na stałe w kodzie.

Poprawne podejście:

1. Odczyt adresu z tabeli `settings`,
    
2. Dynamiczne powiązanie formularza z aktualną konfiguracją,
    
3. Możliwość zmiany adresata bez modyfikacji kodu.
    

---

## 9. Relacje i normalizacja danych

Model powinien:

- wykorzystywać klucze obce (foreign key),
    
- przechowywać słowniki (np. languages) w osobnych tabelach,
    
- unikać powielania danych tekstowych (np. kodów języka),
    
- dążyć do trzeciej postaci normalnej (3NF).
    

Przykład:  
Brak wpisu w `translations` dla języka `fr` nie oznacza istnienia języka francuskiego w systemie.  
Dlatego języki powinny być definiowane w osobnej tabeli.

---

## 10. Rozdzielenie odpowiedzialności systemu

System powinien być logicznie podzielony na:

- warstwę publiczną (frontend),
    
- warstwę administracyjną (backend),
    
- warstwę danych (baza),
    
- warstwę logiki aplikacyjnej (kontrolery, serwisy).
    

Taki podział:

- zwiększa czytelność projektu,
    
- poprawia bezpieczeństwo,
    
- ułatwia dalszy rozwój.
    

---

## 11. Najczęstsze błędy projektowe

1. Przechowywanie konfiguracji w kodzie.
    
2. Brak rozdzielenia ról przed i po uwierzytelnieniu.
    
3. Brak obsługi wylogowania.
    
4. Niewłaściwe modelowanie tłumaczeń.
    
5. Monolityczne przechowywanie całej strony jako jednego rekordu HTML.
    
6. Brak filtracji treści według daty publikacji.
    
7. Brak paginacji w panelu administracyjnym.
    

---

## 12. Wnioski końcowe

Podczas zajęć omówiono projekt systemu CMS z uwzględnieniem:

- poprawnej architektury aplikacji,
    
- modelowania treści,
    
- zarządzania rolami i uwierzytelnianiem,
    
- harmonogramowania publikacji,
    
- paginacji,
    
- projektowania wielojęzyczności,
    
- normalizacji bazy danych,
    
- oddzielenia konfiguracji od kodu.
    

Rekomendowane podejście zakłada:

- modularny model treści,
    
- język jako atrybut encji,
    
- osobną tabelę słownikową języków,
    
- wyraźny podział frontend / backend,
    
- dynamiczne ustawienia konfiguracyjne,
    
- kontrolę dostępu opartą o role po uwierzytelnieniu.
    