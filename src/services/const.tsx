export const convertDateFormat = (inputDate: string): string => {
  const [year, month, day] = inputDate.split('-')
  return `${day}.${month}.${year}`
}

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

export const SELECT_CONF_FCST = [
  { name: 'Город :', options: city, id: 'city' },
  { name: 'Категория товара : ', options: cat, id: 'cat' },
  { name: 'Выбор ТК : ', options: store, id: 'store' },
  { name: 'Подкатегория товара: : ', options: subcat, id: 'subcat' },
  { name: 'Группа товара: : ', options: cat, id: 'group' },
  { name: 'Товар : ', options: cat, id: 'item' },
  { name: 'Спрос на: : ', options: days, id: 'day' },
]

export const SELECT_CONF_STAT = [
  { name: 'Город :', options: city, id: 'city' },
  { name: 'Категория товара : ', options: cat, id: 'cat' },
  { name: 'Выбор ТК : ', options: store, id: 'store' },
  { name: 'Подкатегория товара: : ', options: subcat, id: 'subcat' },
  { name: 'Группа товара: : ', options: cat, id: 'group' },
  { name: 'Товар : ', options: cat, id: 'item' },
  { name: 'Период с: ', options: days, id: 'day' },
  { name: 'Период по: ', options: days, id: 'day' },
]

// const ArrUpdated = [
//   {
//     checked: false,
//     id: 16689,
//     pr_cat_id: '1bc0249a6412ef49b07fe6f62e6dc8de',
//     pr_group_id: 'c74d97b01eae257e44aa9d5bade97baf',
//     pr_sku_id: 'fd064933250b0bfe4f926b867b0a5ec8',
//     pr_subcat_id: 'ca34f669ae367c87f0e75dcae0f61ee5',
//     pr_uom_id: 17,
//     st_id: '1ecfb463472ec9115b10c292ef8bc986',
//     sales_data: [{ target: 4, date: '18.07.2023' }, { target: 4, date: '21.07.2023' }, .... ],
//   },
// ]

// ;

// function updateArray(originalArray: any[]) {
//   const map = new Map()

//   originalArray.forEach((item: any) => {
//     const key =
//       item.pr_cat_id +
//       item.pr_group_id +
//       item.pr_sku_id +
//       item.pr_subcat_id +
//       item.pr_uom_id +
//       item.st_id

//     if (!map.has(key)) {
//       map.set(key, {
//         ...item,
//         sales_data: [{ date: item.date, target: item.target }],
//         target: item.target,
//       })
//     } else {
//       // Если ключ есть, добавляем новую дату и цель в sales_data
//       const mapItem = map.get(key)
//       mapItem.sales_data.push({ date: item.date, target: item.target })
//       mapItem.target += item.target
//     }
//   })

//   return [...map.values()]
// }

// export const ArrUpdated = updateArray(newArr)

// console.log(ArrUpdated)
