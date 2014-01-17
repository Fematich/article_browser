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

    var all_models = [{"attributes": {"plot": {"type": "Plot", "id": "0d77c3a2-9092-4bf6-b06e-d30b1352f680"}, "doc": null, "dimension": 0, "id": "e91d435f-4086-42db-acf8-f548b8b47698"}, "type": "Grid", "id": "e91d435f-4086-42db-acf8-f548b8b47698"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "81e48b6a-0629-43de-badd-81bcf4970a58"}, "doc": null, "id": "6f12f195-d9ee-48d3-9e89-b47f0bb24fec", "xdata_range": {"type": "DataRange1d", "id": "db17f694-76e4-452b-a8dc-6e4e55d743fd"}, "ydata_range": {"type": "DataRange1d", "id": "e4350a31-b52a-4331-b245-9ea30d30992d"}, "glyphspec": {"line_color": {"value": "#1f77b4"}, "line_alpha": 1.0, "fill_color": "#1f77b4", "fill_alpha": 1.0, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "type": "line"}, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "line_width": 1, "angle_units": "deg", "type": "line", "y": {"units": "data", "field": "y"}, "line_alpha": 0.1, "start_angle_units": "deg", "valign": null, "radius_units": "screen", "visible": null, "length_units": "screen", "end_angle_units": "deg", "line_dash_offset": 0, "line_cap": "butt", "line_dash": [], "x": {"units": "data", "field": "x"}, "margin": null, "line_join": "miter", "halign": null}}, "type": "Glyph", "id": "6f12f195-d9ee-48d3-9e89-b47f0bb24fec"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "81e48b6a-0629-43de-badd-81bcf4970a58"}, "columns": ["y"]}], "id": "e4350a31-b52a-4331-b245-9ea30d30992d", "doc": null}, "type": "DataRange1d", "id": "e4350a31-b52a-4331-b245-9ea30d30992d"}, {"attributes": {"plot": {"type": "Plot", "id": "0d77c3a2-9092-4bf6-b06e-d30b1352f680"}, "doc": null, "dimension": 1, "id": "aaaf86c3-77b5-4192-97c7-64ec9dad8b6b"}, "type": "Grid", "id": "aaaf86c3-77b5-4192-97c7-64ec9dad8b6b"}, {"attributes": {"plot": {"type": "Plot", "id": "0d77c3a2-9092-4bf6-b06e-d30b1352f680"}, "dataranges": [], "id": "01f400d7-5a70-411f-8303-ea801d3e91fb", "doc": null}, "type": "PreviewSaveTool", "id": "01f400d7-5a70-411f-8303-ea801d3e91fb"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "db17f694-76e4-452b-a8dc-6e4e55d743fd"}, {"type": "DataRange1d", "id": "e4350a31-b52a-4331-b245-9ea30d30992d"}], "dimensions": ["width", "height"], "id": "f8cb8b5b-9347-42d4-8d9d-95dd0b83e069"}, "type": "ZoomTool", "id": "f8cb8b5b-9347-42d4-8d9d-95dd0b83e069"}, {"attributes": {"doc": null, "renderers": [{"type": "Glyph", "id": "6f12f195-d9ee-48d3-9e89-b47f0bb24fec"}], "id": "815d6563-bcc3-4e96-a766-c7f2dd70a897"}, "type": "BoxSelectTool", "id": "815d6563-bcc3-4e96-a766-c7f2dd70a897"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "db17f694-76e4-452b-a8dc-6e4e55d743fd"}, {"type": "DataRange1d", "id": "e4350a31-b52a-4331-b245-9ea30d30992d"}], "dimensions": ["width", "height"], "doc": null, "id": "1e74e6d8-ab33-4aba-b3b0-47a82934e4ca"}, "type": "PanTool", "id": "1e74e6d8-ab33-4aba-b3b0-47a82934e4ca"}, {"attributes": {"plot": {"type": "Plot", "id": "0d77c3a2-9092-4bf6-b06e-d30b1352f680"}, "location": "min", "bounds": "auto", "doc": null, "id": "34e9f0bf-5402-4639-a208-1cfe1b4f2779", "dimension": 1}, "type": "LinearAxis", "id": "34e9f0bf-5402-4639-a208-1cfe1b4f2779"}, {"attributes": {"doc": null, "tool": {"type": "BoxSelectTool", "id": "815d6563-bcc3-4e96-a766-c7f2dd70a897"}, "id": "613e9ea3-0470-4e21-8a65-fc07a2b080d6"}, "type": "BoxSelection", "id": "613e9ea3-0470-4e21-8a65-fc07a2b080d6"}, {"attributes": {"plot": {"type": "Plot", "id": "0d77c3a2-9092-4bf6-b06e-d30b1352f680"}, "id": "76b05ce9-dc07-4df2-b66b-a939561bdccc", "doc": null}, "type": "ResizeTool", "id": "76b05ce9-dc07-4df2-b66b-a939561bdccc"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "db17f694-76e4-452b-a8dc-6e4e55d743fd"}, "axes": [], "title": "Plot", "y_range": {"type": "DataRange1d", "id": "e4350a31-b52a-4331-b245-9ea30d30992d"}, "outer_width": 600, "renderers": [{"type": "LinearAxis", "id": "5a05a52f-f775-417a-a4da-f743c23de90c"}, {"type": "LinearAxis", "id": "34e9f0bf-5402-4639-a208-1cfe1b4f2779"}, {"type": "Grid", "id": "e91d435f-4086-42db-acf8-f548b8b47698"}, {"type": "Grid", "id": "aaaf86c3-77b5-4192-97c7-64ec9dad8b6b"}, {"type": "BoxSelection", "id": "613e9ea3-0470-4e21-8a65-fc07a2b080d6"}, {"type": "Glyph", "id": "6f12f195-d9ee-48d3-9e89-b47f0bb24fec"}], "outer_height": 600, "doc": null, "canvas_height": 600, "id": "0d77c3a2-9092-4bf6-b06e-d30b1352f680", "tools": [{"type": "PanTool", "id": "1e74e6d8-ab33-4aba-b3b0-47a82934e4ca"}, {"type": "ZoomTool", "id": "f8cb8b5b-9347-42d4-8d9d-95dd0b83e069"}, {"type": "PreviewSaveTool", "id": "01f400d7-5a70-411f-8303-ea801d3e91fb"}, {"type": "ResizeTool", "id": "76b05ce9-dc07-4df2-b66b-a939561bdccc"}, {"type": "BoxSelectTool", "id": "815d6563-bcc3-4e96-a766-c7f2dd70a897"}], "canvas_width": 600}, "type": "Plot", "id": "0d77c3a2-9092-4bf6-b06e-d30b1352f680"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "0d77c3a2-9092-4bf6-b06e-d30b1352f680"}], "id": "a49d1227-529f-4f82-98ae-d118e3b8eafb"}, "type": "PlotContext", "id": "a49d1227-529f-4f82-98ae-d118e3b8eafb"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [1, 1, 1, 1], "x": [1294012800000, 1309996800000, 1312934400000, 1299456000000]}, "id": "81e48b6a-0629-43de-badd-81bcf4970a58"}, "type": "ColumnDataSource", "id": "81e48b6a-0629-43de-badd-81bcf4970a58"}, {"attributes": {"plot": {"type": "Plot", "id": "0d77c3a2-9092-4bf6-b06e-d30b1352f680"}, "location": "min", "bounds": "auto", "doc": null, "id": "5a05a52f-f775-417a-a4da-f743c23de90c", "dimension": 0}, "type": "LinearAxis", "id": "5a05a52f-f775-417a-a4da-f743c23de90c"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "81e48b6a-0629-43de-badd-81bcf4970a58"}, "columns": ["x"]}], "id": "db17f694-76e4-452b-a8dc-6e4e55d743fd", "doc": null}, "type": "DataRange1d", "id": "db17f694-76e4-452b-a8dc-6e4e55d743fd"}];
    var modeltype = "PlotContext";
    var elementid = "0dbc6f65-5778-4d59-81fd-71f75c9749b4";
    var plotID = "0d77c3a2-9092-4bf6-b06e-d30b1352f680";
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