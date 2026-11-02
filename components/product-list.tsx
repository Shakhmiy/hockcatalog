"use client";

import type { Product } from "@/app/page";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Props = { products: Product[] };

export default function ProductList({ products }: Props) {
  return <div className="grid grid-cols-3 gap-5">
    {products.map((product) => <Card key={product.id} className="group overflow-hidden transition-shadow hover:shadow-xl">
      <div className="flex h-56 items-center justify-center bg-white p-5">
        <img src={product.image} alt={product.name} className="h-full w-full object-contain" />
      </div>
      <CardHeader className="pb-2">
        <p className="text-xs font-bold uppercase tracking-wider text-blue-700">{product.category}</p>
        <CardTitle className="min-h-12 text-lg">{product.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-5 min-h-10 text-sm leading-relaxed text-slate-500">{product.description}</p>
        <div className="flex items-center justify-between border-t border-slate-100 pt-4">
          <p className="text-xl font-black text-slate-950">{product.price.toLocaleString("ru-RU")} ₽</p>
          <button type="button" className="rounded-xl bg-blue-700 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-blue-800">Подробнее</button>
        </div>
      </CardContent>
    </Card>)}
  </div>;
}
