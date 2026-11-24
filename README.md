# AL-JEHAD — mobile app

The phone app for **AL-JEHAD Project Control**. It opens https://aljehad-projects.netlify.app full screen,
so every website update reaches the app straight away.

- **Android:** every push builds an APK (Actions → Android app → latest run → *Artifacts*). Send the APK to staff to install.
- **iPhone / iPad:** Actions → *iPhone app (TestFlight)* → Run workflow (needs the Apple secrets listed in `ios.yml`).
- **Icon / splash:** replace the images in `assets/` and push.
