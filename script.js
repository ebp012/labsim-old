

elements.anticookedmeat = {
                color: ["#AE7D5B","#9B6D54","#7E4D31"],
                behavior: behaviors.AGPOWDER,
                tempHigh: 150,
                stateHigh: "antiash",
                category:"antimatter",
                hidden:true,
                burn:25,
                burnTime:200,
                burnInto: "antiash",
                state: "solid",
                density: 1005,
            },
            elements.antifrozenmeat = {
                color: "#65b8aa",
                behavior: behaviors.AGPOWDER,
                temp: -18,
                tempHigh: 0,
                stateHigh: "antimeat",
                category:"antimatter",
                hidden:true,
                state: "solid",
                density: 1067.5,
       },
            elements.antichocolate = {
                color: "#4d2818",
                behavior: behaviors.AGPOWDER,
                tempHigh: 31,
                stateHigh: "chocolate_syrup",
                category: "antimatter",
                state: "solid",
                density: 1325,
            },
elements.sodawater = {
                color: "#BAD5FF",
                behavior: behaviors.LIQUID,
                tempHigh: 105,
                stateHigh: ["steam","baking_soda"],
                tempLow: -5,
                stateLow: ["ice","baking_soda"],
                viscosity: 5,
                category: "liquids",
                reactions: {
                    "dirt": { "elem1": null, "elem2": "mud" },
                    "sand": { "elem1": null, "elem2": "wet_sand", },
                    "dust": { "elem1": "dirty_water", "elem2": null, },
                    "ash": { "elem1": "dirty_water", "elem2": null, },
                    "carbon_dioxide": { "elem1": "water", "elem2": null, },
                    "sulfur": { "elem1": "dirty_water", "elem2": null, },
                    "charcoal": { "elem1": "dirty_water", chance:0.005 },
                    "rat": { "elem1": "dirty_water", chance:0.005 },
                    "plague": { "elem1": "dirty_water", "elem2": null, },
                    "fallout": { "elem1": "dirty_water", chance:0.25 },
                    "radiation": { "elem1": "dirty_water", chance:0.25 },
                    "rust": { "elem1": "dirty_water", chance:0.005 },
                    "rock": { "elem2": "wet_sand", "chance": 0.0004 },
                },
                hidden: false,
                state: "liquid",
                density: 1026,
                conduct: 0.05,
                stain: -0.45,
            },
	elements.antisodawater = {
                color: "#BAD5FF",
                behavior: behaviors.AGLIQUID,
                tempHigh: 105,
                stateHigh: ["antisteam","antibakingsoda"],
                tempLow: -5,
                stateLow: ["antiice","antibakingsoda"],
                viscosity: 5,
                category: "antimatter",
                reactions: {
                    //"dirt": { "elem1": null, "elem2": "mud" },
                    //"sand": { "elem1": null, "elem2": "wet_sand", },
                    "antidust": { "elem1": "dirty_water", "elem2": null, },
                    "antish": { "elem1": "dirty_water", "elem2": null, },
                    //"carbon_dioxide": { "elem1": "water", "elem2": null, },
                    //"sulfur": { "elem1": "dirty_water", "elem2": null, },
                    //"charcoal": { "elem1": "dirty_water", chance:0.005 },
                    //"rat": { "elem1": "dirty_water", chance:0.005 },
                    //"plague": { "elem1": "dirty_water", "elem2": null, },
                    //"fallout": { "elem1": "dirty_water", chance:0.25 },
                    //"radiation": { "elem1": "dirty_water", chance:0.25 },
                    //"rust": { "elem1": "dirty_water", chance:0.005 },
                    "antibasalt": { "elem2": "antigravel", "chance": 0.0004 },
                },
                hidden: false,
                state: "liquid",
                density: 1026,
                conduct: 0.05,
                stain: -0.45,
            },
elements.antimeat = {
                color: ["#9E4839","#BA6449","#D2856C","#A14940"],
                behavior: behaviors.AGMEAT,
                tempHigh: 80,
                stateHigh: "anticookedmeat",
                tempLow: -18,
                stateLow: "antifrozenmeat",
                category:"antimatter",
                burn:25,
                burnTime:200,
                burnInto:"cooked_meat",
                state: "solid",
                density: 1019.5,
                conduct: 0.2,
            },
            elements.antirottenmeat = {
                color: ["#9ab865","#b8b165","#b89765"],
                behavior: behaviors.AGMEAT,
                tempHigh: 120,
                stateHigh: "plague",
                category:"antimatter",
                hidden: true,
                burn:25,
                burnTime:200,
                burnInto:"plague",
                state: "solid",
                density: 1005,
                conduct: 0.1,
            },

	
elements.anticellulose = {
                color: "#c7d4c9",
                behavior: behaviors.AGLIQUID,
                tempHigh: 124,
                stateHigh: "antisteam",
                burn: 35,
                burnTime: 300,
                category: "antimatter",
                state: "solid",
                density: 65,
                viscosity: 2500,
            },

elements.antiblood = {
                color: "#ff0000",
                behavior: behaviors.AGLIQUID,
                reactions: {
                    "vaccine": { "elem1":"antibody", "elem2":null },
                    "plague": { "elem1":"infection", "elem2":null },
                    "virus": { "elem1":"infection", "elem2":null },
                    "cancer": { "elem1":"infection" },
                    "cyanide": { "elem1":"infection", "elem2":null },
                    "mushroom_spore": { "elem1":"infection", "elem2":null },
                    "dirty_water": { "elem1":"infection", "elem2":null },
                    "rust": { "elem1":"infection", "chance":0.05 },
                    "oxidized_copper": { "elem1":"infection", "chance":0.05 },
                    "rat": { "elem1":"infection", "chance":0.075 },
                    "flea": { "elem1":"infection", "chance":0.03 },
                    "dirt": { "elem2":"mud" },
                    "sand": { "elem2":"wet_sand" },
                },
                viscosity: 10,
                tempHigh: 124.55,
                stateHigh: ["antisteam","antisalt","antioxygen"],
                category:"antimatter",
                state: "liquid",
                density: 1060,
                stain: 0.05,
            },
	
elements.antipaper = {
                color: "#f0f0f0",
                behavior: behaviors.AGPOWDER,
                reactions: {
                    "water": { "elem1":"cellulose", "elem2":null },
                    "dirty_water": { "elem1":"cellulose", "elem2":null },
                    "salt_water": { "elem1":"cellulose", "elem2":null },
                    "sugar_water": { "elem1":"cellulose", "elem2":null },
                    "seltzer": { "elem1":"cellulose", "elem2":null },
                    "soda": { "elem1":"cellulose", "elem2":null },
                    "blood": { "elem1":"cellulose", "elem2":null },
                    "foam": { "elem1":"cellulose", "elem2":null },
                    "bubble": { "elem1":"cellulose", "elem2":null },
                    "oil": { "elem1":"cellulose", "elem2":null },
                    "alcohol": { "elem1":"cellulose", "elem2":null },
                    "vinegar": { "elem1":"cellulose", "elem2":null },
                },
                tempHigh: 248,
                stateHigh: "fire",
                burn: 70,
                burnTime: 300,
                category: "antimatter",
                state: "solid",
                density: 1201,
            },



elements.soup = {
    color: "#846851",
    behavior: behaviors.LIQUID,
    category: "liquids",
    viscosity: 74000,
    state: "liquid",
    density: 720,
		reactions: {
                    "antisoup": { "elem1": "fire", "elem2": "blackHole", "elem3": "antifire" },
                },
};

elements.antisoup = {
                color: "#846851",
                behavior: behaviors.AGLIQUID,
                category:"antimatter",
                tempHigh: 100,
								ignore: ["antimatter_bomb"],
                state: "liquid",
								stateHigh: "antisteam",
								tempLow: 20,
								stateLow: "antifrozensoup",
                density: 720,
								viscosity: 74000,
								reactions: {
                    "soup": { "elem1": "fire", "elem2": "blackHole", "elem3": "antifire" },
                },
            },





elements.antiash = {
                color: ["#8c8c8c","#9c9c9c"],
                behavior: behaviors.AGPOWDER,
                reactions: {
                    "steam": { "elem1": "pyrocumulus", "chance":0.08, "y":[0,15] },
                    "rain_cloud": { "elem1": "pyrocumulus", "chance":0.08, "y":[0,15] },
                    "snow_cloud": { "elem1": "pyrocumulus", "chance":0.08, "y":[0,15] },
                    "hail_cloud": { "elem1": "pyrocumulus", "chance":0.08, "y":[0,15] },
                    "acid_cloud": { "elem1": "pyrocumulus", "chance":0.05, "y":[0,15] },
                    "pyrocumulus": { "elem1": "pyrocumulus", "chance":0.08, "y":[0,15] },
                },
                category:"antimatter",
                state: "solid",
                density: 700,
								tempHigh: 1000,
								stateHigh: "antimagma"
            },

elements.antibakingsoda = {
                color: "#ededed",
                behavior: behaviors.AGPOWDER,
                category: "antimatter",
                state: "solid",
                density: 1000,
            },

elements.antivinegar = {
                color: "#ffecb3",
                behavior: behaviors.AGLIQUID,
                reactions: {
                    "milk": { "elem1": null, "elem2": "cheese" },
                    "baking_soda": { "elem1": "sodium_acetate", "elem2": "carbon_dioxide" },
                    "rust": { "elem2":"iron", chance:0.05 },
                    "oxidized_copper": { "elem2":"copper", chance:0.05 },
                },
                viscosity: 12,
                tempHigh: 100.6,
                stateHigh: "steam",
                category: "antimatter",
                state: "liquid",
                density: 1006,
                stain: -0.8,
            },

elements.antisodiumacetate = {
                color: ["#ededed","#dbdbdb"],
                behavior: behaviors.AGPOWDER,
                hidden: true,
                state: "solid",
                density: 900,
                category: "antimatter",
            },

elements.antimilk = {
                color: "#fafafa",
                behavior: behaviors.AGLIQUID,
                tempHigh: 93,
                stateHigh: "yogurt",
                viscosity: 1.5,
                category: "antimatter",
                state: "liquid",
                density: 1036.86,
            },

elements.antiudder = {
                color: "#ecb3f5",
                behavior: [
                    "XX|CR:antimilk%2.5|XX",
                    "XX|XX|XX",
                    "XX|XX|XX",
                ],
                tempHigh: 80,
                stateHigh: "anticookedmeat",
                tempLow: -18,
                stateLow: "antifrozenmeat",
                category:"antimatter",
            },

	
elements.antiraincloud = {
                color: "#636b78",
                behavior: [
                    "XX|CR:antiwater|XX",
                    "XX|XX|XX",
                    "CR:positric%0.05|CR:positric%0.05|CR:positric%0.05",
                ],
                category:"antimatter",
                temp: 80,
                tempLow: 0,
                stateLow: "antiwater",
                state: "gas",
                density: 0.5,
                conduct: 0.03,
            },

elements.antisugaryraincloud = {
                color: "#9EF3FF",
                behavior: [
                    "XX|CR:antisugarwater%2.5|XX",
                    "XX|XX|XX",
                    "XX|XX|XX",
                ],

                tempLow: 0,
								state: "gas",
                stateLow: ["antiwater", "antisugar"],
                category:"antimatter",
            },
	/*elements.antisaltyraincloud = {
                color: "#BSDFFF",
                behavior: [
                    "XX|CR:antisaltwater%2.5|XX",
                    "XX|XX|XX",
                    "XX|XX|XX",
                ],
                tempLow: 0,
								state: "gas",
                stateLow: ["antiwater","antisalt"],
                category:"antilife",
            },
elements.antisodaraincloud = {
                color: "#B2CAFF",
                behavior: [
                    "XX|CR:antisodawater%2.5|XX",
                    "XX|XX|XX",
                    "XX|XX|XX",
                ],
                tempLow: 0,
								state: "gas",
                stateLow: ["antiwater","antibakingsoda"],
                category:"antilife",
            },*/
	
elements.antimagmacloud = {
                color: "#ffa500",
                behavior: [
                    "XX|CR:antimagma%2.5|XX",
                    "XX|XX|XX",
                    "XX|XX|XX",
                ],
                tempLow: 1200,
								state: "gas",
                stateLow: "antibasalt",
								temp: 1250,
                category:"antimatter",
            },
	elements.antichocolatecloud = {
                color: "#946b00",
                behavior: [
                    "XX|CR:antichocolate%2.5|XX",
                    "XX|XX|XX",
                    "XX|XX|XX",
                ],
                tempHigh: 80,
                stateHigh: "anticookedmeat",
                tempLow: -18,
								state: "gas",
                stateLow: "antifrozenmeat",
                category:"antimatter",
            },

	elements.invinciblespout = {
                color: "#636b78",
                behavior: [
                    "XX|XX|XX",
                    "M1%5|CH:water%0.05|M1%5",
                    "CR:electric%0.05|CR:electric%0.05|CR:electric%0.05",
                ],
                category:"special",
                temp: 80,
                tempLow: 0,
                stateLow: "spout",
                state: "solid",
                density: 0.5,
                conduct: 0.03,
            },

	elements.antifirecloud = {
                color: ["#332424","#473431","#473931"],
                behavior: [
                    "XX|XX|XX",
                    "M1%5|CH:antifire%0.02|M1%5",
                    "XX|XX|XX",
                ],
                reactions: {
                    "rain_cloud": { "elem1": "pyrocumulus", "elem2": "pyrocumulus" },
                    "snow_cloud": { "elem1": "pyrocumulus", "elem2": "rain_cloud" },
                    "hail_cloud": { "elem1": "pyrocumulus", "elem2": "snow_cloud" },
                    "acid_cloud": { "elem1": "fire", "elem2": "electric" },
                },
                temp: 500,
                tempLow: 100,
                stateLow: "pyrocumulus",
                category:"antimatter",
                state: "gas",
                density: 0.59,
            },
elements.antiyoghurt = {
                color: "#f0efe6",
                behavior: behaviors.AGPOWDER,
                category: "antimatter",
                state: "liquid",
                density: 820.33,
            },

elements.antiyoghurtcloud = {
                color: "#ffffe7",
                behavior: [
                    "XX|CR:antiyoghurt%2.5|XX",
                    "XX|XX|XX",
                    "XX|XX|XX",
                ],
                tempLow: -18,
								state: "gas",
                stateLow: "antimilk",
                category:"antimatter",
            },

	
/*elements.antisolidvibranium = {
                color: "#000000",
                behavior: behaviors.AGLIQUID,
                category:"antisupernatural",
								ignore: ["antimatter_bomb"],
								viscosity: 15300,
						    state: "solid",
						    burn: 10,
						    burnTime: 1,
						    fireColor: "#FFFFFF",
						    density: 10000000,
								reactions: {
                    "moltenvibranium": { "elem1": "antifire", "elem2": "fire" },
                },
            },*/
elements.antifrozensoup = {
                color: "#846851",
                behavior: behaviors.SOLID,
                category:"antimatter",
                tempHigh: 100,
								temp: 15,
								stateHigh: "antisoup",
								ignore: ["antimatter_bomb"],
                state: "solid",
                density: 720,
								viscosity: 74000,
            },

elements.antigold = {
                color: ["#FFF0B5","#986A1A","#F0BB62"],
								reactions: {
                    "gold": { "elem1": "blackhole", "elem2": "null" },
                },
                behavior: behaviors.AGWALL,
                tempHigh: 1064,
                category: "antimatter",
                density: 19300,
                conduct: 0.81,
            },
	
elements.tar = {
    color: "#101217",
    behavior: behaviors.LIQUID,
    category: "liquids",
		reactions: {
                    "antitar": {	"elem1": "fire", "elem2": "antifire" },
                },
    viscosity: 45000,
    state: "liquid",
    burn: 10,
    burnTime: 200,
    fireColor: "#101217",
    density: 1
};
elements.antitar = {
    color: "#101217",
    behavior: behaviors.AGLIQUID,
    category: "antimatter",
		reactions: {
                    "tar": {	"elem1": "blackHole" },
                },
    viscosity: 45000,
    state: "liquid",
    burn: 10,
    burnTime: 200,
    fireColor: "#101217",
    density: 1
		
};

elements.antimolteniron = {
	behavior: behaviors.AGLIQUID,
	category: "antimatter",
                reactions: {
                    "charcoal": { "elem1": "antifire", "elem2": "null" },
                    "diamond": { "elem1": "antifire", "elem2": null },
                    "carbon_dioxide": { "elem1": "antifire", "elem2": null },
                },
	temp: 1800
            },

elements.antijuice = {
                color: "#F0BF3D",
                behavior: behaviors.AGLIQUID,
                tempHigh: 160,
                stateHigh: ["antisteam","antisugar"],
                category: "antimatter",
                state: "liquid",
                density: 1054,
	tempLow: -10,
                stain: 0.05,
            },
elements.antisugar = {
                color: "#f2f2f2",
                behavior: behaviors.AGPOWDER,
                category: "antimatter",
                tempHigh: 186,
                stateHigh: "caramel",
                state: "solid",
                density: 1590,
            },
elements.antibasalt = {
                color: ["#2e2e2e","#333333","#3d3d3d"],
                behavior: behaviors.AGPOWDER,
                tempHigh: 1262.5,
                stateHigh: "antimagma",
                category: "antimatter",
                state: "solid",
                density: 3000,
                hardness: 0.65,
                breakInto: "antigravel",
            },

elements.antigravel = {
                color: ["#E3E0DF","#B1ABA3","#74736D","#524B47"],
                behavior: behaviors.AGPOWDER,
                category:"antimatter",
                tempHigh: 950,
                stateHigh: "antimagma",
                state: "solid",
                density: 1680,
                hardness: 0.2,
            },
	elements.antirust = {
                color: ["#AE551C","#BC6E39","#925F49"],
                behavior: behaviors.AGPOWDER,
                tempHigh: 1538,
                stateHigh: "molten_iron",
                category: "solids",
                state: "solid",
                density: 5250,
                conduct: 0.37,
            },

elements.antisugarwater = {
                color: "#8eaae6",
                behavior: behaviors.AGLIQUID,
                tempHigh: 105,
                stateHigh: ["antisteam","antisugar"],
                tempLow: -5,
                stateLow: "ice",
                viscosity: 5,
                category: "antimatter",
                reactions: {
                    "dirt": { "elem1": null, "elem2": "fire" },
                    "antisand": { "elem1": null, "elem2": "wet_sand", },
                    "antidust": { "elem1": "antidirtywater", "elem2": null, },
                    "antish": { "elem1": "antidirtywater", "elem2": null, },
                    "carbon_dioxide": { "elem1": "soda", "elem2": null, },
                    "sulfur": { "elem1": "antidirtywater", "elem2": null, },
                    "charcoal": { "elem1": "antidirtywater", chance:0.005 },
                    "rat": { "elem1": "antidirtywater", chance:0.005 },
                    "plague": { "elem1": "antidirtywater", "elem2": null, },
                    "fallout": { "elem1": "antidirtywater", chance:0.25 },
                    "radiation": { "elem1": "antidirtywater", chance:0.25 },
                    "antirust": { "elem1": "antidirtywater", chance:0.005 },
                    "rock": { "elem2": "wet_sand", "chance": 0.0004 },
                },
                hidden: true,
                state: "liquid",
                density: 1026,
                conduct: 0.05,
                stain: -0.45,
            },

elements.antimoltensalt = {
                color: "#FFAB01",
                behavior: behaviors.AGLIQUID,
                reactions: {
                    "antiwater": { "elem1":null, "elem2":"salt_water", "chance":0.25 },
                    "packed_snow": { "elem1":null, "elem2":"salt_water", "chance":0.05 },
                },
                category: "antimatter",
                tempLow: 801,
	temp: 850,
								stateLow: "antisalt",
                state: "solid",
                density: 2160,
            },
	elements.antisalt = {
                color: ["#f2f2f2","#e0e0e0"],
                behavior: behaviors.AGPOWDER,
                reactions: {
                    "antiwater": { "elem1":null, "elem2":"salt_water", "chance":0.25 },
                    "packed_snow": { "elem1":null, "elem2":"salt_water", "chance":0.05 },
                },
                category: "antimatter",
                tempHigh: 801,
								stateHigh: "antimoltensalt",
                state: "solid",
                density: 2160,
            },

elements.antibrickrubble = {
                color: ["#cb4141","#ab4d4d","#872626"],
                behavior: behaviors.AGPOWDER,
                category: "antimatter",
                tempHigh: 1540,
                stateHigh: "antimagma",
                state: "solid",
                density: 1650,
                hardness: 0.25,
                breakInto: "antidust",
                hidden: true,
            },

elements.antisawdust = {
                color: ["#dec150","#c7b15a"],
                behavior: behaviors.AGPOWDER,
                tempHigh: 400,
                stateHigh: "antifire",
                category: "antimatter",
                burn: 25,
                burnTime: 150,
                burnInto: ["ash","fire","fire","fire"],
                state: "solid",
                density: 393,
            },

elements.antibonepowder = {
                color: "#d9d9d9",
                behavior: behaviors.AGPOWDER,
                category:"antimatter",
                tempHigh: 760,
                stateHigh: "anticalcium",
                state: "solid",
                density: 1900,
                hardness: 0.5,
                breakInto: "anticalcium",
            },

elements.anticalcium = {
                color: ["#515053","#7a787d","#748193","#FEF9FF","#748193","#7a787d","#515053"],
                behavior: behaviors.AGPOWDER,
                tempHigh: 842,
                category: "antimatter",
                state: "solid",
                density: 1550,
                conduct: 0.40,
            },
	
elements.antidust = {
                color: "#666666",
                behavior: behaviors.AGPOWDER,
								reactions: {
                    "dust": { "elem1": null, "elem2": "blackhole" },
                },
                category: "antimatter",
                burn: 10,
                burnTime: 1,
                state: "solid",
                density: 1490,
            },
	
elements.antisaltwater = {
                color: "#4d85ff",
                behavior: behaviors.AGLIQUID,
                tempHigh: 102,
                stateHigh: ["antisteam","antisalt"],
                tempLow: -2,
                stateLow: "ice",
                viscosity: 2,
                category: "antimatter",
                reactions: {
                    "dirt": { "elem1": null, "elem2": "mud" },
                    "sand": { "elem1": null, "elem2": "wet_sand", },
                    "antidust": { "elem1": "antidirtywater", "elem2": null, },
                    "antiash": { "elem1": "antidirtywater", "elem2": null, },
                    "anticarbondioxide": { "elem1": "antidirtywater", "elem2": null, },
                    "sulfur": { "elem1": "antidirtywater", "elem2": null, },
                    "charcoal": { "elem1": "antidirtywater", chance:0.005 },
                    "rat": { "elem1": "antidirtywater", chance:0.005 },
                    "plague": { "elem1": "antidirtywater", "elem2": null, },
                    "fallout": { "elem1": "antidirtywater", chance:0.25 },
                    "radiation": { "elem1": "antidirtywater", chance:0.25 },
                    "antirust": { "elem1": "antidirtywater", chance:0.005 },
                    "quicklime": { "elem1": null, "antidirtywater": "slaked_lime", },
                    "antibasalt": { "elem2": "wet_sand", "chance": 0.0005 },
                },
                state: "liquid",
                density: 1026,
                conduct: 0.1,
                stain: -0.66,
            },

elements.cocaine_powder = {
    color: "#FFFFFF",
    behavior: behaviors.POWDER,
    category: "powders",
    viscosity: 45000,
    state: "solid",
    burn: 10,
    burnTime: 200,
    fireColor: "#000000",
    density: 10
};

elements.cocaine_cube = {
    color: "#FFFFFF",
    behavior: behaviors.SOLID,
    category: "special",
    viscosity: 45000,
    state: "solid",
    burn: 10,
    burnTime: 200,
    fireColor: "#000000",
    density: 10
};

elements.cocaine_liquid = {
    color: "#FFFFFF",
    behavior: behaviors.LIQUID,
    category: "special",
    viscosity: 45000,
    state: "solid",
    burn: 10,
    burnTime: 200,
    fireColor: "#000000",
    density: 10
};

elements.anticocaine_liquid = {
    color: "#FFFFFF",
    behavior: behaviors.AGLIQUID,
    category: "antimatter",
    viscosity: 45000,
    state: "solid",
    burn: 10,
    burnTime: 200,
    fireColor: "#000000",
    density: 10
};

elements.cocaine_gas = {
    color: "#FFFFFE",
    behavior: behaviors.GAS,
    category: "gases",
    viscosity: 45000,
    state: "solid",
    burn: 10,
    burnTime: 200,
    fireColor: "#000000",
    density: 10
};

elements.liquidKetchup = {
    color: "#FFD700",
    behavior: behaviors.LIQUID,
    category: "liquids",
    viscosity: 45000,
    state: "liquid",
    burn: 10,
    burnTime: 200,
    fireColor: "#101217",
    density: 1
};
elements.antiliquidketchup = {
                color: "#FFD700",
                behavior: behaviors.AGLIQUID,
                category:"antimatter",
                tempHigh: 100,
								ignore: ["antimatter_bomb", "fire"],
                state: "liquid",
                density: 1,
								burn: 10,
								burnTime: 200,
								fireColor: "#101217",
								viscosity: 45000,
            },
elements.hotantiliquidketchup = {
                color: "#FFF900",
                behavior: behaviors.AGLIQUID,
                category:"molten",
                tempHigh: 100,
								ignore: ["antimatter_bomb", "fire"],
                state: "liquid",
                density: 1,
								burn: 10,
								burnTime: 200,
								fireColor: "#101217",
								viscosity: 45000,
            },
elements.hotliquidketchup = {
                color: "#FFF900",
                behavior: behaviors.LIQUID,
                category:"molten",
                tempHigh: 100,
								ignore: ["antimatter_bomb", "fire"],
                state: "liquid",
                density: 1,
								burn: 10,
								burnTime: 200,
								fireColor: "#101217",
								viscosity: 45000,
            },
elements.bromine = {
    color: "#A05729",
    behavior: behaviors.LIQUID,
    category: "liquids",
    viscosity: 94400,
    state: "liquid",
    burn: 10,
    burnTime: 200,
    fireColor: "#A05729",
    density: 1,
		reactions: {
			"water": {"elem1": "hypobromite", "elem2": "hypobromite", chance: 0.8},
		},
};
elements.hypobromite = {
    color: "#FFAE42",
    behavior: behaviors.STURDYPOWDER,
    category: "solids",
    burn: 10,
    burnTime: 200,
    fireColor: "#A05729",
    density: 1,
		reactions: {
			"water": {"elem1": "water", chance: 0.001},
		},
};

elements.mercury = {
    color: "#808080",
    behavior: behaviors.LIQUID,
    category: "liquids",
    viscosity: 15300,
    state: "liquid",
    burn: 10,
    burnTime: 200,
    fireColor: "#960B00",
    density: 1
};

elements.moltenVibranium = {
    color: "#FFFFFF",
    behavior: behaviors.LIQUID,
    category: "special",
    viscosity: 15300,
    state: "liquid",
    burn: 10,
    burnTime: 200,
    fireColor: "#FFFFFF",
    density: 10000000
};

elements.solidVibranium = {
    color: "#25282F",
    behavior: behaviors.SOLID,
    category: "special",
    viscosity: 15300,
    state: "solid",
    burn: 10,
    burnTime: 200,
    fireColor: "#25282f",
    density: 10000000
};

elements.galileium = {
    color: "#808082",
    behavior: behaviors.POWDER,
    category: "special",
    viscosity: 24100,
    state: "solid",
    burn: 10,
    burnTime: 200,
    fireColor: "#25282f",
    density: 444444
};

elements.liquidFridaythethirteenthium = {
    color: "#131313",
    behavior: behaviors.LIQUID,
    category: "special",
    viscosity: 131313,
    state: "solid",
    burn: 13,
    burnTime: 13,
    fireColor: "#130000",
    density: 1300
};

elements.solidFridaythethirteenthium = {
    color: "#131313",
    behavior: behaviors.SOLID,
    category: "special",
    viscosity: 131313,
    state: "solid",
    burn: 13,
    burnTime: 13,
    fireColor: "#130000",
    density: 1300
};

elements.gasFridaythethirteenthium = {
    color: "#131313",
    behavior: behaviors.GAS,
    category: "special",
    viscosity: 131313,
    state: "solid",
    burn: 13,
    burnTime: 13,
    fireColor: "#130000",
    density: 1300
};

elements.mathematicium = {
    color: "#123456",
    behavior: behaviors.SOLID,
    category: "special",
    viscosity: 123456,
    state: "solid",
    burn: 12,
    burnTime: 123,
    fireColor: "#123456",
    density: 1234
};

elements.liquidMathematicium = {
    color: "#123456",
    behavior: behaviors.LIQUID,
    category: "special",
    viscosity: 123456,
    state: "liquid",
    burn: 12,
    burnTime: 123,
    fireColor: "#654321",
    density: 1234
};
/*elements.antiliquidMathematicium = {
    color: "#123456",
    behavior: behaviors.AGLIQUID,
    category: "antisupernatural",
    viscosity: 123456,
    state: "liquid",
    burn: 12,
    burnTime: 123,
    fireColor: "#654321",
    density: 1234
};*/
elements.poisonedLiquidMathematicium = {
    color: "#654321",
    behavior: behaviors.LIQUID,
    category: "special",
    viscosity: 123456,
    state: "solid",
    burn: 12,
    burnTime: 123,
    fireColor: "#123456",
    density: 1234
};
/*elements.antipoisonedLiquidMathematicium = {
    color: "#654321",
    behavior: behaviors.AGLIQUID,
    category: "antisupernatural",
    viscosity: 123456,
    state: "solid",
    burn: 12,
    burnTime: 123,
    fireColor: "#123456",
    density: 1234
};*/
elements.gasMathematicium = {
    color: "#123456",
    behavior: behaviors.GAS,
    category: "special",
    viscosity: 123456,
    state: "solid",
    burn: 12,
    burnTime: 123,
    fireColor: "#123456",
    density: 1234
};

/*elements.lawrencium = {
    color: "#000000",
    behavior: behaviors.RADLIQUID,
    category: "popular",
    viscosity: 45000,
    state: "solid",
    burn: 100000000000000,
    burnTime: 10000000000,
    fireColor: "#101217",
    density: 14
};*/

elements.paste = {
    color: "#D8D4C1",
    behavior: behaviors.LIQUID,
    category: "popular",
    viscosity: 150430,
    state: "solid",
    density: 230
};
elements.antipaste = {
    color: "#D8D4C1",
    behavior: behaviors.AGLIQUID,
    category: "antimatter",
    viscosity: 150430,
    state: "solid",
    density: 230
};
elements.liquidMethane = {
    color: "#74A8AD",
    behavior: behaviors.LIQUID,
    category: "liquids",
    viscosity: 74000,
    state: "liquid",
    density: 720
};
elements.antiliquidmethane = {
    color: "#74A8AD",
    behavior: behaviors.AGLIQUID,
    category: "antimatter",
    viscosity: 74000,
    state: "liquid",
    density: 720
};
elements.antisteam = {
                color: "#abd6ff",
                behavior: behaviors.GAS,
								reactions: {
                    "antisteam": { "elem1": null, "elem2": "antiraincloud", "chance":0.3, "y":[0,15] },
                    "antiraincloud": { "elem1": "antiraincloud", "chance":0.4, "y":[0,15] },
                    "antiice": { "elem1": "antiraincloud", "chance":0.4, "y":[0,15] },
                    "steam": { "elem1": "blackHole", "chance":0.4, "y":[0,15] },
                    /*"pyrocumulus": { "elem1": "rain_cloud", "chance":0.4, "y":[0,15] },*/
                    "antifire": { "elem1": "antiraincloud", "elem2": "pyrocumulus", "chance":0.4, "y":[0,15] },
                    /*"smoke": { "elem1": "smog", "elem2": null },*/
                },
                category:"antimatter",
                tempLow: 100,
                stateLow: "antiwater",
								ignore: ["antimatter_bomb"],
                hidden: true,
                state: "gas",
                density: 0.1,
            },
elements.antioxygen = {
                color: "#99c7ff",
                behavior: behaviors.GAS,
								reactions: {
                    "copper": { "elem2":"fire", /*chance:0.05*/ },
                    "iron": { "elem2":"fire", /*chance:0.025*/ },
                    "antiwater": { "elem1":null },
										"oxygen": { "elem1":"blackHole"}
                    /*"salt_water": { "elem1":"foam" },
                    "sugar_water": { "elem1":"foam" },
                    "seltzer": { "elem1":"foam" },
                    "soda": { "elem1":"foam" },
                    "dirty_water": { "elem1":"foam" },*/
                },
                category:"antimatter",
								temp: 10,
								burn: 100,
								burnTime: 2,
								tempLow: -183.94,
								stateLow: "liquid_oxygen", //change to antiliquid_oxygen
								ignore: ["antimatter_bomb"],
                hidden: true,
                state: "gas",
                density: 1.292,
            },
elements.antiwater = {
                color: "#2167ff",
                behavior: behaviors.AGLIQUID,
								reactions: {
                    "water": { "elem1":"blackHole" },
                },
                category:"antimatter",
                tempHigh: 100,
								tempLow: 32,
                stateHigh: "antisteam",
								ignore: ["antimatter_bomb"],
								stateLow: "antiice",
                state: "liquid",
                density: 1000,
								viscosity: 1,
            },
elements.antimagma = {
                color: ["#ff6f00","#ff8c00","#ff4d00"],
                behavior: behaviors.AGPOWDER,
                category:"antimatter",
								reactions: {
                    "blackHole": { "elem1": "blackHole" },
                },
                tempLow: 800,
								tempHigh: 4000,
								temp: 1200,
								ignore: ["antimatter_bomb"],
								stateLow: "antibasalt",
                state: "liquid",
                density: 1000,
								viscosity: 1,
            },
elements.antiice = {
                color: "#c5e9f0",
                behavior: [
                    "M2|DB%50 AND M2 AND EX:8|M2",
                    "M1|XX|M1",
                    "M1|DB%50 AND M1 AND EX:8|M1",
                ],
                ignore: ["antimatter_bomb"],
                category: "antimatter",
                state: "solid",
								stateHigh: "antiwater",
								tempHigh: 0,
                density: 917,
            },


/* Fandomium.fandom.com */

elements.newtonium = {
    color: "#ABC2FF",
    behavior: behaviors.LIQUID,
    category: "liquids",
    viscosity: 150430,
    state: "liquid",
    density: 231
};
elements.antinewtonium = {
    color: "#ABC2FF",
    behavior: behaviors.AGLIQUID,
    category: "antimatter",
    viscosity: 150430,
    state: "liquid",
    density: 231
};
/*elements.galileium = {
    color: "#808081",
    behavior: behaviors.SOLID,
    category: "special",
    state: "solid",
    density: 690
};
elements.antigalileium = {
    color: "#808081",
    behavior: behaviors.AGPOWDER,
    category: "antisupernatural",
    state: "solid",
    density: 690
};
elements.lavoisium = {
    color: "#FBCEB1",
    behavior: behaviors.SOLID,
    category: "special",
    state: "solid",
    density: 1296
};
elements.antilavoisium = {
    color: "#FBCEB1",
    behavior: behaviors.AGPOWDER,
    category: "antisupernatural",
    state: "solid",
    density: 1296
};
elements.moselium = {
    color: "#8F8B66",
    behavior: behaviors.SOLID,
    category: "special",
    state: "solid",
    density: 1857
};
elements.antimoselium = {
    color: "#8F8B66",
    behavior: behaviors.AGPOWDER,
    category: "antisupernatural",
    state: "solid",
    density: 1857
};
elements.teslium = {
    color: "#D3D3D3",
    behavior: behaviors.SOLID,
    category: "special",
    state: "solid",
    density: 1913
};*/

elements.infinitium = {
    color: "#ABCDEF",
    behavior: behaviors.SOLID,
    category: "special",
		ignore: ["antimatter_bomb"],
    state: "solid",
    density: 10**100
};
/*
elements.antiInfinitium = {
    color: "#ABCDEF",
    behavior: behaviors.AGPOWDER,
    category: "antisupernatural",
    state: "solid",
    density: 10**100
};
*/
elements.blackHole = {
		color: ['#0f0f0f', '#030303', '#242121', '262626'],
		behavior: behaviors.DELETE,
		hardness: 1,
		ignore: ["void"],
		category: 'special',
};
elements.whiteHole = {
		color: "#ffffff",
		behavior: [
                    "XX|CR:random|XX",
                    "CR:random|XX|CR:random",
                    "XX|CR:random|XX",
                ],
		hardness: 1,
		category: 'special',
};
elements.blue_giant = {
		color: "#add8e6",
		behavior: [
                    "CR:bluelight|CR:bluelight|CR:bluelight",
                    "CR:bluelight|XX|CR:bluelight",
                    "CR:bluelight|CR:bluelight|CR:bluelight",
                ],
		hardness: 50,
		temp: 29726,
		category: 'special',
};
elements.bluelight = {
                color: "#bdd8e6",
								name: "BlueGiantLight",
                behavior: [
                    "XX|XX|XX",
                    "XX|DL%2|XX",
                    "XX|XX|XX",
                ],
                tick: function(pixel) {
                    if (pixel.vx===undefined) {
                        // choose 1, 0, or -1
                        pixel.vx = Math.random() < 0.5 ? 1 : Math.random() < 0.5 ? 0 : -1;
                        pixel.vy = Math.random() < 0.5 ? 1 : Math.random() < 0.5 ? 0 : -1;
                        // if both are 0, make one of them 1 or -1
                        if (pixel.vx===0 && pixel.vy===0) {
                            if (Math.random() < 0.5) { pixel.vx = Math.random() < 0.5 ? 1 : -1; }
                            else { pixel.vy = Math.random() < 0.5 ? 1 : -1; }
                        }
                    }
                    // move and invert direction if hit
                    if (pixel.vx && !tryMove(pixel, pixel.x+pixel.vx, pixel.y)) { pixel.vx = -pixel.vx; }
                    if (pixel.vy && !tryMove(pixel, pixel.x, pixel.y+pixel.vy)) { pixel.vy = -pixel.vy; }
                },
                reactions: {
                    "glass": { "color1":["#ff0000","#ff8800","#ffff00","#00ff00","#00ffff","#0000ff","#ff00ff"] }
                },
                temp: 25000,
								category: "special",
								breakInto: ["positron", "photon"],
                state: "gas",
                density: 0.00001,
            },
elements.red_dwarf = {
		color: "#ff5349",
		behavior: [
                    "XX|XX|XX",
                    "CR:redlight|XX|CR:redlight",
                    "XX|CR:infraredlight|XX",
                ],
		hardness: 25,
		temp: 3627,
		category: 'special',
};
elements.white_dwarf = {
		color: "#ffffff",
		//Turns into black dwarf after a trillion years
		behavior: [
                    "XX|XX|XX",
                    "CR:whiteLight|RP:black_dwarf%0.000000000000001|CR:whiteLight",
                    "XX|CR:whiteLight|XX",
                ],
		hardness: 48,
		temp: 7726,
		breakInto: ["helium", "oxygen", "carbon", "neon"],
		category: 'special',
};
elements.black_dwarf = {
		color: "#000000",
		behavior: behaviors.STURDYPOWDER,
		hardness: 45,
		breakInto: ["helium", "oxygen", "carbon", "neon"],
		temp: -273,
		category: 'special',
};
elements.redlight = {
                color: "#df5349",
								name: "RedStarlight",
                behavior: [
                    "XX|XX|XX",
                    "XX|DL%2|XX",
                    "XX|XX|XX",
                ],
                tick: function(pixel) {
                    if (pixel.vx===undefined) {
                        // choose 1, 0, or -1
                        pixel.vx = Math.random() < 0.5 ? 1 : Math.random() < 0.5 ? 0 : -1;
                        pixel.vy = Math.random() < 0.5 ? 1 : Math.random() < 0.5 ? 0 : -1;
                        // if both are 0, make one of them 1 or -1
                        if (pixel.vx===0 && pixel.vy===0) {
                            if (Math.random() < 0.5) { pixel.vx = Math.random() < 0.5 ? 1 : -1; }
                            else { pixel.vy = Math.random() < 0.5 ? 1 : -1; }
                        }
                    }
                    // move and invert direction if hit
                    if (pixel.vx && !tryMove(pixel, pixel.x+pixel.vx, pixel.y)) { pixel.vx = -pixel.vx; }
                    if (pixel.vy && !tryMove(pixel, pixel.x, pixel.y+pixel.vy)) { pixel.vy = -pixel.vy; }
                },
                reactions: {
                    "glass": { "color1":["#ff0000","#ff8800","#ffff00","#00ff00","#00ffff","#0000ff","#ff00ff"] }
                },
                temp: 3500,
								category: "special",
								breakInto: ["positron", "photon"],
                state: "gas",
                density: 0.00001,
            },
elements.whiteLight = {
                color: "#ffffff",
								name: "WhiteStarLight",
                behavior: [
                    "XX|XX|XX",
                    "XX|DL%2|XX",
                    "XX|XX|XX",
                ],
                tick: function(pixel) {
                    if (pixel.vx===undefined) {
                        // choose 1, 0, or -1
                        pixel.vx = Math.random() < 0.5 ? 1 : Math.random() < 0.5 ? 0 : -1;
                        pixel.vy = Math.random() < 0.5 ? 1 : Math.random() < 0.5 ? 0 : -1;
                        // if both are 0, make one of them 1 or -1
                        if (pixel.vx===0 && pixel.vy===0) {
                            if (Math.random() < 0.5) { pixel.vx = Math.random() < 0.5 ? 1 : -1; }
                            else { pixel.vy = Math.random() < 0.5 ? 1 : -1; }
                        }
                    }
                    // move and invert direction if hit
                    if (pixel.vx && !tryMove(pixel, pixel.x+pixel.vx, pixel.y)) { pixel.vx = -pixel.vx; }
                    if (pixel.vy && !tryMove(pixel, pixel.x, pixel.y+pixel.vy)) { pixel.vy = -pixel.vy; }
                },
                reactions: {
                    "glass": { "color1":["#ff0000","#ff8800","#ffff00","#00ff00","#00ffff","#0000ff","#ff00ff"] }
                },
                temp: 3500,
								category: "special",
								breakInto: ["positron", "photon"],
                state: "gas",
                density: 0.00001,
            },
elements.infraredlight = {
                color: "#000000",
								name: "InfraredLight",
                behavior: [
                    "XX|XX|XX",
                    "XX|DL%2|XX",
                    "XX|XX|XX",
                ],
                tick: function(pixel) {
                    if (pixel.vx===undefined) {
                        // choose 1, 0, or -1
                        pixel.vx = Math.random() < 0.5 ? 1 : Math.random() < 0.5 ? 0 : -1;
                        pixel.vy = Math.random() < 0.5 ? 1 : Math.random() < 0.5 ? 0 : -1;
                        // if both are 0, make one of them 1 or -1
                        if (pixel.vx===0 && pixel.vy===0) {
                            if (Math.random() < 0.5) { pixel.vx = Math.random() < 0.5 ? 1 : -1; }
                            else { pixel.vy = Math.random() < 0.5 ? 1 : -1; }
                        }
                    }
                    // move and invert direction if hit
                    if (pixel.vx && !tryMove(pixel, pixel.x+pixel.vx, pixel.y)) { pixel.vx = -pixel.vx; }
                    if (pixel.vy && !tryMove(pixel, pixel.x, pixel.y+pixel.vy)) { pixel.vy = -pixel.vy; }
                },
                reactions: {
                    "glass": { "color1":["#ff0000","#ff8800","#ffff00","#00ff00","#00ffff","#0000ff","#ff00ff"] }
                },
								category: "energy",
                state: "gas",
                density: 0.00001,
            },
elements.microwave_light = {
                color: "#000000",
								name: "microwave",
                behavior: [
                    "XX|XX|XX",
                    "XX|DL%2|XX",
                    "XX|CR:heat|XX",
                ],
                tick: function(pixel) {
                    if (pixel.vx===undefined) {
                        // choose 1, 0, or -1
                        pixel.vx = Math.random() < 0.5 ? 1 : Math.random() < 0.5 ? 0 : -1;
                        pixel.vy = Math.random() < 0.5 ? 1 : Math.random() < 0.5 ? 0 : -1;
                        // if both are 0, make one of them 1 or -1
                        if (pixel.vx===0 && pixel.vy===0) {
                            if (Math.random() < 0.5) { pixel.vx = Math.random() < 0.5 ? 1 : -1; }
                            else { pixel.vy = Math.random() < 0.5 ? 1 : -1; }
                        }
                    }
                    // move and invert direction if hit
                    if (pixel.vx && !tryMove(pixel, pixel.x+pixel.vx, pixel.y)) { pixel.vx = -pixel.vx; }
                    if (pixel.vy && !tryMove(pixel, pixel.x, pixel.y+pixel.vy)) { pixel.vy = -pixel.vy; }
                },
                reactions: {
                    "glass": { "color1":["#ff0000","#ff8800","#ffff00","#00ff00","#00ffff","#0000ff","#ff00ff"] },
										"grape": { "elem1":"plasma" }
                },
								category: "energy",
                state: "gas",
                density: 0.00001,
            },
elements.radio_light = {
                color: "#000000",
								name: "radio wave",
                behavior: [
                    "XX|XX|XX",
                    "XX|DL%2|XX",
                    "XX|XX|XX",
                ],
                tick: function(pixel) {
                    if (pixel.vx===undefined) {
                        // choose 1, 0, or -1
                        pixel.vx = Math.random() < 0.5 ? 1 : Math.random() < 0.5 ? 0 : -1;
                        pixel.vy = Math.random() < 0.5 ? 1 : Math.random() < 0.5 ? 0 : -1;
                        // if both are 0, make one of them 1 or -1
                        if (pixel.vx===0 && pixel.vy===0) {
                            if (Math.random() < 0.5) { pixel.vx = Math.random() < 0.5 ? 1 : -1; }
                            else { pixel.vy = Math.random() < 0.5 ? 1 : -1; }
                        }
                    }
                    // move and invert direction if hit
                    if (pixel.vx && !tryMove(pixel, pixel.x+pixel.vx, pixel.y)) { pixel.vx = -pixel.vx; }
                    if (pixel.vy && !tryMove(pixel, pixel.x, pixel.y+pixel.vy)) { pixel.vy = -pixel.vy; }
                },
                reactions: {
                    "glass": { "color1":["#ff0000","#ff8800","#ffff00","#00ff00","#00ffff","#0000ff","#ff00ff"] }
                },
								category: "energy",
                state: "gas",
                density: 0.00001,
            },
elements.ultraviolet_light = {
                color: "#000000",
								name: "Ultraviolet Light",
                behavior: [
                    "XX|XX|XX",
                    "XX|DL%2|XX",
                    "XX|XX|XX",
                ],
                tick: function(pixel) {
                    if (pixel.vx===undefined) {
                        // choose 1, 0, or -1
                        pixel.vx = Math.random() < 0.5 ? 1 : Math.random() < 0.5 ? 0 : -1;
                        pixel.vy = Math.random() < 0.5 ? 1 : Math.random() < 0.5 ? 0 : -1;
                        // if both are 0, make one of them 1 or -1
                        if (pixel.vx===0 && pixel.vy===0) {
                            if (Math.random() < 0.5) { pixel.vx = Math.random() < 0.5 ? 1 : -1; }
                            else { pixel.vy = Math.random() < 0.5 ? 1 : -1; }
                        }
                    }
                    // move and invert direction if hit
                    if (pixel.vx && !tryMove(pixel, pixel.x+pixel.vx, pixel.y)) { pixel.vx = -pixel.vx; }
                    if (pixel.vy && !tryMove(pixel, pixel.x, pixel.y+pixel.vy)) { pixel.vy = -pixel.vy; }
                },
                reactions: {
                    "glass": { "color1":["#ff0000","#ff8800","#ffff00","#00ff00","#00ffff","#0000ff","#ff00ff"] }
                },
								category: "energy",
                state: "gas",
                density: 0.00001,
            },
	elements.xray_light = {
                color: "#000000",
								name: "X Ray",
                behavior: [
                    "XX|XX|XX",
                    "XX|DL%2|XX",
                    "XX|XX|XX",
                ],
                tick: function(pixel) {
                    if (pixel.vx===undefined) {
                        // choose 1, 0, or -1
                        pixel.vx = Math.random() < 0.5 ? 1 : Math.random() < 0.5 ? 0 : -1;
                        pixel.vy = Math.random() < 0.5 ? 1 : Math.random() < 0.5 ? 0 : -1;
                        // if both are 0, make one of them 1 or -1
                        if (pixel.vx===0 && pixel.vy===0) {
                            if (Math.random() < 0.5) { pixel.vx = Math.random() < 0.5 ? 1 : -1; }
                            else { pixel.vy = Math.random() < 0.5 ? 1 : -1; }
                        }
                    }
                    // move and invert direction if hit
                    if (pixel.vx && !tryMove(pixel, pixel.x+pixel.vx, pixel.y)) { pixel.vx = -pixel.vx; }
                    if (pixel.vy && !tryMove(pixel, pixel.x, pixel.y+pixel.vy)) { pixel.vy = -pixel.vy; }
                },
                reactions: {
                    "glass": { "color1":["#ff0000","#ff8800","#ffff00","#00ff00","#00ffff","#0000ff","#ff00ff"] },
										"human": { "elem1":"meat" }
                },
								category: "energy",
                state: "gas",
                density: 0.00001,
            },
	elements.gamma_light = {
                color: "#000000",
								name: "Gamma Ray",
                behavior: [
                    "XX|XX|XX",
                    "XX|DL%2|XX",
                    "XX|XX|XX",
                ],
                tick: function(pixel) {
                    if (pixel.vx===undefined) {
                        // choose 1, 0, or -1
                        pixel.vx = Math.random() < 0.5 ? 1 : Math.random() < 0.5 ? 0 : -1;
                        pixel.vy = Math.random() < 0.5 ? 1 : Math.random() < 0.5 ? 0 : -1;
                        // if both are 0, make one of them 1 or -1
                        if (pixel.vx===0 && pixel.vy===0) {
                            if (Math.random() < 0.5) { pixel.vx = Math.random() < 0.5 ? 1 : -1; }
                            else { pixel.vy = Math.random() < 0.5 ? 1 : -1; }
                        }
                    }
                    // move and invert direction if hit
                    if (pixel.vx && !tryMove(pixel, pixel.x+pixel.vx, pixel.y)) { pixel.vx = -pixel.vx; }
                    if (pixel.vy && !tryMove(pixel, pixel.x, pixel.y+pixel.vy)) { pixel.vy = -pixel.vy; }
                },
                reactions: {
                    "glass": { "color1":["#ff0000","#ff8800","#ffff00","#00ff00","#00ffff","#0000ff","#ff00ff"] },
										"human": { "elem1":"meat" }
                },
								category: "energy",
                state: "gas",
                density: 0.00001,
            },
eLists.CYROGENIC = ["liquidMethane"];
// behaviors
behaviors.POISONED_LIQUID = [
    "XX|DL:"+eLists.ANIMAL+"|XX",
    "DL:"+eLists.ANIMAL+" AND M2|XX|DL:"+eLists.ANIMAL+" AND M2",
    "M1|DL:"+eLists.ANIMAL+" AND M1|M1",
];
behaviors.POISONED_WALL = [
    "XX|DL:"+eLists.ANIMAL+"|XX",
    "DL:"+eLists.ANIMAL+"|XX|DL:"+eLists.ANIMAL+"",
    "XX|DL:"+eLists.ANIMAL+"|XX",
];
behaviors.POISONED_POWDER = [
    "XX|DL:"+eLists.ANIMAL+"|XX",
    "DL:"+eLists.ANIMAL+"|XX|DL:"+eLists.ANIMAL+"",
    "M2|DL:"+eLists.ANIMAL+" AND M1|M2",
];
behaviors.POISONED_GAS = [
    "M2|DL:"+eLists.ANIMAL+" AND M1|M2",
    "DL:"+eLists.ANIMAL+" AND M1|XX|DL:"+eLists.ANIMAL+" AND M1",
    "M2|DL:"+eLists.ANIMAL+" AND M1|M2",
];

// changing ketchup
elements.ketchup.tempLow = -3;
elements.ketchup.stateLow = "frozen_ketchup";
elements.ketchup.tempHigh = 100;
elements.ketchup.stateHigh = "ketchup_gas";
elements.ketchup.density = 1092;
elements.ketchup.reactions = {
    "mayonnaise": { "elem1": null, "elem2": "fry_sauce" },
    "plague": { "elem1": "poisoned_ketchup", "elem2": null},
    "infection": { "elem1": "poisoned_ketchup", "elem2": null},
    "radiation": { "elem1": "poisoned_ketchup", chance:025},
    "fallout": { "elem1": "poisoned_ketchup", chance:025},
    "gloomwind": { "elem1": "poisoned_ketchup", "elem2": null},
    };

// making ketchup dirty
elements.dirt.reactions = {
    "ketchup": { "elem1": null, "elem2": "dirty_ketchup", "oneway":true},
};
elements.ash.reactions = {
    "ketchup": { "elem1": null, "elem2": "dirty_ketchup", "oneway":true},
    "steam": { "elem1": "pyrocumulus", "chance":0.08, "y":[0,15] },
    "rain_cloud": { "elem1": "pyrocumulus", "chance":0.08, "y":[0,15] },
    "snow_cloud": { "elem1": "pyrocumulus", "chance":0.08, "y":[0,15] },
    "acid_cloud": { "elem1": "pyrocumulus", "chance":0.05, "y":[0,15] },
    "pyrocumulus": { "elem1": "pyrocumulus", "chance":0.08, "y":[0,15] },
};
elements.dust.reactions = {
    "ketchup": { "elem1": null, "elem2": "dirty_ketchup", "oneway":true},
};

// making it so ketchup clouds can react with smoke to make pyrocumulus
elements.smoke.reactions = {
    "steam": { "elem1": "pyrocumulus", "chance":0.08, "y":[0,15] },
    "rain_cloud": { "elem1": "pyrocumulus", "chance":0.08, "y":[0,15] },
    "snow_cloud": { "elem1": "pyrocumulus", "chance":0.08, "y":[0,15] },
    "acid_cloud": { "elem1": "pyrocumulus", "chance":0.05, "y":[0,15] },
    "fire_cloud": { "elem1": "pyrocumulus", "chance":0.05, "y":[0,15] },
    "pyrocumulus": { "elem1": "pyrocumulus", "chance":0.08, "y":[0,15] },
    "ketchup cloud": { "elem1": "pyrocumulus", "chance":0.08, "y":[0.15] },
    "poisoned_ketchup cloud": { "elem1": "pyrocumulus", "chance":0.08, "y":[0.15] },
};        
/*The stuff here is now going to be ANTI-life.*/

/*elements.antigrassseed = {
                color: ["#439809","#258B08","#118511","#127B12","#136D14"],
                behavior: [
                    "M2|M1%0.05|M2",
                    "XX|L2:grass|XX",
                    "XX|M1|XX",
                ],
                tempHigh: 100,
                stateHigh: "dead_plant",
                tempLow: -2,
                stateLow: "frozen_plant",
                burn: 50,
                burnTime: 20,
                category: "special",
                state: "solid",
                density: 1400,
            },
*/

	/*elements.antihuman = {
                color: ["#f5eac6","#d4c594","#a89160","#7a5733","#523018","#361e0e"],
                category: "special",
                properties: {
                    dead: false,
                    dir: 1,
                    panic: 0,
                },
                tick: function(pixel) {
                    if (isEmpty(pixel.x, pixel.y+1)) {
                        createPixel("antihumanbody", pixel.x, pixel.y+1);
                        pixel.element = "antihead";
                    }
                    else if (isEmpty(pixel.x, pixel.y-1)) {
                        createPixel("head", pixel.x, pixel.y-1);
                        pixelMap[pixel.x][pixel.y-1].color = pixel.color;
                        pixel.element = "antihumanbody";
                        pixel.color = pixelColorPick(pixel)
                    }
                    else {
                        deletePixel(pixel.x, pixel.y);
                    }
                },
            },
            elements.antihumanbody = {
                color: ["#049699","#638A61"],
                category: "special",
                hidden: true,
                density: 1500,
                state: "solid",
                conduct: 25,
                tempHigh: 250,
                stateHigh: "anticookedmeat",
                tempLow: -30,
                stateLow: "antifrozenmeat",
                burn: 10,
                burnTime: 250,
                burnInto: "anticookedmeat",
                breakInto: "antiblood",
                reactions: {
                    "cancer": { "elem1":"cancer", "chance":0.005 },
                    "radiation": { "elem1":["antiash","antimeat","antirottenmeat","anticookedmeat"], "chance":0.4 },
                    "plague": { "elem1":"plague", "chance":0.05 },
                },
                properties: {
                    dead: false,
                    dir: 1,
                    panic: 0,
                },
                tick: function(pixel) {
                    if (tryMove(pixel, pixel.x, pixel.y+1)) { // Fall
                        if (!isEmpty(pixel.x, pixel.y-2, true)) { // Drag head down
                            var antiheadpixel = pixelMap[pixel.x][pixel.y-2];
                            if (antiheadpixel.element == "antihead") {
                                if (isEmpty(pixel.x, pixel.y-1)) {
                                    movePixel(pixelMap[pixel.x][pixel.y-2], pixel.x, pixel.y-1);
                                }
                                else {
                                    swapPixels(pixelMap[pixel.x][pixel.y-2], pixelMap[pixel.x][pixel.y-1]);
                                }
                            }
                        }
                    }
                    doHeat(pixel);
                    doBurning(pixel);
                    doElectricity(pixel);
                    if (pixel.dead) {
                        // Turn into rotten_meat if pixelTicks-dead > 500
                        if (pixelTicks-pixel.dead > 200) {
                            changePixel(pixel,"antirottenmeat");
                        }
                        return
                    }

                    // Find the antihead
                    if (!isEmpty(pixel.x, pixel.y-1, true) && pixelMap[pixel.x][pixel.y-1].element == "antihead") {
                        var antihead = pixelMap[pixel.x][pixel.y-1];
                        if (antihead.dead) { // If head is dead, kill antihumanbody
                            pixel.dead = antihead.dead;
                        }
                    }
                    else { var antihead = null }

                    if (isEmpty(pixel.x, pixel.y-1)) {
                        // create blood if decapitated 10% chance
                        if (Math.random() < 0.1) {
                            createPixel("antiblood", pixel.x, pixel.y-1);
                            // set dead to true 15% chance
                            if (Math.random() < 0.15) {
                                pixel.dead = pixelTicks;
                            }
                        }
                    }
                    else if (antihead == null) { return }
                    else if (Math.random() < 0.1) { // Move 10% chance
                        var movesToTry = [
                            [1*pixel.dir,0],
                            [1*pixel.dir,-1],
                        ];
                        // While movesToTry is not empty, tryMove(pixel, x, y) with a random move, then remove it. if tryMove returns true, break.
                        while (movesToTry.length > 0) {
                            var move = movesToTry.splice(Math.floor(Math.random() * movesToTry.length), 1)[0];
                            if (isEmpty(pixel.x+move[0], pixel.y+move[1]-1)) {
                                if (tryMove(pixel, pixel.x+move[0], pixel.y+move[1])) {
                                    movePixel(antihead, antihead.x+move[0], antihead.y+move[1]);
                                    break;
                                }
                            }
                        }
                        // 15% chance to change direction
                        if (Math.random() < 0.15) {
                            pixel.dir *= -1;
                        }
                    }

                },
            },
            elements.antihead = {
                color: ["#f5eac6","#d4c594","#a89160","#7a6433","#524018"],
                category: "special",
                hidden: true,
                density: 1080,
                state: "solid",
                conduct: 25,
                tempHigh: 250,
                stateHigh: "anticookedmeat",
                tempLow: -30,
                stateLow: "antifrozenmeat",
                burn: 10,
                burnTime: 250,
                burnInto: "anticookedmeat",
                breakInto: "antiblood",
                reactions: {
                    "cancer": { "elem1":"cancer", "chance":0.005 },
                    "radiation": { "elem1":["antiash","antimeat","antirottenmeat","anticookedmeat"], "chance":0.4 },
                    "plague": { "elem1":"plague", "chance":0.05 },
                },
                properties: {
                    dead: false
                },
                tick: function(pixel) {
                    doHeat(pixel);
                    doBurning(pixel);
                    doElectricity(pixel);
                    if (pixel.dead) {
                        // Turn into rotten_meat if pixelTicks-dead > 500
                        if (pixelTicks-pixel.dead > 200) {
                            changePixel(pixel,"antirottenmeat");
                            return
                        }
                    }

                    // Find the body
                    if (!isEmpty(pixel.x, pixel.y+1, true) && pixelMap[pixel.x][pixel.y+1].element == "antihumanbody") {
                        var antihumanbody = pixelMap[pixel.x][pixel.y+1];
                        if (antihumanbody.dead) { // If body is dead, kill head
                            pixel.dead = antihumanbody.dead;
                        }
                    }
                    else { var antihumanbody = null }

                    if (isEmpty(pixel.x, pixel.y+1)) {
                        tryMove(pixel, pixel.x, pixel.y+1);
                        // create blood if severed 10% chance
                        if (isEmpty(pixel.x, pixel.y+1) && !pixel.dead && Math.random() < 0.1) {
                            createPixel("antiblood", pixel.x, pixel.y+1);
                            // set dead to true 15% chance
                            if (Math.random() < 0.15) {
                                pixel.dead = pixelTicks;
                            }
                        }
                    }
                }
            },*/
/*elements.antihuman = {
                color: ["#f5eac6","#d4c594","#a89160","#7a5733","#523018","#361e0e"],
                category: "special",
                properties: {
                    dead: false,
                    dir: 1,
                    panic: 0,
                },
                tick: function(pixel) {
                    if (isEmpty(pixel.x, pixel.y+1)) {
                        createPixel("body", pixel.x, pixel.y+1);
                        pixel.element = "head";
                    }
                    else if (isEmpty(pixel.x, pixel.y-1)) {
                        createPixel("head", pixel.x, pixel.y-1);
                        pixelMap[pixel.x][pixel.y-1].color = pixel.color;
                        pixel.element = "body";
                        pixel.color = pixelColorPick(pixel)
                    }
                    else {
                        deletePixel(pixel.x, pixel.y);
                    }
                },
            },*/

// lolguineapig mods

elements.ledY = {
    color: "#cde000",
    behavior: behaviors.WALL,
    category: "machines",
		conduct: 1,
    state: "solid",
		colorOn: "#fff000",
};
elements.ledW = {
    color: "#a69f1c",
    behavior: behaviors.WALL,
    category: "machines",
		conduct: 1,
    state: "solid",
		colorOn: "#fffedc",
};
elements.ledC = {
    color: "#012023",
    behavior: behaviors.WALL,
    category: "machines",
		conduct: 1,
    state: "solid",
		colorOn: "#00FFFF",
};
elements.ledRainbow = {
    color: ["#ff0000","#ff8800","#ffff00","#00ff00","#00ffff","#0000ff","#ff00ff"],
    behavior: behaviors.WALL,
    category: "machines",
		conduct: 1,
    state: "solid",
		colorOn: "#00FFFF",
};
/*elements.antiLedB = {
    color: "#0000FF",
    behavior: behaviors.AGPOWDER,
    category: "antimachines",
		conduct: 1,
    state: "solid",
		colorOn: "#fff000",
};*/
elements.ledPurple = {
    color: "#8f0f91",
    behavior: behaviors.WALL,
    category: "machines",
		conduct: 1,
    state: "solid",
		colorOn: "#fb00ff",
};
elements.ledPink = {
    colorOn: "#d900ff",
    behavior: behaviors.WALL,
    category: "machines",
		conduct: 1,
    state: "solid",
		color: "#bb00db",
};
elements.ledO = {
    colorOn: "#FFA500",
    behavior: behaviors.WALL,
    category: "machines",
		conduct: 1,
    state: "solid",
		color: "#d48a02",
};
elements.antiFire = {
                color: ["#ffc3a6","#ffdfa3","#ffb69e"],
                behavior: [
                    "XX|M2|XX",
                    "M2|XX|M2",
                    "M1|M1|M1",
                ],
                reactions: {
                    "antiliquid": { "elem1": "antigas" },
                },
                temp:600,
                tempLow:100,
                stateLow: "antigas",
                tempHigh: 7000,
                stateHigh: "plasma",
                category: "special",
                burning: true,
                burnTime: 25,
                burnInto: "antigas",
                hidden: true,
                state: "gas",
                density: 0.2,
            },
elements.ledC = {
    colorOn: "#00FFFF",
    behavior: behaviors.WALL,
    category: "machines",
		conduct: 1,
    state: "solid",
		color: "#00a6a6",
};
elements.ledM = {
    colorOn: "#800000",
    behavior: behaviors.WALL,
    category: "machines",
		conduct: 1,
    state: "solid",
		color: "#4a0303",
};
elements.shinyDiamond = {
    colorOn: ["#64defa", '#00c0ff'],
    behavior: behaviors.STURDYPOWDER,
    category: "solids",
		conduct: 1,
		hardness: 1,
    state: "solid",
		color: ["#03fcec","#03c6fc","#b3eeff","#8ab0e6"],
		tempHigh: 4000,
		stateHigh: 'molten_graphite',
		density: 3515,
};
elements.antiShinyDiamond = {
    colorOn: ["#64defa", '#00c0ff'],
    behavior: behaviors.AGPOWDER,
    category: "antimatter",
		conduct: 1,
		hardness: 1,
    state: "solid",
		color: ["#03fcec","#03c6fc","#b3eeff","#8ab0e6"],
		tempHigh: 4000,
		stateHigh: 'molten_graphite',
		ignore: ["antimatter_bomb"],
		density: 3515,
};
elements.armageddonProofDiamond = {
    colorOn: ["#64defa", '#00c0ff'],
    behavior: behaviors.POWDER,
    category: "special",
		conduct: 1,
		hardness: 1,
    state: "solid",
		color: ["#03fcec","#03c6fc","#b3eeff","#8ab0e6"],
		tempHigh: 4000,
		stateHigh: 'molten_graphite',
		ignore: ["armageddon"],
		density: 3515,
};
/*elements.antiArmageddonProofDiamond = {
    colorOn: ["#64defa", '#00c0ff'],
    behavior: behaviors.AGPOWDER,
    category: "antisupernatural",
		conduct: 1,
		hardness: 1,
    state: "solid",
		color: ["#03fcec","#03c6fc","#b3eeff","#8ab0e6"],
		tempHigh: 4000,
		stateHigh: 'molten_graphite',
		ignore: ["antimatter_bomb", "armageddon"],
		density: 3515,
};*/
elements.lithium = {
		name: 'hard Battery',
		colorOn: '#FFD700',
		behavior: [
                    "XX|SH|XX",
                    "SH|XX|SH",
                    "XX|SH|XX",
                ],
		category: 'machines',
		conduct: 1,
		hardness: 1,
		stateHigh: 'molten_lithium',
		color: '#c2a925',
		tempHigh: 100000,
};
elements.purifier = {
		name: 'purifier',
		color: '#32CD32',
		behavior: behaviors.STURDYPOWDER,
		reactions: {
				"dirty_water": {"elem2": "water", chance:0.9},
				"acid": {"elem2": "water", chance:0.9},
				"poison": {"elem2": "water", chance:0.9},
				"sugar_water": {"elem2": "water", chance:0.9},
				"salt_water": {"elem2": "water", chance:0.9},
				"seltzer": {"elem2": "water", chance:0.9},
				"soda": {"elem2": "water", chance:0.9},
				"slime": {"elem2": "water", chance:0.9},
				"lamp_oil": {"elem2": "oil", chance:0.9},
				"virus": {"elem2": "human", chance:0.9},
				"ketchup_snow": {"elem2": "ketchup", chance:0.9},
		},
		category: 'machines',
		state: 'solid',
		hardness: 1,
		density: 200,
		burn: 25,
		burnTime: 1000,
};
elements.edragon = {
	color: '#00ff00',
	colorOn: '#ff0000',
	state: 'solid',
	hardness: 1,
	category: 'special',
	behavior: behaviors.STURDYPOWDER,
	name: 'e-dragon',
	behaviorOn: [
                    "XX|XX|CR:plasma",
                    "XX|XX|CR:superheater",
                    "XX|XX|CR:plasma",
                ],
	conduct: 0.42,
};
elements.liquidPlasma = {
                color: ["#8800ff","#b184d9","#8800ff"],
                behavior: [
                    "XX|M2|XX",
                    "M1|CR:plasma|M1",
                    "M1|M1|M1",
                ],
                temp:7065,
                category: "special",
                burning: true,
                burnTime: 1000,
                burnInto: "plasma",
                density: 0.2,
								state: 'solid',
								tempHigh: 10000,
								viscosity: 10,
            };
elements.blackHole = {
		color: ['#0f0f0f', '#030303', '#242121', '262626'],
		behavior: behaviors.DELETE,
		hardness: 1,
		ignore: ["antimatter", "antifluid", "antimolten", "antifire", "antigas", "void"],
		category: 'special',
};
elements.emagma = {
	name: "e-xplosion",
	behavior: behaviors.MOLTEN,
	behaviorOn: [
                "XX|EX:20>fire,fire,fire,plasma|XX",
                "M2|EX:10>smoke|M2",
                "M1|M1|M1",
            ],
	color: ["#ff6f00","#ff8c00","#ff4d00"],
	viscosity: 7000,
	temp: 3000,
  tempLow: 1000,
  stateLow: ["basalt","basalt","basalt","rock"],
	state: "liquid",
	category: "liquids",
	density: 2725,
	conduct: 1,
};

elements.reinforcedWire = {
	name: "ReinforcedWire",
  color: "#4d0a03",
	behavior: behaviors.WALL,
  category: "machines",
  insulate: true,
  conduct: 1,
	hardness: 1,
}
elements.explowder = {
	name: "e-xpowder",
	behavior: behaviors.POWDER,
	behaviorOn: [
								"XX|EX:20>fire,fire,fire,plasma|XX",
                "M2|EX:20>smoke, fire|M2",
                "M1|M1|M1",
	],
	category: "powders",
	color: ['#FF0000', '#FF4500', '#FFA500', '#FFFF00', '#FFAE42', '#CCCCCC'],
	temp: 3000,
	stateHigh: ['plasma', 'liquidPlasma', 'liquidPlasma'],
	state: 'powder',
	conduct: 1,
	tempHigh: 7065,
}
// elements
elements.frozen_ketchup = {
    color: "#d44737",
    behavior: behaviors.STURDYPOWDER,
    temp: 0,
    category:"solids",
    tempHigh: -3,
    stateHigh: "ketchup",
    state: "solid",
    density: 917,
    reactions: {
        "plague": { "elem1": "frozen_poisoned_ketchup", "elem2": null},
        "infection": { "elem1": "frozen_poisoned_ketchup", "elem2": null},
        "radiation": { "elem1": "frozen_poisoned_ketchup", chance:025},
        "fallout": { "elem1": "frozen_poisoned_ketchup", chance:025},
        "gloomwind": { "elem1": "frozen_poisoned_ketchup", "elem2": null},
    },
};
elements.poisoned_ketchup = {
    color: "#de0030",
    behavior: behaviors.POISONED_LIQUID,
    tempLow: -3,
    stateLow: "frozen_poisoned_ketchup",
    tempHigh: 100,
    stateHigh: "poisoned_ketchup_gas",
    viscosity: 50000,
    category:"liquids",
    state: "liquid",
    density: 1140,
};
elements.frozen_poisoned_ketchup = {
    color: "#d43754",
    behavior: behaviors.POISONED_WALL,
    temp: 0,
    category:"solids",
    tempHigh: 3,
    stateHigh: "poisoned_ketchup",
    state: "solid",
    density: 917,
};
elements.ketchupbottle = {
    color: "#944137",
    behavior: [
        "XX|CR:poisoned_ketchup%0.001 AND CR:ketchup|XX",
        "CR:poisoned_ketchup%0.001 AND CR:ketchup|XX|CR:poisoned_ketchup%0.001 AND CR:ketchup",
        "XX|CR:poisoned_ketchup%0.001 AND CR:ketchup|XX",
    ],
    category:"spouts",
};
elements.ketchupcloud = {
    color: "#6e413b",
    behavior: [
        "XX|XX|XX",
        "M1%5|XX|M1%5",
        "XX|CR:ketchup%1|XX",
    ],
    category:"gases",
    temp: 80,
    tempLow: 0,
    stateLow: "ketchup_snow_cloud",
    state: "gas",
    density: 1,
    reactions: {
        "plague": { "elem1": "poisoned_ketchup cloud", "elem2": null},
        "infection": { "elem1": "poisoned_ketchup cloud"},
        "radiation": { "elem1": "poisoned_ketchup cloud", chance:025},
        "fallout": { "elem1": "poisoned_ketchup cloud", chance:025},
        "gloomwind": { "elem1": "poisoned_ketchup cloud", "elem2": null},
    },
    conduct: 0.03,
};
elements.poisoned_ketchup_cloud = {
    color: "#633640",
    behavior: [
        "XX|XX|XX",
        "M1%5|XX|M1%5",
        "XX|CR:poisoned_ketchup%1|XX",
    ],
    category:"gases",
    temp: 80,
    tempLow: 0,
    stateLow: "poisoned_ketchup_snow_cloud",
    state: "gas",
    density: 1,
    conduct: 0.03,
};
elements.ketchup_snow = {
    color: "#ed7a6d",
    behavior: behaviors.POWDER,
    temp: 0,
    tempHigh: 5,
    stateHigh: "ketchup",
		hidden: true,
        category: "powders",
    state: "solid",
    density: "100",
    reactions: {
        "plague": { "elem1": "poisoned_ketchup_snow", "elem2": null},
        "infection": { "elem1": "poisoned_ketchup_snow", "elem2": null},
        "radiation": { "elem1": "poisoned_ketchup_snow", chance:025},
        "fallout": { "elem1": "poisoned_ketchup_snow", chance:025},
        "gloomwind": { "elem1": "poisoned_ketchup_snow", "elem2": null},
    },
};
elements.ketchup_snow_cloud = {
    color: "#755652",
    behavior: [
        "XX|XX|XX",
        "M1%5|CH:ketchup_snow%0.05|M1%5",
        "XX|XX|XX",
    ],
    category:"gases",
		hidden: true,
    temp: -10,
    tempHigh: 30,
    stateHigh: "ketchup cloud",
    state: "gas",
    density: 2,
    reactions: {
        "plague": { "elem1": "poisoned_ketchup_snow_cloud", "elem2": null},
        "infection": { "elem1": "poisoned_ketchup_snow_cloud"},
        "radiation": { "elem1": "poisoned_ketchup_snow_cloud", chance:025},
        "fallout": { "elem1": "poisoned_ketchup_snow_cloud", chance:025},
        "gloomwind": { "elem1": "poisoned_ketchup_snow_cloud", "elem2": null},
    },
};
elements.poisoned_ketchup_snow = {
    color: "#d1697f",
    behavior: behaviors.POISONED_POWDER,
    temp: 0,
    tempHigh: 5,
    stateHigh: "poisoned_ketchup",
    category: "powders",
		hidden: true,
    state: "solid",
    density: "100",
};
elements.poisoned_ketchup_snow_cloud = {
    color: "#6e4e55",
    behavior: [
        "XX|XX|XX",
        "M1%5|CH:poisoned_ketchup_snow%0.05|M1%5",
        "XX|XX|XX",
    ],
    category:"gases",
    temp: -10,
    tempHigh: 30,
    stateHigh: "poisoned_ketchup cloud",
    state: "gas",
    density: 2,
};
elements.mayonnaise = {
    color: "#F2EEE9",
    behavior: behaviors.LIQUID,
    viscosity: 50000,
    category:"liquids",
    state: "liquid",
    density: 1000,
};
elements.mustard = {
    color: "#D8AD01",
    behavior: behaviors.LIQUID,
    viscosity: 50000,
    category:"liquids",
    state: "liquid",
    density: 1052,
};
elements.ledMustard = {
    color: "#000D01",
    behavior: behaviors.WALL,
    category: "machines",
		conduct: 1,
    state: "solid",
		colorOn: "#D8AD01",
};
elements.ledBrown = {
    color: "#000A00",
    behavior: behaviors.WALL,
    category: "machines",
		conduct: 1,
    state: "solid",
		colorOn: "#D8AD01",
};
elements.ledSilver = {
    color: "#C0C0C0",
    behavior: behaviors.WALL,
    category: "machines",
		conduct: 1,
    state: "solid",
		colorOn: "#D8AD01",
};
elements.ketchup_gas = {
    color: "#ffb5ad",
    behavior: behaviors.GAS,
    density: 0.6,
    state: "gas",
    tempLow: 100,
    stateLow: "ketchup",
    category: "gases",
    reactions: {
        "plague": { "elem1": "poisoned_ketchup_gas", "elem2": null},
        "ketchup_gas": { "elem1": null, "elem2": "ketchup cloud", "chance":0.3, "y":[0,15] },
        "infection": { "elem1": "poisoned_ketchup_gas"},
        "radiation": { "elem1": "poisoned_ketchup_gas", chance:025},
        "fallout": { "elem1": "poisoned_ketchup_gas", chance:025},
        "gloomwind": { "elem1": "poisoned_ketchup_gas", "elem2": null},
    },
};
elements.poisoned_ketchup_gas = {
    color: "#e096a6",
    behavior: behaviors.POISONED_GAS,
    density: 0.6,
    state: "gas",
    tempLow: 100,
    stateLow: "poisoned_ketchup",
    category: "gases",
    reactions: {
        "poisoned_ketchup_gas": { "elem1": null, "elem2": "poisoned_ketchup cloud", "chance":0.3, "y":[0,15] },
    },
};
elements.fry_sauce = {
    color: "#E8AA7B",
    behavior: behaviors.LIQUID,
    viscosity: 50000,
    category: "liquids",
    state: "liquid",
    density: 1149,
};
elements.ketchup_powder = {
    color: "#E06320",
    behavior: behaviors.POWDER,
    density: 1879,
    reactions: {
        "plague": { "elem1": "poisoned_ketchup_powder", "elem2": null},
        "infection": { "elem1": "poisoned_ketchup_powder", "elem2": null},
        "radiation": { "elem1": "poisoned_ketchup_powder", chance:025},
        "fallout": { "elem1": "poisoned_ketchup_powder", chance:025},
        "gloomwind": { "elem1": "poisoned_ketchup_powder", "elem2": null},
    },
    state: "solid",
		hidden: true,
    category: "powders",
};
elements.poisoned_ketchup_powder = {
    color: "#e0204a",
    behavior: behaviors.POISONED_POWDER,
    density: 1879,
		hidden: true,
    state: "solid",
    category: "powders",
};
elements.tomato = {
    color: "#B11E0C",
    behavior: behaviors.STURDYPOWDER,
    category: "food",
    density: 470,
    state: "solid",
    tempHigh: 400,
    stateHigh: "ash",
    reactions: {
        "rock": { "elem1": "tomato_sauce", "elem2": "rock" },
    },
    burn: 40,
    burnTime: 30,
    burnInto: "ash",
};
/*elements.boseEinsteinCondensateMercury = {
                color: ["#53574B","#65686A"],
                behavior: behaviors.SOLID,
                reactions: {
                    "gold": { "elem1":null, "elem2":"amalgam", "chance":0.01 },
                    "zinc": { "elem1":null, "elem2":"amalgam", "chance":0.01 },
                    "sodium": { "elem1":null, "elem2":"amalgam", "chance":0.01 },
                    "aluminum": { "elem1":null, "elem2":"amalgam", "chance":0.01 },
                    "tin": { "elem1":null, "elem2":"amalgam", "chance":0.01 },
                    "lead": { "elem1":null, "elem2":"amalgam", "chance":0.01 },
                    "silver": { "elem1":null, "elem2":"amalgam", "chance":0.01 },
                    "copper": { "elem1":null, "elem2":"amalgam", "chance":0.01 },
                },
                viscosity: 1.53,
								temp: -273.15,
                tempHigh: -273.14,
								stateHigh: "solid_mercury",
                category:"boseeinsteincondensates",
                state: "solid",
                density: 13.534,
            },*/
elements.tomato_sauce = {
    color: "#B72003",
    behavior: behaviors.LIQUID,
    category: "liquids",
    density: 1031,
    state: "liquid",
    reactions: {
        "sugar": { "elem1": "sugary_tomato_sauce", "elem2": null },
    },
    viscosity: 25000,
};
elements.sugary_tomato_sauce = {
    color: "#b53921",
    behavior: behaviors.LIQUID,
    category: "liquids",
    density: 1031,
    state: "liquid",
    reactions: {
        "vinegar": { "elem1": "ketchup", "elem2": null },
    },
    viscosity: 25000,
    hidden: true,
};
elements.cumin = {
    color: "#8B7778",
    behavior: behaviors.POWDER,
    category: "food",
    density: 405,
    state: "solid",
    tempHigh: 400,
    stateHigh: "ash",
    burn: 40,
    burnTime: 40,
    burnInto: "ash",
};
elements.ketchupbottle = {
    name: "E-Ketchup Spout",
    color: "#c75600",
    behavior: behaviors.STURDYPOWDER,
    behaviorOn: [
        "XX|CR:poisoned_ketchup%0.001 AND CR:ketchup|XX",
        "CR:poisoned_ketchup%0.001 AND CR:ketchup|XX|CR:poisoned_ketchup%0.001 AND CR:ketchup",
        "XX|CR:poisoned_ketchup%0.001 AND CR:ketchup|XX",
    ],
    category: "machines",
    conduct: 1,
    insulate: true,
    colorOn: "#fff200",
};
elements.metallicketchup = {
    color: "#ff5c5c",
    behavior: behaviors.STURDYPOWDER,
    category: "solids",
    conduct: 0.47,
		hidden: true,
    tempHigh: 1500,
    density: 7197,
};
elements.antiketchup = {
    color: "#00CEE6",
    behavior: behaviors.AGLIQUID,
    viscosity: 50000,
    category:"special",
		hidden: true,
    state: "liquid",
    density: 1092,
};
elements.dirty_ketchup = {
    color: "#851a0d",
    behavior: behaviors.LIQUID,
    viscosity: 50000,
    category: "liquids",
    state: "liquid",
    tempHigh: 100,
    stateHigh: ["ketchup_gas", "carbon_dioxide"],
    tempLow: 0,
    stateLow: "frozen_ketchup",
		hidden: true,
    density: 1140,
    hidden: true,
};
elements.ketchup_gold = {
    color: ["#eb8a8a", "#bf3939", "#ff6161"],
    behavior: behaviors.STURDYPOWDER,
    category: "solids",
		hidden: true,
    conduct: 0.64,
    tempHigh: 1025,
    density: 10598,
		hidden: true,
}
elements.antishock = { //hard-coded
                color: "#ffff00",
                behavior: [
                    "SH|SH|SH",
                    "SH|DL%5|SH",
                    "SH|SH|SH",
                ],
                category: "antimatter",
            },
 // alloys
 elements.molten_metallicketchup = {
    reactions: {
        "molten_gold": { "elem1": null, "elem2": "molten_ketchup_gold" },
			
    }
 },

elements.diarrhea = {
	color: ["#5c481c","#544513","#754d1c","#8a7829","#ad7315","#755c30"],
	name: 'Diarrhœa',
	behavior: [
		"XX|CR:plague%0.2 AND CR:fly%0.02|XX",
		"M2%50 AND ST%60|CH:poop%0.0065|M2%50 AND ST%60",
		"M1%65 AND M2|M1|M1%65 AND M2",
	],
	reactions: {
		"fly": { "elem1":"fly", "elem2":[null,null,null,null,null,null,"fly"], "chance":0.02, },
	},
	tempLow: -50,
	stateLow: "frozen_diarrhea",
	tempHigh: 100,
	stateHigh: "fart",
	category: "liquids",
	state: "liquid",
	density: 1030, //bs
	viscosity: 3,
	stain: 0.51,
},
	
	
//INSERT NEW ELEMENTS ABOVE
elements.granite = {
    color: ["#F3C3AD", "#F0AB75", "#DDA888", "#BD927E", "#998473", "#5C5E53", "#BD8366"],
    behavior: behaviors.SUPPORT,
    category: "popular",
    tempHigh: 1215,
    stateHigh: "felsic_magma",
    density: 2691,
    hardness: 0.75,
    breakInto: "granite_gravel",
};

elements.granite_gravel = {
    color: ["#E3B39D", "#E09B65", "#CD9878", "#AD826E", "#897463", "#4C4E43", "#AD7356", "#F3C3AD", "#F0AB75", "#DDA888", "#BD927E", "#998473", "#5C5E53", "#BD8366", "#FFD3BD", "#FFBB85", "#EDB898", "#CDA28E", "#A99483", "#6C6E63", "#CD9376"],
    behavior: behaviors.POWDER,
    category: "popular",
    tempHigh: 1215,
    stateHigh: "felsic_magma",
    density: 1320,
};

elements.felsic_magma = {
  "reactions": {
    "magma": { "elem1": "intermediate_magma", "elem2": "intermediate_magma" },
    "ash": { "elem1": null, "elem2": "molten_slag" },
    "dust": { "elem1": null, "elem2": "molten_slag" },
  },
  "name": "felsic magma",
  "color": ["#FFF457", "#FF9257", "#FF9200", "#FFD63B", "#FFAB3B", "#FF8000", "#FFD244", "#FFA844", "#FF7E00", "#FFB73F", "#FF923F", "#FF6E00", "#FFA53A", "#FF843A", "#FF6300", "#B8762A", "#B85E2A", "#B84700", "#FFA433", "#FF8333", "#FF6200"],
  "behavior": behaviors.MOLTEN,
  "temp": 1215,
  "tempLow": 800,
  "stateLow": ["rhyolite","rhyolite","rhyolite","granite"],
  "viscosity": 100000000,
  "hidden": true,
  "state": "liquid",
  "category": "molten",
  "density": 2421.9
};

    //Intermediate felsic: granodiorite (such a creative name)
elements.granodiorite = {
    color: ["#B1AB9D", "#262001", "#A6A292", "#D6C5BC", "#F2F2F2", "#DED8C2", "#978871", "#A8AAA7"], //From image: By Rudolf Pohl - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=7788350
    behavior: behaviors.STURDYPOWDER,
    category: "popular",
    tempHigh: 1050, //poorly searchable term, little findable information, idk if accurate
    stateHigh: "if_magma",
    density: 2644, //last 2 digits made up again
    hardness: 0.75,
    breakInto: "granodiorite_gravel",
};

elements.granodiorite_gravel = {
    color: ["#A19B8D", "#161000", "#969282", "#C6B5AC", "#E2E2E2", "#CEC8B2", "#877861", "#989A97", "#B1AB9D", "#262001", "#A6A292", "#D6C5BC", "#F2F2F2", "#DED8C2", "#978871", "#A8AAA7", "#C1BBAD", "#363011", "#B6B2A2", "#E6D5CC", "#FFFFFF", "#EEE8D2", "#A79881", "#B8BAB7"], //placeholder
    behavior: behaviors.POWDER,
    category: "powders",
    tempHigh: 1050,
    stateHigh: "if_magma",
    density: 1296,
};

elements.if_magma = {
  "reactions": {
    "magma": { "elem1": "intermediate_magma", "elem2": "intermediate_magma" },
    "ash": { "elem1": null, "elem2": "molten_slag" },
    "dust": { "elem1": null, "elem2": "molten_slag" },
  },
  "name": "intermediate felsic magma",
  "color": ["#FFD64F", "#FFAB4F", "#FF8000", "#7C5831", "#7C5031", "#7C5830", "#FFCB49", "#FFA249", "#FF7A00", "#FFF65E", "#FFC55E", "#FF9400", "#FFFF79", "#FFF279", "#FFB600", "#FFFF61", "#FFD861", "#FFA200", "#FFAA39", "#FF8839", "#FF6600", "#FFD554", "#FFAA54", "#FF8000"],
  "behavior": behaviors.MOLTEN,
  "temp": 1200,
  "tempLow": 1050,
  "stateLow": ["dacite","dacite","dacite","granodiorite"],
  "viscosity": 18700000, //10^average of logarithms
  "hidden": true,
  "state": "liquid",
  "category": "molten",
  "density": 2320, //averaged lower values
};

    //Intermediate: diorite
elements.diorite = {
    color: ["#E1E1E1","#B0A696","#707271","#434459","#242424"], //Extracted from image and blended
    //By Michael C. Rygel - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=31124755
    behavior: behaviors.STURDYPOWDER,
    category: "popular",
    tempHigh: 1300,
    stateHigh: "intermediate_magma",
    density: 2822, //last 2 digits made up.
    hardness: 0.70, //bs'd from MH rel to granite
    breakInto: "diorite_gravel",
};

elements.diorite_gravel = {
    color: ["#F1F1F1","#E1E1E1","#D1D1D1","#C0B6A6","#B0A696","#A09686","#808281","#707271","#606261","#535469","#434459","#333449","#343434","#242424","#141414"],
    behavior: behaviors.POWDER,
    category: "powders",
    tempHigh: 1260,
    stateHigh: "intermediate_magma",
    density: 1717, //approximated from granite values
};

elements.intermediate_magma = {
    "reactions": {
        "ash": { "elem1": null, "elem2": "molten_slag" },
        "dust": { "elem1": null, "elem2": "molten_slag" },
    },
    "name": "intermediate magma",
    "color": ["#FFFF70", "#FFE170", "#FFA800", "#FFCF4B", "#FFA64B", "#FF7C00", "#E08E38", "#E07238", "#E05500", "#86552C", "#86442C", "#863300", "#482D12", "#482412", "#481B00"],
    "behavior": behaviors.MOLTEN,
    "temp": 1215,
    "tempLow": 1115,
    "stateLow": ["andesite", "andesite", "andesite", "diorite"],
    "viscosity": 350000,
    "hidden": true,
    "state": "liquid",
    "category": "molten",
    "density": 2450,
}

    //Mafic: gabbro
elements.magma.name = "mafic magma" //because it cools into basalt
//the vanilla viscosity checks out
elements.rock.name = "gabbro" //based on it melting into mostly basalt, I am assuming that this is mafic magma cooling quickly, and thus assuming that the remainder is magma cooling more slowly into a phaneritic rock, and that woudld be gabbro
elements.magma.density = 2650

    //Ultramafic: peridotite
elements.peridotite = {
    color: ["#908557","#A29E78","#7F8044","#C6BC87","#8C8656","#7C7C40","#837840","#8B8B69"],
    behavior: behaviors.STURDYPOWDER,
    category: "popular",
    tempHigh: 1400,
    stateHigh: "ultramafic_magma",
    density: 3347, //appr from https://agupubs.onlinelibrary.wiley.com/doi/abs/10.1029/GL003i009p00509#:~:text=Abstract,and%20the%20bulk%20rock%20analyses.
    hardness: 0.76,
    breakInto: "peridotite_gravel",
};

elements.peridotite_gravel = {
    color: ["#807547","#928e68","#6f7034","#b6ac77","#7c7646","#6c6c30","#736830","#7b7b59","#908557","#a29e78","#7f8044","#c6bc87","#8c8656","#7c7c40","#837840","#8b8b69","#a09567","#b2ae88","#8f9054","#d6cc97","#9c9666","#8c8c50","#938850","#9b9b79"],
    behavior: behaviors.POWDER,
    category: "powders",
    tempHigh: 1400,
    stateHigh: "ultramafic_magma",
    density: 1681,
};

elements.ultramafic_magma = {
  "reactions": {
    "ash": { "elem1": null, "elem2": "molten_slag" },
    "dust": { "elem1": null, "elem2": "molten_slag" },
  },
  "name": "ultramafic magma",
  "color": ["#ffa62b","#ff852b","#ff6300","#ffc53c","#ff9e3c","#ff7600","#fea022","#fe8022","#fe6000","#ffeb43","#ffbc43","#ff8d00","#ffa72b","#ff862b","#ff6400","#f89b20","#f87c20","#f85d00","#ff9620","#ff7820","#ff5a00","#ffad34","#ff8b34","#ff6800"],
  "behavior": behaviors.MOLTEN,
  "temp": 1500,
  "tempLow": 1390,
  "stateLow": ["peridotite","komatiite","komatiite","komatiite"],
  "viscosity": 100,
  "hidden": true,
  "state": "liquid",
  "category": "molten",
  "density": 2800
};

//Aphanitic

    //Felsic: rhyolite
elements.rhyolite = {
    color: ["#A67153","#BF967E","#D9B5A0","#8C533E","#C99F86","#C5997E","#BB8A69"],
    // also from one of Michael C. Rygel's images
    behavior: behaviors.STURDYPOWDER,
    category: "popular",
    tempHigh: 800,
    stateHigh: "felsic_magma",
    density: 2555, //very wide range
    hardness: 0.75,
    breakInto: "rhyolite_gravel",
};

elements.rhyolite_gravel = {
    color: ["#B68163","#A67153","#966143","#CFA68E","#BF967E","#AF866E","#E9C5B0","#D9B5A0","#C9A590","#9C634E","#8C533E","#7C432E","#D9AF96","#C99F86","#B98F76","#D5A98E","#C5997E","#B5896E","#CB9A79","#BB8A69","#DB7A59"],
    behavior: behaviors.POWDER,
    category: "powders",
    tempHigh: 800,
    stateHigh: "felsic_magma",
    density: 1254, //approximated from granite values
};

    //Intermediate felsic: dacite
elements.dacite = {
    color: ["#D9CCC5", "#F2E9E4", "#877670", "#A69B97"],
    behavior: behaviors.STURDYPOWDER,
    category: "popular",
    tempHigh: 1050,
    stateHigh: "if_magma",
    density: 2654, //https://books.google.ca/books?id=ObUPAAAAIAAJ&pg=PA181&lpg=PA181&dq=dacite+specific+gravity&source=bl&ots=qn8B4sirWi&sig=Wp_MHqPuUGPNQobcuNP5c5wqkpU&hl=en&sa=X&ei=cimtUaH8Eab7yAH8joDABQ#v=onepage&q=dacite%20specific%20gravity&f=false
    hardness: 0.75,
    breakInto: "dacite_gravel",
};

elements.dacite_gravel = {
    color: ["#C9BCB5", "#E2D9D4", "#776660", "#968B87", "#D9CCC5", "#F2E9E4", "#877670", "#A69B97", "#E9DCD5", "#FFF9F4", "#978680", "#B6ABA7"], //placeholder
    behavior: behaviors.POWDER,
    category: "powders",
    tempHigh: 1050,
    stateHigh: "if_magma",
    density: 1300,
};

    //Intermediate: andesite
elements.andesite = {
    color: ["#6F7575", "#C5C9CB", "#818787", "#797F7F", "#B5B9BA", "#6D7371", "#909696"],
    behavior: behaviors.STURDYPOWDER,
    category: "popular",
    tempHigh: 1215,
    stateHigh: "intermediate_magma",
    density: 2474, //it varies very widely, so I made the last 2 digits up.
    hardness: 0.75,
    breakInto: "andesite_gravel",
};

elements.andesite_gravel = {
    color: ['#5f6565', '#b5b9bb', '#717777', '#696f6f', '#a5a9aa', '#5d6361', '#808686', '#6f7575', '#c5c9cb', '#818787', '#797f7f', '#b5b9ba', '#6d7371', '#909696', '#7f8585', '#d5d9db', '#919797', '#898f8f', '#c5c9ca', '#7d8381', '#a0a6a6'],
    behavior: behaviors.POWDER,
    category: "powders",
    tempHigh: 1260,
    stateHigh: "intermediate_magma",
    density: 1214, //approximated from granite values
};
elements.chicken = {
    color: ["#ba5700","#d18038","#d4ccc5"],
    category: "life",
	state: "solid",
    behavior: [
        "XX|XX|XX",
        "XX|FX%3 AND L2:chicken_egg%0.5 AND L2:golden_egg%0.01|M2%10",
        "XX|M1%33|XX",
    ],
	tempHigh: 41,
    stateHigh: "meat",
    burn:75,
    burnTime:30,
    density: 1200,
};
elements.chick = {
    color: ["#dbb11a","#dec56d"],
    category: "life",
	state: "solid",
    behavior: [
        "XX|XX|XX",
        "XX|FX%5 AND CH:chicken%0.05|M2%5",
        "XX|M1%33|XX",
    ],
	tempHigh: 41,
    stateHigh: "meat",
    burn:75,
    burnTime:30,
    density: 1200,
    hidden: true,
};
elements.chicken_egg = {
    color: ["#e8e3dc","#f7ddc6"],
    category: "life",
	state: "solid",
    behavior: [
        "XX|XX|XX",
        "XX|CH:chick%0.5|XX",
        "XX|M1|XX",
    ],
	tempHigh: 41,
    stateHigh: "boiled_egg",
    burn:75,
    burnTime:30,
    density: 1200,
};
elements.boiled_egg = {
    color: "#d4cbc3",
    category: "food",
	state: "solid",
    behavior: [
        "XX|XX|XX",
        "XX|XX|XX",
        "XX|M1|XX",
    ],
	tempHigh: 200,
    stateHigh: "ash",
    burn:75,
    burnTime:30,
    density: 1200,
    hidden: true,
};
elements.golden_egg = {
    color: "#ebcf9b",
    category: "special",
	state: "solid",
    behavior: [
		"XX|XX|XX",
		"XX|CC:ebcf9b,ebcf9b,ebcf9b,ebcf9b,ebcf9b,ebcf9b,ffffff|XX",
        "XX|M1|XX",
    ],
	tempHigh: 200,
    stateHigh: "ash",
    burn:75,
    burnTime:30,
    density: 1200,
    hidden: true,
};
elements.bat = {
	color: "#2b2824",
	category: "life",
	state: "solid",
	behavior: [
	"XX|M1%5|XX",
	"XX|FX%3|M2",
	"XX|XX|M2%10",
	],
	burnInto: "ash",
    burn:75,
    burnTime:25,
    density: 750,
};
elements.vampire_bat = {
	color: "#241919",
	category: "life",
	state: "solid",
	behavior: [
	"XX|M1%5|XX",
	"XX|FX%3|M2",
	"XX|XX|M2%10",
	],
	reactions: {
		"blood": { "elem2": null },
	},
	burnInto: "ash",
    burn:75,
    burnTime:25,
    density: 750,
};
elements.hummingbird = {
	color: ["#544030", "#8c6c51", "#d1bdab", "#75bd8b"],
	category: "life",
	state: "solid",
	behavior: [
	"XX|XX|M2%10",
	"XX|FX%50|M2",
	"XX|CR:pollen%0.01|M2%10",
	],
	reactions: {
		caterpillar: { "elem2": null},
		worm: { "elem2": null},
	},
	burnInto: "ash",
    burn:50,
    burnTime:25,
    density: 500,
};
elements.caterpillar = {
	color: ["#a7cfaf", "#4ecf6a", "#68cc7e","#a7cfaf"],
	category: "life",
	state: "solid",
	behavior: [
	"XX|XX|XX",
	"XX|FX%0.1 AND CH:cocoon%0.01|M2%1",
	"XX|M1|XX",
	],
	reactions: {
		plant: { "elem2": null, "chance": 80},
	},
	burnInto: "ash",
    burn:75,
    burnTime:25,
    density: 1000,
};
elements.cocoon = {
	color: "#f0fff3",
	category: "life",
	state: "solid",
	behavior: [
	"XX|ST|XX",
	"XX|CH:butterfly%0.01|XX",
	"XX|M1|XX",
	],
	burnInto: ["silk", "ash"],
    burn:75,
    burnTime:25,
    density: 1000,
};
elements.butterfly = {
	color: ["#6e6056", "#6e6056", "#423831", "#423831", "#e3cd5f", "#dbaf35", "#35db53", "#49cc61", "#49ccca", "#d18f84"],
	category: "life",
	state: "solid",
	behavior: [
	"XX|XX|M1",
	"XX|FX%5|M1",
	"XX|XX|M1",
	],
	burnInto: "ash",
    burn:75,
    burnTime:25,
    density: 500,
};
elements.silk = {
	color: ["#ebebeb", "#e6d9d1"],
	category: "popular",
	state: "solid",
	behavior: [
	"XX|XX|XX",
	"XX|XX|XX",
	"XX|M1|XX",
	],
	burnInto: "ash",
    burn:75,
    burnTime:25,
    density: 1000,
	hidden: true,
};

    //Mafic: basalt
//No changes from vanilla

    //Ultramafic: komatiite
elements.komatiite = {
    color: ["#AEB5AE","#A9B8B5","#7B8881","#858B87","#949F97","#505B55"],
    behavior: behaviors.STURDYPOWDER,
    category: "popular",
    tempHigh: 1600,
    stateHigh: "ultramafic_magma",
    density: 3100, //approximate density extrapolated from intermediate and mafic density
    //the magma's density is more well-known but there's nothing on the solid rock
    hardness: 0.75,
    breakInto: "komatiite_gravel",
};

elements.komatiite_gravel = {
    color: ["#9ea59e","#99a8a5","#6b7871","#757b77","#848f87","#404b45","#aeb5ae","#a9b8b5","#7b8881","#858b87","#949f97","#505b55","#bec5be","#b9c8c5","#8b9891","#959b97","#a4afa7","#606b65"],
    behavior: behaviors.POWDER,
    category: "powders",
    tempHigh: 1600,
    stateHigh: "ultramafic_magma",
    density: 1650, //approximated from granite values
};

/*elements.ticksand = {
                color: "#e6d577",
                tick: function(pixel) {
                    tryMove(pixel, pixel.x, pixel.y+1);
                    doHeat(pixel);
                },
                tempHigh: 1700,
                stateHigh: "molten_glass",
                category: "popular",
                state: "solid",
                density: 1602,
                hidden: true,
                category: "tick",
            },
            elements.tickwood = {
                color: "#a0522d",
                tick: function(pixel) {
                    doBurning(pixel);
                    doHeat(pixel);
                },
                tempHigh: 400,
                stateHigh: "fire",
                category: "solids",
                burn: 5,
                burnTime: 300,
                burnInto: ["ash","charcoal","fire"],
                state: "solid",
                hardness: 0.15,
                breakInto: "sawdust",
                hidden: true,
                category: "tick",
            },
            elements.tickwall = {
                color: "#808080",
                category: "tick",
                hidden: true,
            },
            elements.tickprop = {
                color: "#ffffff",
                tick: function(pixel) {
                    if (tryMove(pixel, pixel.x, pixel.y+1)) {
                        pixel.moves += 1;
                    }
                    pixel.age += 1;
                    if (pixel.moves > 20) { // This pixel will delete itself if it moves 20 times
                        deletePixel(pixel.x, pixel.y);
                    }
                },
                properties: { // Default properties to set when the pixel is created:
                    "moves": 0,
                    "age": 0,
                },
                category: "tick",
                hidden: true,
            },*/

 // f&m only things
runAfterLoad(function() {
    if (enabledMods.includes("mods/fey_and_more.js")) {
        // making ketchup fairies die to iron and silver
        eLists.FAIRY.push("ketchup_fairy");
        elements.iron.behavior = [
            "XX|DL:"+eLists.FAIRY+"|XX",
            "DL:"+eLists.FAIRY+"|XX|DL:"+eLists.FAIRY+"",
            "XX|DL:"+eLists.FAIRY+"|XX"
        ];
        elements.silver.behavior = [
            "XX|DL:"+eLists.FAIRY+"|XX",
            "DL:"+eLists.FAIRY+"|XX|DL:"+eLists.FAIRY+"",
            "XX|DL:"+eLists.FAIRY+"|XX"
        ];
        
        // ketchup fairy reaction
        elements.fairy.reactions = {
            "fire": { "elem1": "fire_fairy"},
            "magma": { "elem1": "fire_fairy"},
            "snow": { "elem1": "ice_fairy"},
            "ice": { "elem1": "ice_fairy"},
            "petal": { "elem1": "nature_fairy"},
            "dirt": { "elem1": "earth_fairy"},
            "mud": { "elem1": "earth_fairy"},
            "raincloud": { "elem1": "rain_fairy"},
            "electric": { "elem1": "thunder_fairy"},
            "little_star": { "elem1": "stellar_fairy"},
            "moonrock": { "elem1": "lunar_fairy"},
            "liquid_light": { "elem1": "light_fairy"},
            "mushroom_cap": { "elem1": "mushroom_fairy"},
            "magic": { "elem1": "magic_fairy"},
            "ketchup": { "elem1": "ketchup_fairy"},
        };

        // f&m only elements
        elements.ketchup_fairy = {
            color: ["#d4b0b0", "#e8c5c5", "#e89595"],
            state: "solid",
            behavior: [
                "XX|M1|M1",
                "XX|FX%5|XX",
                "XX|CR:ketchup%0.1 AND CR:fairy_dust%0.005 AND M1|M1",
            ],
            category: "special",
						hidden: true,
        };
    };
 });

/*if (elements[e].category == "gases") {
	function drawPixels(forceTick=false) {
            // newCurrentPixels = shuffled currentPixels
            var newCurrentPixels = currentPixels.slice();
            var pixelsFirst = [];
            var pixelsLast = [];
            if (!paused || forceTick) {
                shuffleArray(newCurrentPixels);
            }
            //{newCurrentPixels.sort(function(p) { // shuffle the pixels but keep elements[p.element].isGas last
                //return 0.5 - Math.random();
            //})} // shuffle the pixels if not paused
            for (var i = 0; i < newCurrentPixels.length; i++) {
                pixel = newCurrentPixels[i];
                //if (pixelMap[pixel.x][pixel.y] == undefined || currentPixels.indexOf(pixel) == -1) {continue}
                if (pixel.del) {continue}
                if (!paused || forceTick) {
                    if (elements[pixel.element].tick) { // Run tick function if it exists
                        elements[pixel.element].tick(pixel);
                    }
                    if (pixel.del) {continue}
                    if (elements[pixel.element].behavior) { // Parse behavior if it exists
                        pixelTick(pixel);
                    }
                };
                if (elements[pixel.element].isGas) {
                    pixelsLast.push(pixel);
                }
                else {
                    pixelsFirst.push(pixel);
                }
            }
            adjacentCoords = [
                [0,1],
                [0,-1],
                [1,0],
                [-1,0]
            ];
            biCoords = [
                [0,1],
                [1,0]
            ];
            // Draw the current pixels
            var canvas = document.getElementById("game");
            var ctx = canvas.getContext("2d");
            var pixelDrawList = pixelsFirst.concat(pixelsLast);
            for (var i = 0; i < pixelDrawList.length; i++) {
                pixel = pixelDrawList[i];
                if (pixelMap[pixel.x][pixel.y] == undefined) {continue}
                if (view===null || view===3) {
                    ctx.fillStyle = pixel.color;
                }
                else if (view === 2) { // thermal view
                    // set the color to pixel.temp, from hottest at 0 hue to coldest 225 hue, with the minimum being -273, max being 6000
                    var temp = pixel.temp;
                    if (temp < -273) {temp = -273}
                    if (temp > 6000) {temp = 6000}
                    var hue = 225 - (temp/6000)*225;
                    if (hue < 0) {hue = 0}
                    if (hue > 225) {hue = 225}
                    ctx.fillStyle = "hsl("+hue+",100%,50%)";
                }
                else if (view === 4) { // smooth view, average of surrounding pixels
                    var colorlist = [];
                    // check adjacent coords on the pixelMap, add the color to the list if the pixel is not empty and the color indexOf "rgb" is not -1
                    for (var j = 0; j < biCoords.length; j++) {
                        var x = pixel.x + biCoords[j][0];
                        var y = pixel.y + biCoords[j][1];
                        if (isEmpty(x,y,true) || elements[pixelMap[x][y].element].state !== elements[pixel.element].state) {continue}
                        var color = pixelMap[x][y].color;
                        if (color.indexOf("rgb") !== -1) {
                            colorlist.push(color.match(/\d+/g));
                        }
                    }
                    if (colorlist.length === 0) {
                        ctx.fillStyle = pixel.color;
                    }
                    else {
                        ctx.fillStyle = averageRGB(colorlist);
                    }
                }
                if ((view === null || view === 4) && elements[pixel.element].state === "gas") {
                    ctx.globalAlpha = 0.66;
                        ctx.beginPath();
                        ctx.arc((pixel.x+0.5)*pixelSize, (pixel.y+0.5)*pixelSize, pixelSize*1.5, 0, 2 * Math.PI, false);
                        ctx.fill();
                    ctx.globalAlpha = 1;
                }
                else { // draw the pixel (default)
                    ctx.beginPath();
                    ctx.arc((pixel.x+0.5)*pixelSize, (pixel.y+0.5)*pixelSize, pixelSize/2, 0, 2 * Math.PI, false);
                    ctx.fill();
                }
                if (pixel.charge && view !== 2) { // Yellow glow on charge
                    if (!elements[pixel.element].colorOn) {
                        if ((view === null || view === 4) && elements[pixel.element].state === "gas") {
                            ctx.fillStyle = "rgba(255,255,0,0.5)";
                            ctx.beginPath();
                            ctx.arc((pixel.x+0.5)*pixelSize, (pixel.y+0.5)*pixelSize, pixelSize*1.5, 0, 2 * Math.PI, false);
                            ctx.fill();
                        } else {
                            ctx.fillStyle = "rgba(255,255,0,0.5)";
                            ctx.beginPath();
                            ctx.arc((pixel.x+0.5)*pixelSize, (pixel.y+0.5)*pixelSize, pixelSize/2, 0, 2 * Math.PI, false);
                            ctx.fill();
                        }
                    }
                }
            }
            if ((!paused) || forceTick) {pixelTicks++};
        }
}
else {
	
}*/
/*
Many of these elements were in fact not created by me and were just other Sandboxels mods.
I have merged many of these into my game. Please take the time to read these credits.
These are the people from whom I've taken work from:
https://github.com/slweeb/sandboxels/blob/main/mods/fantastic_creatures.js
https://github.com/slweeb/sandboxels/blob/main/mods/igneous_rocks.js
https://github.com/slweeb/sandboxels/blob/main/mods/ketchup_mod.js
https://github.com/slweeb/sandboxels/blob/main/mods/spouts.js
https://github.com/slweeb/sandboxels/blob/main/mods/toothpaste.js
https://github.com/slweeb/sandboxels/blob/main/mods/smooth_water.js
https://github.com/slweeb/sandboxels/blob/main/mods/portal.js
https://github.com/slweeb/sandboxels/blob/main/mods/pushers.js
https://github.com/slweeb/sandboxels/blob/main/mods/ticking_temp_stuff.js
https://github.com/slweeb/sandboxels/blob/main/mods/clone_liquid.js
Thank you so much to all of the developers of these mods for making these publicly available for forking! I sincerely thank you!
If I forgot to attribute you, please let me know as eshaanbhargavpatel@gmail.com and share me the link to the GitHub for your Sandboxels mod. Thanks!
I shall also attibute Ryan from Sandboxels (https://sandboxels.r74n.com) for making this site possible. He made the original thing we forked!
*/