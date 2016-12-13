module.exports = function Day13() {
    const util = require('util');
    var Stopwatch = require("node-stopwatch").Stopwatch;
    var pf = require('pathfinding');
    //var input = 10;
    //var reachX = 7;
    //var reachY = 4;
    //var size = 10;
    var input = 1362;
    var reachX = 31;
    var reachY = 39;
    var size = 52;

    function GetInitialMatrix() {
        var matrix = new Array(size);
        for (var y = 0; y < size; y++) {
            matrix[y] = new Array(size);
            for (var x = 0; x < size; x++) {
                var number = (x * x) + (3 * x) + (2 * x * y) + y + (y * y) + input;
                var binary = (number >>> 0).toString(2);
                var oneCount = binary.split('').reduce(function (n, val) { return n += ((val === '1') ? 1 : 0); }, 0);
                matrix[y][x] = (oneCount % 2 == 0) ? 0 : 1;
            }
        }
        return matrix;
    }

    this.part1 = function () {
        var stopwatch = Stopwatch.create();
        stopwatch.start();
        var matrix = GetInitialMatrix();
        var grid = new pf.Grid(matrix);
        var finder = new pf.AStarFinder();
        var path = finder.findPath(1, 1, reachX, reachY, grid);
        stopwatch.stop();
        console.log(util.format('Day 13 part 1 answer: %s. Total duration: %s ms', path.length-1, stopwatch.elapsedMilliseconds));
    }
    this.part2 = function () {
        var stopwatch = Stopwatch.create();
        stopwatch.start();
        var matrix = GetInitialMatrix();
        var total = 0;
        for (var x = 0; x < 52; x++)
            for (var y = 0; y < 52; y++) {
                var grid = new pf.Grid(matrix);
                var finder = new pf.AStarFinder();
                var path = finder.findPath(1, 1, x, y, grid);
                if (path.length < 52 && path.length > 0) {
                    total++;
                }
            }
        stopwatch.stop();
        console.log(util.format('Day 13 part 2 answer: %s. Total duration: %s ms', total, stopwatch.elapsedMilliseconds));
    }
}