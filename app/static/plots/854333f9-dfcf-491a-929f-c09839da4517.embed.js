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

    var all_models = [{"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "0c0463e6-e443-4d20-852f-d7dd14189d83"}, "columns": ["y"]}], "id": "66f435df-6350-4a4d-85c1-4bdc74aaa526", "doc": null}, "type": "DataRange1d", "id": "66f435df-6350-4a4d-85c1-4bdc74aaa526"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "854333f9-dfcf-491a-929f-c09839da4517"}], "id": "d7004ea4-5024-480b-b623-977a0c302c04"}, "type": "PlotContext", "id": "d7004ea4-5024-480b-b623-977a0c302c04"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "49e122d3-5d7d-4025-9593-c34a0c243f97"}, "axes": [], "title": "voorkomens", "y_range": {"type": "DataRange1d", "id": "66f435df-6350-4a4d-85c1-4bdc74aaa526"}, "outer_width": 400, "renderers": [{"type": "DatetimeAxis", "id": "7a8c549a-4cda-4f30-93e2-8493e6e1c966"}, {"type": "LinearAxis", "id": "1544da5c-f09b-4dfd-8086-68ea53445c08"}, {"type": "Grid", "id": "ac781697-fe8e-459e-8d99-868af53a2e9b"}, {"type": "Grid", "id": "b56d3109-c06f-4c92-a726-04c45aae04f0"}, {"type": "Glyph", "id": "e35b1bed-195a-40f8-b85c-6f8df356f222"}], "outer_height": 300, "width": 400, "doc": null, "canvas_height": 300, "id": "854333f9-dfcf-491a-929f-c09839da4517", "height": 300, "tools": [{"type": "PanTool", "id": "c3bf23df-0e6f-4aad-be3d-5bb0d4826b77"}, {"type": "ZoomTool", "id": "f5eb7dc7-49cb-457b-b415-5b5746897fce"}, {"type": "ResizeTool", "id": "fe8f85ae-a3f1-45d7-b5b3-a94a1da45569"}], "canvas_width": 400}, "type": "Plot", "id": "854333f9-dfcf-491a-929f-c09839da4517"}, {"attributes": {"plot": {"type": "Plot", "id": "854333f9-dfcf-491a-929f-c09839da4517"}, "doc": null, "bounds": "auto", "dimension": 1, "location": "min", "axis_label": "# artikels", "id": "1544da5c-f09b-4dfd-8086-68ea53445c08"}, "type": "LinearAxis", "id": "1544da5c-f09b-4dfd-8086-68ea53445c08"}, {"attributes": {"plot": {"type": "Plot", "id": "854333f9-dfcf-491a-929f-c09839da4517"}, "doc": null, "dimension": 0, "id": "ac781697-fe8e-459e-8d99-868af53a2e9b"}, "type": "Grid", "id": "ac781697-fe8e-459e-8d99-868af53a2e9b"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "0c0463e6-e443-4d20-852f-d7dd14189d83"}, "doc": null, "id": "e35b1bed-195a-40f8-b85c-6f8df356f222", "xdata_range": {"type": "DataRange1d", "id": "49e122d3-5d7d-4025-9593-c34a0c243f97"}, "ydata_range": {"type": "DataRange1d", "id": "66f435df-6350-4a4d-85c1-4bdc74aaa526"}, "glyphspec": {"line_color": {"value": "#1f77b4"}, "line_alpha": 1.0, "fill_color": "#1f77b4", "title": "voorkomens", "type": "line", "fill_alpha": 1.0, "height": 300, "width": 400, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "tools": "pan,zoom,resize", "x_axis_type": "datetime"}, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "line_width": 1, "angle_units": "deg", "type": "line", "y": {"units": "data", "field": "y"}, "line_alpha": 0.1, "start_angle_units": "deg", "valign": null, "radius_units": "screen", "visible": null, "length_units": "screen", "end_angle_units": "deg", "line_dash_offset": 0, "line_cap": "butt", "line_dash": [], "x": {"units": "data", "field": "x"}, "margin": null, "line_join": "miter", "halign": null}}, "type": "Glyph", "id": "e35b1bed-195a-40f8-b85c-6f8df356f222"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "0c0463e6-e443-4d20-852f-d7dd14189d83"}, "columns": ["x"]}], "id": "49e122d3-5d7d-4025-9593-c34a0c243f97", "doc": null}, "type": "DataRange1d", "id": "49e122d3-5d7d-4025-9593-c34a0c243f97"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "49e122d3-5d7d-4025-9593-c34a0c243f97"}, {"type": "DataRange1d", "id": "66f435df-6350-4a4d-85c1-4bdc74aaa526"}], "dimensions": ["width", "height"], "doc": null, "id": "c3bf23df-0e6f-4aad-be3d-5bb0d4826b77"}, "type": "PanTool", "id": "c3bf23df-0e6f-4aad-be3d-5bb0d4826b77"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [1, 2, 1, 3, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 4, 3, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 1, 1, 1, 3, 2, 1, 1, 2, 1, 1, 1, 1, 1, 3, 3, 1, 1, 2, 1, 2, 2, 2, 1, 2, 1, 1, 1, 1, 1, 1, 5, 3, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 5, 1, 1, 1, 1, 1, 2, 2, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 4, 1, 1, 3], "x": [1294876800000.0, 1295049600000.0, 1295222400000.0, 1295308800000.0, 1295568000000.0, 1295827200000.0, 1295913600000.0, 1296000000000.0, 1296172800000.0, 1296518400000.0, 1297036800000.0, 1297296000000.0, 1297382400000.0, 1297641600000.0, 1297728000000.0, 1297900800000.0, 1298592000000.0, 1298678400000.0, 1298937600000.0, 1299024000000.0, 1299110400000.0, 1299283200000.0, 1299456000000.0, 1299715200000.0, 1300233600000.0, 1300665600000.0, 1301011200000.0, 1301097600000.0, 1301270400000.0, 1301529600000.0, 1301616000000.0, 1301702400000.0, 1301961600000.0, 1302048000000.0, 1302825600000.0, 1302912000000.0, 1303430400000.0, 1303516800000.0, 1303776000000.0, 1303948800000.0, 1304380800000.0, 1304467200000.0, 1304726400000.0, 1304985600000.0, 1305158400000.0, 1305331200000.0, 1305763200000.0, 1306368000000.0, 1306454400000.0, 1306540800000.0, 1307404800000.0, 1307664000000.0, 1307750400000.0, 1308268800000.0, 1308614400000.0, 1308787200000.0, 1308960000000.0, 1309392000000.0, 1309478400000.0, 1309564800000.0, 1309737600000.0, 1310169600000.0, 1310774400000.0, 1311120000000.0, 1311292800000.0, 1311379200000.0, 1311897600000.0, 1312156800000.0, 1312848000000.0, 1313020800000.0, 1313107200000.0, 1313712000000.0, 1313798400000.0, 1314403200000.0, 1314835200000.0, 1314921600000.0, 1315267200000.0, 1315353600000.0, 1315440000000.0, 1316476800000.0, 1316736000000.0, 1316822400000.0, 1317254400000.0, 1317686400000.0, 1317772800000.0, 1318464000000.0, 1318809600000.0, 1319414400000.0, 1319500800000.0, 1319587200000.0, 1319673600000.0, 1321056000000.0, 1321574400000.0, 1321660800000.0, 1321920000000.0, 1322006400000.0, 1322092800000.0, 1322438400000.0, 1322697600000.0, 1322870400000.0, 1323302400000.0, 1323475200000.0, 1324080000000.0, 1324684800000.0, 1324944000000.0, 1325116800000.0, 1325289600000.0]}, "id": "0c0463e6-e443-4d20-852f-d7dd14189d83"}, "type": "ColumnDataSource", "id": "0c0463e6-e443-4d20-852f-d7dd14189d83"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "49e122d3-5d7d-4025-9593-c34a0c243f97"}, {"type": "DataRange1d", "id": "66f435df-6350-4a4d-85c1-4bdc74aaa526"}], "dimensions": ["width", "height"], "id": "f5eb7dc7-49cb-457b-b415-5b5746897fce"}, "type": "ZoomTool", "id": "f5eb7dc7-49cb-457b-b415-5b5746897fce"}, {"attributes": {"plot": {"type": "Plot", "id": "854333f9-dfcf-491a-929f-c09839da4517"}, "doc": null, "dimension": 1, "id": "b56d3109-c06f-4c92-a726-04c45aae04f0"}, "type": "Grid", "id": "b56d3109-c06f-4c92-a726-04c45aae04f0"}, {"attributes": {"plot": {"type": "Plot", "id": "854333f9-dfcf-491a-929f-c09839da4517"}, "doc": null, "bounds": "auto", "id": "7a8c549a-4cda-4f30-93e2-8493e6e1c966", "location": "min", "formats": {"days": ["%m/%d/%Y"]}, "axis_label": "Datum", "dimension": 0}, "type": "DatetimeAxis", "id": "7a8c549a-4cda-4f30-93e2-8493e6e1c966"}, {"attributes": {"plot": {"type": "Plot", "id": "854333f9-dfcf-491a-929f-c09839da4517"}, "id": "fe8f85ae-a3f1-45d7-b5b3-a94a1da45569", "doc": null}, "type": "ResizeTool", "id": "fe8f85ae-a3f1-45d7-b5b3-a94a1da45569"}];
    var modeltype = "PlotContext";
    var elementid = "bacdae92-6db9-40dd-96e5-683063f9b1f6";
    var plotID = "854333f9-dfcf-491a-929f-c09839da4517";
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