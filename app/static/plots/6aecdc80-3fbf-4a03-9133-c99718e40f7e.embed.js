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

    var all_models = [{"attributes": {"plot": {"type": "Plot", "id": "6aecdc80-3fbf-4a03-9133-c99718e40f7e"}, "doc": null, "dimension": 0, "id": "73667ee5-bd65-421c-a7e1-a82130b7e46b"}, "type": "Grid", "id": "73667ee5-bd65-421c-a7e1-a82130b7e46b"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "7ecb5c47-db34-42fd-b244-5e28953f8e31"}, "doc": null, "id": "5333644b-8db2-4c15-a44f-8c12541bbf0a", "xdata_range": {"type": "DataRange1d", "id": "8a3076ef-1d13-47f1-8236-40d405af2ee3"}, "ydata_range": {"type": "DataRange1d", "id": "1dbed8f9-606e-468e-a7ff-8168db8acda5"}, "glyphspec": {"line_color": {"value": "#1f77b4"}, "line_alpha": 1.0, "fill_color": "#1f77b4", "title": "voorkomens", "type": "line", "fill_alpha": 1.0, "height": 300, "width": 400, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "tools": "pan,zoom,resize", "x_axis_type": "datetime"}, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "line_width": 1, "angle_units": "deg", "type": "line", "y": {"units": "data", "field": "y"}, "line_alpha": 0.1, "start_angle_units": "deg", "valign": null, "radius_units": "screen", "visible": null, "length_units": "screen", "end_angle_units": "deg", "line_dash_offset": 0, "line_cap": "butt", "line_dash": [], "x": {"units": "data", "field": "x"}, "margin": null, "line_join": "miter", "halign": null}}, "type": "Glyph", "id": "5333644b-8db2-4c15-a44f-8c12541bbf0a"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "8a3076ef-1d13-47f1-8236-40d405af2ee3"}, {"type": "DataRange1d", "id": "1dbed8f9-606e-468e-a7ff-8168db8acda5"}], "dimensions": ["width", "height"], "doc": null, "id": "fb3526f9-89cc-44bc-bfc1-404619e14072"}, "type": "PanTool", "id": "fb3526f9-89cc-44bc-bfc1-404619e14072"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "6aecdc80-3fbf-4a03-9133-c99718e40f7e"}], "id": "9e1563ce-766a-4245-9a8d-3ad5e8eb6b9f"}, "type": "PlotContext", "id": "9e1563ce-766a-4245-9a8d-3ad5e8eb6b9f"}, {"attributes": {"plot": {"type": "Plot", "id": "6aecdc80-3fbf-4a03-9133-c99718e40f7e"}, "doc": null, "bounds": "auto", "dimension": 1, "location": "min", "axis_label": "# artikels", "id": "df5ca485-d7bd-4bcb-9654-8195a145f206"}, "type": "LinearAxis", "id": "df5ca485-d7bd-4bcb-9654-8195a145f206"}, {"attributes": {"plot": {"type": "Plot", "id": "6aecdc80-3fbf-4a03-9133-c99718e40f7e"}, "doc": null, "bounds": "auto", "id": "2300a3be-bf45-42da-83bb-c826acc1dd6d", "location": "min", "formats": {"days": ["%m/%d/%Y"]}, "axis_label": "Datum", "dimension": 0}, "type": "DatetimeAxis", "id": "2300a3be-bf45-42da-83bb-c826acc1dd6d"}, {"attributes": {"plot": {"type": "Plot", "id": "6aecdc80-3fbf-4a03-9133-c99718e40f7e"}, "doc": null, "dimension": 1, "id": "28260617-1a6b-44a3-b04f-69431f923588"}, "type": "Grid", "id": "28260617-1a6b-44a3-b04f-69431f923588"}, {"attributes": {"plot": {"type": "Plot", "id": "6aecdc80-3fbf-4a03-9133-c99718e40f7e"}, "id": "9a7c918e-b7e4-4323-85cd-bcb97820e3e2", "doc": null}, "type": "ResizeTool", "id": "9a7c918e-b7e4-4323-85cd-bcb97820e3e2"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "7ecb5c47-db34-42fd-b244-5e28953f8e31"}, "columns": ["y"]}], "id": "1dbed8f9-606e-468e-a7ff-8168db8acda5", "doc": null}, "type": "DataRange1d", "id": "1dbed8f9-606e-468e-a7ff-8168db8acda5"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "7ecb5c47-db34-42fd-b244-5e28953f8e31"}, "columns": ["x"]}], "id": "8a3076ef-1d13-47f1-8236-40d405af2ee3", "doc": null}, "type": "DataRange1d", "id": "8a3076ef-1d13-47f1-8236-40d405af2ee3"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [1, 1, 1, 1, 1, 31, 19, 6, 2, 9, 10, 13, 5, 9, 1, 3, 1, 2, 1, 1, 2, 1, 1, 1, 3, 7, 9, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1], "x": [1295049600000.0, 1296518400000.0, 1300147200000.0, 1303171200000.0, 1304467200000.0, 1306454400000.0, 1306540800000.0, 1306713600000.0, 1306800000000.0, 1306886400000.0, 1307059200000.0, 1307145600000.0, 1307318400000.0, 1307404800000.0, 1307491200000.0, 1307577600000.0, 1307664000000.0, 1307750400000.0, 1308182400000.0, 1308268800000.0, 1308355200000.0, 1308960000000.0, 1309305600000.0, 1309478400000.0, 1309737600000.0, 1309824000000.0, 1309910400000.0, 1309996800000.0, 1310083200000.0, 1310428800000.0, 1310774400000.0, 1311292800000.0, 1311984000000.0, 1312416000000.0, 1314144000000.0, 1314316800000.0, 1315353600000.0, 1316563200000.0, 1318377600000.0, 1318464000000.0, 1319068800000.0, 1320278400000.0, 1320796800000.0, 1322784000000.0, 1323043200000.0, 1323475200000.0, 1325116800000.0, 1325289600000.0]}, "id": "7ecb5c47-db34-42fd-b244-5e28953f8e31"}, "type": "ColumnDataSource", "id": "7ecb5c47-db34-42fd-b244-5e28953f8e31"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "8a3076ef-1d13-47f1-8236-40d405af2ee3"}, {"type": "DataRange1d", "id": "1dbed8f9-606e-468e-a7ff-8168db8acda5"}], "dimensions": ["width", "height"], "id": "e9fefde4-4d90-401d-a765-0b077ba24713"}, "type": "ZoomTool", "id": "e9fefde4-4d90-401d-a765-0b077ba24713"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "8a3076ef-1d13-47f1-8236-40d405af2ee3"}, "axes": [], "title": "voorkomens", "y_range": {"type": "DataRange1d", "id": "1dbed8f9-606e-468e-a7ff-8168db8acda5"}, "outer_width": 400, "renderers": [{"type": "DatetimeAxis", "id": "2300a3be-bf45-42da-83bb-c826acc1dd6d"}, {"type": "LinearAxis", "id": "df5ca485-d7bd-4bcb-9654-8195a145f206"}, {"type": "Grid", "id": "73667ee5-bd65-421c-a7e1-a82130b7e46b"}, {"type": "Grid", "id": "28260617-1a6b-44a3-b04f-69431f923588"}, {"type": "Glyph", "id": "5333644b-8db2-4c15-a44f-8c12541bbf0a"}], "outer_height": 300, "width": 400, "doc": null, "canvas_height": 300, "id": "6aecdc80-3fbf-4a03-9133-c99718e40f7e", "height": 300, "tools": [{"type": "PanTool", "id": "fb3526f9-89cc-44bc-bfc1-404619e14072"}, {"type": "ZoomTool", "id": "e9fefde4-4d90-401d-a765-0b077ba24713"}, {"type": "ResizeTool", "id": "9a7c918e-b7e4-4323-85cd-bcb97820e3e2"}], "canvas_width": 400}, "type": "Plot", "id": "6aecdc80-3fbf-4a03-9133-c99718e40f7e"}];
    var modeltype = "PlotContext";
    var elementid = "c32324e7-1b8b-46c3-970f-b1bc84cd7d2d";
    var plotID = "6aecdc80-3fbf-4a03-9133-c99718e40f7e";
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