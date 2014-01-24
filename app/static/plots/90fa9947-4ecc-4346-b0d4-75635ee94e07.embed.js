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

    var all_models = [{"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "19e59b0f-7e55-4e9a-a30b-76884767fc57"}, "columns": ["x"]}], "id": "2705f5b1-061c-4682-bb69-9a85d8a4dae1", "doc": null}, "type": "DataRange1d", "id": "2705f5b1-061c-4682-bb69-9a85d8a4dae1"}, {"attributes": {"plot": {"type": "Plot", "id": "90fa9947-4ecc-4346-b0d4-75635ee94e07"}, "doc": null, "bounds": "auto", "dimension": 1, "location": "min", "axis_label": "# artikels", "id": "d63b7ef6-0ef8-4388-900a-0a58034b07ac"}, "type": "LinearAxis", "id": "d63b7ef6-0ef8-4388-900a-0a58034b07ac"}, {"attributes": {"plot": {"type": "Plot", "id": "90fa9947-4ecc-4346-b0d4-75635ee94e07"}, "doc": null, "dimension": 0, "id": "79948744-0bc9-4c38-9751-88c4daf6887b"}, "type": "Grid", "id": "79948744-0bc9-4c38-9751-88c4daf6887b"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [17, 8, 3, 4, 3, 2, 2, 1, 2, 4, 11, 3, 3, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 6, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 3], "x": [1298419200000.0, 1298505600000.0, 1298592000000.0, 1298678400000.0, 1298851200000.0, 1298937600000.0, 1299110400000.0, 1299196800000.0, 1299283200000.0, 1299542400000.0, 1299888000000.0, 1300060800000.0, 1300147200000.0, 1300752000000.0, 1300924800000.0, 1301011200000.0, 1301097600000.0, 1301270400000.0, 1301356800000.0, 1301443200000.0, 1301875200000.0, 1304294400000.0, 1305936000000.0, 1306108800000.0, 1308009600000.0, 1308873600000.0, 1308960000000.0, 1309392000000.0, 1309564800000.0, 1310515200000.0, 1311811200000.0, 1313107200000.0, 1313452800000.0, 1315008000000.0, 1315180800000.0, 1323302400000.0, 1323388800000.0, 1323820800000.0, 1324684800000.0]}, "id": "19e59b0f-7e55-4e9a-a30b-76884767fc57"}, "type": "ColumnDataSource", "id": "19e59b0f-7e55-4e9a-a30b-76884767fc57"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "2705f5b1-061c-4682-bb69-9a85d8a4dae1"}, "axes": [], "title": "voorkomens", "y_range": {"type": "DataRange1d", "id": "ee14911e-dea5-4609-8de8-fadc3986d947"}, "outer_width": 400, "renderers": [{"type": "DatetimeAxis", "id": "9c43ca48-0955-467e-bd64-15e5a07fedc8"}, {"type": "LinearAxis", "id": "d63b7ef6-0ef8-4388-900a-0a58034b07ac"}, {"type": "Grid", "id": "79948744-0bc9-4c38-9751-88c4daf6887b"}, {"type": "Grid", "id": "dd5b6252-2eaa-401f-9ed7-289940e891a3"}, {"type": "Glyph", "id": "f65407b6-8ab4-4109-9fef-31f68fbded84"}], "outer_height": 300, "width": 400, "doc": null, "canvas_height": 300, "id": "90fa9947-4ecc-4346-b0d4-75635ee94e07", "height": 300, "tools": [{"type": "PanTool", "id": "f01eba80-b3ca-4f63-857f-90d0902a26bf"}, {"type": "ZoomTool", "id": "bf8fe14b-2b0d-408d-9046-9ffc98593298"}, {"type": "ResizeTool", "id": "8853887f-e031-4e02-9c8b-cd2fb5e4d46d"}], "canvas_width": 400}, "type": "Plot", "id": "90fa9947-4ecc-4346-b0d4-75635ee94e07"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "90fa9947-4ecc-4346-b0d4-75635ee94e07"}], "id": "32929920-7e99-44b6-9761-f39d419166fd"}, "type": "PlotContext", "id": "32929920-7e99-44b6-9761-f39d419166fd"}, {"attributes": {"plot": {"type": "Plot", "id": "90fa9947-4ecc-4346-b0d4-75635ee94e07"}, "id": "8853887f-e031-4e02-9c8b-cd2fb5e4d46d", "doc": null}, "type": "ResizeTool", "id": "8853887f-e031-4e02-9c8b-cd2fb5e4d46d"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "19e59b0f-7e55-4e9a-a30b-76884767fc57"}, "doc": null, "id": "f65407b6-8ab4-4109-9fef-31f68fbded84", "xdata_range": {"type": "DataRange1d", "id": "2705f5b1-061c-4682-bb69-9a85d8a4dae1"}, "ydata_range": {"type": "DataRange1d", "id": "ee14911e-dea5-4609-8de8-fadc3986d947"}, "glyphspec": {"line_color": {"value": "#1f77b4"}, "line_alpha": 1.0, "fill_color": "#1f77b4", "title": "voorkomens", "type": "line", "fill_alpha": 1.0, "height": 300, "width": 400, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "tools": "pan,zoom,resize", "x_axis_type": "datetime"}, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "line_width": 1, "angle_units": "deg", "type": "line", "y": {"units": "data", "field": "y"}, "line_alpha": 0.1, "start_angle_units": "deg", "valign": null, "radius_units": "screen", "visible": null, "length_units": "screen", "end_angle_units": "deg", "line_dash_offset": 0, "line_cap": "butt", "line_dash": [], "x": {"units": "data", "field": "x"}, "margin": null, "line_join": "miter", "halign": null}}, "type": "Glyph", "id": "f65407b6-8ab4-4109-9fef-31f68fbded84"}, {"attributes": {"plot": {"type": "Plot", "id": "90fa9947-4ecc-4346-b0d4-75635ee94e07"}, "doc": null, "dimension": 1, "id": "dd5b6252-2eaa-401f-9ed7-289940e891a3"}, "type": "Grid", "id": "dd5b6252-2eaa-401f-9ed7-289940e891a3"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "2705f5b1-061c-4682-bb69-9a85d8a4dae1"}, {"type": "DataRange1d", "id": "ee14911e-dea5-4609-8de8-fadc3986d947"}], "dimensions": ["width", "height"], "doc": null, "id": "f01eba80-b3ca-4f63-857f-90d0902a26bf"}, "type": "PanTool", "id": "f01eba80-b3ca-4f63-857f-90d0902a26bf"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "19e59b0f-7e55-4e9a-a30b-76884767fc57"}, "columns": ["y"]}], "id": "ee14911e-dea5-4609-8de8-fadc3986d947", "doc": null}, "type": "DataRange1d", "id": "ee14911e-dea5-4609-8de8-fadc3986d947"}, {"attributes": {"plot": {"type": "Plot", "id": "90fa9947-4ecc-4346-b0d4-75635ee94e07"}, "doc": null, "bounds": "auto", "id": "9c43ca48-0955-467e-bd64-15e5a07fedc8", "location": "min", "formats": {"days": ["%m/%d/%Y"]}, "axis_label": "Datum", "dimension": 0}, "type": "DatetimeAxis", "id": "9c43ca48-0955-467e-bd64-15e5a07fedc8"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "2705f5b1-061c-4682-bb69-9a85d8a4dae1"}, {"type": "DataRange1d", "id": "ee14911e-dea5-4609-8de8-fadc3986d947"}], "dimensions": ["width", "height"], "id": "bf8fe14b-2b0d-408d-9046-9ffc98593298"}, "type": "ZoomTool", "id": "bf8fe14b-2b0d-408d-9046-9ffc98593298"}];
    var modeltype = "PlotContext";
    var elementid = "70f64b0f-cdec-4a3b-a8aa-30af1ab724ab";
    var plotID = "90fa9947-4ecc-4346-b0d4-75635ee94e07";
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