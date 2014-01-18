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

    var all_models = [{"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "bace8ae7-84ca-4653-bf97-874a28ac5d19"}, {"type": "DataRange1d", "id": "da1fb94a-02d5-4ce9-9376-7ea4ff15a466"}], "dimensions": ["width", "height"], "id": "2d77ba8e-b78c-41bf-9431-8374e6b77b2f"}, "type": "ZoomTool", "id": "2d77ba8e-b78c-41bf-9431-8374e6b77b2f"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "a5de525b-7a0f-46a9-aff6-8fcb1131b679"}, "columns": ["y"]}], "id": "da1fb94a-02d5-4ce9-9376-7ea4ff15a466", "doc": null}, "type": "DataRange1d", "id": "da1fb94a-02d5-4ce9-9376-7ea4ff15a466"}, {"attributes": {"plot": {"type": "Plot", "id": "99bc6daf-7700-4b82-b7e1-11ae80513c31"}, "id": "cdbd4503-8ce1-4dec-9566-1ed3224dee7e", "doc": null}, "type": "ResizeTool", "id": "cdbd4503-8ce1-4dec-9566-1ed3224dee7e"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "a5de525b-7a0f-46a9-aff6-8fcb1131b679"}, "doc": null, "id": "85155709-c058-4a56-959a-f38b76220185", "xdata_range": {"type": "DataRange1d", "id": "bace8ae7-84ca-4653-bf97-874a28ac5d19"}, "ydata_range": {"type": "DataRange1d", "id": "da1fb94a-02d5-4ce9-9376-7ea4ff15a466"}, "glyphspec": {"line_color": {"value": "#1f77b4"}, "line_alpha": 1.0, "fill_color": "#1f77b4", "title": "voorkomens", "type": "line", "fill_alpha": 1.0, "height": 300, "width": 400, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "tools": "pan,zoom,resize", "x_axis_type": "datetime"}, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "line_width": 1, "angle_units": "deg", "type": "line", "y": {"units": "data", "field": "y"}, "line_alpha": 0.1, "start_angle_units": "deg", "valign": null, "radius_units": "screen", "visible": null, "length_units": "screen", "end_angle_units": "deg", "line_dash_offset": 0, "line_cap": "butt", "line_dash": [], "x": {"units": "data", "field": "x"}, "margin": null, "line_join": "miter", "halign": null}}, "type": "Glyph", "id": "85155709-c058-4a56-959a-f38b76220185"}, {"attributes": {"plot": {"type": "Plot", "id": "99bc6daf-7700-4b82-b7e1-11ae80513c31"}, "doc": null, "bounds": "auto", "id": "d43ac40c-6e05-4cd3-b29d-1dcefe5e0608", "location": "min", "formats": {"days": ["%m/%d/%Y"]}, "axis_label": "Datum", "dimension": 0}, "type": "DatetimeAxis", "id": "d43ac40c-6e05-4cd3-b29d-1dcefe5e0608"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "a5de525b-7a0f-46a9-aff6-8fcb1131b679"}, "columns": ["x"]}], "id": "bace8ae7-84ca-4653-bf97-874a28ac5d19", "doc": null}, "type": "DataRange1d", "id": "bace8ae7-84ca-4653-bf97-874a28ac5d19"}, {"attributes": {"plot": {"type": "Plot", "id": "99bc6daf-7700-4b82-b7e1-11ae80513c31"}, "doc": null, "dimension": 1, "id": "f1625981-07bf-46d5-8ca9-5dff0a911810"}, "type": "Grid", "id": "f1625981-07bf-46d5-8ca9-5dff0a911810"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "bace8ae7-84ca-4653-bf97-874a28ac5d19"}, {"type": "DataRange1d", "id": "da1fb94a-02d5-4ce9-9376-7ea4ff15a466"}], "dimensions": ["width", "height"], "doc": null, "id": "6ebdd9d0-18c8-44c0-a6e0-e02addf994fe"}, "type": "PanTool", "id": "6ebdd9d0-18c8-44c0-a6e0-e02addf994fe"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "bace8ae7-84ca-4653-bf97-874a28ac5d19"}, "axes": [], "title": "voorkomens", "y_range": {"type": "DataRange1d", "id": "da1fb94a-02d5-4ce9-9376-7ea4ff15a466"}, "outer_width": 400, "renderers": [{"type": "DatetimeAxis", "id": "d43ac40c-6e05-4cd3-b29d-1dcefe5e0608"}, {"type": "LinearAxis", "id": "d2970b10-76c0-49dc-a84e-e09b93040c8c"}, {"type": "Grid", "id": "95a19db9-16f5-4601-879e-90f261c6f059"}, {"type": "Grid", "id": "f1625981-07bf-46d5-8ca9-5dff0a911810"}, {"type": "Glyph", "id": "85155709-c058-4a56-959a-f38b76220185"}], "outer_height": 300, "width": 400, "doc": null, "canvas_height": 300, "id": "99bc6daf-7700-4b82-b7e1-11ae80513c31", "height": 300, "tools": [{"type": "PanTool", "id": "6ebdd9d0-18c8-44c0-a6e0-e02addf994fe"}, {"type": "ZoomTool", "id": "2d77ba8e-b78c-41bf-9431-8374e6b77b2f"}, {"type": "ResizeTool", "id": "cdbd4503-8ce1-4dec-9566-1ed3224dee7e"}], "canvas_width": 400}, "type": "Plot", "id": "99bc6daf-7700-4b82-b7e1-11ae80513c31"}, {"attributes": {"plot": {"type": "Plot", "id": "99bc6daf-7700-4b82-b7e1-11ae80513c31"}, "doc": null, "dimension": 0, "id": "95a19db9-16f5-4601-879e-90f261c6f059"}, "type": "Grid", "id": "95a19db9-16f5-4601-879e-90f261c6f059"}, {"attributes": {"plot": {"type": "Plot", "id": "99bc6daf-7700-4b82-b7e1-11ae80513c31"}, "doc": null, "bounds": "auto", "dimension": 1, "location": "min", "axis_label": "# artikels", "id": "d2970b10-76c0-49dc-a84e-e09b93040c8c"}, "type": "LinearAxis", "id": "d2970b10-76c0-49dc-a84e-e09b93040c8c"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [4, 6, 3, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 2, 2, 1, 1, 2, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1], "x": [1305504000000.0, 1305590400000.0, 1305763200000.0, 1305849600000.0, 1305936000000.0, 1306108800000.0, 1306195200000.0, 1306713600000.0, 1307318400000.0, 1307664000000.0, 1308355200000.0, 1308787200000.0, 1309305600000.0, 1309564800000.0, 1309737600000.0, 1310169600000.0, 1314403200000.0, 1315180800000.0, 1315872000000.0, 1316390400000.0, 1316476800000.0, 1317945600000.0, 1320451200000.0, 1321488000000.0, 1321574400000.0, 1321660800000.0, 1322438400000.0, 1322524800000.0, 1323129600000.0, 1323475200000.0, 1325289600000.0]}, "id": "a5de525b-7a0f-46a9-aff6-8fcb1131b679"}, "type": "ColumnDataSource", "id": "a5de525b-7a0f-46a9-aff6-8fcb1131b679"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "99bc6daf-7700-4b82-b7e1-11ae80513c31"}], "id": "6d2f252a-7b5e-40c4-8cf8-049aa6bce825"}, "type": "PlotContext", "id": "6d2f252a-7b5e-40c4-8cf8-049aa6bce825"}];
    var modeltype = "PlotContext";
    var elementid = "d4bd77d8-164f-4e02-821b-8dc33eb7d903";
    var plotID = "99bc6daf-7700-4b82-b7e1-11ae80513c31";
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