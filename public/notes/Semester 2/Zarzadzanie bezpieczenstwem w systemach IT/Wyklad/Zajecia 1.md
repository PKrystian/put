# Notatki z wykładu

## Informacje organizacyjne

### Wykład

- Łączny wymiar: **16 godzin**.
- **Obecność nie jest obowiązkowa**, jednak uczestnictwo daje wymierne korzyści.
- Ocena końcowa z wykładu:
  - **kolokwium**, lub
  - **przepisanie oceny z laboratoriów** dla osób regularnie uczestniczących w wykładach (zgodnie z zasadami prowadzącego).
- Możliwość uzyskania **plusów za aktywność i udział w dyskusji**, które mogą pozytywnie wpłynąć na ocenę.

### Laboratoria

- Łączny wymiar: **16 godzin**.
- **Obecność obowiązkowa.**
- Podstawą zaliczenia jest **realizacja projektu zespołowego**.
- Nieobecność należy usprawiedliwić **na najbliższych zajęciach**.
- **Nieusprawiedliwiona nieobecność** skutkuje obniżeniem oceny końcowej o **0,5 stopnia**.
- Nieobecność na więcej niż **1/3 zajęć** powoduje **niezaliczenie przedmiotu**.

### Ocena z laboratoriów

Ocena końcowa uwzględnia:

- jakość zrealizowanego projektu,
- indywidualny wkład w realizację projektu,
- pracę zespołową,
- sposób organizacji i przebieg procesu przygotowania projektu.

---

# Wprowadzenie do bezpieczeństwa informacji

## Cel przedmiotu

Przedmiot stanowi wprowadzenie do zagadnień bezpieczeństwa systemów informatycznych oraz ochrony danych. Obejmuje zarówno podstawy teoretyczne, jak i praktyczne aspekty projektowania bezpiecznych aplikacji oraz identyfikowania zagrożeń.

Zakres tematyczny obejmuje m.in.:

- podstawowe pojęcia bezpieczeństwa,
- analizę zagrożeń,
- ochronę danych,
- bezpieczeństwo aplikacji internetowych,
- analizę podatności,
- rekonesans (OSINT),
- projektowanie bezpiecznych systemów.

---

# Triada CIA

Podstawowym modelem bezpieczeństwa informacji jest **Triada CIA (CIA Triad)**.

| Element | Znaczenie | Cel |
|---------|-----------|-----|
| **Confidentiality** | Poufność | Dostęp do danych mają wyłącznie uprawnione osoby. |
| **Integrity** | Integralność | Dane nie mogą zostać nieautoryzowanie zmodyfikowane. |
| **Availability** | Dostępność | Dane i usługi są dostępne wtedy, gdy są potrzebne. |

## Poufność (Confidentiality)

Poufność oznacza ochronę informacji przed nieuprawnionym ujawnieniem.

Przykładowe mechanizmy:

- szyfrowanie,
- kontrola dostępu,
- uwierzytelnianie użytkowników,
- klasyfikacja informacji.

### Istotna cecha poufności

Naruszenie poufności jest **praktycznie nieodwracalne**.

Przykład:

Jeżeli hasło zostanie podejrzane przez osobę nieuprawnioną, nie istnieje sposób "cofnięcia" faktu jego poznania. Można jedynie:

- zmienić hasło,
- uznać poprzednie za skompromitowane.

---

## Integralność (Integrity)

Integralność oznacza, że:

- dane nie zostały zmodyfikowane przez osoby nieuprawnione,
- każda zmiana jest możliwa do wykrycia.

Mechanizmy ochrony:

- podpis cyfrowy,
- funkcje skrótu,
- sumy kontrolne,
- kontrola wersji,
- logowanie zmian.

W praktyce często nie da się całkowicie uniemożliwić modyfikacji danych, ale można skutecznie wykryć jej wystąpienie.

---

## Dostępność (Availability)

Dostępność oznacza możliwość korzystania z danych i usług w wymaganym czasie.

Przykładowe zagrożenia:

- awarie sprzętu,
- ataki DoS/DDoS,
- uszkodzenie nośników,
- błędy administratora.

Mechanizmy ochrony:

- kopie zapasowe,
- redundancja,
- klastry wysokiej dostępności,
- systemy Disaster Recovery.

---

# Dodatkowe właściwości bezpieczeństwa

## Niezaprzeczalność (Non-repudiation)

Zapewnia możliwość udowodnienia, że określona operacja została wykonana przez konkretnego użytkownika.

Realizowana m.in. poprzez:

- podpis cyfrowy,
- certyfikaty,
- logi systemowe.

---

## Rozliczalność (Accountability)

Pozwala odpowiedzieć na pytania:

- kto wykonał operację,
- kiedy ją wykonał,
- jakie dane zostały zmienione.

Realizowana jest przez:

- rejestrowanie zdarzeń (logowanie),
- audyt,
- monitorowanie aktywności użytkowników.

---

# Uwierzytelnianie a autoryzacja

Pojęcia te są często mylone.

| Uwierzytelnianie (Authentication) | Autoryzacja (Authorization) |
|-----------------------------------|-----------------------------|
| Potwierdzenie tożsamości użytkownika | Nadanie uprawnień po zalogowaniu |
| Odpowiada na pytanie: "Kim jesteś?" | Odpowiada na pytanie: "Co możesz zrobić?" |

Przykład:

1. Logowanie przy użyciu loginu i hasła.
2. System potwierdza tożsamość użytkownika.
3. Następnie określa jego uprawnienia.

---

# Funkcjonalność a bezpieczeństwo

Między bezpieczeństwem i funkcjonalnością istnieje naturalny kompromis.

Im większe bezpieczeństwo:

- tym więcej mechanizmów ochronnych,
- tym większa liczba czynności wykonywanych przez użytkownika,
- tym mniejsza wygoda korzystania z systemu.

Przykład:

Logowanie:

- login + hasło,
- login + hasło + kod SMS,
- login + hasło + aplikacja MFA.

Każdy kolejny element zwiększa bezpieczeństwo kosztem wygody użytkownika.

Projektując system należy zachować odpowiedni balans pomiędzy:

- bezpieczeństwem,
- użytecznością,
- wydajnością.

---

# Bezpieczne przechowywanie haseł

Hasła **nie powinny być przechowywane w postaci jawnej**.

## Funkcje skrótu

Do przechowywania haseł wykorzystuje się funkcje haszujące.

Historycznie stosowano:

- MD5,
- SHA-1,
- SHA-2.

Obecnie **MD5 oraz SHA-1 nie są zalecane** do ochrony haseł.

## Nowoczesne algorytmy

Do przechowywania haseł należy stosować algorytmy:

- **Argon2** (rekomendowany),
- bcrypt,
- scrypt.

Ich cechy:

- celowo spowalniają obliczenia,
- utrudniają ataki słownikowe,
- zwiększają koszt ataku brute force.

---

# HTTPS

HTTPS zapewnia:

- poufność transmisji,
- integralność danych,
- uwierzytelnienie serwera.

Podczas nawiązywania połączenia:

1. przeglądarka pobiera certyfikat,
2. następuje weryfikacja certyfikatu,
3. uzgadniany jest klucz sesyjny,
4. dalsza komunikacja odbywa się w postaci szyfrowanej.

Proces ten jest praktycznie niewidoczny dla użytkownika.

---

# Zagrożenia bezpieczeństwa

## Definicja

Zagrożenie to czynnik mogący doprowadzić do naruszenia:

- poufności,
- integralności,
- dostępności.

Źródła zagrożeń:

- człowiek,
- błędy oprogramowania,
- awarie sprzętu,
- katastrofy naturalne,
- działania celowe.

---

## Klasyfikacja zagrożeń

### Według pochodzenia

- wewnętrzne,
- zewnętrzne.

### Według intencji

- zamierzone,
- niezamierzone.

### Według skutków

#### Zagrożenia pasywne

Nie powodują zmian w systemie.

Przykłady:

- podsłuchiwanie transmisji,
- analiza ruchu sieciowego.

#### Zagrożenia aktywne

Powodują modyfikację działania systemu.

Przykłady:

- malware,
- ransomware,
- ataki DoS,
- modyfikacja danych,
- przejęcie konta.

---

# Etapy ataku na system

Typowy atak przebiega etapowo:

1. Rekonesans.
2. Zbieranie informacji.
3. Analiza podatności.
4. Uzyskanie dostępu.
5. Eskalacja uprawnień.
6. Utrzymanie dostępu.
7. Ukrywanie śladów.

---

# OSINT

## Definicja

**OSINT (Open Source Intelligence)** oznacza pozyskiwanie informacji z ogólnodostępnych źródeł.

Nie oznacza włamania do systemu.

Polega na analizie danych publicznych.

---

## Cele OSINT

Pozyskiwanie informacji o:

- osobach,
- organizacjach,
- domenach,
- infrastrukturze,
- technologiach,
- zależnościach.

---

## Źródła informacji

### Media społecznościowe

- Facebook
- Instagram
- LinkedIn
- X (Twitter)

Pozwalają ustalić m.in.:

- zainteresowania,
- miejsce pracy,
- kontakty,
- lokalizację.

---

### Publiczne rejestry

Przykłady:

- KRS,
- CEIDG,
- rejestry domen,
- informacje finansowe.

---

### Metadane zdjęć

Zdjęcia mogą zawierać:

- współrzędne GPS,
- model aparatu,
- datę wykonania,
- parametry ekspozycji.

Metadane mogą ujawniać lokalizację użytkownika.

---

### Wyszukiwanie obrazem

Możliwe jest:

- odnalezienie podobnych zdjęć,
- ustalenie miejsca wykonania fotografii,
- identyfikacja obiektów.

---

# Rekonesans aplikacji internetowych

Podczas analizy aplikacji bada się m.in.:

- wykorzystywane technologie,
- wersje oprogramowania,
- strukturę strony,
- konfigurację serwera,
- certyfikaty SSL/TLS.

---

## Podejścia do testów bezpieczeństwa

### Black Box

Tester nie zna kodu źródłowego.

---

### White Box

Tester posiada pełny dostęp do kodu.

---

### Grey Box

Połączenie obu metod.

Tester posiada częściową wiedzę o systemie.

---

# Plik `robots.txt`

Jest to plik zawierający instrukcje dla robotów indeksujących.

Może określać:

- które zasoby mogą być indeksowane,
- które powinny zostać pominięte.

Przykład:

```text
User-agent: *
Disallow: /admin
Disallow: /private
```

Należy pamiętać, że:

- `robots.txt` **nie zabezpiecza zasobów**,
- jedynie informuje roboty wyszukiwarek,
- może ujawniać interesujące ścieżki (np. panel administratora).

---

# Plik `sitemap.xml`

Zawiera listę stron serwisu.

Może ujawniać:

- ukryte podstrony,
- strukturę aplikacji,
- nieindeksowane wcześniej zasoby.

---

# Plik `humans.txt`

Opcjonalny plik zawierający informacje o twórcach projektu.

Może zawierać:

- autorów,
- użyte technologie,
- wersje oprogramowania,
- informacje kontaktowe.

---

# Security by Design vs Security by Obscurity

## Security by Design

Bezpieczeństwo powinno wynikać z poprawnego projektu systemu.

Założenia:

- mechanizmy mogą być jawne,
- bezpieczeństwo opiera się na sile algorytmów i kluczy.

---

## Security by Obscurity

Polega na ukrywaniu sposobu działania systemu.

Nie jest uznawane za wystarczającą metodę ochrony.

Ukrywanie mechanizmów może stanowić jedynie dodatkową warstwę zabezpieczeń.

---

# Najważniejsze wnioski

- Podstawą bezpieczeństwa jest **Triada CIA**.
- Naruszenie poufności jest praktycznie nieodwracalne.
- Integralność i dostępność można często przywrócić odpowiednimi mechanizmami.
- Uwierzytelnianie i autoryzacja są odrębnymi procesami.
- Projektowanie bezpiecznych systemów wymaga kompromisu pomiędzy bezpieczeństwem a funkcjonalnością.
- Nowoczesne systemy przechowują hasła z wykorzystaniem **Argon2, bcrypt lub scrypt**.
- Rekonesans (OSINT) stanowi pierwszy etap większości profesjonalnych testów bezpieczeństwa.
- Publicznie dostępne informacje mogą ujawniać znacznie więcej danych, niż użytkownicy są świadomi.
- Bezpieczeństwo powinno być projektowane od początku (**Security by Design**), a nie opierać się wyłącznie na ukrywaniu mechanizmów.