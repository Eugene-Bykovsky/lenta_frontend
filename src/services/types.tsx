// Lenta data types
// get, /categories
// Возвращает товарную иерархию.
const hierarchy = {
  sku: 'abc12',
  group: 'dfsdf',
  category: 'sdfsdf',
  subcategory: 'sdfdfs',
  uom: 1,
}

export type THierarchy = typeof hierarchy
export type THierarchyData = THierarchy[]

// get, /sales
// Возвращает временной ряд с информацией о количестве проданных товаров. Обязательные входные параметры запроса: id товара, id ТЦ.

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
// принимает спрогнозированные значения для данного товара и данного ТЦ, сохраняет в БД
// В теле запроса необходимо отправить JSON  файл

export type TPostSalesForecasts = {
  store: string
  forecast_date: string
  forecast: {
    sku: string
    sales_units: Record<string, number>
  }
}[]

// {"data": [
//   {"store": "sdfds1",
//    "forecast_date": "2023-09-01",
//    "forecast": {"sku": "sdf",
//                 "sales_units": {"2023-09-01": 1,
//                                 "2023-09-02": 3,
//                                 "2023-09-03": 7,
//                                 "2023-09-04": 9,
//                                 "2023-09-05": 0,
//                                 ...}
//                }
//   },
//   {"store": "s3ds1",
//    "forecast_date": "2023-09-01",
//    "forecast": {"sku": "sdf",
//                 "sales_units": {"2023-09-01": 1,
//                                 "2023-09-02": 3,
//                                 "2023-09-03": 7,
//                                 "2023-09-04": 9,
//                                 "2023-09-05": 0,
//                                 ...}
//                }
//   }
//  ]
// }

// ### **get, /forecast**
// возвращает спрогнозированные значения для данного товара и данного ТЦ из сохранённых в базу значений.

export type TGetSalesForecasts = {
  store: string
  sku: string
  forecast_date: string
  forecast: Record<string, number>
}[]

// {"data": [
//   {"store": "sdf23",
//    "sku": "dsf345",
//    "forecast_date": "2023-09-01",
//    "forecast": {"2023-09-01": 1,
//                 "2023-09-02": 3,
//                 "2023-09-03": 7,
//                 "2023-09-04": 9,
//                 "2023-09-05": 0,
//                 ...}
//    }
//  ]
// }

export const dataForTestTable: TsalesData = [
  {
    store: 'store1',
    sku: 'sku1',
    fact: [
      {
        date: '2023-01-15',
        sales_type: 0,
        sales_units: 5,
        sales_units_promo: 4,
        sales_rub: 6.7,
        sales_run_promo: 8.9,
      },
      {
        date: '2023-01-16',
        sales_type: 0,
        sales_units: 2,
        sales_units_promo: 6,
        sales_rub: 9.6,
        sales_run_promo: 3.4,
      },
    ],
  },
  {
    store: 'store2',
    sku: 'sku1',
    fact: [
      {
        date: '2023-01-15',
        sales_type: 0,
        sales_units: 5,
        sales_units_promo: 4,
        sales_rub: 6.7,
        sales_run_promo: 8.9,
      },
      {
        date: '2023-01-16',
        sales_type: 0,
        sales_units: 2,
        sales_units_promo: 6,
        sales_rub: 9.6,
        sales_run_promo: 3.4,
      },
    ],
  },
  {
    store: 'store2',
    sku: 'sku2',
    fact: [
      {
        date: '2023-01-15',
        sales_type: 0,
        sales_units: 5,
        sales_units_promo: 4,
        sales_rub: 6.7,
        sales_run_promo: 8.9,
      },
      {
        date: '2023-01-16',
        sales_type: 0,
        sales_units: 2,
        sales_units_promo: 6,
        sales_rub: 9.6,
        sales_run_promo: 3.4,
      },
    ],
  },
  {
    store: 'store2',
    sku: 'sku3',
    fact: [
      {
        date: '2023-01-15',
        sales_type: 0,
        sales_units: 5,
        sales_units_promo: 4,
        sales_rub: 6.7,
        sales_run_promo: 8.9,
      },
      {
        date: '2023-01-16',
        sales_type: 0,
        sales_units: 2,
        sales_units_promo: 6,
        sales_rub: 9.6,
        sales_run_promo: 3.4,
      },
    ],
  },
  {
    store: 'store4',
    sku: 'sku1',
    fact: [
      {
        date: '2023-01-15',
        sales_type: 0,
        sales_units: 5,
        sales_units_promo: 4,
        sales_rub: 6.7,
        sales_run_promo: 8.9,
      },
      {
        date: '2023-01-16',
        sales_type: 0,
        sales_units: 2,
        sales_units_promo: 6,
        sales_rub: 9.6,
        sales_run_promo: 3.4,
      },
    ],
  },
  {
    store: 'store6',
    sku: 'sku45',
    fact: [
      {
        date: '2023-01-15',
        sales_type: 0,
        sales_units: 5,
        sales_units_promo: 4,
        sales_rub: 6.7,
        sales_run_promo: 8.9,
      },
      {
        date: '2023-01-16',
        sales_type: 0,
        sales_units: 2,
        sales_units_promo: 6,
        sales_rub: 9.6,
        sales_run_promo: 3.4,
      },
    ],
  },
  {
    store: 'store7',
    sku: 'sku2',
    fact: [
      {
        date: '2023-01-15',
        sales_type: 0,
        sales_units: 5,
        sales_units_promo: 4,
        sales_rub: 6.7,
        sales_run_promo: 8.9,
      },
      {
        date: '2023-01-16',
        sales_type: 0,
        sales_units: 2,
        sales_units_promo: 6,
        sales_rub: 9.6,
        sales_run_promo: 3.4,
      },
    ],
  },
]

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

//forecasts
export type TSchemaForecastsResults = {
  id: number
  date: string
  target: string
  st_id: string
  pr_sku_id: string
}

export type TSchemaForecasts = {
  count: number
  next: string
  previous: string
  results: TSchemaForecastsResults[]
}
