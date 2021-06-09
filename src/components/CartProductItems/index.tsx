import React, {useState} from 'react';
import {View,Text,Image} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import QuantiyiSelector from '../QuantiyiSelector';
import styles from './styles';

interface CartProductItemProps{
    cartItem : {
        id : string;
        quantity : string;
        option? : string;
        item : {
            id: string;
            title: string;
            image: string;
            avgRating: number;
            ratings: number;
            price: string;
            oldPrice? : number;
        };
    };
}

const CartProductItem = ({ cartItem }:CartProductItemProps) =>{
    const {quantity : quantityProp,item} = cartItem; 
    const [quantity, setQuantity] = useState(quantityProp);

    return(
        <View>
            <View>
                <View style={styles.root}>
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
                </View> 
            </View>
            <QuantiyiSelector quantity = {quantity} setQuantity = {setQuantity} />
        </View>
        
    );
};
export default CartProductItem;