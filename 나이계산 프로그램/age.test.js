const rewire = require("rewire")
const ageFile = rewire("./age")
const age = ageFile.__get__("age")
// @ponicode
describe("age", () => {
    test("0", () => {
        let result = age()
        expect(result).toMatchSnapshot()
    })
})
