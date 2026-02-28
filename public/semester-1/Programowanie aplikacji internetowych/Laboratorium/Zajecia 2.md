# Dokumentacja z laboratorium – Projekt gry 2D (mechanika zbierania przedmiotów i system przetrwania)

## 1. Informacje ogólne

Zajęcia laboratoryjne koncentrowały się na implementacji mechanik gry 2D w środowisku silnika gier. Głównym celem było rozwinięcie projektu zaliczeniowego poprzez:

- implementację systemu zbierania przedmiotów (collecting),
    
- obsługę znikania obiektów po kolizji,
    
- budowę prostej gry typu survival/shooter,
    
- projekt systemu punktacji i rozwoju postaci,
    
- konsultację koncepcji projektu zaliczeniowego.
    

Transkrypcja zawierała fragmenty niezwiązane bezpośrednio z tematyką zajęć (rozmowy prywatne, dygresje, komentarze niezwiązane z projektem), które zostały pominięte w niniejszym opracowaniu.

---

## 2. System zbierania przedmiotów (Collecting System)

### 2.1. Założenia funkcjonalne

Podstawowym wymaganiem było rozmieszczenie przedmiotów w przestrzeni gry oraz umożliwienie graczowi ich zbierania. Oczekiwane działanie:

1. Przedmiot jest umieszczony w świecie gry.
    
2. Gracz wchodzi z nim w interakcję (najczęściej poprzez kolizję).
    
3. Po wykryciu kolizji:
    
    - przedmiot znika,
        
    - aktualizowany jest stan gry (np. licznik punktów, pasek postępu).
        

### 2.2. Implementacja techniczna (model ogólny)

W silnikach takich jak Unity mechanizm ten zwykle realizuje się poprzez:

- **Collider 2D / 3D** – komponent odpowiedzialny za wykrywanie kolizji,
    
- **IsTrigger** – tryb wyzwalacza (bez fizycznego odbicia),
    
- metodę `OnTriggerEnter()` lub `OnCollisionEnter()` w skrypcie.
    

Przykładowy schemat logiczny działania:

1. Obiekt przedmiotu posiada:
    
    - Collider z ustawionym `isTrigger = true`,
        
    - tag (np. `Player`),
        
    - skrypt obsługujący zdarzenie kolizji.
        
2. W momencie kolizji:
    
    - sprawdzany jest typ obiektu,
        
    - zwiększana jest wartość punktów,
        
    - wywoływana jest metoda niszcząca obiekt (`Destroy(gameObject)`).
        

### 2.3. Najczęstsze problemy

Z kontekstu wynikały trudności związane z:

- niepoprawnym wykrywaniem kolizji,
    
- brakiem znikania obiektu,
    
- błędną konfiguracją komponentów (np. brak Rigidbody).
    

Typowe przyczyny błędów:

- brak Rigidbody w jednym z obiektów,
    
- niezgodność warstw (Layer Collision Matrix),
    
- niepoprawnie ustawiony tag,
    
- błędna referencja do systemu punktacji.
    

---

## 3. Projekt gry zaliczeniowej – Gra typu Survival Shooter

### 3.1. Koncepcja

Student zaprezentował projekt gry, którego główne założenia są następujące:

- Gracz steruje postacią (aktualnie reprezentowaną uproszczonym obiektem).
    
- Postać automatycznie strzela do przeciwników.
    
- Fale przeciwników (chmary) atakują gracza.
    
- Po zniszczeniu przeciwników przyznawane są punkty.
    
- Celem jest przetrwanie określonego czasu.
    

Model ten jest zbliżony do gatunku:

- auto-shooter,
    
- survival arena,
    
- twin-stick shooter (w uproszczonej wersji).
    

### 3.2. Mechanika strzelania

Zgodnie z opisem:

- Strzelanie odbywa się automatycznie.
    
- Możliwe przyszłe rozszerzenia:
    
    - zwiększenie liczby pocisków,
        
    - zwiększenie szybkostrzelności,
        
    - modyfikacja trajektorii.
        

Technicznie implementacja może obejmować:

- prefab pocisku,
    
- instancjonowanie w określonych interwałach czasu (`InvokeRepeating` / `Coroutine`),
    
- wykrywanie trafień przez kolizję lub raycast,
    
- usuwanie pocisków po czasie życia.
    

---

## 4. System punktacji i interfejs użytkownika (UI)

### 4.1. System punktów

Punkty przyznawane są za eliminację przeciwników. Widoczne są na pasku postępu (prawdopodobnie UI typu:

- Slider,
    
- Text / TextMeshPro,
    
- pasek doświadczenia).
    

### 4.2. System nagród i ulepszeń

Planowany system rozwoju obejmuje:

- większą liczbę strzałów,
    
- szybsze strzały,
    
- zwiększenie ilości życia,
    
- inne modyfikatory rozgrywki.
    

Model rozwoju może być zaimplementowany jako:

- system poziomów (XP → Level Up),
    
- drzewko umiejętności,
    
- wybór jednego z kilku losowych ulepszeń (model znany z gier survivalowych).
    

Struktura logiczna:

```text
Zniszczenie przeciwnika → Dodanie XP → Sprawdzenie progu → Awans poziomu → Wybór ulepszenia
```

---

## 5. Projektowanie mechaniki przetrwania

### 5.1. Warunek zwycięstwa

Gra trwa do momentu:

- upływu określonego czasu (timer),
    
- lub utraty wszystkich punktów życia.
    

### 5.2. Skalowanie trudności

Aby projekt był bardziej kompletny, zaleca się:

- zwiększanie liczby przeciwników wraz z czasem,
    
- zwiększanie ich prędkości,
    
- wprowadzanie różnych typów wrogów (np. szybcy, wolni, tank).
    

Możliwe rozszerzenia:

- boss po określonym czasie,
    
- losowe wydarzenia (np. fala specjalna),
    
- modyfikatory mapy.
    

---

## 6. Dobre praktyki projektowe

### 6.1. Architektura kodu

Zalecane podejście:

- oddzielenie logiki gry od UI,
    
- stosowanie wzorca Single Responsibility,
    
- centralny GameManager kontrolujący stan gry,
    
- ScriptableObjects do przechowywania parametrów przeciwników i ulepszeń.
    

### 6.2. Optymalizacja

W grach typu survival kluczowe jest:

- stosowanie Object Poolingu (zamiast ciągłego tworzenia i niszczenia obiektów),
    
- ograniczenie kosztownych operacji w metodzie `Update()`,
    
- kontrola liczby aktywnych obiektów.
    

---

## 7. Ocena koncepcji projektu

Zgodnie z konsultacją prowadzący zaakceptował koncepcję gry jako wystarczającą na zaliczenie, pod warunkiem:

- poprawnej implementacji mechanik,
    
- czytelnego systemu punktacji,
    
- działającego systemu ulepszeń,
    
- stabilności działania.
    

Projekt spełnia podstawowe kryteria:

- zawiera interakcję gracz–przeciwnik,
    
- posiada system nagród,
    
- ma określony cel (przetrwanie),
    
- umożliwia dalszą rozbudowę.
    

---

## 8. Możliwe kierunki rozwoju projektu

Aby zwiększyć wartość projektu:

1. Dodać ekran startowy i końcowy.
    
2. Wprowadzić zapisywanie najlepszego wyniku.
    
3. Dodać efekty wizualne (particle system).
    
4. Wprowadzić dźwięki (AudioSource).
    
5. Rozbudować AI przeciwników (np. pathfinding).
    

---

## 9. Podsumowanie

Laboratorium koncentrowało się na:

- implementacji systemu zbierania obiektów,
    
- obsłudze kolizji i usuwania elementów ze sceny,
    
- projektowaniu gry typu survival shooter,
    
- budowie systemu punktacji i ulepszeń,
    
- konsultacji projektu zaliczeniowego.