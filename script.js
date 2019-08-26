let clickEqual = false;
let clickOperatorDot = false;
let clickOperatorNum = false;
const clickButton = (event)=>{
  if(clickEqual){
    const dispField = document.querySelector('input')
    dispField.value = 0
    clickEqual = false;
  }
 output(event.target.textContent)
}
const output = (value)=>{
  const dispField = document.querySelector('input')
  dispField.value += value
  //accidentally worked
  if(!/[\.\+\-\*\/]/.test(dispField.value)){
    dispField.value = Number(dispField.value)
  }
}

const digs = document.querySelectorAll('.digits');

digs.forEach((dig, index, digs)=>{
  dig.addEventListener('click', clickButton);
})

const ac = document.querySelector('#restore')
ac.addEventListener('click', ()=>{
  const dispField = document.querySelector('input')
  dispField.value = 0
})

const dotKey = document.querySelector('#cell-dot')
dotKey.addEventListener('click', (event)=>{
  const dispField = document.querySelector('input')
  if(/\./.test(dispField.value)){
    //do if any operator btn has been pressed
    if(clickOperatorDot){
      dispField.value += '.'
      clickOperatorDot = false;
    }
    event.preventDefault()
  }else{
    dispField.value += '.'
  }
})

const operas = document.querySelectorAll('.ops');

const operatorFxn = (event)=>{
  const dispField = document.querySelector('input')
  if(clickEqual){
    clickEqual = false;
  }
  if(/[\+\-\*\/]$/.test(dispField.value)){
    dispField.value = dispField.value.replace(/.$/,event.target.textContent)
  }else{
    dispField.value += event.target.textContent
  }
  clickOperatorDot = true;
  clickOperatorNum = true;
}

operas.forEach((operator, ind, ops)=>{
  operator.addEventListener('click', operatorFxn)
})

const eqBtn = document.querySelector('#equals');
const eqFxn = (event)=>{
  const dispField = document.querySelector('input')
  dispField.value = eval(dispField.value)
  clickEqual = true;
  clickOperatorDot = false;
}

eqBtn.addEventListener('click', eqFxn)