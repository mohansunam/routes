
import express from "express";
import userRoutes from './routes/userRoutes.js'

const port = 6000;
const app = express();

app.use(express.json());

app.get('/', (req, res)=>{
 
 return res.status(201).json({data:'chandra Mohan'});
});
app.use(userRoutes);
   

app.listen(port, (m)=>{
  console.log('Connected')

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





