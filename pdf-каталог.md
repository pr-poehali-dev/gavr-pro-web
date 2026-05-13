# PDF Каталог — инструкция по замене файла

## Где лежит файл каталога

```
public/catalog/gavrilov-foods-catalog.pdf
```

Сейчас там placeholder. Замени его на реальный PDF с тем же именем:
`gavrilov-foods-catalog.pdf`

---

## Где в коде прописан путь

**Файл:** `src/pages/Index.tsx`

```ts
// ~строка 75
const CATALOG_URL = "/catalog/gavrilov-foods-catalog.pdf";
```

Эта константа используется в обеих кнопках **Download Catalog PDF**:

1. **Раздел Products** (плашка снизу) — кнопка справа
2. **Footer** — кнопка в колонке Contact

Если захочешь переименовать файл — поменяй только `CATALOG_URL`, больше ничего трогать не нужно.

---

## Как заменить

1. Переименуй свой PDF в `gavrilov-foods-catalog.pdf`
2. Загрузи его в папку `public/catalog/` (через GitHub или Скачать → Подключить GitHub)
3. Готово — кнопки сразу начнут скачивать реальный каталог
