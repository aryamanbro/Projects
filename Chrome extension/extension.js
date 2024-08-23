let myLeads = []
const inputEl = document.getElementById("input")
const inputbtn = document.getElementById("inputbtn")
const ulEl = document.getElementById("ul-el")

inputbtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
})

function renderLeads() {
let listItems = ""
for ( let i = 0 ; i < myLeads.length ; i++)
{
    listItems += `
                <li>
                    <a target = '_blank' href = "${myLeads[i]}">
                        ${myLeads[i]}
                    </a>
                </li>`
}

ulEl.innerHTML = listItems
}