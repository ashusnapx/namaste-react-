# Theory Assignment - Bundlers, NPM, and Related Concepts

## NPM (Node Package Manager)
- NPM is the default package manager for Node.js and a vast ecosystem of JavaScript packages.
- It allows developers to discover, install, and manage various libraries, frameworks, and tools for their projects.
- NPM is used both for front-end and back-end development, providing access to a wide range of reusable code and resources.

## Parcel and Webpack
- Parcel and Webpack are popular module bundlers in the JavaScript ecosystem.
- Bundlers are build tools that take multiple modules or files, process them, and combine them into a single optimized file (or files) for deployment.
- They enable developers to efficiently manage dependencies, optimize code, and enhance the performance of web applications.

## `.parcel-cache`
- The `.parcel-cache` directory is created by Parcel bundler during the build process.
- It is a cache directory that stores the compiled and processed assets for faster subsequent builds.
- The cache allows Parcel to skip redundant processing and re-use the generated output when the source code hasn't changed significantly.

## `npx`
- `npx` is a command-line tool that comes with npm (since version 5.2.0) and is used to execute Node.js packages without needing to install them globally.
- It allows developers to run commands from packages installed locally in the `node_modules` folder of a project, eliminating the need for global installations.
- `npx` simplifies the process of executing command-line tools or scripts, making it convenient for one-time or infrequently used utilities.

## `dependencies` vs `devDependencies`
- `dependencies` and `devDependencies` are sections in the `package.json` file that distinguish between regular dependencies and development dependencies.
- `dependencies`: Lists packages required for the production runtime of the application.
- `devDependencies`: Includes packages needed during the development process, such as build tools, testing frameworks, and other development-specific utilities.
- Regular dependencies are necessary for the application to function correctly, while development dependencies are only required during the development and build processes.

## Tree Shaking
- Tree shaking is a technique used by bundlers (like Webpack and Parcel) to eliminate unused code from the final bundle.
- It analyzes the code and dependencies to identify and remove any unused modules or functions, reducing the bundle size.
- Tree shaking helps optimize the performance of the application by removing dead code, resulting in faster load times and improved efficiency.

## Hot Module Replacement (HMR)
- Hot Module Replacement is a feature provided by bundlers that enables live reloading and updating of modules in real-time without a full page reload.
- It allows developers to see instant changes reflected in the browser while preserving the application state.
- With HMR, developers can experience a faster development workflow as they make changes to the code and see the updates applied immediately.

## 5 Superpowers of Parcel (and 3 descriptions)
1. Zero Configuration: Parcel does not require complex configuration files. It analyzes the project structure and automatically resolves dependencies, enabling developers to start quickly without extensive setup.
2. Fast Build Times: Parcel utilizes parallel processing and caching mechanisms to optimize build times, resulting in faster bundling and compilation.
3. Automatic Asset Transformations: Parcel handles a wide range of asset types out of the box, including JavaScript, CSS, HTML, images, and more. It automatically applies the necessary transformations and optimizations for each asset type.

## `.gitignore`
- The `.gitignore` file specifies files and directories that should be excluded from version control when using Git.
- It helps to prevent sensitive or unnecessary files from being committed to the repository and shared with others.
- Typically, `node_modules`, build output directories (e.g., `dist`), temporary files, and any other generated or environment-specific files are added to the `.gitignore`.

## `package.json` vs `package-lock.json`
- `package.json`: It is the manifest file for a Node.js project that includes metadata, dependencies, and scripts. It is manually created or generated using `npm init` and manages project configuration and regular dependencies.
- `package-lock.json`: This file is automatically generated by npm and locks the exact versions of all installed dependencies. It ensures consistent dependency versions across different environments and prevents unwanted changes during subsequent installations.

## Modification of `package-lock.json`
- Modifying the `package-lock.json` file manually is generally discouraged.
- npm automatically manages this file based on the `package.json` and installed dependencies.
- Manual modifications can lead to inconsistencies between the `package.json` and `package-lock.json`, causing issues with dependency resolution and reproducibility.

## `node_modules`
- The `node_modules` directory is where npm stores all the installed packages and their dependencies for a project.
- It is created when dependencies are installed using `npm install` and contains the actual code of the installed packages.
- The `node_modules` directory is typically large and doesn't need to be committed to version control, as it can be regenerated through package installation using the `package.json` and `package-lock.json` files.

## `dist` Folder
- The `dist` (or distribution) folder is commonly used to store the built or compiled version of a web application.
- It contains optimized and minified assets (HTML, CSS, JavaScript) ready for deployment in a production environment.
- The `dist` folder is usually generated by build tools like Webpack or Parcel when running a build command (`npm run build`), and it is this folder that is typically deployed to a web server.

## `browserlist`
- `browserlist` is a configuration file that specifies the browsers and their versions that a project supports.
- It helps tools like Autoprefixer and Babel to automatically apply appropriate vendor prefixes and transpile code based on the specified browser compatibility requirements.
- The `browserlist` file is typically used by bundlers and build tools to ensure generated code is compatible with the targeted browsers.

## Caret (^) and Tilde (~)
- In the `package.json` file, version numbers for dependencies can be prefixed with caret (`^`) or tilde (`~`) symbols.
- `^`: The caret symbol indicates that the dependency can be updated to any newer version that is not breaking the defined API. For example, `^1.2.3` means any version greater than or equal to `1.2.3` but less than `2.0.0`.
- `~`: The tilde symbol indicates that the dependency can be updated to any newer version that includes bug fixes but not breaking changes. For example, `~1.2.3` means any version greater than or equal to `1.2.3` but less than `1.3.0`.

## Script Types in HTML
- In HTML, the `<script>` tag is used to include JavaScript code in a web page.
- The `type` attribute of the `<script>` tag specifies the MIME type or scripting language being used.
- Common `type` values include `text/javascript` (default, can be omitted), `module` (for JavaScript modules), `text/html` (for inline HTML templates), and `text/css` (for embedded CSS styles).

