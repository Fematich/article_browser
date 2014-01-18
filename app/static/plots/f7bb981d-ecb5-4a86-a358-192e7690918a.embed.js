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

    var all_models = [{"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "70ea4f85-5d32-4393-93ca-821da2e5ae18"}, {"type": "DataRange1d", "id": "bfd8df37-7dd1-4948-884d-12c3944a275c"}], "dimensions": ["width", "height"], "id": "2ca15828-2d66-490e-8320-bf3eec61fce6"}, "type": "ZoomTool", "id": "2ca15828-2d66-490e-8320-bf3eec61fce6"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "70ea4f85-5d32-4393-93ca-821da2e5ae18"}, "axes": [], "title": "voorkomens", "y_range": {"type": "DataRange1d", "id": "bfd8df37-7dd1-4948-884d-12c3944a275c"}, "outer_width": 400, "renderers": [{"type": "DatetimeAxis", "id": "002ac4a5-237d-443a-aab8-1382ae414ec1"}, {"type": "LinearAxis", "id": "b8557a82-76dd-4f03-93aa-68a55710028a"}, {"type": "Grid", "id": "c3f6bde5-dc16-44dc-855b-2016268ea0af"}, {"type": "Grid", "id": "74137828-f6f7-4956-95ba-c57140fe87c1"}, {"type": "Glyph", "id": "6ccb259d-ac89-4442-9541-aa98aa5c5eb1"}], "outer_height": 300, "width": 400, "doc": null, "canvas_height": 300, "id": "f7bb981d-ecb5-4a86-a358-192e7690918a", "height": 300, "tools": [{"type": "PanTool", "id": "d43cd11b-60e6-4f5c-9e6e-b197f149a9e7"}, {"type": "ZoomTool", "id": "2ca15828-2d66-490e-8320-bf3eec61fce6"}, {"type": "ResizeTool", "id": "175b5c6e-48f3-4d41-aacc-b4cf41b29731"}], "canvas_width": 400}, "type": "Plot", "id": "f7bb981d-ecb5-4a86-a358-192e7690918a"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "4b5ab5df-217c-47a6-8f5a-b62a346b411b"}, "doc": null, "id": "6ccb259d-ac89-4442-9541-aa98aa5c5eb1", "xdata_range": {"type": "DataRange1d", "id": "70ea4f85-5d32-4393-93ca-821da2e5ae18"}, "ydata_range": {"type": "DataRange1d", "id": "bfd8df37-7dd1-4948-884d-12c3944a275c"}, "glyphspec": {"line_color": {"value": "#1f77b4"}, "line_alpha": 1.0, "fill_color": "#1f77b4", "title": "voorkomens", "type": "line", "fill_alpha": 1.0, "height": 300, "width": 400, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "tools": "pan,zoom,resize", "x_axis_type": "datetime"}, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "line_width": 1, "angle_units": "deg", "type": "line", "y": {"units": "data", "field": "y"}, "line_alpha": 0.1, "start_angle_units": "deg", "valign": null, "radius_units": "screen", "visible": null, "length_units": "screen", "end_angle_units": "deg", "line_dash_offset": 0, "line_cap": "butt", "line_dash": [], "x": {"units": "data", "field": "x"}, "margin": null, "line_join": "miter", "halign": null}}, "type": "Glyph", "id": "6ccb259d-ac89-4442-9541-aa98aa5c5eb1"}, {"attributes": {"plot": {"type": "Plot", "id": "f7bb981d-ecb5-4a86-a358-192e7690918a"}, "doc": null, "bounds": "auto", "dimension": 1, "location": "min", "axis_label": "# artikels", "id": "b8557a82-76dd-4f03-93aa-68a55710028a"}, "type": "LinearAxis", "id": "b8557a82-76dd-4f03-93aa-68a55710028a"}, {"attributes": {"plot": {"type": "Plot", "id": "f7bb981d-ecb5-4a86-a358-192e7690918a"}, "doc": null, "bounds": "auto", "id": "002ac4a5-237d-443a-aab8-1382ae414ec1", "location": "min", "formats": {"days": ["%m/%d/%Y"]}, "axis_label": "Datum", "dimension": 0}, "type": "DatetimeAxis", "id": "002ac4a5-237d-443a-aab8-1382ae414ec1"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "4b5ab5df-217c-47a6-8f5a-b62a346b411b"}, "columns": ["y"]}], "id": "bfd8df37-7dd1-4948-884d-12c3944a275c", "doc": null}, "type": "DataRange1d", "id": "bfd8df37-7dd1-4948-884d-12c3944a275c"}, {"attributes": {"plot": {"type": "Plot", "id": "f7bb981d-ecb5-4a86-a358-192e7690918a"}, "doc": null, "dimension": 0, "id": "c3f6bde5-dc16-44dc-855b-2016268ea0af"}, "type": "Grid", "id": "c3f6bde5-dc16-44dc-855b-2016268ea0af"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "70ea4f85-5d32-4393-93ca-821da2e5ae18"}, {"type": "DataRange1d", "id": "bfd8df37-7dd1-4948-884d-12c3944a275c"}], "dimensions": ["width", "height"], "doc": null, "id": "d43cd11b-60e6-4f5c-9e6e-b197f149a9e7"}, "type": "PanTool", "id": "d43cd11b-60e6-4f5c-9e6e-b197f149a9e7"}, {"attributes": {"plot": {"type": "Plot", "id": "f7bb981d-ecb5-4a86-a358-192e7690918a"}, "doc": null, "dimension": 1, "id": "74137828-f6f7-4956-95ba-c57140fe87c1"}, "type": "Grid", "id": "74137828-f6f7-4956-95ba-c57140fe87c1"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "4b5ab5df-217c-47a6-8f5a-b62a346b411b"}, "columns": ["x"]}], "id": "70ea4f85-5d32-4393-93ca-821da2e5ae18", "doc": null}, "type": "DataRange1d", "id": "70ea4f85-5d32-4393-93ca-821da2e5ae18"}, {"attributes": {"plot": {"type": "Plot", "id": "f7bb981d-ecb5-4a86-a358-192e7690918a"}, "id": "175b5c6e-48f3-4d41-aacc-b4cf41b29731", "doc": null}, "type": "ResizeTool", "id": "175b5c6e-48f3-4d41-aacc-b4cf41b29731"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "f7bb981d-ecb5-4a86-a358-192e7690918a"}], "id": "a5bf464a-c00c-4d4a-8907-eed1cb305515"}, "type": "PlotContext", "id": "a5bf464a-c00c-4d4a-8907-eed1cb305515"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [], "x": []}, "id": "4b5ab5df-217c-47a6-8f5a-b62a346b411b"}, "type": "ColumnDataSource", "id": "4b5ab5df-217c-47a6-8f5a-b62a346b411b"}];
    var modeltype = "PlotContext";
    var elementid = "c0826fea-24f1-49d9-8b00-84f39816b5c7";
    var plotID = "f7bb981d-ecb5-4a86-a358-192e7690918a";
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