import { useState } from "react";

let idCounter = 0;

/**
 * Hook to generate a unique ID.
 * @param prefix - The prefix for the unique ID.
 * @returns A unique ID string.
 */
export const useUniqueId = (prefix = 'id') => {
  const [id] = useState(() => `${prefix}-${++idCounter}`);
  return id;
};