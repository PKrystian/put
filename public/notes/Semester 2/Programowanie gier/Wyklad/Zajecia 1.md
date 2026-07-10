# Notatki z Zajęć: Symulacja Fizyki i Silnik Gier

**Data:** 21.03.2026
## Turniej Samochodów Wyścigowych

### Cel i Zasady

Projekt symulacji wyścigowej stanowi element praktyczny zajęć, w którym studenci implementują algorytmy sztucznej inteligencji do sterowania samochodami na wyznaczonym torze. Każdy samochód porusza się niezależnie, a system zapisuje wyniki wyścigów w formacie podobnym do Formuły 1.

### Wizualizacja

- **Perspektywa z góry:** Pozwala obserwować całą trasę i ruch wszystkich pojazdów jednocześnie
- **Perspektywa indywidualna:** Umożliwia śledzenie konkretnego samochodu
- **Paski pasa ruchu:** Środkowe paski są widoczne z perspektywy z góry, wyznaczając kierunek jazdy na torze

### Właściwości Pojazdów

- Pojazdy wyposażone w systemy sensoryczne
- Każdy pojazd porusza się z indywidualnym tempem
- System obsługuje kolizje między pojazdami
- Pojazdy bez kół mogą nadal poruszać się w symulacji (błąd fizyki użytkownika)

---

## Systemy Sensoryczne

### Czujniki Pojazdu

Pojazdy wyposażone są w system czujników (tzw. "wąsy"), które zbierają informacje o otoczeniu. Czujniki ułożone są następująco:

- **Jeden czujnik centralny (wprost)** - informuje o przeszkodach bezpośrednio przed pojazdem
- **Dwa czujniki boczne** - monitorują przestrzeń po lewej i prawej stronie
- **Jeden czujnik tylny** - wykrywa przeszkody z tyłu pojazdu

### Funkcja Czujników

Czujniki zwracają informacje o **dystansie do przeszkody** dla każdego kierunku. Na podstawie tych danych system sterujący pojazdem podejmuje decyzje nawigacyjne.

### Niewidzialna Bariera Toru

- System zawiera niewidzialną barierę (wirtualną ścianę) wokół toru
- Zapobiega wypadaniu pojazdów poza tor
- Umożliwia symulację kolizji z krawędzią
- Wymagana obsługa kolizji w kodzie pojazdu

---

## Mechanika Pojazdu

### Punkty Kontrolne (Checkpoints)

Tor wyznaczony jest na podstawie **punktów kontrolnych** (checkpointów) reprezentowanych wizualnie jako kreski na trasie.

**Informacje dostępne dla pojazdu:**

- Położenie następnego checkpointu
- Kierunek ruchu względem pojazdu (zgodny, przeciwny)
- Czy pojazd znajduje się w obrębie strefie wpływu checkpointu

### System Restartu

- Pojazd, który utknął na trasie, może się zrestartować
- Restart następuje na **ostatnim osiągniętym checkpoincie**
- Po restarcie pojazd otrzymuje **karę czasową** za opóźnienie
- System karny ma na celu zniechęcenie pojazdu do częstych restartów

### Metric: Czas Okrążenia

- Każdy pojazd ma mierzone **najlepsze okrążenie** (best lap)
- Wyniki zapisywane są do pliku w formacie rankingu Formuły 1
- Ranking zawiera: pozycję, kierowcę, czas okrążenia

### Dystans Przejazdu

System śledzi również:

- Całkowitą **długość ścieżki przejazdu** przez pojazd
- Im krótszy dystans, tym efektywniejsza trasa
- Efektywność zależy od taktyki jazdy (szybkości i trajektorii)

---

## Sterowanie Pojazdem

### Parametry Sterowania

Sterowanie pojazdem zdefiniowane jest dwoma **parametrami ciągłymi** z zakresu wartości rzeczywistych:

#### 1. Przyspieszenie (Gas/Hamowanie)

- **Zakres:** 0 do 1
- **Wartość 0:** Hamowanie/brak przyspieszenia
- **Wartość 1:** Pełne przyspieszenie
- **Wartości pośrednie:** Stopniowe przyspieszanie

#### 2. Skręt (Steering)

- **Zakres:** -1 do 1
- **Wartość -1:** Maksymalny skręt w lewo
- **Wartość 1:** Maksymalny skręt w prawo
- **Wartość 0:** Jazda prosto
- **Wartości pośrednie:** Stopniowy skręt (np. -0.5, 0.5)

### Parametry Dodatkowe

- **Hamulec ręczny:** Dodatkowy parametr sterowania
- **Punkty akcji:** Funkcje aktywujące specjalne działania pojazdu (restart itp.)

---

## Rotacja i Obrót

### Angular Damping (Tłumienie Kątowe)

**Angular Damping** to parametr fizyki kontrolujący szybkość zanikania rotacji obiektu.

**Definicja:** Tłumienie kątowe określa, jak szybko obiekt w rotacji traci swoją energię obrotową i zatrzymuje się.

### Wpływ Parametru

- **Wartość 0.1:** Obiekt obraca się przez długi czas, zanim się zatrzyma
- **Wartość 0.8:** Obiekt szybko traci prędkość obrotową
- **Wartość większa niż 1:** Historycznie możliwa (w starszych wersjach), prowadziła do niestabilności symulacji

**Obserwacja:** Mniejsze tłumienie = dłuższy czas rotacji. Większe tłumienie = szybsza strata energii obrotowej.

---

## Parametry Fizyki Ciała Stałego

### Ograniczenia Ruchu (Constraints)

#### Kule (Spheres)

- **Pozycja:** Zablokowana (nie mogą się poruszać)
- **Rotacja:** Możliwa (mogą się obracać)
- Typowe zastosowanie: Elementy dekoracyjne, punkty zakotwiczenia

#### Kostki (Cubes)

- **Pozycja:** Możliwa (mogą się poruszać w trzech osiach)
- **Rotacja:** Możliwa (mogą się obracać dowolnie)
- Większa swoboda niż kule w kontekście tego projektu

### Środek Masy (Center of Mass)

**Center of Mass** to punkt geometryczny reprezentujący „średnią pozycję" masy obiektu.

**Znaczenie dla fizyki:**

- Wpływa na rozkład sił działających na obiekt
- Zmienia zachowanie obiektu podczas upadku i kolizji
- Obiekt z niskim środkiem masy jest bardziej stabilny
- Obiekt z wysokim środkiem masy łatwiej się przewraca

**Przykład:** Pudełko z niskim środkiem masy jest trudne do przewrócenia (szerokie i ciężkie u podstawy), natomiast wysoki środek masy czyni obiekt niestabilnym.

### Parametry Materiału

#### Friction (Tarcie)

- Kontroluje opór między powierzchniami w kontakcie
- Wyższe tarcie = większy opór ruchu
- Wpływa na przyspieszenie i hamowanie pojazdu

#### Restitution (Współczynnik Restytucji/Odbicia)

- Określa **elastyczność** materiału i jak dobrze odbija się od kolizji
- **Zakres:** 0 do 1 (oraz teoretycznie powyżej w starszych silnikach)
- **Wartość 0:** Całkowicie nieelastyczne (energia całkowicie tracona)
- **Wartość 1:** Całkowicie elastyczne (energia zachowana)

**Interpretacja:** Określa, jak dużą część energii kinetycznej obiekt odzyskuje po zderzeniu.

**Przykład:**

- Metalowa kulka na stół (duża restytucja) - wysoko odbija się
- Metalowa kulka na poduszkę (niska restytucja) - niemal się nie odbija

#### Kombinacja Parametrów Materiału

- Gdy dwa obiekty się zderzają, **oba parametry materiału wpływają** na wynik
- Jeśli jeden materiał ma niskie tarcie, a drugi wysokie, wynik zależy od ich interakcji
- Parametry mogą być ustawiane na poziomie od 0 do maksymalnie 1 dla stabilności

### Ostrzeżenia Dotyczące Parametrów

- **Wartości powyżej 1 dla restitution:** Mogą powodować niestabilność symulacji (energia wzrasta zamiast się zmniejszać)
- **Kumulacyjne efekty:** Jeśli wiele obiektów ma wysoką restytucję, mogą się poruszać coraz szybciej
- **Konsekwencje:** Może doprowadzić do wybuchu symulacji (obiekty latają niekontrolowanie)

---

## Skalowanie Obiektów

### Niejednorodne Skalowanie

- Możliwość skalowania obiektów z **różnymi współczynnikami na każdej osi** (X, Y, Z)
- Powoduje deformacje kształtu
- Może prowadzić do artefaktów w symulacji fizyki
- Wymaga ostrożności przy skalowaniu kolizji i obliczeniach fizycznych

---

## Constraints (Ograniczenia Obiektów)

### Constraint Actor

Constraint Actor to komponent w silniku pozwalający na definiowanie **ograniczeń ruchu** dla obiektów fizycznych.

- Umożliwia połączenie dwóch ciał stałych z określonymi ograniczeniami
- Może blokować określone osie ruchu
- Może limitować rotację
- Zastosowania: zawieszenie pojazdów, połączenia mechaniczne, struktury zbudowane z więcej niż jednym elementem

---

## Podsumowanie

Zajęcia obejmowały zaawansowaną konfigurację symulacji fizyki w kontekście gier i aplikacji interaktywnych. Kluczowe zagadnienia to:

1. **Sensory pojazdu** - baza dla systemów AI
2. **Punkt kontrolne i restart** - mechanika ścieżki wyścigu
3. **Parametry rotacji** - tłumienie kątowe
4. **Własności materiałów** - tarcie i restytucja
5. **Ograniczenia ruchowe** - constraint actors
6. **Stabilność symulacji** - ostrożność przy parametrach granicznych

Wdrażanie tych koncepcji wymaga iteracyjnego testowania i dostrajania parametrów, aby uzyskać fizykę zgodną z oczekiwaniami projektu.