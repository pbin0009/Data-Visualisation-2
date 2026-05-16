var fast_food_map = "jsonFile/fast_food_map.vg.json";

vegaEmbed("#dot-map", fast_food_map).then(function(result) {
    // Access Vega view using result.view
}).catch(console.error);