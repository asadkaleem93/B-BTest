'use client';

import {
  // useEffect,
  useState,
} from 'react';

import {
  ContentWrapper,
  Heading,
  InfoField,
  PostWrapper,
  SubHeading,
} from './style';
import { FullScreenModal } from '../fullScreenModal/fullScreenModal';
import { BreedsPost } from './interface';
import { CDN_BASE_ROUTE } from '@/app/constants';
// import axios from 'axios';
// import Image from 'next/image';

const PostContent = ({ post }: { post: BreedsPost }) => {
  return (
    <ContentWrapper>
      <InfoField>
        <Heading>Weight</Heading>
        <SubHeading>{post.weight.metric || 'N/A'}</SubHeading>
      </InfoField>
      <InfoField>
        <Heading>Breed</Heading>
        <SubHeading>{post.name || 'N/A'}</SubHeading>
      </InfoField>
      <InfoField>
        <Heading>Temperament</Heading>
        <SubHeading>{post.temperament || 'N/A'}</SubHeading>
      </InfoField>
      <InfoField>
        <Heading>Origin</Heading>
        <SubHeading>{post.origin || 'N/A'}</SubHeading>
      </InfoField>
      <InfoField>
        <Heading>Life Span</Heading>
        <SubHeading>{post.life_span || 'N/A'}</SubHeading>
      </InfoField>
    </ContentWrapper>
  );
};

export const Post = ({ post }: { post: BreedsPost }) => {
  const [fullScreen, setFullScreen] = useState(false);
  const [imgSrc, setImgSrc] = useState('');
  // const [fetchedImage, setFetchedImage] = useState('');

  // useEffect(() => {
  //   const getImage = async () => {
  //     await axios(`${INDIVIDUAL_IMAGE}/${post.reference_image_id}?size=small`)
  //       .then(({ data }) => setFetchedImage(data.url))
  //       .catch((err) => {
  //         setFetchedImage('');
  //         console.error(FAILED_TO_FETCH, err);
  //         throw new Error(FAILED_TO_FETCH);
  //       });
  //   };
  //   getImage();
  // }, []);

  return (
    <PostWrapper
      backgroundimage={`${CDN_BASE_ROUTE}${post.reference_image_id}.jpg`}
    >
      <div
        className="dog-image"
        onClick={() => {
          setImgSrc(`${CDN_BASE_ROUTE}${post.reference_image_id}.jpg`);
          setFullScreen(true);
        }}
      />
      <PostContent post={post} />
      <FullScreenModal
        open={fullScreen}
        handleClose={() => {
          setFullScreen(false);
          setImgSrc('');
        }}
      >
        <div className="img-modal-wrapper">
          <img src={imgSrc} alt="dog-img" style={{ height: '100vh' }} />
        </div>
      </FullScreenModal>
    </PostWrapper>
  );
};
