//create an interface that describest the shape of the operate object

function operate(x:{shape: string; side: number}) {
  return x.side * x.side;
}

var calc = operate({
  shape: 'square',
  side: 5
})