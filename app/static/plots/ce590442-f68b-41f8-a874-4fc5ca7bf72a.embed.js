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

    var all_models = [{"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "17d28630-a40a-451a-9ba1-4a059b6b179c"}, {"type": "DataRange1d", "id": "d1e317cb-1c82-49ee-acd4-fdc218dae7bb"}], "dimensions": ["width", "height"], "doc": null, "id": "37484497-9739-48db-984d-49f5b44cf6a1"}, "type": "PanTool", "id": "37484497-9739-48db-984d-49f5b44cf6a1"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "ae9b35bf-959d-4515-98ee-ecb25b2a08c5"}, "doc": null, "id": "d431b906-75f3-4215-9652-46117ab22fa7", "xdata_range": {"type": "DataRange1d", "id": "17d28630-a40a-451a-9ba1-4a059b6b179c"}, "ydata_range": {"type": "DataRange1d", "id": "d1e317cb-1c82-49ee-acd4-fdc218dae7bb"}, "glyphspec": {"line_color": {"value": "#1f77b4"}, "line_alpha": 1.0, "fill_color": "#1f77b4", "title": "voorkomens", "type": "line", "fill_alpha": 1.0, "height": 300, "width": 400, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "tools": "pan,zoom,resize", "x_axis_type": "datetime"}, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "line_width": 1, "angle_units": "deg", "type": "line", "y": {"units": "data", "field": "y"}, "line_alpha": 0.1, "start_angle_units": "deg", "valign": null, "radius_units": "screen", "visible": null, "length_units": "screen", "end_angle_units": "deg", "line_dash_offset": 0, "line_cap": "butt", "line_dash": [], "x": {"units": "data", "field": "x"}, "margin": null, "line_join": "miter", "halign": null}}, "type": "Glyph", "id": "d431b906-75f3-4215-9652-46117ab22fa7"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "ae9b35bf-959d-4515-98ee-ecb25b2a08c5"}, "columns": ["x"]}], "id": "17d28630-a40a-451a-9ba1-4a059b6b179c", "doc": null}, "type": "DataRange1d", "id": "17d28630-a40a-451a-9ba1-4a059b6b179c"}, {"attributes": {"plot": {"type": "Plot", "id": "ce590442-f68b-41f8-a874-4fc5ca7bf72a"}, "doc": null, "bounds": "auto", "id": "e86c9317-29c4-4ba8-abe3-fb3fb39a6626", "location": "min", "formats": {"days": ["%m/%d/%Y"]}, "axis_label": "Datum", "dimension": 0}, "type": "DatetimeAxis", "id": "e86c9317-29c4-4ba8-abe3-fb3fb39a6626"}, {"attributes": {"plot": {"type": "Plot", "id": "ce590442-f68b-41f8-a874-4fc5ca7bf72a"}, "id": "e89414d5-758c-4e50-bccd-6c5adc8d5b09", "doc": null}, "type": "ResizeTool", "id": "e89414d5-758c-4e50-bccd-6c5adc8d5b09"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [1, 1, 1, 1, 1, 31, 19, 6, 2, 9, 11, 13, 5, 9, 1, 3, 1, 2, 1, 1, 2, 1, 1, 1, 3, 7, 9, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1], "x": [1295049600000.0, 1296518400000.0, 1300147200000.0, 1303171200000.0, 1304467200000.0, 1306454400000.0, 1306540800000.0, 1306713600000.0, 1306800000000.0, 1306886400000.0, 1307059200000.0, 1307145600000.0, 1307318400000.0, 1307404800000.0, 1307491200000.0, 1307577600000.0, 1307664000000.0, 1307750400000.0, 1308182400000.0, 1308268800000.0, 1308355200000.0, 1308960000000.0, 1309305600000.0, 1309478400000.0, 1309737600000.0, 1309824000000.0, 1309910400000.0, 1309996800000.0, 1310083200000.0, 1310428800000.0, 1310774400000.0, 1311292800000.0, 1311984000000.0, 1312416000000.0, 1313798400000.0, 1314144000000.0, 1314316800000.0, 1315353600000.0, 1316563200000.0, 1318377600000.0, 1318464000000.0, 1319068800000.0, 1320278400000.0, 1320796800000.0, 1322784000000.0, 1323043200000.0, 1323475200000.0, 1325116800000.0, 1325289600000.0]}, "id": "ae9b35bf-959d-4515-98ee-ecb25b2a08c5"}, "type": "ColumnDataSource", "id": "ae9b35bf-959d-4515-98ee-ecb25b2a08c5"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "17d28630-a40a-451a-9ba1-4a059b6b179c"}, "axes": [], "title": "voorkomens", "y_range": {"type": "DataRange1d", "id": "d1e317cb-1c82-49ee-acd4-fdc218dae7bb"}, "outer_width": 400, "renderers": [{"type": "DatetimeAxis", "id": "e86c9317-29c4-4ba8-abe3-fb3fb39a6626"}, {"type": "LinearAxis", "id": "456fea79-1ab1-4423-b52f-05c6ae647ef1"}, {"type": "Grid", "id": "88de1678-ab83-4a33-a2e7-055c826e399d"}, {"type": "Grid", "id": "01262f8b-8119-42e0-9850-eca640b5b148"}, {"type": "Glyph", "id": "d431b906-75f3-4215-9652-46117ab22fa7"}], "outer_height": 300, "width": 400, "doc": null, "canvas_height": 300, "id": "ce590442-f68b-41f8-a874-4fc5ca7bf72a", "height": 300, "tools": [{"type": "PanTool", "id": "37484497-9739-48db-984d-49f5b44cf6a1"}, {"type": "ZoomTool", "id": "a4ae55fc-775a-43c6-a20c-ba13267d9c15"}, {"type": "ResizeTool", "id": "e89414d5-758c-4e50-bccd-6c5adc8d5b09"}], "canvas_width": 400}, "type": "Plot", "id": "ce590442-f68b-41f8-a874-4fc5ca7bf72a"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "17d28630-a40a-451a-9ba1-4a059b6b179c"}, {"type": "DataRange1d", "id": "d1e317cb-1c82-49ee-acd4-fdc218dae7bb"}], "dimensions": ["width", "height"], "id": "a4ae55fc-775a-43c6-a20c-ba13267d9c15"}, "type": "ZoomTool", "id": "a4ae55fc-775a-43c6-a20c-ba13267d9c15"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "ae9b35bf-959d-4515-98ee-ecb25b2a08c5"}, "columns": ["y"]}], "id": "d1e317cb-1c82-49ee-acd4-fdc218dae7bb", "doc": null}, "type": "DataRange1d", "id": "d1e317cb-1c82-49ee-acd4-fdc218dae7bb"}, {"attributes": {"plot": {"type": "Plot", "id": "ce590442-f68b-41f8-a874-4fc5ca7bf72a"}, "doc": null, "dimension": 1, "id": "01262f8b-8119-42e0-9850-eca640b5b148"}, "type": "Grid", "id": "01262f8b-8119-42e0-9850-eca640b5b148"}, {"attributes": {"plot": {"type": "Plot", "id": "ce590442-f68b-41f8-a874-4fc5ca7bf72a"}, "doc": null, "bounds": "auto", "dimension": 1, "location": "min", "axis_label": "# artikels", "id": "456fea79-1ab1-4423-b52f-05c6ae647ef1"}, "type": "LinearAxis", "id": "456fea79-1ab1-4423-b52f-05c6ae647ef1"}, {"attributes": {"plot": {"type": "Plot", "id": "ce590442-f68b-41f8-a874-4fc5ca7bf72a"}, "doc": null, "dimension": 0, "id": "88de1678-ab83-4a33-a2e7-055c826e399d"}, "type": "Grid", "id": "88de1678-ab83-4a33-a2e7-055c826e399d"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "ce590442-f68b-41f8-a874-4fc5ca7bf72a"}], "id": "64faa91d-f8f9-46d5-a00f-af2f30fc622b"}, "type": "PlotContext", "id": "64faa91d-f8f9-46d5-a00f-af2f30fc622b"}];
    var modeltype = "PlotContext";
    var elementid = "ffd1957d-d8d5-47d2-aab1-1b70e5c7600c";
    var plotID = "ce590442-f68b-41f8-a874-4fc5ca7bf72a";
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