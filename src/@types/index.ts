import { ReactNode } from 'react';

export interface ISocialNetwork {
  _id: string;
  name: string;
  icon: ReactNode;
  to: string;
}
