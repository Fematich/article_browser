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

    var all_models = [{"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [1, 1, 1, 1, 1, 31, 19, 6, 2, 9, 11, 13, 5, 9, 1, 3, 1, 2, 1, 1, 2, 1, 1, 1, 3, 7, 9, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1], "x": [1295049600000.0, 1296518400000.0, 1300147200000.0, 1303171200000.0, 1304467200000.0, 1306454400000.0, 1306540800000.0, 1306713600000.0, 1306800000000.0, 1306886400000.0, 1307059200000.0, 1307145600000.0, 1307318400000.0, 1307404800000.0, 1307491200000.0, 1307577600000.0, 1307664000000.0, 1307750400000.0, 1308182400000.0, 1308268800000.0, 1308355200000.0, 1308960000000.0, 1309305600000.0, 1309478400000.0, 1309737600000.0, 1309824000000.0, 1309910400000.0, 1309996800000.0, 1310083200000.0, 1310428800000.0, 1310774400000.0, 1311292800000.0, 1311984000000.0, 1312416000000.0, 1313798400000.0, 1314144000000.0, 1314316800000.0, 1315353600000.0, 1316563200000.0, 1318377600000.0, 1318464000000.0, 1319068800000.0, 1320278400000.0, 1320796800000.0, 1322784000000.0, 1323043200000.0, 1323475200000.0, 1325116800000.0, 1325289600000.0]}, "id": "525c709c-4ec0-4445-bb0b-18a044229790"}, "type": "ColumnDataSource", "id": "525c709c-4ec0-4445-bb0b-18a044229790"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "e0b44f9d-126b-4ca8-a187-17875355c0b9"}, {"type": "DataRange1d", "id": "c757902f-7582-4b0e-9594-abfaaf853ec7"}], "dimensions": ["width", "height"], "doc": null, "id": "3763c8a8-419c-4d3b-9758-e3b46e90d28f"}, "type": "PanTool", "id": "3763c8a8-419c-4d3b-9758-e3b46e90d28f"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "525c709c-4ec0-4445-bb0b-18a044229790"}, "doc": null, "id": "e77c1e66-72ed-432e-8d85-42474c4b01b4", "xdata_range": {"type": "DataRange1d", "id": "e0b44f9d-126b-4ca8-a187-17875355c0b9"}, "ydata_range": {"type": "DataRange1d", "id": "c757902f-7582-4b0e-9594-abfaaf853ec7"}, "glyphspec": {"line_color": {"value": "#1f77b4"}, "line_alpha": 1.0, "fill_color": "#1f77b4", "title": "voorkomens", "type": "line", "fill_alpha": 1.0, "height": 300, "width": 400, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "tools": "pan,zoom,resize", "x_axis_type": "datetime"}, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "line_width": 1, "angle_units": "deg", "type": "line", "y": {"units": "data", "field": "y"}, "line_alpha": 0.1, "start_angle_units": "deg", "valign": null, "radius_units": "screen", "visible": null, "length_units": "screen", "end_angle_units": "deg", "line_dash_offset": 0, "line_cap": "butt", "line_dash": [], "x": {"units": "data", "field": "x"}, "margin": null, "line_join": "miter", "halign": null}}, "type": "Glyph", "id": "e77c1e66-72ed-432e-8d85-42474c4b01b4"}, {"attributes": {"plot": {"type": "Plot", "id": "a836332c-5d22-48d2-8e3e-79527f329809"}, "doc": null, "dimension": 1, "id": "8fc3b831-4df5-49ee-8139-7ce5bfc3031e"}, "type": "Grid", "id": "8fc3b831-4df5-49ee-8139-7ce5bfc3031e"}, {"attributes": {"plot": {"type": "Plot", "id": "a836332c-5d22-48d2-8e3e-79527f329809"}, "id": "614c31fc-2da2-481b-b0fe-e790510930e2", "doc": null}, "type": "ResizeTool", "id": "614c31fc-2da2-481b-b0fe-e790510930e2"}, {"attributes": {"plot": {"type": "Plot", "id": "a836332c-5d22-48d2-8e3e-79527f329809"}, "doc": null, "dimension": 0, "id": "1efebac2-8eec-4fcb-a135-a39bb46faf06"}, "type": "Grid", "id": "1efebac2-8eec-4fcb-a135-a39bb46faf06"}, {"attributes": {"plot": {"type": "Plot", "id": "a836332c-5d22-48d2-8e3e-79527f329809"}, "doc": null, "bounds": "auto", "id": "ccf368c0-bb3b-4633-a47d-34a3dae96da4", "location": "min", "formats": {"days": ["%m/%d/%Y"]}, "axis_label": "Datum", "dimension": 0}, "type": "DatetimeAxis", "id": "ccf368c0-bb3b-4633-a47d-34a3dae96da4"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "525c709c-4ec0-4445-bb0b-18a044229790"}, "columns": ["y"]}], "id": "c757902f-7582-4b0e-9594-abfaaf853ec7", "doc": null}, "type": "DataRange1d", "id": "c757902f-7582-4b0e-9594-abfaaf853ec7"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "e0b44f9d-126b-4ca8-a187-17875355c0b9"}, "axes": [], "title": "voorkomens", "y_range": {"type": "DataRange1d", "id": "c757902f-7582-4b0e-9594-abfaaf853ec7"}, "outer_width": 400, "renderers": [{"type": "DatetimeAxis", "id": "ccf368c0-bb3b-4633-a47d-34a3dae96da4"}, {"type": "LinearAxis", "id": "6c80d337-bb7a-444b-b221-0dc2f5d11031"}, {"type": "Grid", "id": "1efebac2-8eec-4fcb-a135-a39bb46faf06"}, {"type": "Grid", "id": "8fc3b831-4df5-49ee-8139-7ce5bfc3031e"}, {"type": "Glyph", "id": "e77c1e66-72ed-432e-8d85-42474c4b01b4"}], "outer_height": 300, "width": 400, "doc": null, "canvas_height": 300, "id": "a836332c-5d22-48d2-8e3e-79527f329809", "height": 300, "tools": [{"type": "PanTool", "id": "3763c8a8-419c-4d3b-9758-e3b46e90d28f"}, {"type": "ZoomTool", "id": "a53e34f6-54a8-43f2-8a3e-708fefb9277f"}, {"type": "ResizeTool", "id": "614c31fc-2da2-481b-b0fe-e790510930e2"}], "canvas_width": 400}, "type": "Plot", "id": "a836332c-5d22-48d2-8e3e-79527f329809"}, {"attributes": {"plot": {"type": "Plot", "id": "a836332c-5d22-48d2-8e3e-79527f329809"}, "doc": null, "bounds": "auto", "dimension": 1, "location": "min", "axis_label": "# artikels", "id": "6c80d337-bb7a-444b-b221-0dc2f5d11031"}, "type": "LinearAxis", "id": "6c80d337-bb7a-444b-b221-0dc2f5d11031"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "a836332c-5d22-48d2-8e3e-79527f329809"}], "id": "1808cb6e-3a6a-40eb-9fe7-55d612e244e4"}, "type": "PlotContext", "id": "1808cb6e-3a6a-40eb-9fe7-55d612e244e4"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "e0b44f9d-126b-4ca8-a187-17875355c0b9"}, {"type": "DataRange1d", "id": "c757902f-7582-4b0e-9594-abfaaf853ec7"}], "dimensions": ["width", "height"], "id": "a53e34f6-54a8-43f2-8a3e-708fefb9277f"}, "type": "ZoomTool", "id": "a53e34f6-54a8-43f2-8a3e-708fefb9277f"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "525c709c-4ec0-4445-bb0b-18a044229790"}, "columns": ["x"]}], "id": "e0b44f9d-126b-4ca8-a187-17875355c0b9", "doc": null}, "type": "DataRange1d", "id": "e0b44f9d-126b-4ca8-a187-17875355c0b9"}];
    var modeltype = "PlotContext";
    var elementid = "f3c0928d-4570-41a5-b7c4-17f7586305f2";
    var plotID = "a836332c-5d22-48d2-8e3e-79527f329809";
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