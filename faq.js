const body = document.querySelector('body');
body.style.margin= "0 auto";
body.style.backgroundImage = 'url("3.jpg")';
body.style.backgroundRepeat = "no-repeat";
body.style.backgroundSize = "cover";
body.style.backgroundAttachment = "fixed";
body.style.maxWidth = "1920px";

const back = document.createElement('a');
back.style.marginLeft = "50%";
back.style.transform = "translate(-50%, 0)";
back.style.textDecoration = "none";
back.style.font = "600 16px BPG Mrgvlovani";
back.style.color = "rgb(0, 255, 0)";
back.innerText = "უკან";
back.setAttribute('href', 'index.html');
document.body.appendChild(back);
//faqs-----------------------------------------------
const faqContainer = document.createElement('section');
faqContainer.style.width = "80%";
faqContainer.style.margin = "100px auto";

const question1 = document.createElement('button');
const question2 = document.createElement('button');
const question3 = document.createElement('button');
const question4 = document.createElement('button');
const question5 = document.createElement('button');
const question6 = document.createElement('button');

const answer1_wrapper = document.createElement('div');
const answer2_wrapper = document.createElement('div');
const answer3_wrapper = document.createElement('div');
const answer4_wrapper = document.createElement('div');
const answer5_wrapper = document.createElement('div');
const answer6_wrapper = document.createElement('div');

const answer1 = document.createElement('p');
const answer2 = document.createElement('p');
const answer3 = document.createElement('p');
const answer4 = document.createElement('p');
const answer5 = document.createElement('p');
const answer6 = document.createElement('p');


question1.innerHTML = "What are the differences between null and undefined?";
question2.innerHTML = "What is the difference between getElementsById, querySelector or querySelectorAll?";
question3.innerHTML = "What are the differences between == and ===?";
question4.innerHTML = "What is Scope of variable? What is Global scope and Local scope?";
question5.innerHTML = "Why is JavaScript so hard to learn?";
question6.innerHTML = "თავს ზემოთ ძალა არაა და თავი რომევიკლა იქანა არ მიგიღებენო, არც აქანა გავჩერდე არც იქანა , სა წევიდე? ";

answer1.innerHTML = 'In JavaScript, undefined means, the value of the variable is not yet defined. And typeof undefined is also "undefined". We are getting undefined in JavaScript in some ways, like: declaring a variable without assigning any value to it, store a function return value to a variable but the function does not return anything, return statement does not return any values, a function parameter does not passed and the global variable undefined. null means empty or non-existent value which is used to indicate “no value”. Even though typeof null returns object, null is primitive type and not an object.';
answer2.innerHTML = 'getElementsById returns a single element that matches the id. Since id is an unique value, we cannot select more than one element. If there is no element with the given id, then this function returns null. querySelector can process complex selectors like combination of elements, id, class and children nodes. It returns one element only even though the selector matches many. querySelectorAll is same like querySelector, but this will return all the matching elements in the document.';
answer3.innerHTML = "The == will not check the type of the operands whereas === checks both type and value of the operands. Other way of saying is, == will convert the operands to same type and then do the comparison. But === does not do any conversion. It will simply return falseif any of them is in different type.";
answer4.innerHTML = 'Scope means a set of rules to the compiler to look for a variable in the program or how the parser resolves the value of a variable. In JavaScript, we have two kinds of scopes: Local and Global. If we have created a variable outside a function it is a global variable and can access from anywhere in our program. A variable declared inside a function has local scope. And they can be accessed from within the function, but not from outside of it.';
answer5.innerHTML = "JavaScript is so hard to learn because it's an asynchronous programming language. It's also single-threaded, which means it uses its asynchronous nature in a radically different way than most other programming languages. What do I mean by asynchronous? ... Or we could communicate asynchronously.";
answer6.innerHTML = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla tenetur eum non amet. Eum saepe debitis porro reprehenderit. Ipsam molestiae amet voluptatum sunt laudantium odit necessitatibus illum unde error numquam!";

faqContainer.appendChild(question1);
answer1_wrapper.appendChild(answer1);
faqContainer.appendChild(answer1_wrapper);
faqContainer.appendChild(question2);
answer2_wrapper.appendChild(answer2);
faqContainer.appendChild(answer2_wrapper);
faqContainer.appendChild(question3);
answer3_wrapper.appendChild(answer3);
faqContainer.appendChild(answer3_wrapper);
faqContainer.appendChild(question4);
answer4_wrapper.appendChild(answer4);
faqContainer.appendChild(answer4_wrapper);
faqContainer.appendChild(question5);
answer5_wrapper.appendChild(answer5);
faqContainer.appendChild(answer5_wrapper);
faqContainer.appendChild(question6);
answer6_wrapper.appendChild(answer6);
faqContainer.appendChild(answer6_wrapper);

document.body.appendChild(faqContainer);


let answers_wrapper = document.querySelectorAll('div');
let answers = document.querySelectorAll('p');
let buttons = document.querySelectorAll('button');

function buttonHover(x){
    x.style.backgroundColor = "rgba(255, 255, 0, 0.24)";
}
function notButtonHover(x){
    x.style.backgroundColor = "rgba(255, 68, 0, 0.37)";
}
function redRemoveColor(x){
    x.style.color = "red";
}
function whiteRemoveColor(x){
    x.style.color = "white";
}
var counter = 0;
buttons.forEach(x => {
    x.setAttribute('type', 'button');
    x.style.marginTop = "20px";
    x.style.transition = "0.6s";
    x.style.width = "100%";
    x.style.minHeight = "80px";
    x.style.borderRadius = "5px";
    x.style.backgroundColor = "rgba(255, 68, 0, 0.37)";
    x.style.border="none";
    x.style.boxShadow = "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset";
    x.style.color = "white";
    x.style.font = "500 19px poppins, BPG Mrgvlovani";
    x.style.cursor = "context-menu";
    x.setAttribute('onmouseover', 'buttonHover(this)');
    x.setAttribute('onmouseout', 'notButtonHover(this)');
    x.addEventListener('click', ()=>{
        if(x.nextElementSibling.classList.contains('displayed')){
            x.nextElementSibling.style.display = 'none';
            x.nextElementSibling.classList.remove('displayed');
        } else{
            x.nextElementSibling.style.display = 'flex';
            x.nextElementSibling.classList.add('displayed');
        }
    })
    let remove  = document.createElement('i');
    remove.style.color = "wgite";
    remove.style.fontSize = "20px";
    remove.classList.add('fa');
    remove.classList.add('fa-trash-o');
    remove.style.float = "right";
    remove.style.marginRight = "5%";
    remove.style.border = "2px solid black";
    remove.stulenborderRadius = "2px";
    remove.style.borderColor = "red";
    remove.style.transition = "0.5s";
    remove.setAttribute('onmouseover', 'redRemoveColor(this)');
    remove.setAttribute('onmouseout', 'whiteRemoveColor(this)');
    remove.addEventListener('click', ()=>{
        x.nextElementSibling.remove();
        x.remove();
        counter++;
        if(counter == 6){
            alert('დავრჩით კითხვების გარეშე.');
        }
    })
    x.appendChild(remove);
});


answers.forEach(x =>{
    x.style.font = "lighter 21px poppins";
    x.style.color = "black";
    x.style.width = "90%";
    x.style.textIndent = "15px";
    x.style.cursor = "context-menu";
})

answers_wrapper.forEach(x=>{
    x.style.display = "none";
    x.style.justifyContent = "center";
    x.style.backgroundColor = "rgba(255, 255, 255, 0.74)";
    x.style.borderBottomRightRadius = "10px";
    x.style.borderBottomLeftRadius = "10px";
    x.style.boxShadow = "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset";
});
// რესპონსიულობა----------------------------------------------------
const mediaQuery = window.matchMedia('(max-width:399px)');
mediaqueryresponse(mediaQuery);
mediaQuery.addListener(mediaqueryresponse);
function mediaqueryresponse(mediaQuery){
    if (mediaQuery.matches) {
        buttons.forEach(x=>{
            x.style.fontSize = "14px";
            x.firstElementChild.style.fontSize = "16px";
        })
        answers.forEach(x =>{
            x.style.fontSize = "17px";
        })
        faqContainer.style.marginTop = "40px";
    } else{
        buttons.forEach(x=>{
            x.style.fontSize = "19px";
            x.firstElementChild.style.fontSize = "20px";
        })
        answers.forEach(x =>{
            x.style.fontSize = "21px";
        })
        faqContainer.style.marginTop = "100px";
    }
}

//პირველი კითხვის ამოძრომა 
buttons[0].nextElementSibling.classList.add('displayed');
buttons[0].nextElementSibling.style.display = "flex";