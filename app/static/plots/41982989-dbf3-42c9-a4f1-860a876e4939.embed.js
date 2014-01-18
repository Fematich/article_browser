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

    var all_models = [{"attributes": {"x_range": {"type": "DataRange1d", "id": "9e8c363d-923f-4e27-83d8-b64129c3491e"}, "axes": [], "title": "voorkomens", "y_range": {"type": "DataRange1d", "id": "c1d679a4-f371-4fb3-8559-77bfbfe32dde"}, "outer_width": 400, "renderers": [{"type": "DatetimeAxis", "id": "2df18223-a7ee-433e-ad16-2869fd0ba553"}, {"type": "LinearAxis", "id": "9c895b08-155e-4411-9f17-ad44c11ba7e8"}, {"type": "Grid", "id": "6ce8630a-c6a2-4906-83b5-85fab5449c4b"}, {"type": "Grid", "id": "2be732ab-a4fb-4d64-8fe6-183a01ef7833"}, {"type": "Glyph", "id": "3b323a6a-48f2-436d-80c4-84fd53b3f543"}], "outer_height": 300, "width": 400, "doc": null, "canvas_height": 300, "id": "41982989-dbf3-42c9-a4f1-860a876e4939", "height": 300, "tools": [{"type": "PanTool", "id": "c423bc26-a50f-4962-93a1-4754c74d56fc"}, {"type": "ZoomTool", "id": "f02be51a-0cb6-4a17-8e14-bc8060f093c6"}, {"type": "ResizeTool", "id": "d9749bf7-7484-4761-8afe-180749d6289d"}], "canvas_width": 400}, "type": "Plot", "id": "41982989-dbf3-42c9-a4f1-860a876e4939"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [1, 1, 1, 1, 1, 31, 19, 6, 2, 9, 10, 13, 5, 9, 1, 3, 1, 2, 1, 1, 2, 1, 1, 1, 3, 7, 9, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1], "x": [1295049600000.0, 1296518400000.0, 1300147200000.0, 1303171200000.0, 1304467200000.0, 1306454400000.0, 1306540800000.0, 1306713600000.0, 1306800000000.0, 1306886400000.0, 1307059200000.0, 1307145600000.0, 1307318400000.0, 1307404800000.0, 1307491200000.0, 1307577600000.0, 1307664000000.0, 1307750400000.0, 1308182400000.0, 1308268800000.0, 1308355200000.0, 1308960000000.0, 1309305600000.0, 1309478400000.0, 1309737600000.0, 1309824000000.0, 1309910400000.0, 1309996800000.0, 1310083200000.0, 1310428800000.0, 1310774400000.0, 1311292800000.0, 1311984000000.0, 1312416000000.0, 1314144000000.0, 1314316800000.0, 1315353600000.0, 1316563200000.0, 1318377600000.0, 1318464000000.0, 1319068800000.0, 1320278400000.0, 1320796800000.0, 1322784000000.0, 1323043200000.0, 1323475200000.0, 1325116800000.0, 1325289600000.0]}, "id": "18e4a216-7ab0-4470-9c2c-d0b97c074d2b"}, "type": "ColumnDataSource", "id": "18e4a216-7ab0-4470-9c2c-d0b97c074d2b"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "18e4a216-7ab0-4470-9c2c-d0b97c074d2b"}, "columns": ["x"]}], "id": "9e8c363d-923f-4e27-83d8-b64129c3491e", "doc": null}, "type": "DataRange1d", "id": "9e8c363d-923f-4e27-83d8-b64129c3491e"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "41982989-dbf3-42c9-a4f1-860a876e4939"}], "id": "5ce6ba10-a5fc-4f7c-978d-bf7a15c85223"}, "type": "PlotContext", "id": "5ce6ba10-a5fc-4f7c-978d-bf7a15c85223"}, {"attributes": {"plot": {"type": "Plot", "id": "41982989-dbf3-42c9-a4f1-860a876e4939"}, "doc": null, "bounds": "auto", "dimension": 1, "location": "min", "axis_label": "# artikels", "id": "9c895b08-155e-4411-9f17-ad44c11ba7e8"}, "type": "LinearAxis", "id": "9c895b08-155e-4411-9f17-ad44c11ba7e8"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "9e8c363d-923f-4e27-83d8-b64129c3491e"}, {"type": "DataRange1d", "id": "c1d679a4-f371-4fb3-8559-77bfbfe32dde"}], "dimensions": ["width", "height"], "id": "f02be51a-0cb6-4a17-8e14-bc8060f093c6"}, "type": "ZoomTool", "id": "f02be51a-0cb6-4a17-8e14-bc8060f093c6"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "9e8c363d-923f-4e27-83d8-b64129c3491e"}, {"type": "DataRange1d", "id": "c1d679a4-f371-4fb3-8559-77bfbfe32dde"}], "dimensions": ["width", "height"], "doc": null, "id": "c423bc26-a50f-4962-93a1-4754c74d56fc"}, "type": "PanTool", "id": "c423bc26-a50f-4962-93a1-4754c74d56fc"}, {"attributes": {"plot": {"type": "Plot", "id": "41982989-dbf3-42c9-a4f1-860a876e4939"}, "doc": null, "dimension": 0, "id": "6ce8630a-c6a2-4906-83b5-85fab5449c4b"}, "type": "Grid", "id": "6ce8630a-c6a2-4906-83b5-85fab5449c4b"}, {"attributes": {"plot": {"type": "Plot", "id": "41982989-dbf3-42c9-a4f1-860a876e4939"}, "doc": null, "bounds": "auto", "id": "2df18223-a7ee-433e-ad16-2869fd0ba553", "location": "min", "formats": {"days": ["%m/%d/%Y"]}, "axis_label": "Datum", "dimension": 0}, "type": "DatetimeAxis", "id": "2df18223-a7ee-433e-ad16-2869fd0ba553"}, {"attributes": {"plot": {"type": "Plot", "id": "41982989-dbf3-42c9-a4f1-860a876e4939"}, "id": "d9749bf7-7484-4761-8afe-180749d6289d", "doc": null}, "type": "ResizeTool", "id": "d9749bf7-7484-4761-8afe-180749d6289d"}, {"attributes": {"plot": {"type": "Plot", "id": "41982989-dbf3-42c9-a4f1-860a876e4939"}, "doc": null, "dimension": 1, "id": "2be732ab-a4fb-4d64-8fe6-183a01ef7833"}, "type": "Grid", "id": "2be732ab-a4fb-4d64-8fe6-183a01ef7833"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "18e4a216-7ab0-4470-9c2c-d0b97c074d2b"}, "doc": null, "id": "3b323a6a-48f2-436d-80c4-84fd53b3f543", "xdata_range": {"type": "DataRange1d", "id": "9e8c363d-923f-4e27-83d8-b64129c3491e"}, "ydata_range": {"type": "DataRange1d", "id": "c1d679a4-f371-4fb3-8559-77bfbfe32dde"}, "glyphspec": {"line_color": {"value": "#1f77b4"}, "line_alpha": 1.0, "fill_color": "#1f77b4", "title": "voorkomens", "type": "line", "fill_alpha": 1.0, "height": 300, "width": 400, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "tools": "pan,zoom,resize", "x_axis_type": "datetime"}, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "line_width": 1, "angle_units": "deg", "type": "line", "y": {"units": "data", "field": "y"}, "line_alpha": 0.1, "start_angle_units": "deg", "valign": null, "radius_units": "screen", "visible": null, "length_units": "screen", "end_angle_units": "deg", "line_dash_offset": 0, "line_cap": "butt", "line_dash": [], "x": {"units": "data", "field": "x"}, "margin": null, "line_join": "miter", "halign": null}}, "type": "Glyph", "id": "3b323a6a-48f2-436d-80c4-84fd53b3f543"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "18e4a216-7ab0-4470-9c2c-d0b97c074d2b"}, "columns": ["y"]}], "id": "c1d679a4-f371-4fb3-8559-77bfbfe32dde", "doc": null}, "type": "DataRange1d", "id": "c1d679a4-f371-4fb3-8559-77bfbfe32dde"}];
    var modeltype = "PlotContext";
    var elementid = "145a7b52-f758-4545-ba94-2ac90fba16e1";
    var plotID = "41982989-dbf3-42c9-a4f1-860a876e4939";
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