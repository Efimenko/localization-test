import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { I18nProvider } from '@lingui/react'
import { i18n } from '@lingui/core'
import { messages as enMessages } from './locales/en/messages.mjs'
import { messages as esMessages } from './locales/es/messages.mjs'
import { LocaleProvider } from './contexts/LocaleContext'

// Import the generated route tree
import { routeTree } from './routeTree.gen'

import './styles.css'
import reportWebVitals from './reportWebVitals.ts'

// Load messages and activate locale
i18n.load({
  en: enMessages,
  es: esMessages,
})
i18n.activate('en')

// Create a new router instance
const router = createRouter({
  routeTree,
  context: {},
  defaultPreload: 'intent',
  scrollRestoration: true,
  defaultStructuralSharing: true,
  defaultPreloadStaleTime: 0,
})

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

// Render the app
const rootElement = document.getElementById('app')
if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <LocaleProvider>
        <I18nProvider i18n={i18n}>
          <RouterProvider router={router} />
        </I18nProvider>
      </LocaleProvider>
    </StrictMode>,
  )
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
