console.log(`string text`)

console.log(`string text line 1
string text line 2`);

const expression = '${expression}';

console.log(`string text ${expression} string text`);

console.log(`<div>
  <h1>h1</h1>
  <h2>h2</h2>
  <h3>h3</h3>
</div>`);

const a = 12;
const b = 8;

console.log(`a = ${a}, b = ${b}
a + b = ${a + b}
a - b = ${a - b}
a * b = ${a * b}
a / b = ${a / b}`);

const sum = (a, b) => {
  return a + b;
}

console.log(`sum = ${sum(a, b)}`)