module.exports = function Day6() {
    const util = require('util');
    const fs = require('fs');
    var Stopwatch = require("node-stopwatch").Stopwatch;
    var input = fs.readFileSync('./Data/Day6Data.txt', 'utf8').trim();
    //var input = fs.readFileSync('./Data/Day6DataSample.txt', 'utf8').trim();
    var inputLines = input.split('\r\n');

    function getSortedLetters(lineToAnalyze) {
        var uniqueLetters = lineToAnalyze.replace(/(.)(?=.*\1)/g, "");
        var repeations = [];
        //statistics of letter repeation
        uniqueLetters.split('').forEach(function (letter) {
            var count = lineToAnalyze.split('').reduce(function (n, val) { return n += ((val === letter) ? 1 : 0); }, 0);
            repeations.push({ l: letter, lcount: count });
        });
        //sort letters by repeation and alphabetically
        repeations.sort(function (a, b) {
            var diff = b.lcount - a.lcount;
            if (diff == 0) {
                if (a.l < b.l) return -1;
                if (a.l > b.l) return 1;
                return 0;
            } else {
                return diff;
            }
        });
        return repeations;
    }

    this.part1 = function () {
        var stopwatch = Stopwatch.create();
        stopwatch.start();
        var lineLength = inputLines[0].toString().length;
        var vlines = new Array(lineLength);
        for (var i = 0; i < lineLength; i++) {
            vlines[i] = '';
        }
        var answer = '';
        inputLines.forEach(function (line) {
            for (var i = 0; i < lineLength; i++) {
                vlines[i] += line[i];
            }
        });
        //util.log(vlines);
        for (var i = 0; i < lineLength; i++) {
            var sortedData = getSortedLetters(vlines[i]);
            answer += sortedData[0].l;
        }
        stopwatch.stop();
        console.log(util.format('Day 6 part 1 answer: %s. Total duration: %s ms', answer, stopwatch.elapsedMilliseconds));
    }
    this.part2 = function () {
        var stopwatch = Stopwatch.create();
        stopwatch.start();

        var lineLength = inputLines[0].toString().length;
        var vlines = new Array(lineLength);
        for (var i = 0; i < lineLength; i++) {
            vlines[i] = '';
        }
        var answer = '';
        inputLines.forEach(function (line) {
            for (var i = 0; i < lineLength; i++) {
                vlines[i] += line[i];
            }
        });
        //util.log(vlines);
        for (var i = 0; i < lineLength; i++) {
            var sortedData = getSortedLetters(vlines[i]);
            //util.log(sortedData);
            answer += sortedData[sortedData.length - 1].l;
        }

        stopwatch.stop();
        console.log(util.format('Day 6 part 2 answer: %s. Total duration: %s ms', answer, stopwatch.elapsedMilliseconds));
    }
}