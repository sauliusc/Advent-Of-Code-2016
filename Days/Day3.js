module.exports = function Day3() {
    const util = require('util');
    const fs = require('fs');
    var input = fs.readFileSync('./Data/Day3Data.txt', 'utf8');
    //var input = fs.readFileSync('./Data/Day3DataSample.txt', 'utf8');
    var inputLines = input.split('\r\n');

    this.part1 = function () {
        var totalTriangle = 0;
        inputLines.forEach(function (element) {
            //main lesson - javascript anyway sorts numbers alphabetically
            var sides = element.match(/\S+/g).map(Number).sort((a, b) => { return a - b });
            if ((sides[0] + sides[1]) > sides[2]) {
                totalTriangle++;
            }
            //console.log(util.format('%s + %s = %s ? %s - %s', sides[0], sides[1], sides[0] + sides[1], sides[2], totalTriangle));
        });
        console.log(util.format('Day 3 part 1 answer: %s', totalTriangle));

    }

    function compareSides(sides) {
        sides = sides.sort((a, b) => { return a - b });
        if ((sides[0] + sides[1]) > sides[2]) {
            return 1;
        }
        return 0;
    }

    this.part2 = function () {
        var totalTriangle = 0;
        var triangleData = new Array(3);
        for (var i = 0; i < 3; i++) {
            triangleData[i] = new Array(3);
        }
        var sideCount = 0;
        inputLines.forEach(function (element) {
            var sides = element.match(/\S+/g).map(Number);
            triangleData[sideCount][0] = sides[0];
            triangleData[sideCount][1] = sides[1];
            triangleData[sideCount][2] = sides[2];
            sideCount++;
            if (sideCount == 3) {
                sideCount = 0;
                totalTriangle += compareSides([triangleData[0][0], triangleData[1][0], triangleData[2][0]]);
                totalTriangle += compareSides([triangleData[0][1], triangleData[1][1], triangleData[2][1]]);
                totalTriangle += compareSides([triangleData[0][2], triangleData[1][2], triangleData[2][2]]);
            }
        });
        
        console.log(util.format('Day 3 part 2 answer: %s', totalTriangle));
    }
}