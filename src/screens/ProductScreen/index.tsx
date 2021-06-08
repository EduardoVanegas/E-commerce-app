import React,{useState} from 'react';
import{View,Text} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import styles from './styles'
import QuantitySelector from '../../components/QuantiyiSelector';
import product from '../../data/product'
import Button from '../../components/Button';
import ImageCarousel from '../../components/ImageCarousel';

const ProductScreen = () => {
    const[SelectedOption,setSelectedOption]=useState(product.options ? product.options[0] : null);
    const[quantity,setQuantity]=useState(1);
    console.log(SelectedOption);

    return(
        <View style={styles.root}>
            <Text style={styles.title}>{product.title}</Text>
            {/* carousel*/}
            <ImageCarousel images={product.images}/>
            {/* option selector*/}
            <Picker
                selectedValue={SelectedOption}
                onValueChange={(itemValue, itemIndex) => setSelectedOption(itemValue)}>
                {product.options.map(option =>(
                <Picker.Item label={option} value={option}></Picker.Item>
                ))}
            </Picker>

            {/* price*/}
            <Text style={styles.price}>Precio de compra ${product.price} MXN</Text>

            {/* description*/}
            <Text style={styles.description}>{product.description}</Text>
            {/* quantiti selector*/}
            <QuantitySelector quantity={quantity} setQuantity={setQuantity}/>

            {/*button */}
            <Button text={'Agregar al carrito'} onPress={()=>{console.warn('Agregar al carrito')}} containerStyles={{backgroundColor: '#e3c985'}}/>
            <Button text={'Comprar ahora'} onPress={()=>{console.warn('Comprar ahora')}}/>

        </View>
    );
};

export default ProductScreen;