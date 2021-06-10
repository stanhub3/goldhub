/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    'static/admin': { url: '/', static: true },
    'cms/src': { url: '/dist' },
  }, 
  plugins: [
    '@snowpack/plugin-dotenv',
    [
      '@snowpack/plugin-typescript',
      {
        /* Yarn PnP workaround: see https://www.npmjs.com/package/@snowpack/plugin-typescript */
        ...(process.versions.pnp ? { tsc: 'yarn pnpify tsc' } : {}),
      },
    ],
  ],
  devOptions:{
   hmr: true,
   open: 'chrome',
   port: 1234,
   output: 'stream',
   hmrErrorOverlay: true,
   hmrDelay: 0,
  },
  packageOptions: {
    polyfillNode: true,
  },
};
