import React from 'react'
import Products from './Comp/Products'
import Contents from './Comp/Contents'

function App() {
  return (
      <div className='App'>
       {Contents.map(Contents =>(
        <Products 
        key={ Contents.id}
        image={Contents.image}
        name={Contents.name}
        price={Contents.price}
        totalSales={Contents.totalSales}
        timeLeft={Contents.timeLeft}
        rating={Contents.rating}/>
       ))}
      </div>
  )
}

export default App
