import type { AvatarProps } from '../../../components';
import { helsedir, skatt } from './avatar';

export interface DemoServices {
  id: string;
  avatar: AvatarProps;
  title: string;
  description: string;
}

export const services: DemoServices[] = [
  {
    id: '1',
    avatar: skatt,
    title: 'For veldedige og allmennyttige organisasjoner (A02)',
    description: 'Skatteetaten',
  },
  {
    id: '2',
    avatar: helsedir,
    title: 'Søknad om autorisasjon og lisens som helsepersonell',
    description: 'Helsedirektoratet',
  },
  {
    id: '3',
    avatar: skatt,
    title: 'For virksomheter uten lønnssystem (A01)',
    description: 'Skatteetaten',
  },
  {
    id: '4',
    avatar: skatt,
    title: 'For virksomheter med lønnssystem (A02)',
    description: 'Skatteetaten',
  },
];
