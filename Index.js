import React, { useState } from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import StateProvider from "./src/context/StateProvider";
import App from "./App";

async function loadApp() {
  await Font.loadAsync({
    "roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "roboto-bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });
}

export default function Index() {
  const [isReady, setIsReady] = useState(false);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadApp}
        onError={(err) => console.log(err)}
        onFinish={() => setIsReady(true)}
      />
    );
  }

  return (
    <StateProvider>
      <App />
    </StateProvider>
  );
}
