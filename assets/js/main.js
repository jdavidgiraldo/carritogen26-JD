import loader from './components/loader.js'
import showMenu from './components/showMenu.js'
import showCart from './components/showCart.js'
import products from './components/products.js'
import getProducts from './helpers/getProducts.js'
import cart from './components/cart.js'
/*UI Elements */
/*Ocultar loader*/
loader()

/*Mostrar Menu*/
showMenu()

/*Mostrar Cart*/
showCart()

/*End UI Elements*/

/*Products*/
const {db, printProducts} = products(await getProducts())

/*Cart*/
cart(db, printProducts)
