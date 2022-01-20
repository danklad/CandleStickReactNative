import React, { ReactElement } from "react";
import { StatusBar } from "react-native";
// import { createAppContainer } from "react-navigation";
// import { createStackNavigator } from "react-navigation-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { enableScreens } from "react-native-screens";
import Navigator from "./src/screens/navigation";

import {
  LoadAssets,
  StyleGuide,
  assets as componentAssets,
} from "./src/components";

// import CoinbasePro from "./src/screens/CoinbasePro";


enableScreens();



// const assets: number[] = [
//   ...componentAssets,
 
// ];



export default (): ReactElement => (
    
    <SafeAreaProvider>
      <Navigator/>
    </SafeAreaProvider>
);
