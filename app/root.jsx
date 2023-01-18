import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'

import Footer from './components/footer'
import NavBar from './components/navbar'

import tailwindStylesUrl from './styles/app.css'

export const links = () => {
  return [
    {
      rel: 'stylesheet',
      href: tailwindStylesUrl,
    },
  ]
}

export const meta = () => ({
  charset: 'utf-8',
  title: 'New Remix App',
  viewport: 'width=device-width,initial-scale=1',
})

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <script src="https://unpkg.com/flowbite@1.5.5/dist/flowbite.js"></script>
        <NavBar />
        <Outlet />
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
