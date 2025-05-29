export const CreateCommentMessages = {
  text: {
    invalidFormat: 'Text is required',
    lengthField: 'Length must be between 5 and 1024 characters',
  },
  date: {
    invalidFormat: 'Date must be a valid ISO string',
  },
  rating: {
    min: 'Rating must be at least 1',
    max: 'Rating cannot exceed 5',
  },
  author: {
    invalidFormat: 'Author ID must be a valid MongoDB ObjectId',
  },
  offerId: {
    invalidFormat: 'Offer ID must be a valid MongoDB ObjectId',
  },
} as const;
