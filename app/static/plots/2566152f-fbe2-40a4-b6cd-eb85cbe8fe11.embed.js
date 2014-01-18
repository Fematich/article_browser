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

    var all_models = [{"attributes": {"plot": {"type": "Plot", "id": "2566152f-fbe2-40a4-b6cd-eb85cbe8fe11"}, "doc": null, "bounds": "auto", "dimension": 1, "location": "min", "axis_label": "# artikels", "id": "48c35f6f-96a2-434b-8e5a-1f5f60aaafa1"}, "type": "LinearAxis", "id": "48c35f6f-96a2-434b-8e5a-1f5f60aaafa1"}, {"attributes": {"plot": {"type": "Plot", "id": "2566152f-fbe2-40a4-b6cd-eb85cbe8fe11"}, "doc": null, "dimension": 1, "id": "88631cc7-6445-405d-8c1a-a7e170faf19b"}, "type": "Grid", "id": "88631cc7-6445-405d-8c1a-a7e170faf19b"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "3b7bc3b2-cdb9-49e3-9c88-65f23950a220"}, "doc": null, "id": "b7d717d8-c2f8-426a-8224-e77fe7a7c0ef", "xdata_range": {"type": "DataRange1d", "id": "12fab5b0-0f1d-4490-86c8-93f9db03b9bb"}, "ydata_range": {"type": "DataRange1d", "id": "124e1444-6f96-4326-bb41-1bed2478fc90"}, "glyphspec": {"line_color": {"value": "#1f77b4"}, "line_alpha": 1.0, "fill_color": "#1f77b4", "title": "voorkomens", "type": "line", "fill_alpha": 1.0, "height": 300, "width": 400, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "tools": "pan,zoom,resize", "x_axis_type": "datetime"}, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "line_width": 1, "angle_units": "deg", "type": "line", "y": {"units": "data", "field": "y"}, "line_alpha": 0.1, "start_angle_units": "deg", "valign": null, "radius_units": "screen", "visible": null, "length_units": "screen", "end_angle_units": "deg", "line_dash_offset": 0, "line_cap": "butt", "line_dash": [], "x": {"units": "data", "field": "x"}, "margin": null, "line_join": "miter", "halign": null}}, "type": "Glyph", "id": "b7d717d8-c2f8-426a-8224-e77fe7a7c0ef"}, {"attributes": {"plot": {"type": "Plot", "id": "2566152f-fbe2-40a4-b6cd-eb85cbe8fe11"}, "id": "9209d8a0-b86a-4309-b857-0cd11f1e027f", "doc": null}, "type": "ResizeTool", "id": "9209d8a0-b86a-4309-b857-0cd11f1e027f"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "3b7bc3b2-cdb9-49e3-9c88-65f23950a220"}, "columns": ["y"]}], "id": "124e1444-6f96-4326-bb41-1bed2478fc90", "doc": null}, "type": "DataRange1d", "id": "124e1444-6f96-4326-bb41-1bed2478fc90"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "3b7bc3b2-cdb9-49e3-9c88-65f23950a220"}, "columns": ["x"]}], "id": "12fab5b0-0f1d-4490-86c8-93f9db03b9bb", "doc": null}, "type": "DataRange1d", "id": "12fab5b0-0f1d-4490-86c8-93f9db03b9bb"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "2566152f-fbe2-40a4-b6cd-eb85cbe8fe11"}], "id": "61f30add-81b9-4d5a-a00e-65d0222a97bc"}, "type": "PlotContext", "id": "61f30add-81b9-4d5a-a00e-65d0222a97bc"}, {"attributes": {"plot": {"type": "Plot", "id": "2566152f-fbe2-40a4-b6cd-eb85cbe8fe11"}, "doc": null, "bounds": "auto", "id": "4c6f1522-1b7b-4218-9cd4-d0b30377a8c2", "location": "min", "formats": {"days": ["%m/%d/%Y"]}, "axis_label": "Datum", "dimension": 0}, "type": "DatetimeAxis", "id": "4c6f1522-1b7b-4218-9cd4-d0b30377a8c2"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [], "x": []}, "id": "3b7bc3b2-cdb9-49e3-9c88-65f23950a220"}, "type": "ColumnDataSource", "id": "3b7bc3b2-cdb9-49e3-9c88-65f23950a220"}, {"attributes": {"plot": {"type": "Plot", "id": "2566152f-fbe2-40a4-b6cd-eb85cbe8fe11"}, "doc": null, "dimension": 0, "id": "1e47c57f-7d48-4664-9542-43873b745b8d"}, "type": "Grid", "id": "1e47c57f-7d48-4664-9542-43873b745b8d"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "12fab5b0-0f1d-4490-86c8-93f9db03b9bb"}, "axes": [], "title": "voorkomens", "y_range": {"type": "DataRange1d", "id": "124e1444-6f96-4326-bb41-1bed2478fc90"}, "outer_width": 400, "renderers": [{"type": "DatetimeAxis", "id": "4c6f1522-1b7b-4218-9cd4-d0b30377a8c2"}, {"type": "LinearAxis", "id": "48c35f6f-96a2-434b-8e5a-1f5f60aaafa1"}, {"type": "Grid", "id": "1e47c57f-7d48-4664-9542-43873b745b8d"}, {"type": "Grid", "id": "88631cc7-6445-405d-8c1a-a7e170faf19b"}, {"type": "Glyph", "id": "b7d717d8-c2f8-426a-8224-e77fe7a7c0ef"}], "outer_height": 300, "width": 400, "doc": null, "canvas_height": 300, "id": "2566152f-fbe2-40a4-b6cd-eb85cbe8fe11", "height": 300, "tools": [{"type": "PanTool", "id": "2d6d8606-8417-42bd-8860-b82251146e08"}, {"type": "ZoomTool", "id": "fa854120-5f42-4e29-a27e-54e494e1fb5c"}, {"type": "ResizeTool", "id": "9209d8a0-b86a-4309-b857-0cd11f1e027f"}], "canvas_width": 400}, "type": "Plot", "id": "2566152f-fbe2-40a4-b6cd-eb85cbe8fe11"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "12fab5b0-0f1d-4490-86c8-93f9db03b9bb"}, {"type": "DataRange1d", "id": "124e1444-6f96-4326-bb41-1bed2478fc90"}], "dimensions": ["width", "height"], "id": "fa854120-5f42-4e29-a27e-54e494e1fb5c"}, "type": "ZoomTool", "id": "fa854120-5f42-4e29-a27e-54e494e1fb5c"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "12fab5b0-0f1d-4490-86c8-93f9db03b9bb"}, {"type": "DataRange1d", "id": "124e1444-6f96-4326-bb41-1bed2478fc90"}], "dimensions": ["width", "height"], "doc": null, "id": "2d6d8606-8417-42bd-8860-b82251146e08"}, "type": "PanTool", "id": "2d6d8606-8417-42bd-8860-b82251146e08"}];
    var modeltype = "PlotContext";
    var elementid = "e3fdda26-41a5-4f78-8d31-02272f2a590d";
    var plotID = "2566152f-fbe2-40a4-b6cd-eb85cbe8fe11";
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