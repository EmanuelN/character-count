function countLetters(str){
  //background
  //remove all spaces in the string and create an empty object
  var noSpaces = str.replace(/ /g,'')
  var letters = {}
  //execute
  //parse each character and add an entry in the object
  for (var i = 0; i < noSpaces.length; i++){
    letters[(noSpaces.charAt(i))] = (letters[(noSpaces.charAt(i))] || 0) + 1
  }
  //output
  //show me the object
  return letters
}