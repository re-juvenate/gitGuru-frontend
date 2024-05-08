# GitGuru Frontend

This project is a browser extension that enhances the GitHub issue page by injecting a UI and providing additional features.


https://github.com/re-juvenate/gitGuru-frontend/assets/90760974/285e948a-f6a3-44a9-bea8-30346cb41e3c



## Features

- Automatic detection of the active web page to determine if it is a GitHub issue page.
- Injection of the extension UI into the GitHub issue page.
- Default fetch request to the backend API to retrieve the summary of the issue conversation.
- Explanation tab: Provides an explanation of the entire issue.
- Solution tab: Offers possible solutions to the issue.

## Installation

1. Clone the repository by running the following command: `https://github.com/re-juvenate/gitGuru-frontend.git`
2. This project is built with pure JavaScript and CSS, so no additional dependencies are required.

## Usage

1. Load the extension in your browser:
    - Chrome: Open the Extensions page (`chrome://extensions`), enable Developer mode, click on "Load unpacked", and select the `GitGuru Fronend` folder.
    - Firefox: Open the Add-ons Manager (`about:addons`), click on the gear icon, select "Debug Add-ons", click on "Load Temporary Add-on", and select the `manifest.json` file.
    - The extension should now be loaded. Visit any GitHub issue to see it in action.


## License

This project is licensed under the [MIT License](LICENSE).
