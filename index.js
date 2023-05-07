const slider = document.querySelector('#slider-image');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let imagesArray = [
    'slider/2.jpg', 'slider/3.jpg', 'slider/4.jpg', 'slider/1.jpg'
];

var i = 0;
prevBtn.addEventListener('click', prevImage)

function prevImage() {
    i--;
    if (i < 0) {
        i = imagesArray.length - 1;
    }
    slider.src = imagesArray[i];
}

nextBtn.addEventListener('click', nextImage)

function nextImage() {
    i++;
    if (i === imagesArray.length) {
        i = 0;
    }
    slider.src = imagesArray[i];
}

setInterval(() => {
    nextImage();
}, 2000)


/*==================================================-Electronics-Section=====================*/

let electronicsArray = [
    {
        image:'Best of electonics/7.jpeg',
        name:'asus monitors',
        price:'from ₹14999',
        description:'top rated'
    },
    {
        image:'/Best of electonics/2.jpeg',
        name:'Best Cameras',
        price:'from ₹30999',
        description:'Sony'
    },
    {
        image:'/Best of electonics/3.jpeg',
        name:'printers',
        price:'from ₹3999',
        description:'hp'
    },
    {
        image:'/Best of electonics/4.jpeg',
        name:'top mirrorless cameras',
        price:'shop now',
        description:'canon,sony,others..'
    },
    {
        image:'/Best of electonics/5.jpeg',
        name:'Headphones',
        price:'from ₹999',
        description:'boat'
    },
    {
        image:'/Best of electonics/6.jpeg',
        name:'Best of hair dryers',
        price:'from ₹599',
        description:'realme, philips & more'
    },
    {
        image:'/Best of electonics/7.jpeg',
        name:'monitor',
        price:'from ₹8999',
        description:'dell'
    }
];

electronicsArray.forEach((electronicsitems) => {
    const electronicsAllItems = document.querySelector('#Electronics-container .items-container');
    electronicsAllItems.innerHTML += 
    ` <div class="item-card" id="item-card">
    <a href="" class="image-container"><img src="${electronicsitems.image}" alt=""></a>
    <h6>${electronicsitems.name}</h6>
    <a href=""><span>${electronicsitems.price}</span></a>
    <span class="description">${electronicsitems.description}</span>
    </div>
    `;
})  

// ========================================================Top-Deals-Section================================

let TopDealsArray = [
    {
        image:'Top-Deals/7.jpeg',
        name:'Watches',
        price:'From ₹3999',
        description:'#1 best seller!'
    },
    
    {
        image:'/Top-Deals/3.jpeg',
        name:'bags,trolleys,luggage',
        price:'50-70% extra 10% off',
        description:'wildcraft,american tourister'
    },
    {
        image:'/Top-Deals/4.jpeg',
        name:'Tradmill,exercise bikers & more',
        price:'up to 70% off',
        description:'fitkit,powermax & more'
    },
    {
        image:'/Top-Deals/5.jpeg',
        name:'Lenovo tab m8',
        price:'Shop now!',
        description:'8-inch|upto 64gb'
    },
    {
        image:'/Top-Deals/6.jpeg',
        name:'apple ipads',
        price:'shop now!',
        description:'liquid retina display'
    },
    {
        image:'/Top-Deals/2.jpeg',
        name:'U.S. Polo Assn',
        price:'min 40% off',
        description:'Sneakers,lofers slides'
    },
    {
        image:'/Top-Deals/9.jpeg',
        name:'Kurtas , dhotis',
        price:'from ₹499',
        description:'be pogal ready'
    }
];

TopDealsArray.forEach((TopDealsArray) => {
    const topDeals = document.querySelector('#top-deals-container .items-container');
    topDeals.innerHTML += 
    ` <div class="item-card" id="item-card">
    <a href="" class="image-container"><img src="${TopDealsArray.image}" alt=""></a>
    <h6>${TopDealsArray.name}</h6>
    <a href=""><span>${TopDealsArray.price}</span></a>
    <span class="description">${TopDealsArray.description}</span>
    </div>
    `;
}) 

// =====================================================Cloth-Sections======================================================

let fashionTrendsArray = [
    {
        image:'Fashion/1.jpeg',
        name:'organza sarees',
        price:'flat 70% off',
        description:'shop now'
    },
    {
        image:'/Fashion/2.jpg',
        name:"kids'clothings",
        price:'min . 60% off',
        description:'us polo, provogue & more'
    },
    
    {
        image:'/Fashion/3.jpeg',
        name:'roadster. HRX & more',
        price:'From ₹249 ',
        description:'t-shirts,shirts'
    },
    
    {
        image:'/Fashion/4.jpeg',
        name:'anmi,divstri &more',
        price:'60-90% off',
        description:'kurta,sarees & more'
    },
    
    {
        image:'/Fashion/5.jpeg',
        name:'kurtas,dhotis',
        price:'from ₹449',
        description:'be pongal ready'
    },
    
    {
        image:'/Fashion/6.jpeg',
        name:'ketch, masi & harbour',
        price:'from ₹399',
        description:'shirts, trousers'
    },
    
    {
        image:'/Fashion/11.jpeg',
        name:'max & rangmanch',
        price:'under ₹499',
        description:'kurtas & kurtis'
    }
    // ,
    // {
    //     image:'/Fashion/8.jpeg',
    //     name:'palazzos',
    //     price:'from ₹199',
    //     description:'shopping shuru!'
    // },
    // {
    //     image:'/Fashion/7.jpeg',
    //     name:'trendy kurtas  sets & more',
    //     price:'min 75% off',
    //     description:'libas'
    // }
    
];
fashionTrendsArray.forEach((trendingCloth) => {
    const topDeals = document.querySelector('#fashion-container .items-container');
    topDeals.innerHTML += 
    ` <div class="item-card" id="item-card">
    <a href="" class="image-container"><img src="${trendingCloth.image}" alt=""></a>
    <h6>${trendingCloth.name}</h6>
    <a href=""><span>${trendingCloth.price}</span></a>
    <span class="description">${trendingCloth.description}</span>
    </div>
    `;
}) 
