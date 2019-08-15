/**
 * @format
 * @flow
 */

export type Product = {
  id: number,
  title: string,
  description: string,
  image_hero_url: string,
  image_landscape_url: string,
  accent_colour_code: string,
  background_colour_code: string,
  text_colour_code: string,
  production_type_code: 'performance' | 'original',
  price?: string,
};

export type Release = {
  feature_order: number,
  is_free: boolean,
  product: Product,
};
