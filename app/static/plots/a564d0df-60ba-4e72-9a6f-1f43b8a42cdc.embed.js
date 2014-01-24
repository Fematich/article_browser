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

    var all_models = [{"attributes": {"x_range": {"type": "DataRange1d", "id": "910c0156-c1c2-4ef5-9920-f562e04f0c94"}, "axes": [], "title": "voorkomens", "y_range": {"type": "DataRange1d", "id": "13cccd78-2863-4558-ab50-b06eac2d8f82"}, "outer_width": 400, "renderers": [{"type": "DatetimeAxis", "id": "477a1c23-c87c-40e9-8b4d-57344e558dc9"}, {"type": "LinearAxis", "id": "dfb6823d-e534-42e7-abb2-b3f55417685b"}, {"type": "Grid", "id": "3fdeeaae-5d70-48d3-ae79-5206470d6fab"}, {"type": "Grid", "id": "fd802d0a-1529-47cc-a098-405843fb088a"}, {"type": "Glyph", "id": "e8ea332b-d960-42f0-9c9f-6b6cc19616e8"}], "outer_height": 300, "width": 400, "doc": null, "canvas_height": 300, "id": "a564d0df-60ba-4e72-9a6f-1f43b8a42cdc", "height": 300, "tools": [{"type": "PanTool", "id": "565df7ed-324d-4191-b81a-7ea622d0cc56"}, {"type": "ZoomTool", "id": "584418b3-84b9-4977-9552-9f28483966c8"}, {"type": "ResizeTool", "id": "cef5386d-cf14-4cf2-a78e-97e2d9d44576"}], "canvas_width": 400}, "type": "Plot", "id": "a564d0df-60ba-4e72-9a6f-1f43b8a42cdc"}, {"attributes": {"plot": {"type": "Plot", "id": "a564d0df-60ba-4e72-9a6f-1f43b8a42cdc"}, "doc": null, "bounds": "auto", "id": "477a1c23-c87c-40e9-8b4d-57344e558dc9", "location": "min", "formats": {"days": ["%m/%d/%Y"]}, "axis_label": "Datum", "dimension": 0}, "type": "DatetimeAxis", "id": "477a1c23-c87c-40e9-8b4d-57344e558dc9"}, {"attributes": {"plot": {"type": "Plot", "id": "a564d0df-60ba-4e72-9a6f-1f43b8a42cdc"}, "id": "cef5386d-cf14-4cf2-a78e-97e2d9d44576", "doc": null}, "type": "ResizeTool", "id": "cef5386d-cf14-4cf2-a78e-97e2d9d44576"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "0561acd5-b2de-433f-b43e-a492c8322846"}, "columns": ["x"]}], "id": "910c0156-c1c2-4ef5-9920-f562e04f0c94", "doc": null}, "type": "DataRange1d", "id": "910c0156-c1c2-4ef5-9920-f562e04f0c94"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "a564d0df-60ba-4e72-9a6f-1f43b8a42cdc"}], "id": "8cd4a666-49b7-4fbd-9dea-1cd594f2e08e"}, "type": "PlotContext", "id": "8cd4a666-49b7-4fbd-9dea-1cd594f2e08e"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "0561acd5-b2de-433f-b43e-a492c8322846"}, "doc": null, "id": "e8ea332b-d960-42f0-9c9f-6b6cc19616e8", "xdata_range": {"type": "DataRange1d", "id": "910c0156-c1c2-4ef5-9920-f562e04f0c94"}, "ydata_range": {"type": "DataRange1d", "id": "13cccd78-2863-4558-ab50-b06eac2d8f82"}, "glyphspec": {"line_color": {"value": "#1f77b4"}, "line_alpha": 1.0, "fill_color": "#1f77b4", "title": "voorkomens", "type": "line", "fill_alpha": 1.0, "height": 300, "width": 400, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "tools": "pan,zoom,resize", "x_axis_type": "datetime"}, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "line_width": 1, "angle_units": "deg", "type": "line", "y": {"units": "data", "field": "y"}, "line_alpha": 0.1, "start_angle_units": "deg", "valign": null, "radius_units": "screen", "visible": null, "length_units": "screen", "end_angle_units": "deg", "line_dash_offset": 0, "line_cap": "butt", "line_dash": [], "x": {"units": "data", "field": "x"}, "margin": null, "line_join": "miter", "halign": null}}, "type": "Glyph", "id": "e8ea332b-d960-42f0-9c9f-6b6cc19616e8"}, {"attributes": {"plot": {"type": "Plot", "id": "a564d0df-60ba-4e72-9a6f-1f43b8a42cdc"}, "doc": null, "dimension": 0, "id": "3fdeeaae-5d70-48d3-ae79-5206470d6fab"}, "type": "Grid", "id": "3fdeeaae-5d70-48d3-ae79-5206470d6fab"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "910c0156-c1c2-4ef5-9920-f562e04f0c94"}, {"type": "DataRange1d", "id": "13cccd78-2863-4558-ab50-b06eac2d8f82"}], "dimensions": ["width", "height"], "id": "584418b3-84b9-4977-9552-9f28483966c8"}, "type": "ZoomTool", "id": "584418b3-84b9-4977-9552-9f28483966c8"}, {"attributes": {"plot": {"type": "Plot", "id": "a564d0df-60ba-4e72-9a6f-1f43b8a42cdc"}, "doc": null, "dimension": 1, "id": "fd802d0a-1529-47cc-a098-405843fb088a"}, "type": "Grid", "id": "fd802d0a-1529-47cc-a098-405843fb088a"}, {"attributes": {"plot": {"type": "Plot", "id": "a564d0df-60ba-4e72-9a6f-1f43b8a42cdc"}, "doc": null, "bounds": "auto", "dimension": 1, "location": "min", "axis_label": "# artikels", "id": "dfb6823d-e534-42e7-abb2-b3f55417685b"}, "type": "LinearAxis", "id": "dfb6823d-e534-42e7-abb2-b3f55417685b"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "910c0156-c1c2-4ef5-9920-f562e04f0c94"}, {"type": "DataRange1d", "id": "13cccd78-2863-4558-ab50-b06eac2d8f82"}], "dimensions": ["width", "height"], "doc": null, "id": "565df7ed-324d-4191-b81a-7ea622d0cc56"}, "type": "PanTool", "id": "565df7ed-324d-4191-b81a-7ea622d0cc56"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "0561acd5-b2de-433f-b43e-a492c8322846"}, "columns": ["y"]}], "id": "13cccd78-2863-4558-ab50-b06eac2d8f82", "doc": null}, "type": "DataRange1d", "id": "13cccd78-2863-4558-ab50-b06eac2d8f82"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [17, 8, 3, 4, 3, 2, 2, 1, 2, 4, 11, 3, 3, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 6, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 3], "x": [1298419200000.0, 1298505600000.0, 1298592000000.0, 1298678400000.0, 1298851200000.0, 1298937600000.0, 1299110400000.0, 1299196800000.0, 1299283200000.0, 1299542400000.0, 1299888000000.0, 1300060800000.0, 1300147200000.0, 1300752000000.0, 1300924800000.0, 1301011200000.0, 1301097600000.0, 1301270400000.0, 1301356800000.0, 1301443200000.0, 1301875200000.0, 1304294400000.0, 1305936000000.0, 1306108800000.0, 1308009600000.0, 1308873600000.0, 1308960000000.0, 1309392000000.0, 1309564800000.0, 1310515200000.0, 1311811200000.0, 1313107200000.0, 1313452800000.0, 1315008000000.0, 1315180800000.0, 1323302400000.0, 1323388800000.0, 1323820800000.0, 1324684800000.0]}, "id": "0561acd5-b2de-433f-b43e-a492c8322846"}, "type": "ColumnDataSource", "id": "0561acd5-b2de-433f-b43e-a492c8322846"}];
    var modeltype = "PlotContext";
    var elementid = "4535b871-1156-4c31-a783-2079a482f21a";
    var plotID = "a564d0df-60ba-4e72-9a6f-1f43b8a42cdc";
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