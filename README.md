# 수업내용

## [04월 13일] ##

### console창에 react18버전은 지원하지 않는다고 하여 17.0.2 버전으로 다운그레이드 해야함
npm install --save react@^17.0.2 react-dom@17.0.2

### 수업내용
1. 파이어베이스 깃허브 연동
2. Auth 코드 입력 > Login form 구현
2-1. event.preventDefault() 사용시 새로고침 문제 방지 가능 
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
