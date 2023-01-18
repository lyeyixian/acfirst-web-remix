import { NavLink } from '@remix-run/react'

export default function FooterCategories() {
  return (
    <div>
      <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
        Categories
      </h2>
      <ul className="text-gray-600 space-y-4">
        <li>
          <NavLink to="/" className="hover:underline">
            Kitchen
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className="hover:underline">
            Bathroom
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className="hover:underline">
            Living Room
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className="hover:underline">
            Car Poch
          </NavLink>
        </li>
      </ul>
    </div>
  )
}
