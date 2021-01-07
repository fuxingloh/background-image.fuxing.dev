module.exports = {
  plugins: [
    require('@tailwindcss/typography'),
  ],
  purge: {
    content: [
      'content/**/*.md',
      'content/**/*.vue',
    ]
  }
}
