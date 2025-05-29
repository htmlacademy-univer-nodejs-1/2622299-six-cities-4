export const UpdateOfferValidationMessage = {
  title: {
    minLength: 'Title must contain at least 10 characters.',
    maxLength: 'Title cannot be longer than 100 characters.',
  },
  description: {
    minLength: 'Description must be at least 20 characters long.',
    maxLength: 'Description cannot exceed 1024 characters.',
  },
  date: {
    invalidFormat: 'Date must be in a valid ISO format.',
  },
  image: {
    maxLength: 'Image field is too short or missing.',
  },
  town: {
    invalidTown: 'Town must be selected from the available options.',
  },
  gallery: {
    minLength: 'Gallery must include exactly 6 images.',
    maxLength: 'Gallery must include exactly 6 images.',
  },
  rating: {
    min: 'Rating must be at least 1.',
    max: 'Rating cannot exceed 5.',
  },
  apartmentType: {
    invalidApartment: 'Please select a valid apartment type.',
  },
  roomCount: {
    min: 'At least one room is required.',
    max: 'The number of rooms cannot exceed 8.',
  },
  guestCount: {
    min: 'There must be at least one guest.',
    max: 'Guest count cannot be more than 10.',
  },
  cost: {
    min: 'Cost must be at least 100.',
    max: 'Cost cannot exceed 100,000.',
  },
  amenities: {
    empty: 'Please select at least one amenity.',
    includeAmenities: 'Selected amenities must match the allowed list.',
  },
  userId: {
    invalidId: 'User ID must be a valid MongoDB identifier.',
  },
} as const;
