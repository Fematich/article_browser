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

    var all_models = [{"attributes": {"plot": {"type": "Plot", "id": "3f379e26-8c47-4aa1-a913-3f9cefa86e28"}, "id": "a405d4c8-74a9-4dd4-8e24-91929bbd0249", "doc": null}, "type": "ResizeTool", "id": "a405d4c8-74a9-4dd4-8e24-91929bbd0249"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "3f0a0a10-1c27-4103-a9a6-37db11d7b389"}, {"type": "DataRange1d", "id": "c4db7c2f-f93e-4aca-89b5-393caee10237"}], "dimensions": ["width", "height"], "doc": null, "id": "3a0bec99-6694-44d5-9e63-027913bde64e"}, "type": "PanTool", "id": "3a0bec99-6694-44d5-9e63-027913bde64e"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "e2ce246f-9f3e-456e-b1b9-ff4a75453d37"}, "columns": ["x"]}], "id": "3f0a0a10-1c27-4103-a9a6-37db11d7b389", "doc": null}, "type": "DataRange1d", "id": "3f0a0a10-1c27-4103-a9a6-37db11d7b389"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "e2ce246f-9f3e-456e-b1b9-ff4a75453d37"}, "doc": null, "id": "b12734a0-0580-40ea-9ccc-dcbdeffee9ce", "xdata_range": {"type": "DataRange1d", "id": "3f0a0a10-1c27-4103-a9a6-37db11d7b389"}, "ydata_range": {"type": "DataRange1d", "id": "c4db7c2f-f93e-4aca-89b5-393caee10237"}, "glyphspec": {"line_color": {"value": "#1f77b4"}, "line_alpha": 1.0, "fill_color": "#1f77b4", "fill_alpha": 1.0, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "type": "line"}, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "line_width": 1, "angle_units": "deg", "type": "line", "y": {"units": "data", "field": "y"}, "line_alpha": 0.1, "start_angle_units": "deg", "valign": null, "radius_units": "screen", "visible": null, "length_units": "screen", "end_angle_units": "deg", "line_dash_offset": 0, "line_cap": "butt", "line_dash": [], "x": {"units": "data", "field": "x"}, "margin": null, "line_join": "miter", "halign": null}}, "type": "Glyph", "id": "b12734a0-0580-40ea-9ccc-dcbdeffee9ce"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "e2ce246f-9f3e-456e-b1b9-ff4a75453d37"}, "columns": ["y"]}], "id": "c4db7c2f-f93e-4aca-89b5-393caee10237", "doc": null}, "type": "DataRange1d", "id": "c4db7c2f-f93e-4aca-89b5-393caee10237"}, {"attributes": {"doc": null, "renderers": [{"type": "Glyph", "id": "b12734a0-0580-40ea-9ccc-dcbdeffee9ce"}], "id": "6a6b019a-4ee7-4926-a1ee-f22e52ab6a5f"}, "type": "BoxSelectTool", "id": "6a6b019a-4ee7-4926-a1ee-f22e52ab6a5f"}, {"attributes": {"plot": {"type": "Plot", "id": "3f379e26-8c47-4aa1-a913-3f9cefa86e28"}, "doc": null, "dimension": 0, "id": "57409984-e456-4c3a-8285-c92e8371266a"}, "type": "Grid", "id": "57409984-e456-4c3a-8285-c92e8371266a"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "3f0a0a10-1c27-4103-a9a6-37db11d7b389"}, "axes": [], "title": "Plot", "y_range": {"type": "DataRange1d", "id": "c4db7c2f-f93e-4aca-89b5-393caee10237"}, "outer_width": 600, "renderers": [{"type": "LinearAxis", "id": "114e35c3-3930-4a59-b4ea-55dd179f45ce"}, {"type": "LinearAxis", "id": "4195737b-67d2-4475-94d5-7901df01ce9f"}, {"type": "Grid", "id": "57409984-e456-4c3a-8285-c92e8371266a"}, {"type": "Grid", "id": "d8d6c9db-7e7e-4313-b810-f3cd9bb4496e"}, {"type": "BoxSelection", "id": "13194f63-8ba4-41d9-adc3-abf0c2d18a55"}, {"type": "Glyph", "id": "b12734a0-0580-40ea-9ccc-dcbdeffee9ce"}], "outer_height": 600, "doc": null, "canvas_height": 600, "id": "3f379e26-8c47-4aa1-a913-3f9cefa86e28", "tools": [{"type": "PanTool", "id": "3a0bec99-6694-44d5-9e63-027913bde64e"}, {"type": "ZoomTool", "id": "94bc5ab6-581c-42a1-aac4-09211f5909d9"}, {"type": "PreviewSaveTool", "id": "a7f9c5b6-4f23-49b4-a4bc-039287b76eda"}, {"type": "ResizeTool", "id": "a405d4c8-74a9-4dd4-8e24-91929bbd0249"}, {"type": "BoxSelectTool", "id": "6a6b019a-4ee7-4926-a1ee-f22e52ab6a5f"}], "canvas_width": 600}, "type": "Plot", "id": "3f379e26-8c47-4aa1-a913-3f9cefa86e28"}, {"attributes": {"plot": {"type": "Plot", "id": "3f379e26-8c47-4aa1-a913-3f9cefa86e28"}, "doc": null, "dimension": 1, "id": "d8d6c9db-7e7e-4313-b810-f3cd9bb4496e"}, "type": "Grid", "id": "d8d6c9db-7e7e-4313-b810-f3cd9bb4496e"}, {"attributes": {"plot": {"type": "Plot", "id": "3f379e26-8c47-4aa1-a913-3f9cefa86e28"}, "dataranges": [], "id": "a7f9c5b6-4f23-49b4-a4bc-039287b76eda", "doc": null}, "type": "PreviewSaveTool", "id": "a7f9c5b6-4f23-49b4-a4bc-039287b76eda"}, {"attributes": {"plot": {"type": "Plot", "id": "3f379e26-8c47-4aa1-a913-3f9cefa86e28"}, "location": "min", "bounds": "auto", "doc": null, "id": "114e35c3-3930-4a59-b4ea-55dd179f45ce", "dimension": 0}, "type": "LinearAxis", "id": "114e35c3-3930-4a59-b4ea-55dd179f45ce"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "3f379e26-8c47-4aa1-a913-3f9cefa86e28"}], "id": "1f8866b5-31e0-42ab-a20c-efb79696e9d4"}, "type": "PlotContext", "id": "1f8866b5-31e0-42ab-a20c-efb79696e9d4"}, {"attributes": {"plot": {"type": "Plot", "id": "3f379e26-8c47-4aa1-a913-3f9cefa86e28"}, "location": "min", "bounds": "auto", "doc": null, "id": "4195737b-67d2-4475-94d5-7901df01ce9f", "dimension": 1}, "type": "LinearAxis", "id": "4195737b-67d2-4475-94d5-7901df01ce9f"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "3f0a0a10-1c27-4103-a9a6-37db11d7b389"}, {"type": "DataRange1d", "id": "c4db7c2f-f93e-4aca-89b5-393caee10237"}], "dimensions": ["width", "height"], "id": "94bc5ab6-581c-42a1-aac4-09211f5909d9"}, "type": "ZoomTool", "id": "94bc5ab6-581c-42a1-aac4-09211f5909d9"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [1, 1, 1, 1], "x": [1294012800000, 1309996800000, 1312934400000, 1299456000000]}, "id": "e2ce246f-9f3e-456e-b1b9-ff4a75453d37"}, "type": "ColumnDataSource", "id": "e2ce246f-9f3e-456e-b1b9-ff4a75453d37"}, {"attributes": {"doc": null, "tool": {"type": "BoxSelectTool", "id": "6a6b019a-4ee7-4926-a1ee-f22e52ab6a5f"}, "id": "13194f63-8ba4-41d9-adc3-abf0c2d18a55"}, "type": "BoxSelection", "id": "13194f63-8ba4-41d9-adc3-abf0c2d18a55"}];
    var modeltype = "PlotContext";
    var elementid = "74b0a726-f959-48a7-829e-613b0471b149";
    var plotID = "3f379e26-8c47-4aa1-a913-3f9cefa86e28";
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