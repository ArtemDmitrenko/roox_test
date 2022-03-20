import React, { createContext } from 'react';

type contextType = {
  sortData: (data: string) => void;
}

const SortingContext = createContext<contextType | null>(null);

export default SortingContext;
