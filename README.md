Below is an example README for your boilerplate:

---

# electron-react-boilerplate

A starter kit for building cross-platform desktop applications using Electron and React. This boilerplate is designed to load your application via the file:// protocol rather than an HTTP server, making it fast and simple to set up and avoiding creating unnecessary HTTP services in the user's computer.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Editing the Application](#editing-the-application)
  - [React Application](#react-application)
  - [Global Application Settings](#global-application-settings)
  - [App Information &amp; Assets](#app-information--assets)
- [Scripts &amp; Building](#scripts--building)
  - [Development](#development)
  - [Building for Production](#building-for-production)
  - [Platform Specific Builds](#platform-specific-builds)
- [License](#license)

## Features

- **Electron & React Integration:** Seamlessly build desktop applications with a modern React front-end.
- **No HTTP Server:** The app is loaded directly from the file protocol.
- **React Router Included:** Handle routing within your React application.
- **Multi-Platform Build Commands:** Easily package your app for macOS, Linux, and Windows.
- **Build Tasks with Gulp:** Automated build tasks for JavaScript, CSS, and assets.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/jesobreira/electron-react-boilerplate.git
   cd electron-react-boilerplate
   ```
2. **Install dependencies:**

   ```bash
   npm install
   ```

## Project Structure

- **`src/`**: Contains your React application code, HTML, CSS, and assets.
- **`main.js`**: Entry point for the Electron main process. Modify this to adjust global app settings like menus and window titles.
- **`package.json`**: Contains application metadata (name, version, etc.) and build scripts.
- **`gulpfile.js`**: Defines tasks for building, copying, testing, and starting the application.

## Editing the Application

### React Application

- All your React components, pages, and routes live in the `src/` folder.
- Use **React Router** to manage navigation within your app.
- Edit HTML files located in `src/` as needed. These files serve as the container for your React app.

### Global Application Settings

- **Main Process (`main.js`):**Customize the Electron global settings here:
  - **Menu:** Adjust or create custom menus.
  - **Window Title:** Set the default title or update window settings.
  - **Other Global Settings:** Tweak settings such as window size, behavior, and more.

### App Information & Assets

- **`package.json`:**Update the following fields to match your app’s identity:

  - `name`, `version`, `description`
  - Other custom fields that you may want to include for your build process are included in the `scripts` section of package.json.
- **Logos & Icons:**Replace the logo files located in `assets/images/` with your own assets. These are referenced in the build commands:

  - `logo.icns` for macOS
  - `logo.png` for Linux
  - `logo.ico` for Windows

## Scripts & Building

The project uses several npm scripts defined in `package.json` along with Gulp tasks to streamline development and production builds.

### Development

- **Start the App in Development Mode:**

  This command builds the app (copying assets, compiling JS/CSS) and starts Electron.

  ```bash
  npm start
  ```
- **Testing:**

  Run tests after building the project:

  ```bash
  npm test
  ```

### Building for Production

- **Build Task:**

  Run Gulp’s build tasks (for JS and CSS) without starting Electron:

  ```bash
  npm run build
  ```
- **Release Task:**

  This command builds your project and then runs the Electron Builder to package your app for distribution:

  ```bash
  npm run release
  ```

### Platform Specific Builds

You can create builds for different platforms using these commands:

- **macOS:**

  ```bash
  npm run build-mac
  ```
- **Linux:**

  ```bash
  npm run build-linux
  ```
- **Windows:**

  ```bash
  npm run build-windows
  ```

Additional commands for creating installers:

- **Debian Package:**

  ```bash
  npm run build-debian
  ```
- **DMG for macOS:**

  ```bash
  npm run build-dmg
  ```

Make sure to update the configuration files and assets (like icons) referenced in these commands to match your app’s branding.

## License

This project is licensed under the [MIT License](LICENSE).

---

Happy coding! If you have any issues or feature requests, please open an issue on the repository.
