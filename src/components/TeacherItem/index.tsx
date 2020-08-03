import React from 'react';
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/60220411?s=460&u=7a872a16b49a99ae43d93cb8400c103a7022ec6c&v=4" alt="Wagner Rosa"/>
                <div>
                    <strong>Wagner Rosa</strong>
                    <span>Physics</span>
                </div>
            </header>
            <p>
                Making physics from nothing because the vacuum has properties!
                <br/><br/>
                May the force be with us
            </p>
            <footer>
                <p>
                    Price/hour
                    <strong>€40</strong>
                </p>
                <button>
                    <img src={whatsappIcon} alt="WhatsApp"/>
                    Contact
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;