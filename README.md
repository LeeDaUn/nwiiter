# 수업내용


## [05월 25일] ##
<li>05장 내용 복습</li>

<li>06-1 사진 미리보기 기능 구현</li>
Home.js input태그 이용 => 파일의 배열을 이용하여 등록<br>
reader. 함수 이용하여 사진 출력<br>
파일 취소 clear => onClearAttachment 사용 <br>

<li>06-2 사진 저장 기능 구현 </li>


## [05월 18일] ##
트위터 수정,삭제 기능 추가<br>

<li>실시간 데이터베이스 get함수 => onSnapShot함수로 변경</li>

<li>수정, 삭제를 위해 Nweet.js 추가</li>
nweet.creatorId === userObj.uid : 트윗이 uid와 로그인한 사용자의 uid를 비교 연산자로 비교 true, false값 출력


## [05월 11일] ##

### fbase import 오류 8버전 이상이면<br>
import "firebase/compat/firestore"<br>

1. Home.js 파이어스토어에 데이터 저장하는 코드 작성 p115 <br>
async-await 문 사용 <br>
2. Home.js 파이어스토어에서 문서 읽어오기 p116 <br>
실제호출 => useEffect


## [05월 04일] ##
1. 저번 학습에 못따라왔을경우<br>
// catch 삭제<br>
npm cache clean --force<br>
// node module 설치<br>
npm install<br>
<br>

2. p96 Contiue with Google, Continue with Github 팝업창 연동<br>
async await 팝업창이 올라오는 속도 제어<br>

## [04월 27일] ##
### 수업내용
파이어베이스를 통한 로그인 및 회원가입 처리<br>
createUserWithEmailAndPassword 인자로 전달받은 이메일,비밀번호를 파이어베이스 db에 저장<br>
signInWithEmailAndPassword 인자로 전달받은 이메일,비밀번호를 파이어베이스 db전달 확인 후 로그인<br>


p78~p95 액션2까지 진행


## [04월 13일] ##

### console창에 react18버전은 지원하지 않는다고 하여 17.0.2 버전으로 다운그레이드 해야함
npm install --save react@^17.0.2 react-dom@17.0.2

### 수업내용
1. 파이어베이스 깃허브 연동<br>
2. Auth 코드 입력 > Login form 구현<br>
2-1. event.preventDefault() 사용시 새로고침 문제 방지 가능<br> 
P77 까지 진행


## [04월 06일] ##

코드 오류로 깃허브부터 아예 다시만듬

### react-router-dom 버전 낮추기 
react-router-dom@5.2.0

### 오류 나는것들
책의 강의 앞에 QR코드를 활용하여 니꼴라스 영상강의 시청 후 해결가능


## [03월 30일] ##

### p40~41 파이어베이스 동작확인하기
[firebase import 8버전 이하]
import firebase from 'firebase/app'; 
import 'firebase/auth'; 
import 'firebase/firestore';

[firebase import 9버전 이상]
import firebase from 'firebase/compat/app'; 
import 'firebase/compat/auth'; 
import 'firebase/compat/firestore';


## [03월 23일] ##

### 로컬 PC에서 push
$ git config --global user.name "LeeDaUn" 
$ git config --global user.eamil dnwjd0559@gmail.com

git user name,eamil 확인
$git config user.name 
$git config user.email
