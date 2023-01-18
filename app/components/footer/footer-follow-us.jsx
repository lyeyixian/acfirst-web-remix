import { NavLink } from '@remix-run/react'

export default function FooterFollowUs() {
  return (
    <div>
      <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
        Company
      </h2>
      <ul className="text-gray-600 space-y-4">
        <li>
          <NavLink to="/about" className="hover:underline">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" className="hover:underline">
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/stores" className="hover:underline">
            Locate Us
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="hover:underline">
            Contact Us
          </NavLink>
        </li>
      </ul>
    </div>
  )
}
