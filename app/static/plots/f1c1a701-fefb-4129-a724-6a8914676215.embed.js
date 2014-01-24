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

    var all_models = [{"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "946137df-b32c-4a8f-8226-8ffa5da6cd8c"}, {"type": "DataRange1d", "id": "32b8676d-6710-4e42-8124-6619b459fce1"}], "dimensions": ["width", "height"], "id": "f8def012-7daf-498d-9eca-11ea98060543"}, "type": "ZoomTool", "id": "f8def012-7daf-498d-9eca-11ea98060543"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "2c8b278a-1ff4-4350-a6b7-d19c2e0e6f81"}, "doc": null, "id": "9fac9db3-7be9-413b-8383-b2246e488a0d", "xdata_range": {"type": "DataRange1d", "id": "946137df-b32c-4a8f-8226-8ffa5da6cd8c"}, "ydata_range": {"type": "DataRange1d", "id": "32b8676d-6710-4e42-8124-6619b459fce1"}, "glyphspec": {"line_color": {"value": "#1f77b4"}, "line_alpha": 1.0, "fill_color": "#1f77b4", "title": "voorkomens", "type": "line", "fill_alpha": 1.0, "height": 300, "width": 400, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "tools": "pan,zoom,resize", "x_axis_type": "datetime"}, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "line_width": 1, "angle_units": "deg", "type": "line", "y": {"units": "data", "field": "y"}, "line_alpha": 0.1, "start_angle_units": "deg", "valign": null, "radius_units": "screen", "visible": null, "length_units": "screen", "end_angle_units": "deg", "line_dash_offset": 0, "line_cap": "butt", "line_dash": [], "x": {"units": "data", "field": "x"}, "margin": null, "line_join": "miter", "halign": null}}, "type": "Glyph", "id": "9fac9db3-7be9-413b-8383-b2246e488a0d"}, {"attributes": {"plot": {"type": "Plot", "id": "f1c1a701-fefb-4129-a724-6a8914676215"}, "doc": null, "bounds": "auto", "id": "17bf0c55-20fb-4a09-86a7-7a726893176f", "location": "min", "formats": {"days": ["%m/%d/%Y"]}, "axis_label": "Datum", "dimension": 0}, "type": "DatetimeAxis", "id": "17bf0c55-20fb-4a09-86a7-7a726893176f"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "946137df-b32c-4a8f-8226-8ffa5da6cd8c"}, "axes": [], "title": "voorkomens", "y_range": {"type": "DataRange1d", "id": "32b8676d-6710-4e42-8124-6619b459fce1"}, "outer_width": 400, "renderers": [{"type": "DatetimeAxis", "id": "17bf0c55-20fb-4a09-86a7-7a726893176f"}, {"type": "LinearAxis", "id": "b96a89ec-d820-4a18-9097-26f5a87cb4b7"}, {"type": "Grid", "id": "735b95d0-1e85-4703-8f12-297d6094bb32"}, {"type": "Grid", "id": "d8a89d48-4385-465f-9b31-c2ab4b4d48f6"}, {"type": "Glyph", "id": "9fac9db3-7be9-413b-8383-b2246e488a0d"}], "outer_height": 300, "width": 400, "doc": null, "canvas_height": 300, "id": "f1c1a701-fefb-4129-a724-6a8914676215", "height": 300, "tools": [{"type": "PanTool", "id": "762285e5-c887-40d7-9db7-0b5869b704ab"}, {"type": "ZoomTool", "id": "f8def012-7daf-498d-9eca-11ea98060543"}, {"type": "ResizeTool", "id": "22f6d72c-ea01-46de-af7c-ea18ef1c3a7a"}], "canvas_width": 400}, "type": "Plot", "id": "f1c1a701-fefb-4129-a724-6a8914676215"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "f1c1a701-fefb-4129-a724-6a8914676215"}], "id": "494856fd-df30-434f-a1bd-2663d4d02c91"}, "type": "PlotContext", "id": "494856fd-df30-434f-a1bd-2663d4d02c91"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "946137df-b32c-4a8f-8226-8ffa5da6cd8c"}, {"type": "DataRange1d", "id": "32b8676d-6710-4e42-8124-6619b459fce1"}], "dimensions": ["width", "height"], "doc": null, "id": "762285e5-c887-40d7-9db7-0b5869b704ab"}, "type": "PanTool", "id": "762285e5-c887-40d7-9db7-0b5869b704ab"}, {"attributes": {"plot": {"type": "Plot", "id": "f1c1a701-fefb-4129-a724-6a8914676215"}, "doc": null, "dimension": 1, "id": "d8a89d48-4385-465f-9b31-c2ab4b4d48f6"}, "type": "Grid", "id": "d8a89d48-4385-465f-9b31-c2ab4b4d48f6"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "2c8b278a-1ff4-4350-a6b7-d19c2e0e6f81"}, "columns": ["y"]}], "id": "32b8676d-6710-4e42-8124-6619b459fce1", "doc": null}, "type": "DataRange1d", "id": "32b8676d-6710-4e42-8124-6619b459fce1"}, {"attributes": {"plot": {"type": "Plot", "id": "f1c1a701-fefb-4129-a724-6a8914676215"}, "doc": null, "bounds": "auto", "dimension": 1, "location": "min", "axis_label": "# artikels", "id": "b96a89ec-d820-4a18-9097-26f5a87cb4b7"}, "type": "LinearAxis", "id": "b96a89ec-d820-4a18-9097-26f5a87cb4b7"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "2c8b278a-1ff4-4350-a6b7-d19c2e0e6f81"}, "columns": ["x"]}], "id": "946137df-b32c-4a8f-8226-8ffa5da6cd8c", "doc": null}, "type": "DataRange1d", "id": "946137df-b32c-4a8f-8226-8ffa5da6cd8c"}, {"attributes": {"plot": {"type": "Plot", "id": "f1c1a701-fefb-4129-a724-6a8914676215"}, "doc": null, "dimension": 0, "id": "735b95d0-1e85-4703-8f12-297d6094bb32"}, "type": "Grid", "id": "735b95d0-1e85-4703-8f12-297d6094bb32"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [17, 8, 3, 4, 3, 2, 2, 1, 2, 4, 11, 3, 3, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 6, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 3], "x": [1298419200000.0, 1298505600000.0, 1298592000000.0, 1298678400000.0, 1298851200000.0, 1298937600000.0, 1299110400000.0, 1299196800000.0, 1299283200000.0, 1299542400000.0, 1299888000000.0, 1300060800000.0, 1300147200000.0, 1300752000000.0, 1300924800000.0, 1301011200000.0, 1301097600000.0, 1301270400000.0, 1301356800000.0, 1301443200000.0, 1301875200000.0, 1304294400000.0, 1305936000000.0, 1306108800000.0, 1308009600000.0, 1308873600000.0, 1308960000000.0, 1309392000000.0, 1309564800000.0, 1310515200000.0, 1311811200000.0, 1313107200000.0, 1313452800000.0, 1315008000000.0, 1315180800000.0, 1323302400000.0, 1323388800000.0, 1323820800000.0, 1324684800000.0]}, "id": "2c8b278a-1ff4-4350-a6b7-d19c2e0e6f81"}, "type": "ColumnDataSource", "id": "2c8b278a-1ff4-4350-a6b7-d19c2e0e6f81"}, {"attributes": {"plot": {"type": "Plot", "id": "f1c1a701-fefb-4129-a724-6a8914676215"}, "id": "22f6d72c-ea01-46de-af7c-ea18ef1c3a7a", "doc": null}, "type": "ResizeTool", "id": "22f6d72c-ea01-46de-af7c-ea18ef1c3a7a"}];
    var modeltype = "PlotContext";
    var elementid = "71b407b9-009a-4ae4-8612-ed340da728b5";
    var plotID = "f1c1a701-fefb-4129-a724-6a8914676215";
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