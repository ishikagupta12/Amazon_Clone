import React from 'react'
import './Home.css';
import Product from './Product';

const Home = () => {
    return (
        <div className='home'>
            <div className="home_container">
                <img className="home_image" src=" https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
                alt=''
                />

<div className='home__row'>
<Product
id="1254653"
title='The lean startup' price={29.99} image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
rating={5}/>
<Product 
id="546464"
title="Amazon Echo(3rd generation | Smart Speaker with Alexa, Charcoal Fabric"
price={98.99}
rating={5}
image="https://th.bing.com/th/id/OIP.WMZMgccQSyR0AkE_w-lXygHaHS?w=171&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"
/>

</div>

<div className='home__row'>
<Product
id="25465454"
title="Kenwood kMix Stand Mixer for Baking, stylish Kitchen Mixer with K-beater, Dough Hook and whisk, 5 litre Glass Bowl"
price={239.0}
rating={4}
image="https://th.bing.com/th/id/OIP.FMcOxqgshEicZTUqZYDd2AAAAA?w=177&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"

/>

<Product
id="345674654"
title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
price={199.99}
rating={3}
image="https://th.bing.com/th/id/OIP.oOTOXDb5HQepLqbT4KFQCgHaGk?w=190&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"
/>
<Product 
id="5545464"
title=" Apple iPad Air with A14 Bionic chip (10.9-inch/27.69 cm, Wi-Fi, 64GB) - Space Grey (4th Generation)"
price={600}
image="https://th.bing.com/th/id/OIP.TMAB0KJ_WYRuyLqMijJGDAHaHa?w=185&h=185&c=7&r=0&o=5&dpr=1.25&pid=1.7"
rating={4}

/>

</div>

<div className='home__row'>
<Product 
id="46546546"
title="Apple Watch Series 3 (GPS, 42mm) - Space Grey Aluminium Case with Black Sport Band"

image="https://th.bing.com/th/id/OIP.JP8PTge-ZQTY57fFqj90wwHaJK?w=159&h=197&c=7&r=0&o=5&dpr=1.25&pid=1.7"
price={300.50}
rating={4}

/>

</div>

            </div>
        </div>
    )
}

export default Home
