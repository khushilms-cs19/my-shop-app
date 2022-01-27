import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Platform } from "react-native";
import ProductOverviewScreen from "../screens/shop/ProductOverviewScreen"
import Colors from "../constants/Colors"
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";


const ProductsNavigator = createStackNavigator({
    ProductsOverview: ProductOverviewScreen,
    ProductDetail: ProductDetailScreen,
},{
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS==="android"? Colors.primary:"",
        },
        headerTitleStyle:{
            fontFamily: "open-sans-bold",
        },
        headerBackTitle: {
            fontFamily: "open-sans"
        },
        headerTintColor: Platform.OS==="android"? "white": Colors.primary,
    }
});

export default createAppContainer(ProductsNavigator);