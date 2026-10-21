const brandRules = [
  //   ----------------------------레이던 -------------------------------------------
  {
    leydun: "레이던(LEYDUN)",
    레이던: "레이던(LEYDUN)",
    레이둔: "레이던(LEYDUN)",
  },
  {
    tashigi: "타시기(TASHIGI)",
    타시기: "타시기(TASHIGI)",
  },
  {
    "ZORO YANUS": "조로 야누스(ZORO YANUS)",
    "조로 야누스": "조로 야누스(ZORO YANUS)",
  },
  {
    "black creek": "블랙크릭(black creek)",
    블랙크릭: "블랙크릭(black creek)",
    "블랙 크릭": "블랙크릭(black creek)",
  },
  {
    "blue inshore": "블루 인쇼어(blue inshore)",
    "블루 인쇼어": "블루 인쇼어(blue inshore)",
    블루인쇼어: "블루 인쇼어(blue inshore)",
  },
  {
    EUSTASS: "유스타스(EUSTASS)",
    유스타스: "유스타스(EUSTASS)",
  },
  {
    아웃랜더: "아웃랜더(outlander)",
    outlander: "아웃랜더(outlander)",
  },
  {
    비스타: "비스타(vista)",
    vista: "비스타(vista)",
  },
  {
    프랭키: "프랭키(FRANKY)",
    FRANKY: "프랭키(FRANKY)",
  },
  {
    미호크: "미호크(MIHAWK)",
    MIHAWK: "미호크(MIHAWK)",
  },
  {
    나미: "나미(NAMI)",
    NAMI: "나미(NAMI)",
  },
  {
    우솝: "우솝(USOPP)",
    USOPP: "우솝(USOPP)",
  },
  {
    아카이누: "아카이누(AKAINU)",
    AKAINU: "아카이누(AKAINU)",
  },
  {
    시야우르: "시야우르(SEAYUR)",
    SEAYUR: "시야우르(SEAYUR)",
  },
  {
    브룩: "브룩(BROOK)",
    BROOK: "브룩(BROOK)",
  },
  {
    아우라: "아우라(AURA)",
  },
  {
    아오키지: "아오키지(AOKIJI)",
    AOKIJI: "아오키지(AOKIJI)",
  },
  {
    키자루: "키자루(KIZARU)",
    KIZARU: "키자루(KIZARU)",
  },
  {
    "홍해 도미": "쵸파(CHOPPER)",
  },

  //   -------------------------------- 퓨어루어--------------------------------

  {
    퓨어루어: "퓨어루어(PURELURE)",
    퓨어러어: "퓨어루어(PURELURE)",
    PURELURE: "퓨어루어(PURELURE)",
  },

  {
    토렌트: "토렌트(TORRENT)",
    TORRENT: "토렌트(TORRENT)",
  },
  {
    지에케: "지에케(JIEKE)",
    JIEKE: "지에케(JIEKE)",
  },
  {
    트라이포드: "트라이포드(Tripod)",
    Tripod: "트라이포드(Tripod)",
  },
  {
    그루플라: "그루플라(GRUPLA)",
    GRUPLA: "그루플라(GRUPLA)",
  },
  {
    노비아: "노비아(NOVIA)",
    NOVIA: "노비아(NOVIA)",
  },
  {
    시베드: "시베드(seabed)",
    seabed: "시베드(seabed)",
  },
  {
    "FUJI Tenya": "스파다(SPADA) FUJI TENYA",
  },
  {
    SHARPEN: "샤프(SHARPEN)",
  },
  {
    엔디비아: "엔디비아(NDIVA)",
    NDIVA: "엔디비아(NDIVA)",
  },
  {
    자나: "자나(ZANA)",
    ZANA: "자나(ZANA)",
  },
  {
    리얼름: "리얼름(REALM)",
    REALM: "리얼름(REALM)",
  },
  {
    "크릭 댄스": "크릭 댄스(CREEK DANCE)",
    크릭댄스: "크릭 댄스(CREEK DANCE)",
    "CREEK DANCE": "크릭 댄스(CREEK DANCE)",
  },

  //   ---------------------------------- 존쿠 --------------------------------------

  {
    존쿠: "존쿠(JOHNCOO)",
    JOHNCOO: "존쿠(JOHNCOO)",
  },
  {
    "에기 낚싯대 경량 2.4m 2.6m": "스퀴즘(Squidsm) 에기 낚싯대 경량 2.4m 2.6m",
  },
  {
    "고 탄소 Egi 막대 오징어 루어로드":
      "테키움(techium) 고 탄소 Egi 막대 오징어 루어로드",
  },
  {
    "1.5m 갑오징어 낚싯대 웹풋": "퓨리오(PURIO) 1.5m 갑오징어 낚싯대 웹풋",
  },
  {
    "1.72m MH 문어 낚싯대": "스카니아(SCANIA) 1.72m MH 문어 낚싯대",
  },
  {
    "롱 캐스팅 낚싯대 경량 서프 캐스팅 낚싯대":
      "스카이캐스트(SKY CAST) 롱 캐스팅 낚싯대 경량 서프 캐스팅 낚싯대",
  },
  {
    "1.68m -2.7m 여행용 낚싯대 장거리 캐스팅 낚싯대":
      "PROTRAVEL 1.68m -2.7m 여행용 낚싯대 장거리 캐스팅 낚싯대",
  },
  {
    "낚싯대 캐스팅 지그 막대 1.7m M ML Hanchi":
      "오스카트 572 낚싯대 캐스팅 지그 막대 1.7m M ML Hanchi",
  },
  {
    "베이트 캐스팅 낚시 릴, 초경량 캐스팅 릴,":
      "존쿠 요코타(YOKOTA) 베이트 캐스팅 낚시 릴, 초경량 캐스팅 릴,",
  },
  {
    "베이트 캐스팅 릴 금속 바디, 최대 드래그 15kg,":
      "존쿠 아레스(ARES) 베이트 캐스팅 릴 금속 바디, 최대 드래그 15kg,",
  },
  {
    "심해용 경량 1.65m MH XH": "멜로디(MELODY) 심해용 경량 1.65m MH XH",
  },
  {
    "경량 캐스팅릴 120g 5.4:1 4kg 드랙 롱 핸들릴 카본 바디":
      "존쿠 카시나(CASINA) 경량 캐스팅릴 120g 5.4:1 4kg 드랙 롱 핸들릴 카본 바디",
  },
  {
    "베이트캐스팅 릴 6.5:1 세라믹 베어링이":
      "존쿠 베이트캐스팅 릴 6.5:1 세라믹 베어링이",
  },
  {
    "바닷물 베이트 캐스팅 릴 및 베이트 캐스터":
      "오스카트 바닷물 베이트 캐스팅 릴 및 베이트 캐스터",
  },
  {
    "탄소 낚싯대 2.7m 3.0m MH H 파워 스피닝로드 농어":
      "헌팅 블랙(HUNTING BLACK) 탄소 낚싯대 2.7m 3.0m MH H 파워 스피닝로드 농어",
  },
  {
    "문어 낚싯대 티타늄 팁 1.75m 건 그립 문어 낚시":
      "쉘(SHELL) 문어 낚싯대 티타늄 팁 1.75m 건 그립 문어 낚시",
  },
  {
    "Tyraba 낚싯대 해수 낚싯대 주조 낚싯대":
      "마스터(MASTER) Tyraba 낚싯대 해수 낚싯대 주조 낚싯대",
  },
  {
    "티타늄 팁 로드 (문어용) 캐스팅 지깅 로드 1.7m":
      "소피(SOPHY) 티타늄 팁 로드 (문어용) 캐스팅 지깅 로드 1.7m",
  },
  {
    "슈퍼 라이트 티타늄 팁 오징어 문어 낚시 150cm 160cm 캐스팅 9:1 액션":
      "존쿠 슈터(JOHNCOO SHOOTER) 슈퍼 라이트 티타늄 팁 오징어 문어 낚시 150cm 160cm 캐스팅 9:1 액션",
  },
  {
    "오징어 낚싯대 보트 낚싯대 후지 링 장착 1.58m 초경량 낚싯대":
      "마루이카(MARUIKA) 오징어 낚싯대 보트 낚싯대 후지 링 장착 1.58m 초경량 낚싯대",
  },
  {
    "베이트캐스팅 릴 바다낚시 파워 핸들 8KG 드랙력":
      "조락(ZORAK) 베이트캐스팅 릴 바다낚시 파워 핸들 8KG 드랙력",
  },
  {
    "롱 캐스팅 낚싯대 연안 낚싯대 농어용 2.7m":
      "존쿠 헤이웰(JOHNCOO HEYWELL) 롱 캐스팅 낚싯대 연안 낚싯대 농어용 2.7m",
  },
  {
    오스카트: "오스카트(oscart)",
    oscart: "오스카트(oscart)",
  },
  {
    체이스: "체이스(CHASE)",
    CHASE: "체이스(CHASE)",
  },
  {
    RIMA: "리마(RIMA)",
  },
  {
    코타: "코타(Kota)",
    Kota: "코타(Kota)",
  },
];

function escapeRegExp(text) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function convertBrandNamesToKorean(title) {
  if (typeof title !== "string") return title;

  for (const rules of brandRules) {
    const entries = Object.entries(rules).filter(([keyword]) => keyword !== "");

    if (entries.length === 0) continue;

    // 한 객체는 하나의 브랜드를 나타내며, 변환 결과는 같다고 가정
    const replacement = entries[0][1];

    const aliases = entries
      .map(([keyword]) => keyword)
      .sort((a, b) => b.length - a.length)
      .map(escapeRegExp)
      .join("|");

    const pattern = new RegExp(
      [
        // 이미 완성된 표기
        escapeRegExp(replacement),

        // 레이던(leydun), leydun(레이던), 레이둔(leydun) 등
        `(?:${aliases})\\s*\\(\\s*(?:${aliases})\\s*\\)`,

        // 괄호 없이 쓰인 개별 표기
        `(?:${aliases})`,
      ].join("|"),
      "gi",
    );

    // 객체당 한 번만 치환: 방금 바뀐 문구를 다시 검사하지 않음
    title = title.replace(pattern, () => replacement);
  }

  return title;
}
