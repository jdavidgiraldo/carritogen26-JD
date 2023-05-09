// async function getProducts() {
//   // return window
//   //   .fetch('https://ecommercebackend.fundamentos-29.repl.co/')
//   //   .then((res) => res.json())
//   //   .then((data) => data)
//   //   .catch((err) => {console.log(err)})
//   try {
//     const res = await window.fetch(
//       'https://ecommercebackend.fundamentos-29.repl.co/'
//     )
//     const data = await res.json()
//     return data
//   } catch (error) {
//     console.log(error)
//   }
// }
const dataBase = [
  {
    id: 1,
    name: 'BALLANTINE`S - FINEST',
    price: 1000,
    image: 'assets/images/id_1.png',
    category: 'Product',
    quantity: 10,
    description: 'Product 1 description',
  },

  {
    id: 2,
    name: 'ARDBEG - 10 YEAR OLD',
    price: 1000,
    image: 'assets/images/id_2.png',
    category: 'Product',
    quantity: 12,
    description: 'Product 1 description',
  },

  {
    id: 3,
    name: 'CANADIAN CLUB - CLASSIC 12 YEAR OLD',
    price: 1000,
    image: 'assets/images/id_3.png',
    category: 'Product',
    quantity: 8,
    description: 'Product 1 description',
  },

  {
    id: 4,
    name: 'CANADIAN CLUB - PREMIUM',
    price: 1000,
    image: 'assets/images/id_4.png',
    category: 'Product',
    quantity: 15,
    description: 'Product 1 description',
  },

  {
    id: 5,
    name: 'AUCHENTOSHAN - THREE WOOD',
    price: 1000,
    image: 'assets/images/id_5.png',
    category: 'Product',
    quantity: 14,
    description: 'Product 1 description',
  },

  {
    id: 6,
    name: 'MERSER - 12 YEAR OLD DOUBLE BARREL',
    price: 1000,
    image: 'assets/images/id_6.png',
    category: 'Product',
    quantity: 13,
    description: 'Product 1 description',
  },

  {
    id: 7,
    name: 'PLAMB`S - NAVY',
    price: 1000,
    image: 'assets/images/id_7.png',
    category: 'Product',
    quantity: 17,
    description: 'Product 1 description',
  },

  {
    id: 8,
    name: 'PCAPTAIN MORGAN - BLACK SPICED',
    price: 1000,
    image: 'assets/images/id_8.png',
    category: 'Product',
    quantity: 18,
    description: 'Product 1 description',
  },

  {
    id: 9,
    name: 'BUMBU - CRAFT RUM',
    price: 1000,
    image: 'assets/images/id_9.png',
    category: 'Product',
    quantity: 19,
    description: 'Product 1 description',
  },

  {
    id: 10,
    name: 'PAPPLETON ESTATE - 12YO RARE CASKS',
    price: 1000,
    image: 'assets/images/id_10.png',
    category: 'Product',
    quantity: 13,
    description: 'Product 1 description',
  },

  {
    id: 11,
    name: 'D`EAUBONNE - V.S.O.P.',
    price: 1000,
    image: 'assets/images/id_11.png',
    category: 'Product',
    quantity: 15,
    description: 'Product 1 description',
  },

  {
    id: 12,
    name: 'JP CHENET - BRANDY XO',
    price: 1000,
    image: 'assets/images/id_12.png',
    category: 'Product',
    quantity: 17,
    description: 'Product 1 description',
  },

  {
    id: 13,
    name: 'ST. REMY - V.S.O.P.',
    price: 1000,
    image: 'assets/images/id_13.png',
    category: 'Product',
    quantity: 11,
    description: 'Product 1 description',
  },

  {
    id: 14,
    name: 'TORRES - 20 YEAR OLD',
    price: 1000,
    image: 'assets/images/id_14.png',
    category: 'Product',
    quantity: 11,
    description: 'Product 1 description',
  },

  {
    id: 15,
    name: 'MIGUEL TORRES - 10',
    price: 1000,
    image: 'assets/images/id_15.png',
    category: 'Product',
    quantity: 16,
    description: 'Product 1 description',
  },

  {
    id: 16,
    name: 'COURVOISIER - V.S.',
    price: 1000,
    image: 'assets/images/id_16.png',
    quantity: 19,
    description: 'Product 1 description',
  },

  {
    id: 17,
    name: 'D`USSE - V.S.O.P.',
    price: 1000,
    image: 'assets/images/id_17.png',
    quantity: 20,
    description: 'Product 1 description',
  },

  {
    id: 18,
    name: 'HENNESSY - X.O. THE ORIGINAL',
    price: 1000,
    image: 'assets/images/id_18.png',
    quantity: 12,
    description: 'Product 1 description',
  },

  {
    id: 19,
    name: 'HINE - VINTAGE 1988',
    price: 1000,
    image: 'assets/images/id_19.png',
    quantity: 9,
    description: 'Product 1 description',
  },

  {
    id: 20,
    name: 'REMY MARTIN - X.O. FINE CHAMPAGNE EXCELLENCE',
    price: 1000,
    image: 'assets/images/id_20.png',
    quantity: 7,
    description: 'Product 1 description',
  },
]

export default dataBase
