import { NavLink } from '@remix-run/react'

export default function NavList() {
  const navLinkClass = ({ isActive }) =>
    isActive
      ? 'block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0'
      : 'block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0'

  return (
    <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
      <li>
        <NavLink to="/" className={navLinkClass} end>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className={navLinkClass}>
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/products" className={navLinkClass}>
          Products
        </NavLink>
      </li>
      <li>
        <NavLink to="/projects" className={navLinkClass}>
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink to="/stores" className={navLinkClass}>
          Locate Us
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" className={navLinkClass}>
          Contact Us
        </NavLink>
      </li>
    </ul>
  )
}
