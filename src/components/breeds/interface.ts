interface WeightAndHeight {
  imperial: string;
  metric: string;
}

export interface BreedsPost {
  weight: WeightAndHeight;
  height: WeightAndHeight;
  id: number;
  name: string;
  bred_for: string;
  breed_group: string;
  life_span: string;
  temperament: string;
  reference_image_id: string;
  origin: string;
}

// export interface Images {
//     breeds: any[],
//     id: string,
//     url: string,
//     width: number,
//     height: number
// }
