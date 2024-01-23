// let Home = document.querySelector('#Home');
// let Skill = document.querySelector('#Skill');
// let Project = document.querySelector('#Project');
// let Contact = document.querySelector('#Contact');

let Home_link = document.querySelector('#Home_link');
let Skill_link = document.querySelector('#Skill_link');
let Project_link = document.querySelector('#Project_link');
let Contact_link = document.querySelector('#Contact_link');
let Main = document.querySelector('.main');
let Sub_list = document.querySelectorAll('.Sub_list');
let Move_list = document.querySelectorAll('.move_point');

// nav를 누르면 하위 레이아웃을 활성화 시켜주는 함수
function Switch_toggle(ID) {
    ID.classList.add('active');

    let Nav_arr = [Home_link, Skill_link, Project_link, Contact_link];
    let Sub_arr = [];
    let Move_arr = [];

    for (i = 0; i < Sub_list.length; i++) {
        Sub_arr.push(Sub_list.item(i));
        
    }
    for (i = 0; i < Move_list.length; i++) {
        Move_arr.push(Move_list.item(i));
    }

    for (i = 0; i < Nav_arr.length; i++) {
        if (Nav_arr[i] === ID) {
            Nav_arr.splice(i, 1);
            Sub_arr[i].classList.remove('invisible');
            Sub_arr.splice(i, 1);
            i--;
        }
    }
    
    for (i = 0; i < Move_arr.length; i++) {
        Move_arr[i].classList.remove('invisible');
        Move_arr.splice(i, 1);
        i--;

    }

    for (i = 0; i < Nav_arr.length; i++) {
        Nav_arr[i].classList.remove('active');
        Sub_arr[i].classList.add('invisible');
    }

    for (i = 0; i < Move_arr.length; i++) {
        Move_arr[i].classList.add('invisible');

    }

};

Home_link.addEventListener('click', function () { Switch_toggle(Home_link) });
Skill_link.addEventListener('click', function () { Switch_toggle(Skill_link) });
Project_link.addEventListener('click', function () { Switch_toggle(Project_link) });
Contact_link.addEventListener('click', function () { Switch_toggle(Contact_link) });

let Hamburger = document.querySelector('.hamburger');
let Hamburger_wrap = document.querySelector('.hamburger_wrap');


// 햄버거 버튼을 누르면 활성화 / 비활성화 시켜주는 함수
Hamburger.addEventListener('click', function () {
    let Nav_arr = [Home_link, Skill_link, Project_link, Contact_link];
    let Sub_arr = [];
    let Move_arr = [];

    for (i = 0; i < Sub_list.length; i++) {
        Sub_arr.push(Sub_list.item(i));
        Move_arr.push(Move_list.item(i));
    }

    Hamburger.classList.toggle('active');
    Hamburger_wrap.classList.toggle('active');


    for (i = 0; i < Nav_arr.length; i++) {
        Nav_arr[i].classList.remove('active');
        Sub_arr[i].classList.add('invisible');
        Move_arr[i].classList.add('invisible');

    }

    if (Hamburger.classList.item('active')) {
        Nav_arr[0].classList.add('active');
        Move_arr[0].classList.remove('invisible');
        Sub_arr[0].classList.remove('invisible');
    }

    Main.classList.toggle('active');






    

});

