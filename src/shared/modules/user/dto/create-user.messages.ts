export const CreateUserMessages = {
  mail: {
    invalidFormat: 'Email must be a valid email address',
  },
  avatar: {
    invalidFormat: 'Avatar path is required',
  },
  name: {
    invalidFormat: 'First name is required',
    lengthField: 'Name must be between 1 and 15 characters',
  },
  password: {
    invalidFormat: 'Password is required',
    lengthField: 'Password must be between 6 and 12 characters long',
  },
  type: {
    invalidType: 'User type must be either "pro" or "обычный"',
    missingType: 'User type is required',
  },
} as const;
