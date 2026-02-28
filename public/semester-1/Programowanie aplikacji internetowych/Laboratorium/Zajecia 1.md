# Notatki z laboratorium: Tworzenie gier w PlayCanvas

## Wprowadzenie do zajęć

Podczas laboratorium prowadzący omówił podstawy tworzenia gier w środowisku **PlayCanvas** – internetowej platformie do tworzenia gier 3D, działającej bez potrzeby instalacji lokalnej. PlayCanvas umożliwia tworzenie, edycję i uruchamianie projektów bezpośrednio w przeglądarce, dzięki czemu idealnie nadaje się do nauki podstaw silników gier i projektowania interaktywnych aplikacji.

Zaliczenie przedmiotu odbywa się na podstawie:
- obecności na zajęciach,  
- wykonania projektu końcowego w PlayCanvas, lub wlasnego projketu gry przegladarkowej w JS, w obydwu przypadakach, pomysl gry trzeba potwierdzic z prowadzacym

Każdy student może pracować na własnym sprzęcie, logując się do systemu przy użyciu konta studenckiego.

---

## Porównanie PlayCanvas z Unity

Prowadzący zwrócił uwagę, że **PlayCanvas** ma wiele wspólnego z **Unity**, jednak jest prostszy w obsłudze i w pełni przeglądarkowy.  
Różnice:
- **Unity** oferuje większe możliwości, lecz wymaga lokalnej instalacji oraz nauki bardziej złożonych narzędzi.
- **PlayCanvas** jest mniej rozbudowany, ale pozwala szybko tworzyć gry 3D bez potrzeby konfigurowania środowiska.

---

## Struktura projektu w PlayCanvas

Po zalogowaniu do PlayCanvas użytkownik ma dostęp do:
1. **Projektów (Projects)** – lista wszystkich gier i aplikacji.
2. **Kalendarza aktywności** – historia edycji.
3. **Edytora (Editor)** – środowiska pracy, w którym projektuje się i testuje grę.

W edytorze można uruchomić grę bezpośrednio w przeglądarce oraz publikować ją jako stronę internetową.

---

## Interfejs edytora

### Główne elementy:
- **Hierarchy (hierarchia)** – lista obiektów w scenie.
- **Inspector (inspektor)** – panel z właściwościami wybranego obiektu.
- **Viewport (widok sceny)** – przestrzeń robocza, w której umieszczamy obiekty.
- **Assets (zasoby)** – pliki używane w projekcie (modele, tekstury, dźwięki, skrypty).

### Podstawowe funkcje:
- Przesuwanie i obracanie obiektów.
- Zmiana skali i pozycji.
- Grupowanie obiektów (np. przesuwanie całego pomieszczenia wraz z meblami).
- Menu kontekstowe dostępne pod prawym przyciskiem myszy umożliwia szybkie wykonywanie akcji (dodanie obiektu, skryptu, materiału itp.).

---

## Właściwości obiektów

Każdy obiekt w PlayCanvas ma swoje **właściwości (properties)**:
- **Transformacje** – pozycja, rotacja, skala.
- **Kolizje (colliders)** – definiują kształt fizyczny obiektu, np. pudełko, kula, stożek lub forma niestandardowa.
- **Fizyka (rigidbody)** – pozwala nadać obiektom zachowania fizyczne (grawitacja, zderzenia, siły).
- **Oświetlenie (lights)** – bez źródeł światła scena jest niewidoczna dla kamery.

Rodzaje świateł:
- **Directional Light** – symuluje światło słoneczne.
- **Point Light** – świeci w każdą stronę z jednego punktu.
- **Spot Light** – emituje światło w określonym stożku.

---

## Komponenty i modularność

PlayCanvas opiera się na systemie **komponentów**, które można dodawać do obiektów.  
Najczęściej wykorzystywane komponenty:
- **Model** – reprezentuje siatkę 3D obiektu.
- **Animation** – definiuje ruchy obiektu.
- **Script** – umożliwia dodawanie logiki programistycznej.
- **Camera** – określa punkt widzenia gracza.
- **Sound** – pozwala dodać dźwięk przestrzenny.

Każdy komponent można edytować niezależnie, co ułatwia modularne tworzenie scen i interakcji.

---

## Skrypty i logika gry

Najważniejszym elementem w PlayCanvas są **skrypty JavaScript**, które odpowiadają za interaktywność.

### Cechy:
- Skrypty przypisuje się do obiektów jako komponenty.
- Każdy skrypt jest klasą, która może zawierać metody cyklu życia, np.:
  - `initialize()` – wykonywana przy uruchomieniu sceny,
  - `update(dt)` – wywoływana co klatkę,
  - `onTriggerEnter()` – reakcja na kolizję.

### Atrybuty skryptów
Skrypty mogą posiadać **atrybuty widoczne w edytorze**, dzięki czemu nie trzeba edytować kodu, by zmienić ich wartości.  
Przykład:
```javascript
var Teleporter = pc.createScript('teleporter');

Teleporter.attributes.add('target', { type: 'entity', title: 'Cel Teleportu' });

Teleporter.prototype.onTriggerEnter = function (otherEntity) {
    this.entity.enabled = false;
    this.target.enabled = true;
};
````

---

## Projekt: Teleporter

Pierwszym zadaniem na laboratorium było stworzenie prostego **projektu teleportera**, który pozwala graczowi przenosić się pomiędzy punktami w przestrzeni.

### Założenia projektu:

- Dwa powiązane teleporty.
    
- Po przejściu przez jeden – gracz pojawia się przy drugim.
    
- Dodanie **licznika teleportacji**, który po określonej liczbie przeniesień odblokowuje nową scenę.
    

### Rozszerzenie:

W dalszej części zajęć omawiano:

- przechowywanie liczby teleportacji w zmiennej globalnej,
    
- wyświetlanie tej liczby na ekranie (UI Text),
    
- zmianę sceny po przekroczeniu określonego progu.
    

Przykład fragmentu kodu:

```javascript
var Teleporter = pc.createScript('teleporter');

Teleporter.attributes.add('targetScene', { type: 'string' });
Teleporter.attributes.add('counter', { type: 'number', default: 0 });

Teleporter.prototype.onTriggerEnter = function (entity) {
    this.counter++;
    if (this.counter >= 5) {
        this.app.scenes.loadScene(this.targetScene);
    }
};
```

---

## Fizyka i kolizje

W projektach PlayCanvas można symulować fizykę poprzez dodanie komponentów:

- **Rigidbody** – nadaje obiektowi masę, opór, grawitację,
    
- **Collision** – definiuje kształt kolizyjny.
    

Funkcja `onTriggerEnter()` pozwala wykryć wejście w strefę kolizji, a `onTriggerLeave()` – jej opuszczenie.  
Dzięki temu można implementować teleportery, strefy aktywacji, pułapki czy systemy interakcji.

---

## Kamery i perspektywa

Każda scena wymaga przynajmniej jednej **kamery**.  
Kamery w PlayCanvas przekształcają trójwymiarowy świat w dwuwymiarowy obraz renderowany na ekranie.  
Możliwe jest dodanie wielu kamer (np. do efektu podzielonego ekranu lub widoków pomocniczych).

---

## Dźwięk i audio

Silnik obsługuje **dźwięk przestrzenny (3D sound)**.  
Dźwięk może być:

- przypisany do konkretnego obiektu,
    
- emitowany w określonym kierunku,
    
- wytłumiony wraz ze wzrostem odległości od źródła.
    

---

## Publikacja projektu

Gotową grę można **opublikować online** bezpośrednio z PlayCanvas:

- projekt staje się dostępny pod unikalnym adresem URL,
    
- można go uruchomić w przeglądarce bez instalacji,
    
- jednocześnie aktywny może być tylko jeden projekt publiczny.
    

---

## Podsumowanie

Na zajęciach studenci:

- zapoznali się ze środowiskiem PlayCanvas,
    
- nauczyli się tworzyć proste obiekty i sceny,
    
- dodawali komponenty i skrypty,
    
- poznali podstawy pracy z kolizjami i logiką gry,
    
- stworzyli funkcjonalny system teleportacji między scenami.
    

Dzięki prostocie PlayCanvas oraz wykorzystaniu JavaScriptu uczestnicy mogli w krótkim czasie stworzyć w pełni działający prototyp gry 3D.

---

## Dalsze kroki

Na kolejnych laboratoriach planowane jest:

- rozbudowanie projektu o interfejs użytkownika (UI),
    
- dodanie dźwięków i efektów wizualnych,
    
- optymalizacja wydajności,
    
- finalizacja projektu zaliczeniowego.