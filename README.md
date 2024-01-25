## ✈️ 부산와Vr
![그림1](https://github.com/wjddudqls96/busanwavr/assets/59672589/104735c0-c913-4715-92a7-df3603cd1cf4)
<div align=center></div>


### 🔗 부산와Vr 링크 : [Site Link](https://busanwavr.store/)
---

### 소개 영상 : [Ucc Link](https://www.youtube.com/watch?v=5GSyQMyNabU)
---

### ⏰ 개발 기간
    07.17.2023 ~ 08.17.2023


### 기획 배경
---
- 우리가 사랑하는 도시, 부산을 많은 사람들에게 알려주고 싶다.
- 부산의 다양한 여행지들을 직접 가지 않고도 실시간 VR 영상으로 즐길 수 있게 하면 어떨까?
- 부산에 관심 있는 사람들이 직접 부산을 방문한 것처럼 즐거운 경험을 가질 수 있는 서비스를 만들어보자!


### 프로젝트 개요
---
- 360도 영상 라이브 스트리밍을 통한 생생한 VR 랜선 투어 제공 서비스

- [와이어프레임](https://www.figma.com/file/7GGkxudmaNRwDje7VLlHeK/Untitled?type=design&mode=design&t=STKqHjQZDDVpGnip-1)

- [팀 메뉴트리](https://miro.com/app/board/uXjVM1wjrzs=/)

- [팀 노션 바로가기](https://molangmolang.notion.site/99b8316d1e874164b050fdfa33139c33?pvs=4)
  

### 🛠 기능 요약 
---
- #### 투어 개설
![투어등록](https://github.com/wjddudqls96/busanwavr/assets/59672589/a81f4ae5-2a7a-431d-b6a5-d1f2db801b64)
- #### 투어 검색
![투어검색](https://github.com/wjddudqls96/busanwavr/assets/59672589/78cd12af-704e-48dc-8879-0135c3235164)
- #### 여행 추천 서비스
![추천투어](https://github.com/wjddudqls96/busanwavr/assets/59672589/459e0f70-6095-46bd-8aa1-04f4453493f4)
- #### 메이트 모집
![메이트등록](https://github.com/wjddudqls96/busanwavr/assets/59672589/8d436ec5-17a4-4c5e-acb2-f810bcb7e4f0)
- #### 360도 VR 라이브 스트리밍
![Jan-25-2024 11-57-30](https://github.com/wjddudqls96/busanwavr/assets/59672589/5219bd69-4d8e-4104-8b06-67f1689f93c2)
![vr투어](https://github.com/wjddudqls96/busanwavr/assets/59672589/37c451e9-2903-408e-abd1-c3b754868060)
- #### 실시간 채팅 & Speech-To-Text
![tts](https://github.com/wjddudqls96/busanwavr/assets/59672589/4a18cd7c-850f-47a5-b0f6-5d43d9db2f35)
- #### 모션 캡쳐를 이용한 투표기능
![motion](https://github.com/wjddudqls96/busanwavr/assets/59672589/83098a98-499c-4183-9814-156de8d20752)
<img width="320" alt="motion" src="https://github.com/wjddudqls96/busanwavr/assets/59672589/787df5c2-0de8-4c97-b3ec-33ee6503c869">


### ✔ 주요 기술
---
**Back-end Stack**
- IntelliJ IDE
- Springboot 
- JPA
- QueryDsl
- Stomp Pub/Sub
- Spring Security
- JWT
- MailSender

**Front-End Stack**
- Visual Studio Code IDE
- React
- TailWind CSS
- TypeScript
- Redux
- antD
- WebRTC

**DB**
- Mysql
- Redis
- Mongodb

**Storage**
- amazon web S3

**CI/CD**
- AWS
- Jenkins
- Docker
- Nginx
- Https

**Other**
- OpenVidu
- Teachable Machine
- MicroSoft Azure STT
- KaKao Map

### ✔ 프로젝트 파일 구조
---
#### Back
```
BackEnd
  ├── config
  │   ├── amazonS3
  │   ├── emailConfig
  │   ├── openApi
  │   ├── queryDsl
  │   ├── redis
  │   ├── stomp
  │   └── websocket
  │
  ├── controller
  │   └── controllers...
  │
  ├── dto
  │   └── simple
  │       
  ├── document
  ├── exception
  │   ├── security
  │   └── type
  │
  ├── model
  │   └── models....
  │
  ├── service
  │   └── services....
  │
  ├── utils
  └── security
```
#### Front
```
FrontEnd
  ├── node_modules
  ├── public
  └── src
      ├── assets
      ├── components
      │   ├── atoms
      │   ├── blocks
      │   ├── common
      │   └── pages
      │       ├── Auth
      │       ├── GuideProfile
      │       ├── Home
      │       ├── LiveStream
      │       ├── Mate
      │       ├── Review
      │       ├── Root
      │       ├── Test
      │       ├── Tour
      │       └── UserProfile
      ├── hooks
      ├── navigations
      ├── store
      ├── store
      │   └── reducers
      └── utils
```

### ✔ 협업 Tool
---
- Git
- Notion
- Jira
- MatterMost
- Discord

### ✔ 협업 환경
---
- Gitlab
  - 코드의 버전을 관리
  - 이슈 발행, 해결을 위한 토론
  - MR시, 팀원이 코드리뷰를 진행하고 피드백 게시
- JIRA
  - 매주 목표량을 설정하여 Sprint 진행
  - 업무의 할당량을 정하여 Story Point를 설정하고, In-Progress -> Done 순으로 작업  
- Notion
  - 매일 작업 내용 회의록을 기록하여 보관
  - 기술확보 시, 다른 팀원들도 추후 따라할 수 있도록 보기 쉽게 작업 순서대로 정리
  - 컨벤션 정리
  - 기능명세서 등 모두가 공유해야 하는 문서 관리 
- Discord
  - 재택 작업할 경우 Team Discord 채널에서 작업
  - 작업하면서 의사소통 역량을 높이기 위해 사용
  - 페어 프로그래밍을 지향하기 위해 사용

### 👩‍💻 멤버 구성
--- 
- 김남우(팀장) : Front-End
- 서정희 : Front-End
- 정은경 : Front-End
- 정영빈 : Back-End
- 황재영 : Back-End
- 김민구 : Back-End

### ✔ 아키텍처
---
![image (1)](https://github.com/BusanWaVr/BusanWarVr/assets/59672589/7e6f12f6-8336-4dcd-8342-1d6cbec8e621)

### ✔ ERD
---
![image](https://github.com/BusanWaVr/BusanWarVr/assets/59672589/05cf983a-0c96-4a53-ae36-24c2f5aac772)

### ✔ 프로젝트 산출물
---
- [기능명세서](https://www.notion.so/molangmolang/4ea6840ab9ed4947b61d78355c98c993?pvs=4)
- [와이어프레임](https://www.figma.com/file/7GGkxudmaNRwDje7VLlHeK/Untitled?type=design&mode=design&t=STKqHjQZDDVpGnip-1)
- [컨벤션](https://www.notion.so/molangmolang/ea75f736858746359a519d622d66fe3f?pvs=4)
- [API](https://www.notion.so/molangmolang/API-7221bcdd11374665949d3a3c28e052d1?pvs=4)
- [회의록](https://www.notion.so/molangmolang/0ee780bdf21f400098e277a610b04b69?pvs=4)

### ✔ 프로젝트 결과물
---
- [포팅메뉴얼](./exec/부산와Vr_포팅_메뉴얼.docx)
- [발표자료](./docs/busanwavr.pptx)

