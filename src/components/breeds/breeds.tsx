'use client';

import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import { BreedsPost } from './interface';
import { Post } from './post';
import {
  LoaderAndFinishPostsStyle,
  PageWrapper,
  TotalBreedsText,
} from './style';
import axios from 'axios';
import { DOGS_BREED, FAILED_TO_FETCH } from '@/app/constants';

interface Breeds {
  posts: BreedsPost[];
}

const MAX_NUM_TO_CALL = 50;

const BreedsPage = ({ posts }: Breeds) => {
  // USED STATE TO WORK ON INFINITE SCROLL
  const [{ breeds, page }, setData] = useState({
    breeds: posts,
    loading: false,
    page: 0,
  });

  const loadMore = async () => {
    try {
      setData((prev) => ({ ...prev, loading: true }));
      const { data }: { data: BreedsPost[] } = await axios.get(
        `${DOGS_BREED}&page=${page + 1}`,
      );
      setData((prev) => ({
        ...prev,
        loading: false,
        breeds: [...prev.breeds, ...data],
        page: prev.page + 1,
      }));
    } catch (error) {
      setData((prev) => ({ ...prev, loading: false }));
      console.error(FAILED_TO_FETCH, error);
      throw new Error(FAILED_TO_FETCH);
    }
  };

  return (
    <>
      <TotalBreedsText>Total Breeds: {breeds.length}</TotalBreedsText>
      <InfiniteScroll
        className="infinite-scroll"
        dataLength={breeds.length}
        next={loadMore}
        hasMore={breeds.length < MAX_NUM_TO_CALL}
        loader={
          <LoaderAndFinishPostsStyle>
            <h4>Loading...</h4>
          </LoaderAndFinishPostsStyle>
        }
        endMessage={
          <LoaderAndFinishPostsStyle>
            <b>Yay! You have seen it all</b>
          </LoaderAndFinishPostsStyle>
        }
      >
        <PageWrapper>
          {breeds.map((post) => {
            return <Post post={post} key={post.id} />;
          })}
        </PageWrapper>
      </InfiniteScroll>
    </>
  );
};

export default BreedsPage;
