QUnit.module('Main', {})

QUnit.test( "Test VolumeCalc", function( assert ) {
    assert.equal(testupdateWithMultiply(1,-2,4), -8, "resulted value is -8");
    assert.equal(testupdateWithMultiply(2,5,1), 10, "resulted value is 10");
    assert.equal(testupdateWithMultiply(4,2,-3), -24, "resulted value is -24");
    assert.equal(testupdateWithMultiply(5,4,1), 20, "resulted value is 20");
    assert.equal(testupdateWithMultiply(5,2,1), 10, "resulted value is 20");
    
});

window.addEventListener('load', () => {
  const appURL = '../index.html'
  const openingTag = '<main class="container mt-5 flex-fill">'
  const closingTag = '</main>'
  fetch(appURL, { method: 'GET' })
    .then(response => {
      return response.text() // returns promise
    })
    .then(txt => {
      const start = txt.indexOf(openingTag)
      const end = txt.indexOf(closingTag) + closingTag.length
      const html = txt.substring(start, end)
      const qunitFixtureBody = document.getElementById('qunit-fixture')
      qunitFixtureBody.innerHTML = html
      console.info(qunitFixtureBody)
      QUnit.start()
    })
    .catch(error => {
      console.error('error:', error);
      QUnit.start()
    })
})

QUnit.test("TEST first number validation", assert => {
  const input = document.querySelector('#LengthValue')
  const warning = document.querySelector('#LengthValue')
  input.value = -3;
  assert.equal(input.value, -3, "Bad value assigned")
  assert.strictEqual(input.checkValidity(), false, "Correctly fails validation")
  input.focus()
  input.blur()
  assert.strictEqual(warning.innerHTML, 'Invalid input', `Correctly adds warning ${warning}`)
})