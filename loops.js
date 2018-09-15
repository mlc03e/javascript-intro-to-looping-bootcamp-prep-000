function forLoop(array) {
  for (let i = 0; i < 25; i++){
    if (i === 1){
      array.push(`I am ${i} strange loop.`)
    } else {
      array.push(`I am ${i} strange loops.`)
      
    }
  }
  return array
}

function whileLoop(n) {
let countdown = n;
while (countdown > 0) {
console.log(-- countdown);
if (countdown === 0) return 'done'
  }
  
function incrementVariable() {
  i = i + 1;
}

do {
  console.log("doo-bee-doo-bee-doo");
  incrementVariable();
} while (i < 5);

function doWhileLoop(array){
  let incrementVariable = array;
  }
    do { console.log(-- array.length);
    doWhileLoop()
    }
    while (array.length > 0 && incrementVariable());
  }