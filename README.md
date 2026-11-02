# Hockey Equipment Catalog

Каталог из 12 товаров на Next.js App Router, React, TypeScript, Tailwind CSS 4 и Bun.

## Запуск

```bash
bun install
bun dev
```

Откройте http://localhost:3000.

## Структура

- `app/page.tsx` — серверный компонент: хранит массив из 12 товаров и передаёт его через props.
- `components/product-list.tsx` — клиентский компонент (`"use client"`): генерирует карточки через `map`.
- `components/ui/card.tsx` — простой компонент Card.
- Фиксированная сетка: 3 карточки в ряд, без мобильной адаптации.
- Фотографии загружаются по внешним ссылкам.
