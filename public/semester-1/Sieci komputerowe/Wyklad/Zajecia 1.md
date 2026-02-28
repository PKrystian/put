# Ocena efektywności systemów komputerowych

### Wykład 1 – Systemy komunikacji i podstawy sieci komputerowych

---

## 1. Wprowadzenie

Celem przedmiotu jest omówienie zasad funkcjonowania współczesnych systemów komputerowych z punktu widzenia **komunikacji**, **niezawodności**, **adresowania** oraz **efektywności transmisji**.  
Omawiane zagadnienia stanowią rozwinięcie materiału znanego z kursu _Sieci komputerowe_ ze studiów inżynierskich.

W ramach zajęć omawiane są m.in.:

- struktura i wielowarstwowość komunikacji w sieciach,
- protokoły komunikacyjne,
- adresowanie i typy sieci,
- niezawodność transmisji,
- bezpieczeństwo komunikacji (integralność, poufność, dostępność),
- zarządzanie sieciami.

---

## 2. Podstawy systemów komunikacji

### 2.1 Definicja systemu komunikacyjnego

System komunikacyjny to układ elementów umożliwiających przekazywanie informacji między **nadawcą** a **odbiorcą**.  
Komunikacja może być:

- **międzyludzka** (język, głos, gesty),
- **komputerowa** (sygnały elektryczne, cyfrowe dane),
- **mieszana** (człowiek–maszyna).

### 2.2 Elementy systemu komunikacyjnego

- **Nadawca** – inicjuje komunikację.
- **Odbiorca** – przetwarza i interpretuje informację.
- **Kanał komunikacyjny** – ścieżka przekazu informacji.  
    Składa się z:
    - _medium transmisyjnego_ (np. powietrze, przewód, światłowód),
    - _urządzeń pośredniczących_ (routery, przełączniki, punkty dostępowe).
- **Zbiór reguł i metod** – tzw. **protokół komunikacyjny**, definiujący sposób porozumiewania się stron.

> **Przykład:**  
> W sali wykładowej kanałem akustycznym jest powietrze, w kanale wizualnym – światło odbite od ekranu.

---

## 3. Protokół komunikacyjny

### 3.1 Pojęcie

**Protokół komunikacyjny** to zbiór zasad, które definiują sposób wymiany informacji między urządzeniami.  
Określa on:

- język komunikacji (kodowanie, szyfrowanie, format danych),
- parametry transmisji (szybkość, moc, format),
- procedury rozpoczęcia i zakończenia połączenia,
- metody adresowania i rozwiązywania konfliktów,
- sposób zapewnienia poprawności i ochrony transmisji.
    

> **Analogia:**  
> W rozmowie ludzkiej językiem jest protokół; aby komunikacja była skuteczna, obie strony muszą posługiwać się tym samym językiem i znać reguły wymiany.

### 3.2 Struktura komunikatu

Każdy komunikat (np. pakiet, ramka) składa się z dwóch części:

- **nagłówek** – metadane, informacje o nadawcy, odbiorcy, parametrach transmisji,
- **dane (payload)** – właściwa treść przekazu.

Często w nagłówku znajdują się **adresy zwrotne** i **adresy alternatywne**, co zwiększa **niezawodność** transmisji (tzw. _redundancja_).

---

## 4. Cechy systemów komunikacji

- **Zasięg transmisji** (lokalny, globalny)
- **Prędkość przekazywania informacji**
- **Liczba odbiorców przekazu** (unicasting, multicasting, broadcasting)
- **Tryb transmisji** (simplex, półdupleks, dupleks)
- **Rodzaj przekazywanej informacji** (tekst, dźwięk, wideo)
- **Sposób reprezentacji informacji** (analogowy lub cyfrowy)
- **Stopień niezawodności**
- **Sposób dialogu (np. interakcyjność)**

---

## 5. Tryby transmisji

|Tryb|Kierunek transmisji|Charakterystyka|
|---|---|---|
|**Simplex**|Jednokierunkowa|Nadawca wysyła, odbiorca tylko odbiera (np. telewizja).|
|**Półdupleks (Half-Duplex)**|Dwukierunkowa, ale naprzemienna|Nadawca i odbiorca komunikują się na zmianę (np. krótkofalówki).|
|**Dupleks (Full-Duplex)**|Dwukierunkowa jednoczesna|Obie strony nadają i odbierają równocześnie (np. rozmowa telefoniczna, TCP).|

---

## 6. Adresowanie komunikatów

### 6.1 Rodzaje adresowania

- **Unicasting** – do jednego odbiorcy.
- **Multicasting** – do wybranej grupy odbiorców.
- **Broadcasting** – do wszystkich w danej sieci.

> **Przykład:**  
> Wykładowca mówiący „proszę wszystkie panie o podniesienie ręki” wykonuje multicast.  
> Wypowiedź skierowana do całej sali – broadcast.  
> Pytanie do jednej osoby – unicast.

### 6.2 Własności systemu adresowania

- **Unikalność** – brak kolizji nazw (np. DNS, IP).
- **Stałość** – adres nie powinien zmieniać się przy zmianie lokalizacji (problem IPv4, NAT).
- **Bezpieczeństwo** – odporność na podszywanie się (spoofing).

### 6.3 Sposoby ustalania adresu

- **Na stałe** (np. MAC address),
- **Dynamicznie** (np. DHCP),
- **Zewnętrznie lub wewnętrznie przydzielane** (np. DNS vs. lokalny system).

---

## 7. Konflikty i arbitraż transmisji

Gdy wiele węzłów chce jednocześnie nadawać, powstaje konflikt.  
Rozwiązania:

- **Transmisja z arbitrażem** – centralny węzeł (np. nauczyciel, serwer) decyduje, kto może nadawać.
- **Algorytmy kolizyjne** – np. CSMA/CD (Ethernet) lub CSMA/CA (Wi-Fi).
- **Rezerwacja kanału** – przydział czasu lub przestrzeni transmisji (TDMA, SDMA).

---

## 8. Redundancja i niezawodność

### 8.1 Redundancja

Wprowadzenie nadmiarowych kanałów, danych lub informacji w celu zwiększenia niezawodności.

- W komunikacji ludzkiej – powtórzenie, parafraza, kontekst.
- W sieciach – retransmisje, kody korekcyjne, alternatywne trasy.

### 8.2 Mechanizmy niezawodności (na przykładzie TCP)

- **ACK (Acknowledgment)** – potwierdzenie odbioru.
- **Retransmisja** – ponowne wysłanie w razie błędu.
- **Limit prób** – zapobieganie nieskończonym retransmisjom.
- **Timeout** – określenie czasu oczekiwania na potwierdzenie.

> **Analogia:**  
> Nieudane zaliczenie egzaminu to negatywne potwierdzenie – następuje retransmisja (poprawka).

---

## 9. Poprawność i kody korekcyjne

### 9.1 Redundancja języka i kodowania

Podobnie jak w języku naturalnym możemy rozpoznać błędne słowo z kontekstu, w sieciach komputerowych stosuje się **kody korekcyjne**:

- kody Hamminga,
- CRC (Cyclic Redundancy Check),
- sumy kontrolne,
- parzystość bitowa.

### 9.2 Kody korekcyjne i detekcyjne

- **Kody detekcyjne** – wykrywają błędy, ale ich nie poprawiają (np. parzystość).
- **Kody korekcyjne (ECC)** – pozwalają na naprawę przekłamań bitów bez retransmisji.

---

## 10. Wielowarstwowość komunikacji

### 10.1 Idea

Komunikacja jest realizowana przez zestaw **warstw**, z których każda odpowiada za inny aspekt transmisji.

> **Model TCP/IP:**
> 
> 1. Warstwa dostępu do sieci (Ethernet)
> 2. Warstwa internetowa (IP)
> 3. Warstwa transportowa (TCP, UDP)
> 4. Warstwa aplikacji (HTTP, SMTP, DNS)

Każda warstwa używa usług niższej i dostarcza usługi wyższej.

### 10.2 Implementacja protokołów

Protokoły są implementowane w systemach operacyjnych (np. stos TCP/IP w Windows, Linux, macOS).  
Różnice implementacyjne mogą powodować odmienne zachowania (czasy retransmisji, limity błędów).

---

## 11. Media i kanały komunikacyjne

### 11.1 Definicje

- **Medium transmisyjne** – fizyczny nośnik sygnału (np. miedź, światłowód, powietrze).
- **Kanał komunikacyjny** – logiczne połączenie między węzłami wykorzystujące dane medium.

### 11.2 Typy kanałów

- **Dedykowane** – łączą tylko dwa węzły (np. kabel HDMI).
- **Współdzielone** (_multiple access_) – używane przez wiele urządzeń (np. Wi-Fi, Ethernet).

### 11.3 Transmisja symetryczna i asymetryczna

- **Symetryczna** – przepustowość w obu kierunkach jest równa.
- **Asymetryczna** – różna (np. ADSL: większy downlink niż uplink).

### 11.4 Agregacja i zwielokrotnienie

Łączenie kilku kanałów w jeden o większej przepustowości.  
Stosowane w przełącznikach i łączach światłowodowych (np. LACP – Link Aggregation Control Protocol).

### 11.5 WDM – _Wavelength Division Multiplexing_

Technika umożliwiająca jednoczesną transmisję wielu kanałów w jednym światłowodzie, każdy z inną długością fali światła.

---

## 12. Tryby transmisji wielodostępnej

|Skrót|Nazwa|Zasada działania|Przykład|
|---|---|---|---|
|**TDMA**|Time Division Multiple Access|Podział czasu transmisji|GSM|
|**FDMA**|Frequency Division Multiple Access|Podział pasma częstotliwości|Radio FM|
|**SDMA**|Space Division Multiple Access|Podział przestrzeni|Różne sale wykładowe, LTE|
|**CDMA**|Code Division Multiple Access|Różne kody nadawców|3G|

---

## 13. Klasyfikacja sieci komputerowych

|Rodzaj|Pełna nazwa|Zasięg|Przykłady technologii|
|---|---|---|---|
|**NAN**|Neighborhood Area Network|sąsiedztwo, lokalne urządzenia|komunikacja między smartfonami|
|**BodyNet**|Body Area Network|wokół ciała użytkownika|czujniki medyczne, urządzenia ubieralne|
|**PAN**|Personal Area Network|kilka metrów|Bluetooth, IrDA|
|**LAN**|Local Area Network|budynek, kampus|Ethernet, Wi-Fi|
|**MAN**|Metropolitan Area Network|miasto|Ethernet, ATM, IEEE|
|**WAN**|Wide Area Network|kraj, kontynent|Internet, MPLS|

> **Sieci specjalizowane:**
> - **SAN** – _Storage Area Network_ (pamięci masowe)
> - **Percepcyjne / sterujące** – systemy wbudowane, IoT


---

## 14. Okablowanie strukturalne

### 14.1 Elementy

- **Okablowanie poziome** – skrętka, do 90 m.
- **Okablowanie pionowe** – łączy piętra, często światłowód.
- **Punkty dystrybucyjne, krosownice, kable krosowe.**

### 14.2 Sprzęt sieciowy

- Urządzenia aktywne: przełączniki, routery, punkty dostępowe.
- Urządzenia pasywne: kable, gniazda, patch-panele.

---

## 15. Oprogramowanie sieciowe

- **Systemy operacyjne**: UNIX, Windows Server, Linux.
- **Funkcje sieciowe**:
    - implementacja protokołów transmisji,
    - zarządzanie ruchem i bezpieczeństwem,
    - udostępnianie zasobów (plików, drukarek, baz danych).

---

## 16. Bezpieczeństwo transmisji

### 16.1 Model CIA

1. **Confidentiality (Poufność)** – ochrona przed nieuprawnionym odczytem.
    - Szyfrowanie (IPSec, TLS, HTTPS)
    - Steganografia
    - Fizyczne zabezpieczenie medium
2. **Integrity (Integralność)** – ochrona przed modyfikacją danych.
    - Sumy kontrolne, podpisy cyfrowe
    - Parzystość, CRC
3. **Availability (Dostępność)** – zapewnienie ciągłości usług.
    - Redundancja, replikacja
    - Systemy wysokiej dostępności (HA)

> **Uwaga:** Internet sam w sobie nie zapewnia bezpieczeństwa – wymaga dodatkowych mechanizmów.

---

## 17. Standardyzacja

### 17.1 Główne organizacje międzynarodowe

- **ITU-T** – International Telecommunication Union
- **ISO** – International Organization for Standardization
- **IEC** – International Electrotechnical Commission

### 17.2 Internetowe

- **IAB** – Internet Architecture Board
- **IETF** – Internet Engineering Task Force (RFC – _Request for Comments_)
- **W3C** – World Wide Web Consortium

### 17.3 Amerykańskie

- **ANSI**, **IEEE**, **NIST**

---

## 18. Przykłady protokołów (wg warstw TCP/IP)

| Warstwa          | Przykładowe protokoły      |
| ---------------- | -------------------------- |
| Aplikacji        | HTTP, SMTP, FTP, DNS, SNMP |
| Transportowa     | TCP, UDP, SCTP             |
| Internetowa      | IPv4, IPv6, ICMP           |
| Dostępu do sieci | Ethernet, Wi-Fi, PPP       |

---

## 19. Analogiczne zasady komunikacji ludzkiej i komputerowej

|Aspekt|Komunikacja ludzka|Komunikacja komputerowa|
|---|---|---|
|Język|Polski, angielski|Protokół (np. TCP/IP)|
|Kanał|Powietrze, głos|Medium transmisyjne|
|Zakłócenia|Hałas|Szum, interferencje|
|Powtórzenie|Dopytanie, „proszę powtórzyć”|Retransmisja|
|Potwierdzenie|Kiwnięcie głową|Flaga ACK|
|Arbitraż|Wskazanie osoby przez prowadzącego|CSMA/CD, TDMA|
|Bezpieczeństwo|Zaufanie, legitymacja|Szyfrowanie, uwierzytelnianie|
|Redundancja|Kontekst, gesty|Kody korekcyjne|

---

## 20. Podsumowanie

Systemy komunikacyjne, zarówno międzyludzkie, jak i komputerowe, opierają się na wspólnych zasadach:

- istnienie protokołu komunikacyjnego,
- potrzeba zgodności języka i reguł,
- zapewnienie niezawodności i bezpieczeństwa,
- hierarchiczna struktura (warstwy, role nadawcy i odbiorcy).

Sieci komputerowe stanowią podstawę nowoczesnych systemów informatycznych.  
Ich efektywność zależy od poprawnego działania protokołów, odpowiedniego doboru mediów, mechanizmów niezawodności oraz właściwego poziomu bezpieczeństwa transmisji.

---

> **Notatka końcowa:**  
> W kolejnych wykładach omawiane będą szczegółowe aspekty wielowarstwowości TCP/IP, zarządzania sieciami (SNMP), pomiarów efektywności i oceny niezawodności systemów komputerowych.