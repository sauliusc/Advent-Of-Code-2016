﻿module.exports = function Day5() {
    const util = require('util');
    var crypto = require('crypto');
    var Stopwatch = require("node-stopwatch").Stopwatch;
    //var input = 'abc';
    var input = 'ojvtpuvg';
    function hashValid(input) {
        for (var i = 0; i < 5; i++) {
            if (input[i] != '0') {
                return false;
            }
        }
        return true;
    }

    this.part1 = function () {
        var stopwatch = Stopwatch.create();
        stopwatch.start();
        var value = 0;
        var currentLength = 0;
        var result = '';
        var newValue = '';
        var hash = '';
        while (currentLength < 8) {
            newValue = input + value;
            hash = crypto.createHash('md5').update(newValue).digest("hex");
            if (hashValid(hash)) {
                result += hash[5];
                currentLength++;
                util.log('%s = %s', newValue, result);
            }
            value++;
        }
        stopwatch.stop();
        console.log(util.format('Day 5 part 1 answer: %s. Total duration:%s', result, stopwatch.elapsedMilliseconds));
    }
    this.part2 = function () {
        var stopwatch = Stopwatch.create();
        stopwatch.start();
        var value = 0;
        var currentLength = 0;
        var result = new Array(9).join('_').split('');
        var newValue = '';
        var hash = '';
        while (currentLength < 8) {
            newValue = input + value;
            hash = crypto.createHash('md5').update(newValue).digest("hex");
            if (hashValid(hash)) {
                var position = parseInt(hash[5]);
                if (position < 8 && result[position] == '_') {
                    result[position] = hash[6];
                    currentLength++;
                    util.log('%s = %s', newValue, result.join(''));
                }
            }
            value++;
        }
        stopwatch.stop();
        console.log(util.format('Day 5 part 1 answer: %s. Total duration:%s', result.join(''), stopwatch.elapsedMilliseconds));
    }
}