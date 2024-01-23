let Top = document.querySelector('.top');
let Question = document.querySelectorAll('.Question');
let Answer = document.querySelectorAll('.Answer');

for (let i = 0; i < Question.length; i++) {
  Question.item(i).addEventListener('click', function () {toggle_active(Question.item(i));});
}

function toggle_active(ID) {
  console.log(Question.item(1),ID);
  for (let i = 0; i < Question.length; i++) {
    if (Question.item(i) === ID) {
      Question.item(i).classList.toggle('active');
    };
  };
};

function scrollToTop () {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 3);
  }
};

Top.addEventListener('click', function () {
  scrollToTop();
})

