// Adds what the app needs after `cap add`: camera access (QR scanning) and the display names.
import fs from "fs";
const which = process.argv[2];
const edit = (p, fn) => { const s = fs.readFileSync(p, "utf8"), o = fn(s); if (o !== s) fs.writeFileSync(p, o); console.log("patched", p); };
if (which === "android") {
  edit("android/app/src/main/AndroidManifest.xml", (s) => s.includes("android.permission.CAMERA") ? s
    : s.replace("<uses-permission android:name=\"android.permission.INTERNET\" />",
      "<uses-permission android:name=\"android.permission.INTERNET\" />\n    <uses-permission android:name=\"android.permission.CAMERA\" />\n    <uses-feature android:name=\"android.hardware.camera\" android:required=\"false\" />"));
}
if (which === "ios") {
  edit("ios/App/App/Info.plist", (s) => {
    const add = (k, v) => { if (!s.includes("<key>" + k + "</key>")) s = s.replace("<dict>", "<dict>\n\t<key>" + k + "</key>\n\t<string>" + v + "</string>"); };
    add("NSCameraUsageDescription", "The camera is used to scan the QR stickers on stock.");
    add("NSPhotoLibraryUsageDescription", "Photos are used to read a QR sticker from a picture.");
    s = s.replace(/<key>CFBundleDisplayName<\/key>\s*<string>[^<]*<\/string>/, "<key>CFBundleDisplayName</key>\n\t<string>AL-JEHAD</string>");
    return s;
  });
}
