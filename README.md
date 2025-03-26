# Vue 3 To-Do App Installation Guide

This document provides instructions on how to install and run the Vue 3 To-Do application.

## Prerequisites

Before you begin, ensure you have the following installed:

* **Node.js:** (version 16 or later recommended) - [Download Node.js](https://nodejs.org/)
* **npm** (Node Package Manager) or **yarn** (Node Package Manager) - npm is installed with Node.js, and yarn can be installed separately.
* **Vue CLI (Optional but recommended):**
    ```bash
    npm install -g @vue/cli
    ```

## Installation Steps

**Clone the Repository:**
    ```bash
    git clone git@github.com:mdnurulmomen/todo-front-application.git
    cd todo-front-application
    ```

**Install Dependencies:**
    * Using npm:
        ```bash
        npm install
        ```
    * Using yarn:
        ```bash
        yarn install

**Run the Development Server:**
    * Using npm:
        ```bash
        npm run dev
        ```
    * Using yarn:
        ```bash
        yarn dev
        ```
    * This will start the development server. Open your browser and navigate to the URL displayed in the console (usually `http://localhost:5173`).

**Build for Production (Optional):**
    * To build the application for production, run:
        * Using npm:
            ```bash
            npm run build
            ```
        * Using yarn:
            ```bash
            yarn build
            ```
    * The built files will be located in the `dist` directory.


