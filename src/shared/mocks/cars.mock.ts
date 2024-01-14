import { ICar } from 'shared/types';

export const carsMock: ICar[] = [
  {
    id: 214,
    name: 'AC',
    models: [
      { name: '378 GT ZAGATO' },
      { name: 'ACE' },
      { name: 'ACECA' },
      { name: 'C WAY M1' },
      { name: 'C WAY M2' },
      { name: 'C WAY M3' },
      { name: 'C WAY M4' },
    ],
  },
  { id: 14, name: 'ACURA', models: [{ name: 'TEST1' }, { name: 'TEST2' }, { name: 'TEST3' }] },
  { id: 218, name: 'ASTON-MARTIN', models: [{ name: 'AST1' }, { name: 'AST2' }, { name: 'AST3' }] },
  {
    id: 215,
    name: 'BMW',
    models: [{ name: 'bm11' }, { name: 'bm12' }, { name: 'bm13' }, { name: 'bm14' }, { name: 'bm15' }],
  },
  { id: 123, name: 'ВАЗ', models: [{ name: 'V12' }, { name: 'V14' }, { name: 'V16' }, { name: 'V20' }] },
  { id: 213, name: 'Alfa Romeo', models: [{ name: 'Alfa12' }, { name: 'RAR' }, { name: 'MOP' }] },
];
