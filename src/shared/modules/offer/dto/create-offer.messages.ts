export const CreateOfferValidationMessage = {
  title: {
    minLength: 'Title should have at least 10 characters',
    maxLength: 'Title must not be longer than 100 characters',
  },
  description: {
    minLength: 'Description must contain at least 20 characters',
    maxLength: 'Description must not exceed 1024 characters',
  },
  date: {
    invalidFormat: 'The post date must be a valid ISO 8601 date string',
  },
  image: {
    maxLength: 'Image URL is too short or missing',
  },
  town: {
    invalidTown: 'Town must be one of the predefined locations',
  },
  gallery: {
    minLength: 'Gallery must contain exactly 6 images',
    maxLength: 'Gallery must contain exactly 6 images',
  },
  rating: {
    min: 'Rating must be no less than 1',
    max: 'Rating must be no greater than 5',
  },
  apartmentType: {
    invalidApartment: 'Apartment type must be selected from allowed options',
  },
  roomCount: {
    min: 'At least 1 room is required',
    max: 'Maximum number of rooms is 8',
  },
  guestCount: {
    min: 'At least 1 guest must be allowed',
    max: 'Maximum guest capacity is 10',
  },
  cost: {
    min: 'Cost must be at least 100 units',
    max: 'Cost must not exceed 100,000 units',
  },
  amenities: {
    empty: 'You must select at least one amenity',
    includeAmenities: 'Amenities must be selected from the allowed list',
  },
  userId: {
    invalidId: 'User ID must be a valid identifier',
  },
} as const;
