async function dataFetch(url, option = { method: 'GET' }) {
    const response = await fetch(url, option);
    const data = await response.json();
    return data;
}

export default dataFetch;