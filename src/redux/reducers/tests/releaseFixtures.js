/**
 * @format
 * @flow
 */

import type {Release} from '../../reducers';

const releaseFixtures: Release[] = [
  {
    feature_order: 4,
    is_free: false,
    product: {
      id: 2,
      title: 'Imagine Dragons',
      description:
        '<i>Performance contains flashing or strobe lighting.</i>\n\nThe biggest rock band of 2018 perform their eagerly anticipated new album from Red Rocks Amphitheatre, Colorado. Expect ground-shaking tracks, huge vocals and even bigger confetti cannons…',
      image_hero_url:
        'https://d17jafawxl91z1.cloudfront.net/IMD_P0129_IMG_Hero.jpg',
      image_landscape_url:
        'https://d17jafawxl91z1.cloudfront.net/IMD_P0129_IMG_Landscape.jpg',
      accent_colour_code: 'F52459',
      background_colour_code: '1e1e1e',
      text_colour_code: 'ffffff',
      production_type_code: 'performance',
      price: '9.99',
    },
  },
  {
    feature_order: 2,
    is_free: false,
    product: {
      id: 8,
      title: 'Cypress Hill',
      description:
        "<i>Performance contains flashing or strobe lighting.</i>\n\nThe multi-platinum record selling West Coast hip-hop group perform to a packed out Lion's Den crowd at Boomtown Fair.",
      image_hero_url:
        'https://d17jafawxl91z1.cloudfront.net/ee913e3692d48e04dfa972a03e8511c7_CYP_P0098_IMG_Hero.jpg',
      image_landscape_url:
        'https://d17jafawxl91z1.cloudfront.net/placeholder.jpg',
      accent_colour_code: '0081AD',
      background_colour_code: '003145',
      text_colour_code: 'ffffff',
      production_type_code: 'performance',
    },
  },
  {
    feature_order: 6,
    is_free: true,
    product: {
      id: 10,
      title: 'Kygo',
      description:
        'Catch a Kygo set like no other, as the EDM star turns his hand to the piano – alone on a roof terrace, high above Barcelona.',
      image_hero_url:
        'https://d17jafawxl91z1.cloudfront.net/45c0574922c5a4fadf311cbbd12325d7_KYG_P0008_IMG_Hero.jpg',
      image_landscape_url:
        'https://d17jafawxl91z1.cloudfront.net/placeholder.jpg',
      accent_colour_code: 'd1bdb0',
      background_colour_code: '5c4b40',
      text_colour_code: 'ffffff',
      production_type_code: 'original',
    },
  },
  {
    feature_order: 1,
    is_free: false,
    product: {
      id: 13,
      title: 'Chromeo',
      description:
        '<i>Performance contains flashing or strobe lighting.</i>\n\nThe Canadian electro-funk duo sweep through the Fox Theatre with their unique brand of soul-infused, synth-pop music.',
      image_hero_url:
        'https://d17jafawxl91z1.cloudfront.net/332178cf10f0ab635a71f0cf99610faf_CRO_P0099_IMG_Hero.jpg',
      image_landscape_url:
        'https://d17jafawxl91z1.cloudfront.net/placeholder.jpg',
      accent_colour_code: 'adadad',
      background_colour_code: '1e1e1e',
      text_colour_code: 'ffffff',
      production_type_code: 'performance',
      price: '9.99',
    },
  },
  {
    feature_order: 5,
    is_free: true,
    product: {
      id: 14,
      title: 'Mabel',
      description:
        '<i>Performance contains flashing or strobe lighting.</i>\n\nBe on stage with Mabel as sass levels reach an all-time high in Kentish Town, with big vocals, soulful melodies and an unbelievable sold-out crowd.',
      image_hero_url:
        'https://d17jafawxl91z1.cloudfront.net/5677e9b3a74b18c4c3bad3dde7f1ba26_MAB_P0108_IMG_Hero.jpg',
      image_landscape_url:
        'https://d17jafawxl91z1.cloudfront.net/placeholder.jpg',
      accent_colour_code: 'd1a3c8',
      background_colour_code: '1e1e1e',
      text_colour_code: 'ffffff',
      production_type_code: 'original',
    },
  },
];

export default releaseFixtures;
