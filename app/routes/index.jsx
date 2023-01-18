import { LOREM_PARA_1, LOREM_PARA_2, LOREM_PARA_3 } from '~/utils/constants'

export default function Index() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Welcome to Acfirst</h1>
      <div className="carousel">
        <p>image slideshow, when clicked go to projects page</p>
      </div>
      <p>
        categories of products that the company has, when clicked redirect to
        products page filter by that categories
      </p>
      <p>Popular products and link to that product in the products page</p>

      <br />
      <p>{LOREM_PARA_1}</p>
      <br />
      <p>{LOREM_PARA_2}</p>
      <br />
      <p>{LOREM_PARA_3}</p>
    </div>
  )
}
