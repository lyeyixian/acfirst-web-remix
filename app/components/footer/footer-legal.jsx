import { NavLink } from '@remix-run/react'

export default function FooterLegal() {
  return (
    <div>
      <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
        Legal
      </h2>
      <ul className="text-gray-600">
        <li className="mb-4">
          <NavLink to="/privacy" className="hover:underline">
            Privacy Policy
          </NavLink>
        </li>
        <li>
          <NavLink to="terms" className="hover:underline">
            Terms &amp; Conditions
          </NavLink>
        </li>
      </ul>
    </div>
  )
}
