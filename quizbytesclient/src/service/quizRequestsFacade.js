import {baseUrl} from '../utility/serverAddress';

export async function getQuizAsync(chapter, difficulty, count, token) {
    const encodedChapter = encodeURIComponent(chapter);
    const url = `${baseUrl}api/v1/quiz?chapter=${encodedChapter}&difficulty=${difficulty}&count=${count}`
    const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    };
    const response = await fetch(url, { method: "GET", headers });

    if (!response.ok) {
        throw new Error(`Failed to get quiz`);
    }

    const data = await response.json();
    return data;
}

export async function submitQuizAsync(quiz, token) {
    const url = `${baseUrl}api/v1/quiz`;
    const body = JSON.stringify(quiz);
    const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    };

    const response = await fetch(url, { method: "POST", body, headers });

    if (!response.ok) {
        throw new Error(`Failed to submit quiz`);
    }
}

export async function getQuizResultAsync(token) {
    const url = `${baseUrl}api/v1/quiz/result`;
    const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    };
    const response = await fetch(url, { method: "GET", headers });

    if (!response.ok) {
        throw new Error(`Failed to get quiz`);
    }

    const data = await response.json();
    return data;
}

