import React from "react";
import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";
import Input from "../../components/Input";
import Select from "../../components/Select";

import "./styles.css";





function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="These are the available Proffys.">
                <form id="search-teachers">
                    <Select
                        label="Discipline"
                        name="subject"
                        options={[
                            {value: 'Arts', label: 'Arts'},
                            {value: 'Physics', label: 'Physics'},
                            {value: 'Chemistry', label: 'Chemistry'},
                            {value: 'History', label: 'History'},
                            {value: 'Biology', label: 'Biology'},
                            {value: 'Maths', label: 'Maths'},
                            {value: 'English', label: 'English'},
                            {value: 'Philosophy', label: 'Philosophy'}
                        ]}
                    />
                    <Select
                        label="Day of the week"
                        name="subject"
                        options={[
                            {value: '0', label: 'Sunday'},
                            {value: '1', label: 'Monday'},
                            {value: '2', label: 'Tuesday'},
                            {value: '3', label: 'Wednesday'},
                            {value: '4', label: 'Thursday'},
                            {value: '5', label: 'Friday'},
                            {value: '6', label: 'Saturday'},
                        ]}
                    />
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