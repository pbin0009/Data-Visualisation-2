var fast_food_map = "jsonFile/fast_food_map.vg.json";

vegaEmbed("#dot-map", fast_food_map).then(function(result) {
    // Access Vega view using result.view
}).catch(console.error);


var fast_food_pie = "jsonFile/fast_food_market_share_pie.vg.json";

vegaEmbed("#pie-chart", fast_food_pie, {
    actions: false
}).then(function(result) {
    // Access Vega view using result.view
}).catch(console.error);

var fast_food_bar = "jsonFile/fast_food_QSR_bar_chart.vg.json";

vegaEmbed("#bar-chart", fast_food_bar, {
    actions: false
}).then(function(result) {
    // Access Vega view using result.view
}).catch(console.error);

var oecd_obesity_bar = "jsonFile/aus_oecd_obesity_comparison_bar.vg.json";

vegaEmbed("#oecd-obesity-chart", oecd_obesity_bar, {
    actions: false
}).then(function(result) {
    // Access Vega view using result.view
}).catch(console.error);

var spending_lollipop = "jsonFile/aus_state_avg_spending_lollipop.vg.json";

vegaEmbed("#spending-lollipop-chart", spending_lollipop, {
    actions: false
}).then(function(result) {
}).catch(console.error);