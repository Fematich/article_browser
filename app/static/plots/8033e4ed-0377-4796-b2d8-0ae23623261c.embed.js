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

    var all_models = [{"attributes": {"x_range": {"type": "DataRange1d", "id": "bfe8a74a-c973-46ff-b10c-40c42d96a866"}, "axes": [], "title": "voorkomens", "y_range": {"type": "DataRange1d", "id": "78f397eb-1211-45ae-a365-fe7f3972196d"}, "outer_width": 400, "renderers": [{"type": "DatetimeAxis", "id": "1911f2f0-7ead-42bb-86ff-a8fec45d96c0"}, {"type": "LinearAxis", "id": "9cdd893e-e453-4dcc-9382-d3669c9f5bd7"}, {"type": "Grid", "id": "31ae7318-8f27-46b2-8036-15c9badaf40f"}, {"type": "Grid", "id": "80655772-e807-49ae-88bb-eb6b1721929d"}, {"type": "Glyph", "id": "10152c9f-846c-4be3-bada-7fa209e138a3"}], "outer_height": 300, "width": 400, "doc": null, "canvas_height": 300, "id": "8033e4ed-0377-4796-b2d8-0ae23623261c", "height": 300, "tools": [{"type": "PanTool", "id": "7e2347b7-f582-4800-ae72-1ad12e4cce29"}, {"type": "ZoomTool", "id": "6f0824ad-08c2-48e9-b740-c5829c0ad7ff"}, {"type": "ResizeTool", "id": "7adc2658-9ef8-47e1-bca6-4bb768f673a3"}], "canvas_width": 400}, "type": "Plot", "id": "8033e4ed-0377-4796-b2d8-0ae23623261c"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "8033e4ed-0377-4796-b2d8-0ae23623261c"}], "id": "f59a788d-1969-4b7e-bd6f-6733c3d66085"}, "type": "PlotContext", "id": "f59a788d-1969-4b7e-bd6f-6733c3d66085"}, {"attributes": {"plot": {"type": "Plot", "id": "8033e4ed-0377-4796-b2d8-0ae23623261c"}, "doc": null, "bounds": "auto", "dimension": 1, "location": "min", "axis_label": "# artikels", "id": "9cdd893e-e453-4dcc-9382-d3669c9f5bd7"}, "type": "LinearAxis", "id": "9cdd893e-e453-4dcc-9382-d3669c9f5bd7"}, {"attributes": {"plot": {"type": "Plot", "id": "8033e4ed-0377-4796-b2d8-0ae23623261c"}, "doc": null, "dimension": 1, "id": "80655772-e807-49ae-88bb-eb6b1721929d"}, "type": "Grid", "id": "80655772-e807-49ae-88bb-eb6b1721929d"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "bfe8a74a-c973-46ff-b10c-40c42d96a866"}, {"type": "DataRange1d", "id": "78f397eb-1211-45ae-a365-fe7f3972196d"}], "dimensions": ["width", "height"], "id": "6f0824ad-08c2-48e9-b740-c5829c0ad7ff"}, "type": "ZoomTool", "id": "6f0824ad-08c2-48e9-b740-c5829c0ad7ff"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "925b25ab-8dfb-469d-bf35-2aaea6cba53e"}, "doc": null, "id": "10152c9f-846c-4be3-bada-7fa209e138a3", "xdata_range": {"type": "DataRange1d", "id": "bfe8a74a-c973-46ff-b10c-40c42d96a866"}, "ydata_range": {"type": "DataRange1d", "id": "78f397eb-1211-45ae-a365-fe7f3972196d"}, "glyphspec": {"line_color": {"value": "#1f77b4"}, "line_alpha": 1.0, "fill_color": "#1f77b4", "title": "voorkomens", "type": "line", "fill_alpha": 1.0, "height": 300, "width": 400, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "tools": "pan,zoom,resize", "x_axis_type": "datetime"}, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "line_width": 1, "angle_units": "deg", "type": "line", "y": {"units": "data", "field": "y"}, "line_alpha": 0.1, "start_angle_units": "deg", "valign": null, "radius_units": "screen", "visible": null, "length_units": "screen", "end_angle_units": "deg", "line_dash_offset": 0, "line_cap": "butt", "line_dash": [], "x": {"units": "data", "field": "x"}, "margin": null, "line_join": "miter", "halign": null}}, "type": "Glyph", "id": "10152c9f-846c-4be3-bada-7fa209e138a3"}, {"attributes": {"plot": {"type": "Plot", "id": "8033e4ed-0377-4796-b2d8-0ae23623261c"}, "doc": null, "dimension": 0, "id": "31ae7318-8f27-46b2-8036-15c9badaf40f"}, "type": "Grid", "id": "31ae7318-8f27-46b2-8036-15c9badaf40f"}, {"attributes": {"plot": {"type": "Plot", "id": "8033e4ed-0377-4796-b2d8-0ae23623261c"}, "id": "7adc2658-9ef8-47e1-bca6-4bb768f673a3", "doc": null}, "type": "ResizeTool", "id": "7adc2658-9ef8-47e1-bca6-4bb768f673a3"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "925b25ab-8dfb-469d-bf35-2aaea6cba53e"}, "columns": ["x"]}], "id": "bfe8a74a-c973-46ff-b10c-40c42d96a866", "doc": null}, "type": "DataRange1d", "id": "bfe8a74a-c973-46ff-b10c-40c42d96a866"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "925b25ab-8dfb-469d-bf35-2aaea6cba53e"}, "columns": ["y"]}], "id": "78f397eb-1211-45ae-a365-fe7f3972196d", "doc": null}, "type": "DataRange1d", "id": "78f397eb-1211-45ae-a365-fe7f3972196d"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [12, 6, 2, 3, 2, 2, 2, 1, 1, 1, 10, 3, 3, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 3, 1, 6, 1, 1, 1, 1, 1, 1, 1, 1], "x": [1298419200000.0, 1298505600000.0, 1298592000000.0, 1298678400000.0, 1298851200000.0, 1298937600000.0, 1299110400000.0, 1299196800000.0, 1299283200000.0, 1299542400000.0, 1299888000000.0, 1300060800000.0, 1300147200000.0, 1300752000000.0, 1300924800000.0, 1301011200000.0, 1301097600000.0, 1301270400000.0, 1301356800000.0, 1301443200000.0, 1301875200000.0, 1304294400000.0, 1305936000000.0, 1306108800000.0, 1308009600000.0, 1308960000000.0, 1309392000000.0, 1309564800000.0, 1310515200000.0, 1313107200000.0, 1313452800000.0, 1315180800000.0, 1323302400000.0, 1323820800000.0, 1324684800000.0]}, "id": "925b25ab-8dfb-469d-bf35-2aaea6cba53e"}, "type": "ColumnDataSource", "id": "925b25ab-8dfb-469d-bf35-2aaea6cba53e"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "bfe8a74a-c973-46ff-b10c-40c42d96a866"}, {"type": "DataRange1d", "id": "78f397eb-1211-45ae-a365-fe7f3972196d"}], "dimensions": ["width", "height"], "doc": null, "id": "7e2347b7-f582-4800-ae72-1ad12e4cce29"}, "type": "PanTool", "id": "7e2347b7-f582-4800-ae72-1ad12e4cce29"}, {"attributes": {"plot": {"type": "Plot", "id": "8033e4ed-0377-4796-b2d8-0ae23623261c"}, "doc": null, "bounds": "auto", "id": "1911f2f0-7ead-42bb-86ff-a8fec45d96c0", "location": "min", "formats": {"days": ["%m/%d/%Y"]}, "axis_label": "Datum", "dimension": 0}, "type": "DatetimeAxis", "id": "1911f2f0-7ead-42bb-86ff-a8fec45d96c0"}];
    var modeltype = "PlotContext";
    var elementid = "8aadd475-7e90-4763-83ec-b3cb2b250b74";
    var plotID = "8033e4ed-0377-4796-b2d8-0ae23623261c";
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