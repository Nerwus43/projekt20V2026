# Remek: tablica zadan i zarzadzanie zadaniami

## Co jest juz wykonane

- [x] Tablica zadan jest widoczna na stronie glownej.
- [x] Zadania sa podzielone wedlug statusow.
- [x] Karty zadan pokazuja tytul, opis, priorytet, status i osobe.
- [x] Jest filtrowanie po priorytecie.
- [x] Jest osobna podstrona zarzadzania zadaniami: `/zadania`.
- [x] Na podstronie `/zadania` mozna dodac zadanie.
- [x] Na podstronie `/zadania` mozna edytowac zadanie.
- [x] Na podstronie `/zadania` mozna usunac zadanie.

## Twoje glowne pliki

Tablica zadan na stronie glownej:
- `src/app/tasks/task-board.component.ts`
- `src/app/tasks/task-board.component.html`
- `src/app/tasks/task-board.component.css`

Zarzadzanie zadaniami:
- `src/app/pages/task-management-page.component.ts`
- `src/app/pages/task-management-page.component.html`

Wspolne style formularzy i list:
- `src/app/pages/management-page.component.css`

## Zadania do wykonania

- [ ] Poprawic wyglad kart zadan, jesli cos jest malo czytelne.
- [ ] Dodac lepsze oznaczenia statusow, np. kolor dla `Do zrobienia`, `W trakcie`, `Do sprawdzenia`, `Gotowe`.
- [ ] Dodac sortowanie zadan, np. po priorytecie albo statusie.
- [ ] Dodac walidacje formularza zadania, zeby nie da sie zapisac pustych danych.
- [ ] Upewnic sie, ze zmiana zadania od razu widac na stronie glownej.

## Czego nie ruszac bez Michala

- `src/app/core/task.model.ts`
- `src/app/core/task-store.service.ts`
- `src/app/app.ts`
- `src/app/app.html`
- `src/app/app.routes.ts`
- `src/app/team/`
