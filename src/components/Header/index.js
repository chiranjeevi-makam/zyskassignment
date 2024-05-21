import './index.css'

const Header=()=><nav className="headerLayout">
    <div className="mediumLogoNames">
        <div className="logoAndName">
            <img src="\assets\Content.png" className="headCompanyLogo" alt="logo"/>  
            <img src="\assets\Vector.png" className="headCompanyName" alt="comapnyName"/> 
            
        </div> 
        <div>
        <ul className="UnOrderListNames">
            <li>Home</li> 
            <li><select className="headInputNames">
                <option>Products</option>
                </select>
            </li> 
            <li><select className="headInputNames">
                <option>Resourse</option>
                </select>
            </li> 
            <li>Prising</li>
        </ul>
        </div>
    </div>  

    <div className="smallScreenLogoName"> 
        <div className="logoAndName">
            <img src="\assets\Content.png" className="headCompanyLogo" alt="logo"/>  
            <img src="\assets\Vector.png" className="headCompanyName" alt="comapnyName"/> 
            
        </div> 

    </div>

    <div>
        <img src="\assets\Avatar (1).png" alt="Avatar" className="avatar"/> 
        <img src="\assets\menu-01.png" className="menuBar" alt="menubar"/>
    </div> 
    
</nav> 


export default Header