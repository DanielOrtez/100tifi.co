const API = 'https://rickandmortyapi.com/api/character/'

async function getData (id) {
  const apiUrl = id ? `${API}${id}` : API

  try {
    const response = await window.fetch(apiUrl)
    const data = response.json()

    return data
  } catch (error) {
    console.error(error)

    return error
  }
}

export default getData
