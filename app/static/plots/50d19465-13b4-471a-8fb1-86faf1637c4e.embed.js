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

    var all_models = [{"attributes": {"plot": {"type": "Plot", "id": "50d19465-13b4-471a-8fb1-86faf1637c4e"}, "location": "min", "bounds": "auto", "doc": null, "id": "cc84e78c-f900-4a04-bdce-9b0cd21d5d18", "dimension": 1}, "type": "LinearAxis", "id": "cc84e78c-f900-4a04-bdce-9b0cd21d5d18"}, {"attributes": {"plot": {"type": "Plot", "id": "50d19465-13b4-471a-8fb1-86faf1637c4e"}, "location": "min", "bounds": "auto", "doc": null, "id": "01634402-a796-450f-ab2a-4c7307b57fa3", "dimension": 0}, "type": "LinearAxis", "id": "01634402-a796-450f-ab2a-4c7307b57fa3"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "e57be561-db14-4522-9d60-04be1cf67065"}, {"type": "DataRange1d", "id": "1ad96a9d-388f-450d-a8d7-fe35b792b834"}], "dimensions": ["width", "height"], "id": "7bea11b0-9022-42f7-9e5c-e38ee5ab5c03"}, "type": "ZoomTool", "id": "7bea11b0-9022-42f7-9e5c-e38ee5ab5c03"}, {"attributes": {"plot": {"type": "Plot", "id": "50d19465-13b4-471a-8fb1-86faf1637c4e"}, "dataranges": [], "id": "5af9255e-df1e-42fe-a80b-752860cb80c5", "doc": null}, "type": "PreviewSaveTool", "id": "5af9255e-df1e-42fe-a80b-752860cb80c5"}, {"attributes": {"plot": {"type": "Plot", "id": "50d19465-13b4-471a-8fb1-86faf1637c4e"}, "id": "c19bd5ef-d1cf-452b-ad4a-b0f40979bacd", "doc": null}, "type": "ResizeTool", "id": "c19bd5ef-d1cf-452b-ad4a-b0f40979bacd"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [1, 1, 1, 1], "x": [1294012800000, 1309996800000, 1312934400000, 1299456000000]}, "id": "7bb9402b-c6a2-442a-936d-226d1135ccbc"}, "type": "ColumnDataSource", "id": "7bb9402b-c6a2-442a-936d-226d1135ccbc"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "7bb9402b-c6a2-442a-936d-226d1135ccbc"}, "doc": null, "id": "0949a794-b046-4ab4-82f5-f3f140dcdf8c", "xdata_range": {"type": "DataRange1d", "id": "e57be561-db14-4522-9d60-04be1cf67065"}, "ydata_range": {"type": "DataRange1d", "id": "1ad96a9d-388f-450d-a8d7-fe35b792b834"}, "glyphspec": {"line_color": {"value": "#1f77b4"}, "line_alpha": 1.0, "fill_color": "#1f77b4", "fill_alpha": 1.0, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "type": "line"}, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "line_width": 1, "angle_units": "deg", "type": "line", "y": {"units": "data", "field": "y"}, "line_alpha": 0.1, "start_angle_units": "deg", "valign": null, "radius_units": "screen", "visible": null, "length_units": "screen", "end_angle_units": "deg", "line_dash_offset": 0, "line_cap": "butt", "line_dash": [], "x": {"units": "data", "field": "x"}, "margin": null, "line_join": "miter", "halign": null}}, "type": "Glyph", "id": "0949a794-b046-4ab4-82f5-f3f140dcdf8c"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "e57be561-db14-4522-9d60-04be1cf67065"}, {"type": "DataRange1d", "id": "1ad96a9d-388f-450d-a8d7-fe35b792b834"}], "dimensions": ["width", "height"], "doc": null, "id": "6ea4a8bf-db82-4439-acc4-162c03695036"}, "type": "PanTool", "id": "6ea4a8bf-db82-4439-acc4-162c03695036"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "7bb9402b-c6a2-442a-936d-226d1135ccbc"}, "columns": ["y"]}], "id": "1ad96a9d-388f-450d-a8d7-fe35b792b834", "doc": null}, "type": "DataRange1d", "id": "1ad96a9d-388f-450d-a8d7-fe35b792b834"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "7bb9402b-c6a2-442a-936d-226d1135ccbc"}, "columns": ["x"]}], "id": "e57be561-db14-4522-9d60-04be1cf67065", "doc": null}, "type": "DataRange1d", "id": "e57be561-db14-4522-9d60-04be1cf67065"}, {"attributes": {"plot": {"type": "Plot", "id": "50d19465-13b4-471a-8fb1-86faf1637c4e"}, "doc": null, "dimension": 1, "id": "aca7eca3-ffcb-472c-b1b0-3b59361d2230"}, "type": "Grid", "id": "aca7eca3-ffcb-472c-b1b0-3b59361d2230"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "50d19465-13b4-471a-8fb1-86faf1637c4e"}], "id": "dbdd87c3-19aa-48c2-bc2f-4ed499c85a5f"}, "type": "PlotContext", "id": "dbdd87c3-19aa-48c2-bc2f-4ed499c85a5f"}, {"attributes": {"doc": null, "renderers": [{"type": "Glyph", "id": "0949a794-b046-4ab4-82f5-f3f140dcdf8c"}], "id": "db7f4ec2-aa97-453f-a547-1481b48812e5"}, "type": "BoxSelectTool", "id": "db7f4ec2-aa97-453f-a547-1481b48812e5"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "e57be561-db14-4522-9d60-04be1cf67065"}, "axes": [], "title": "Plot", "y_range": {"type": "DataRange1d", "id": "1ad96a9d-388f-450d-a8d7-fe35b792b834"}, "outer_width": 600, "renderers": [{"type": "LinearAxis", "id": "01634402-a796-450f-ab2a-4c7307b57fa3"}, {"type": "LinearAxis", "id": "cc84e78c-f900-4a04-bdce-9b0cd21d5d18"}, {"type": "Grid", "id": "21c4ef99-f520-4e6d-bced-858c26157f57"}, {"type": "Grid", "id": "aca7eca3-ffcb-472c-b1b0-3b59361d2230"}, {"type": "BoxSelection", "id": "b333daee-1ccc-4867-8fde-4924ff9d3883"}, {"type": "Glyph", "id": "0949a794-b046-4ab4-82f5-f3f140dcdf8c"}], "outer_height": 600, "doc": null, "canvas_height": 600, "id": "50d19465-13b4-471a-8fb1-86faf1637c4e", "tools": [{"type": "PanTool", "id": "6ea4a8bf-db82-4439-acc4-162c03695036"}, {"type": "ZoomTool", "id": "7bea11b0-9022-42f7-9e5c-e38ee5ab5c03"}, {"type": "PreviewSaveTool", "id": "5af9255e-df1e-42fe-a80b-752860cb80c5"}, {"type": "ResizeTool", "id": "c19bd5ef-d1cf-452b-ad4a-b0f40979bacd"}, {"type": "BoxSelectTool", "id": "db7f4ec2-aa97-453f-a547-1481b48812e5"}], "canvas_width": 600}, "type": "Plot", "id": "50d19465-13b4-471a-8fb1-86faf1637c4e"}, {"attributes": {"plot": {"type": "Plot", "id": "50d19465-13b4-471a-8fb1-86faf1637c4e"}, "doc": null, "dimension": 0, "id": "21c4ef99-f520-4e6d-bced-858c26157f57"}, "type": "Grid", "id": "21c4ef99-f520-4e6d-bced-858c26157f57"}, {"attributes": {"doc": null, "tool": {"type": "BoxSelectTool", "id": "db7f4ec2-aa97-453f-a547-1481b48812e5"}, "id": "b333daee-1ccc-4867-8fde-4924ff9d3883"}, "type": "BoxSelection", "id": "b333daee-1ccc-4867-8fde-4924ff9d3883"}];
    var modeltype = "PlotContext";
    var elementid = "2104a2e9-e573-4feb-88d6-dfa4b0a1880f";
    var plotID = "50d19465-13b4-471a-8fb1-86faf1637c4e";
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