import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";

import robotsTxt from "astro-robots-txt";
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: netlify(),
  integrations: [tailwind(), compress(), robotsTxt()]
});