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

    var all_models = [{"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "dbec1dcb-1661-416d-a41b-a1da9e069747"}, "columns": ["x"]}], "id": "10233f9e-7f17-4d5e-a611-aeddff2209c5", "doc": null}, "type": "DataRange1d", "id": "10233f9e-7f17-4d5e-a611-aeddff2209c5"}, {"attributes": {"plot": {"type": "Plot", "id": "1ec3313e-df4c-4b04-85af-cb40b8f5b442"}, "doc": null, "bounds": "auto", "dimension": 1, "location": "min", "axis_label": "# artikels", "id": "b9733a35-9fa5-490e-aace-4b95010c6f0a"}, "type": "LinearAxis", "id": "b9733a35-9fa5-490e-aace-4b95010c6f0a"}, {"attributes": {"plot": {"type": "Plot", "id": "1ec3313e-df4c-4b04-85af-cb40b8f5b442"}, "doc": null, "dimension": 0, "id": "85a80515-c845-40a1-ae9a-07b415ebe109"}, "type": "Grid", "id": "85a80515-c845-40a1-ae9a-07b415ebe109"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "10233f9e-7f17-4d5e-a611-aeddff2209c5"}, {"type": "DataRange1d", "id": "e4e30fdb-1f4f-44ef-8370-4dc132284140"}], "dimensions": ["width", "height"], "doc": null, "id": "fdd94dfc-d42f-4bf7-a740-3f7a0b3142f7"}, "type": "PanTool", "id": "fdd94dfc-d42f-4bf7-a740-3f7a0b3142f7"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "10233f9e-7f17-4d5e-a611-aeddff2209c5"}, "axes": [], "title": "voorkomens", "y_range": {"type": "DataRange1d", "id": "e4e30fdb-1f4f-44ef-8370-4dc132284140"}, "outer_width": 400, "renderers": [{"type": "DatetimeAxis", "id": "fe049ede-d245-4e9e-bae3-93eda8d7adeb"}, {"type": "LinearAxis", "id": "b9733a35-9fa5-490e-aace-4b95010c6f0a"}, {"type": "Grid", "id": "85a80515-c845-40a1-ae9a-07b415ebe109"}, {"type": "Grid", "id": "a7bf737e-5cf4-4aed-b1de-42ffcc719c2d"}, {"type": "Glyph", "id": "d49a8764-18fa-49c2-8648-138c53129af0"}], "outer_height": 300, "width": 400, "doc": null, "canvas_height": 300, "id": "1ec3313e-df4c-4b04-85af-cb40b8f5b442", "height": 300, "tools": [{"type": "PanTool", "id": "fdd94dfc-d42f-4bf7-a740-3f7a0b3142f7"}, {"type": "ZoomTool", "id": "cfa42b8f-fc6c-4712-9131-b4316025e496"}, {"type": "ResizeTool", "id": "8ab8314d-dcc3-44fa-9f8b-34d9423bacc8"}], "canvas_width": 400}, "type": "Plot", "id": "1ec3313e-df4c-4b04-85af-cb40b8f5b442"}, {"attributes": {"plot": {"type": "Plot", "id": "1ec3313e-df4c-4b04-85af-cb40b8f5b442"}, "doc": null, "bounds": "auto", "id": "fe049ede-d245-4e9e-bae3-93eda8d7adeb", "location": "min", "formats": {"days": ["%m/%d/%Y"]}, "axis_label": "Datum", "dimension": 0}, "type": "DatetimeAxis", "id": "fe049ede-d245-4e9e-bae3-93eda8d7adeb"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "dbec1dcb-1661-416d-a41b-a1da9e069747"}, "doc": null, "id": "d49a8764-18fa-49c2-8648-138c53129af0", "xdata_range": {"type": "DataRange1d", "id": "10233f9e-7f17-4d5e-a611-aeddff2209c5"}, "ydata_range": {"type": "DataRange1d", "id": "e4e30fdb-1f4f-44ef-8370-4dc132284140"}, "glyphspec": {"line_color": {"value": "#1f77b4"}, "line_alpha": 1.0, "fill_color": "#1f77b4", "title": "voorkomens", "type": "line", "fill_alpha": 1.0, "height": 300, "width": 400, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "tools": "pan,zoom,resize", "x_axis_type": "datetime"}, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "line_width": 1, "angle_units": "deg", "type": "line", "y": {"units": "data", "field": "y"}, "line_alpha": 0.1, "start_angle_units": "deg", "valign": null, "radius_units": "screen", "visible": null, "length_units": "screen", "end_angle_units": "deg", "line_dash_offset": 0, "line_cap": "butt", "line_dash": [], "x": {"units": "data", "field": "x"}, "margin": null, "line_join": "miter", "halign": null}}, "type": "Glyph", "id": "d49a8764-18fa-49c2-8648-138c53129af0"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "dbec1dcb-1661-416d-a41b-a1da9e069747"}, "columns": ["y"]}], "id": "e4e30fdb-1f4f-44ef-8370-4dc132284140", "doc": null}, "type": "DataRange1d", "id": "e4e30fdb-1f4f-44ef-8370-4dc132284140"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [1, 1, 1, 1, 1, 1, 40, 23, 8, 2, 11, 10, 15, 5, 10, 2, 5, 2, 4, 1, 1, 2, 2, 1, 1, 1, 1, 3, 9, 9, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 2, 1, 1, 3, 1, 1, 1, 1, 1, 1], "x": [1295049600000.0, 1296518400000.0, 1300147200000.0, 1303171200000.0, 1303516800000.0, 1304467200000.0, 1306454400000.0, 1306540800000.0, 1306713600000.0, 1306800000000.0, 1306886400000.0, 1307059200000.0, 1307145600000.0, 1307318400000.0, 1307404800000.0, 1307491200000.0, 1307577600000.0, 1307664000000.0, 1307750400000.0, 1308009600000.0, 1308182400000.0, 1308268800000.0, 1308355200000.0, 1308873600000.0, 1308960000000.0, 1309305600000.0, 1309478400000.0, 1309737600000.0, 1309824000000.0, 1309910400000.0, 1309996800000.0, 1310083200000.0, 1310428800000.0, 1310774400000.0, 1311292800000.0, 1311984000000.0, 1312416000000.0, 1313971200000.0, 1314144000000.0, 1314316800000.0, 1315353600000.0, 1316563200000.0, 1317945600000.0, 1318377600000.0, 1318464000000.0, 1319068800000.0, 1320192000000.0, 1320278400000.0, 1320364800000.0, 1320796800000.0, 1322784000000.0, 1323043200000.0, 1323475200000.0, 1324857600000.0, 1325116800000.0, 1325289600000.0]}, "id": "dbec1dcb-1661-416d-a41b-a1da9e069747"}, "type": "ColumnDataSource", "id": "dbec1dcb-1661-416d-a41b-a1da9e069747"}, {"attributes": {"plot": {"type": "Plot", "id": "1ec3313e-df4c-4b04-85af-cb40b8f5b442"}, "doc": null, "dimension": 1, "id": "a7bf737e-5cf4-4aed-b1de-42ffcc719c2d"}, "type": "Grid", "id": "a7bf737e-5cf4-4aed-b1de-42ffcc719c2d"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "1ec3313e-df4c-4b04-85af-cb40b8f5b442"}], "id": "e097f17b-db66-44e3-a7c9-1c181d8b00fb"}, "type": "PlotContext", "id": "e097f17b-db66-44e3-a7c9-1c181d8b00fb"}, {"attributes": {"plot": {"type": "Plot", "id": "1ec3313e-df4c-4b04-85af-cb40b8f5b442"}, "id": "8ab8314d-dcc3-44fa-9f8b-34d9423bacc8", "doc": null}, "type": "ResizeTool", "id": "8ab8314d-dcc3-44fa-9f8b-34d9423bacc8"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "10233f9e-7f17-4d5e-a611-aeddff2209c5"}, {"type": "DataRange1d", "id": "e4e30fdb-1f4f-44ef-8370-4dc132284140"}], "dimensions": ["width", "height"], "id": "cfa42b8f-fc6c-4712-9131-b4316025e496"}, "type": "ZoomTool", "id": "cfa42b8f-fc6c-4712-9131-b4316025e496"}];
    var modeltype = "PlotContext";
    var elementid = "39a6ea2b-acf8-4e05-a8b8-b9abd26fbffd";
    var plotID = "1ec3313e-df4c-4b04-85af-cb40b8f5b442";
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