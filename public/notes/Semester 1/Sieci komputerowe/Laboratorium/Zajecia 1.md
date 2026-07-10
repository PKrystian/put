# Laboratorium Sieci Komputerowych – Notatki

## 1. Informacje organizacyjne

### 1.1. Przepisywanie ocen (przedmioty z poprzednich studiów)

Podział przypadków przedstawiony przez prowadzącego:

#### Przypadek A – Informatyka na Wydziale Informatyki i Telekomunikacji

Warunki:

- Przepis oceny z przedmiotu „Sieci Komputerowe 1” (lub ekwiwalent).
    
- Wymagane przesłanie dokumentu z oceną (np. skan aneksu, wypis z systemu uczelni).
    
- Jeżeli była poprawa – brane jest **ostateczne** podejście (wcześniejsze ignorowane).
    

#### Przypadek B – Inne kierunki w obrębie Wydziału Informatyki i Telekomunikacji

Warunki:

- Brak formalnej podstawy prawnej do prostego przepisania 1:1, jednak prowadzący zwykle robi wyjątek.
    
- Student musi wskazać **konkretne przedmioty**, w ramach których realizował tematykę sieci (tematy pokrywające się z zakresem laboratorium).
    
- Znaczenie mają jedynie zajęcia laboratoryjne, nie wykłady.
    

#### Przypadek C – Informatyka na innej uczelni (prowadzenie przez kadrę PŁ)

Warunki:

- Analizowana jest **karta ECTS** oraz zgodność programu.
    
- Przykładowo prowadzący akceptuje przedmioty prowadzone przez osoby takie jak dr inż. Kalewski, dr inż. Michał Sojkowski (zbieżność programu dydaktycznego).
    
- Po weryfikacji proponowana jest ocena lub dodatkowe wymagania.
    

#### Przypadek D – Inne kierunki / inne uczelnie

Warunki:

- Brak możliwości przepisania.
    
- Konieczna realizacja pełnego zakresu laboratorium.
    

### 1.2. Materiały do zajęć

- Oficjalne repozytorium: **kurs „Sieci komputerowe – laboratorium”** (drugi stopień).
    
- Prowadzący poinformuje, gdzie dokładnie znajdują się materiały: slajdy, pliki konfiguracyjne, ćwiczenia.
    
- Dostęp do materiałów wymaga użycia hasła-klucza dla danego roku akademickiego (np. „sieci 20–25”).
    

> Uwaga: w transkrypcji prowadzący sugeruje, że część materiałów mogła zostać usunięta/wycofana w wyniku audytu uczelnianego — należy opierać się na bieżącej wersji na platformie.

---

## 2. Egzamin końcowy z laboratoriów („zadanie zaliczeniowe”)

### 2.1. Charakter zadania

- Zadanie wykonywane na ostatnich zajęciach.
    
- Student otrzymuje _case_ projektowy zawierający:
    
    - Schemat połączeń z minimum **jednym urządzeniem sieciowym**.
        
    - Mogą wystąpić różne urządzenia: routery, switche, hosty (PC), serwery.
        
- Zadanie może dotyczyć:
    
    - konfiguracji routingu (statycznego, dynamicznego),
        
    - konfiguracji VLAN,
        
    - konfiguracji dostępu,
        
    - trasowania,
        
    - adresacji IPv4.
        

### 2.2. Przykładowy opis zadania (wg prowadzącego)

- Otrzymujesz diagram połączeń (np. minimum 2–3 hosty + 1 urządzenie sieciowe).
    
- Należy:
    
    1. Zaprojektować adresację IP dla hostów i sieci.
        
    2. Wykonać poprawne fizyczne/logicze połączenia interfejsów.
        
    3. Zrealizować konfigurację wymaganą dla danego zadania:
        
        - routing statyczny / dynamiczny (np. RIP/OSPF),
            
        - konfiguracja VLAN,
            
        - konfiguracja interfejsów warstwy 3 (SVI),
            
        - konfiguracja NAT, ACL itp.
            

### 2.3. Punktacja i ocena

- Zakres punktowy odpowiada stopniowi trudności elementów.
    
- W niektórych zadaniach routing zajmuje 80–90% punktów, w innych konfiguracja IPv4 i VLANy są równie ważne.
    
- Wykonanie zadania odbywa się w czasie trwania zajęć – **orientacyjnie 1h**.
    
- Wynik przekazywany jest **natychmiast po zakończeniu**.
    
- Brak egzaminów pisemnych – zaliczenie tylko poprzez praktyczne wykonanie zadania.
    

---

## 3. Zakres i cel laboratoriów

> W treści transkrypcji prowadzący nie omawia jeszcze technicznych zagadnień sieci.  
> W tej sekcji dodaję **ustandaryzowany zakres laboratoryjny**, zgodny z typowym programem akademickim.

### 3.1. Warstwy i modele sieciowe

#### Model OSI (Open Systems Interconnection)

- **7 warstw:**
    
    1. Fizyczna – medium transmisji, przewody, sygnał.
        
    2. Łącza danych – ramki, MAC, VLAN, L2 switching.
        
    3. Sieciowa – routing IP, adresacja, protokoły routingu.
        
    4. Transportowa – TCP/UDP, kontrola błędów, segmentacja.
        
    5. Sesji – zarządzanie komunikacją.
        
    6. Prezentacji – kodowanie, szyfrowanie.
        
    7. Aplikacji – protokoły użytkowe (HTTP, DNS, SSH).
        

#### Model TCP/IP

- **4 warstwy:**
    
    - Dostępu do sieci (L1–L2),
        
    - Internetu (L3, np. IP, ICMP),
        
    - Transportu (TCP/UDP),
        
    - Aplikacji (HTTP, DNS, DHCP).
        

W praktyce laboratoryjnej koncentrujemy się na poziomach L2 i L3.

---

## 4. Urządzenia sieciowe (podstawowe)

### 4.1. Switch (przełącznik)

- Działa w warstwie 2 modelu OSI.
    
- Podejmuje decyzje na podstawie adresów MAC.
    
- Tworzy domenę **kolizji** osobną dla każdego portu.
    
- Obsługuje VLAN (podział sieci logiczny).
    

### 4.2. Router

- Działa w warstwie 3 modelu OSI.
    
- Umożliwia komunikację między sieciami.
    
- Wprowadza domenę **rozgłoszeniową** oddzielną dla każdej sieci.
    

### 4.3. Host końcowy (PC, serwer)

- Urządzenie końcowe, konfiguracja IP:
    
    - adres IP,
        
    - maska sieci,
        
    - brama domyślna,
        
    - DHCP / statycznie.
        

---

## 5. Adresacja IPv4 (podstawy niezbędne do zaliczenia)

### 5.1. Notacja

- Adres: np. `192.168.1.10`
    
- Maska: `255.255.255.0` lub `/24`
    
- Sieć: `192.168.1.0/24`
    
- Broadcast: `192.168.1.255`
    

### 5.2. CIDR

- Bezklasowy podział sieci.
    
- Prefiks `/24 = 256 adresów`, `/30 = 4 adresy` (typowe w połączeniach punkt–punkt).
    
- Subnetowanie pozwala optymalizować przestrzeń adresową.
    

---

## 6. Routing

### 6.1. Routing statyczny

- Administrator tworzy trasy ręcznie.
    
- Zaleta: prostota, przewidywalność.
    
- Wada: brak automatycznego dostosowania do zmian.
    

### 6.2. Routing dynamiczny (najczęściej wykorzystywany w ćwiczeniach)

- Protokoły wymieniają informacje między routerami.
    
- Przykłady:
    
    - **RIP** – oparty na liczbie skoków (hop count).
        
    - **OSPF** – protokół link-state, segmentacja na obszary.
        
    - **EIGRP** – protokół hybrydowy (Cisco).
        

---

## 7. VLAN – podstawy

- **Virtual LAN** — logiczny podział jednej fizycznej sieci na wiele podsieci.
    
- Typowe zastosowania:
    
    - wydzielenie ruchu administracyjnego,
        
    - separacja hostów studentów/laboratoriów,
        
    - minimalizacja broadcastów.
        

### 7.1. Typy portów

- **Access** – przypisany do jednego VLANu.
    
- **Trunk** – przenosi wiele VLAN (tagowanie IEEE 802.1Q).
    

---

## 8. Uwagi końcowe

- Prowadzący dopuszcza elastyczne podejście w zakresie przepisów ocen, lecz wymaga **udokumentowania**.
    
- Do zaliczenia laboratoriów **kluczowa jest praktyka**:
    
    - umiejętność poprawnej konfiguracji,
        
    - rozumienie schematów,
        
    - stosowanie adresacji logicznej.
