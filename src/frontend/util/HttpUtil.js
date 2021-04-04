const API_BASE = '/api/items'
const API_QUERY = '?q='

export const getQuery = async (query) => {
    return await fetch(`${API_BASE}${API_QUERY}${query}`)
        .then(response => response.json())
        .then(data => data)
}

export const getItem = async (id) => {
    return await fetch(`${API_BASE}/${id}`)
        .then(response => response.json())
        .then(data => data)
}