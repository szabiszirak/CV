# Szirák Szabolcs – Személyes CV Weboldal

Modern, klasszikus vállalati és akadémiai stílusú önéletrajzi weboldal pénzügyi elemző pozíciókra optimalizálva.

## 🛠 Technológiai Stack

* **Keretrendszer & Build:** [Vite](https://vitejs.dev/) + [TypeScript](https://www.typescriptlang.org/)
* **Stílus & Dizájn:** [Tailwind CSS](https://tailwindcss.com/) (Klasszikus Corporate paletta, mélykék tónusok)
* **Kliensoldali Interakciók:** Vanilla TypeScript (Vágólapra másolás lebegő toast üzenettel, scroll spy, reszponzív menü)
* **Tárhely & Publikálás:** [Firebase Hosting](https://firebase.google.com/docs/hosting)

---

## 🚀 Helyi Fejlesztés és Megtekintés

1. Nyiss meg egy terminált a `cv` mappában:
   ```bash
   cd cv
   ```

2. Telepítsd a függőségeket (ha még nincsenek telepítve):
   ```bash
   npm install
   ```

3. Indítsd el a helyi fejlesztői szervert:
   ```bash
   npm run dev
   ```
   A terminálban megjelenő címen (általában `http://localhost:5173`) a weboldal azonnal megtekinthető élő újratöltéssel (HMR).

4. Statikus éles verzió lefordítása:
   ```bash
   npm run build
   ```
   Ez létrehozza a minifikált, optimalizált fájlokat a `dist/` mappában.

---

## 🌐 Publikálás Firebase Hostingra (Ingyenes)

A projekt előre konfigurált `firebase.json` és `.firebaserc` fájlokkal rendelkezik.

### Első közzététel lépései:

1. **Firebase CLI telepítése** (ha még nincs telepítve a gépeden):
   ```bash
   npm install -g firebase-tools
   ```

2. **Bejelentkezés a Google / Firebase fiókodba:**
   ```bash
   firebase login
   ```

3. **Projekt társítása (vagy új létrehozása):**
   * Látogass el a [Firebase Console](https://console.firebase.google.com/) oldalra, és hozz létre egy új projektet (pl. `szirak-szabolcs-cv`).
   * A helyi gépen futtasd:
     ```bash
     firebase use --add
     ```
     és válaszd ki a konzolon létrehozott projektedet.

4. **Éles publikálás (Deploy):**
   ```bash
   npm run build
   firebase deploy --only hosting
   ```
   A parancs lefutása után megkapod a publikus, biztonságos HTTPS webcímet (pl. `https://szirak-szabolcs-cv.web.app`), amelyhez később akár saját egyéni domain nevet is kapcsolhatsz a Firebase felületén.

---

## 📂 Mappa és Fájlszerkezet

* `index.html` – Szemantikus, akadálymentes fő HTML dokumentum
* `src/main.ts` – TypeScript logika (másolás toast értesítéssel, aktív menüpont figyelése)
* `src/style.css` – Tailwind direktívák és finomhangolt corporate komponensek
* `public/profile.jpg` – Hivatalos profilfotó
* `public/szirak_szabolcs_cv_hu.pdf` – Letölthető magyar nyelvű CV
* `public/szirak_szabolcs_cv_en.pdf` – Letölthető angol nyelvű CV
* `firebase.json` – Firebase Hosting beállítások (`public: "dist"`, gyorsítótárazási fejlécek)
