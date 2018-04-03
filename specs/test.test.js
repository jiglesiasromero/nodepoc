import { DateTime } from 'luxon';
import { faker } from 'faker';

import { STATUS_CODE } from '@root/constants';
import { random } from '@root/helpers';

import { getListing, searchListing } from '@req/listing';
import { createBookingLead } from '@req/bookingLeads';

const city = 'barcelona';
const type = 'rooms';

let search;
let listingId;
let listing;
let checkoutDate;

describe('POC test - call backend endpoints', () => {
  describe('TC001 Get listings', () => {
    beforeEach(async () => {
      search = await searchListing(city, type);

      listingId = search.body.data[random()].id;
    });

    it('should be 200 status code', () => {
      expect(search.statusCode).toEqual(STATUS_CODE.OK);
    });

    it('should get a random id', () => {
      expect(listingId).toBeDefined();
    });

    describe('TC002 Search for the selected listing id', () => {
      beforeEach(async () => {
        listing = await getListing(listingId);

        checkoutDate = DateTime.fromISO(
          listing.body.listing.availableFromDateIso8601
        )
          .plus({ days: listing.body.listing.minStay })
          .toISODate();
      });

      it('should be 200 status code', () => {
        expect(listing.statusCode).toEqual(STATUS_CODE.OK);
      });

      it('should has a valid checkout date', () => {
        const expectedCheckinDate = DateTime.fromISO(checkoutDate)
          .minus({
            days: listing.body.listing.minStay
          })
          .toISODate();

        expect(listing.body.listing.availableFromDateIso8601).toEqual(
          expectedCheckinDate
        );
      });
    });

    describe('TC003 Create the booking lead', () => {
      beforeEach(async () => {
        listing = await createBookingLead({
          tenantName: faker.name.firstName(),
          tenantEmail: faker.internet.email(),
          tenantPhone: faker.phone.phoneNumber(),
          tenantBirthday: DateTime.local()
            .minus({ years: 30 })
            .toISODate(),
          listing: listingId,
          tenantGender: 'female',
          tenantCountry: faker.address.countryCode(),
          checkIn: listing.body.listing.availableFromDateIso8601,
          checkOut: checkOutDate
        });
      });
    });
  });
});
