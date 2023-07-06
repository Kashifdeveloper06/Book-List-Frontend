import * as React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

const NewComment = () => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <View style={{ flex: 0.8, alignItems: 'center' }}><Image style={{}} source={require('../assets/Images/galaryIcon.png')} /></View>
      <View style={{ flex: 4.5 }}><TextInput placeholderTextColor={'#AFB9CA'} placeholder='댓글을 남겨주세요.' /></View>
      <View style={{ flex: 0.7 }}><TouchableOpacity><Text style={{ fontSize: 12, fontWeight: '400', color: '#AFB9CA' }}>등록</Text></TouchableOpacity></View>
    </View>
  )
};
export default NewComment;