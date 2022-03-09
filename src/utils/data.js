const data = {
    hero: {
        title: 'Help our environment by eliminating single-use plastics from your delivery with',
        companyname: 'Awesome Container Company',
    },
    problem: {
        title: 'Single-use packaging: bad for the planet, bad for business',
        description:
            'Millions of tons of single-use packaging end up in landfills and oceans while only 9% of single-use waste gets recycled. Meanwhile, single-use containers are expensive and restaurants need to track inventory / restock weekly.',
        images: {
            image1: {
                src: '../images/ocean-polution.png',
                imagecaption:
                    'Single-use plastics pollute oceans and kill marine species',
            },
            image2: {
                src: '../images/landfills.png',
                imagecaption:
                    'Single-use plastics pollute landfills and emit dangerous chemicals and greenshouse gases',
            },
            image3: {
                src: '../images/unrecyclable.png',
                imagecaption:
                    'Not all of the single-use plastics are recyclable',
            },
        },
    },
    solution: {
        title: 'Sustainability Delivered',
        subtitle:
            ' replaces single-use packaging with reusable stainless steel containers',

        ilustrations: {
            logistics: {
                image: '../images/logistics.svg',
                caption: 'Backend logistics support',
            },
            costs: {
                image: '../images/costs.svg',
                caption:
                    'Save at least 50% on supply cost and time on inventory tracking/re-orders',
            },
            space: {
                image: '../images/space.svg',
                caption:
                    'Save at least 50% on supply cost and time on inventory tracking/re-orders',
            },
        },
    },
    impact: {
        title: 'Impact',
        pointsboxs: [
            {
                id: 1,
                title: 'For Businesses',
                points: [
                    'Save at least 50% on supply cost',
                    'Save 50-60 hours per week of manager’s labor cost: no inventory management, no reordering, no restocking',
                    'Save real estate cost for storage',
                    'Government helps Subsidize Up to 70%',
                ],
            },
            {
                id: 2,
                title: 'For Users',
                points: [
                    'Remove all chemicals going into food: plastics, BPA, PFAS and other ‘forever chemicals’ used to hold compostable packaging together',
                    'Gamification: reward for returned containers',
                    'Sustainability sells: users feel good about helping the planet',
                ],
            },
        ],
    },
    pricing: {
        title: 'We are an ESG company: we care for social and envirnomental sustainability',
        description:
            'In 2020 Singapore’s government took on the Green Plan: a whole-of-nation movement to advance Singapore’s national agenda on sustainable development. Our company is a part of its solution to cultivating a Sustainable Living — 1 of the 5 key programmes of SG Green Plan.',
        priceboxs: [
            {
                id: 1,
                title: '10 – 50 orders / day',
                price: '$500 – $1000 / month',
            },
            {
                id: 2,
                title: '50 – 100 orders / day',
                price: '$1000 – $3000 / month',
            },
            {
                id: 3,
                title: '100 – 200 orders / day',
                price: '$3000 – $6000 / month',
            },
            {
                id: 4,
                title: '200+ orders / day',
                price: '$6000 + / month',
            },
        ],
        contact:
            'Leave your contacts and request, and our manager will reach out to you to establish our futher parntership!',
    },
};

export default data;
