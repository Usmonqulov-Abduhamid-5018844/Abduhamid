let btn = document.querySelector(".btn")
let body = document.body;
const Box = document.querySelector(".box")
const sch = document.querySelector(".sch")
const shop = document.querySelector(".shop")
const Log = localStorage.getItem("mode");
const Up = document.querySelector(".Add")
const submid = document.querySelector(".submid")
let Mone = document.querySelector(".mone")
let Name = document.querySelector(".name")
if(Log){
    body.className = Log
}
let s = 0
btn.addEventListener("click", (e)=> {
    if(body.classList.contains("light-mode")){
        body.className = "dark-mode";
        localStorage.setItem("mode","dark-mode")
    }
    else{
        body.className = "light-mode";
        localStorage.setItem("mode","light-mode")
    }
})
async function show() {
    try{
        await axios.get(`https://6763a7a017ec5852cae97fdc.mockapi.io/axios`).then((r)=>{
            r.data.forEach(e => {
                 Box.insertAdjacentHTML("beforeend",`
                 <div class="A">
                 <div class="Update" onclick="Update('${e.id}')"><i class="fa-solid fa-pencil"></i></div>
                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf6zoRR_FPG7f2knECoYTgOuETejMYPg71vg&s"/>
                 <h2>${e.name}</h2>
                 <h3>${e.mone}</h3>
                 <div class="S">
                 <button class="Buy">buy</button>
                 <button class="delet" onclick="deletItem('${e.id}')">Delete</button>
                 </div>
             </div>
             `)
            });
            
            });
    }catch(e){
        alert `Xatolix`
        console.log(e);
    }

};
show();
let M = []
Box.addEventListener("click",(e)=>{
    if(e.target.textContent === "buy"){
        let name = e.target.closest(".A").querySelector("h2").textContent
        M.push(name)
        localStorage.setItem("produkt",M)
        s += 1
        sch.textContent = String(s)
    }
})
shop.addEventListener("click",(e)=>{
    if (sch.textContent > 0) {
        window.open("./shop.html")
    }
    else{
        alert("Siz hali xarid qilmadingiz")
    }
})
async function deletItem(id){
    try{
       await axios.delete(`https://6763a7a017ec5852cae97fdc.mockapi.io/axios/${id}`).then((e)=>{
            alert `Malumot o'chirildi!`
            const item = document.querySelector(`button[onclick="deletItem('${id}')"]`).closest(".A");
        item.remove()
            show();
        })
    }catch (e){
        alert `Xatolik`
        console.log(e);
    }
};
async function Update(id){ 
    Up.style.display = "block";
    try{
        await axios.get(`https://6763a7a017ec5852cae97fdc.mockapi.io/axios`).then((e)=> {
            let A = e.data.filter((e)=> e.id == id)
            A.forEach((e)=>{
                Name.value = e.name
                Mone.value = e.mone
            });
        })
    }catch (e){
        console.log(e);
    };
    submid.addEventListener("click",(e)=>{
        let newdata = {
            name: Name.value,
            mone: Mone.value,
        };

        try{
            axios.put(`https://6763a7a017ec5852cae97fdc.mockapi.io/axios/${id}`,newdata);
        }catch (e){
            console.log(e);
        }
        Name.value = ""
        Mone.value = ""
        Up.style.display = "none"
        show()
    })
}