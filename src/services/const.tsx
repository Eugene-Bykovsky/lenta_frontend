export const convertDateFormat = (inputDate: string): string => {
  const [year, month, day] = inputDate.split('-')
  return `${day}.${month}.${year}`
}

// function generateUniqueKeys(data: string[]) {
//   return data.map((item: string) => {
//     const { pr_cat_id, pr_group_id, pr_sku_id, pr_subcat_id, st_id } = item

//     // Конкатенация значений для создания уникального ключа
//     const uniqueKey = [
//       pr_cat_id,
//       pr_group_id,
//       pr_sku_id,
//       pr_subcat_id,
//       st_id,
//     ].join('-')

//     // Возвращаем новый объект с добавленным уникальным ключом
//     return {
//       ...item,
//       uniqueKey,
//     }
//   })
// }

export type TColumns = {
  accessor: string
  header: string
}[]

export const COlUMN_Forecast = [
  { accessor: 'city', header: 'Город' },
  { accessor: 'st_id', header: 'ТК' },
  { accessor: 'pr_group_id', header: 'Группа' },
  { accessor: 'pr_cat_id', header: 'Категория' },
  { accessor: 'pr_subcat_id', header: 'Подкатегория' },
  { accessor: 'pr_sku_id', header: 'SKU' },
  { accessor: 'item', header: 'Товар' },
  { accessor: 'unit', header: 'Ед. измерения' },
  { accessor: 'target', header: 'Количество на 14 дней' },
]

export const COlUMN_Statistic = [
  { accessor: 'city', header: 'Город' },
  { accessor: 'st_id', header: 'ТК' },
  { accessor: 'pr_group_id', header: 'Группа' },
  { accessor: 'pr_cat_id', header: 'Категория' },
  { accessor: 'pr_subcat_id', header: 'Подкатегория' },
  { accessor: 'pr_sku_id', header: 'SKU' },
  { accessor: 'item', header: 'Товар' },
  { accessor: 'unit', header: 'Ед. измерения' },
  { accessor: 'target', header: 'Продажи факт' },
  { accessor: 'diff', header: 'Разница' },
  { accessor: 'persent', header: 'Отклонения' },
]

export const SELECT_CONFIGS = [
  'Город :',
  'Категория товара : ',
  'Выбор ТК : ',
  'Подкатегория товара: ',
  'Группа товара :',
  'Товар :',
  'Спрос на: ',
]

// export const SELECT_CONFIG_Static = [
//   'Город :',
//   'Категория товара : ',
//   'Выбор ТК : ',
//   'Подкатегория товара: ',
//   'Группа товара :',
//   'Товар :',
// ]

const city = ['Москва', 'Мурманск', 'Киров', 'Иваново']

const days = [
  '1 день',
  '2 дня',
  '3 дня',
  '4 дня',
  '5 дней',
  '6 дней',
  '7 дней',
  '8 дней',
  '9 дней',
  '10 дней',
  '11 дней',
  '12 дней',
  '13 дней',
  '14 дней',
]

const store = [
  '1aa057313c28fa4a40c5bc084b116',
  '1aa057313c28fa4a40c5bc084b276',
  '1aa057313c28fa4a40c5bc084d276',
  '1aa057313c28fa4a40c5bc081d276',
]

const subcat = [
  'ca34f669ae367c87f0e75dcsd0ee5',
  '1aa05dd13c28fa4a40c5bc084d276',
  '1aa057313c2ffa4a40c5bc081d276',
  '1aa0ff313c28fa4a40c5bc011d276',
]

const cat = [
  'ca34f669ae367c87f0e75dcsd1ee5',
  '1aa05dd13c28fa4a40c5bc084d276',
  '1aa057313c2ffa4a40c5bc084gd276',
  '1aa0ff313c28fa4a40c5bc0841d276',
]

export const SELECT_CONF = [
  { name: 'Город :', options: city },
  { name: 'Категория товара : ', options: cat },
  { name: 'Выбор ТК : ', options: store },
  { name: 'Подкатегория товара: : ', options: subcat },
  { name: 'Группа товара: : ', options: cat },
  { name: 'Товар товара: : ', options: cat },
  { name: 'Спрос на: : ', options: days },
]

// the same check
// pr_cat_id
// pr_group_id
// pr_subcat_id
// st_id

export const REPLACE_DATA_0 = [
  {
    checked: false,
    date: '2023-10-09',
    id: 1,
    pr_cat_id: '1bc0249a6412ef49b07fe6f62e6dc8de',
    pr_group_id: 'c74d97b01eae257e44aa9d5bade97baf',
    pr_sku_id: '1',
    pr_subcat_id: 'ca34f669ae367c87f0e75dcae0f61ee5',
    pr_uom_id: 17,
    st_id: '1aa057313c28fa4a40c5bc084b11d276',
    target: 99,
  },
  {
    checked: false,
    date: '2023-10-08',
    id: 2,
    pr_cat_id: '1bc0249a6412ef49b07fe6f62e6dc8de',
    pr_group_id: 'c74d97b01eae257e44aa9d5bade97baf',
    pr_sku_id: '1',
    pr_subcat_id: 'ca34f669ae367c87f0e75dcae0f61ee5',
    pr_uom_id: 17,
    st_id: '1aa057313c28fa4a40c5bc084b11d276',
    target: 22,
  },
  {
    checked: false,
    date: '2023-10-10',
    id: 3,
    pr_cat_id: '1bc0249a6412ef49b07fe6f62e6dc8de',
    pr_group_id: 'c74d97b01eae257e44aa9d5bade97baf',
    pr_sku_id: '1',
    pr_subcat_id: 'ca34f669ae367c87f0e75dcae0f61ee5',
    pr_uom_id: 17,
    st_id: '1aa057313c28fa4a40c5bc084b11d276',
    target: 666,
  },
  {
    checked: false,
    date: '2023-10-11',
    id: 4,
    pr_cat_id: '1bc0249a6412ef49b07fe6f62e6dc8de',
    pr_group_id: 'c74d97b01eae257e44aa9d5bade97baf',
    pr_sku_id: 'fd064933250b0bfe4f926b867b0a5ec8',
    pr_subcat_id: 'ca34f669ae367c87f0e75dcae0f61ee5',
    pr_uom_id: 17,
    st_id: '1aa057313c28fa4a40c5bc084b11d276',
    target: 666,
  },
  {
    checked: false,
    date: '2023-10-08',
    id: 5,
    pr_cat_id: '1bc0249a6412ef49b07fe6f62e6dc8de',
    pr_group_id: 'c74d97b01eae257e44aa9d5bade97baf',
    pr_sku_id: 'fd064933250b0bfe4f926b867b0a5ec8',
    pr_subcat_id: 'ca34f669ae367c87f0e75dcae0f61ee5',
    pr_uom_id: 17,
    st_id: '1aa057313c28fa4a40c5bc084b11d276',
    target: 8,
  },
  {
    checked: false,
    date: '2023-10-10',
    id: 6,
    pr_cat_id: '1bc0249a6412ef49b07fe6f62e6dc8de',
    pr_group_id: 'c74d97b01eae257e44aa9d5bade97baf',
    pr_sku_id: 'fd064933250b0bfe4f926b867b0a5ec8',
    pr_subcat_id: 'ca34f669ae367c87f0e75dcae0f61ee5',
    pr_uom_id: 17,
    st_id: '1aa057313c28fa4a40c5bc084b11d276',
    target: 78,
  },
  {
    checked: false,
    date: '2023-10-11',
    id: 7,
    pr_cat_id: '1bc0249a6412ef49b07fe6f62e6dc8de',
    pr_group_id: 'c74d97b01eae257e44aa9d5bade97baf',
    pr_sku_id: 'fd064933250b0bfe4f926b867b0a5ec8',
    pr_subcat_id: 'ca34f669ae367c87f0e75dcae0f61ee5',
    pr_uom_id: 17,
    st_id: '1aa057313c28fa4a40c5bc084b11d276',
    target: 5,
  },
  {
    checked: false,
    date: '2023-11-04',
    id: 8,
    pr_cat_id: '1bc0249a6412ef49b07fe6f62e6dc8de',
    pr_group_id: 'c74d97b01eae257e44aa9d5bade97baf',
    pr_sku_id: 'fd064933250b0bfe4f926b867b0a5ec8',
    pr_subcat_id: 'ca34f669ae367c87f0e75dcae0f61ee5',
    pr_uom_id: 17,
    st_id: '1aa057313c28fa4a40c5bc084b11d276',
    target: 111,
  },
  {
    checked: false,
    date: '2023-11-04',
    id: 9,
    pr_cat_id: '1bc0249a6412ef49b07fe6f62e6dc8de',
    pr_group_id: 'c74d97b01eae257e44aa9d5bade97baf',
    pr_sku_id: 'fd064933250b0bfe4f926b867b0',
    pr_subcat_id: 'ca34f669ae367c87f0e75dcae0f61ee5',
    pr_uom_id: 17,
    st_id: '1aa057313c28fa4a40c5bc084b11d276',
    target: 222,
  },
  {
    checked: false,
    date: '2023-11-05',
    id: 10,
    pr_cat_id: '1bc0249a6412ef49b07fe6f62e6dc8de',
    pr_group_id: 'c74d97b01eae257e44aa9d5bade97baf',
    pr_sku_id: 'fd064933250b0bfe4f926b867b0a5ec9',
    pr_subcat_id: 'ca34f669ae367c87f0e75dcae0f61ee5',
    pr_uom_id: 17,
    st_id: '1aa057313c28fa4a40c5bc084b11d276',
    target: 1000,
  },
  {
    checked: false,
    date: '2023-11-06',
    id: 9,
    pr_cat_id: '1bc0249a6412ef49b07fe6f62e6dc8de',
    pr_group_id: 'c74d97b01eae257e44aa9d5bade97baf',
    pr_sku_id: 'fd064933250b0bfe4f926b867b0a5ec9',
    pr_subcat_id: 'ca34f669ae367c87f0e75dcae0f61ee5',
    pr_uom_id: 17,
    st_id: '1aa057313c28fa4a40c5bc084b11d276',
    target: 666,
  },
  {
    checked: false,
    date: '2023-11-06',
    id: 10,
    pr_cat_id: '1bc0249a6412ef49b07fe6f62e6dc8de',
    pr_group_id: 'c74d97b01eae257e44aa9d5bade97baf',
    pr_sku_id: 'fd064933250b0bfe4f926b867b0a5ec8',
    pr_subcat_id: 'ca34f669ae367c87f0e75dcae0f61ee5',
    pr_uom_id: 17,
    st_id: '1aa057313c28fa4a40c5bc084b11d276',
    target: 100,
  },
  {
    checked: false,
    date: '2023-11-06',
    id: 11,
    pr_cat_id: '1bc0249a6412ef49b07fe6f62e6dc8de',
    pr_group_id: 'c74d97b01eae257e44aa9d5bade97baf',
    pr_sku_id: 'fd064933250b0bfe4f926b867b0a5ec8',
    pr_subcat_id: 'ca34f669ae367c87f0e75dcae0f61ee5',
    pr_uom_id: 17,
    st_id: '1aa057313c28fa4a40c5bc084b11d276',
    target: 666,
  },
  {
    checked: false,
    date: '2023-11-06',
    id: 12,
    pr_cat_id: '1bc0249a6412ef49b07fe6f62e6dc8de',
    pr_group_id: 'c74d97b01eae257e44aa9d5bade97baf',
    pr_sku_id: 'fd064933250b0bfe4f926b867b0a5ec8',
    pr_subcat_id: 'ca34f669ae367c87f0e75dcae0f61ee5',
    pr_uom_id: 17,
    st_id: '1aa057313c28fa4a40c5bc084b11d276',
    target: 150,
  },
  {
    checked: false,
    date: '2024-11-10',
    id: 13,
    pr_cat_id: '1bc0249a6412ef49b07fe6f62e6dc8de',
    pr_group_id: 'c74d97b01eae257e44aa9d5bade97baf',
    pr_sku_id: 'fd064933250b0bfe4f926b867b0a5ec8',
    pr_subcat_id: 'ca34f669ae367c87f0e75dcae0f61ee5',
    pr_uom_id: 17,
    st_id: '1aa057313c28fa4a40c5bc084b11d276',
    target: 200,
  },
  {
    checked: false,
    date: '2024-11-10',
    id: 14,
    pr_cat_id: '1bc0249a6412ef49b07fe6f62e6dc8de',
    pr_group_id: 'c74d97b01eae257e44aa9d5bade97baf',
    pr_sku_id: 'fd064933250b0bfe4f926b867b0a5ec9',
    pr_subcat_id: 'ca34f669ae367c87f0e75dcae0f61ee5',
    pr_uom_id: 17,
    st_id: '1aa057313c28fa4a40c5bc084b11d276',
    target: 300,
  },
  {
    checked: false,
    date: '2024-11-06',
    id: 15,
    pr_cat_id: '1bc0249a6412ef49b07fe6f62e6dc8de',
    pr_group_id: 'c74d97b01eae257e44aa9d5bade97baf',
    pr_sku_id: 'fd064933250b0bfe4f926b867b0a5ec7',
    pr_subcat_id: 'ca34f669ae367c87f0e75dcae0f61ee5',
    pr_uom_id: 17,
    st_id: '1aa057313c28fa4a40c5bc084b11d276',
    target: 4,
  },
  {
    checked: false,
    date: '2024-11-06',
    id: 16,
    pr_cat_id: '1bc0249a6412ef49b07fe6f62e6dc8de',
    pr_group_id: 'c74d97b01eae257e44aa9d5bade97baf',
    pr_sku_id: 'fd064933250b0bfe4f926b867b0a5ec5',
    pr_subcat_id: 'ca34f669ae367c87f0e75dcae0f61ee5',
    pr_uom_id: 17,
    st_id: '1aa057313c28fa4a40c5bc084b11d276',
    target: 10,
  },
]

// REPLACE_DATA_0 = generateUniqueKeys(REPLACE_DATA_0)

// export const REPLACE_DATA = REPLACE_DATA_0.map((fcstItem) => {
//   return {
//     ...fcstItem,
//     checked: false,
//     date: convertDateFormat(fcstItem.date),
//   }
// })

// const rowFilter = [{ value: 10 }, { value: 50 }, { value: 100 }, { value: 200 }]
