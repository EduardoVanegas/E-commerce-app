import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    root:{
        flexDirection: 'row',
        borderWidth: 0.5,
        borderColor: '#d1c8b2',
        borderRadius: 5,
        backgroundColor: '#f7dfdc',
        marginVertical: 5,

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
    

});

export default styles;