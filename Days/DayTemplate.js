module.exports = function DayT() {
    const fs = require('fs');
    var Stopwatch = require("node-stopwatch").Stopwatch;
    var input = fs.readFileSync('./Data/Day6Data.txt', 'utf8').trim();
    //var input = '';
    var inputLines = input.split('\n');
    this.part1 = function () {
        var stopwatch = Stopwatch.create();
        stopwatch.start();
        stopwatch.stop();
        console.log(util.format('Day T part 1 answer: %s. Total duration: %s ms', 123, stopwatch.elapsedMilliseconds));
    }
    this.part2 = function () {
        var stopwatch = Stopwatch.create();
        stopwatch.start();
        stopwatch.stop();
        console.log(util.format('Day T part 1 answer: %s. Total duration: %s ms', 321, stopwatch.elapsedMilliseconds));
    }
}}