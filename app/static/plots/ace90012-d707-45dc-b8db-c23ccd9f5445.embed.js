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

    var all_models = [{"attributes": {"plot": {"type": "Plot", "id": "ace90012-d707-45dc-b8db-c23ccd9f5445"}, "location": "min", "bounds": "auto", "doc": null, "id": "99d09315-661c-4311-b168-ad8859549458", "dimension": 1}, "type": "LinearAxis", "id": "99d09315-661c-4311-b168-ad8859549458"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "8397c6b2-58fa-47e7-bdf5-8843889cd0d5"}, {"type": "DataRange1d", "id": "b185f5dc-f0c8-41df-9456-6f04eb14a511"}], "dimensions": ["width", "height"], "id": "da261ebf-35d0-47de-b9c1-3c01f565d9f0"}, "type": "ZoomTool", "id": "da261ebf-35d0-47de-b9c1-3c01f565d9f0"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "626fedf4-4697-4ef2-b0ac-f789398416ab"}, "doc": null, "id": "cdf2aed6-6faf-486c-a943-88e943350d2e", "xdata_range": {"type": "DataRange1d", "id": "8397c6b2-58fa-47e7-bdf5-8843889cd0d5"}, "ydata_range": {"type": "DataRange1d", "id": "b185f5dc-f0c8-41df-9456-6f04eb14a511"}, "glyphspec": {"line_color": {"value": "navy"}, "line_alpha": 1.0, "fill_color": {"value": "navy"}, "fill_alpha": 1.0, "radius": {"units": "screen", "value": 4}, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "type": "circle", "size": {"units": "screen", "field": null, "default": 4}}, "nonselection_glyphspec": {"line_color": {"value": "navy"}, "angle_units": "deg", "fill_color": {"value": "navy"}, "visible": null, "radius": {"units": "screen", "value": 4}, "line_dash_offset": 0, "line_join": "miter", "size": {"units": "screen", "default": 4, "field": null}, "line_alpha": 0.1, "radius_units": "screen", "end_angle_units": "deg", "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": 1, "type": "circle", "fill_alpha": 0.1, "halign": null, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "margin": null}}, "type": "Glyph", "id": "cdf2aed6-6faf-486c-a943-88e943350d2e"}, {"attributes": {"doc": null, "tool": {"type": "BoxSelectTool", "id": "ae0779fe-b2c3-4cbe-9096-89b0e3875e38"}, "id": "8bb066b9-8f9f-4ed7-bec0-091b7dbe595b"}, "type": "BoxSelection", "id": "8bb066b9-8f9f-4ed7-bec0-091b7dbe595b"}, {"attributes": {"doc": null, "renderers": [{"type": "Glyph", "id": "9d25622c-7837-4219-a3fa-459381f533b9"}, {"type": "Glyph", "id": "cdf2aed6-6faf-486c-a943-88e943350d2e"}], "id": "ae0779fe-b2c3-4cbe-9096-89b0e3875e38"}, "type": "BoxSelectTool", "id": "ae0779fe-b2c3-4cbe-9096-89b0e3875e38"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [89, 89, 87, 78, 21, 33, 68, 30, 99, 68, 66, 47, 67, 59, 51, 25, 83, 73, 45, 63, 14, 53, 49, 90, 46, 46, 2, 90, 48, 32, 100, 69, 35, 97, 38, 71, 14, 4, 70, 6, 58, 33, 34, 48, 99, 9, 60, 53, 90, 20, 79, 92, 71, 80, 38, 100, 60, 2, 14, 82, 7, 26, 65, 83, 87, 59, 45, 33, 61, 58, 82, 70, 42, 2, 83, 41, 60, 90, 2, 54, 19, 88, 55, 50, 51, 54, 62, 43, 65, 65, 8, 100, 64, 99, 69, 27, 68, 55, 75, 54], "x": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]}, "id": "c113043f-7865-4089-af13-4c7344882f85"}, "type": "ColumnDataSource", "id": "c113043f-7865-4089-af13-4c7344882f85"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "c113043f-7865-4089-af13-4c7344882f85"}, "doc": null, "id": "9d25622c-7837-4219-a3fa-459381f533b9", "xdata_range": {"type": "DataRange1d", "id": "8397c6b2-58fa-47e7-bdf5-8843889cd0d5"}, "ydata_range": {"type": "DataRange1d", "id": "b185f5dc-f0c8-41df-9456-6f04eb14a511"}, "glyphspec": {"line_color": {"value": "tomato"}, "line_alpha": 1.0, "fill_color": {"value": "tomato"}, "fill_alpha": 1.0, "radius": {"units": "screen", "value": 4}, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "type": "circle", "size": {"units": "screen", "field": null, "default": 4}}, "nonselection_glyphspec": {"line_color": {"value": "tomato"}, "angle_units": "deg", "fill_color": {"value": "tomato"}, "visible": null, "radius": {"units": "screen", "value": 4}, "line_dash_offset": 0, "line_join": "miter", "size": {"units": "screen", "default": 4, "field": null}, "line_alpha": 0.1, "radius_units": "screen", "end_angle_units": "deg", "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": 1, "type": "circle", "fill_alpha": 0.1, "halign": null, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "margin": null}}, "type": "Glyph", "id": "9d25622c-7837-4219-a3fa-459381f533b9"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "ace90012-d707-45dc-b8db-c23ccd9f5445"}], "id": "7da272fd-0800-4042-9472-9aad82db7cde"}, "type": "PlotContext", "id": "7da272fd-0800-4042-9472-9aad82db7cde"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "8397c6b2-58fa-47e7-bdf5-8843889cd0d5"}, "axes": [], "title": "Plot", "y_range": {"type": "DataRange1d", "id": "b185f5dc-f0c8-41df-9456-6f04eb14a511"}, "outer_width": 600, "renderers": [{"type": "LinearAxis", "id": "e30c36b9-b10f-432f-98e5-c88f8fe6baeb"}, {"type": "LinearAxis", "id": "99d09315-661c-4311-b168-ad8859549458"}, {"type": "Grid", "id": "09efcaa7-3c37-4891-b6b7-98fe0960995a"}, {"type": "Grid", "id": "e6c6f0d8-a816-49bf-ba01-46c7e33358e8"}, {"type": "BoxSelection", "id": "8bb066b9-8f9f-4ed7-bec0-091b7dbe595b"}, {"type": "Glyph", "id": "9d25622c-7837-4219-a3fa-459381f533b9"}, {"type": "Glyph", "id": "cdf2aed6-6faf-486c-a943-88e943350d2e"}], "outer_height": 600, "doc": null, "canvas_height": 600, "id": "ace90012-d707-45dc-b8db-c23ccd9f5445", "tools": [{"type": "PanTool", "id": "9a4755cc-e7b3-4ae2-8be1-1c72c51c567a"}, {"type": "ZoomTool", "id": "da261ebf-35d0-47de-b9c1-3c01f565d9f0"}, {"type": "PreviewSaveTool", "id": "bab97bfd-a376-486a-96a2-2f299552a0cf"}, {"type": "ResizeTool", "id": "a93975fe-b662-4398-8dd7-30005451fa8c"}, {"type": "BoxSelectTool", "id": "ae0779fe-b2c3-4cbe-9096-89b0e3875e38"}], "canvas_width": 600}, "type": "Plot", "id": "ace90012-d707-45dc-b8db-c23ccd9f5445"}, {"attributes": {"plot": {"type": "Plot", "id": "ace90012-d707-45dc-b8db-c23ccd9f5445"}, "doc": null, "dimension": 1, "id": "e6c6f0d8-a816-49bf-ba01-46c7e33358e8"}, "type": "Grid", "id": "e6c6f0d8-a816-49bf-ba01-46c7e33358e8"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "8397c6b2-58fa-47e7-bdf5-8843889cd0d5"}, {"type": "DataRange1d", "id": "b185f5dc-f0c8-41df-9456-6f04eb14a511"}], "dimensions": ["width", "height"], "doc": null, "id": "9a4755cc-e7b3-4ae2-8be1-1c72c51c567a"}, "type": "PanTool", "id": "9a4755cc-e7b3-4ae2-8be1-1c72c51c567a"}, {"attributes": {"plot": {"type": "Plot", "id": "ace90012-d707-45dc-b8db-c23ccd9f5445"}, "dataranges": [], "id": "bab97bfd-a376-486a-96a2-2f299552a0cf", "doc": null}, "type": "PreviewSaveTool", "id": "bab97bfd-a376-486a-96a2-2f299552a0cf"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "c113043f-7865-4089-af13-4c7344882f85"}, "columns": ["y"]}, {"ref": {"type": "ColumnDataSource", "id": "626fedf4-4697-4ef2-b0ac-f789398416ab"}, "columns": ["y"]}], "id": "b185f5dc-f0c8-41df-9456-6f04eb14a511", "doc": null}, "type": "DataRange1d", "id": "b185f5dc-f0c8-41df-9456-6f04eb14a511"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "c113043f-7865-4089-af13-4c7344882f85"}, "columns": ["x"]}, {"ref": {"type": "ColumnDataSource", "id": "626fedf4-4697-4ef2-b0ac-f789398416ab"}, "columns": ["x"]}], "id": "8397c6b2-58fa-47e7-bdf5-8843889cd0d5", "doc": null}, "type": "DataRange1d", "id": "8397c6b2-58fa-47e7-bdf5-8843889cd0d5"}, {"attributes": {"plot": {"type": "Plot", "id": "ace90012-d707-45dc-b8db-c23ccd9f5445"}, "id": "a93975fe-b662-4398-8dd7-30005451fa8c", "doc": null}, "type": "ResizeTool", "id": "a93975fe-b662-4398-8dd7-30005451fa8c"}, {"attributes": {"plot": {"type": "Plot", "id": "ace90012-d707-45dc-b8db-c23ccd9f5445"}, "location": "min", "bounds": "auto", "doc": null, "id": "e30c36b9-b10f-432f-98e5-c88f8fe6baeb", "dimension": 0}, "type": "LinearAxis", "id": "e30c36b9-b10f-432f-98e5-c88f8fe6baeb"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [95, 51, 86, 0, 66, 97, 71, 91, 62, 1, 84, 2, 5, 36, 74, 12, 69, 10, 72, 64, 90, 48, 29, 89, 94, 48, 86, 83, 95, 95, 25, 27, 35, 82, 58, 40, 70, 16, 67, 95, 25, 31, 98, 46, 82, 14, 55, 87, 44, 71, 96, 43, 52, 11, 48, 97, 95, 13, 95, 96, 10, 26, 8, 59, 73, 49, 100, 31, 65, 22, 56, 61, 16, 78, 15, 59, 12, 86, 56, 9, 30, 33, 13, 38, 56, 22, 96, 93, 64, 44, 66, 41, 31, 9, 58, 8, 1, 37, 82, 97], "x": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]}, "id": "626fedf4-4697-4ef2-b0ac-f789398416ab"}, "type": "ColumnDataSource", "id": "626fedf4-4697-4ef2-b0ac-f789398416ab"}, {"attributes": {"plot": {"type": "Plot", "id": "ace90012-d707-45dc-b8db-c23ccd9f5445"}, "doc": null, "dimension": 0, "id": "09efcaa7-3c37-4891-b6b7-98fe0960995a"}, "type": "Grid", "id": "09efcaa7-3c37-4891-b6b7-98fe0960995a"}];
    var modeltype = "PlotContext";
    var elementid = "55544d15-fac0-454c-8d78-62fbb456eb02";
    var plotID = "ace90012-d707-45dc-b8db-c23ccd9f5445";
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