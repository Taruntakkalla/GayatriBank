

function Products(){
    return(
        <div className="productsContainer">
           <h1>Products</h1>
          <div className="producstsList">
            <div className = "card">
                <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv2t1auEkxHNzwst49dtexch67DnaYXRL3KB6F5VFbjlHwqCf0j9qxap95&s=10" alt ="product1Img"/>
                <button className="PrdctBtn1">The Gayatri Nirbhaya Saving Account​</button>
            </div>
            <div className = "card">
                <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDCuBbN3wvpTok9KKYrsWN8GhEzlxUn7ZeSpIhAvDiCF7v0sBX39-Uuec&s=10" alt ="product1Img"/>
                <button className="PrdctBtn1">Current account​</button>
            </div>
            <div className = "card">
                <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQCjLFB0FaYw1L6mc50eiqC7jS9ft20IlSJ7ddEQEpxiDNTs2n8NvljyR7&s=10" alt ="product1Img"/>
                <button className="PrdctBtn1">Fixed deposit​</button>
            </div>
           </div>
        </div>
    )
}

export default Products