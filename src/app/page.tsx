import axios from 'axios';
import { DOGS_BREED, FAILED_TO_FETCH } from './constants';
import { BreedsPost } from '@/components/breeds/interface';
import BreedsPage from '@/components/breeds/breeds';

async function fetchDogBreeds(): Promise<BreedsPost[]> {
  try {
    // WE CAN GET COMPLETE DATA BUT THAT IS GOING TO PUT HIT ON PERFORMANCE
    const response = await axios.get(`${DOGS_BREED}&page=0`);
    const { data }: { data: BreedsPost[] } = response;
    // TRYING TO GET IMAGES THROUGH BREED_ID BUT NOT WORKING CORRECTLY
    // const imageIdsRefs = data.reduce(
    //   (acc, val) => (acc.length === 0 ? `${val.id}` : `${acc},${val.id}`),
    //   '',
    // );
    // const { data: imagesData } = await axios.get(
    //   `${DOGS_IMAGES}&breed_ids=${imageIdsRefs}&api_key=${API_KEY}`,
    // );
    return data;
  } catch (error) {
    console.error(FAILED_TO_FETCH, error);
    throw new Error(FAILED_TO_FETCH);
  }
}

export default async function Page() {
  const breeds = await fetchDogBreeds();
  return <BreedsPage posts={breeds} />;
}
