![image](https://github.com/user-attachments/assets/bb3ca5e9-24a4-44e3-b8ea-7d42b84be42d)

# 🌤️React Weather App
A responsive and interactive weather forecasting app built with React and Bootstrap.
It displays the current weather and a 5-day forecast (in daily intervals) for any city using the OpenWeatherMap API.

# 💻 Live Demo
https://mhd-weather-app.netlify.app/

# ✨ Features
🌍 Search by city name

📆 5-day daily forecast

🎯 Quick-access city buttons (e.g., Krakow, London, New York)

📱 Responsive layout using Bootstrap

🌀 Loading animation during API calls

❌ Error handling for invalid cities

# 🛠️ Tech Stack
- React.js – UI and component management

- Bootstrap 5 – Responsive layout and design

- OpenWeatherMap API – Real-time weather data

# 🚀 Getting Started
- Prerequisites
### `Node.js`
### `npm (comes with Node)`
- Setup Instructions <br>
1- Clone the repository <br>
2- git clone https://github.com/your-username/weather-app.git<br>
3- cd weather-app<br>
4- Install dependencies<br>
5- npm install <br>
6- Add your API Key <br>
    -Open App.js and replace this line with your own API key from OpenWeatherMap:
  const API_KEY = "your_api_key_here";<br>
7- Run the app <br>
    - npm start<br>
   - The app will start on http://localhost:3000.

📌 Notes
Temperatures are converted from Fahrenheit (API default) to Celsius manually.

Forecasts are extracted from the OpenWeatherMap 3-hour forecast by selecting one per day (every 8th entry).

You can customize cities, styles, and even add location-based weather in future versions.




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
