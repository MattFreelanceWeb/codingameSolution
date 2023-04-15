/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(' ');
const W = parseInt(inputs[0]); // width of the building.
const H = parseInt(inputs[1]); // height of the building.
const N = parseInt(readline()); // maximum number of turns before game over.
var inputs = readline().split(' ');
let X0 = parseInt(inputs[0]); // batman inital X position
let Y0 = parseInt(inputs[1]); // batman inital Y position

// initialise min
x1 = y1 = 0

// initialise max
x2 = W-1
y2 = H-1

// game loop
while (true) {
    const bombDir = readline(); // the direction of the bombs from batman's current location (U, UR, R, DR, D, DL, L or UL)


    // bombDir case 
    if(bombDir.includes('U')){
        // decrement Y
        y2 = Y0 - 1
    } else if ( bombDir.includes('D')){
        // increment Y
        y1 = Y0 + 1
    }
    if(bombDir.includes('L')){
        // decrement X
        x2 = X0 - 1
    } else if(bombDir.includes('R')){
        // increment X
        x1 = X0 + 1
    }

    // binary search formula 
    X0 = Math.floor((x2 + x1)/2)
    Y0 = Math.floor((y2 + y1)/2)

    // to understand the binary search :  https://www.scaler.com/topics/binary-search-in-javascript/


    // the location of the next window Batman should jump to.
    console.log(X0, Y0);
}