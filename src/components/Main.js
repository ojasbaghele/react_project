import { React, useState } from 'react';
import Products from './Products';

// import phone1 from './icons/phone1.png';
      
const Main =() =>{
    const [item, setItem] = useState(Products);
    const filterResult =(catItem)=>{
        if (catItem === 'all'){
            let result = Products
            setItem(result);
        }       
        else{
        let result= Products.filter((curData)=>{
            return curData.category === catItem;
        })
        setItem(result);
    };
        
    }
    return (
    <>
        <div class = "left">
    
        <h3> Sidebar Left</h3>
        <button type="button" class="btn btn-info" onClick={()=>filterResult('all')}>All </button>
        <button type="button" class="btn btn-info" onClick={()=>filterResult('phones')}>Phones </button>      
        <button type="button" class="btn btn-info" onClick={()=>filterResult('tvs')}>TV </button>
        <button type="button" class="btn btn-info" onClick={()=>filterResult('headphones')}> Headphones </button>
      <p> Lable 5 </p>
      <p> Lable 6 </p>
      <p> Lable 7 </p>
        </div>

        <div class="text-area">
            <h1>This is Content Area</h1>
            <div className='Products'>
            {item.map((values)=>{
                const {id,name,price} = values;
                return(
                        <>
                        <div className='product'>
                        <span class="material-symbols-outlined">{id}</span>           
                        <p>{name}</p>
                        <p>Price - {price}</p>
                        </div>
                        </>
                    )
            })}                                   
            </div>
        </div>
        </>
    )
}
export default Main;