import { baseUrl } from '../utility/serverAddress';

export async function getCompletedChaptersInCourseAsync(courseName, token) {
    const url = `${baseUrl}api/v1/user/progression/${courseName}`;
    const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    };
    try {
        const response = await fetch(url, { method: "GET", headers });

        if (!response.ok) {
            throw new error('Failed to get course progression.');
        }

        const data = await response.json();
        return data;

    } catch (error) {
        return {
            courseName: courseName,
            chapters: []
        };
    }
}