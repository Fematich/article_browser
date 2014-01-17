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

    var all_models = [{"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "5d3c99a3-d99a-4efb-acfc-4adc7a873d95"}, {"type": "DataRange1d", "id": "a82d7330-ef97-4484-9f5c-9dea27b974f8"}], "dimensions": ["width", "height"], "id": "d3e2ab65-955b-43aa-a99c-07e98cebed8b"}, "type": "ZoomTool", "id": "d3e2ab65-955b-43aa-a99c-07e98cebed8b"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "49eb3781-b66f-468b-9fff-0b2734571c5f"}, "columns": ["y"]}], "id": "a82d7330-ef97-4484-9f5c-9dea27b974f8", "doc": null}, "type": "DataRange1d", "id": "a82d7330-ef97-4484-9f5c-9dea27b974f8"}, {"attributes": {"doc": null, "tool": {"type": "BoxSelectTool", "id": "a9c95f35-7d64-40a6-be71-0cae62ff048f"}, "id": "8a9cbe0b-ae63-4422-b4b1-3155075dc098"}, "type": "BoxSelection", "id": "8a9cbe0b-ae63-4422-b4b1-3155075dc098"}, {"attributes": {"plot": {"type": "Plot", "id": "dc1e0762-6cc1-4c1d-9d69-0c2624e21332"}, "id": "8e337985-6240-4a35-b2a4-6ecf7f6b658b", "doc": null}, "type": "ResizeTool", "id": "8e337985-6240-4a35-b2a4-6ecf7f6b658b"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "49eb3781-b66f-468b-9fff-0b2734571c5f"}, "doc": null, "id": "633570db-eed4-4ad6-8d4f-a7bcc199ef68", "xdata_range": {"type": "DataRange1d", "id": "5d3c99a3-d99a-4efb-acfc-4adc7a873d95"}, "ydata_range": {"type": "DataRange1d", "id": "a82d7330-ef97-4484-9f5c-9dea27b974f8"}, "glyphspec": {"line_color": {"value": "#1f77b4"}, "line_alpha": 1.0, "fill_color": "#1f77b4", "fill_alpha": 1.0, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "type": "line"}, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "line_width": 1, "angle_units": "deg", "type": "line", "y": {"units": "data", "field": "y"}, "line_alpha": 0.1, "start_angle_units": "deg", "valign": null, "radius_units": "screen", "visible": null, "length_units": "screen", "end_angle_units": "deg", "line_dash_offset": 0, "line_cap": "butt", "line_dash": [], "x": {"units": "data", "field": "x"}, "margin": null, "line_join": "miter", "halign": null}}, "type": "Glyph", "id": "633570db-eed4-4ad6-8d4f-a7bcc199ef68"}, {"attributes": {"plot": {"type": "Plot", "id": "dc1e0762-6cc1-4c1d-9d69-0c2624e21332"}, "location": "min", "bounds": "auto", "doc": null, "id": "08d0fff7-0375-4777-bff4-2cd9647ad1df", "dimension": 0}, "type": "LinearAxis", "id": "08d0fff7-0375-4777-bff4-2cd9647ad1df"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [1, 1, 1, 1], "x": [1294012800000, 1309996800000, 1312934400000, 1299456000000]}, "id": "49eb3781-b66f-468b-9fff-0b2734571c5f"}, "type": "ColumnDataSource", "id": "49eb3781-b66f-468b-9fff-0b2734571c5f"}, {"attributes": {"plot": {"type": "Plot", "id": "dc1e0762-6cc1-4c1d-9d69-0c2624e21332"}, "doc": null, "dimension": 0, "id": "ef15b739-46c1-4dce-91ba-53b0872cbf03"}, "type": "Grid", "id": "ef15b739-46c1-4dce-91ba-53b0872cbf03"}, {"attributes": {"plot": {"type": "Plot", "id": "dc1e0762-6cc1-4c1d-9d69-0c2624e21332"}, "dataranges": [], "id": "d4ecf2c3-0ca2-4a44-9568-e4e3e8d44f81", "doc": null}, "type": "PreviewSaveTool", "id": "d4ecf2c3-0ca2-4a44-9568-e4e3e8d44f81"}, {"attributes": {"doc": null, "renderers": [{"type": "Glyph", "id": "633570db-eed4-4ad6-8d4f-a7bcc199ef68"}], "id": "a9c95f35-7d64-40a6-be71-0cae62ff048f"}, "type": "BoxSelectTool", "id": "a9c95f35-7d64-40a6-be71-0cae62ff048f"}, {"attributes": {"plot": {"type": "Plot", "id": "dc1e0762-6cc1-4c1d-9d69-0c2624e21332"}, "location": "min", "bounds": "auto", "doc": null, "id": "07a88b0d-88cc-48c3-ae7d-3715cf98c407", "dimension": 1}, "type": "LinearAxis", "id": "07a88b0d-88cc-48c3-ae7d-3715cf98c407"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "5d3c99a3-d99a-4efb-acfc-4adc7a873d95"}, {"type": "DataRange1d", "id": "a82d7330-ef97-4484-9f5c-9dea27b974f8"}], "dimensions": ["width", "height"], "doc": null, "id": "e0579a08-0607-4c43-b02c-be926fe49d79"}, "type": "PanTool", "id": "e0579a08-0607-4c43-b02c-be926fe49d79"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "5d3c99a3-d99a-4efb-acfc-4adc7a873d95"}, "axes": [], "title": "Plot", "y_range": {"type": "DataRange1d", "id": "a82d7330-ef97-4484-9f5c-9dea27b974f8"}, "outer_width": 600, "renderers": [{"type": "LinearAxis", "id": "08d0fff7-0375-4777-bff4-2cd9647ad1df"}, {"type": "LinearAxis", "id": "07a88b0d-88cc-48c3-ae7d-3715cf98c407"}, {"type": "Grid", "id": "ef15b739-46c1-4dce-91ba-53b0872cbf03"}, {"type": "Grid", "id": "ada1c990-6ff0-4f89-a4f4-ebea2c63ba18"}, {"type": "BoxSelection", "id": "8a9cbe0b-ae63-4422-b4b1-3155075dc098"}, {"type": "Glyph", "id": "633570db-eed4-4ad6-8d4f-a7bcc199ef68"}], "outer_height": 600, "doc": null, "canvas_height": 600, "id": "dc1e0762-6cc1-4c1d-9d69-0c2624e21332", "tools": [{"type": "PanTool", "id": "e0579a08-0607-4c43-b02c-be926fe49d79"}, {"type": "ZoomTool", "id": "d3e2ab65-955b-43aa-a99c-07e98cebed8b"}, {"type": "PreviewSaveTool", "id": "d4ecf2c3-0ca2-4a44-9568-e4e3e8d44f81"}, {"type": "ResizeTool", "id": "8e337985-6240-4a35-b2a4-6ecf7f6b658b"}, {"type": "BoxSelectTool", "id": "a9c95f35-7d64-40a6-be71-0cae62ff048f"}], "canvas_width": 600}, "type": "Plot", "id": "dc1e0762-6cc1-4c1d-9d69-0c2624e21332"}, {"attributes": {"plot": {"type": "Plot", "id": "dc1e0762-6cc1-4c1d-9d69-0c2624e21332"}, "doc": null, "dimension": 1, "id": "ada1c990-6ff0-4f89-a4f4-ebea2c63ba18"}, "type": "Grid", "id": "ada1c990-6ff0-4f89-a4f4-ebea2c63ba18"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "49eb3781-b66f-468b-9fff-0b2734571c5f"}, "columns": ["x"]}], "id": "5d3c99a3-d99a-4efb-acfc-4adc7a873d95", "doc": null}, "type": "DataRange1d", "id": "5d3c99a3-d99a-4efb-acfc-4adc7a873d95"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "dc1e0762-6cc1-4c1d-9d69-0c2624e21332"}], "id": "92c2d595-5d85-473c-b6e9-27c287bbe2d5"}, "type": "PlotContext", "id": "92c2d595-5d85-473c-b6e9-27c287bbe2d5"}];
    var modeltype = "PlotContext";
    var elementid = "ad4a5113-c9be-4e64-9b4d-17d87f8de23b";
    var plotID = "dc1e0762-6cc1-4c1d-9d69-0c2624e21332";
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