const BASE_URL = "https://api.github.com";

const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

const headers = {
    "Accept": "application/vnd.github+json",
    ...(GITHUB_TOKEN && { "Authorization": `Bearer ${GITHUB_TOKEN}` })
};

export const fetchUser = async (username) => {
    try {
        const response = await fetch(`${BASE_URL}/users/${username}`, { headers });
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error(error.message);
        throw error;
    }
};

export const fetchRepos = async (username) => {
    try {
        const response = await fetch(`${BASE_URL}/users/${username}/repos`, { headers });
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error(error.message);
        throw error;
    }
};