import { BASE_URL } from '@root/constants';

import request from 'request-promise';

export const searchListing = (city, type) => {
  try {
    const response = request.get({
      uri: `${BASE_URL}/search/markers/${city}`,
      qs: {
        type: [type],
        topology: [2]
      },
      resolveWithFullResponse: true,
      json: true
    });

    return response;
  } catch (err) {
    throw err;
  }
};

export const getListing = id => {
  try {
    const response = request.get({
      uri: `${BASE_URL}/search/listings/${id}`,
      qs: {
        hl: 'es'
      },
      resolveWithFullResponse: true,
      json: true
    });

    return response;
  } catch (err) {
    throw err;
  }
};
