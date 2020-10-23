const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);

const { mirrorArray, hiddenCounter, myMap, avgValue } = require('../problems/phase-2')

//1. mirrorArray
describe('mirrorArray()', function () {
  it('should return a single array where the first half is the orginal array and the second half is a mirror of the first half', function () {
    
    //Arrange
    let array = [1, 2, 3]
    //Act
    let result = mirrorArray(array)
    //Assert
    expect(result).to.equal([1,2,3,3,2,1])
  })
})

//2. hiddenCounter
describe('hiddenCounter()', function () {
  
  it('should return a function that will increment the counter when invoked', function () {
   
    //Arrange
   
    let hidden1 = hiddenCounter();
    
    //Act
    hidden1();
    let result = hidden1();
   

    //Assert

    expect(result).to.equal(2)
    
  })
})

//3. myMap
describe('myMap', function () {
  it("should function like the built in Array#map", function () {
   //Arrange
    let array = [100, 25, 81, 64]
    let cb = Math.sqrt()
    //Act
    let result = myMap(array, cb);
    //Assert
    expect(result).to.eql([10, 5, 9, 8]);

  
  });

  it("should not call the built in Array#map", function () {
    //Arrange
    const mapSpy = chai.spy.on(Array.prototype, "map");
    //Act
    myMap([100, 25, 81, 64], Math.sqrt);
    //Assert
    expect(mapSpy).to.not.have.been.called();
  });
})

//4. avgValue
describe('avgValue', function () {
  it('should return the average of an array of numbers', function () {

    //Arrange
    let array = [2, 3, 5, 8, 10]
    //Act
    let result = avgValue(array)
    //Assert
    expect(result).to.equal(5.6)
  })
})