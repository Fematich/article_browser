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

    var all_models = [{"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "66acfe71-9c32-4681-9d44-949b65a69f3a"}, {"type": "DataRange1d", "id": "def9bd8d-90af-405a-afd0-9ca22bf16085"}], "dimensions": ["width", "height"], "id": "037b8ce0-0550-4663-823d-8fb2a27d500a"}, "type": "ZoomTool", "id": "037b8ce0-0550-4663-823d-8fb2a27d500a"}, {"attributes": {"plot": {"type": "Plot", "id": "1a2fe86d-9cde-4e5a-a55b-568df242ef6a"}, "id": "3d374416-5c65-49f4-9d3f-aa4d482c2481", "doc": null}, "type": "ResizeTool", "id": "3d374416-5c65-49f4-9d3f-aa4d482c2481"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "66acfe71-9c32-4681-9d44-949b65a69f3a"}, {"type": "DataRange1d", "id": "def9bd8d-90af-405a-afd0-9ca22bf16085"}], "dimensions": ["width", "height"], "doc": null, "id": "3d88caa4-0d9d-43cf-a490-93721c31ed01"}, "type": "PanTool", "id": "3d88caa4-0d9d-43cf-a490-93721c31ed01"}, {"attributes": {"plot": {"type": "Plot", "id": "1a2fe86d-9cde-4e5a-a55b-568df242ef6a"}, "doc": null, "bounds": "auto", "id": "d9abfd71-d6db-4566-b300-68a5b8ab561c", "location": "min", "formats": {"days": ["%m/%d/%Y"]}, "axis_label": "Datum", "dimension": 0}, "type": "DatetimeAxis", "id": "d9abfd71-d6db-4566-b300-68a5b8ab561c"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [1, 1, 1, 1, 1, 31, 19, 6, 2, 9, 11, 13, 5, 9, 1, 3, 1, 2, 1, 1, 2, 1, 1, 1, 3, 7, 9, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1], "x": [1295049600000.0, 1296518400000.0, 1300147200000.0, 1303171200000.0, 1304467200000.0, 1306454400000.0, 1306540800000.0, 1306713600000.0, 1306800000000.0, 1306886400000.0, 1307059200000.0, 1307145600000.0, 1307318400000.0, 1307404800000.0, 1307491200000.0, 1307577600000.0, 1307664000000.0, 1307750400000.0, 1308182400000.0, 1308268800000.0, 1308355200000.0, 1308960000000.0, 1309305600000.0, 1309478400000.0, 1309737600000.0, 1309824000000.0, 1309910400000.0, 1309996800000.0, 1310083200000.0, 1310428800000.0, 1310774400000.0, 1311292800000.0, 1311984000000.0, 1312416000000.0, 1313798400000.0, 1314144000000.0, 1314316800000.0, 1315353600000.0, 1316563200000.0, 1318377600000.0, 1318464000000.0, 1319068800000.0, 1320278400000.0, 1320796800000.0, 1322784000000.0, 1323043200000.0, 1323475200000.0, 1325116800000.0, 1325289600000.0]}, "id": "d7b77c39-ebde-4178-a740-a38f46ea122f"}, "type": "ColumnDataSource", "id": "d7b77c39-ebde-4178-a740-a38f46ea122f"}, {"attributes": {"plot": {"type": "Plot", "id": "1a2fe86d-9cde-4e5a-a55b-568df242ef6a"}, "doc": null, "dimension": 0, "id": "64462a51-f7df-4b9f-8575-a91097b61b2d"}, "type": "Grid", "id": "64462a51-f7df-4b9f-8575-a91097b61b2d"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "d7b77c39-ebde-4178-a740-a38f46ea122f"}, "doc": null, "id": "6835954f-c456-4c0e-9e87-cc2d61a56aed", "xdata_range": {"type": "DataRange1d", "id": "66acfe71-9c32-4681-9d44-949b65a69f3a"}, "ydata_range": {"type": "DataRange1d", "id": "def9bd8d-90af-405a-afd0-9ca22bf16085"}, "glyphspec": {"line_color": {"value": "#1f77b4"}, "line_alpha": 1.0, "fill_color": "#1f77b4", "title": "voorkomens", "type": "line", "fill_alpha": 1.0, "height": 300, "width": 400, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "tools": "pan,zoom,resize", "x_axis_type": "datetime"}, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "line_width": 1, "angle_units": "deg", "type": "line", "y": {"units": "data", "field": "y"}, "line_alpha": 0.1, "start_angle_units": "deg", "valign": null, "radius_units": "screen", "visible": null, "length_units": "screen", "end_angle_units": "deg", "line_dash_offset": 0, "line_cap": "butt", "line_dash": [], "x": {"units": "data", "field": "x"}, "margin": null, "line_join": "miter", "halign": null}}, "type": "Glyph", "id": "6835954f-c456-4c0e-9e87-cc2d61a56aed"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "d7b77c39-ebde-4178-a740-a38f46ea122f"}, "columns": ["x"]}], "id": "66acfe71-9c32-4681-9d44-949b65a69f3a", "doc": null}, "type": "DataRange1d", "id": "66acfe71-9c32-4681-9d44-949b65a69f3a"}, {"attributes": {"plot": {"type": "Plot", "id": "1a2fe86d-9cde-4e5a-a55b-568df242ef6a"}, "doc": null, "dimension": 1, "id": "9f712421-772f-459d-8232-aad4faec0c23"}, "type": "Grid", "id": "9f712421-772f-459d-8232-aad4faec0c23"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "66acfe71-9c32-4681-9d44-949b65a69f3a"}, "axes": [], "title": "voorkomens", "y_range": {"type": "DataRange1d", "id": "def9bd8d-90af-405a-afd0-9ca22bf16085"}, "outer_width": 400, "renderers": [{"type": "DatetimeAxis", "id": "d9abfd71-d6db-4566-b300-68a5b8ab561c"}, {"type": "LinearAxis", "id": "0c281682-9833-450d-8ceb-c8224a18606b"}, {"type": "Grid", "id": "64462a51-f7df-4b9f-8575-a91097b61b2d"}, {"type": "Grid", "id": "9f712421-772f-459d-8232-aad4faec0c23"}, {"type": "Glyph", "id": "6835954f-c456-4c0e-9e87-cc2d61a56aed"}], "outer_height": 300, "width": 400, "doc": null, "canvas_height": 300, "id": "1a2fe86d-9cde-4e5a-a55b-568df242ef6a", "height": 300, "tools": [{"type": "PanTool", "id": "3d88caa4-0d9d-43cf-a490-93721c31ed01"}, {"type": "ZoomTool", "id": "037b8ce0-0550-4663-823d-8fb2a27d500a"}, {"type": "ResizeTool", "id": "3d374416-5c65-49f4-9d3f-aa4d482c2481"}], "canvas_width": 400}, "type": "Plot", "id": "1a2fe86d-9cde-4e5a-a55b-568df242ef6a"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "d7b77c39-ebde-4178-a740-a38f46ea122f"}, "columns": ["y"]}], "id": "def9bd8d-90af-405a-afd0-9ca22bf16085", "doc": null}, "type": "DataRange1d", "id": "def9bd8d-90af-405a-afd0-9ca22bf16085"}, {"attributes": {"plot": {"type": "Plot", "id": "1a2fe86d-9cde-4e5a-a55b-568df242ef6a"}, "doc": null, "bounds": "auto", "dimension": 1, "location": "min", "axis_label": "# artikels", "id": "0c281682-9833-450d-8ceb-c8224a18606b"}, "type": "LinearAxis", "id": "0c281682-9833-450d-8ceb-c8224a18606b"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "1a2fe86d-9cde-4e5a-a55b-568df242ef6a"}], "id": "6dfdd787-2138-47d8-9073-7e7c29a4e22d"}, "type": "PlotContext", "id": "6dfdd787-2138-47d8-9073-7e7c29a4e22d"}];
    var modeltype = "PlotContext";
    var elementid = "5bc8b328-c902-4ac2-93bc-7771dda9c099";
    var plotID = "1a2fe86d-9cde-4e5a-a55b-568df242ef6a";
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