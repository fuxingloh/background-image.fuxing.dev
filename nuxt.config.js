export default {
  target: 'static',
  head: {
    title: 'CSS Background Image',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'og:title', name: 'og:title', content: 'CSS Background Image'},
      {
        hid: 'description',
        name: 'description',
        content: 'SSG website and article to demo background image and how to do them properly'
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: 'SSG website and article to demo background image and how to do them properly'
      },
      {name: 'og:locale', content: 'en_us'},
    ],
    link: [
      {rel: 'icon', type: 'image/png', href: '/logo.png'}
    ]
  },
  components: true,
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
  ],
  modules: [
    '@nuxt/content',
    '@nuxt/image',
  ],
  plugins: [
    '~/plugins/gtag.client'
  ],
  content: {
    markdown: {
      remarkPlugins: [
        ['remark-code-import-replace', {
          baseDir: 'content/snippets',
          replace: (node, meta, {u}) => {
            const padding = meta.padding ?? '0'
            const component = meta.file.name

            return [
              u('html', {value: `<snippet-mock-browser>`}),
              u('html', {value: `<div style="padding: ${padding}">`}),
              u('html', {value: `<${component}>`}),
              u('html', {value: `</${component}>`}),
              u('html', {value: `</div>`}),
              u('html', {value: `<template v-slot:snippet>`}),
              node,
              u('html', {value: `</template>`}),
              u('html', {value: `</snippet-mock-browser>`}),
            ]
          }
        }],
      ],
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css'
      }
    },
  },
  hooks: {
    'components:dirs': async (dirs) => {
      dirs.push({
        path: "~/content/snippets",
        global: true
      })
    }
  }
}
