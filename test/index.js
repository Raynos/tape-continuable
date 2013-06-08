var test = require("tape")

var tapeContinuable = require("../index")

test("tapeContinuable is a function", function (assert) {
    assert.equal(typeof tapeContinuable, "function")
    assert.end()
})
