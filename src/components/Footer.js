import React from 'react'
import './Footer.css';

export default function Footer() {
  return (
    <div className='main-footer fixed-bottom'>
        <div className='container fixed'>
            <div className='row'>
                {/* column 1 */}
                <div className='col'>
                    <h3 className='col justify-content-center'>SPOOM!</h3>
                    <ul className='list-unstyled'>
                        {/* <li>0821-1234-1234</li>
                        <li>Jakarta, Indonesia</li>
                        <li>Build Yourself</li> */}
                    </ul>
                </div>
                {/* column 1 */}
             
            </div>
            <row>
                <hr/>
                <div className="row-copyright">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear} Hanly Gunawan | All Right Reserved
                    </p>
                </div>
            </row>
        </div>
    </div>
  )
}
