module.exports = function Day12() {
    const fs = require('fs');
    const util = require('util');
    var Stopwatch = require("node-stopwatch").Stopwatch;
    var input = fs.readFileSync('./Data/Day12Data.txt', 'utf8').trim();
    //var input = fs.readFileSync('./Data/Day12DataSample.txt', 'utf8').trim();
    //var input = '';
    var inputLines = input.split('\r\n');

    function getFilledRegistry(registry) {
        var instructions = [];
        inputLines.forEach(function (line) {
            var parts = line.split(' ');
            var instruction = { move: parts[0], value1: parts[1], value2: '' };
            if (parts.length === 3) {
                instruction.value2 = parts[2];
            }
            instructions.push(instruction);
        });
        for (var i = 0; i < instructions.length; i++) {
            //util.log(i); 
            if (instructions[i].move === 'cpy') {
                if (!isNaN(instructions[i].value1)) {
                    registry[instructions[i].value2] = parseInt(instructions[i].value1);
                } else {
                    registry[instructions[i].value2] = registry[instructions[i].value1];
                }
            } else if (instructions[i].move === 'jnz') {
                if (registry[instructions[i].value1] !== 0) {
                    i += parseInt(instructions[i].value2) - 1;
                    if (i < 0) {
                        i = 0;
                    }
                    //util.log(instructions[i]);
                }
            } else if (instructions[i].move === 'inc') {
                registry[instructions[i].value1]++;
            } else if (instructions[i].move === 'dec') {
                registry[instructions[i].value1]--;
            }
            //util.log(instructions[i]); 
            //util.log(registry);
        }
        //util.log(instructions);
        //util.log(registry);
        return registry;
    }


    this.part1 = function () {
        var stopwatch = Stopwatch.create();
        stopwatch.start();
        var registry = {};
        registry['a'] = 0;
        registry['b'] = 0;
        registry['c'] = 0;
        registry['d'] = 0;
        registry = getFilledRegistry(registry);
        stopwatch.stop();
        console.log(util.format('Day 12 part 1 answer: %s. Total duration: %s ms', registry['a'], stopwatch.elapsedMilliseconds));
    }
    this.part2 = function () {
        var stopwatch = Stopwatch.create();
        stopwatch.start();
        var registry = {};
        registry['a'] = 0;
        registry['b'] = 0;
        registry['c'] = 1;
        registry['d'] = 0;
        registry = getFilledRegistry(registry);
        stopwatch.stop();
        console.log(util.format('Day 12 part 2 answer: %s. Total duration: %s ms', registry['a'], stopwatch.elapsedMilliseconds));
    }
}