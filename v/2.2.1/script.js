function includesArray(parentArray, testArray) {
    for (let i = 0; i < parentArray.length; i++) {
        if (parentArray[i].every(function(value, index) { return value === testArray[index]})) {
            return true;
        }
    }
    return false;
}

elements.portal_in = {
	color: "#ee7f00",
	tick: function(pixel) {
		if(!pixel.portalArray) { pixel.portalArray = [] }
		if(!Array.isArray(pixel.portalArray)) { pixel.portalArray = [] }
		for (var i = 1; i < width; i++) {
			for (var j = 1; j < height; j++) {
				if (!isEmpty(i,j)) {
					if(pixelMap[i][j].element == "portal_out") {
						if(!includesArray(pixel.portalArray,[i,j])) {
							pixel.portalArray.push([i,j])
						}
					}
				}
				if (isEmpty(i,j)) {
					if(includesArray(pixel.portalArray,[i,j])) {
						pixel.portalArray = pixel.portalArray.filter(dat => !includesArray(pixel.portalArray,[i,j]))

					}
				}
			}
		}
		if(pixel.portalArray.length > 0) {
			randomDestination = pixel.portalArray[Math.floor((Math.random() * pixel.portalArray.length))]
			if(!isEmpty(pixel.x-1,pixel.y) && !outOfBounds(pixel.x-1,pixel.y)) {
				if(pixelMap[pixel.x-1][pixel.y].element != pixel.element) {
					tryMove(pixelMap[pixel.x-1][pixel.y],(randomDestination[0] + 1),(randomDestination[1]))
				}
			}
			if(!isEmpty(pixel.x+1,pixel.y) && !outOfBounds(pixel.x+1,pixel.y)) {
				if(pixelMap[pixel.x+1][pixel.y].element != pixel.element) {
					tryMove(pixelMap[pixel.x+1][pixel.y],(randomDestination[0] - 1),(randomDestination[1]))
				}
			}
			if(!isEmpty(pixel.x,pixel.y-1) && !outOfBounds(pixel.x,pixel.y-1)) {
				if(pixelMap[pixel.x][pixel.y-1].element != pixel.element) {
					tryMove(pixelMap[pixel.x][pixel.y-1],(randomDestination[0]),(randomDestination[1] + 1))
				}
			}
			if(!isEmpty(pixel.x,pixel.y+1) && !outOfBounds(pixel.x,pixel.y+1)) {
				if(pixelMap[pixel.x][pixel.y+1].element != pixel.element) {
					tryMove(pixelMap[pixel.x][pixel.y+1],(randomDestination[0]),(randomDestination[1] - 1))
				}
			}
		}
	},
	category: "machines",
	state: "solid",
	portalArray: [],
},

elements.portal_out = {
	color: "#2222ee",
	behavior: behaviors.WALL,
	category: "machines",
	state: "solid",
}
elements.tooth = {
	color: "#d9d9d9",
	behavior: behaviors.SUPPORT,
	reactions: {
		"sugar": { "elem1": "decayed_tooth", "elem2": null, "chance": 0.003 },
		"plaque": { "elem1": "decayed_tooth", "elem2": null, "chance": 0.002 },
		"acid": { "elem1": "decayed_tooth", "elem2": null },
	},
	category:"life",
	tempHigh: 1000, //https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5887641/
	stateHigh: ["steam","salt","meat","hydroxyapatite"],
	state: "solid",
	density: 2000, //(bs) inspired by https://ncbi.nlm.nih.gov/pmc/articles/PMC5176275/
	hardness: 0.5,
	breakInto: ["meat","hydroxyapatite"],
},

elements.ivory = {
	color: "#f9d9d9",
	behavior: behaviors.SUPPORT,
	category:"solids",
	tempHigh: 1000, //https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5887641/
	stateHigh: ["salt","hydroxyapatite"],
	state: "solid",
	density: 2000, //(bs) inspired by https://ncbi.nlm.nih.gov/pmc/articles/PMC5176275/
	hardness: 0.5,
	breakInto: ["tooth","hydroxyapatite"],
},

	
elements.plaque = {
	color: "#faf6dc",
	behavior: [
		"XX|ST AND CR:plague%0.01 AND CR:acid%0.01 AND CR:infection%0.003 AND CH:tooth>decayed_tooth%0.01|XX",
		"ST AND CR:plague%0.01 AND CR:acid%0.01 AND CR:infection%0.003 AND CH:tooth>decayed_tooth%0.01|CH:tartar%0.001|ST AND CR:plague%0.01 AND CR:acid%0.01 AND CR:infection%0.003 AND CH:tooth>decayed_tooth%0.01",
		"M2|M1 AND ST AND CR:plague%0.01 AND CR:acid%0.01 AND CR:infection%0.003 AND CH:tooth>decayed_tooth%0.01|M2",
	],
	reactions: {
		"acid": { "elem1": null, "elem2": null, "chance": 0.01 },
	},
	category:"life",
	tempHigh: 100,
	stateHigh: ["steam","plague"],
	state: "solid",
	density: 5.4, //https://physics.aps.org/articles/v5/s140#:~:text=They%20then%20use%20tabulated%20values,%2D12%20gram)%20per%20cell. 
				  //https://en.wikipedia.org/wiki/Calculus_(dental)#:~:text=Cell%20density%20within%20dental%20plaque,estimated%20200%2C000%2C000%20cells%20per%20milligram.
	hidden: true,
},

elements.tartar = {
	color: ["#e8d595", "#cfb27e", "#f0e989"],
	behavior: [
		"XX|ST AND CR:plague%0.02 AND CR:acid%0.01 AND CR:infection%0.003 AND CH:tooth>decayed_tooth%0.01|XX",
		"ST AND CR:plague%0.02 AND CR:acid%0.01 AND CR:infection%0.003 AND CH:tooth>decayed_tooth%0.01|CH:tartar%0.01|ST AND CR:plague%0.02 AND CR:acid%0.01 AND CR:infection%0.003 AND CH:tooth>decayed_tooth%0.01",
		"XX|M1 AND ST AND CR:plague%0.02 AND CR:acid%0.01 AND CR:infection%0.003 AND CH:tooth>decayed_tooth%0.01|XX",
	],
	reactions: {
		"acid": { "elem1": null, "elem2": null, "chance": 0.01 },
	},
	category:"solids",
	tempHigh: elements.calcium.tempHigh,
	stateHigh: ["steam","plague","calcium"],
	state: "solid",
	density: 1900,
	hardness: elements.tooth.hardness - 0.05,
	breakInto: ["calcium","calcium","calcium","calcium","rotten_meat","rotten_meat","plague"],
	hidden: true,
},

elements.decayed_tooth = {
	color: ["#aba89d","#85837b","#7a7972","#b8b5a5","#6b6a63"],
	behavior: [
		"XX|XX|XX",
		"SP%99.5|DL%0.04|SP%99.5",
		"XX|M1|XX",
	],
	reactions: {
		"acid": { "elem1": null, "elem2": null, "chance": 0.7 },
	},
	tempHigh: 1000,
	stateHigh: ["steam","salt","meat","hydroxyapatite"],
	state: "solid",
	category: "solids",
	density: 1900,
	hardness: 0.3,
	breakInto: ["rotten_meat","hydroxyapatite"],
	hidden: true,
},

elements.hydroxyapatite = {
    color: ["#edecda", "#f5f5f5", "#e8e8e8"],
    behavior: behaviors.POWDER,
    state: "solid",
    category: "solids",
    density: 3180,
    tempHigh: 1670,
	/* it decomposes but not into anything worth adding
	https://www.sciencedirect.com/science/article/abs/pii/S0142961299000769 */
    category: "powders",
},

elements.toothpaste = {
    color: ["#f8f8f8", "#6699ff", "#f8f8f8", "#ff5555"],
    behavior: [
		"XX|SW:plaque%5|XX",
		"SW:plaque%5|XX|SW:plaque%5",
		"M2|SW:plaque%5|M2",
	],
	reactions: {
		"plaque": {"elem1":["foam","toothpaste","toothpaste"], "elem2":"foam", "chance":0.7},
		"decayed_tooth": {"elem1":"tooth", "elem2":"foam", "chance":0.5},
	},
    state: "solid",
    category: "other",
    density: 1330,
    tempHigh: 250, //bs
	stateHigh: ["toothpaste","toothpaste","toothpaste","toothpaste","toothpaste","toothpaste","toothpaste","toothpaste","toothpaste","toothpaste","foam","foam","fire","smoke","ash"],
	burn: 5,
	burnInto: ["fire","smoke","smoke","ash","ash","toothpaste"],
	viscosity: 20000,
	/* it decomposes but not into anything worth adding
	https://www.sciencedirect.com/science/article/abs/pii/S0142961299000769 */
    category: "powders",
},

	elements.iron.hardness = 0.74
//https://www.engineeringtoolbox.com/bhn-brinell-hardness-number-d_1365.html
//https://en.wikipedia.org/wiki/Hardnesses_of_the_elements_(data_page)
//"Annealed chissel steel" hardness and then divided by iron hardness (Brinell)
//sqrt()ed like IACS-derived conductivities and scaled to the 0.8 hardness of steel
//and because 1 means infinite hardness, the others are derived using
//1-(0.26/(otherThingBHN/200))
//it doesn't matter much anyway but I'd like to have some semblance/veneer of accuracy

//Copper exists

elements.ruthenium = {
    color: ["#e8ebca","#eaebd5"], //color pulled from my ass because I don't want another gray metal
    behavior: behaviors.STURDYPOWDER,
    tempHigh: 2334,
    category: "solids",
		breakInto: "ruthenium_powder",
    state: "solid",
    density: 12450,
    conduct: 0.45,
    hardness: 0.97593,
},
elements.ruthenium_powder = {
    color: ["#e8ebca","#eaebd5"], //color pulled from my ass because I don't want another gray metal
    behavior: behaviors.POWDER,
    tempHigh: 2334,
    category: "powders",
    state: "solid",
    density: 12450,
    conduct: 0.45,
    hardness: 0.97593,
},

elements.molten_ruthenium = {
    density: 10650,
},

elements.rhodium = {
    color: ["#f0e4df","#f7eae4"], //it looked slightly reddish on Wikipedia
    behavior: behaviors.WALL,
    tempHigh: 1964,
    category: "solids",
    state: "solid",
    density: 12410,
    conduct: 0.59,
    hardness: 0.94694,
},

elements.molten_rhodium = {
    density: 10700,
},

elements.palladium = {
    color: ["#fff8ed","#f5e6ce","#faeccf"], //Terraria reference
    behavior: behaviors.STURDYPOWDER,
    tempHigh: 1555,
    category: "solids",
    state: "solid",
    density: 12023,
    conduct: 0.38,
    hardness: 0.82667,
},
elements.palladium_ore = {
                color: ["#d8e1eb","#cee1f0", "#dfd1ed","#eeeeee", "#808080","#4f4f4f","#949494"],
                behavior: behaviors.STURDYPOWDER,
                tempHigh: 1768,
                category: "solids",
								breakInto: ["iridium", "rock"],
								stateHigh: ["molten_iridium", "magma"],
                density: 19300,
                conduct: 0.81,
            },
elements.netherite = {
    color: "#474f52", //Terraria reference
    behavior: behaviors.STURDYPOWDER,
		breakInto: ["platinum", "gold", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite", "netherite"],
    category: "solids",
    state: "solid",
    density: 12023,
    hardness: 2,
},
elements.netherrack = {
    color: "#AA0000", //Terraria reference
    behavior: behaviors.POWDER,
    category: "solids",
    state: "solid",
    density: 10,
    conduct: 0.38,
    hardness: 0.05,
},
elements.molten_palladium = {
    density: 10380,
},

//Silver exists

elements.rhenium = {
    color: ["#e5f0d1","#e6edda"], //it looks like almost every other metal but in some pictures the lighting makes it look ever-so-slightly greenish
    behavior: behaviors.STURDYPOWDER,
    tempHigh: 3186,
    category: "solids",
    state: "solid",
    density: 21020,
    conduct: 0.29,
    hardness: 0.96061,
},
elements.rhenium_ore = {
                color: ["#e5f0d1","#e6edda", "#dfd1ed","#eeeeee", "#808080","#4f4f4f","#949494"],
                behavior: behaviors.STURDYPOWDER,
                tempHigh: 3186,
                category: "solids",
								breakInto: ["rhenium", "rock"],
								stateHigh: ["molten_rhenium", "magma"],
                density: 19300,
                conduct: 0.81,
            },
elements.molten_rhenium = {
    density: 18900,
},

elements.osmium = {
    color: ["#d8e1eb","#cee1f0"], //it looks bluish
    behavior: behaviors.STURDYPOWDER,
    tempHigh: 3033,
    category: "solids",
    state: "solid",
    density: 22590,
    conduct: 0.40,
    hardness: 0.98673,
},
elements.osmium_ore = {
                color: ["#dddddd","#d7d7d7", "#808080","#4f4f4f","#949494"],
                behavior: behaviors.STURDYPOWDER,
                tempHigh: 1768,
                category: "solids",
								breakInto: ["osmium", "rock"],
								stateHigh: ["molten_osmium", "magma"],
                density: 19300,
                conduct: 0.81,
            },
elements.molten_osmium = {
    density: 2e4,
},

elements.iridium = {
    color: ["#d8e1eb","#cee1f0","#dfd1ed","#eeeeee"], //Minecraft and Stardew Valley reference
    behavior: behaviors.STURDYPOWDER,
    tempHigh: 2446,
    category: "solids",
    state: "solid",
    density: 22560,
    conduct: 0.54,
    hardness: 0.96886,
},
elements.iridium_ore = {
                color: ["#d8e1eb","#cee1f0", "#dfd1ed","#eeeeee", "#808080","#4f4f4f","#949494"],
                behavior: behaviors.STURDYPOWDER,
                tempHigh: 1768,
                category: "solids",
								breakInto: ["iridium", "rock"],
								stateHigh: ["molten_iridium", "magma"],
                density: 19300,
                conduct: 0.81,
            },
elements.molten_iridium = {
    density: 19000,
},

elements.platinum = {
    color: ["#dddddd","#d7d7d7"],
    behavior: behaviors.STURDYPOWDER,
    tempHigh: 1768,
    category: "solids",
    state: "solid",
    density: 21450,
    conduct: 0.38,
    hardness: 0.83226,
},
elements.platinum_ore = {
                color: ["#dddddd","#d7d7d7", "#808080","#4f4f4f","#949494"],
                behavior: behaviors.STURDYPOWDER,
                tempHigh: 1768,
                category: "solids",
								breakInto: ["platinum", "rock"],
								stateHigh: ["molten_platinum", "magma"],
                density: 19300,
                conduct: 0.81,
            },
elements.molten_platinum = {
    density: 19770,
}



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
    behavior: behaviors.VAPOUR,
    category: "vapours",
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

/*elements.solidFridaythethirteenthium = {
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
    behavior: behaviors.VAPOUR,
    category: "special",
    viscosity: 131313,
    state: "solid",
    burn: 13,
    burnTime: 13,
    fireColor: "#130000",
    density: 1300
};*/

elements.generic_solid = {
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

elements.liquid_generic = {
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
elements.poisoned_liquidGeneric = {
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
elements.generic_vapour = {
    color: "#123456",
    behavior: behaviors.VAPOUR,
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
                behavior: behaviors.VAPOUR,
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
                behavior: behaviors.VAPOUR,
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
behaviors.POISONED_VAPOUR = [
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
    category:"vapours",
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
    category:"vapours",
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
    category:"vapours",
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
    category:"vapours",
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
    behavior: behaviors.VAPOUR,
    density: 0.6,
    state: "gas",
    tempLow: 100,
    stateLow: "ketchup",
    category: "vapours",
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
    behavior: behaviors.POISONED_VAPOUR,
    density: 0.6,
    state: "gas",
    tempLow: 100,
    stateLow: "poisoned_ketchup",
    category: "vapours",
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
	category: "dirty",
	state: "liquid",
	density: 1030, //bs
	viscosity: 3,
	stain: 0.51,
},
elements.hard_piss = {
	color: "#cee210",
	name: 'Hard Pee',
	behavior: behaviors.STURDYPOWDER,
	reactions: {
		"fly": { "elem1":"fly", "elem2":[null,null,null,null,null,null,"fly"], "chance":0.02, },
	},
	tempLow: -50,
	stateLow: "pee_ice",
	tempHigh: 100,
	stateHigh: "fart",
	category: "dirty",
	state: "liquid",
	density: 1030, //bs
	viscosity: 2,
	stain: 0.44,
},	
elements.bile = {
	color: "#FFFF00",
	name: 'Bile',
	behavior: behaviors.POWDER,
	reactions: {
		"fly": { "elem1":"fly", "elem2":[null,null,null,null,null,null,"fly"], "chance":0.02, },
		"ocean": { "elem1":"red_pee", "elem2":null },
		"salt_water": { "elem1":"amber_pee", "elem2":null },
		"water": { "elem1":"pee", "elem2":null },
	},
	tempLow: -50,
	stateLow: "pee_ice",
	tempHigh: 100,
	stateHigh: "fart",
	category: "dirty",
	state: "solid",
	density: 1030, //bs
	viscosity: 2,
	stain: 0.44,
},
elements.lactic_pee = {
	color: "#FFFFE0",
	name: 'Lactic Piss',
	behavior: behaviors.LIQUID,
	
	reactions: {
		"milk": { "elem1":"milk_powder", "elem2":[null,null,null,null,null,null,"pee"], "chance":0.02, },
	},
	tempLow: -50,
	stateLow: "pee_ice",
	tempHigh: 100,
	atoms: ["milk","pee"],
	stateHigh: "fart",
	category: "dirty",
	state: "liquid",
	density: 1030, //bs
	viscosity: 2,
	stain: 0.44,
},
elements.poop = {
    color: "#8A4D24",
	behavior: [
		"XX|CR:stench%0.1 AND CR:fly%0.01 AND CR:methane%0.0316|XX",
		"XX|CH:dried_poop%0.02|XX",
		"M2%50|M1 AND SW:water%50|M2%50",
	],
    category: "dirty",
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
		name: "Yellow Piss",
    viscosity: 1,
		tempHigh: 100,
		stateHigh: "fart",
		tempLow: 0,
		stateLow: "pee_ice",
    reactions: {},
		breakInto: ["bile", "water"],
    state: "liquid",
    density: 44
};
elements.amber_pee = {
    color: "#ffbf00",
	behavior: [
		"XX|CR:stench%0.1|XX",
		"XX|XX|XX",
		"M2%50|M1 AND SW:water%50|M2%50",
	],
    category: "liquids",
		name: "Amber Piss",
    viscosity: 1.21,
		tempHigh: 100,
		stateHigh: "fart",
		tempLow: 0,
		stateLow: "pee_ice",
    reactions: {},
		breakInto: ["bile", "bile", "bile", "bile", "water", "blood"],
    state: "liquid",
    density: 46
};
elements.red_pee = {
    color: "#8a0303",
	behavior: [
		"XX|CR:stench%0.1|XX",
		"XX|XX|XX",
		"M2%50|M1 AND SW:water%50|M2%50",
	],
    category: "liquids",
		name: "Red Piss",
    viscosity: 1.46,
		tempHigh: 100,
		stateHigh: ["fart","blood"],
		tempLow: 0,
		stateLow: ["pee_ice","blood"],
    reactions: {},
		breakInto: ["bile", "bile", "bile", "bile", "bile", "blood", "blood"],
    state: "liquid",
    density: 49
};
elements.brown_pee = {
    color: "#70543e",
	behavior: [
		"XX|CR:stench%0.1|XX",
		"XX|XX|XX",
		"M2%50|M1 AND SW:water%50|M2%50",
	],
    category: "liquids",
		name: "Brown Piss",
    viscosity: 2.37,
		tempHigh: 100,
		stateHigh: ["fart","blood", "dirt"],
		tempLow: 0,
		stateLow: ["pee_ice","blood", "frozen_dirt"],
    reactions: {},
		breakInto: ["bile", "bile", "bile", "bile", "bile", "blood", "blood"],
    state: "liquid",
    density: 57
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
	
//INSERT NEW ELEMENTS ABOVE
elements.granite = {
    color: ["#F3C3AD", "#F0AB75", "#DDA888", "#BD927E", "#998473", "#5C5E53", "#BD8366"],
		"reactions": {
		    "polish": { "elem1": "polished_granite", "elem2": "polish" },
  	},
    behavior: behaviors.STURDYPOWDER,
    category: "popular",
    tempHigh: 1215,
    stateHigh: "felsic_magma",
    density: 2691,
    hardness: 0.75,
    breakInto: "granite_gravel",
};
elements.polished_granite = {
    color: ["#F3C3AD", "#F0AB75", "#BD8366"],
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
		"reactions": {
		    "polish": { "elem1": "polished_diorite", "elem2": "dust" },
  	},
    behavior: behaviors.STURDYPOWDER,
    category: "popular",
    tempHigh: 1300,
    stateHigh: "intermediate_magma",
    density: 2822, //last 2 digits made up.
    hardness: 0.70, //bs'd from MH rel to granite
    breakInto: "diorite_gravel",
};
elements.polished_diorite = {
    color: "#d3d3d3", //Extracted from image and blended
    //By Michael C. Rygel - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=31124755
		"reactions": {
		    "polish": { "elem1": "polished_diorite", "elem2": null },
  	},
    behavior: behaviors.STURDYPOWDER,
    category: "solids",
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
		"reactions": {
		    "polish": { "elem1": "polished_peridotite", "elem2": "polish" },
  	},
    behavior: behaviors.STURDYPOWDER,
    category: "popular",
    tempHigh: 1400,
    stateHigh: "ultramafic_magma",
    density: 3347, //appr from https://agupubs.onlinelibrary.wiley.com/doi/abs/10.1029/GL003i009p00509#:~:text=Abstract,and%20the%20bulk%20rock%20analyses.
    hardness: 0.76,
    breakInto: "peridotite_gravel",
};
elements.polished_peridotite = {
    color: ["#C6BC87","#8C8656"],
		"reactions": {
		    "polish": { "elem1": "polished_peridotite", "elem2": null },
  	},
    behavior: behaviors.STURDYPOWDER,
    category: "solids",
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
		"reactions": {
		    "polish": { "elem1": "polished_rhyolite", "elem2": "polish" },
  	},
    category: "popular",
    tempHigh: 800,
    stateHigh: "felsic_magma",
    density: 2555, //very wide range
    hardness: 0.75,
    breakInto: "rhyolite_gravel",
};
elements.polished_rhyolite = {
    color: ["#BF967E","#D9B5A0","#C99F86","#C5997E"],
    // also from one of Michael C. Rygel's images
    behavior: behaviors.STURDYPOWDER,
		"reactions": {
		    "polish": { "elem1": "polished_rhyolite", "elem2": null },
  	},
    category: "solids",
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
elements.water.behavior = [
    "XX|XX|XX",
    "XX|XX|M2 AND BO",
    "XX|M1|M2",
];
elements.water.flippableX = true;
elements.mercury.behavior = [
    "XX|XX|XX",
    "XX|XX|M2 AND BO",
    "XX|M1|M2",
];
elements.mercury.flippableX = true;
elements.liquid_oxygen.behavior = [
    "XX|XX|XX",
    "XX|XX|M2 AND BO",
    "XX|M1|M2",
];
elements.liquid_oxygen.flippableX = true;
behaviors.LIQUID.flippableX = true;

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
	behavior: behaviors.VAPOUR,
	color: '#BDBEBF',
	state: "gas",
},
elements.berylliumOxide = {
	name: 'berylliumOxide',
	category: 'vapours',
	behavior: behaviors.VAPOUR,
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
	behavior: behaviors.VAPOUR,
	category: 'vapours',
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
	behavior: behaviors.VAPOUR,
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
                behavior: behaviors.VAPOUR,
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
    behavior: behaviors.VAPOUR,
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
		category: "vapours",
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
		category: "vapours",
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
		category: "vapours",
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
		behavior: behaviors.DVAPOUR,
    category: "vapours",
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
    category: "vapours",
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
		category: "vapours",
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
		category: "vapours",
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
		category: "vapours",
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
		category: "vapours",
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
		category: "vapours",
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
		category: "vapours",
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
			category: "vapours",
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
			category: "vapours",
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
			category: "vapours",
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
		category: "vapours",
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
		category: "vapours",
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
		category: "vapours",
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
		category: "vapours",
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
		category: "vapours",
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
		category: "vapours",
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
		category: "vapours",
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
		category: "vapours",
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
		category: "vapours",
		state: "gas",
	},

elements.deuterium = {
    name: "Deuterium",
    color: "#ace0e6",
    behavior: behaviors.VAPOUR,
    reactions: {
        "oxygen": { "elem1":"heavy_water", "elem2":null },
				"neutron": { "elem1":"tritium", "elem2":null }
    },
    category: "vapours",
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
behavior: behaviors.VAPOUR,
category: "vapours",
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
behavior: behaviors.VAPOUR,
category: "vapours",
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
behavior: behaviors.RADIOACTIVE_VAPOUR,
reactions: {
        "oxygen": { "elem1":"radioactive_water", "elem2":null },
				"neutron": { "elem1":"tetrahydrogen", "elem2":null }
    },
category: "vapours",
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
category: "vapours",
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
behavior: behaviors.RADIOACTIVE_VAPOUR,
category: "vapours",
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
category: "vapours",
state: "gas",
behavior: behaviors.VAPOUR,
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
category: "vapours",
state: "gas",
behavior: behaviors.VAPOUR,
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
    category:"vapours",
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


/*if (elements[e].category == "vapours") {
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

        
//The "pixelSize" query parameter sets the size of the pixels; this is inversely proportional to the pixel "resolution", so bigger numbers mean less pixels fit on the screen and smaller numbers mean that more pixels will fit.
//Depending on your screen's size, the default pixelSize is either 5 or 6 (6 on larger screens).
//Making the pixels twice as big will decrease the pixel capacity by *slightly over* 4, and the reverse is also true. (I don't know why that is.)

urlParams = new URLSearchParams(window.location.search);

if(urlParams.get('pixelSize') != null) { //null check
    pixelSize = urlParams.get('pixelSize')
    if(isNaN(pixelSize) || pixelSize === "" || pixelSize === null) { //NaN check
        //Vanilla code
        //[Vanilla comment] If the screen size is under 768px, set pixelSize to 5, otherwise 6
        if (window.innerWidth < 700) {
            pixelSize = 3.5;
        } else {
            pixelSize = 3.5;
        }
    }
    pixelSize = parseFloat(pixelSize)
    pixelSize = Math.min(194.73749999999999,Math.max(pixelSize,0.05))
} else {
    //Vanilla code
    //[Vanilla comment] If the screen size is under 768px, set pixelSize to 5, otherwise 6
    if (window.innerWidth < 700) {
        pixelSize = 4;
    } else {
        pixelSize = 4;
    }
}



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
https://github.com/slweeb/sandboxels/blob/main/mods/circles.js
https://github.com/slweeb/sandboxels/blob/main/mods/adjustablepixelsize.js
Thank you so much to all of the developers of these mods for making these publicly available for forking! I sincerely thank you!
If I forgot to attribute you, please let me know as eshaanbhargavpatel@gmail.com and share me the link to the GitHub for your Sandboxels mod. Thanks!
I shall also attibute Ryan from Sandboxels (https://sandboxels.r74n.com) for making this site possible. He made the original thing we forked!
*/
runAfterLoad(function() {
	foodArray = Object.keys(elements).filter(function(e) {
		return elements[e].category == "food";
	});
	if(!elements.tooth.reactions) {
		elements.tooth.reactions = {}
	};
	for(i = 0; i < foodArray.length; i++) {
		elements.tooth.reactions[foodArray[i]] = { "elem1": ["tooth","tooth","tooth","tooth","tooth","tooth","tooth","tooth","decayed_tooth"], "elem2": "plaque", "chance": 0.001 }
	};
	elements.acid.ignore.push("tooth");
	elements.acid.ignore.push("decayed_tooth");
	elements.acid.ignore.push("plaque");
	elements.acid.ignore.push("tartar");

    if(enabledMods.includes("mods/fey_and_more.js")) {
		//tooth decay to impurities {
			eLists.IMPURITY.push("plaque");
			eLists.IMPURITY.push("tartar");
			eLists.IMPURITY.push("decayed_tooth");
		//}
		//regenerate behaviors of elements that use eLists.IMPURITY {
			elements.pure_water.behavior = [
				"DL:"+eLists.IMPURITY+"|DL:"+eLists.IMPURITY+"|DL:"+eLists.IMPURITY+"",
				"DL:"+eLists.IMPURITY+" AND M2|XX|DL:"+eLists.IMPURITY+" AND M2",
				"DL:"+eLists.IMPURITY+" AND M1|DL:"+eLists.IMPURITY+" AND M1|DL:"+eLists.IMPURITY+" AND M1",
			];
			elements.pure_steam.behavior = [
				"M2 AND DL:"+eLists.IMPURITY+"|M1 AND DL:"+eLists.IMPURITY+"|M2 AND DL:"+eLists.IMPURITY+"",
				"M1 AND DL:"+eLists.IMPURITY+"|XX|M1 AND DL:"+eLists.IMPURITY+"",
				"M2 AND DL:"+eLists.IMPURITY+"|M1 AND DL:"+eLists.IMPURITY+"|M2 AND DL:"+eLists.IMPURITY+"",
			];
		//}
		//concoction support (it's all mistakes) {
			elements.concoction.reactions.tooth = { "elem1": "mistake", "elem2": null };
			elements.concoction.reactions.decayed_tooth = { "elem1": "mistake", "elem2": null };
			elements.concoction.reactions.toothpaste = { "elem1": "mistake", "elem2": null };
			elements.concoction.reactions.plaque = { "elem1": "mistake", "elem2": null };
			elements.concoction.reactions.tartar = { "elem1": "mistake", "elem2": null };
		//}
	};
});