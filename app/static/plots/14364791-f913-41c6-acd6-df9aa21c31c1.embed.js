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

    var all_models = [{"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "74245c61-bab0-40d0-915f-790ae54e0f74"}, {"type": "DataRange1d", "id": "b6c4c5c1-66c4-4807-98e9-6dcff90d296e"}], "dimensions": ["width", "height"], "doc": null, "id": "f8f5c908-b669-41f0-8557-a038464cb2c1"}, "type": "PanTool", "id": "f8f5c908-b669-41f0-8557-a038464cb2c1"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "74245c61-bab0-40d0-915f-790ae54e0f74"}, {"type": "DataRange1d", "id": "b6c4c5c1-66c4-4807-98e9-6dcff90d296e"}], "dimensions": ["width", "height"], "id": "c7d20e2a-6893-44a2-9715-629bb8f48b67"}, "type": "ZoomTool", "id": "c7d20e2a-6893-44a2-9715-629bb8f48b67"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "93da3165-26f9-4976-aa31-daa6e55abe54"}, "columns": ["y"]}], "id": "b6c4c5c1-66c4-4807-98e9-6dcff90d296e", "doc": null}, "type": "DataRange1d", "id": "b6c4c5c1-66c4-4807-98e9-6dcff90d296e"}, {"attributes": {"plot": {"type": "Plot", "id": "14364791-f913-41c6-acd6-df9aa21c31c1"}, "doc": null, "bounds": "auto", "dimension": 1, "location": "min", "axis_label": "# artikels", "id": "e0d3cf87-5527-40e0-9dc6-1d78062196cd"}, "type": "LinearAxis", "id": "e0d3cf87-5527-40e0-9dc6-1d78062196cd"}, {"attributes": {"plot": {"type": "Plot", "id": "14364791-f913-41c6-acd6-df9aa21c31c1"}, "doc": null, "bounds": "auto", "id": "7de83274-1c1f-4dd6-915d-ace9da1db18f", "location": "min", "formats": {"days": ["%m/%d/%Y"]}, "axis_label": "Datum", "dimension": 0}, "type": "DatetimeAxis", "id": "7de83274-1c1f-4dd6-915d-ace9da1db18f"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [2, 3, 3, 1, 4, 1, 4, 1, 3, 1, 2, 1, 1, 2, 4, 2, 4, 1, 1, 2, 3, 2, 1, 4, 1, 2, 2, 5, 3, 4, 13, 6, 3, 8, 2, 3, 2, 3, 3, 5, 4, 1, 12, 4, 7, 1, 4, 2, 2, 2, 5, 1, 1, 4, 2, 4, 4, 3, 1, 2, 5, 1, 1, 2, 1, 2, 3, 1, 2, 3, 2, 3, 1, 2, 2, 8, 5, 1, 2, 2, 5, 1, 1, 3, 2, 1, 3, 5, 4, 1, 2, 1, 1, 3, 3, 5, 4, 6, 1, 1, 2, 1, 1, 1, 6, 2, 3, 2, 1, 4, 2, 2, 6, 3, 1, 5, 6, 2, 1, 1, 1, 1, 1, 6, 1, 1, 2, 8, 3, 2, 4, 1, 1, 3, 2, 2, 1, 1, 3, 2, 2, 1, 2, 1, 3, 1, 3, 3, 7, 1, 6, 2, 1, 3, 1, 2, 4, 1, 1, 6, 7, 2, 1, 5, 4, 3, 1, 1, 10, 2, 2, 1, 3, 1, 6, 1, 3, 4, 2, 2, 3, 1, 3, 4, 3, 4, 6, 4, 3, 3, 6, 1, 2, 2, 8, 4, 1, 1, 3, 2, 3, 4, 3, 2, 7, 2, 3, 2, 2, 1, 1, 2, 1, 1, 6, 4, 2, 1, 1, 2, 1, 1, 3, 2, 3, 1, 4, 2, 5, 1, 4, 7, 1, 1, 2, 9], "x": [1294012800000.0, 1294099200000.0, 1294185600000.0, 1294358400000.0, 1294444800000.0, 1294704000000.0, 1295049600000.0, 1295222400000.0, 1295308800000.0, 1295481600000.0, 1295568000000.0, 1295654400000.0, 1295827200000.0, 1295913600000.0, 1296000000000.0, 1296086400000.0, 1296259200000.0, 1296432000000.0, 1296518400000.0, 1296777600000.0, 1296864000000.0, 1297123200000.0, 1297382400000.0, 1297468800000.0, 1297641600000.0, 1297728000000.0, 1297900800000.0, 1298073600000.0, 1298246400000.0, 1298332800000.0, 1298419200000.0, 1298505600000.0, 1298592000000.0, 1298678400000.0, 1298851200000.0, 1298937600000.0, 1299110400000.0, 1299196800000.0, 1299283200000.0, 1299542400000.0, 1299628800000.0, 1299801600000.0, 1299888000000.0, 1300060800000.0, 1300147200000.0, 1300233600000.0, 1300320000000.0, 1300406400000.0, 1300492800000.0, 1300665600000.0, 1300752000000.0, 1300924800000.0, 1301011200000.0, 1301097600000.0, 1301270400000.0, 1301356800000.0, 1301443200000.0, 1301529600000.0, 1301616000000.0, 1301702400000.0, 1301875200000.0, 1301961600000.0, 1302048000000.0, 1302134400000.0, 1302220800000.0, 1302307200000.0, 1302480000000.0, 1302652800000.0, 1302825600000.0, 1302912000000.0, 1303084800000.0, 1303257600000.0, 1303344000000.0, 1303430400000.0, 1303516800000.0, 1303776000000.0, 1303862400000.0, 1304035200000.0, 1304121600000.0, 1304294400000.0, 1304467200000.0, 1304640000000.0, 1304726400000.0, 1304985600000.0, 1305072000000.0, 1305158400000.0, 1305244800000.0, 1305331200000.0, 1305504000000.0, 1305590400000.0, 1305936000000.0, 1306108800000.0, 1306281600000.0, 1306368000000.0, 1306454400000.0, 1306540800000.0, 1306800000000.0, 1306886400000.0, 1307145600000.0, 1307318400000.0, 1307491200000.0, 1307577600000.0, 1307664000000.0, 1307750400000.0, 1308009600000.0, 1308182400000.0, 1308268800000.0, 1308355200000.0, 1308614400000.0, 1308700800000.0, 1308787200000.0, 1308873600000.0, 1308960000000.0, 1309132800000.0, 1309219200000.0, 1309305600000.0, 1309392000000.0, 1309564800000.0, 1309737600000.0, 1309824000000.0, 1309910400000.0, 1309996800000.0, 1310083200000.0, 1310169600000.0, 1310342400000.0, 1310428800000.0, 1310515200000.0, 1310774400000.0, 1311033600000.0, 1311120000000.0, 1311379200000.0, 1311552000000.0, 1311638400000.0, 1311811200000.0, 1311897600000.0, 1311984000000.0, 1312156800000.0, 1312329600000.0, 1312416000000.0, 1312502400000.0, 1312588800000.0, 1312761600000.0, 1312848000000.0, 1312934400000.0, 1313020800000.0, 1313107200000.0, 1313193600000.0, 1313452800000.0, 1313539200000.0, 1313625600000.0, 1313798400000.0, 1313971200000.0, 1314057600000.0, 1314144000000.0, 1314576000000.0, 1314662400000.0, 1314748800000.0, 1314835200000.0, 1314921600000.0, 1315008000000.0, 1315180800000.0, 1315267200000.0, 1315440000000.0, 1315612800000.0, 1315872000000.0, 1315958400000.0, 1316044800000.0, 1316131200000.0, 1316217600000.0, 1316390400000.0, 1316476800000.0, 1316563200000.0, 1316649600000.0, 1316736000000.0, 1316822400000.0, 1317081600000.0, 1317168000000.0, 1317254400000.0, 1317686400000.0, 1317772800000.0, 1317859200000.0, 1317945600000.0, 1318032000000.0, 1318204800000.0, 1318291200000.0, 1318377600000.0, 1318464000000.0, 1318550400000.0, 1318636800000.0, 1318809600000.0, 1318896000000.0, 1318982400000.0, 1319068800000.0, 1319155200000.0, 1319241600000.0, 1319414400000.0, 1319500800000.0, 1319760000000.0, 1319846400000.0, 1320019200000.0, 1320451200000.0, 1320624000000.0, 1320710400000.0, 1320883200000.0, 1321056000000.0, 1321228800000.0, 1321315200000.0, 1321488000000.0, 1321660800000.0, 1321833600000.0, 1321920000000.0, 1322006400000.0, 1322092800000.0, 1322179200000.0, 1322265600000.0, 1322438400000.0, 1322524800000.0, 1322611200000.0, 1322784000000.0, 1322870400000.0, 1323043200000.0, 1323129600000.0, 1323302400000.0, 1323388800000.0, 1323475200000.0, 1323648000000.0, 1323820800000.0, 1323993600000.0, 1324080000000.0, 1324684800000.0, 1324857600000.0, 1324944000000.0, 1325030400000.0, 1325116800000.0, 1325203200000.0, 1325289600000.0]}, "id": "93da3165-26f9-4976-aa31-daa6e55abe54"}, "type": "ColumnDataSource", "id": "93da3165-26f9-4976-aa31-daa6e55abe54"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "93da3165-26f9-4976-aa31-daa6e55abe54"}, "columns": ["x"]}], "id": "74245c61-bab0-40d0-915f-790ae54e0f74", "doc": null}, "type": "DataRange1d", "id": "74245c61-bab0-40d0-915f-790ae54e0f74"}, {"attributes": {"plot": {"type": "Plot", "id": "14364791-f913-41c6-acd6-df9aa21c31c1"}, "doc": null, "dimension": 0, "id": "47e82e63-241a-4d0d-bd18-5771e2217dd6"}, "type": "Grid", "id": "47e82e63-241a-4d0d-bd18-5771e2217dd6"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "74245c61-bab0-40d0-915f-790ae54e0f74"}, "axes": [], "title": "voorkomens", "y_range": {"type": "DataRange1d", "id": "b6c4c5c1-66c4-4807-98e9-6dcff90d296e"}, "outer_width": 400, "renderers": [{"type": "DatetimeAxis", "id": "7de83274-1c1f-4dd6-915d-ace9da1db18f"}, {"type": "LinearAxis", "id": "e0d3cf87-5527-40e0-9dc6-1d78062196cd"}, {"type": "Grid", "id": "47e82e63-241a-4d0d-bd18-5771e2217dd6"}, {"type": "Grid", "id": "9896f430-82b7-4dae-9724-a8b69c2eb287"}, {"type": "Glyph", "id": "78c18c78-5b62-4eed-ae8d-71fac7a5dbb2"}], "outer_height": 300, "width": 400, "doc": null, "canvas_height": 300, "id": "14364791-f913-41c6-acd6-df9aa21c31c1", "height": 300, "tools": [{"type": "PanTool", "id": "f8f5c908-b669-41f0-8557-a038464cb2c1"}, {"type": "ZoomTool", "id": "c7d20e2a-6893-44a2-9715-629bb8f48b67"}, {"type": "ResizeTool", "id": "8f1b3b20-f81b-4fda-affe-4b0339ffe2be"}], "canvas_width": 400}, "type": "Plot", "id": "14364791-f913-41c6-acd6-df9aa21c31c1"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "14364791-f913-41c6-acd6-df9aa21c31c1"}], "id": "c515769d-6696-441c-bb83-363677e810df"}, "type": "PlotContext", "id": "c515769d-6696-441c-bb83-363677e810df"}, {"attributes": {"plot": {"type": "Plot", "id": "14364791-f913-41c6-acd6-df9aa21c31c1"}, "doc": null, "dimension": 1, "id": "9896f430-82b7-4dae-9724-a8b69c2eb287"}, "type": "Grid", "id": "9896f430-82b7-4dae-9724-a8b69c2eb287"}, {"attributes": {"plot": {"type": "Plot", "id": "14364791-f913-41c6-acd6-df9aa21c31c1"}, "id": "8f1b3b20-f81b-4fda-affe-4b0339ffe2be", "doc": null}, "type": "ResizeTool", "id": "8f1b3b20-f81b-4fda-affe-4b0339ffe2be"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "93da3165-26f9-4976-aa31-daa6e55abe54"}, "doc": null, "id": "78c18c78-5b62-4eed-ae8d-71fac7a5dbb2", "xdata_range": {"type": "DataRange1d", "id": "74245c61-bab0-40d0-915f-790ae54e0f74"}, "ydata_range": {"type": "DataRange1d", "id": "b6c4c5c1-66c4-4807-98e9-6dcff90d296e"}, "glyphspec": {"line_color": {"value": "#1f77b4"}, "line_alpha": 1.0, "fill_color": "#1f77b4", "title": "voorkomens", "type": "line", "fill_alpha": 1.0, "height": 300, "width": 400, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "tools": "pan,zoom,resize", "x_axis_type": "datetime"}, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "line_width": 1, "angle_units": "deg", "type": "line", "y": {"units": "data", "field": "y"}, "line_alpha": 0.1, "start_angle_units": "deg", "valign": null, "radius_units": "screen", "visible": null, "length_units": "screen", "end_angle_units": "deg", "line_dash_offset": 0, "line_cap": "butt", "line_dash": [], "x": {"units": "data", "field": "x"}, "margin": null, "line_join": "miter", "halign": null}}, "type": "Glyph", "id": "78c18c78-5b62-4eed-ae8d-71fac7a5dbb2"}];
    var modeltype = "PlotContext";
    var elementid = "6188cf82-e254-4e80-9891-1ac4ada8aff8";
    var plotID = "14364791-f913-41c6-acd6-df9aa21c31c1";
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