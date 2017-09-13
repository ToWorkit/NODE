const nunjucks = require('nunjucks');

function createEnv (path, opts) {
  let autoescape = opts.autoescape && true,
      noCache = opts.noCache || false,
      watch = opts.watch || false,
      throwOnUndefined = opts.throwOnUndefined || false,
      env = new nunjucks.Environment(
        new nunjucks.FileSyStemLoader('views', {
          noCache: noCache,
          watch: watch,
        }), {
          autoescape: autoescape,
          throwOnUndefined: throwOnUndefined
        }
      );
  if (opts.filters) {
    for (let f in opts.filters) {
      env.addFilter(f, opts.filters[f]);
    }
  }
  return env;
}

let env = createEnv('views', {
  watch: true,
  filters: {
    hex: n => {
      return '0x' + n.toString(16)
    }
  }
})
