import React, { useState, useCallback } from 'react';
import{View,Image, FlatList, StyleSheet,useWindowDimensions} from 'react-native';
//import { Image } from 'react-native-elements/dist/image/Image';

const ImageCarousel = ({images} : {image:string[]}) =>{
    const [activeIndex, setActiveIndex]= useState(1);
    const windowWidht = useWindowDimensions().width;

    const onFlatListUpdate = useCallback(({ viewableItems })=>{
        if(viewableItems.length > 0){
            setActiveIndex(viewableItems[0].index || 0);
        }
        console.log(viewableItems);
    },[])
    return(
        <View style={styles.root}>
            <FlatList
                data={images}
                renderItem={({item})=>(
                    <Image style={[styles.image, {width: windowWidht -40}]} 
                        source={{uri:item}}/>
                )} horizontal 
                showsHorizontalScrollIndicator={false}
                snapToInterval={windowWidht -20} 
                snapToAlignment={'center'}
                decelerationRate={'fast'}
                viewabilityConfig = {{
                    viewAreaCoveragePercentThreshold:50,
                }}
                onViewableItemsChanged = {onFlatListUpdate}
                />

                <View style={styles.dots}>
                    {images.map((images,index)=>(
                    <View 
                        style={[
                            styles.dot,
                            {
                                backgroundColor: index === activeIndex  ? '#c9c9c9' : '#ededed',
                            }
                        ]}/>
                    ))}
                </View>

                
        </View>
    );
};

const styles= StyleSheet.create({
    root:{},
    image:{
        margin:10,
        height: 250,
        resizeMode:'contain'

    },
    dots:{
        flexDirection:'row',
        justifyContent: 'center',
    },
    dot:{
        width: 10,
        height: 10,
        borderRadius:25,
        borderWidth:1,
        backgroundColor: '#ededed',
        borderColor: '#c9c9c9',
        margin:5,

    },
})
export default ImageCarousel;