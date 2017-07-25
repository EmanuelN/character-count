function countLetters(str){
  //background
  //remove all spaces in the string and create an empty object
  var noSpaces = str.replace(/ /g,'');
  //execute
  //parse each character and add an entry in the object
  for (var i = 0; i < noSpaces.length; i++){
    console.log(noSpaces.charAt(i))
  }
  //output
  //show me the object
  return ""
}

console.log(countLetters("twitch twitch"))