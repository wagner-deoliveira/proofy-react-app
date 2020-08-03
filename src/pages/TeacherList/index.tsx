import React from "react";
import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";

import "./styles.css";



function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="These are the available Proffys.">
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Discipline</label>
                        <input type="text" id="subject"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="week_day">Day of the week</label>
                        <input type="text" id="week_day"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="time">Schedule</label>
                        <input type="text" id="time"/>
                    </div>
                </form>
            </PageHeader>

            <main>
                <TeacherItem />
                <TeacherItem />
            </main>
        </div>
    )
}

export default TeacherList;