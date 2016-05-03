var trafficDataWeekly = {
	labels : ["0-7 Years Old", "7-12 Years Old", "13-18 Years Old", "19-25 Years Old", "26-32 Years Old", "33-40 Years Old", "41-50 Years Old", "51-60 Years Old", "61+ Years Old"],
	datasets : [
		{
            label: "Year 2014",
			fillColor : "rgba(116, 119, 191, .3)"	,
			strokeColor : "rgba(116, 119, 191, 1)",
			pointColor : "rgba(116, 119, 191, 1)",
			pointStrokeColor : "rgba(116, 119, 191, 1)",
			pointHighlightFill : "rgba(255, 255, 255, 1)",
			pointHighlightStroke : "#4d4d72",
			data : [500, 700, 600, 800, 900, 1200, 1000, 1400, 1200],
			responsive: true
		},
        {
            label: "Year 2015",
            fillColor : "rgba(116, 178, 191, .3)"   ,
            strokeColor : "rgba(116, 178, 191, 1)",
            pointColor : "rgba(116, 178, 191, 1)",
            pointStrokeColor : "rgba(116, 178, 191, 1)",
            pointHighlightFill : "rgba(255, 255, 255, 1)",
            pointHighlightStroke : "#74b2bf",
            data : [700, 400, 100, 300, 500, 1000, 1200, 1100, 900],
            responsive: true
        }
	]
};

var trafficDataDaily = {
	labels : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
	datasets: [
        {
            label: "Year 2014",
            fillColor: "rgba(116, 119, 191, 1)",
            strokeColor: "white",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [43, 51, 61, 52, 34, 47, 25]
        },
        {
            label: "Year 2015",
            fillColor: "rgba(129, 202, 143, 1)",
            strokeColor: "white",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 80, 81, 56, 55, 40]
        }
	]
};

var mobileUsersData = [
    {
        value: 300,
        color: "rgba(116, 119, 191, 1)",
        highlight: "rgba(116, 119, 191, .5)",
        label: "Desktop"
    },
    {
        value: 100,
        color: "rgba(129, 202, 143, 1)",
        highlight: "rgba(129, 202, 143, .5)",
        label: "Tablets"
    },
    {
        value: 150,
        color: "rgba(116, 178, 191, 1)",
        highlight: "rgba(116, 178, 191, .5)",
        label: "Android"
    },
    {
        value: 150,
        color: "rgba(77, 77, 114, 1)",
        highlight: "rgba(77, 77, 114, .5)",
        label: "iOS"
    }
];

var options = {
	bezierCurve : false 
};


Chart.defaults.global = {
    // Boolean - Whether to animate the chart
    animation: true,

    // Number - Number of animation steps
    animationSteps: 120,

    // String - Animation easing effect
    // Possible effects are:
    // [easeInOutQuart, linear, easeOutBounce, easeInBack, easeInOutQuad,
    //  easeOutQuart, easeOutQuad, easeInOutBounce, easeOutSine, easeInOutCubic,
    //  easeInExpo, easeInOutBack, easeInCirc, easeInOutElastic, easeOutBack,
    //  easeInQuad, easeInOutExpo, easeInQuart, easeOutQuint, easeInOutCirc,
    //  easeInSine, easeOutExpo, easeOutCirc, easeOutCubic, easeInQuint,
    //  easeInElastic, easeInOutSine, easeInOutQuint, easeInBounce,
    //  easeOutElastic, easeInCubic]
    animationEasing: "easeInSine",



    // Boolean - If we should show the scale at all
    showScale: true,

    // Boolean - If we want to override with a hard coded scale
    scaleOverride: false,

    // ** Required if scaleOverride is true **
    // Number - The number of steps in a hard coded scale
    scaleSteps: null,
    // Number - The value jump in the hard coded scale
    scaleStepWidth: null,
    // Number - The scale starting value
    scaleStartValue: null,

    // String - Colour of the scale line
    scaleLineColor: "rgba(0,0,0,.1)",

    // Number - Pixel width of the scale line
    scaleLineWidth: 1,

    // Boolean - Whether to show labels on the scale
    scaleShowLabels: true,

    // Interpolated JS string - can access value
    scaleLabel: "<%=value%>",

    // Boolean - Whether the scale should stick to integers, not floats even if drawing space is there
    scaleIntegersOnly: true,

    // Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
    scaleBeginAtZero: true,

    // String - Scale label font declaration for the scale label
    scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

    // Number - Scale label font size in pixels
    scaleFontSize: 12,

    // String - Scale label font weight style
    scaleFontStyle: "normal",

    // String - Scale label font colour
    scaleFontColor: "#666",

    // Boolean - whether or not the chart should be responsive and resize when the browser does.
    responsive: false,

    // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
    maintainAspectRatio: true,

    // Boolean - Determines whether to draw tooltips on the canvas or not
    showTooltips: true,

    // Function - Determines whether to execute the customTooltips function instead of drawing the built in tooltips (See [Advanced - External Tooltips](#advanced-usage-custom-tooltips))
    customTooltips: false,

    // Array - Array of string names to attach tooltip events
    tooltipEvents: ["mousemove", "touchstart", "touchmove"],

    // String - Tooltip background colour
    tooltipFillColor: "rgba(0,0,0,0.8)",

    // String - Tooltip label font declaration for the scale label
    tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

    // Number - Tooltip label font size in pixels
    tooltipFontSize: 14,

    // String - Tooltip font weight style
    tooltipFontStyle: "normal",

    // String - Tooltip label font colour
    tooltipFontColor: "#fff",

    // String - Tooltip title font declaration for the scale label
    tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

    // Number - Tooltip title font size in pixels
    tooltipTitleFontSize: 14,

    // String - Tooltip title font weight style
    tooltipTitleFontStyle: "bold",

    // String - Tooltip title font colour
    tooltipTitleFontColor: "#fff",

    // Number - pixel width of padding around tooltip text
    tooltipYPadding: 6,

    // Number - pixel width of padding around tooltip text
    tooltipXPadding: 6,

    // Number - Size of the caret on the tooltip
    tooltipCaretSize: 8,

    // Number - Pixel radius of the tooltip border
    tooltipCornerRadius: 6,

    // Number - Pixel offset from point x to tooltip edge
    tooltipXOffset: 10,

    // String - Template string for single tooltips
    tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",

    // String - Template string for multiple tooltips
    multiTooltipTemplate: "<%= value %>",

    // Function - Will fire on animation progression.
    onAnimationProgress: function(){},

    // Function - Will fire on animation completion.
    onAnimationComplete: function(){},
    

    //bar chart

    //Boolean - Whether grid lines are shown across the chart
    scaleShowGridLines : true,

    //String - Colour of the grid lines
    scaleGridLineColor : "rgba(0,0,0,.05)",

    //Number - Width of the grid lines
    scaleGridLineWidth : 0,

    //Boolean - Whether to show horizontal lines (except X axis)
    scaleShowHorizontalLines: true,

    //Boolean - Whether to show vertical lines (except Y axis)
    scaleShowVerticalLines: true,

    //Boolean - If there is a stroke on each bar
    barShowStroke : false,

    //Number - Pixel width of the bar stroke
    barStrokeWidth : 2,

    //Number - Spacing between each of the X value sets
    barValueSpacing : 10,

    //Number - Spacing between data sets within X values
    barDatasetSpacing : 2,

    //String - A legend template
    // legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",

    // doughnut chart
    //Boolean - Whether we should show a stroke on each segment
    segmentShowStroke : true,

    //String - The colour of each segment stroke
    segmentStrokeColor : "#fff",

    //Number - The width of each segment stroke
    segmentStrokeWidth : 2,

    //Number - The percentage of the chart that we cut out of the middle
    percentageInnerCutout : 50, // This is 0 for Pie charts

    //Number - Amount of animation steps


    //String - Animation easing effect

    //Boolean - Whether we animate the rotation of the Doughnut
    animateRotate : false,

    //Boolean - Whether we animate scaling the Doughnut from the centre
    animateScale : true,

    //String - A legend template
    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"


};


var traffic = document.getElementById('traffic-chart').getContext('2d');
var weeklyChart = new Chart(traffic).Line(trafficDataWeekly, options);
$('#js-legend1').html(weeklyChart.generateLegend());

var dailyTraffic = document.getElementById('bar-chart').getContext('2d');
var dailyChart = new Chart(dailyTraffic).Bar(trafficDataDaily, options);

var mobileUsers = document.getElementById('doughnut-chart').getContext('2d');
var myDoughnutChart = new Chart(mobileUsers).Doughnut(mobileUsersData, options);
$('#js-legend').html(myDoughnutChart.generateLegend());

appDashboardUI.hourlyBtn.click(function() {
	appDashboardUI.hourlyActive();
	weeklyChart.datasets[0].points[0].value = 2;
	weeklyChart.datasets[0].points[1].value = 7;
	weeklyChart.datasets[0].points[2].value = 11;
	weeklyChart.datasets[0].points[3].value = 15;
	weeklyChart.datasets[0].points[4].value = 18;
	weeklyChart.datasets[0].points[5].value = 15;
	weeklyChart.datasets[0].points[6].value = 3;
	weeklyChart.datasets[0].points[7].value = 0;
	weeklyChart.datasets[0].points[8].value = 1;
    weeklyChart.datasets[1].points[0].value = 5;
    weeklyChart.datasets[1].points[1].value = 3;
    weeklyChart.datasets[1].points[2].value = 19;
    weeklyChart.datasets[1].points[3].value = 18;
    weeklyChart.datasets[1].points[4].value = 14;
    weeklyChart.datasets[1].points[5].value = 12;
    weeklyChart.datasets[1].points[6].value = 5;
    weeklyChart.datasets[1].points[7].value = 1;
    weeklyChart.datasets[1].points[8].value = 3;
	weeklyChart.update();
});

appDashboardUI.dailyBtn.click(function() {
	appDashboardUI.dailyActive();
	weeklyChart.datasets[0].points[0].value = 31;
	weeklyChart.datasets[0].points[1].value = 21;
	weeklyChart.datasets[0].points[2].value = 14;
	weeklyChart.datasets[0].points[3].value = 21;
	weeklyChart.datasets[0].points[4].value = 30;
	weeklyChart.datasets[0].points[5].value = 25;
	weeklyChart.datasets[0].points[6].value = 12;
	weeklyChart.datasets[0].points[7].value = 12;
	weeklyChart.datasets[0].points[8].value = 11;
    weeklyChart.datasets[1].points[0].value = 15;
    weeklyChart.datasets[1].points[1].value = 13;
    weeklyChart.datasets[1].points[2].value = 21;
    weeklyChart.datasets[1].points[3].value = 34;
    weeklyChart.datasets[1].points[4].value = 16;
    weeklyChart.datasets[1].points[5].value = 17;
    weeklyChart.datasets[1].points[6].value = 6;
    weeklyChart.datasets[1].points[7].value = 14;
    weeklyChart.datasets[1].points[8].value = 23;
	weeklyChart.update();
});

appDashboardUI.weeklyBtn.click(function() {
	appDashboardUI.weeklyActive();
	weeklyChart.datasets[0].points[0].value = 500;
	weeklyChart.datasets[0].points[1].value = 700;
	weeklyChart.datasets[0].points[2].value = 600;
	weeklyChart.datasets[0].points[3].value = 800;
	weeklyChart.datasets[0].points[4].value = 900;
	weeklyChart.datasets[0].points[5].value = 1200;
	weeklyChart.datasets[0].points[6].value = 1000;
	weeklyChart.datasets[0].points[7].value = 1400;
	weeklyChart.datasets[0].points[8].value = 1200;
    weeklyChart.datasets[1].points[0].value = 700;
    weeklyChart.datasets[1].points[1].value = 400;
    weeklyChart.datasets[1].points[2].value = 100;
    weeklyChart.datasets[1].points[3].value = 300;
    weeklyChart.datasets[1].points[4].value = 500;
    weeklyChart.datasets[1].points[5].value = 1000;
    weeklyChart.datasets[1].points[6].value = 1200;
    weeklyChart.datasets[1].points[7].value = 1100;
    weeklyChart.datasets[1].points[8].value = 900;
	weeklyChart.update();
});

appDashboardUI.monthlyBtn.click(function() {
	appDashboardUI.monthlyActive();
	weeklyChart.datasets[0].points[0].value = 2100;
	weeklyChart.datasets[0].points[1].value = 2800;
	weeklyChart.datasets[0].points[2].value = 4400;
	weeklyChart.datasets[0].points[3].value = 4800;
	weeklyChart.datasets[0].points[4].value = 4500;
	weeklyChart.datasets[0].points[5].value = 3800;
	weeklyChart.datasets[0].points[6].value = 4100;
	weeklyChart.datasets[0].points[7].value = 3400;
	weeklyChart.datasets[0].points[8].value = 4200;
    weeklyChart.datasets[1].points[0].value = 1800;
    weeklyChart.datasets[1].points[1].value = 3500;
    weeklyChart.datasets[1].points[2].value = 4800;
    weeklyChart.datasets[1].points[3].value = 4300;
    weeklyChart.datasets[1].points[4].value = 3600;
    weeklyChart.datasets[1].points[5].value = 1900;
    weeklyChart.datasets[1].points[6].value = 2600;
    weeklyChart.datasets[1].points[7].value = 3900;
    weeklyChart.datasets[1].points[8].value = 3800;
	weeklyChart.update();
});

$(document).resize(function() {
	weeklyChart.resize();
	dailyChart.resize();
	myDoughnutChart.resize();
});