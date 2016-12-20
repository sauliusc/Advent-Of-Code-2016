module.exports = function Day19() {
    const fs = require('fs');
    const util = require('util');
    var Stopwatch = require("node-stopwatch").Stopwatch;
    var input = 3018458;
    //var input = 5;

    function generateElfes(count) {
        var elfes = [];
        for (var i = 0; i < count; i++)
            elfes.push(i + 1);
        return elfes;
    }

    this.part1 = function () {
        var stopwatch = Stopwatch.create();
        stopwatch.start();
        var elfes = generateElfes(input);
        var startPosition = 0;
        while (elfes.length > 1) {
            var newArray = [];
            for (var i = startPosition; i < elfes.length; i += 2) {
                newArray.push(elfes[i]);
                if ((i + 1) === elfes.length) {
                    startPosition = 1;
                } else {
                    startPosition = 0;
                }
            }
            elfes = newArray;
        }
        stopwatch.stop();
        console.log(util.format('Day 19 part 1 answer: %s. Total duration: %s ms', elfes[0], stopwatch.elapsedMilliseconds));
    }
    this.part2 = function () {
        var stopwatch = Stopwatch.create();
        stopwatch.start();
        stopwatch.stop();
        console.log(util.format('Day 19 part 2 answer: %s. Total duration: %s ms', 321, stopwatch.elapsedMilliseconds));
    }
}