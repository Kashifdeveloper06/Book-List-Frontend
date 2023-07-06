import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Avatar } from 'react-native-paper';
import { CommentsStyles } from './styles';
import { ISubComment } from '../Interfaces/interfaces';

const SubComments = (props: ISubComment) => {
  const { image, title, verified, message } = props;

  return (
    <View style={{ flexDirection: 'row', paddingVertical: 10 }}>

      <View style={{ flex: 1 }} >
        <Avatar.Image size={40} source={image} />
      </View>

      <View style={{ flex: 4.5, paddingTop: '2%' }} >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ fontSize: 14, fontWeight: '700', color: '#1D232B' }}>{title}</Text>
          {verified && <Avatar.Image style={{ marginHorizontal: 10 }} size={15} source={require('../assets/Images/verified.png')} />}
          <Text style={{ fontSize: 10, fontWeight: '500', color: '#919EB6' }}>1일전 </Text>
        </View>
        <View>
          <View style={CommentsStyles.commentContent}>
            <Text>{message}</Text>
            <View style={CommentsStyles.commentActions}>
              <Image source={require('../assets/Images/linkCount.png')} />
            </View>
          </View>
        </View>
      </View>

      <View style={{ flex: 0.5, alignItems: 'flex-end', paddingTop: '3%' }} >
        <Image style={{ width: 15, }} source={require('../assets/Images/optionButton.png')} />
      </View>
    </View >
  )
};
export default SubComments;