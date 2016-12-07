module.exports = function Day7() {
    const fs = require('fs');
    const util = require('util');
    var Stopwatch = require("node-stopwatch").Stopwatch;
    var input = fs.readFileSync('./Data/Day7Data.txt', 'utf8').trim();
    //var input = fs.readFileSync('./Data/Day7DataSample.txt', 'utf8').trim();
    //var input = '';
    var inputLines = input.split('\n');

    function hasABBA(partToAnalyze) {
        for (var i = 1; i < partToAnalyze.length - 1; i++) {
            if (partToAnalyze[i] == partToAnalyze[i + 1] && partToAnalyze[i - 1] == partToAnalyze[i + 2] && partToAnalyze[i] != partToAnalyze[i - 1]) {
                return true;
            }
        }
        return false;
    }

    this.part1 = function () {
        var stopwatch = Stopwatch.create();
        stopwatch.start();
        var total = 0;
        inputLines.forEach(function (line) {
            var parts = line.split(/[\]\[]/);
            var supported = 0;
            var excluded = 0;
            for (var i = 0; i < parts.length; i++) {
                if (hasABBA(parts[i])) {
                    if ((i % 2) === 0) {
                        supported++;
                    } else {
                        excluded++;
                        break;
                    }
                }
            }
            if (supported > 0 && excluded === 0) {
                total++;
                //util.log(line);
            }
        })
        stopwatch.stop();
        console.log(util.format('Day 7 part 1 answer: %s. Total duration: %s ms', total, stopwatch.elapsedMilliseconds));
    }
    this.part2 = function () {
        var stopwatch = Stopwatch.create();
        stopwatch.start();
        var total = 0;
        inputLines.forEach(function (line) {
            var parts = line.split(/[\]\[]/);
            var includeParts = [];
            var excludeParts = [];
            for (var i = 0; i < parts.length; i += 2) {
                includeParts.push(parts[i]);
            }
            for (var i = 1; i < parts.length; i += 2) {
                excludeParts.push(parts[i]);
            }

            includeParts.forEach(function (includeLine) {
                for (var i = 1; i < includeLine.length - 1; i++){
                    if (includeLine[i - 1] === includeLine[i + 1] && includeLine[i] !== includeLine[i + 1]) {
                        var reverted = includeLine[i] + includeLine[i - 1] + includeLine[i];
                        var bab = excludeParts.filter(function (pline) { return pline.indexOf(reverted) > -1; });
                        if (bab.length > 0) {
                            total++;
                            break;
                        }
                    }
                }
            })
        })
        stopwatch.stop();
        console.log(util.format('Day 7 part 2 answer: %s. Total duration: %s ms', total, stopwatch.elapsedMilliseconds));
    }
}