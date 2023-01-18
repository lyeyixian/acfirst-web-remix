import Brand from './brand'
import Cart from './cart'
import NavList from './navlist'

export default function NavBar() {
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Brand />
        <Cart />
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <NavList />
        </div>
      </div>
    </nav>
  )
}
