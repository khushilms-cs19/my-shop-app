import { Button, StyleSheet, Text, View, Image, TouchableOpacity, Platform, TouchableNativeFeedback } from 'react-native';
import React from 'react';
import Colors from '../../constants/Colors';

const ProductItem = (props) => {
    let TouchableCmp = TouchableOpacity;
    if (Platform.OS === "android") {
        TouchableCmp = TouchableNativeFeedback;
    }
    return (
        <View style={styles.index}>
            <TouchableCmp onPress={props.onViewDetail} useForeground>
                <View style={styles.product}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} source={{ uri: props.image }} />
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.title}>{props.title}</Text>
                        <Text style={styles.price}>${props.price.toFixed(2)}</Text>
                    </View>
                    <View style={styles.actions}>
                        <Button color={Colors.primary} title="View Details" onPress={props.onViewDetail} />
                        <Button color={Colors.primary} title="To Cart" onPress={props.onAddToCart} />
                    </View>
                </View>
            </TouchableCmp>
        </View>
    );
};

export default ProductItem;

const styles = StyleSheet.create({
    index:{
        borderRadius:10,
        overflow: "hidden",
    },
    product: {
        shadowColor: "black",
        shadowOpacity: 0.26,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: "white",
        height: 320,
        margin: 20,
        alignItems: "center",
    },
    image: {
        width: "100%",
        height: "100%",

    },
    imageContainer: {
        // margin: 5,
        width: "100%",
        height: "60%",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: "hidden",
    },
    title: {
        fontSize: 18,
        marginVertical: 4,
        fontFamily: "open-sans-bold",
    },
    price: {
        fontFamily: "open-sans",
        fontSize: 14,
        color: "#888",
    },
    actions: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: "25%",
        paddingHorizontal: 20,
        width: "100%",
    },
    details: {
        alignItems: "center",
        // height: "15%",
        // padding: 10,
    }

});
