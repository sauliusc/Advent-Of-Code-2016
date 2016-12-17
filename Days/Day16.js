module.exports = function Day16() {
    const util = require('util');
    var Stopwatch = require("node-stopwatch").Stopwatch;
    //var input = '10000';
    //var length = 20;
    var input = '10111100110001111';
    var length = 35651584;

    function getCheckSum(length) {
        //util.log('part1');
        var finalString = input.split('').map(Number);
        while (finalString.length < length) {
            finalString.push(0);
            for (var i = finalString.length - 2; i >= 0; i--) {
                finalString.push(finalString[i] === 0 ? 1 : 0);
                if (finalString.length === length)
                    break;
            }
            //util.log(finalString.length);
        }
       // util.log('part2');
        while (finalString.length % 2 == 0) {
            var newString = new Array();
            for (var i = 0; i < finalString.length; i += 2) {
                newString.push((finalString[i] == finalString[i + 1]) ? 1 : 0);
            }
            finalString = newString;
            //util.log(finalString.length);
        }
        return finalString.join('');
    }

    this.part1 = function () {
        var stopwatch = Stopwatch.create();
        stopwatch.start();
        var answer = getCheckSum(272);
        stopwatch.stop();
        console.log(util.format('Day 16 part 1 answer: %s. Total duration: %s ms', answer, stopwatch.elapsedMilliseconds));
    }

    this.part2 = function () {
        var stopwatch = Stopwatch.create();
        stopwatch.start();
        var answer = getCheckSum(35651584);
        stopwatch.stop();
        console.log(util.format('Day 16 part 2 answer: %s. Total duration: %s ms', answer, stopwatch.elapsedMilliseconds));
    }
}