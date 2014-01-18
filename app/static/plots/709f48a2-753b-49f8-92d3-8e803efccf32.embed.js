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

    var all_models = [{"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "ecbb0084-7166-4791-9236-e54659d10f12"}, {"type": "DataRange1d", "id": "70708e94-6c7a-49ae-93d3-f79c8de9df9e"}], "dimensions": ["width", "height"], "id": "ebb2a162-a400-4a2a-846b-53ddf1ff7c4a"}, "type": "ZoomTool", "id": "ebb2a162-a400-4a2a-846b-53ddf1ff7c4a"}, {"attributes": {"plot": {"type": "Plot", "id": "709f48a2-753b-49f8-92d3-8e803efccf32"}, "doc": null, "dimension": 1, "id": "820f205a-6050-40e3-8d48-3294cea9dc85"}, "type": "Grid", "id": "820f205a-6050-40e3-8d48-3294cea9dc85"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "a19c62e5-96d1-4c8a-b0a9-9d33d1eef42c"}, "doc": null, "id": "faf2707a-5256-4f61-8df8-34c9c0d57fa8", "xdata_range": {"type": "DataRange1d", "id": "ecbb0084-7166-4791-9236-e54659d10f12"}, "ydata_range": {"type": "DataRange1d", "id": "70708e94-6c7a-49ae-93d3-f79c8de9df9e"}, "glyphspec": {"line_color": {"value": "#1f77b4"}, "line_alpha": 1.0, "fill_color": "#1f77b4", "title": "voorkomens", "type": "line", "fill_alpha": 1.0, "height": 300, "width": 400, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "tools": "pan,zoom,resize", "x_axis_type": "datetime"}, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "line_width": 1, "angle_units": "deg", "type": "line", "y": {"units": "data", "field": "y"}, "line_alpha": 0.1, "start_angle_units": "deg", "valign": null, "radius_units": "screen", "visible": null, "length_units": "screen", "end_angle_units": "deg", "line_dash_offset": 0, "line_cap": "butt", "line_dash": [], "x": {"units": "data", "field": "x"}, "margin": null, "line_join": "miter", "halign": null}}, "type": "Glyph", "id": "faf2707a-5256-4f61-8df8-34c9c0d57fa8"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "ecbb0084-7166-4791-9236-e54659d10f12"}, "axes": [], "title": "voorkomens", "y_range": {"type": "DataRange1d", "id": "70708e94-6c7a-49ae-93d3-f79c8de9df9e"}, "outer_width": 400, "renderers": [{"type": "DatetimeAxis", "id": "3d115061-5172-4720-a916-3d451c51477e"}, {"type": "LinearAxis", "id": "49f704fd-b74a-43e8-892b-84e3db6e006b"}, {"type": "Grid", "id": "b12c4f15-0ac2-4393-b393-c6fa46042762"}, {"type": "Grid", "id": "820f205a-6050-40e3-8d48-3294cea9dc85"}, {"type": "Glyph", "id": "faf2707a-5256-4f61-8df8-34c9c0d57fa8"}], "outer_height": 300, "width": 400, "doc": null, "canvas_height": 300, "id": "709f48a2-753b-49f8-92d3-8e803efccf32", "height": 300, "tools": [{"type": "PanTool", "id": "ff9102c9-4c38-41b0-91ef-61ef8f957f94"}, {"type": "ZoomTool", "id": "ebb2a162-a400-4a2a-846b-53ddf1ff7c4a"}, {"type": "ResizeTool", "id": "00e1d127-6363-420a-9ab0-35618db1500c"}], "canvas_width": 400}, "type": "Plot", "id": "709f48a2-753b-49f8-92d3-8e803efccf32"}, {"attributes": {"plot": {"type": "Plot", "id": "709f48a2-753b-49f8-92d3-8e803efccf32"}, "id": "00e1d127-6363-420a-9ab0-35618db1500c", "doc": null}, "type": "ResizeTool", "id": "00e1d127-6363-420a-9ab0-35618db1500c"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "a19c62e5-96d1-4c8a-b0a9-9d33d1eef42c"}, "columns": ["x"]}], "id": "ecbb0084-7166-4791-9236-e54659d10f12", "doc": null}, "type": "DataRange1d", "id": "ecbb0084-7166-4791-9236-e54659d10f12"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "a19c62e5-96d1-4c8a-b0a9-9d33d1eef42c"}, "columns": ["y"]}], "id": "70708e94-6c7a-49ae-93d3-f79c8de9df9e", "doc": null}, "type": "DataRange1d", "id": "70708e94-6c7a-49ae-93d3-f79c8de9df9e"}, {"attributes": {"plot": {"type": "Plot", "id": "709f48a2-753b-49f8-92d3-8e803efccf32"}, "doc": null, "bounds": "auto", "id": "3d115061-5172-4720-a916-3d451c51477e", "location": "min", "formats": {"days": ["%m/%d/%Y"]}, "axis_label": "Datum", "dimension": 0}, "type": "DatetimeAxis", "id": "3d115061-5172-4720-a916-3d451c51477e"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "709f48a2-753b-49f8-92d3-8e803efccf32"}], "id": "e8c55a10-e0be-48c1-b64a-fd4849c1765a"}, "type": "PlotContext", "id": "e8c55a10-e0be-48c1-b64a-fd4849c1765a"}, {"attributes": {"plot": {"type": "Plot", "id": "709f48a2-753b-49f8-92d3-8e803efccf32"}, "doc": null, "bounds": "auto", "dimension": 1, "location": "min", "axis_label": "# artikels", "id": "49f704fd-b74a-43e8-892b-84e3db6e006b"}, "type": "LinearAxis", "id": "49f704fd-b74a-43e8-892b-84e3db6e006b"}, {"attributes": {"plot": {"type": "Plot", "id": "709f48a2-753b-49f8-92d3-8e803efccf32"}, "doc": null, "dimension": 0, "id": "b12c4f15-0ac2-4393-b393-c6fa46042762"}, "type": "Grid", "id": "b12c4f15-0ac2-4393-b393-c6fa46042762"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "ecbb0084-7166-4791-9236-e54659d10f12"}, {"type": "DataRange1d", "id": "70708e94-6c7a-49ae-93d3-f79c8de9df9e"}], "dimensions": ["width", "height"], "doc": null, "id": "ff9102c9-4c38-41b0-91ef-61ef8f957f94"}, "type": "PanTool", "id": "ff9102c9-4c38-41b0-91ef-61ef8f957f94"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [1, 1, 1, 1, 1, 31, 19, 6, 2, 9, 10, 13, 5, 9, 1, 3, 1, 2, 1, 1, 2, 1, 1, 1, 3, 7, 9, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1], "x": [1295049600000.0, 1296518400000.0, 1300147200000.0, 1303171200000.0, 1304467200000.0, 1306454400000.0, 1306540800000.0, 1306713600000.0, 1306800000000.0, 1306886400000.0, 1307059200000.0, 1307145600000.0, 1307318400000.0, 1307404800000.0, 1307491200000.0, 1307577600000.0, 1307664000000.0, 1307750400000.0, 1308182400000.0, 1308268800000.0, 1308355200000.0, 1308960000000.0, 1309305600000.0, 1309478400000.0, 1309737600000.0, 1309824000000.0, 1309910400000.0, 1309996800000.0, 1310083200000.0, 1310428800000.0, 1310774400000.0, 1311292800000.0, 1311984000000.0, 1312416000000.0, 1314144000000.0, 1314316800000.0, 1315353600000.0, 1316563200000.0, 1318377600000.0, 1318464000000.0, 1319068800000.0, 1320278400000.0, 1320796800000.0, 1322784000000.0, 1323043200000.0, 1323475200000.0, 1325116800000.0, 1325289600000.0]}, "id": "a19c62e5-96d1-4c8a-b0a9-9d33d1eef42c"}, "type": "ColumnDataSource", "id": "a19c62e5-96d1-4c8a-b0a9-9d33d1eef42c"}];
    var modeltype = "PlotContext";
    var elementid = "5537ab0e-c6bd-4656-a365-58d5a2427076";
    var plotID = "709f48a2-753b-49f8-92d3-8e803efccf32";
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