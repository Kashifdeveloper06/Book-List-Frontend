import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Avatar } from 'react-native-paper';
import SubComments from './SubComments';
import { CommentsStyles } from './styles';
const Comments = () => {
  return (
    <View style={CommentsStyles.container}>

      <View style={{ flex: 0.8 }} >
        <Avatar.Image size={40} source={require('../assets/Images/avatar1.png')} />
      </View>

      <View style={{ flex: 4.7, paddingTop: '2%' }} >
        <View style={CommentsStyles.profileActions}>
          <Text style={CommentsStyles.senderName}>안녕 나 응애 </Text>
          <Avatar.Image style={{ marginHorizontal: 10 }} size={15} source={require('../assets/Images/verified.png')} />
          <Text style={CommentsStyles.sendingTime}>1일전 </Text>
        </View>
        <View>
          <View style={CommentsStyles.commentContent}>
            <Text>
              어머 제가 있던 테이블이 제일 반응이 좋았나보네요🤭
              우짤래미님도 아시겠지만 저도 일반인 몸매 그 이상도 이하도
              아니잖아요?! 그런 제가 기꺼이 도전해봤는데 생각보다
              괜찮았어요! 오늘 중으로 라이브 리뷰 올라온다고 하니
              꼭 봐주세용~!
            </Text>
            <View style={CommentsStyles.commentActions}>
              <Image source={require('../assets/Images/linkCount.png')} />
              <Image source={require('../assets/Images/commentCount.png')} />
            </View>
            <SubComments image={require('../assets/Images/avatar2.png')} title={'ㅇㅅㅇ'} verified={false} message={'오 대박! 라이브 리뷰 오늘 올라온대요? 챙겨봐야겠다'} />
          </View>
        </View>
      </View>

      <View style={CommentsStyles.optionButton} >
        <Image style={{ width: 15, }} source={require('../assets/Images/optionButton.png')} />
      </View>
    </View >
  )
};

export default Comments;