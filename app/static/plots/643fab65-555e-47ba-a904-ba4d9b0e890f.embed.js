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

    var all_models = [{"attributes": {"plot": {"type": "Plot", "id": "643fab65-555e-47ba-a904-ba4d9b0e890f"}, "doc": null, "bounds": "auto", "dimension": 1, "location": "min", "axis_label": "# artikels", "id": "614d58db-f1cd-409e-8b34-923e54297436"}, "type": "LinearAxis", "id": "614d58db-f1cd-409e-8b34-923e54297436"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "2372a8c9-4143-4006-8923-bb1a2d742858"}, {"type": "DataRange1d", "id": "ff0d1b7c-7dad-4463-b19f-d476199cd67b"}], "dimensions": ["width", "height"], "doc": null, "id": "d7fadf25-3cd9-4622-bf8b-97be8dc50319"}, "type": "PanTool", "id": "d7fadf25-3cd9-4622-bf8b-97be8dc50319"}, {"attributes": {"plot": {"type": "Plot", "id": "643fab65-555e-47ba-a904-ba4d9b0e890f"}, "doc": null, "dimension": 1, "id": "da0d61fb-2582-4bce-b1cd-d0b53b228140"}, "type": "Grid", "id": "da0d61fb-2582-4bce-b1cd-d0b53b228140"}, {"attributes": {"plot": {"type": "Plot", "id": "643fab65-555e-47ba-a904-ba4d9b0e890f"}, "id": "f768406d-a494-4efb-a905-b6b42e11e1fe", "doc": null}, "type": "ResizeTool", "id": "f768406d-a494-4efb-a905-b6b42e11e1fe"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [9, 47, 49, 60, 55, 31, 40, 12, 21, 17, 19, 17, 19, 25, 36, 16, 25, 12, 12, 14, 10, 10, 11, 15, 12, 3, 9, 20, 5, 6, 9, 12, 7, 6, 11, 5, 8, 12, 6, 1, 2, 1, 6, 10, 9, 7, 4, 2, 1, 5, 3, 6, 5, 1, 4, 3, 5, 6, 9, 6, 2, 2, 5, 7, 5, 4, 2, 18, 2, 2, 1, 3, 7, 11, 2, 3, 7, 4, 4, 1, 2, 2, 4, 1, 2, 1, 3, 2, 1, 4, 3, 1, 6, 4, 1, 1, 1, 2, 1, 3, 1, 2, 2, 2, 2, 2, 1, 3, 6, 2, 6, 3, 1, 4, 4, 3, 1, 1, 3, 1, 1, 7, 2, 1, 1, 7, 4, 1, 7, 4, 5, 5, 2, 9, 3, 11, 1, 5, 2, 2, 9, 5, 8, 4, 2, 1, 3, 1, 1, 4, 1, 2, 1, 2, 2, 2, 4, 1, 1, 1, 3, 1, 4, 3, 1, 4, 4, 2, 6, 6, 7, 5, 2, 1, 4, 1, 1, 1, 5, 3, 1, 1, 1, 1, 4, 4, 2, 1, 4, 3, 2, 1, 2, 4, 4, 7, 2, 1, 3, 10], "x": [1299888000000.0, 1300060800000.0, 1300147200000.0, 1300233600000.0, 1300320000000.0, 1300406400000.0, 1300492800000.0, 1300665600000.0, 1300752000000.0, 1300838400000.0, 1300924800000.0, 1301011200000.0, 1301097600000.0, 1301270400000.0, 1301356800000.0, 1301443200000.0, 1301529600000.0, 1301616000000.0, 1301702400000.0, 1301875200000.0, 1301961600000.0, 1302048000000.0, 1302134400000.0, 1302220800000.0, 1302307200000.0, 1302480000000.0, 1302566400000.0, 1302652800000.0, 1302739200000.0, 1302825600000.0, 1302912000000.0, 1303084800000.0, 1303171200000.0, 1303257600000.0, 1303344000000.0, 1303430400000.0, 1303516800000.0, 1303776000000.0, 1303862400000.0, 1303948800000.0, 1304035200000.0, 1304121600000.0, 1304294400000.0, 1304380800000.0, 1304467200000.0, 1304553600000.0, 1304640000000.0, 1304726400000.0, 1304899200000.0, 1304985600000.0, 1305072000000.0, 1305158400000.0, 1305244800000.0, 1305331200000.0, 1305504000000.0, 1305590400000.0, 1305676800000.0, 1305763200000.0, 1305849600000.0, 1305936000000.0, 1306108800000.0, 1306195200000.0, 1306281600000.0, 1306368000000.0, 1306454400000.0, 1306540800000.0, 1306713600000.0, 1306800000000.0, 1306886400000.0, 1307059200000.0, 1307145600000.0, 1307318400000.0, 1307404800000.0, 1307491200000.0, 1307577600000.0, 1307664000000.0, 1307750400000.0, 1308009600000.0, 1308096000000.0, 1308182400000.0, 1308268800000.0, 1308355200000.0, 1308528000000.0, 1308614400000.0, 1308700800000.0, 1308787200000.0, 1308873600000.0, 1308960000000.0, 1309132800000.0, 1309219200000.0, 1309305600000.0, 1309392000000.0, 1309478400000.0, 1309564800000.0, 1309737600000.0, 1309824000000.0, 1309910400000.0, 1309996800000.0, 1310169600000.0, 1310342400000.0, 1310428800000.0, 1310515200000.0, 1310688000000.0, 1310947200000.0, 1311033600000.0, 1311120000000.0, 1311638400000.0, 1312156800000.0, 1312243200000.0, 1312329600000.0, 1312416000000.0, 1312502400000.0, 1312848000000.0, 1312934400000.0, 1313020800000.0, 1313107200000.0, 1313193600000.0, 1313452800000.0, 1313625600000.0, 1313712000000.0, 1313798400000.0, 1314057600000.0, 1314144000000.0, 1314230400000.0, 1314316800000.0, 1314403200000.0, 1314662400000.0, 1314921600000.0, 1315180800000.0, 1315267200000.0, 1315353600000.0, 1315440000000.0, 1315526400000.0, 1315612800000.0, 1315785600000.0, 1315872000000.0, 1315958400000.0, 1316131200000.0, 1316217600000.0, 1316390400000.0, 1316476800000.0, 1316563200000.0, 1316649600000.0, 1316736000000.0, 1316822400000.0, 1316995200000.0, 1317168000000.0, 1317254400000.0, 1317340800000.0, 1317427200000.0, 1317686400000.0, 1317772800000.0, 1317859200000.0, 1318032000000.0, 1318204800000.0, 1318291200000.0, 1318377600000.0, 1318550400000.0, 1318636800000.0, 1318896000000.0, 1319068800000.0, 1319241600000.0, 1319500800000.0, 1319587200000.0, 1319673600000.0, 1319760000000.0, 1319846400000.0, 1320019200000.0, 1320192000000.0, 1320278400000.0, 1320451200000.0, 1320796800000.0, 1320883200000.0, 1321056000000.0, 1321228800000.0, 1321401600000.0, 1321574400000.0, 1322092800000.0, 1322179200000.0, 1322265600000.0, 1322524800000.0, 1322611200000.0, 1322784000000.0, 1323043200000.0, 1323129600000.0, 1323302400000.0, 1323388800000.0, 1323475200000.0, 1323907200000.0, 1324080000000.0, 1324252800000.0, 1324339200000.0, 1324425600000.0, 1324512000000.0, 1324684800000.0, 1324944000000.0, 1325030400000.0, 1325116800000.0, 1325203200000.0, 1325289600000.0]}, "id": "8adf292b-8095-4bed-877d-4261a9bb946d"}, "type": "ColumnDataSource", "id": "8adf292b-8095-4bed-877d-4261a9bb946d"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "2372a8c9-4143-4006-8923-bb1a2d742858"}, "axes": [], "title": "voorkomens", "y_range": {"type": "DataRange1d", "id": "ff0d1b7c-7dad-4463-b19f-d476199cd67b"}, "outer_width": 400, "renderers": [{"type": "DatetimeAxis", "id": "94e8f5ef-a7c5-48a6-8e72-751679718960"}, {"type": "LinearAxis", "id": "614d58db-f1cd-409e-8b34-923e54297436"}, {"type": "Grid", "id": "8c74ad1c-56ca-4106-872d-07781f4d78b8"}, {"type": "Grid", "id": "da0d61fb-2582-4bce-b1cd-d0b53b228140"}, {"type": "Glyph", "id": "994780bb-b5db-4b0f-a081-b7f442e4f388"}], "outer_height": 300, "width": 400, "doc": null, "canvas_height": 300, "id": "643fab65-555e-47ba-a904-ba4d9b0e890f", "height": 300, "tools": [{"type": "PanTool", "id": "d7fadf25-3cd9-4622-bf8b-97be8dc50319"}, {"type": "ZoomTool", "id": "f02b323f-1c2a-4152-97e7-a0683c54d38e"}, {"type": "ResizeTool", "id": "f768406d-a494-4efb-a905-b6b42e11e1fe"}], "canvas_width": 400}, "type": "Plot", "id": "643fab65-555e-47ba-a904-ba4d9b0e890f"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "8adf292b-8095-4bed-877d-4261a9bb946d"}, "columns": ["y"]}], "id": "ff0d1b7c-7dad-4463-b19f-d476199cd67b", "doc": null}, "type": "DataRange1d", "id": "ff0d1b7c-7dad-4463-b19f-d476199cd67b"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "643fab65-555e-47ba-a904-ba4d9b0e890f"}], "id": "529e4509-21fd-4c92-8ad7-ecb7481b50be"}, "type": "PlotContext", "id": "529e4509-21fd-4c92-8ad7-ecb7481b50be"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "2372a8c9-4143-4006-8923-bb1a2d742858"}, {"type": "DataRange1d", "id": "ff0d1b7c-7dad-4463-b19f-d476199cd67b"}], "dimensions": ["width", "height"], "id": "f02b323f-1c2a-4152-97e7-a0683c54d38e"}, "type": "ZoomTool", "id": "f02b323f-1c2a-4152-97e7-a0683c54d38e"}, {"attributes": {"plot": {"type": "Plot", "id": "643fab65-555e-47ba-a904-ba4d9b0e890f"}, "doc": null, "dimension": 0, "id": "8c74ad1c-56ca-4106-872d-07781f4d78b8"}, "type": "Grid", "id": "8c74ad1c-56ca-4106-872d-07781f4d78b8"}, {"attributes": {"plot": {"type": "Plot", "id": "643fab65-555e-47ba-a904-ba4d9b0e890f"}, "doc": null, "bounds": "auto", "id": "94e8f5ef-a7c5-48a6-8e72-751679718960", "location": "min", "formats": {"days": ["%m/%d/%Y"]}, "axis_label": "Datum", "dimension": 0}, "type": "DatetimeAxis", "id": "94e8f5ef-a7c5-48a6-8e72-751679718960"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "8adf292b-8095-4bed-877d-4261a9bb946d"}, "columns": ["x"]}], "id": "2372a8c9-4143-4006-8923-bb1a2d742858", "doc": null}, "type": "DataRange1d", "id": "2372a8c9-4143-4006-8923-bb1a2d742858"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "8adf292b-8095-4bed-877d-4261a9bb946d"}, "doc": null, "id": "994780bb-b5db-4b0f-a081-b7f442e4f388", "xdata_range": {"type": "DataRange1d", "id": "2372a8c9-4143-4006-8923-bb1a2d742858"}, "ydata_range": {"type": "DataRange1d", "id": "ff0d1b7c-7dad-4463-b19f-d476199cd67b"}, "glyphspec": {"line_color": {"value": "#1f77b4"}, "line_alpha": 1.0, "fill_color": "#1f77b4", "title": "voorkomens", "type": "line", "fill_alpha": 1.0, "height": 300, "width": 400, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "tools": "pan,zoom,resize", "x_axis_type": "datetime"}, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "line_width": 1, "angle_units": "deg", "type": "line", "y": {"units": "data", "field": "y"}, "line_alpha": 0.1, "start_angle_units": "deg", "valign": null, "radius_units": "screen", "visible": null, "length_units": "screen", "end_angle_units": "deg", "line_dash_offset": 0, "line_cap": "butt", "line_dash": [], "x": {"units": "data", "field": "x"}, "margin": null, "line_join": "miter", "halign": null}}, "type": "Glyph", "id": "994780bb-b5db-4b0f-a081-b7f442e4f388"}];
    var modeltype = "PlotContext";
    var elementid = "83357b8b-7de5-4e00-aeb0-892f1ba23c7b";
    var plotID = "643fab65-555e-47ba-a904-ba4d9b0e890f";
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