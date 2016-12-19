module.exports = function Day17() {
    const util = require('util');
    var crypto = require('crypto');
    var Stopwatch = require("node-stopwatch").Stopwatch;
    var input = 'ihgpwlah';
    var availableLetters = ['b', 'c', 'd', 'e', 'f'];
    //var input = 'awrkjxxr';
    function canGo(letter) {
        if (letter in availableLetters) {
        }
    }

    function getAvailableDirections(path) {
        var md5 = crypto.createHash('md5').update(path).digest("hex");
        var availableDirections = [];
    }

    this.part1 = function () {
        var stopwatch = Stopwatch.create();
        stopwatch.start();
        stopwatch.stop();
        console.log(util.format('Day 17 part 1 answer: %s. Total duration: %s ms', 123, stopwatch.elapsedMilliseconds));
    }
    this.part2 = function () {
        var stopwatch = Stopwatch.create();
        stopwatch.start();
        stopwatch.stop();
        console.log(util.format('Day 17 part 2 answer: %s. Total duration: %s ms', 321, stopwatch.elapsedMilliseconds));
    }
}