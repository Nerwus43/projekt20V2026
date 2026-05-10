# Podział obowiązków: Team Tasking

Projekt ma być prostą aplikacją do pracy zespołowej: zadania, osoby, statusy i wspólny podgląd postępu.


## Remek: moduł zadań

Zakres:
- pliki w `src/app/tasks/`
- wygląd i zachowanie tablicy zadań
- filtrowanie po statusie
- karta zadania: tytuł, opis, priorytet, status
- opcjonalnie formularz dodawania zadania

Nie edytuje:
- `src/app/team/`
- `src/app/app.ts`
- `src/app/app.html`
- `src/app/core/` 

## Piotrek: moduł zespołu

Zakres:
- pliki w `src/app/team/`
- lista członków zespołu
- role, dostępność, przypisanie osób
- widok szczegółów członka zespołu

Nie edytuje:
- `src/app/tasks/`
- `src/app/app.ts`
- `src/app/app.html`
- `src/app/core/` 

## Michał: integracja

Zakres:
- `src/app/app.ts`
- `src/app/app.html`
- `src/app/app.css`
- `src/app/integration/`
- `src/app/core/`
- routing, wspólny wygląd, finalne uruchomienie

Odpowiedzialność:
- utrzymać wspólny model `TeamTask` i `TeamMember`
- spiąć komponenty Remka i Piotrka
- rozwiązać konflikty w danych i stylach
- sprawdzić `npm.cmd start` oraz widok w przeglądarce

## Kolejność pracy

1. Michał ustala model danych w `src/app/core/`.
2. Remek rozwija `src/app/tasks/`.
3. Piotrek rozwija `src/app/team/`.
4. Michał łączy widoki i robi test końcowy.
