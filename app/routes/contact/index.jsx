export default function ContactIndexRoute() {
  return (
    <div>
      <div className="map">
        <p>A map pointing to the location of our stores</p>
      </div>
      <div className="store-location-info">
        <p>Address</p>
        <p>Phone number/WhatsApp number</p>
        <p>Email</p>
        <p>Business Hours</p>
      </div>
      <div className="enquiry-form">
        <h2>Submit Your Enquiry</h2>
        <form action="" method="post">
          <div>
            <label htmlFor="name">
              Name: <input type="text" name="name" id="name" />
            </label>
          </div>
          <div>
            <label htmlFor="email">
              Email: <input type="text" name="email" id="email" />
            </label>
          </div>
          <div>
            <label htmlFor="phone">
              Contact No: <input type="text" name="phone" id="phone" />
            </label>
          </div>
          <div>
            <label htmlFor="message">
              Message:{' '}
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
              ></textarea>
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}
