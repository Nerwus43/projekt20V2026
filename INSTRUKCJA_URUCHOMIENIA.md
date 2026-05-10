# Instrukcja instalacji i uruchomienia projektu

Ta instrukcja jest dla Windows i zwyklego CMD, czyli programu **Wiersz polecenia**.

Instrukcja dziala na kazdym komputerze. Nie musisz miec projektu w konkretnej sciezce.

## 1. Przygotuj folder projektu

Projekt moze znajdowac sie w dowolnym miejscu, na przyklad:

```cmd
C:\Users\TwojaNazwa\Documents\projekt20V2026
```

albo:

```cmd
C:\projekty\projekt20V2026
```

Wazne jest tylko to, zebys wszedl do glownego folderu projektu.

W glownym folderze projektu musza byc widoczne m.in. te pliki:

```cmd
package.json
package-lock.json
angular.json
src
```

Jesli po otwarciu folderu nie widzisz `package.json`, to znaczy, ze jestes w zlym folderze.

## 2. Otworz CMD

1. Kliknij Start.
2. Wpisz:

```cmd
cmd
```

3. Otworz **Wiersz polecenia**.

## 3. Wejdz do folderu projektu

Musisz wpisac `cd /d`, a potem sciezke do swojego folderu projektu.

Przyklad:

```cmd
cd /d C:\projekty\projekt20V2026
```

Inny przyklad:

```cmd
cd /d C:\Users\Jan\Desktop\projekt20V2026
```

Jesli nie znasz sciezki:

1. Otworz folder projektu w Eksploratorze plikow.
2. Kliknij pasek adresu u gory okna.
3. Skopiuj cala sciezke.
4. W CMD wpisz `cd /d ` i wklej sciezke.

Przyklad:

```cmd
cd /d WKLEJ_TUTAJ_SCIEZKE_DO_FOLDERU
```

## 4. Sprawdz, czy jestes w dobrym folderze

Wpisz:

```cmd
dir
```

Na liscie powinien byc plik:

```cmd
package.json
```

Jesli go nie ma, nie jestes w glownym folderze projektu.

## 5. Sprawdz Node.js

Wpisz:

```cmd
node -v
```

Projekt wymaga Node.js w wersji co najmniej:

```cmd
v22.12.0
```

Dobra bedzie tez wersja:

```cmd
v24.x.x
```

Jesli zobaczysz blad albo wersje starsza niz `v22.12.0`, zainstaluj Node.js.

## 6. Zainstaluj Node.js

Wejdz na strone:

```cmd
https://nodejs.org/
```

Pobierz wersje **LTS** i zainstaluj.

Po instalacji:

1. Zamknij CMD.
2. Otworz CMD jeszcze raz.
3. Wejdz ponownie do folderu projektu.
4. Sprawdz wersje:

```cmd
node -v
```

## 7. Zainstaluj paczki projektu

Bedac w glownym folderze projektu, wpisz:

```cmd
npm.cmd install
```

Poczekaj, az instalacja sie skonczy.

Po instalacji powinien pojawic sie folder:

```cmd
node_modules
```

Tego folderu nie tworz recznie.

## 8. Uruchom projekt

Bedac dalej w glownym folderze projektu, wpisz:

```cmd
npm.cmd start
```

Jesli wszystko dziala, zobaczysz komunikat podobny do:

```cmd
Local: http://localhost:4200/
```

## 9. Otworz projekt w przegladarce

Wejdz na adres:

```cmd
http://localhost:4200/
```

Mozesz go wkleic do Chrome, Edge albo innej przegladarki.

## 10. Jak zatrzymac projekt

W CMD, w ktorym dziala projekt, nacisnij:

```cmd
Ctrl + C
```

Jesli zapyta, czy przerwac, wpisz:

```cmd
Y
```

i zatwierdz Enterem.

Na polskim Windowsie moze zapytac po polsku. Wtedy wpisz:

```cmd
T
```

i zatwierdz Enterem.

## 11. Najczestsze problemy

### Problem: `node` nie jest rozpoznawany

Node.js nie jest zainstalowany albo CMD zostal otwarty przed instalacja.

Zainstaluj Node.js LTS z:

```cmd
https://nodejs.org/
```

Potem zamknij CMD i otworz nowe.

### Problem: `node -v` pokazuje za stara wersje

Zainstaluj najnowsza wersje LTS z:

```cmd
https://nodejs.org/
```

Potem zamknij CMD i otworz nowe.

### Problem: `package.json` nie jest widoczny po komendzie `dir`

Jestes w zlym folderze.

Musisz wejsc do glownego folderu projektu, czyli tego, w ktorym sa:

```cmd
package.json
angular.json
src
```

### Problem: strona sie nie otwiera

Sprawdz, czy projekt nadal dziala w CMD.

Jesli CMD jest zamkniete, projekt tez jest zatrzymany.

Uruchom ponownie:

```cmd
cd /d SCIEZKA_DO_TWOJEGO_FOLDERU_PROJEKTU
npm.cmd start
```

### Problem: port 4200 jest zajety

Zatrzymaj poprzednio uruchomiony projekt przez:

```cmd
Ctrl + C
```

Jesli nie wiesz, gdzie dziala poprzedni projekt, zamknij wszystkie okna CMD i sprobuj jeszcze raz:

```cmd
npm.cmd start
```

## 12. Pelna sekwencja komend

Za `SCIEZKA_DO_TWOJEGO_FOLDERU_PROJEKTU` podstaw prawdziwa sciezke do folderu projektu.

```cmd
cd /d SCIEZKA_DO_TWOJEGO_FOLDERU_PROJEKTU
npm.cmd install
npm.cmd start
```

Potem wejdz w przegladarce na:

```cmd
http://localhost:4200/
```
