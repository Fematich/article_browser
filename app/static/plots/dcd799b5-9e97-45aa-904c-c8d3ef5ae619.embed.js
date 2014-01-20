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

    var all_models = [{"attributes": {"data_source": {"type": "ColumnDataSource", "id": "0f1f7892-e0b8-4557-abaa-75d0084eb708"}, "doc": null, "id": "4d66110e-e75f-445d-878e-590c8f33021a", "xdata_range": {"type": "DataRange1d", "id": "a6d3384a-3826-40a6-b3aa-3a0852580055"}, "ydata_range": {"type": "DataRange1d", "id": "a0d8211e-2c22-4e2b-a4d4-9e6b8479a390"}, "glyphspec": {"line_color": {"value": "#1f77b4"}, "line_alpha": 1.0, "fill_color": "#1f77b4", "title": "voorkomens", "type": "line", "fill_alpha": 1.0, "height": 300, "width": 400, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "tools": "pan,zoom,resize", "x_axis_type": "datetime"}, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "line_width": 1, "angle_units": "deg", "type": "line", "y": {"units": "data", "field": "y"}, "line_alpha": 0.1, "start_angle_units": "deg", "valign": null, "radius_units": "screen", "visible": null, "length_units": "screen", "end_angle_units": "deg", "line_dash_offset": 0, "line_cap": "butt", "line_dash": [], "x": {"units": "data", "field": "x"}, "margin": null, "line_join": "miter", "halign": null}}, "type": "Glyph", "id": "4d66110e-e75f-445d-878e-590c8f33021a"}, {"attributes": {"plot": {"type": "Plot", "id": "dcd799b5-9e97-45aa-904c-c8d3ef5ae619"}, "doc": null, "bounds": "auto", "dimension": 1, "location": "min", "axis_label": "# artikels", "id": "50dd7c81-29f2-4e97-9bd7-07834de8e20b"}, "type": "LinearAxis", "id": "50dd7c81-29f2-4e97-9bd7-07834de8e20b"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "a6d3384a-3826-40a6-b3aa-3a0852580055"}, {"type": "DataRange1d", "id": "a0d8211e-2c22-4e2b-a4d4-9e6b8479a390"}], "dimensions": ["width", "height"], "id": "a34d8c10-d1e2-40df-becb-524721414233"}, "type": "ZoomTool", "id": "a34d8c10-d1e2-40df-becb-524721414233"}, {"attributes": {"plot": {"type": "Plot", "id": "dcd799b5-9e97-45aa-904c-c8d3ef5ae619"}, "doc": null, "dimension": 1, "id": "94691eed-b18d-40fd-930d-89dad6b99ac1"}, "type": "Grid", "id": "94691eed-b18d-40fd-930d-89dad6b99ac1"}, {"attributes": {"plot": {"type": "Plot", "id": "dcd799b5-9e97-45aa-904c-c8d3ef5ae619"}, "doc": null, "dimension": 0, "id": "6b9b277e-add8-4853-ae20-0cc93af6ad95"}, "type": "Grid", "id": "6b9b277e-add8-4853-ae20-0cc93af6ad95"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "0f1f7892-e0b8-4557-abaa-75d0084eb708"}, "columns": ["y"]}], "id": "a0d8211e-2c22-4e2b-a4d4-9e6b8479a390", "doc": null}, "type": "DataRange1d", "id": "a0d8211e-2c22-4e2b-a4d4-9e6b8479a390"}, {"attributes": {"plot": {"type": "Plot", "id": "dcd799b5-9e97-45aa-904c-c8d3ef5ae619"}, "id": "cb9b90ec-6974-4a95-8123-e69e56f460ad", "doc": null}, "type": "ResizeTool", "id": "cb9b90ec-6974-4a95-8123-e69e56f460ad"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "a6d3384a-3826-40a6-b3aa-3a0852580055"}, "axes": [], "title": "voorkomens", "y_range": {"type": "DataRange1d", "id": "a0d8211e-2c22-4e2b-a4d4-9e6b8479a390"}, "outer_width": 400, "renderers": [{"type": "DatetimeAxis", "id": "376da002-d42c-4a50-ae05-3d3da7b6a4da"}, {"type": "LinearAxis", "id": "50dd7c81-29f2-4e97-9bd7-07834de8e20b"}, {"type": "Grid", "id": "6b9b277e-add8-4853-ae20-0cc93af6ad95"}, {"type": "Grid", "id": "94691eed-b18d-40fd-930d-89dad6b99ac1"}, {"type": "Glyph", "id": "4d66110e-e75f-445d-878e-590c8f33021a"}], "outer_height": 300, "width": 400, "doc": null, "canvas_height": 300, "id": "dcd799b5-9e97-45aa-904c-c8d3ef5ae619", "height": 300, "tools": [{"type": "PanTool", "id": "002a7a80-2f2b-4cef-8308-f29311951d83"}, {"type": "ZoomTool", "id": "a34d8c10-d1e2-40df-becb-524721414233"}, {"type": "ResizeTool", "id": "cb9b90ec-6974-4a95-8123-e69e56f460ad"}], "canvas_width": 400}, "type": "Plot", "id": "dcd799b5-9e97-45aa-904c-c8d3ef5ae619"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "a6d3384a-3826-40a6-b3aa-3a0852580055"}, {"type": "DataRange1d", "id": "a0d8211e-2c22-4e2b-a4d4-9e6b8479a390"}], "dimensions": ["width", "height"], "doc": null, "id": "002a7a80-2f2b-4cef-8308-f29311951d83"}, "type": "PanTool", "id": "002a7a80-2f2b-4cef-8308-f29311951d83"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "dcd799b5-9e97-45aa-904c-c8d3ef5ae619"}], "id": "e073a146-f48d-4a9c-8255-ed6f68d07947"}, "type": "PlotContext", "id": "e073a146-f48d-4a9c-8255-ed6f68d07947"}, {"attributes": {"plot": {"type": "Plot", "id": "dcd799b5-9e97-45aa-904c-c8d3ef5ae619"}, "doc": null, "bounds": "auto", "id": "376da002-d42c-4a50-ae05-3d3da7b6a4da", "location": "min", "formats": {"days": ["%m/%d/%Y"]}, "axis_label": "Datum", "dimension": 0}, "type": "DatetimeAxis", "id": "376da002-d42c-4a50-ae05-3d3da7b6a4da"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [29, 116, 97, 59, 37, 28, 26, 12, 14, 8, 10, 13, 14, 4, 4, 2, 5, 6, 11, 6, 2, 4, 2, 14, 7, 4, 1, 4, 6, 5, 6, 1, 5, 2, 4, 9, 2, 3, 6, 38, 10, 10, 1, 5, 8, 6, 6, 9, 1, 6, 5, 5, 1, 5, 1, 1, 2, 3, 6, 3, 3, 2, 2, 2, 4, 3, 5, 2, 3, 2, 1, 4, 2, 2, 5, 5, 5, 6, 2, 2, 2, 3, 5, 3, 3, 2, 6, 7, 2, 1, 5, 8, 1, 3, 6, 2, 2, 10, 3, 1, 11, 4, 1, 1, 2, 1, 3, 1, 19, 14, 6, 8, 1, 2, 1, 2, 2, 6, 3, 4, 2, 1, 4, 8], "x": [1311379200000.0, 1311552000000.0, 1311638400000.0, 1311724800000.0, 1311811200000.0, 1311897600000.0, 1311984000000.0, 1312156800000.0, 1312243200000.0, 1312329600000.0, 1312416000000.0, 1312502400000.0, 1312588800000.0, 1312761600000.0, 1312848000000.0, 1312934400000.0, 1313020800000.0, 1313107200000.0, 1313193600000.0, 1313452800000.0, 1313539200000.0, 1313625600000.0, 1313712000000.0, 1313798400000.0, 1313971200000.0, 1314057600000.0, 1314144000000.0, 1314230400000.0, 1314316800000.0, 1314403200000.0, 1314576000000.0, 1314662400000.0, 1314748800000.0, 1314835200000.0, 1314921600000.0, 1315008000000.0, 1315180800000.0, 1315267200000.0, 1315353600000.0, 1315440000000.0, 1315526400000.0, 1315612800000.0, 1315785600000.0, 1315872000000.0, 1315958400000.0, 1316044800000.0, 1316131200000.0, 1316217600000.0, 1316390400000.0, 1316476800000.0, 1316563200000.0, 1316649600000.0, 1316736000000.0, 1316822400000.0, 1316995200000.0, 1317081600000.0, 1317168000000.0, 1317340800000.0, 1317427200000.0, 1317600000000.0, 1317686400000.0, 1317772800000.0, 1317859200000.0, 1317945600000.0, 1318032000000.0, 1318204800000.0, 1318291200000.0, 1318377600000.0, 1318550400000.0, 1318636800000.0, 1318809600000.0, 1318896000000.0, 1318982400000.0, 1319068800000.0, 1319155200000.0, 1319241600000.0, 1319673600000.0, 1319846400000.0, 1320019200000.0, 1320192000000.0, 1320278400000.0, 1320364800000.0, 1320451200000.0, 1320624000000.0, 1320796800000.0, 1320883200000.0, 1321056000000.0, 1321315200000.0, 1321401600000.0, 1321488000000.0, 1321574400000.0, 1321660800000.0, 1322006400000.0, 1322092800000.0, 1322265600000.0, 1322438400000.0, 1322524800000.0, 1322611200000.0, 1322697600000.0, 1322784000000.0, 1322870400000.0, 1323043200000.0, 1323129600000.0, 1323216000000.0, 1323302400000.0, 1323388800000.0, 1323475200000.0, 1323734400000.0, 1323820800000.0, 1323907200000.0, 1323993600000.0, 1324080000000.0, 1324252800000.0, 1324339200000.0, 1324425600000.0, 1324512000000.0, 1324598400000.0, 1324684800000.0, 1324857600000.0, 1324944000000.0, 1325030400000.0, 1325116800000.0, 1325203200000.0, 1325289600000.0]}, "id": "0f1f7892-e0b8-4557-abaa-75d0084eb708"}, "type": "ColumnDataSource", "id": "0f1f7892-e0b8-4557-abaa-75d0084eb708"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "0f1f7892-e0b8-4557-abaa-75d0084eb708"}, "columns": ["x"]}], "id": "a6d3384a-3826-40a6-b3aa-3a0852580055", "doc": null}, "type": "DataRange1d", "id": "a6d3384a-3826-40a6-b3aa-3a0852580055"}];
    var modeltype = "PlotContext";
    var elementid = "f40a1fad-4fe5-4918-80fd-341f0871b70d";
    var plotID = "dcd799b5-9e97-45aa-904c-c8d3ef5ae619";
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