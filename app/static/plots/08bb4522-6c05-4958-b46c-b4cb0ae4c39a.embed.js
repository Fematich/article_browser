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

    var all_models = [{"attributes": {"data_source": {"type": "ColumnDataSource", "id": "488da9e4-498a-414a-b547-f450a054d653"}, "doc": null, "id": "8c923052-2a95-4274-b3aa-4b2ad8459480", "xdata_range": {"type": "DataRange1d", "id": "b041b4c7-d888-4448-b991-329e3b45b9d4"}, "ydata_range": {"type": "DataRange1d", "id": "e7846a5a-152c-4211-b819-a26fc57c3699"}, "glyphspec": {"line_color": {"value": "#1f77b4"}, "line_alpha": 1.0, "fill_color": "#1f77b4", "title": "voorkomens", "type": "line", "fill_alpha": 1.0, "height": 300, "width": 400, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "tools": "pan,zoom,resize", "x_axis_type": "datetime"}, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "line_width": 1, "angle_units": "deg", "type": "line", "y": {"units": "data", "field": "y"}, "line_alpha": 0.1, "start_angle_units": "deg", "valign": null, "radius_units": "screen", "visible": null, "length_units": "screen", "end_angle_units": "deg", "line_dash_offset": 0, "line_cap": "butt", "line_dash": [], "x": {"units": "data", "field": "x"}, "margin": null, "line_join": "miter", "halign": null}}, "type": "Glyph", "id": "8c923052-2a95-4274-b3aa-4b2ad8459480"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "488da9e4-498a-414a-b547-f450a054d653"}, "columns": ["y"]}], "id": "e7846a5a-152c-4211-b819-a26fc57c3699", "doc": null}, "type": "DataRange1d", "id": "e7846a5a-152c-4211-b819-a26fc57c3699"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [1, 1, 1, 1, 1, 31, 19, 6, 2, 9, 10, 13, 5, 9, 1, 3, 1, 2, 1, 1, 2, 1, 1, 1, 3, 7, 9, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1], "x": [1295049600000.0, 1296518400000.0, 1300147200000.0, 1303171200000.0, 1304467200000.0, 1306454400000.0, 1306540800000.0, 1306713600000.0, 1306800000000.0, 1306886400000.0, 1307059200000.0, 1307145600000.0, 1307318400000.0, 1307404800000.0, 1307491200000.0, 1307577600000.0, 1307664000000.0, 1307750400000.0, 1308182400000.0, 1308268800000.0, 1308355200000.0, 1308960000000.0, 1309305600000.0, 1309478400000.0, 1309737600000.0, 1309824000000.0, 1309910400000.0, 1309996800000.0, 1310083200000.0, 1310428800000.0, 1310774400000.0, 1311292800000.0, 1311984000000.0, 1312416000000.0, 1314144000000.0, 1314316800000.0, 1315353600000.0, 1316563200000.0, 1318377600000.0, 1318464000000.0, 1319068800000.0, 1320278400000.0, 1320796800000.0, 1322784000000.0, 1323043200000.0, 1323475200000.0, 1325116800000.0, 1325289600000.0]}, "id": "488da9e4-498a-414a-b547-f450a054d653"}, "type": "ColumnDataSource", "id": "488da9e4-498a-414a-b547-f450a054d653"}, {"attributes": {"plot": {"type": "Plot", "id": "08bb4522-6c05-4958-b46c-b4cb0ae4c39a"}, "id": "40d25ae5-defb-45d0-bccf-4095c788bf0b", "doc": null}, "type": "ResizeTool", "id": "40d25ae5-defb-45d0-bccf-4095c788bf0b"}, {"attributes": {"plot": {"type": "Plot", "id": "08bb4522-6c05-4958-b46c-b4cb0ae4c39a"}, "doc": null, "bounds": "auto", "dimension": 1, "location": "min", "axis_label": "# artikels", "id": "d6d8a217-e728-41e4-b5a1-2c5b4bb054ea"}, "type": "LinearAxis", "id": "d6d8a217-e728-41e4-b5a1-2c5b4bb054ea"}, {"attributes": {"plot": {"type": "Plot", "id": "08bb4522-6c05-4958-b46c-b4cb0ae4c39a"}, "doc": null, "dimension": 0, "id": "229cbff2-5f95-45c5-b598-25ebfc238f16"}, "type": "Grid", "id": "229cbff2-5f95-45c5-b598-25ebfc238f16"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "b041b4c7-d888-4448-b991-329e3b45b9d4"}, {"type": "DataRange1d", "id": "e7846a5a-152c-4211-b819-a26fc57c3699"}], "dimensions": ["width", "height"], "id": "4551e7ce-0008-420f-8be9-8a3727733c7b"}, "type": "ZoomTool", "id": "4551e7ce-0008-420f-8be9-8a3727733c7b"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "488da9e4-498a-414a-b547-f450a054d653"}, "columns": ["x"]}], "id": "b041b4c7-d888-4448-b991-329e3b45b9d4", "doc": null}, "type": "DataRange1d", "id": "b041b4c7-d888-4448-b991-329e3b45b9d4"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "b041b4c7-d888-4448-b991-329e3b45b9d4"}, "axes": [], "title": "voorkomens", "y_range": {"type": "DataRange1d", "id": "e7846a5a-152c-4211-b819-a26fc57c3699"}, "outer_width": 400, "renderers": [{"type": "DatetimeAxis", "id": "07198478-57e1-4549-92ae-468a05c8f220"}, {"type": "LinearAxis", "id": "d6d8a217-e728-41e4-b5a1-2c5b4bb054ea"}, {"type": "Grid", "id": "229cbff2-5f95-45c5-b598-25ebfc238f16"}, {"type": "Grid", "id": "20777087-4a7c-43e9-bed8-09b21f58079c"}, {"type": "Glyph", "id": "8c923052-2a95-4274-b3aa-4b2ad8459480"}], "outer_height": 300, "width": 400, "doc": null, "canvas_height": 300, "id": "08bb4522-6c05-4958-b46c-b4cb0ae4c39a", "height": 300, "tools": [{"type": "PanTool", "id": "109bcaf0-f2cd-48dc-aeef-cb3251504b65"}, {"type": "ZoomTool", "id": "4551e7ce-0008-420f-8be9-8a3727733c7b"}, {"type": "ResizeTool", "id": "40d25ae5-defb-45d0-bccf-4095c788bf0b"}], "canvas_width": 400}, "type": "Plot", "id": "08bb4522-6c05-4958-b46c-b4cb0ae4c39a"}, {"attributes": {"plot": {"type": "Plot", "id": "08bb4522-6c05-4958-b46c-b4cb0ae4c39a"}, "doc": null, "dimension": 1, "id": "20777087-4a7c-43e9-bed8-09b21f58079c"}, "type": "Grid", "id": "20777087-4a7c-43e9-bed8-09b21f58079c"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "08bb4522-6c05-4958-b46c-b4cb0ae4c39a"}], "id": "c26b5a06-4aa6-44c3-b274-cd050df9dd9b"}, "type": "PlotContext", "id": "c26b5a06-4aa6-44c3-b274-cd050df9dd9b"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "b041b4c7-d888-4448-b991-329e3b45b9d4"}, {"type": "DataRange1d", "id": "e7846a5a-152c-4211-b819-a26fc57c3699"}], "dimensions": ["width", "height"], "doc": null, "id": "109bcaf0-f2cd-48dc-aeef-cb3251504b65"}, "type": "PanTool", "id": "109bcaf0-f2cd-48dc-aeef-cb3251504b65"}, {"attributes": {"plot": {"type": "Plot", "id": "08bb4522-6c05-4958-b46c-b4cb0ae4c39a"}, "doc": null, "bounds": "auto", "id": "07198478-57e1-4549-92ae-468a05c8f220", "location": "min", "formats": {"days": ["%m/%d/%Y"]}, "axis_label": "Datum", "dimension": 0}, "type": "DatetimeAxis", "id": "07198478-57e1-4549-92ae-468a05c8f220"}];
    var modeltype = "PlotContext";
    var elementid = "5974ca86-df27-4130-84ec-1cf65ef8615e";
    var plotID = "08bb4522-6c05-4958-b46c-b4cb0ae4c39a";
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