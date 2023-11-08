import React from 'react';

export default function SidebarLeft() {
  return (
    <div>
    <h3> Sidebar Left</h3>

      <button type="button" class="btn btn-info" onClick={()=>filterResult('phones')}> Button 1 Phones </button>      
      <button type="button" class="btn btn-info" onClick={()=>filterResult('tvs')}> Button 2 Phones </button>
      <button type="button" class="btn btn-info" onClick={()=>filterResult('headphones')}> Button 1 Phones </button>
      <p> Lable 4 </p>
      <p> Lable 5 </p>
      <p> Lable 6 </p>
      <p> Lable 7 </p>

    </div>
  )}