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

    var all_models = [{"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "1f03b879-4a05-49b8-a602-fd76efeb148e"}, {"type": "DataRange1d", "id": "da715eee-31e7-42e9-8578-c322d1d6f5f7"}], "dimensions": ["width", "height"], "doc": null, "id": "bd7ed743-58bd-44ca-9b89-93ce258d8752"}, "type": "PanTool", "id": "bd7ed743-58bd-44ca-9b89-93ce258d8752"}, {"attributes": {"plot": {"type": "Plot", "id": "1b2763e2-8df5-4a82-8c83-cfef54283510"}, "doc": null, "dimension": 1, "id": "31a66d96-6534-4427-8bdd-4749cdcf57f1"}, "type": "Grid", "id": "31a66d96-6534-4427-8bdd-4749cdcf57f1"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "1f03b879-4a05-49b8-a602-fd76efeb148e"}, "axes": [], "title": "voorkomens", "y_range": {"type": "DataRange1d", "id": "da715eee-31e7-42e9-8578-c322d1d6f5f7"}, "outer_width": 400, "renderers": [{"type": "DatetimeAxis", "id": "04d64331-267e-4188-80c1-fc69f3ef27c5"}, {"type": "LinearAxis", "id": "41ac648d-e99e-4c9b-b63f-61b3987c858f"}, {"type": "Grid", "id": "befec4c0-3c33-4236-a66f-ba619d3a80df"}, {"type": "Grid", "id": "31a66d96-6534-4427-8bdd-4749cdcf57f1"}, {"type": "Glyph", "id": "3f79aa89-c83a-42ce-a0ff-0e027bcf5bec"}], "outer_height": 300, "width": 400, "doc": null, "canvas_height": 300, "id": "1b2763e2-8df5-4a82-8c83-cfef54283510", "height": 300, "tools": [{"type": "PanTool", "id": "bd7ed743-58bd-44ca-9b89-93ce258d8752"}, {"type": "ZoomTool", "id": "b83be297-b04c-4d50-b819-5de52ed2b40c"}, {"type": "ResizeTool", "id": "684865c9-fe75-49db-a5b6-ed46ff364314"}], "canvas_width": 400}, "type": "Plot", "id": "1b2763e2-8df5-4a82-8c83-cfef54283510"}, {"attributes": {"plot": {"type": "Plot", "id": "1b2763e2-8df5-4a82-8c83-cfef54283510"}, "doc": null, "bounds": "auto", "id": "04d64331-267e-4188-80c1-fc69f3ef27c5", "location": "min", "formats": {"days": ["%m/%d/%Y"]}, "axis_label": "Datum", "dimension": 0}, "type": "DatetimeAxis", "id": "04d64331-267e-4188-80c1-fc69f3ef27c5"}, {"attributes": {"plot": {"type": "Plot", "id": "1b2763e2-8df5-4a82-8c83-cfef54283510"}, "doc": null, "dimension": 0, "id": "befec4c0-3c33-4236-a66f-ba619d3a80df"}, "type": "Grid", "id": "befec4c0-3c33-4236-a66f-ba619d3a80df"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "1b2763e2-8df5-4a82-8c83-cfef54283510"}], "id": "52895b67-ac1a-4027-819c-e75e4d2aa85e"}, "type": "PlotContext", "id": "52895b67-ac1a-4027-819c-e75e4d2aa85e"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "71cfdfb5-be24-470c-84c9-10e2d555aa8d"}, "columns": ["y"]}], "id": "da715eee-31e7-42e9-8578-c322d1d6f5f7", "doc": null}, "type": "DataRange1d", "id": "da715eee-31e7-42e9-8578-c322d1d6f5f7"}, {"attributes": {"plot": {"type": "Plot", "id": "1b2763e2-8df5-4a82-8c83-cfef54283510"}, "doc": null, "bounds": "auto", "dimension": 1, "location": "min", "axis_label": "# artikels", "id": "41ac648d-e99e-4c9b-b63f-61b3987c858f"}, "type": "LinearAxis", "id": "41ac648d-e99e-4c9b-b63f-61b3987c858f"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "71cfdfb5-be24-470c-84c9-10e2d555aa8d"}, "doc": null, "id": "3f79aa89-c83a-42ce-a0ff-0e027bcf5bec", "xdata_range": {"type": "DataRange1d", "id": "1f03b879-4a05-49b8-a602-fd76efeb148e"}, "ydata_range": {"type": "DataRange1d", "id": "da715eee-31e7-42e9-8578-c322d1d6f5f7"}, "glyphspec": {"line_color": {"value": "#1f77b4"}, "line_alpha": 1.0, "fill_color": "#1f77b4", "title": "voorkomens", "type": "line", "fill_alpha": 1.0, "height": 300, "width": 400, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "tools": "pan,zoom,resize", "x_axis_type": "datetime"}, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "line_width": 1, "angle_units": "deg", "type": "line", "y": {"units": "data", "field": "y"}, "line_alpha": 0.1, "start_angle_units": "deg", "valign": null, "radius_units": "screen", "visible": null, "length_units": "screen", "end_angle_units": "deg", "line_dash_offset": 0, "line_cap": "butt", "line_dash": [], "x": {"units": "data", "field": "x"}, "margin": null, "line_join": "miter", "halign": null}}, "type": "Glyph", "id": "3f79aa89-c83a-42ce-a0ff-0e027bcf5bec"}, {"attributes": {"plot": {"type": "Plot", "id": "1b2763e2-8df5-4a82-8c83-cfef54283510"}, "id": "684865c9-fe75-49db-a5b6-ed46ff364314", "doc": null}, "type": "ResizeTool", "id": "684865c9-fe75-49db-a5b6-ed46ff364314"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "71cfdfb5-be24-470c-84c9-10e2d555aa8d"}, "columns": ["x"]}], "id": "1f03b879-4a05-49b8-a602-fd76efeb148e", "doc": null}, "type": "DataRange1d", "id": "1f03b879-4a05-49b8-a602-fd76efeb148e"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "1f03b879-4a05-49b8-a602-fd76efeb148e"}, {"type": "DataRange1d", "id": "da715eee-31e7-42e9-8578-c322d1d6f5f7"}], "dimensions": ["width", "height"], "id": "b83be297-b04c-4d50-b819-5de52ed2b40c"}, "type": "ZoomTool", "id": "b83be297-b04c-4d50-b819-5de52ed2b40c"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [1, 1, 1, 1, 8, 2, 3, 1, 1, 1, 1, 1, 1, 1, 6, 1, 1, 1, 1], "x": [1298419200000.0, 1298505600000.0, 1298678400000.0, 1298937600000.0, 1299888000000.0, 1300060800000.0, 1300147200000.0, 1300924800000.0, 1301356800000.0, 1301443200000.0, 1301875200000.0, 1304294400000.0, 1305936000000.0, 1306108800000.0, 1309392000000.0, 1310515200000.0, 1315180800000.0, 1323302400000.0, 1323820800000.0]}, "id": "71cfdfb5-be24-470c-84c9-10e2d555aa8d"}, "type": "ColumnDataSource", "id": "71cfdfb5-be24-470c-84c9-10e2d555aa8d"}];
    var modeltype = "PlotContext";
    var elementid = "b9b44c6b-26b4-4f4e-a3b3-1c890ccbbdc5";
    var plotID = "1b2763e2-8df5-4a82-8c83-cfef54283510";
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