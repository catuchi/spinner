const animation = ['|   ', '/   ', '-   ', '\\   ', '|   ', '/   ', '-   ', '\\   ', '|   '];

let timer = 100;

for (let i = 0; i < animation.length; i++) {
  timer += 200;
  setTimeout(() => {
    if (i === animation.length - 1) {
      process.stdout.write('\r' + animation[i] + '\n');
    } else {
      process.stdout.write('\r' + animation[i]);
    }
    
  }, timer);
};

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r|   '); 
// }, 900);

// setTimeout(() => {
//   process.stdout.write('\r/   '); 
// }, 1100);

// setTimeout(() => {
//   process.stdout.write('\r-   '); 
// }, 1300);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 1500);

// setTimeout(() => {
//   process.stdout.write('\r|   '); 
// }, 1700);