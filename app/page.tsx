import ProductList from "@/components/product-list";

export type Product = { id: number; name: string; category: string; price: number; description: string; image: string };

const products: Product[] = [
  { id: 1, name: "Шлем Bauer Re-Akt 90", category: "Шлемы", price: 18990, description: "Лёгкий шлем с удобной регулировкой и надёжной защитой головы.", image: "https://cdn.shoplightspeed.com/shops/636408/files/72453491/bauer-re-akt-90-hockey-helmet.jpg" },
  { id: 2, name: "Коньки Bauer Supreme Shadow", category: "Коньки", price: 32990, description: "Профессиональная посадка и эффективная передача энергии.", image: "https://uk.bauer.com/cdn/shop/files/BauerSupremeShadowSkates106358916_89030241-03fd-42b8-81c7-8b82faf0d41c.jpg?v=1715339179" },
  { id: 3, name: "Клюшка Warrior Covert Krypto", category: "Клюшки", price: 24990, description: "Композитная клюшка для быстрого и точного броска.", image: "https://www.thehockeyshop.com/cdn/shop/files/hockey-sticks-warrior-covert-krypto-senior-hockey-stick-1221789840_1080x.jpg?v=1777704473" },
  { id: 4, name: "Шлем Bauer Re-Akt 85", category: "Шлемы", price: 15990, description: "Удобная посадка, вентиляция и защита во время игры.", image: "https://media-www.canadiantire.ca/product/playing/hockey/hockey-equipment/4834279/bauer-re-akt-85-hockey-helmet-red-large-b13311ff-e2c1-4f70-bdac-8f6c505ceb3b-jpgrendition.jpg" },
  { id: 5, name: "Коньки CCM Jetspeed FT680", category: "Коньки", price: 27990, description: "Удобные хоккейные коньки с прочной конструкцией ботинка.", image: "https://media-www.sportchek.ca/product/div-01-hardgoods/dpt-10-hockey/sdpt-10-skates/334131672/ccm-jetspeed-ft680-senior-hockey-skates-2c11eefc-f4d6-478e-9187-46ed07b25452-jpgrendition.jpg?imdensity=1&impolicy=gZoom&imwidth=640" },
  { id: 6, name: "Коньки Bauer Supreme Mach", category: "Коньки", price: 35990, description: "Модель с усиленной поддержкой стопы и голеностопа.", image: "https://www.bauer.com/cdn/shop/products/613471_01_9b29dde3-0f7c-4abe-ae25-5cbbe61857ff.png?v=1670273312" },
  { id: 7, name: "Клюшка Bauer Vapor Hyperlite 2", category: "Клюшки", price: 29990, description: "Лёгкая клюшка с отзывчивым крюком и быстрым выпуском шайбы.", image: "https://kith.com/cdn/shop/files/1066417-RHTP92-Front_1e30f737-3e2f-4ece-8ffb-0baafc5113e2.jpg?v=1765394956&width=1920" },
  { id: 8, name: "Шлем Bauer Re-Akt 155", category: "Шлемы", price: 21990, description: "Защитный шлем с системой индивидуальной регулировки.", image: "https://cdn.shoplightspeed.com/shops/636408/files/72453491/bauer-re-akt-90-hockey-helmet.jpg" },
  { id: 9, name: "Хоккейный шлем Bauer красный", category: "Шлемы", price: 14990, description: "Классический хоккейный шлем с вентиляционными отверстиями.", image: "https://media-www.canadiantire.ca/product/playing/hockey/hockey-equipment/4834279/bauer-re-akt-85-hockey-helmet-red-large-b13311ff-e2c1-4f70-bdac-8f6c505ceb3b-jpgrendition.jpg" },
  { id: 10, name: "Хоккейные коньки CCM", category: "Коньки", price: 23990, description: "Надёжные коньки для тренировок и регулярных матчей.", image: "https://media-www.sportchek.ca/product/div-01-hardgoods/dpt-10-hockey/sdpt-10-skates/334131672/ccm-jetspeed-ft680-senior-hockey-skates-2c11eefc-f4d6-478e-9187-46ed07b25452-jpgrendition.jpg?imdensity=1&impolicy=gZoom&imwidth=640" },
  { id: 11, name: "Клюшка Warrior Covert", category: "Клюшки", price: 19990, description: "Универсальная композитная клюшка для контроля шайбы.", image: "https://www.thehockeyshop.com/cdn/shop/files/hockey-sticks-warrior-covert-krypto-senior-hockey-stick-1221789840_1080x.jpg?v=1777704473" },
  { id: 12, name: "Клюшка Bauer Hyperlite", category: "Клюшки", price: 26990, description: "Лёгкая модель для точных передач и мощных бросков.", image: "https://kith.com/cdn/shop/files/1066417-RHTP92-Front_1e30f737-3e2f-4ece-8ffb-0baafc5113e2.jpg?v=1765394956&width=1920" },
];

export default function Home() {
  return <main className="mx-auto min-h-screen max-w-7xl px-8 py-10">
    <section className="mb-8">
      <p className="mb-2 text-sm font-bold uppercase tracking-[0.24em] text-blue-700">Hockey store</p>
      <h1 className="text-4xl font-black tracking-tight text-slate-950">Хоккейная экипировка</h1>
      <p className="mt-3 text-slate-600">Всё необходимое для уверенной игры на льду.</p>
    </section>
    <ProductList products={products} />
  </main>;
}
