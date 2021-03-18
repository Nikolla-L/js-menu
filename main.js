const body = document.querySelector('body');
body.style.margin= "0 auto";
body.style.backgroundImage = 'url("5.jpg")';
body.style.backgroundRepeat = "no-repeat";
body.style.backgroundSize = "cover";
body.style.backgroundAttachment = "fixed";
body.style.maxWidth = "1920px";
//ჰედერი -----------------------------------------------------------------------------------------------------------------

const header = document.createElement('header');
const logo = document.querySelector('.logo');
const nav = document.createElement('nav');
let ul = document.createElement('ul');

//გასტილვა
header.style.display = "flex";
header.style.alignItems = "center";
header.style.justifyContent = "space-between";
header.style.backgroundColor = "rgba(30, 255, 0, 0.267)";
header.style.width = "100%";
header.style.height = "150px";
header.style.borderRadius="100% 0% 12% 88% / 0% 22% 15% 27% ";
header.style.boxShadow="rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset";
header.style.position = "fixed";
header.style.zIndex = "10";
header.style.transition = "1s";
header.classList.add('blur-background');
ul.style.display="flex";
ul.style.width = " 45.572916666666664vw";
ul.style.justifyContent = "space-between";
ul.classList.add('menu-list');

logo.style.display = "block";
logo.style.backgroundColor = "rgba(0, 255, 255, 0.671)";
logo.style.borderRadius ="40px";
logo.style.height = "80px";
logo.style.marginLeft = "100px";
logo.classList.add('logo');

//დამატება ბადიში
header.appendChild(logo);
function hoverList(item){
    item.style.borderBottom = "1px solid white";
}
function notHoverList(item){
    item.style.borderBottom = "none";
}
for(let i = 0; i<4; i++){
    let li = document.createElement('li');
    li.style.color = "white";
    li.style.listStyle = "none";
    li.style.cursor = "pointer";
    li.style.font = "500 16px  BPG Mrgvlovani";
    li.setAttribute('onmouseover', 'hoverList(this)');
    li.setAttribute('onmouseout', 'notHoverList(this)');
    ul.appendChild(li);
}
nav.appendChild(ul);
header.appendChild(nav);
document.body.appendChild(header);

$(window).scroll(()=>{
    if($(window).scrollTop()>0){
        header.style.height = "100px";
        header.style.borderRadius = "0";
        header.style.backgroundColor = "rgba(0, 255, 64, 0.466)";
    } else{
        header.style.height = "150px";
        header.style.borderRadius = "100% 0% 12% 88% / 0% 22% 15% 27% ";
        header.style.backgroundColor = "rgba(30, 255, 0, 0.267)";
    }
})   

ul.firstElementChild.innerText = "მთავარი";
ul.firstElementChild.nextElementSibling.innerText = "ჩვენს შესახებ";
ul.lastElementChild.previousElementSibling.innerText = "რეგისტრაცია";
let link = document.createElement('a');
link.setAttribute('href', 'faq.html');
link.setAttribute('target', '_blank');
link.innerText = "FAQ";
link.style.color="white";
link.style.textDecoration="none";
ul.lastElementChild.appendChild(link);
//სოციალ აიქონები
let social_ul = document.createElement('ul');
social_ul.style.display="flex";
social_ul.style.width = "250px";
social_ul.style.justifyContent="space-between";
social_ul.style.marginRight = "6.510416666666667vw";
social_ul.style.fontSize = "40px";
social_ul.classList.add('social-icons');

for(let i = 0; i<4; i++){
    let li = document.createElement('li');
    li.style.color = "white";
    li.style.listStyle = "none";
    li.style.cursor = "pointer";
    social_ul.appendChild(li);
}
function hoverIcon(item){
    if(item == gitHub){
        item.style.color = "violet";
    } else if(item == fb){
        item.style.color = "#4267B2";
    } else if(item == ytb){
        item.style.color = "red";
    } else if(item == twit){
        item.style.color = "#1DA1F2";
    }
}
function notHoverIcon(item){
    item.style.color = "white";
}
const gitHub = document.createElement('i');
gitHub.style.transition="1s";
gitHub.classList.add('fab');
gitHub.classList.add('fa-github-square');
gitHub.setAttribute('onmouseover', 'hoverIcon(this)');
gitHub.setAttribute('onmouseout', 'notHoverIcon(this)');

const fb = document.createElement('i');
fb.style.transition="1s";
fb.classList.add('fab');
fb.classList.add('fa-facebook-square');
fb.setAttribute('onmouseover', 'hoverIcon(this)');
fb.setAttribute('onmouseout', 'notHoverIcon(this)');

const ytb = document.createElement('i');
ytb.style.transition="1s";
ytb.classList.add('fa'); 
ytb.classList.add('fa-youtube-play');
ytb.setAttribute('onmouseover', 'hoverIcon(this)');
ytb.setAttribute('onmouseout', 'notHoverIcon(this)');

const twit = document.createElement('i');
twit.style.transition="1s";
twit.classList.add('fa');
twit.classList.add('fa-twitter-square');
twit.setAttribute('onmouseover', 'hoverIcon(this)');
twit.setAttribute('onmouseout', 'notHoverIcon(this)');

social_ul.firstElementChild.appendChild(fb);
social_ul.firstElementChild.nextElementSibling.appendChild(gitHub);
social_ul.lastElementChild.previousElementSibling.appendChild(ytb);
social_ul.lastElementChild.appendChild(twit);
header.appendChild(social_ul);
// ფორმა------------------------------------------------------------------------------------------------------------------

const form = document.createElement('form');
const firstName = document.createElement('input');
const lastName = document.createElement('input');
const email = document.createElement('input');
const aboutYou = document.createElement('textarea');
const submit = document.createElement('button');
const userIcon = document.createElement('i');


userIcon.classList.add("fa");
userIcon.classList.add("fa-user-circle");
userIcon.setAttribute("aria-hidden", "true");


document.body.appendChild(form);
form.appendChild(userIcon);
form.appendChild(firstName);
form.appendChild(lastName);
form.appendChild(email);
form.appendChild(aboutYou);
form.appendChild(submit);
submit.innerText = "გაგზავნა";

//ატრიბუტების დამატება
firstName.setAttribute('placeholder', 'სახელი');
firstName.setAttribute('type', 'text');
firstName.setAttribute('name', 'firstName');

lastName.setAttribute('placeholder', 'გვარი');
lastName.setAttribute('type', 'text');
lastName.setAttribute('name', 'lastName');

email.setAttribute('placeholder', 'email');
email.setAttribute('type', 'email');
email.setAttribute('name', 'email');

aboutYou.setAttribute('placeholder', 'მოგვიყევით რამე თქვენს შესახებ...');
aboutYou.setAttribute('name', 'info');
aboutYou.setAttribute('onfocus', 'hoverInput(this)');
aboutYou.setAttribute('onblur', 'notHoverInput(this)');


submit.setAttribute('type', 'submit');
submit.setAttribute('onmouseover', 'hover(this)');
submit.setAttribute('onmouseout', 'notHover(this)');
function hover(item){
    item.style.backgroundColor  ="rgba(255, 255, 255, 0.808)";
    item.style.color = "black";
    item.style.fontWeight = "bold";
}
function notHover(item){
    item.style.backgroundColor ="rgba(255, 255, 255, 0.308)";
    item.style.color="white";
    item.style.fontWeight = "normal";
}


//form ელემენტების გასტილვა
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.alignItems = "center";


form.style.width = "40%";
form.style.minWidth = "280px";
form.style.display = "flex";
form.style.flexDirection = "column";
form.style.alignItems = "center";
form.style.borderRadius = "20px";
form.style.border = "2px white solid";
form.style.marginTop = "200px";
form.style.marginBottom = "50px";
form.classList.add('blur-background');

let inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    input.style.marginTop = "20px";
    input.style.width = "250px";
    input.style.height = "60px";
    input.style.borderRadius = "30px";
    input.style.backgroundColor = "rgba(255, 255, 255, 0)";
    input.style.border = "2px white solid";
    input.style.outline = "none";
    input.style.textIndent = "15px";
    input.style.color = "white";
    input.style.font = "500 14px  BPG Mrgvlovani, poppins";
    input.setAttribute('onfocus', 'hoverInput(this)');
    input.setAttribute('onblur', 'notHoverInput(this)');
});
function hoverInput(item){
    item.style.backgroundColor = "rgba(231, 231, 231, 0.219)";
}
function notHoverInput(item){
    item.style.backgroundColor = "rgba(255, 255, 255, 0)";
}
userIcon.style.color = "white";
userIcon.style.marginTop = "50px";
userIcon.style.marginBottom = "20px";
userIcon.style.fontSize = "61px";

aboutYou.style.width = "60%";
aboutYou.style.height = "100px";
aboutYou.style.backgroundColor = "rgba(255, 255, 255, 0)";
aboutYou.style.border = "2px white solid";
aboutYou.style.borderRadius = "30px";
aboutYou.style.marginTop = "30px";
aboutYou.style.outline = "none";
aboutYou.style.resize = "none";
aboutYou.style.font = "500 14px  BPG Mrgvlovani";
aboutYou.style.color = "white";
aboutYou.style.textIndent = "15px";

submit.style.backgroundColor = "rgba(255, 255, 255, 0.308)";
submit.style.width = "150px";
submit.style.height = "40px";
submit.style.border = "2px white solid";
submit.style.borderRadius = "20px";
submit.style.font = "500 14px  BPG Mrgvlovani, poppins";
submit.style.color = "white";
submit.style.outline = "none";
submit.style.cursor = "pointer";
submit.style.transition = "1s";
submit.style.marginTop = "30px";
submit.style.marginBottom = "50px";
submit.style.boxShadow = "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset";

//ფორმის ვალიდაცია-----------------------------------------------------------------------
$(submit).click(()=>{
    if($(firstName).val() == '' ||
       $(lastName).val() == '' ||
       $(email).val()== '' ||
       $(aboutYou).val() == ''){
           alert("გთხოვთ შეავსოთ ფორმის ველები სრულყოფილად");
           return false;
       } else return true;
});


let bar = document.createElement('i');
bar.classList.add('fa');
bar.classList.add('fa-bars');
bar.style.color = "white";
bar.style.fontSize = "32px";
bar.style.cursor = "pointer";
bar.style.marginRight = "5%";
bar.style.display = "none";
bar.style.flexDirection = "column";
bar.style.alignItems = 'flex-start';
bar.style.transition = "0.5s";
header.appendChild(bar);

let bar_ul = document.createElement('ul');
bar_ul.style.paddingLeft = "0";
bar_ul.style.marginTop = "200px";
for(let i=0; i<4; i++){
    let bar_li = document.createElement('li');
    bar_li.style.listStyle = "none";
    bar_li.style.color = "white";
    bar_li.style.font = "500 14px  BPG Mrgvlovani";
    bar_li.style.height = "60px";
    bar_li.style.display = "flex";
    bar_li.style.alignItems = "center";
    bar_li.style.justifyContent = "center";
    bar_li.style.cursor = "pointer";
    bar_li.style.width = "100%";
    bar_li.setAttribute('onmouseover', 'hoverInput(this)');
    bar_li.setAttribute('onmouseout', 'notHoverInput(this)');
    bar_ul.appendChild(bar_li);
}

bar_ul.firstElementChild.innerText = "მთავარი";
bar_ul.firstElementChild.nextElementSibling.innerText = "ჩვენს შესახებ";
bar_ul.lastElementChild.previousElementSibling.innerText = "რეგისტრაცია";
let bar_link = document.createElement('a');
bar_link.setAttribute('href', 'faq.html');
bar_link.setAttribute('target', '_blank');
bar_link.innerText = "FAQ";
bar_link.style.color="white";
bar_link.style.textDecoration="none";
bar_ul.lastElementChild.appendChild(bar_link);

let menu_list= document.createElement('div');
menu_list.classList.add("blur-background");
menu_list.style.width = "80%";
menu_list.style.minWidth = "250px"
menu_list.style.height = "100vh";
menu_list.style.backgroundColor = "rgba(255, 255, 0, 0.253)";
menu_list.style.position = "fixed";
menu_list.style.zIndex = "2";
menu_list.style.left = "0";
menu_list.style.transition = "1s";
menu_list.style.transform = "translate(-100%)";
document.body.appendChild(menu_list);
bar.addEventListener('click', ()=>{
    if(!menu_list.classList.contains('show')){
        menu_list.style.transform = "translate(0)";
        menu_list.classList.add('show');
        bar.style.color = "rgba(255, 30, 30, 0.842)";
        bar.classList.add('fa-times');
        bar.classList.remove('fa-bars');
    }else{
        menu_list.style.transform = "translate(-100%)";
        menu_list.classList.remove('show');
        bar.style.color = "white";
        bar.classList.add('fa-bars');
        bar.classList.remove('fa-times');
    }
})
menu_list.appendChild(bar_ul);

bar_social_ul = document.createElement('ul');
bar_social_ul.style.display="flex";
bar_social_ul.style.width = "200px";
bar_social_ul.style.marginLeft = "50%";
bar_social_ul.style.transform = "translate(-50%, 0)";
bar_social_ul.style.justifyContent="space-between";
bar_social_ul.style.fontSize = "40px";
bar_social_ul.classList.add('social-icons');

for(let i = 0; i<4; i++){
    let li = document.createElement('li');
    li.style.color = "white";
    li.style.listStyle = "none";
    li.style.cursor = "pointer";
    bar_social_ul.appendChild(li);
}
function barHoverIcon(item){
    if(item == barGitHub){
        item.style.color = "violet";
    } else if(item == barFb){
        item.style.color = "#4267B2";
    } else if(item == barYtb){
        item.style.color = "red";
    } else if(item == barTwit){
        item.style.color = "#1DA1F2";
    }
}
function notBarHoverIcon(item){
    item.style.color = "white";
}
const barGitHub = document.createElement('i');
barGitHub.style.transition="1s";
barGitHub.classList.add('fab');
barGitHub.classList.add('fa-github-square');
barGitHub.setAttribute('onmouseover', 'barHoverIcon(this)');
barGitHub.setAttribute('onmouseout', 'notBarHoverIcon(this)');

const barFb = document.createElement('i');
barFb.style.transition="1s";
barFb.classList.add('fab');
barFb.classList.add('fa-facebook-square');
barFb.setAttribute('onmouseover', 'barHoverIcon(this)');
barFb.setAttribute('onmouseout', 'notBarHoverIcon(this)');

const barYtb= document.createElement('i');
barYtb.style.transition="1s";
barYtb.classList.add('fa'); 
barYtb.classList.add('fa-youtube-play');
barYtb.setAttribute('onmouseover', 'barHoverIcon(this)');
barYtb.setAttribute('onmouseout', 'notBarHoverIcon(this)');

const barTwit= document.createElement('i');
barTwit.style.transition="1s";
barTwit.classList.add('fa');
barTwit.classList.add('fa-twitter-square');
barTwit.setAttribute('onmouseover', 'barHoverIcon(this)');
barTwit.setAttribute('onmouseout', 'notBarHoverIcon(this)');

bar_social_ul.firstElementChild.appendChild(barFb);
bar_social_ul.firstElementChild.nextElementSibling.appendChild(barGitHub);
bar_social_ul.lastElementChild.previousElementSibling.appendChild(barYtb);
bar_social_ul.lastElementChild.appendChild(barTwit);
menu_list.appendChild(bar_social_ul);

//fixed colors bar--------------------------------------------------------------
const colorBar = document.createElement('div');
const redColor = document.createElement('div');
const blueColor = document.createElement('div');
const greenColor = document.createElement('div');

redColor.style.width = "15px";
redColor.style.height = "15px";
redColor.style.cursor = "pointer";
blueColor.style.width = "15px";
blueColor.style.height = "15px";
blueColor.style.cursor = "pointer";
greenColor.style.width ="15px";
greenColor.style.height = "15px";
greenColor.style.cursor = "pointer";
redColor.style.backgroundColor = "red";
blueColor.style.backgroundColor = "blue";
greenColor.style.backgroundColor = "green";

colorBar.style.borderRadius = "3px";
colorBar.style.boxShadow = "rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px";
colorBar.style.right = "0";
colorBar.style.top = "50%";
colorBar.style.transform = "translate(0, -50%)";
colorBar.style.width = "30px";
colorBar.style.height = "90px";
colorBar.classList.add('blur-background');
colorBar.style.backgroundColor = "rgba(15, 161, 180, 0.404)";
colorBar.style.display = "flex";
colorBar.style.flexDirection = "column";
colorBar.style.justifyContent = "space-around";
colorBar.style.alignItems = "center";
colorBar.style.position = "fixed";
colorBar.appendChild(redColor);
colorBar.appendChild(blueColor);
colorBar.appendChild(greenColor);
document.body.appendChild(colorBar);
redColor.addEventListener('click', ()=>{
    localStorage.removeItem('color');
    localStorage.setItem('color', "rgba(255, 47, 47, 0.616)");
    window.location.reload();
})
greenColor.addEventListener('click', ()=>{
    localStorage.removeItem('color');
    localStorage.setItem('color',"rgba(30, 255, 0, 0.267)");
    window.location.reload();
})
blueColor.addEventListener('click', ()=>{
    localStorage.removeItem('color');
    localStorage.setItem('color', "rgba(0, 0, 255, 0.39)");
    window.location.reload();
})
 header.style.backgroundColor = localStorage.getItem('color');

 $(window).scroll(()=>{
    if($(window).scrollTop()>0){
        header.style.backgroundColor = localStorage.getItem('color');
    } else{
        header.style.backgroundColor = localStorage.getItem('color');
    }
}) 
//local storage-ში გაშვება-------------------------------------------------------------------------------
var i = 0;

if(localStorage.length != 0){
    i = localStorage.length;
}
submit.addEventListener('click', ()=>{
    if(firstName.value != '' &&
        lastName.value != '' &&
        email.value != '' &&
        aboutYou.value != ''){
            let userInfo ={
                name: firstName.value,
                surname: lastName.value,
                email: email.value,
                info: aboutYou.value,
            };
            localStorage.setItem(userInfo.name, JSON.stringify(userInfo)); 
            firstName.value = '';
            lastName.value = '';
            email.value = '';
            aboutYou.value = '';
            i++;
        }
})
function red(x){
    x.style.color = "red";
}
function white(x){
    x.style.color = "white";
}
Object.keys(localStorage).forEach(function(key){
        if(key !== 'color'){
            let user = JSON.parse(localStorage.getItem(key));
        let block = document.createElement('div');
        let blockName = document.createElement('h1');
        blockName.style.marginLeft  = "5%";
        let blockSurname = document.createElement('h2');
        let blockEmail = document.createElement('h3');
        let about = document.createElement('p');
        let close = document.createElement('i');
        close.classList.add('fa');
        close.classList.add('fa-times-circle-o');
        close.style.cursor = "pointer";
        close.style.fontSize = "30px";
        close.style.transition = "0.5s";
        close.style.marginRight = "5%";
        close.addEventListener('click', ()=>{
            localStorage.removeItem(key);
            window.location.reload();
        });
        close.setAttribute("onmouseover", 'red(this)');
        close.setAttribute("onmouseout", 'white(this)');
        block.style.cursor = "context-menu";
        block.style.boxShadow="rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset";
        block.style.display = "flex";
        block.style.alignItems = "center";
        block.style.justifyContent = "space-between";
        block.style.width = "80%";
        block.style.color = "white";
        block.style.backgroundColor = "rgba(255, 50, 84, 0.24)";
        block.style.fontFamily = "poppins, BPG Mrgvlovani";
        block.style.height = "100px";
        block.style.borderRadius = "10px";
        block.style.marginTop = "10px";
        block.style.marginBottom = "10px";
        block.classList.add('blur-background');
        blockName.innerHTML = user.name;
        blockSurname.innerHTML = user.surname;
        blockEmail.innerHTML = user.email;
        about.innerHTML = user.info;
        block.appendChild(blockName);
        block.appendChild(blockSurname);
        block.appendChild(blockEmail);
        block.appendChild(about);
        block.appendChild(close);
        document.body.appendChild(block);
        const mediaQuery = window.matchMedia('(max-width:800px)');
        mediaqueryresponse(mediaQuery);
        mediaQuery.addListener(mediaqueryresponse);
        function mediaqueryresponse(mediaQuery){
            if (mediaQuery.matches) {
                block.style.flexDirection = "column";
                block.style.height = "max-content";
                close.style.marginRight = "0";
                close.style.marginBottom = "10px";
                blockName.style.marginLeft = "0";
                block.style.justifyContent = "space-around";
                block.classList.add('fontSize');
            } else{
                block.style.flexDirection = "row";
                block.style.height = "100px";
                close.style.marginRight = "5%";
                close.style.marginBottom = "0";
                blockName.style.marginLeft = "5%";
                block.style.justifyContent = "space-between";
                block.classList.remove('fontSize');
            }
        }
        }
 });

// რესპონსიულობა----------------------------------------------------
const mediaQuery = window.matchMedia('(max-width:931px)');
mediaqueryresponse(mediaQuery);
mediaQuery.addListener(mediaqueryresponse);
function mediaqueryresponse(mediaQuery){
    if (mediaQuery.matches) {
        ul.style.display = "none";
        social_ul.style.display ="none";
        bar.style.display = "flex";
        menu_list.style.display = "block";
        logo.style.marginLeft = "10%";
    } else{
        ul.style.display = "flex";
        social_ul.style.display="flex";
        bar.style.display = "none";
        menu_list.style.display = "none";
        logo.style.marginLeft = "100px";
    }
}
