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

    var all_models = [{"attributes": {"x_range": {"type": "DataRange1d", "id": "f11a89ac-a268-4e04-b66d-822ffef24f8d"}, "axes": [], "title": "Plot", "y_range": {"type": "DataRange1d", "id": "ffd84e3f-e8f1-4e61-a754-e541f3d7778b"}, "outer_width": 600, "renderers": [{"type": "LinearAxis", "id": "ec606442-ef17-4266-bd86-8b997e6cd9e6"}, {"type": "LinearAxis", "id": "2c7493a9-9e2c-403c-8481-ebf2e12d1893"}, {"type": "Grid", "id": "06cde865-f072-48f8-a978-f7eb893a861f"}, {"type": "Grid", "id": "13db4e01-be32-4605-8cbb-35b37f2a9013"}, {"type": "BoxSelection", "id": "0864cec1-e4b7-4383-b404-a1916a3aa626"}, {"type": "Glyph", "id": "a5bacb96-4700-48c8-82b9-b9f2e2fa8c48"}], "outer_height": 600, "doc": null, "canvas_height": 600, "id": "da5fb7bc-5bb0-423e-a98e-911a3b4f4002", "tools": [{"type": "PanTool", "id": "b588c32d-d6d4-4a28-bbd5-9026262ff60d"}, {"type": "ZoomTool", "id": "eb548c57-3d16-4297-a835-f376888b8ad8"}, {"type": "PreviewSaveTool", "id": "be5a2256-76a0-44b8-ac94-eae4598aa992"}, {"type": "ResizeTool", "id": "18c523ef-8575-4f4c-bf00-da2f965c20b9"}, {"type": "BoxSelectTool", "id": "4e4ed731-af8b-4300-b9b3-21cbea1812e2"}], "canvas_width": 600}, "type": "Plot", "id": "da5fb7bc-5bb0-423e-a98e-911a3b4f4002"}, {"attributes": {"plot": {"type": "Plot", "id": "da5fb7bc-5bb0-423e-a98e-911a3b4f4002"}, "location": "min", "bounds": "auto", "doc": null, "id": "2c7493a9-9e2c-403c-8481-ebf2e12d1893", "dimension": 1}, "type": "LinearAxis", "id": "2c7493a9-9e2c-403c-8481-ebf2e12d1893"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "f11a89ac-a268-4e04-b66d-822ffef24f8d"}, {"type": "DataRange1d", "id": "ffd84e3f-e8f1-4e61-a754-e541f3d7778b"}], "dimensions": ["width", "height"], "doc": null, "id": "b588c32d-d6d4-4a28-bbd5-9026262ff60d"}, "type": "PanTool", "id": "b588c32d-d6d4-4a28-bbd5-9026262ff60d"}, {"attributes": {"plot": {"type": "Plot", "id": "da5fb7bc-5bb0-423e-a98e-911a3b4f4002"}, "doc": null, "dimension": 0, "id": "06cde865-f072-48f8-a978-f7eb893a861f"}, "type": "Grid", "id": "06cde865-f072-48f8-a978-f7eb893a861f"}, {"attributes": {"plot": {"type": "Plot", "id": "da5fb7bc-5bb0-423e-a98e-911a3b4f4002"}, "dataranges": [], "id": "be5a2256-76a0-44b8-ac94-eae4598aa992", "doc": null}, "type": "PreviewSaveTool", "id": "be5a2256-76a0-44b8-ac94-eae4598aa992"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "61a293bd-721a-4493-b011-8e91565aef37"}, "columns": ["x"]}], "id": "f11a89ac-a268-4e04-b66d-822ffef24f8d", "doc": null}, "type": "DataRange1d", "id": "f11a89ac-a268-4e04-b66d-822ffef24f8d"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "61a293bd-721a-4493-b011-8e91565aef37"}, "doc": null, "id": "a5bacb96-4700-48c8-82b9-b9f2e2fa8c48", "xdata_range": {"type": "DataRange1d", "id": "f11a89ac-a268-4e04-b66d-822ffef24f8d"}, "ydata_range": {"type": "DataRange1d", "id": "ffd84e3f-e8f1-4e61-a754-e541f3d7778b"}, "glyphspec": {"line_color": {"value": "#1f77b4"}, "line_alpha": 1.0, "fill_color": "#1f77b4", "fill_alpha": 1.0, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "type": "line"}, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "line_width": 1, "angle_units": "deg", "type": "line", "y": {"units": "data", "field": "y"}, "line_alpha": 0.1, "start_angle_units": "deg", "valign": null, "radius_units": "screen", "visible": null, "length_units": "screen", "end_angle_units": "deg", "line_dash_offset": 0, "line_cap": "butt", "line_dash": [], "x": {"units": "data", "field": "x"}, "margin": null, "line_join": "miter", "halign": null}}, "type": "Glyph", "id": "a5bacb96-4700-48c8-82b9-b9f2e2fa8c48"}, {"attributes": {"plot": {"type": "Plot", "id": "da5fb7bc-5bb0-423e-a98e-911a3b4f4002"}, "id": "18c523ef-8575-4f4c-bf00-da2f965c20b9", "doc": null}, "type": "ResizeTool", "id": "18c523ef-8575-4f4c-bf00-da2f965c20b9"}, {"attributes": {"doc": null, "tool": {"type": "BoxSelectTool", "id": "4e4ed731-af8b-4300-b9b3-21cbea1812e2"}, "id": "0864cec1-e4b7-4383-b404-a1916a3aa626"}, "type": "BoxSelection", "id": "0864cec1-e4b7-4383-b404-a1916a3aa626"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "f11a89ac-a268-4e04-b66d-822ffef24f8d"}, {"type": "DataRange1d", "id": "ffd84e3f-e8f1-4e61-a754-e541f3d7778b"}], "dimensions": ["width", "height"], "id": "eb548c57-3d16-4297-a835-f376888b8ad8"}, "type": "ZoomTool", "id": "eb548c57-3d16-4297-a835-f376888b8ad8"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "61a293bd-721a-4493-b011-8e91565aef37"}, "columns": ["y"]}], "id": "ffd84e3f-e8f1-4e61-a754-e541f3d7778b", "doc": null}, "type": "DataRange1d", "id": "ffd84e3f-e8f1-4e61-a754-e541f3d7778b"}, {"attributes": {"plot": {"type": "Plot", "id": "da5fb7bc-5bb0-423e-a98e-911a3b4f4002"}, "doc": null, "dimension": 1, "id": "13db4e01-be32-4605-8cbb-35b37f2a9013"}, "type": "Grid", "id": "13db4e01-be32-4605-8cbb-35b37f2a9013"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "da5fb7bc-5bb0-423e-a98e-911a3b4f4002"}], "id": "31556258-c92e-4fa5-86f8-74fb337f0ac9"}, "type": "PlotContext", "id": "31556258-c92e-4fa5-86f8-74fb337f0ac9"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [1, 1, 1, 1, 1], "x": [1294012800000, 1309996800000, 1312934400000, 1321660800000, 1299456000000]}, "id": "61a293bd-721a-4493-b011-8e91565aef37"}, "type": "ColumnDataSource", "id": "61a293bd-721a-4493-b011-8e91565aef37"}, {"attributes": {"doc": null, "renderers": [{"type": "Glyph", "id": "a5bacb96-4700-48c8-82b9-b9f2e2fa8c48"}], "id": "4e4ed731-af8b-4300-b9b3-21cbea1812e2"}, "type": "BoxSelectTool", "id": "4e4ed731-af8b-4300-b9b3-21cbea1812e2"}, {"attributes": {"plot": {"type": "Plot", "id": "da5fb7bc-5bb0-423e-a98e-911a3b4f4002"}, "location": "min", "bounds": "auto", "doc": null, "id": "ec606442-ef17-4266-bd86-8b997e6cd9e6", "dimension": 0}, "type": "LinearAxis", "id": "ec606442-ef17-4266-bd86-8b997e6cd9e6"}];
    var modeltype = "PlotContext";
    var elementid = "a6331156-b2f3-4274-9e34-3261135d3215";
    var plotID = "da5fb7bc-5bb0-423e-a98e-911a3b4f4002";
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