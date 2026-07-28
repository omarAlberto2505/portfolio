import { create } from 'zustand';

type DecadeKey =
  | '1920-1930'
  | '1940-1950'
  | '1960-1970'
  | '1980-1990'
  | '2000-2010'
  | '2020'
  | '2030';

interface DecadeStore {
  decade: DecadeKey;
  setDecade: (d: DecadeKey) => void;
}

const useDecadeStore = create<DecadeStore>((set) => ({
  decade: '2020',
  setDecade: (d: DecadeKey) => set(() => ({ decade: d })),
}));

export default useDecadeStore;
