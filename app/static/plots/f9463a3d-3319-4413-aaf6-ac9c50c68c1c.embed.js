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

    var all_models = [{"attributes": {"x_range": {"type": "DataRange1d", "id": "0566d243-bee5-4312-96f5-b4897b6abfca"}, "axes": [], "title": "voorkomens", "y_range": {"type": "DataRange1d", "id": "b197c6bf-d26c-4608-8d1c-cc1f39aee359"}, "outer_width": 400, "renderers": [{"type": "DatetimeAxis", "id": "dea26e7f-d158-489f-b7c7-a21d7ca168a8"}, {"type": "LinearAxis", "id": "0a177c88-1419-424a-993e-26628e67be2e"}, {"type": "Grid", "id": "019cdd36-8371-479c-8352-23e5cdfeb663"}, {"type": "Grid", "id": "70d84371-e2a9-45c1-a942-b828378baec1"}, {"type": "Glyph", "id": "af426437-ec43-4c78-b17b-6891fb7aec5e"}], "outer_height": 300, "width": 400, "doc": null, "canvas_height": 300, "id": "f9463a3d-3319-4413-aaf6-ac9c50c68c1c", "height": 300, "tools": [{"type": "PanTool", "id": "c98599d0-bb90-45ee-94fa-a8d148b6af86"}, {"type": "ZoomTool", "id": "99498bf7-950d-4850-88e1-da33985f6393"}, {"type": "ResizeTool", "id": "c71f504a-c309-46fa-9728-e2f5cc11715c"}], "canvas_width": 400}, "type": "Plot", "id": "f9463a3d-3319-4413-aaf6-ac9c50c68c1c"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "482b9925-a2b9-4203-a10d-f512ab41106f"}, "columns": ["y"]}], "id": "b197c6bf-d26c-4608-8d1c-cc1f39aee359", "doc": null}, "type": "DataRange1d", "id": "b197c6bf-d26c-4608-8d1c-cc1f39aee359"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "482b9925-a2b9-4203-a10d-f512ab41106f"}, "columns": ["x"]}], "id": "0566d243-bee5-4312-96f5-b4897b6abfca", "doc": null}, "type": "DataRange1d", "id": "0566d243-bee5-4312-96f5-b4897b6abfca"}, {"attributes": {"plot": {"type": "Plot", "id": "f9463a3d-3319-4413-aaf6-ac9c50c68c1c"}, "doc": null, "bounds": "auto", "id": "dea26e7f-d158-489f-b7c7-a21d7ca168a8", "location": "min", "formats": {"days": ["%m/%d/%Y"]}, "axis_label": "Datum", "dimension": 0}, "type": "DatetimeAxis", "id": "dea26e7f-d158-489f-b7c7-a21d7ca168a8"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "f9463a3d-3319-4413-aaf6-ac9c50c68c1c"}], "id": "32e22303-a22c-4b7e-adfb-301dfc4f6cf1"}, "type": "PlotContext", "id": "32e22303-a22c-4b7e-adfb-301dfc4f6cf1"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "482b9925-a2b9-4203-a10d-f512ab41106f"}, "doc": null, "id": "af426437-ec43-4c78-b17b-6891fb7aec5e", "xdata_range": {"type": "DataRange1d", "id": "0566d243-bee5-4312-96f5-b4897b6abfca"}, "ydata_range": {"type": "DataRange1d", "id": "b197c6bf-d26c-4608-8d1c-cc1f39aee359"}, "glyphspec": {"line_color": {"value": "#1f77b4"}, "line_alpha": 1.0, "fill_color": "#1f77b4", "title": "voorkomens", "type": "line", "fill_alpha": 1.0, "height": 300, "width": 400, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "tools": "pan,zoom,resize", "x_axis_type": "datetime"}, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "line_width": 1, "angle_units": "deg", "type": "line", "y": {"units": "data", "field": "y"}, "line_alpha": 0.1, "start_angle_units": "deg", "valign": null, "radius_units": "screen", "visible": null, "length_units": "screen", "end_angle_units": "deg", "line_dash_offset": 0, "line_cap": "butt", "line_dash": [], "x": {"units": "data", "field": "x"}, "margin": null, "line_join": "miter", "halign": null}}, "type": "Glyph", "id": "af426437-ec43-4c78-b17b-6891fb7aec5e"}, {"attributes": {"plot": {"type": "Plot", "id": "f9463a3d-3319-4413-aaf6-ac9c50c68c1c"}, "id": "c71f504a-c309-46fa-9728-e2f5cc11715c", "doc": null}, "type": "ResizeTool", "id": "c71f504a-c309-46fa-9728-e2f5cc11715c"}, {"attributes": {"plot": {"type": "Plot", "id": "f9463a3d-3319-4413-aaf6-ac9c50c68c1c"}, "doc": null, "dimension": 0, "id": "019cdd36-8371-479c-8352-23e5cdfeb663"}, "type": "Grid", "id": "019cdd36-8371-479c-8352-23e5cdfeb663"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "0566d243-bee5-4312-96f5-b4897b6abfca"}, {"type": "DataRange1d", "id": "b197c6bf-d26c-4608-8d1c-cc1f39aee359"}], "dimensions": ["width", "height"], "id": "99498bf7-950d-4850-88e1-da33985f6393"}, "type": "ZoomTool", "id": "99498bf7-950d-4850-88e1-da33985f6393"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "0566d243-bee5-4312-96f5-b4897b6abfca"}, {"type": "DataRange1d", "id": "b197c6bf-d26c-4608-8d1c-cc1f39aee359"}], "dimensions": ["width", "height"], "doc": null, "id": "c98599d0-bb90-45ee-94fa-a8d148b6af86"}, "type": "PanTool", "id": "c98599d0-bb90-45ee-94fa-a8d148b6af86"}, {"attributes": {"plot": {"type": "Plot", "id": "f9463a3d-3319-4413-aaf6-ac9c50c68c1c"}, "doc": null, "bounds": "auto", "dimension": 1, "location": "min", "axis_label": "# artikels", "id": "0a177c88-1419-424a-993e-26628e67be2e"}, "type": "LinearAxis", "id": "0a177c88-1419-424a-993e-26628e67be2e"}, {"attributes": {"plot": {"type": "Plot", "id": "f9463a3d-3319-4413-aaf6-ac9c50c68c1c"}, "doc": null, "dimension": 1, "id": "70d84371-e2a9-45c1-a942-b828378baec1"}, "type": "Grid", "id": "70d84371-e2a9-45c1-a942-b828378baec1"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [4, 7, 10, 9, 15, 14, 11, 13, 8, 20, 5, 21, 9, 11, 12, 5, 8, 13, 8, 10, 10, 15, 22, 19, 2, 13, 9, 4, 10, 17, 6, 7, 9, 13, 9, 9, 4, 20, 5, 11, 11, 20, 2, 14, 8, 6, 9, 14, 2, 6, 20, 9, 7, 14, 4, 11, 18, 17, 8, 16, 5, 10, 13, 2, 7, 20, 6, 10, 8, 8, 16, 15, 8, 12, 9, 20, 14, 20, 7, 13, 12, 14, 9, 21, 4, 8, 4, 3, 8, 11, 10, 11, 5, 6, 7, 11, 6, 4, 10, 3, 11, 3, 8, 13, 19, 17, 9, 6, 10, 7, 5, 12, 17, 4, 13, 15, 11, 12, 18, 8, 14, 15, 17, 6, 21, 7, 17, 12, 8, 16, 5, 16, 23, 4, 19, 17, 9, 8, 16, 7, 14, 9, 15, 8, 13, 8, 22, 7, 4, 12, 18, 11, 13, 9, 15, 7, 13, 5, 17, 4, 6, 10, 9, 7, 27, 8, 10, 7, 5, 10, 2, 7, 8, 1, 3, 13, 3, 6, 4, 11, 15, 13, 4, 3, 7, 4, 9, 8, 3, 4, 7, 7, 8, 3, 17, 10, 7, 7, 22, 3, 5, 9, 9, 16, 18, 6, 13, 10, 2, 5, 16, 6, 5, 17, 7, 7, 18, 1, 5, 8, 13, 12, 12, 5, 8, 16, 11, 11, 13, 10, 10, 17, 13, 3, 22, 2, 8, 6, 13, 15, 16, 4, 17, 8, 8, 9, 17, 6, 12, 39, 12, 23, 13, 7, 8, 9, 16, 5, 8, 5, 4, 13, 4, 14, 10, 13, 6, 17, 1, 14, 11, 19, 11, 15, 13, 11, 9, 12, 9, 16, 2, 5, 10, 10, 9, 11, 8, 9, 8, 5, 16, 27, 9, 6, 10, 9, 11, 7, 5, 7, 19, 19, 21, 13], "x": [1294012800000.0, 1294099200000.0, 1294185600000.0, 1294272000000.0, 1294358400000.0, 1294444800000.0, 1294617600000.0, 1294704000000.0, 1294790400000.0, 1294876800000.0, 1294963200000.0, 1295049600000.0, 1295222400000.0, 1295308800000.0, 1295395200000.0, 1295481600000.0, 1295568000000.0, 1295654400000.0, 1295827200000.0, 1295913600000.0, 1296000000000.0, 1296086400000.0, 1296172800000.0, 1296259200000.0, 1296432000000.0, 1296518400000.0, 1296604800000.0, 1296691200000.0, 1296777600000.0, 1296864000000.0, 1297036800000.0, 1297123200000.0, 1297209600000.0, 1297296000000.0, 1297382400000.0, 1297468800000.0, 1297641600000.0, 1297728000000.0, 1297814400000.0, 1297900800000.0, 1297987200000.0, 1298073600000.0, 1298246400000.0, 1298332800000.0, 1298419200000.0, 1298505600000.0, 1298592000000.0, 1298678400000.0, 1298851200000.0, 1298937600000.0, 1299024000000.0, 1299110400000.0, 1299196800000.0, 1299283200000.0, 1299456000000.0, 1299542400000.0, 1299628800000.0, 1299715200000.0, 1299801600000.0, 1299888000000.0, 1300060800000.0, 1300147200000.0, 1300233600000.0, 1300320000000.0, 1300406400000.0, 1300492800000.0, 1300665600000.0, 1300752000000.0, 1300838400000.0, 1300924800000.0, 1301011200000.0, 1301097600000.0, 1301270400000.0, 1301356800000.0, 1301443200000.0, 1301529600000.0, 1301616000000.0, 1301702400000.0, 1301875200000.0, 1301961600000.0, 1302048000000.0, 1302134400000.0, 1302220800000.0, 1302307200000.0, 1302480000000.0, 1302566400000.0, 1302652800000.0, 1302739200000.0, 1302825600000.0, 1302912000000.0, 1303084800000.0, 1303171200000.0, 1303257600000.0, 1303344000000.0, 1303430400000.0, 1303516800000.0, 1303776000000.0, 1303862400000.0, 1303948800000.0, 1304035200000.0, 1304121600000.0, 1304294400000.0, 1304380800000.0, 1304467200000.0, 1304553600000.0, 1304640000000.0, 1304726400000.0, 1304899200000.0, 1304985600000.0, 1305072000000.0, 1305158400000.0, 1305244800000.0, 1305331200000.0, 1305504000000.0, 1305590400000.0, 1305676800000.0, 1305763200000.0, 1305849600000.0, 1305936000000.0, 1306108800000.0, 1306195200000.0, 1306281600000.0, 1306368000000.0, 1306454400000.0, 1306540800000.0, 1306713600000.0, 1306800000000.0, 1306886400000.0, 1307059200000.0, 1307145600000.0, 1307318400000.0, 1307404800000.0, 1307491200000.0, 1307577600000.0, 1307664000000.0, 1307750400000.0, 1308009600000.0, 1308096000000.0, 1308182400000.0, 1308268800000.0, 1308355200000.0, 1308528000000.0, 1308614400000.0, 1308700800000.0, 1308787200000.0, 1308873600000.0, 1308960000000.0, 1309132800000.0, 1309219200000.0, 1309305600000.0, 1309392000000.0, 1309478400000.0, 1309564800000.0, 1309737600000.0, 1309824000000.0, 1309910400000.0, 1309996800000.0, 1310083200000.0, 1310169600000.0, 1310342400000.0, 1310428800000.0, 1310515200000.0, 1310601600000.0, 1310688000000.0, 1310774400000.0, 1310947200000.0, 1311033600000.0, 1311120000000.0, 1311292800000.0, 1311379200000.0, 1311552000000.0, 1311638400000.0, 1311724800000.0, 1311811200000.0, 1311897600000.0, 1311984000000.0, 1312156800000.0, 1312243200000.0, 1312329600000.0, 1312416000000.0, 1312502400000.0, 1312588800000.0, 1312761600000.0, 1312848000000.0, 1312934400000.0, 1313020800000.0, 1313107200000.0, 1313193600000.0, 1313452800000.0, 1313539200000.0, 1313625600000.0, 1313712000000.0, 1313798400000.0, 1313971200000.0, 1314057600000.0, 1314144000000.0, 1314230400000.0, 1314316800000.0, 1314403200000.0, 1314576000000.0, 1314662400000.0, 1314748800000.0, 1314835200000.0, 1314921600000.0, 1315008000000.0, 1315180800000.0, 1315267200000.0, 1315353600000.0, 1315440000000.0, 1315526400000.0, 1315612800000.0, 1315785600000.0, 1315872000000.0, 1315958400000.0, 1316044800000.0, 1316131200000.0, 1316217600000.0, 1316390400000.0, 1316476800000.0, 1316563200000.0, 1316649600000.0, 1316736000000.0, 1316822400000.0, 1316995200000.0, 1317081600000.0, 1317168000000.0, 1317254400000.0, 1317340800000.0, 1317427200000.0, 1317600000000.0, 1317686400000.0, 1317772800000.0, 1317859200000.0, 1317945600000.0, 1318032000000.0, 1318204800000.0, 1318291200000.0, 1318377600000.0, 1318464000000.0, 1318550400000.0, 1318636800000.0, 1318809600000.0, 1318896000000.0, 1318982400000.0, 1319068800000.0, 1319155200000.0, 1319241600000.0, 1319414400000.0, 1319500800000.0, 1319587200000.0, 1319673600000.0, 1319760000000.0, 1319846400000.0, 1320192000000.0, 1320278400000.0, 1320364800000.0, 1320451200000.0, 1320624000000.0, 1320710400000.0, 1320796800000.0, 1320883200000.0, 1321056000000.0, 1321228800000.0, 1321315200000.0, 1321401600000.0, 1321488000000.0, 1321574400000.0, 1321660800000.0, 1321833600000.0, 1321920000000.0, 1322006400000.0, 1322092800000.0, 1322179200000.0, 1322265600000.0, 1322438400000.0, 1322524800000.0, 1322611200000.0, 1322697600000.0, 1322784000000.0, 1322870400000.0, 1323043200000.0, 1323129600000.0, 1323216000000.0, 1323302400000.0, 1323388800000.0, 1323475200000.0, 1323648000000.0, 1323734400000.0, 1323820800000.0, 1323907200000.0, 1323993600000.0, 1324080000000.0, 1324252800000.0, 1324339200000.0, 1324425600000.0, 1324512000000.0, 1324598400000.0, 1324684800000.0, 1324857600000.0, 1324944000000.0, 1325030400000.0, 1325116800000.0, 1325203200000.0, 1325289600000.0]}, "id": "482b9925-a2b9-4203-a10d-f512ab41106f"}, "type": "ColumnDataSource", "id": "482b9925-a2b9-4203-a10d-f512ab41106f"}];
    var modeltype = "PlotContext";
    var elementid = "b2226594-a009-45e6-aa40-e867d11c20c9";
    var plotID = "f9463a3d-3319-4413-aaf6-ac9c50c68c1c";
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