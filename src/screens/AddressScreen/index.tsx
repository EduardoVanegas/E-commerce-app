import React, { useState } from 'react';
import {View,Text,TextInput,Alert} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import CountryList from 'country-list';
import Button from '../../components/Button';
import styles from './styles';

const countries = CountryList.getData();

const AddressScren = ()=>{
    const [country,setCountry]=useState(countries[0].code);
    const [fullname, setFullname]=useState('');
    const [phone, setPhone]=useState('');
    const [address, setAddress]=useState('');
    const [addressError, setAddressError]=useState('Dirección Invalida');
    const [phoneError, setPhoneError]=useState('Número Invalido');

    const [city, setCity]=useState('');

    const onCheckout = ()=>{

        if (addressError){
            Alert.alert('Rellena los campos restantes antes de continuar');
            return;
        }
        if (!fullname){
            Alert.alert('No has rellenado el campo de nombre, poner porfavor');
            return;
        }
        if (!phone){
            Alert.alert('No has rellenado el campo de Número Telefonico, poner porfavor');
            return;
        }
        console.warn('Checkeo exitoso');
    }

    const validateAddress = () =>{
        if(address.length<3){
            setAddressError('La dirección es muy corta');
        }
        if(address.length>50){
            setAddressError('La dirección es muy larga');
        }
    };

    const validatePhone = () =>{
        if(phone.length<10){
            setPhoneError('El numero debe contener 10 digitos');
        }
    };

    return(
        <View style={styles.root}>
            <View style={styles.row}>
                <Picker selectedValue={country} onValueChange={setCountry}>
                    {countries.map(country =>(
                        <Picker.Item value={country.code} label={country.name}/>
                    ))}  
                </Picker>
            </View>
            {/*FullName*/}
            <View style={styles.row}>
                <Text style={styles.label}>Nombre (Empezando por apellidos)</Text>
                <TextInput style={styles.input} placeholder="Nombre Completo" value={fullname} onChangeText={setFullname}></TextInput>
            </View>
            {/*PhoneNumber*/}
            <View style={styles.row}>
                <Text style={styles.label}>Numero de Teléfono</Text>
                <TextInput 
                    style={styles.input} 
                    placeholder="Numero de Teléfono" 
                    value={phone} 
                    onEndEditing={validatePhone}
                    onChangeText={text=>{
                        setPhone(text);
                        setPhoneError('')
                    }} 
                    keyboardType={'phone-pad'}>
                </TextInput>
            </View>
            {!!phoneError && (<Text style={styles.errorLabel}>{phoneError}</Text>)}
            {/*Address*/}
            <View style={styles.row}>
                <Text style={styles.label}>Dirección</Text>
                <TextInput 
                    style={styles.input} 
                    placeholder="Calle, Colonia" 
                    value={address} 
                    onEndEditing={validateAddress}
                    onChangeText={text=>{
                        setAddress(text);
                        setAddressError('')
                        }} >
                </TextInput>
                {!!addressError && (<Text style={styles.errorLabel}>{addressError}</Text>)}
            </View>
            {/*City*/}
            <View style={styles.row}>
                <Text style={styles.label}>Ciudad</Text>
                <TextInput 
                    style={styles.input} 
                    placeholder="Ciudad" 
                    value={city} 
                    onChangeText={setCity} >
                </TextInput>
            </View>
            <Button text='Loguear' onPress={onCheckout}/>

        </View>
    );
};
export default AddressScren;