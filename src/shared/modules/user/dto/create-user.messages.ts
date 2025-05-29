export const CreateUserMessages = {
  mail: {
    invalidFormat: 'Email must be a valid email address.',
  },
  avatar: {
    invalidFormat: 'Avatar URL is required.',
  },
  name: {
    invalidFormat: 'First name is mandatory.',
    lengthField: 'Name must be between 1 and 15 characters long.',
  },
  password: {
    invalidFormat: 'Password is required.',
    lengthField: 'Password length must be between 6 and 12 characters.',
  },
  type: {
    invalidType: 'User type must be either "pro" or "regular".',
    missingType: 'User type is required.',
  },
} as const;
