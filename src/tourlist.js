
//const languageOptions = ["English", "Spanish", "German", "French", "Arabic", "Russian"];

const tourCategory = ["culture", "food", "nature", "sports"];

export const TOURS = [
    {
        id: 0,
        tourName: "Visit of the olive grove, olive oil tasting",
        img: [ "https://cdn.getyourguide.com/img/tour/8014747575a731e82680b178efd4d6bb55348caf19a0656024f4cb58b6671d33.jpeg/99.jpg", "https://cdn.getyourguide.com/img/tour/62d6846931182.jpeg/99.jpg", "https://cdn.getyourguide.com/img/tour/62d6821b118b3.jpeg/99.jpg", "https://cdn.getyourguide.com/img/tour/62d683420e5d3.jpeg/99.jpg", "https://cdn.getyourguide.com/img/tour/62d6837b7fe16.jpeg/99.jpg"],
        description: "Live a unique experience and come and learn how we make our extra virgin olive oil. Includes a walk through the olive grove, a tasting and a snack.",
        duration: 2,
        languages: ["English", "Spanish", "Russian"],
        meetingPoint: "Caimari",
        price: 49,
        category: tourCategory[1]
    },{
        id: 1,
        tourName: "Valldemossa & Soller Tour",
        img: [ "https://cdn.getyourguide.com/img/tour/62542e5cdba9b.jpeg/99.jpg", "https://cdn.getyourguide.com/img/tour/62542e5cbe621.jpeg/99.jpg", "https://cdn.getyourguide.com/img/tour/62542e5ce98de.jpeg/99.jpg", "https://cdn.getyourguide.com/img/tour/62542e5ce257c.jpeg/99.jpg", "https://cdn.getyourguide.com/img/tour/62542e5d084b3.jpeg/99.jpg"],
        description: "Set off on an exclusive full-day excursion to discover Valldemossa, Sóller, and the west coast of Mallorca and admire the spectacular landscape by Bus.",
        duration: 6,
        languages: ["English", "Spanish"],
        meetingPoint: "Palma",
        price: 45,
        category: tourCategory[0]
    },{
        id: 2,
        tourName: "Sea Cave Kayaking Tour with Snorkeling and a Snack",
        img: [ "https://cdn.getyourguide.com/img/tour/d31e63cf73899b00.jpeg/99.jpg"],
        description: "Experience the sea caves and cliffs of Mallorca on a kayaking tour. Venture to caves of extraordinary colors and marvel at the marine life on the seafloor.",
        duration: 6,
        languages: ["English", "Spanish", "German"],
        meetingPoint: "Palma",
        price: 69,
        category: tourCategory[3]
    },{
        id: 3,
        tourName: "Dolphin Watch Tour with Professional Marine Biologist",
        img: [ "https://cdn.getyourguide.com/img/tour/61fb936858294.jpeg/99.jpg", "https://cdn.getyourguide.com/img/tour/763c8ea3ba6bfcb37eb40b952c4c1f8ec6eddc96816fea76ac62d5f5c5e47639.jpg/99.jpg", "https://cdn.getyourguide.com/img/tour/8c29ee40f5a1a84bb8e419fb2d813200965e5d1a42787a4ab4c31378c390d4b2.jpg/99.jpg", "https://cdn.getyourguide.com/img/tour/af2ba024c48330242a484fb161845dc7a73cf4da8d85f307f4238920006cfcac.jpg/99.jpg"],
        description: "Create lasting memories on a dolphin-watching tour guided by professional marine biologists. Contribute to conservation efforts and learn about these beautiful creatures on the coast of the Mallorca.",
        duration: 1.5,
        languages: ["English", "Spanish", "Portugese"],
        meetingPoint: "Palma",
        price: 45,
        category: tourCategory[2]
    },{
        id: 4,
        tourName: "Caves of Hams",
        img: [ "https://cdn.getyourguide.com/img/tour/5ac3448d24918.jpeg/99.jpg", "https://cdn.getyourguide.com/img/tour/5ac3448b855b4.jpeg/99.jpg", "https://cdn.getyourguide.com/img/tour/cd8d939d51081496.jpeg/99.jpg"],
        description: "Enjoy a walk through the Caves of Hams and walk through 850 meters of extraordinary caves with 15 different areas.",
        duration: 2,
        languages: ["English", "Spanish", "German"],
        meetingPoint: "Porto Cristo",
        price: 40,
        category: tourCategory[2]
    },{
        id: 5,
        tourName: "Snorkeling, and Cliff Jumping",
        img: [ "https://cdn.getyourguide.com/img/tour/f53812d73c45c7b81e2a87de70186a28a10fc592ce0cec1c394ca1bdbb2d8d86.jpeg/99.jpg", "https://cdn.getyourguide.com/img/tour/f68b9afb1c06c0e2.jpeg/99.jpg", "https://cdn.getyourguide.com/img/tour/a816aeb2aa86fde6.jpeg/99.jpg"],
        description: "Uncover the beauty of Mallorca's beautiful corals and fish.",
        duration: 3,
        languages: ["English", "Spanish"],
        meetingPoint: "Cala Sant Vicenç, Pollença",
        price: 45,
        category: tourCategory[3]
    },{
        id: 6,
        tourName: "Guided Sea Caves Kayak & Snorkeling Expedition",
        img: [ "https://cdn.getyourguide.com/img/tour/00f1b6c02c36fb08fcc34c1475aa4ccafc6f140417ccdfad1aa103324d17dfda.jpg/99.jpg", "https://cdn.getyourguide.com/img/tour/4f80f68c2f25572a7fdda81f6add288951a46dab35c566226aec18495b6441f5.jpg/99.jpg", "https://cdn.getyourguide.com/img/tour/1042832b5bddbff49e392e30b7e41170c08cff7bde09bcf8d8f140bbb38a05d1.jpg/99.jpg", "https://cdn.getyourguide.com/img/tour/56935b14efea4df9340210bcca39436ef8538f89954edcbb1c4019e32daff3d7.jpg/99.jpg", "https://cdn.getyourguide.com/img/tour/11a9fed93c48f0e0a22e4b373c8fa4a284c1a2be0615b8c9d019061e7b41be98.jpg/99.jpg", "https://cdn.getyourguide.com/img/tour/f2a905338e37cca2b47cf591078808df0dc60571ba31457a03a0135ec2b487cf.jpg/99.jpg"],
        description: "Join a kayaking and snorkeling tour in the Cala Romantica area. Explore incredible sea caves in Mallorca, snorkel in the crystalline waters of Cala Varques, and discover its diverse marine life.",
        duration: 3,
        languages: ["English", "Spanish", "German"],
        meetingPoint: "Cala Romantica",
        price: 69,
        category: tourCategory[3]
    },{
        id: 7,
        tourName: "Horseback Riding Experience",
        img: [ "https://cdn.getyourguide.com/img/tour/73be6654d93dc505.jpeg/99.jpg", "https://cdn.getyourguide.com/img/tour/419926d1d99d467a.jpeg/99.jpg", "https://cdn.getyourguide.com/img/tour/4c945fa945b7fb82.jpeg/99.jpg", "https://cdn.getyourguide.com/img/tour/834fe18a2f21398d.jpeg/99.jpg"],
        description: "Enjoy a guided horseback ride around the bottom of the mountain or head up the slopes and admire the views. Choose the option that suits you and immerse yourself in nature while riding a horse.",
        duration: 3,
        languages: ["English", "Spanish", "German"],
        meetingPoint: "Cala Romantica",
        price: 48,
        category: tourCategory[3]
    },{
        id: 8,
        tourName: "Cathedral of Mallorca Tour",
        img: [ "https://cdn.getyourguide.com/img/tour/611a2585d9192ad6.jpeg/99.jpg", "https://cdn.getyourguide.com/img/tour/a64582ac50d9fad1.jpeg/99.jpg", "https://cdn.getyourguide.com/img/tour/6f9445c4ead3a3d2.jpeg/99.jpg", "https://cdn.getyourguide.com/img/tour/5ee629d7667107e1.jpeg/99.jpg"],
        description: "Experience the glory of La Seu Cathedral in Palma de Mallorca with a skip-the-line entry ticket to the city's most iconic building.",
        duration: 1,
        languages: ["English", "Spanish", "German", "Russian"],
        meetingPoint: "Palma",
        price: 10,
        category: tourCategory[0]
    },{
        id: 9,
        tourName: "Vineyard tour and wine tasting",
        img: [ "https://cdn.getyourguide.com/img/tour/8843f45db328d93ee2ce1dd1b9c79b9ab50cf5119cd1253e432a5bce9f73c210.jpeg/99.jpg", "https://cdn.getyourguide.com/img/tour/95115f97d66898ea3188d07acc2c16d32f2841c44b3304969785a03bcdb1575c.png/99.jpg", "https://cdn.getyourguide.com/img/tour/633a2a9d98fa227ee33fc238a2f042e28b10ac2c46ce5f40ad83a08061bfdc5d.jpg/99.jpg", "https://cdn.getyourguide.com/img/tour/36d16bfaaa9e16c3785b90a659a722736c413f60197402438e8c42af80e2012e.jpg/99.jpg"],
        description: "Would you like an individual wine tasting and a walking tour through the vineyards - in one of Mallorca's smallest bodegas? Then sign up!",
        duration: 2,
        languages: ["English", "Spanish", "German"],
        meetingPoint: "Binissalem",
        price: 25,
        category: tourCategory[1]
    },{
        id: 10,
        tourName: "Mediterranean Cooking Class",
        img: [ "https://cdn.getyourguide.com/img/tour/ab3ee4d5ea9fcfe6ba7500462c36fcfcf5e41a84bf652b6383a1b15226889ddf.jpg/99.jpg", "https://cdn.getyourguide.com/img/tour/a2094be6e21a86bafa1b175cf342f096c9781f5481b08ea3535edf4950d667a5.jpg/99.jpg", "https://cdn.getyourguide.com/img/tour/4f4de7e29cbdc6bcc83de33c6d2181b1c6eea79258d4fb95060cd0cc35a3b42b.jpeg/99.jpg", "https://cdn.getyourguide.com/img/tour/a1d0fcf017221d98eb3ec04f6ad02ce018fb7612e4079383ad178cd683f66d3e.jpg/99.jpg"],
        description: "Get hands-on learning with a typical Mediterranean fusion meal, created by you and your chef/instructor. Sip on local wines as you chop, sizzle, and savor the locally-sourced food.",
        duration: 3,
        languages: ["English", "Spanish"],
        meetingPoint: "Palma",
        price: 89,
        category: tourCategory[1]
    },{
        id: 11,
        tourName: "Gourmet Tapas and Wine Tour",
        img: [ "https://cdn.getyourguide.com/img/tour/d3d4acfce69f69bb83433222b51a9cc2052c5f19fb765ce698c471e2e6d2032e.jpeg/99.jpg", "https://cdn.getyourguide.com/img/tour/489a2c36caaa6fa19715622f999fa825c4ce7de1a4672259781e277506fa3e68.jpeg/99.jpg", "https://cdn.getyourguide.com/img/tour/e75e129eba33b48aded56443ae5415559f7743b23661bb8e530b1268305030ed.jpeg/99.jpg", "https://cdn.getyourguide.com/img/tour/f521653b75c7cdd53ee02cd35e1a5dd332697cfd145a61d35d3c4c5309844d08.jpeg/99.jpg"],
        description: "Experience Palma’s culinary delights on a self-guided tapas and wine tour. Visit five locations to enjoy gourmet tapas and local wines.",
        duration: 4,
        languages: ["English", "Spanish", "French"],
        meetingPoint: "Palma",
        price: 55,
        category: tourCategory[1]
    },{
        id: 12,
        tourName: "Guided City Tour with a E-Bike",
        img: [ "https://cdn.getyourguide.com/img/tour/b96c3790b97bc843.jpeg/99.jpg", "https://cdn.getyourguide.com/img/tour/64639d6db74e5.jpeg/99.jpg", "https://cdn.getyourguide.com/img/tour/6477316ca039c.jpeg/99.jpg"],
        description: "Experience the charm of Palma's bay on a Fat Tire e-bike. Pedal effortlessly as you take in stunning views, see top sights like the cathedral and glide along the beach promenade with your guide.",
        duration: 2,
        languages: ["English", "Spanish"],
        meetingPoint: "Palma",
        price: 45,
        category: tourCategory[0]
    },{
        id: 13,
        tourName: "Torrent de Pareis Hiking Adventure",
        img: [ "https://cdn.getyourguide.com/img/tour/9c2fa344355062a46fcde78f5527503b2efd56d0f7ee6c9715036e12ee8db8b0.jpg/99.jpg", "https://cdn.getyourguide.com/img/tour/d77dca95896664e199b84d053f19a0535bba81b591b4caf31aea7dab15dde38b.jpg/99.jpg", "https://cdn.getyourguide.com/img/tour/09df6053d749a4669bff53031191e015bdd0284dea8d816f0f60e3bfe2fd8edf.jpg/99.jpg", "https://cdn.getyourguide.com/img/tour/4b631be40f07623988a9863c25ca211aa75fbf9a04364a0ce1bd410abf7bc437.jpg/99.jpg"],
        description: "Experience the charm of Palma's bay on a Fat Tire e-bike. Pedal effortlessly as you take in stunning views, see top sights like the cathedral and glide along the beach promenade with your guide.",
        duration: 5,
        languages: ["English", "Spanish", "German"],
        meetingPoint: "Escorca",
        price: 90,
        category: tourCategory[3]
    },{
        id: 14,
        tourName: "Yoga & Meditation on the Beach",
        img: [ "https://cdn.getyourguide.com/img/tour/08eb4c7b06136e66239055e683b9da40462f01d7461f17d4cac06e9fd70f5c15.jpeg/97.jpg", "https://cdn.getyourguide.com/img/tour/7fce3ca3de7b6c19d69b4eec3e0b82c74ba0cd703cb4989ccfcc8df4dd70b3bd.jpg/99.jpg", "https://cdn.getyourguide.com/img/tour/b08880ba69ca2573106702c8c8aa1c548039df7b7d0ef9e7caf378a7a56cbf10.jpeg/99.jpg", "https://cdn.getyourguide.com/img/tour/f3bfc7a4031a6bae82cbb1cb361286d682bdc7cc4c3ffa05144b2916fc14be63.jpg/99.jpg"],
        description: "Stretch into the day with gentle beach yoga, guided breathwork, and a calming meditation by the waves. Move, breathe, and recharge as the sun rises, leaving you refreshed and ready for what’s ahead.",
        duration: 1.5,
        languages: ["English"],
        meetingPoint: "Ca'n Pastilla",
        price: 20,
        category: tourCategory[3]
    },{
        id: 15,
        tourName: "Southern Beaches Llaut Boat Tour",
        img: [ "https://cdn.getyourguide.com/img/tour/645e27ea948f0.jpeg/99.jpg", "https://cdn.getyourguide.com/img/tour/64acf250e2309.jpeg/99.jpg", "https://cdn.getyourguide.com/img/tour/645e27eaabe8d.jpeg/99.jpg", "https://cdn.getyourguide.com/img/tour/64acf3de625ed.jpeg/99.jpg"],
        description: "Embark on an adventure aboard an authentic wooden boat around the southern beaches of Mallorca. Swim, snorkel, and enjoy soft drinks on Mallorca's pristine beaches.",
        duration: 3,
        languages: ["English", "Spanish"],
        meetingPoint: "Colonia de San Jordi",
        price: 250,
        category: tourCategory[2]
    },{
        id: 16,
        tourName: "Countryside Safari & Ranch BBQ",
        img: [ "https://cdn.getyourguide.com/img/tour/076b239f513de89a58f03b2c613b33945e1dbc2b6a09e44d45f77814cca6b36f.jpg/97.jpg", "https://cdn.getyourguide.com/img/tour/290eb70676bdac2a224fd3a6bfdaf182a97e462c25734debb4a71548d5af9ac4.jpg/99.jpg", "https://cdn.getyourguide.com/img/tour/5a322cc375dad56a35b946cbe7c46ef84e633ba7bd2b652f7a0a60ddecda28ac.jpg/99.jpg", "https://cdn.getyourguide.com/img/tour/25bf8690310c344049e1b47ccb31bebaf1a29e56c4853b5db9ac87c0c1c08c84.jpg/99.jpg", "https://cdn.getyourguide.com/img/tour/bee4836665e89b8fe32e05528234d30c8eb2cd5dedef783535a7bb8d8a215d9e.jpg/99.jpg", "https://cdn.getyourguide.com/img/tour/dd9f7b9791b22d4823cc56a8598246897a34966171fa27c498f42eefe9e708f9.jpg/99.jpg"],
        description: "Discover Mallorca’s wild side on an exclusive 4x4 tour. Explore a countryside ranch with native animals, relax on a stunning beach, and enjoy a barbecue at the iconic Rancho Grande. Fun for all ages!",
        duration: 2,
        languages: ["English", "Spanish"],
        meetingPoint: "Son Serra de Marina",
        price: 66,
        category: tourCategory[2]
    },{
        id: 17,
        tourName: "Snorkeling Tour",
        img: [ "https://cdn.getyourguide.com/img/tour/079be79ee1a7836f2716fd95d39e568ddaefb0d10b110c115ef1afd052376409.jpg/99.jpg", "https://cdn.getyourguide.com/img/tour/602d472d0d60ac3bccad10bca038dacb6c89572388092767c1fbbf32e59ae4c4.jpg/99.jpg", "https://cdn.getyourguide.com/img/tour/8e1560b5031d7ab8be7be9c29782e6ecd12230460d3773a08f35861d6b7879cd.png/99.jpg", "https://cdn.getyourguide.com/img/tour/eebc1b8f37ca214dbb85a4e611c1fe2ee81a5131987f33e010ade594c32581c6.jpg/99.jpg"],
        description: "Dive into the crystal-clear waters of the ocean on a guided snorkeling tour. Choose from a morning, afternoon, or sunset tour to fit your schedule and explore the underwater world of Port de Sóller.",
        duration: 4,
        languages: ["English", "Spanish", "German", "French"],
        meetingPoint: "Port de Sóller",
        price: 90,
        category: tourCategory[2]
    },{
        id: 18,
        tourName: "Stand-Up Paddleboard Lesson",
        img: [ "https://cdn.getyourguide.com/img/tour/644d2944a4665.jpeg/99.jpg", "https://cdn.getyourguide.com/img/tour/644d29452e27d.jpeg/99.jpg", "https://cdn.getyourguide.com/img/tour/644d2a0e92c58.jpeg/99.jpg"],
        description: "Join a stand-up paddleboard class in Puerto de Alcudia and master the art of using a SUP. Learn proper technique from your instructor before enjoying some free time on the private beach to practice your new skills.",
        duration: 1.5,
        languages: ["English", "Spanish", "German"],
        meetingPoint: "Playa de Alcudia",
        price: 55,
        category: tourCategory[3]
    },{
        id: 19,
        tourName: "Explore the Island Dragonera with the kayak",
        img: [ "https://cdn.getyourguide.com/img/tour/1c9ec3e4136b598881bd9c5a79ac021be5c43a47a647230e5861941eb49823cd.jpeg/99.jpg", "https://cdn.getyourguide.com/img/tour/8ffece9d6a95994f84bcf14e85872119ffabebf9644c07464de4826f9d8bf123.jpeg/99.jpg", "https://cdn.getyourguide.com/img/tour/a35488439c5726df847e70d04dba1ee9f5e180d9ece53ef264836884087e2bf1.jpeg/99.jpg", "https://cdn.getyourguide.com/img/tour/79300b9c12a10a0a17bd75164235568accc70737fb8482f1c924dc8e7788d71c.jpeg/99.jpg", "https://cdn.getyourguide.com/img/tour/7df6c92a069fa3da4158d5131a73d04ed2a02a9d8350d9a6975b61df1371a1ae.jpeg/99.jpg"],
        description: "Enjoy the sun and sea with us and discover the beautiful bay of Sant Elm and the Island Dragonera from a different perspective - by kayak.",
        duration: 3,
        languages: ["English", "German"],
        meetingPoint: "Sant Elm",
        price: 50,
        category: tourCategory[2]
    },{
        id: 20,
        tourName: "Aquatic Cave Exploration",
        img: [ "https://cdn.getyourguide.com/img/tour/646c7c5d43df0.jpeg/99.jpg", "https://cdn.getyourguide.com/img/tour/646c7d17bdda9.jpeg/99.jpg", "https://cdn.getyourguide.com/img/tour/646c7c5da06ec.jpeg/99.jpg", "https://cdn.getyourguide.com/img/tour/646c7c5d427f0.jpeg/99.jpg", "https://cdn.getyourguide.com/img/tour/646c7d18eddde.jpeg/99.jpg", "https://cdn.getyourguide.com/img/tour/646c7c5db18d9.jpeg/99.jpg", "https://cdn.getyourguide.com/img/tour/646c7d168fe5c.jpeg/99.jpg", "https://cdn.getyourguide.com/img/tour/646c7d19170fd.jpeg/99.jpg"],
        description: "Dive into the incredible caves of Mallorca and enjoy the thrill of swimming in mesmerising lakes on this guided tour. Relax as you admire stunning formations above and below the water's surface.",
        duration: 5,
        languages: ["English", "Spanish"],
        meetingPoint: "Cala Romantica",
        price: 80,
        category: tourCategory[2]
    }
];