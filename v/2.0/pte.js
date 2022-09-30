elements.lithium = {
	name: 'Lithium',
	reactions: {
		"water": {"elem1": "fire", chance: 0.8},
		"fire": {"elem1": "redFire", chance: 0.8},
	},
	category: 'solids',
	behavior: behaviors.SUPPORT,
	tempHigh: 180.5,
	conduct: 1,
	color: '#DADBDD',
	hardness: 0.7,
},
elements.powdered_lithium = {
	name: 'Lithium',
	reactions: {
		"water": {"elem1": "fire", chance: 0.8},
		"fire": {"elem1": "redFire", chance: 0.8},
	},
	category: 'powders',
	behavior: behaviors.POWDER,
	tempHigh: 180.5,
	conduct: 1,
	color: '#DADBDD',
	hardness: 0.7,
},
elements.antilithium = {
	name: 'Antilithium',
	reactions: {
		"antiwater": {"elem1": "antifire", chance: 0.8},
		"lithium": {"elem1": "blackHole"},
		//"agfire": {"elem1": "redFire", chance: 0.8},
	},
	category: 'antimatter',
	behavior: behaviors.AGPOWDER,
	tempHigh: 180.5,
	conduct: 1,
	color: '#DADBDD',
	hardness: 0.7,
},
//elements.liquid_hydrogen.tempLow = -259.16

	
elements.titanium = {
	name: 'Titanium',
	tempHigh: 1660,
	density: 4.5,
	category: 'solids',
	hardness: 1,
	color: "#36454F",
	behavior: behaviors.STURDYPOWDER,
},
elements.heavytitanium = {
	name: 'AntiHeavyTitanium',
	tempHigh: 1660,
	density: 5.5,
	category: 'solids',
	hardness: 1,
	color: "#36454F",
	behavior: behaviors.STURDYPOWDER,
}
elements.antiheavytitanium = {
	name: 'AntiHeavyTitanium',
	tempHigh: 1660,
	reactions: {
		"heavytitanium": {"elem1": "blackHole"},
	},
	density: 5.5,
	category: 'solids',
	hardness: 1,
	color: "#36454F",
	behavior: behaviors.AGPOWDER,
},
elements.antititanium = {
	name: 'Antititanium',
	tempHigh: 1660,
	reactions: {
		"titanium": {"elem1": "blackHole"},
	},
	density: 4.5,
	category: 'antimatter',
	hardness: 1,
	color: "#36454F",
	behavior: behaviors.AGPOWDER,
},
elements.beryllium = {
	name: 'Beryllium',
	reactions: {
		"water": {"elem1": "hydrogen", chance: 0.8},
		"acid": {"elem1": "hydrogen", chance: 0.8},
		"oxygen": {"elem1": "berylliumOxide", chance: 0.8},
	},
	category: 'solids',
	behavior: behaviors.SUPPORT,
	tempHigh: 1287,
	conduct: 1,
	color: '#BDBEBF',
	hardness: 0.5,
	density: 1.84,
},
elements.antiberyllium = {
	name: 'Antiberyllium',
	reactions: {
		"antiwater": {"elem1": "antigas", chance: 0.8},
		//"acid": {"elem1": "hydrogen", chance: 0.8},
		"antioxygen": {"elem1": "berylliumOxide", chance: 0.8},
		"beryllium": {"elem1": "blackHole"},
	},
	category: 'antimatter',
	behavior: behaviors.AGPOWDER,
	tempHigh: 1287,
	conduct: 1,
	color: '#BDBEBF',
	hardness: 0.5,
	density: 1.84,
},
elements.antiBerylliumOxide = {
	name: 'AntiBerylliumOxide',
	category: 'antimatter',
	reactions: {
		"berylliumOxide": {"elem1": "blackHole"},
	},
	behavior: behaviors.GAS,
	color: '#BDBEBF',
	state: "gas",
},
elements.berylliumOxide = {
	name: 'berylliumOxide',
	category: 'gases',
	behavior: behaviors.GAS,
	color: '#BDBEBF',
	state: "gas",
},
elements.boron = {
	name: 'Boron',
	reactions: {
		"fire": {"elem1": "greenFire", chance: 0.8},
		"salt_water": {"elem1": "borax", chance: 0.8},
	},
	category: 'solids',
	behavior: behaviors.POWDER,
	tempHigh: 2077,
	color: '#5f564f',
	hardness: 0.95,
	density: 2.34,
},
elements.antiboron = {
	name: 'Antiboron',
	reactions: {
		"fire": {"elem1": "greenFire", chance: 0.8},
		"salt_water": {"elem1": "borax", chance: 0.8},
		"boron": {"elem1": "blackHole"},
	},
	category: 'antimatter',
	behavior: behaviors.AGPOWDER,
	tempHigh: 2077,
	color: '#5f564f',
	hardness: 0.95,
	density: 2.34,
},
elements.borax = {
	name: 'Borax',
	category: 'powders',
	behavior: behaviors.POWDER,
	tempHigh: 743,
	color: '#e8f1ff',
	hardness: 0.95,
	density: 1.73,
	reactions: {
		"slime": {"elem1": "putty", chance: 0.8},
	},
},
elements.antiborax = {
	name: 'AntiBorax',
	category: 'antimatter',
	behavior: behaviors.AGPOWDER,
	tempHigh: 743,
	color: '#e8f1ff',
	hardness: 0.95,
	density: 1.73,
	reactions: {
		"antislime": {"elem1": "antiputty", chance: 0.8},
		"borax": {"elem1": "blackHole"},
	},
},
elements.putty = {
	name: 'Putty',
	behavior: behaviors.LIQUID,
	category: 'liquids',
	color: '#e3a129',
	hardness: 0.6,
	viscosity: 5000,
	density: 10000,
},
elements.antislime = {
                color: "#81cf63",
                behavior: behaviors.AGLIQUID,
                reactions: {
                    "antimatterbomb": { "elem2":"sticky_bomb", "elem2":null },
										"slime": {"elem1": "blackHole"},
                },
                viscosity: 5000,
                tempHigh: 120,
                stateHigh: "steam",
                category:"antimatter",
                state: "liquid",
                density: 1450,
                stain: 0.05,
            },
elements.antiputty = {
	name: 'AntiPutty',
	behavior: behaviors.AGLIQUID,
	reactions: {
		"putty": {"elem1": "blackHole"},
	},
	category: 'antimatter',
	color: '#e3a129',
	hardness: 0.6,
	viscosity: 5000,
	density: 10000,
},
elements.redFire =  {
	name: 'RedFire',
	color: ["#ff3636","#d61818","#ff0000"],
	behavior: behaviors.UL_UR,
	reactions: {
			"water": { "elem1": "smoke" },
	},
	temp: 600,
	tempLow: 100,
	stateLow: "smoke",
	tempHigh: 7000,
	stateHigh: "plasma",
	category: "energy",
	burning: true,
	burnTime: 25,
	burnInto: "smoke",
	state: "gas",
	density: 0.1,
},
elements.greenFire =  {
	name: 'GreenFire',
	color: ["#23ff17","#28d61e","#00ff00"],
	behavior: behaviors.UL_UR,
	reactions: {
			"water": { "elem1": "smoke" },
	},
	temp: 600,
	tempLow: 100,
	stateLow: "smoke",
	tempHigh: 7000,
	stateHigh: "plasma",
	category: "energy",
	burning: true,
	burnTime: 25,
	burnInto: "smoke",
	state: "gas",
	density: 0.1,
},
elements.flourine = {
	name: 'Flourine',
	color: '#FFFFA7',
	state: 'gas',
	behavior: behaviors.GAS,
	category: 'gases',
	tempLow: -188,
	stateLow: 'liquidFlourine'
},
elements.liquidFlourine = {
	name: 'LiquidFlourine',
	color: '#FFFFA7',
	behavior: behaviors.LIQUID,
	category: 'liquids',
	tempHigh: -187,
	state: 'liquid',
	stateHigh: 'flourine'
},
elements.antiglass = {
                color: ["#5e807d","#679e99"],
                behavior: behaviors.AGPOWDER,
                tempHigh: 1600,
								stateHigh: "antimoltenglass",
                category: "antimatter",
                state: "solid",
                density: 2500,
            },
	elements.antimoltenglass = {
                color: ["#FAA953","#FF8800"],
                behavior: behaviors.AGLIQUID,
								temp: 1650,
                tempLow: 1600,
								stateLow: "antiglass",
                category: "antimatter",
                state: "liquid",
                density: 2500,
            },
elements.antisand = {
                color: "#e6d577",
                behavior: behaviors.AGPOWDER,
                tempHigh: 1600,
                stateHigh: "antimoltenglass",
                category: "antimatter",
                state: "solid",
                density: 1602
            },
	elements.dancingpowder = {
                color: "#ffffff",
                behavior: behaviors.DANCE,
                category: "special",
                state: "solid",
            },
elements.antiflourine = {
	name: 'AntiFlourine',
	color: '#FFFFA7',
	reactions: {
		"flourine": {"elem1": "blackHole"},
	},
	state: 'gas',
	behavior: behaviors.GAS,
	category: 'antimatter',
	tempLow: -188,
	stateLow: 'antiliquidFlourine'
},
elements.antiliquidflourine = {
	name: 'AntiLiquidFlourine',
	color: '#FFFFA7',
	behavior: behaviors.AGLIQUID,
	reactions: {
		"liquidFlourine": {"elem1": "blackHole"},
	},
	category: 'antimatter',
	tempHigh: -187,
	state: 'liquid',
	stateHigh: 'antiflourine'
},
	elements.anticarbondioxide = {
                color: "#2f2f2f",
                behavior: behaviors.GAS,
                reactions: {
                    "plant": { "elem1":"antioxygen" },
                    "algae": { "elem1":"antioxygen" },
                },
                category: "antimatter",
                tempLow: -78.5,
                stateLow: "antidryice",
                state: "gas",
                density: 1.977,
            },
elements.antidryice = {
                color: "#e6e6e6",
                behavior: behaviors.AGPOWDER,
                category: "antimatter",
                temp: -98.5,
                tempHigh: -78.5,
                stateHigh: "anticarbondioxide",
                state: "solid",
                density: 1562,
            },
elements.antidirtywater = {
                color: ["#0e824e","#07755a","#0c6934"],
                behavior: behaviors.AGLIQUID,
                tempHigh: 105,
                stateHigh: ["antisteam","anticarbondioxide"],
                tempLow: -5,
                stateLow: "ice",
                viscosity: 10,
                category: "antimatter",
                reactions: {
                    "dirt": { "elem1": null, "elem2": "mud" },
                    "sand": { "elem1": null, "elem2": "wet_sand", },
                    "rock": { "elem2": "wet_sand", "chance": 0.0004 },
                    "plant": { "elem1":"antiwater", "chance":0.05 },
                    "algae": { "elem1":"antiwater", "chance":0.05 },
                    "charcoal": { "elem1":"antiwater", "chance":0.02 },
                    "gravel": { "elem1":"antiwater", "chance":0.01 },
                },
                hidden: true,
                state: "liquid",
                density: 1050,
                conduct: 0.1,
                stain: 0.075,
            },
elements.time = {
    color: "#006e05",
    behavior: behaviors.GAS,
    category: "machines",
    state: "gas",
    density: 10,
}; 

elements.wet_soup = {
    color: "#C15C3F",
    behavior: behaviors.LIQUID,
    category: "food",
    viscosity: 6400,
    state: "liquid",
    density: 320
};
elements.guacamole = {
    color: "#67A555",
    behavior: behaviors.LIQUID,
    category: "food",
    viscosity: 4640,
    state: "liquid",
    density: 993
};
elements.cream = {
    color: ["#E1D3A2","#E5DBB7"],
    behavior: behaviors.LIQUID,
    category: "food",
    stateHigh: "gas",
    viscosity: 4640,
    state: "liquid",
    density: 993
};
elements.poop = {
    color: "#8A4D24",
	behavior: [
		"XX|CR:stench%0.1 AND CR:fly%0.01 AND CR:methane%0.0316|XX",
		"XX|CH:dried_poop%0.02|XX",
		"M2%50|M1 AND SW:water%50|M2%50",
	],
    category: "popular",
    viscosity: 1,
    reactions: {},
    state: "solid",
    density: 43
};
elements.toilet = {
    color: "#fffedc",
		behavior: behaviors.TOILET,
    category: "machines",
		breakInto: ["glass", "plastic", "water"]
};
elements.urinal = {
    color: "#ffedcb",
		behavior: behaviors.URINAL,
    category: "machines"
};
elements.pee = {
    color: "#e1e114",
	behavior: [
		"XX|CR:stench%0.1|XX",
		"XX|XX|XX",
		"M2%50|M1 AND SW:water%50|M2%50",
	],
    category: "liquids",
    viscosity: 1,
		tempHigh: 100,
		stateHigh: "fart",
		tempLow: 0,
		stateLow: "pee_ice",
    reactions: {},
		breakInto: ["poop", "water", "salt", "sugar", "baking_soda"],
    state: "liquid",
    density: 43
};
elements.pee_ice = {
    color: "#cecfa0",
	behavior: behaviors.STINKYSOLID,
    category: "solids",
    viscosity: 1,
		stateHigh: "pee",
		tempHigh: 0,
    reactions: {},
		temp: -25,
		breakInto: "pee_snow",
    state: "solid",
    density: 43
};
elements.pee_snow = {
    color: "#e1e114",
	behavior: behaviors.STINKYPOWDER,
    category: "powders",
    viscosity: 1,
		stateHigh: "pee",
		tempHigh: 0,
		temp: -15,
    reactions: {},
    state: "solid",
    density: 43
};

/*elements.pee_graupel = {
    color: "#e1e114",
	behavior: [
			"XX|CR:stench%0.1|XX",
      "SP|XX|SP",
    	"M2|M1|M2",
	],
    category: "special",
    viscosity: 1,
		stateHigh: "pee",
		tempHigh: 0,
		temp: -15,
    reactions: {},
    state: "solid",
    density: 43
};*/

elements.pee_cloud = {
		color: "#f1e114",
		behavior: [
			"XX|XX|XX",
			"M1%7|CH:pee%0.05|M1%7",
			"XX|XX|XX",
		],
		density: 0.7,
		temp: 20,
		tempLow: -10,
		stateLow: "pee_snowcloud",
		category: "gases",
		state: "gas",
	},
	elements.pee_snowcloud = {
		color: "#f1e114",
		behavior: [
			"XX|XX|XX",
			"M1%7|CH:pee_snow%0.05|M1%7",
			"XX|XX|XX",
		],
		density: 0.7,
		temp: -20,
		stateHigh: -10,
		stateHigh: "pee_cloud",
		category: "gases",
		state: "gas",
	},
/*elements.pee_graupelcloud = {
		color: "#f1e114",
		behavior: [
			"XX|XX|XX",
			"M1%7|CH:pee_snow%0.015 AND CH:pee_graupel%0.0475|M1%7",
			"XX|XX|XX",
		],
		density: 0.7,
		temp: -20,
		stateHigh: -10,
		stateHigh: "pee_cloud",
		category: "gases",
		state: "gas",
	},*/
	elements.butt = {
		color: "#f1e114",
		behavior: [
			"CR:fart%0.2|XX|CR:fart%0.2",
			"XX|XX|XX",
			"CR:fart%0.2|CR:pee%0.1 AND CR:poop%0.03|CR:fart%0.2",
		],
		density: 0.7,
		temp: 20,
		tempLow: -10,
		stateHigh: "rotten_meat",
		category: "special",
		state: "solid",
	},
elements.fart = {
    color: "#e1e114",
		behavior: behaviors.DGAS,
    category: "gases",
    viscosity: 1,
		tempLow: 15,
		temp: 25,
		stateLow: "diarrhea",
    reactions: {},
		breakInto: ["poop", "pee", "water", "salt", "sugar", "baking_soda"],
    state: "gas",
    density: 43
};
elements.burp = {
    color: "#91e114",
		behavior: [
			"M2|M1|M2",
      "M1|DL%5 AND CH:methane%15 AND CH:ethane%2|M1",
      "M2|M1|M2",
		],
    category: "gases",
    viscosity: 1,
		tempLow: 15,
		temp: 25,
		stateLow: "diarrhea",
    reactions: {},
		breakInto: ["poop", "pee", "water", "salt", "sugar", "baking_soda"],
    state: "gas",
    density: 43
};
elements.dried_poop = {
    color: "#442714",
    behavior: behaviors.POWDER,
    category: "powders",
		hidden: true,
		tempHigh: 60,
		stateHigh: "diarrhea",
    viscosity: 1,
    state: "solid",
    density: 43
};
/*elements.dried_pee = {
    color: "#242714",
    behavior: behaviors.STURDYPOWDER,
    category: "powders",
		hidden: true,
    viscosity: 1,
    state: "solid",
    density: 43
};*/
elements.cinder = {
    color: "#171210",
    behavior: behaviors.LIQUID,
    category: "liquids",
    viscosity: 70,
    state: "liquid",
    burn: 5,
    burnTime: 70,
    fireColor: "#FF4F00",
    density: 343
};
elements.paste = {
    color: "#C4AA98",
    behavior: behaviors.STURDYPOWDER,
    category: "popular",
     stateHigh: ["liquid_paste"],
    state: "solid",
    density: 230
};
elements.husk = {
    color: ["#C4AA98", "#9E836B", "#A5876D", "#AE7D64", "#C87B67"],
    behavior: behaviors.STURDYPOWDER,
    category: "popular",
    reactions: {},
    state: "solid"
};
elements.remnant = {
    color: "#3C382B",
    behavior: behaviors.POWDER,
    category: "powders",
    state: "solid",
    density: 1730
};
elements.rot = {
    color: ["#101217", "#853A2A"],
	behavior: [
		"XX|CR:fly%0.054|XX",
		"XX|CR:rot%0.054|XX",
	],
    category: "liquids",
    viscosity: 1,
    state: "liquid",
    reactions: {},
    density: 2
};
elements.liquid_paste = {
    color: "#D8D4C1",
    behavior: behaviors.LIQUID,
    category: "liquids",
    viscosity: 150430,
    state: "liquid",
    density: 230
};
elements.water.reactions.soup = { "elem1":"wet_soup", "elem2":"salt_water" };
//elements.tar.reactions.magma = { "elem1":"smoke", "elem2":"cinder" };
elements.poop.reactions.water = { "elem1":"dried_poop", "elem2":"fly" };
//elements.tar.reactions.husk = { "elem1":"rot", "elem2":"fly" };
elements.husk.reactions.molasses = { "elem1":"smoke", "elem2":"remnant" };
elements.rot.reactions.fire = { "elem1":"smoke", "elem2":"cinder" };
elements.water.reactions.rot = { "elem1":"blood", "elem2":"slag" };
elements.alcohol.name = "ethanol"
elements.alcohol.viscosity = elements.alcohol.viscosity * (1.074/1.0016)



elements.methanol = {
    color: "#c9c5b1",
    behavior: behaviors.LIQUID,
    reactions: {
        "virus": { "elem2":null },
        "plague": { "elem2":null },
        "head": { "elem2":"rotten_meat", "chance": 0.8 },
        "body": { "elem2":"rotten_meat", "chance": 0.8 },
    },
    viscosity: 1*(0.553/1.0016),
    tempHigh: 64.7,
    stateHigh: ["steam","carbon_dioxide"], //todo: alcohols' phase transitions
    burn: 100,
    burnTime: 2,
    fireColor: "#b2c5d1",
    category: "liquids",
    state: "liquid",
    density: 792,
    stain: -0.25,
}

elements.propanol = {
    color: "#c9c5b1",
    behavior: behaviors.LIQUID,
    reactions: {
        "virus": { "elem2":null },
        "plague": { "elem2":null },
    },
    viscosity: 1*(1.945/1.0016),
    tempHigh: 97,
    stateHigh: ["steam","carbon_dioxide"],
    burn: 100,
    burnTime: 3,
    fireColor: "#ced8de",
    category: "liquids",
    state: "liquid",
    density: 803,
    stain: -0.25,
}

elements.isopropanol = {
    color: "#c9c5b1",
    behavior: behaviors.LIQUID,
    reactions: {
        "virus": { "elem2":null },
        "plague": { "elem2":null },
    },
    viscosity: 1*(2.052/1.0016),
    tempHigh: 82.5,
    stateHigh: ["steam","carbon_dioxide"],
    burn: 100,
    burnTime: 3,
    fireColor: "#d1c958",
    category: "liquids",
    state: "liquid",
    density: 786,
    stain: -0.25,
}

elements.butanol = {
    color: "#c9c5b1",
    behavior: behaviors.LIQUID,
    reactions: {
        "virus": { "elem2":null },
        "plague": { "elem2":null },
    },
    viscosity: 1*(2.53/1.0016),
    tempHigh: 118,
    stateHigh: ["steam","carbon_dioxide"],
    burn: 100,
    burnTime: 3,
    category: "liquids",
    state: "liquid",
    density: 810,
    stain: -0.25,
}

elements.basalt_gravel = {
	color: ["#4d4c4c", "#42403f", "#333130", "#36322f"],
	behavior: behaviors.POWDER,
	tempHigh: 1262.5,
	stateHigh: "magma",
	category: "popular",
	state: "solid",
	density: 1975,
	hardness: 0.26,
},

elements.limestone_gravel = {
	color: ["#c7baa1", "#e8d8b7", "#fcf3d7", "#fffce6"],
	behavior: behaviors.POWDER,
    tempHigh: 825,
    stateHigh: "quicklime",
    category: "popular",
    state: "solid",
    density: 1380,
    hardness: 0.16,
    breakInto: ["quicklime","calcium","dust", "limestone_gravel", "limestone_gravel"],
},
elements.extinction = {
	name: "Extinction",
	color: ["#a7a7a7", "#a7a7a7", "#a7a7a7", "#a7a7a7", "#000000", "#000000", "#000000", "#000000"],
	tool: function(pixel) {
		for (var i = 1; i < width; i++) {
			for (var j = 1; j < height; j++) {
				if (!isEmpty(i,j)) {
					if(pixelMap[i][j].element == pixel.element) {
						deletePixel(i,j)
					}
				}
			}
		}
	},
	category: "weapons",
	excludeRandom: true,
};

elements.molten_glass = {
		tempHigh: 2200,
		stateHigh: "vaporized_glass",
	}
	
	elements.vaporized_glass = {
		color: ["#D6B049","#E8D957","#E8AE57"],
		behavior: [
			"M2|M1|M2",
			"M1|XX|M1",
			"M2|M1|M2",
		],
		reactions: {
			"vaporized_glass": { "elem1": null, "elem2": "hot_glass_cloud", "chance":0.3, "y":[0,15] },
			"hot_glass_cloud": { "elem1": "hot_glass_cloud", "chance":0.4, "y":[0,15] },
		},
		density: 2, //very rough approximation based on https://nvlpubs.nist.gov/nistpubs/jres/46/jresv46n3p176_A1b.pdf
		temp: 2300, //https://www.sciencealert.com/did-this-piece-of-glass-really-break-a-law-of-thermodynamics
		tempLow: 2200,
		stateLow: "molten_glass",
		category: "gases",
		state: "gas",
		hidden: true,
	},

	elements.hot_glass_cloud = {
		color: ["#B69089","#C8B997","#C88E77"],
		behavior: [
			"XX|XX|XX",
			"M1%7|CH:molten_glass%0.05|M1%7",
			"XX|XX|XX",
		],
		density: 2,
		temp: 2300,
		tempLow: 2200,
		stateLow: "cold_glass_cloud",
		category: "gases",
		state: "gas",
	},
	
	elements.cold_glass_cloud = {
		color: ["#967089","#A89997","#A86E77"],
		behavior: [
			"XX|XX|XX",
			"M1%7|CH:glass_shard%0.05|M1%7",
			"XX|XX|XX",
		],
		density: 2,
		temp: 2000,
		tempHigh: 2200,
		stateHigh: "hot_glass_cloud",
		category: "gases",
		state: "gas",
	},

//}

// ash {

	elements.ash.tempHigh = 1200          //https://www.quora.com/Can-you-melt-ashes
	elements.ash.stateHigh = "molten_ash" //https://www.sciencedirect.com/science/article/pii/S1877705817326772
	
	elements.molten_ash = {
		color: ["#df6f30","#df8c30","#df4d30"],
		behavior: behaviors.MOLTEN,
		temp: 1300,
		tempLow: 1200,
		stateLow: "ash",
		tempHigh: 1700, //https://authors.library.caltech.edu/58447/1/018-Senior.pdf
						//https://pubs.acs.org/doi/10.1021/ef049693l
		stateHigh: "vaporized_ash",
		viscosity: 10000,
		category: "liquids",
		state: "liquid",
		density: 2725,
	},

	elements.vaporized_ash = {
		color: ["#df9f50","#dfbc50","#df7d50"],
		behavior: [
			"M2|M1|M2",
			"M1|XX|M1",
			"M2|M1|M2",
		],
		reactions: {
			"vaporized_ash": { "elem1": null, "elem2": "hot_ash_cloud", "chance":0.3, "y":[0,15] },
			"hot_ash_cloud": { "elem1": "hot_ash_cloud", "chance":0.4, "y":[0,15] },
		},
		temp: 1800,
		tempLow: 1700,
		stateLow: "molten_ash",
		category: "gases",
		state: "gas",
		hidden: true,
		density: 3,
	},
	
	elements.hot_ash_cloud = {
		color: ["#bf8f50","#bfac50","#bf7d50"],
		behavior: [
			"XX|XX|XX",
			"M1%7|CH:molten_ash%0.05|M1%7",
			"XX|XX|XX",
		],
		density: 0.7,
		temp: 1800,
		tempLow: 1700,
		stateLow: "cold_ash_cloud",
		category: "gases",
		state: "gas",
	},
	
	elements.cold_ash_cloud = {
		color: ["#af8f50","#ab9c50","#af6d50"],
		behavior: [
			"XX|XX|XX",
			"M1%7|CH:ash%0.05|M1%7",
			"XX|XX|XX",
		],
		density: 0.7,
		temp: 1600,
		tempHigh: 1700,
		stateHigh: "hot_ash_cloud",
		category: "gases",
		state: "gas",
	},
//}

// charcoal {

	elements.charcoal.tempHigh = 800
	elements.charcoal.stateHigh = "carbon_dioxide"

//}

// baking soda {

	elements.baking_soda.tempHigh = 150,
	elements.baking_soda.stateHigh = ["water","carbon_dioxide","calcined_soda"]

	// decomposition result {

		elements.calcined_soda = { //TODO: decomposition?
			color: "#ededed",
			behavior: behaviors.POWDER,
			reactions: {
				"water": { "elem1": "washing_soda", "elem2": null } //should be 10x water
				//"carbon_dioxide": not possible: Na_{2}CO_{3} + CO_{2} + H_{2}O → 2NaHCO_{3}
			},
			category: "powders",
			state: "solid",
			density: 2540,
			tempHigh: 851,
		}

		if(!elements.molten_calcined_soda) {
			elements.molten_calcined_soda = {}
		}

		elements.molten_calcined_soda.temp = 1700
		elements.molten_calcined_soda.tempHigh = 1600
		elements.molten_calcined_soda.stateHigh = "vaporized_calcined_soda"
		elements.molten_calcined_soda.density = 1920
		
		elements.vaporized_calcined_soda = {
			color: ["#ffbf60","#ffdc60","#ff9d60"],
			behavior: [
				"M2|M1|M2",
				"M1|XX|M1",
				"M2|M1|M2",
			],
			reactions: {
				"vaporized_calcined_soda": { "elem1": null, "elem2": "hot_calcined_soda_cloud", "chance":0.3, "y":[0,15] },
				"hot_calcined_soda_cloud": { "elem1": "hot_calcined_soda_cloud", "chance":0.4, "y":[0,15] },
			},
			temp: 1700,
			tempLow: 1600,
			stateLow: "molten_calcined_soda",
			category: "gases",
			state: "gas",
			hidden: true,
			density: 1.5, //bs
		},
		
		elements.hot_calcined_soda_cloud = {
			color: ["#cfbf70","#cfcc70","#cf9d70"],
			behavior: [
				"XX|XX|XX",
				"M1%7|CH:molten_calcined_soda%0.05|M1%7",
				"XX|XX|XX",
			],
			density: 0.7,
			temp: 1700,
			tempLow: 1600,
			stateLow: "cold_calcined_soda_cloud",
			category: "gases",
			state: "gas",
		},
		
		elements.cold_calcined_soda_cloud = {
			color: ["#afaf70","#afac70","#af8d70"],
			behavior: [
				"XX|XX|XX",
				"M1%7|CH:calcined_soda%0.05|M1%7",
				"XX|XX|XX",
			],
			density: 0.7,
			temp: 1500,
			tempHigh: 1600,
			stateHigh: "hot_calcined_soda_cloud",
			category: "gases",
			state: "gas",
		},

	//}
		
	// decomp hydrate {

		elements.washing_soda = {
			color: "#ededed",
			behavior: behaviors.POWDER,
			//no reactions because it always requires ******* water
			category: "powders",
			state: "solid",
			density: 1460,
			tempHigh: 400,
			stateHigh: ["water","calcined_soda"],
		}
		
	//}

	//alkalinities {

		elements.acid.reactions.baking_soda = { "elem1":"neutral_acid", "elem2":null }
		elements.acid.reactions.calcined_soda = { "elem1":"neutral_acid", "elem2":null }
		elements.acid.reactions.washing_soda = { "elem1":"neutral_acid", "elem2":null }
		
	//}

//}

// dirt {

	/*elements.molten_dirt = {
		tempHigh: 3000,
		stateHigh: "lavagas",
	}*/

//}

// calcium {

	elements.molten_calcium = {
		tempHigh: 2200,
		stateHigh: "vaporized_calcium",
	}
	
	elements.vaporized_calcium = {
		color: ["#ffc94a", "#fcd34c", "#ffae36", "#ff9c40","#ffcd90","#cf8d50"],
		behavior: [
			"M2|M1|M2",
			"M1|XX|M1",
			"M2|M1|M2",
		],
		reactions: {
			"vaporized_calcium": { "elem1": null, "elem2": "hot_calcium_cloud", "chance":0.3, "y":[0,15] },
			"hot_calcium_cloud": { "elem1": "hot_calcium_cloud", "chance":0.4, "y":[0,15] },
		},
		density: 1.5, //most of these density values are complete bullshit due to a lack of research
		temp: 1550,
		tempLow: 1484,
		stateLow: "molten_calcium",
		category: "gases",
		state: "gas",
		hidden: true,
	},
	
	elements.hot_calcium_cloud = {
		color: ["#dfa98a", "#dcb38c", "#df8e76", "#ef8c60","#efbdb0","#af8d70"],
		behavior: [
			"XX|XX|XX",
			"M1%7|CH:molten_calcium%0.05|M1%7",
			"XX|XX|XX",
		],
		density: 1.5,
		temp: 1550,
		tempLow: 842,
		stateLow: "cold_calcium_cloud",
		category: "gases",
		state: "gas",
	},
	
	elements.cold_calcium_cloud = {
		color: ["#bf998a", "#bca38c", "#bf8e76", "#cf8c60","#cfadb0","#9f8d70"],
		behavior: [
			"XX|XX|XX",
			"M1%7|CH:calcium%0.05|M1%7",
			"XX|XX|XX",
		],
		density: 2,
		temp: 800,
		tempHigh: 842,
		stateHigh: "hot_calcium_cloud",
		category: "gases",
		state: "gas",
	}

//}

// clay {

	if(!elements.baked_clay) {
		elements.baked_clay = {}
	}

	elements.baked_clay.tempHigh = 1600 //the range of melting points online is so fucking wide
	elements.baked_clay.stateHigh = "molten_clay"

	elements.molten_clay = {
		color: ["#ff6d23","#ff5723","#ff4100"],
		behavior: [
			"XX|CR:fire%2.5|XX",
			"M2|XX|M2",
			"M1|M1|M1",
		],
		temp: 1700,
		tempLow: 1600,
		stateLow: "baked_clay",
		viscosity: 10000,
		hidden: true,
		state: "liquid",
		density: 1800,
		tempHigh: 2980,
		stateHigh: "vaporized_clay",
		category: "liquids",
	}

	elements.vaporized_clay = {
		color: ["#ff8d43","#ff7743","#ff6120"],
		behavior: [
			"M2|M1|M2",
			"M1|XX|M1",
			"M2|M1|M2",
		],
		reactions: {
			"vaporized_clay": { "elem1": null, "elem2": "hot_clay_cloud", "chance":0.3, "y":[0,15] },
			"hot_clay_cloud": { "elem1": "hot_clay_cloud", "chance":0.4, "y":[0,15] },
		},
		density: 1.6,
		temp: 1700,
		tempLow: 1600,
		stateLow: "molten_clay",
		category: "gases",
		state: "gas",
		hidden: true,
	},
	
	elements.hot_clay_cloud = {
		color: ["#ff9945", "#fca347", "#ff7e31"],
		behavior: [
			"XX|XX|XX",
			"M1%7|CH:molten_clay%0.05|M1%7",
			"XX|XX|XX",
		],
		density: 1.5,
		temp: 1550,
		tempLow: 842,
		stateLow: "cold_clay_cloud",
		category: "gases",
		state: "gas",
	},
	
	elements.cold_clay_cloud = {
		color: ["#ef7945", "#ec8347", "#ef5e31"],
		behavior: [
			"XX|XX|XX",
			"M1%7|CH:baked_clay%0.05|M1%7",
			"XX|XX|XX",
		],
		density: 2,
		temp: 800,
		tempHigh: 842,
		stateHigh: "hot_clay_cloud",
		category: "gases",
		state: "gas",
	},

//}

// salt {

	elements.molten_salt = {
		tempHigh: 1465,
		stateHigh: "vaporized_salt",
	}
	
	elements.vaporized_salt = {
		color: ["#ff9f60","#ffbc60","#ff7d60"],
		behavior: [
			"M2|M1|M2",
			"M1|XX|M1",
			"M2|M1|M2",
		],
		reactions: {
			"vaporized_salt": { "elem1": null, "elem2": "hot_salt_cloud", "chance":0.3, "y":[0,15] },
			"hot_salt_cloud": { "elem1": "hot_salt_cloud", "chance":0.4, "y":[0,15] },
		},
		density: 1946,
		temp: 1550,
		tempLow: 1465,
		stateLow: "molten_salt",
		category: "gases",
		state: "gas",
		hidden: true,
	},
	
	elements.hot_salt_cloud = {
		color: ["#ef8f30","#efac60","#ef6d60"],
		behavior: [
			"XX|XX|XX",
			"M1%7|CH:molten_salt%0.05|M1%7",
			"XX|XX|XX",
		],
		density: 2.2,
		temp: 1550,
		tempLow: 801,
		stateLow: "cold_salt_cloud",
		category: "gases",
		state: "gas",
	},
	
	elements.cold_salt_cloud = {
		color: ["#cf7f60","#cf9c60","#cf7d60"],
		behavior: [
			"XX|XX|XX",
			"M1%7|CH:salt%0.05|M1%7",
			"XX|XX|XX",
		],
		density: 2.2,
		temp: 700,
		tempHigh: 801,
		stateHigh: "hot_salt_cloud",
		category: "gases",
		state: "gas",
	},

elements.deuterium = {
    name: "Deuterium",
    color: "#ace0e6",
    behavior: behaviors.GAS,
    reactions: {
        "oxygen": { "elem1":"heavy_water", "elem2":null },
				"neutron": { "elem1":"tritium", "elem2":null }
    },
    category: "gases",
    state: "gas",
    density: 0.18,
    //tempHigh: 9726.85,
    //stateHigh: "ionized_deuterium",
    //tempLow: -254.43,
    //stateLow: "liquid_deuterium"
},

elements.heavy_water = {
color: "#394280",
behavior: behaviors.LIQUID,
category: "liquids",
density: 998,
state: "liquid",
tempHigh: 100,
stateHigh: "heavy_steam",
tempLow: 0,
stateLow: "heavy_ice"
},
elements.heavy_steam = {
color: "#656fb5",
behavior: behaviors.GAS,
category: "gases",
density: 1.6,
state: "liquid",
temp: 150,
tempLow: 100,
stateLow: "heavy_water"
},
elements.heavy_ice = {
color: "#a8b8e3",
behavior: behaviors.STURDYPOWDER,
category: "solids",
density: 918,
state: "solid",
breakInto: "heavy_snow",
temp: -20,
tempHigh: 0,
stateHigh: "heavy_water"
},

elements.heavy_snow = {
color: "#8299b0",
behavior: behaviors.POWDER,
category: "popular",
density: 101,
state: "solid",
temp: -20,
tempHigh: 0,
stateHigh: "heavy_water"
},

elements.argon = {
color: "#92dec7",
colorOn: "#8a27d6",
behavior: behaviors.GAS,
category: "gases",
density: 1.78,
state: "gas",
tempLow: -185.84,
stateLow: "liquid_argon",
conduct: 0.85
},
elements.liquid_argon = {
color: "#679991",
colorOn: "#6d3080",
behavior: behaviors.LIQUID,
category: "liquids",
density: 1398.2,
state: "liquid",
tempHigh: -185.84,
tempLow: -189.34,
temp: -187,
stateLow: "argonic_ice",
stateHigh: "argon",
conduct: 0.9
},
elements.argonic_ice = {
color: "#42998E",
colorOn: "#6d3080",
behavior: behaviors.STURDYPOWDER,
category: "solids",
density: 13.784,
state: "solid",
tempHigh: -189.34,
temp: -187,
breakInto: "argon_powder",
stateHigh: "liquid_argon",
conduct: 0.95
},
elements.argon_powder = {
color: ["#42998E", "#729980", "#329999"],
colorOn: "#6d3080",
behavior: behaviors.POWDER,
category: "powders",
density: 13.784,
hidden: true,
state: "solid",
tempHigh: -189.34,
temp: -187,
stateHigh: "liquid_argon",
conduct: 0.95
},

elements.tritium = {
color: "#7e86bf",
behavior: behaviors.RADIOACTIVE_GAS,
reactions: {
        "oxygen": { "elem1":"radioactive_water", "elem2":null },
				"neutron": { "elem1":"tetrahydrogen", "elem2":null }
    },
category: "gases",
density: 0.2,
state: "gas",
//tempHigh: 9726.85,
//stateHigh: "ionized_tritium",
tempLow: -248.15,
stateLow: "liquid_tritium"
},

elements.tetrahydrogen = {
color: "#5e86bf",
behavior: [
                    "XX|CR:neutron AND DL:tetrahydrogen AND CR:deuterium|XX",
                    "CR:neutron AND DL:tetrahydrogen AND CR:deuterium AND CR:hydrogen|XX|CR:neutron AND DL:tetrahydrogen AND CR:hydrogen",
                    "XX|CR:neutron AND DL:tetrahydrogen AND CR:tritium|XX",
                ],
//reactions: {
//        "oxygen": { "elem1":"radioactive_water", "elem2":null },
//				"neutron": { "elem1":"hydrogen_five", "elem2":null }
//    },
category: "gases",
density: 0.25,
state: "gas",
//tempHigh: 9726.85,
//stateHigh: "ionized_tritium",
//tempLow: -248.15,
//stateLow: "liquid_tritium"
},

elements.liquid_tritium = {
color: "#87ada7",
behavior: behaviors.RADIOACTIVE_LIQUID,
category: "liquids",
density: 50,
state: "liquid",
tempHigh: -248.15,
stateHigh: "tritium",
temp: -260
},
elements.radioactive_water = {
name: "Tritiated Water",
color: "#a510b5",
behavior: behaviors.RADIOACTIVE_LIQUID,
category: "liquids",
density: 1000,
state: "liquid",
tempHigh: 100,
stateHigh: "radioactive_steam",
tempLow: 0,
stateLow: "radioactive_ice"
},
elements.radioactive_steam = {
name: "Tritiated Steam",
color: "#df90e8",
behavior: behaviors.RADIOACTIVE_GAS,
category: "gases",
density: 3.6,
state: "gas",
temp: 150,
tempLow: 100,
stateLow: "radioactive_water"
},

elements.radioactive_ice = {
name: "Tritiated Ice",
color: "#c2abcc",
behavior: behaviors.RADIOACTIVE_SOLID,
category: "solids",
state: "solid",
density: 920,
temp: -20,
tempHigh: 0,
breakInto: "radioactive_snow",
stateHigh: "radioactive_water"
},

elements.radioactive_snow = {
name: "Tritiated Snow",
color: "#9f7ba6",
behavior: behaviors.RADIOACTIVE_POWDER,
category: "powders",
density: 103,
state: "solid",
temp: -20,
tempHigh: 0,
stateHigh: "radioactive_water"
},

elements.carbon = {
reactions: {
			"oxygen": { "elem1": null, "elem2": "carbon_dioxide", "chance":0.8 }
		},
color: "#424242",
category: "solids",
state: "solid",
behavior: behaviors.WALL,
burn: 5,
burnTime: 3000,
burnInto: ["carbon", "carbon_dioxide"],
stateHigh: "carbon_vapor",
breakInto: "carbon_powder",
tempHigh: 3550,
},
elements.carbon_powder = {
reactions: {
			"oxygen": { "elem1": null, "elem2": "carbon_dioxide", "chance":0.8 }
		},
color: "#424242",
category: "powders",
state: "solid",
behavior: behaviors.POWDER,
burn: 5,
hidden: true,
burnTime: 3000,
burnInto: ["carbon", "carbon_dioxide"],
stateHigh: "carbon_vapor",
tempHigh: 3550,
},
elements.carbon_vapor = {
color: ["#eda92b", "#f0af37", "#f5bb51", "#f5d151", "#fce697", "#fff4cf"],
reactions: {
			"oxygen": { "elem1": null, "elem2": "carbon_dioxide", "chance":0.8 }
		},
category: "gases",
state: "gas",
behavior: behaviors.GAS,
stateLow: "carbon",
tempLow: 3550,
temp: 5000,
density: 1.2,
viscosity: 10000,
},
elements.quartz = {
color: ["#f2f0e4", "#f7f7f2", "#bdb69f"],
category: "solids",
state: "solid",
behavior: behaviors.WALL,
tempHigh: 1715,
stateHigh: "molten_quartz"
},
elements.molten_quartz = {
color: ["#e0960b", "#edb92b", "#f7d748", "#ffe675", "#ede2af", "#fffdf2"],
category: "liquids",
state: "liquid",
behavior: behaviors.LIQUID,
tempLow: 1715,
stateLow: "quartz",
temp: 2000,
viscosity: 10000,
density: 2.65,
tempHigh: 2230,
stateHigh: "vaporized_quartz"
},
elements.vaporized_quartz = {
color: ["#e0960b", "#edb92b", "#f7d748", "#ffe675", "#ede2af", "#fffdf2", "#f2f0e4", "#f7f7f2", "#bdb69f"],
category: "gases",
state: "gas",
behavior: behaviors.GAS,
tempLow: 1715,
temp: 2400,
viscosity: 10000,
density: 2.65,
tempLow: 2230,
stateLow: "molten_quartz"
},
elements.up_pusher = {
	color: "#7f7f7f",
	tick: function(pixel) {
		for(i=9; i>=0; i--) {
			if (!isEmpty(pixel.x,pixel.y-1-i,true)) {
				tryMove(pixelMap[pixel.x][pixel.y-1-i],pixel.x,pixel.y-2-i)
			}
		}
	},
	category: "machines",
	insulate: true,
	state: "solid",
	
},
elements.throw_right = {
	color: "#7f7f7f",
	tick: function(pixel) {
		for(i=9; i>=0; i--) {
			if (!isEmpty(pixel.x,pixel.y-1-i,true)) {
				tryMove(pixelMap[pixel.x+1][pixel.y-1-i],pixel.x,pixel.y-2-i)
			}
		}
	},
	category: "tools",
	insulate: true,
	state: "solid",
	
},
elements.throw_left = {
	color: "#7f7f7f",
	tick: function(pixel) {
		for(i=9; i>=0; i--) {
			if (!isEmpty(pixel.x,pixel.y-1-i,true)) {
				tryMove(pixelMap[pixel.x-1][pixel.y-1-i],pixel.x,pixel.y-2-i)
			}
		}
	},
	category: "tools",
	insulate: true,
	state: "solid",
	
},
elements.underhand_right = {
	color: "#7f7f7f",
	tick: function(pixel) {
		for(i=9; i>=0; i--) {
			if (!isEmpty(pixel.x,pixel.y-1-i,true)) {
				tryMove(pixelMap[pixel.x+1][pixel.y+1-i],pixel.x,pixel.y-2-i)
			}
		}
	},
	category: "energy",
	insulate: true,
	state: "solid",
	
},
elements.underhand_left = {
	color: "#7f7f7f",
	tick: function(pixel) {
		for(i=9; i>=0; i--) {
			if (!isEmpty(pixel.x,pixel.y-1-i,true)) {
				tryMove(pixelMap[pixel.x-1][pixel.y+1-i],pixel.x,pixel.y-2-i)
			}
		}
	},
	category: "energy",
	insulate: true,
	state: "solid",
	
},
elements.down_pusher = {
	color: "#7f7f7f",
	tick: function(pixel) {
		for(i=9; i>=0; i--) {
			if (!isEmpty(pixel.x,pixel.y+1+i,true)) {
				tryMove(pixelMap[pixel.x][pixel.y+1+i],pixel.x,pixel.y+2+i)
			}
		}
	},
	category: "machines",
	insulate: true,
	state: "solid",
},

elements.left_pusher = {
	color: "#7f7f7f",
	tick: function(pixel) {
		for(i=9; i>=0; i--) {
			if (!isEmpty(pixel.x-1-i,pixel.y,true)) {
				tryMove(pixelMap[pixel.x-1-i][pixel.y],pixel.x-2-i,pixel.y)
			}
		}
	},
	category: "machines",
	insulate: true,
	state: "solid",
},

elements.right_pusher = {
	color: "#7f7f7f",
	tick: function(pixel) {
		for(i=9; i>=0; i--) {
			if (!isEmpty(pixel.x+1+i,pixel.y,true)) {
				tryMove(pixelMap[pixel.x+1+i][pixel.y],pixel.x+2+i,pixel.y)
			}
		}
	},
	category: "machines",
	insulate: true,
	state: "solid",
},
elements.cactus = {
                  color: "#237543",
                  behavior: behaviors.WALL,
                  tempHigh: 500,
                  stateHigh: "ash",
                  category: "life",
                  state: "solid",
                  density: 2400,
                  hardness: 0.5,
                  breakInto: "dust",
              },
elements.sand.stateHigh = "sandstone";
elements.sand.tempHigh = "100",
elements.sand.atoms = ["silicon", "oxygen", "oxygen"],
elements.sandstone.color = "#FFDC45",
elements.sandstone.breakInto = "sand",
elements.redSand.stateHigh = "redSandstone";
elements.redSand.tempHigh = "100";
elements.redSand.atoms = ["silicon", "oxygen", "oxygen", "iron", "oxygen", "oxygen"];
elements.redSand.breakInto = null;
elements.redSandstone.color = "#F08137";
elements.redSandstone.breakInto = "redSand";
elements.snow.tempLow = -20;
elements.snow.stateLow = "packed_snow",
elements.graupel.tempLow = -25;
elements.graupel.stateLow = "graupel";
elements.hail.tempLow = -30;
elements.hail.stateLow = "ice",
/*elements.red_dye = {
    "name": "red dye",
    "color": "#bb0000",
	"state": "solid",
    "behavior": [
        "CC:#ff0000|XX|CC:#ff0000",
        "CC:#ff0000|CC:#bb0000|CC:#ff0000",
        "M2 AND CC:#ff0000|M1 AND CC:#ff0000|M2 AND CC:#ff0000",
    ],
	"density": 100,
    "category": "dyes",
	"reactions": {
        "green_dye": { "elem1": "yellow_dye", "elem2": "yellow_dye", },
		"blue_dye": { "elem1": "magenta_dye", "elem2": "magenta_dye", }, 
		},
},
elements.green_dye = {
    "name": "green dye",
    "color": "#00bb00",
	"state": "solid",
    "behavior": [
		"XX|XX|XX",
		"CC:#00ff00|CC:#00bb00|CC:#00ff00",
        "M2 AND CC:#00ff00|M1 AND CC:#00ff00|M2 AND CC:#00ff00",
    ],
	"density": 100,
    "category": "dyes",
	"reactions": {
		"red_dye": { "elem1": "yellow_dye", "elem2": "yellow_dye", },
		"blue_dye": { "elem1": "cyan_dye", "elem2": "cyan_dye", },
	},
},
elements.blue_dye = {
    "name": "blue dye",
    "color": "#0000bb",
	"state": "solid",
    "behavior": [
        "XX|XX|XX",
        "CC:#0000ff|CC:#0000bb|CC:#0000ff",
        "M2 AND CC:#0000ff|M1 AND CC:#0000ff|M2 AND CC:#0000ff",
    ],
	"density": 100,
    "category": "dyes",
},
elements.yellow_dye = {
    "name": "yellow dye",
    "color": "#bbbb00",
	"state": "solid",
    "behavior": [
        "XX|XX|XX",
        "CC:#ffff00|CC:#bbbb00|CC:#ffff00",
        "M2 AND CC:#ffff00|M1 AND CC:#ffff00|M2 AND CC:#ffff00",
    ],
	"density": 100,
    "category": "dyes",
},
elements.cyan_dye = {
    "name": "cyan dye",
    "color": "#00bbbb",
	"state": "solid",
    "behavior": [
		"XX|XX|XX",
		"CC:#00ffff|CC:#00bbbb|CC:#00ffff",
		"M2 AND CC:#00ffff|M1 AND CC:#00ffff|M2 AND CC:#00ffff",
    ],
	"density": 100,
    "category": "dyes",
},
elements.magenta_dye = {
    "name": "magenta dye",
    "color": "#bb00bb",
	"state": "solid",
    "behavior": [
        "XX|XX|XX",
        "CC:#ff00ff|CC:#bb00bb|CC:#ff00ff",
        "M2 AND CC:#ff00ff|M1 AND CC:#ff00ff|M2 AND CC:#ff00ff",
    ],
	"density": 100,
    "category": "dyes",
},
elements.dye_cleaner = {
    "name": "dye cleaner",
    "color": "#bababa",
	"state": "liquid",
    "behavior": [
        "XX|XX|XX",
        "M2 AND DL:"+eLists.DYE+"|CC:#bababa AND DL%1|M2 AND DL:"+eLists.DYE+"",
        "M1 AND DL:"+eLists.DYE+"|M1 AND DL:"+eLists.DYE+"|M1 AND DL:"+eLists.DYE+"",
    ],
	"density": 99,
    "category": "dyes",
    "hidden": false,
},*/
elements.cloud = {
		name: 'Cirrus cloud',
    color: "#f0f5ff",
    behavior: [
        "XX|XX|XX",
        "M1%5|XX|M1%5",
        "XX|XX|XX",
    ],
    category:"gases",
    state: "gas",
    density: 1,
    conduct: 0.03,
	reactions: {
		"water": { "elem1": "rain_cloud", "elem2": null },
		"snow": { "elem1": "snow_cloud", "elem2": null },
		"graupel": { "elem1": "graupel_cloud", "elem2": null },
		"mercury": { "elem1": "mercury_cloud", "elem2": null },
	}
},
//}

//The "pixelSize" query parameter sets the size of the pixels; this is inversely proportional to the pixel "resolution", so bigger numbers mean less pixels fit on the screen and smaller numbers mean that more pixels will fit.
//Depending on your screen's size, the default pixelSize is either 5 or 6 (6 on larger screens).
//Making the pixels twice as big will decrease the pixel capacity by *slightly over* 4, and the reverse is also true. (I don't know why that is.)

urlParams = new URLSearchParams(window.location.search);

if(urlParams.get('pixelSize') != null) { //null check
    pixelSize = urlParams.get('pixelSize')
    if(isNaN(pixelSize) || pixelSize === "" || pixelSize === null) { //NaN check
        // Vanilla code: If the screen size is under 768px, set pixelSize to 5, otherwise 6
        if (window.innerWidth < 768) {
            pixelSize = 3;
        } else {
            pixelSize = 5;
        }
    }
    pixelSize = parseFloat(pixelSize)
    pixelSize = Math.min(194.73749999999999,Math.max(pixelSize,0.05))
} else {
    // Vanilla code: If the screen size is under 768px, set pixelSize to 5, otherwise 6
    if (window.innerWidth < 768) {
        pixelSize = 4;
    } else {
        pixelSize = 5;
    }
}