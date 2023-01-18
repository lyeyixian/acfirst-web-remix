import { LOREM_PARA_1, LOREM_PARA_2, LOREM_PARA_3 } from '~/utils/constants'

export default function ProductsIndexRoute() {
  return (
    <div>
      <p>ecommerce style, have filtering and sorting.</p>
      <p>categorise by: kitchen, bathroom, living room, car poch</p>

      <br />
      <p>{LOREM_PARA_1}</p>
      <br />
      <p>{LOREM_PARA_2}</p>
      <br />
      <p>{LOREM_PARA_3}</p>
    </div>
  )
}
