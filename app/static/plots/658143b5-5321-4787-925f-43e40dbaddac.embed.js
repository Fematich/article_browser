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

    var all_models = [{"attributes": {"plot": {"type": "Plot", "id": "658143b5-5321-4787-925f-43e40dbaddac"}, "doc": null, "dimension": 1, "id": "e0f11b14-d471-40f0-9de5-dce93fd4090e"}, "type": "Grid", "id": "e0f11b14-d471-40f0-9de5-dce93fd4090e"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "b9be1978-0c8a-4b65-b201-129e0e98486c"}, {"type": "DataRange1d", "id": "38e5952c-1f60-41d6-aeb4-51a163e255c4"}], "dimensions": ["width", "height"], "id": "352d22f4-e2b0-49f8-875a-eaa4aa98a7e4"}, "type": "ZoomTool", "id": "352d22f4-e2b0-49f8-875a-eaa4aa98a7e4"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "658143b5-5321-4787-925f-43e40dbaddac"}], "id": "d185c52c-94b4-43f6-88da-5fbd42c3dd47"}, "type": "PlotContext", "id": "d185c52c-94b4-43f6-88da-5fbd42c3dd47"}, {"attributes": {"plot": {"type": "Plot", "id": "658143b5-5321-4787-925f-43e40dbaddac"}, "doc": null, "bounds": "auto", "dimension": 1, "location": "min", "axis_label": "# artikels", "id": "507f9a55-f44e-4eb7-ab2a-fb1217bc6f65"}, "type": "LinearAxis", "id": "507f9a55-f44e-4eb7-ab2a-fb1217bc6f65"}, {"attributes": {"plot": {"type": "Plot", "id": "658143b5-5321-4787-925f-43e40dbaddac"}, "id": "67aad20d-966a-472d-af01-5b711caef6d1", "doc": null}, "type": "ResizeTool", "id": "67aad20d-966a-472d-af01-5b711caef6d1"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "b9be1978-0c8a-4b65-b201-129e0e98486c"}, "axes": [], "title": "voorkomens", "y_range": {"type": "DataRange1d", "id": "38e5952c-1f60-41d6-aeb4-51a163e255c4"}, "outer_width": 400, "renderers": [{"type": "DatetimeAxis", "id": "4d1497f0-0ef1-45c8-aa24-ca036dfd16f5"}, {"type": "LinearAxis", "id": "507f9a55-f44e-4eb7-ab2a-fb1217bc6f65"}, {"type": "Grid", "id": "32313a4a-0dd3-4cc3-9e0c-8cc75ec72237"}, {"type": "Grid", "id": "e0f11b14-d471-40f0-9de5-dce93fd4090e"}, {"type": "Glyph", "id": "2e2f6859-b79b-4c12-aa44-62c046ffb1fe"}], "outer_height": 300, "width": 400, "doc": null, "canvas_height": 300, "id": "658143b5-5321-4787-925f-43e40dbaddac", "height": 300, "tools": [{"type": "PanTool", "id": "09fe26ba-fc7e-4361-9d38-cd3a8bd82d6f"}, {"type": "ZoomTool", "id": "352d22f4-e2b0-49f8-875a-eaa4aa98a7e4"}, {"type": "ResizeTool", "id": "67aad20d-966a-472d-af01-5b711caef6d1"}], "canvas_width": 400}, "type": "Plot", "id": "658143b5-5321-4787-925f-43e40dbaddac"}, {"attributes": {"plot": {"type": "Plot", "id": "658143b5-5321-4787-925f-43e40dbaddac"}, "doc": null, "dimension": 0, "id": "32313a4a-0dd3-4cc3-9e0c-8cc75ec72237"}, "type": "Grid", "id": "32313a4a-0dd3-4cc3-9e0c-8cc75ec72237"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [], "x": []}, "id": "cc82ad4f-e5c4-423b-8285-871a3d2c7435"}, "type": "ColumnDataSource", "id": "cc82ad4f-e5c4-423b-8285-871a3d2c7435"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "cc82ad4f-e5c4-423b-8285-871a3d2c7435"}, "doc": null, "id": "2e2f6859-b79b-4c12-aa44-62c046ffb1fe", "xdata_range": {"type": "DataRange1d", "id": "b9be1978-0c8a-4b65-b201-129e0e98486c"}, "ydata_range": {"type": "DataRange1d", "id": "38e5952c-1f60-41d6-aeb4-51a163e255c4"}, "glyphspec": {"line_color": {"value": "#1f77b4"}, "line_alpha": 1.0, "fill_color": "#1f77b4", "title": "voorkomens", "type": "line", "fill_alpha": 1.0, "height": 300, "width": 400, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "tools": "pan,zoom,resize", "x_axis_type": "datetime"}, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "line_width": 1, "angle_units": "deg", "type": "line", "y": {"units": "data", "field": "y"}, "line_alpha": 0.1, "start_angle_units": "deg", "valign": null, "radius_units": "screen", "visible": null, "length_units": "screen", "end_angle_units": "deg", "line_dash_offset": 0, "line_cap": "butt", "line_dash": [], "x": {"units": "data", "field": "x"}, "margin": null, "line_join": "miter", "halign": null}}, "type": "Glyph", "id": "2e2f6859-b79b-4c12-aa44-62c046ffb1fe"}, {"attributes": {"plot": {"type": "Plot", "id": "658143b5-5321-4787-925f-43e40dbaddac"}, "doc": null, "bounds": "auto", "id": "4d1497f0-0ef1-45c8-aa24-ca036dfd16f5", "location": "min", "formats": {"days": ["%m/%d/%Y"]}, "axis_label": "Datum", "dimension": 0}, "type": "DatetimeAxis", "id": "4d1497f0-0ef1-45c8-aa24-ca036dfd16f5"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "cc82ad4f-e5c4-423b-8285-871a3d2c7435"}, "columns": ["x"]}], "id": "b9be1978-0c8a-4b65-b201-129e0e98486c", "doc": null}, "type": "DataRange1d", "id": "b9be1978-0c8a-4b65-b201-129e0e98486c"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "b9be1978-0c8a-4b65-b201-129e0e98486c"}, {"type": "DataRange1d", "id": "38e5952c-1f60-41d6-aeb4-51a163e255c4"}], "dimensions": ["width", "height"], "doc": null, "id": "09fe26ba-fc7e-4361-9d38-cd3a8bd82d6f"}, "type": "PanTool", "id": "09fe26ba-fc7e-4361-9d38-cd3a8bd82d6f"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "cc82ad4f-e5c4-423b-8285-871a3d2c7435"}, "columns": ["y"]}], "id": "38e5952c-1f60-41d6-aeb4-51a163e255c4", "doc": null}, "type": "DataRange1d", "id": "38e5952c-1f60-41d6-aeb4-51a163e255c4"}];
    var modeltype = "PlotContext";
    var elementid = "dc7b7bf4-d7aa-4a8b-b18c-4112119186ae";
    var plotID = "658143b5-5321-4787-925f-43e40dbaddac";
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