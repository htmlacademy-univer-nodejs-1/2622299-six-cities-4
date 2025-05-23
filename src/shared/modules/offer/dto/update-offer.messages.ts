export const UpdateOfferValidationMessage = {
  title: {
    minLength: 'Title must be at least 10 characters long',
    maxLength: 'Title cannot exceed 100 characters',
  },
  description: {
    minLength: 'Description should be at least 20 characters long',
    maxLength: 'Description must not exceed 1024 characters',
  },
  date: {
    invalidFormat: 'Post date must be a valid ISO-formatted date',
  },
  image: {
    maxLength: 'Image field is too short',
  },
  town: {
    invalidTown: 'Town must be selected from the list of predefined cities',
  },
  gallery: {
    minLength: 'Gallery must contain exactly 6 images',
    maxLength: 'Gallery must contain exactly 6 images',
  },
  rating: {
    min: 'Rating must be at least 1',
    max: 'Rating cannot be greater than 5',
  },
  apartmentType: {
    invalidApartment: 'Apartment type must be one of the allowed options',
  },
  roomCount: {
    min: 'At least 1 room is required',
    max: 'No more than 8 rooms are allowed',
  },
  guestCount: {
    min: 'Guest count must be at least 1',
    max: 'Guest count cannot exceed 10',
  },
  cost: {
    min: 'Cost must be no less than 100',
    max: 'Cost must not be more than 100,000',
  },
  amenities: {
    empty: 'Select at least one amenity',
    includeAmenities: 'All amenities must be from the predefined list',
  },
  userId: {
    invalidId: 'The userId must be a valid identifier',
  },
} as const;
