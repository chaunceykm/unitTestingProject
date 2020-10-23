const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);

const { mirrorArray, hiddenCounter, myMap, avgValue } = require('../problems/phase-2')

//1. mirrorArray
describe('mirrorArray()', function () {
  it('should return a single array where the first half is the orginal array and the second half is a mirror of the first half', function () {
    
    //Arrange
    
    //Act
    
    //Assert
  })
})

//2. hiddenCounter
describe('hiddenCounter()', function () {
  
  it('should return a function that will increment the counter when invoked', function () {
   
    //Arrange
   
    let hidden1 = hiddenCounter();
    hidden1();
    let testResult1 = hidden1();

    //Act

    let hidden2 = hiddenCounter();
    let testResult2 = hidden2();

    //Assert

    expect(testResult1).to.equal(2)
    expect(testResult2).to.equal(1)
    
  })
})

//3. myMap
describe('myMap', function () {
 it("should function like the built in Array#map", function () {
    let result1 = myMap([100, 25, 81, 64], Math.sqrt);
    expect(result1).to.eql([10, 5, 9, 8]);

    let result2 = myMap(["run", "Forrest"], function (el) {
      return el.toUpperCase() + "!";
    });
    expect(result2).to.eql(["RUN!", "FORREST!"]);
  });

  it("should not call the built in Array#map", function () {
    const mapSpy = chai.spy.on(Array.prototype, "map");
    myMap([100, 25, 81, 64], Math.sqrt);
    expect(mapSpy).to.not.have.been.called();
  });
})

//4. avgValue
describe('avgValue', function () {
  it('should return the average of an array of numbers', function () {
    
    //Arrange
    
    //Act
    
    //Assert

  })
})