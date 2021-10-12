const tempLearning = [{
    "language": "php",
    "level": "intermediario"
}]

const createLearning = (content) => {
    localStorage.setItem('db_learned', JSON.stringify(content));
}