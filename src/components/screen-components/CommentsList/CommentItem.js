import React from 'react';
import {View} from 'react-native';

import Text from '../../UI/Text';

import {styles} from './styles';

import {getTimeAgo, stripHtml} from '../../../Utils';

const RenderCommentItem = ({item, index}) => {
  if (!item || !item?.text) {
    return null;
  }

  const timeAgo = getTimeAgo(item.time);
  const commentsText = stripHtml(item.text);

  return (
    <View key={index} style={styles.commentItem}>
      <Text style={styles.commentText}>{commentsText}</Text>
      <View style={styles.commentDetails}>
        <View style={styles.authorTime}>
          <Text style={styles.desc}>by</Text>
          <Text style={[styles.desc, styles.author]}>{` ${item.by}`}</Text>
          <Text style={styles.desc}>{` ${timeAgo}`}</Text>
        </View>
      </View>
    </View>
  );
};

export default React.memo(RenderCommentItem);
