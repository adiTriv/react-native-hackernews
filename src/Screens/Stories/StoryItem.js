import React from 'react';
import {View, TouchableOpacity} from 'react-native';

import Text from '../../components/UI/Text';

import {styles} from './styles';

import {getTimeAgo} from '../../Utils';

const RenderStoryItem = ({item, index, handleCommentsPress}) => {
  if (!item) {
    return null;
  }

  const timeAgo = getTimeAgo(item.time);

  return (
    <View key={index} style={styles.storyItem}>
      <Text numberOfLines={2} style={styles.title}>
        {item.title}
      </Text>
      <View style={styles.storyDetails}>
        <View style={styles.authorTime}>
          <Text style={styles.desc}>by</Text>
          <Text style={[styles.desc, styles.author]}>{` ${item.by}`}</Text>
          <Text style={styles.desc}>{` ${timeAgo}`}</Text>
        </View>
        <Text
          style={[styles.desc, styles.score]}>{`${item.score} point(s)`}</Text>
        <TouchableOpacity
          style={styles.commentsCont}
          onPress={handleCommentsPress}>
          <Text
            style={[
              styles.desc,
              styles.comments,
            ]}>{`${item.descendants} comment(s)`}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default React.memo(RenderStoryItem);
