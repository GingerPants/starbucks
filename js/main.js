// <<--검색창 클릭하면 늘어나기 효과-->>
// 사용할 요소 찾기, El(Element) .search(클래스가 search인 요소 검색), InputEl(input 요소), document = !DOCTYPE html 과 같음(최상위). ------.search 찾기
const searchEl = document.querySelector('.search');
// .search(서치 클래스)를 찾으면 그 안에서 input 찾기
const searchInputEl = searchEl.querySelector('input');
// 클릭할 때 사용할 이벤트
searchEl.addEventListener('click', function() { // function() 핸들러
  searchInputEl.focus();
})

// <<--검색창에 돋보기 보였다 사라졌다 효과-->>
// 검색창 - 핸들러 - searchEl에 classList 객체 추가 후 add 요소 실행 - focused 클래스 추가
searchInputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused');
  // 검색창에 입력 안 되어 있을 때 보여주는 힌트 - '통합검색'  Attribute(html 속성) 를 set 하는 것. placeholder(인풋 요소에 들어갈 힌트 - '통합검색)
  searchInputEl.setAttribute('placeholder', '통합검색');
}) // focused 가 안된 상태에서는 '통합검색'이 보이면 안되는데 아직 설정이 안되어 검색창에 '통'자가 보임.

// focused 클래스 해제, '통'자가 사라짐.
searchInputEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', ' ')
})


// <<-- Badge 스크롤 내리면 사라졌다 올리면 다시 서서히 나타나는 효과 -->>
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

// gsap function 많이 사용
// 스크롤 내릴때 너무 많이 함수가 작동되는 것을 제어. 여기선 300 밀리초 즉, 0.3초 마다 작동
window.addEventListener('scroll', _.throttle(function(){
  console.log(scrollY);
  if(window.scrollY > 500){
    //badgeEl.style.display = "none";
    // 배지 숨기기 gsap.to(요소, 지속시간, 옵션)
    // gsap : animation library, to : 애니매이션 동작
    gsap.to(badgeEl, .9, {
      opacity: 0,
      display: 'none'
    });
    // Upward 화살표 보이기
    gsap.to(toTopEl, .2, {  // # 아이디 선택자 바로 사용
      // right: 30,
      // opacity: 1 ---------> 내가 작성한 것도 작동은 됨.
      x: 0
    });
  } else {
    // 배지 보이기
    //badgeEl.style.display = "block"; 갑자기 사라짐. 안 예쁨
    gsap.to(badgeEl, .9, {
      opacity: 1,
      display: 'block'
    });
    // Upward 화살표 숨기기
    gsap.to(toTopEl, .2, { // # 아이디 선택자 바로 사용
      // opacity: 1,
      // right: -50
      x: 100
    });
  }
}, 300));
// _.throttle(함수, 시간)

toTopEl.addEventListener('click', function(){
  gsap.to(window, .7, { // scrollToPlugIn 필요. cdnjs.com 에서 찾기.
    scrollTo: 0    // window(브라우저 창)을 0.7s 동안 scroll 0px 지점으로 옮겨줌.
  })
});

// <<--.visual 에 이미지 순차적으로 보이기-->>
// 
const fadeEls = document.querySelectorAll('.visual .fade-in'); // 요소 찾기class="fade-in"
fadeEls.forEach(function(fadeEl, index){ //forEach로 요소 갯수만큼 function 수행 (요소이름(단수), 갯수)
  // gsap.to(요소, 지속시간, 옵션)
  gsap.to(fadeEl, 1, {    
    delay: (index + 1) * .7, // img가 한 개씩 나옴.
    opacity: 1,
    dispaly: 'block'
  });  
});

// new Swiper(선택자, 옵션) - 문장 한줄씩 보여주기
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true, //자동재생
  loop: true //반복재생
});

new Swiper('.promotion .swiper-container', {
  // direction: 'horizontal', - 기본값임. 
  slidesPerView: 3, // 한번에 보여줄 개수 
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true,  
  loop: true,
  autoplay: {
    delay: 5000
  },
  // <-- 점선 페이지 선택 기능 -->
  pagination: {
    el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});

// awards

// new Swiper(목적지, 기능)
// 목적지: awards라는 클라스 가진 section 요소 내부에 swiper-container 라는 클라스 가진 요소를 찾아 slide 기능 추가
// 기능: 객체데이터 임 { }. key: value 형태로 추가. 
new Swiper('.awards .swiper-container', {
  // direction: 'horizontal', - 기본값임. 
  slidesPerView: 5, // 한번에 보여줄 개수 
  spaceBetween: 30, // 슬라이드 사이 여백
  centeredSlides: true,  
  loop: true,
  autoplay: true,  
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});

// <<-- folding 기능 -->>
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
// 단순히 클래스에 이름을 .hide로 넣었다가 remove 하는 기능. 효과는 css에서.
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function(){
  isHidePromotion = !isHidePromotion;
  if(isHidePromotion == false){
      // 숨김처리
      promotionEl.classList.add('hide');
  } else {
      // 보임처리
      promotionEl.classList.remove('hide');
  }
});

// <<-- floating Object -->>

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject (selector, delay, size){ // delay, size는 인수를 명확하게 하기 위해 일부러 넣은 것임. 생략해도 프로그램 돌아감.
  gsap.to(              // gasp.to( 요소, 지속시간, 옵션 );
    selector, // 요소
    random(1.5, 2.5), // 지속시간
  { // 옵션
    y: 20,
    repeat: -1, // 무한반복
    yoyo: true,
    // 구글 gsap easing 검색 -> power1 -> easeInOut 선택 -> 밑에 코드 복사
    ease: Power1.easeInOut,
    delay: random(0, delay)  
  });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


// SCROLL MAGAIN CDN

// 구글 > scrollmagin cdn 검색 > 1st one copy > index.html > before the ./js/main.js > paste.

const spyEls = document.querySelectorAll('section.scroll-spy'); // 현재 scroll-spy 클래스를 만든적 없음 
spyEls.forEach(function (spyEl){ 
  new ScrollMagic // new: 새로운 생성자 
  .Scene({ // { }는 객체 데이터
    triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정 
    triggerHook: .8 // top은 0이고 bottom은 1 이므로 0.8은 상단에서 80%에 위치. 스크롤로 spyEl가 이 지점에 오면 trigger로 function 이 실행됨.
  })
  .setClassToggle(spyEl, 'show') // toggle() : 여기서는 show 라는 class를 넣어다 뺏다 하는 역할
  .addTo(new ScrollMagic.Controller())  // 내부에 컨트롤러에 위의 요소들을 넣어 실제로 동작하게 해주는 function. 내부 내용은 좀 난해하므로 나중에.
});

// 감시하려고 하는 클라스에 .scroll-spy이라는 클라스를 강제로 붙여줌. > 이 클라스는 spyEls 로 할당됨. 
// animation 부분은 css에서 제어. js로 하면 부하가 많이 걸림.


// awards

new Swiper('.awards .swiper-slide', {
  // direction: 'horizontal', - 기본값임. 
  slidesPerView: 5, // 한번에 보여줄 개수 
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true,  
  loop: true,
  autoplay: {
    delay: 5000
  },  
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //2021

