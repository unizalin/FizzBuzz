//
var should = chai.should();

describe("test FizzBuzz", function() {
    //該整數能被 3 整除
    it('integer can be divisible by 3, return Fizz', function () {
        let result = fizzBuzz(9)
        result.should.be.equal('Fizz')
    })

    //該整數能被 5 整除
    it('integer can be divisible by 5, return Buzz', function () {
        let result = fizzBuzz(10)
        result.should.be.equal('Buzz')
    })

    //該整數能被 3 和 5 同時整除
    it('integer can be divisible by 3 and 5, return FizzBuzz', function () {
        let result = fizzBuzz(15)
        result.should.be.equal('FizzBuzz')
    })

    //都不能整除
    it('integer can not be divisible by 3 and 5, return integer', function () {
        let result = fizzBuzz(13)
        result.should.be.equal(13)
    })
});
