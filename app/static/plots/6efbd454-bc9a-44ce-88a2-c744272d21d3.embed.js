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

    var all_models = [{"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "b3e9ef79-14d3-4b56-837d-cc8ad2ccae00"}, "columns": ["x"]}], "id": "ef801850-d689-4f02-8b1f-c1ec3a32b628", "doc": null}, "type": "DataRange1d", "id": "ef801850-d689-4f02-8b1f-c1ec3a32b628"}, {"attributes": {"doc": null, "renderers": [{"type": "Glyph", "id": "c77884f9-eaf2-43c1-8ae0-52f2a36c921c"}], "id": "e028df9f-f271-49ca-9b18-5058aa9ccc55"}, "type": "BoxSelectTool", "id": "e028df9f-f271-49ca-9b18-5058aa9ccc55"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [1, 1, 1, 1], "x": [1294012800000, 1309996800000, 1312934400000, 1299456000000]}, "id": "b3e9ef79-14d3-4b56-837d-cc8ad2ccae00"}, "type": "ColumnDataSource", "id": "b3e9ef79-14d3-4b56-837d-cc8ad2ccae00"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "ef801850-d689-4f02-8b1f-c1ec3a32b628"}, {"type": "DataRange1d", "id": "a4530d37-4ef9-43be-b921-03c7f4c38b02"}], "dimensions": ["width", "height"], "id": "5c53544b-920d-4e38-80b3-aa6f51bdff01"}, "type": "ZoomTool", "id": "5c53544b-920d-4e38-80b3-aa6f51bdff01"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "6efbd454-bc9a-44ce-88a2-c744272d21d3"}], "id": "84bcc604-1a2c-4bf3-8fea-08061d1a9fe5"}, "type": "PlotContext", "id": "84bcc604-1a2c-4bf3-8fea-08061d1a9fe5"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "b3e9ef79-14d3-4b56-837d-cc8ad2ccae00"}, "columns": ["y"]}], "id": "a4530d37-4ef9-43be-b921-03c7f4c38b02", "doc": null}, "type": "DataRange1d", "id": "a4530d37-4ef9-43be-b921-03c7f4c38b02"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "b3e9ef79-14d3-4b56-837d-cc8ad2ccae00"}, "doc": null, "id": "c77884f9-eaf2-43c1-8ae0-52f2a36c921c", "xdata_range": {"type": "DataRange1d", "id": "ef801850-d689-4f02-8b1f-c1ec3a32b628"}, "ydata_range": {"type": "DataRange1d", "id": "a4530d37-4ef9-43be-b921-03c7f4c38b02"}, "glyphspec": {"line_color": {"value": "#1f77b4"}, "line_alpha": 1.0, "fill_color": "#1f77b4", "fill_alpha": 1.0, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "type": "line"}, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "line_width": 1, "angle_units": "deg", "type": "line", "y": {"units": "data", "field": "y"}, "line_alpha": 0.1, "start_angle_units": "deg", "valign": null, "radius_units": "screen", "visible": null, "length_units": "screen", "end_angle_units": "deg", "line_dash_offset": 0, "line_cap": "butt", "line_dash": [], "x": {"units": "data", "field": "x"}, "margin": null, "line_join": "miter", "halign": null}}, "type": "Glyph", "id": "c77884f9-eaf2-43c1-8ae0-52f2a36c921c"}, {"attributes": {"plot": {"type": "Plot", "id": "6efbd454-bc9a-44ce-88a2-c744272d21d3"}, "dataranges": [], "id": "b0bb0c70-f699-4a30-ae02-dea5f4ae82fd", "doc": null}, "type": "PreviewSaveTool", "id": "b0bb0c70-f699-4a30-ae02-dea5f4ae82fd"}, {"attributes": {"doc": null, "tool": {"type": "BoxSelectTool", "id": "e028df9f-f271-49ca-9b18-5058aa9ccc55"}, "id": "b609c630-8a37-445b-b173-368d5267a411"}, "type": "BoxSelection", "id": "b609c630-8a37-445b-b173-368d5267a411"}, {"attributes": {"plot": {"type": "Plot", "id": "6efbd454-bc9a-44ce-88a2-c744272d21d3"}, "doc": null, "dimension": 0, "id": "cefc0ec9-25fc-4d71-bbdb-3d3d3dba2623"}, "type": "Grid", "id": "cefc0ec9-25fc-4d71-bbdb-3d3d3dba2623"}, {"attributes": {"plot": {"type": "Plot", "id": "6efbd454-bc9a-44ce-88a2-c744272d21d3"}, "location": "min", "bounds": "auto", "doc": null, "id": "12ad1e45-e99e-4021-abc6-e0cba287f4b7", "dimension": 0}, "type": "LinearAxis", "id": "12ad1e45-e99e-4021-abc6-e0cba287f4b7"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "ef801850-d689-4f02-8b1f-c1ec3a32b628"}, {"type": "DataRange1d", "id": "a4530d37-4ef9-43be-b921-03c7f4c38b02"}], "dimensions": ["width", "height"], "doc": null, "id": "45ffb009-dc64-4348-bfeb-0d2ff37aa450"}, "type": "PanTool", "id": "45ffb009-dc64-4348-bfeb-0d2ff37aa450"}, {"attributes": {"plot": {"type": "Plot", "id": "6efbd454-bc9a-44ce-88a2-c744272d21d3"}, "id": "ef6613ef-cc4f-4604-85b9-de6d732732ea", "doc": null}, "type": "ResizeTool", "id": "ef6613ef-cc4f-4604-85b9-de6d732732ea"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "ef801850-d689-4f02-8b1f-c1ec3a32b628"}, "axes": [], "title": "Plot", "y_range": {"type": "DataRange1d", "id": "a4530d37-4ef9-43be-b921-03c7f4c38b02"}, "outer_width": 600, "renderers": [{"type": "LinearAxis", "id": "12ad1e45-e99e-4021-abc6-e0cba287f4b7"}, {"type": "LinearAxis", "id": "109f6962-08f0-4da2-ab9c-f3a1ade971df"}, {"type": "Grid", "id": "cefc0ec9-25fc-4d71-bbdb-3d3d3dba2623"}, {"type": "Grid", "id": "8283ac96-0220-4863-b4ee-f496b602d368"}, {"type": "BoxSelection", "id": "b609c630-8a37-445b-b173-368d5267a411"}, {"type": "Glyph", "id": "c77884f9-eaf2-43c1-8ae0-52f2a36c921c"}], "outer_height": 600, "doc": null, "canvas_height": 600, "id": "6efbd454-bc9a-44ce-88a2-c744272d21d3", "tools": [{"type": "PanTool", "id": "45ffb009-dc64-4348-bfeb-0d2ff37aa450"}, {"type": "ZoomTool", "id": "5c53544b-920d-4e38-80b3-aa6f51bdff01"}, {"type": "PreviewSaveTool", "id": "b0bb0c70-f699-4a30-ae02-dea5f4ae82fd"}, {"type": "ResizeTool", "id": "ef6613ef-cc4f-4604-85b9-de6d732732ea"}, {"type": "BoxSelectTool", "id": "e028df9f-f271-49ca-9b18-5058aa9ccc55"}], "canvas_width": 600}, "type": "Plot", "id": "6efbd454-bc9a-44ce-88a2-c744272d21d3"}, {"attributes": {"plot": {"type": "Plot", "id": "6efbd454-bc9a-44ce-88a2-c744272d21d3"}, "location": "min", "bounds": "auto", "doc": null, "id": "109f6962-08f0-4da2-ab9c-f3a1ade971df", "dimension": 1}, "type": "LinearAxis", "id": "109f6962-08f0-4da2-ab9c-f3a1ade971df"}, {"attributes": {"plot": {"type": "Plot", "id": "6efbd454-bc9a-44ce-88a2-c744272d21d3"}, "doc": null, "dimension": 1, "id": "8283ac96-0220-4863-b4ee-f496b602d368"}, "type": "Grid", "id": "8283ac96-0220-4863-b4ee-f496b602d368"}];
    var modeltype = "PlotContext";
    var elementid = "c826ffd7-84dc-40dd-82ef-d6342d04ec5e";
    var plotID = "6efbd454-bc9a-44ce-88a2-c744272d21d3";
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