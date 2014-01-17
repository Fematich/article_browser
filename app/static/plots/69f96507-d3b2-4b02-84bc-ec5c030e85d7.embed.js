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

    var all_models = [{"attributes": {"plot": {"type": "Plot", "id": "69f96507-d3b2-4b02-84bc-ec5c030e85d7"}, "location": "min", "bounds": "auto", "doc": null, "id": "0910fb37-640e-441e-9644-0ff923e48aaf", "dimension": 1}, "type": "LinearAxis", "id": "0910fb37-640e-441e-9644-0ff923e48aaf"}, {"attributes": {"plot": {"type": "Plot", "id": "69f96507-d3b2-4b02-84bc-ec5c030e85d7"}, "doc": null, "dimension": 0, "id": "e832345c-4173-42ee-b2a0-6ad880142899"}, "type": "Grid", "id": "e832345c-4173-42ee-b2a0-6ad880142899"}, {"attributes": {"plot": {"type": "Plot", "id": "69f96507-d3b2-4b02-84bc-ec5c030e85d7"}, "dataranges": [], "id": "eb67b1dc-763f-41ba-93f3-bc3324073786", "doc": null}, "type": "PreviewSaveTool", "id": "eb67b1dc-763f-41ba-93f3-bc3324073786"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "b7ae326c-6aab-4f4c-818d-906ec760ab0e"}, "axes": [], "title": "Plot", "y_range": {"type": "DataRange1d", "id": "8a0ae662-bfdf-4a71-99ac-b8a22ae42ef6"}, "outer_width": 600, "renderers": [{"type": "LinearAxis", "id": "7693c8f7-15de-4bd8-805d-9641f6d18ac9"}, {"type": "LinearAxis", "id": "0910fb37-640e-441e-9644-0ff923e48aaf"}, {"type": "Grid", "id": "e832345c-4173-42ee-b2a0-6ad880142899"}, {"type": "Grid", "id": "a6c7c59f-d8c2-4fd8-95d1-0a452da84537"}, {"type": "BoxSelection", "id": "a8fcb0ab-a4e9-4848-89aa-60f0217e7a9b"}, {"type": "Glyph", "id": "4c5eaf81-cb6b-4c7a-9275-1b60f02d67da"}], "outer_height": 600, "doc": null, "canvas_height": 600, "id": "69f96507-d3b2-4b02-84bc-ec5c030e85d7", "tools": [{"type": "PanTool", "id": "4c7e4194-748c-486a-aa6e-4abb1c12e290"}, {"type": "ZoomTool", "id": "a93cbbad-174c-4747-b78e-024fd4231daa"}, {"type": "PreviewSaveTool", "id": "eb67b1dc-763f-41ba-93f3-bc3324073786"}, {"type": "ResizeTool", "id": "07fa2931-2443-4f36-a95f-267bc58b97f5"}, {"type": "BoxSelectTool", "id": "413dabc2-1d91-4a5f-96b1-c6f12ad2354c"}], "canvas_width": 600}, "type": "Plot", "id": "69f96507-d3b2-4b02-84bc-ec5c030e85d7"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [1, 1, 1, 1], "x": [1294012800000, 1309996800000, 1312934400000, 1299456000000]}, "id": "a075e457-68ed-44e2-8d31-6d4e3fc0cd9f"}, "type": "ColumnDataSource", "id": "a075e457-68ed-44e2-8d31-6d4e3fc0cd9f"}, {"attributes": {"plot": {"type": "Plot", "id": "69f96507-d3b2-4b02-84bc-ec5c030e85d7"}, "location": "min", "bounds": "auto", "doc": null, "id": "7693c8f7-15de-4bd8-805d-9641f6d18ac9", "dimension": 0}, "type": "LinearAxis", "id": "7693c8f7-15de-4bd8-805d-9641f6d18ac9"}, {"attributes": {"doc": null, "tool": {"type": "BoxSelectTool", "id": "413dabc2-1d91-4a5f-96b1-c6f12ad2354c"}, "id": "a8fcb0ab-a4e9-4848-89aa-60f0217e7a9b"}, "type": "BoxSelection", "id": "a8fcb0ab-a4e9-4848-89aa-60f0217e7a9b"}, {"attributes": {"doc": null, "renderers": [{"type": "Glyph", "id": "4c5eaf81-cb6b-4c7a-9275-1b60f02d67da"}], "id": "413dabc2-1d91-4a5f-96b1-c6f12ad2354c"}, "type": "BoxSelectTool", "id": "413dabc2-1d91-4a5f-96b1-c6f12ad2354c"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "b7ae326c-6aab-4f4c-818d-906ec760ab0e"}, {"type": "DataRange1d", "id": "8a0ae662-bfdf-4a71-99ac-b8a22ae42ef6"}], "dimensions": ["width", "height"], "id": "a93cbbad-174c-4747-b78e-024fd4231daa"}, "type": "ZoomTool", "id": "a93cbbad-174c-4747-b78e-024fd4231daa"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "a075e457-68ed-44e2-8d31-6d4e3fc0cd9f"}, "columns": ["y"]}], "id": "8a0ae662-bfdf-4a71-99ac-b8a22ae42ef6", "doc": null}, "type": "DataRange1d", "id": "8a0ae662-bfdf-4a71-99ac-b8a22ae42ef6"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "b7ae326c-6aab-4f4c-818d-906ec760ab0e"}, {"type": "DataRange1d", "id": "8a0ae662-bfdf-4a71-99ac-b8a22ae42ef6"}], "dimensions": ["width", "height"], "doc": null, "id": "4c7e4194-748c-486a-aa6e-4abb1c12e290"}, "type": "PanTool", "id": "4c7e4194-748c-486a-aa6e-4abb1c12e290"}, {"attributes": {"plot": {"type": "Plot", "id": "69f96507-d3b2-4b02-84bc-ec5c030e85d7"}, "id": "07fa2931-2443-4f36-a95f-267bc58b97f5", "doc": null}, "type": "ResizeTool", "id": "07fa2931-2443-4f36-a95f-267bc58b97f5"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "69f96507-d3b2-4b02-84bc-ec5c030e85d7"}], "id": "d4b062d5-21e7-4222-a45b-c8e6e764cf61"}, "type": "PlotContext", "id": "d4b062d5-21e7-4222-a45b-c8e6e764cf61"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "a075e457-68ed-44e2-8d31-6d4e3fc0cd9f"}, "doc": null, "id": "4c5eaf81-cb6b-4c7a-9275-1b60f02d67da", "xdata_range": {"type": "DataRange1d", "id": "b7ae326c-6aab-4f4c-818d-906ec760ab0e"}, "ydata_range": {"type": "DataRange1d", "id": "8a0ae662-bfdf-4a71-99ac-b8a22ae42ef6"}, "glyphspec": {"line_color": {"value": "#1f77b4"}, "line_alpha": 1.0, "fill_color": "#1f77b4", "fill_alpha": 1.0, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "type": "line"}, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "line_width": 1, "angle_units": "deg", "type": "line", "y": {"units": "data", "field": "y"}, "line_alpha": 0.1, "start_angle_units": "deg", "valign": null, "radius_units": "screen", "visible": null, "length_units": "screen", "end_angle_units": "deg", "line_dash_offset": 0, "line_cap": "butt", "line_dash": [], "x": {"units": "data", "field": "x"}, "margin": null, "line_join": "miter", "halign": null}}, "type": "Glyph", "id": "4c5eaf81-cb6b-4c7a-9275-1b60f02d67da"}, {"attributes": {"plot": {"type": "Plot", "id": "69f96507-d3b2-4b02-84bc-ec5c030e85d7"}, "doc": null, "dimension": 1, "id": "a6c7c59f-d8c2-4fd8-95d1-0a452da84537"}, "type": "Grid", "id": "a6c7c59f-d8c2-4fd8-95d1-0a452da84537"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "a075e457-68ed-44e2-8d31-6d4e3fc0cd9f"}, "columns": ["x"]}], "id": "b7ae326c-6aab-4f4c-818d-906ec760ab0e", "doc": null}, "type": "DataRange1d", "id": "b7ae326c-6aab-4f4c-818d-906ec760ab0e"}];
    var modeltype = "PlotContext";
    var elementid = "d65e517e-c88f-45ce-aa1d-ecb2bddfaaa3";
    var plotID = "69f96507-d3b2-4b02-84bc-ec5c030e85d7";
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