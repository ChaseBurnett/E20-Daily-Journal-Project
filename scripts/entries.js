const api = "http://localhost:8000"

const applicationState = {
    entries : []
}

export const fetchEntries = async () => {
    const entries = await fetch(`${api}/entries`)
    const entriesJS = await entries.json()
    applicationState.entries = entriesJS

}


export const getJournalEntries = () => {
    const copyOfEntries = applicationState.entries.map(entry => ({...entry}))
    return copyOfEntries
  }

  const getNewEntryId = () => {
    let highestEntryId = applicationState.entries.sort((a, b) => b.id - a.id)[0].id
    return highestEntryId + 1
  }

  export const addNewEntry = async (newEntries) => {
    // save entry to Json-Server
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newEntries)
    }

    const response = await fetch(`${api}/entries`, fetchOptions)
    const responseJson = await response.json(response)
    document.dispatchEvent(new CustomEvent ('stateChanged'))
    return responseJson
  }

  export const deleteJournalEntry = async (id) => {
    const fetchOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    }
    const response = await fetch(`${api}/entries/${id}`, fetchOptions)
    const responseJson = await response.json(response)
    document.dispatchEvent(new CustomEvent ('stateChanged'))
    return responseJson

  }

  export const editJournalEntry = async (id) => {
    const fetchOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(id)
    }
    const response = await fetch(`${api}/entries/${id}`, fetchOptions)
    const responseJson = await response.json(response)
    document.dispatchEvent(new CustomEvent ('stateChanged'))
    return responseJson

  }
