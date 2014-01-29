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

    var all_models = [{"attributes": {"x_range": {"type": "DataRange1d", "id": "1cee0857-9344-4b75-b2f5-5d269e9c5c14"}, "axes": [], "title": "Plot", "y_range": {"type": "DataRange1d", "id": "5f8a4a87-4d5a-4a6f-a56b-7d80a0103019"}, "outer_width": 600, "renderers": [{"type": "LinearAxis", "id": "31acbba4-df3d-4c71-8eac-f5924b8c0d23"}, {"type": "LinearAxis", "id": "99740952-eb23-4cd4-b5ea-c0978d0196f4"}, {"type": "Grid", "id": "b74fa62f-a276-4be5-a794-329b8d7d6499"}, {"type": "Grid", "id": "050c8d3d-6361-42b7-bd65-7dc7f043bb12"}, {"type": "BoxSelection", "id": "8c4875b8-edb8-4860-b50d-d7c887305c37"}, {"type": "Legend", "id": "52a3e794-5205-4cab-905e-ebdc6e276266"}, {"type": "Glyph", "id": "725d3441-015b-4fa0-b8d6-effb91f16913"}, {"type": "Glyph", "id": "af606167-14d2-4efd-ba1a-244fb62a6b31"}], "outer_height": 600, "doc": null, "canvas_height": 600, "id": "4a0a434e-2075-4503-a073-6852d5585bd0", "tools": [{"type": "PanTool", "id": "87a38076-1aad-446c-b506-f805b9010d5c"}, {"type": "ZoomTool", "id": "b77939a0-85e2-4289-befc-b4a03c61c9fb"}, {"type": "PreviewSaveTool", "id": "b1a6398d-a77b-49fe-b982-1acfe2839b29"}, {"type": "ResizeTool", "id": "6114c6df-cbb8-46c9-9a74-6026f0839b97"}, {"type": "BoxSelectTool", "id": "f6448eca-eae2-4faa-9ba6-3c445ec6394a"}], "canvas_width": 600}, "type": "Plot", "id": "4a0a434e-2075-4503-a073-6852d5585bd0"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "ad512062-1e0e-43fd-99e9-f08996a9982f"}, "doc": null, "id": "af606167-14d2-4efd-ba1a-244fb62a6b31", "xdata_range": {"type": "DataRange1d", "id": "1cee0857-9344-4b75-b2f5-5d269e9c5c14"}, "ydata_range": {"type": "DataRange1d", "id": "5f8a4a87-4d5a-4a6f-a56b-7d80a0103019"}, "glyphspec": {"line_color": {"value": "blue"}, "line_alpha": 1.0, "fill_color": {"value": "blue"}, "fill_alpha": 1.0, "radius": {"units": "screen", "value": 4}, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "type": "circle", "size": {"units": "screen", "field": null, "default": 4}}, "nonselection_glyphspec": {"line_color": {"value": "blue"}, "angle_units": "deg", "fill_color": {"value": "blue"}, "visible": null, "radius": {"units": "screen", "value": 4}, "line_dash_offset": 0, "line_join": "miter", "size": {"units": "screen", "default": 4, "field": null}, "line_alpha": 0.1, "radius_units": "screen", "end_angle_units": "deg", "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": 1, "type": "circle", "fill_alpha": 0.1, "halign": null, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "margin": null}}, "type": "Glyph", "id": "af606167-14d2-4efd-ba1a-244fb62a6b31"}, {"attributes": {"doc": null, "tool": {"type": "BoxSelectTool", "id": "f6448eca-eae2-4faa-9ba6-3c445ec6394a"}, "id": "8c4875b8-edb8-4860-b50d-d7c887305c37"}, "type": "BoxSelection", "id": "8c4875b8-edb8-4860-b50d-d7c887305c37"}, {"attributes": {"plot": {"type": "Plot", "id": "4a0a434e-2075-4503-a073-6852d5585bd0"}, "location": "min", "bounds": "auto", "doc": null, "id": "31acbba4-df3d-4c71-8eac-f5924b8c0d23", "dimension": 0}, "type": "LinearAxis", "id": "31acbba4-df3d-4c71-8eac-f5924b8c0d23"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [0.6518520179012196, 0.7305086335200187, 0.37417726789254124, 0.5835905348366873, 0.6992718623044549, 0.36905785884017345, 0.6290313330543595, 0.7188833455688067, 0.3613394501168779, 0.6489496252297695, 0.7285606218760784, 0.372900694468285, 0.6593135364206558, 0.7339579398817141, 0.3779757729546526], "x": [0.4, 0.4, 0.4, 0.5, 0.5, 0.5, 0.1, 0.1, 0.1, 0.2, 0.2, 0.2, 0.3, 0.3, 0.3]}, "id": "ad512062-1e0e-43fd-99e9-f08996a9982f"}, "type": "ColumnDataSource", "id": "ad512062-1e0e-43fd-99e9-f08996a9982f"}, {"attributes": {"plot": {"type": "Plot", "id": "4a0a434e-2075-4503-a073-6852d5585bd0"}, "doc": null, "dimension": 1, "id": "050c8d3d-6361-42b7-bd65-7dc7f043bb12"}, "type": "Grid", "id": "050c8d3d-6361-42b7-bd65-7dc7f043bb12"}, {"attributes": {"plot": {"type": "Plot", "id": "4a0a434e-2075-4503-a073-6852d5585bd0"}, "doc": null, "legends": {"splits1540": [{"type": "Glyph", "id": "725d3441-015b-4fa0-b8d6-effb91f16913"}], "log_boost_splits1540": [{"type": "Glyph", "id": "af606167-14d2-4efd-ba1a-244fb62a6b31"}]}, "id": "52a3e794-5205-4cab-905e-ebdc6e276266"}, "type": "Legend", "id": "52a3e794-5205-4cab-905e-ebdc6e276266"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "943b3372-cd1c-4134-a8b0-8b5f9a6335c1"}, "columns": ["y"]}, {"ref": {"type": "ColumnDataSource", "id": "ad512062-1e0e-43fd-99e9-f08996a9982f"}, "columns": ["y"]}], "id": "5f8a4a87-4d5a-4a6f-a56b-7d80a0103019", "doc": null}, "type": "DataRange1d", "id": "5f8a4a87-4d5a-4a6f-a56b-7d80a0103019"}, {"attributes": {"doc": null, "renderers": [{"type": "Glyph", "id": "725d3441-015b-4fa0-b8d6-effb91f16913"}, {"type": "Glyph", "id": "af606167-14d2-4efd-ba1a-244fb62a6b31"}], "id": "f6448eca-eae2-4faa-9ba6-3c445ec6394a"}, "type": "BoxSelectTool", "id": "f6448eca-eae2-4faa-9ba6-3c445ec6394a"}, {"attributes": {"plot": {"type": "Plot", "id": "4a0a434e-2075-4503-a073-6852d5585bd0"}, "dataranges": [], "id": "b1a6398d-a77b-49fe-b982-1acfe2839b29", "doc": null}, "type": "PreviewSaveTool", "id": "b1a6398d-a77b-49fe-b982-1acfe2839b29"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "4a0a434e-2075-4503-a073-6852d5585bd0"}], "id": "c9adcf62-19c5-4e3d-899d-d48e8147046c"}, "type": "PlotContext", "id": "c9adcf62-19c5-4e3d-899d-d48e8147046c"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [0.6310415215391938, 0.6700979636447748, 0.3910645335729241, 0.6404549086682197, 0.6794961436856841, 0.40700732429331365, 0.6352641386294299, 0.6848892018073277, 0.41056344844815096, 0.5948290600531481, 0.6797476125456291, 0.4068472977110742, 0.5063627155721406, 0.6420034336380134, 0.38982051925537126, 0.6365227065305923, 0.674210069523634, 0.39841732472539176, 0.6389211003618512, 0.6784710322533719, 0.40416414771245157, 0.6397195935959784, 0.6796249170928611, 0.40542303131521124], "x": [0.1, 0.1, 0.1, 0.2, 0.2, 0.2, 0.3, 0.3, 0.3, 0.4, 0.4, 0.4, 0.5, 0.5, 0.5, 0.15, 0.15, 0.15, 0.18, 0.18, 0.18, 0.19, 0.19, 0.19]}, "id": "943b3372-cd1c-4134-a8b0-8b5f9a6335c1"}, "type": "ColumnDataSource", "id": "943b3372-cd1c-4134-a8b0-8b5f9a6335c1"}, {"attributes": {"plot": {"type": "Plot", "id": "4a0a434e-2075-4503-a073-6852d5585bd0"}, "id": "6114c6df-cbb8-46c9-9a74-6026f0839b97", "doc": null}, "type": "ResizeTool", "id": "6114c6df-cbb8-46c9-9a74-6026f0839b97"}, {"attributes": {"plot": {"type": "Plot", "id": "4a0a434e-2075-4503-a073-6852d5585bd0"}, "location": "min", "bounds": "auto", "doc": null, "id": "99740952-eb23-4cd4-b5ea-c0978d0196f4", "dimension": 1}, "type": "LinearAxis", "id": "99740952-eb23-4cd4-b5ea-c0978d0196f4"}, {"attributes": {"plot": {"type": "Plot", "id": "4a0a434e-2075-4503-a073-6852d5585bd0"}, "doc": null, "dimension": 0, "id": "b74fa62f-a276-4be5-a794-329b8d7d6499"}, "type": "Grid", "id": "b74fa62f-a276-4be5-a794-329b8d7d6499"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "943b3372-cd1c-4134-a8b0-8b5f9a6335c1"}, "columns": ["x"]}, {"ref": {"type": "ColumnDataSource", "id": "ad512062-1e0e-43fd-99e9-f08996a9982f"}, "columns": ["x"]}], "id": "1cee0857-9344-4b75-b2f5-5d269e9c5c14", "doc": null}, "type": "DataRange1d", "id": "1cee0857-9344-4b75-b2f5-5d269e9c5c14"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "1cee0857-9344-4b75-b2f5-5d269e9c5c14"}, {"type": "DataRange1d", "id": "5f8a4a87-4d5a-4a6f-a56b-7d80a0103019"}], "dimensions": ["width", "height"], "doc": null, "id": "87a38076-1aad-446c-b506-f805b9010d5c"}, "type": "PanTool", "id": "87a38076-1aad-446c-b506-f805b9010d5c"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "943b3372-cd1c-4134-a8b0-8b5f9a6335c1"}, "doc": null, "id": "725d3441-015b-4fa0-b8d6-effb91f16913", "xdata_range": {"type": "DataRange1d", "id": "1cee0857-9344-4b75-b2f5-5d269e9c5c14"}, "ydata_range": {"type": "DataRange1d", "id": "5f8a4a87-4d5a-4a6f-a56b-7d80a0103019"}, "glyphspec": {"line_color": {"value": "green"}, "line_alpha": 1.0, "fill_color": {"value": "green"}, "fill_alpha": 1.0, "radius": {"units": "screen", "value": 4}, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "type": "circle", "size": {"units": "screen", "field": null, "default": 4}}, "nonselection_glyphspec": {"line_color": {"value": "green"}, "angle_units": "deg", "fill_color": {"value": "green"}, "visible": null, "radius": {"units": "screen", "value": 4}, "line_dash_offset": 0, "line_join": "miter", "size": {"units": "screen", "default": 4, "field": null}, "line_alpha": 0.1, "radius_units": "screen", "end_angle_units": "deg", "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": 1, "type": "circle", "fill_alpha": 0.1, "halign": null, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "margin": null}}, "type": "Glyph", "id": "725d3441-015b-4fa0-b8d6-effb91f16913"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "1cee0857-9344-4b75-b2f5-5d269e9c5c14"}, {"type": "DataRange1d", "id": "5f8a4a87-4d5a-4a6f-a56b-7d80a0103019"}], "dimensions": ["width", "height"], "id": "b77939a0-85e2-4289-befc-b4a03c61c9fb"}, "type": "ZoomTool", "id": "b77939a0-85e2-4289-befc-b4a03c61c9fb"}];
    var modeltype = "PlotContext";
    var elementid = "775fb971-d568-481f-86e7-b7696cfd2204";
    var plotID = "4a0a434e-2075-4503-a073-6852d5585bd0";
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