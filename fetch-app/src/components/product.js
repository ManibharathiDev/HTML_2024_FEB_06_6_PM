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
            <div className="products">

                {
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
                }

                

                   

            </div>
        </>
    );
}
}
export default Product;