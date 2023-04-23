import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
const [toggleState, setToggleState] = useState(1);  

const toggleTab = (index) => {
    setToggleState(index);
};

    return (
        <section className="qualification section">
            <h2 className="section__title"> Qualifications </h2>
            <span className="section__subtitle"> My Personel Journey </span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                        onClick={() => toggleTab(1)}
                    >
                        <i className="uil uil-graduation-cap qualification__icon"></i> Education
                    </div>

                    <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                        onClick={() => toggleTab(2)}
                    >
                        <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content "}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title"> HONGKONG Bootstrap4 </h3>
                                <span className="qualification__subtitle"> Marrakech - EMSI </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i> 2022-2023
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title"> HONGKONG React </h3>
                                <span className="qualification__subtitle"> Marrakech - EMSI </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i> 2022 - 2023
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title"> IBM CloudComputing </h3>
                                <span className="qualification__subtitle"> Marrakech - EMSI </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i> 2022 - 2023
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title"> IBM DevOps </h3>
                                <span className="qualification__subtitle"> Marrakech - EMSI </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i> 2022 - 2023
                                </div>
                            </div>
                        </div>
                    </div>

                    <div lassName={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content "}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title"> Internship </h3>
                                <span className="qualification__subtitle"> El Jadida - OCP </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i> 2022 - 2023
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title"> Internship </h3>
                                <span className="qualification__subtitle"> El Jadida - OCP </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i> 2021 - 2022
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title"> Internship </h3>
                                <span className="qualification__subtitle"> El Jadida - OCP </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calender-alt"></i> 2019 - 2020
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification ;