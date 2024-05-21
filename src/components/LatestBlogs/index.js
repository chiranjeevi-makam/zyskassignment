import './index.css' 

const LatestBlog=()=><div className='blogLayout'>  
<p className='firstsmallHead'>Our blog</p> 
<p className='blogMainHead'>Lastest blog posts</p> 
<p className='blogPara'>Tool and strategies modern teams need to help their companies grow.</p> 
<ul className='displayBlogs'>  
    <li className='card'> 
    <img src="\assets\Image.png" alt="cardImage" className='cardPhoto'/> 
    <p className='firstsmallHead'>Design</p> 
    <p className='cardHeading'>UX review presentations</p> 
    <p className='cardPara'>How do you create compelling presentations that wow your colleagues and impress your managers?</p> 
    <div className='cardEndName'>
        <img src="\assets\Avatar (3).png" alt="avatar" className='cardAvatar'/> 
        <div>
            <p className='bname'>Olivia Rhye</p> 
            <p className='dataOf'>20 Jan 2024</p>
        </div>
    </div>

    </li> 
    <li className='card'> 
    <img src="\assets\Image (1).png" alt="cardImage" className='cardPhoto'/> 
    <p className='firstsmallHead'>Product</p> 
    <p className='cardHeading'>Migrating to Linear 101</p> 
    <p className='cardPara'>How do you create compelling presentations that wow your colleagues and impress your managers?</p> 
    <div className='cardEndName'>
        <img src="\assets\Avatar (3).png" alt="avatar" className='cardAvatar'/> 
        <div>
            <p className='bname'>Olivia Rhye</p> 
            <p className='dataOf'>20 Jan 2024</p>
        </div>
    </div>

    </li> 

    <li className='card'> 
    <img src="\assets\Image (2).png" alt="cardImage" className='cardPhoto'/> 
    <p className='firstsmallHead'>Software Engineering</p> 
    <p className='cardHeading'>Building your API stack</p> 
    <p className='cardPara'>How do you create compelling presentations that wow your colleagues and impress your managers?</p> 
    <div className='cardEndName'>
        <img src="\assets\Avatar (3).png" alt="avatar" className='cardAvatar'/> 
        <div>
            <p className='bname'>Olivia Rhye</p> 
            <p className='dataOf'>20 Jan 2024</p>
        </div>
    </div>

    </li>

</ul>

</div> 

export default LatestBlog