QUnit.module('Main', {})

QUnit.test( "Test VolumeCalc", function( assert ) {
    assert.equal(VolumeCalc(1,2,4), 8, "(LengthValue) 1 * (WidthValue) 2 * (HeightValue) 4 = 8");
    assert.equal(VolumeCalc(2,5,1), 10, "(LengthValue) 2 * (WidthValue) 5 * (HeightValue) 1 = 10");
    assert.equal(VolumeCalc(5,4,1), 20, "(LengthValue) 4 * (WidthValue) 2 * (HeightValue) 3 = 24");
    assert.equal(VolumeCalc(5,4,1), 20, "(LengthValue) 5 * (WidthValue) 4 * (HeightValue) 1 = 20");
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