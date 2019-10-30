import React from 'react';
import MessageContainer from './containers/MessageContainer';
import NotFound from './containers/NotFound';
import CartContainer from './containers/CartContainer';
import ProductsContainer from './containers/ProductsContainer';
var routes = [
    {
        path:'/',
        exact:true,
        main :() => <div>
                <ProductsContainer />
                <MessageContainer />
                <CartContainer />
            </div>
    },
    {
        path:'/product/:slug',
        exact:false,
        main :({match}) => <div>
        <ProductsContainer match={match} />
                <MessageContainer />
                <CartContainer />
            </div>
    },
    {
        path:'',
        exact:true,
        main :() => <NotFound />
    },
]


export default routes;
