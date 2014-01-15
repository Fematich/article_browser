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

    var all_models = [{"attributes": {"plot": {"type": "Plot", "id": "360cc178-d5dd-4a77-bf85-66460960c09b"}, "doc": null, "legends": {"splits1540": [{"type": "Glyph", "id": "1953c015-d2f2-4aad-89a7-e5451eba1883"}]}, "id": "a31d9ffd-442f-47a6-b152-6b27ee66a202"}, "type": "Legend", "id": "a31d9ffd-442f-47a6-b152-6b27ee66a202"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [0.1, 0.2, 0.3, 0.4, 0.5, 0.15, 0.18, 0.19], "x": [0.6310415215391938, 0.6404549086682197, 0.6352641386294299, 0.5948290600531481, 0.5063627155721406, 0.6365227065305923, 0.6389211003618512, 0.6397195935959784]}, "id": "1e373842-4bfe-4dde-8d99-b84c86c086ff"}, "type": "ColumnDataSource", "id": "1e373842-4bfe-4dde-8d99-b84c86c086ff"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "a4902d88-6038-47f0-8a77-f2c5c21bee2d"}, {"type": "DataRange1d", "id": "e4597146-5768-469e-ab64-b73a36a27787"}], "dimensions": ["width", "height"], "doc": null, "id": "7c4120ca-2f51-4317-a120-4b8cc1cda356"}, "type": "PanTool", "id": "7c4120ca-2f51-4317-a120-4b8cc1cda356"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "a4902d88-6038-47f0-8a77-f2c5c21bee2d"}, {"type": "DataRange1d", "id": "e4597146-5768-469e-ab64-b73a36a27787"}], "dimensions": ["width", "height"], "id": "ff4de406-602c-4dc2-bfa1-3dc5544c418a"}, "type": "ZoomTool", "id": "ff4de406-602c-4dc2-bfa1-3dc5544c418a"}, {"attributes": {"doc": null, "tool": {"type": "BoxSelectTool", "id": "3b613735-2ce5-40d9-8330-a8cc6cf93981"}, "id": "06b00584-834d-4e02-8e78-89bfa4c57438"}, "type": "BoxSelection", "id": "06b00584-834d-4e02-8e78-89bfa4c57438"}, {"attributes": {"plot": {"type": "Plot", "id": "360cc178-d5dd-4a77-bf85-66460960c09b"}, "doc": null, "dimension": 0, "id": "a95cbda1-9389-4b66-8a66-4c92b55f51c0"}, "type": "Grid", "id": "a95cbda1-9389-4b66-8a66-4c92b55f51c0"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "1e373842-4bfe-4dde-8d99-b84c86c086ff"}, "columns": ["y"]}], "id": "e4597146-5768-469e-ab64-b73a36a27787", "doc": null}, "type": "DataRange1d", "id": "e4597146-5768-469e-ab64-b73a36a27787"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "a4902d88-6038-47f0-8a77-f2c5c21bee2d"}, "axes": [], "title": "Plot", "y_range": {"type": "DataRange1d", "id": "e4597146-5768-469e-ab64-b73a36a27787"}, "outer_width": 600, "renderers": [{"type": "LinearAxis", "id": "a5f32893-b7d9-41f8-85e8-30eb5533b579"}, {"type": "LinearAxis", "id": "3886232f-46f6-4d72-9a54-c30a0111e4d1"}, {"type": "Grid", "id": "a95cbda1-9389-4b66-8a66-4c92b55f51c0"}, {"type": "Grid", "id": "27726a3b-bbff-46b7-84eb-60ece038bcc3"}, {"type": "BoxSelection", "id": "06b00584-834d-4e02-8e78-89bfa4c57438"}, {"type": "Legend", "id": "a31d9ffd-442f-47a6-b152-6b27ee66a202"}, {"type": "Glyph", "id": "1953c015-d2f2-4aad-89a7-e5451eba1883"}], "outer_height": 600, "doc": null, "canvas_height": 600, "id": "360cc178-d5dd-4a77-bf85-66460960c09b", "tools": [{"type": "PanTool", "id": "7c4120ca-2f51-4317-a120-4b8cc1cda356"}, {"type": "ZoomTool", "id": "ff4de406-602c-4dc2-bfa1-3dc5544c418a"}, {"type": "PreviewSaveTool", "id": "36c0809e-3201-46d7-8875-fe1198e8b22c"}, {"type": "ResizeTool", "id": "a3961258-2f80-4090-b61f-37e2ee2e2b1c"}, {"type": "BoxSelectTool", "id": "3b613735-2ce5-40d9-8330-a8cc6cf93981"}], "canvas_width": 600}, "type": "Plot", "id": "360cc178-d5dd-4a77-bf85-66460960c09b"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "360cc178-d5dd-4a77-bf85-66460960c09b"}], "id": "694174c9-0f6b-40a1-93ef-1f83e85a6b55"}, "type": "PlotContext", "id": "694174c9-0f6b-40a1-93ef-1f83e85a6b55"}, {"attributes": {"plot": {"type": "Plot", "id": "360cc178-d5dd-4a77-bf85-66460960c09b"}, "doc": null, "dimension": 1, "id": "27726a3b-bbff-46b7-84eb-60ece038bcc3"}, "type": "Grid", "id": "27726a3b-bbff-46b7-84eb-60ece038bcc3"}, {"attributes": {"plot": {"type": "Plot", "id": "360cc178-d5dd-4a77-bf85-66460960c09b"}, "location": "min", "bounds": "auto", "doc": null, "id": "3886232f-46f6-4d72-9a54-c30a0111e4d1", "dimension": 1}, "type": "LinearAxis", "id": "3886232f-46f6-4d72-9a54-c30a0111e4d1"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "1e373842-4bfe-4dde-8d99-b84c86c086ff"}, "doc": null, "id": "1953c015-d2f2-4aad-89a7-e5451eba1883", "xdata_range": {"type": "DataRange1d", "id": "a4902d88-6038-47f0-8a77-f2c5c21bee2d"}, "ydata_range": {"type": "DataRange1d", "id": "e4597146-5768-469e-ab64-b73a36a27787"}, "glyphspec": {"line_color": {"value": "green"}, "line_alpha": 1.0, "fill_color": {"value": "green"}, "fill_alpha": 1.0, "radius": {"units": "screen", "value": 4}, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "type": "circle", "size": {"units": "screen", "field": null, "default": 4}}, "nonselection_glyphspec": {"line_color": {"value": "green"}, "angle_units": "deg", "fill_color": {"value": "green"}, "visible": null, "radius": {"units": "screen", "value": 4}, "line_dash_offset": 0, "line_join": "miter", "size": {"units": "screen", "default": 4, "field": null}, "line_alpha": 0.1, "radius_units": "screen", "end_angle_units": "deg", "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": 1, "type": "circle", "fill_alpha": 0.1, "halign": null, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "margin": null}}, "type": "Glyph", "id": "1953c015-d2f2-4aad-89a7-e5451eba1883"}, {"attributes": {"plot": {"type": "Plot", "id": "360cc178-d5dd-4a77-bf85-66460960c09b"}, "location": "min", "bounds": "auto", "doc": null, "id": "a5f32893-b7d9-41f8-85e8-30eb5533b579", "dimension": 0}, "type": "LinearAxis", "id": "a5f32893-b7d9-41f8-85e8-30eb5533b579"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "1e373842-4bfe-4dde-8d99-b84c86c086ff"}, "columns": ["x"]}], "id": "a4902d88-6038-47f0-8a77-f2c5c21bee2d", "doc": null}, "type": "DataRange1d", "id": "a4902d88-6038-47f0-8a77-f2c5c21bee2d"}, {"attributes": {"plot": {"type": "Plot", "id": "360cc178-d5dd-4a77-bf85-66460960c09b"}, "dataranges": [], "id": "36c0809e-3201-46d7-8875-fe1198e8b22c", "doc": null}, "type": "PreviewSaveTool", "id": "36c0809e-3201-46d7-8875-fe1198e8b22c"}, {"attributes": {"doc": null, "renderers": [{"type": "Glyph", "id": "1953c015-d2f2-4aad-89a7-e5451eba1883"}], "id": "3b613735-2ce5-40d9-8330-a8cc6cf93981"}, "type": "BoxSelectTool", "id": "3b613735-2ce5-40d9-8330-a8cc6cf93981"}, {"attributes": {"plot": {"type": "Plot", "id": "360cc178-d5dd-4a77-bf85-66460960c09b"}, "id": "a3961258-2f80-4090-b61f-37e2ee2e2b1c", "doc": null}, "type": "ResizeTool", "id": "a3961258-2f80-4090-b61f-37e2ee2e2b1c"}];
    var modeltype = "PlotContext";
    var elementid = "bcb488fd-4f16-4f3a-9083-312d8c280df8";
    var plotID = "360cc178-d5dd-4a77-bf85-66460960c09b";
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