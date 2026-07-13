import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import { aerocraftPlugin } from '@forgedevstack/aerocraft/postcss';
import aerocraftConfig from './aerocraft.config.js';

export default {
  plugins: [aerocraftPlugin(aerocraftConfig), tailwindcss, autoprefixer],
};
