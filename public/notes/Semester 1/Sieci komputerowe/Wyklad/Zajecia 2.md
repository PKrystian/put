## 1. Informacje organizacyjne

**Egzamin główny:**

- Termin: **8.02.2026**, godz. **13:00**
    
- Sala: **BT 029**
    

**Egzamin poprawkowy:**

- Termin: **28.02.2026**, godz. **9:00**
    
- Sala: **CW 13**
    

---

# 2. Wprowadzenie do komunikacji sieciowej

Transmisja danych w sieciach komputerowych może odbywać się w dwóch podstawowych trybach:

- **Połączeniowym** – zanim dane zostaną przesłane, zestawiane jest logiczne połączenie (np. TCP).
    
- **Bezpołączeniowym** – brak zestawiania połączenia, wysyłamy pojedyncze jednostki danych (np. UDP).
    

Kluczowe pojęcia wykorzystywane w transmisji zależą od warstwy protokołu:

- **Ramki** – warstwa dostępu do sieci
    
- **Pakiety/Datagramy** – warstwa sieciowa (IP)
    
- **Segmenty** – warstwa transportowa (TCP)
    
- **Komunikaty/Żądania/Odpowiedzi** – warstwa aplikacji (HTTP, SMTP itd.)
    

Każda jednostka transmisyjna składa się z:

- **nagłówka** – kontrola, adresacja, typ protokołu warstwy wyższej
    
- **pola danych** – zawartość użytkowa lub jednostka z warstwy wyższej
    

---

# 3. Modele komunikacyjne: ISO/OSI i TCP/IP

## 3.1 Model ISO/OSI (7 warstw)

Model teoretyczny opisujący ogólne zasady komunikacji. Warstwy:

1. **Fizyczna**
    
2. **Łącza danych**
    
3. **Sieciowa**
    
4. **Transportowa**
    
5. **Sesji**
    
6. **Prezentacji**
    
7. **Aplikacji**
    

W praktyce model OSI jest głównie odniesieniem koncepcyjnym.

## 3.2 Model TCP/IP (4 warstwy)

W praktycznych sieciach stosowany jest uproszczony **czterowarstwowy model TCP/IP**:

1. **Dostępu do sieci** (warstwa fizyczna + łącza danych z OSI)
    
2. **Międzysieciowa** (IP)
    
3. **Transportowa** (TCP, UDP)
    
4. **Aplikacji** (HTTP, DNS, FTP itd.)
    

### Powiązanie funkcjonalne modeli

Mimo różnic w liczbie warstw, model TCP/IP zachowuje pełną funkcjonalność OSI. Każda warstwa korzysta z usług warstwy niższej – klasyczna zasada wielowarstwowości.

---

# 4. Warstwa dostępu do sieci

## 4.1 Media transmisyjne

**Sieci przewodowe:**

- Ethernet
    
- ATM
    
- Fibre Channel
    

**Sieci bezprzewodowe:**

- IEEE 802.11 (Wi-Fi)
    
- IEEE 802.16
    
- Bluetooth
    
- ZigBee
    
- IrDA (podczerwień)
    

Pasmo kluczowe dla sieci bezprzewodowych: **mikrofale – 300 MHz do 300 GHz**.

## 4.2 Adresacja fizyczna (MAC)

- Adres MAC: najczęściej **48-bitowy**, zapis szesnastkowy.
    
- Nadawany przez producenta karty sieciowej.
    
- Zawiera identyfikator producenta oraz numer seryjny urządzenia.
    

Adres MAC identyfikuje interfejs w **ramkach Ethernetu** oraz odpowiada za komunikację lokalną.

---

# 5. Warstwa międzysieciowa – IP

## 5.1 Protokół IP jako wspólny standard

W skali globalnej wszystkie urządzenia sieciowe muszą korzystać ze wspólnego protokołu warstwy sieciowej – **IP**. Bez względu na rodzaj sieci lokalnej, łączy, medium czy technologii.

## 5.2 IPv4 i IPv6 – współistnienie dwóch wersji

### IPv4:

- 32-bitowa przestrzeń adresowa – niewystarczająca w skali dzisiejszej.
    
- Brak wbudowanych mechanizmów bezpieczeństwa – wymagane nakładki (np. IPsec jako dodatek).
    
- Nagłówek dość złożony.
    

### IPv6:

- 128-bitowa przestrzeń adresowa – praktycznie nieograniczona.
    
- IPsec wbudowany w specyfikację (opcjonalnie stosowany).
    
- Znacznie prostszy nagłówek niż w IPv4 → szybsze przetwarzanie przez routery.
    

### Uwagi praktyczne:

- Współczesne sieci korzystają jednocześnie z IPv4 i IPv6.
    
- Jest mało prawdopodobne, aby IPv4 całkowicie zniknęło w najbliższych dekadach.
    

## 5.3 Protokoły wspomagające IP

Niezbędne do funkcjonowania sieci, choć nie przenoszą bezpośrednio danych użytkowych:

- **ARP** – odwzorowanie adresu IP na MAC
    
- **LLDP** – protokół sąsiedztwa; budowa map topologii sieci
    

---

# 6. Warstwa transportowa – TCP i UDP

## 6.1 TCP (Transmission Control Protocol)

- Protokół **połączeniowy**
    
- Gwarancja dostarczenia danych
    
- Potwierdzenia, retransmisje, kontrola błędów
    
- Stosowany w większości usług internetowych: HTTP, SMTP, POP, FTP, IMAP itd.
    

## 6.2 UDP (User Datagram Protocol)

- Protokół **bezpołączeniowy**
    
- Brak potwierdzeń, brak retransmisji
    
- Mniejsze opóźnienia
    
- Stosowany tam, gdzie liczy się czas: DNS, VoIP, RTP/RTCP, streaming.
    

## 6.3 Numery portów

- 16-bitowa przestrzeń → ok. 65 tys. portów
    
- Port identyfikuje **proces** w ramach jednego urządzenia
    
- Ten sam komputer może jednocześnie działać jako serwer WWW, klient poczty i inne aplikacje sieciowe
    

---

# 7. Warstwa aplikacji – protokoły i usługi

Kluczowe protokoły wykorzystywane w nowoczesnych sieciach:

- **HTTP/HTTPS** – usługi WWW
    
- **DNS** – translacja nazw na adresy IP
    
- **SMTP, POP** – poczta elektroniczna
    
- **FTP** – przesyłanie plików
    
- **DHCP** – automatyczna konfiguracja adresów
    
- **SNMP** – zarządzanie sieciami
    
- **NTP** – synchronizacja czasu
    
- **SIP, RTP, RTCP** – VoIP
    
- **MODBUS** – automatyka przemysłowa
    
- **BGP, RIP, OSPF** – protokoły routingu
    

---

# 8. Enkapsulacja (zagnieżdżanie jednostek transmisyjnych)

Fundamentalna zasada działania sieci:  
**warstwa niższa opakowuje jednostkę warstwy wyższej w swoim nagłówku i przekazuje dalej.**

Przykład transmisji strony WWW przez Ethernet:

1. **HTTP** – komunikat aplikacyjny (żądanie GET lub odpowiedź z treścią)
    
2. **TCP** – tworzy segment, dodaje nagłówek (port źródłowy i docelowy)
    
3. **IP** – opakowuje segment TCP w pakiet
    
4. **Ethernet** – umieszcza pakiet IP w polu danych ramki, dodaje swój nagłówek i sumę kontrolną
    
5. Ramka jest wysyłana jako sygnał fizyczny przez kartę sieciową
    

W narzędziu takim jak Wireshark można zaobserwować wszystkie nagłówki warstwowe w formie hierarchicznej.

---

# 9. Różnorodność technologii w sieci a unifikacja protokołów

W kanale transmisyjnym od źródła do celu można spotkać różne technologie:

- sieć domowa: Ethernet
    
- sieć miejska: ATM lub światłowód
    
- sieć operatora: MPLS, radiolinie
    
- sieć docelowa: Wi-Fi
    

Pomimo różnic w najniższej warstwie, wspólny protokół IP zapewnia jednolitą transmisję danych na poziomie sieciowym.

---

# 10. Parametry transmisji i niezawodność

## 10.1 Współczynnik błędnych bitów (BER)

- Sieci bezprzewodowe (Wi-Fi): około **10⁻⁵**
    
- Sieci przewodowe Ethernet: około **10⁻¹²**
    

Sieci przewodowe są miliony razy bardziej niezawodne.

## 10.2 Mechanizmy zapewniania niezawodności

- sumy kontrolne
    
- mechanizmy wykrywania błędów
    
- retransmisje (np. w TCP)
    
- redundancja transmisji (na wyższych warstwach)
    

---

# 11. Podsumowanie najważniejszych zależności

- Model TCP/IP jest praktycznym fundamentem współczesnych sieci.
    
- IP zapewnia spójność działania na poziomie globalnym.
    
- TCP i UDP umożliwiają realizację różnych typów usług.
    
- Enkapsulacja jest kluczową zasadą transmisji w architekturach wielowarstwowych.
    
- Warstwa dostępu do sieci może korzystać z różnych technologii, lecz wyższe warstwy pozostają niezmienne.
    
- Adresacja odbywa się na wielu poziomach: MAC → IP → port.
    

---

# 12. Zastosowanie wiedzy – perspektywa egzaminu

Na podstawie treści zajęć warto zwrócić szczególną uwagę na:

- różnice między modelami OSI i TCP/IP
    
- działanie i strukturę nagłówków Ethernet, IP, TCP
    
- funkcje protokołów aplikacyjnych
    
- działanie DNS, DHCP, SNMP
    
- różnicę między TCP a UDP
    
- adresowanie IPv4/IPv6 i koncepcje przejścia
    
- enkapsulację w praktyce (np. obserwacje w Wiresharku)
    
- mechanizmy niezawodności transmisji