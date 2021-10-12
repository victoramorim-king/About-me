const tempLearning = [{
    "language": "php",
    "level": "intermediario"
}]

const getLocalStorage = () => JSON.parse(localStorage.getItem('dbLearned')) ?? [];
const setLocalStorage = (dbLearned) => localStorage.setItem('dbLearned', JSON.stringify(dbLearned));

const createRow = (learned) => {
    const newRow = document.createElement('tr')
    newRow.innerHTML = ` 
    <td>${learned.course}</td>
    <td>${learned.level}</td>
    `
    document.querySelector('#tb_learning>tbody').appendChild(newRow)

}

const upDateTable = () => {
    const dbLearned = readLearning()
    dbLearned.forEach(createRow)
}

const clearFields = () => {
    const fields = document.querySelectorAll('.newLearned')
    fields.forEach(field => field.value = "")
}

const isValidFields = () => {
    return document.getElementById('form').reportValidity()
}

const saveLearned = () => {
    if (isValidFields()){
        const learned = {
            course: document.getElementById('form_course').value,
            level: document.getElementById('form_level').value
        }
        createLearning(learned)
        clearFields()
    }
}


const deleteLearned = (index) => {
    const dbLearned = readLearning()
    dbLearned.splice(index, 1)
    setLocalStorage(dbLearned)
}

const updateLearned = (index, learned) => {
    const dbLearned = readLearning()
    dbLearned[index] = learned
    setLocalStorage(dbLearned)
}

const readLearning = () => getLocalStorage()

const createLearning = (content) => {
    const dbLearned = getLocalStorage()
    dbLearned.push(content)
    setLocalStorage(dbLearned)
}