## 웹브라우저 데이터 저장

### 왜 웹브라우저 데이터를 저장해야 할까?

30분 동안 작성한 글이 잘못해서 브라우저 창을 닫았다면?
장바구니에 담은 상품이 잘못해서 브라우저 창을 닫았다면?

이런 문제들을 해결하기 위해서 웹브라우저 데이터를 저장해야 한다.

하드디스크에 파일 형태로 저장해 쓰고 읽고 한다.

#### 쿠키

- 키-값 형태로 데이터를 저장한다.
- 브라우저에 저장된다.

아이디 기억하기 기능이나 팝업 하루동안 보지 않기 기능 등이 있다.

쿠키는 왜 생겼을까?

hhtp 통신 맨 처음 있떤건 아니다 나중에 새롭게 나온 기술인데
왜 생겨났냐면 http 프로토콜 중에 stateless 라는 무상태성이라는 성질이 있는데 서로 다른 상의 시스템이 있을 때
클라이언트가 요청을하고 서버가 응답을 주는 형식이다.

그 통신 방법을 정한게 http 프로토콜인데
무상태성은 요청 각각을 독립적으로 처리한다.
요청 하나하나를 다른 요청과 연결하지 않고 독립적으로 처리한다.

http 프로토콜의 무상태성이 야기하는 문제들
로그인이 되어있는 경우에 맞는 컨텐츠를 보여줘야 되는데
무상태성을 그대로 관찰하면 서버 입장에서는 로그인 되어있는지 아닌지 알 수 없다.

쿠키는 이런 문제를 해결하기 위해서 생겨났다.
무상태성을 유지를 하면서 사용자의 상태에 따라 컨텐츠를 보여줄 수 있도록 해준다.

도메인 별로 쿠키가 저장이 된다.

서버가 세팅하면 클라이언트에 저장이 되는 구조
http 통신을 하는데 응답 헤더에 set-cookie 라는 키로 쿠키를 세팅한다.
set-cookie는 여러개 일 수 있다.
네트워크 탭의 set-cookie 의 value가 다시 key-value 형태로 저장이 된다.

자바스크립트 코드로 저장하는 방법도 있다.

- 쿠키 용량 제한
  쿠키 하나는 최대 4kb 까지 저장이 가능하다.
  사이트 하나당 대략 20개 정도의 쿠키를 저장할 수 있다.
