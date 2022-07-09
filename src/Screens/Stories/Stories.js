import React, {useCallback} from 'react';
import {View, FlatList} from 'react-native';

import RenderStoryItem from './StoryItem';

import FullPageLoader from '../../components/UI/Loaders/FullPage';
import Text from '../../components/UI/Text';

import {styles} from './styles';

import {useGetStories} from '../../custom-hooks/useGetStories';
import {fetchStoryItems} from '../../API/stories';

const Stories = () => {
  const stories = useGetStories();

  console.log('rendering stories');

  const loaderVisible = !stories ? true : false;

  const handleCommentsPress = useCallback(async item => {
    let comments = null;

    if (item?.kids && Array.isArray(item?.kids) && item.kids.length) {
      comments = await fetchStoryItems(item.kids);
    }
  }, []);

  const RenderItem = useCallback(
    props => (
      <RenderStoryItem {...props} handleCommentsPress={handleCommentsPress} />
    ),
    [],
  );

  if (stories && stories.length) {
    return (
      <View style={styles.container}>
        <FlatList
          data={stories}
          contentContainerStyle={styles.list}
          renderItem={RenderItem}
          keyExtractor={(item, index) => item?.id || index}
        />
      </View>
    );
  } else if (Array.isArray(stories) && stories.length === 0) {
    return (
      <View style={styles.noStoriesCont}>
        <Text numberOfLines={2} style={styles.noStoriesText}>
          {
            'There are no stories available on HackerRank! Please try again later'
          }
        </Text>
      </View>
    );
  } else {
    return <FullPageLoader visible={loaderVisible} />;
  }
};

export default Stories;
