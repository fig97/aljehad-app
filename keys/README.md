`debug.keystore` is Android's standard test signing key (password `android`). It is kept here only so every
build is signed the same way and staff can update the app without uninstalling. It protects nothing secret.
Before any public release, switch to a private release key stored in GitHub Actions secrets.
