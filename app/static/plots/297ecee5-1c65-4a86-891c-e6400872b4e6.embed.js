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

    var all_models = [{"attributes": {"plot": {"type": "Plot", "id": "297ecee5-1c65-4a86-891c-e6400872b4e6"}, "doc": null, "dimension": 1, "id": "7ff9e6e0-b1f6-42ca-883d-32e11e348088"}, "type": "Grid", "id": "7ff9e6e0-b1f6-42ca-883d-32e11e348088"}, {"attributes": {"plot": {"type": "Plot", "id": "297ecee5-1c65-4a86-891c-e6400872b4e6"}, "doc": null, "bounds": "auto", "dimension": 1, "location": "min", "axis_label": "# artikels", "id": "a7fcebe8-cfca-4565-97db-fcd8bcd15788"}, "type": "LinearAxis", "id": "a7fcebe8-cfca-4565-97db-fcd8bcd15788"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "e484883f-100c-4c8e-ac27-3c9cb7257a86"}, "columns": ["y"]}], "id": "a2d3e10f-84be-4c0f-9713-471c58aeffa9", "doc": null}, "type": "DataRange1d", "id": "a2d3e10f-84be-4c0f-9713-471c58aeffa9"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "0a03950c-7068-4537-838a-3b68f3e76c12"}, {"type": "DataRange1d", "id": "a2d3e10f-84be-4c0f-9713-471c58aeffa9"}], "dimensions": ["width", "height"], "doc": null, "id": "c9ef5558-296b-4a50-bf5b-e7656469ba38"}, "type": "PanTool", "id": "c9ef5558-296b-4a50-bf5b-e7656469ba38"}, {"attributes": {"plot": {"type": "Plot", "id": "297ecee5-1c65-4a86-891c-e6400872b4e6"}, "doc": null, "dimension": 0, "id": "82412be2-d6ae-4c3e-908b-8a6c5a3c02e6"}, "type": "Grid", "id": "82412be2-d6ae-4c3e-908b-8a6c5a3c02e6"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [16, 7, 3, 3, 3, 1, 2, 1, 2, 4, 3, 1, 1, 1, 2, 1, 4, 1, 1, 1, 1, 1, 4, 1, 1, 3], "x": [1298419200000.0, 1298505600000.0, 1298592000000.0, 1298678400000.0, 1298851200000.0, 1298937600000.0, 1299110400000.0, 1299196800000.0, 1299283200000.0, 1299542400000.0, 1299888000000.0, 1300060800000.0, 1300752000000.0, 1301011200000.0, 1301097600000.0, 1301270400000.0, 1308009600000.0, 1308873600000.0, 1308960000000.0, 1309564800000.0, 1311811200000.0, 1313107200000.0, 1313452800000.0, 1315008000000.0, 1323388800000.0, 1324684800000.0]}, "id": "e484883f-100c-4c8e-ac27-3c9cb7257a86"}, "type": "ColumnDataSource", "id": "e484883f-100c-4c8e-ac27-3c9cb7257a86"}, {"attributes": {"plot": {"type": "Plot", "id": "297ecee5-1c65-4a86-891c-e6400872b4e6"}, "doc": null, "bounds": "auto", "id": "6940f342-bb6d-4e74-8159-f7af2888502b", "location": "min", "formats": {"days": ["%m/%d/%Y"]}, "axis_label": "Datum", "dimension": 0}, "type": "DatetimeAxis", "id": "6940f342-bb6d-4e74-8159-f7af2888502b"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "297ecee5-1c65-4a86-891c-e6400872b4e6"}], "id": "3b02dda9-5f03-4428-b46a-40bf79388416"}, "type": "PlotContext", "id": "3b02dda9-5f03-4428-b46a-40bf79388416"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "e484883f-100c-4c8e-ac27-3c9cb7257a86"}, "columns": ["x"]}], "id": "0a03950c-7068-4537-838a-3b68f3e76c12", "doc": null}, "type": "DataRange1d", "id": "0a03950c-7068-4537-838a-3b68f3e76c12"}, {"attributes": {"plot": {"type": "Plot", "id": "297ecee5-1c65-4a86-891c-e6400872b4e6"}, "id": "2bdd4171-75d0-43a5-87cc-d8ae50934b4d", "doc": null}, "type": "ResizeTool", "id": "2bdd4171-75d0-43a5-87cc-d8ae50934b4d"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "0a03950c-7068-4537-838a-3b68f3e76c12"}, {"type": "DataRange1d", "id": "a2d3e10f-84be-4c0f-9713-471c58aeffa9"}], "dimensions": ["width", "height"], "id": "9e216a98-7a62-490f-bce6-19543b856c79"}, "type": "ZoomTool", "id": "9e216a98-7a62-490f-bce6-19543b856c79"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "0a03950c-7068-4537-838a-3b68f3e76c12"}, "axes": [], "title": "voorkomens", "y_range": {"type": "DataRange1d", "id": "a2d3e10f-84be-4c0f-9713-471c58aeffa9"}, "outer_width": 400, "renderers": [{"type": "DatetimeAxis", "id": "6940f342-bb6d-4e74-8159-f7af2888502b"}, {"type": "LinearAxis", "id": "a7fcebe8-cfca-4565-97db-fcd8bcd15788"}, {"type": "Grid", "id": "82412be2-d6ae-4c3e-908b-8a6c5a3c02e6"}, {"type": "Grid", "id": "7ff9e6e0-b1f6-42ca-883d-32e11e348088"}, {"type": "Glyph", "id": "ecc06898-91d7-484a-9b12-b5923023c9f5"}], "outer_height": 300, "width": 400, "doc": null, "canvas_height": 300, "id": "297ecee5-1c65-4a86-891c-e6400872b4e6", "height": 300, "tools": [{"type": "PanTool", "id": "c9ef5558-296b-4a50-bf5b-e7656469ba38"}, {"type": "ZoomTool", "id": "9e216a98-7a62-490f-bce6-19543b856c79"}, {"type": "ResizeTool", "id": "2bdd4171-75d0-43a5-87cc-d8ae50934b4d"}], "canvas_width": 400}, "type": "Plot", "id": "297ecee5-1c65-4a86-891c-e6400872b4e6"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "e484883f-100c-4c8e-ac27-3c9cb7257a86"}, "doc": null, "id": "ecc06898-91d7-484a-9b12-b5923023c9f5", "xdata_range": {"type": "DataRange1d", "id": "0a03950c-7068-4537-838a-3b68f3e76c12"}, "ydata_range": {"type": "DataRange1d", "id": "a2d3e10f-84be-4c0f-9713-471c58aeffa9"}, "glyphspec": {"line_color": {"value": "#1f77b4"}, "line_alpha": 1.0, "fill_color": "#1f77b4", "title": "voorkomens", "type": "line", "fill_alpha": 1.0, "height": 300, "width": 400, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "tools": "pan,zoom,resize", "x_axis_type": "datetime"}, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "line_width": 1, "angle_units": "deg", "type": "line", "y": {"units": "data", "field": "y"}, "line_alpha": 0.1, "start_angle_units": "deg", "valign": null, "radius_units": "screen", "visible": null, "length_units": "screen", "end_angle_units": "deg", "line_dash_offset": 0, "line_cap": "butt", "line_dash": [], "x": {"units": "data", "field": "x"}, "margin": null, "line_join": "miter", "halign": null}}, "type": "Glyph", "id": "ecc06898-91d7-484a-9b12-b5923023c9f5"}];
    var modeltype = "PlotContext";
    var elementid = "a72a37f2-7f00-4f6d-8421-9d53db99f158";
    var plotID = "297ecee5-1c65-4a86-891c-e6400872b4e6";
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