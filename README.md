# Próbavizsga Frontend feladat 1

## Restaurants

- A feladat nem használ valós adatbázist a backend-en. A frontend feladat szempontjából ez nem lényeges.

0. Indítsa el a feladathoz tartozó backend szolgáltatást a\
    'node server.js'\
   paranccsal.

1. Készíts frontend alkalmazást ami HTTP kéréseket küld az alábbi REST endpoint-okra:

| /restaurants | GET  | Minden étterem lekérdezése               |
| ------------ | ---- | ---------------------------------------- |
| /restaurants | POST | Egy új étterem feltöltése az adatbázisba |

A POST kérés esetében a body részben át kell adni egy objektumot, a lekérdezés során kapott objektum tömbhöz hasonlóan.

2. Az alkalmazásnak egy React.js alkalmazásnak kell lennie a tanult frontend megoldással (Vite). A forráskód file-jainak .ts és .tsx kiterjesztésben kell lenniük.
   Csak az előre megírt server.js file lehet .js kiterjesztésben. Az alkalmazásban előre megírt CSS osztályok vannak, amiket szabadon lehet hasznáni.

   - Saját CSS-re ebben a feldatban nem jár több pont!!!!

3. Az alkalmazásnak rendelkezni kell az alábbi útvonalakkal:

|              |                                                               |
| ------------ | ------------------------------------------------------------- |
| /            | Az alkalmazás belépőpontja, Homepage                          |
| /restaurants | Az alkalmazás azon része, ahol az éttermek fel vannak sorolva |

A Homepage és a Restaurants között egy-egy gombbal lehet közlekedni.

4. Készíts interface-t az éttermekhez a GET kérésre kapott válasz alapján.

5. Készíts Context-et ami tárolja az éttermeket és tartalmaz egy függvényt ami új éttermet ad a backend-hez. Betöltéskor és feltöltéskor frissítse az éttermeket.

6. Az éttermek fülön legyen egy '+' gomb. A gombra rákattintva jelenjen meg egy Modal vagy új oldal amiben egy form/űrlap foglal helyet. A bevitt adatok feleljenek meg a GET kérés során kapott adatok.

7. Készítsd el a Homepage, NewRestaurant, Restaurants, RestaurantComp komponenseket. A komponensek adatai Az éttermeknek jelenjen meg minden adata kivéve az id.

8. A feladat megoldása feleljen meg a modern REACT+TS követelményeknek. Szabadon használható minden npm library. A feladat tartalmazzon:

Mock adat bevitelhez:
|||
|---|---|
|name|Mediterranean Magic|
|description|A delightful mix of Mediterranean flavors and spices.|
|address|1011 Med St, Boston, MA|
|rating|4.6|
|phone|(333) 444-5555|
|email|medmagic@email.com|
|img|https://cdn.vox-cdn.com/uploads/chorus_image/image/62582192/IMG_2025.280.jpg|
|url|https://medmagic.coms|

PONTOZÁS:

| név                                                  | pontszám |
| ---------------------------------------------------- | -------- |
| A file-ok jól elkülöníthető mappaszerkezetben vannak | 1 pont   |
| interface+type                                       | 1 pont   |
| Helyesen megírt és használt Context                  | 2 pont   |
| Helyesen megírt és használt Context.Provider         | 2 pont   |
| Helyesen megírt Provider függvények                  | 2 pont   |
| Helyesen megírt és hasznlt routing funckionalitás    | 1 pont   |
| Helyesen megírt Home és Restaurants komponens        | 2 pont   |
| Helyesen megírt RestaurantComp komponens             | 2 pont   |
| Helyesen megírt NewRestaurant komponens              | 2 pont   |
