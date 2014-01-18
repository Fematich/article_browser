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

    var all_models = [{"attributes": {"plot": {"type": "Plot", "id": "b5472c49-66f6-4e9c-9567-b8234a7aa142"}, "doc": null, "dimension": 1, "id": "63d2c5cb-6c3b-4acc-803e-963eb6f7d4d4"}, "type": "Grid", "id": "63d2c5cb-6c3b-4acc-803e-963eb6f7d4d4"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "4e97c992-f063-47ba-a6aa-f79373bbd3a9"}, "axes": [], "title": "voorkomens", "y_range": {"type": "DataRange1d", "id": "1369935b-27e7-4025-abde-e0430e92a727"}, "outer_width": 400, "renderers": [{"type": "DatetimeAxis", "id": "d7ba61de-ce4d-4587-a1e7-e4d48a2e446d"}, {"type": "LinearAxis", "id": "ecc10c20-924d-4871-8350-93d25bcda61c"}, {"type": "Grid", "id": "c514a109-dc57-4f64-a3c5-25e7b084204a"}, {"type": "Grid", "id": "63d2c5cb-6c3b-4acc-803e-963eb6f7d4d4"}, {"type": "Glyph", "id": "3b7f67e8-b752-49fe-97ac-d488cca04a1b"}], "outer_height": 300, "width": 400, "doc": null, "canvas_height": 300, "id": "b5472c49-66f6-4e9c-9567-b8234a7aa142", "height": 300, "tools": [{"type": "PanTool", "id": "12ce9f9d-3e0e-459f-8dde-b141cf4b418b"}, {"type": "ZoomTool", "id": "4dc639bd-1ac7-499e-9481-e45088f8782a"}, {"type": "ResizeTool", "id": "36c01c28-adff-4900-9205-4ff26f633d1c"}], "canvas_width": 400}, "type": "Plot", "id": "b5472c49-66f6-4e9c-9567-b8234a7aa142"}, {"attributes": {"plot": {"type": "Plot", "id": "b5472c49-66f6-4e9c-9567-b8234a7aa142"}, "doc": null, "dimension": 0, "id": "c514a109-dc57-4f64-a3c5-25e7b084204a"}, "type": "Grid", "id": "c514a109-dc57-4f64-a3c5-25e7b084204a"}, {"attributes": {"plot": {"type": "Plot", "id": "b5472c49-66f6-4e9c-9567-b8234a7aa142"}, "doc": null, "bounds": "auto", "dimension": 1, "location": "min", "axis_label": "# artikels", "id": "ecc10c20-924d-4871-8350-93d25bcda61c"}, "type": "LinearAxis", "id": "ecc10c20-924d-4871-8350-93d25bcda61c"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "b5472c49-66f6-4e9c-9567-b8234a7aa142"}], "id": "0a3b5ed0-ecc5-4564-a3b0-a8c72bb9969d"}, "type": "PlotContext", "id": "0a3b5ed0-ecc5-4564-a3b0-a8c72bb9969d"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "20d01892-aa2a-4e94-8806-31b59bd82576"}, "columns": ["x"]}], "id": "4e97c992-f063-47ba-a6aa-f79373bbd3a9", "doc": null}, "type": "DataRange1d", "id": "4e97c992-f063-47ba-a6aa-f79373bbd3a9"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "4e97c992-f063-47ba-a6aa-f79373bbd3a9"}, {"type": "DataRange1d", "id": "1369935b-27e7-4025-abde-e0430e92a727"}], "dimensions": ["width", "height"], "doc": null, "id": "12ce9f9d-3e0e-459f-8dde-b141cf4b418b"}, "type": "PanTool", "id": "12ce9f9d-3e0e-459f-8dde-b141cf4b418b"}, {"attributes": {"plot": {"type": "Plot", "id": "b5472c49-66f6-4e9c-9567-b8234a7aa142"}, "id": "36c01c28-adff-4900-9205-4ff26f633d1c", "doc": null}, "type": "ResizeTool", "id": "36c01c28-adff-4900-9205-4ff26f633d1c"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "20d01892-aa2a-4e94-8806-31b59bd82576"}, "doc": null, "id": "3b7f67e8-b752-49fe-97ac-d488cca04a1b", "xdata_range": {"type": "DataRange1d", "id": "4e97c992-f063-47ba-a6aa-f79373bbd3a9"}, "ydata_range": {"type": "DataRange1d", "id": "1369935b-27e7-4025-abde-e0430e92a727"}, "glyphspec": {"line_color": {"value": "#1f77b4"}, "line_alpha": 1.0, "fill_color": "#1f77b4", "title": "voorkomens", "type": "line", "fill_alpha": 1.0, "height": 300, "width": 400, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "tools": "pan,zoom,resize", "x_axis_type": "datetime"}, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "line_width": 1, "angle_units": "deg", "type": "line", "y": {"units": "data", "field": "y"}, "line_alpha": 0.1, "start_angle_units": "deg", "valign": null, "radius_units": "screen", "visible": null, "length_units": "screen", "end_angle_units": "deg", "line_dash_offset": 0, "line_cap": "butt", "line_dash": [], "x": {"units": "data", "field": "x"}, "margin": null, "line_join": "miter", "halign": null}}, "type": "Glyph", "id": "3b7f67e8-b752-49fe-97ac-d488cca04a1b"}, {"attributes": {"plot": {"type": "Plot", "id": "b5472c49-66f6-4e9c-9567-b8234a7aa142"}, "doc": null, "bounds": "auto", "id": "d7ba61de-ce4d-4587-a1e7-e4d48a2e446d", "location": "min", "formats": {"days": ["%m/%d/%Y"]}, "axis_label": "Datum", "dimension": 0}, "type": "DatetimeAxis", "id": "d7ba61de-ce4d-4587-a1e7-e4d48a2e446d"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [], "x": []}, "id": "20d01892-aa2a-4e94-8806-31b59bd82576"}, "type": "ColumnDataSource", "id": "20d01892-aa2a-4e94-8806-31b59bd82576"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "4e97c992-f063-47ba-a6aa-f79373bbd3a9"}, {"type": "DataRange1d", "id": "1369935b-27e7-4025-abde-e0430e92a727"}], "dimensions": ["width", "height"], "id": "4dc639bd-1ac7-499e-9481-e45088f8782a"}, "type": "ZoomTool", "id": "4dc639bd-1ac7-499e-9481-e45088f8782a"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "20d01892-aa2a-4e94-8806-31b59bd82576"}, "columns": ["y"]}], "id": "1369935b-27e7-4025-abde-e0430e92a727", "doc": null}, "type": "DataRange1d", "id": "1369935b-27e7-4025-abde-e0430e92a727"}];
    var modeltype = "PlotContext";
    var elementid = "ad2a98a2-c88b-4501-8a39-40d393d1479f";
    var plotID = "b5472c49-66f6-4e9c-9567-b8234a7aa142";
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