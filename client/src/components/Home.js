import React from 'react'
import Header from './Header'
import Footer from './Footer'
 

const Home = () => {
  return ( 
    <div>
      <Header />
        {/* <!-- Content section 1--> */}
          <section id="scroll">
              <div className="container px-5">
                  <div className="row gx-5 align-items-center">
                      <div className="col-lg-6 order-lg-2">
                          <div className="p-5"><img className="img-fluid rounded-circle" src="assets/img/01.jpg" alt="..." /></div>
                      </div>
                      <div className="col-lg-6 order-lg-1">
                          <div className="p-5">
                              <h2 className="display-4">For those about to rock...</h2>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
        {/* <!-- Content section 2--> */}
          <section>
              <div className="container px-5">
                  <div className="row gx-5 align-items-center">
                      <div className="col-lg-6">
                          <div className="p-5"><img className="img-fluid rounded-circle" src="assets/img/02.jpg" alt="..." /></div>
                      </div>
                      <div className="col-lg-6">
                          <div className="p-5">
                              <h2 className="display-4">We salute you!</h2>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
        {/* <!-- Content section 3--> */}
          <section>
              <div className="container px-5">
                  <div className="row gx-5 align-items-center">
                      <div className="col-lg-6 order-lg-2">
                          <div className="p-5"><img className="img-fluid rounded-circle" src="assets/img/03.jpg" alt="..." /></div>
                      </div>
                      <div className="col-lg-6 order-lg-1">
                          <div className="p-5">
                              <h2 className="display-4">Let there be rock!</h2>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
        <Footer />
      </div>
  )
}

export default Home;