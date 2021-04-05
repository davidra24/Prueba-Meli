const API_BASE = '/api/items'
const API_QUERY = '?q='

/**
 * 
 * @param {String} query palabra clave para busqueda en server
 * @returns Llamado a API items?search=:keyword
 */
export const getQuery = async (query) => {
    return await fetch(`${API_BASE}${API_QUERY}${query}`)
        .then(response => response.json())
        .then(data => data)
}

/**
 * 
 * @param {String} id ID de producto de busqueda en servidor
 * @returns Llamado de API de items/:id
 */
export const getItem = async (id) => {
    return await fetch(`${API_BASE}/${id}`)
        .then(response => response.json())
        .then(data => data)
}