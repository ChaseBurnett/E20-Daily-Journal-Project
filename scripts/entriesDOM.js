import {deleteJournalEntry, editJournalEntry, getJournalEntries} from './entries.js'
import {addNewEntry} from './entries.js'

export const displayEntries = () => {
const journalEntries = getJournalEntries();
let html = "";
for(let i = 0; i < journalEntries.length; i++){
    html += `<div class="entries">
    <p><u>${journalEntries[i].date}</u></p>
    <p><strong>${journalEntries[i].concept}</strong></p>
    <p>${journalEntries[i].entry}</p>
    <p>${journalEntries[i].mood}</p>
    <button class="delete-btn" id="deleteButton--${journalEntries[i].id}">DELETE ENTRY</button>
    <button class="edit-btn" id="editButton--${journalEntries[i].id}">EDIT ENTRY</button>
    </div>`
}
    return html
}

document.addEventListener("click", (e) => {
    if(e.target.id === "record-btn"){
        const dateElement = document.querySelector("input[name=entryDate]")?.value
        console.log(dateElement)

        const conceptsCoveredElement = document.querySelector("input[name=conceptsCovered]")?.value
        console.log(conceptsCoveredElement)

        const journalEntriesElement = document.querySelector("input[name=journalEntry]")?.value
        console.log(journalEntriesElement)

        const moodElement = document.getElementById("mood")?.value
        console.log(moodElement)

        let newEntry = {
            date: dateElement,
            concept: conceptsCoveredElement,
            entry: journalEntriesElement,
            mood: moodElement
        };
        addNewEntry(newEntry)
        console.log(newEntry)
    }
})

document.addEventListener("click", click => {
    if(click.target.id.startsWith("deleteButton--")) {
        const journalEntryId = click.target.id.split("--")[1]
        deleteJournalEntry(parseInt(journalEntryId))
    }
})

document.addEventListener("click", click => {
    if(click.target.id.startsWith("editButton--")) {
        const journalEntryId = click.target.id.split("--")[1]
        editJournalEntry(parseInt(journalEntryId))
    }
})

