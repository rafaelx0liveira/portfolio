import { useState } from "react"

const Qualification = () => {

    const [toggleQualification, setToggleQualification] = useState(1);

    const toggleTabs = (index: number) => {
        setToggleQualification(index);
    }

    return (
        <section className="qualification section">
            <h2 className="section-title">Qualification</h2>
            <span className="section-subtitle">My personal journey</span>

            <div className="qualification-container container">
                <div className="qualification-tabs">
                    <div className={
                        toggleQualification === 1 ? 
                        "qualification-button qualification-active button-flex"
                        : "qualification-button button-flex"
                    }
                    onClick={() => toggleTabs(1)}
                    >
                        <i className="uil uil-graduation-cap qualification-icon"></i>
                        Education
                    </div>

                    <div className={
                        toggleQualification === 2 ? 
                        "qualification-button qualification-active button-flex"
                        : "qualification-button button-flex"
                    }
                    onClick={() => toggleTabs(2)}
                    >
                        <i className="uil uil-briefcase-alt qualification-icon"></i>
                        Experience
                    </div>
                </div>

                <div className="qualification-sections">
                    <div className={
                        toggleQualification === 1 ? 
                        "qualification-content qualification-content-active"
                        : "qualification-content"
                    }>
                        <div className="qualification-data">
                            <div>
                                <h3 className="qualification-title">
                                    Computer Science
                                </h3>
                                <span className="qualification-subtitle">
                                    PUC-SP - Bachelor Degree
                                </span>
                                <div className="qualification-calendar">
                                    <i className="uil uil-calendar-alt"></i> 2020 - 2023
                                </div>
                            </div>

                            <div>
                                <span className="qualification-rounder"></span>
                                <span className="qualification-line"></span>
                            </div>
                        </div>

                        <div className="qualification-data">
                            <div></div>

                            <div>
                                <span className="qualification-rounder"></span>
                                <span className="qualification-line"></span>
                            </div>
                            <div>
                                <h3 className="qualification-title"> 
                                    FullStack Development
                                </h3>
                                <span className="qualification-subtitle">
                                    Digital House Brazil - School of Technology
                                </span>
                                <div className="qualification-calendar">
                                    <i className="uil uil-calendar-alt"></i> 2022 - 2023
                                </div>
                            </div>
                        </div>

                        <div className="qualification-data">
                            <div>
                                <h3 className="qualification-title">
                                    Technical Course in Industrial Automation
                                </h3>
                                <span className="qualification-subtitle">
                                    IFSP - Federal Institute of São Paulo
                                </span>
                                <div className="qualification-calendar">
                                    <i className="uil uil-calendar-alt"></i> 2018 - 2019
                                </div>
                            </div>

                            <div>
                                <span className="qualification-rounder"></span>
                                <span className="qualification-line"></span>
                            </div>
                        </div>
                    </div>

                    <div className={
                        toggleQualification === 2 ? 
                        "qualification-content qualification-content-active"
                        : "qualification-content"
                    }>
                        <div className="qualification-data">
                            <div>
                                <h3 className="qualification-title">
                                    Software Engineering Analyst
                                </h3>
                                <span className="qualification-subtitle">
                                    Raízen - Brazil
                                </span>
                                <div className="qualification-calendar">
                                    <i className="uil uil-calendar-alt"></i> 2024 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification-rounder"></span>
                                <span className="qualification-line"></span>
                            </div>
                        </div>

                        <div className="qualification-data">
                            <div></div>

                            <div>
                                <span className="qualification-rounder"></span>
                                <span className="qualification-line"></span>
                            </div>
                            <div>
                                <h3 className="qualification-title"> 
                                    Systems Development Analyst
                                </h3>
                                <span className="qualification-subtitle">
                                    Raízen - Brazil
                                </span>
                                <div className="qualification-calendar">
                                    <i className="uil uil-calendar-alt"></i> 2023 - 2024
                                </div>
                            </div>
                        </div>

                        <div className="qualification-data">
                            <div>
                                <h3 className="qualification-title">
                                    Systems Development Intern
                                </h3>
                                <span className="qualification-subtitle">
                                    Raízen - Brazil
                                </span>
                                <div className="qualification-calendar">
                                    <i className="uil uil-calendar-alt"></i> 2022 - 2023
                                </div>
                            </div>

                            <div>
                                <span className="qualification-rounder"></span>
                                <span className="qualification-line"></span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification