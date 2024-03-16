let userName = prompt("ismingizni kiriting")
let letterName = prompt('harif kiriting')
let natija = userName.includes(letterName)

if(natija == true) {
    alert(`siz kiritga harif ${letterName} ismda  bor`)
}if(natija == false) {
    alert(`siz kiritgan harif ${letterName} ismda yoq`)
}