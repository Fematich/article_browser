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

    var all_models = [{"attributes": {"plot": {"type": "Plot", "id": "ab5dd46b-c942-4412-824e-cdf397ebde2c"}, "doc": null, "dimension": 0, "id": "07d3b529-4a37-4cd0-926f-ef68f526f89a"}, "type": "Grid", "id": "07d3b529-4a37-4cd0-926f-ef68f526f89a"}, {"attributes": {"plot": {"type": "Plot", "id": "ab5dd46b-c942-4412-824e-cdf397ebde2c"}, "doc": null, "legends": {"splits1540": [{"type": "Glyph", "id": "f486a851-eb21-4dda-8332-7277eb47cc50"}]}, "id": "665912c9-b84d-43b2-9379-3e40ab6f6f39"}, "type": "Legend", "id": "665912c9-b84d-43b2-9379-3e40ab6f6f39"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "7db04195-c6d5-4938-a209-d206c568afac"}, {"type": "DataRange1d", "id": "5072bbcc-7b8a-4c71-86e0-d48ae5576ea8"}], "dimensions": ["width", "height"], "id": "5ff77617-c641-4a28-90fc-241a3c6980bc"}, "type": "ZoomTool", "id": "5ff77617-c641-4a28-90fc-241a3c6980bc"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "7db04195-c6d5-4938-a209-d206c568afac"}, {"type": "DataRange1d", "id": "5072bbcc-7b8a-4c71-86e0-d48ae5576ea8"}], "dimensions": ["width", "height"], "doc": null, "id": "73f450b9-9a74-4dec-9e4f-a68704eacbf5"}, "type": "PanTool", "id": "73f450b9-9a74-4dec-9e4f-a68704eacbf5"}, {"attributes": {"plot": {"type": "Plot", "id": "ab5dd46b-c942-4412-824e-cdf397ebde2c"}, "doc": null, "dimension": 1, "id": "8223ddf5-82bf-42dd-b6b2-36daefa133da"}, "type": "Grid", "id": "8223ddf5-82bf-42dd-b6b2-36daefa133da"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "9e278229-a925-4316-9131-26afd4e258cc"}, "columns": ["x"]}], "id": "7db04195-c6d5-4938-a209-d206c568afac", "doc": null}, "type": "DataRange1d", "id": "7db04195-c6d5-4938-a209-d206c568afac"}, {"attributes": {"plot": {"type": "Plot", "id": "ab5dd46b-c942-4412-824e-cdf397ebde2c"}, "location": "min", "bounds": "auto", "doc": null, "id": "4aff55b3-bb6e-4ec7-8bc6-fe0991f80515", "dimension": 0}, "type": "LinearAxis", "id": "4aff55b3-bb6e-4ec7-8bc6-fe0991f80515"}, {"attributes": {"doc": null, "tool": {"type": "BoxSelectTool", "id": "28a65f58-9acf-45b2-990f-ca504272af91"}, "id": "4aa36eee-ef03-4b55-bbc7-3f24b3c99572"}, "type": "BoxSelection", "id": "4aa36eee-ef03-4b55-bbc7-3f24b3c99572"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "9e278229-a925-4316-9131-26afd4e258cc"}, "doc": null, "id": "f486a851-eb21-4dda-8332-7277eb47cc50", "xdata_range": {"type": "DataRange1d", "id": "7db04195-c6d5-4938-a209-d206c568afac"}, "ydata_range": {"type": "DataRange1d", "id": "5072bbcc-7b8a-4c71-86e0-d48ae5576ea8"}, "glyphspec": {"line_color": {"value": "green"}, "line_alpha": 1.0, "fill_color": {"value": "green"}, "fill_alpha": 1.0, "radius": {"units": "screen", "value": 4}, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "type": "circle", "size": {"units": "screen", "field": null, "default": 4}}, "nonselection_glyphspec": {"line_color": {"value": "green"}, "angle_units": "deg", "fill_color": {"value": "green"}, "visible": null, "radius": {"units": "screen", "value": 4}, "line_dash_offset": 0, "line_join": "miter", "size": {"units": "screen", "default": 4, "field": null}, "line_alpha": 0.1, "radius_units": "screen", "end_angle_units": "deg", "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": 1, "type": "circle", "fill_alpha": 0.1, "halign": null, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "margin": null}}, "type": "Glyph", "id": "f486a851-eb21-4dda-8332-7277eb47cc50"}, {"attributes": {"doc": null, "renderers": [{"type": "Glyph", "id": "f486a851-eb21-4dda-8332-7277eb47cc50"}], "id": "28a65f58-9acf-45b2-990f-ca504272af91"}, "type": "BoxSelectTool", "id": "28a65f58-9acf-45b2-990f-ca504272af91"}, {"attributes": {"plot": {"type": "Plot", "id": "ab5dd46b-c942-4412-824e-cdf397ebde2c"}, "id": "7e725470-56de-4848-9545-581a27668267", "doc": null}, "type": "ResizeTool", "id": "7e725470-56de-4848-9545-581a27668267"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "7db04195-c6d5-4938-a209-d206c568afac"}, "axes": [], "title": "Plot", "y_range": {"type": "DataRange1d", "id": "5072bbcc-7b8a-4c71-86e0-d48ae5576ea8"}, "outer_width": 600, "renderers": [{"type": "LinearAxis", "id": "4aff55b3-bb6e-4ec7-8bc6-fe0991f80515"}, {"type": "LinearAxis", "id": "215c6dd2-3324-4da5-9d2d-edbdd7be46b6"}, {"type": "Grid", "id": "07d3b529-4a37-4cd0-926f-ef68f526f89a"}, {"type": "Grid", "id": "8223ddf5-82bf-42dd-b6b2-36daefa133da"}, {"type": "BoxSelection", "id": "4aa36eee-ef03-4b55-bbc7-3f24b3c99572"}, {"type": "Legend", "id": "665912c9-b84d-43b2-9379-3e40ab6f6f39"}, {"type": "Glyph", "id": "f486a851-eb21-4dda-8332-7277eb47cc50"}], "outer_height": 600, "doc": null, "canvas_height": 600, "id": "ab5dd46b-c942-4412-824e-cdf397ebde2c", "tools": [{"type": "PanTool", "id": "73f450b9-9a74-4dec-9e4f-a68704eacbf5"}, {"type": "ZoomTool", "id": "5ff77617-c641-4a28-90fc-241a3c6980bc"}, {"type": "PreviewSaveTool", "id": "216d7e7b-eee2-4d87-9615-26129b71d7fa"}, {"type": "ResizeTool", "id": "7e725470-56de-4848-9545-581a27668267"}, {"type": "BoxSelectTool", "id": "28a65f58-9acf-45b2-990f-ca504272af91"}], "canvas_width": 600}, "type": "Plot", "id": "ab5dd46b-c942-4412-824e-cdf397ebde2c"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "ab5dd46b-c942-4412-824e-cdf397ebde2c"}], "id": "4b5ffa6c-dc4d-4240-8834-a3ae25f2848a"}, "type": "PlotContext", "id": "4b5ffa6c-dc4d-4240-8834-a3ae25f2848a"}, {"attributes": {"plot": {"type": "Plot", "id": "ab5dd46b-c942-4412-824e-cdf397ebde2c"}, "dataranges": [], "id": "216d7e7b-eee2-4d87-9615-26129b71d7fa", "doc": null}, "type": "PreviewSaveTool", "id": "216d7e7b-eee2-4d87-9615-26129b71d7fa"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "9e278229-a925-4316-9131-26afd4e258cc"}, "columns": ["y"]}], "id": "5072bbcc-7b8a-4c71-86e0-d48ae5576ea8", "doc": null}, "type": "DataRange1d", "id": "5072bbcc-7b8a-4c71-86e0-d48ae5576ea8"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [0.6310415215391938, 0.6404549086682197, 0.6352641386294299, 0.5948290600531481, 0.5063627155721406, 0.6365227065305923, 0.6389211003618512, 0.6397195935959784], "x": [0.1, 0.2, 0.3, 0.4, 0.5, 0.15, 0.18, 0.19]}, "id": "9e278229-a925-4316-9131-26afd4e258cc"}, "type": "ColumnDataSource", "id": "9e278229-a925-4316-9131-26afd4e258cc"}, {"attributes": {"plot": {"type": "Plot", "id": "ab5dd46b-c942-4412-824e-cdf397ebde2c"}, "location": "min", "bounds": "auto", "doc": null, "id": "215c6dd2-3324-4da5-9d2d-edbdd7be46b6", "dimension": 1}, "type": "LinearAxis", "id": "215c6dd2-3324-4da5-9d2d-edbdd7be46b6"}];
    var modeltype = "PlotContext";
    var elementid = "76815989-a482-4d84-9457-d8a00b866340";
    var plotID = "ab5dd46b-c942-4412-824e-cdf397ebde2c";
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