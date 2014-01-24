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

    var all_models = [{"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "0434df78-3d18-4e6f-9e13-42252fc92925"}, "columns": ["x"]}], "id": "2c2ef1c2-4052-44e1-8446-086d4c63a709", "doc": null}, "type": "DataRange1d", "id": "2c2ef1c2-4052-44e1-8446-086d4c63a709"}, {"attributes": {"plot": {"type": "Plot", "id": "b244b655-b62f-4a0a-a71c-fe0e5fdaa64f"}, "doc": null, "dimension": 0, "id": "ac7426e3-8833-4e1d-a8af-c0045428d9ca"}, "type": "Grid", "id": "ac7426e3-8833-4e1d-a8af-c0045428d9ca"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [17, 8, 3, 4, 3, 2, 2, 1, 2, 4, 11, 3, 3, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 6, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 3], "x": [1298419200000.0, 1298505600000.0, 1298592000000.0, 1298678400000.0, 1298851200000.0, 1298937600000.0, 1299110400000.0, 1299196800000.0, 1299283200000.0, 1299542400000.0, 1299888000000.0, 1300060800000.0, 1300147200000.0, 1300752000000.0, 1300924800000.0, 1301011200000.0, 1301097600000.0, 1301270400000.0, 1301356800000.0, 1301443200000.0, 1301875200000.0, 1304294400000.0, 1305936000000.0, 1306108800000.0, 1308009600000.0, 1308873600000.0, 1308960000000.0, 1309392000000.0, 1309564800000.0, 1310515200000.0, 1311811200000.0, 1313107200000.0, 1313452800000.0, 1315008000000.0, 1315180800000.0, 1323302400000.0, 1323388800000.0, 1323820800000.0, 1324684800000.0]}, "id": "0434df78-3d18-4e6f-9e13-42252fc92925"}, "type": "ColumnDataSource", "id": "0434df78-3d18-4e6f-9e13-42252fc92925"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "2c2ef1c2-4052-44e1-8446-086d4c63a709"}, {"type": "DataRange1d", "id": "d05d7e2c-75ba-4d25-9016-618ee15973de"}], "dimensions": ["width", "height"], "id": "4c922526-2af1-4729-9605-5e8c4f26987e"}, "type": "ZoomTool", "id": "4c922526-2af1-4729-9605-5e8c4f26987e"}, {"attributes": {"plot": {"type": "Plot", "id": "b244b655-b62f-4a0a-a71c-fe0e5fdaa64f"}, "id": "be0816e6-1b2e-43ac-b1e8-419d6d4d8070", "doc": null}, "type": "ResizeTool", "id": "be0816e6-1b2e-43ac-b1e8-419d6d4d8070"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "0434df78-3d18-4e6f-9e13-42252fc92925"}, "columns": ["y"]}], "id": "d05d7e2c-75ba-4d25-9016-618ee15973de", "doc": null}, "type": "DataRange1d", "id": "d05d7e2c-75ba-4d25-9016-618ee15973de"}, {"attributes": {"plot": {"type": "Plot", "id": "b244b655-b62f-4a0a-a71c-fe0e5fdaa64f"}, "doc": null, "bounds": "auto", "id": "e6cb7e8d-baf3-43db-86dd-a649d9b54ace", "location": "min", "formats": {"days": ["%m/%d/%Y"]}, "axis_label": "Datum", "dimension": 0}, "type": "DatetimeAxis", "id": "e6cb7e8d-baf3-43db-86dd-a649d9b54ace"}, {"attributes": {"plot": {"type": "Plot", "id": "b244b655-b62f-4a0a-a71c-fe0e5fdaa64f"}, "doc": null, "bounds": "auto", "dimension": 1, "location": "min", "axis_label": "# artikels", "id": "3aaf5231-1c99-4209-8a4c-c76859e252a1"}, "type": "LinearAxis", "id": "3aaf5231-1c99-4209-8a4c-c76859e252a1"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "b244b655-b62f-4a0a-a71c-fe0e5fdaa64f"}], "id": "e1ee9a12-c986-49ea-9cff-1b53f0f84b8a"}, "type": "PlotContext", "id": "e1ee9a12-c986-49ea-9cff-1b53f0f84b8a"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "2c2ef1c2-4052-44e1-8446-086d4c63a709"}, "axes": [], "title": "voorkomens", "y_range": {"type": "DataRange1d", "id": "d05d7e2c-75ba-4d25-9016-618ee15973de"}, "outer_width": 400, "renderers": [{"type": "DatetimeAxis", "id": "e6cb7e8d-baf3-43db-86dd-a649d9b54ace"}, {"type": "LinearAxis", "id": "3aaf5231-1c99-4209-8a4c-c76859e252a1"}, {"type": "Grid", "id": "ac7426e3-8833-4e1d-a8af-c0045428d9ca"}, {"type": "Grid", "id": "4d83c447-7615-4d18-bfb0-9a0f403d6b3a"}, {"type": "Glyph", "id": "56f068b5-0f1b-4b6d-a521-8e47d2ddfacf"}], "outer_height": 300, "width": 400, "doc": null, "canvas_height": 300, "id": "b244b655-b62f-4a0a-a71c-fe0e5fdaa64f", "height": 300, "tools": [{"type": "PanTool", "id": "298c4e5a-cbfb-4762-8c8f-c7db29316a43"}, {"type": "ZoomTool", "id": "4c922526-2af1-4729-9605-5e8c4f26987e"}, {"type": "ResizeTool", "id": "be0816e6-1b2e-43ac-b1e8-419d6d4d8070"}], "canvas_width": 400}, "type": "Plot", "id": "b244b655-b62f-4a0a-a71c-fe0e5fdaa64f"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "0434df78-3d18-4e6f-9e13-42252fc92925"}, "doc": null, "id": "56f068b5-0f1b-4b6d-a521-8e47d2ddfacf", "xdata_range": {"type": "DataRange1d", "id": "2c2ef1c2-4052-44e1-8446-086d4c63a709"}, "ydata_range": {"type": "DataRange1d", "id": "d05d7e2c-75ba-4d25-9016-618ee15973de"}, "glyphspec": {"line_color": {"value": "#1f77b4"}, "line_alpha": 1.0, "fill_color": "#1f77b4", "title": "voorkomens", "type": "line", "fill_alpha": 1.0, "height": 300, "width": 400, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "tools": "pan,zoom,resize", "x_axis_type": "datetime"}, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "line_width": 1, "angle_units": "deg", "type": "line", "y": {"units": "data", "field": "y"}, "line_alpha": 0.1, "start_angle_units": "deg", "valign": null, "radius_units": "screen", "visible": null, "length_units": "screen", "end_angle_units": "deg", "line_dash_offset": 0, "line_cap": "butt", "line_dash": [], "x": {"units": "data", "field": "x"}, "margin": null, "line_join": "miter", "halign": null}}, "type": "Glyph", "id": "56f068b5-0f1b-4b6d-a521-8e47d2ddfacf"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "2c2ef1c2-4052-44e1-8446-086d4c63a709"}, {"type": "DataRange1d", "id": "d05d7e2c-75ba-4d25-9016-618ee15973de"}], "dimensions": ["width", "height"], "doc": null, "id": "298c4e5a-cbfb-4762-8c8f-c7db29316a43"}, "type": "PanTool", "id": "298c4e5a-cbfb-4762-8c8f-c7db29316a43"}, {"attributes": {"plot": {"type": "Plot", "id": "b244b655-b62f-4a0a-a71c-fe0e5fdaa64f"}, "doc": null, "dimension": 1, "id": "4d83c447-7615-4d18-bfb0-9a0f403d6b3a"}, "type": "Grid", "id": "4d83c447-7615-4d18-bfb0-9a0f403d6b3a"}];
    var modeltype = "PlotContext";
    var elementid = "f5e2d2f9-30d7-4017-b958-44e7c355f53b";
    var plotID = "b244b655-b62f-4a0a-a71c-fe0e5fdaa64f";
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