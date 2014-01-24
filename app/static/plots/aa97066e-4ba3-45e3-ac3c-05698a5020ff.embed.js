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

    var all_models = [{"attributes": {"plot": {"type": "Plot", "id": "aa97066e-4ba3-45e3-ac3c-05698a5020ff"}, "doc": null, "dimension": 1, "id": "65e26582-783d-4c4f-bd0f-daf959155385"}, "type": "Grid", "id": "65e26582-783d-4c4f-bd0f-daf959155385"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "647d930e-c06c-4660-b71c-03ff78650e58"}, {"type": "DataRange1d", "id": "60ab41be-665c-4209-aec0-a065cf09e450"}], "dimensions": ["width", "height"], "doc": null, "id": "ea0744dd-7687-4ee9-8936-001ac0329f8b"}, "type": "PanTool", "id": "ea0744dd-7687-4ee9-8936-001ac0329f8b"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "59cbb827-d9f2-4a00-aec1-a0754596c2c1"}, "columns": ["x"]}], "id": "647d930e-c06c-4660-b71c-03ff78650e58", "doc": null}, "type": "DataRange1d", "id": "647d930e-c06c-4660-b71c-03ff78650e58"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [17, 8, 3, 4, 3, 2, 2, 1, 2, 4, 11, 3, 3, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 6, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 3], "x": [1298419200000.0, 1298505600000.0, 1298592000000.0, 1298678400000.0, 1298851200000.0, 1298937600000.0, 1299110400000.0, 1299196800000.0, 1299283200000.0, 1299542400000.0, 1299888000000.0, 1300060800000.0, 1300147200000.0, 1300752000000.0, 1300924800000.0, 1301011200000.0, 1301097600000.0, 1301270400000.0, 1301356800000.0, 1301443200000.0, 1301875200000.0, 1304294400000.0, 1305936000000.0, 1306108800000.0, 1308009600000.0, 1308873600000.0, 1308960000000.0, 1309392000000.0, 1309564800000.0, 1310515200000.0, 1311811200000.0, 1313107200000.0, 1313452800000.0, 1315008000000.0, 1315180800000.0, 1323302400000.0, 1323388800000.0, 1323820800000.0, 1324684800000.0]}, "id": "59cbb827-d9f2-4a00-aec1-a0754596c2c1"}, "type": "ColumnDataSource", "id": "59cbb827-d9f2-4a00-aec1-a0754596c2c1"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "647d930e-c06c-4660-b71c-03ff78650e58"}, "axes": [], "title": "voorkomens", "y_range": {"type": "DataRange1d", "id": "60ab41be-665c-4209-aec0-a065cf09e450"}, "outer_width": 400, "renderers": [{"type": "DatetimeAxis", "id": "cc99c707-add6-4413-ba10-9251605e3a3d"}, {"type": "LinearAxis", "id": "8473af18-9ee8-4d60-8bc8-0f64052aca23"}, {"type": "Grid", "id": "7275dd94-eb05-40da-859d-b5346a1bcd42"}, {"type": "Grid", "id": "65e26582-783d-4c4f-bd0f-daf959155385"}, {"type": "Glyph", "id": "dec55ed7-47bd-46f8-b918-cbbea21a2f28"}], "outer_height": 300, "width": 400, "doc": null, "canvas_height": 300, "id": "aa97066e-4ba3-45e3-ac3c-05698a5020ff", "height": 300, "tools": [{"type": "PanTool", "id": "ea0744dd-7687-4ee9-8936-001ac0329f8b"}, {"type": "ZoomTool", "id": "664f6de7-b30a-4bcf-b3a6-9f0c2c49707d"}, {"type": "ResizeTool", "id": "ad6dbf22-b205-4c44-a3aa-25e435ddc820"}], "canvas_width": 400}, "type": "Plot", "id": "aa97066e-4ba3-45e3-ac3c-05698a5020ff"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "59cbb827-d9f2-4a00-aec1-a0754596c2c1"}, "columns": ["y"]}], "id": "60ab41be-665c-4209-aec0-a065cf09e450", "doc": null}, "type": "DataRange1d", "id": "60ab41be-665c-4209-aec0-a065cf09e450"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "647d930e-c06c-4660-b71c-03ff78650e58"}, {"type": "DataRange1d", "id": "60ab41be-665c-4209-aec0-a065cf09e450"}], "dimensions": ["width", "height"], "id": "664f6de7-b30a-4bcf-b3a6-9f0c2c49707d"}, "type": "ZoomTool", "id": "664f6de7-b30a-4bcf-b3a6-9f0c2c49707d"}, {"attributes": {"plot": {"type": "Plot", "id": "aa97066e-4ba3-45e3-ac3c-05698a5020ff"}, "doc": null, "dimension": 0, "id": "7275dd94-eb05-40da-859d-b5346a1bcd42"}, "type": "Grid", "id": "7275dd94-eb05-40da-859d-b5346a1bcd42"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "aa97066e-4ba3-45e3-ac3c-05698a5020ff"}], "id": "b1ede190-2c09-44fa-9e47-3ab7090ed64b"}, "type": "PlotContext", "id": "b1ede190-2c09-44fa-9e47-3ab7090ed64b"}, {"attributes": {"plot": {"type": "Plot", "id": "aa97066e-4ba3-45e3-ac3c-05698a5020ff"}, "doc": null, "bounds": "auto", "dimension": 1, "location": "min", "axis_label": "# artikels", "id": "8473af18-9ee8-4d60-8bc8-0f64052aca23"}, "type": "LinearAxis", "id": "8473af18-9ee8-4d60-8bc8-0f64052aca23"}, {"attributes": {"plot": {"type": "Plot", "id": "aa97066e-4ba3-45e3-ac3c-05698a5020ff"}, "id": "ad6dbf22-b205-4c44-a3aa-25e435ddc820", "doc": null}, "type": "ResizeTool", "id": "ad6dbf22-b205-4c44-a3aa-25e435ddc820"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "59cbb827-d9f2-4a00-aec1-a0754596c2c1"}, "doc": null, "id": "dec55ed7-47bd-46f8-b918-cbbea21a2f28", "xdata_range": {"type": "DataRange1d", "id": "647d930e-c06c-4660-b71c-03ff78650e58"}, "ydata_range": {"type": "DataRange1d", "id": "60ab41be-665c-4209-aec0-a065cf09e450"}, "glyphspec": {"line_color": {"value": "#1f77b4"}, "line_alpha": 1.0, "fill_color": "#1f77b4", "title": "voorkomens", "type": "line", "fill_alpha": 1.0, "height": 300, "width": 400, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "tools": "pan,zoom,resize", "x_axis_type": "datetime"}, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "line_width": 1, "angle_units": "deg", "type": "line", "y": {"units": "data", "field": "y"}, "line_alpha": 0.1, "start_angle_units": "deg", "valign": null, "radius_units": "screen", "visible": null, "length_units": "screen", "end_angle_units": "deg", "line_dash_offset": 0, "line_cap": "butt", "line_dash": [], "x": {"units": "data", "field": "x"}, "margin": null, "line_join": "miter", "halign": null}}, "type": "Glyph", "id": "dec55ed7-47bd-46f8-b918-cbbea21a2f28"}, {"attributes": {"plot": {"type": "Plot", "id": "aa97066e-4ba3-45e3-ac3c-05698a5020ff"}, "doc": null, "bounds": "auto", "id": "cc99c707-add6-4413-ba10-9251605e3a3d", "location": "min", "formats": {"days": ["%m/%d/%Y"]}, "axis_label": "Datum", "dimension": 0}, "type": "DatetimeAxis", "id": "cc99c707-add6-4413-ba10-9251605e3a3d"}];
    var modeltype = "PlotContext";
    var elementid = "10da2726-acb3-47f9-b7de-c501777fe1af";
    var plotID = "aa97066e-4ba3-45e3-ac3c-05698a5020ff";
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