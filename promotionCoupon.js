import dbConnect from "./utils/dbConnect.js";
import PromotionCoupon from "./models/PromotionCoupon.js";

(async () => {
  await dbConnect();

  // (KST 기준)
  // 판매 시간: 2/1 00:00 ~ 2/7 23:59 (포함)
  // endAt은 배타적으로 2/8 00:00으로 저장
  //   const doc = {
  //     period: {
  //       startAt: new Date("2026-02-01T00:00:00+09:00"),
  //       endAt: new Date("2026-02-08T00:00:00+09:00"),
  //     },
  //     promotionName: "사랑가득 선물대전 (달러)",

  //     // ✅ 스키마에 coupon만 있으니 코드 문자열은 메타로 남기기 어려움
  //     // 일단 할인 조건만 저장 (minPrice, sale, currency)
  //     coupon: [
  //       { minPrice: 19, sale: 2, couponCode: "LOVEKR02 ", currency: "USD" },
  //       { minPrice: 34, sale: 4, couponCode: "LOVEKR04 ", currency: "USD" },
  //       { minPrice: 53, sale: 6, couponCode: "LOVEKR06 ", currency: "USD" },
  //       { minPrice: 86, sale: 9, couponCode: "LOVEKR09 ", currency: "USD" },
  //       { minPrice: 139, sale: 15, couponCode: "LOVEKR15 ", currency: "USD" },
  //       { minPrice: 239, sale: 26, couponCode: "LOVEKR26 ", currency: "USD" },
  //       { minPrice: 332, sale: 34, couponCode: "LOVEKR34 ", currency: "USD" },
  //       { minPrice: 529, sale: 54, couponCode: "LOVEKR54", currency: "USD" },
  //     ],
  //   };

  // 판매 시간: 2/1 00:00 ~ 2/7 23:59 (포함)
  // endAt은 배타적으로 2/8 00:00으로 저장

  const doc = {
    period: {
      startAt: new Date("2026-10-01T00:00:00+10:00"),
      endAt: new Date("2026-10-08T00:00:00+09:00"),
    },
    promotionName: "가을바람",
    image:
      "https://ae-pic-a1.aliexpress-media.com/kf/S690848e3c77448e281bd14c8b46f1977V.png",
    promotionLink: "https://s.click.aliexpress.com/e/_c3vVQ39n?bz=725*90",

    // ✅ 스키마에 coupon만 있으니 코드 문자열은 메타로 남기기 어려움
    // 일단 할인 조건만 저장 (minPrice, sale, currency)
    coupon: [
      // { minPrice: 20000, sale: 2300, couponCode: "AEKA01", currency: "KRW" },
      // { minPrice: 30000, sale: 3200, couponCode: "JCLKA18", currency: "KRW" },
      // { minPrice: 40000, sale: 5000, couponCode: "YUAG03", currency: "KRW" },
      { minPrice: 50000, sale: 6000, couponCode: "JHGF04", currency: "KRW" },
      // { minPrice: 60000, sale: 6500, couponCode: "WLDU05", currency: "KRW" },
      // { minPrice: 80000, sale: 8500, couponCode: "KJHF07", currency: "KRW" },
      // { minPrice: 100000, sale: 12000, couponCode: "YEPG09", currency: "KRW" },
      {
        minPrice: 110000,
        sale: 13000,
        couponCode: "YULF09",
        currency: "KRW",
      },
      // {
      //   minPrice: 130000,
      //   sale: 14000,
      //   couponCode: "DSAE10",
      //   currency: "KRW",
      // },
      // {
      //   minPrice: 150000,
      //   sale: 16000,
      //   couponCode: "JPQAN89",
      //   currency: "KRW",
      // },
      // {
      //   minPrice: 170000,
      //   sale: 23000,
      //   couponCode: "BNARD23",
      //   currency: "KRW",
      // },
      {
        minPrice: 200000,
        sale: 21000,
        couponCode: "HGLH15",
        currency: "KRW",
      },
      // {
      //   minPrice: 230000,
      //   sale: 31000,
      //   couponCode: "DABRN31",
      //   currency: "KRW",
      // },
      // { minPrice: 300000, sale: 36000, couponCode: "SGDK25", currency: "KRW" },
      { minPrice: 500000, sale: 50000, couponCode: "BKLP36", currency: "KRW" },
      // { minPrice: 800000, sale: 100000, couponCode: "AEKZ70", currency: "KRW" },
      // {
      //   minPrice: 1000000,
      //   sale: 125000,
      //   couponCode: "AEKZ85",
      //   currency: "KRW",
      // },
    ],
  };

  // ✅ 있으면 업데이트 / 없으면 생성
  const saved = await PromotionCoupon.findOneAndUpdate(
    { promotionName: doc.promotionName },
    { $set: doc },
    { upsert: true, new: true, setDefaultsOnInsert: true },
  );

  console.log("✅ 저장 완료:", saved);

  await PromotionCoupon.db.close();
  process.exit(0);
})().catch((err) => {
  console.error("❌ 에러:", err);
  process.exit(1);
});
