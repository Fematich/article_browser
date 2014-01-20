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

    var all_models = [{"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "bd940fa4-c688-44a9-bc3f-10b974814c8a"}, {"type": "DataRange1d", "id": "75a92e90-0e96-4d75-bcff-0988b76de865"}], "dimensions": ["width", "height"], "doc": null, "id": "6eb8c516-89d0-4f44-a2b6-6db42c9b7869"}, "type": "PanTool", "id": "6eb8c516-89d0-4f44-a2b6-6db42c9b7869"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "bd940fa4-c688-44a9-bc3f-10b974814c8a"}, {"type": "DataRange1d", "id": "75a92e90-0e96-4d75-bcff-0988b76de865"}], "dimensions": ["width", "height"], "id": "52134559-fa7c-4f2d-a37e-0f829beb5122"}, "type": "ZoomTool", "id": "52134559-fa7c-4f2d-a37e-0f829beb5122"}, {"attributes": {"plot": {"type": "Plot", "id": "3d120676-2cef-4dd2-8279-a7e17b6d98a2"}, "doc": null, "bounds": "auto", "dimension": 1, "location": "min", "axis_label": "# artikels", "id": "62665ec4-e38c-4305-a25e-64ec5c747e9f"}, "type": "LinearAxis", "id": "62665ec4-e38c-4305-a25e-64ec5c747e9f"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "bd940fa4-c688-44a9-bc3f-10b974814c8a"}, "axes": [], "title": "voorkomens", "y_range": {"type": "DataRange1d", "id": "75a92e90-0e96-4d75-bcff-0988b76de865"}, "outer_width": 400, "renderers": [{"type": "DatetimeAxis", "id": "8589a794-0391-476b-9adf-d04d65aae313"}, {"type": "LinearAxis", "id": "62665ec4-e38c-4305-a25e-64ec5c747e9f"}, {"type": "Grid", "id": "56efc091-1788-49c4-9949-98818f1cd9b1"}, {"type": "Grid", "id": "cd97407e-5e20-4a04-9027-7fbb71911532"}, {"type": "Glyph", "id": "104fcdd9-bcb3-4f3c-9e75-57998696829b"}], "outer_height": 300, "width": 400, "doc": null, "canvas_height": 300, "id": "3d120676-2cef-4dd2-8279-a7e17b6d98a2", "height": 300, "tools": [{"type": "PanTool", "id": "6eb8c516-89d0-4f44-a2b6-6db42c9b7869"}, {"type": "ZoomTool", "id": "52134559-fa7c-4f2d-a37e-0f829beb5122"}, {"type": "ResizeTool", "id": "198125b6-3772-4a08-8b92-3d64c6e48290"}], "canvas_width": 400}, "type": "Plot", "id": "3d120676-2cef-4dd2-8279-a7e17b6d98a2"}, {"attributes": {"plot": {"type": "Plot", "id": "3d120676-2cef-4dd2-8279-a7e17b6d98a2"}, "doc": null, "dimension": 0, "id": "56efc091-1788-49c4-9949-98818f1cd9b1"}, "type": "Grid", "id": "56efc091-1788-49c4-9949-98818f1cd9b1"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "1eb9bfc3-2674-4fed-880f-bfc26883f73a"}, "columns": ["x"]}], "id": "bd940fa4-c688-44a9-bc3f-10b974814c8a", "doc": null}, "type": "DataRange1d", "id": "bd940fa4-c688-44a9-bc3f-10b974814c8a"}, {"attributes": {"plot": {"type": "Plot", "id": "3d120676-2cef-4dd2-8279-a7e17b6d98a2"}, "doc": null, "dimension": 1, "id": "cd97407e-5e20-4a04-9027-7fbb71911532"}, "type": "Grid", "id": "cd97407e-5e20-4a04-9027-7fbb71911532"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [4, 1, 2, 1, 6, 4, 3, 2, 3, 1, 1, 2, 4, 2, 7, 8, 4, 3, 2, 2, 1, 3, 4, 1, 2, 1, 2, 2, 2, 2, 4, 1, 1, 4, 2, 1, 2, 3, 5, 4, 1, 2, 1, 7, 1, 3, 1, 3, 2, 2, 4, 4, 4, 2, 3, 5, 1, 3, 3, 4, 3, 4, 3, 3, 1, 2, 5, 2, 1, 3, 1, 1, 3, 1, 4, 4, 5, 2, 1, 2, 5, 2, 1, 3, 2, 5, 1, 1, 1, 2, 3, 1, 3, 3, 2, 3, 8, 1, 3, 2, 2, 1, 2, 1, 1, 3, 1, 3, 2, 1, 2, 2, 2, 2, 2, 6, 2, 3, 4, 3, 2, 1, 1, 1, 4, 5, 1, 2, 26, 103, 77, 49, 33, 21, 20, 10, 12, 2, 3, 11, 13, 2, 3, 2, 4, 4, 8, 6, 2, 4, 2, 12, 5, 4, 1, 4, 4, 5, 4, 1, 5, 2, 3, 8, 2, 3, 4, 37, 10, 9, 1, 3, 6, 3, 6, 9, 1, 6, 5, 5, 1, 4, 1, 1, 2, 2, 4, 3, 3, 2, 2, 2, 4, 3, 4, 2, 3, 2, 1, 4, 2, 1, 4, 4, 3, 6, 2, 2, 2, 3, 5, 3, 3, 2, 5, 6, 2, 1, 5, 7, 1, 3, 6, 2, 2, 10, 3, 1, 11, 4, 1, 1, 2, 1, 2, 1, 15, 10, 6, 8, 2, 1, 1, 2, 6, 3, 2, 2, 1, 4, 7], "x": [1294099200000.0, 1294185600000.0, 1294272000000.0, 1294358400000.0, 1294444800000.0, 1294704000000.0, 1294790400000.0, 1294963200000.0, 1295049600000.0, 1295222400000.0, 1295395200000.0, 1295568000000.0, 1295654400000.0, 1295827200000.0, 1295913600000.0, 1296000000000.0, 1296086400000.0, 1296172800000.0, 1296259200000.0, 1296604800000.0, 1296691200000.0, 1296777600000.0, 1296864000000.0, 1297036800000.0, 1297209600000.0, 1297296000000.0, 1297468800000.0, 1297728000000.0, 1297814400000.0, 1297900800000.0, 1298073600000.0, 1298505600000.0, 1298592000000.0, 1298678400000.0, 1298851200000.0, 1298937600000.0, 1299024000000.0, 1299196800000.0, 1299283200000.0, 1299542400000.0, 1299628800000.0, 1299715200000.0, 1299801600000.0, 1299888000000.0, 1300147200000.0, 1300233600000.0, 1300320000000.0, 1300406400000.0, 1300492800000.0, 1300752000000.0, 1300924800000.0, 1301011200000.0, 1301097600000.0, 1301270400000.0, 1301616000000.0, 1301702400000.0, 1301875200000.0, 1301961600000.0, 1302134400000.0, 1302220800000.0, 1302307200000.0, 1302480000000.0, 1302566400000.0, 1302652800000.0, 1302739200000.0, 1302825600000.0, 1302912000000.0, 1303084800000.0, 1303171200000.0, 1303257600000.0, 1303344000000.0, 1303430400000.0, 1303862400000.0, 1303948800000.0, 1304035200000.0, 1304121600000.0, 1304294400000.0, 1304380800000.0, 1304553600000.0, 1304640000000.0, 1304726400000.0, 1304899200000.0, 1304985600000.0, 1305072000000.0, 1305244800000.0, 1305331200000.0, 1305504000000.0, 1305590400000.0, 1305849600000.0, 1305936000000.0, 1306108800000.0, 1306195200000.0, 1306281600000.0, 1306454400000.0, 1306540800000.0, 1306800000000.0, 1306886400000.0, 1307145600000.0, 1307404800000.0, 1307491200000.0, 1307664000000.0, 1307750400000.0, 1308009600000.0, 1308096000000.0, 1308268800000.0, 1308355200000.0, 1308528000000.0, 1308614400000.0, 1308700800000.0, 1308787200000.0, 1308960000000.0, 1309132800000.0, 1309219200000.0, 1309305600000.0, 1309392000000.0, 1309478400000.0, 1309564800000.0, 1309824000000.0, 1309910400000.0, 1310083200000.0, 1310169600000.0, 1310342400000.0, 1310428800000.0, 1310515200000.0, 1310688000000.0, 1310774400000.0, 1310947200000.0, 1311120000000.0, 1311379200000.0, 1311552000000.0, 1311638400000.0, 1311724800000.0, 1311811200000.0, 1311897600000.0, 1311984000000.0, 1312156800000.0, 1312243200000.0, 1312329600000.0, 1312416000000.0, 1312502400000.0, 1312588800000.0, 1312761600000.0, 1312848000000.0, 1312934400000.0, 1313020800000.0, 1313107200000.0, 1313193600000.0, 1313452800000.0, 1313539200000.0, 1313625600000.0, 1313712000000.0, 1313798400000.0, 1313971200000.0, 1314057600000.0, 1314144000000.0, 1314230400000.0, 1314316800000.0, 1314403200000.0, 1314576000000.0, 1314662400000.0, 1314748800000.0, 1314835200000.0, 1314921600000.0, 1315008000000.0, 1315180800000.0, 1315267200000.0, 1315353600000.0, 1315440000000.0, 1315526400000.0, 1315612800000.0, 1315785600000.0, 1315872000000.0, 1315958400000.0, 1316044800000.0, 1316131200000.0, 1316217600000.0, 1316390400000.0, 1316476800000.0, 1316563200000.0, 1316649600000.0, 1316736000000.0, 1316822400000.0, 1316995200000.0, 1317081600000.0, 1317168000000.0, 1317340800000.0, 1317427200000.0, 1317600000000.0, 1317686400000.0, 1317772800000.0, 1317859200000.0, 1317945600000.0, 1318032000000.0, 1318204800000.0, 1318291200000.0, 1318377600000.0, 1318550400000.0, 1318636800000.0, 1318809600000.0, 1318896000000.0, 1318982400000.0, 1319068800000.0, 1319155200000.0, 1319241600000.0, 1319673600000.0, 1319846400000.0, 1320019200000.0, 1320192000000.0, 1320278400000.0, 1320364800000.0, 1320451200000.0, 1320624000000.0, 1320796800000.0, 1320883200000.0, 1321056000000.0, 1321315200000.0, 1321401600000.0, 1321488000000.0, 1321574400000.0, 1321660800000.0, 1322006400000.0, 1322092800000.0, 1322265600000.0, 1322438400000.0, 1322524800000.0, 1322611200000.0, 1322697600000.0, 1322784000000.0, 1322870400000.0, 1323043200000.0, 1323129600000.0, 1323216000000.0, 1323302400000.0, 1323388800000.0, 1323475200000.0, 1323734400000.0, 1323820800000.0, 1323907200000.0, 1323993600000.0, 1324080000000.0, 1324339200000.0, 1324425600000.0, 1324512000000.0, 1324598400000.0, 1324684800000.0, 1324857600000.0, 1324944000000.0, 1325030400000.0, 1325116800000.0, 1325203200000.0, 1325289600000.0]}, "id": "1eb9bfc3-2674-4fed-880f-bfc26883f73a"}, "type": "ColumnDataSource", "id": "1eb9bfc3-2674-4fed-880f-bfc26883f73a"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "1eb9bfc3-2674-4fed-880f-bfc26883f73a"}, "doc": null, "id": "104fcdd9-bcb3-4f3c-9e75-57998696829b", "xdata_range": {"type": "DataRange1d", "id": "bd940fa4-c688-44a9-bc3f-10b974814c8a"}, "ydata_range": {"type": "DataRange1d", "id": "75a92e90-0e96-4d75-bcff-0988b76de865"}, "glyphspec": {"line_color": {"value": "#1f77b4"}, "line_alpha": 1.0, "fill_color": "#1f77b4", "title": "voorkomens", "type": "line", "fill_alpha": 1.0, "height": 300, "width": 400, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "tools": "pan,zoom,resize", "x_axis_type": "datetime"}, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "line_width": 1, "angle_units": "deg", "type": "line", "y": {"units": "data", "field": "y"}, "line_alpha": 0.1, "start_angle_units": "deg", "valign": null, "radius_units": "screen", "visible": null, "length_units": "screen", "end_angle_units": "deg", "line_dash_offset": 0, "line_cap": "butt", "line_dash": [], "x": {"units": "data", "field": "x"}, "margin": null, "line_join": "miter", "halign": null}}, "type": "Glyph", "id": "104fcdd9-bcb3-4f3c-9e75-57998696829b"}, {"attributes": {"plot": {"type": "Plot", "id": "3d120676-2cef-4dd2-8279-a7e17b6d98a2"}, "id": "198125b6-3772-4a08-8b92-3d64c6e48290", "doc": null}, "type": "ResizeTool", "id": "198125b6-3772-4a08-8b92-3d64c6e48290"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "1eb9bfc3-2674-4fed-880f-bfc26883f73a"}, "columns": ["y"]}], "id": "75a92e90-0e96-4d75-bcff-0988b76de865", "doc": null}, "type": "DataRange1d", "id": "75a92e90-0e96-4d75-bcff-0988b76de865"}, {"attributes": {"plot": {"type": "Plot", "id": "3d120676-2cef-4dd2-8279-a7e17b6d98a2"}, "doc": null, "bounds": "auto", "id": "8589a794-0391-476b-9adf-d04d65aae313", "location": "min", "formats": {"days": ["%m/%d/%Y"]}, "axis_label": "Datum", "dimension": 0}, "type": "DatetimeAxis", "id": "8589a794-0391-476b-9adf-d04d65aae313"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "3d120676-2cef-4dd2-8279-a7e17b6d98a2"}], "id": "1033a4d7-48e3-4e0a-9a93-ee40ee9e78b1"}, "type": "PlotContext", "id": "1033a4d7-48e3-4e0a-9a93-ee40ee9e78b1"}];
    var modeltype = "PlotContext";
    var elementid = "b20ab075-cf95-46b7-9655-11584c1a29b1";
    var plotID = "3d120676-2cef-4dd2-8279-a7e17b6d98a2";
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