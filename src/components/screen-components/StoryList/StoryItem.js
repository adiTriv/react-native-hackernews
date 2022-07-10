import React, { useCallback } from 'react';
import {View, TouchableOpacity} from 'react-native';

import Text from '../../UI/Text';

import {styles} from './styles';

import {getTimeAgo} from '../../../Utils';
import { fetchStoryItems } from '../../../API/stories';

const RenderStoryItem = ({item, index}) => {
  if (!item) {
    return null;
  }

  const handleCommentsPress = useCallback(async item => {
    let comments = null;

    if (item?.kids && Array.isArray(item?.kids) && item.kids.length) {
      comments = await fetchStoryItems(item.kids);
    }
  }, []);

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
