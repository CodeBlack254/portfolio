import React from 'react'

const Services = () => {
  return (
      <div className='services' id='myservices'>
          <div className="container"> <br></br>
              <h3 className='service_header'> My Services </h3> <br></br>
              <div className="row">
                  <div className="col-3">
                      <div className="card">
                      <svg className='card-img-top' xmlns="http://www.w3.org/2000/svg" viewBox="0 -190 800 950">
                        <circle className='svgcircle' cx="300" cy="300" r="370" />
                        <path d="M384 96V320H64L64 96H384zM64 32C28.7 32 0 60.7 0 96V320c0 35.3 28.7 64 64 64H181.3l-10.7 32H96c-17.7 0-32 14.3-32 32s14.3 32 32 32H352c17.7 0 32-14.3 32-32s-14.3-32-32-32H277.3l-10.7-32H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm464 0c-26.5 0-48 21.5-48 48V432c0 26.5 21.5 48 48 48h64c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48H528zm16 64h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H544c-8.8 0-16-7.2-16-16s7.2-16 16-16zm-16 80c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H544c-8.8 0-16-7.2-16-16zm32 160a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/>
                      </svg>
                          <div className="card-body">
                              <h5 className="card-title">Web Design</h5>
                              <p className="card-text">
                                    I design websites with user experience in mind. 
                                    Prioritizing clear navigation, responsive layouts, and visual appeal.</p>                           
                          </div>
                      </div>
                  </div>

                  <div className="col-3">
                      <div className="card">
                      <svg className='card-img-top' xmlns="http://www.w3.org/2000/svg" viewBox="0 -190 800 950">
                      <circle className='svgcircle' cx="300" cy="300" r="370" />
                        <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/>
                        </svg>
                          <div className="card-body">
                              <h5 className="card-title">Web Development</h5>
                              <p className="card-text">
                                    I develop websites and web applications, emphasizing functionality, 
                                    clean code, and efficient solutions.
                              </p>
                              
                          </div>
                      </div>
                  </div>
                  <div className="col-3">
                      <div className="card">
                      <svg className='card-img-top' xmlns="http://www.w3.org/2000/svg" viewBox="0 -190 800 950">
                      <circle className='svgcircle' cx="300" cy="300" r="370" />
                        <path d="M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM224 448a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM304 64H80V384H304V64z"/>
                      </svg>
                          <div className="card-body">
                              <h5 className="card-title">Mobile Development</h5>
                              <p className="card-text">
                                    In mobile app development, I prioritize efficiency, functionality, 
                                    and clean code, aiming for robust features, high performance, 
                                    and a seamless user experience.
                              </p>
                              
                          </div>
                      </div>
                  </div>
                  <div className="col-3">
                      <div className="card">
                      <svg className='card-img-top' xmlns="http://www.w3.org/2000/svg" viewBox="0 -190 800 950">
                      <circle className='svgcircle' cx="300" cy="300" r="370" />
                      <path d="M256 64H384v64H256V64zM240 0c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h48v32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96v32H80c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48H240c26.5 0 48-21.5 48-48V368c0-26.5-21.5-48-48-48H192V288H448v32H400c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48H560c26.5 0 48-21.5 48-48V368c0-26.5-21.5-48-48-48H512V288h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H352V192h48c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H240zM96 448V384H224v64H96zm320-64H544v64H416V384z"/></svg>
                          <div className="card-body">
                              <h5 className="card-title">REST Apis</h5>
                              <p className="card-text">
                              In crafting REST APIs, my emphasis lies in developing efficient, functional, and scalable solutions.
                              </p>
                              
                          </div>
                      </div>
                  </div>
              </div> <br></br>
          </div>
      </div> 
  )
}

export default Services
