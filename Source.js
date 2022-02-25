//variable declarations
const INPUT_TEXT = document.getElementById("translateText")
const OUTPUT_BOX = document.getElementById("outputArea")
const TEXT_AREA = document.getElementsByTagName("textarea")
const ENGLISH_TEXT = document.getElementById("english").style
const PIG_LATIN_TEXT = document.getElementById("pigLatin").style
const INFO_DISPLAY = document.getElementsByClassName("infoDisplay")
PIG_LATIN_TEXT.left = "348%"
ENGLISH_TEXT.left = "-10%"
var toPigLatin = true;



//translation functions
const pigMe = str => str.split(/(\W+)/g).map(c =>/[a-zA-Z']+/.test(c) ? c.slice(1)+c[0] +'ay': c).join('')
const unPigMe = str =>  str.split(/(\W+)/g).map(c =>/[a-zA-Z']+/.test(c) ? c.charAt(c.length-3) + c.slice(0,-3): c).join('')
const punctuationRemover = str => str.replace(/[.,\/#!$\^&\*;:{}=\-_`~()?]/g,'')
const translate = () => (toPigLatin) ? OUTPUT_BOX.innerHTML = `${pigMe(INPUT_TEXT.value)}`: OUTPUT_BOX.innerHTML = `${unPigMe(INPUT_TEXT.value)}`
//user button functions
const clearText = () => {INPUT_TEXT.value = ""; translate()}
const changeTranslateDirection = () =>
{
    if(toPigLatin) toPigLatin = false
    else toPigLatin = true

    INPUT_TEXT.value = OUTPUT_BOX.value;
    translate();
    var Pos1 = ENGLISH_TEXT.left
    ENGLISH_TEXT.left = PIG_LATIN_TEXT.left;
    PIG_LATIN_TEXT.left = Pos1;   
  }
  //below here checks for inputs to readjust the size of the boxes and auto run the translate function whenever something is pressed.
    for (let i = 0; i < TEXT_AREA.length; i++) 
    {
      TEXT_AREA[i].setAttribute("style", "height:" + (TEXT_AREA[i].scrollHeight) + "px;overflow-y:hidden;");
      TEXT_AREA[i].addEventListener("input", OnInput, false)
      TEXT_AREA[i].addEventListener("input", translate, false)      
    }
    function OnInput() 
    {
      this.style.height = "auto"
      this.style.height = (this.scrollHeight) + "px"
      OUTPUT_BOX.style.height ="auto"
      OUTPUT_BOX.style.height = (OUTPUT_BOX.scrollHeight) + "px"
      this.style.height = OUTPUT_BOX.style.height
    } 

const openMenu = () => INFO_DISPLAY[0].style.visibility = "visible"
const closeMenu = () => {
  INFO_DISPLAY[0].style.visibility = "hidden"
  INPUT_TEXT.focus()
}

console.log(newPigMe("1 testing"))
console.log(newPigMe("2 testing"))
console.log(newPigMe("3 testing!"))
console.log(newPigMe("4 testing!"))
console.log(newPigMe("5 this is a test sentance"))
