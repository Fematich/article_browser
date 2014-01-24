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

    var all_models = [{"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "7f1aad4d-fdd8-4957-9c64-65beef077ac7"}, "columns": ["x"]}], "id": "48f7989c-564e-4b4a-b52b-a09193df2a59", "doc": null}, "type": "DataRange1d", "id": "48f7989c-564e-4b4a-b52b-a09193df2a59"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "48f7989c-564e-4b4a-b52b-a09193df2a59"}, "axes": [], "title": "voorkomens", "y_range": {"type": "DataRange1d", "id": "39e4ad27-03e8-4433-a3ef-78acfe3cc5d2"}, "outer_width": 400, "renderers": [{"type": "DatetimeAxis", "id": "f4a64b10-df07-4db8-9e31-1f65e926130c"}, {"type": "LinearAxis", "id": "caa43d47-8087-4a1f-b013-7dc14d1fe955"}, {"type": "Grid", "id": "1e5b2b56-9834-422c-b492-08aa77934917"}, {"type": "Grid", "id": "cbd7db06-a261-4e3d-8d65-548acc30900f"}, {"type": "Glyph", "id": "a437bba1-a1fb-40e2-9fdd-690ecf340919"}], "outer_height": 300, "width": 400, "doc": null, "canvas_height": 300, "id": "d013033e-417f-46d9-80c4-a16bf8b1803a", "height": 300, "tools": [{"type": "PanTool", "id": "af829054-7fe1-4a03-a41d-e43c1c63bfa6"}, {"type": "ZoomTool", "id": "b512b1c0-4e0c-416b-a876-7bcc4102c02e"}, {"type": "ResizeTool", "id": "3db3ba08-581a-44af-b31b-2884c6f4ca20"}], "canvas_width": 400}, "type": "Plot", "id": "d013033e-417f-46d9-80c4-a16bf8b1803a"}, {"attributes": {"plot": {"type": "Plot", "id": "d013033e-417f-46d9-80c4-a16bf8b1803a"}, "doc": null, "dimension": 0, "id": "1e5b2b56-9834-422c-b492-08aa77934917"}, "type": "Grid", "id": "1e5b2b56-9834-422c-b492-08aa77934917"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "7f1aad4d-fdd8-4957-9c64-65beef077ac7"}, "columns": ["y"]}], "id": "39e4ad27-03e8-4433-a3ef-78acfe3cc5d2", "doc": null}, "type": "DataRange1d", "id": "39e4ad27-03e8-4433-a3ef-78acfe3cc5d2"}, {"attributes": {"plot": {"type": "Plot", "id": "d013033e-417f-46d9-80c4-a16bf8b1803a"}, "id": "3db3ba08-581a-44af-b31b-2884c6f4ca20", "doc": null}, "type": "ResizeTool", "id": "3db3ba08-581a-44af-b31b-2884c6f4ca20"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "48f7989c-564e-4b4a-b52b-a09193df2a59"}, {"type": "DataRange1d", "id": "39e4ad27-03e8-4433-a3ef-78acfe3cc5d2"}], "dimensions": ["width", "height"], "doc": null, "id": "af829054-7fe1-4a03-a41d-e43c1c63bfa6"}, "type": "PanTool", "id": "af829054-7fe1-4a03-a41d-e43c1c63bfa6"}, {"attributes": {"plot": {"type": "Plot", "id": "d013033e-417f-46d9-80c4-a16bf8b1803a"}, "doc": null, "bounds": "auto", "dimension": 1, "location": "min", "axis_label": "# artikels", "id": "caa43d47-8087-4a1f-b013-7dc14d1fe955"}, "type": "LinearAxis", "id": "caa43d47-8087-4a1f-b013-7dc14d1fe955"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "48f7989c-564e-4b4a-b52b-a09193df2a59"}, {"type": "DataRange1d", "id": "39e4ad27-03e8-4433-a3ef-78acfe3cc5d2"}], "dimensions": ["width", "height"], "id": "b512b1c0-4e0c-416b-a876-7bcc4102c02e"}, "type": "ZoomTool", "id": "b512b1c0-4e0c-416b-a876-7bcc4102c02e"}, {"attributes": {"plot": {"type": "Plot", "id": "d013033e-417f-46d9-80c4-a16bf8b1803a"}, "doc": null, "dimension": 1, "id": "cbd7db06-a261-4e3d-8d65-548acc30900f"}, "type": "Grid", "id": "cbd7db06-a261-4e3d-8d65-548acc30900f"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "d013033e-417f-46d9-80c4-a16bf8b1803a"}], "id": "9ee82fff-d30d-46ec-a5fe-b292cec5c451"}, "type": "PlotContext", "id": "9ee82fff-d30d-46ec-a5fe-b292cec5c451"}, {"attributes": {"plot": {"type": "Plot", "id": "d013033e-417f-46d9-80c4-a16bf8b1803a"}, "doc": null, "bounds": "auto", "id": "f4a64b10-df07-4db8-9e31-1f65e926130c", "location": "min", "formats": {"days": ["%m/%d/%Y"]}, "axis_label": "Datum", "dimension": 0}, "type": "DatetimeAxis", "id": "f4a64b10-df07-4db8-9e31-1f65e926130c"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [17, 8, 3, 4, 3, 2, 2, 1, 2, 4, 11, 3, 3, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 6, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 3], "x": [1298419200000.0, 1298505600000.0, 1298592000000.0, 1298678400000.0, 1298851200000.0, 1298937600000.0, 1299110400000.0, 1299196800000.0, 1299283200000.0, 1299542400000.0, 1299888000000.0, 1300060800000.0, 1300147200000.0, 1300752000000.0, 1300924800000.0, 1301011200000.0, 1301097600000.0, 1301270400000.0, 1301356800000.0, 1301443200000.0, 1301875200000.0, 1304294400000.0, 1305936000000.0, 1306108800000.0, 1308009600000.0, 1308873600000.0, 1308960000000.0, 1309392000000.0, 1309564800000.0, 1310515200000.0, 1311811200000.0, 1313107200000.0, 1313452800000.0, 1315008000000.0, 1315180800000.0, 1323302400000.0, 1323388800000.0, 1323820800000.0, 1324684800000.0]}, "id": "7f1aad4d-fdd8-4957-9c64-65beef077ac7"}, "type": "ColumnDataSource", "id": "7f1aad4d-fdd8-4957-9c64-65beef077ac7"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "7f1aad4d-fdd8-4957-9c64-65beef077ac7"}, "doc": null, "id": "a437bba1-a1fb-40e2-9fdd-690ecf340919", "xdata_range": {"type": "DataRange1d", "id": "48f7989c-564e-4b4a-b52b-a09193df2a59"}, "ydata_range": {"type": "DataRange1d", "id": "39e4ad27-03e8-4433-a3ef-78acfe3cc5d2"}, "glyphspec": {"line_color": {"value": "#1f77b4"}, "line_alpha": 1.0, "fill_color": "#1f77b4", "title": "voorkomens", "type": "line", "fill_alpha": 1.0, "height": 300, "width": 400, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "tools": "pan,zoom,resize", "x_axis_type": "datetime"}, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "line_width": 1, "angle_units": "deg", "type": "line", "y": {"units": "data", "field": "y"}, "line_alpha": 0.1, "start_angle_units": "deg", "valign": null, "radius_units": "screen", "visible": null, "length_units": "screen", "end_angle_units": "deg", "line_dash_offset": 0, "line_cap": "butt", "line_dash": [], "x": {"units": "data", "field": "x"}, "margin": null, "line_join": "miter", "halign": null}}, "type": "Glyph", "id": "a437bba1-a1fb-40e2-9fdd-690ecf340919"}];
    var modeltype = "PlotContext";
    var elementid = "39023fab-72d3-4daf-a86c-053f36335dbe";
    var plotID = "d013033e-417f-46d9-80c4-a16bf8b1803a";
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