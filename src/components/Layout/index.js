import Header from '../Header';
import SideBar from '../SideBar';
import React  from 'react';


const Layout=({children})=>{
    return(
        <div>
            <Header/>
            <main>
                <SideBar/>
                {children}
            </main>
        </div>
    );
}

export default Layout;