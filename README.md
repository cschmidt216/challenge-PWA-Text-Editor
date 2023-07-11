# Just Another Text Editor

This is a text editor web application that allows users to write and save content using IndexedDB. It utilizes a client-server folder structure and is built with next-gen JavaScript, bundled using webpack. The application also includes features like service workers, manifest files, and desktop installation.

## Installation

To run the application, please follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the root directory of the application.
3. Run the following command to install the dependencies:
   ```
   npm install
   ```

## Usage

1. To run locally, open your terminal and navigate to the root directory of the application.  Otherwise, follow this link https://just-another-text-editor-cs216-47ff029a85b6.herokuapp.com
2. Run the following command to start the backend server and serve the client:
   ```
   npm run start
   ```
   This will launch the application in your default browser.

## Features

### IndexedDB Integration
- Opening the text editor will immediately create a database storage using IndexedDB.
- Content entered into the text editor will be automatically saved with IndexedDB when clicking off the DOM window.
- Closing and reopening the text editor will retrieve the previously saved content from IndexedDB.

### Desktop Installation
- Clicking on the Install button will download the web application as an icon on your desktop.

### Service Worker and Workbox Integration
- When loading the web application, a registered service worker using workbox will be set up.
- Static assets, as well as subsequent pages and static assets, will be pre-cached upon loading using the service worker.

### Heroku Deployment
- The application includes proper build scripts for a webpack application to enable seamless deployment to Heroku.

## Contributing

If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your contribution.
3. Make your changes and commit them.
4. Push your changes to your forked repository.
5. Submit a pull request to the main repository.

## License

This project is licensed under the [MIT License](LICENSE).



