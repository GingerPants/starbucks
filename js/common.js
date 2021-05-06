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


// Find this year
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //2021

