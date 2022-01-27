import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductItem from '../../components/shop/ProductItem';
import * as cartActions from "../../store/actions/cart";

const ProductOverviewScreen = (props) => {
    const products = useSelector((state) => state.products.availableProducts);
    const dispatch = useDispatch();
    return (
        <FlatList
            data={products}
            keyExtractor={(item) => item.id}
            renderItem={(itemData) => {
                return (
                    <ProductItem 
                        image={itemData.item.imageUrl}
                        title={itemData.item.title}
                        price={itemData.item.price}
                        onViewDetail = {()=>{
                            props.navigation.navigate("ProductDetail",{
                                productId: itemData.item.id,
                                productTitle: itemData.item.title,
                            })
                        }}
                        onAddToCart= {()=>{
                            dispatch(cartActions.addToCart(itemData.item))
                        }}
                    />
                )
            }}
        />
    );
};

ProductOverviewScreen.navigationOptions = {
    headerTitle: "All Products",
}

export default ProductOverviewScreen;

const styles = StyleSheet.create({});
