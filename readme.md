## 42-1st-ASAP-backend

![img]('./../image/ERD-42-1st-ASAP-backend.png')

## ASAP 1차 프로젝트 Back-end 소개

- 프리미엄 스킨, 헤어, 바디 케어 제품 [이솝](https://www.aesop.com/kr/) 클론 프로젝트
- 짧은 프로젝트 기간동안 개발에 집중해야 하므로 디자인/기획 부분만 클론했습니다.
- 개발은 초기 세팅부터 전부 직접 구현했으며, 아래 데모 영상에서 보이는 부분은 모두 백앤드와 연결하여 실제 사용할 수 있는 서비스 수준으로 개발한 것입니다.

### 개발 인원 및 기간

- 개발기간 : 2023/2/4 ~ 2023/2/17 (2주)
- 개발 인원 : 프론트엔드 3명, 백엔드 2명
  - `FRONTEND`: 김수현, 김한솔, 이수민
  - `BACKEND`: 장주성, 최원경
- [백엔드 github 링크](https://github.com/wecode-bootcamp-korea/42-1st-ASAP-backend)
- [프론트엔드 github 링크](https://github.com/wecode-bootcamp-korea/42-1st-ASAP-frontend)

<br>

## 적용 기술 및 구현 기능

### 적용 기술

> - Back-End : Javascript, Node.js, Express.js, jwt, Bcrypt, My SQL, dbmate
> - Common : RESTful API
> - 협업: Github, Slack, Notion, Trello, Agile Process (Scrum), dbdiagram

### 구현 기능

#### User

회원가입

- Validation-check.js middleware를 작성하여 정규표현식을 활용한 유효성 검사, Bcrypt를 사용한 비밀번호 암호화

로그인

- bcrypt로 암호화한 비밀번호 다시 복호화하여 일치여부 확인, 일치하면 jwt 토큰 발급

인가

- Auth.js middleware를 작성하여 인가가 필요한 모든 API에 적용

#### Product

상품 리스트 (필터링)

- 메인 및 서브카테고리 별 상품 리스트 조회
- 서브카테고리 상품 필터링 기능 구현
- 쿼리빌더를 이용한 쿼리문 작성

상품 디테일

- 상품 상세페이지 조회

#### Cart

장바구니

- 장바구니에 상품 추가, 장바구니 수정, 장바구니 삭제, 장바구니 조회 기능 구현

#### Order

주문 결제

- typeorm transcation 기능을 이용하여 회원가입 성공시 받은 포인트로 결제 기능 구현

## 시연 영상

[Video Link](https://youtu.be/oADqkrk6GPM)

## API Documentation

[API Documentation](https://documenter.getpostman.com/view/25414601/2s935uGLTH)

## ERD

![img]('./../image/ERD-42-1st-ASAP-backend.png')
<br>

## Reference

- 이 프로젝트는 [이솝](https://www.aesop.com/kr/) 사이트를 참조하여 학습목적으로 만들었습니다.
- 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
- 이 프로젝트에서 사용하고 있는 사진 대부분은 위코드에서 구매한 것이므로 해당 프로젝트 외부인이 사용할 수 없습니다.
