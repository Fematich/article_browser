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

    var all_models = [{"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "b04c687e-bcf1-41a1-ac11-36a85e9f4dbb"}, {"type": "DataRange1d", "id": "fa81871f-78ab-421d-b89f-cbf8e957b2a0"}], "dimensions": ["width", "height"], "id": "230ff1fb-2426-43a7-87f9-1b3186388fe9"}, "type": "ZoomTool", "id": "230ff1fb-2426-43a7-87f9-1b3186388fe9"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "b04c687e-bcf1-41a1-ac11-36a85e9f4dbb"}, {"type": "DataRange1d", "id": "fa81871f-78ab-421d-b89f-cbf8e957b2a0"}], "dimensions": ["width", "height"], "doc": null, "id": "d430f7ae-84c8-4026-90cd-5a07a4b27eff"}, "type": "PanTool", "id": "d430f7ae-84c8-4026-90cd-5a07a4b27eff"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [1, 1, 1, 1], "x": [1294012800000, 1309996800000, 1312934400000, 1299456000000]}, "id": "43c60375-d9f8-472f-bccf-2bb1a0742985"}, "type": "ColumnDataSource", "id": "43c60375-d9f8-472f-bccf-2bb1a0742985"}, {"attributes": {"plot": {"type": "Plot", "id": "bfaaf7ce-569b-41c7-99eb-ea2064f732e6"}, "id": "03349240-e4b9-4f3b-b3d4-8957d5d5fdc9", "doc": null}, "type": "ResizeTool", "id": "03349240-e4b9-4f3b-b3d4-8957d5d5fdc9"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "bfaaf7ce-569b-41c7-99eb-ea2064f732e6"}], "id": "a85a9ffa-6a0a-4452-9537-174e54280532"}, "type": "PlotContext", "id": "a85a9ffa-6a0a-4452-9537-174e54280532"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "43c60375-d9f8-472f-bccf-2bb1a0742985"}, "columns": ["x"]}], "id": "b04c687e-bcf1-41a1-ac11-36a85e9f4dbb", "doc": null}, "type": "DataRange1d", "id": "b04c687e-bcf1-41a1-ac11-36a85e9f4dbb"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "b04c687e-bcf1-41a1-ac11-36a85e9f4dbb"}, "axes": [], "title": "Plot", "y_range": {"type": "DataRange1d", "id": "fa81871f-78ab-421d-b89f-cbf8e957b2a0"}, "outer_width": 600, "renderers": [{"type": "LinearAxis", "id": "1771afde-c31e-4f37-8156-9078f30885e9"}, {"type": "LinearAxis", "id": "513bd40c-435f-4104-a1fc-938c205fc729"}, {"type": "Grid", "id": "58dd7cd3-b3fe-4bf7-bfdc-0642bb72a175"}, {"type": "Grid", "id": "6f4559f1-fbf8-4476-a676-2eb6a378dd6e"}, {"type": "BoxSelection", "id": "034aee22-717a-4070-a9c7-3d7bb95fd2eb"}, {"type": "Glyph", "id": "8afae18b-e4ff-4db5-b21b-a1b5cdb87340"}], "outer_height": 600, "doc": null, "canvas_height": 600, "id": "bfaaf7ce-569b-41c7-99eb-ea2064f732e6", "tools": [{"type": "PanTool", "id": "d430f7ae-84c8-4026-90cd-5a07a4b27eff"}, {"type": "ZoomTool", "id": "230ff1fb-2426-43a7-87f9-1b3186388fe9"}, {"type": "PreviewSaveTool", "id": "7d224a1f-bdf7-4925-a796-f2af50a921a1"}, {"type": "ResizeTool", "id": "03349240-e4b9-4f3b-b3d4-8957d5d5fdc9"}, {"type": "BoxSelectTool", "id": "39ebb075-ae59-4b43-a2e6-c23af3946950"}], "canvas_width": 600}, "type": "Plot", "id": "bfaaf7ce-569b-41c7-99eb-ea2064f732e6"}, {"attributes": {"plot": {"type": "Plot", "id": "bfaaf7ce-569b-41c7-99eb-ea2064f732e6"}, "location": "min", "bounds": "auto", "doc": null, "id": "513bd40c-435f-4104-a1fc-938c205fc729", "dimension": 1}, "type": "LinearAxis", "id": "513bd40c-435f-4104-a1fc-938c205fc729"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "43c60375-d9f8-472f-bccf-2bb1a0742985"}, "doc": null, "id": "8afae18b-e4ff-4db5-b21b-a1b5cdb87340", "xdata_range": {"type": "DataRange1d", "id": "b04c687e-bcf1-41a1-ac11-36a85e9f4dbb"}, "ydata_range": {"type": "DataRange1d", "id": "fa81871f-78ab-421d-b89f-cbf8e957b2a0"}, "glyphspec": {"line_color": {"value": "#1f77b4"}, "line_alpha": 1.0, "fill_color": "#1f77b4", "fill_alpha": 1.0, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "type": "line"}, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "line_width": 1, "angle_units": "deg", "type": "line", "y": {"units": "data", "field": "y"}, "line_alpha": 0.1, "start_angle_units": "deg", "valign": null, "radius_units": "screen", "visible": null, "length_units": "screen", "end_angle_units": "deg", "line_dash_offset": 0, "line_cap": "butt", "line_dash": [], "x": {"units": "data", "field": "x"}, "margin": null, "line_join": "miter", "halign": null}}, "type": "Glyph", "id": "8afae18b-e4ff-4db5-b21b-a1b5cdb87340"}, {"attributes": {"plot": {"type": "Plot", "id": "bfaaf7ce-569b-41c7-99eb-ea2064f732e6"}, "location": "min", "bounds": "auto", "doc": null, "id": "1771afde-c31e-4f37-8156-9078f30885e9", "dimension": 0}, "type": "LinearAxis", "id": "1771afde-c31e-4f37-8156-9078f30885e9"}, {"attributes": {"doc": null, "tool": {"type": "BoxSelectTool", "id": "39ebb075-ae59-4b43-a2e6-c23af3946950"}, "id": "034aee22-717a-4070-a9c7-3d7bb95fd2eb"}, "type": "BoxSelection", "id": "034aee22-717a-4070-a9c7-3d7bb95fd2eb"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "43c60375-d9f8-472f-bccf-2bb1a0742985"}, "columns": ["y"]}], "id": "fa81871f-78ab-421d-b89f-cbf8e957b2a0", "doc": null}, "type": "DataRange1d", "id": "fa81871f-78ab-421d-b89f-cbf8e957b2a0"}, {"attributes": {"doc": null, "renderers": [{"type": "Glyph", "id": "8afae18b-e4ff-4db5-b21b-a1b5cdb87340"}], "id": "39ebb075-ae59-4b43-a2e6-c23af3946950"}, "type": "BoxSelectTool", "id": "39ebb075-ae59-4b43-a2e6-c23af3946950"}, {"attributes": {"plot": {"type": "Plot", "id": "bfaaf7ce-569b-41c7-99eb-ea2064f732e6"}, "dataranges": [], "id": "7d224a1f-bdf7-4925-a796-f2af50a921a1", "doc": null}, "type": "PreviewSaveTool", "id": "7d224a1f-bdf7-4925-a796-f2af50a921a1"}, {"attributes": {"plot": {"type": "Plot", "id": "bfaaf7ce-569b-41c7-99eb-ea2064f732e6"}, "doc": null, "dimension": 1, "id": "6f4559f1-fbf8-4476-a676-2eb6a378dd6e"}, "type": "Grid", "id": "6f4559f1-fbf8-4476-a676-2eb6a378dd6e"}, {"attributes": {"plot": {"type": "Plot", "id": "bfaaf7ce-569b-41c7-99eb-ea2064f732e6"}, "doc": null, "dimension": 0, "id": "58dd7cd3-b3fe-4bf7-bfdc-0642bb72a175"}, "type": "Grid", "id": "58dd7cd3-b3fe-4bf7-bfdc-0642bb72a175"}];
    var modeltype = "PlotContext";
    var elementid = "cd761d39-15d3-4434-a0e3-4b313d193926";
    var plotID = "bfaaf7ce-569b-41c7-99eb-ea2064f732e6";
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