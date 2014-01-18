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

    var all_models = [{"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "066b60c0-f847-4eba-b8a0-9affc90c824c"}, "columns": ["x"]}], "id": "eb51531a-6def-48f1-8691-898e50a52490", "doc": null}, "type": "DataRange1d", "id": "eb51531a-6def-48f1-8691-898e50a52490"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "eb51531a-6def-48f1-8691-898e50a52490"}, "axes": [], "title": "voorkomens", "y_range": {"type": "DataRange1d", "id": "e4fcaaac-78fd-4565-b39a-5328286b056c"}, "outer_width": 400, "renderers": [{"type": "DatetimeAxis", "id": "6777eba0-95a8-4314-a28b-a12e53e987e3"}, {"type": "LinearAxis", "id": "d207d944-d7e7-4b47-9164-b51ec84122ec"}, {"type": "Grid", "id": "71073160-b673-4cf5-a123-ce36b02ead22"}, {"type": "Grid", "id": "d79bf804-3235-47e2-857c-706b7728064e"}, {"type": "Glyph", "id": "23a9a00a-ac2a-4b13-8874-dead0e28031e"}], "outer_height": 300, "width": 400, "doc": null, "canvas_height": 300, "id": "44ba3e5b-20af-4089-b94d-2769e9f7f2ad", "height": 300, "tools": [{"type": "PanTool", "id": "094543b9-df78-4d26-8aba-ea8a34736982"}, {"type": "ZoomTool", "id": "1df3c9df-c5e5-43c9-8f07-50feb433c6ea"}, {"type": "ResizeTool", "id": "bd877442-c7de-4498-bb97-10e52e01e76b"}], "canvas_width": 400}, "type": "Plot", "id": "44ba3e5b-20af-4089-b94d-2769e9f7f2ad"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "066b60c0-f847-4eba-b8a0-9affc90c824c"}, "doc": null, "id": "23a9a00a-ac2a-4b13-8874-dead0e28031e", "xdata_range": {"type": "DataRange1d", "id": "eb51531a-6def-48f1-8691-898e50a52490"}, "ydata_range": {"type": "DataRange1d", "id": "e4fcaaac-78fd-4565-b39a-5328286b056c"}, "glyphspec": {"line_color": {"value": "#1f77b4"}, "line_alpha": 1.0, "fill_color": "#1f77b4", "title": "voorkomens", "type": "line", "fill_alpha": 1.0, "height": 300, "width": 400, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "tools": "pan,zoom,resize", "x_axis_type": "datetime"}, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "line_width": 1, "angle_units": "deg", "type": "line", "y": {"units": "data", "field": "y"}, "line_alpha": 0.1, "start_angle_units": "deg", "valign": null, "radius_units": "screen", "visible": null, "length_units": "screen", "end_angle_units": "deg", "line_dash_offset": 0, "line_cap": "butt", "line_dash": [], "x": {"units": "data", "field": "x"}, "margin": null, "line_join": "miter", "halign": null}}, "type": "Glyph", "id": "23a9a00a-ac2a-4b13-8874-dead0e28031e"}, {"attributes": {"plot": {"type": "Plot", "id": "44ba3e5b-20af-4089-b94d-2769e9f7f2ad"}, "doc": null, "dimension": 1, "id": "d79bf804-3235-47e2-857c-706b7728064e"}, "type": "Grid", "id": "d79bf804-3235-47e2-857c-706b7728064e"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "eb51531a-6def-48f1-8691-898e50a52490"}, {"type": "DataRange1d", "id": "e4fcaaac-78fd-4565-b39a-5328286b056c"}], "dimensions": ["width", "height"], "id": "1df3c9df-c5e5-43c9-8f07-50feb433c6ea"}, "type": "ZoomTool", "id": "1df3c9df-c5e5-43c9-8f07-50feb433c6ea"}, {"attributes": {"plot": {"type": "Plot", "id": "44ba3e5b-20af-4089-b94d-2769e9f7f2ad"}, "doc": null, "dimension": 0, "id": "71073160-b673-4cf5-a123-ce36b02ead22"}, "type": "Grid", "id": "71073160-b673-4cf5-a123-ce36b02ead22"}, {"attributes": {"plot": {"type": "Plot", "id": "44ba3e5b-20af-4089-b94d-2769e9f7f2ad"}, "id": "bd877442-c7de-4498-bb97-10e52e01e76b", "doc": null}, "type": "ResizeTool", "id": "bd877442-c7de-4498-bb97-10e52e01e76b"}, {"attributes": {"plot": {"type": "Plot", "id": "44ba3e5b-20af-4089-b94d-2769e9f7f2ad"}, "doc": null, "bounds": "auto", "dimension": 1, "location": "min", "axis_label": "# artikels", "id": "d207d944-d7e7-4b47-9164-b51ec84122ec"}, "type": "LinearAxis", "id": "d207d944-d7e7-4b47-9164-b51ec84122ec"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "066b60c0-f847-4eba-b8a0-9affc90c824c"}, "columns": ["y"]}], "id": "e4fcaaac-78fd-4565-b39a-5328286b056c", "doc": null}, "type": "DataRange1d", "id": "e4fcaaac-78fd-4565-b39a-5328286b056c"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "eb51531a-6def-48f1-8691-898e50a52490"}, {"type": "DataRange1d", "id": "e4fcaaac-78fd-4565-b39a-5328286b056c"}], "dimensions": ["width", "height"], "doc": null, "id": "094543b9-df78-4d26-8aba-ea8a34736982"}, "type": "PanTool", "id": "094543b9-df78-4d26-8aba-ea8a34736982"}, {"attributes": {"plot": {"type": "Plot", "id": "44ba3e5b-20af-4089-b94d-2769e9f7f2ad"}, "doc": null, "bounds": "auto", "id": "6777eba0-95a8-4314-a28b-a12e53e987e3", "location": "min", "formats": {"days": ["%m/%d/%Y"]}, "axis_label": "Datum", "dimension": 0}, "type": "DatetimeAxis", "id": "6777eba0-95a8-4314-a28b-a12e53e987e3"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [4, 6, 3, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 2, 2, 1, 1, 2, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1], "x": [1305504000000.0, 1305590400000.0, 1305763200000.0, 1305849600000.0, 1305936000000.0, 1306108800000.0, 1306195200000.0, 1306713600000.0, 1307318400000.0, 1307664000000.0, 1308355200000.0, 1308787200000.0, 1309305600000.0, 1309564800000.0, 1309737600000.0, 1310169600000.0, 1314403200000.0, 1315180800000.0, 1315872000000.0, 1316390400000.0, 1316476800000.0, 1317945600000.0, 1320451200000.0, 1321488000000.0, 1321574400000.0, 1321660800000.0, 1322438400000.0, 1322524800000.0, 1323129600000.0, 1323475200000.0, 1325289600000.0]}, "id": "066b60c0-f847-4eba-b8a0-9affc90c824c"}, "type": "ColumnDataSource", "id": "066b60c0-f847-4eba-b8a0-9affc90c824c"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "44ba3e5b-20af-4089-b94d-2769e9f7f2ad"}], "id": "e953a57a-55eb-4a7c-b59f-04f85f5d15ce"}, "type": "PlotContext", "id": "e953a57a-55eb-4a7c-b59f-04f85f5d15ce"}];
    var modeltype = "PlotContext";
    var elementid = "d02a17b3-e31d-4da8-88e5-0be45e78716a";
    var plotID = "44ba3e5b-20af-4089-b94d-2769e9f7f2ad";
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