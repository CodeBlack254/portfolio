import React from 'react'
import pos_pic from '../assets/pos_portfolio.png'
import cashier from '../assets/cashier.png'
import login from '../assets/login.png'
import pos from '../assets/pos.png'

const Portfolio = () => {
    return (
        <div className='portfolio' id='portfolio'>
            <div className='container'>
                <div id="carouselExampleAutoplaying" className="carousel slide carousel-dark" data-bs-ride="carousel">
                    <h3 className='portfolio_header'> Portfolio </h3> <br></br>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={pos} className="d-block w-100" alt="portfolio"></img>
                            <p className='carousel_data'>an advanced pos system</p>
                        </div>
                        <div className="carousel-item">
                            <img src={login} className="d-block w-100" alt="portfolio"></img>
                            <p className='carousel_data'>a simple pos system</p>
                        </div>
                        <div className="carousel-item">
                            <img src={pos_pic} className="d-block w-100" alt="portfolio"></img>
                            <p className='carousel_data'>admin module</p>
                        </div>
                        <div className="carousel-item">
                            <img src={cashier} className="d-block w-100" alt="portfolio"></img>
                            <p className='carousel_data'>cashier module</p>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div><br></br>
        </div>
    )
}

export default Portfolio
