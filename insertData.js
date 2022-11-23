const {client}= require("./index.js");

const singleData=async()=>{
   try {
      const mydatabase= client.db("school");
      const collection=mydatabase.collection("teachers")

      const myData =[
        {name:"abs kawser",age:99},
        {name:"Sakib",age:64},
        {name:"abs Ratul",age:23},
        {name:"kawser",age:9},
  ]
  const result = await collection.insertMany(myData);
  console.log(`${result.insertedCount} documents were inserted`);

   } catch (error) {
      console.log(error);
   }finally{
    await client.close();
   }
}
singleData()