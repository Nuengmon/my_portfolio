let Home_link = document.querySelector('#Home_link');
let Skill_link = document.querySelector('#Skill_link');
let Project_link = document.querySelector('#Project_link');
let Contact_link = document.querySelector('#Contact_link');
let Main = document.querySelector('.main');
let Sub_list = document.querySelectorAll('.Sub_list');
let Move_list = document.querySelectorAll('.move_point');
let Comment = document.querySelectorAll('.comment');
let move_point_list = document.querySelectorAll('.move_point');

let wrap = document.getElementsByClassName('main')[0]; // 보일 영역
let content = document.getElementsByClassName('content');
let page = 0; // 영역 포지션 초기값
let lastPage = content.length - 2;

let short = document.getElementsByClassName('short').length - 1;

let icon_button = document.querySelectorAll('.icon.button');
let introduce_button = document.querySelectorAll('.introduce.button');

// let skill_image = document.querySelectorAll('.skill_image');

// console.log(skill_image);

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

    if (Hamburger_wrap.classList.item(1) == 'active') {
        Nav_arr[0].classList.add('active');
        Move_arr[0].classList.remove('invisible');
        Sub_arr[0].classList.remove('invisible');
    }
    else {
        Nav_arr[0].classList.remove('active');
        Move_arr[0].classList.add('invisible');
        Sub_arr[0].classList.add('invisible');
    }

    Main.classList.toggle('active');


});


history.scrollRestoration = "manual"

window.onload = function deviceCheck() {

    const user = navigator.userAgent;

    if (user.indexOf("iPhone") > -1 || user.indexOf("Android") > -1) {
        console.log("mobile버젼");
        console.log(user);
        document.getElementsByTagName("body")[0].style.overflow = "scroll"; // 스크롤 제한 해제


        for (let i = 0; i < move_point_list.length; i++) { // 버튼에 따라 스크롤 위치 이동
            move_point_list[i].addEventListener('click', function () {
                page = i;
                console.log(content[i].offsetTop);
                if (page < lastPage - 1) {
                    window.scrollTo({ top: content[i].offsetTop, behavior: 'smooth' });
                }
                else {
                    window.scrollTo({ top: content[i].offsetTop, behavior: 'smooth' });
                }
            });
        }


    } else {
        console.log("pc버젼");
        console.log(user);
        window.addEventListener('wheel', (e) => {
            e.preventDefault();
            console.log(e.deltaY)

            if (e.deltaY > 0) {
                page++;
            } else if (e.deltaY < 0) {
                page--;
            }
            if (page < 0) {
                page = 0;
            } else if (page > lastPage) {
                page = lastPage;
            }

            if (page < lastPage) {
                wrap.style.top = page * -100 + '%';
            }
            else {
                wrap.style.setProperty('top', 'calc(-200vh - 300px)');
            }
            // wrap.style.top('width', 'calc(100% + 224px)');
            console.log(lastPage);
            console.log(page);
        }, { passive: false }); // 디폴트 기능 제거 - 스크롤


        for (let i = 0; i < move_point_list.length; i++) {
            move_point_list[i].addEventListener('click', function () {
                page = i;

                if (page < lastPage) {
                    wrap.style.top = page * -100 + 'vh';
                }
                else {
                    wrap.style.setProperty('top', 'calc(-200vh - 300px)');
                }
                // wrap.style.top = page * -100 + 'vh';
                // console.log(page);
            });
        }
    }

    for (let i = 0; i < move_point_list.length; i++) {
        move_point_list[i].addEventListener('click', function () {
            page = i;
    
            if (page < lastPage) {
                wrap.style.top = page * -100 + 'vh';
            }
            else {
                wrap.style.setProperty('top', 'calc(-200vh - 300px)');
            }
            // wrap.style.top = page * -100 + 'vh';
            // console.log(page);
        });
    }

}

console.log(icon_button)

for (let i = 0; i < icon_button.length; i++) {
    introduce_button[i].addEventListener('mouseover', function () {
        icon_button[i].style.opacity = 0;
    });
    introduce_button[i].addEventListener('mouseout', function () {
        icon_button[i].style.opacity = 1;
    });

}




// skill_image.forEach(skill_image => {
//     addEventListener("mouseover", function () {
//         document.documentElement.style.setProperty('--toggle-message', skill_image.getAttribute("alt"));
//     })
// });
