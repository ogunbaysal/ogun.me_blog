const I18N = {
  useCookie: false,
  alwaysRedirect: true,
  locales: [
    {
      code: 'en',
      iso: 'en-US',
      name: 'English',
      file: 'en/index.js'
    },
    {
      code: 'tr',
      iso: 'tr-TR',
      name: 'Türkçe',
      file: 'tr/index.js'
    }
  ],
  lazy: true,
  seo: false,
  langDir: '/locales/',
  defaultLocale: 'en',
  parsePages: false
}

module.exports = {
  I18N
}
