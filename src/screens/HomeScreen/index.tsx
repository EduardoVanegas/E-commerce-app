import React from 'react';
import {View,FlatList} from 'react-native';
import ProductItem from '../../components/ProductItems'; 
{/*import products from '../../data/products';*/}
import Products from '../../data/products';
const HomeScreen = () =>{
    return(
        <View>
            {/*<ProductItem item={Products[0]} />*/}
            <FlatList 
                data={Products}
                renderItem={({item})=><ProductItem item={item}/>}
                showsVerticalScrollIndicator={false}
            />
        </View>

    );
};

export default HomeScreen;