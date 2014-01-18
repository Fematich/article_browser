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

    var all_models = [{"attributes": {"doc": null, "children": [{"type": "Plot", "id": "84fe09b7-8f3f-4c0e-97e4-8ac439dfab87"}], "id": "80e2666a-e4d5-4025-9b98-0882eadaf0cf"}, "type": "PlotContext", "id": "80e2666a-e4d5-4025-9b98-0882eadaf0cf"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [19, 58, 19, 9, 9, 10, 7, 8, 4, 1, 3, 2, 4, 5, 1, 1, 1, 1, 2, 2, 4, 4, 2, 2, 1, 1, 2, 2, 3, 1, 2, 2, 1, 1, 5, 2, 1], "x": [1313712000000.0, 1313798400000.0, 1313971200000.0, 1314057600000.0, 1314144000000.0, 1314230400000.0, 1314316800000.0, 1314403200000.0, 1314576000000.0, 1314662400000.0, 1314748800000.0, 1314921600000.0, 1315008000000.0, 1315180800000.0, 1315267200000.0, 1315872000000.0, 1316044800000.0, 1316217600000.0, 1316649600000.0, 1316736000000.0, 1317340800000.0, 1317427200000.0, 1317600000000.0, 1317945600000.0, 1318032000000.0, 1318204800000.0, 1318896000000.0, 1319068800000.0, 1319500800000.0, 1320278400000.0, 1320451200000.0, 1321056000000.0, 1321315200000.0, 1322438400000.0, 1323993600000.0, 1324944000000.0, 1325289600000.0]}, "id": "7529f288-d345-4605-91b3-3a27a46b5b59"}, "type": "ColumnDataSource", "id": "7529f288-d345-4605-91b3-3a27a46b5b59"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "7529f288-d345-4605-91b3-3a27a46b5b59"}, "columns": ["y"]}], "id": "e19fe8fe-f05b-40ee-837c-fb5e51720fb2", "doc": null}, "type": "DataRange1d", "id": "e19fe8fe-f05b-40ee-837c-fb5e51720fb2"}, {"attributes": {"plot": {"type": "Plot", "id": "84fe09b7-8f3f-4c0e-97e4-8ac439dfab87"}, "id": "a858266e-7e65-4203-96e5-517ac5c90368", "doc": null}, "type": "ResizeTool", "id": "a858266e-7e65-4203-96e5-517ac5c90368"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "7529f288-d345-4605-91b3-3a27a46b5b59"}, "doc": null, "id": "d52a9e56-f551-46e8-8b0f-cad00efc7755", "xdata_range": {"type": "DataRange1d", "id": "afdc095f-071f-47e9-b046-9480ed31414a"}, "ydata_range": {"type": "DataRange1d", "id": "e19fe8fe-f05b-40ee-837c-fb5e51720fb2"}, "glyphspec": {"line_color": {"value": "#1f77b4"}, "line_alpha": 1.0, "fill_color": "#1f77b4", "title": "voorkomens", "type": "line", "fill_alpha": 1.0, "height": 300, "width": 400, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "tools": "pan,zoom,resize", "x_axis_type": "datetime"}, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "line_width": 1, "angle_units": "deg", "type": "line", "y": {"units": "data", "field": "y"}, "line_alpha": 0.1, "start_angle_units": "deg", "valign": null, "radius_units": "screen", "visible": null, "length_units": "screen", "end_angle_units": "deg", "line_dash_offset": 0, "line_cap": "butt", "line_dash": [], "x": {"units": "data", "field": "x"}, "margin": null, "line_join": "miter", "halign": null}}, "type": "Glyph", "id": "d52a9e56-f551-46e8-8b0f-cad00efc7755"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "afdc095f-071f-47e9-b046-9480ed31414a"}, {"type": "DataRange1d", "id": "e19fe8fe-f05b-40ee-837c-fb5e51720fb2"}], "dimensions": ["width", "height"], "id": "b3cbaac3-a492-487e-99d2-e20062e3cc33"}, "type": "ZoomTool", "id": "b3cbaac3-a492-487e-99d2-e20062e3cc33"}, {"attributes": {"plot": {"type": "Plot", "id": "84fe09b7-8f3f-4c0e-97e4-8ac439dfab87"}, "doc": null, "dimension": 1, "id": "981ea2e9-21e3-4c0b-ab56-2bff17b7d4e6"}, "type": "Grid", "id": "981ea2e9-21e3-4c0b-ab56-2bff17b7d4e6"}, {"attributes": {"plot": {"type": "Plot", "id": "84fe09b7-8f3f-4c0e-97e4-8ac439dfab87"}, "doc": null, "bounds": "auto", "id": "fb503b69-93a4-4d89-a118-a93efa54d33b", "location": "min", "formats": {"days": ["%m/%d/%Y"]}, "axis_label": "Datum", "dimension": 0}, "type": "DatetimeAxis", "id": "fb503b69-93a4-4d89-a118-a93efa54d33b"}, {"attributes": {"plot": {"type": "Plot", "id": "84fe09b7-8f3f-4c0e-97e4-8ac439dfab87"}, "doc": null, "dimension": 0, "id": "be74bf4f-131d-475c-bd7a-203ff170a15e"}, "type": "Grid", "id": "be74bf4f-131d-475c-bd7a-203ff170a15e"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "7529f288-d345-4605-91b3-3a27a46b5b59"}, "columns": ["x"]}], "id": "afdc095f-071f-47e9-b046-9480ed31414a", "doc": null}, "type": "DataRange1d", "id": "afdc095f-071f-47e9-b046-9480ed31414a"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "afdc095f-071f-47e9-b046-9480ed31414a"}, "axes": [], "title": "voorkomens", "y_range": {"type": "DataRange1d", "id": "e19fe8fe-f05b-40ee-837c-fb5e51720fb2"}, "outer_width": 400, "renderers": [{"type": "DatetimeAxis", "id": "fb503b69-93a4-4d89-a118-a93efa54d33b"}, {"type": "LinearAxis", "id": "c414e68f-fbb5-43e7-ab6a-2f1c55bdc961"}, {"type": "Grid", "id": "be74bf4f-131d-475c-bd7a-203ff170a15e"}, {"type": "Grid", "id": "981ea2e9-21e3-4c0b-ab56-2bff17b7d4e6"}, {"type": "Glyph", "id": "d52a9e56-f551-46e8-8b0f-cad00efc7755"}], "outer_height": 300, "width": 400, "doc": null, "canvas_height": 300, "id": "84fe09b7-8f3f-4c0e-97e4-8ac439dfab87", "height": 300, "tools": [{"type": "PanTool", "id": "3a156558-cc53-421f-80fd-beeecdef7903"}, {"type": "ZoomTool", "id": "b3cbaac3-a492-487e-99d2-e20062e3cc33"}, {"type": "ResizeTool", "id": "a858266e-7e65-4203-96e5-517ac5c90368"}], "canvas_width": 400}, "type": "Plot", "id": "84fe09b7-8f3f-4c0e-97e4-8ac439dfab87"}, {"attributes": {"plot": {"type": "Plot", "id": "84fe09b7-8f3f-4c0e-97e4-8ac439dfab87"}, "doc": null, "bounds": "auto", "dimension": 1, "location": "min", "axis_label": "# artikels", "id": "c414e68f-fbb5-43e7-ab6a-2f1c55bdc961"}, "type": "LinearAxis", "id": "c414e68f-fbb5-43e7-ab6a-2f1c55bdc961"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "afdc095f-071f-47e9-b046-9480ed31414a"}, {"type": "DataRange1d", "id": "e19fe8fe-f05b-40ee-837c-fb5e51720fb2"}], "dimensions": ["width", "height"], "doc": null, "id": "3a156558-cc53-421f-80fd-beeecdef7903"}, "type": "PanTool", "id": "3a156558-cc53-421f-80fd-beeecdef7903"}];
    var modeltype = "PlotContext";
    var elementid = "7bc9385f-5e41-4ebd-b920-6855c3be43c3";
    var plotID = "84fe09b7-8f3f-4c0e-97e4-8ac439dfab87";
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