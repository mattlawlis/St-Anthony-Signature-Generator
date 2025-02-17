# The St. Anthony Email Signature Generator

This repository contains a simple email signature generator for employees of The St. Anthony Hotel. It uses **PHP** sessions and a password gate to ensure only authorized users can access the signature generation page. Once authenticated, the user can fill in their details (first name, last name, title, etc.) and copy the resulting HTML email signature to their clipboard for use in Outlook 365 or any other email client.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Customization](#customization)
- [Troubleshooting](#troubleshooting)
- [License](#license)

---

## Features

- **Password-protected:** Only users who know the password can access the signature generator.
- **Live Preview:** The email signature preview updates in real-time as the user enters their information.
- **Simple Copy to Clipboard:** Users can copy their generated signature with a single button click.
- **Responsive Warning:** The tool checks for mobile screen sizes and advises the user to use a desktop.

---

## Project Structure

```
.
├─ index.php                # Entry point with password field
├─ process-password.php     # Validates password and sets session
├─ authorized.php           # Main signature generator (protected page)
│
├─ includes/
│    ├─ header.php          # HTML <head> and page header
│    └─ footer.php          # Common footer elements and JS script import
│
├─ css/
│    └─ styles.css          # CSS for authorized.php
│
├─ js/
│    └─ scripts.js          # JS for updating preview, copying signature
│
├─ images/
│    ├─ SATLC-Logo.png
│    ├─ SATLC-Logo-white.png
│    ├─ luxury-collection-sign-off.png
│    ├─ st-anthony-bg.webp
│    └─ ... other images ...
│
└─ fonts/
     ├─ ActaHeadline-Bold.otf
     ├─ SofiaProBold.otf
     ├─ SofiaProLight.otf
     └─ ... other font files ...
```

### Key Files

1. **`index.php`**  
   Displays the password input for authorized access.
2. **`process-password.php`**  
   Validates the submitted password and redirects to either `authorized.php` or back to `index.php`.
3. **`authorized.php`**  
   Main page for generating and previewing the email signature. Includes `header.php` and `footer.php`.
4. **`includes/header.php`**  
   Contains the `<head>` section (Bulma CSS, FontAwesome, etc.) and the opening `<body>` tag + site header.
5. **`includes/footer.php`**  
   Contains the closing `<body>` and `<html>` tags, plus a `<script>` reference to `js/scripts.js`.
6. **`css/styles.css`**  
   Styles for the signature generator page (previously inline in `authorized.php`).
7. **`js/scripts.js`**  
   JavaScript for updating the live preview and copying the signature to clipboard.

---

## Requirements

- **PHP 7.4+** (or any newer stable PHP version).
- A local or remote **web server** (e.g., Apache, Nginx, or PHP’s built-in web server) configured to run PHP.
- Optionally, **composer** or other PHP dependency manager if you plan to add external libraries (not strictly required for this app).

---

## Installation

1. **Clone or Download the Repo**  
   ```bash
   git clone https://github.com/YourUsername/stanthony-email-signature.git
   ```
   Or download it as a ZIP file and extract it into your web server’s document root.

2. **Place in Server Directory**  
   Ensure the project folder is accessible by your web server. For local testing with PHP’s built-in server, navigate to the project root and run:
   ```bash
   php -S localhost:8000
   ```
   Then visit [http://localhost:8000/](http://localhost:8000/) in your browser.

3. **Set Correct Password**  
   In `process-password.php`, update the `$correct_password` variable if desired:
   ```php
   $correct_password = 'crescent300'; // Change to a secure password
   ```

4. **Ensure File Permissions**  
   Make sure the web server has permission to read the files.

---

## Usage

1. **Access the Login Page**  
   Open [http://yourdomain/index.php](http://yourdomain/index.php) (or [http://localhost:8000/index.php](http://localhost:8000/index.php)) in your browser.
   
2. **Enter the Password**  
   - If the password is correct, you’ll be redirected to `authorized.php`.
   - Otherwise, you’ll see an error message and be asked to try again.

3. **Fill Out Your Information**  
   In the **signature generator** (`authorized.php`):
   - Enter your first name, last name, title, and cell phone number.
   - The **live preview** updates automatically.

4. **Click "Copy Signature"**  
   Paste it into your Outlook 365 or email client’s signature settings.

---

## Customization

- **Fonts**: The application uses custom fonts in `fonts/` and references them in `css/styles.css`. Adjust URLs if you move fonts to a different location.
- **Styling**: To change the layout or appearance, edit the Bulma classes or your own CSS in `css/styles.css`.
- **Password**: Update `$correct_password` in `process-password.php` to match your needs.
- **Paths**: If your site is under a subdirectory or a different domain, update any image or font paths in the CSS and `header.php`.

---

## Troubleshooting

- **Blank Page / Errors**: Ensure `session_start()` is called before output. Check your PHP error logs for details.
- **Password Not Working**: Double-check the `$correct_password` value in `process-password.php`.
- **Copy to Clipboard Fails**: Some older browsers do not support `document.execCommand('copy')`. If using older browsers, you may need a polyfill or a different clipboard API method.
- **Fonts Not Loading**: Make sure the `@font-face` URLs in `css/styles.css` point to the correct relative path for your fonts directory.

---

## License

This project is distributed under the GNU General Public License v3.0 (GPL-3.0).
You should have received a copy of the GNU General Public License along with this program.
If not, see https://www.gnu.org/licenses/.

---

**Questions or feedback?**  
Feel free to open an [issue](../../issues) in the repository or submit a pull request with improvements. Enjoy your new email signature generator!
