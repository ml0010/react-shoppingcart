
//const languageOptions = ["English", "Spanish", "German", "French", "Arabic", "Russian"];

const tourCategory = ["culture", "food", "nature", "sports"];

export const TOURS = [
    {
        id: 24,
        tourName: "Wine Experience and Tasting",
        img: [ "https://cdn.getyourguide.com/image/format=auto,fit=contain,gravity=auto,quality=60,width=1440,height=650,dpr=1/tour_img/1bc487678773c62618b2c1211c5ae17c9cbbb0023f8cf5b4e73acdcdc6f9521a.jpeg", "https://cdn.getyourguide.com/image/format=auto,fit=contain,gravity=auto,quality=60,width=1440,height=650,dpr=1/tour_img/af9e6031670b5268e23501cd758ead54a3c91be8ffb9a9d4a0229f9fa4b21bc1.jpeg", "https://cdn.getyourguide.com/image/format=auto,fit=contain,gravity=auto,quality=60,width=1440,height=650,dpr=1/tour_img/fcd4f2e5fb8bcbef202edeeb3bf3675137221c01486dfe4b00da35e94ef68d5d.jpeg", "https://cdn.getyourguide.com/image/format=auto,fit=contain,gravity=auto,quality=60,width=1440,height=650,dpr=1/tour_img/98226ecae5156b150cb25908b3df420f66d09872dd46813f77956956923f68d6.jpeg"],
        description: "Join us for an unforgettable journey through the world of Mallorcan wine. It's more than just a tasting, it's an opportunity to immerse yourself in the culture, history, and flavors of Mallorca.",
        duration: 2,
        languages: ["English", "Spanish", "German"],
        meetingPoint: "Santa Maria del Camí",
        price: 43,
        category: tourCategory[1],
        highlights: [
            "An immersive journey through the winemaking process",
            "Exclusive tasting of four of the finest bodega wines",
            "Savor the rich flavors of traditional Mallorcan specialties",
            "Guided tour of the winery in German, English oder Spanish"
        ],
        includes: [
            "Wine estate visit",
            "Guided tour through the winery",
            "Tasting of four different wines",
            "Selection of local culinary delights"
        ]
    },{
        id: 22,
        tourName: "Island Tour with Boat, Tram & Train from the South",
        img: [ "https://cdn.getyourguide.com/image/format=auto,fit=contain,gravity=auto,quality=60,width=1440,height=650,dpr=1/tour_img/acd72e1eb4b61349.jpeg", "https://cdn.getyourguide.com/image/format=auto,fit=contain,gravity=auto,quality=60,width=1440,height=650,dpr=1/tour_img/18bf08b06c70e73b.jpeg", "https://cdn.getyourguide.com/image/format=auto,fit=contain,gravity=auto,quality=60,width=1440,height=650,dpr=1/tour_img/575ed206d4d9dcfe.jpeg", "https://cdn.getyourguide.com/image/format=auto,fit=contain,gravity=auto,quality=60,width=1440,height=650,dpr=1/tour_img/91cd413c19e57c77.jpeg", "https://cdn.getyourguide.com/image/format=auto,fit=contain,gravity=auto,quality=60,width=1440,height=650,dpr=1/tour_img/928080bcd5c670ea.jpeg", "https://cdn.getyourguide.com/image/format=auto,fit=contain,gravity=auto,quality=60,width=1440,height=650,dpr=1/tour_img/98707534196ebe1d.jpeg", "https://cdn.getyourguide.com/image/format=auto,fit=contain,gravity=auto,quality=60,width=1440,height=650,dpr=1/tour_img/4cdaa6fa01b7af5e.jpeg", "https://cdn.getyourguide.com/image/format=auto,fit=contain,gravity=auto,quality=60,width=1440,height=650,dpr=1/tour_img/e2f0ee61e62c8c8e.jpeg"],
        description: "Explore Mallorca on a scenic tour by bus, Tren de Soller tram, and boat. Get the best views of the magnificent coastal mountain range of Mallorca from land and water as you drive and sail.",
        duration: 8,
        languages: ["English", "Spanish", "Italian", "German"],
        meetingPoint: "Palma",
        price: 110,
        category: tourCategory[0],
        highlights: [
            "Enjoy fantastic views of the island's beautiful landscapes",
            "Explore Port of Soller on a boat trip",
            "Visit Lluc, one of the highest-altitude towns in Mallorca",
            "Explore La Calobra Cove on a boat trip"
        ],
        includes: [
            "Bus journey",
            "Boat trip",
            "Tram ride",
            "Train ride",
            "Guide",
            "Travel insurance"
        ]
    },{
        id: 23,
        tourName: "Sunrise or Sunset Balloon ride",
        img: [ "https://cdn.getyourguide.com/image/format=auto,fit=contain,gravity=auto,quality=60,width=1440,height=650,dpr=1/tour_img/c7d701d0b77b10dada9f91e328030d7a9c3b6ba5e0cae6c16ddfce6e8b3618d5.jpg", "https://cdn.getyourguide.com/image/format=auto,fit=contain,gravity=auto,quality=60,width=1440,height=650,dpr=1/tour_img/53a528db5be8cb8aad8af11b2ad05f85a3dc6e5c2a30d9039e6bce4884e02962.jpg", "https://cdn.getyourguide.com/image/format=auto,fit=contain,gravity=auto,quality=60,width=1440,height=650,dpr=1/tour_img/ad0293ea82fca3ea74be0ad65c0013824979525b1f932ee088b86632431ecc82.jpg", "https://cdn.getyourguide.com/image/format=auto,fit=contain,gravity=auto,quality=60,width=1440,height=650,dpr=1/tour_img/af0eede6f40efe55672efedad1b8f1f325e739639d05554e32d6351aee179af4.jpg"],
        description: "Soar over the island of Mallorca on an amazing hot air balloon flight in the afternoon. Enjoy an Air baptism with the stunning views from above.",
        duration: 3,
        languages: ["English", "Spanish", "Russian", "German"],
        meetingPoint: "Manacor",
        price: 110,
        category: tourCategory[2],
        highlights: [
            "Soar over the island of Mallorca on a romantic hot air balloon flight",
            "Take in the sights of the island from a unique vantage point in the sky",
            "Feel the thrill of ascending into the air on a gentle hot air balloon ride",
            "Take in the views of the island from above and below as you fly and land"
        ],
        includes: [
            "50-60 minute balloon flight",
            "Experienced pilot",
            "Landing celebration",
            "Certificate of flight",
            "Transportation from the landing place to the Balloon Airport"
        ]
    },{
        id: 0,
        tourName: "Visit of the olive grove, olive oil tasting",
        img: [ "https://cdn.getyourguide.com/img/tour/8014747575a731e82680b178efd4d6bb55348caf19a0656024f4cb58b6671d33.jpeg/99.jpg", "https://cdn.getyourguide.com/img/tour/62d6846931182.jpeg/99.jpg", "https://cdn.getyourguide.com/img/tour/62d6821b118b3.jpeg/99.jpg", "https://cdn.getyourguide.com/img/tour/62d683420e5d3.jpeg/99.jpg", "https://cdn.getyourguide.com/img/tour/62d6837b7fe16.jpeg/99.jpg"],
        description: "Live a unique experience and come and learn how we make our extra virgin olive oil. Includes a walk through the olive grove, a tasting and a snack.",
        duration: 2,
        languages: ["English", "Spanish", "Russian"],
        meetingPoint: "Caimari",
        price: 49,
        category: tourCategory[1],
        highlights: [
            "Discover the secrets of our extra virgin olive oil",
            "The visit is made directly by the property",
            "Enjoy a hidden place in Mallorca",
            "Discover how a premium extra virgin olive oil is made",
            "Learn how to tell extra virgin olive oil apart from other olive oils"
        ],
        includes: [
            "The visit, guided directly by the property, includes a walk through our finca and olive grove, an oil tasting and a snack with local produce."
        ]
    },{
        id: 1,
        tourName: "Valldemossa & Soller Tour",
        img: [ "https://cdn.getyourguide.com/img/tour/62542e5cdba9b.jpeg/99.jpg", "https://cdn.getyourguide.com/img/tour/62542e5cbe621.jpeg/99.jpg", "https://cdn.getyourguide.com/img/tour/62542e5ce98de.jpeg/99.jpg", "https://cdn.getyourguide.com/img/tour/62542e5ce257c.jpeg/99.jpg", "https://cdn.getyourguide.com/img/tour/62542e5d084b3.jpeg/99.jpg"],
        description: "Set off on an exclusive full-day excursion to discover Valldemossa, Sóller, and the west coast of Mallorca and admire the spectacular landscape by Bus.",
        duration: 6,
        languages: ["English", "Spanish"],
        meetingPoint: "Palma",
        price: 45,
        category: tourCategory[0],
        highlights: [
            "Be impressed by the mountains and cliff sides along the west coast",
            "Visit the vibrant village of Sóller and enjoy a fresh orange juice",
            "Get spectacular views of the Mediterranean and contemplate Sa Foradada",
            "Marvel at the scenic views of the Tramuntana coastline",
            "Wander the traditional stoned streets in Valldemossa"
        ],
        includes: [
            "Hotel pickup and drop-off (if arranged in advance)"
        ]
    },{
        id: 2,
        tourName: "Sea Cave Kayaking Tour with Snorkeling and a Snack",
        img: [ "https://cdn.getyourguide.com/img/tour/d31e63cf73899b00.jpeg/99.jpg"],
        description: "Experience the sea caves and cliffs of Mallorca on a kayaking tour. Venture to caves of extraordinary colors and marvel at the marine life on the seafloor.",
        duration: 6,
        languages: ["English", "Spanish", "German"],
        meetingPoint: "Palma",
        price: 69,
        category: tourCategory[3],
        highlights: [
            
        ],
        includes: [
           
        ]
    },{
        id: 3,
        tourName: "Dolphin Watch Tour with Professional Marine Biologist",
        img: [ "https://cdn.getyourguide.com/img/tour/61fb936858294.jpeg/99.jpg", "https://cdn.getyourguide.com/img/tour/763c8ea3ba6bfcb37eb40b952c4c1f8ec6eddc96816fea76ac62d5f5c5e47639.jpg/99.jpg", "https://cdn.getyourguide.com/img/tour/8c29ee40f5a1a84bb8e419fb2d813200965e5d1a42787a4ab4c31378c390d4b2.jpg/99.jpg", "https://cdn.getyourguide.com/img/tour/af2ba024c48330242a484fb161845dc7a73cf4da8d85f307f4238920006cfcac.jpg/99.jpg"],
        description: "Create lasting memories on a dolphin-watching tour guided by professional marine biologists. Contribute to conservation efforts and learn about these beautiful creatures on the coast of the Mallorca.",
        duration: 1.5,
        languages: ["English", "Spanish", "Portugese"],
        meetingPoint: "Cala d'Or",
        price: 45,
        category: tourCategory[2],
        highlights: [
            "Discover the amazing sea caves of Mallorca",
            "Snorkel and swim in turquoise waters",
            "Benefit from the assistance of an experienced instructor",
            "Admire the scenic views of the coastline",
            "Extraordinary experience that blends sport and fun with moments of serenity"
        ],
        includes: [
            "nstructor",
            "Accompanying motor boat",
            "Snack (Ham and cheese sandwich or vegetarian option by request)",
            "Kayak full equipment",
            "Snorkeling mask",
            "Water shoes (please send your sizes)",
            "Lifejacket",
            "Neoprene suit and lycra, depending on weather conditions (please send your sizes: S/M/L/XL/XXL)",
            "Assistance assurance",
            "Photographs taken by the instructors"
        ]
    },{
        id: 4,
        tourName: "Caves of Hams",
        img: [ "https://cdn.getyourguide.com/img/tour/5ac3448d24918.jpeg/99.jpg", "https://cdn.getyourguide.com/img/tour/5ac3448b855b4.jpeg/99.jpg", "https://cdn.getyourguide.com/img/tour/cd8d939d51081496.jpeg/99.jpg"],
        description: "Enjoy a walk through the Caves of Hams and walk through 850 meters of extraordinary caves with 15 different areas.",
        duration: 2,
        languages: ["English", "Spanish", "German"],
        meetingPoint: "Porto Cristo",
        price: 40,
        category: tourCategory[2],
        highlights: [
            
        ],
        includes: [
           
        ]
    },{
        id: 5,
        tourName: "Snorkeling, and Cliff Jumping",
        img: [ "https://cdn.getyourguide.com/img/tour/f53812d73c45c7b81e2a87de70186a28a10fc592ce0cec1c394ca1bdbb2d8d86.jpeg/99.jpg", "https://cdn.getyourguide.com/img/tour/f68b9afb1c06c0e2.jpeg/99.jpg", "https://cdn.getyourguide.com/img/tour/a816aeb2aa86fde6.jpeg/99.jpg"],
        description: "Uncover the beauty of Mallorca's beautiful corals and fish.",
        duration: 3,
        languages: ["English", "Spanish"],
        meetingPoint: "Port de Pollença",
        price: 45,
        category: tourCategory[3],
        highlights: [
            
        ],
        includes: [
           
        ]
    },{
        id: 6,
        tourName: "Guided Sea Caves Kayak & Snorkeling Expedition",
        img: [ "https://cdn.getyourguide.com/img/tour/00f1b6c02c36fb08fcc34c1475aa4ccafc6f140417ccdfad1aa103324d17dfda.jpg/99.jpg", "https://cdn.getyourguide.com/img/tour/4f80f68c2f25572a7fdda81f6add288951a46dab35c566226aec18495b6441f5.jpg/99.jpg", "https://cdn.getyourguide.com/img/tour/1042832b5bddbff49e392e30b7e41170c08cff7bde09bcf8d8f140bbb38a05d1.jpg/99.jpg", "https://cdn.getyourguide.com/img/tour/56935b14efea4df9340210bcca39436ef8538f89954edcbb1c4019e32daff3d7.jpg/99.jpg", "https://cdn.getyourguide.com/img/tour/11a9fed93c48f0e0a22e4b373c8fa4a284c1a2be0615b8c9d019061e7b41be98.jpg/99.jpg", "https://cdn.getyourguide.com/img/tour/f2a905338e37cca2b47cf591078808df0dc60571ba31457a03a0135ec2b487cf.jpg/99.jpg"],
        description: "Join a kayaking and snorkeling tour in the Cala Romantica area. Explore incredible sea caves in Mallorca, snorkel in the crystalline waters of Cala Varques, and discover its diverse marine life.",
        duration: 3,
        languages: ["English", "Spanish", "German"],
        meetingPoint: "Cala Romantica",
        price: 69,
        category: tourCategory[3],
        highlights: [
            "Step into another world at the magically mysterious Caves of Hams",
            "Learn about the secrets of the cave's stalactites and stalagmites formations",
            "Stroll through illuminated caves and the Cueva Redonda's botanical garden",
            "Visit a local shop where you can purchase Mallorca pearls and other souvenirs"
        ],
        includes: [
            "Hotel pickup and drop-off",
            "Caves of Hams entry tickets"
        ]
    },{
        id: 7,
        tourName: "Horseback Riding Experience",
        img: [ "https://cdn.getyourguide.com/img/tour/73be6654d93dc505.jpeg/99.jpg", "https://cdn.getyourguide.com/img/tour/419926d1d99d467a.jpeg/99.jpg", "https://cdn.getyourguide.com/img/tour/4c945fa945b7fb82.jpeg/99.jpg", "https://cdn.getyourguide.com/img/tour/834fe18a2f21398d.jpeg/99.jpg"],
        description: "Enjoy a guided horseback ride around the bottom of the mountain or head up the slopes and admire the views. Choose the option that suits you and immerse yourself in nature while riding a horse.",
        duration: 2,
        languages: ["English", "Spanish", "German"],
        meetingPoint: "Cala Romantica",
        price: 48,
        category: tourCategory[3],
        highlights: [
            "Enjoy a horseback ride",
            "Take part in an activity suitable for beginners",
            "Enjoy feeding the animals in the farm",
            "See the beautiful sights of Alcudia bay",
            "Have lunch at our ranch"
        ],
        includes: [
            "Mallorcan product tasting",
            "Pickup from Alcudia and Playa de Muro areas",
            "Helmets",
            "Qualified guides"
        ]
    },{
        id: 8,
        tourName: "Cathedral of Mallorca Tour",
        img: [ "https://cdn.getyourguide.com/img/tour/611a2585d9192ad6.jpeg/99.jpg", "https://cdn.getyourguide.com/img/tour/a64582ac50d9fad1.jpeg/99.jpg", "https://cdn.getyourguide.com/img/tour/6f9445c4ead3a3d2.jpeg/99.jpg", "https://cdn.getyourguide.com/img/tour/5ee629d7667107e1.jpeg/99.jpg"],
        description: "Experience the glory of La Seu Cathedral in Palma de Mallorca with a skip-the-line entry ticket to the city's most iconic building.",
        duration: 1,
        languages: ["English", "Spanish", "German", "Russian"],
        meetingPoint: "Palma",
        price: 10,
        category: tourCategory[0],
        highlights: [
            "Skip the lines to Palma Cathedral at the city's most iconic building",
            "Marvel at ornate decorations, including one of the world's largest rose windows",
            "Discover additions made by the architect Antoni Gaudí in the early 20th century"
        ],
        includes: [
           "Skip-the-line entrance ticket to Palma Cathedral"
        ]
    },{
        id: 9,
        tourName: "Vineyard tour and wine tasting",
        img: [ "https://cdn.getyourguide.com/img/tour/8843f45db328d93ee2ce1dd1b9c79b9ab50cf5119cd1253e432a5bce9f73c210.jpeg/99.jpg", "https://cdn.getyourguide.com/img/tour/95115f97d66898ea3188d07acc2c16d32f2841c44b3304969785a03bcdb1575c.png/99.jpg", "https://cdn.getyourguide.com/img/tour/633a2a9d98fa227ee33fc238a2f042e28b10ac2c46ce5f40ad83a08061bfdc5d.jpg/99.jpg", "https://cdn.getyourguide.com/img/tour/36d16bfaaa9e16c3785b90a659a722736c413f60197402438e8c42af80e2012e.jpg/99.jpg"],
        description: "Would you like an individual wine tasting and a walking tour through the vineyards - in one of Mallorca's smallest bodegas? Then sign up!",
        duration: 2,
        languages: ["English", "Spanish", "German"],
        meetingPoint: "Binissalem",
        price: 25,
        category: tourCategory[1],
        highlights: [
            "Savor the flavors of 5 local wines, each with its own unique characteristics",
            "Enjoy the views of the vineyards and the surrounding countryside",
            "Learn about the wine-making process and the aromas of the wines",
            "Taste local snacks made with products from the area",
            "Take home some of the wines at special prices"
        ],
        includes: [
            "Exclusive group tour of the winery",
            "Tasting of five wines",
            "Nibbles made with local products",
            "Expert wine guide",
            "Opportunity to buy wines at special prices"
        ]
    },{
        id: 10,
        tourName: "Mediterranean Cooking Class",
        img: [ "https://cdn.getyourguide.com/img/tour/ab3ee4d5ea9fcfe6ba7500462c36fcfcf5e41a84bf652b6383a1b15226889ddf.jpg/99.jpg", "https://cdn.getyourguide.com/img/tour/a2094be6e21a86bafa1b175cf342f096c9781f5481b08ea3535edf4950d667a5.jpg/99.jpg", "https://cdn.getyourguide.com/img/tour/4f4de7e29cbdc6bcc83de33c6d2181b1c6eea79258d4fb95060cd0cc35a3b42b.jpeg/99.jpg", "https://cdn.getyourguide.com/img/tour/a1d0fcf017221d98eb3ec04f6ad02ce018fb7612e4079383ad178cd683f66d3e.jpg/99.jpg"],
        description: "Get hands-on learning with a typical Mediterranean fusion meal, created by you and your chef/instructor. Sip on local wines as you chop, sizzle, and savor the locally-sourced food.",
        duration: 3,
        languages: ["English", "Spanish"],
        meetingPoint: "Palma",
        price: 89,
        category: tourCategory[1],
        highlights: [
            "Unlock the secrets of Mediterranean fusion",
            "Make new friends and create lasting memories as you sip and taste",
            "Learn a recipe from a chef and cook a meal with farm-to-table ingredients",
            "Hear the history of Mediterranean fusion cooking from local chefs"
        ],
        includes: [
            "Cooking class with local cuisine experts",
            "Food",
            "Open bar with water, soft drinks, wines and beer",
            "Ingredients, cooking materials and recipes",
            "Meals"
        ]
    },{
        id: 11,
        tourName: "Gourmet Tapas and Wine Tour",
        img: [ "https://cdn.getyourguide.com/img/tour/d3d4acfce69f69bb83433222b51a9cc2052c5f19fb765ce698c471e2e6d2032e.jpeg/99.jpg", "https://cdn.getyourguide.com/img/tour/489a2c36caaa6fa19715622f999fa825c4ce7de1a4672259781e277506fa3e68.jpeg/99.jpg", "https://cdn.getyourguide.com/img/tour/e75e129eba33b48aded56443ae5415559f7743b23661bb8e530b1268305030ed.jpeg/99.jpg", "https://cdn.getyourguide.com/img/tour/f521653b75c7cdd53ee02cd35e1a5dd332697cfd145a61d35d3c4c5309844d08.jpeg/99.jpg"],
        description: "Experience Palma’s culinary delights on a self-guided tapas and wine tour. Visit five locations to enjoy gourmet tapas and local wines.",
        duration: 4,
        languages: ["English", "Spanish", "French"],
        meetingPoint: "Palma",
        price: 55,
        category: tourCategory[1],
        highlights: [
            "Savor the taste of Spain as you sample gourmet tapas at 5 eateries",
            "Enjoy a carefully curated culinary experience in Palma de Mallorca",
            "Explore at your own pace and discover Palma's Old Town along the way",
            "Choose your preferred snack with two tasty tapas options at each venue",
            "Sip a variety of beverages, including local wines and homemade sangria"
        ],
        includes: [
            "Self-guided walking tour",
            "5 tapas",
            "5 beverages (local wine, homemade sangria, beer, soft drink, water, or coffee)"
        ]
    },{
        id: 12,
        tourName: "Guided City Tour with a E-Bike",
        img: [ "https://cdn.getyourguide.com/img/tour/b96c3790b97bc843.jpeg/99.jpg", "https://cdn.getyourguide.com/img/tour/64639d6db74e5.jpeg/99.jpg", "https://cdn.getyourguide.com/img/tour/6477316ca039c.jpeg/99.jpg"],
        description: "Experience the charm of Palma's bay on a Fat Tire e-bike. Pedal effortlessly as you take in stunning views, see top sights like the cathedral and glide along the beach promenade with your guide.",
        duration: 2,
        languages: ["English", "Spanish"],
        meetingPoint: "Palma",
        price: 45,
        category: tourCategory[0],
        highlights: [
            "Experience Palma in a thrilling way on our comfortable Fat Tire e-bikes.",
            "Our expert guides deliver engaging stories and local insights during the tour.",
            "Explore both famous landmarks and hidden gems that many tourists overlook.",
            "Enjoy a scenic ride along the beautiful beach promenade and bay views.",
            "Join a small group for a personalized adventure that feels like with friends!"
        ],
        includes: [
            "Fat tire e-bike",
            "Tour guide",
            "Helmet"
        ]
    },{
        id: 13,
        tourName: "Deia Hiking & Snorkeling Adventure",
        img: [ "https://cdn.getyourguide.com/image/format=auto,fit=contain,gravity=auto,quality=60,width=1440,height=650,dpr=1/tour_img/644b6f12ede40.jpeg", "https://cdn.getyourguide.com/image/format=auto,fit=contain,gravity=auto,quality=60,width=1440,height=650,dpr=1/tour_img/ebdda087a779f218f725cfddc914990047643d2ce98c33783b4dc4209a98f071.jpeg", "https://cdn.getyourguide.com/image/format=auto,fit=contain,gravity=auto,quality=60,width=1440,height=650,dpr=1/tour_img/644a536c211bb.jpeg", "https://cdn.getyourguide.com/image/format=auto,fit=contain,gravity=auto,quality=60,width=1440,height=650,dpr=1/tour_img/d5aec0fe350743bb9aac31a115c6b14c2a2f1be2c5a6a17d0e52b8d685972434.jpg"],
        description: "Join me on a small-group journey hiking, snorkeling, and exploring hidden coves along Mallorca’s breathtaking north coast. Adventure made personal.",
        duration: 8,
        languages: ["English", "Spanish", "French"],
        meetingPoint: "Deià",
        price: 76,
        category: tourCategory[3],
        highlights: [
            "Swim in secret coves in the most scenic area of Mallorca",
            "Challenge yourself hiking the beautiful north coast and some epic cliff jumping",
            "Relax and enjoy local food and drinks in the picturesque village of Deià"
        ],
        includes: [
            "Central location pick up (Soller train station in Palma)",
            "Transportation to all the sites",
            "Tour leader",
            "Water shoes",
            "Goggles (snorkelling masks)"
        ]
    },{
        id: 14,
        tourName: "Yoga & Meditation on the Beach",
        img: [ "https://cdn.getyourguide.com/img/tour/08eb4c7b06136e66239055e683b9da40462f01d7461f17d4cac06e9fd70f5c15.jpeg/97.jpg", "https://cdn.getyourguide.com/img/tour/7fce3ca3de7b6c19d69b4eec3e0b82c74ba0cd703cb4989ccfcc8df4dd70b3bd.jpg/99.jpg", "https://cdn.getyourguide.com/img/tour/b08880ba69ca2573106702c8c8aa1c548039df7b7d0ef9e7caf378a7a56cbf10.jpeg/99.jpg", "https://cdn.getyourguide.com/img/tour/f3bfc7a4031a6bae82cbb1cb361286d682bdc7cc4c3ffa05144b2916fc14be63.jpg/99.jpg"],
        description: "Stretch into the day with gentle beach yoga, guided breathwork, and a calming meditation by the waves. Move, breathe, and recharge as the sun rises, leaving you refreshed and ready for what’s ahead.",
        duration: 1.5,
        languages: ["English"],
        meetingPoint: "Palmanova",
        price: 20,
        category: tourCategory[3],
        highlights: [
            "Start your day with a yoga and meditation session by the sea",
            "Engage in deep, rhythmic breathing in harmony with the waves",
            "Get refreshed, centered, and ready to embrace the day with yoga postures",
            "Connect with nature and set your intentions for the day ahead",
            "Enjoy a guided meditation session to bring deep relaxation and mental clarity"
        ],
        includes: [
            "Morning yoga session",
            "Guided meditation",
            "Breathwork exercises"
        ]
    },{
        id: 15,
        tourName: "Southern Beaches Llaut Boat Tour",
        img: [ "https://cdn.getyourguide.com/img/tour/645e27ea948f0.jpeg/99.jpg", "https://cdn.getyourguide.com/img/tour/64acf250e2309.jpeg/99.jpg", "https://cdn.getyourguide.com/img/tour/645e27eaabe8d.jpeg/99.jpg", "https://cdn.getyourguide.com/img/tour/64acf3de625ed.jpeg/99.jpg"],
        description: "Embark on an adventure aboard an authentic wooden boat around the southern beaches of Mallorca. Swim, snorkel, and enjoy soft drinks on Mallorca's pristine beaches.",
        duration: 3,
        languages: ["English", "Spanish"],
        meetingPoint: "Colònia de Sant Jordi",
        price: 250,
        category: tourCategory[2],
        highlights: [
            "Visit all Mallorca's South beaches onboard a real LLaut. Traditional wood boat.",
            "A refreshing experience. Under de shader surrounded by water.",
            "You will never forget the color of the sea. Trust me!"
        ],
        includes: [
            "Boat rental",
            "Private mooring at Sa Rapita Marina",
            "Use of snorkeling gear",
            "Water and soft drinks",
            "Use of toilets and shower",
            "15 minutes marina car access",
            "Fuel"
        ]
    },{
        id: 16,
        tourName: "Countryside Safari & Ranch BBQ",
        img: [ "https://cdn.getyourguide.com/img/tour/076b239f513de89a58f03b2c613b33945e1dbc2b6a09e44d45f77814cca6b36f.jpg/97.jpg", "https://cdn.getyourguide.com/img/tour/290eb70676bdac2a224fd3a6bfdaf182a97e462c25734debb4a71548d5af9ac4.jpg/99.jpg", "https://cdn.getyourguide.com/img/tour/5a322cc375dad56a35b946cbe7c46ef84e633ba7bd2b652f7a0a60ddecda28ac.jpg/99.jpg", "https://cdn.getyourguide.com/img/tour/25bf8690310c344049e1b47ccb31bebaf1a29e56c4853b5db9ac87c0c1c08c84.jpg/99.jpg", "https://cdn.getyourguide.com/img/tour/bee4836665e89b8fe32e05528234d30c8eb2cd5dedef783535a7bb8d8a215d9e.jpg/99.jpg", "https://cdn.getyourguide.com/img/tour/dd9f7b9791b22d4823cc56a8598246897a34966171fa27c498f42eefe9e708f9.jpg/99.jpg"],
        description: "Discover Mallorca’s wild side on an exclusive 4x4 tour. Explore a countryside ranch with native animals, relax on a stunning beach, and enjoy a barbecue at the iconic Rancho Grande. Fun for all ages!",
        duration: 2,
        languages: ["English", "Spanish"],
        meetingPoint: "Son Serra de Marina",
        price: 66,
        category: tourCategory[2],
        highlights: [
            
        ],
        includes: [
           
        ]
    },{
        id: 17,
        tourName: "Snorkeling Tour",
        img: [ "https://cdn.getyourguide.com/img/tour/079be79ee1a7836f2716fd95d39e568ddaefb0d10b110c115ef1afd052376409.jpg/99.jpg", "https://cdn.getyourguide.com/img/tour/602d472d0d60ac3bccad10bca038dacb6c89572388092767c1fbbf32e59ae4c4.jpg/99.jpg", "https://cdn.getyourguide.com/img/tour/8e1560b5031d7ab8be7be9c29782e6ecd12230460d3773a08f35861d6b7879cd.png/99.jpg", "https://cdn.getyourguide.com/img/tour/eebc1b8f37ca214dbb85a4e611c1fe2ee81a5131987f33e010ade594c32581c6.jpg/99.jpg"],
        description: "Dive into the crystal-clear waters of the ocean on a guided snorkeling tour. Choose from a morning, afternoon, or sunset tour to fit your schedule and explore the underwater world of Port de Sóller.",
        duration: 4,
        languages: ["English", "Spanish", "German", "French"],
        meetingPoint: "Port de Sóller",
        price: 90,
        category: tourCategory[2],
        highlights: [
            "Emerge into an unforgettable adventure and make memories for a lifetime",
            "Surprise yourself with the wonders of Mallorca, with fun, joy, and safety.",
            "Family experience half day trip"
        ],
        includes: [
            "Guide",
            "4x4",
            "Fuel",
            "Water",
            "Insurance",
            "Juice",
            "Biscuits"
        ]
    },{
        id: 18,
        tourName: "Stand-Up Paddleboard Lesson",
        img: [ "https://cdn.getyourguide.com/img/tour/644d2944a4665.jpeg/99.jpg", "https://cdn.getyourguide.com/img/tour/644d29452e27d.jpeg/99.jpg", "https://cdn.getyourguide.com/img/tour/644d2a0e92c58.jpeg/99.jpg"],
        description: "Join a stand-up paddleboard class in Puerto de Alcudia and master the art of using a SUP. Learn proper technique from your instructor before enjoying some free time on the private beach to practice your new skills.",
        duration: 1.5,
        languages: ["English", "Spanish", "German"],
        meetingPoint: "Platja d'Alcúdia",
        price: 55,
        category: tourCategory[3],
        highlights: [
            "Learn how to paddle on our protected area with calm water.",
            "Enjoy a private class with our expert instructor.",
            "Enjoy doing paddle in one of the 25 best beaches of the world."
        ],
        includes: [
            "SUP lesson",
            "Instructor",
            "Paddleboard",
            "Life vest",
            "Paddle",
            "Use of changing rooms and a locker"
        ]
    },{
        id: 19,
        tourName: "Explore the Island Dragonera with the kayak",
        img: [ "https://cdn.getyourguide.com/img/tour/1c9ec3e4136b598881bd9c5a79ac021be5c43a47a647230e5861941eb49823cd.jpeg/99.jpg", "https://cdn.getyourguide.com/img/tour/8ffece9d6a95994f84bcf14e85872119ffabebf9644c07464de4826f9d8bf123.jpeg/99.jpg", "https://cdn.getyourguide.com/img/tour/a35488439c5726df847e70d04dba1ee9f5e180d9ece53ef264836884087e2bf1.jpeg/99.jpg", "https://cdn.getyourguide.com/img/tour/79300b9c12a10a0a17bd75164235568accc70737fb8482f1c924dc8e7788d71c.jpeg/99.jpg", "https://cdn.getyourguide.com/img/tour/7df6c92a069fa3da4158d5131a73d04ed2a02a9d8350d9a6975b61df1371a1ae.jpeg/99.jpg"],
        description: "Enjoy the sun and sea with us and discover the beautiful bay of Sant Elm and the Island Dragonera from a different perspective - by kayak.",
        duration: 3,
        languages: ["English", "German"],
        meetingPoint: "Sant Elm",
        price: 50,
        category: tourCategory[2],
        highlights: [
            "Nature reserve Dragonera",
            "Magnificent views",
            "Exciting stories",
        ],
        includes: [
            "Kayaks",
            "Paddle",
            "Life jackets",
            "Waterproof backs",
            "Snorkelling gear",
            "Water shoes"
        ]
    },{
        id: 20,
        tourName: "Aquatic Cave Exploration",
        img: [ "https://cdn.getyourguide.com/img/tour/646c7c5d43df0.jpeg/99.jpg", "https://cdn.getyourguide.com/img/tour/646c7d17bdda9.jpeg/99.jpg", "https://cdn.getyourguide.com/img/tour/646c7c5da06ec.jpeg/99.jpg", "https://cdn.getyourguide.com/img/tour/646c7c5d427f0.jpeg/99.jpg", "https://cdn.getyourguide.com/img/tour/646c7d18eddde.jpeg/99.jpg", "https://cdn.getyourguide.com/img/tour/646c7c5db18d9.jpeg/99.jpg", "https://cdn.getyourguide.com/img/tour/646c7d168fe5c.jpeg/99.jpg", "https://cdn.getyourguide.com/img/tour/646c7d19170fd.jpeg/99.jpg"],
        description: "Dive into the incredible caves of Mallorca and enjoy the thrill of swimming in mesmerising lakes on this guided tour. Relax as you admire stunning formations above and below the water's surface.",
        duration: 5,
        languages: ["English", "Spanish"],
        meetingPoint: "Cala Romantica",
        price: 80,
        category: tourCategory[2],
        highlights: [
            "Feel in awe as you see the enchanting lakes hidden within Mallorca's caves",
            "Marvel at the breathtaking formations that adorn the cave's interior",
            "Take a moment to unwind as you soak in the beauty of the cave lakes",
            "Escape the heat and find respite in the cool, crystal-clear waters of the cave",
            "Listen to your guide share fascinating stories about the caves' formation"
        ],
        includes: [
            "Live guide",
            "Wetsuit",
            "Lighting",
            "Helmet",
            "Backpack",
            "Waterproof shoes"
        ]
    },{
        id: 21,
        tourName: "Rock climbing Tour",
        img: [ "https://cdn.getyourguide.com/image/format=auto,fit=contain,gravity=auto,quality=60,width=1440,height=650,dpr=1/tour_img/091c465f40c3d42f762ff056cb528fb8e1ce58bf4cdf18970cc5801959fedff0.jpeg", "https://cdn.getyourguide.com/image/format=auto,fit=contain,gravity=auto,quality=60,width=1440,height=650,dpr=1/tour_img/9e4177fd930202a11114a19678d03b01e0b2c9ea16e64d66ea0fdb0d8c7266fd.jpeg", "https://cdn.getyourguide.com/image/format=auto,fit=contain,gravity=auto,quality=60,width=1440,height=650,dpr=1/tour_img/649cd94d9594c7519f948804301709149ada666b65ff38f68f9c5e95d661917c.jpeg"],
        description: "Experience the thrill of rock climbing in Mallorca. Choose your adventure and enjoy a day of climbing tailored to your skill level and preferences.",
        duration: 5.5,
        languages: ["English", "Spanish", "Catalan", "German", "French"],
        meetingPoint: "Alaró",
        price: 250,
        category: tourCategory[3],
        highlights: [
            "Feel the thrill of climbing on limestone cliffs in Mallorca",
            "Choose between sport climbing, multipitch or bouldering",
            "Enjoy a day of climbing tailored to your skill level and preferences",
            "Learn climbing techniques and safety tips from a local guide",
            "Discover remote natural spots and breathtaking views of the island"
        ],
        includes: [
            "Full climbing day",
            "Technical climbing equipment",
            "Mountain guide",
            "Insurance"
        ]
    }
];