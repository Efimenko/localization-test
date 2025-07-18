/** @type {import('@lingui/conf').LinguiConfig} */
export default {
  locales: ['en', 'es'],
  sourceLocale: 'en',
  catalogs: [
    {
      path: 'src/locales/{locale}/messages',
      include: ['src/'],
      exclude: ['**/node_modules/**']
    }
  ],
  format: 'po',
  compileNamespace: 'es'
}