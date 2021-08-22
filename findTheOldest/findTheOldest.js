const findTheOldest = function(array) {
    return array.reduce((oldest, currentPerson) => {
        let oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        let currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
        if (oldestAge < currentAge) {
            return currentPerson;
        } else { 
            return oldest;
        }
    });
};

let getAge = function(birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}

module.exports = findTheOldest;
