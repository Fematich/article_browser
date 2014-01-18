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

    var all_models = [{"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "af95b551-4cbc-46d7-9328-5c14d2bf4640"}, {"type": "DataRange1d", "id": "d7f70faa-2569-41b0-9a87-db803c70200b"}], "dimensions": ["width", "height"], "doc": null, "id": "c765bf9d-5fdb-4d2e-b5ce-e85dd05b4eeb"}, "type": "PanTool", "id": "c765bf9d-5fdb-4d2e-b5ce-e85dd05b4eeb"}, {"attributes": {"plot": {"type": "Plot", "id": "dfad3db2-b70c-43cc-b14e-ef5d878152a1"}, "id": "ebfaef28-79e7-4819-a248-00a84ae89708", "doc": null}, "type": "ResizeTool", "id": "ebfaef28-79e7-4819-a248-00a84ae89708"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "6358f8db-5eca-4817-81c4-2dbcef034534"}, "columns": ["x"]}], "id": "af95b551-4cbc-46d7-9328-5c14d2bf4640", "doc": null}, "type": "DataRange1d", "id": "af95b551-4cbc-46d7-9328-5c14d2bf4640"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [19, 58, 19, 9, 9, 10, 7, 8, 4, 1, 3, 2, 4, 5, 1, 1, 1, 1, 2, 2, 4, 4, 2, 2, 1, 1, 2, 2, 3, 1, 2, 2, 1, 1, 5, 2, 1], "x": [1313712000000.0, 1313798400000.0, 1313971200000.0, 1314057600000.0, 1314144000000.0, 1314230400000.0, 1314316800000.0, 1314403200000.0, 1314576000000.0, 1314662400000.0, 1314748800000.0, 1314921600000.0, 1315008000000.0, 1315180800000.0, 1315267200000.0, 1315872000000.0, 1316044800000.0, 1316217600000.0, 1316649600000.0, 1316736000000.0, 1317340800000.0, 1317427200000.0, 1317600000000.0, 1317945600000.0, 1318032000000.0, 1318204800000.0, 1318896000000.0, 1319068800000.0, 1319500800000.0, 1320278400000.0, 1320451200000.0, 1321056000000.0, 1321315200000.0, 1322438400000.0, 1323993600000.0, 1324944000000.0, 1325289600000.0]}, "id": "6358f8db-5eca-4817-81c4-2dbcef034534"}, "type": "ColumnDataSource", "id": "6358f8db-5eca-4817-81c4-2dbcef034534"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "af95b551-4cbc-46d7-9328-5c14d2bf4640"}, "axes": [], "title": "voorkomens", "y_range": {"type": "DataRange1d", "id": "d7f70faa-2569-41b0-9a87-db803c70200b"}, "outer_width": 400, "renderers": [{"type": "DatetimeAxis", "id": "1ece119c-bf92-4aed-beed-4d2bea3634cf"}, {"type": "LinearAxis", "id": "5162f8ec-e8d7-4818-9542-50791085c66e"}, {"type": "Grid", "id": "cba85517-bae9-4994-ad36-a95ded87caaa"}, {"type": "Grid", "id": "6483ee97-57ae-454f-95bf-9906159b3ad3"}, {"type": "Glyph", "id": "3194c34d-0e8a-4f1a-9f40-e406215b552c"}], "outer_height": 300, "width": 400, "doc": null, "canvas_height": 300, "id": "dfad3db2-b70c-43cc-b14e-ef5d878152a1", "height": 300, "tools": [{"type": "PanTool", "id": "c765bf9d-5fdb-4d2e-b5ce-e85dd05b4eeb"}, {"type": "ZoomTool", "id": "f198cf23-6162-4c47-baac-4a318f9fe113"}, {"type": "ResizeTool", "id": "ebfaef28-79e7-4819-a248-00a84ae89708"}], "canvas_width": 400}, "type": "Plot", "id": "dfad3db2-b70c-43cc-b14e-ef5d878152a1"}, {"attributes": {"plot": {"type": "Plot", "id": "dfad3db2-b70c-43cc-b14e-ef5d878152a1"}, "doc": null, "dimension": 0, "id": "cba85517-bae9-4994-ad36-a95ded87caaa"}, "type": "Grid", "id": "cba85517-bae9-4994-ad36-a95ded87caaa"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "6358f8db-5eca-4817-81c4-2dbcef034534"}, "doc": null, "id": "3194c34d-0e8a-4f1a-9f40-e406215b552c", "xdata_range": {"type": "DataRange1d", "id": "af95b551-4cbc-46d7-9328-5c14d2bf4640"}, "ydata_range": {"type": "DataRange1d", "id": "d7f70faa-2569-41b0-9a87-db803c70200b"}, "glyphspec": {"line_color": {"value": "#1f77b4"}, "line_alpha": 1.0, "fill_color": "#1f77b4", "title": "voorkomens", "type": "line", "fill_alpha": 1.0, "height": 300, "width": 400, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "tools": "pan,zoom,resize", "x_axis_type": "datetime"}, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "line_width": 1, "angle_units": "deg", "type": "line", "y": {"units": "data", "field": "y"}, "line_alpha": 0.1, "start_angle_units": "deg", "valign": null, "radius_units": "screen", "visible": null, "length_units": "screen", "end_angle_units": "deg", "line_dash_offset": 0, "line_cap": "butt", "line_dash": [], "x": {"units": "data", "field": "x"}, "margin": null, "line_join": "miter", "halign": null}}, "type": "Glyph", "id": "3194c34d-0e8a-4f1a-9f40-e406215b552c"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "dfad3db2-b70c-43cc-b14e-ef5d878152a1"}], "id": "2c3a8a7b-a1f3-43ab-ba90-c5cca37b85be"}, "type": "PlotContext", "id": "2c3a8a7b-a1f3-43ab-ba90-c5cca37b85be"}, {"attributes": {"plot": {"type": "Plot", "id": "dfad3db2-b70c-43cc-b14e-ef5d878152a1"}, "doc": null, "dimension": 1, "id": "6483ee97-57ae-454f-95bf-9906159b3ad3"}, "type": "Grid", "id": "6483ee97-57ae-454f-95bf-9906159b3ad3"}, {"attributes": {"plot": {"type": "Plot", "id": "dfad3db2-b70c-43cc-b14e-ef5d878152a1"}, "doc": null, "bounds": "auto", "dimension": 1, "location": "min", "axis_label": "# artikels", "id": "5162f8ec-e8d7-4818-9542-50791085c66e"}, "type": "LinearAxis", "id": "5162f8ec-e8d7-4818-9542-50791085c66e"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "af95b551-4cbc-46d7-9328-5c14d2bf4640"}, {"type": "DataRange1d", "id": "d7f70faa-2569-41b0-9a87-db803c70200b"}], "dimensions": ["width", "height"], "id": "f198cf23-6162-4c47-baac-4a318f9fe113"}, "type": "ZoomTool", "id": "f198cf23-6162-4c47-baac-4a318f9fe113"}, {"attributes": {"plot": {"type": "Plot", "id": "dfad3db2-b70c-43cc-b14e-ef5d878152a1"}, "doc": null, "bounds": "auto", "id": "1ece119c-bf92-4aed-beed-4d2bea3634cf", "location": "min", "formats": {"days": ["%m/%d/%Y"]}, "axis_label": "Datum", "dimension": 0}, "type": "DatetimeAxis", "id": "1ece119c-bf92-4aed-beed-4d2bea3634cf"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "6358f8db-5eca-4817-81c4-2dbcef034534"}, "columns": ["y"]}], "id": "d7f70faa-2569-41b0-9a87-db803c70200b", "doc": null}, "type": "DataRange1d", "id": "d7f70faa-2569-41b0-9a87-db803c70200b"}];
    var modeltype = "PlotContext";
    var elementid = "8a9a426e-f274-4545-b41e-7b48f9101cbc";
    var plotID = "dfad3db2-b70c-43cc-b14e-ef5d878152a1";
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