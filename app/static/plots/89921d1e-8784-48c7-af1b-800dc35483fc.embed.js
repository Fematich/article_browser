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

    var all_models = [{"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "ea885842-af13-432c-82b5-51043b9728ff"}, {"type": "DataRange1d", "id": "62387884-1dc8-4eac-8ab8-7ed57fd6239e"}], "dimensions": ["width", "height"], "doc": null, "id": "6f583751-dc24-4548-9f0f-c52987ab4f8e"}, "type": "PanTool", "id": "6f583751-dc24-4548-9f0f-c52987ab4f8e"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "ea885842-af13-432c-82b5-51043b9728ff"}, {"type": "DataRange1d", "id": "62387884-1dc8-4eac-8ab8-7ed57fd6239e"}], "dimensions": ["width", "height"], "id": "97b2020a-78c0-4273-ab15-b41a39dac958"}, "type": "ZoomTool", "id": "97b2020a-78c0-4273-ab15-b41a39dac958"}, {"attributes": {"plot": {"type": "Plot", "id": "89921d1e-8784-48c7-af1b-800dc35483fc"}, "doc": null, "bounds": "auto", "id": "5a73265b-ee05-4b5c-887d-f16861fc3a39", "location": "min", "formats": {"days": ["%m/%d/%Y"]}, "axis_label": "Datum", "dimension": 0}, "type": "DatetimeAxis", "id": "5a73265b-ee05-4b5c-887d-f16861fc3a39"}, {"attributes": {"plot": {"type": "Plot", "id": "89921d1e-8784-48c7-af1b-800dc35483fc"}, "id": "f4c101ac-9b11-4d33-806c-e535436e2e2a", "doc": null}, "type": "ResizeTool", "id": "f4c101ac-9b11-4d33-806c-e535436e2e2a"}, {"attributes": {"plot": {"type": "Plot", "id": "89921d1e-8784-48c7-af1b-800dc35483fc"}, "doc": null, "dimension": 1, "id": "e5d0034c-a823-4c56-9294-8cbf8a6825a4"}, "type": "Grid", "id": "e5d0034c-a823-4c56-9294-8cbf8a6825a4"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "72730c5d-91fb-4a82-9d1a-aca12e6d87e6"}, "columns": ["x"]}], "id": "ea885842-af13-432c-82b5-51043b9728ff", "doc": null}, "type": "DataRange1d", "id": "ea885842-af13-432c-82b5-51043b9728ff"}, {"attributes": {"plot": {"type": "Plot", "id": "89921d1e-8784-48c7-af1b-800dc35483fc"}, "doc": null, "dimension": 0, "id": "ec5e6054-62c4-4798-91f0-714e4a3425de"}, "type": "Grid", "id": "ec5e6054-62c4-4798-91f0-714e4a3425de"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "89921d1e-8784-48c7-af1b-800dc35483fc"}], "id": "fc28d2ee-996a-453f-b139-9bcabab243b0"}, "type": "PlotContext", "id": "fc28d2ee-996a-453f-b139-9bcabab243b0"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "ea885842-af13-432c-82b5-51043b9728ff"}, "axes": [], "title": "voorkomens", "y_range": {"type": "DataRange1d", "id": "62387884-1dc8-4eac-8ab8-7ed57fd6239e"}, "outer_width": 400, "renderers": [{"type": "DatetimeAxis", "id": "5a73265b-ee05-4b5c-887d-f16861fc3a39"}, {"type": "LinearAxis", "id": "842a0550-00a5-4252-8c85-5c0c35ebf7b3"}, {"type": "Grid", "id": "ec5e6054-62c4-4798-91f0-714e4a3425de"}, {"type": "Grid", "id": "e5d0034c-a823-4c56-9294-8cbf8a6825a4"}, {"type": "Glyph", "id": "92429e36-a086-4ba5-b66e-6b428f275b37"}], "outer_height": 300, "width": 400, "doc": null, "canvas_height": 300, "id": "89921d1e-8784-48c7-af1b-800dc35483fc", "height": 300, "tools": [{"type": "PanTool", "id": "6f583751-dc24-4548-9f0f-c52987ab4f8e"}, {"type": "ZoomTool", "id": "97b2020a-78c0-4273-ab15-b41a39dac958"}, {"type": "ResizeTool", "id": "f4c101ac-9b11-4d33-806c-e535436e2e2a"}], "canvas_width": 400}, "type": "Plot", "id": "89921d1e-8784-48c7-af1b-800dc35483fc"}, {"attributes": {"plot": {"type": "Plot", "id": "89921d1e-8784-48c7-af1b-800dc35483fc"}, "doc": null, "bounds": "auto", "dimension": 1, "location": "min", "axis_label": "# artikels", "id": "842a0550-00a5-4252-8c85-5c0c35ebf7b3"}, "type": "LinearAxis", "id": "842a0550-00a5-4252-8c85-5c0c35ebf7b3"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "72730c5d-91fb-4a82-9d1a-aca12e6d87e6"}, "doc": null, "id": "92429e36-a086-4ba5-b66e-6b428f275b37", "xdata_range": {"type": "DataRange1d", "id": "ea885842-af13-432c-82b5-51043b9728ff"}, "ydata_range": {"type": "DataRange1d", "id": "62387884-1dc8-4eac-8ab8-7ed57fd6239e"}, "glyphspec": {"line_color": {"value": "#1f77b4"}, "line_alpha": 1.0, "fill_color": "#1f77b4", "title": "voorkomens", "type": "line", "fill_alpha": 1.0, "height": 300, "width": 400, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "tools": "pan,zoom,resize", "x_axis_type": "datetime"}, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "line_width": 1, "angle_units": "deg", "type": "line", "y": {"units": "data", "field": "y"}, "line_alpha": 0.1, "start_angle_units": "deg", "valign": null, "radius_units": "screen", "visible": null, "length_units": "screen", "end_angle_units": "deg", "line_dash_offset": 0, "line_cap": "butt", "line_dash": [], "x": {"units": "data", "field": "x"}, "margin": null, "line_join": "miter", "halign": null}}, "type": "Glyph", "id": "92429e36-a086-4ba5-b66e-6b428f275b37"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "72730c5d-91fb-4a82-9d1a-aca12e6d87e6"}, "columns": ["y"]}], "id": "62387884-1dc8-4eac-8ab8-7ed57fd6239e", "doc": null}, "type": "DataRange1d", "id": "62387884-1dc8-4eac-8ab8-7ed57fd6239e"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [1, 1, 1, 1, 8, 2, 3, 1, 1, 1, 1, 1, 1, 1, 6, 1, 1, 1, 1], "x": [1298419200000.0, 1298505600000.0, 1298678400000.0, 1298937600000.0, 1299888000000.0, 1300060800000.0, 1300147200000.0, 1300924800000.0, 1301356800000.0, 1301443200000.0, 1301875200000.0, 1304294400000.0, 1305936000000.0, 1306108800000.0, 1309392000000.0, 1310515200000.0, 1315180800000.0, 1323302400000.0, 1323820800000.0]}, "id": "72730c5d-91fb-4a82-9d1a-aca12e6d87e6"}, "type": "ColumnDataSource", "id": "72730c5d-91fb-4a82-9d1a-aca12e6d87e6"}];
    var modeltype = "PlotContext";
    var elementid = "a9779dd5-ba43-41cd-808c-51054c06e78b";
    var plotID = "89921d1e-8784-48c7-af1b-800dc35483fc";
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