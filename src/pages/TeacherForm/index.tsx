import React, {FormEvent, useState} from "react";
import {useHistory} from "react-router-dom"
import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";
import Textarea from "../../components/Textarea";
import Select from "../../components/Select";
import api from "../../services/api";

import "./styles.css";

import warningIcon from "../../assets/images/icons/warning.svg";


function TeacherForm() {
    const history = useHistory();

    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [bio, setBio] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [subject, setSubject] = useState('')
    const [cost, setCost] = useState('')

    const [scheduleItems, setScheduleItems] = useState([
        {week_day: 0, from: '', to: ''}
    ]);

    function addNewItem() {
        setScheduleItems([
            ...scheduleItems,
            {week_day: 0, from: '', to: ''}
        ]);
        return
    }

    function handleCreateClass(e: FormEvent) {
        e.preventDefault();

        api.post('classes', {
            name,
            avatar,
            whatsapp,
            bio,
            cost: Number(cost),
            subject,
            schedule: scheduleItems
        }).then(() => {
            alert('Register done successfully')
            history.push('/')
        }).catch(() => {
            alert('Something went wrong')
        })

        console.log({
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost,
            scheduleItems
        })
    }

    function setScheduleItemValue(position: number, field: string, value: string) {
        const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
            if (index === position) {
                return { ...scheduleItem, [field]: value };
            }

            return scheduleItem;
        });

        setScheduleItems(updatedScheduleItems);
    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
                title="It's amazing your will to teach."
                description="First step: fulfill the form"
            />

            <main>
                <form onSubmit={handleCreateClass}>
                    <fieldset>
                        <legend>Your data</legend>
                        <Input
                            label="Full name"
                            name="name"
                            value={name}
                            onChange={(e) => {
                            setName(e.target.value)
                        }}
                        />
                        <Input
                            label="Avatar"
                            name="avatar"
                            value={avatar}
                            onChange={(e) => {
                                setAvatar(e.target.value)}}
                        />
                        <Input
                            label="WhatsApp"
                            name="whatsapp"
                            value={whatsapp}
                            onChange={(e) => {
                                setWhatsapp(e.target.value)}}
                        />
                        <Textarea
                            label="Biografy"
                            name="bio"
                            value={bio}
                            onChange={(e) => {
                                setBio(e.target.value)}}
                        />
                    </fieldset>
                    <fieldset>
                        <legend>About the class</legend>
                        <Select
                            label="Discipline"
                            name="subject"
                            value={subject}
                            onChange={(e) =>{
                                setSubject(e.target.value)
                            }}
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
                        <Input
                            label="Cost per hour"
                            name="cost"
                            value={cost}
                            onChange={(e) =>{
                                setCost(e.target.value)
                            }}
                        />
                    </fieldset>

                    <fieldset>
                        <legend>Available timetable
                            <button type="button" onClick={addNewItem}>+ New schedule</button>
                        </legend>
                        {scheduleItems.map((scheduleItem, index) => {
                            return (
                                <div key={scheduleItem.week_day} className="schedule-item">
                                    <Select label="Day of the week"
                                            name="subject"
                                            value={scheduleItem.week_day}
                                            onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
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
                                        label="From"
                                        name="from"
                                        value={scheduleItem.from}
                                        type="time"
                                        onChange={e => setScheduleItemValue(index, 'from', e.target.value)}
                                    />
                                    <Input
                                        label="To"
                                        name="to"
                                        value={scheduleItem.to}
                                        type="time"
                                        onChange={e => setScheduleItemValue(index, 'to', e.target.value)}
                                    />
                                </div>
                            )
                        })}
                    </fieldset>
                    <footer>
                        <p>
                            <img src={warningIcon} alt="Important warning"/>
                            Important! <br/>
                            Fulfill all the fields
                        </p>
                        <button type="submit">Register</button>
                    </footer>
                </form>
            </main>
        </div>
    )
}

export default TeacherForm;