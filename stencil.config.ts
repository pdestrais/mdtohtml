import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'mdtohtml',
  outputTargets:[
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: null
    }
  ],
  plugins: [
    sass()
  ]
};
