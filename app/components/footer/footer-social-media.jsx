import { FacebookIcon, InstagramIcon, WhatsappIcon } from '../icons'

export default function FooterSocialMedia() {
  return (
    <div className="flex mt-4 space-x-6">
      <a
        href="https://www.facebook.com/acfirstceramics"
        target="_blank"
        rel="noreferrer noopener"
        className="text-gray-500 hover:text-gray-900"
      >
        <FacebookIcon />
        <span className="sr-only">Facebook page</span>
      </a>
      <a
        href="https://instagram.com/acfirst_changlun?igshid=YmMyMTA2M2Y="
        target="_blank"
        rel="noreferrer noopener"
        className="text-gray-500 hover:text-gray-900"
      >
        <InstagramIcon />
        <span className="sr-only">Instagram page</span>
      </a>
      <a
        href="#"
        target="_blank"
        rel="noreferrer noopener"
        className="text-gray-500 hover:text-gray-900"
      >
        <WhatsappIcon />
        <span className="sr-only">WhatsApp Number</span>
      </a>
    </div>
  )
}
