import React from 'react';
import TrangChu from './inc/TrangChu';
import NotFoundAdmin from './inc/NotFoundAdmin';
var routes = [
    {
        path:'/admin/trang-chu.html',
        exact:true,
        main :() => <div>
                <TrangChu />
            </div>
    },
    {
        path:'/admin/',
        exact:false,
        main :() => <NotFoundAdmin />
    },
]


export default routes;
