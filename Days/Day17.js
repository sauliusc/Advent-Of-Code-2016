module.exports = function Day17() {
    const util = require('util');
    var crypto = require('crypto');
    var Stopwatch = require("node-stopwatch").Stopwatch;
    //var input = 'ulqzkmiv';
    var input = 'awrkjxxr';
    var availableLetters = ['b', 'c', 'd', 'e', 'f'];
    var size = 4;
    var visitedPositions = [];
    var resultPath = '';
    var resultPathLength = 0;
    var mode = '';

    function prepareMoveArray(arraySize) {
        var positionArray = new Array(arraySize);
        for (var i = 0; i < arraySize; i++) {
            positionArray[i] = new Array(arraySize);
            for (var j = 0; j < arraySize; j++) {
                positionArray[i][j] = [];
            }
        }
        return positionArray;
    }

    function canGo(letter) {
        if (availableLetters.indexOf(letter) > -1) {
            return true;
        }
    }

    function getAvailableDirections(path) {
        var md5 = crypto.createHash('md5').update(path).digest("hex");
        var availableDirections = [];
        if (canGo(md5[0]))
            availableDirections.push('U');
        if (canGo(md5[1]))
            availableDirections.push('D');
        if (canGo(md5[2]))
            availableDirections.push('L');
        if (canGo(md5[3]))
            availableDirections.push('R');
        return availableDirections;
    }

    function getShortestPath(row, column, path) {
        if ((mode == 'SHORTEST') && (path.length > resultPathLength))
            return;
        if ((column == size - 1) && (row == size - 1)) {
            if ((mode == 'SHORTEST') && (path.length < resultPathLength)) {
                resultPath = path;
                resultPathLength = path.length;
            } else if ((mode == 'LONGEST') && (path.length > resultPathLength)) {
                resultPath = path;
                resultPathLength = path.length;
            }
        } else {
            var directions = getAvailableDirections(path);
            if ((directions.indexOf('U') > -1) && (row > 0)) {
                var newPath = path + 'U';
                if (visitedPositions[row][column].indexOf(newPath) === -1) {
                    visitedPositions[row][column].push(newPath);
                    getShortestPath(row - 1, column, newPath);
                }
            }
            if ((directions.indexOf('D') > -1) && (row < size - 1)) {
                var newPath = path + 'D';
                if (visitedPositions[row][column].indexOf(newPath) === -1) {
                    visitedPositions[row][column].push(newPath);
                    getShortestPath(row + 1, column, newPath);
                }
            }
            if ((directions.indexOf('L') > -1) && (column > 0)) {
                var newPath = path + 'L';
                if (visitedPositions[row][column].indexOf(newPath) === -1) {
                    visitedPositions[row][column].push(newPath);
                    getShortestPath(row, column - 1, newPath);
                }
            }
            if ((directions.indexOf('R') > -1) && (column < size - 1)) {
                var newPath = path + 'R';
                if (visitedPositions[row][column].indexOf(newPath) === -1) {
                    visitedPositions[row][column].push(newPath);
                    getShortestPath(row, column + 1, newPath);
                }
            }
        }

    }

    this.part1 = function () {
        var stopwatch = Stopwatch.create();
        stopwatch.start();
        visitedPositions = prepareMoveArray(size);
        resultPath = '';
        resultPathLength = 9999;
        mode = 'SHORTEST';
        getShortestPath(0, 0, input);
        stopwatch.stop();
        console.log(util.format('Day 17 part 1 answer: %s. Total duration: %s ms', resultPath.substr(input.length, resultPathLength - input.length), stopwatch.elapsedMilliseconds));
    }
    this.part2 = function () {
        var stopwatch = Stopwatch.create();
        stopwatch.start();
        visitedPositions = prepareMoveArray(size);
        resultPath = '';
        resultPathLength = 0;
        mode = 'LONGEST';
        getShortestPath(0, 0, input);
        stopwatch.stop();
        console.log(util.format('Day 17 part 2 answer: %s. Total duration: %s ms', resultPathLength - input.length, stopwatch.elapsedMilliseconds));
    }
}