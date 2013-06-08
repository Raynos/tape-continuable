var tape = require("tape")

module.exports = test

function test(name, opts, continuable) {
    if (typeof opts === "function") {
        continuable = opts
        opts = {}
    }

    tape(name, opts, function (assert) {
        continuable(assert, function (err) {
            assert.ifError(err)
            assert.end()
        })
    })
}
