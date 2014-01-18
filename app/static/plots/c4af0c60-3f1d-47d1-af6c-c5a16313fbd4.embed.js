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

    var all_models = [{"attributes": {"x_range": {"type": "DataRange1d", "id": "d27126aa-564e-42bf-9632-7c8e5f0a3bd5"}, "axes": [], "title": "voorkomens", "y_range": {"type": "DataRange1d", "id": "53cb0162-ba79-4d84-9590-0a72d9b67029"}, "outer_width": 400, "renderers": [{"type": "DatetimeAxis", "id": "94d9ad7c-7ef2-43f5-9b25-892defc5fe2d"}, {"type": "LinearAxis", "id": "9a4d4d0b-093a-4e08-a36c-48ea02369439"}, {"type": "Grid", "id": "ae8dbae6-f0d2-4db3-a1f3-e11f2cab55a2"}, {"type": "Grid", "id": "c2b51018-e130-41ba-9477-b6ec97cc1d12"}, {"type": "Glyph", "id": "f3a954f9-160f-4ba5-84b0-c534f111da1f"}], "outer_height": 300, "width": 400, "doc": null, "canvas_height": 300, "id": "c4af0c60-3f1d-47d1-af6c-c5a16313fbd4", "height": 300, "tools": [{"type": "PanTool", "id": "a3d9dcee-fafe-42d9-8d71-32a8bf26281e"}, {"type": "ZoomTool", "id": "fa67b166-c9f7-41d1-9952-b0187956d67e"}, {"type": "ResizeTool", "id": "6258addb-f79b-4949-a362-e2f4a39e0b58"}], "canvas_width": 400}, "type": "Plot", "id": "c4af0c60-3f1d-47d1-af6c-c5a16313fbd4"}, {"attributes": {"plot": {"type": "Plot", "id": "c4af0c60-3f1d-47d1-af6c-c5a16313fbd4"}, "doc": null, "dimension": 1, "id": "c2b51018-e130-41ba-9477-b6ec97cc1d12"}, "type": "Grid", "id": "c2b51018-e130-41ba-9477-b6ec97cc1d12"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [1, 1, 1, 1, 1, 31, 19, 6, 2, 9, 10, 13, 5, 9, 1, 3, 1, 2, 1, 1, 2, 1, 1, 1, 3, 7, 9, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1], "x": [1295049600000.0, 1296518400000.0, 1300147200000.0, 1303171200000.0, 1304467200000.0, 1306454400000.0, 1306540800000.0, 1306713600000.0, 1306800000000.0, 1306886400000.0, 1307059200000.0, 1307145600000.0, 1307318400000.0, 1307404800000.0, 1307491200000.0, 1307577600000.0, 1307664000000.0, 1307750400000.0, 1308182400000.0, 1308268800000.0, 1308355200000.0, 1308960000000.0, 1309305600000.0, 1309478400000.0, 1309737600000.0, 1309824000000.0, 1309910400000.0, 1309996800000.0, 1310083200000.0, 1310428800000.0, 1310774400000.0, 1311292800000.0, 1311984000000.0, 1312416000000.0, 1314144000000.0, 1314316800000.0, 1315353600000.0, 1316563200000.0, 1318377600000.0, 1318464000000.0, 1319068800000.0, 1320278400000.0, 1320796800000.0, 1322784000000.0, 1323043200000.0, 1323475200000.0, 1325116800000.0, 1325289600000.0]}, "id": "4843beeb-d58a-499e-8282-0d5b931d0b97"}, "type": "ColumnDataSource", "id": "4843beeb-d58a-499e-8282-0d5b931d0b97"}, {"attributes": {"plot": {"type": "Plot", "id": "c4af0c60-3f1d-47d1-af6c-c5a16313fbd4"}, "id": "6258addb-f79b-4949-a362-e2f4a39e0b58", "doc": null}, "type": "ResizeTool", "id": "6258addb-f79b-4949-a362-e2f4a39e0b58"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "4843beeb-d58a-499e-8282-0d5b931d0b97"}, "columns": ["x"]}], "id": "d27126aa-564e-42bf-9632-7c8e5f0a3bd5", "doc": null}, "type": "DataRange1d", "id": "d27126aa-564e-42bf-9632-7c8e5f0a3bd5"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "4843beeb-d58a-499e-8282-0d5b931d0b97"}, "doc": null, "id": "f3a954f9-160f-4ba5-84b0-c534f111da1f", "xdata_range": {"type": "DataRange1d", "id": "d27126aa-564e-42bf-9632-7c8e5f0a3bd5"}, "ydata_range": {"type": "DataRange1d", "id": "53cb0162-ba79-4d84-9590-0a72d9b67029"}, "glyphspec": {"line_color": {"value": "#1f77b4"}, "line_alpha": 1.0, "fill_color": "#1f77b4", "title": "voorkomens", "type": "line", "fill_alpha": 1.0, "height": 300, "width": 400, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "tools": "pan,zoom,resize", "x_axis_type": "datetime"}, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "line_width": 1, "angle_units": "deg", "type": "line", "y": {"units": "data", "field": "y"}, "line_alpha": 0.1, "start_angle_units": "deg", "valign": null, "radius_units": "screen", "visible": null, "length_units": "screen", "end_angle_units": "deg", "line_dash_offset": 0, "line_cap": "butt", "line_dash": [], "x": {"units": "data", "field": "x"}, "margin": null, "line_join": "miter", "halign": null}}, "type": "Glyph", "id": "f3a954f9-160f-4ba5-84b0-c534f111da1f"}, {"attributes": {"plot": {"type": "Plot", "id": "c4af0c60-3f1d-47d1-af6c-c5a16313fbd4"}, "doc": null, "bounds": "auto", "id": "94d9ad7c-7ef2-43f5-9b25-892defc5fe2d", "location": "min", "formats": {"days": ["%m/%d/%Y"]}, "axis_label": "Datum", "dimension": 0}, "type": "DatetimeAxis", "id": "94d9ad7c-7ef2-43f5-9b25-892defc5fe2d"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "d27126aa-564e-42bf-9632-7c8e5f0a3bd5"}, {"type": "DataRange1d", "id": "53cb0162-ba79-4d84-9590-0a72d9b67029"}], "dimensions": ["width", "height"], "doc": null, "id": "a3d9dcee-fafe-42d9-8d71-32a8bf26281e"}, "type": "PanTool", "id": "a3d9dcee-fafe-42d9-8d71-32a8bf26281e"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "d27126aa-564e-42bf-9632-7c8e5f0a3bd5"}, {"type": "DataRange1d", "id": "53cb0162-ba79-4d84-9590-0a72d9b67029"}], "dimensions": ["width", "height"], "id": "fa67b166-c9f7-41d1-9952-b0187956d67e"}, "type": "ZoomTool", "id": "fa67b166-c9f7-41d1-9952-b0187956d67e"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "c4af0c60-3f1d-47d1-af6c-c5a16313fbd4"}], "id": "34d7e3b0-da80-4b76-9472-8e511b604d43"}, "type": "PlotContext", "id": "34d7e3b0-da80-4b76-9472-8e511b604d43"}, {"attributes": {"plot": {"type": "Plot", "id": "c4af0c60-3f1d-47d1-af6c-c5a16313fbd4"}, "doc": null, "dimension": 0, "id": "ae8dbae6-f0d2-4db3-a1f3-e11f2cab55a2"}, "type": "Grid", "id": "ae8dbae6-f0d2-4db3-a1f3-e11f2cab55a2"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "4843beeb-d58a-499e-8282-0d5b931d0b97"}, "columns": ["y"]}], "id": "53cb0162-ba79-4d84-9590-0a72d9b67029", "doc": null}, "type": "DataRange1d", "id": "53cb0162-ba79-4d84-9590-0a72d9b67029"}, {"attributes": {"plot": {"type": "Plot", "id": "c4af0c60-3f1d-47d1-af6c-c5a16313fbd4"}, "doc": null, "bounds": "auto", "dimension": 1, "location": "min", "axis_label": "# artikels", "id": "9a4d4d0b-093a-4e08-a36c-48ea02369439"}, "type": "LinearAxis", "id": "9a4d4d0b-093a-4e08-a36c-48ea02369439"}];
    var modeltype = "PlotContext";
    var elementid = "02daf77c-9b09-48bb-a80b-a9c07f0f01fa";
    var plotID = "c4af0c60-3f1d-47d1-af6c-c5a16313fbd4";
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