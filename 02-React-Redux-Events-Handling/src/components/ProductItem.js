import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as productActions from './redux/productItem/productItem.actions';
import * as productReducer from './redux/productItem/productItem.reducer';

let ProductItem = ()=>{
    let dispatch = useDispatch();

    let productInfo = useSelector((state)=>{
        return state[productReducer.productItemFeatureKey]
    })


    let decrementQty = (e) =>{
        dispatch(productActions.decrementQty())
    }

    let incrementQty = (e) =>{
       dispatch(productActions.incrementQty())
    }
    
    let {product} = productInfo;

    return(
        <React.Fragment>  
            <section className="mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h2 text-primary">Cart Items</p>
                            <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quaerat incidunt nostrum deserunt maxime, nisi explicabo fugit expedita suscipit et dolore debitis harum, quis nam quo? Tempore voluptas veritatis minima facere excepturi! Nostrum provident neque autem vel sed magni optio?</p>    
                        </div>
                    </div>
                </div>
            </section>

            <section className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                        <table className="table table-hover text-center table-primary table-striped">
                            <thead className="bg-dark text-white">
                                <tr>
                                 <th>SNO</th>
                                 <th>Image</th>
                                 <th>Name</th>
                                 <th>Price</th>
                                 <th>Qty</th>
                                 <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{product.sno}</td>
                                    <td>
                                        <img src={product.image} width="50" height="50" alt="" />
                                    </td>
                                    <td>{product.name}</td>
                                    <td>&#8377;{product.price}</td>
                                    <td>
                                        <i onClick={decrementQty}  className="fa fa-minus-circle mx-2"/>
                                        {product.qty}
                                        <i onClick={incrementQty}  className="fa fa-plus-circle mx-2"/>
                                    </td>
                                    <td>&#8377;{product.price*product.qty}</td>
                                </tr>
                            </tbody>
                        </table>  
                        </div>
                    </div>
                </div>
               
            </section>
        </React.Fragment>
    )
}
export default ProductItem;
