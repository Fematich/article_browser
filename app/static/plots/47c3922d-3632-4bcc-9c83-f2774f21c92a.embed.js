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

    var all_models = [{"attributes": {"plot": {"type": "Plot", "id": "47c3922d-3632-4bcc-9c83-f2774f21c92a"}, "doc": null, "dimension": 0, "id": "ef81c108-4497-4b1d-9b15-46e637027bfa"}, "type": "Grid", "id": "ef81c108-4497-4b1d-9b15-46e637027bfa"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [16, 7, 3, 3, 3, 1, 2, 1, 2, 4, 3, 1, 1, 1, 2, 1, 4, 1, 1, 1, 1, 1, 1, 3], "x": [1298419200000.0, 1298505600000.0, 1298592000000.0, 1298678400000.0, 1298851200000.0, 1298937600000.0, 1299110400000.0, 1299196800000.0, 1299283200000.0, 1299542400000.0, 1299888000000.0, 1300060800000.0, 1300752000000.0, 1301011200000.0, 1301097600000.0, 1301270400000.0, 1308009600000.0, 1308873600000.0, 1308960000000.0, 1309564800000.0, 1311811200000.0, 1313107200000.0, 1313452800000.0, 1324684800000.0]}, "id": "50c97ce3-7615-4335-881b-1a2996b3e5c8"}, "type": "ColumnDataSource", "id": "50c97ce3-7615-4335-881b-1a2996b3e5c8"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "50c97ce3-7615-4335-881b-1a2996b3e5c8"}, "columns": ["y"]}], "id": "34b37196-bc24-43eb-ba75-6cd05ade9e05", "doc": null}, "type": "DataRange1d", "id": "34b37196-bc24-43eb-ba75-6cd05ade9e05"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "497acac9-906c-4e67-9c73-a6448e32ca49"}, "axes": [], "title": "voorkomens", "y_range": {"type": "DataRange1d", "id": "34b37196-bc24-43eb-ba75-6cd05ade9e05"}, "outer_width": 400, "renderers": [{"type": "DatetimeAxis", "id": "12b34a0d-3e7e-4b18-abf5-18121a3b94fe"}, {"type": "LinearAxis", "id": "4a669eb9-5556-4cda-a935-ed92cb2a34b9"}, {"type": "Grid", "id": "ef81c108-4497-4b1d-9b15-46e637027bfa"}, {"type": "Grid", "id": "8be74eaf-9d78-48f3-a276-6ed59f432924"}, {"type": "Glyph", "id": "7f38d2d0-152c-4318-a70d-7c23796dd458"}], "outer_height": 300, "width": 400, "doc": null, "canvas_height": 300, "id": "47c3922d-3632-4bcc-9c83-f2774f21c92a", "height": 300, "tools": [{"type": "PanTool", "id": "7a89a765-da4a-4a51-8fc8-8d1dede7bd8e"}, {"type": "ZoomTool", "id": "def381bc-d1ff-4f2b-ac75-2264e59b92a8"}, {"type": "ResizeTool", "id": "33508d14-aebc-41c1-9391-a6c5fe8cb718"}], "canvas_width": 400}, "type": "Plot", "id": "47c3922d-3632-4bcc-9c83-f2774f21c92a"}, {"attributes": {"plot": {"type": "Plot", "id": "47c3922d-3632-4bcc-9c83-f2774f21c92a"}, "id": "33508d14-aebc-41c1-9391-a6c5fe8cb718", "doc": null}, "type": "ResizeTool", "id": "33508d14-aebc-41c1-9391-a6c5fe8cb718"}, {"attributes": {"plot": {"type": "Plot", "id": "47c3922d-3632-4bcc-9c83-f2774f21c92a"}, "doc": null, "bounds": "auto", "id": "12b34a0d-3e7e-4b18-abf5-18121a3b94fe", "location": "min", "formats": {"days": ["%m/%d/%Y"]}, "axis_label": "Datum", "dimension": 0}, "type": "DatetimeAxis", "id": "12b34a0d-3e7e-4b18-abf5-18121a3b94fe"}, {"attributes": {"plot": {"type": "Plot", "id": "47c3922d-3632-4bcc-9c83-f2774f21c92a"}, "doc": null, "dimension": 1, "id": "8be74eaf-9d78-48f3-a276-6ed59f432924"}, "type": "Grid", "id": "8be74eaf-9d78-48f3-a276-6ed59f432924"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "497acac9-906c-4e67-9c73-a6448e32ca49"}, {"type": "DataRange1d", "id": "34b37196-bc24-43eb-ba75-6cd05ade9e05"}], "dimensions": ["width", "height"], "id": "def381bc-d1ff-4f2b-ac75-2264e59b92a8"}, "type": "ZoomTool", "id": "def381bc-d1ff-4f2b-ac75-2264e59b92a8"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "50c97ce3-7615-4335-881b-1a2996b3e5c8"}, "doc": null, "id": "7f38d2d0-152c-4318-a70d-7c23796dd458", "xdata_range": {"type": "DataRange1d", "id": "497acac9-906c-4e67-9c73-a6448e32ca49"}, "ydata_range": {"type": "DataRange1d", "id": "34b37196-bc24-43eb-ba75-6cd05ade9e05"}, "glyphspec": {"line_color": {"value": "#1f77b4"}, "line_alpha": 1.0, "fill_color": "#1f77b4", "title": "voorkomens", "type": "line", "fill_alpha": 1.0, "height": 300, "width": 400, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "tools": "pan,zoom,resize", "x_axis_type": "datetime"}, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "line_width": 1, "angle_units": "deg", "type": "line", "y": {"units": "data", "field": "y"}, "line_alpha": 0.1, "start_angle_units": "deg", "valign": null, "radius_units": "screen", "visible": null, "length_units": "screen", "end_angle_units": "deg", "line_dash_offset": 0, "line_cap": "butt", "line_dash": [], "x": {"units": "data", "field": "x"}, "margin": null, "line_join": "miter", "halign": null}}, "type": "Glyph", "id": "7f38d2d0-152c-4318-a70d-7c23796dd458"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "50c97ce3-7615-4335-881b-1a2996b3e5c8"}, "columns": ["x"]}], "id": "497acac9-906c-4e67-9c73-a6448e32ca49", "doc": null}, "type": "DataRange1d", "id": "497acac9-906c-4e67-9c73-a6448e32ca49"}, {"attributes": {"plot": {"type": "Plot", "id": "47c3922d-3632-4bcc-9c83-f2774f21c92a"}, "doc": null, "bounds": "auto", "dimension": 1, "location": "min", "axis_label": "# artikels", "id": "4a669eb9-5556-4cda-a935-ed92cb2a34b9"}, "type": "LinearAxis", "id": "4a669eb9-5556-4cda-a935-ed92cb2a34b9"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "47c3922d-3632-4bcc-9c83-f2774f21c92a"}], "id": "01c19df9-aa46-4cb4-a42c-ffbdc608948f"}, "type": "PlotContext", "id": "01c19df9-aa46-4cb4-a42c-ffbdc608948f"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "497acac9-906c-4e67-9c73-a6448e32ca49"}, {"type": "DataRange1d", "id": "34b37196-bc24-43eb-ba75-6cd05ade9e05"}], "dimensions": ["width", "height"], "doc": null, "id": "7a89a765-da4a-4a51-8fc8-8d1dede7bd8e"}, "type": "PanTool", "id": "7a89a765-da4a-4a51-8fc8-8d1dede7bd8e"}];
    var modeltype = "PlotContext";
    var elementid = "e38e5e6b-c26b-4ac4-8e3a-846dfb8fc2a6";
    var plotID = "47c3922d-3632-4bcc-9c83-f2774f21c92a";
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