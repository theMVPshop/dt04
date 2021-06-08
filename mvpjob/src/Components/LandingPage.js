import React from 'react';
import './landingpage';


export const Navigation = (props) => {
    return (
      <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
        <div className='container'>
          <div className='navbar-header'>
            <button
              type='button'
              className='navbar-toggle collapsed'
              data-toggle='collapse'
              data-target='#bs-example-navbar-collapse-1'
            >
              {' '}
              <span className='sr-only'>Toggle navigation</span>{' '}
              <span className='icon-bar'></span>{' '}
              <span className='icon-bar'></span>{' '}
              <span className='icon-bar'></span>{' '}
            </button>
            <a className='navbar-brand page-scroll' href='#page-top'>
              Medical Externiship App
            </a>{' '}
          </div>
  
          <div
            className='collapse navbar-collapse'
            id='bs-example-navbar-collapse-1'
          >
            <ul className='nav navbar-nav navbar-right'>
              <li>
                <a href='#Jobtype' className='page-scroll'>
                  Type of Jobs 
                </a>
              </li>
              <li>
               
                
              </li>
              <li>
                <a href='#JobLocation' className='page-scroll'>
                  Locations
                </a>
              </li>
              <li>
                <a href='#JobSearch' className='page-scroll'>
                  Jobs available
                </a>
              </li>
              <li>
                <a href='#About us' className='page-scroll'>
                  The team <img></img>
                </a>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    )
  }

export default LandingPage