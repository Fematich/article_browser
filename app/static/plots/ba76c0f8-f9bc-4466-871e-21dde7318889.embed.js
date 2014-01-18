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

    var all_models = [{"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "a4e63096-10ba-4faa-9373-b66d5148b067"}, {"type": "DataRange1d", "id": "2a845b3d-c8cc-42fc-a98c-d12c816dca60"}], "dimensions": ["width", "height"], "id": "28f1cfd5-144d-4b08-9afe-af920cc3d4c9"}, "type": "ZoomTool", "id": "28f1cfd5-144d-4b08-9afe-af920cc3d4c9"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [1, 2, 1, 3, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 4, 3, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 1, 1, 1, 3, 2, 1, 1, 2, 1, 1, 1, 1, 1, 3, 3, 1, 1, 2, 1, 2, 2, 2, 1, 2, 1, 1, 1, 1, 1, 1, 5, 3, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 5, 1, 1, 1, 1, 1, 2, 2, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 4, 1, 1, 3], "x": [1294876800000.0, 1295049600000.0, 1295222400000.0, 1295308800000.0, 1295568000000.0, 1295827200000.0, 1295913600000.0, 1296000000000.0, 1296172800000.0, 1296518400000.0, 1297036800000.0, 1297296000000.0, 1297382400000.0, 1297641600000.0, 1297728000000.0, 1297900800000.0, 1298592000000.0, 1298678400000.0, 1298937600000.0, 1299024000000.0, 1299110400000.0, 1299283200000.0, 1299456000000.0, 1299715200000.0, 1300233600000.0, 1300665600000.0, 1301011200000.0, 1301097600000.0, 1301270400000.0, 1301529600000.0, 1301616000000.0, 1301702400000.0, 1301961600000.0, 1302048000000.0, 1302825600000.0, 1302912000000.0, 1303430400000.0, 1303516800000.0, 1303776000000.0, 1303948800000.0, 1304380800000.0, 1304467200000.0, 1304726400000.0, 1304985600000.0, 1305158400000.0, 1305331200000.0, 1305763200000.0, 1306368000000.0, 1306454400000.0, 1306540800000.0, 1307404800000.0, 1307664000000.0, 1307750400000.0, 1308268800000.0, 1308614400000.0, 1308787200000.0, 1308960000000.0, 1309392000000.0, 1309478400000.0, 1309564800000.0, 1309737600000.0, 1310169600000.0, 1310774400000.0, 1311120000000.0, 1311292800000.0, 1311379200000.0, 1311897600000.0, 1312156800000.0, 1312848000000.0, 1313020800000.0, 1313107200000.0, 1313712000000.0, 1313798400000.0, 1314403200000.0, 1314835200000.0, 1314921600000.0, 1315267200000.0, 1315353600000.0, 1315440000000.0, 1316476800000.0, 1316736000000.0, 1316822400000.0, 1317254400000.0, 1317686400000.0, 1317772800000.0, 1318464000000.0, 1318809600000.0, 1319414400000.0, 1319500800000.0, 1319587200000.0, 1319673600000.0, 1321056000000.0, 1321574400000.0, 1321660800000.0, 1321920000000.0, 1322006400000.0, 1322092800000.0, 1322438400000.0, 1322697600000.0, 1322870400000.0, 1323302400000.0, 1323475200000.0, 1324080000000.0, 1324684800000.0, 1324944000000.0, 1325116800000.0, 1325289600000.0]}, "id": "e07720ff-e56b-4676-8a6d-971c20cd53f3"}, "type": "ColumnDataSource", "id": "e07720ff-e56b-4676-8a6d-971c20cd53f3"}, {"attributes": {"plot": {"type": "Plot", "id": "ba76c0f8-f9bc-4466-871e-21dde7318889"}, "doc": null, "bounds": "auto", "id": "aae405f9-824b-4981-992e-5a9f960d3ecb", "location": "min", "formats": {"days": ["%m/%d/%Y"]}, "axis_label": "Datum", "dimension": 0}, "type": "DatetimeAxis", "id": "aae405f9-824b-4981-992e-5a9f960d3ecb"}, {"attributes": {"plot": {"type": "Plot", "id": "ba76c0f8-f9bc-4466-871e-21dde7318889"}, "doc": null, "bounds": "auto", "dimension": 1, "location": "min", "axis_label": "# artikels", "id": "699fa45f-4b67-4404-a5e2-52f22510a698"}, "type": "LinearAxis", "id": "699fa45f-4b67-4404-a5e2-52f22510a698"}, {"attributes": {"plot": {"type": "Plot", "id": "ba76c0f8-f9bc-4466-871e-21dde7318889"}, "doc": null, "dimension": 0, "id": "6574e66c-0057-44c2-8d25-bbdecc9207d4"}, "type": "Grid", "id": "6574e66c-0057-44c2-8d25-bbdecc9207d4"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "e07720ff-e56b-4676-8a6d-971c20cd53f3"}, "columns": ["y"]}], "id": "2a845b3d-c8cc-42fc-a98c-d12c816dca60", "doc": null}, "type": "DataRange1d", "id": "2a845b3d-c8cc-42fc-a98c-d12c816dca60"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "a4e63096-10ba-4faa-9373-b66d5148b067"}, {"type": "DataRange1d", "id": "2a845b3d-c8cc-42fc-a98c-d12c816dca60"}], "dimensions": ["width", "height"], "doc": null, "id": "8d366fce-0829-4ad1-8a29-0b32890d1ae8"}, "type": "PanTool", "id": "8d366fce-0829-4ad1-8a29-0b32890d1ae8"}, {"attributes": {"plot": {"type": "Plot", "id": "ba76c0f8-f9bc-4466-871e-21dde7318889"}, "id": "b30025f6-e284-4f0d-8d54-1b5609fc59d2", "doc": null}, "type": "ResizeTool", "id": "b30025f6-e284-4f0d-8d54-1b5609fc59d2"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "e07720ff-e56b-4676-8a6d-971c20cd53f3"}, "doc": null, "id": "96ebecd8-2ae3-4a65-8615-82444a097d6e", "xdata_range": {"type": "DataRange1d", "id": "a4e63096-10ba-4faa-9373-b66d5148b067"}, "ydata_range": {"type": "DataRange1d", "id": "2a845b3d-c8cc-42fc-a98c-d12c816dca60"}, "glyphspec": {"line_color": {"value": "#1f77b4"}, "line_alpha": 1.0, "fill_color": "#1f77b4", "title": "voorkomens", "type": "line", "fill_alpha": 1.0, "height": 300, "width": 400, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "tools": "pan,zoom,resize", "x_axis_type": "datetime"}, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "line_width": 1, "angle_units": "deg", "type": "line", "y": {"units": "data", "field": "y"}, "line_alpha": 0.1, "start_angle_units": "deg", "valign": null, "radius_units": "screen", "visible": null, "length_units": "screen", "end_angle_units": "deg", "line_dash_offset": 0, "line_cap": "butt", "line_dash": [], "x": {"units": "data", "field": "x"}, "margin": null, "line_join": "miter", "halign": null}}, "type": "Glyph", "id": "96ebecd8-2ae3-4a65-8615-82444a097d6e"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "a4e63096-10ba-4faa-9373-b66d5148b067"}, "axes": [], "title": "voorkomens", "y_range": {"type": "DataRange1d", "id": "2a845b3d-c8cc-42fc-a98c-d12c816dca60"}, "outer_width": 400, "renderers": [{"type": "DatetimeAxis", "id": "aae405f9-824b-4981-992e-5a9f960d3ecb"}, {"type": "LinearAxis", "id": "699fa45f-4b67-4404-a5e2-52f22510a698"}, {"type": "Grid", "id": "6574e66c-0057-44c2-8d25-bbdecc9207d4"}, {"type": "Grid", "id": "5bdb57f0-3777-4bd8-8747-f01992690624"}, {"type": "Glyph", "id": "96ebecd8-2ae3-4a65-8615-82444a097d6e"}], "outer_height": 300, "width": 400, "doc": null, "canvas_height": 300, "id": "ba76c0f8-f9bc-4466-871e-21dde7318889", "height": 300, "tools": [{"type": "PanTool", "id": "8d366fce-0829-4ad1-8a29-0b32890d1ae8"}, {"type": "ZoomTool", "id": "28f1cfd5-144d-4b08-9afe-af920cc3d4c9"}, {"type": "ResizeTool", "id": "b30025f6-e284-4f0d-8d54-1b5609fc59d2"}], "canvas_width": 400}, "type": "Plot", "id": "ba76c0f8-f9bc-4466-871e-21dde7318889"}, {"attributes": {"plot": {"type": "Plot", "id": "ba76c0f8-f9bc-4466-871e-21dde7318889"}, "doc": null, "dimension": 1, "id": "5bdb57f0-3777-4bd8-8747-f01992690624"}, "type": "Grid", "id": "5bdb57f0-3777-4bd8-8747-f01992690624"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "ba76c0f8-f9bc-4466-871e-21dde7318889"}], "id": "26aaa8af-bc41-45c0-a132-ca6f53c29c60"}, "type": "PlotContext", "id": "26aaa8af-bc41-45c0-a132-ca6f53c29c60"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "e07720ff-e56b-4676-8a6d-971c20cd53f3"}, "columns": ["x"]}], "id": "a4e63096-10ba-4faa-9373-b66d5148b067", "doc": null}, "type": "DataRange1d", "id": "a4e63096-10ba-4faa-9373-b66d5148b067"}];
    var modeltype = "PlotContext";
    var elementid = "ef88ecab-f37f-4a1e-970c-3e415f6a6968";
    var plotID = "ba76c0f8-f9bc-4466-871e-21dde7318889";
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