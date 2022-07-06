import React from 'react';
import {View, TouchableOpacity, FlatList} from 'react-native';
import moment from 'moment';

import FullPageLoader from '../../components/UI/Loaders/FullPage';
import Text from '../../components/UI/Text';

import {useGetStories} from '../../custom-hooks/useGetStories';

import {styles} from './styles';

import {pprint} from '../../Utils';

/**
 * Todo:  
 * design
 * Lazy loading
 * comments
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

  const getTimeAgo = time => {
    return moment(time).fromNow();
  };

  return (
    <View key={index} style={styles.storyItem}>
      <Text numberOfLines={2} style={styles.title}>
        {item.title}
      </Text>
      <View style={styles.storyDetails}>
        <Text style={styles.desc}>{`${item.score} point(s)`}</Text>
        <View style={styles.authorTime}>
          <Text style={styles.desc}>{` by ${item.by}`}</Text>
          <Text style={styles.desc}>{` ${getTimeAgo(
            item.time,
          )}`}</Text>
        </View>
        <TouchableOpacity
          onPress={async () => {
            if (item.kids) {
              const comments = await Promise.all(
                s.kids.map(async id => {
                  const res = await fetch(
                    `https://hacker-news.firebaseio.com/v0/item/${id}.json`,
                  );
                  const comments = res.json();
                  return comments;
                }),
              );
            }
          }}>
          <Text style={[styles.desc, styles.comments]}>{` ${item.descendants} comment(s)`}</Text>
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
