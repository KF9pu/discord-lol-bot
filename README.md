# discord-lol-bot

내전용 롤 유틸봇!

---

### 정보 보기

- 노션링크 : https://dandelion-echidna-7a3.notion.site/ca0001fb770c4df1b16501850cc260af?pvs=4
- 디코링크 : https://discord.gg/nkMWw8p9

### 세팅하기

- nodejs 설치
- planetscale 회원 가입 및 데이터베이스 생성
- git clone (git clone https://github.com/KF9pu/discord-lol-bot.git)
- .env 세팅 (디코봇 : TOKEN, 디코봇 : CLIENT_ID[APPLICATION ID], planetscale : DATABASE_URL( url))
- npm install
- schema.prisma 파일의 model 들을 세팅 (npx prisma db push)
- npm run command
- npm run dev

### 명령어 추가하기

- commands.js 파일에 command 를 추가한다.
- npm run command 실행시킨다.
