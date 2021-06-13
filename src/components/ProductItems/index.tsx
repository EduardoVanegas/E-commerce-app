import React from 'react';
import {View,Text,Image,Pressable} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

interface ProductsItemProps{
    item:{
        id: string;
        title: string;
        image: string;
        avgRating: number;
        ratings: number;
        price: string;
        oldPrice? : number;
    };
}

const ProductItem = ({ item }:ProductsItemProps) =>{
    const navigation =useNavigation();  
    const onPress =() =>{
        navigation.navigate('Detalles del Producto', {id: item.id})
    };
    return(
        <View>
            <Pressable onPress={onPress} style={styles.root}>
               {/*<Image style={styles.image} source={require('./imgs/aguila.jpg')} />*/}
                <Image style={styles.image} source={{uri: item.image}} />
                <View style={styles.rightContainer}>
                    {/*<Text style={styles.title} numberOfLines={3}>Alebrijes, arte 100% oaxaqueño </Text>*/}
                    <Text style={styles.title} numberOfLines={3}>{item.title}</Text>
                    <View style={styles.raitingStars}>
                        {[0,0,0,0,0].map((el, i)=>
                        <FontAwesome key={'${item.id}=${i}'} style={styles.star} name={i < Math.floor(item.avgRating) ? 'star': 'star-o'} size={20} color={"#e47911"} />
                        )}
                        {/*<FontAwesome style={styles.star} name="star" size={20} color={"#e47911"} />
                        <FontAwesome style={styles.star} name="star" size={20} color={"#e47911"} />
                        <FontAwesome style={styles.star} name="star" size={20} color={"#e47911"} />
                        <FontAwesome style={styles.star} name="star-half-full" size={20} color={"#e47911"} />
                        <FontAwesome style={styles.star} name="star-o" size={20} color={"#e47911"} />*/}
                        <Text>{item.ratings}</Text>
                        {/*<Text>4500</Text>*/}
                    </View>
                    <Text style={styles.price}>Precio de compra ${item.price} MXN</Text>
                   {/* <Text style={styles.price}>Precio de compra $12,500 MXN</Text>*/}
                </View>
            </Pressable> 

        </View>
    );
};
export default ProductItem;