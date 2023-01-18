import { NavLink } from '@remix-run/react'

export default function Brand() {
  return (
    <NavLink to="/" className="flex items-center">
      <img
        src="/logo.png"
        className="h-9 mr-2 mt-1 sm:h-14"
        alt="Acfirst Logo"
      />
      <span className="self-center text-xl font-semibold whitespace-nowrap">
        Acfirst
      </span>
    </NavLink>
  )
}
