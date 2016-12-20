module.exports = function Day20() {
    const fs = require('fs');
    const util = require('util');
    var Stopwatch = require("node-stopwatch").Stopwatch;
    //var input = fs.readFileSync('./Data/Day20DataSample.txt', 'utf8').trim();
    var input = fs.readFileSync('./Data/Day20Data.txt', 'utf8').trim();
    var inputLines = input.split('\r\n');

    function getOverlapped() {
        var intervals = [];
        inputLines.forEach(function (line) {
            var parts = line.split('-');
            intervals.push({ start: parseInt(parts[0]), end: parseInt(parts[1]) });
        });
        intervals.sort(function (a, b) { return a.start - b.start });
        //util.log(intervals);
        var notOverlapping = [];
        notOverlapping.push(intervals[0]);
        for (var i = 1; i < intervals.length; i++) {
            var top = notOverlapping.slice(-1)[0];
            if (top.end + 1 < intervals[i].start) {
                notOverlapping.push(intervals[i]);
            } else if (top.end < (intervals[i].end)) {
                top.end = intervals[i].end;
                notOverlapping.pop();
                notOverlapping.push(top);
            }
        }
        //util.log(notOverlapping);
        var goodIP = [];
        for (var i = 0; i < notOverlapping.length - 1; i++) {
            goodIP.push({ start: notOverlapping[i].end + 1, end: notOverlapping[i + 1].start - 1 });
        }
        //util.log(goodIP);
        return goodIP;
    }

    this.part1 = function () {
        var stopwatch = Stopwatch.create();
        stopwatch.start();
        var goodIpIntervals = getOverlapped();
        stopwatch.stop();
        console.log(util.format('Day 20 part 1 answer: %s. Total duration: %s ms', goodIpIntervals[0].start, stopwatch.elapsedMilliseconds));
    }
    this.part2 = function () {
        var stopwatch = Stopwatch.create();
        stopwatch.start();
        var goodIpIntervals = getOverlapped();
        var total = 0;
        total += goodIpIntervals.reduce(function (n, val) { return n += val.end - val.start + 1 }, 0);
        stopwatch.stop();
        console.log(util.format('Day 20 part 2 answer: %s. Total duration: %s ms', total, stopwatch.elapsedMilliseconds));
    }
}