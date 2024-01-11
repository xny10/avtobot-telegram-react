import { Configuration } from 'webpack';

import { BuildOptions } from './types/types';

export function buildResolvers(options: BuildOptions): Configuration['resolve'] {
  return {
    // TODO: переделать на алиасы
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules'],
    // Всё что выше нужно поменять на алиасы
    // alias: {
    //   '@': options.paths.src,
    // },
    extensions: ['.tsx', '.ts', '.js'],
  };
}
