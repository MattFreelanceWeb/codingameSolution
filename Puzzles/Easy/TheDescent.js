/**
 * The while loop represents the game.
 * Each iteration represents a turn of the game
 * where you are given inputs (the heights of the mountains)
 * and where you have to print an output (the index of the mountain to fire on)
 * The inputs you are given are automatically updated according to your last actions.
 **/

// game loop
while (true) {
  let mountainHeight = 0;
  let target = 0;
  for (let i = 0; i < 8; i++) {
    const mountainH = parseInt(readline()); // represents the height of one mountain.
    if (mountainHeight <= mountainH) {
      mountainHeight = mountainH;
      target = i;
    }
  }

  // to understand for loop:  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for

  // The index of the mountain to fire on.
  console.log(target);
}