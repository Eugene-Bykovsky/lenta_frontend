//data to check state manager

const user = {
  id: 1,
  name: 'Leanne Graham',
  username: 'Bret',
  email: 'Sincere@april.biz',
  address: {
    street: 'Kulas Light',
    suite: 'Apt. 556',
    city: 'Gwenborough',
    zipcode: '92998-3874',
    geo: {
      lat: '-37.3159',
      lng: '81.1496',
    },
  },
  phone: '1-770-736-8031 x56442',
  website: 'hildegard.org',
  company: {
    name: 'Romaguera-Crona',
    catchPhrase: 'Multi-layered client-server neural-net',
    bs: 'harness real-time e-markets',
  },
}
export type TUser = typeof user
//*****/

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

export type TsalesData = {
  store: 'store1'
  sku: 'sku1'
  fact: TSalesKey[]
}[]

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
