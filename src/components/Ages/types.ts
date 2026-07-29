import type { SetStateAction, Dispatch } from 'react';

export interface DecadeSelectorProps {
  headerHeight: number;
}

export interface Decade {
  value: string;
  label: string;
  personality: string;
  background: string;
}
