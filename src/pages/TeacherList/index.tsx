import React, {FormEvent, useState} from "react";
import PageHeader from "../../components/PageHeader";
import TeacherItem, {Teacher} from "../../components/TeacherItem";
import Input from "../../components/Input";
import Select from "../../components/Select";
import api from "../../services/api";

import "./styles.css";


function TeacherList() {
    const [teachers, setTeachers] = useState([])
    const [subject, setSubject] = useState('');
    const [weekDay, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    async function searchTeachers(e: FormEvent) {
        e.preventDefault();
        const response = await api.get('classes', {
            params: {
                subject,
                week_day: weekDay,
                time
            }
        });

        setTeachers(response.data);
    }

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="These are the available Proffys.">
                <form id="search-teachers" onSubmit={searchTeachers}>
                    <Select
                        label="Discipline"
                        name="subject"
                        value={subject}
                        onChange={e => setSubject(e.target.value)}
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
                        value={weekDay}
                        onChange={e => setWeekDay(e.target.value)}
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
                    <Input
                        type="time"
                        label="Schedule"
                        name="time"
                        value={time}
                        onChange={e => setTime(e.target.value)}
                    />
                <button type="submit">Search</button>
                </form>
            </PageHeader>

            <main>
                {teachers.map((teacher: Teacher) => {
                    return <TeacherItem key={teacher.id} teacher={teacher}/>
                })}
            </main>
        </div>
    )
}

export default TeacherList;