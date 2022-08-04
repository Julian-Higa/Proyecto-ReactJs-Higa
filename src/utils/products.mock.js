const products = [
    {
        id: 1,
        title: "Hierro",
        category: "lol",
        price: 1500,
        image: 'IronEmblem2022.png',
        description: "Liga Hierro",
        stock: 4
    },
    {
        id: 2,
        title: "Bronce",
        category: "lol",
        price: 2000,
        image: 'BronzeEmblem2022.png',
        description: "Liga Bronce",
        stock: 4
    },
    {
        id: 3,
        title: "Plata",
        category: "lol",
        price: 3500,
        image: 'SilverEmblem2022.png',
        description: "Liga Plata",
        stock: 4
    },
    {
        id: 4,
        title: "Oro",
        category: "lol",
        price: 4500,
        image: 'GoldEmblem2022.png',
        description: "Liga Oro",
        stock: 4
    },
    {
        id: 5,
        title: "Platino",
        category: "lol",
        price: 5500,
        image: 'PlatinumEmblem2022.png',
        description: "Liga Platino",
        stock: 4
    },
    {
        id: 6,
        title: "Diamante",
        category: "lol",
        price: 7000,
        image: 'DiamondEmblem2022.png',
        description: "Liga Diamante",
        stock: 4
    },
    {
        id: 7,
        title: "Master",
        category: "lol",
        price: 8500,
        image: 'MasterEmblem2022.png',
        description: "Liga Master",
        stock: 2
    },
    {
        id: 8,
        title: "Grand Master",
        category: "lol",
        price: 10000,
        image: 'GrandMasterEmblem2022.png',
        description: "Liga Grand Master",
        stock: 3
    },
    {
        id: 9,
        title: "Challenger",
        category: "lol",
        price: 12000,
        image: 'ChallengerEmblem2022.png',
        description: "Liga Challenger",
        stock: 1
    },
    {
        id: 10,
        title: "Silver 1",
        category: "csgo",
        price: 2000,
        image: 'CsGoRangoSilver1.jpg',
        description: "Rango Silver 1",
        stock: 1
    },
    {
        id: 11,
        title: "Silver 2",
        category: "csgo",
        price: 2100,
        image: 'CsGoRangoSilver2.jpg',
        description: "Rango Silver 2",
        stock: 1
    },
    {
        id: 12,
        title: "Silver 3",
        category: "csgo",
        price: 2200,
        image: 'CsGoRangoSilver3.jpg',
        description: "Rango Silver 3",
        stock: 1
    },
    {
        id: 13,
        title: "Silver 4",
        category: "csgo",
        price: 2300,
        image: 'CsGoRangoSilver4.jpg',
        description: "Rango Silver 4",
        stock: 1
    },
    {
        id: 14,
        title: "Silver Elite",
        category: "csgo",
        price: 2400,
        image: 'CsGoRangoSilverElite.jpg',
        description: "Rango Silver Elite",
        stock: 1
    },
    {
        id: 15,
        title: "Silver Elite Master",
        category: "csgo",
        price: 2500,
        image: 'CsGoRangoSilverEliteMaster.jpg',
        description: "Rango Silver Elite Master",
        stock: 1
    },
    {
        id: 16,
        title: "Gold Nova 1",
        category: "csgo",
        price: 3000,
        image: 'CsGoRangoGoldNova1.jpg',
        description: "Rango Gold Nova 1",
        stock: 1
    },
    {
        id: 17,
        title: "Gold Nova 2",
        category: "csgo",
        price: 3100,
        image: 'CsGoRangoGoldNova2.jpg',
        description: "Rango Gold Nova 2",
        stock: 1
    },
    {
        id: 18,
        title: "Gold Nova 3",
        category: "csgo",
        price: 3200,
        image: 'CsGoRangoGoldNova3.jpg',
        description: "Rango Gold Nova 3",
        stock: 1
    },
    {
        id: 19,
        title: "Gold Nova 4",
        category: "csgo",
        price: 3300,
        image: 'CsGoRangoGoldNova4.jpg',
        description: "Rango Gold Nova 4",
        stock: 3
    },
    {
        id: 20,
        title: "Master Guardian 1",
        category: "csgo",
        price: 4000,
        image: 'CsGoRangoMasterGuardian1.jpg',
        description: "Rango Master Guardian 1",
        stock: 1
    },
    {
        id: 21,
        title: "Master Guardian 2",
        category: "csgo",
        price: 4500,
        image: 'CsGoRangoMasterGuardian2.jpg',
        description: "Rango Master Guardian 2",
        stock: 1
    },
    {
        id: 22,
        title: "Master Guardian Elite",
        category: "csgo",
        price: 5000,
        image: 'CsGoRangoMasterGuardianElite.jpg',
        description: "Rango Master Guardian Elite",
        stock: 1
    },
    {
        id: 23,
        title: "Distinguished Master Guardian",
        category: "csgo",
        price: 6000,
        image: 'CsGoRangoDistinguishedMasterGuardian.jpg',
        description: "Rango Distinguished Master Guardian",
        stock: 1
    },
    {
        id: 24,
        title: "Legendary Eagle",
        category: "csgo",
        price: 7500,
        image: 'CsGoRangoLegendaryEagle.jpg',
        description: "Rango Legendary Eagle",
        stock: 1
    },
    {
        id: 25,
        title: "Legendary Eagle Master",
        category: "csgo",
        price: 9000,
        image: 'CsGoRangoLegendaryEagleMaster.jpg',
        description: "Rango Legendary Eagle Master",
        stock: 1
    },
    {
        id: 26,
        title: "Supreme Master First Class",
        category: "csgo",
        price: 12000,
        image: 'CsGoRangoSupremeMasterFirstClass.jpg',
        description: "Rango Supreme Master First Class",
        stock: 1
    },
    {
        id: 27,
        title: "The Global Elite",
        category: "csgo",
        price: 16000,
        image: 'CsGoRangoTheGlobalElite.jpg',
        description: "Rango Global Elite",
        stock: 1
    },
    {
        id: 28,
        title: "Hierro",
        category: "valorant",
        price: 2000,
        image: 'ValorantRangoHierro3.jpg',
        description: "Liga Hierro",
        stock: 3
    },
    {
        id: 29,
        title: "Bronce",
        category: "valorant",
        price: 2500,
        image: 'ValorantRangoBronce3.jpg',
        description: "Liga Bronce",
        stock: 3
    },
    {
        id: 30,
        title: "Plata",
        category: "valorant",
        price: 3500,
        image: 'ValorantRangoPlata3.jpg',
        description: "Liga Plata",
        stock: 3
    },
    {
        id: 31,
        title: "Oro",
        category: "valorant",
        price: 4500,
        image: 'ValorantRangoOro3.jpg',
        description: "Liga Oro",
        stock: 3
    },
    {
        id: 32,
        title: "Platino",
        category: "valorant",
        price: 5500,
        image: 'ValorantRangoPlatino3.jpg',
        description: "Liga Platino",
        stock: 3
    },
    {
        id: 33,
        title: "Diamante",
        category: "valorant",
        price: 7500,
        image: 'ValorantRangoDiamante3.jpg',
        description: "Liga Diamante",
        stock: 3
    },
    {
        id: 34,
        title: "Ascendente",
        category: "valorant",
        price: 10000,
        image: 'ValorantRangoAscendente3.jpg',
        description: "Liga Ascendente",
        stock: 3
    },
    {
        id: 35,
        title: "Inmortal",
        category: "valorant",
        price: 16000,
        image: 'ValorantRangoInmortal3.jpg',
        description: "Liga Inmortal",
        stock: 3
    },
    {
        id: 36,
        title: "Radiante",
        category: "valorant",
        price: 20000,
        image: 'ValorantRangoRadiante.jpg',
        description: "Liga Radiante",
        stock: 1
    }
]

export default products