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

    var all_models = [{"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [1, 1, 1, 1, 1, 31, 19, 6, 2, 9, 10, 13, 5, 9, 1, 3, 1, 2, 1, 1, 2, 1, 1, 1, 3, 7, 9, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1], "x": [1295049600000.0, 1296518400000.0, 1300147200000.0, 1303171200000.0, 1304467200000.0, 1306454400000.0, 1306540800000.0, 1306713600000.0, 1306800000000.0, 1306886400000.0, 1307059200000.0, 1307145600000.0, 1307318400000.0, 1307404800000.0, 1307491200000.0, 1307577600000.0, 1307664000000.0, 1307750400000.0, 1308182400000.0, 1308268800000.0, 1308355200000.0, 1308960000000.0, 1309305600000.0, 1309478400000.0, 1309737600000.0, 1309824000000.0, 1309910400000.0, 1309996800000.0, 1310083200000.0, 1310428800000.0, 1310774400000.0, 1311292800000.0, 1311984000000.0, 1312416000000.0, 1314144000000.0, 1314316800000.0, 1315353600000.0, 1316563200000.0, 1318377600000.0, 1318464000000.0, 1319068800000.0, 1320278400000.0, 1320796800000.0, 1322784000000.0, 1323043200000.0, 1323475200000.0, 1325116800000.0, 1325289600000.0]}, "id": "77c5269d-d3ed-4feb-b58a-b19ef4827a81"}, "type": "ColumnDataSource", "id": "77c5269d-d3ed-4feb-b58a-b19ef4827a81"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "77c5269d-d3ed-4feb-b58a-b19ef4827a81"}, "doc": null, "id": "429ce6f6-38bd-4984-a508-14c44c65c071", "xdata_range": {"type": "DataRange1d", "id": "6e14196a-6b10-4427-af87-2f2a055fa78f"}, "ydata_range": {"type": "DataRange1d", "id": "486ad7de-818e-4b90-b615-bd32ebfc3ffc"}, "glyphspec": {"line_color": {"value": "#1f77b4"}, "line_alpha": 1.0, "fill_color": "#1f77b4", "title": "voorkomens", "type": "line", "fill_alpha": 1.0, "height": 300, "width": 400, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "tools": "pan,zoom,resize", "x_axis_type": "datetime"}, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "line_width": 1, "angle_units": "deg", "type": "line", "y": {"units": "data", "field": "y"}, "line_alpha": 0.1, "start_angle_units": "deg", "valign": null, "radius_units": "screen", "visible": null, "length_units": "screen", "end_angle_units": "deg", "line_dash_offset": 0, "line_cap": "butt", "line_dash": [], "x": {"units": "data", "field": "x"}, "margin": null, "line_join": "miter", "halign": null}}, "type": "Glyph", "id": "429ce6f6-38bd-4984-a508-14c44c65c071"}, {"attributes": {"plot": {"type": "Plot", "id": "fb025f3b-fdc7-44b9-aa18-d07d1209092d"}, "id": "f3e122a2-9f03-4dbc-92c1-d722d08a798c", "doc": null}, "type": "ResizeTool", "id": "f3e122a2-9f03-4dbc-92c1-d722d08a798c"}, {"attributes": {"plot": {"type": "Plot", "id": "fb025f3b-fdc7-44b9-aa18-d07d1209092d"}, "doc": null, "dimension": 0, "id": "a49ac271-b5cf-4023-a5de-f18bb23c4950"}, "type": "Grid", "id": "a49ac271-b5cf-4023-a5de-f18bb23c4950"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "6e14196a-6b10-4427-af87-2f2a055fa78f"}, {"type": "DataRange1d", "id": "486ad7de-818e-4b90-b615-bd32ebfc3ffc"}], "dimensions": ["width", "height"], "id": "7f3d4845-e70e-404d-99f8-cab230f03a4e"}, "type": "ZoomTool", "id": "7f3d4845-e70e-404d-99f8-cab230f03a4e"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "6e14196a-6b10-4427-af87-2f2a055fa78f"}, "axes": [], "title": "voorkomens", "y_range": {"type": "DataRange1d", "id": "486ad7de-818e-4b90-b615-bd32ebfc3ffc"}, "outer_width": 400, "renderers": [{"type": "DatetimeAxis", "id": "d7456c38-3136-482a-9597-8e42777bf306"}, {"type": "LinearAxis", "id": "c252f01d-43d5-4709-8a26-0d2cb6ac94f3"}, {"type": "Grid", "id": "a49ac271-b5cf-4023-a5de-f18bb23c4950"}, {"type": "Grid", "id": "f2ad6c83-5578-4d55-9860-958110968ecf"}, {"type": "Glyph", "id": "429ce6f6-38bd-4984-a508-14c44c65c071"}], "outer_height": 300, "width": 400, "doc": null, "canvas_height": 300, "id": "fb025f3b-fdc7-44b9-aa18-d07d1209092d", "height": 300, "tools": [{"type": "PanTool", "id": "f0f2d0b7-d00c-4b43-a622-a0df85c1433d"}, {"type": "ZoomTool", "id": "7f3d4845-e70e-404d-99f8-cab230f03a4e"}, {"type": "ResizeTool", "id": "f3e122a2-9f03-4dbc-92c1-d722d08a798c"}], "canvas_width": 400}, "type": "Plot", "id": "fb025f3b-fdc7-44b9-aa18-d07d1209092d"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "77c5269d-d3ed-4feb-b58a-b19ef4827a81"}, "columns": ["y"]}], "id": "486ad7de-818e-4b90-b615-bd32ebfc3ffc", "doc": null}, "type": "DataRange1d", "id": "486ad7de-818e-4b90-b615-bd32ebfc3ffc"}, {"attributes": {"plot": {"type": "Plot", "id": "fb025f3b-fdc7-44b9-aa18-d07d1209092d"}, "doc": null, "bounds": "auto", "dimension": 1, "location": "min", "axis_label": "# artikels", "id": "c252f01d-43d5-4709-8a26-0d2cb6ac94f3"}, "type": "LinearAxis", "id": "c252f01d-43d5-4709-8a26-0d2cb6ac94f3"}, {"attributes": {"plot": {"type": "Plot", "id": "fb025f3b-fdc7-44b9-aa18-d07d1209092d"}, "doc": null, "dimension": 1, "id": "f2ad6c83-5578-4d55-9860-958110968ecf"}, "type": "Grid", "id": "f2ad6c83-5578-4d55-9860-958110968ecf"}, {"attributes": {"plot": {"type": "Plot", "id": "fb025f3b-fdc7-44b9-aa18-d07d1209092d"}, "doc": null, "bounds": "auto", "id": "d7456c38-3136-482a-9597-8e42777bf306", "location": "min", "formats": {"days": ["%m/%d/%Y"]}, "axis_label": "Datum", "dimension": 0}, "type": "DatetimeAxis", "id": "d7456c38-3136-482a-9597-8e42777bf306"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "6e14196a-6b10-4427-af87-2f2a055fa78f"}, {"type": "DataRange1d", "id": "486ad7de-818e-4b90-b615-bd32ebfc3ffc"}], "dimensions": ["width", "height"], "doc": null, "id": "f0f2d0b7-d00c-4b43-a622-a0df85c1433d"}, "type": "PanTool", "id": "f0f2d0b7-d00c-4b43-a622-a0df85c1433d"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "77c5269d-d3ed-4feb-b58a-b19ef4827a81"}, "columns": ["x"]}], "id": "6e14196a-6b10-4427-af87-2f2a055fa78f", "doc": null}, "type": "DataRange1d", "id": "6e14196a-6b10-4427-af87-2f2a055fa78f"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "fb025f3b-fdc7-44b9-aa18-d07d1209092d"}], "id": "12c1ba95-b875-4a8c-848e-3c483239914c"}, "type": "PlotContext", "id": "12c1ba95-b875-4a8c-848e-3c483239914c"}];
    var modeltype = "PlotContext";
    var elementid = "ce544ba9-b054-403b-b69e-023e3df28f1a";
    var plotID = "fb025f3b-fdc7-44b9-aa18-d07d1209092d";
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