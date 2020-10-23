const chai = require("chai");
const expect = chai.expect;

const { Word } = require('../problems/phase-3')
describe('Word', function () {
  describe('Word constructor function', function () {
    it('should have a "word" property', function() {
      //Arrange & Act
      const newWord = new Word('computer')

      //Assert
      expect(newWord).to.have.property('word')
      
    })
     it('should set the "word" property when a new word is created', function() {
      //Arrange & Act
      const newWord = new Word('banana')
      
      //Assert
       
       expect(newWord.word).to.equal('banana')
    })
  })
  describe('removeVowels function', function () {
    it('should return a the word with all vowels removed', function() {
      //Arrange
      
      //Act
      
      //Assert
    })
  })
  describe('removeConsonents function', function () {
})
  it('should return the word with the consonents removed', function() {
    //Arrange
    
    //Act
    
    //Assert
  })
  describe('pigLatin function', function () {
})
  it('should return the word converted to pig latin', function() {
    //Arrange
    
    //Act
    
    //Assert
  })
})