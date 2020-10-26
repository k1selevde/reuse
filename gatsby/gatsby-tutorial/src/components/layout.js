import React from 'react'

import Header from './header'
import Sidebar from "./sidebar";

export default ({children}) => {
    return (
        <>
         <Header />
         <div

         >
             <Sidebar />
             {children}
         </div>
        </>
    );
}
