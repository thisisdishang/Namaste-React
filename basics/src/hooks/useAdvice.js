/*
    React Custom Hooks:
    - Components => reusability => UI
    - Custom Hooks => reusability => Logic
    - JavaScript function that start with 'use' word
    - must be called inside a component
    - should have built-in hooks called
*/
import { useState } from "react";

const url = 'https://api.adviceslip.com/advice';

export function useAdvice() {
    const [advices, setAdvices] = useState([]);
    const [error, setError] = useState("");

    const fetchRandomAdvice = async () => {
        try {
            const response = await fetch(url); // Promise 1: resolve of the url
            const data = await response.json(); // Promise 2: resolve of the json
            setAdvices([...advices, { id: advices.length + 1, text: data.slip.advice, category: "philosophical" }])
        }
        catch (error) {
            setError(error.message)
        }
    }

    return { advices, error, fetchRandomAdvice }
}