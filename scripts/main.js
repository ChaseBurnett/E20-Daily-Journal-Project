
import { fetchEntries } from "./entries.js";
import {displayEntries} from "./entriesDOM.js"

const mainContainer = document.getElementById('entries')

const render = async () => {
    await fetchEntries()
    mainContainer.innerHTML = displayEntries()
    
}

render()

document.addEventListener('stateChanged', event => {
    render()
})