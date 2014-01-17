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

    var all_models = [{"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "519300ba-7669-46a1-b655-2c61492fa433"}, "columns": ["x"]}], "id": "af8e6fd0-2c6e-4df6-8379-28479682e179", "doc": null}, "type": "DataRange1d", "id": "af8e6fd0-2c6e-4df6-8379-28479682e179"}, {"attributes": {"plot": {"type": "Plot", "id": "76e8ed65-eb57-4c52-94b9-d1810e75bc70"}, "doc": null, "dimension": 1, "id": "707960a0-c845-46c7-bb46-d036313f9c4b"}, "type": "Grid", "id": "707960a0-c845-46c7-bb46-d036313f9c4b"}, {"attributes": {"plot": {"type": "Plot", "id": "76e8ed65-eb57-4c52-94b9-d1810e75bc70"}, "dataranges": [], "id": "2cfaf20e-f687-4d13-b9b3-78e309503fe0", "doc": null}, "type": "PreviewSaveTool", "id": "2cfaf20e-f687-4d13-b9b3-78e309503fe0"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "519300ba-7669-46a1-b655-2c61492fa433"}, "doc": null, "id": "de06e3ef-5ca6-4bf2-a706-2670f2abf758", "xdata_range": {"type": "DataRange1d", "id": "af8e6fd0-2c6e-4df6-8379-28479682e179"}, "ydata_range": {"type": "DataRange1d", "id": "4db14f81-b169-42f6-a3cf-4b80fc20b115"}, "glyphspec": {"line_color": {"value": "#1f77b4"}, "line_alpha": 1.0, "fill_color": "#1f77b4", "fill_alpha": 1.0, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "type": "line"}, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "line_width": 1, "angle_units": "deg", "type": "line", "y": {"units": "data", "field": "y"}, "line_alpha": 0.1, "start_angle_units": "deg", "valign": null, "radius_units": "screen", "visible": null, "length_units": "screen", "end_angle_units": "deg", "line_dash_offset": 0, "line_cap": "butt", "line_dash": [], "x": {"units": "data", "field": "x"}, "margin": null, "line_join": "miter", "halign": null}}, "type": "Glyph", "id": "de06e3ef-5ca6-4bf2-a706-2670f2abf758"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "af8e6fd0-2c6e-4df6-8379-28479682e179"}, "axes": [], "title": "Plot", "y_range": {"type": "DataRange1d", "id": "4db14f81-b169-42f6-a3cf-4b80fc20b115"}, "outer_width": 600, "renderers": [{"type": "LinearAxis", "id": "01b8971e-42ac-4402-a707-17fa0eba9f91"}, {"type": "LinearAxis", "id": "e55bb50b-3baa-4613-8b7b-74f573b1aee5"}, {"type": "Grid", "id": "8832ccd5-196c-4ec5-81e3-ccb5a8f82ba6"}, {"type": "Grid", "id": "707960a0-c845-46c7-bb46-d036313f9c4b"}, {"type": "BoxSelection", "id": "edd37a2b-33f6-486f-960b-783d3c98036a"}, {"type": "Glyph", "id": "de06e3ef-5ca6-4bf2-a706-2670f2abf758"}], "outer_height": 600, "doc": null, "canvas_height": 600, "id": "76e8ed65-eb57-4c52-94b9-d1810e75bc70", "tools": [{"type": "PanTool", "id": "7dee0ae9-ebc0-454c-ad1c-613b7d6a5292"}, {"type": "ZoomTool", "id": "3869f88b-d8ac-4285-92e1-b8c902ff861a"}, {"type": "PreviewSaveTool", "id": "2cfaf20e-f687-4d13-b9b3-78e309503fe0"}, {"type": "ResizeTool", "id": "2961365d-eb8d-462c-acd3-49b5f6bbb409"}, {"type": "BoxSelectTool", "id": "22d665a5-650a-4cac-ad6f-5522c0006e97"}], "canvas_width": 600}, "type": "Plot", "id": "76e8ed65-eb57-4c52-94b9-d1810e75bc70"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [1, 1, 1, 1], "x": [1294012800000, 1309996800000, 1312934400000, 1299456000000]}, "id": "519300ba-7669-46a1-b655-2c61492fa433"}, "type": "ColumnDataSource", "id": "519300ba-7669-46a1-b655-2c61492fa433"}, {"attributes": {"plot": {"type": "Plot", "id": "76e8ed65-eb57-4c52-94b9-d1810e75bc70"}, "id": "2961365d-eb8d-462c-acd3-49b5f6bbb409", "doc": null}, "type": "ResizeTool", "id": "2961365d-eb8d-462c-acd3-49b5f6bbb409"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "af8e6fd0-2c6e-4df6-8379-28479682e179"}, {"type": "DataRange1d", "id": "4db14f81-b169-42f6-a3cf-4b80fc20b115"}], "dimensions": ["width", "height"], "doc": null, "id": "7dee0ae9-ebc0-454c-ad1c-613b7d6a5292"}, "type": "PanTool", "id": "7dee0ae9-ebc0-454c-ad1c-613b7d6a5292"}, {"attributes": {"plot": {"type": "Plot", "id": "76e8ed65-eb57-4c52-94b9-d1810e75bc70"}, "location": "min", "bounds": "auto", "doc": null, "id": "01b8971e-42ac-4402-a707-17fa0eba9f91", "dimension": 0}, "type": "LinearAxis", "id": "01b8971e-42ac-4402-a707-17fa0eba9f91"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "519300ba-7669-46a1-b655-2c61492fa433"}, "columns": ["y"]}], "id": "4db14f81-b169-42f6-a3cf-4b80fc20b115", "doc": null}, "type": "DataRange1d", "id": "4db14f81-b169-42f6-a3cf-4b80fc20b115"}, {"attributes": {"doc": null, "renderers": [{"type": "Glyph", "id": "de06e3ef-5ca6-4bf2-a706-2670f2abf758"}], "id": "22d665a5-650a-4cac-ad6f-5522c0006e97"}, "type": "BoxSelectTool", "id": "22d665a5-650a-4cac-ad6f-5522c0006e97"}, {"attributes": {"plot": {"type": "Plot", "id": "76e8ed65-eb57-4c52-94b9-d1810e75bc70"}, "doc": null, "dimension": 0, "id": "8832ccd5-196c-4ec5-81e3-ccb5a8f82ba6"}, "type": "Grid", "id": "8832ccd5-196c-4ec5-81e3-ccb5a8f82ba6"}, {"attributes": {"plot": {"type": "Plot", "id": "76e8ed65-eb57-4c52-94b9-d1810e75bc70"}, "location": "min", "bounds": "auto", "doc": null, "id": "e55bb50b-3baa-4613-8b7b-74f573b1aee5", "dimension": 1}, "type": "LinearAxis", "id": "e55bb50b-3baa-4613-8b7b-74f573b1aee5"}, {"attributes": {"doc": null, "tool": {"type": "BoxSelectTool", "id": "22d665a5-650a-4cac-ad6f-5522c0006e97"}, "id": "edd37a2b-33f6-486f-960b-783d3c98036a"}, "type": "BoxSelection", "id": "edd37a2b-33f6-486f-960b-783d3c98036a"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "76e8ed65-eb57-4c52-94b9-d1810e75bc70"}], "id": "004fe652-00dc-4d59-8bca-51f9db3d0f4d"}, "type": "PlotContext", "id": "004fe652-00dc-4d59-8bca-51f9db3d0f4d"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "af8e6fd0-2c6e-4df6-8379-28479682e179"}, {"type": "DataRange1d", "id": "4db14f81-b169-42f6-a3cf-4b80fc20b115"}], "dimensions": ["width", "height"], "id": "3869f88b-d8ac-4285-92e1-b8c902ff861a"}, "type": "ZoomTool", "id": "3869f88b-d8ac-4285-92e1-b8c902ff861a"}];
    var modeltype = "PlotContext";
    var elementid = "1b174157-cf9a-4d83-b037-4764da0e7e52";
    var plotID = "76e8ed65-eb57-4c52-94b9-d1810e75bc70";
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