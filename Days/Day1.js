//Day 1 solving
module.exports = function Day1() {
    //general data
    var input = 'L1, L5, R1, R3, L4, L5, R5, R1, L2, L2, L3, R4, L2, R3, R1, L2, R5, R3, L4, R4, L3, R3, R3, L2, R1, L3, R2, L1, R4, L2, R4, L4, R5, L3, R1, R1, L1, L3, L2, R1, R3, R2, L1, R4, L4, R2, L189, L4, R5, R3, L1, R47, R4, R1, R3, L3, L3, L2, R70, L1, R4, R185, R5, L4, L5, R4, L1, L4, R5, L3, R2, R3, L5, L3, R5, L1, R5, L4, R1, R2, L2, L5, L2, R4, L3, R5, R1, L5, L4, L3, R4, L3, L4, L1, L5, L5, R5, L5, L2, L1, L2, L4, L1, L2, R3, R1, R1, L2, L5, R2, L3, L5, L4, L2, L1, L2, R3, L1, L4, R3, R3, L2, R5, L1, L3, L3, L3, L5, R5, R1, R2, L3, L2, R4, R1, R1, R3, R4, R3, L3, R3, L5, R2, L2, R4, R5, L4, L3, L1, L5, L1, R1, R2, L1, R3, R4, R5, R2, R3, L2, L1, L5';
    var instructions = ['UP', 'RIGHT', 'DOWN', 'LEFT'];
    var inputarray = input.split(', ');

    //what coordinate is changing
    function changeMovePosition(currentPosition, move) {
        if (move == 'L') {
            currentPosition -= 1;
        }
        else {
            currentPosition += 1;
        }
        if (currentPosition > 3) {
            currentPosition = 0;
        }
        if (currentPosition < 0) {
            currentPosition = 3;
        }
        return currentPosition;
    }

    //fill walking map and try to find itersection
    function existsInVisitedLocations(visitedLocations, oldX, oldY, newX, newY) {
        visitedLocations[oldX][oldY] = 1;
        if (oldX != newX) {
            var step = 1;
            if (oldX > newX) {
                step = -1;
            }
            var xl = oldX + step;
            while (xl != newX) {
                if (visitedLocations[xl] [newY] == 1) {
                    return Math.abs(xl - 1000) + Math.abs(newY - 1000);
                }
                else {
                    visitedLocations[xl][newY] = 1;
                }
                xl += step;
            };

        }
        if (oldY != newY) {
            var step = 1;
            if (oldY > newY) {
                step = -1;
            }
            var yl = oldY + step;
            while (yl != newY) {
                if (visitedLocations[newX][yl] == 1) {
                    return Math.abs(newX - 1000) + Math.abs(yl - 1000);
                }
                else {
                    visitedLocations[newX][yl] = 1;
                }
                yl += step;
            }

        }
        return 0;
    }

    //Part 1
    this.part1 = function () {
        var x = 0;
        var y = 0;
        var position = 0;
        inputarray.forEach(function (element) {
            var move = element[0];
            var length = parseInt(element.substr(1, element.length - 1));
            position = changeMovePosition(position, move);

            if ((instructions[position]) == 'UP') {
                y += length;
            }
            if ((instructions[position]) == 'DOWN') {
                y -= length;
            }
            if ((instructions[position]) == 'RIGHT') {
                x += length;
            }
            if ((instructions[position]) == 'LEFT') {
                x -= length;
            }
        });
        console.log('Day 1 part 1 answer:' + (Math.abs(x) + Math.abs(y)));
    };

    //Part2
    this.part2 = function () {
        var x = 1000;
        var y = 1000;
        var position = 0;
        var visitedLocations = [];
        for (var i = 0; i < 10000; i++) {
            visitedLocations[i] = [];
        };
        inputarray.every(function (element) {
            var move = element[0];
            var length = parseInt(element.substr(1, element.length - 1));
            position = changeMovePosition(position, move);
            var newX = x;
            var newY = y;
            if ((instructions[position]) == 'UP') {
                newY += length;
            }
            if ((instructions[position]) == 'DOWN') {
                newY -= length;
            }
            if ((instructions[position]) == 'RIGHT') {
                newX += length;
            }
            if ((instructions[position]) == 'LEFT') {
                newX -= length;
            }
            var loc = existsInVisitedLocations(visitedLocations, x, y, newX, newY);
            if (loc > 0) {
                console.log('Day 1 part 2 answer:' + loc);
                return false;
            }
            x = newX;
            y = newY;
            return true;
        });
    }
}
