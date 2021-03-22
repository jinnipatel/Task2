
import React, { Component } from 'react'
import { View, FlatList, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native'
import flatlistData from './flatlistData'


// const FlatListItem = ({ navigation }) => {
//     return (
//         <TouchableOpacity  >
//             <View style={{
//                 flexDirection: 'row',
//                 marginBottom: 10,
//                 backgroundColor: this.props.index % 2 == 0 ? 'lightblue' : 'lightnavy'

//             }}>

//                 <Image source={{ uri: props.item.image }}
//                     style={{ width: 100, height: 100, margin: 5 }} >

//                 </Image>
//                 <View style={{ flexDirection: 'column' }} >
//                     <Text style={styles.flatlistitem}>{props.item.name}</Text>
//                     <Text style={styles.flatlistitem}>{props.item.email}</Text>
//                 </View>

//             </View>
//         </TouchableOpacity>
//     )
// }

class FlatListItem extends Component {
    render() {
        return (
            <TouchableOpacity >
                <View style={{
                    flexDirection: 'row',
                    marginBottom: 10,
                    backgroundColor: this.props.index % 2 == 0 ? 'lightblue' : 'lightnavy'

                }}>

                    <Image source={{ uri: this.props.item.image }}
                        style={{ width: 100, height: 100, margin: 5 }} >

                    </Image>
                    <View style={{ flexDirection: 'column' }} >
                        <Text style={styles.flatlistitem}>{this.props.item.name}</Text>
                        <Text style={styles.flatlistitem}>{this.props.item.email}</Text>
                    </View>

                </View>
            </TouchableOpacity>


        )
    }
}

const styles = StyleSheet.create({
    flatlistitem: {
        padding: 10,
        fontSize: 18
    }
})


export default class Home extends Component {


    render() {

        return (

            <View style={{ marginTop: 22, marginBottom: 10 }}>

                <FlatList
                    data={flatlistData}
                    renderItem={({ item, index }) => {
                        // console.log('Item=${JSON.Stringfy(item)},index=${index}');
                        return (

                            <FlatListItem item={item} index={index} >

                            </FlatListItem>
                        )
                    }}>

                </FlatList>

            </View>

        )
    }
}

