module.exports = function Day14() {
    const util = require('util');
    const regexThree = /([a-zA-Z0-9])\1{2}/i;
    const regexFive = /([a-zA-Z0-9])\1{4}/i;
    var find = require('array.prototype.find').shim();
    var crypto = require('crypto');
    var Stopwatch = require("node-stopwatch").Stopwatch;
    //var input = 'abc';
    var input = 'cuanljph';
    var comparedHash = [];

    function getFiveCode(value) {
        var parsed = regexFive.exec(value);
        if (parsed !== null)
            return parsed[1];
        return null;
    }

    function getThreeCode(value) {
        var parsed = regexThree.exec(value);
        if (parsed !== null)
            return parsed[1];
        return null;
    }

    function findThreeValue(fiveCode, step) {
        var result = comparedHash.filter(function (arrValue) {
            return (arrValue.used === false && arrValue.type == 3 && arrValue.letter === fiveCode && (arrValue.position >= (step - 1000)));
        });
        for (var i = 0; i < result.length; i++) {
            comparedHash[comparedHash.indexOf(result[i])].used = true;
        }
        return result;
    }
    function getHash(value, repeatTime) {
        var hex = value;
        for (var i = 0; i < repeatTime; i++)
            hex = crypto.createHash('md5').update(hex).digest("hex");
        return hex;
    }

    function getLastPosition(repeatTime) {
        comparedHash = [];
        var totalValid = 0;
        var step = 0;
        var hash = '';
        var newValue = '';
        var lastposition = 0;
        while (totalValid < 63) {
            newValue = input + step;
            hash = getHash(newValue, repeatTime);
            var fiveCode = getFiveCode(hash);
            if (fiveCode !== null) {
                var index = findThreeValue(fiveCode, step);
                if (index.length) {
                    var list = index.sort(function (a, b) { return a.position - b.position });
                    list.forEach(function (item) {
                        if (totalValid < 63) {
                            lastposition = item.position;
                            totalValid++;
                            //util.log(item);
                        }
                    });
                }
            } else {
                var threeCode = getThreeCode(hash);
                if (threeCode !== null) {
                    comparedHash.push({ position: step, letter: threeCode, type: 3, used: false, value: hash });
                }
            }
            step++;
        }
        return lastposition;
    }

    
    this.part1 = function () {
        var stopwatch = Stopwatch.create();
        stopwatch.start();

        var result = getLastPosition(1);
        stopwatch.stop();
        console.log(util.format('Day 14 part 1 answer: %s. Total duration: %s ms', result, stopwatch.elapsedMilliseconds));
    }
    this.part2 = function () {
        var stopwatch = Stopwatch.create();
        stopwatch.start();
        var result = getLastPosition(2017);
        stopwatch.stop();
        console.log(util.format('Day 14 part 2 answer: %s. Total duration: %s ms', result, stopwatch.elapsedMilliseconds));
    }
}