const data = {
    hero: {
        title: 'Help our environment by eliminating single-use plastics from your delivery with',
        companyname: 'Awesome Container Company',
        imageslider: {
            image1: '../images/container1.jpg',
            image2: '../images/waste.jpg',
        },
    },
    problem: {
        title: 'Single-use packaging: bad for the planet, bad for business',
        description:
            'Millions of tons of single-use packaging end up in landfills and oceans while only 9% of single-use waste gets recycled. Meanwhile, single-use containers are expensive and restaurants need to track inventory / restock weekly.',
        infographicsImage: '../images/infographic.png',
        images: [
            {
                src: '../images/ocean-polution.png',
                imagecaption:
                    'Single-use plastics pollute oceans and kill marine species',
            },
            {
                src: '../images/landfills.png',
                imagecaption:
                    'Single-use plastics pollute landfills and emit dangerous chemicals and greenshouse gases',
            },
            {
                src: '../images/unrecyclable.png',
                imagecaption:
                    'Not all of the single-use plastics are recyclable',
            },
        ],
    },
    solution: {
        title: 'Sustainability Delivered',
        subtitle:
            ' replaces single-use packaging with reusable stainless steel containers',

        slider: [
            {
                id: 'slide1',
                image: '../images/container1.jpg',
                featurePoints: [
                    'Removable/adjustable divider',
                    'Leak-resistant lid keeps food fresh',
                    'Easy to sanitize and dishwasher safe',
                    'Containers and lids are freezer safe',
                    'Containers are oven safe up to 300 degrees',
                    'Lighter and sturdier than glass',
                    'Etched tare weights for easy bulk shopping',
                    '304 (18/8) stainless steel, LDPE #4 plastic lid, PP #5 plastic divider',
                    'Free of BPA, BPS, phthalates and lead',
                ],
                sizingPoints: [
                    '25oz container size with lid on: 7.75” x 1.75" x 5” Lids: 7.75” x 5”',
                ],
            },
            {
                id: 'slide2',
                image: '../images/container2.jpg',
                featurePoints: [
                    'Leak-resistant lid keeps food fresh',
                    'Easy to sanitize and dishwasher safe',
                    'Containers and lids are freezer safe',
                    'Containers are oven safe up to 300 degrees',
                    'Three containers nest to save storage space',
                    'Lighter and sturdier than glass',
                    'Etched tare weights for easy bulk shopping',
                    '304 (18/8) stainless steel, LDPE #4 plastic',
                    'Free of BPA, BPS, phthalates and lead',
                ],
                sizingPoints: [
                    '16oz, container size with lid on: 4-5/8" x 2.25". Lid is 4.75” diameter',
                    '9oz, container size with lid on: 4" x 2". Lid is 4” diameter',
                    '5oz, container size with lid on: 3.5" x 1.5". Lid is 3.5” diameter',
                ],
            },
            {
                id: 'slide3',
                image: '../images/container3.jpg',
                featurePoints: [
                    'Removable 2-section + 4-section divider',
                    'Leak-resistant lid keeps food fresh',
                    'Easy to sanitize and dishwasher safe',
                    'Containers and lids are freezer safe',
                    'Containers are oven safe up to 300 degrees',
                    'Lighter and sturdier than glass',
                    'Etched tare weights for easy bulk shopping',
                    '304 (18/8) stainless steel, LDPE #4 plastic lid, PP#5 divider',
                    'Free of BPA, BPS, phthalates and lead',
                ],
                sizingPoints: ['100oz (3 liters, 12.5 cups), 9.5” x 3.25”'],
            },
        ],

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
        pointsBoxs: [
            {
                id: 'pointbox1',
                backgroundImage: '../images/impact1.svg',
                title: 'For Businesses',
                points: [
                    'Save at least 50% on supply cost',
                    'Save 50-60 hours per week of manager’s labor cost: no inventory management, no reordering, no restocking',
                    'Save real estate cost for storage',
                    'Government helps Subsidize Up to 70%',
                ],
            },
            {
                id: 'pointbox2',
                backgroundImage: '../images/impact2.svg',
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
        image: '../images/container-green.svg',
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

        title2: 'Get in touch with us to calculate prices for your business',
        bubble: 'We calculate our prices accroding to the amount of containers and deliveries made by your business monthly.',
        contact:
            'Leave your contacts and request, and our manager will reach out to you to establish our futher parntership!',
    },

    team: {
        members: [
            {
                id: 'team-member1',
                image: '../images/hunglam.png',
                name: 'Hung Lam',
                title: 'Founder / CEO',
                link: '',
            },
            {
                id: 'team-member2',
                image: '../images/edwinphua.png',
                name: 'Edwin Phua',
                title: 'Co-founder / COO',
                link: '',
            },
            {
                id: 'team-member3',
                image: '../images/guillaumecatella.png',
                name: 'Guillaume Catella',
                title: 'Co-founder / CTO',
                link: '',
            },
        ],
    },

    partners: {
        title: 'And Awesome Partners',
        logos: [
            '../images/chefatwork.png',
            '../images/stewards.png',
            '../images/ninjavan.png',
            '../images/creatella.png',
            '../images/goa.png',
        ],
    },

    footer: {
        section1: {
            title: 'Let’s get in touch',
            email: 'Hello@AwesomeContaners.com',
            address:
                'Address: 71 UBI Road 1, #08-42, Oxley Bizhub, Singapore 408732',
        },
        section2: {
            title: 'Follow us',
            socials: [
                {
                    id: 'social1',
                    image: '../images/instagram.svg',
                    title: 'AwesomeContainers',
                    url: 'https://www.instagram.com/awesomecontainers',
                },
            ],
        },
        section3: {
            title: 'Where we work',
            currentPlaces: {
                title: 'We currently operate in:',
                places: ['Singapore'],
            },
            planedPlaces: {
                title: 'Planning to launch in 2022',
                places: [
                    'UK',
                    'EU',
                    'OSEAN',
                    'China',
                    'Vietnam',
                    'Malaysia',
                    'Taiwan',
                ],
            },
        },
    },
};

export default data;
