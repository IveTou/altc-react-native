import 'isomorphic-fetch';

import { makeReviews, makeLikes} from '../index';

const mock = {
  reviewA: {
    display_title: '123 Main Street',
    headline: 'Apartment 456',
    city: 'Atlanta',
  },
  reviewAL: {
    display_title: '123 Main Street',
    headline: 'Apartment 456',
    city: 'Atlanta',
    liked: true,
  },
  reviewB: {
    display_title: '1 Main Street',
    headline: 'Apartment 456',
    city: 'Atlanta',
    liked: true,
  },
  reviewB: {
    display_title: '1 Main Street',
    headline: 'Apartment 456',
    city: 'Atlanta',
  },
  reviewC: {
    display_title: '1 Main Street',
    headline: 'Apartment 456',
    city: 'Washington',
  },
};

describe('makeReviews', () => {
  it('union of distinctints', () => {
    const result = makeReviews([mock.reviewA], [mock.reviewB]);
    expect(result.length).toEqual(2);
  });

  it('union of similar', () => {
    const result = makeReviews([mock.reviewB], [mock.reviewC]);
    expect(result.length).toEqual(1);
  });
});

describe('makeLikes', () => {
  it('like a review', () => {
    const result = makeLikes(mock.reviewA, [], true);
    expect(result).toEqual([mock.reviewAL]);
  });

  it('dislike a review', () => {
    const result = makeLikes(mock.reviewAL, [mock.reviewA], false);
    expect(result).toEqual([]);
  });

  it('dislike a review from a set', () => {
    const result = makeLikes(mock.reviewAL, [mock.reviewA, mock.reviewB, mock.reviewC], false);
    expect(result.length).toEqual(2);
  });

  it('dislike which does not exist', () => {
    const result = makeLikes(mock.reviewAL, [mock.reviewB, mock.reviewC], false);
    expect(result.length).toEqual(2);
  });
});

