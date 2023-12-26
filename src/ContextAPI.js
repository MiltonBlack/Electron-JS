import React, { useEffect } from 'react'
import axios from "axios";
import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
};

const ContextAPIProvider = ({ children }) => {
    const BASE_URL = 'http://localhost:3005/api';

    // States
    const [user, setUser] = useState(null);
    const [token, setToken] = useState('');
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [info, setInfo] = useState(null);
    const [raw, setRaw] = useState('');
    const [courses, setCourses] = useState(null);
    const [questions, setQuestions] = useState(null);
    const [options, setOptions] = useState(null);

    // Functions
    // Signup Lecturer
    async function CreateLecturer(firstName, lastName, email, password, accessID, schoolName) {
        setError("");
        setLoading(true);
        const parameters = {
            email,
            firstName,
            lastName,
            schoolName,
            password,
            accessID
        }
        await axios.post(`${BASE_URL}/auth/signup`, parameters).then(res => {
            if (res.data) {
                setSuccess(true);
            }
        }).catch(error => {
            if (error) {
                const message = (error.response && error.response.data && error.response.data.message) ||
                    error.message || error.toString();
                setError(message)
            }
        });
        setLoading(false);
    }

    // Login Lecturer
    async function LoginUser(email, password, accessID) {
        setError("");
        setLoading(true);
        await logout();
        setRaw(email);
        const parameters = {
            email,
            password,
            accessID,
        }
        await axios.post(`${BASE_URL}/auth/signin`, parameters).then(res => {
            if (res.data) {
                setUser(res.data);
                console.log(res.data.token);
                setToken(res.data.token)
                localStorage.setItem("user", JSON.stringify(res.data));
                localStorage.setItem("token", JSON.stringify(res.data.token));
            }
        }).catch(error => {
            if (error) {
                const message = (error.response && error.response.data && error.response.data.message) ||
                    error.message || error.toString();
                setError(message)
            }
        });
        setLoading(false);
    }

    useEffect(() => {
        if (!user) {
            runObj();
            TokenF();
        } else {
            setInfo(user);
            setToken(user?.token);
        }
    }, [user]);

    async function runObj() {
        await setUser(JSON.parse(localStorage.getItem("user")));
    }
    console.log(user);
    
    async function TokenF(){
        await setToken(JSON.parse(localStorage.getItem("token")));
    }
    console.log(token);
    
    async function RegisterCourse(user_id, title, courseCode, semester, timeAllowed, lecturer) {
        setError("");
        setLoading(true);
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        const data = {
            user_id, title, courseCode, semester, timeAllowed, lecturer
        }
        await axios.post(`${BASE_URL}/course/add`, data, config).then(res => res.data).catch(err => console.log(err));
        console.log("Added Successfully...");
        setLoading(false);
    }

    async function getCourses() {
        setError("");
        setLoading(true);
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        await axios.get(`${BASE_URL}/course/all`, config).then(res => setCourses(res.data)).catch(err => console.log(err));
        setLoading(false);
    }

    async function getQuestions() {
        setError("");
        setLoading(true);
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        await axios.get(`${BASE_URL}/question/all`, config).then(res => setQuestions(res.data)).catch(err => console.log(err));
        setLoading(false);
    }

    async function getOptions() {
        setError("");
        setLoading(true);
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        await axios.get(`${BASE_URL}/question/options`, config).then(res => setOptions(res.data)).catch(err => console.log(err));
        setLoading(false);
    }

    useEffect(() => {
        if (token) {
            getCourses()
            getQuestions()
            getOptions()
        }
    }, [token]);

    async function UpdateQuestions(id, body) {
        setError("");
        setLoading(true);
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        await axios.put(`${BASE_URL}/question/edit/${id}`, body, config).then(res => res.data).catch(err => console.log(err));
        setLoading(false);
    }

    async function CreateQuestions(body, option) {
        setError("");
        setLoading(true);
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        await axios.post(`${BASE_URL}/question/add`, body, config).then(res => {
            if (res.data.type === "Objectives") {
                console.log({ question_id: res.data._id, ...option });
                axios.post(`${BASE_URL}/question/add-option`, { question_id: res.data._id, ...option }, config).then(res => res.data).catch(err => console.log(err));
            }
        }).catch(err => console.log(err));
        setLoading(false);
    }

    async function RemoveQuestions(id) {
        setError("");
        setLoading(true);
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        await axios.delete(`${BASE_URL}/question/delete/${id}`, config).then(res => res.data).catch(err => console.log(err));
        setLoading(false);
    }

    async function logout() {
        setUser(null);
        setToken('');
        setInfo(null);
        await localStorage.removeItem("user");
    }

    const values = {
        user,
        success,
        info,
        courses,
        questions,
        options,
        loading,
        error,
        setSuccess,
        CreateLecturer,
        LoginUser,
        RegisterCourse,
        getCourses,
        getOptions,
        getQuestions,
        UpdateQuestions,
        CreateQuestions,
        RemoveQuestions,
        logout
    }
    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}

export default ContextAPIProvider