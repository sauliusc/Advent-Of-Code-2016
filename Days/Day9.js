module.exports = function Day9() {
    const fs = require('fs');
    const util = require('util');
    var Stopwatch = require("node-stopwatch").Stopwatch;
    var input = fs.readFileSync('./Data/Day9Data.txt', 'utf8').trim();
    
    //var input = fs.readFileSync('./Data/Day9DataSample.txt', 'utf8').trim();
    //var input = '';
    //var inputLines = input.split('\n');

    function getDecopressedLine(inputLine) {
        var newLine = [];
        for (var i = 0; i < inputLine.length; i++) {
            if (inputLine[i] === '(') {
                var endPoint = inputLine.indexOf(')', i);
                var size = inputLine.substr(i + 1, endPoint - i - 1);
                //console.log(size);
                //i = endPoint;
                var parts = size.split('x');
                var repeatSize = parseInt(parts[0]);
                var repeatCount = parseInt(parts[1]);
                var repeatPart = inputLine.substr(endPoint + 1, repeatSize);
                for (var rp = 0; rp < repeatCount; rp++) {
                    newLine.push(repeatPart);
                }
                i = endPoint + repeatSize;

            } else {
                newLine.push(inputLine[i]);
            }
        };
        return newLine.join('');
    }

    this.part1 = function () {
        var stopwatch = Stopwatch.create();
        stopwatch.start();
        var newLine = getDecopressedLine(input);
        //console.log(newLine);
        stopwatch.stop();
        console.log(util.format('Day 9 part 1 answer: %s. Total duration: %s ms', newLine.length, stopwatch.elapsedMilliseconds));
    }
    this.part2 = function () {
        var stopwatch = Stopwatch.create();
        stopwatch.start();
        var newLine = getDecopressedLine(input);
        while (newLine.indexOf('(') > -1) {
            newLine = getDecopressedLine(newLine);
            util.log(newLine.length);
        }
        stopwatch.stop();
        console.log(util.format('Day 9 part 2 answer: %s. Total duration: %s ms', 321, stopwatch.elapsedMilliseconds));
    }
}