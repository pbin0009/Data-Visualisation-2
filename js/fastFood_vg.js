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


/* =========================
   IMAGE SLIDESHOW
========================= */

let currentSlide = 0;

const slides = document.querySelectorAll(".slideshow .slide");

setInterval(() => {

    slides[currentSlide].classList.remove("active");

    currentSlide = (currentSlide + 1) % slides.length;

    slides[currentSlide].classList.add("active");

}, 3000);

/* =========================
   BMI CALCULATOR
========================= */

function calculateBMI() {

    const height = Number(document.getElementById("bmi-height").value);
    const weight = Number(document.getElementById("bmi-weight").value);

    const resultText = document.getElementById("bmi-result-text");
    const description = document.getElementById("bmi-description");
    const arrow = document.getElementById("bmi-arrow");

    if (height <= 0 || weight <= 0) {
        resultText.textContent = "BMI = --";
        description.textContent = "Please enter a valid height and weight above 0.";
        arrow.style.transform = "rotate(-90deg)";
        return;
    }

    const heightInMetres = height / 100;
    const bmi = weight / (heightInMetres * heightInMetres);
    const bmiRounded = bmi.toFixed(1);

    let category = "";
    let message = "";
    let angle = 0;

    if (bmi < 16) {
        category = "Severe Thinness";
        message = "This BMI is far below the healthy range and may indicate serious underweight health risks.";
        angle = -80;
    } else if (bmi < 17) {
        category = "Moderate Thinness";
        message = "This BMI is below the healthy range and may suggest underweight health concerns.";
        angle = -65;
    } else if (bmi < 18.5) {
        category = "Mild Thinness";
        message = "This BMI is slightly below the healthy range.";
        angle = -50;
    } else if (bmi < 25) {
        category = "Normal";
        message = "This BMI is within the healthy range for adults.";
        angle = -25;
    } else if (bmi < 30) {
        category = "Overweight";
        message = "This BMI is above the healthy range and may increase future health risks.";
        angle = 15;
    } else if (bmi < 35) {
        category = "Obese Class I";
        message = "This BMI falls within Obese Class I and may be linked to higher health risks.";
        angle = 45;
    } else if (bmi < 40) {
        category = "Obese Class II";
        message = "This BMI falls within Obese Class II and indicates increased obesity-related health risks.";
        angle = 65;
    } else {
        category = "Obese Class III";
        message = "This BMI is in the highest obesity category and may indicate serious long-term health risks.";
        angle = 82;
    }

    resultText.textContent = "BMI = " + bmiRounded + " (" + category + ")";
    description.textContent = message;
    arrow.style.transform = "rotate(" + angle + "deg)";
}

var bmi_stacked_bar = "jsonFile/bmi_stacked_bar.vg.json";

vegaEmbed("#bmi-stacked-bar-chart", bmi_stacked_bar, {
    actions: false
}).then(function(result) {
}).catch(console.error);

var bmi_heatmap = "jsonFile/bmi_distribution_heatmap.vg.json";

vegaEmbed("#bmi-heatmap-chart", bmi_heatmap, {
    actions: false
}).then(function(result) {
}).catch(console.error);


var physical_activity_choropleth =
    "jsonFile/physical_activity_phn_choropleth.vg.json";

vegaEmbed("#choropleth-map", physical_activity_choropleth, {
    actions: false
}).then(function(result) {
}).catch(console.error);


var physical_completed_butterfly =
    "jsonFile/physical_completed_butterfly.vg.json";

vegaEmbed("#butterfly-bar-chart", physical_completed_butterfly, {
    actions: false
}).then(function(result) {
}).catch(console.error);