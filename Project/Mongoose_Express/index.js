const express = require('express')
const app = express();
const path = require('path');
const methodOverride = require("method-override");

const mongoose = require('mongoose');

const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true})) // recognize the incoming Request Object as strings or arrays
app.use(methodOverride('_method'))

const categories = ['fruit', 'vegetable', 'dairy', 'mushrooms'];


app.get('/products', async (req, res)=>{
    const {category} = req.query;
    if(category){
        const products = await Product.find({category});
        res.render('products/index', {products, category});
    } else {
        // find all products
        const products = await Product.find({});
        res.render('products/index', {products, category: "All"});
    }
    
    // console.log(products)
    // res.send('ALL PRODUCTS WILL BE HERE!')
    
})

app.get('/products/new', (req, res)=>{
    res.render('products/new', {categories})
})

// show specific
app.get('/products/:id', async (req, res) =>{
    const {id} = req.params;
    const product = await Product.findById(id);
    // console.log(product); // print to command line
    res.render('products/show', {product, categories})
})

// print
app.post('/products', async (req, res)=>{
    const newProduct = new Product(req.body);
    // const product = await newProduct.save();
    await newProduct.save();
    // console.log(product)
    // res.send('making your product!')
    res.redirect(`products/${newProduct._id}`)
})

// edit
app.get('/products/:id/edit', async (req, res)=>{
    const {id} = req.params;
    const product = await Product.findById(id);
    res.render('products/edit', {product, categories});

})
app.put('/products/:id', async (req, res) => {
    const {id} = req.params;
    const product =  await Product.findByIdAndUpdate(id, req.body, {runValidators: true});
    // console.log(req.body)
    // res.send('PUT!!!!')
    res.redirect(`/products/${product._id}`);
})

// delete
app.delete('/products/:id', async(req, res)=> {
    const {id} = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.redirect('/products');
})

app.listen(3000, () => {
    console.log("APP IS LISTENING ON PORT 3000!")
})