import { NavLink } from '@remix-run/react'

import { ClockIcon, LocationMarkerIcon, MailIcon, PhoneIcon } from '../icons'
import Copyrights from './copyrights'
import FooterCategories from './footer-categories'
import FooterFollowUs from './footer-follow-us'
import FooterLegal from './footer-legal'
import FooterSocialMedia from './footer-social-media'

export default function Footer() {
  return (
    <footer className="container mx-auto p-4 bg-white">
      <div className="md:flex md:justify-between">
        <div className="text-gray-600 mb-6 md:mb-0">
          <NavLink to="/" className="flex items-center">
            <img src="/logo.png" className="mr-2 h-14" alt="Acfirst Logo" />
            <span className="mb-3 self-center text-xl whitespace-nowrap">
              Acfirst Ceramics Sdn. Bhd.
            </span>
          </NavLink>
          <div className="text-sm space-y-2 sm:max-w-sm sm:mr-8">
            <div className="flex items-center">
              <LocationMarkerIcon />
              <div>
                Lot 411, Jalan Kelubi, Kampung Kelubi Luar, 06000 Jitra, Kedah,
                Malaysia
              </div>
            </div>
            <div className="flex items-center">
              <PhoneIcon />
              <div>+604-917 8928</div>
            </div>
            <div className="flex items-center">
              <MailIcon />
              <div>acfirst55@gmail.com</div>
            </div>
            <div className="flex items-center">
              <ClockIcon />
              <div>9am to 6:30pm everyday except Friday</div>
            </div>
          </div>
          <FooterSocialMedia />
        </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 sm:mt-3">
          <FooterCategories />
          <FooterFollowUs />
          <FooterLegal />
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
      <div className="text-center">
        <Copyrights />
      </div>
    </footer>
  )
}
