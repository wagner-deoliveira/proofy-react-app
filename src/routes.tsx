import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import TeacherList from "./pages/TeacherList";
import TeacherForm from "./pages/TeacherForm";

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" element={<Landing />} />
            <Route path="/study" element={<TeacherList />} />
            <Route path="/give-classes" element={<TeacherForm />} />
        </BrowserRouter>
    )
}

export default Routes;