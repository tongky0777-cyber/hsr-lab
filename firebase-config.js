/* =========================================================
   Firebase 설정 (고객 포털 공유용) — 이 파일 하나만 채우면 됩니다.
   ---------------------------------------------------------
   · 비워두면: 코치 앱이 이 브라우저(localStorage)에만 저장돼요. 고객 포털은 꺼짐.
   · 채우면:  코치가 저장한 고객 데이터가 클라우드에 올라가고,
             고객이 개인 포털 링크로 자기 프로그램·기록을 볼 수 있어요.
   설정법은 "Firebase-설정-가이드.html" 을 참고하세요.
   ========================================================= */
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyCUuXXgeyrpvQf2MCB_kPIkgbkrp5uokzI",
  authDomain: "hsr-lab.firebaseapp.com",
  projectId: "hsr-lab",
  storageBucket: "hsr-lab.firebasestorage.app",
  messagingSenderId: "614467867861",
  appId: "1:614467867861:web:d708d84cf949c55c06fe5c"
};
/* 로그인(정식): Firebase 인증(이메일/비밀번호)을 사용해요.
   코치·관리자 계정은 Firebase 콘솔에서 만들어요. (가이드 참고) */
