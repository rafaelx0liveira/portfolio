import React from 'react'

const Info = () => {
    return (
        <div className="about-info grid">
            <div className="about-box">
                <i className="bx bx-briefcase-alt about-icon"></i>
                <h3 className="about-title">Experience</h3>
                <span className="about-subtitle">Software Engineer at Raízen Brasil</span>
            </div>

            <div className="about-box">
                <i className="bx bx-award about-icon"></i>
                <h3 className="about-title">Bachelor Degree</h3>
                <span className="about-subtitle">Computer Science, graduated from PUCSP</span>
            </div>

            <div className="about-box">
                <i className="bx bx-award about-icon"></i>
                <h3 className="about-title">FullStack Development</h3>
                <span className="about-subtitle">Graduated from Digital House Brazil</span>
            </div>
        </div>
    )
}

export default Info