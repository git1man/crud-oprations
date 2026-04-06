const fs = require("fs");
const args =process.argv;
const command=args[2]
var count=1

if (!fs.existsSync("products.json")) {
  fs.writeFileSync("products.json", JSON.stringify([]));
}

const readFile=()=>{
    const data=fs.readFileSync("products.json")
    return JSON.parse(data.toString())
}
const saveData=(products)=>{
    fs.writeFileSync("products.json",JSON.stringify(products,null,2))
}

if(command==="add"){
    const name=args[3]
    const price=Number(args[4])

    const products=readFile()
    const newProdcut={
        id:count++,
        name,
        price
    }
    products.push(newProdcut)
    saveData(products)
    console.log("added: ",newProdcut)
}