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
} from "../libs/index.js";

const commands = [
  {
    name: "레디",
    description: "음성채널에 있는 모든 사람들을 첫 번째 채널로 이동",
    run: ready,
  },
  {
    name: "팀짜",
    description:
      "첫번째로 만들어진 음성채널의 인원들을 절반으로 나누어서 1팀 / 2팀 채널로 이동",
    run: divideTeams,
  },
  {
    name: "모든모드",
    description: "현재 사용이 가능한 모든 모드 목록 보기",
    run: showAllModes,
  },
  {
    name: "랜덤모드",
    description: "사용가능한 모든 모드 중에서 하나 뽑기",
    run: pickRandomMode,
  },
  {
    name: "2랜모드",
    description:
      "2개의 랜덤으로 선택된 챔피언을 조합에 필수오 넣어주고 나머지 조합을 짜는 모드",
    run: twoRandomChampionsMode,
  },
  {
    name: "기본모드",
    description:
      "각 팀별로 15개의 중복없는 챔피언 리스트가 주어지고 주어진 챔피언 리스트로 조합을 짜는 모드",
    run: nomalMode,
  },
  {
    name: "미러모드",
    description:
      "20개의 챔피언 리스트가 주어지면 양 팀은 주어진 20개의 챔피언 리스트로 조합을 짜는 모드 (중복 가능)",
    run: mirrorMode,
  },
  {
    name: "하프미러모드",
    description:
      "각 팀 모두 선택이 가능한 10개의 챔피언 리스트와 각 팀이 사용하는 각 10개의 챔피언 리스트로 조합을 짜는 모드",
    run: halfMirrorMode,
  },
  {
    name: "랜덤스펠모드",
    description:
      "각 팀에게 랜덤한 스펠이 주어진다. 팀원 수에 맞게 스펠이 주어지며, 스펠에 맞도록 자유롭게 챔피언을 골라 게임을 진행한다.",
    run: randomSpellMode,
  },
  {
    name: "조인",
    description: "게임 플레이 참여",
    run: join,
  },
  {
    name: "참여인원",
    description: "게임 참여인원 리스트 보기",
    run: getJoinMemberList,
  },
  {
    name: "클랜정보",
    description: "디스코드 채널을 통한 게임내역 및 플레이한 유저들의 정보 보기",
    run: getClanInfo,
  },
  {
    name: "플레이어초기화",
    description: "해당 클랜의 player 테이블 데이터를 초기화한다.",
    run: resetPlayer,
  },
];

export default commands;
