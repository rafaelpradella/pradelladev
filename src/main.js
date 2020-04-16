// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import DefaultLayout from '~/layouts/Default.vue'
import galite from 'ga-lite'

galite('create', 'UA-163767880-1' , 'auto')
galite('send', 'pageview')

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  Vue.mixin({
    methods:{
      gaEvent(event, action, label, isInteractive = true){
        galite('send', 'event', event, action, label, null, { 'nonInteraction': !isInteractive });
      }
    }
  });

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
}