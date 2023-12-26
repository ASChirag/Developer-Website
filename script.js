setTimeout(function () {
    var splashscreen = document.getElementById('splashScreen');
    splashscreen.style.animation = 'slideUp 1s linear forwards';
    splashscreen.style.opacity = 1;
    
    document.getElementById('mainContent').style.display = 'flex';
},500)


var page1 = document.getElementById("Page1");
var page2 = document.getElementById("Page2");
var page3 = document.getElementById("Page3");
var page4 = document.getElementById("Page4");
var count = 0;
var next = document.getElementById("nextPage");
var prev = document.getElementById("prevPage");
var contact = document.getElementById('contactSection');
var details = document.getElementById('detailsSection');
var contactMe = document.getElementById('contactMe');

var prev1 = document.getElementById('Previous-Button-1');

var pItem1 = document.getElementById('pItem1');
var popItem1 = document.getElementById('popItem1');
var closeItem1 = document.getElementById('closeItem1');

var pItem2 = document.getElementById('pItem4')
var popItem2 = document.getElementById('popItem2');
var closeItem2 = document.getElementById('closeItem2');

var pItem3 = document.getElementById('pItem3');
var popItem3 = document.getElementById('popItem3');
var closeItem3 = document.getElementById('closeItem3');

var pItem4 = document.getElementById('pItem2');
var popItem4 = document.getElementById('popItem4');
var closeItem4 = document.getElementById('closeItem4');

var home = document.getElementById('Home');
var about = document.getElementById('About');
var portfolio = document.getElementById('Portfolio');
var credits = document.getElementById('Credits');

var submit = document.getElementById('submit');
var quoted = document.getElementById('quoted');
var closeQ = document.getElementById('closebtn');

var contactButton = document.getElementById('contactNav');

var list1 = document.getElementById('list1');
var list2 = document.getElementById('list2');
var list3 = document.getElementById('list3');
var u1 = document.getElementById('u1');
var u2 = document.getElementById('u2');
var u3 = document.getElementById('u3');

var arrow = document.getElementById('Arrow');

var contactBtn = document.getElementById('contactBtn');
var navbtn = document.getElementById('contactNav');

next.addEventListener('click',nextPagef);
function nextPagef(){
    count = count + 1; 
    if (count == 0){
        page1.style.display = 'block';
        page2.style.display = 'none';
        prev.style.display = 'none';
    }
    else if (count == 1){
        page1.style.display = 'none';
        page2.style.display = 'block';
        prev.style.display = 'block';
    }
    else if (count == 2){
        page2.style.display = 'none';
        page3.style.display = 'block';
    }
    else if (count == 3){
        page3.style.display = 'none';
        page4.style.display = 'block';
    }
    else if (count == 4){
        page4.style.display = 'none';
        details.style.display = 'none'
        contact.style.width = '2500px';
        setTimeout(function() {
            contactMe.style.display = 'block';
        },1000);
        next.style.display = 'none';
        prev.style.display = 'none';
        arrow.style.display = 'none';
    }
}

prev.addEventListener('click', prevPagef);

function prevPagef() {
    count = count - 1;
    if (count == 4){
        page4.style.display = 'none';
        details.style.display = 'none';
        prev.style.display = 'none';
        arrow.style.display = 'none';
    }
    else if (count == 3){
        page4.style.display = 'block';
        page3.style.display = 'none';
        page2.style.display = 'none';
        page1.style.display = 'none';
    }
    else if (count == 2){
        page4.style.display = 'none';
        page3.style.display = 'block';
        page2.style.display = 'none';
        page1.style.display = 'none';
    }
    else if (count == 1){
        page3.style.display = 'none';
        page2.style.display = 'block';
        page1.style.display = 'none';
        prev.style.display = 'block';
        setTimeout(() => {
            page2.style.transform = 'translateX(0)';
        }, 1000);
    }
    else if (count == 0){
        page2.style.display = 'none';
        page1.style.display = 'block';
        prev.style.display = 'none';
    }
}

prev1.addEventListener('click', prevPage1f);
function prevPage1f(){
    count = count - 1;
    if (count == 3){
        contact.style.width = '690px';
        details.style.display = 'block';
        contactMe.style.display = 'none';
        page4.style.display = 'block';
        setTimeout(function() {
            next.style.display = 'block';
            prev.style.display = 'block';
            arrow.style.display = 'block'; 
        }, 1800);  
    }
}

pItem1.addEventListener('click', pItem1Click);
closeItem1.addEventListener('click',closeItem1f);

function pItem1Click() {
    popItem1.style.display = 'block';
}

function closeItem1f() {
    popItem1.style.display = 'none';
}

pItem2.addEventListener('click', pItem2Click);
closeItem2.addEventListener('click', closeItem2f);

function pItem2Click() {
    popItem2.style.display = 'block';
}

function closeItem2f() {
    popItem2.style.display = 'none';
}

pItem3.addEventListener('click', pItem3Click);
closeItem3.addEventListener('click', closeItem3f);

function pItem3Click() {
    popItem3.style.display = 'block';
}

function closeItem3f() {
    popItem3.style.display = 'none';
}

pItem4.addEventListener('click', pItem4click);
closeItem4.addEventListener('click', closeItem4f);

function pItem4click() {
    popItem4.style.display = 'block';
}

function closeItem4f() {
    popItem4.style.display = 'none';
}

home.addEventListener('click',homeClickf);
function homeClickf() {
    location.reload();
}

about.addEventListener('click',aboutClickf);
function aboutClickf() {
    window.scrollTo(0,1000);
}

portfolio.addEventListener('click',portfolioClickf);
function portfolioClickf() {
    window.scrollTo(0,1000);
    count = 2;
    page1.style.display = 'none';
    page2.style.display = 'none';
    page3.style.display = 'block';
    page4.style.display = 'none';
    details.style.display = 'block';
    contact.style.width = '690px';
        contactMe.style.display = 'none';
    setTimeout(function(event){
        prev.style.display = 'block';
        next.style.display = 'block';
    },2000)
}

submit.addEventListener('click',submitClickf)
function submitClickf(){
    scrollTo(1000,0);
    quoted.style.display = 'block';
    setTimeout(function(){
        quoted.style.opacity = 0;
        location.reload();
    },3000)
}

function randf(){
    quoted.style.display = 'none';
}


closeQ.addEventListener('click',closeQf);
function closeQf(){
    quoted.style.display = 'none';
    location.reload();
}

contactButton.addEventListener('click',clickButtonf);
function clickButtonf(){
    count = 4;
    page1.style.display = 'none';
    page2.style.display = 'none';
    page3.style.display = 'none';
    page4.style.display = 'none';
    details.style.display = 'none';
    contact.style.width = '2500px';
    next.style.display = 'none';
    prev.style.display = 'none';
    prev1.style.display = 'block';
    contactMe.style.display = 'block'; 
    arrow.style.display = 'none';
}

list1.addEventListener('mouseover',list1Hoverf);
list1.addEventListener('mouseleave',list1Hoverf1);

list2.addEventListener('mouseover',list2Hoverf);
list2.addEventListener('mouseleave',list2Hoverf1);

list3.addEventListener('mouseover',list3Hoverf);
list3.addEventListener('mouseleave',list3Hoverf1);

function list1Hoverf(){
    u1.style.width = '45px';
}
function list1Hoverf1(){
    u1.style.width = '8px';
}

function list2Hoverf(){
    u2.style.width = '55px';
}
function list2Hoverf1(){
    u2.style.width = '8px';
}

function list3Hoverf(){
    u3.style.width = '95px';
}
function list3Hoverf1(){
    u3.style.width = '8px';
}

arrow.addEventListener('click',clickArrowf);
function clickArrowf(){
    count = 4;
    page1.style.display = 'none';
    page2.style.display = 'none';
    page3.style.display = 'none';
    page4.style.display = 'none';
    details.style.display = 'none';
    contact.style.width = '2500px';
    next.style.display = 'none';
    prev.style.display = 'none';
    prev1.style.display = 'block';
    contactMe.style.display = 'block'; 
    if (count == 4){
        arrow.style.display = 'none';
    }else{
        arrow.style.display = 'block';
    }
}

navbtn.addEventListener('click',clickBtnf);
function clickBtnf(){
    window.scrollTo(0,1000);
    count = 4;
    page1.style.display = 'none';
    page2.style.display = 'none';
    page3.style.display = 'none';
    page4.style.display = 'none';
    details.style.display = 'none';
    contact.style.width = '2500px';
    next.style.display = 'none';
    prev.style.display = 'none';
    prev1.style.display = 'block';
    contactMe.style.display = 'block'; 
    if (count == 4){
        arrow.style.display = 'none';
    }else{
        arrow.style.display = 'block';
    }

}

contactBtn.addEventListener('click',contactBtnf);
function contactBtnf(){
    count = 4;
    page1.style.display = 'none';
    page2.style.display = 'none';
    page3.style.display = 'none';
    page4.style.display = 'none';
    details.style.display = 'none';
    contact.style.width = '2500px';
    next.style.display = 'none';
    prev.style.display = 'none';
    prev1.style.display = 'block';
    contactMe.style.display = 'block'; 
    if (count == 4){
        arrow.style.display = 'none';
    }else{
        arrow.style.display = 'block';
    }
}