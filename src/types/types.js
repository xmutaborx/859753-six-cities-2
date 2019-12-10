/* eslint-disable camelcase */
import {shape, arrayOf, number, string, bool} from 'prop-types';

export const PROP_TYPES_OFFERS = {
  bedrooms: number.isRequired,
  city: shape({
    name: string.isRequired,
    location: shape({
      latitude: number.isRequired,
      longitude: number.isRequired,
      zoom: number.isRequired,
    }).isRequired,
  }),
  description: string.isRequired,
  goods: arrayOf(string.isRequired),
  host: shape({
    id: number.isRequired,
    name: string.isRequired,
    is_pro: bool.isRequired,
    avatar_url: string.isRequired
  }),
  id: number.isRequired,
  images: arrayOf(string.isRequired),
  is_favorite: bool.isRequired,
  is_premium: bool.isRequired,
  location: shape({
    latitude: number.isRequired,
    longitude: number.isRequired,
    zoom: number.isRequired,
  }),
  max_adults: number.isRequired,
  preview_image: string.isRequired,
  price: number.isRequired,
  rating: number.isRequired,
  title: string.isRequired,
  type: string.isRequired,
};

export const PROP_TYPES_COMMENTS = {
  id: number.isRequired,
  user: shape({
    id: number.isRequired,
    is_pro: bool.isRequired,
    name: string.isRequired,
    avatar_url: string.isRequired,
  }).isRequired,
  rating: number.isRequired,
  comment: string.isRequired,
  date: string.isRequired,
};

export const PROP_TYPES_USER_DATA = {
  id: number,
  email: string,
  name: string,
  avatar_url: string,
  is_pro: bool,
};

export const PROP_TYPES_OFFERS_LIST = arrayOf(shape(PROP_TYPES_OFFERS));
export const PROP_TYPES_COMMENTS_LIST = arrayOf(shape(PROP_TYPES_COMMENTS));
