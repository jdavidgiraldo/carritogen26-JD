import loader from './components/loader.js'
import showMenu from './components/showMenu.js'
import showCart from './components/showCart.js'
import products from './components/products.js'
import cart from './components/cart.js'
import dataBase from './helpers/getProducts.js'
import showDescription from './components/showDescription.js'
/*UI Elements */
/*Ocultar loader*/
loader()

/*Mostrar Menu*/
showMenu()

/*Mostrar Cart*/
showCart()

/*End UI Elements*/

/*Products*/
const { db, printProducts } = products(dataBase)

/*Cart*/
cart(db, printProducts)

/*Mostrar descripción */
showDescription()
