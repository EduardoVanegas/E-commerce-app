import React from 'react';
import {View,FlatList,StyleSheet} from 'react-native';
import ProductItem from '../../components/ProductItems'; 
{/*import products from '../../data/products';*/}
import Products from '../../data/products';
const HomeScreen = () =>{
    return(
        <View style={styles.page}>
            {/*<ProductItem item={Products[0]} />*/}
            <FlatList 
                data={Products}
                renderItem={({item})=><ProductItem item={item}/>}
                showsVerticalScrollIndicator={false}
            />
        </View>

    );
};

const styles = StyleSheet.create({
    page : {
        flex : 1,
        padding : 10,
    },
});
export default HomeScreen;