/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 * ---
 * Hint: You can use the debug stream to print initialTX and initialTY, if Thor seems not follow your orders.
 **/

var inputs = readline().split(' ');
const lightX = parseInt(inputs[0]); // the X position of the light of power
const lightY = parseInt(inputs[1]); // the Y position of the light of power
let initialTx = parseInt(inputs[2]); // Thor's starting X position
let initialTy = parseInt(inputs[3]); // Thor's starting Y position


// game loop
while (true) {
    let direction = 'N'
    const remainingTurns = parseInt(readline()); // The remaining amount of turns Thor can move. Do not remove this line.
    //direction Nord Est
    if (initialTy > lightY && initialTx < lightX) {
        direction = 'NE'
        initialTy--
        initialTx++
    }
    //direction Nord West
    else if (initialTy > lightY && initialTx > lightX) {
        direction = 'NW'
        initialTy--
        initialTx--
    }
    //direction sud Est
    else if (initialTy < lightY && initialTx < lightX) {
        direction = 'SE'
        initialTy++
        initialTx++
    }
    //direction sud West
    else if (initialTy < lightY && initialTx > lightX) {
        direction = 'SW'
        initialTy++
        initialTx--
    }
    //direction nord 
    else if (initialTy > lightY) {
        direction = 'N'
        initialTy--
    }
    //direction Est
    else if (initialTx < lightX) {
        direction = 'E'
        initialTx++
    }

    //direction West
    else if (initialTx > lightX) {
        direction = 'W'
        initialTx--
    }

    //direction sud
    else if (initialTy < lightY) {
        direction = 'S'
        initialTy++
    }

   // to understand conditions : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else

    // A single line providing the move to be made: N NE E SE S SW W or NW
    console.log(direction);
}
