var fast_food_map = "jsonFile/fast_food_map.vg.json";

vegaEmbed("#dot-map", fast_food_map, {
    actions: false}).then(function(result) {
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

var severe_obesity_linechart =
    "jsonFile/obesityAgedOver18_line.vg.json";

vegaEmbed("#line-chart-1", severe_obesity_linechart, {
    actions: false
}).then(function(result) {
}).catch(console.error);

var children_obesity_linechart =
    "jsonFile/children_obesity_linechart.vg.json";

vegaEmbed("#line-chart-2", children_obesity_linechart, {
    actions: false
}).then(function(result) {
}).catch(console.error);

var agegroup_dumbbell =
    "jsonFile/obese_agegroup_dumbbell.vg.json";

vegaEmbed("#dumbbell-chart", agegroup_dumbbell, {
    actions: false
}).then(function(result) {
}).catch(console.error);