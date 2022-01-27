import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import productsReducer from "./store/reducers/product";
import cartReducer from "./store/reducers/cart";
import ShopNavigator from './navigation/ShopNavigator';
import AppLoading from 'expo-app-loading';
import * as Font from "expo-font";
import { useState } from 'react';
import {composeWithDevTools} from "redux-devtools-extension";

const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

const fetchFonts =()=>{
    return Font.loadAsync({
        "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
        "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    });
}

export default function App() {
    const [fontLoaded, setFontLoaded] = useState(false);
    if(!fontLoaded){
        return <AppLoading startAsync={fetchFonts} onFinish={()=>{
            setFontLoaded(true);
        }} onError={()=>{
            console.log("There was some error")
        }}/>
    }
    return (
        <Provider store={store}>
            <ShopNavigator />
        </Provider>
    );
}

const styles = StyleSheet.create({
});
