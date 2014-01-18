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

    var all_models = [{"attributes": {"plot": {"type": "Plot", "id": "98b582fa-018b-4f42-88d9-b7301892789c"}, "doc": null, "bounds": "auto", "id": "95f60e48-4cf5-43fc-8a30-cd677be2ec6c", "location": "min", "formats": {"days": ["%m/%d/%Y"]}, "axis_label": "Datum", "dimension": 0}, "type": "DatetimeAxis", "id": "95f60e48-4cf5-43fc-8a30-cd677be2ec6c"}, {"attributes": {"plot": {"type": "Plot", "id": "98b582fa-018b-4f42-88d9-b7301892789c"}, "id": "d39311d0-f727-455a-bc68-d7e8328c6602", "doc": null}, "type": "ResizeTool", "id": "d39311d0-f727-455a-bc68-d7e8328c6602"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "df3d9d88-9a7f-468b-8ed7-71a086e798ee"}, {"type": "DataRange1d", "id": "70abc8ab-65a2-404f-bd39-afe8cc2ea373"}], "dimensions": ["width", "height"], "doc": null, "id": "7e9f9530-0773-4608-ad41-afc68dccc413"}, "type": "PanTool", "id": "7e9f9530-0773-4608-ad41-afc68dccc413"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "df3d9d88-9a7f-468b-8ed7-71a086e798ee"}, "axes": [], "title": "voorkomens", "y_range": {"type": "DataRange1d", "id": "70abc8ab-65a2-404f-bd39-afe8cc2ea373"}, "outer_width": 400, "renderers": [{"type": "DatetimeAxis", "id": "95f60e48-4cf5-43fc-8a30-cd677be2ec6c"}, {"type": "LinearAxis", "id": "c5e66c00-9850-4569-8a81-c0d858ef7584"}, {"type": "Grid", "id": "d8cd18f6-67e7-458a-b344-ff52a79fa623"}, {"type": "Grid", "id": "301c9505-7822-4705-baa8-86b1bef6e25b"}, {"type": "Glyph", "id": "6cadb95c-6253-46b7-a8a3-f84fc85bea1e"}], "outer_height": 300, "width": 400, "doc": null, "canvas_height": 300, "id": "98b582fa-018b-4f42-88d9-b7301892789c", "height": 300, "tools": [{"type": "PanTool", "id": "7e9f9530-0773-4608-ad41-afc68dccc413"}, {"type": "ZoomTool", "id": "2ff312ef-0dcc-478a-9eb8-b5b5a0df9656"}, {"type": "ResizeTool", "id": "d39311d0-f727-455a-bc68-d7e8328c6602"}], "canvas_width": 400}, "type": "Plot", "id": "98b582fa-018b-4f42-88d9-b7301892789c"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "958a7f00-941b-4eb0-af34-54e259601952"}, "columns": ["y"]}], "id": "70abc8ab-65a2-404f-bd39-afe8cc2ea373", "doc": null}, "type": "DataRange1d", "id": "70abc8ab-65a2-404f-bd39-afe8cc2ea373"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "df3d9d88-9a7f-468b-8ed7-71a086e798ee"}, {"type": "DataRange1d", "id": "70abc8ab-65a2-404f-bd39-afe8cc2ea373"}], "dimensions": ["width", "height"], "id": "2ff312ef-0dcc-478a-9eb8-b5b5a0df9656"}, "type": "ZoomTool", "id": "2ff312ef-0dcc-478a-9eb8-b5b5a0df9656"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "958a7f00-941b-4eb0-af34-54e259601952"}, "columns": ["x"]}], "id": "df3d9d88-9a7f-468b-8ed7-71a086e798ee", "doc": null}, "type": "DataRange1d", "id": "df3d9d88-9a7f-468b-8ed7-71a086e798ee"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "98b582fa-018b-4f42-88d9-b7301892789c"}], "id": "686b6252-a44b-4476-a4f7-ca9703edc7e4"}, "type": "PlotContext", "id": "686b6252-a44b-4476-a4f7-ca9703edc7e4"}, {"attributes": {"plot": {"type": "Plot", "id": "98b582fa-018b-4f42-88d9-b7301892789c"}, "doc": null, "dimension": 1, "id": "301c9505-7822-4705-baa8-86b1bef6e25b"}, "type": "Grid", "id": "301c9505-7822-4705-baa8-86b1bef6e25b"}, {"attributes": {"plot": {"type": "Plot", "id": "98b582fa-018b-4f42-88d9-b7301892789c"}, "doc": null, "dimension": 0, "id": "d8cd18f6-67e7-458a-b344-ff52a79fa623"}, "type": "Grid", "id": "d8cd18f6-67e7-458a-b344-ff52a79fa623"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "958a7f00-941b-4eb0-af34-54e259601952"}, "doc": null, "id": "6cadb95c-6253-46b7-a8a3-f84fc85bea1e", "xdata_range": {"type": "DataRange1d", "id": "df3d9d88-9a7f-468b-8ed7-71a086e798ee"}, "ydata_range": {"type": "DataRange1d", "id": "70abc8ab-65a2-404f-bd39-afe8cc2ea373"}, "glyphspec": {"line_color": {"value": "#1f77b4"}, "line_alpha": 1.0, "fill_color": "#1f77b4", "title": "voorkomens", "type": "line", "fill_alpha": 1.0, "height": 300, "width": 400, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "tools": "pan,zoom,resize", "x_axis_type": "datetime"}, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "line_width": 1, "angle_units": "deg", "type": "line", "y": {"units": "data", "field": "y"}, "line_alpha": 0.1, "start_angle_units": "deg", "valign": null, "radius_units": "screen", "visible": null, "length_units": "screen", "end_angle_units": "deg", "line_dash_offset": 0, "line_cap": "butt", "line_dash": [], "x": {"units": "data", "field": "x"}, "margin": null, "line_join": "miter", "halign": null}}, "type": "Glyph", "id": "6cadb95c-6253-46b7-a8a3-f84fc85bea1e"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [9, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 2, 1, 1, 3, 1, 1, 1, 1, 1, 1], "x": [1309910400000.0, 1309996800000.0, 1310083200000.0, 1310428800000.0, 1310774400000.0, 1311292800000.0, 1311984000000.0, 1312416000000.0, 1313971200000.0, 1314144000000.0, 1314316800000.0, 1315353600000.0, 1316563200000.0, 1317945600000.0, 1318377600000.0, 1318464000000.0, 1319068800000.0, 1320192000000.0, 1320278400000.0, 1320364800000.0, 1320796800000.0, 1322784000000.0, 1323043200000.0, 1323475200000.0, 1324857600000.0, 1325116800000.0, 1325289600000.0]}, "id": "958a7f00-941b-4eb0-af34-54e259601952"}, "type": "ColumnDataSource", "id": "958a7f00-941b-4eb0-af34-54e259601952"}, {"attributes": {"plot": {"type": "Plot", "id": "98b582fa-018b-4f42-88d9-b7301892789c"}, "doc": null, "bounds": "auto", "dimension": 1, "location": "min", "axis_label": "# artikels", "id": "c5e66c00-9850-4569-8a81-c0d858ef7584"}, "type": "LinearAxis", "id": "c5e66c00-9850-4569-8a81-c0d858ef7584"}];
    var modeltype = "PlotContext";
    var elementid = "e0d9263b-dc4b-46ed-8813-cc0b98c622a8";
    var plotID = "98b582fa-018b-4f42-88d9-b7301892789c";
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