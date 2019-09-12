import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Moment from "moment";

export default function AccelerationItem({ item }) {
  return (
	  <View style={styles.container}>
      <View style={styles.banner}>
        <Image 
          source={{ uri:  item.banner_url || 'http://denrakaev.com/wp-content/uploads/2015/03/no-image.png' }}
          style={styles.image} 
        />
      </View>
      <View>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.location}>{item.location}</Text>
        <Text style={styles.date}>
          {Moment(new Date(item.subscription_finish_at)).format("DD/MM/YYYY")}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'row',
    borderWidth:2,
    borderColor:'#F2F2F2',
    margin:10
  },
  banner:{
    borderRightWidth:2,
    borderRightColor: "#F2F2F2"
  },
  image: {
    resizeMode:'cover',
    width: 100, 
    height: 100
  },
  title: {
    fontSize:25,
    marginTop:10,
    marginLeft: 10
  },
  location: {
    color:'#7800FF',
    fontSize:20,
    marginTop:5,
    marginBottom:5,
    marginLeft: 10
  },
  date:{
    fontSize:18,
    marginLeft: 10
  }
});