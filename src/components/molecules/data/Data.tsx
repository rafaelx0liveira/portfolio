import React from 'react'

const Data = () => {
  return (
    <div className="home-data">
        <h1 className="home-title">
            Rafael Oliveira.
        </h1>

        <h3 className="home-subtitle">
            Backend Software Engineer
        </h3>

        <p className="home-description">
            I'm a Software Engineer based in Brazil with a passion for software engineering. I'm always seeking new challenges.
        </p>

        <a href="#contact" className="button button-flex">
            Say Hello 
            <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 32 32" id="message">
                <path fill="var(--container-color)" d="M20.34,9.32l-14-7a3,3,0,0,0-4.08,3.9l2.4,5.37h0a1.06,1.06,0,0,1,0,.82l-2.4,5.37A3,3,0,0,0,5,22a3.14,3.14,0,0,0,1.35-.32l14-7a3,3,0,0,0,0-5.36Zm-.89,3.57-14,7a1,1,0,0,1-1.35-1.3l2.39-5.37A2,2,0,0,0,6.57,13h6.89a1,1,0,0,0,0-2H6.57a2,2,0,0,0-.08-.22L4.1,5.41a1,1,0,0,1,1.35-1.3l14,7a1,1,0,0,1,0,1.78Z">
                </path>
            </svg>
        </a>
    </div>
  )
}

export default Data