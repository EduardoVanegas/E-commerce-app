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
{/*El marco se rifo esto*/}
const CartProductItem = ({ cartItem }:CartProductItemProps) =>{
    const {quantity : quantityProp,item} = cartItem; 
    const [quantity, setQuantity] = useState(quantityProp);

    return(
        <View style={styles.root}>
            <View>
                <View style={styles.row}>
                {/*<Image style={styles.image} source={require('./imgs/aguila.jpg')} />*/}
                    <Image style={styles.image} source={{uri: item.image}} />
                    <View style={styles.rightContainer}>
                        {/*<Text style={styles.title} numberOfLines={3}>Alebrijes, arte 100% oaxaqueño </Text>*/}
                        <Text style={styles.title} numberOfLines={3}>{item.title}</Text>
                        <View style={styles.raitingStars}>
                            {[0,0,0,0,0].map((el, i)=>
                            <FontAwesome 
                                key={'${item.id}=${i}'} 
                                style={styles.star} 
                                name={i < Math.floor(item.avgRating) ? 'star': 'star-o'} 
                                size={20} 
                                color={"#e47911"} />
                            )}
                            <Text>{item.ratings}</Text>
                        </View>
                        <Text style={styles.price}>Precio de compra ${item.price} MXN</Text>
                    </View>
                </View> 
            </View>
            <View style={styles.quantityContainer}>
                <QuantiyiSelector quantity = {quantity} setQuantity = {setQuantity} />  
            </View>
        </View>
        
    );
};
export default CartProductItem;