import { FaShoppingCart ,FaRegBookmark ,FaStar, FaFireAlt} from 'react-icons/fa';
export default function Products(props){
    return (
        
        <div className='productList'>
            <div key={props.id} className='productCard'>
                 <img src ={props.image} alt='product-img' className='productImage'></img>

                 <FaShoppingCart className={"productCard_cart"}/>
                 <FaRegBookmark className={"productCard_wishlist"}/>
                 <FaFireAlt className={"productCard__fastSelling"}/>

                 <div className='productCard_content'>
                    <h3 className='ProductName'>{props.name}</h3>
                    <div className ='displayStack__1'>
                        <div className='productPrice'>${props.price}</div>
                        <div className='productSales'>{props.totalSales} unit sold</div>
                    </div>
                    <div className='displayStack__2'>
                        <div className='productRating'>
                          {[...Array(props.rating)].map((index)=> (
                            <FaStar id={index + 1} key ={index}/>
                          ))}
                        </div>
                        <div className='productTime'>{props.timeleft} days left</div>
                    </div>
                 </div>
            </div>
        </div>
    )
}

