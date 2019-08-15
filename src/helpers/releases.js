/**
 * @format
 * @flow
 */

import type {Release, Product} from '../redux/reducers';

const DEFAULT_PRODUCT = {
  // FIXME: use a UUID or something that's more likely to be unique
  id: 0,
  title: "The greatest gig you've ever been to",
  description:
    'You know that awesome gig you went to that time? This one is even better!',
  // FIXME: obviously this would go to a generic image but this will do for now
  image_hero_url:
    'https://d17jafawxl91z1.cloudfront.net/IMD_P0129_IMG_Hero.jpg',
  // FIXME: obviously this would go to a generic image but this will do for now
  image_landscape_url:
    'https://d17jafawxl91z1.cloudfront.net/IMD_P0129_IMG_Landscape.jpg',
  accent_colour_code: 'F52459',
  background_colour_code: '1e1e1e',
  text_colour_code: 'ffffff',
  production_type_code: 'performance',
  price: '12.99',
};

const DEFAULT_RELEASE: Release = {
  feature_order: 0,
  is_free: false,
  product: DEFAULT_PRODUCT,
};

function normaliseProduct(product: Product): Product {
  // $FlowFixMe
  return {
    ...DEFAULT_PRODUCT,
    ...product,
  };
}

export function normaliseRelease(release: Release): Release {
  // $FlowFixMe
  return {
    ...DEFAULT_RELEASE,
    ...release,
    product: normaliseProduct(release.product),
  };
}
