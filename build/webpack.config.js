import { resolve } from 'path';
import { resolve as resolvePathBrowserify } from 'path-browserify';

export default {
  resolve: {
    fallback: {
      path: resolvePathBrowserify,
    },
  },
};
