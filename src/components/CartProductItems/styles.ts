import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    root:{
        borderWidth: 1,
        borderColor: '#d1c8b2',
        borderRadius: 10,
        backgroundColor: '#f7dfdc',
        marginVertical: 5,
    },
    row : {
        flexDirection: 'row',
    },
    image:{
        //width: 150,
        height: 150,
        flex: 2,
        resizeMode:'contain',

    },
    title:{
       // width:'100%'
       fontSize: 18,

    },
    price:{
        fontWeight: 'bold',
    },
    rightContainer:{
        padding:10,
        flex: 3,
    },
    raitingStars:{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    star:{
        margin: 2,
    },
    quantityContainer:{
        margin: 5,
    }
});

export default styles;