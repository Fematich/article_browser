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

    var all_models = [{"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [9, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 2, 1, 1, 3, 1, 1, 1, 1, 1, 1], "x": [1309910400000.0, 1309996800000.0, 1310083200000.0, 1310428800000.0, 1310774400000.0, 1311292800000.0, 1311984000000.0, 1312416000000.0, 1313971200000.0, 1314144000000.0, 1314316800000.0, 1315353600000.0, 1316563200000.0, 1317945600000.0, 1318377600000.0, 1318464000000.0, 1319068800000.0, 1320192000000.0, 1320278400000.0, 1320364800000.0, 1320796800000.0, 1322784000000.0, 1323043200000.0, 1323475200000.0, 1324857600000.0, 1325116800000.0, 1325289600000.0]}, "id": "5264624d-6e6c-4c52-b8ef-5d18935bf83f"}, "type": "ColumnDataSource", "id": "5264624d-6e6c-4c52-b8ef-5d18935bf83f"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "5264624d-6e6c-4c52-b8ef-5d18935bf83f"}, "doc": null, "id": "45c6cac1-8060-4e96-9a81-698f861bced4", "xdata_range": {"type": "DataRange1d", "id": "9217e3c6-219d-44c3-a3cd-854db8ab6748"}, "ydata_range": {"type": "DataRange1d", "id": "0667645b-509e-41ad-8b98-3a8c4b6e2d58"}, "glyphspec": {"line_color": {"value": "#1f77b4"}, "line_alpha": 1.0, "fill_color": "#1f77b4", "title": "voorkomens", "type": "line", "fill_alpha": 1.0, "height": 300, "width": 400, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "tools": "pan,zoom,resize", "x_axis_type": "datetime"}, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "line_width": 1, "angle_units": "deg", "type": "line", "y": {"units": "data", "field": "y"}, "line_alpha": 0.1, "start_angle_units": "deg", "valign": null, "radius_units": "screen", "visible": null, "length_units": "screen", "end_angle_units": "deg", "line_dash_offset": 0, "line_cap": "butt", "line_dash": [], "x": {"units": "data", "field": "x"}, "margin": null, "line_join": "miter", "halign": null}}, "type": "Glyph", "id": "45c6cac1-8060-4e96-9a81-698f861bced4"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "9217e3c6-219d-44c3-a3cd-854db8ab6748"}, "axes": [], "title": "voorkomens", "y_range": {"type": "DataRange1d", "id": "0667645b-509e-41ad-8b98-3a8c4b6e2d58"}, "outer_width": 400, "renderers": [{"type": "DatetimeAxis", "id": "189c2f49-f50f-4b51-bc6d-84f286640e14"}, {"type": "LinearAxis", "id": "545dd336-1f9e-434b-95e3-0ee7ea87e7a4"}, {"type": "Grid", "id": "25eadcfa-a996-4ceb-81e3-3d5d89aed65d"}, {"type": "Grid", "id": "3bc69edd-0d2d-47a8-950d-8713e286366c"}, {"type": "Glyph", "id": "45c6cac1-8060-4e96-9a81-698f861bced4"}], "outer_height": 300, "width": 400, "doc": null, "canvas_height": 300, "id": "6c9241b0-fcec-44ac-986e-c7d60f0e1112", "height": 300, "tools": [{"type": "PanTool", "id": "5e0fb4ef-044a-431e-b69e-e3e5f47d09e9"}, {"type": "ZoomTool", "id": "23e8d21a-d8a3-422d-8525-4a1c9a3a5898"}, {"type": "ResizeTool", "id": "90514d9c-869d-49c8-8103-dc93f3c499d6"}], "canvas_width": 400}, "type": "Plot", "id": "6c9241b0-fcec-44ac-986e-c7d60f0e1112"}, {"attributes": {"plot": {"type": "Plot", "id": "6c9241b0-fcec-44ac-986e-c7d60f0e1112"}, "doc": null, "bounds": "auto", "dimension": 1, "location": "min", "axis_label": "# artikels", "id": "545dd336-1f9e-434b-95e3-0ee7ea87e7a4"}, "type": "LinearAxis", "id": "545dd336-1f9e-434b-95e3-0ee7ea87e7a4"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "9217e3c6-219d-44c3-a3cd-854db8ab6748"}, {"type": "DataRange1d", "id": "0667645b-509e-41ad-8b98-3a8c4b6e2d58"}], "dimensions": ["width", "height"], "id": "23e8d21a-d8a3-422d-8525-4a1c9a3a5898"}, "type": "ZoomTool", "id": "23e8d21a-d8a3-422d-8525-4a1c9a3a5898"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "5264624d-6e6c-4c52-b8ef-5d18935bf83f"}, "columns": ["x"]}], "id": "9217e3c6-219d-44c3-a3cd-854db8ab6748", "doc": null}, "type": "DataRange1d", "id": "9217e3c6-219d-44c3-a3cd-854db8ab6748"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "9217e3c6-219d-44c3-a3cd-854db8ab6748"}, {"type": "DataRange1d", "id": "0667645b-509e-41ad-8b98-3a8c4b6e2d58"}], "dimensions": ["width", "height"], "doc": null, "id": "5e0fb4ef-044a-431e-b69e-e3e5f47d09e9"}, "type": "PanTool", "id": "5e0fb4ef-044a-431e-b69e-e3e5f47d09e9"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "6c9241b0-fcec-44ac-986e-c7d60f0e1112"}], "id": "ccf169d3-ae61-49c5-b0a2-09b757fca620"}, "type": "PlotContext", "id": "ccf169d3-ae61-49c5-b0a2-09b757fca620"}, {"attributes": {"plot": {"type": "Plot", "id": "6c9241b0-fcec-44ac-986e-c7d60f0e1112"}, "doc": null, "dimension": 1, "id": "3bc69edd-0d2d-47a8-950d-8713e286366c"}, "type": "Grid", "id": "3bc69edd-0d2d-47a8-950d-8713e286366c"}, {"attributes": {"plot": {"type": "Plot", "id": "6c9241b0-fcec-44ac-986e-c7d60f0e1112"}, "doc": null, "dimension": 0, "id": "25eadcfa-a996-4ceb-81e3-3d5d89aed65d"}, "type": "Grid", "id": "25eadcfa-a996-4ceb-81e3-3d5d89aed65d"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "5264624d-6e6c-4c52-b8ef-5d18935bf83f"}, "columns": ["y"]}], "id": "0667645b-509e-41ad-8b98-3a8c4b6e2d58", "doc": null}, "type": "DataRange1d", "id": "0667645b-509e-41ad-8b98-3a8c4b6e2d58"}, {"attributes": {"plot": {"type": "Plot", "id": "6c9241b0-fcec-44ac-986e-c7d60f0e1112"}, "doc": null, "bounds": "auto", "id": "189c2f49-f50f-4b51-bc6d-84f286640e14", "location": "min", "formats": {"days": ["%m/%d/%Y"]}, "axis_label": "Datum", "dimension": 0}, "type": "DatetimeAxis", "id": "189c2f49-f50f-4b51-bc6d-84f286640e14"}, {"attributes": {"plot": {"type": "Plot", "id": "6c9241b0-fcec-44ac-986e-c7d60f0e1112"}, "id": "90514d9c-869d-49c8-8103-dc93f3c499d6", "doc": null}, "type": "ResizeTool", "id": "90514d9c-869d-49c8-8103-dc93f3c499d6"}];
    var modeltype = "PlotContext";
    var elementid = "5aa7e554-1134-4618-ab76-ca2dc5557c95";
    var plotID = "6c9241b0-fcec-44ac-986e-c7d60f0e1112";
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