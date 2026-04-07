const fs = require("fs");
const args =process.argv;
const command=args[2]

if (!fs.existsSync("products.json")) {
  fs.writeFileSync("products.json", JSON.stringify([]));
}

const readFile=()=>{
    const data=fs.readFileSync("products.json")
    return JSON.parse(data.toString())
}
const saveData=(products)=>{
    fs.writeFileSync("products.json",JSON.stringify(products,null,1))
}
if(command !=="add"||"list"||"delete"){
    console.log("enter add or delete or list")
}
if(command==="add"){
    const name=args[3]
    const price=Number(args[4])
    const products=readFile()
    let count;
    if(products.length-1>0){
        count=products[products.length-1].id+1
    }else{
        count=1
    }
    const newProdcut={
        id:count++,
        name,
        price
    }
    products.push(newProdcut)
    saveData(products)
    console.log("added: ",newProdcut)
}

if(command==="list"){
    let hold=fs.readFileSync("products.json")
    console.log(hold.toString())
}
if(command==="delete"){
    const id= Number(args[3])
    const products =readFile()
    const newProdcuts=products.filter(products=>products.id!==id)
    saveData(newProdcuts)
    console.log(products)
}

if(command==="update"){
   const 
}