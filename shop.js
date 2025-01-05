const shop = document.querySelector(".show")
const Totol = document.querySelector(".Totl")
async function produkt(arr) {
    let M = ''
    let F = []
    try{
        M = await axios.get("https://6763a7a017ec5852cae97fdc.mockapi.io/axios");
    }catch(e){
        console.log(e);
    }
    for(let i of arr){
       F.push(M.data.filter((r)=> r.name == i))
    }
    let A = F.flat(10)
    let summ = A.reduce((acc,x)=> acc += Number(x.mone),0)
    localStorage.setItem("sum",summ)
    A.forEach(e => {
        shop.insertAdjacentHTML("beforeend",`
        <div class="A">
        <h1>${e.name}</h1>
        <h2>${e.mone}</h2>
    </div>
        `)
    });

    Totol.textContent = localStorage.getItem("sum")
}

let data = localStorage.getItem("produkt")
if (data){

    produkt(data.split(","))
}
localStorage.removeItem("produkt")
localStorage.removeItem("sum")
