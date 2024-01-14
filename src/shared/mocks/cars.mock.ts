import { ICar } from 'shared/types';

export const carsMock: ICar[] = [
  {
    id: 214,
    brand: 'AC',
    makes: [
      { name: '378 GT ZAGATO' },
      { name: 'ACE' },
      { name: 'ACECA' },
      { name: 'C WAY M1' },
      { name: 'C WAY M2' },
      { name: 'C WAY M3' },
      { name: 'C WAY M4' },
    ],
  },
  { id: 14, brand: 'ACURA', makes: [{ name: 'TEST1' }, { name: 'TEST2' }, { name: 'TEST3' }] },
  { id: 214, brand: 'ASTON-MARTIN', makes: [{ name: 'AST1' }, { name: 'AST2' }, { name: 'AST3' }] },
  {
    id: 215,
    brand: 'BMW',
    makes: [{ name: 'bm11' }, { name: 'bm12' }, { name: 'bm13' }, { name: 'bm14' }, { name: 'bm15' }],
  },
  { id: 123, brand: 'ВАЗ', makes: [{ name: 'V12' }, { name: 'V14' }, { name: 'V16' }, { name: 'V20' }] },
  { id: 213, brand: 'Alfa Romeo', makes: [{ name: 'Alfa12' }, { name: 'RAR' }, { name: 'MOP' }] },
];
