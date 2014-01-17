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

    var all_models = [{"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [1, 1, 1, 1], "x": [1294012800000, 1309996800000, 1312934400000, 1299456000000]}, "id": "a1d7c0d7-fbaf-4505-864f-4fb5e87ac398"}, "type": "ColumnDataSource", "id": "a1d7c0d7-fbaf-4505-864f-4fb5e87ac398"}, {"attributes": {"plot": {"type": "Plot", "id": "c691fb09-6a3c-4cfb-9cda-6603e7f5c560"}, "location": "min", "bounds": "auto", "doc": null, "id": "1d1b55c6-c14f-4e79-a2e7-8069a2437aee", "dimension": 0}, "type": "LinearAxis", "id": "1d1b55c6-c14f-4e79-a2e7-8069a2437aee"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "a1d7c0d7-fbaf-4505-864f-4fb5e87ac398"}, "columns": ["y"]}], "id": "ddc99a13-6392-4fae-bddc-b80c0a4f8d68", "doc": null}, "type": "DataRange1d", "id": "ddc99a13-6392-4fae-bddc-b80c0a4f8d68"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "a1d7c0d7-fbaf-4505-864f-4fb5e87ac398"}, "doc": null, "id": "0e57c742-2d34-491c-b3c6-db3ec297c83d", "xdata_range": {"type": "DataRange1d", "id": "32f00cf7-19a2-4841-a093-ee53ce575be0"}, "ydata_range": {"type": "DataRange1d", "id": "ddc99a13-6392-4fae-bddc-b80c0a4f8d68"}, "glyphspec": {"line_color": {"value": "#1f77b4"}, "line_alpha": 1.0, "fill_color": "#1f77b4", "fill_alpha": 1.0, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "type": "line"}, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "line_width": 1, "angle_units": "deg", "type": "line", "y": {"units": "data", "field": "y"}, "line_alpha": 0.1, "start_angle_units": "deg", "valign": null, "radius_units": "screen", "visible": null, "length_units": "screen", "end_angle_units": "deg", "line_dash_offset": 0, "line_cap": "butt", "line_dash": [], "x": {"units": "data", "field": "x"}, "margin": null, "line_join": "miter", "halign": null}}, "type": "Glyph", "id": "0e57c742-2d34-491c-b3c6-db3ec297c83d"}, {"attributes": {"plot": {"type": "Plot", "id": "c691fb09-6a3c-4cfb-9cda-6603e7f5c560"}, "location": "min", "bounds": "auto", "doc": null, "id": "0f168e63-9eaf-4a6b-882a-7ee70ad4c6be", "dimension": 1}, "type": "LinearAxis", "id": "0f168e63-9eaf-4a6b-882a-7ee70ad4c6be"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "a1d7c0d7-fbaf-4505-864f-4fb5e87ac398"}, "columns": ["x"]}], "id": "32f00cf7-19a2-4841-a093-ee53ce575be0", "doc": null}, "type": "DataRange1d", "id": "32f00cf7-19a2-4841-a093-ee53ce575be0"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "32f00cf7-19a2-4841-a093-ee53ce575be0"}, {"type": "DataRange1d", "id": "ddc99a13-6392-4fae-bddc-b80c0a4f8d68"}], "dimensions": ["width", "height"], "id": "e1b5097d-86f5-4bfd-a451-d146a4deebb9"}, "type": "ZoomTool", "id": "e1b5097d-86f5-4bfd-a451-d146a4deebb9"}, {"attributes": {"plot": {"type": "Plot", "id": "c691fb09-6a3c-4cfb-9cda-6603e7f5c560"}, "dataranges": [], "id": "27339d3b-8d18-4325-8014-ab0e2343db72", "doc": null}, "type": "PreviewSaveTool", "id": "27339d3b-8d18-4325-8014-ab0e2343db72"}, {"attributes": {"plot": {"type": "Plot", "id": "c691fb09-6a3c-4cfb-9cda-6603e7f5c560"}, "doc": null, "dimension": 0, "id": "56ce4209-57c2-4403-80c6-c4ce6ea9f578"}, "type": "Grid", "id": "56ce4209-57c2-4403-80c6-c4ce6ea9f578"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "c691fb09-6a3c-4cfb-9cda-6603e7f5c560"}], "id": "d7d6c217-85a9-466d-8f70-0c4d0d245ec4"}, "type": "PlotContext", "id": "d7d6c217-85a9-466d-8f70-0c4d0d245ec4"}, {"attributes": {"doc": null, "tool": {"type": "BoxSelectTool", "id": "01d1c70c-829c-4a66-8c3f-197f16d73196"}, "id": "fa4c4fcf-b0d3-45c7-9066-0682bcc418ce"}, "type": "BoxSelection", "id": "fa4c4fcf-b0d3-45c7-9066-0682bcc418ce"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "32f00cf7-19a2-4841-a093-ee53ce575be0"}, "axes": [], "title": "Plot", "y_range": {"type": "DataRange1d", "id": "ddc99a13-6392-4fae-bddc-b80c0a4f8d68"}, "outer_width": 600, "renderers": [{"type": "LinearAxis", "id": "1d1b55c6-c14f-4e79-a2e7-8069a2437aee"}, {"type": "LinearAxis", "id": "0f168e63-9eaf-4a6b-882a-7ee70ad4c6be"}, {"type": "Grid", "id": "56ce4209-57c2-4403-80c6-c4ce6ea9f578"}, {"type": "Grid", "id": "bf3d544e-b59c-4d9b-8760-0934d57223b8"}, {"type": "BoxSelection", "id": "fa4c4fcf-b0d3-45c7-9066-0682bcc418ce"}, {"type": "Glyph", "id": "0e57c742-2d34-491c-b3c6-db3ec297c83d"}], "outer_height": 600, "doc": null, "canvas_height": 600, "id": "c691fb09-6a3c-4cfb-9cda-6603e7f5c560", "tools": [{"type": "PanTool", "id": "d50e8eab-3982-4a0b-ac5f-750f424d36f2"}, {"type": "ZoomTool", "id": "e1b5097d-86f5-4bfd-a451-d146a4deebb9"}, {"type": "PreviewSaveTool", "id": "27339d3b-8d18-4325-8014-ab0e2343db72"}, {"type": "ResizeTool", "id": "98200828-7956-42ed-bf0d-b2058a9407b4"}, {"type": "BoxSelectTool", "id": "01d1c70c-829c-4a66-8c3f-197f16d73196"}], "canvas_width": 600}, "type": "Plot", "id": "c691fb09-6a3c-4cfb-9cda-6603e7f5c560"}, {"attributes": {"plot": {"type": "Plot", "id": "c691fb09-6a3c-4cfb-9cda-6603e7f5c560"}, "id": "98200828-7956-42ed-bf0d-b2058a9407b4", "doc": null}, "type": "ResizeTool", "id": "98200828-7956-42ed-bf0d-b2058a9407b4"}, {"attributes": {"plot": {"type": "Plot", "id": "c691fb09-6a3c-4cfb-9cda-6603e7f5c560"}, "doc": null, "dimension": 1, "id": "bf3d544e-b59c-4d9b-8760-0934d57223b8"}, "type": "Grid", "id": "bf3d544e-b59c-4d9b-8760-0934d57223b8"}, {"attributes": {"doc": null, "renderers": [{"type": "Glyph", "id": "0e57c742-2d34-491c-b3c6-db3ec297c83d"}], "id": "01d1c70c-829c-4a66-8c3f-197f16d73196"}, "type": "BoxSelectTool", "id": "01d1c70c-829c-4a66-8c3f-197f16d73196"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "32f00cf7-19a2-4841-a093-ee53ce575be0"}, {"type": "DataRange1d", "id": "ddc99a13-6392-4fae-bddc-b80c0a4f8d68"}], "dimensions": ["width", "height"], "doc": null, "id": "d50e8eab-3982-4a0b-ac5f-750f424d36f2"}, "type": "PanTool", "id": "d50e8eab-3982-4a0b-ac5f-750f424d36f2"}];
    var modeltype = "PlotContext";
    var elementid = "1fe7b803-02e7-4152-bcd0-f557ae9db63b";
    var plotID = "c691fb09-6a3c-4cfb-9cda-6603e7f5c560";
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