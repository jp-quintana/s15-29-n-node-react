export class CustomError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'CustomError';
  }
}

export const handleErrorMessage = (error: Error) => {
  console.log(error);

  if (error instanceof CustomError) {
    return error.message;
  }

  return 'Hubo un error';
};
