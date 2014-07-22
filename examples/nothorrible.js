var a = 1 + 2;

function eh(b) {
  return b;
}

var d = {
  e: 'f',
  g: 'h',
  i: 'j'
};

var underscoreNameHello = eh(d.g + 'ello').replace('e', a);

if (underscoreNameHello === 'hello') {
  console.log('equal!' );
}

console.log(underscoreNameHello);
