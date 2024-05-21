import './index.css' 

const Cuttingedge=()=><div>
    <div className="cuttingTop">
    <p className="cuttingFeatureNameDesign">Feature</p> 
    <h3 className="cuttingedgeHead">Cutting-edge features for advanced analytics</h3> 
    <p className="cuttingEdgePara">Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>

    </div>  
    <img src="\assets\Content (1).png" alt="minidashboard" className="cuttdashboardmd"/> 
    <img src="\assets\Content (2).png" alt="minidashboard" className="cuttingdashboardsm"/>  

    <div>
        <ul className="featuresDescription"> 
        <li className="featureDescribeItem"> 
            <div><img src="\assets\Featured icon.png" className="featuresDescriptionIcons" alt="logo"/></div> 
            <h3 className="featureHead">Share team inboxes</h3>
            <p className="featuresDescriptionPara">Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p> 
            <p style={{color:"#6941C6"}}>Learn more <img src="\assets\arrow-right.png" alt="l"/></p>
        </li> 

        <li className="featureDescribeItem"> 
            <div><img src="\assets\Featured icon (1).png" className="featuresDescriptionIcons" alt="logo"/></div> 
            <h3 className="featureHead">Deliver instant answers</h3>
            <p className="featuresDescriptionPara">An all-in-one customer service platform that helps you balance everything your customers need to be happy.</p>
            <p style={{color:"#6941C6"}}>Learn more <img src="\assets\arrow-right.png" alt="l"/></p>
        </li> 

        <li className="featureDescribeItem"> 
            <div><img src="\assets\Featured icon (2).png" className="featuresDescriptionIcons" alt="logo"/></div> 
            <h3 className="featureHead">Manage your team with reports</h3>
            <p className="featuresDescriptionPara">Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.</p>
            <p style={{color:"#6941C6"}}>Learn more <img src="\assets\arrow-right.png" alt="l"/></p>
        </li>  

        

        </ul>
    </div>
</div> 

export default Cuttingedge