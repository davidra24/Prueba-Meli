/**
 * 
 * @param {String} query palabra clave para busqueda en server
 * @returns Llamado a API items?search=:keyword
 */
export const get = async (query) => {
    return await fetch(query)
        .then(response => response.json())
        .then(data => data)
}
