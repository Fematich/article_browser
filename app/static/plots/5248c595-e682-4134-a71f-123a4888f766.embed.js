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

    var all_models = [{"attributes": {"doc": null, "tool": {"type": "BoxSelectTool", "id": "3510e869-2a0a-4cc9-898c-22e1fd878e07"}, "id": "8aada1ad-3d5a-49f1-8895-c3692c940b63"}, "type": "BoxSelection", "id": "8aada1ad-3d5a-49f1-8895-c3692c940b63"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "cd2288db-60f0-4089-bfb6-cc21734fbe51"}, "axes": [], "title": "Plot", "y_range": {"type": "DataRange1d", "id": "e70ae21f-6c1c-4344-ab22-e77533b0be87"}, "outer_width": 600, "renderers": [{"type": "LinearAxis", "id": "632d0a03-153a-4176-aa11-454968d540fe"}, {"type": "LinearAxis", "id": "6342de3d-2b4f-45b9-ad5c-34ece91fc05a"}, {"type": "Grid", "id": "53396995-b79b-4b0e-9629-e78d37121548"}, {"type": "Grid", "id": "e3179878-e480-474c-aa9a-d70a8bfd36f0"}, {"type": "BoxSelection", "id": "8aada1ad-3d5a-49f1-8895-c3692c940b63"}, {"type": "Glyph", "id": "07b03941-2fd0-4f34-bc5c-aaec467c2478"}], "outer_height": 600, "doc": null, "canvas_height": 600, "id": "5248c595-e682-4134-a71f-123a4888f766", "tools": [{"type": "PanTool", "id": "f8a121ab-f275-470a-8e65-de4e3098c637"}, {"type": "ZoomTool", "id": "954aea63-c7dd-4938-994c-7d45b44096c8"}, {"type": "PreviewSaveTool", "id": "d2ddde47-a354-4090-bfdc-2b5639240788"}, {"type": "ResizeTool", "id": "2cb8798b-55c0-4456-9a23-1b473eca3e84"}, {"type": "BoxSelectTool", "id": "3510e869-2a0a-4cc9-898c-22e1fd878e07"}], "canvas_width": 600}, "type": "Plot", "id": "5248c595-e682-4134-a71f-123a4888f766"}, {"attributes": {"plot": {"type": "Plot", "id": "5248c595-e682-4134-a71f-123a4888f766"}, "location": "min", "bounds": "auto", "doc": null, "id": "6342de3d-2b4f-45b9-ad5c-34ece91fc05a", "dimension": 1}, "type": "LinearAxis", "id": "6342de3d-2b4f-45b9-ad5c-34ece91fc05a"}, {"attributes": {"plot": {"type": "Plot", "id": "5248c595-e682-4134-a71f-123a4888f766"}, "location": "min", "bounds": "auto", "doc": null, "id": "632d0a03-153a-4176-aa11-454968d540fe", "dimension": 0}, "type": "LinearAxis", "id": "632d0a03-153a-4176-aa11-454968d540fe"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "4d30a66f-e47c-4924-ada7-6954ea068012"}, "doc": null, "id": "07b03941-2fd0-4f34-bc5c-aaec467c2478", "xdata_range": {"type": "DataRange1d", "id": "cd2288db-60f0-4089-bfb6-cc21734fbe51"}, "ydata_range": {"type": "DataRange1d", "id": "e70ae21f-6c1c-4344-ab22-e77533b0be87"}, "glyphspec": {"line_color": {"value": "#1f77b4"}, "line_alpha": 1.0, "fill_color": "#1f77b4", "fill_alpha": 1.0, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "type": "line"}, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "line_width": 1, "angle_units": "deg", "type": "line", "y": {"units": "data", "field": "y"}, "line_alpha": 0.1, "start_angle_units": "deg", "valign": null, "radius_units": "screen", "visible": null, "length_units": "screen", "end_angle_units": "deg", "line_dash_offset": 0, "line_cap": "butt", "line_dash": [], "x": {"units": "data", "field": "x"}, "margin": null, "line_join": "miter", "halign": null}}, "type": "Glyph", "id": "07b03941-2fd0-4f34-bc5c-aaec467c2478"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "4d30a66f-e47c-4924-ada7-6954ea068012"}, "columns": ["y"]}], "id": "e70ae21f-6c1c-4344-ab22-e77533b0be87", "doc": null}, "type": "DataRange1d", "id": "e70ae21f-6c1c-4344-ab22-e77533b0be87"}, {"attributes": {"plot": {"type": "Plot", "id": "5248c595-e682-4134-a71f-123a4888f766"}, "dataranges": [], "id": "d2ddde47-a354-4090-bfdc-2b5639240788", "doc": null}, "type": "PreviewSaveTool", "id": "d2ddde47-a354-4090-bfdc-2b5639240788"}, {"attributes": {"plot": {"type": "Plot", "id": "5248c595-e682-4134-a71f-123a4888f766"}, "doc": null, "dimension": 1, "id": "e3179878-e480-474c-aa9a-d70a8bfd36f0"}, "type": "Grid", "id": "e3179878-e480-474c-aa9a-d70a8bfd36f0"}, {"attributes": {"doc": null, "renderers": [{"type": "Glyph", "id": "07b03941-2fd0-4f34-bc5c-aaec467c2478"}], "id": "3510e869-2a0a-4cc9-898c-22e1fd878e07"}, "type": "BoxSelectTool", "id": "3510e869-2a0a-4cc9-898c-22e1fd878e07"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "cd2288db-60f0-4089-bfb6-cc21734fbe51"}, {"type": "DataRange1d", "id": "e70ae21f-6c1c-4344-ab22-e77533b0be87"}], "dimensions": ["width", "height"], "doc": null, "id": "f8a121ab-f275-470a-8e65-de4e3098c637"}, "type": "PanTool", "id": "f8a121ab-f275-470a-8e65-de4e3098c637"}, {"attributes": {"plot": {"type": "Plot", "id": "5248c595-e682-4134-a71f-123a4888f766"}, "id": "2cb8798b-55c0-4456-9a23-1b473eca3e84", "doc": null}, "type": "ResizeTool", "id": "2cb8798b-55c0-4456-9a23-1b473eca3e84"}, {"attributes": {"plot": {"type": "Plot", "id": "5248c595-e682-4134-a71f-123a4888f766"}, "doc": null, "dimension": 0, "id": "53396995-b79b-4b0e-9629-e78d37121548"}, "type": "Grid", "id": "53396995-b79b-4b0e-9629-e78d37121548"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "cd2288db-60f0-4089-bfb6-cc21734fbe51"}, {"type": "DataRange1d", "id": "e70ae21f-6c1c-4344-ab22-e77533b0be87"}], "dimensions": ["width", "height"], "id": "954aea63-c7dd-4938-994c-7d45b44096c8"}, "type": "ZoomTool", "id": "954aea63-c7dd-4938-994c-7d45b44096c8"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [1, 1, 1, 1], "x": [1294012800000, 1309996800000, 1312934400000, 1299456000000]}, "id": "4d30a66f-e47c-4924-ada7-6954ea068012"}, "type": "ColumnDataSource", "id": "4d30a66f-e47c-4924-ada7-6954ea068012"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "4d30a66f-e47c-4924-ada7-6954ea068012"}, "columns": ["x"]}], "id": "cd2288db-60f0-4089-bfb6-cc21734fbe51", "doc": null}, "type": "DataRange1d", "id": "cd2288db-60f0-4089-bfb6-cc21734fbe51"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "5248c595-e682-4134-a71f-123a4888f766"}], "id": "2ba74bd4-a832-4b90-a181-f4126234b091"}, "type": "PlotContext", "id": "2ba74bd4-a832-4b90-a181-f4126234b091"}];
    var modeltype = "PlotContext";
    var elementid = "bc7b7a55-1d4f-4771-b529-71a6e663eb39";
    var plotID = "5248c595-e682-4134-a71f-123a4888f766";
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