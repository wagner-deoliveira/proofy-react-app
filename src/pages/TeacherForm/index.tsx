import React from "react";
import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";
import Textarea from "../../components/Textarea";
import Select from "../../components/Select";

import "./styles.css";

import warningIcon from "../../assets/images/icons/warning.svg";

function TeacherForm() {
    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
                title="It's amazing your will to teach."
                description="First step: fulfill the form"
            />

            <main>
                <fieldset>
                    <legend>Your data</legend>
                    <Input label="Full name" name="name" />
                    <Input label="Avatar" name="avatar" />
                    <Input label="WhatsApp" name="whatsapp" />
                    <Textarea label="Biografy" name="bio" />
                </fieldset>
                <fieldset>
                    <legend>About the classes</legend>
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
                    <Input label="Cost per hour" name="cost" />
                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Important warning"/>
                        Important! <br/>
                        Fulfill all the fields
                    </p>
                    <button type="button">Register</button>
                </footer>
            </main>
        </div>
    )
}

export default TeacherForm;