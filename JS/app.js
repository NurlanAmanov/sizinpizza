const menumobile =document.getElementById('menumobile')
const xett1 =document.getElementById('xett1')
const xett2 =document.getElementById('xett2')
const xett3 =document.getElementById('xett3')
const drop =document.getElementById('drop')
const pizzamehsul =document.getElementById('pizzamehsul')
const burgermehsul=document.getElementById('burgermehsul')
function openbar(){
    if(menumobile.style.left==='-100%'){
        menumobile.style.left='0'
    }else{
       menumobile.style.left='-100%'
    }
    xett2.style
    

}
function dropopen(){
    const drop=document.getElementsByClassName('opendrops')
}

function addmehsul(){
    data.map(item=>{
        pizzamehsul.innerHTML+= `<div class="pizza-card">
                    <div class="pizza-img">
                        <img src="${item.img}" alt="">
                    </div>
                    <div class="pizza-text">
                        <h4>${item.name}</h4>
                        <p>${item.Terkib}</p>
                        <a href="#" class="qiymet">${item.Pirce} ₼</a>
                    </div>
                </div>`
    })
}
addmehsul()

function burgeradd(){
    burgers.map(item=>{
        burgermehsul.innerHTML+=`<div class="pizza-card">
                    <div class="pizza-img">
                        <img src="${item.img}" alt="">
                    </div>
                    <div class="pizza-text">
                        <h4>${item.name}</h4>
                        <p>${item.Terkib}</p>
                        <a href="#" class="qiymet">${item.Pirce} ₼</a>
                    </div>
                </div>`
    })
}
burgeradd()