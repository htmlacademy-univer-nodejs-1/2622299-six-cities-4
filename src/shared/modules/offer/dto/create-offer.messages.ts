export const CreateOfferValidationMessage = {
  title: {
    minLength: 'Title must be at least 10 characters long',
    maxLength: 'Title cannot exceed 100 characters',
  },
  description: {
    minLength: 'Description should be at least 20 characters long',
    maxLength: 'Description cannot be longer than 1024 characters',
  },
  date: {
    invalidFormat: 'Post date must be in a valid ISO format',
  },
  image: {
    maxLength: 'Image URL is too short',
  },
  town: {
    invalidTown: 'Town must be selected from the available options',
  },
  gallery: {
    minLength: 'Gallery must include exactly 6 images',
    maxLength: 'Gallery must include exactly 6 images',
  },
  rating: {
    min: 'Rating must be at least 1',
    max: 'Rating cannot be higher than 5',
  },
  apartmentType: {
    invalidApartment: 'Apartment type must be one of the allowed values',
  },
  roomCount: {
    min: 'There must be at least 1 room',
    max: 'No more than 8 rooms are allowed',
  },
  guestCount: {
    min: 'At least 1 guest must be allowed',
    max: 'Guest count cannot exceed 10',
  },
  cost: {
    min: 'Cost must be at least 100',
    max: 'Cost must not exceed 100,000',
  },
  amenities: {
    empty: 'Select at least one amenity',
    includeAmenities: 'Each amenity must be from the predefined list',
  },
  userId: {
    invalidId: 'The userId must be a valid identifier',
  },
} as const;
