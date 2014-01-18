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

    var all_models = [{"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "1739696b-9c4e-4ead-b37e-6aef381288ec"}, {"type": "DataRange1d", "id": "dec63063-2647-493c-9c2b-70135b2117e4"}], "dimensions": ["width", "height"], "id": "c2f69a65-315c-4940-b4df-3c424323983f"}, "type": "ZoomTool", "id": "c2f69a65-315c-4940-b4df-3c424323983f"}, {"attributes": {"plot": {"type": "Plot", "id": "e3e0c89b-a505-4f12-8d70-ef746a98fa30"}, "doc": null, "dimension": 1, "id": "dcce4a9a-5001-4973-9227-3d43ab8b449f"}, "type": "Grid", "id": "dcce4a9a-5001-4973-9227-3d43ab8b449f"}, {"attributes": {"plot": {"type": "Plot", "id": "e3e0c89b-a505-4f12-8d70-ef746a98fa30"}, "doc": null, "bounds": "auto", "id": "8e1bf4a7-f04f-4fc9-b05f-f66a3907ad06", "location": "min", "formats": {"days": ["%m/%d/%Y"]}, "axis_label": "Datum", "dimension": 0}, "type": "DatetimeAxis", "id": "8e1bf4a7-f04f-4fc9-b05f-f66a3907ad06"}, {"attributes": {"plot": {"type": "Plot", "id": "e3e0c89b-a505-4f12-8d70-ef746a98fa30"}, "id": "6115f89f-37be-4f3c-8f7b-b86c77560d7b", "doc": null}, "type": "ResizeTool", "id": "6115f89f-37be-4f3c-8f7b-b86c77560d7b"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [4, 6, 3, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 2, 2, 1, 1, 2, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1], "x": [1305504000000.0, 1305590400000.0, 1305763200000.0, 1305849600000.0, 1305936000000.0, 1306108800000.0, 1306195200000.0, 1306713600000.0, 1307318400000.0, 1307664000000.0, 1308355200000.0, 1308787200000.0, 1309305600000.0, 1309564800000.0, 1309737600000.0, 1310169600000.0, 1314403200000.0, 1315180800000.0, 1315872000000.0, 1316390400000.0, 1316476800000.0, 1317945600000.0, 1320451200000.0, 1321488000000.0, 1321574400000.0, 1321660800000.0, 1322438400000.0, 1322524800000.0, 1323129600000.0, 1323475200000.0, 1325289600000.0]}, "id": "fd2cc548-ad52-47c8-ae35-13f69b4156dd"}, "type": "ColumnDataSource", "id": "fd2cc548-ad52-47c8-ae35-13f69b4156dd"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "1739696b-9c4e-4ead-b37e-6aef381288ec"}, {"type": "DataRange1d", "id": "dec63063-2647-493c-9c2b-70135b2117e4"}], "dimensions": ["width", "height"], "doc": null, "id": "e1bef53e-393c-48f2-b40c-3669c37ef4bd"}, "type": "PanTool", "id": "e1bef53e-393c-48f2-b40c-3669c37ef4bd"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "fd2cc548-ad52-47c8-ae35-13f69b4156dd"}, "columns": ["x"]}], "id": "1739696b-9c4e-4ead-b37e-6aef381288ec", "doc": null}, "type": "DataRange1d", "id": "1739696b-9c4e-4ead-b37e-6aef381288ec"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "fd2cc548-ad52-47c8-ae35-13f69b4156dd"}, "columns": ["y"]}], "id": "dec63063-2647-493c-9c2b-70135b2117e4", "doc": null}, "type": "DataRange1d", "id": "dec63063-2647-493c-9c2b-70135b2117e4"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "e3e0c89b-a505-4f12-8d70-ef746a98fa30"}], "id": "776d91a3-94d2-448a-9ff1-ba0a5821ef2e"}, "type": "PlotContext", "id": "776d91a3-94d2-448a-9ff1-ba0a5821ef2e"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "fd2cc548-ad52-47c8-ae35-13f69b4156dd"}, "doc": null, "id": "fd2ad1a8-1e9a-4bd9-ab2e-5052c2b64773", "xdata_range": {"type": "DataRange1d", "id": "1739696b-9c4e-4ead-b37e-6aef381288ec"}, "ydata_range": {"type": "DataRange1d", "id": "dec63063-2647-493c-9c2b-70135b2117e4"}, "glyphspec": {"line_color": {"value": "#1f77b4"}, "line_alpha": 1.0, "fill_color": "#1f77b4", "title": "voorkomens", "type": "line", "fill_alpha": 1.0, "height": 300, "width": 400, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "tools": "pan,zoom,resize", "x_axis_type": "datetime"}, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "line_width": 1, "angle_units": "deg", "type": "line", "y": {"units": "data", "field": "y"}, "line_alpha": 0.1, "start_angle_units": "deg", "valign": null, "radius_units": "screen", "visible": null, "length_units": "screen", "end_angle_units": "deg", "line_dash_offset": 0, "line_cap": "butt", "line_dash": [], "x": {"units": "data", "field": "x"}, "margin": null, "line_join": "miter", "halign": null}}, "type": "Glyph", "id": "fd2ad1a8-1e9a-4bd9-ab2e-5052c2b64773"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "1739696b-9c4e-4ead-b37e-6aef381288ec"}, "axes": [], "title": "voorkomens", "y_range": {"type": "DataRange1d", "id": "dec63063-2647-493c-9c2b-70135b2117e4"}, "outer_width": 400, "renderers": [{"type": "DatetimeAxis", "id": "8e1bf4a7-f04f-4fc9-b05f-f66a3907ad06"}, {"type": "LinearAxis", "id": "fba55be8-e1a5-4936-9149-8ec1c24296ab"}, {"type": "Grid", "id": "9104ddc3-0263-4e85-b476-175c1cac7b32"}, {"type": "Grid", "id": "dcce4a9a-5001-4973-9227-3d43ab8b449f"}, {"type": "Glyph", "id": "fd2ad1a8-1e9a-4bd9-ab2e-5052c2b64773"}], "outer_height": 300, "width": 400, "doc": null, "canvas_height": 300, "id": "e3e0c89b-a505-4f12-8d70-ef746a98fa30", "height": 300, "tools": [{"type": "PanTool", "id": "e1bef53e-393c-48f2-b40c-3669c37ef4bd"}, {"type": "ZoomTool", "id": "c2f69a65-315c-4940-b4df-3c424323983f"}, {"type": "ResizeTool", "id": "6115f89f-37be-4f3c-8f7b-b86c77560d7b"}], "canvas_width": 400}, "type": "Plot", "id": "e3e0c89b-a505-4f12-8d70-ef746a98fa30"}, {"attributes": {"plot": {"type": "Plot", "id": "e3e0c89b-a505-4f12-8d70-ef746a98fa30"}, "doc": null, "bounds": "auto", "dimension": 1, "location": "min", "axis_label": "# artikels", "id": "fba55be8-e1a5-4936-9149-8ec1c24296ab"}, "type": "LinearAxis", "id": "fba55be8-e1a5-4936-9149-8ec1c24296ab"}, {"attributes": {"plot": {"type": "Plot", "id": "e3e0c89b-a505-4f12-8d70-ef746a98fa30"}, "doc": null, "dimension": 0, "id": "9104ddc3-0263-4e85-b476-175c1cac7b32"}, "type": "Grid", "id": "9104ddc3-0263-4e85-b476-175c1cac7b32"}];
    var modeltype = "PlotContext";
    var elementid = "168708fc-a3b0-40b0-b96d-93bfaf39ac80";
    var plotID = "e3e0c89b-a505-4f12-8d70-ef746a98fa30";
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