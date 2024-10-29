/**
 * Generic function for getting a series of objects from an API call
 */
export type GetAll<T> = () => Promise<T[]>;
export type PostOne<U, T> = (item: U) => Promise<T>;
