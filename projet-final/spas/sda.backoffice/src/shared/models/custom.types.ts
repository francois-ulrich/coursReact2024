/**
 * Generic function for getting a series of objects from an API call
 */
export type GetAll<T> = () => Promise<T[]>;
