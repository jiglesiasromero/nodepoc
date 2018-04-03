import { BOOKINGS_URL } from '@root/constants';

import request from 'request-promise';

export const createBookingLead = body => {
  try {
    const response = request.post({
      uri: `${BOOKINGS_URL}/booking-leads`,
      body,
      resolveWithFullResponse: true,
      json: true
    });

    return response;
  } catch (err) {
    throw err;
  }
};
