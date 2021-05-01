// youtube 소스코드 복사를 하면 loop 이나 무음기능 사용을 할 수 없으므로 이 js를 통해 컨트롤

 // 2. This code loads the IFrame Player API code asynchronously.
 var tag = document.createElement('script');

 tag.src = "https://www.youtube.com/iframe_api";
 var firstScriptTag = document.getElementsByTagName('script')[0];
 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

 // 3. This function creates an <iframe> (and YouTube player)
 //    after the API code downloads.
 function onYouTubeIframeAPIReady() { // 이 function 이름은 절대로 바꿔쓰면 안됨.
  //  <div id="player"></div>
   new YT.Player('player', { // #player 라고 하면 안됨.
     videoId: 'An6LvWQuj_8', // 최초 재생할 유뷰브 영상 ID, 중요
     playerVars: {
       autoplay: true,
       loop: true,
       playlist: 'An6LvWQuj_8' // 반복 재생할 유튜브 영상 ID 목록
     }, // 무음 기능이 여기에 없어 밑에 따로 설정
     events: {
       onReady: function(event) { // onReady (준비)가 되면 function 실행, function 은 mute()
         event.target.mute() // 음소거
       }
     }
   });
 }