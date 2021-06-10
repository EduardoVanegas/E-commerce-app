import React from 'react';
import {View,FlatList,StyleSheet,Text} from 'react-native';
import CartProductItem from '../../components/CartProductItems'; 
import Button from '../../components/Button'; 

{/*import products from '../../data/products';*/}
import products from '../../data/cart';
const ShopingCartScreen = () =>{

    const totalPrice = products.reduce(
        (summedPrice,product) => 
        summedPrice + product.item.price * product.quantity,
    0)
    return(
        <View style={styles.page}>
            {/*<ProductItem item={Products[0]} />*/}
            <FlatList 
                data={products}
                renderItem={({item})=> <CartProductItem cartItem={item}/>}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent = {() => (
                    <View>
                        <Text style={{ fontSize: 18 }}>
                            Subtotal ({products.length} productos):{' '}
                            <Text style={{ color: '#e47911', fontWeight: 'bold' }}>
                                ${totalPrice.toFixed(2)}
                            </Text>
                        </Text>
                        <Button
                            text="Proceder al pago"
                            onPress={() => console.warn('go to checkout')}
                            containerStyles={{ backgroundColor: '#f7e300', borderColor: '#c7b782' }}
                        />
                    </View>
                )}
            />
        </View>

    );
};

const styles = StyleSheet.create({
    page : {
        padding : 10,
    },
});
export default ShopingCartScreen;