export default function Copyrights() {
  return (
    <span className="text-sm text-gray-500 sm:text-center">
      © {new Date().getFullYear().toString()}{' '}
      <a href="/" className="hover:underline">
        Acfirst Ceramics Sdn. Bhd
      </a>
      . All Rights Reserved.
    </span>
  )
}
