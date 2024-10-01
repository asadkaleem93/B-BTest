'use client';

import {
  // useEffect,
  useState,
} from 'react';

import {
  // DOGS_IMAGES,
  // FAILED_TO_FETCH,
  // INDIVIDUAL_IMAGE,
  REF_IMAGE_ID,
} from './constants';
import {
  ContentWrapper,
  Heading,
  InfoField,
  PostWrapper,
  SubHeading,
} from './style';
import { FullScreenModal } from '../fullScreenModal/fullScreenModal';
import { BreedsPost } from './interface';
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
    <PostWrapper imageUrl={`${REF_IMAGE_ID}${post.reference_image_id}.jpg`}>
      <div
        className="dog-image"
        onClick={() => {
          setImgSrc(`${REF_IMAGE_ID}${post.reference_image_id}.jpg`);
          setFullScreen(true);
        }}
      />
      {/* <Image
          className="dog-image"
          src={`${REF_IMAGE_ID}${post.reference_image_id}.jpg`}
          alt="dog"
          // width={390}
          // height={250}
          layout="fill"
          objectFit="contain"
          placeholder="empty"
          onClick={() => {
            setImgSrc(`${REF_IMAGE_ID}${post.reference_image_id}.jpg`);
            setFullScreen(true);
          }}
        /> */}
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
          {/* <Image
              className="xyz"
              src={imgSrc}
              width={undefined}
              height={undefined}
              alt="dog-image"
              layout="raw"
            /> */}
        </div>
      </FullScreenModal>
    </PostWrapper>
  );
};
