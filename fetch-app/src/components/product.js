import {useState,useEffect} from 'react';

const Product = () =>{
    const[product,setProduct] = useState([]);


    const getProducts = () =>{

        // fetch(URL,{
        //     method:"GET"
        // }).then(response=>response.json())
        // .then(data=>{
        //     setProduct(data);
        // });



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

    useEffect(() => {
        getProducts()
      }, [])


    return(
        <>
            <h1>My Products</h1>
            <div className="products">

                {
                    product.map((item)=>{
                        return(
                                        <div className="myProducts">
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
                }

                

                   

            </div>
        </>
    );
}
export default Product;