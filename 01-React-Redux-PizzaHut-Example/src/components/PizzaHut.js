import React from 'react';
import * as pizzaReducer from './redux/pizzaHut/pizzaHut.reducer';
import * as pizzaActions from './redux/pizzaHut/pizzaHut.actions';
import { useDispatch, useSelector } from 'react-redux';

let PizzaHut = ()=>{
    let dispatch = useDispatch();
    // let[pizzaCount, setPizzaCount] = useState(50);
    let pizzaInfo = useSelector((state)=>{
        return state[pizzaReducer.pizzaHutFeatureKey];
    })

    let clickBuyPizza = (e)=>{
        // setPizzaCount( pizzaCount - 1 > 0 ? pizzaCount - 1 : 0)
        dispatch(pizzaActions.buyPizza())
    }
    
    return(
        <React.Fragment>
            <section className='p-3'>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-danger">Pizza Hut</p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, rem culpa! Saepe dolorem aliquid quisquam corporis consectetur perspiciatis voluptatem quam, nam laudantium rerum aspernatur ex doloremque velit reiciendis vitae vel magni? Non magnam culpa temporibus sed, velit aliquid quas totam!</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <img src="https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/awesome-american-cheesy.17f198e5a73db40c367ddfe96da54a4c.1.jpg" alt="" className="img-fluid"/>
                        </div>
                        <div className="col-md-7">
                            <p className="h2">Awesome American Cheesy</p>
                            <p className="lead">
                                <span className="font-weight-bold text-danger">{pizzaInfo.count}</span>
                            </p>
                            <p>Our divine peruvian flavoured cheesy sauce, topped with sweet corn, green capsicum, red paprika and 100% mozzarella cheese, finished with a generous drizzle of texas garlic sauce.</p>
                            <button onClick={clickBuyPizza} className="btn btn-success btn-sm">Buy Pizza</button>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
export default PizzaHut;