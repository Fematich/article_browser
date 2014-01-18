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

    var all_models = [{"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [1, 2, 1, 3, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 4, 3, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 1, 1, 1, 3, 2, 1, 1, 2, 1, 1, 1, 1, 1, 3, 3, 1, 1, 2, 1, 2, 2, 2, 1, 2, 1, 1, 1, 1, 1, 1, 5, 3, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 5, 1, 1, 1, 1, 1, 2, 2, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 4, 1, 1, 3], "x": [1294876800000.0, 1295049600000.0, 1295222400000.0, 1295308800000.0, 1295568000000.0, 1295827200000.0, 1295913600000.0, 1296000000000.0, 1296172800000.0, 1296518400000.0, 1297036800000.0, 1297296000000.0, 1297382400000.0, 1297641600000.0, 1297728000000.0, 1297900800000.0, 1298592000000.0, 1298678400000.0, 1298937600000.0, 1299024000000.0, 1299110400000.0, 1299283200000.0, 1299456000000.0, 1299715200000.0, 1300233600000.0, 1300665600000.0, 1301011200000.0, 1301097600000.0, 1301270400000.0, 1301529600000.0, 1301616000000.0, 1301702400000.0, 1301961600000.0, 1302048000000.0, 1302825600000.0, 1302912000000.0, 1303430400000.0, 1303516800000.0, 1303776000000.0, 1303948800000.0, 1304380800000.0, 1304467200000.0, 1304726400000.0, 1304985600000.0, 1305158400000.0, 1305331200000.0, 1305763200000.0, 1306368000000.0, 1306454400000.0, 1306540800000.0, 1307404800000.0, 1307664000000.0, 1307750400000.0, 1308268800000.0, 1308614400000.0, 1308787200000.0, 1308960000000.0, 1309392000000.0, 1309478400000.0, 1309564800000.0, 1309737600000.0, 1310169600000.0, 1310774400000.0, 1311120000000.0, 1311292800000.0, 1311379200000.0, 1311897600000.0, 1312156800000.0, 1312848000000.0, 1313020800000.0, 1313107200000.0, 1313712000000.0, 1313798400000.0, 1314403200000.0, 1314835200000.0, 1314921600000.0, 1315267200000.0, 1315353600000.0, 1315440000000.0, 1316476800000.0, 1316736000000.0, 1316822400000.0, 1317254400000.0, 1317686400000.0, 1317772800000.0, 1318464000000.0, 1318809600000.0, 1319414400000.0, 1319500800000.0, 1319587200000.0, 1319673600000.0, 1321056000000.0, 1321574400000.0, 1321660800000.0, 1321920000000.0, 1322006400000.0, 1322092800000.0, 1322438400000.0, 1322697600000.0, 1322870400000.0, 1323302400000.0, 1323475200000.0, 1324080000000.0, 1324684800000.0, 1324944000000.0, 1325116800000.0, 1325289600000.0]}, "id": "5a98974e-46e7-4392-b474-d41406e691ba"}, "type": "ColumnDataSource", "id": "5a98974e-46e7-4392-b474-d41406e691ba"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "d2e42a69-9d56-4ebf-bb34-b63c0b3417ac"}, {"type": "DataRange1d", "id": "76e15c01-3ce3-4b3e-8fb8-f43ade1a607a"}], "dimensions": ["width", "height"], "id": "477652a3-0656-42a5-8111-19f98d90ce56"}, "type": "ZoomTool", "id": "477652a3-0656-42a5-8111-19f98d90ce56"}, {"attributes": {"plot": {"type": "Plot", "id": "24c303d4-7689-4d3a-88c4-54a68d71dd89"}, "doc": null, "dimension": 0, "id": "2d31b717-501f-4371-bbb7-e564fde8304b"}, "type": "Grid", "id": "2d31b717-501f-4371-bbb7-e564fde8304b"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "5a98974e-46e7-4392-b474-d41406e691ba"}, "columns": ["x"]}], "id": "d2e42a69-9d56-4ebf-bb34-b63c0b3417ac", "doc": null}, "type": "DataRange1d", "id": "d2e42a69-9d56-4ebf-bb34-b63c0b3417ac"}, {"attributes": {"plot": {"type": "Plot", "id": "24c303d4-7689-4d3a-88c4-54a68d71dd89"}, "doc": null, "bounds": "auto", "dimension": 1, "location": "min", "axis_label": "# artikels", "id": "8c247c84-0644-4c4f-802e-ea6839acabb7"}, "type": "LinearAxis", "id": "8c247c84-0644-4c4f-802e-ea6839acabb7"}, {"attributes": {"plot": {"type": "Plot", "id": "24c303d4-7689-4d3a-88c4-54a68d71dd89"}, "doc": null, "bounds": "auto", "id": "35c9f390-8ab4-4c19-8029-cc7075c65887", "location": "min", "formats": {"days": ["%m/%d/%Y"]}, "axis_label": "Datum", "dimension": 0}, "type": "DatetimeAxis", "id": "35c9f390-8ab4-4c19-8029-cc7075c65887"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "5a98974e-46e7-4392-b474-d41406e691ba"}, "columns": ["y"]}], "id": "76e15c01-3ce3-4b3e-8fb8-f43ade1a607a", "doc": null}, "type": "DataRange1d", "id": "76e15c01-3ce3-4b3e-8fb8-f43ade1a607a"}, {"attributes": {"plot": {"type": "Plot", "id": "24c303d4-7689-4d3a-88c4-54a68d71dd89"}, "doc": null, "dimension": 1, "id": "99d95837-6eff-4120-a10c-612ff6a16d85"}, "type": "Grid", "id": "99d95837-6eff-4120-a10c-612ff6a16d85"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "d2e42a69-9d56-4ebf-bb34-b63c0b3417ac"}, {"type": "DataRange1d", "id": "76e15c01-3ce3-4b3e-8fb8-f43ade1a607a"}], "dimensions": ["width", "height"], "doc": null, "id": "dc151479-e2ba-41ce-b69e-db3f2774b337"}, "type": "PanTool", "id": "dc151479-e2ba-41ce-b69e-db3f2774b337"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "5a98974e-46e7-4392-b474-d41406e691ba"}, "doc": null, "id": "860563f5-9dee-4b08-9c27-ce9531af2bc7", "xdata_range": {"type": "DataRange1d", "id": "d2e42a69-9d56-4ebf-bb34-b63c0b3417ac"}, "ydata_range": {"type": "DataRange1d", "id": "76e15c01-3ce3-4b3e-8fb8-f43ade1a607a"}, "glyphspec": {"line_color": {"value": "#1f77b4"}, "line_alpha": 1.0, "fill_color": "#1f77b4", "title": "voorkomens", "type": "line", "fill_alpha": 1.0, "height": 300, "width": 400, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "tools": "pan,zoom,resize", "x_axis_type": "datetime"}, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "line_width": 1, "angle_units": "deg", "type": "line", "y": {"units": "data", "field": "y"}, "line_alpha": 0.1, "start_angle_units": "deg", "valign": null, "radius_units": "screen", "visible": null, "length_units": "screen", "end_angle_units": "deg", "line_dash_offset": 0, "line_cap": "butt", "line_dash": [], "x": {"units": "data", "field": "x"}, "margin": null, "line_join": "miter", "halign": null}}, "type": "Glyph", "id": "860563f5-9dee-4b08-9c27-ce9531af2bc7"}, {"attributes": {"plot": {"type": "Plot", "id": "24c303d4-7689-4d3a-88c4-54a68d71dd89"}, "id": "a4d74f69-49ee-4a4a-a9c1-ca3b1d5608c3", "doc": null}, "type": "ResizeTool", "id": "a4d74f69-49ee-4a4a-a9c1-ca3b1d5608c3"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "d2e42a69-9d56-4ebf-bb34-b63c0b3417ac"}, "axes": [], "title": "voorkomens", "y_range": {"type": "DataRange1d", "id": "76e15c01-3ce3-4b3e-8fb8-f43ade1a607a"}, "outer_width": 400, "renderers": [{"type": "DatetimeAxis", "id": "35c9f390-8ab4-4c19-8029-cc7075c65887"}, {"type": "LinearAxis", "id": "8c247c84-0644-4c4f-802e-ea6839acabb7"}, {"type": "Grid", "id": "2d31b717-501f-4371-bbb7-e564fde8304b"}, {"type": "Grid", "id": "99d95837-6eff-4120-a10c-612ff6a16d85"}, {"type": "Glyph", "id": "860563f5-9dee-4b08-9c27-ce9531af2bc7"}], "outer_height": 300, "width": 400, "doc": null, "canvas_height": 300, "id": "24c303d4-7689-4d3a-88c4-54a68d71dd89", "height": 300, "tools": [{"type": "PanTool", "id": "dc151479-e2ba-41ce-b69e-db3f2774b337"}, {"type": "ZoomTool", "id": "477652a3-0656-42a5-8111-19f98d90ce56"}, {"type": "ResizeTool", "id": "a4d74f69-49ee-4a4a-a9c1-ca3b1d5608c3"}], "canvas_width": 400}, "type": "Plot", "id": "24c303d4-7689-4d3a-88c4-54a68d71dd89"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "24c303d4-7689-4d3a-88c4-54a68d71dd89"}], "id": "f4af00d9-b9aa-4971-9792-9377ed2d5ffd"}, "type": "PlotContext", "id": "f4af00d9-b9aa-4971-9792-9377ed2d5ffd"}];
    var modeltype = "PlotContext";
    var elementid = "a28c355c-a217-48c8-bdda-0cc6b3b6b7e0";
    var plotID = "24c303d4-7689-4d3a-88c4-54a68d71dd89";
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