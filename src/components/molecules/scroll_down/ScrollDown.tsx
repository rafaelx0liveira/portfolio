import React from 'react'

const ScrollDown = () => {
    return (
        <div className="home-scroll">
            <a href="#about" className="home-scroll-button button-flex">
                <svg width="32px" height="32px" 
                viewBox="0 0 24 24" 
                className='home-scroll-mouse'
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                style={{
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeMiterlimit: 1
                }}
                >
                    <path 
                        className='wheel'
                        d="M11.25 9.99989C11.25 10.4141 11.5858 10.7499 12 10.7499C12.4142 10.7499 12.75 10.4141 12.75 9.99989V6.99989C12.75 6.58567 12.4142 6.24989 12 6.24989C11.5858 6.24989 11.25 6.58567 11.25 6.99989V9.99989Z" 
                        fill="#000000"
                        style={{
                            fill: 'none',
                            stroke: 'var(--title-color)',
                        }}
                        />
                    <path 
                        id='mouse'
                        fill-rule="evenodd" 
                        clip-rule="evenodd" 
                        d="M18.75 9.07422C18.75 5.75272 16.3336 2.92485 13.0527 2.40682C12.3552 2.29669 11.6448 2.29669 10.9473 2.40682C7.6664 2.92485 5.25 5.75272 5.25 9.07422V14.9256C5.25 18.2471 7.6664 21.0749 10.9473 21.593C11.6448 21.7031 12.3552 21.7031 13.0527 21.593C16.3336 21.0749 18.75 18.247 18.75 14.9256L18.75 9.07422ZM12.8188 3.88846C15.3706 4.29137 17.25 6.49083 17.25 9.07422L17.25 14.9256C17.25 17.5089 15.3706 19.7084 12.8188 20.1113C12.2763 20.197 11.7237 20.197 11.1812 20.1113C8.62942 19.7084 6.75 17.5089 6.75 14.9256L6.75 9.07422C6.75 6.49083 8.62943 4.29137 11.1812 3.88846C11.7237 3.8028 12.2763 3.8028 12.8188 3.88846Z" 
                        fill="#000000"
                    />
                </svg>

                <span className="home-scroll-name">
                    Scroll Down
                </span>
                <i className="uil uil-arrow-down home-scroll-arrow"></i>
            </a>
        </div>  
    )
}

export default ScrollDown