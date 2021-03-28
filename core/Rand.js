class Rand {

    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

}

module.exports = new Rand();
