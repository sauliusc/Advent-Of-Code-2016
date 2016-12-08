module.exports = function Day8() {
    const fs = require('fs');
    const util = require('util');
    var Stopwatch = require("node-stopwatch").Stopwatch;
    var input = fs.readFileSync('./Data/Day8Data.txt', 'utf8').trim();
    //var input = fs.readFileSync('./Data/Day8DataSample.txt', 'utf8').trim();
    //var input = '';
    var inputLines = input.split('\r\n');
    //var xSize = 7;
    //var ySize = 3;
    var xSize = 50;
    var ySize = 6;

    function turnOn(pixels, x, y) {
        for (var ix = 0; ix < x; ix++)
            for (var iy = 0; iy < y; iy++)
                pixels[iy][ix] = 'x';
    }

    function sliceColumn(pixels, position, size) {
        for (var i = 0; i < size; i++) {
            var prev = pixels[pixels.length - 1][position];
            pixels.forEach(function (v) {
                var t = v[position];
                v[position] = prev;
                prev = t;
            })
        };
    }

    function sliceRow(pixels, position, size) {
        for (var i = 0; i < size; i++) {
            pixels[position].unshift(pixels[position][xSize - 1]);
            pixels[position].pop();
        }
    }

    function count2DArray(array, symbolToFind) {
        var count = 0;
        array.forEach(function (row) {
            count += row.reduce(function (n, val) { return n += ((val === symbolToFind) ? 1 : 0); }, 0);
        })
        return count;
    }

    function getFullScreen() {
        var pixels = new Array(ySize);
        for (var i = 0; i < ySize; i++) {
            pixels[i] = new Array(xSize).fill(' ');
        }
        inputLines.forEach(function (line) {
            var parts = line.split(' ');
            if (parts[0] === 'rect') {
                var size = parts[1].split('x');
                turnOn(pixels, size[0], size[1]);
            } else if (parts[1] === 'column') {
                sliceColumn(pixels, parts[2].split('=')[1], parts[4]);
            } else if (parts[1] === 'row') {
                sliceRow(pixels, parts[2].split('=')[1], parts[4]);
            } else {
                util.log('UNDEFINED %s', line);
            }
            //console.log(util.inspect(pixels));
        });
        //console.log(util.inspect(pixels));
        return pixels;
    }

    this.part1 = function () {
        var stopwatch = Stopwatch.create();
        stopwatch.start();
        var pixels = getFullScreen();
        var workingpixels = count2DArray(pixels, 'x');
        stopwatch.stop();
        console.log(util.format('Day 8 part 1 answer: %s. Total duration: %s ms', workingpixels, stopwatch.elapsedMilliseconds));
    }
    this.part2 = function () {
        var stopwatch = Stopwatch.create();
        stopwatch.start();
        var pixels = getFullScreen();
        pixels.forEach(function (row) {
            console.log(row.join(''));
        });
        stopwatch.stop();
        console.log(util.format('Day 8 part 2 answer: %s. Total duration: %s ms', 'UPOJFLBCEZ', stopwatch.elapsedMilliseconds));
    }
}