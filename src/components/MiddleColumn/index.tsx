import React from 'react';

import LoadindFeedShare from '../Shimmer/LoadindFeedShare';
import LoadingFeedPost from '../Shimmer/LoadingFeedPost';
import FeedShare from './FeedShare';
import FeedPost from './FeedPost';

import { Container } from './styles';

const MiddleColumn: React.FC<LoadingProps> = ({ isLoading }) => {
  return (
    <Container className="middle-column">
      { isLoading ? (
        <>
          <LoadindFeedShare />
          <LoadingFeedPost />
          <LoadingFeedPost />
          <LoadingFeedPost />
          <LoadingFeedPost />
        </>
      ) : (
        <>
          <FeedShare />
          <FeedPost />
          <FeedPost />
          <FeedPost />
          <FeedPost />
        </>
      )}
    </Container>
  );
};

export default MiddleColumn;
