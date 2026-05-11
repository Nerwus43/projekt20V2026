# Piotrek: czlonkowie i zarzadzanie zespolem

## Co jest juz wykonane

- [x] Panel czlonkow zespolu jest widoczny na stronie glownej.
- [x] Czlonkowie pokazuja nazwe, role, zakres pracy i odpowiedzialnosc.
- [x] Dostepnosc osoby jest wyliczana na podstawie aktywnych zadan.
- [x] Przy osobie widac aktywne zadania.
- [x] Jest osobna podstrona zarzadzania zespolem: `/zespol`.
- [x] Na podstronie `/zespol` mozna dodac osobe.
- [x] Na podstronie `/zespol` mozna edytowac osobe.
- [x] Na podstronie `/zespol` mozna usunac osobe.

## Twoje glowne pliki

Panel czlonkow na stronie glownej:
- `src/app/team/team-panel.component.ts`
- `src/app/team/team-panel.component.html`
- `src/app/team/team-panel.component.css`

Zarzadzanie zespolem:
- `src/app/pages/team-management-page.component.ts`
- `src/app/pages/team-management-page.component.html`

Wspolne style formularzy i list:
- `src/app/pages/management-page.component.css`

## Zadania do wykonania

- [ ] Poprawic wyglad kart czlonkow, jesli cos jest malo czytelne.
- [ ] Dodac lepsze oznaczenie dostepnosci osoby.
- [ ] Dodac informacje, ile zadan ma dana osoba.
- [ ] Dodac walidacje formularza osoby, zeby nie da sie zapisac pustych danych.
- [ ] Upewnic sie, ze dodana osoba od razu pojawia sie przy przypisywaniu zadan.

## Czego nie ruszac bez Michala

- `src/app/core/task.model.ts`
- `src/app/core/task-store.service.ts`
- `src/app/app.ts`
- `src/app/app.html`
- `src/app/app.routes.ts`
- `src/app/tasks/`
