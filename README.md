# Philips InCenter PDF Buttons Enabler 
## (Tampermonkey Script)
## Version 1.2.0.0

This Tampermonkey userscript enhances the built-in PDF viewer on the Philips InCenter platform by unhiding the following extra buttons:

- **Open File** – Open a local PDF file in the viewer
- **Print** – Print the currently loaded PDF
- **Download** – Download the currently loaded PDF
- **Text** – Add text annotations
- **Draw** – Enable a drawing mode for annotations (freehand)
  In addition, the script also adds a download link for available video materials directly on the page, making it easier to save and access training or educational videos from the platform.

## 🧩 Features

✅ Adds user-friendly buttons directly to the PDF toolbar

✅ Adds a “Download Video” button at the top of the page

✅ Adds additional options to dropdown menu

✅ No changes to the original page layout  

✅ Works seamlessly within the InCenter PDF viewer  

✅ Helps users interact more easily with documents

## 📥 Installation

1. Install [Tampermonkey](https://www.tampermonkey.net/) browser extension (if you haven't already).

2. Set permissions to execute userscripts (Allow User Scripts and enable Developer mode) (Only for Chrome)

   👉 [Instructions](https://www.tampermonkey.net/faq.php#Q209)

3. Click the link below to install the script:

   👉 [Install the Script](https://github.com/igorlovric/Tampermonkey-Philips-InCenter/raw/refs/heads/master/Philips-Incenter.user.js)

4. Open a PDF document on the Philips InCenter platform. The new buttons will appear automatically.

## 🖼️ Screenshot

![Preview of the PDF viewer with extra buttons](InCenter_screenshot.png)

## ⚙️ How It Works

The script unhides HTML elements in the toolbar of the PDF viewer. It detects when the viewer is loaded and adds functionality dynamically.
In addition, the script searches the page for a video element. If a video is found, it automatically adds a “Download Video” button at the top of the page, providing a direct link to download the detected video file.
## 📄 Compatibility

- ✔️ Google Chrome
- ✔️ Mozilla Firefox
- ✔️ Microsoft Edge
- ❌ Not tested on Safari

## 🕓 Change History
- 2025-10-23 - v1.2.0.0 - Support for video download.
- 2025-08-07 - v1.1.0.0 - Removed jQuery dependency. Add "Buttons enabled" message.
- 2025-06-17 - v1.0.0.0 - First version (Private).

## 🔒 Disclaimer

This script is provided as-is and is not affiliated with or endorsed by Philips or the InCenter platform. Use at your own risk.

## 🛠️ Development

If you'd like to improve this script or customize it, feel free to fork the repository or open an issue.

## 📝 License

[MIT License](LICENSE.md)

---
