const fs = require("fs");
const http = require("http");
const { parse } = require("url");
const patch = require("path");
const date = new Date()
let yil = date.getFullYear()

if(!fs.existsSync(patch.join(__dirname,"Data"))){
    fs.mkdirSync(patch.join(__dirname,"Data"));
    fs.writeFileSync(patch.join(__dirname,"Data/user.json"),JSON.stringify(
    [
        {id: 1, name: "Alex", year: 1999, location: "use"},
        {id: 2, name: "Jon", year: 2001, location: "rus"},
        {id: 3, name: "Farzod", year: 2000, location: "uzb"},
        {id: 4, name: "Malik", year: 1966, location: "uzb"},
        {id: 5, name: "Atham", year: 1971, location: "uzb"},
        {id: 6, name: "Nazir", year: 2002, location: "uzb"},
        {id: 7, name: "li", year: 1950, location: "china"},
        {id: 8, name: "Alikse", year: 2008, location: "rus"},
        {id: 9, name: "Karl", year: 2010, location: "angel"},
        {id: 10, name: "uile", year: 1990, location: "use"},
        {id: 11, name: "Alex", year: 1999, location: "use"},
        {id: 12, name: "Jon", year: 2001, location: "rus"},
        {id: 13, name: "Farzod", year: 2000, location: "uzb"},
        {id: 14, name: "Malik", year: 1966, location: "uzb"},
        {id: 15, name: "Atham", year: 2003, location: "uzb"},
        {id: 16, name: "Nazir", year: 2002, location: "uzb"},
        {id: 17, name: "li", year: 2011, location: "china"},
        {id: 18, name: "Alikse", year: 2008, location: "rus"},
        {id: 19, name: "Karl", year: 2010, location: "angel"},
        {id: 20, name: "uile", year: 2006, location: "use"},
    ]));
}
function getdata(){
    return JSON.parse(fs.readFileSync(patch.join(__dirname,"Data/user.json")))
};
const server = http.createServer((req,res)=>{
    let url = parse(req.url, true)
    console.log(url);
    let user = url.pathname.split("/")

    if(url.pathname == "/user" && url.search == null){
        let data = getdata()
        res.end(JSON.stringify(data))
    }
    else if(url.pathname == "/user" && url.query.minage && url.query.maxage){
        let data = getdata();
        data = data.filter((e)=> (yil - e.year) >= url.query.minage && (yil - e.year) <= url.query.maxage);
        res.end(JSON.stringify(data))
    }
    else if(url.pathname == "/user" && url.query.maxage){
        let data = getdata();
        data = data.filter((e)=> (yil - e.year) <= url.query.maxage)
        res.end(JSON.stringify(data))
    }
    else if(url.pathname == "/user" && url.query.minage){
        let data = getdata();
        data = data.filter((e) => (yil - e.year) >= url.query.minage)
        res.end(JSON.stringify(data))
    }
    else if(url.pathname == "/user" && url.query.pensiya == "true"){
        let data = getdata();
        data = data.filter((e)=> (yil - e.year) >= 55)
        res.end(JSON.stringify(data))
    }
    else if(user[1] == "user" && user[2]){
        let data = getdata();
        data = data.find((e)=> e.id == user[2])
        res.end(JSON.stringify(data))
    }
    else{
        res.end("Not Fount status 404")
    }
});

server.listen(3000,()=>{
    console.log("ishladi");
})