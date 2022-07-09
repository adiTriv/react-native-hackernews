import React from 'react';
import {View, TouchableOpacity, FlatList} from 'react-native';
import moment from 'moment';

import FullPageLoader from '../../components/UI/Loaders/FullPage';
import Text from '../../components/UI/Text';

import {useGetStories} from '../../custom-hooks/useGetStories';

import {styles} from './styles';

import {pprint} from '../../Utils';
import { fetchStoryItems } from '../../API/stories';

/**
 * Todo:
 * design - checked
 * Lazy loading - asked
 * comments -
 * full story
 * full comments
 *
 * error handing
 * api call optimization
 */

const RenderStoryItem = ({item, index}) => {
  if (index < 1) {
    pprint({item});
  }

  // Todo: recheck below implementation
  const getTimeAgo = time => {
    return moment(time).fromNow();
  };

  const handleCommentsPress = async () => {
    let comments = null;

    if (item?.kids && Array.isArray(item?.kids) && item.kids.length) {
      comments = await fetchStoryItems(item.kids);
    }
  };

  return (
    <View key={index} style={styles.storyItem}>
      <Text numberOfLines={2} style={styles.title}>
        {item.title}
      </Text>
      <View style={styles.storyDetails}>
        <View style={styles.authorTime}>
          <Text style={styles.desc}>by</Text>
          <Text style={[styles.desc, styles.author]}>{` ${item.by}`}</Text>
          <Text style={styles.desc}>{` ${getTimeAgo(item.time)}`}</Text>
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

const Stories = () => {
  const stories = useGetStories();

  const loaderVisible = !stories ? true : false;

  if (stories) {
    return (
      <View style={styles.container}>
        <FlatList
          data={stories}
          contentContainerStyle={styles.list}
          renderItem={RenderStoryItem}
          keyExtractor={item => item.id}
        />
      </View>
    );
  } else {
    return <FullPageLoader visible={loaderVisible} />;
  }
};

export default Stories;
