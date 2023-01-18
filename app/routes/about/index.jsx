import { LOREM_PARA_1, LOREM_PARA_2, LOREM_PARA_3 } from '~/utils/constants'

export default function AboutIndexRoute() {
  return (
    <div>
      <div className="images">
        <p>Picture of group photos of employees</p>
      </div>
      <div className="descriptions">
        <p>Some descriptions of the company</p>
      </div>

      <br />
      <p>{LOREM_PARA_1}</p>
      <br />
      <p>{LOREM_PARA_2}</p>
      <br />
      <p>{LOREM_PARA_3}</p>
    </div>
  )
}
