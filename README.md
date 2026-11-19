# Popup Box | CSS — Runnable Project

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/popup-box-css/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

Recreated from the supplied 6.6-second screen recording.

## Run
Open `index.html` in a browser, or run:

```bash
python3 -m http.server 8000
```

Visit http://localhost:8000.

No npm install or external dependency is required.

## CSS directly visible in the video

```css
.submit-btn {
  background-color: #1e272e;
  color: #4bcffa;
  border: none;
  padding: 15px 30px;
  font-size: 18px;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 5px;
  letter-spacing: 2px;
  font-weight: bold;
  transition: box-shadow 0.3s ease-in-out,
             transform 0.2s ease-in-out;
}
```

## Reconstructed parts
The video shows the Submit button and the success popup but does not expose the full HTML or popup CSS. The HTML structure, overlay, responsive rules and JavaScript interaction in this project are implemented to reproduce the visible result.

The popup text shown in the recording:
- Submitted!
- Thank You! Your application has been successfully submitted.
- Estimated Completion date: 06-06-2025

The demo opens the popup on Submit and closes it using the X button, Escape, or clicking outside.

## 👨‍💻 Author

**mrchandrayee** · [GitHub](https://github.com/mrchandrayee)

## 📄 License

[MIT License](./LICENSE)
