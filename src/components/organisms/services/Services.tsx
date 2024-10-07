import { useState } from "react"

const Services = () => {

    const [toggleServices, setToggleServices] = useState(0);

    const toggleModal = (index: number) => {
        setToggleServices(index);
    }

    return (
        <section className="services section" id="services">
            <h2 className="section-title">Services</h2>
            <span className="section-subtitle">What i offer</span>

            <div className="services-container container grid">

                <div className="services-content">
                    <div>
                        <i className="uil uil-arrow services-icon"></i>
                        <h3 className="services-title">
                            Software<br/> Development 
                        </h3>
                    </div>

                    <span className="services-button"
                        onClick={() => toggleModal(1)}
                    >
                        View More 
                        <i className="uil uil-arrow-right services-button-icon"></i>
                    </span>

                    <div className={toggleServices === 1 ? "services-modal active-modal" : "services-modal"}>
                        <div className="services-modal-content">
                            <i onClick={() => toggleModal(0)} className="uil uil-times services-modal-close"></i>

                            <h3 className="services-modal-title">
                                Software Development
                            </h3>
                            <p className="services-modal-description">
                                I develop custom software solutions to meet your business needs, using modern technologies and best programming practices.
                            </p>

                            <ul className="services-modal-services grid">
                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">
                                        Creation of web applications using C#, .NET, React and Angular.
                                    </p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">
                                        Scalable architecture to support business growth.
                                    </p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">
                                        Integration of APIs and external services.
                                    </p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">
                                        Automation of internal processes.
                                    </p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">
                                        Maintenance and improvements of existing systems.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services-content">
                    <div>
                        <i className="uil uil-search services-icon"></i>
                        <h3 className="services-title">
                            Consulting &  <br/> Code Review
                        </h3>
                    </div>

                    <span className="services-button"
                        onClick={() => toggleModal(2)}
                    >
                        View More 
                        <i className="uil uil-arrow-right services-button-icon"></i>
                    </span>

                    <div className={toggleServices === 2 ? "services-modal active-modal" : "services-modal"}>
                        <div className="services-modal-content">
                            <i
                                onClick={() => toggleModal(0)}
                                className="uil uil-times services-modal-close">
                            </i>

                            <h3 className="services-modal-title">
                                Consulting & Code Review
                            </h3>
                            <p className="services-modal-description">
                                I provide technical consulting to improve existing code, focusing on efficiency, security, and best development practices.
                            </p>

                            <ul className="services-modal-services grid">
                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">
                                        Code reviews to identify issues and improvements.
                                    </p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">
                                        Suggestions to improve software architecture.
                                    </p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">
                                        Adoption of best programming practices and design patterns.
                                    </p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">
                                        Performance optimization and database query improvements.
                                    </p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">
                                        Technical mentoring to help teams follow best practices.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services-content">
                    <div>
                        <i className="uil uil-server services-icon"></i>
                        <h3 className="services-title">
                            Backend <br/> Development
                        </h3>
                    </div>

                    <span className="services-button"
                        onClick={() => toggleModal(3)}
                    >
                        View More 
                        <i className="uil uil-arrow-right services-button-icon"></i>
                    </span>

                    <div className={toggleServices === 3 ? "services-modal active-modal" : "services-modal"}>
                        <div className="services-modal-content">
                            <i 
                                onClick={() => toggleModal(0)}
                                className="uil uil-times services-modal-close">
                            </i>

                            <h3 className="services-modal-title">
                                Backend Development
                            </h3>
                            <p className="services-modal-description">
                                I build robust and efficient backends, ensuring the software has a solid and high-performance foundation.
                            </p>

                            <ul className="services-modal-services grid">
                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">
                                        Development of APIs and backend services with .NET Core.
                                    </p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">
                                        Creation of REST APIs for system integration.
                                    </p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">
                                        Management of SQL Server databases.
                                    </p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">
                                        Implementation of secure authentication.
                                    </p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">
                                        Focus on scalable and reliable systems.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services