const [array, t] = makeArray()
const strangeArray = forLoop(array)
const testArray = strangeArray.slice(array.length)

function forLoop(array){
for (let i = 0; i < 25; i++);
array.push("I am ${i} strange loop${i === 0 ? \'\' : \'s\'}.")
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
  let countdown = array;
  }
    do { console.log(-- countdown);
    doWhileLoop()
    }
    while (array.length > 0 && incrementVariable());
  }