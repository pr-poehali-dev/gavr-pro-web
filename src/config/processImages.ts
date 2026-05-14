/**
 * Фото для секции "Our Process / From Field to Export"
 * Меняй URL здесь — изменения применятся по всему сайту
 */

const CDN = "https://cdn.poehali.dev/files/";
const CDN_BUCKET = "https://cdn.poehali.dev/projects/36adff41-d365-445e-8d5f-dd8bed2bd445/bucket/";

export const PROCESS_IMAGES = {
  // Hero баннер — гречишное поле с горизонтом
  heroBg: CDN + "c25ede74-dcb5-4256-96a3-afd60a552d37.jpg",

  // Сетка активностей
  harvester:  CDN_BUCKET + "885c31d1-3054-4bef-8e49-f2dd110f27e9.png", // комбайн GS10 — большое
  owner:      CDN + "19d50183-cca5-4f78-9796-68e942a7e3d5.jpg",         // владелец в поле
  bigbags:    CDN + "53b2c384-19dd-43f2-b117-87844d0e9c5f.jpg",         // биг-бэги в складе
  pallets:    CDN + "5d93c333-7d00-4744-91ab-b71a904423d2.jpg",         // мешки на паллетах
  seeding:    CDN + "be3aab1a-b195-414f-b147-de5477a2ad3e.jpg",         // сеялка в поле
  tractor:    CDN + "daf6aabd-6d0f-4423-a493-39ffdca75054.jpg",         // John Deere

  // 3 блока снизу
  packaging:  CDN + "a976a097-dbe6-46a2-b8a5-cdc99ee64784.jpg",         // TEKO машина
  kirovets:   CDN + "b339e670-7c31-444f-84e7-45ac6f004c3e.jpg",         // Кировец
  storage:    CDN + "53b2c384-19dd-43f2-b117-87844d0e9c5f.jpg",         // склад

  // Грузовик (logistics)
  kamaz:      CDN + "b1e140d6-a8ec-432c-891d-911c30e983a9.jpg",
} as const;
