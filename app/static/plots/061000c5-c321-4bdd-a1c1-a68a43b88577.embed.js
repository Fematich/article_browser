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

    var all_models = [{"attributes": {"plot": {"type": "Plot", "id": "061000c5-c321-4bdd-a1c1-a68a43b88577"}, "doc": null, "dimension": 1, "id": "1638b0dc-17bc-44f3-8e6a-1b6504ceb3f8"}, "type": "Grid", "id": "1638b0dc-17bc-44f3-8e6a-1b6504ceb3f8"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "b4ea7ac1-7e62-4787-8063-1732845bc000"}, "doc": null, "id": "85cbc015-af7e-4fe5-a306-43e376b15840", "xdata_range": {"type": "DataRange1d", "id": "5da38665-5bf2-4443-927f-5a7be9b2e570"}, "ydata_range": {"type": "DataRange1d", "id": "0d0746a8-42d6-4d86-b032-3f9448767008"}, "glyphspec": {"line_color": {"value": "#1f77b4"}, "line_alpha": 1.0, "fill_color": "#1f77b4", "title": "voorkomens", "type": "line", "fill_alpha": 1.0, "height": 300, "width": 400, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "tools": "pan,zoom,resize", "x_axis_type": "datetime"}, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "line_width": 1, "angle_units": "deg", "type": "line", "y": {"units": "data", "field": "y"}, "line_alpha": 0.1, "start_angle_units": "deg", "valign": null, "radius_units": "screen", "visible": null, "length_units": "screen", "end_angle_units": "deg", "line_dash_offset": 0, "line_cap": "butt", "line_dash": [], "x": {"units": "data", "field": "x"}, "margin": null, "line_join": "miter", "halign": null}}, "type": "Glyph", "id": "85cbc015-af7e-4fe5-a306-43e376b15840"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "b4ea7ac1-7e62-4787-8063-1732845bc000"}, "columns": ["y"]}], "id": "0d0746a8-42d6-4d86-b032-3f9448767008", "doc": null}, "type": "DataRange1d", "id": "0d0746a8-42d6-4d86-b032-3f9448767008"}, {"attributes": {"plot": {"type": "Plot", "id": "061000c5-c321-4bdd-a1c1-a68a43b88577"}, "doc": null, "dimension": 0, "id": "859e6a18-165c-4c4e-b753-7259be91d26f"}, "type": "Grid", "id": "859e6a18-165c-4c4e-b753-7259be91d26f"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "5da38665-5bf2-4443-927f-5a7be9b2e570"}, "axes": [], "title": "voorkomens", "y_range": {"type": "DataRange1d", "id": "0d0746a8-42d6-4d86-b032-3f9448767008"}, "outer_width": 400, "renderers": [{"type": "DatetimeAxis", "id": "1d9be768-59c6-491b-a375-697aefe547cd"}, {"type": "LinearAxis", "id": "e9d0b425-cdd9-4c75-9a79-6eea5b509bc4"}, {"type": "Grid", "id": "859e6a18-165c-4c4e-b753-7259be91d26f"}, {"type": "Grid", "id": "1638b0dc-17bc-44f3-8e6a-1b6504ceb3f8"}, {"type": "Glyph", "id": "85cbc015-af7e-4fe5-a306-43e376b15840"}], "outer_height": 300, "width": 400, "doc": null, "canvas_height": 300, "id": "061000c5-c321-4bdd-a1c1-a68a43b88577", "height": 300, "tools": [{"type": "PanTool", "id": "d3876776-9a72-4c83-83f0-b0922a58ef89"}, {"type": "ZoomTool", "id": "b86a25ec-79d0-409d-b615-9c26c9292a40"}, {"type": "ResizeTool", "id": "d3af7249-9b13-4416-be14-90ba2968112c"}], "canvas_width": 400}, "type": "Plot", "id": "061000c5-c321-4bdd-a1c1-a68a43b88577"}, {"attributes": {"plot": {"type": "Plot", "id": "061000c5-c321-4bdd-a1c1-a68a43b88577"}, "doc": null, "bounds": "auto", "dimension": 1, "location": "min", "axis_label": "# artikels", "id": "e9d0b425-cdd9-4c75-9a79-6eea5b509bc4"}, "type": "LinearAxis", "id": "e9d0b425-cdd9-4c75-9a79-6eea5b509bc4"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "061000c5-c321-4bdd-a1c1-a68a43b88577"}], "id": "d91b410e-ee05-4a47-a0ec-9997ade6a0ef"}, "type": "PlotContext", "id": "d91b410e-ee05-4a47-a0ec-9997ade6a0ef"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "5da38665-5bf2-4443-927f-5a7be9b2e570"}, {"type": "DataRange1d", "id": "0d0746a8-42d6-4d86-b032-3f9448767008"}], "dimensions": ["width", "height"], "doc": null, "id": "d3876776-9a72-4c83-83f0-b0922a58ef89"}, "type": "PanTool", "id": "d3876776-9a72-4c83-83f0-b0922a58ef89"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [1, 2, 1, 3, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 4, 3, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 1, 1, 1, 3, 2, 1, 1, 2, 1, 1, 1, 1, 1, 3, 3, 1, 1, 2, 1, 2, 2, 2, 1, 2, 1, 1, 1, 1, 1, 1, 5, 3, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 5, 1, 1, 1, 1, 1, 2, 2, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 4, 1, 1, 3], "x": [1294876800000.0, 1295049600000.0, 1295222400000.0, 1295308800000.0, 1295568000000.0, 1295827200000.0, 1295913600000.0, 1296000000000.0, 1296172800000.0, 1296518400000.0, 1297036800000.0, 1297296000000.0, 1297382400000.0, 1297641600000.0, 1297728000000.0, 1297900800000.0, 1298592000000.0, 1298678400000.0, 1298937600000.0, 1299024000000.0, 1299110400000.0, 1299283200000.0, 1299456000000.0, 1299715200000.0, 1300233600000.0, 1300665600000.0, 1301011200000.0, 1301097600000.0, 1301270400000.0, 1301529600000.0, 1301616000000.0, 1301702400000.0, 1301961600000.0, 1302048000000.0, 1302825600000.0, 1302912000000.0, 1303430400000.0, 1303516800000.0, 1303776000000.0, 1303948800000.0, 1304380800000.0, 1304467200000.0, 1304726400000.0, 1304985600000.0, 1305158400000.0, 1305331200000.0, 1305763200000.0, 1306368000000.0, 1306454400000.0, 1306540800000.0, 1307404800000.0, 1307664000000.0, 1307750400000.0, 1308268800000.0, 1308614400000.0, 1308787200000.0, 1308960000000.0, 1309392000000.0, 1309478400000.0, 1309564800000.0, 1309737600000.0, 1310169600000.0, 1310774400000.0, 1311120000000.0, 1311292800000.0, 1311379200000.0, 1311897600000.0, 1312156800000.0, 1312848000000.0, 1313020800000.0, 1313107200000.0, 1313712000000.0, 1313798400000.0, 1314403200000.0, 1314835200000.0, 1314921600000.0, 1315267200000.0, 1315353600000.0, 1315440000000.0, 1316476800000.0, 1316736000000.0, 1316822400000.0, 1317254400000.0, 1317686400000.0, 1317772800000.0, 1318464000000.0, 1318809600000.0, 1319414400000.0, 1319500800000.0, 1319587200000.0, 1319673600000.0, 1321056000000.0, 1321574400000.0, 1321660800000.0, 1321920000000.0, 1322006400000.0, 1322092800000.0, 1322438400000.0, 1322697600000.0, 1322870400000.0, 1323302400000.0, 1323475200000.0, 1324080000000.0, 1324684800000.0, 1324944000000.0, 1325116800000.0, 1325289600000.0]}, "id": "b4ea7ac1-7e62-4787-8063-1732845bc000"}, "type": "ColumnDataSource", "id": "b4ea7ac1-7e62-4787-8063-1732845bc000"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "b4ea7ac1-7e62-4787-8063-1732845bc000"}, "columns": ["x"]}], "id": "5da38665-5bf2-4443-927f-5a7be9b2e570", "doc": null}, "type": "DataRange1d", "id": "5da38665-5bf2-4443-927f-5a7be9b2e570"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "5da38665-5bf2-4443-927f-5a7be9b2e570"}, {"type": "DataRange1d", "id": "0d0746a8-42d6-4d86-b032-3f9448767008"}], "dimensions": ["width", "height"], "id": "b86a25ec-79d0-409d-b615-9c26c9292a40"}, "type": "ZoomTool", "id": "b86a25ec-79d0-409d-b615-9c26c9292a40"}, {"attributes": {"plot": {"type": "Plot", "id": "061000c5-c321-4bdd-a1c1-a68a43b88577"}, "id": "d3af7249-9b13-4416-be14-90ba2968112c", "doc": null}, "type": "ResizeTool", "id": "d3af7249-9b13-4416-be14-90ba2968112c"}, {"attributes": {"plot": {"type": "Plot", "id": "061000c5-c321-4bdd-a1c1-a68a43b88577"}, "doc": null, "bounds": "auto", "id": "1d9be768-59c6-491b-a375-697aefe547cd", "location": "min", "formats": {"days": ["%m/%d/%Y"]}, "axis_label": "Datum", "dimension": 0}, "type": "DatetimeAxis", "id": "1d9be768-59c6-491b-a375-697aefe547cd"}];
    var modeltype = "PlotContext";
    var elementid = "9bed68f6-efad-459d-ba22-b240ad340ba5";
    var plotID = "061000c5-c321-4bdd-a1c1-a68a43b88577";
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