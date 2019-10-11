const multiply = (x, y, z) => { return x * y * z}

const validate = async (event) => {
  console.log(`triggered validate on ${event.target.id}`)
  const isValid = event.target.checkValidity()
  if (isValid) {
    event.target.nextElementSibling.innerHTML = ''
  } else {
    event.target.nextElementSibling.innerHTML = 'Invalid input'
    event.target.focus()
  }
}

const updateWithMultiply = async (event) => {
  document.querySelector('#result').innerHTML = ''
  if (document.querySelector('#LengthValue').checkValidity() && document.querySelector('#WidthValue').checkValidity() && document.querySelector('#HeightValue').checkValidity()) {
    
    const i = parseInt(document.querySelector('#LengthValue').value)
    const j = parseInt(document.querySelector('#WidthValue').value)
    const k = parseInt(document.querySelector('#HeightValue').value)
    const ans = ` Volume of Rectangle Prism is ${multiply(i, j, k)}.`
    document.querySelector('#result').innerHTML = ans
  }
}
 function testupdateWithMultiply(i, j, k)
 {
return i*j*k;
 }



document.addEventListener('focusout', event => {
  if ((event.target && event.target.id === 'LengthValue') ||
    (event.target && event.target.id === 'WidthValue')
    (event.target && event.target.id === 'HeightValue')){
    validate(event)
  }
})

document.addEventListener('click', event => {
  if (event.target && event.target.id === 'multiplyButton') { updateWithMultiply(event) }
})








