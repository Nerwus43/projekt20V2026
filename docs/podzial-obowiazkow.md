# Podzial obowiazkow: Team Tasking

Projekt jest aplikacja do pracy zespolowej: strona glowna pokazuje informacje, a osobne podstrony sluza do zarzadzania zespolem i zadaniami.

## Co jest juz wykonane

- [x] Strona glowna z podgladem tablicy zadan i czlonkow zespolu.
- [x] Routing i nawigacja: strona glowna, zarzadzanie zespolem, zarzadzanie zadaniami.
- [x] Wspolny model danych `TeamTask` i `TeamMember`.
- [x] Wspolny serwis danych `TaskStoreService`.
- [x] Dynamiczny licznik osob w prawym gornym rogu.
- [x] Poprawiona responsywnosc i wieksze fonty.

## Remek: tablica zadan i zarzadzanie zadaniami

Zakres:
- tablica zadan na stronie glownej,
- filtrowanie zadan,
- wyglad kart zadan,
- podstrona zarzadzania zadaniami,
- dodawanie, edycja i usuwanie zadan.

Pliki Remka:
- `src/app/tasks/task-board.component.ts`
- `src/app/tasks/task-board.component.html`
- `src/app/tasks/task-board.component.css`
- `src/app/pages/task-management-page.component.ts`
- `src/app/pages/task-management-page.component.html`
- `src/app/pages/management-page.component.css` tylko sekcje dotyczace zadan i wspolnego wygladu formularzy/list

Nie edytuje bez ustalenia:
- `src/app/team/`
- `src/app/app.ts`
- `src/app/app.html`
- `src/app/app.routes.ts`
- `src/app/core/`

## Piotrek: czlonkowie i zarzadzanie zespolem

Zakres:
- panel czlonkow zespolu na stronie glownej,
- wyglad kart czlonkow zespolu,
- pokazanie roli, zakresu pracy, dostepnosci i aktywnych zadan,
- podstrona zarzadzania zespolem,
- dodawanie, edycja i usuwanie osob.

Pliki Piotrka:
- `src/app/team/team-panel.component.ts`
- `src/app/team/team-panel.component.html`
- `src/app/team/team-panel.component.css`
- `src/app/pages/team-management-page.component.ts`
- `src/app/pages/team-management-page.component.html`
- `src/app/pages/management-page.component.css` tylko sekcje dotyczace zespolu i wspolnego wygladu formularzy/list

Nie edytuje bez ustalenia:
- `src/app/tasks/`
- `src/app/app.ts`
- `src/app/app.html`
- `src/app/app.routes.ts`
- `src/app/core/`

## Michal: integracja

Zakres:
- `src/app/app.ts`
- `src/app/app.html`
- `src/app/app.css`
- `src/app/app.routes.ts`
- `src/app/core/task.model.ts`
- `src/app/core/task-store.service.ts`
- `src/app/pages/home-page.component.ts`
- `src/app/integration/`

Odpowiedzialnosc:
- utrzymac wspolny model danych,
- laczyc prace Remka i Piotrka,
- pilnowac routingu i glownego ukladu aplikacji,
- sprawdzac kompilacje,
- rozstrzygac konflikty miedzy modulami.

## Kolejnosc dalszej pracy

1. Remek rozwija tablice zadan i podstrone `/zadania`.
2. Piotrek rozwija panel czlonkow i podstrone `/zespol`.
3. Michal laczy zmiany, pilnuje wspolnego modelu i robi test koncowy.
