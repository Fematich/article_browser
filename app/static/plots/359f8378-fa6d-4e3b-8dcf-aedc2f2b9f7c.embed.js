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

    var all_models = [{"attributes": {"plot": {"type": "Plot", "id": "359f8378-fa6d-4e3b-8dcf-aedc2f2b9f7c"}, "doc": null, "bounds": "auto", "dimension": 1, "location": "min", "axis_label": "# artikels", "id": "16c86c4d-1b46-4265-9b9a-0c79910d7e97"}, "type": "LinearAxis", "id": "16c86c4d-1b46-4265-9b9a-0c79910d7e97"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "0874fddc-e54a-4702-928e-fd1957563e1f"}, "columns": ["x"]}], "id": "4d8169d4-81d3-433f-90e5-a5ac351f2419", "doc": null}, "type": "DataRange1d", "id": "4d8169d4-81d3-433f-90e5-a5ac351f2419"}, {"attributes": {"plot": {"type": "Plot", "id": "359f8378-fa6d-4e3b-8dcf-aedc2f2b9f7c"}, "doc": null, "dimension": 0, "id": "e0f160b5-bff2-4bed-9765-6e7843eadba1"}, "type": "Grid", "id": "e0f160b5-bff2-4bed-9765-6e7843eadba1"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "4d8169d4-81d3-433f-90e5-a5ac351f2419"}, {"type": "DataRange1d", "id": "69033726-b503-41ad-81ab-604e70b25b42"}], "dimensions": ["width", "height"], "doc": null, "id": "6bb89949-1382-4579-a890-19813ef8b22b"}, "type": "PanTool", "id": "6bb89949-1382-4579-a890-19813ef8b22b"}, {"attributes": {"plot": {"type": "Plot", "id": "359f8378-fa6d-4e3b-8dcf-aedc2f2b9f7c"}, "doc": null, "bounds": "auto", "id": "62ef3486-3321-42b1-ae46-071dcdca2151", "location": "min", "formats": {"days": ["%m/%d/%Y"]}, "axis_label": "Datum", "dimension": 0}, "type": "DatetimeAxis", "id": "62ef3486-3321-42b1-ae46-071dcdca2151"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "4d8169d4-81d3-433f-90e5-a5ac351f2419"}, "axes": [], "title": "voorkomens", "y_range": {"type": "DataRange1d", "id": "69033726-b503-41ad-81ab-604e70b25b42"}, "outer_width": 400, "renderers": [{"type": "DatetimeAxis", "id": "62ef3486-3321-42b1-ae46-071dcdca2151"}, {"type": "LinearAxis", "id": "16c86c4d-1b46-4265-9b9a-0c79910d7e97"}, {"type": "Grid", "id": "e0f160b5-bff2-4bed-9765-6e7843eadba1"}, {"type": "Grid", "id": "017a9066-462e-4dbe-80c8-3aa2207d4411"}, {"type": "Glyph", "id": "fc45bcf4-82e6-4c39-9fa0-ab3126e4121d"}], "outer_height": 300, "width": 400, "doc": null, "canvas_height": 300, "id": "359f8378-fa6d-4e3b-8dcf-aedc2f2b9f7c", "height": 300, "tools": [{"type": "PanTool", "id": "6bb89949-1382-4579-a890-19813ef8b22b"}, {"type": "ZoomTool", "id": "8b923732-af83-47dc-8576-dfb2c0ca8369"}, {"type": "ResizeTool", "id": "b21e00c2-6aed-42fa-b1a6-889d167ea8e2"}], "canvas_width": 400}, "type": "Plot", "id": "359f8378-fa6d-4e3b-8dcf-aedc2f2b9f7c"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "4d8169d4-81d3-433f-90e5-a5ac351f2419"}, {"type": "DataRange1d", "id": "69033726-b503-41ad-81ab-604e70b25b42"}], "dimensions": ["width", "height"], "id": "8b923732-af83-47dc-8576-dfb2c0ca8369"}, "type": "ZoomTool", "id": "8b923732-af83-47dc-8576-dfb2c0ca8369"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "359f8378-fa6d-4e3b-8dcf-aedc2f2b9f7c"}], "id": "9a08e7be-4897-4eee-87b4-2a6d48acdc80"}, "type": "PlotContext", "id": "9a08e7be-4897-4eee-87b4-2a6d48acdc80"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [19, 58, 19, 9, 9, 10, 7, 8, 4, 1, 3, 2, 4, 5, 1, 1, 1, 1, 2, 2, 4, 4, 2, 2, 1, 1, 2, 2, 3, 1, 2, 2, 1, 1, 5, 2, 1], "x": [1313712000000.0, 1313798400000.0, 1313971200000.0, 1314057600000.0, 1314144000000.0, 1314230400000.0, 1314316800000.0, 1314403200000.0, 1314576000000.0, 1314662400000.0, 1314748800000.0, 1314921600000.0, 1315008000000.0, 1315180800000.0, 1315267200000.0, 1315872000000.0, 1316044800000.0, 1316217600000.0, 1316649600000.0, 1316736000000.0, 1317340800000.0, 1317427200000.0, 1317600000000.0, 1317945600000.0, 1318032000000.0, 1318204800000.0, 1318896000000.0, 1319068800000.0, 1319500800000.0, 1320278400000.0, 1320451200000.0, 1321056000000.0, 1321315200000.0, 1322438400000.0, 1323993600000.0, 1324944000000.0, 1325289600000.0]}, "id": "0874fddc-e54a-4702-928e-fd1957563e1f"}, "type": "ColumnDataSource", "id": "0874fddc-e54a-4702-928e-fd1957563e1f"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "0874fddc-e54a-4702-928e-fd1957563e1f"}, "doc": null, "id": "fc45bcf4-82e6-4c39-9fa0-ab3126e4121d", "xdata_range": {"type": "DataRange1d", "id": "4d8169d4-81d3-433f-90e5-a5ac351f2419"}, "ydata_range": {"type": "DataRange1d", "id": "69033726-b503-41ad-81ab-604e70b25b42"}, "glyphspec": {"line_color": {"value": "#1f77b4"}, "line_alpha": 1.0, "fill_color": "#1f77b4", "title": "voorkomens", "type": "line", "fill_alpha": 1.0, "height": 300, "width": 400, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "tools": "pan,zoom,resize", "x_axis_type": "datetime"}, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "line_width": 1, "angle_units": "deg", "type": "line", "y": {"units": "data", "field": "y"}, "line_alpha": 0.1, "start_angle_units": "deg", "valign": null, "radius_units": "screen", "visible": null, "length_units": "screen", "end_angle_units": "deg", "line_dash_offset": 0, "line_cap": "butt", "line_dash": [], "x": {"units": "data", "field": "x"}, "margin": null, "line_join": "miter", "halign": null}}, "type": "Glyph", "id": "fc45bcf4-82e6-4c39-9fa0-ab3126e4121d"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "0874fddc-e54a-4702-928e-fd1957563e1f"}, "columns": ["y"]}], "id": "69033726-b503-41ad-81ab-604e70b25b42", "doc": null}, "type": "DataRange1d", "id": "69033726-b503-41ad-81ab-604e70b25b42"}, {"attributes": {"plot": {"type": "Plot", "id": "359f8378-fa6d-4e3b-8dcf-aedc2f2b9f7c"}, "id": "b21e00c2-6aed-42fa-b1a6-889d167ea8e2", "doc": null}, "type": "ResizeTool", "id": "b21e00c2-6aed-42fa-b1a6-889d167ea8e2"}, {"attributes": {"plot": {"type": "Plot", "id": "359f8378-fa6d-4e3b-8dcf-aedc2f2b9f7c"}, "doc": null, "dimension": 1, "id": "017a9066-462e-4dbe-80c8-3aa2207d4411"}, "type": "Grid", "id": "017a9066-462e-4dbe-80c8-3aa2207d4411"}];
    var modeltype = "PlotContext";
    var elementid = "03670c7b-ccd7-4df6-b77a-47efd6c68706";
    var plotID = "359f8378-fa6d-4e3b-8dcf-aedc2f2b9f7c";
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