## 📝 Description

### [과제 배포 링크](https://block-odyssey-assignment-wnnv.vercel.app/)

리액트 쿼리를 사용하여 서버 상태 관리를 했습니다.
리액트 쿼리를 적용해서 페이지네이션을 구현했습니다. 
리덕스 툴킷으로 전역 상태 관리를 진행했습니다.
css 프레임워크나 UI 컴포넌트 라이브러리는 사용 금지이므로 기본 css로 작업했습니다.

## 🛠️ Dev Tools

<img src="https://img.shields.io/badge/redux_toolkit-A102CF?style=for-the-badge&logo=redux&logoColor=white"> <img src="https://img.shields.io/badge/react_query-DB7093?style=for-the-badge&logo=react-query&logoColor=white"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">

<br>

## **🖥 프로젝트 실행 방법**

### `yarn install`

### `yarn start`

<br><br>

## **📝 디렉토리 구조**

<details>
<summary>디렉토리 구조</summary>
<div markdown="1">

```
📂src
│  📄App.css
│  📄App.js
│  📄index.css
│  📄index.js
│
├─📂api
│      📄adminService.js
│      📄apiConfig.js
│      📄axiosInstance.js
│      📄httpService.js
│
├─📂assets
├─📂component
│  ├─📂elements
│  │  ├─📂button
│  │  │      📄Button.jsx
│  │  │      📄Button.module.css
│  │  │
│  │  ├─📂input
│  │  │      📄Input.jsx
│  │  │      📄Input.module.css
│  │  │
│  │  └─📂select
│  │      │  📄SelectButton.jsx
│  │      │  📄SelectButton.module.css
│  │      │
│  │      └─📂selectOptions
│  │              📄searchConditionOptions.js
│  │
│  └─📂main
│      ├─📂listItem
│      │      📄ListItem.jsx
│      │      📄ListItem.module.css
│      │
│      ├─📂listSection
│      │      📄ListSection.jsx
│      │      📄ListSection.module.css
│      │
│      ├─📂pagination
│      │      📄Pagination.jsx
│      │      📄Pagination.module.css
│      │
│      └─📂searchSection
│              📄SearchSection.jsx
│              📄SearchSection.module.css
│
├─📂pages
│  └─📂main
│          📄Main.jsx
│          📄Main.module.css
│
├─📂redux
│  │  📄store.js
│  │
│  └─📂modules
│          📄adminSlice.js
│
└─📂utils
        📄ellipsisFunction.js

```

#### 1. 📂 api 폴더

axios CRUD와 관련된 함수들을 추상화하여 관리

#### 2. 📂 components 폴더

- elements : 자주 사용하는 Button, Input, Select과 같은 재사용 빈도가 높은 컴포넌트들을 elements 폴더에서 관리
- main : admin 메인페이지에서 사용하는 데이터와 직접적으로 관련이 있는 컴포넌트들을 main 폴더에서 관리

#### 3. 📂 pages 폴더

어떤 모듈들이 결합되어 있는지 직관적으로 보여줄 수 있을만한 컴포넌트가 필요하다고 생각했습니다.  
모듈들의 결합 상태를 보여주는 컴포넌트만 관리하는 폴더

#### 5. 📂 redux 폴더

redux와 관련되어 있는 폴더 store와 slice 존재

#### 6. 📂 utils 폴더

기타 함수들을 관리하는 폴더

</div>
</details>

<br><br>

## 🔒 커밋 규칙

<details>
<summary>커밋 규칙</summary>
<div markdown="1">

## **commit message 규칙**

⭐ feat : 새로운 기능에 대한 커밋

🛠 fix : 버그 수정에 대한 커밋

🧱 build : 빌드 관련 파일 수정에 대한 커밋

👏 chore : 그 외 자잘한 수정에 대한 커밋

⚒ refactor :  코드 리팩토링에 대한 커밋

🎨 style : 코드 스타일 혹은 포맷 등에 관한 커밋

✏ docs : 문서 수정에 대한 커밋

💡 ci : CI관련 설정 수정에 대한 커밋

🚫 제목 끝에 마침표 금지
⚠ 무엇을 했는지 명확하게 작성

</div>
</details>

<br><br>
