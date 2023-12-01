import {
  ready,
  divideTeams,
  halfMirrorMode,
  join,
  mirrorMode,
  nomalMode,
  pickRandomMode,
  showAllModes,
  twoRandomChampionsMode,
  getJoinMemberList,
  randomSpellMode,
  getClanInfo,
  resetPlayer,
  getAllChamps,
  getBanList,
  resetBanList,
  firstTeamWin,
  secondTeamWin,
  getMyRecord,
  getAllRecord,
  princeMode,
} from "../libs/index.js";

const commands = [
  {
    name: "레디",
    description: "💚 음성채널에 있는 모든 사람들을 첫 번째 채널로 이동",
    run: ready,
  },
  {
    name: "팀짜",
    description: "💚 플레이어들을 두 팀으로 나누어 준다.",
    run: divideTeams,
  },
  {
    name: "모드보기",
    description: "💚 현재 사용이 가능한 모든 모드 목록 보기",
    run: showAllModes,
  },

  {
    name: "조인",
    description: "💚 게임 플레이 참여",
    run: join,
  },
  {
    name: "참여인원",
    description: "💚 게임 참여인원 리스트 보기",
    run: getJoinMemberList,
  },
  {
    name: "클랜정보",
    description:
      "💚 디스코드 채널을 통한 게임내역 및 플레이한 유저들의 정보 보기",
    run: getClanInfo,
  },
  {
    name: "플레이어초기화",
    description: "💚 해당 클랜의 player 테이블 데이터를 초기화한다.",
    run: resetPlayer,
  },
  {
    name: "올챔",
    description: "💚 모든 챔피언 목록 보기",
    run: getAllChamps,
  },
  {
    name: "밴보기",
    description: "💚 글로벌 밴으로 추가된 챔피언 리스트 보기",
    run: getBanList,
  },
  {
    name: "밴초기화",
    description: "💚 글로벌 밴으로 추가된 챔피언 리스트 초기화",
    run: resetBanList,
  },
  {
    name: "1팀승",
    description: "💚 1팀으로 포함된 사람들의 승리 입력!",
    run: firstTeamWin,
  },
  {
    name: "2팀승",
    description: "💚 2팀으로 포함된 사람들의 승리 입력!",
    run: secondTeamWin,
  },
  {
    name: "내전적",
    description: "💚 내 전적 보기!",
    run: getMyRecord,
  },
  {
    name: "전체전적",
    description: "💚 전체 전적 보기!",
    run: getAllRecord,
  },
  {
    name: "랜덤모드",
    description: "💚 사용가능한 모든 모드 중에서 하나 뽑기",
    run: pickRandomMode,
    gameMode: true,
  },
  {
    name: "2랜모드",
    description: "💚 랜덤으로 선택된 2개의 챔피언을 포함하여 조합을 짜는 모드",
    run: twoRandomChampionsMode,
    gameMode: true,
  },
  {
    name: "기본모드",
    description: "💚 각 팀별로 15개의 주어진 챔피언 리스트로 조합을 짜는 모드",
    run: nomalMode,
    gameMode: true,
  },
  {
    name: "미러모드",
    description: "💚 20개의 공통된 챔피언 리스트로 양팀 모두 조합을 짜는 모드",
    run: mirrorMode,
    gameMode: true,
  },
  {
    name: "하프미러모드",
    description:
      "💚 양 팀 모두 사용가능한 10개의 챔피언 리스트와 각 팀만 사용하능한 10개의 챔피언 리스트로 조합을 짜는 모드",
    run: halfMirrorMode,
    gameMode: true,
  },
  {
    name: "랜덤스펠모드",
    description: "💚 각 팀은 주어진 스펠을 순서에 맞게 선택한 뒤 전투하는 모드",
    run: randomSpellMode,
    gameMode: true,
  },
  {
    name: "왕자님모드",
    description: "💚 왕자님과 서폿들 로 전투하세요!",
    run: princeMode,
    gameMode: true,
  },
];

export default commands;
