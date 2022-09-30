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

//Gold exists

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