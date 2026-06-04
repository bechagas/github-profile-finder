const BASE_URL = "https://api.github.com/users";

export const fetchUser = async (username) => {
    try {
        const response = await fetch(`${BASE_URL}/${username}`);
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error(error.message);
        throw error;
    }
};

export const fetchRepos = async (username) => {
    try {
        const response = await fetch(`${BASE_URL}/${username}/repos`);
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error(error.message);
        throw error;
    }
};