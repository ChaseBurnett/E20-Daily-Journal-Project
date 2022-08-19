const entries = [
    
{
    id: 1,
    date: "07/05/22",
    concept: "First Day",
    entry: "Today we introduced ourselves, met our instructors and were put into groups.",
    mood: "Great!"
},
{
    id: 2,
    date: "07/09/22",
    concept: "Vs Code",
    entry: "We worked on getting Vs Code set up on our laptops and how to accesss it through Terminal.",
    mood: "Okay" 
},
{
    id: 3,
    date: "07/11/22",
    concept: "Lightening Exercises",
    entry: "We went over the lightening exercises that we were given as homework.",
    mood: "Great!"
},
{
    id: 4,
    date: "07/12/22",
    concept: "Group Project",
    entry: "We were given a project to do as a group today that is due in a few weeks. I am excited to see how it comes out!",
    mood: "Great!"},
{
    id: 5,
    date: "07/16/22",
    concept: "Lab Day",
    entry: "We mostly worked with our groups today and decided what we would like our project to look like. I think it went well?",
    mood: "Okay"
},
{
    id: 6,
    date: "07/18/22",
    concept: "Git Hub",
    entry: " We learned how to push things up to our profile in GitHub and I think my brain is going to explode.",
    mood: "Meh"
},
{
    id: 7,
    date: "07/30/22",
    concept: "Presentation Day",
    entry: "Today we presented our group project. I think we did really good! We were also assigned to a new group and I am excited to meet new people.",
    mood: "Great!"
}
] 

const displayEntries = () => {

let html = "";
for(let i = 0; i < entries.length; i++){
    html += `<div class="entries">
    <p><u>${entries[i].date}</u></p>
    <p><strong>${entries[i].concept}</strong></p>
    <p>${entries[i].entry}</p>
    <p>${entries[i].mood}</p>
    </div>`
}

document.getElementById("entries").innerHTML = html;
}

displayEntries();