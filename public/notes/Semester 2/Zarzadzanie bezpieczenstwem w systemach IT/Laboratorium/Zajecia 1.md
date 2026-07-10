# Laboratorium – OSINT (Open Source Intelligence)

## Cel zajęć

Tematem laboratorium jest **OSINT (Open Source Intelligence)**, czyli pozyskiwanie informacji z ogólnodostępnych źródeł. Zajęcia mają na celu przygotowanie studentów do przeprowadzenia analizy wybranego celu (targetu) przy wykorzystaniu wyłącznie legalnych i publicznie dostępnych narzędzi oraz źródeł.

---

# Organizacja zajęć

## Materiały

- Instrukcja do laboratorium znajduje się na platformie kursowej.
- Dokumentacja jest dostępna w języku angielskim.
- Znajomość specjalistycznego języka angielskiego nie jest wymagana — instrukcja jest stosunkowo prosta.

---

## Harmonogram

Do kolejnych zajęć należy:

1. Wykonać zadanie z zakresu OSINT.
2. Przygotować raport.
3. Przesłać raport zgodnie z wymaganym nazewnictwem.

Na następnych laboratoriach przewidziane jest również:

- testowanie aplikacji wykonanych przez inne zespoły,
- wymiana projektów pomiędzy grupami,
- analiza bezpieczeństwa cudzych aplikacji.

---

# Testowanie aplikacji

## Założenia

Każda aplikacja będzie testowana przez **dwa niezależne zespoły**.

Nie będzie możliwości testowania własnej aplikacji.

Ocena będzie dotyczyć przede wszystkim:

- działania aplikacji,
- bezpieczeństwa,
- analizy kodu źródłowego (white-box),
- zachowania aplikacji podczas działania (black-box).

Jeżeli aplikacja została przygotowana w technologii:

- Python
- Django
- FastAPI

należy udostępnić zarówno kod źródłowy, jak i możliwość uruchomienia projektu (np. przy użyciu Dockera).

---

# Zadanie OSINT

## Charakter zadania

Zadanie wykonywane jest **indywidualnie**.

Każdy student wybiera **dwa cele (targety)** do analizy.

---

# Wybór targetów

Prowadzący sugeruje następujące możliwości:

- własna strona internetowa (portfolio),
- strona firmy,
- lokalny warsztat samochodowy,
- restauracja,
- niewielkie przedsiębiorstwo,
- organizacja,
- dowolna publicznie dostępna witryna.

Nie zaleca się wybierania dużych korporacji ani systemów, których analiza mogłaby być utrudniona.

Dobrym wyborem są niewielkie podmioty posiadające publiczną stronę internetową.

---

# Zasady prowadzenia analizy

Analiza powinna być wykonywana **wyłącznie z wykorzystaniem informacji publicznych (OSINT).**

Nie wolno:

- włamywać się do systemów,
- omijać zabezpieczeń,
- wykonywać aktywnych ataków,
- wykorzystywać podatności do uzyskania nieautoryzowanego dostępu.

Dozwolone jest jedynie zbieranie informacji dostępnych publicznie.

---

# Dozwolone narzędzia

## Przeglądarka internetowa

Podstawowym narzędziem jest przeglądarka.

Warto korzystać z:

- Developer Tools,
- Inspect Element,
- Network Monitor,
- Debuggera.

---

## Narzędzia systemowe

Przykładowe narzędzia:

- ping
- traceroute
- tracert
- nslookup
- whois

---

## Analiza ruchu

Można korzystać z:

- Wireshark
- innych analizatorów ruchu sieciowego

pod warunkiem, że analiza dotyczy własnego środowiska lub legalnie dostępnych danych.

---

## Wyszukiwarki internetowe

Dozwolone jest wykorzystanie:

- Google
- Bing

oraz technik:

- Google Hacking (Google Dorks)

Przykładowe zapytania:

```text
site:example.com

filetype:pdf

intitle:index.of

inurl:admin

ext:sql

"SQL syntax"

"Warning"

"Fatal error"
```

---

# Zakres analizy

Podczas analizy należy zebrać możliwie dużo informacji.

## 1. Informacje domenowe

Sprawdzić między innymi:

- adres IP,
- rekordy DNS,
- właściciela domeny (jeżeli dostępny),
- historię domeny,
- datę rejestracji,
- serwery nazw.

---

## 2. Technologie

Należy ustalić:

- serwer WWW (Apache, Nginx, IIS itd.),
- wykorzystywany CMS,
- framework,
- język programowania,
- biblioteki JavaScript.

Przykładowe CMS:

- WordPress
- Drupal
- Joomla

---

## 3. Certyfikat SSL

Jeżeli witryna korzysta z HTTPS, warto sprawdzić:

- ważność certyfikatu,
- wystawcę,
- wersję TLS,
- ewentualne błędy konfiguracji.

---

## 4. Informacje o stronie

Przykładowe elementy:

- autorzy,
- kontakt,
- polityka prywatności,
- regulamin,
- informacje o firmie,
- dane teleadresowe.

---

## 5. Historia strony

Warto sprawdzić:

- Internet Archive (Wayback Machine),
- wcześniejsze wersje strony,
- usunięte podstrony.

Pozwala to znaleźć informacje, które obecnie nie są już publicznie dostępne.

---

## 6. Pliki dostępne publicznie

Należy poszukać:

- dokumentów PDF,
- plików DOCX,
- arkuszy XLSX,
- prezentacji,
- kopii zapasowych,
- plików konfiguracyjnych.

Można wykorzystać Google Dorks.

---

## 7. Metadata

Jeżeli znalezione zostaną dokumenty, warto sprawdzić:

- autora,
- używane oprogramowanie,
- daty utworzenia,
- strukturę dokumentów.

---

## 8. robots.txt

Sprawdzić zawartość pliku:

```
https://example.com/robots.txt
```

Może zawierać informacje o:

- ukrytych katalogach,
- panelach administracyjnych,
- strukturze serwisu.

---

## 9. security.txt / humans.txt

Jeżeli istnieją:

```
/security.txt

/humans.txt
```

mogą zawierać dodatkowe informacje o administratorach lub procedurach bezpieczeństwa.

---

## 10. Google Maps

W przypadku firm można sprawdzić:

- lokalizację,
- opinie,
- zdjęcia,
- dane kontaktowe,
- godziny otwarcia.

---

## 11. Wersje oprogramowania

Jeżeli uda się ustalić wersję:

- CMS,
- frameworka,
- serwera,

należy sprawdzić, czy znane są publiczne podatności dla tej wersji (np. CVE).

Nie należy jednak próbować ich wykorzystywać.

---

# Raport

Raport powinien zawierać:

## Opis celu

- nazwa targetu,
- adres strony,
- krótka charakterystyka.

---

## Metodyka

Opis wykonanych czynności.

Przykładowo:

1. Identyfikacja domeny.
2. Analiza DNS.
3. Analiza technologii.
4. Analiza certyfikatów.
5. Wyszukiwanie dokumentów.
6. Analiza archiwów.
7. Google Dorks.

---

## Wyniki

Każde znalezisko powinno być:

- opisane,
- wyjaśnione,
- skomentowane.

Nie wystarczy zamieścić samych zrzutów ekranu.

Przykład niewystarczającego opisu:

> Adres IP: 192.168.x.x

Lepszy opis:

> Serwis korzysta z infrastruktury Cloudflare. Zidentyfikowano rekordy DNS wskazujące na usługę CDN. Certyfikat SSL został wystawiony przez Let's Encrypt i jest ważny do...

---

## Wnioski

Na końcu raport powinien zawierać podsumowanie, obejmujące:

- najciekawsze odkrycia,
- ocenę poziomu ujawnianych informacji,
- potencjalne ryzyka,
- rekomendacje.

---

# Dokumentacja

Raport powinien być:

- uporządkowany,
- czytelny,
- posiadać logiczną strukturę,
- zawierać komentarze do wszystkich istotnych znalezisk.

Nie należy ograniczać się wyłącznie do zrzutów ekranu.

---

# Nazewnictwo plików

Prowadzący wymaga stosowania ustalonego schematu nazewnictwa.

Przykładowy format:

```
ZBSI_Grupa_Nazwisko_Wersja.pdf
```

gdzie:

- **ZBSI** – akronim przedmiotu,
- **Grupa** – numer grupy,
- **Nazwisko** – autor raportu,
- **Wersja** – numer wersji dokumentu.

---

# Dobre praktyki OSINT

- Korzystaj wyłącznie z legalnych źródeł.
- Dokumentuj wszystkie wykonane kroki.
- Wyjaśniaj znaczenie każdego znaleziska.
- Nie przeprowadzaj aktywnych ataków.
- Zachowuj etykę pracy analityka bezpieczeństwa.
- Oceniaj wartość pozyskanych informacji z perspektywy potencjalnego atakującego.

---

# Najważniejsze informacje do zapamiętania

- Zadanie wykonywane jest indywidualnie.
- Każdy student analizuje dwa wybrane targety.
- Korzystamy wyłącznie z publicznych źródeł informacji.
- Głównym narzędziem jest przeglądarka oraz narzędzia OSINT.
- Raport powinien zawierać opis, analizę oraz własne wnioski.
- Same zrzuty ekranu nie są wystarczające.
- Analiza ma charakter pasywny i nie obejmuje prób włamania ani aktywnego skanowania wykraczającego poza zasady prowadzącego.