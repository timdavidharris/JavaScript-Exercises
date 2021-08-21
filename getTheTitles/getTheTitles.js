const getTheTitles = function(array) {
    let findTitles = array.map(book => book.title);
    return findTitles;
}

module.exports = getTheTitles;
