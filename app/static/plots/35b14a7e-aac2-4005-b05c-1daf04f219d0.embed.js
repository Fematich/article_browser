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

    var all_models = [{"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "7e75fc7f-78f5-444b-bcf0-609964c64229"}, {"type": "DataRange1d", "id": "d2c2a6e6-2f0d-4a0a-bff4-6be12cd542db"}], "dimensions": ["width", "height"], "id": "5f4d4eba-4654-4052-a22a-99d355842d59"}, "type": "ZoomTool", "id": "5f4d4eba-4654-4052-a22a-99d355842d59"}, {"attributes": {"plot": {"type": "Plot", "id": "35b14a7e-aac2-4005-b05c-1daf04f219d0"}, "doc": null, "dimension": 1, "id": "22da8b2b-e03e-4762-86de-ad302b7e199f"}, "type": "Grid", "id": "22da8b2b-e03e-4762-86de-ad302b7e199f"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "7e75fc7f-78f5-444b-bcf0-609964c64229"}, "axes": [], "title": "Plot", "y_range": {"type": "DataRange1d", "id": "d2c2a6e6-2f0d-4a0a-bff4-6be12cd542db"}, "outer_width": 600, "renderers": [{"type": "LinearAxis", "id": "e6c5753c-c44d-442c-8e56-4e787d7a6706"}, {"type": "LinearAxis", "id": "3b5a94c6-e587-4f4c-9f0e-f170cdbfd674"}, {"type": "Grid", "id": "c55f0998-ea35-4006-af24-80b5f6e6321a"}, {"type": "Grid", "id": "22da8b2b-e03e-4762-86de-ad302b7e199f"}, {"type": "BoxSelection", "id": "36d18d08-9d6e-4aa8-8963-e77a42d281ca"}, {"type": "Legend", "id": "61b96d88-a1cd-44cf-8c93-9baac6470729"}, {"type": "Glyph", "id": "f58aa35d-9de5-403e-90d8-c34893f65c32"}, {"type": "Glyph", "id": "c64aa240-b853-4f89-bd6e-2e05ae715100"}], "outer_height": 600, "doc": null, "canvas_height": 600, "id": "35b14a7e-aac2-4005-b05c-1daf04f219d0", "tools": [{"type": "PanTool", "id": "f6178dbd-65d8-4108-abf0-77ed52bab6b7"}, {"type": "ZoomTool", "id": "5f4d4eba-4654-4052-a22a-99d355842d59"}, {"type": "PreviewSaveTool", "id": "6e2d87e1-6a36-403c-9aaa-b511151b34f9"}, {"type": "ResizeTool", "id": "0ecf9e35-8e3f-407a-bd12-1983e0a5e318"}, {"type": "BoxSelectTool", "id": "db839a09-ff4a-4a08-bd91-99a3b066106e"}], "canvas_width": 600}, "type": "Plot", "id": "35b14a7e-aac2-4005-b05c-1daf04f219d0"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "b4a6ce1d-0901-4b9c-b029-4c53a976dc8b"}, "columns": ["x"]}, {"ref": {"type": "ColumnDataSource", "id": "c6a1e2e8-cd54-4d04-b588-da58b6cab4e8"}, "columns": ["x"]}], "id": "7e75fc7f-78f5-444b-bcf0-609964c64229", "doc": null}, "type": "DataRange1d", "id": "7e75fc7f-78f5-444b-bcf0-609964c64229"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "7e75fc7f-78f5-444b-bcf0-609964c64229"}, {"type": "DataRange1d", "id": "d2c2a6e6-2f0d-4a0a-bff4-6be12cd542db"}], "dimensions": ["width", "height"], "doc": null, "id": "f6178dbd-65d8-4108-abf0-77ed52bab6b7"}, "type": "PanTool", "id": "f6178dbd-65d8-4108-abf0-77ed52bab6b7"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "c6a1e2e8-cd54-4d04-b588-da58b6cab4e8"}, "doc": null, "id": "c64aa240-b853-4f89-bd6e-2e05ae715100", "xdata_range": {"type": "DataRange1d", "id": "7e75fc7f-78f5-444b-bcf0-609964c64229"}, "ydata_range": {"type": "DataRange1d", "id": "d2c2a6e6-2f0d-4a0a-bff4-6be12cd542db"}, "glyphspec": {"line_color": {"value": "blue"}, "line_alpha": 1.0, "fill_color": {"value": "blue"}, "fill_alpha": 1.0, "radius": {"units": "screen", "value": 4}, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "type": "circle", "size": {"units": "screen", "field": null, "default": 4}}, "nonselection_glyphspec": {"line_color": {"value": "blue"}, "angle_units": "deg", "fill_color": {"value": "blue"}, "visible": null, "radius": {"units": "screen", "value": 4}, "line_dash_offset": 0, "line_join": "miter", "size": {"units": "screen", "default": 4, "field": null}, "line_alpha": 0.1, "radius_units": "screen", "end_angle_units": "deg", "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": 1, "type": "circle", "fill_alpha": 0.1, "halign": null, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "margin": null}}, "type": "Glyph", "id": "c64aa240-b853-4f89-bd6e-2e05ae715100"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "b4a6ce1d-0901-4b9c-b029-4c53a976dc8b"}, "columns": ["y"]}, {"ref": {"type": "ColumnDataSource", "id": "c6a1e2e8-cd54-4d04-b588-da58b6cab4e8"}, "columns": ["y"]}], "id": "d2c2a6e6-2f0d-4a0a-bff4-6be12cd542db", "doc": null}, "type": "DataRange1d", "id": "d2c2a6e6-2f0d-4a0a-bff4-6be12cd542db"}, {"attributes": {"doc": null, "renderers": [{"type": "Glyph", "id": "f58aa35d-9de5-403e-90d8-c34893f65c32"}, {"type": "Glyph", "id": "c64aa240-b853-4f89-bd6e-2e05ae715100"}], "id": "db839a09-ff4a-4a08-bd91-99a3b066106e"}, "type": "BoxSelectTool", "id": "db839a09-ff4a-4a08-bd91-99a3b066106e"}, {"attributes": {"plot": {"type": "Plot", "id": "35b14a7e-aac2-4005-b05c-1daf04f219d0"}, "location": "min", "bounds": "auto", "doc": null, "id": "e6c5753c-c44d-442c-8e56-4e787d7a6706", "dimension": 0}, "type": "LinearAxis", "id": "e6c5753c-c44d-442c-8e56-4e787d7a6706"}, {"attributes": {"plot": {"type": "Plot", "id": "35b14a7e-aac2-4005-b05c-1daf04f219d0"}, "id": "0ecf9e35-8e3f-407a-bd12-1983e0a5e318", "doc": null}, "type": "ResizeTool", "id": "0ecf9e35-8e3f-407a-bd12-1983e0a5e318"}, {"attributes": {"plot": {"type": "Plot", "id": "35b14a7e-aac2-4005-b05c-1daf04f219d0"}, "location": "min", "bounds": "auto", "doc": null, "id": "3b5a94c6-e587-4f4c-9f0e-f170cdbfd674", "dimension": 1}, "type": "LinearAxis", "id": "3b5a94c6-e587-4f4c-9f0e-f170cdbfd674"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "35b14a7e-aac2-4005-b05c-1daf04f219d0"}], "id": "905e20ae-c6ad-457b-b3f7-8533e40ecbbd"}, "type": "PlotContext", "id": "905e20ae-c6ad-457b-b3f7-8533e40ecbbd"}, {"attributes": {"plot": {"type": "Plot", "id": "35b14a7e-aac2-4005-b05c-1daf04f219d0"}, "dataranges": [], "id": "6e2d87e1-6a36-403c-9aaa-b511151b34f9", "doc": null}, "type": "PreviewSaveTool", "id": "6e2d87e1-6a36-403c-9aaa-b511151b34f9"}, {"attributes": {"plot": {"type": "Plot", "id": "35b14a7e-aac2-4005-b05c-1daf04f219d0"}, "doc": null, "dimension": 0, "id": "c55f0998-ea35-4006-af24-80b5f6e6321a"}, "type": "Grid", "id": "c55f0998-ea35-4006-af24-80b5f6e6321a"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [0.6310415215391938, 0.6404549086682197, 0.6352641386294299, 0.5948290600531481, 0.5063627155721406, 0.6365227065305923, 0.6389211003618512, 0.6397195935959784], "x": [0.1, 0.2, 0.3, 0.4, 0.5, 0.15, 0.18, 0.19]}, "id": "b4a6ce1d-0901-4b9c-b029-4c53a976dc8b"}, "type": "ColumnDataSource", "id": "b4a6ce1d-0901-4b9c-b029-4c53a976dc8b"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [0.6518520179012196, 0.5835905348366873, 0.6290313330543595, 0.6489496252297695, 0.6593135364206558], "x": [0.4, 0.5, 0.1, 0.2, 0.3]}, "id": "c6a1e2e8-cd54-4d04-b588-da58b6cab4e8"}, "type": "ColumnDataSource", "id": "c6a1e2e8-cd54-4d04-b588-da58b6cab4e8"}, {"attributes": {"plot": {"type": "Plot", "id": "35b14a7e-aac2-4005-b05c-1daf04f219d0"}, "doc": null, "legends": {"splits1540": [{"type": "Glyph", "id": "f58aa35d-9de5-403e-90d8-c34893f65c32"}], "log_boost_splits1540": [{"type": "Glyph", "id": "c64aa240-b853-4f89-bd6e-2e05ae715100"}]}, "id": "61b96d88-a1cd-44cf-8c93-9baac6470729"}, "type": "Legend", "id": "61b96d88-a1cd-44cf-8c93-9baac6470729"}, {"attributes": {"doc": null, "tool": {"type": "BoxSelectTool", "id": "db839a09-ff4a-4a08-bd91-99a3b066106e"}, "id": "36d18d08-9d6e-4aa8-8963-e77a42d281ca"}, "type": "BoxSelection", "id": "36d18d08-9d6e-4aa8-8963-e77a42d281ca"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "b4a6ce1d-0901-4b9c-b029-4c53a976dc8b"}, "doc": null, "id": "f58aa35d-9de5-403e-90d8-c34893f65c32", "xdata_range": {"type": "DataRange1d", "id": "7e75fc7f-78f5-444b-bcf0-609964c64229"}, "ydata_range": {"type": "DataRange1d", "id": "d2c2a6e6-2f0d-4a0a-bff4-6be12cd542db"}, "glyphspec": {"line_color": {"value": "green"}, "line_alpha": 1.0, "fill_color": {"value": "green"}, "fill_alpha": 1.0, "radius": {"units": "screen", "value": 4}, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "type": "circle", "size": {"units": "screen", "field": null, "default": 4}}, "nonselection_glyphspec": {"line_color": {"value": "green"}, "angle_units": "deg", "fill_color": {"value": "green"}, "visible": null, "radius": {"units": "screen", "value": 4}, "line_dash_offset": 0, "line_join": "miter", "size": {"units": "screen", "default": 4, "field": null}, "line_alpha": 0.1, "radius_units": "screen", "end_angle_units": "deg", "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": 1, "type": "circle", "fill_alpha": 0.1, "halign": null, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "margin": null}}, "type": "Glyph", "id": "f58aa35d-9de5-403e-90d8-c34893f65c32"}];
    var modeltype = "PlotContext";
    var elementid = "8da39588-f952-4d77-b3c8-d4fd7108ce61";
    var plotID = "35b14a7e-aac2-4005-b05c-1daf04f219d0";
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