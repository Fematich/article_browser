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

    var all_models = [{"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "ba3545be-fd7a-4365-94f8-c1f5d042670a"}, {"type": "DataRange1d", "id": "7f93cc7c-2663-4e39-9fce-9b68a38ac6c7"}], "dimensions": ["width", "height"], "id": "cea2fb4b-40df-4829-ac9f-5d01d823d27a"}, "type": "ZoomTool", "id": "cea2fb4b-40df-4829-ac9f-5d01d823d27a"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "ba3545be-fd7a-4365-94f8-c1f5d042670a"}, "axes": [], "title": "voorkomens", "y_range": {"type": "DataRange1d", "id": "7f93cc7c-2663-4e39-9fce-9b68a38ac6c7"}, "outer_width": 400, "renderers": [{"type": "DatetimeAxis", "id": "14464400-8f91-4134-abbe-b2ffce0fc27e"}, {"type": "LinearAxis", "id": "3942828e-8b2f-48ce-92ca-66d7475ef285"}, {"type": "Grid", "id": "9e895402-b0cf-48f0-9fc8-365ccc480bf9"}, {"type": "Grid", "id": "2b73660e-320d-4d24-acd2-c86ca5a45c09"}, {"type": "Glyph", "id": "68e56dc0-4170-420b-928e-548d1dcbfee7"}], "outer_height": 300, "width": 400, "doc": null, "canvas_height": 300, "id": "90b696d8-7ec3-4521-88df-21c3bbff3d28", "height": 300, "tools": [{"type": "PanTool", "id": "0cc08a65-90d5-4831-a8ee-a1d6db7273f5"}, {"type": "ZoomTool", "id": "cea2fb4b-40df-4829-ac9f-5d01d823d27a"}, {"type": "ResizeTool", "id": "4ef81c25-931f-4c70-b04c-1525037090e9"}], "canvas_width": 400}, "type": "Plot", "id": "90b696d8-7ec3-4521-88df-21c3bbff3d28"}, {"attributes": {"plot": {"type": "Plot", "id": "90b696d8-7ec3-4521-88df-21c3bbff3d28"}, "doc": null, "bounds": "auto", "dimension": 1, "location": "min", "axis_label": "# artikels", "id": "3942828e-8b2f-48ce-92ca-66d7475ef285"}, "type": "LinearAxis", "id": "3942828e-8b2f-48ce-92ca-66d7475ef285"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "5cb6fa6e-7abb-442d-801c-8755fd822d19"}, "columns": ["y"]}], "id": "7f93cc7c-2663-4e39-9fce-9b68a38ac6c7", "doc": null}, "type": "DataRange1d", "id": "7f93cc7c-2663-4e39-9fce-9b68a38ac6c7"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "90b696d8-7ec3-4521-88df-21c3bbff3d28"}], "id": "b9887cb2-c795-49e0-9a57-a7754cea3109"}, "type": "PlotContext", "id": "b9887cb2-c795-49e0-9a57-a7754cea3109"}, {"attributes": {"plot": {"type": "Plot", "id": "90b696d8-7ec3-4521-88df-21c3bbff3d28"}, "doc": null, "dimension": 0, "id": "9e895402-b0cf-48f0-9fc8-365ccc480bf9"}, "type": "Grid", "id": "9e895402-b0cf-48f0-9fc8-365ccc480bf9"}, {"attributes": {"plot": {"type": "Plot", "id": "90b696d8-7ec3-4521-88df-21c3bbff3d28"}, "doc": null, "dimension": 1, "id": "2b73660e-320d-4d24-acd2-c86ca5a45c09"}, "type": "Grid", "id": "2b73660e-320d-4d24-acd2-c86ca5a45c09"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [1, 1, 1, 1, 1, 1, 40, 23, 8, 2, 11, 10, 15, 5, 10, 2, 5, 2, 4, 1, 1, 2, 2, 1, 1, 1, 1, 3, 9, 9, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 2, 1, 1, 3, 1, 1, 1, 1, 1, 1], "x": [1295049600000.0, 1296518400000.0, 1300147200000.0, 1303171200000.0, 1303516800000.0, 1304467200000.0, 1306454400000.0, 1306540800000.0, 1306713600000.0, 1306800000000.0, 1306886400000.0, 1307059200000.0, 1307145600000.0, 1307318400000.0, 1307404800000.0, 1307491200000.0, 1307577600000.0, 1307664000000.0, 1307750400000.0, 1308009600000.0, 1308182400000.0, 1308268800000.0, 1308355200000.0, 1308873600000.0, 1308960000000.0, 1309305600000.0, 1309478400000.0, 1309737600000.0, 1309824000000.0, 1309910400000.0, 1309996800000.0, 1310083200000.0, 1310428800000.0, 1310774400000.0, 1311292800000.0, 1311984000000.0, 1312416000000.0, 1313971200000.0, 1314144000000.0, 1314316800000.0, 1315353600000.0, 1316563200000.0, 1317945600000.0, 1318377600000.0, 1318464000000.0, 1319068800000.0, 1320192000000.0, 1320278400000.0, 1320364800000.0, 1320796800000.0, 1322784000000.0, 1323043200000.0, 1323475200000.0, 1324857600000.0, 1325116800000.0, 1325289600000.0]}, "id": "5cb6fa6e-7abb-442d-801c-8755fd822d19"}, "type": "ColumnDataSource", "id": "5cb6fa6e-7abb-442d-801c-8755fd822d19"}, {"attributes": {"plot": {"type": "Plot", "id": "90b696d8-7ec3-4521-88df-21c3bbff3d28"}, "id": "4ef81c25-931f-4c70-b04c-1525037090e9", "doc": null}, "type": "ResizeTool", "id": "4ef81c25-931f-4c70-b04c-1525037090e9"}, {"attributes": {"plot": {"type": "Plot", "id": "90b696d8-7ec3-4521-88df-21c3bbff3d28"}, "doc": null, "bounds": "auto", "id": "14464400-8f91-4134-abbe-b2ffce0fc27e", "location": "min", "formats": {"days": ["%m/%d/%Y"]}, "axis_label": "Datum", "dimension": 0}, "type": "DatetimeAxis", "id": "14464400-8f91-4134-abbe-b2ffce0fc27e"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "5cb6fa6e-7abb-442d-801c-8755fd822d19"}, "columns": ["x"]}], "id": "ba3545be-fd7a-4365-94f8-c1f5d042670a", "doc": null}, "type": "DataRange1d", "id": "ba3545be-fd7a-4365-94f8-c1f5d042670a"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "ba3545be-fd7a-4365-94f8-c1f5d042670a"}, {"type": "DataRange1d", "id": "7f93cc7c-2663-4e39-9fce-9b68a38ac6c7"}], "dimensions": ["width", "height"], "doc": null, "id": "0cc08a65-90d5-4831-a8ee-a1d6db7273f5"}, "type": "PanTool", "id": "0cc08a65-90d5-4831-a8ee-a1d6db7273f5"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "5cb6fa6e-7abb-442d-801c-8755fd822d19"}, "doc": null, "id": "68e56dc0-4170-420b-928e-548d1dcbfee7", "xdata_range": {"type": "DataRange1d", "id": "ba3545be-fd7a-4365-94f8-c1f5d042670a"}, "ydata_range": {"type": "DataRange1d", "id": "7f93cc7c-2663-4e39-9fce-9b68a38ac6c7"}, "glyphspec": {"line_color": {"value": "#1f77b4"}, "line_alpha": 1.0, "fill_color": "#1f77b4", "title": "voorkomens", "type": "line", "fill_alpha": 1.0, "height": 300, "width": 400, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "tools": "pan,zoom,resize", "x_axis_type": "datetime"}, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "line_width": 1, "angle_units": "deg", "type": "line", "y": {"units": "data", "field": "y"}, "line_alpha": 0.1, "start_angle_units": "deg", "valign": null, "radius_units": "screen", "visible": null, "length_units": "screen", "end_angle_units": "deg", "line_dash_offset": 0, "line_cap": "butt", "line_dash": [], "x": {"units": "data", "field": "x"}, "margin": null, "line_join": "miter", "halign": null}}, "type": "Glyph", "id": "68e56dc0-4170-420b-928e-548d1dcbfee7"}];
    var modeltype = "PlotContext";
    var elementid = "01b2b6da-520d-49c6-8c51-c5cf0a334826";
    var plotID = "90b696d8-7ec3-4521-88df-21c3bbff3d28";
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