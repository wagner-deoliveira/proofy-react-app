import React from "react";
import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";
import Input from "../../components/Input";

import "./styles.css";




function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="These are the available Proffys.">
                <form id="search-teachers">
                    <Input label="Discipline" name="subject"/>
                    <Input label="Day of the week" name="week_day" />
                    <Input type="time" label="Schedule" name="time" />
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