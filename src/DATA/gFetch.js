

let Productos = [
{id:1, name:'Producto1', categoria:'Autos', stock:'10', precio:'9000$', foto:'/public/img/Hyundai_Accent(AUTO).jpg'},
{id:2, name:'Producto2', categoria:'Autos', stock:'10', precio:'8000$', foto:'/public/img/Volkswagen_Polo(AUTO).png'},
{id:3, name:'Producto3', categoria:'Autos', stock:'10', precio:'8000$', foto:'/public/img/Volkswagen_Golf(AUTO).jpg'},
{id:4, name:'Producto4', categoria:'Motos', stock:'10', precio:'7000$', foto:'/public/img/Kawasaki_Ninja(MOTO).jpg'},
{id:5, name:'Producto5', categoria:'Motos', stock:'10', precio:'5000$', foto:'/public/img/Yamaha_Ybr 125(MOTO).jpg'},
{id:6, name:'Producto6', categoria:'Motos', stock:'10', precio:'5000$', foto:'/public/img/Yumbo-GS(MOTO).jpeg'}

]

export const gFetch = (id) => {
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            resolve(id ? Productos.find(prod.id === id): Productos)
        }, 1000)
    })
}
