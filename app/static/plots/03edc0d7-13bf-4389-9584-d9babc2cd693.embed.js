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

    var all_models = [{"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "7efb2170-c3b0-4098-a985-05a7e869e837"}, {"type": "DataRange1d", "id": "aaf59123-93d9-4d67-abbd-3db3fc100589"}], "dimensions": ["width", "height"], "doc": null, "id": "e77c8940-215a-4896-9d73-c409ea32c6cd"}, "type": "PanTool", "id": "e77c8940-215a-4896-9d73-c409ea32c6cd"}, {"attributes": {"plot": {"type": "Plot", "id": "03edc0d7-13bf-4389-9584-d9babc2cd693"}, "id": "a5dba5cd-b0cd-48fb-b945-4638dc23d301", "doc": null}, "type": "ResizeTool", "id": "a5dba5cd-b0cd-48fb-b945-4638dc23d301"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "03edc0d7-13bf-4389-9584-d9babc2cd693"}], "id": "44befbb3-a3b8-4963-8ba7-47f22267705d"}, "type": "PlotContext", "id": "44befbb3-a3b8-4963-8ba7-47f22267705d"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [1, 7, 10, 1, 2, 5, 10, 5, 6, 3, 1, 5, 4, 5, 2, 1, 2, 1, 2, 2, 5, 1, 5, 3, 3, 1, 1, 1, 4, 3, 1, 1, 1, 3, 6, 2, 7, 3, 1, 4, 6, 2, 2, 2, 1, 8, 1, 3, 1, 2, 1, 1, 1, 1, 2, 1, 2, 3, 1, 3, 4, 1, 2, 9, 9, 1, 3, 4, 26, 11, 10, 1, 74, 100, 45, 18, 14, 9, 7, 13, 12, 2, 6, 5, 13, 5, 2, 1, 3, 3, 2, 4, 5, 5, 4, 4, 3, 1, 8, 1, 3, 1, 1, 1, 2, 1, 1, 2, 2, 13, 3, 2, 3, 1, 1, 2, 1, 1, 1, 1, 1, 2, 2, 3, 1, 1, 4, 1, 4, 1, 2, 5, 2, 4, 2, 1, 3, 1, 1, 1, 3, 1, 1, 1, 1, 2, 2, 2, 1, 2, 5, 2, 1, 1, 3, 6, 2, 3, 1, 2, 1, 1, 1, 1, 1, 3, 1, 2, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 3, 1, 4, 5, 6, 2, 1, 1, 2, 2, 2, 1, 12, 3, 1, 3], "x": [1294012800000.0, 1294099200000.0, 1294185600000.0, 1294272000000.0, 1294358400000.0, 1294444800000.0, 1294617600000.0, 1294704000000.0, 1294790400000.0, 1294876800000.0, 1294963200000.0, 1295049600000.0, 1295222400000.0, 1295308800000.0, 1295481600000.0, 1295568000000.0, 1295654400000.0, 1295827200000.0, 1296086400000.0, 1296172800000.0, 1296259200000.0, 1296432000000.0, 1296518400000.0, 1296691200000.0, 1296777600000.0, 1296864000000.0, 1297036800000.0, 1297123200000.0, 1297209600000.0, 1297296000000.0, 1297382400000.0, 1297641600000.0, 1297728000000.0, 1297987200000.0, 1298073600000.0, 1298246400000.0, 1298332800000.0, 1298419200000.0, 1298592000000.0, 1298678400000.0, 1298851200000.0, 1298937600000.0, 1299110400000.0, 1299196800000.0, 1299283200000.0, 1299456000000.0, 1299715200000.0, 1299888000000.0, 1300233600000.0, 1300320000000.0, 1300492800000.0, 1300665600000.0, 1300752000000.0, 1300838400000.0, 1300924800000.0, 1301011200000.0, 1301097600000.0, 1301270400000.0, 1301356800000.0, 1301529600000.0, 1301616000000.0, 1301702400000.0, 1301875200000.0, 1301961600000.0, 1302048000000.0, 1302134400000.0, 1302220800000.0, 1302307200000.0, 1302480000000.0, 1302566400000.0, 1302652800000.0, 1302739200000.0, 1302825600000.0, 1302912000000.0, 1303084800000.0, 1303171200000.0, 1303257600000.0, 1303344000000.0, 1303430400000.0, 1303516800000.0, 1303776000000.0, 1303862400000.0, 1303948800000.0, 1304035200000.0, 1304121600000.0, 1304294400000.0, 1304380800000.0, 1304553600000.0, 1304640000000.0, 1304726400000.0, 1304899200000.0, 1304985600000.0, 1305072000000.0, 1305158400000.0, 1305244800000.0, 1305331200000.0, 1305590400000.0, 1305676800000.0, 1305763200000.0, 1305849600000.0, 1305936000000.0, 1306108800000.0, 1306195200000.0, 1306368000000.0, 1306454400000.0, 1306540800000.0, 1306713600000.0, 1306800000000.0, 1306886400000.0, 1307059200000.0, 1307145600000.0, 1307318400000.0, 1307404800000.0, 1307491200000.0, 1307664000000.0, 1307750400000.0, 1308009600000.0, 1308096000000.0, 1308182400000.0, 1308268800000.0, 1308355200000.0, 1308960000000.0, 1309219200000.0, 1309305600000.0, 1309392000000.0, 1309478400000.0, 1309564800000.0, 1309737600000.0, 1309996800000.0, 1310169600000.0, 1310428800000.0, 1310515200000.0, 1310688000000.0, 1310774400000.0, 1310947200000.0, 1311120000000.0, 1311552000000.0, 1311724800000.0, 1312156800000.0, 1312329600000.0, 1312588800000.0, 1313020800000.0, 1313107200000.0, 1313539200000.0, 1313625600000.0, 1313712000000.0, 1313798400000.0, 1314662400000.0, 1314835200000.0, 1314921600000.0, 1315008000000.0, 1315353600000.0, 1315526400000.0, 1315872000000.0, 1315958400000.0, 1316217600000.0, 1316390400000.0, 1316476800000.0, 1316563200000.0, 1316649600000.0, 1316736000000.0, 1316822400000.0, 1317081600000.0, 1317600000000.0, 1317686400000.0, 1318464000000.0, 1318550400000.0, 1319673600000.0, 1319760000000.0, 1319846400000.0, 1320019200000.0, 1320710400000.0, 1320796800000.0, 1321401600000.0, 1321488000000.0, 1321574400000.0, 1321660800000.0, 1322006400000.0, 1322265600000.0, 1322438400000.0, 1322611200000.0, 1322870400000.0, 1323907200000.0, 1324080000000.0, 1324339200000.0, 1324425600000.0, 1324512000000.0, 1324598400000.0, 1324684800000.0, 1324857600000.0, 1324944000000.0, 1325030400000.0, 1325116800000.0, 1325203200000.0]}, "id": "a3ef6cea-3d26-45f5-8c8a-fb7137bc12d9"}, "type": "ColumnDataSource", "id": "a3ef6cea-3d26-45f5-8c8a-fb7137bc12d9"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "a3ef6cea-3d26-45f5-8c8a-fb7137bc12d9"}, "doc": null, "id": "1fa10b57-12e8-4195-97bb-e6c22b5e06c1", "xdata_range": {"type": "DataRange1d", "id": "7efb2170-c3b0-4098-a985-05a7e869e837"}, "ydata_range": {"type": "DataRange1d", "id": "aaf59123-93d9-4d67-abbd-3db3fc100589"}, "glyphspec": {"line_color": {"value": "#1f77b4"}, "line_alpha": 1.0, "fill_color": "#1f77b4", "title": "voorkomens", "type": "line", "fill_alpha": 1.0, "height": 300, "width": 400, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "tools": "pan,zoom,resize", "x_axis_type": "datetime"}, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "line_width": 1, "angle_units": "deg", "type": "line", "y": {"units": "data", "field": "y"}, "line_alpha": 0.1, "start_angle_units": "deg", "valign": null, "radius_units": "screen", "visible": null, "length_units": "screen", "end_angle_units": "deg", "line_dash_offset": 0, "line_cap": "butt", "line_dash": [], "x": {"units": "data", "field": "x"}, "margin": null, "line_join": "miter", "halign": null}}, "type": "Glyph", "id": "1fa10b57-12e8-4195-97bb-e6c22b5e06c1"}, {"attributes": {"plot": {"type": "Plot", "id": "03edc0d7-13bf-4389-9584-d9babc2cd693"}, "doc": null, "dimension": 0, "id": "61c4f8a7-b9f2-4fba-93f4-2ca69292ff86"}, "type": "Grid", "id": "61c4f8a7-b9f2-4fba-93f4-2ca69292ff86"}, {"attributes": {"plot": {"type": "Plot", "id": "03edc0d7-13bf-4389-9584-d9babc2cd693"}, "doc": null, "dimension": 1, "id": "61409e3c-546e-466a-9a67-2d4067e39926"}, "type": "Grid", "id": "61409e3c-546e-466a-9a67-2d4067e39926"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "a3ef6cea-3d26-45f5-8c8a-fb7137bc12d9"}, "columns": ["x"]}], "id": "7efb2170-c3b0-4098-a985-05a7e869e837", "doc": null}, "type": "DataRange1d", "id": "7efb2170-c3b0-4098-a985-05a7e869e837"}, {"attributes": {"plot": {"type": "Plot", "id": "03edc0d7-13bf-4389-9584-d9babc2cd693"}, "doc": null, "bounds": "auto", "dimension": 1, "location": "min", "axis_label": "# artikels", "id": "a0e5391c-49a6-4af2-b7a9-821034131946"}, "type": "LinearAxis", "id": "a0e5391c-49a6-4af2-b7a9-821034131946"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "7efb2170-c3b0-4098-a985-05a7e869e837"}, "axes": [], "title": "voorkomens", "y_range": {"type": "DataRange1d", "id": "aaf59123-93d9-4d67-abbd-3db3fc100589"}, "outer_width": 400, "renderers": [{"type": "DatetimeAxis", "id": "487f19f3-799b-4836-adcd-88f6b63e55ed"}, {"type": "LinearAxis", "id": "a0e5391c-49a6-4af2-b7a9-821034131946"}, {"type": "Grid", "id": "61c4f8a7-b9f2-4fba-93f4-2ca69292ff86"}, {"type": "Grid", "id": "61409e3c-546e-466a-9a67-2d4067e39926"}, {"type": "Glyph", "id": "1fa10b57-12e8-4195-97bb-e6c22b5e06c1"}], "outer_height": 300, "width": 400, "doc": null, "canvas_height": 300, "id": "03edc0d7-13bf-4389-9584-d9babc2cd693", "height": 300, "tools": [{"type": "PanTool", "id": "e77c8940-215a-4896-9d73-c409ea32c6cd"}, {"type": "ZoomTool", "id": "bf4c9f1d-72de-4c9b-9e4d-9e641e227bc8"}, {"type": "ResizeTool", "id": "a5dba5cd-b0cd-48fb-b945-4638dc23d301"}], "canvas_width": 400}, "type": "Plot", "id": "03edc0d7-13bf-4389-9584-d9babc2cd693"}, {"attributes": {"plot": {"type": "Plot", "id": "03edc0d7-13bf-4389-9584-d9babc2cd693"}, "doc": null, "bounds": "auto", "id": "487f19f3-799b-4836-adcd-88f6b63e55ed", "location": "min", "formats": {"days": ["%m/%d/%Y"]}, "axis_label": "Datum", "dimension": 0}, "type": "DatetimeAxis", "id": "487f19f3-799b-4836-adcd-88f6b63e55ed"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "a3ef6cea-3d26-45f5-8c8a-fb7137bc12d9"}, "columns": ["y"]}], "id": "aaf59123-93d9-4d67-abbd-3db3fc100589", "doc": null}, "type": "DataRange1d", "id": "aaf59123-93d9-4d67-abbd-3db3fc100589"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "7efb2170-c3b0-4098-a985-05a7e869e837"}, {"type": "DataRange1d", "id": "aaf59123-93d9-4d67-abbd-3db3fc100589"}], "dimensions": ["width", "height"], "id": "bf4c9f1d-72de-4c9b-9e4d-9e641e227bc8"}, "type": "ZoomTool", "id": "bf4c9f1d-72de-4c9b-9e4d-9e641e227bc8"}];
    var modeltype = "PlotContext";
    var elementid = "ef83ea98-5164-4c7b-b5a4-84399efcc737";
    var plotID = "03edc0d7-13bf-4389-9584-d9babc2cd693";
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