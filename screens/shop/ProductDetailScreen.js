import { StyleSheet, Text, View, ScrollView, Button, Image} from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Colors from '../../constants/Colors';
import * as cartActions from "../../store/actions/cart";


const ProductDetailScreen = (props) => {
    const productId = props.navigation.getParam("productId");
    const selectedProduct = useSelector((state) => state.products.availableProducts.find(prod => prod.id === productId));
    const dispatch = useDispatch();
    return (
        <ScrollView>
            <Image style={styles.image} source={{uri: selectedProduct.imageUrl}}/>
            <View style={styles.actions}>
                <Button title={"Add to Cart"} onPress={()=>{
                    dispatch(cartActions.addToCart(selectedProduct))
                }} color={Colors.primary}/>
            </View>
            <Text style={styles.price}>${selectedProduct.price.toFixed(2)}</Text>
            <Text style={styles.description}>{selectedProduct.description}</Text>
        </ScrollView>
    );

};

ProductDetailScreen.navigationOptions = navData=>{
    return {
        headerTitle: navData.navigation.getParam("productTitle"),
    }
}

export default ProductDetailScreen;

const styles = StyleSheet.create({
    image:{
        width: "100%",
        height: 300,
    },
    price: {
        fontSize: 20,
        color: "#888",
        textAlign: "center",
        marginVertical: 20,
        fontFamily: "open-sans-bold",
    },
    description:{
        fontSize: 14,
        textAlign: "center",
        marginHorizontal: 20,
        fontFamily: "open-sans",
    },
    actions: {
        width: "100%",
        marginVertical: 20,
        alignItems: "center",
    }
});
