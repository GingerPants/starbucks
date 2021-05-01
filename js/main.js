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
// 스크롤 내릴때 너무 많이 함수가 작동되는 것을 제어. 여기선 300 밀리초 즉, 0.3초 마다 작동
// gsap function 많이 사용
window.addEventListener('scroll', _.throttle(function(){
  console.log(scrollY);
  if(window.scrollY > 500){
    //badgeEl.style.display = "none";
    // 배지 숨기기 gsap.to(요소, 지속시간, 옵션)
    // gsap : animation library, to : 애니매이션 동작
    gsap.to(badgeEl, .9, {
      opacity: 0,
      display: 'none'
    })
  } else {
    // 배지 보이기
    //badgeEl.style.display = "block"; 갑자기 사라짐. 안 예쁨
    gsap.to(badgeEl, .9, {
      opacity: 1,
      display: 'block'
    })
  }  
}, 300));
// _.throttle(함수, 시간)


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

