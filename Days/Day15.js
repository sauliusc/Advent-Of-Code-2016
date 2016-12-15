module.exports = function DayT() {
    const fs = require('fs');
    const util = require('util');
    var Stopwatch = require("node-stopwatch").Stopwatch;
    var input = fs.readFileSync('./Data/Day15Data.txt', 'utf8').trim();
    var inputLines = input.split('\r\n');

    function getRequiredTime(additionalLine) {
        var diskInfo = [];
        inputLines.forEach(function (line) {
            var parts = line.trim('.').split(' ');
            diskInfo.push({ diskNr: parts[1], positionCount: parseInt(parts[3]), currPosition: parseInt(parts[11]) });
        });
        if (additionalLine !== null) {
            diskInfo.push(additionalLine);
        }
        var currTime = 0;
        var answerFound = false;
        while (!answerFound) {
            currTime++;
            var allValid = true;
            for (var i = 0; i < diskInfo.length; i++) {
                if ((currTime + i + 1 + diskInfo[i].currPosition) % diskInfo[i].positionCount > 0) {
                    allValid = false;
                    break;
                }
            }
            answerFound = allValid;
        }
        return currTime;
    }

    this.part1 = function () {
        var stopwatch = Stopwatch.create();
        stopwatch.start();
        var requiredTime = getRequiredTime(null);
        stopwatch.stop();
        console.log(util.format('Day 15 part 1 answer: %s. Total duration: %s ms', requiredTime, stopwatch.elapsedMilliseconds));
    }
    this.part2 = function () {
        var stopwatch = Stopwatch.create();
        stopwatch.start();
        var requiredTime = getRequiredTime({ diskNr: 'extra', positionCount: 11, currPosition: 0 });
        stopwatch.stop();
        console.log(util.format('Day 15 part 2 answer: %s. Total duration: %s ms', requiredTime, stopwatch.elapsedMilliseconds));
    }
}