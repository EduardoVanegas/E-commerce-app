import React from 'react';
import {View,FlatList,StyleSheet} from 'react-native';
import CartProductItem from '../../components/CartProductItems'; 

{/*import products from '../../data/products';*/}
import products from '../../data/cart';
const HomeScreen = () =>{
    return(
        <View style={styles.page}>
            {/*<ProductItem item={Products[0]} />*/}
            <FlatList 
                data={products}
                renderItem={({item})=> <CartProductItem cartItem={item}/>}
                showsVerticalScrollIndicator={false}
            />
        </View>

    );
};

const styles = StyleSheet.create({
    page : {
        padding : 10,
    },
});
export default HomeScreen;