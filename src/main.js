// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  head.link.push({
    rel: 'mask-icon',
    sizes: 'any',
    href: 'icons/icon.svg',
    color: "var(--line-emerald)"
  })

  head.link.push({
    rel: 'shortcut icon',
    type: 'image/x-icon',
    href: 'icons/favicon.ico'
  })

  head.link.push({
    rel: 'icon',
    type: 'image/x-icon',
    href: 'icons/favicon.ico'
  })

  head.link.push({
    rel: 'manifest',
    href: 'manifest.webmanifest'
  })

  head.meta.push({
    name: 'description',
    content: 'A brazilian front-end developer, focused on UI Design and site performance'
  })

  head.meta.push({
    name: 'background-color',
    content: 'var(--background)'
  })

  head.meta.push({
    name: 'background-color',
    content: 'var(--background)'
  })

  //https://joshwcomeau.com/gatsby/dark-mode/ Using this article idea for interrupt at runtime, but keeping it simple still relying on DOM manipulation
  head.script.push({
    innerHTML: `
      const getColorScheme = () => {
        const colorSettings = localStorage.getItem("color-pref");
        
        if(colorSettings) return colorSettings;
        
        const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)');
        return userPrefersDark ? "dark" : "light";
      }

      document.documentElement.dataset.scheme = getColorScheme();
    `,
    head: true,
  })
}