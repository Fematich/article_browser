console.log("embed.js");
// parseUri 1.2.2
// (c) Steven Levithan <stevenlevithan.com>
// MIT License
(function(global) {
    if(typeof(window.bokeh_embed_count) == "undefined"){
        window.bokeh_embed_count = 0;
    }
    else {
        window.bokeh_embed_count += 1;
    }
    if(window.bokeh_embed_count == 1) {
//        debugger;
    }
    var host = "";

    var staticRootUrl = "http://localhost:5006/bokeh/static/";
    if (host!=""){

        staticRootUrl = host + "/static/";
        var bokehJSUrl = window.location.protocol + "//" + staticRootUrl + "js/bokeh.js";
    }
    else {
        bokehJSUrl = staticRootUrl +"js/bokeh.js";
    }

    var all_models = [{"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "9ff3e9ef-8251-47f6-bff6-b8ee89b8c9cd"}, "columns": ["x"]}], "id": "30630247-f877-4a00-b930-6d36e86c122c", "doc": null}, "type": "DataRange1d", "id": "30630247-f877-4a00-b930-6d36e86c122c"}, {"attributes": {"plot": {"type": "Plot", "id": "8d87a9e3-99d5-4a6c-867d-5ac98ea6509c"}, "doc": null, "bounds": "auto", "dimension": 1, "location": "min", "axis_label": "# artikels", "id": "6b1bea4a-242e-435e-8bab-1718502fefbd"}, "type": "LinearAxis", "id": "6b1bea4a-242e-435e-8bab-1718502fefbd"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "30630247-f877-4a00-b930-6d36e86c122c"}, "axes": [], "title": "voorkomens", "y_range": {"type": "DataRange1d", "id": "e85d6d7b-42d4-4f15-a7fc-b9fbe4f6fa58"}, "outer_width": 400, "renderers": [{"type": "DatetimeAxis", "id": "dcc4bb33-d0de-43d3-bdad-23ea9ebc46cf"}, {"type": "LinearAxis", "id": "6b1bea4a-242e-435e-8bab-1718502fefbd"}, {"type": "Grid", "id": "4f401402-c3de-4f00-af0d-99ce1d6f419a"}, {"type": "Grid", "id": "4136583a-774b-414a-8c3b-3b5f9b019845"}, {"type": "Glyph", "id": "0c694318-d850-4e90-9991-68c90db73210"}], "outer_height": 300, "width": 400, "doc": null, "canvas_height": 300, "id": "8d87a9e3-99d5-4a6c-867d-5ac98ea6509c", "height": 300, "tools": [{"type": "PanTool", "id": "676d0abc-8a37-4a8a-a49d-c8376f343834"}, {"type": "ZoomTool", "id": "d62adc95-27ca-47a2-853d-ab31b89d06b7"}, {"type": "ResizeTool", "id": "3d26f07b-e166-4714-92b0-dbba3b1f6b11"}], "canvas_width": 400}, "type": "Plot", "id": "8d87a9e3-99d5-4a6c-867d-5ac98ea6509c"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "30630247-f877-4a00-b930-6d36e86c122c"}, {"type": "DataRange1d", "id": "e85d6d7b-42d4-4f15-a7fc-b9fbe4f6fa58"}], "dimensions": ["width", "height"], "doc": null, "id": "676d0abc-8a37-4a8a-a49d-c8376f343834"}, "type": "PanTool", "id": "676d0abc-8a37-4a8a-a49d-c8376f343834"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "9ff3e9ef-8251-47f6-bff6-b8ee89b8c9cd"}, "columns": ["y"]}], "id": "e85d6d7b-42d4-4f15-a7fc-b9fbe4f6fa58", "doc": null}, "type": "DataRange1d", "id": "e85d6d7b-42d4-4f15-a7fc-b9fbe4f6fa58"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "30630247-f877-4a00-b930-6d36e86c122c"}, {"type": "DataRange1d", "id": "e85d6d7b-42d4-4f15-a7fc-b9fbe4f6fa58"}], "dimensions": ["width", "height"], "id": "d62adc95-27ca-47a2-853d-ab31b89d06b7"}, "type": "ZoomTool", "id": "d62adc95-27ca-47a2-853d-ab31b89d06b7"}, {"attributes": {"plot": {"type": "Plot", "id": "8d87a9e3-99d5-4a6c-867d-5ac98ea6509c"}, "id": "3d26f07b-e166-4714-92b0-dbba3b1f6b11", "doc": null}, "type": "ResizeTool", "id": "3d26f07b-e166-4714-92b0-dbba3b1f6b11"}, {"attributes": {"plot": {"type": "Plot", "id": "8d87a9e3-99d5-4a6c-867d-5ac98ea6509c"}, "doc": null, "dimension": 0, "id": "4f401402-c3de-4f00-af0d-99ce1d6f419a"}, "type": "Grid", "id": "4f401402-c3de-4f00-af0d-99ce1d6f419a"}, {"attributes": {"plot": {"type": "Plot", "id": "8d87a9e3-99d5-4a6c-867d-5ac98ea6509c"}, "doc": null, "dimension": 1, "id": "4136583a-774b-414a-8c3b-3b5f9b019845"}, "type": "Grid", "id": "4136583a-774b-414a-8c3b-3b5f9b019845"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "8d87a9e3-99d5-4a6c-867d-5ac98ea6509c"}], "id": "b5a06504-4c32-481f-aaae-4fc9ace6c989"}, "type": "PlotContext", "id": "b5a06504-4c32-481f-aaae-4fc9ace6c989"}, {"attributes": {"plot": {"type": "Plot", "id": "8d87a9e3-99d5-4a6c-867d-5ac98ea6509c"}, "doc": null, "bounds": "auto", "id": "dcc4bb33-d0de-43d3-bdad-23ea9ebc46cf", "location": "min", "formats": {"days": ["%m/%d/%Y"]}, "axis_label": "Datum", "dimension": 0}, "type": "DatetimeAxis", "id": "dcc4bb33-d0de-43d3-bdad-23ea9ebc46cf"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "9ff3e9ef-8251-47f6-bff6-b8ee89b8c9cd"}, "doc": null, "id": "0c694318-d850-4e90-9991-68c90db73210", "xdata_range": {"type": "DataRange1d", "id": "30630247-f877-4a00-b930-6d36e86c122c"}, "ydata_range": {"type": "DataRange1d", "id": "e85d6d7b-42d4-4f15-a7fc-b9fbe4f6fa58"}, "glyphspec": {"line_color": {"value": "#1f77b4"}, "line_alpha": 1.0, "fill_color": "#1f77b4", "title": "voorkomens", "type": "line", "fill_alpha": 1.0, "height": 300, "width": 400, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "tools": "pan,zoom,resize", "x_axis_type": "datetime"}, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "line_width": 1, "angle_units": "deg", "type": "line", "y": {"units": "data", "field": "y"}, "line_alpha": 0.1, "start_angle_units": "deg", "valign": null, "radius_units": "screen", "visible": null, "length_units": "screen", "end_angle_units": "deg", "line_dash_offset": 0, "line_cap": "butt", "line_dash": [], "x": {"units": "data", "field": "x"}, "margin": null, "line_join": "miter", "halign": null}}, "type": "Glyph", "id": "0c694318-d850-4e90-9991-68c90db73210"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [1, 1, 1, 1, 1, 31, 19, 6, 2, 9, 11, 13, 5, 9, 1, 3, 1, 2, 1, 1, 2, 1, 1, 1, 3, 7, 9, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1], "x": [1295049600000.0, 1296518400000.0, 1300147200000.0, 1303171200000.0, 1304467200000.0, 1306454400000.0, 1306540800000.0, 1306713600000.0, 1306800000000.0, 1306886400000.0, 1307059200000.0, 1307145600000.0, 1307318400000.0, 1307404800000.0, 1307491200000.0, 1307577600000.0, 1307664000000.0, 1307750400000.0, 1308182400000.0, 1308268800000.0, 1308355200000.0, 1308960000000.0, 1309305600000.0, 1309478400000.0, 1309737600000.0, 1309824000000.0, 1309910400000.0, 1309996800000.0, 1310083200000.0, 1310428800000.0, 1310774400000.0, 1311292800000.0, 1311984000000.0, 1312416000000.0, 1313798400000.0, 1314144000000.0, 1314316800000.0, 1315353600000.0, 1316563200000.0, 1318377600000.0, 1318464000000.0, 1319068800000.0, 1320278400000.0, 1320796800000.0, 1322784000000.0, 1323043200000.0, 1323475200000.0, 1325116800000.0, 1325289600000.0]}, "id": "9ff3e9ef-8251-47f6-bff6-b8ee89b8c9cd"}, "type": "ColumnDataSource", "id": "9ff3e9ef-8251-47f6-bff6-b8ee89b8c9cd"}];
    var modeltype = "PlotContext";
    var elementid = "ad7409ad-67ea-4fe4-86ea-ecb97714c204";
    var plotID = "8d87a9e3-99d5-4a6c-867d-5ac98ea6509c";
    var dd = {};
    dd[plotID] = all_models;
    

    var secondPlot =                 function() {
        console.log("Bokeh.js loaded callback");
        embed_core = Bokeh.embed_core;
        console.log("embed_core loaded");
        embed_core.search_and_plot(dd);
        embed_core.injectCss(staticRootUrl);
        console.log("search_and_plot called", new Date());}

    function addEvent(el, eventName, func){
        if(el.attachEvent){
            return el.attachEvent('on' + eventName, func);}
        else {
            el.addEventListener(eventName, func, false);}}
    var script_injected = !(typeof(_embed_bokeh_inject_application) == "undefined") && _embed_bokeh_inject_application;
    //var script_injected = !(typeof(_embed_bokeh_inject_application) == "undefined");
    if(typeof Bokeh == "object"){
        // application.js is already loaded
        console.log("bokeh.js is already loaded, going straight to plotting");
        setTimeout(function () {
            embed_core = Bokeh.embed_core;
            console.log("calling embed_core.search_and_plot, from already loaded bokehjs state")
            embed_core.search_and_plot(dd);}, 20);}

    else if(!script_injected){
        // bokeh.js isn't loaded and it hasn't been scheduled to be injected
        var s = document.createElement('script');
        s.async = true; s.src = bokehJSUrl; s.id="bokeh_script_tag";
        
    }
    else {
        var s = document.getElementById("bokeh_script_tag");
    }
    var local_bokeh_embed_count = window.bokeh_embed_count;
    if(typeof(s) != "undefined") {
    addEvent(
        s,'load',
        function() {
            setTimeout(secondPlot, 20 * local_bokeh_embed_count);});
    }
    if(!script_injected){
        document.body.appendChild(s);
    }

    _embed_bokeh_inject_application = true;

    window._embed_bokeh = true;}(this));