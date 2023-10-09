const hierarchy = {
  sku: 'abc12',
  group: 'dfsdf',
  category: 'sdfsdf',
  subcategory: 'sdfdfs',
  uom: 1,
}

export type THierarchy = typeof hierarchy
export type THierarchyData = THierarchy[]

const salesKey = {
  date: '2023-01-15',
  sales_type: 0,
  sales_units: 5,
  sales_units_promo: 4,
  sales_rub: 6.7,
  sales_run_promo: 8.9,
}
export type TSalesKey = typeof salesKey

export type TsalesDataStore = {
  store: string
  sku: string
  fact: TSalesKey[]
}

export type TsalesData = {
  store: string
  sku: string
  fact: TSalesKey[]
}[]

export type TApiForecast = {
  count: number
  next: string
  previous: null
  results: TsalesData
}

// ### get, /shops
// возвращает список ТЦ. Можно добавить фильтры по полям (например, тип, локация, др). Формат ответа:

const storeKey = {
  store: 'asd1',
  city: 'erert',
  division: 'tuy5r',
  type_format: 1,
  loc: 3,
  size: 19,
  is_active: 0,
}
export type TStoreKey = typeof storeKey
export type TStoreList = TStoreKey[]

// ### **post, /forecast**
// принимает спрогнозированные значения для данного товара и д

//продажы типазация на базе ручек
//sales
export type TSchemaSalesResults = {
  id: number
  date: string
  pr_sales_type_id: boolean
  pr_sales_in_units: number
  pr_promo_sales_in_units: number
  pr_sales_in_rub: number
  pr_promo_sales_in_rub: number
  pr_sku_id: string
  st_id: string
}

export type TSchemaSales = {
  count: number
  next: string
  previous: string
  results: TSchemaSalesResults[]
}

//* * forecasts * *//
export type TForecastsResults = {
  id: number
  date: string
  target: number
  st_id: string
  pr_sku_id: string
}

export type TGetForecasts = {
  count: number
  next: string
  previous: string
  results: TForecastsResults[]
}

//* * category * *//
export type TCategory = {
  pr_cat_id: string
  pr_group_id: string
  pr_sku_id: string
  pr_subcat_id: string
  pr_uom_id: number
}

export type TGetCategory = {
  count: number
  next: string
  previous: string | null
  results: TCategory[]
}

export type TSelectorsConfig = {
  name: string
  options: string[]
  id: string
}[]
