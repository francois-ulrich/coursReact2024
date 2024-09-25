import { Character } from "../models";

/**
 * Contract that provides function to get all characters
 */
export type GetAllCharacters = () => Promise<Character[]>;
