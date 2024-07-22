import {useState,useEffect} from 'react';

const Product = () =>{
    const[product,setProduct] = useState([]);

    const[item,setItem] = useState({});
    const[clicked,isClicked] = useState(false);

    const fetchProduct = (id) =>{
        //alert("Product id "+id);
        fetch("https://fakestoreapi.com/products/"+id,
            {
                "method":"get"
            }
        ).then(response=>response.json())
        .then(data=>{
            isClicked(true);
            setItem(data);
            //console.log("item length "+item.length);
        })
    }

    const goBack = ()=>{
        isClicked(false);
    }

    // function fetchProduct(id){

    // }

    const getProducts = () =>{

        fetch("https://fakestoreapi.com/products",
            {
                method:"GET"
            }
        ).then(response=>response.json())
        .then(data =>{
            console.log(data);
            setProduct(data);
        });
    }

    const titleTruncate = (text) =>{
        return text.length > 15 ? text.substring(0,14) +"...":text;
    }

    const truncate = (text) =>{
        return text.length > 80 ? text.substring(0,80) +"...":text;
    }

    useEffect(() => {
        getProducts()
      }, [])

    if(clicked === true)
        {
            return( 
            <div className="products">
                <div key={item.id} className="myProducts">
                    <img src={item.image} width="80px"/>
                    <h1>Name of the Product</h1>
                    <h3>{item.title}</h3>
                    <h1>Description</h1>
                    <p>{item.description}</p>
                    <h1>Price - {item.price}</h1>
                    {/* <h4>Rating {item.rating.rate}/5</h4> */}
                </div> 
                <button onClick={()=>goBack()}>Back To All Products</button>
                </div>
)
        }  

        else
        {
    return(
        <>
            <h1>My Products</h1>
            <div className='products'>
                {
                    product.map((item)=>{
                        return(
                            
                                <div className='colss' key={item.id} onClick={()=>fetchProduct(item.id)}>
                    
                    <img src={item.image} width="80px" height="80px"/>
                                            <p>{titleTruncate(item.title)}</p>
                                            <p>{truncate(item.description)}</p>
                                            <h1 className='productPrice'>Price - {item.price}</h1>
                                            <h4>Rating {item.rating.rate}/5</h4>
                                        
                                </div>
                            
                        )
                    })
                }
            </div>


            <div className="products">

                {/* <div className='row'>
                    <div className='cols'>
                    
                                            <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" width="80px"/>
                                            <p>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</p>
                                        
                                            <p>Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</p>
                                            <h1>Price - 1000</h1>
                                            <h4>Rating 4.5/5</h4>
                                         
                    </div>

                    <div className='cols'>
                    <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" width="80px"/>
                                            <p>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</p>
                                        
                                            <p>Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</p>
                                            <h1>Price - 1000</h1>
                                            <h4>Rating 4.5/5</h4>
                    </div>

                    <div className='cols'>
                    <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" width="80px"/>
                                            <p>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</p>
                                        
                                            <p>Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</p>
                                            <h1>Price - 1000</h1>
                                            <h4>Rating 4.5/5</h4>
                    </div>

                    <div className='cols'>
                    <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" width="80px"/>
                                            <p>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</p>
                                        
                                            <p>Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</p>
                                            <h1>Price - 1000</h1>
                                            <h4>Rating 4.5/5</h4>
                    </div>

                    <div className='cols'>
                    <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" width="80px"/>
                                            <p>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</p>
                                        
                                            <p>Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</p>
                                            <h1>Price - 1000</h1>
                                            <h4>Rating 4.5/5</h4>
                    </div>
                    </div>

                    <div className='row'>
                    <div className='cols'>
                    
                                            <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" width="80px"/>
                                            <p>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</p>
                                        
                                            <p>Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</p>
                                            <h1>Price - 1000</h1>
                                            <h4>Rating 4.5/5</h4>
                                         
                    </div>

                    <div className='cols'>
                    <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" width="80px"/>
                                            <p>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</p>
                                        
                                            <p>Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</p>
                                            <h1>Price - 1000</h1>
                                            <h4>Rating 4.5/5</h4>
                    </div>

                    <div className='cols'>
                    <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" width="80px"/>
                                            <p>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</p>
                                        
                                            <p>Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</p>
                                            <h1>Price - 1000</h1>
                                            <h4>Rating 4.5/5</h4>
                    </div>

                    <div className='cols'>
                    <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" width="80px"/>
                                            <p>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</p>
                                        
                                            <p>Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</p>
                                            <h1>Price - 1000</h1>
                                            <h4>Rating 4.5/5</h4>
                    </div>

                    <div className='cols'>
                    <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" width="80px"/>
                                            <p>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</p>
                                        
                                            <p>Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</p>
                                            <h1>Price - 1000</h1>
                                            <h4>Rating 4.5/5</h4>
                    </div>
                    </div> */}

                {/* {
                    product.map((item)=>{
                        return(
                                        <div key={item.id} className="myProducts" onClick={()=>fetchProduct(item.id)}>
                                            <img src={item.image} width="80px"/>
                                            <h1>Name of the Product</h1>
                                            <h3>{item.title}</h3>
                                            <h1>Description</h1>
                                            <p>{item.description}</p>
                                            <h1>Price - {item.price}</h1>
                                            <h4>Rating {item.rating.rate}/5</h4>
                                        </div> 
                        )
                    })
                } */}

                

                   

            </div>
        </>
    );
}
}
export default Product;