import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import AppText from './AppText/AppText';
import colors from '../config/colors';



function ListItem({title, subTitle,image}) {
    return (
            <View style={styles.container}>
                <Image style={styles.image} source={image}/>
                <View>
                    <AppText style={styles.title}>{title}</AppText>
                    <AppText style={styles.subTitle}>{subTitle}</AppText>
                </View>

            </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection: "row"
    },
    image:{
        width: 70,
        height: 70,
        borderRadius:35,
        marginRight: 10
    },
    title:{
        fontWeight:"500",
        fontSize: 20
    },
    subTitle:{
        fontSize: 15,
        color:colors.medium
    }
})

export default ListItem;