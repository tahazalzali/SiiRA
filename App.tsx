import App from "./app/app"
import React from "react"
import * as SplashScreen from "expo-splash-screen"


function SiiRAApp() {
  return <App hideSplashScreen={SplashScreen.hideAsync} />
}

export default SiiRAApp;

