const allChamps = [
  {
    name: "아트록스",
    tags: ["Fighter", "Tank"],
  },
  {
    name: "아리",
    tags: ["Mage", "Assassin"],
  },
  {
    name: "아칼리",
    tags: ["Assassin"],
  },
  {
    name: "아크샨",
    tags: ["Marksman", "Assassin"],
  },
  {
    name: "알리스타",
    tags: ["Tank", "Support"],
  },
  {
    name: "무무",
    tags: ["Tank", "Mage"],
  },
  {
    name: "애니비아",
    tags: ["Mage", "Support"],
  },
  {
    name: "애니",
    tags: ["Mage"],
  },
  {
    name: "아펠",
    tags: ["Marksman"],
  },
  {
    name: "애쉬",
    tags: ["Marksman", "Support"],
  },
  {
    name: "아우솔",
    tags: ["Mage"],
  },
  {
    name: "아지르",
    tags: ["Mage", "Marksman"],
  },
  {
    name: "바드",
    tags: ["Support", "Mage"],
  },
  {
    name: "벨베스",
    tags: ["Fighter"],
  },
  {
    name: "블리츠",
    tags: ["Tank", "Fighter"],
  },
  {
    name: "브랜드",
    tags: ["Mage"],
  },
  {
    name: "브라움",
    tags: ["Support", "Tank"],
  },
  {
    name: "브라이어",
    tags: ["Fighter", "Assassin"],
  },
  {
    name: "케이틀린",
    tags: ["Marksman"],
  },
  {
    name: "카밀",
    tags: ["Fighter", "Tank"],
  },
  {
    name: "카시",
    tags: ["Mage"],
  },
  {
    name: "초가스",
    tags: ["Tank", "Mage"],
  },
  {
    name: "코르키",
    tags: ["Marksman"],
  },
  {
    name: "다리우스",
    tags: ["Fighter", "Tank"],
  },
  {
    name: "다이애나",
    tags: ["Fighter", "Mage"],
  },
  {
    name: "드븐",
    tags: ["Marksman"],
  },
  {
    name: "문도박사",
    tags: ["Fighter", "Tank"],
  },
  {
    name: "에코",
    tags: ["Assassin", "Fighter"],
  },
  {
    name: "엘리스",
    tags: ["Mage", "Fighter"],
  },
  {
    name: "이블린",
    tags: ["Assassin", "Mage"],
  },
  {
    name: "이즈",
    tags: ["Marksman", "Mage"],
  },
  {
    name: "피들스틱",
    tags: ["Mage", "Support"],
  },
  {
    name: "피오라",
    tags: ["Fighter", "Assassin"],
  },
  {
    name: "피즈",
    tags: ["Assassin", "Fighter"],
  },
  {
    name: "갈리오",
    tags: ["Tank", "Mage"],
  },
  {
    name: "갱플",
    tags: ["Fighter"],
  },
  {
    name: "가렌",
    tags: ["Fighter", "Tank"],
  },
  {
    name: "나르",
    tags: ["Fighter", "Tank"],
  },
  {
    name: "그라",
    tags: ["Fighter", "Mage"],
  },
  {
    name: "그브",
    tags: ["Marksman"],
  },
  {
    name: "그웬",
    tags: ["Fighter", "Assassin"],
  },
  {
    name: "헤카림",
    tags: ["Fighter", "Tank"],
  },
  {
    name: "딩거",
    tags: ["Mage", "Support"],
  },
  {
    name: "일라오이",
    tags: ["Fighter", "Tank"],
  },
  {
    name: "이렐",
    tags: ["Fighter", "Assassin"],
  },
  {
    name: "아이번",
    tags: ["Support", "Mage"],
  },
  {
    name: "잔나",
    tags: ["Support", "Mage"],
  },
  {
    name: "자르반",
    tags: ["Tank", "Fighter"],
  },
  {
    name: "잭스",
    tags: ["Fighter", "Assassin"],
  },
  {
    name: "제이스",
    tags: ["Fighter", "Marksman"],
  },
  {
    name: "진",
    tags: ["Marksman", "Mage"],
  },
  {
    name: "징크스",
    tags: ["Marksman"],
  },
  {
    name: "카이사",
    tags: ["Marksman"],
  },
  {
    name: "칼리스타",
    tags: ["Marksman"],
  },
  {
    name: "카르마",
    tags: ["Mage", "Support"],
  },
  {
    name: "카서스",
    tags: ["Mage"],
  },
  {
    name: "카사딘",
    tags: ["Assassin", "Mage"],
  },
  {
    name: "카타리나",
    tags: ["Assassin", "Mage"],
  },
  {
    name: "케일",
    tags: ["Fighter", "Support"],
  },
  {
    name: "케인",
    tags: ["Fighter", "Assassin"],
  },
  {
    name: "케넨",
    tags: ["Mage", "Marksman"],
  },
  {
    name: "카직스",
    tags: ["Assassin"],
  },
  {
    name: "킨드레드",
    tags: ["Marksman"],
  },
  {
    name: "클레드",
    tags: ["Fighter", "Tank"],
  },
  {
    name: "코그모",
    tags: ["Marksman", "Mage"],
  },
  {
    name: "크산테",
    tags: ["Tank", "Fighter"],
  },
  {
    name: "르블랑",
    tags: ["Assassin", "Mage"],
  },
  {
    name: "리신",
    tags: ["Fighter", "Assassin"],
  },
  {
    name: "레오나",
    tags: ["Tank", "Support"],
  },
  {
    name: "릴리아",
    tags: ["Fighter", "Mage"],
  },
  {
    name: "리산드라",
    tags: ["Mage"],
  },
  {
    name: "루시안",
    tags: ["Marksman"],
  },
  {
    name: "룰루",
    tags: ["Support", "Mage"],
  },
  {
    name: "럭스",
    tags: ["Mage", "Support"],
  },
  {
    name: "말파이트",
    tags: ["Tank", "Fighter"],
  },
  {
    name: "말자하",
    tags: ["Mage", "Assassin"],
  },
  {
    name: "마오카이",
    tags: ["Tank", "Mage"],
  },
  {
    name: "마스터이",
    tags: ["Assassin", "Fighter"],
  },
  {
    name: "밀리오",
    tags: ["Support"],
  },
  {
    name: "미포",
    tags: ["Marksman"],
  },
  {
    name: "오공",
    tags: ["Fighter", "Tank"],
  },
  {
    name: "모데",
    tags: ["Fighter"],
  },
  {
    name: "모르가나",
    tags: ["Mage", "Support"],
  },
  {
    name: "나피리",
    tags: ["Assassin"],
  },
  {
    name: "나미",
    tags: ["Support", "Mage"],
  },
  {
    name: "나서스",
    tags: ["Fighter", "Tank"],
  },
  {
    name: "노틸러스",
    tags: ["Tank", "Support"],
  },
  {
    name: "니코",
    tags: ["Mage", "Support"],
  },
  {
    name: "니달리",
    tags: ["Assassin", "Mage"],
  },
  {
    name: "닐라",
    tags: ["Fighter", "Assassin"],
  },
  {
    name: "녹턴",
    tags: ["Assassin", "Fighter"],
  },
  {
    name: "누누",
    tags: ["Tank", "Fighter"],
  },
  {
    name: "올라프",
    tags: ["Fighter", "Tank"],
  },
  {
    name: "오리",
    tags: ["Mage", "Support"],
  },
  {
    name: "오른",
    tags: ["Tank", "Fighter"],
  },
  {
    name: "판테온",
    tags: ["Fighter", "Assassin"],
  },
  {
    name: "뽀삐",
    tags: ["Tank", "Fighter"],
  },
  {
    name: "파이크",
    tags: ["Support", "Assassin"],
  },
  {
    name: "키아나",
    tags: ["Assassin", "Fighter"],
  },
  {
    name: "퀸",
    tags: ["Marksman", "Assassin"],
  },
  {
    name: "라칸",
    tags: ["Support"],
  },
  {
    name: "람머스",
    tags: ["Tank", "Fighter"],
  },
  {
    name: "렉사이",
    tags: ["Fighter"],
  },
  {
    name: "렐",
    tags: ["Tank", "Support"],
  },
  {
    name: "레나타",
    tags: ["Support", "Mage"],
  },
  {
    name: "레넥톤",
    tags: ["Fighter", "Tank"],
  },
  {
    name: "렝가",
    tags: ["Assassin", "Fighter"],
  },
  {
    name: "리븐",
    tags: ["Fighter", "Assassin"],
  },
  {
    name: "럼블",
    tags: ["Fighter", "Mage"],
  },
  {
    name: "라이즈",
    tags: ["Mage", "Fighter"],
  },
  {
    name: "사미라",
    tags: ["Marksman"],
  },
  {
    name: "세주",
    tags: ["Tank", "Fighter"],
  },
  {
    name: "세나",
    tags: ["Marksman", "Support"],
  },
  {
    name: "세라핀",
    tags: ["Mage", "Support"],
  },
  {
    name: "세트",
    tags: ["Fighter", "Tank"],
  },
  {
    name: "샤코",
    tags: ["Assassin"],
  },
  {
    name: "쉔",
    tags: ["Tank"],
  },
  {
    name: "쉬바나",
    tags: ["Fighter", "Tank"],
  },
  {
    name: "신지드",
    tags: ["Tank", "Fighter"],
  },
  {
    name: "사이온",
    tags: ["Tank", "Fighter"],
  },
  {
    name: "시비르",
    tags: ["Marksman"],
  },
  {
    name: "스카너",
    tags: ["Fighter", "Tank"],
  },
  {
    name: "소나",
    tags: ["Support", "Mage"],
  },
  {
    name: "소라카",
    tags: ["Support", "Mage"],
  },
  {
    name: "스웨인",
    tags: ["Mage", "Fighter"],
  },
  {
    name: "사일러스",
    tags: ["Mage", "Assassin"],
  },
  {
    name: "신드라",
    tags: ["Mage"],
  },
  {
    name: "탐켄치",
    tags: ["Support", "Tank"],
  },
  {
    name: "탈리야",
    tags: ["Mage", "Support"],
  },
  {
    name: "탈론",
    tags: ["Assassin"],
  },
  {
    name: "타릭",
    tags: ["Support", "Fighter"],
  },
  {
    name: "티모",
    tags: ["Marksman", "Assassin"],
  },
  {
    name: "쓰레쉬",
    tags: ["Support", "Fighter"],
  },
  {
    name: "트타",
    tags: ["Marksman", "Assassin"],
  },
  {
    name: "트런들",
    tags: ["Fighter", "Tank"],
  },
  {
    name: "트린",
    tags: ["Fighter", "Assassin"],
  },
  {
    name: "트페",
    tags: ["Mage"],
  },
  {
    name: "트위치",
    tags: ["Marksman", "Assassin"],
  },
  {
    name: "우디르",
    tags: ["Fighter", "Tank"],
  },
  {
    name: "우르곳",
    tags: ["Fighter", "Tank"],
  },
  {
    name: "바루스",
    tags: ["Marksman", "Mage"],
  },
  {
    name: "베인",
    tags: ["Marksman", "Assassin"],
  },
  {
    name: "베이가",
    tags: ["Mage"],
  },
  {
    name: "벨코즈",
    tags: ["Mage"],
  },
  {
    name: "벡스",
    tags: ["Mage"],
  },
  {
    name: "바이",
    tags: ["Fighter", "Assassin"],
  },
  {
    name: "비에고",
    tags: ["Assassin", "Fighter"],
  },
  {
    name: "빅토르",
    tags: ["Mage"],
  },
  {
    name: "블라디",
    tags: ["Mage"],
  },
  {
    name: "볼리베어",
    tags: ["Fighter", "Tank"],
  },
  {
    name: "워윅",
    tags: ["Fighter", "Tank"],
  },
  {
    name: "자야",
    tags: ["Marksman"],
  },
  {
    name: "제라스",
    tags: ["Mage"],
  },
  {
    name: "짜오",
    tags: ["Fighter", "Assassin"],
  },
  {
    name: "야스오",
    tags: ["Fighter", "Assassin"],
  },
  {
    name: "요네",
    tags: ["Assassin", "Fighter"],
  },
  {
    name: "요릭",
    tags: ["Fighter", "Tank"],
  },
  {
    name: "유미",
    tags: ["Support", "Mage"],
  },
  {
    name: "자크",
    tags: ["Tank", "Fighter"],
  },
  {
    name: "제드",
    tags: ["Assassin"],
  },
  {
    name: "제리",
    tags: ["Marksman"],
  },
  {
    name: "직스",
    tags: ["Mage"],
  },
  {
    name: "질리언",
    tags: ["Support", "Mage"],
  },
  {
    name: "조이",
    tags: ["Mage", "Support"],
  },
  {
    name: "자이라",
    tags: ["Mage", "Support"],
  },
];

export default allChamps;
