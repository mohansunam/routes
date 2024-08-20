
import express from "express";
import productRoutes from './routes/productRoutes.js';
const port = 6000;
const app = express();

app.get('/', (req, res)=>{
  res.status(200).json({data:'hello Mohan'})

});

app.use(productRoutes);

app.listen(port, (m)=>{
  console.log('connected')


})




// app.get('/', async(req, res)=>{
//   try {
//     const response = await axios.get('https://jsonplaceholder.typicode.com/users')
//     return res.status(200).json({
//       status:'sucess', data:response.data

//     })
//   } 
//   catch(error){
//     return res.status(400).json({
//       status:'Error',data: `${err}`
//     })

//   }
// });





// const persons = ['ram', 'shyam', 'hari', 'mohan' ];
// const g = persons.map((k)=>{
//   return k.toUpperCase(persons);
// })
// console.log(g)





