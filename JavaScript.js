const tempLearning = [{
    "language": "php",
    "level": "intermediario"
}]

const getLocalStorage = () => JSON.parse(localStorage.getItem('dbLearned')) ?? [];
const setLocalStorage = (dbLearned) => localStorage.setItem('dbLearned', JSON.stringify(dbLearned));

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