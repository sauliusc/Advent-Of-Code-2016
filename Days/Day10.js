module.exports = function Day10() {
    const fs = require('fs');
    const util = require('util');
    var Stopwatch = require("node-stopwatch").Stopwatch;
    //var input = fs.readFileSync('./Data/Day10DataSample.txt', 'utf8').trim();
    var input = fs.readFileSync('./Data/Day10Data.txt', 'utf8').trim();
    //var input = '';
    var inputLines = input.split('\r\n');
    var values = [];
    var outputs = new Array(500);
    for (var i = 0; i < 500; i++) {
        outputs[i] = [];
    }
    var instructions = new Array(500);

    function addValueToBot(botNumber, value) {
        instructions[botNumber].respValues.push(value);
        if (instructions[botNumber].respValues.length == 2) {
            if (instructions[botNumber].respValues[0] > instructions[botNumber].respValues[1]) {
                var low = instructions[botNumber].respValues[1];
                var high = instructions[botNumber].respValues[0];
            } else {
                var low = instructions[botNumber].respValues[0];
                var high = instructions[botNumber].respValues[1];
            }
            if (instructions[botNumber].lowToOut >= 0) {
                outputs[instructions[botNumber].lowToOut].push(low);
            } else {
                addValueToBot(instructions[botNumber].lowToBot, low);
            }
            if (instructions[botNumber].highToOut >= 0) {
                outputs[instructions[botNumber].highToOut].push(high);
            } else {
                addValueToBot(instructions[botNumber].highToBot, high);
            }
        }

    }

    function analyzeBots() {
        values = [];
        inputLines.forEach(function (line) {
            var parts = line.split(' ');
            if (parts[0] === 'value') {
                values.push({ botNumber: parts[5], value: parts[1] });
            } else if (parts[0] === 'bot') {
                var botinstruction = { bot: parts[1], lowToBot: -1, highToBot: -1, lowToOut: -1, highToOut: -1, respValues: [] };
                if (parts[5] == 'bot') {
                    botinstruction.lowToBot = parts[6];
                } else {
                    botinstruction.lowToOut = parts[6];
                }
                if (parts[10] == 'bot') {
                    botinstruction.highToBot = parts[11];
                } else {
                    botinstruction.highToOut = parts[11];
                }
                instructions[parts[1]] = botinstruction;
            }
        });

        values.forEach(function (val) {
            addValueToBot(val.botNumber, parseInt(val.value));
        });
    }

    this.part1 = function () {
        var stopwatch = Stopwatch.create();
        stopwatch.start();
        analyzeBots();
        var botnumber = instructions.findIndex(function (bot) {
            return ((bot.respValues[0] == 17 && bot.respValues[1] == 61) ||
                (bot.respValues[1] == 17 && bot.respValues[0] == 61));
        });
        stopwatch.stop();
       // util.log(instructions);
        //util.log(outputs);
        console.log(util.format('Day 10 part 1 answer: %s. Total duration: %s ms', botnumber, stopwatch.elapsedMilliseconds));
        
    }
    this.part2 = function () {
        var stopwatch = Stopwatch.create();
        stopwatch.start();
        analyzeBots();
        stopwatch.stop();
        console.log(util.format('Day 10 part 2 answer: %s. Total duration: %s ms', (outputs[0][0] * outputs[1][0] * outputs[2][0]), stopwatch.elapsedMilliseconds));
    }
}