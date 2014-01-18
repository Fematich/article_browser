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

    var all_models = [{"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "8206280d-41b2-4396-ac19-a11f2f88574a"}, {"type": "DataRange1d", "id": "fe2a96d0-f92c-40b9-b9cc-a751fbb56bf2"}], "dimensions": ["width", "height"], "doc": null, "id": "00f8e24d-8d03-4ed0-8062-328fcb999c67"}, "type": "PanTool", "id": "00f8e24d-8d03-4ed0-8062-328fcb999c67"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "da3e0a16-e68c-40be-a3f4-b646ac8c0dc1"}, "columns": ["x"]}], "id": "8206280d-41b2-4396-ac19-a11f2f88574a", "doc": null}, "type": "DataRange1d", "id": "8206280d-41b2-4396-ac19-a11f2f88574a"}, {"attributes": {"plot": {"type": "Plot", "id": "469ceb21-0f8e-4b69-bcb0-66bdb83a9d28"}, "doc": null, "bounds": "auto", "id": "10445c30-0e5a-4f57-9114-3d5abc5078ad", "location": "min", "formats": {"days": ["%m/%d/%Y"]}, "axis_label": "Datum", "dimension": 0}, "type": "DatetimeAxis", "id": "10445c30-0e5a-4f57-9114-3d5abc5078ad"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "da3e0a16-e68c-40be-a3f4-b646ac8c0dc1"}, "columns": ["y"]}], "id": "fe2a96d0-f92c-40b9-b9cc-a751fbb56bf2", "doc": null}, "type": "DataRange1d", "id": "fe2a96d0-f92c-40b9-b9cc-a751fbb56bf2"}, {"attributes": {"plot": {"type": "Plot", "id": "469ceb21-0f8e-4b69-bcb0-66bdb83a9d28"}, "doc": null, "bounds": "auto", "dimension": 1, "location": "min", "axis_label": "# artikels", "id": "5c5c2fda-7d92-41d8-a00b-e8023c0513d9"}, "type": "LinearAxis", "id": "5c5c2fda-7d92-41d8-a00b-e8023c0513d9"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "da3e0a16-e68c-40be-a3f4-b646ac8c0dc1"}, "doc": null, "id": "dceb3c37-5ab6-45c0-b2eb-53ebf0e61c54", "xdata_range": {"type": "DataRange1d", "id": "8206280d-41b2-4396-ac19-a11f2f88574a"}, "ydata_range": {"type": "DataRange1d", "id": "fe2a96d0-f92c-40b9-b9cc-a751fbb56bf2"}, "glyphspec": {"line_color": {"value": "#1f77b4"}, "line_alpha": 1.0, "fill_color": "#1f77b4", "title": "voorkomens", "type": "line", "fill_alpha": 1.0, "height": 300, "width": 400, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "tools": "pan,zoom,resize", "x_axis_type": "datetime"}, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "line_width": 1, "angle_units": "deg", "type": "line", "y": {"units": "data", "field": "y"}, "line_alpha": 0.1, "start_angle_units": "deg", "valign": null, "radius_units": "screen", "visible": null, "length_units": "screen", "end_angle_units": "deg", "line_dash_offset": 0, "line_cap": "butt", "line_dash": [], "x": {"units": "data", "field": "x"}, "margin": null, "line_join": "miter", "halign": null}}, "type": "Glyph", "id": "dceb3c37-5ab6-45c0-b2eb-53ebf0e61c54"}, {"attributes": {"plot": {"type": "Plot", "id": "469ceb21-0f8e-4b69-bcb0-66bdb83a9d28"}, "doc": null, "dimension": 0, "id": "bb432bd1-6d08-49d2-b61c-3647ece87f25"}, "type": "Grid", "id": "bb432bd1-6d08-49d2-b61c-3647ece87f25"}, {"attributes": {"plot": {"type": "Plot", "id": "469ceb21-0f8e-4b69-bcb0-66bdb83a9d28"}, "doc": null, "dimension": 1, "id": "d7da429c-7c6d-4f5a-ab93-060d352cd74b"}, "type": "Grid", "id": "d7da429c-7c6d-4f5a-ab93-060d352cd74b"}, {"attributes": {"plot": {"type": "Plot", "id": "469ceb21-0f8e-4b69-bcb0-66bdb83a9d28"}, "id": "12893bc2-becd-40dc-85c6-455252deb928", "doc": null}, "type": "ResizeTool", "id": "12893bc2-becd-40dc-85c6-455252deb928"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [3, 2, 1, 1, 2, 1, 1, 1, 2, 3, 4, 3, 1, 3, 1, 8, 1, 1, 2, 3, 2, 3, 1, 1, 1, 1, 3, 2, 2, 1, 2, 1, 3, 1, 3, 126, 73, 38, 40, 48, 18, 18, 8, 11, 13, 24, 2, 2, 4, 8, 12, 5, 2, 10, 4, 4, 4, 7, 1, 1, 2, 3, 3, 5, 1, 1, 6, 4, 11, 5, 1, 1, 3, 5, 4, 4, 1, 1, 2, 3, 2, 1, 2, 2, 1, 3, 6, 1, 1, 1, 1, 1, 4, 2, 1, 3, 1, 2, 8, 1, 2, 4, 1, 1, 3, 5, 2, 2, 8, 4, 1, 2, 1, 2, 3, 7, 3, 1, 3, 1, 8, 3, 9, 12, 15, 7, 23, 5, 2, 5, 1, 3, 3, 1, 1, 2, 2, 1, 3, 1, 7, 2, 1, 1, 1, 4, 3, 2, 1, 1, 1, 5, 2, 2, 3, 2, 1, 3, 1, 6, 1, 1, 3, 1, 1, 1, 2, 2, 4, 1, 1, 3, 1, 3, 3, 2, 3, 1, 1, 1, 1, 2, 5, 1, 3, 2, 1, 3, 7], "x": [1294358400000.0, 1294444800000.0, 1295049600000.0, 1295395200000.0, 1295654400000.0, 1295913600000.0, 1296000000000.0, 1296259200000.0, 1296518400000.0, 1296777600000.0, 1296864000000.0, 1297209600000.0, 1297987200000.0, 1298073600000.0, 1298246400000.0, 1298592000000.0, 1298851200000.0, 1298937600000.0, 1299283200000.0, 1299456000000.0, 1299628800000.0, 1299715200000.0, 1299888000000.0, 1300665600000.0, 1300838400000.0, 1301097600000.0, 1301529600000.0, 1301702400000.0, 1302739200000.0, 1302912000000.0, 1303171200000.0, 1303516800000.0, 1303776000000.0, 1303862400000.0, 1304035200000.0, 1304380800000.0, 1304467200000.0, 1304553600000.0, 1304640000000.0, 1304726400000.0, 1304899200000.0, 1304985600000.0, 1305072000000.0, 1305158400000.0, 1305244800000.0, 1305331200000.0, 1305504000000.0, 1305590400000.0, 1305676800000.0, 1305763200000.0, 1305849600000.0, 1305936000000.0, 1306108800000.0, 1306195200000.0, 1306281600000.0, 1306368000000.0, 1306454400000.0, 1306540800000.0, 1306713600000.0, 1306800000000.0, 1307145600000.0, 1307318400000.0, 1307404800000.0, 1307577600000.0, 1307664000000.0, 1307750400000.0, 1308009600000.0, 1308182400000.0, 1308268800000.0, 1308355200000.0, 1308528000000.0, 1308614400000.0, 1308700800000.0, 1308873600000.0, 1308960000000.0, 1309132800000.0, 1309219200000.0, 1309305600000.0, 1309392000000.0, 1309737600000.0, 1309824000000.0, 1309910400000.0, 1309996800000.0, 1310169600000.0, 1310342400000.0, 1310428800000.0, 1310515200000.0, 1310601600000.0, 1310688000000.0, 1310774400000.0, 1310947200000.0, 1311033600000.0, 1311292800000.0, 1311379200000.0, 1311552000000.0, 1311811200000.0, 1311897600000.0, 1312243200000.0, 1312329600000.0, 1312416000000.0, 1312588800000.0, 1312761600000.0, 1312848000000.0, 1312934400000.0, 1313020800000.0, 1313107200000.0, 1313193600000.0, 1313452800000.0, 1313539200000.0, 1313798400000.0, 1313971200000.0, 1314057600000.0, 1314144000000.0, 1314230400000.0, 1314316800000.0, 1314403200000.0, 1314576000000.0, 1314748800000.0, 1314835200000.0, 1314921600000.0, 1315008000000.0, 1315180800000.0, 1315267200000.0, 1315353600000.0, 1315440000000.0, 1315526400000.0, 1315612800000.0, 1315785600000.0, 1315872000000.0, 1315958400000.0, 1316131200000.0, 1316390400000.0, 1316476800000.0, 1316563200000.0, 1316736000000.0, 1316822400000.0, 1316995200000.0, 1317081600000.0, 1317168000000.0, 1317254400000.0, 1317427200000.0, 1317600000000.0, 1317686400000.0, 1317772800000.0, 1317859200000.0, 1317945600000.0, 1318032000000.0, 1318377600000.0, 1318550400000.0, 1319068800000.0, 1319155200000.0, 1319241600000.0, 1319414400000.0, 1319587200000.0, 1319673600000.0, 1319846400000.0, 1320019200000.0, 1320451200000.0, 1320624000000.0, 1320710400000.0, 1320883200000.0, 1321056000000.0, 1321401600000.0, 1321488000000.0, 1321574400000.0, 1322006400000.0, 1322179200000.0, 1322438400000.0, 1322524800000.0, 1322697600000.0, 1322784000000.0, 1323043200000.0, 1323129600000.0, 1323216000000.0, 1323302400000.0, 1323388800000.0, 1323475200000.0, 1323820800000.0, 1323993600000.0, 1324252800000.0, 1324512000000.0, 1324598400000.0, 1324684800000.0, 1324857600000.0, 1324944000000.0, 1325030400000.0, 1325116800000.0, 1325203200000.0, 1325289600000.0]}, "id": "da3e0a16-e68c-40be-a3f4-b646ac8c0dc1"}, "type": "ColumnDataSource", "id": "da3e0a16-e68c-40be-a3f4-b646ac8c0dc1"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "8206280d-41b2-4396-ac19-a11f2f88574a"}, "axes": [], "title": "voorkomens", "y_range": {"type": "DataRange1d", "id": "fe2a96d0-f92c-40b9-b9cc-a751fbb56bf2"}, "outer_width": 400, "renderers": [{"type": "DatetimeAxis", "id": "10445c30-0e5a-4f57-9114-3d5abc5078ad"}, {"type": "LinearAxis", "id": "5c5c2fda-7d92-41d8-a00b-e8023c0513d9"}, {"type": "Grid", "id": "bb432bd1-6d08-49d2-b61c-3647ece87f25"}, {"type": "Grid", "id": "d7da429c-7c6d-4f5a-ab93-060d352cd74b"}, {"type": "Glyph", "id": "dceb3c37-5ab6-45c0-b2eb-53ebf0e61c54"}], "outer_height": 300, "width": 400, "doc": null, "canvas_height": 300, "id": "469ceb21-0f8e-4b69-bcb0-66bdb83a9d28", "height": 300, "tools": [{"type": "PanTool", "id": "00f8e24d-8d03-4ed0-8062-328fcb999c67"}, {"type": "ZoomTool", "id": "2bcd06e3-6816-4199-b62d-d926ba859430"}, {"type": "ResizeTool", "id": "12893bc2-becd-40dc-85c6-455252deb928"}], "canvas_width": 400}, "type": "Plot", "id": "469ceb21-0f8e-4b69-bcb0-66bdb83a9d28"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "469ceb21-0f8e-4b69-bcb0-66bdb83a9d28"}], "id": "d4212813-07a5-470b-82b8-8c6c480aebd0"}, "type": "PlotContext", "id": "d4212813-07a5-470b-82b8-8c6c480aebd0"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "8206280d-41b2-4396-ac19-a11f2f88574a"}, {"type": "DataRange1d", "id": "fe2a96d0-f92c-40b9-b9cc-a751fbb56bf2"}], "dimensions": ["width", "height"], "id": "2bcd06e3-6816-4199-b62d-d926ba859430"}, "type": "ZoomTool", "id": "2bcd06e3-6816-4199-b62d-d926ba859430"}];
    var modeltype = "PlotContext";
    var elementid = "6f3ec337-e28b-4351-95d8-f64224146b7f";
    var plotID = "469ceb21-0f8e-4b69-bcb0-66bdb83a9d28";
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