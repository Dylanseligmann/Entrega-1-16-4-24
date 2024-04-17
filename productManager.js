class ProductManager {

    constructor(){
        // Create empty array
        this.products = [];
        // Create an internal counter
        this.counter = 0;
    }

    // Attempts to add a new product
    addProduct(title, description, price, thumbnail, stock){
        
        // Create a new object with product properties
        const product = {
            title,
            description,
            price,
            thumbnail,
            stock
        };

        //check if the properties of the product are defined
        const check = Object.values(product).every((value) => value !== undefined);
        //In case all are defined
        if(check){
            //Set product Code and increment the counter
            product.code = this.counter++; 
            //Add the product to the products array
            this.products.push(product);
            //Return the product so code can be accessed
            return product;
        }
        //In case not all are defined, return false value
        return false;
    }

    //return all the products
    getProducts(){
        return this.products;
    }

    //attempt to get a product by code
    getProductByCode(code){
        //iterate all products
        for(const product of this.products){
            //if matches return the product
            if(product.code === code){
                return product;
            }
        }
        //if no match found log an error
        console.log('Not found');
    }
}

//create a new ProductManager
const pm = new ProductManager();

//Add products to the manager
const product1 = pm.addProduct('Nesquik', 'cacao powder', 5, 'Cocoa powder for them kids.jpg', 100);
const product2 = pm.addProduct('Banana', 'Banana Smoothie', 8, 'ExtraLarge.jpg', 20);

//This product wont be added
const product = pm.addProduct('Banana', 'Banana');
if(!product)console.log('product addition failed');

//Get all products
const allProducts = pm.getProducts();
//Attempt to get product 2 by code
const product2ref = pm.getProductByCode(product2.code);
//Attempt to get non existent product
const error = pm.getProductByCode(100);

console.log(product1.code,product2.code,product2ref.code);
console.log(allProducts);




