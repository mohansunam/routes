

export const getUser = (req, res)=>{
  console.log(req.query)
  return res.status(200).json({data:'hello mohan this is chandra'});
}