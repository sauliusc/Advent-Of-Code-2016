module.exports = function Day18() {
    const util = require('util');
    
    var Stopwatch = require("node-stopwatch").Stopwatch;
    //var input = '..^^.';
    var input = '^.^^^..^^...^.^..^^^^^.....^...^^^..^^^^.^^.^^^^^^^^.^^.^^^^...^^...^^^^.^.^..^^..^..^.^^.^.^.......';
    function getNewRow(previousRow) {
        var newRow = '.';
        for (var i = 1; i < previousRow.length - 1; i++) {
            if ((previousRow[i - 1] === '^' && previousRow[i] === '^' && previousRow[i + 1] === '.') ||
                (previousRow[i - 1] === '.' && previousRow[i] === '^' && previousRow[i + 1] === '^') ||
                (previousRow[i - 1] === '^' && previousRow[i] === '.' && previousRow[i + 1] === '.') ||
                (previousRow[i - 1] === '.' && previousRow[i] === '.' && previousRow[i + 1] === '^')) {
                newRow += '^';
            } else
                newRow += '.';
        }
        newRow += '.';
        return newRow;
    }

    function getTotalSafeTiles(rowCount) {
        var trapArray = [];
        trapArray.push('.' + input + '.');
        for (var i = 1; i < rowCount; i++) {
            trapArray.push(getNewRow(trapArray[i - 1]));
        }
        //util.log(trapArray);
        var totalSafe = 0;
        trapArray.forEach(function (row) {
            totalSafe += row.countLetter('.') - 2;
        });
        return totalSafe;
    }

    this.part1 = function () {
        var stopwatch = Stopwatch.create();
        stopwatch.start();
        var totalSafe = getTotalSafeTiles(38);
        stopwatch.stop();
        console.log(util.format('Day 17 part 1 answer: %s. Total duration: %s ms', totalSafe, stopwatch.elapsedMilliseconds));
    }
    this.part2 = function () {
        var stopwatch = Stopwatch.create();
        stopwatch.start();
        var totalSafe = getTotalSafeTiles(400000);
        stopwatch.stop();
        console.log(util.format('Day 17 part 2 answer: %s. Total duration: %s ms', totalSafe, stopwatch.elapsedMilliseconds));
    }
}