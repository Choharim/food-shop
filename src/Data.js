import chickenTomatoSoup from "images/dish-1-1.jpg";
import chickenTomatoSoup2 from "images/dish-1.jpg";
import sweetPotatoPuree from "images/dish-2-2.jpg";
import sweetPotatoPuree2 from "images/dish-2.jpg";
import eggLasagna from "images/dish-3-3.jpg";
import eggLasagna2 from "images/dish-3.jpg";
import pumkinTea from "images/drink-1.jpg";
import pumkinTea2 from "images/drink-1-1.jpg";
import spinachTea from "images/drink-2.webp";
import spinachTea2 from "images/drink-2-2.jpg";
import potatoTea from "images/drink-3.jpg";
import potatoTea2 from "images/drink-3-3.jpg";
import salmon from "images/snack-1.jpg";
import salmon2 from "images/snack-1-1.jpg";
import pumkin from "images/snack-2.jpg";
import pumkin2 from "images/snack-2-2.jpg";
import fishCookie from "images/snack-3.jpg";
import fishCookie2 from "images/snack-3-3.jpg";

export const Data = [
  {
    category: "dish",
    image: chickenTomatoSoup,
    image2: chickenTomatoSoup2,
    name: "치킨 토마토 스프",
    price: 10000,
    desc:
      "오메가3, 지방산이 풍부하여 세포 건강, 두뇌기능 향상, 심장과 피모 건강에 효과가 있습니다. ",
    ingredients: [
      "닭고기",
      "토마토",
      "파프리카",
      "락토프리우유",
      "양송이버섯",
      "당근",
    ],
    difficulty: 4,
  },
  {
    category: "dish",
    image: sweetPotatoPuree,
    image2: sweetPotatoPuree2,
    name: "고구마 퓨레",
    price: 7000,
    desc:
      "식이섬유가 풍부해 장 속 노폐물 제거 및 변비를 예방해 줍니다. 또한, 칼슘과 철분이 풍부해 성장, 발육에 도움이 됩니다.",
    ingredients: ["고구마", "락토프리우유", "계란", "아마씨오일", "유산균"],
    difficulty: 3,
  },
  {
    category: "dish",
    image: eggLasagna,
    image2: eggLasagna2,
    name: "달걀 라자냐",
    price: 11000,
    desc:
      "리놀레산이 풍부하여 면역력 강화와 염증 감소에 좋으며 강력한 항산화 작용과 콜레스테롤을 제거하는 효과로 암 예방에 좋습니다.",
    ingredients: [
      "계란",
      "감자",
      "토마토",
      "파프리카",
      "무염치즈",
      "락토프리우유",
      "양송이버섯",
    ],
    difficulty: 5,
  },
  {
    category: "drink",
    image: pumkinTea,
    image2: pumkinTea2,
    name: "호박 차",
    price: 5000,
    desc:
      "저칼로리 식품으로 단백질, 칼슘, 식이섬유가 풍부하고 콜레스테롤을 저하시켜주며 비타민이 많습니다.",
    ingredients: ["호박", "감자", "새송이 버섯", "대추", "단호박"],
    difficulty: 2,
  },
  {
    category: "drink",
    image: potatoTea,
    image2: potatoTea2,
    name: "감자 차",
    price: 4000,
    desc:
      "비타민과 식이섬유가 많고 피부미용, 노화방지, 눈건강에 도움을 줍니다.",
    ingredients: ["감자", "새송이 버섯", "대추"],
    difficulty: 2,
  },
  {
    category: "drink",
    image: spinachTea,
    image2: spinachTea2,
    name: "시금치 차",
    price: 5000,
    desc:
      "식이섬유가 풍부하고 비타민D가 많이 함유되어 있어 장건강과 면역력에 좋습니다.",
    ingredients: ["시금치", "파프리카", "대추", "오이"],
    difficulty: 1,
  },
  {
    category: "snack",
    image: salmon,
    image2: salmon2,
    name: "연어 쿠키",
    price: 3000,
    desc:
      "칼륨과 식이섬유가 풍부하고 노폐물 배출과 변비해소 피모건강에 도움이 되고 혈중 콜레스테롤의 수치를 낮춰줍니다.",
    ingredients: ["연어", "당근", "브로콜리", "계란"],
    difficulty: 5,
  },
  {
    category: "snack",
    image: pumkin,
    image2: pumkin2,
    name: "단호박 쿠키",
    price: 2000,
    desc:
      "베타카로틴이 풍부하게 들어있어 면연력을 높이고 항산화작용, 피부미용, 노화방지, 눈건강에 좋습니다.",
    ingredients: ["딘호박", "당근", "브로콜리", "계란"],
    difficulty: 1,
  },
  {
    category: "snack",
    image: fishCookie,
    image2: fishCookie2,
    name: "북어연어 쿠키",
    price: 3500,
    desc:
      "필수 아미노산을 함유하고 있으며 단백질과 철분이 많아 성장 발육에 좋습니다.",
    ingredients: ["북어", "연어", "당근", "브로콜리", "계란"],
    difficulty: 4,
  },
];
