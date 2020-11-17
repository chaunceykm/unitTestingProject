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

      const newWord = new Word('dog')
      //Act
      const result = newWord.removeVowels();
      
      //Assert
      expect(result).to.equal('dg')
    })
  })
  describe('removeConsonants function', function () {
})
  it('should return the word with the consonants removed', function() {
    //Arrange
    const newWord = new Word('racecar')
    //Act
    const result = newWord.removeConsonants();
    //Assert
    expect(result).to.equal('aea')
  })
  describe('pigLatin function', function () {
})
  it('should return the word converted to pig latin', function() {
    //Arrange
    const newWord1 = new Word('banana')
    const newWord2 = new Word('able')
    //Act
    const result1 = newWord1.pigLatin()
    const result2 = newWord2.pigLatin()
    //Assert
    expect(result1).to.equal('ananabay')
    expect(result2).to.equal('ableyay')
  })
})