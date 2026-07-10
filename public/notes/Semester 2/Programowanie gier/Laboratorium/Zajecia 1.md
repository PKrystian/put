# Notatki z laboratorium – Unreal Engine 5 (Enhanced Input)

## Cel zajęć
Celem było przygotowanie podstawowej postaci sterowanej przez gracza w Unreal Engine 5 z wykorzystaniem systemu **Enhanced Input** oraz Blueprintów.

## 1. Utworzenie projektu
- Utworzenie nowej mapy.
- Skonfigurowanie projektu.
- Ustawienie własnego **GameMode**.

## 2. GameMode i World Settings
- Otworzyć **World Settings**.
- W **GameMode Override** wybrać własny GameMode.
- Dzięki temu gra korzysta z przygotowanego Player Character.

## 3. Enhanced Input
Nowy system wejścia zastępuje stary Input (Action/Axis), który jest oznaczony jako **Deprecated**.

### Struktura
```
Content/
 ├── Input/
 │    ├── Input Mapping Context
 │    └── Input Actions
```

## 4. Input Actions
Utworzono:
- IA_MoveForward (Axis1D)
- IA_MoveRight (Axis1D)
- IA_Move (Axis2D)
- IA_Look (Axis2D)

## 5. Mapping Context
Przypisanie klawiszy:
| Akcja | Klawisze |
|-------|----------|
| Move Forward | W / S |
| Move Right | A / D |
| Look | Mouse X/Y |

Dla S oraz A zastosowano **Negate Modifier**.

Przy wejściu 2D wykorzystano **Swizzle Input Axis** do rozdzielenia osi X i Y.

## 6. Dodanie Mapping Context
W BeginPlay:
- Get Controller
- Cast to Player Controller
- Get Enhanced Input Local Player Subsystem
- Is Valid
- Add Mapping Context

Dzięki temu Input Actions zaczynają działać.

## 7. Obsługa ruchu
Blueprint:
- Event IA_Move
- Split Struct Pin
- Add Movement Input

Do kierunku ruchu wykorzystano:
- Get Control Rotation
- Forward Vector
- Right Vector

Ruch zależy od aktualnego obrotu kamery.

## 8. Sterowanie kamerą
Dodano:
- Spring Arm
- Camera

Następnie:
- IA_Look
- Add Controller Yaw Input
- Add Controller Pitch Input

Na kamerze zaznaczono:
**Use Pawn Control Rotation**

## 9. Wygląd postaci
Dodano proste komponenty:
- Cone
- Cube

Służyły jedynie jako tymczasowa reprezentacja postaci.

## 10. Typowe błędy
- Nie dodano Mapping Context.
- Zły GameMode.
- Nie ustawiono World Settings.
- Brak Add Mapping Context.
- Nie zapisano Blueprintów.
- Nie użyto Negate dla klawiszy cofania.
- Nie ustawiono Use Pawn Control Rotation.

## Najważniejsze pojęcia
- GameMode
- Character
- Player Controller
- World Settings
- Enhanced Input
- Mapping Context
- Input Action
- Blueprint
- BeginPlay
- Add Movement Input
- Spring Arm
- Camera

## Podsumowanie
Podczas zajęć przygotowano podstawową postać sterowaną przez gracza z użyciem nowego systemu Enhanced Input w Unreal Engine 5. Skonfigurowano GameMode, Input Mapping Context, akcje wejścia, ruch postaci oraz sterowanie kamerą. Omówiono również najczęstsze błędy konfiguracji oraz dobre praktyki pracy z Blueprintami.
