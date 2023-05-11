/*------------------------------
        variables
--------------------------------*/

/*------------------------------
        (nav mobile)
--------------------------------*/
const btnMobile = document.getElementById("mobile-on")
const divContente_mobile = document.getElementById("content-m")
const btnMore = document.getElementById("click-more")

/*------------------------------
        (login)
--------------------------------*/
// login btns
const btnLogin_header = document.getElementById("btn-login-header")
const btnLogin_header_mobile = document.getElementById("btn-login-header-mobile")
const btnBackTo = document.getElementById("back-to")
//login-div
const headerLogin = document.getElementById("header-login")
//header-div
const containerHeader = document.getElementById("container-header")

/*------------------------------
        (register)
--------------------------------*/
// register btns
const btnregister_header = document.getElementById("register")
const btnRegister_header_mobile = document.getElementById("register-mobile")
const btnBackToR = document.getElementById("back-to-r")
//register-div
const headerRegister = document.getElementById("header-register")

/*------------------------------
        (button cards)
--------------------------------*/
const card1 = document.getElementById("card1")
const card2 = document.getElementById("card2")
const card3 = document.getElementById("card3")
const card4 = document.getElementById("card4")
const card5 = document.getElementById("card5")
const card6 = document.getElementById("card6")
/*------------------------------
        (div Cards)
--------------------------------*/
const divCards1 = document.getElementById("cards-option1")
const divCards2 = document.getElementById("cards-option2")


/*------------------------------
        click for more/header
--------------------------------*/
const clickMore = document.getElementById("click-more")
//main tag
const main = document.getElementById("main")


/*------------------------------
        informative(p button)/main
--------------------------------*/
const p_ButtonInformative = document.getElementById("p-button-info")
const p_Info1 = document.getElementById("informative-p1")
const p_Info2 = document.getElementById("informative-p2")
const informativeDiv = document.getElementById("sec-informative-div")


/*------------------------------
        functions
--------------------------------*/

/*------------------------------
    function (nav-mobile)
--------------------------------*/
btnMobile.addEventListener("click", contentOn)
function contentOn(){
    divContente_mobile.classList.toggle("content-mobile-on")
    btnMobile.classList.toggle("btn-x")
}

/*------------------------------
 function add class (login)
--------------------------------*/
btnLogin_header_mobile.addEventListener("click", login)
btnLogin_header.addEventListener("click", login)
function login(){
    containerHeader.classList.add("container-header-off")
    headerLogin.classList.add("header-login-on")
}

/*-------------------------------
function remove class (login)
---------------------------------*/
btnBackTo.addEventListener("click",()=>{
    containerHeader.classList.remove("container-header-off")
    headerLogin.classList.remove("header-login-on")
})

/*------------------------------
 function add class (register)
--------------------------------*/
btnregister_header.addEventListener("click", regist)
btnRegister_header_mobile.addEventListener("click", regist)
function regist(){
    containerHeader.classList.add("container-header-off")
    headerRegister.classList.add("header-register-on")
}
/*-------------------------------
function remove class (register)
---------------------------------*/
btnBackToR.addEventListener("click",()=>{
    containerHeader.classList.remove("container-header-off")
    headerRegister.classList.remove("header-register-on")
})

/*------------------------------
    function (Cards more cards)
--------------------------------*/

function cards (){
    divCards1.classList.toggle("cards-option1-off")
    divCards2.classList.toggle("cards-option2-on")
}
let time = setInterval(cards, 5000)

setTimeout(function(){
    clearInterval(time)
}, 60000)

/*------------------------------
    function (Cards button-mobile)
--------------------------------*/
card1.addEventListener("click", ()=>{
    card1.classList.toggle("card1-on")
})
card2.addEventListener("click", ()=>{
    card2.classList.toggle("card2-on")
})
card3.addEventListener("click", ()=>{
    card3.classList.toggle("card3-on")
})
card4.addEventListener("click", ()=>{
    card4.classList.toggle("card4-on")
})
card5.addEventListener("click", ()=>{
    card5.classList.toggle("card5-on")
})
card6.addEventListener("click", ()=>{
    card6.classList.toggle("card6-on")
})

/*------------------------------
    function (button for more)
--------------------------------*/
clickMore.addEventListener("click", ()=>{
    main.classList.add("main-on")
})



/*------------------------------
    function informative (p button)
--------------------------------*/
p_ButtonInformative.addEventListener("click", ()=>{
    p_Info1.classList.add("informative-p-on")
    p_Info2.classList.add("informative-p-on")
    p_ButtonInformative.classList.add("p-button-info-off")
    informativeDiv.classList.add("sec-informative-height")
})