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

    var all_models = [{"attributes": {"plot": {"type": "Plot", "id": "de1e7be5-f7c1-498c-afca-6d7eafb1119b"}, "doc": null, "dimension": 1, "id": "6857860f-e825-42ca-b15e-83f28ec61c21"}, "type": "Grid", "id": "6857860f-e825-42ca-b15e-83f28ec61c21"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "de1e7be5-f7c1-498c-afca-6d7eafb1119b"}], "id": "d954a981-73c9-459e-9cbc-9cc9d4a37109"}, "type": "PlotContext", "id": "d954a981-73c9-459e-9cbc-9cc9d4a37109"}, {"attributes": {"plot": {"type": "Plot", "id": "de1e7be5-f7c1-498c-afca-6d7eafb1119b"}, "id": "66f3f35a-e0eb-47fe-be45-5932ce8a702f", "doc": null}, "type": "ResizeTool", "id": "66f3f35a-e0eb-47fe-be45-5932ce8a702f"}, {"attributes": {"plot": {"type": "Plot", "id": "de1e7be5-f7c1-498c-afca-6d7eafb1119b"}, "doc": null, "bounds": "auto", "dimension": 1, "location": "min", "axis_label": "# artikels", "id": "b8d262ea-6da2-4adf-948f-0abaaeae25d3"}, "type": "LinearAxis", "id": "b8d262ea-6da2-4adf-948f-0abaaeae25d3"}, {"attributes": {"plot": {"type": "Plot", "id": "de1e7be5-f7c1-498c-afca-6d7eafb1119b"}, "doc": null, "bounds": "auto", "id": "8535253e-9778-422e-b88e-14ff297e4429", "location": "min", "formats": {"days": ["%m/%d/%Y"]}, "axis_label": "Datum", "dimension": 0}, "type": "DatetimeAxis", "id": "8535253e-9778-422e-b88e-14ff297e4429"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "d7d41198-edc6-4d15-bc62-983514f47051"}, {"type": "DataRange1d", "id": "5931544e-c996-4c9a-8a33-6808fc10ff5f"}], "dimensions": ["width", "height"], "id": "fd09e786-5d4d-4542-9302-9ac6d5e71176"}, "type": "ZoomTool", "id": "fd09e786-5d4d-4542-9302-9ac6d5e71176"}, {"attributes": {"plot": {"type": "Plot", "id": "de1e7be5-f7c1-498c-afca-6d7eafb1119b"}, "doc": null, "dimension": 0, "id": "ba842ca3-993c-449f-9c51-7e3ba529cf96"}, "type": "Grid", "id": "ba842ca3-993c-449f-9c51-7e3ba529cf96"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "d7d41198-edc6-4d15-bc62-983514f47051"}, "axes": [], "title": "voorkomens", "y_range": {"type": "DataRange1d", "id": "5931544e-c996-4c9a-8a33-6808fc10ff5f"}, "outer_width": 400, "renderers": [{"type": "DatetimeAxis", "id": "8535253e-9778-422e-b88e-14ff297e4429"}, {"type": "LinearAxis", "id": "b8d262ea-6da2-4adf-948f-0abaaeae25d3"}, {"type": "Grid", "id": "ba842ca3-993c-449f-9c51-7e3ba529cf96"}, {"type": "Grid", "id": "6857860f-e825-42ca-b15e-83f28ec61c21"}, {"type": "Glyph", "id": "94e944bb-70a3-4b64-bcde-f9af409f5e1b"}], "outer_height": 300, "width": 400, "doc": null, "canvas_height": 300, "id": "de1e7be5-f7c1-498c-afca-6d7eafb1119b", "height": 300, "tools": [{"type": "PanTool", "id": "74266667-489a-4dd9-996e-bc1ded011521"}, {"type": "ZoomTool", "id": "fd09e786-5d4d-4542-9302-9ac6d5e71176"}, {"type": "ResizeTool", "id": "66f3f35a-e0eb-47fe-be45-5932ce8a702f"}], "canvas_width": 400}, "type": "Plot", "id": "de1e7be5-f7c1-498c-afca-6d7eafb1119b"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [12, 6, 2, 3, 2, 2, 2, 1, 1, 1, 10, 3, 3, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 3, 1, 6, 1, 1, 1, 1, 1, 1, 1, 1], "x": [1298419200000.0, 1298505600000.0, 1298592000000.0, 1298678400000.0, 1298851200000.0, 1298937600000.0, 1299110400000.0, 1299196800000.0, 1299283200000.0, 1299542400000.0, 1299888000000.0, 1300060800000.0, 1300147200000.0, 1300752000000.0, 1300924800000.0, 1301011200000.0, 1301097600000.0, 1301270400000.0, 1301356800000.0, 1301443200000.0, 1301875200000.0, 1304294400000.0, 1305936000000.0, 1306108800000.0, 1308009600000.0, 1308960000000.0, 1309392000000.0, 1309564800000.0, 1310515200000.0, 1313107200000.0, 1313452800000.0, 1315180800000.0, 1323302400000.0, 1323820800000.0, 1324684800000.0]}, "id": "aeb1050d-00e1-47d5-a0fc-5a5993718acf"}, "type": "ColumnDataSource", "id": "aeb1050d-00e1-47d5-a0fc-5a5993718acf"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "aeb1050d-00e1-47d5-a0fc-5a5993718acf"}, "doc": null, "id": "94e944bb-70a3-4b64-bcde-f9af409f5e1b", "xdata_range": {"type": "DataRange1d", "id": "d7d41198-edc6-4d15-bc62-983514f47051"}, "ydata_range": {"type": "DataRange1d", "id": "5931544e-c996-4c9a-8a33-6808fc10ff5f"}, "glyphspec": {"line_color": {"value": "#1f77b4"}, "line_alpha": 1.0, "fill_color": "#1f77b4", "title": "voorkomens", "type": "line", "fill_alpha": 1.0, "height": 300, "width": 400, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "tools": "pan,zoom,resize", "x_axis_type": "datetime"}, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "line_width": 1, "angle_units": "deg", "type": "line", "y": {"units": "data", "field": "y"}, "line_alpha": 0.1, "start_angle_units": "deg", "valign": null, "radius_units": "screen", "visible": null, "length_units": "screen", "end_angle_units": "deg", "line_dash_offset": 0, "line_cap": "butt", "line_dash": [], "x": {"units": "data", "field": "x"}, "margin": null, "line_join": "miter", "halign": null}}, "type": "Glyph", "id": "94e944bb-70a3-4b64-bcde-f9af409f5e1b"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "aeb1050d-00e1-47d5-a0fc-5a5993718acf"}, "columns": ["x"]}], "id": "d7d41198-edc6-4d15-bc62-983514f47051", "doc": null}, "type": "DataRange1d", "id": "d7d41198-edc6-4d15-bc62-983514f47051"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "d7d41198-edc6-4d15-bc62-983514f47051"}, {"type": "DataRange1d", "id": "5931544e-c996-4c9a-8a33-6808fc10ff5f"}], "dimensions": ["width", "height"], "doc": null, "id": "74266667-489a-4dd9-996e-bc1ded011521"}, "type": "PanTool", "id": "74266667-489a-4dd9-996e-bc1ded011521"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "aeb1050d-00e1-47d5-a0fc-5a5993718acf"}, "columns": ["y"]}], "id": "5931544e-c996-4c9a-8a33-6808fc10ff5f", "doc": null}, "type": "DataRange1d", "id": "5931544e-c996-4c9a-8a33-6808fc10ff5f"}];
    var modeltype = "PlotContext";
    var elementid = "0b71b15c-903c-4c11-9cb1-9555533b9331";
    var plotID = "de1e7be5-f7c1-498c-afca-6d7eafb1119b";
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