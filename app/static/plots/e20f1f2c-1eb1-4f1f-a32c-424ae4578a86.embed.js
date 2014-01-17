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

    var all_models = [{"attributes": {"plot": {"type": "Plot", "id": "e20f1f2c-1eb1-4f1f-a32c-424ae4578a86"}, "location": "min", "bounds": "auto", "doc": null, "id": "c8e6e0df-b7d2-4999-9601-9e0dfa5d185d", "dimension": 1}, "type": "LinearAxis", "id": "c8e6e0df-b7d2-4999-9601-9e0dfa5d185d"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "7cc2ac13-7fdc-44da-9283-940c412df105"}, "columns": ["y"]}], "id": "57830532-25ec-40cd-ac01-e725c29a7512", "doc": null}, "type": "DataRange1d", "id": "57830532-25ec-40cd-ac01-e725c29a7512"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "7cc2ac13-7fdc-44da-9283-940c412df105"}, "doc": null, "id": "6c94e3fe-80a7-4d8b-84f3-93b91ce99ecd", "xdata_range": {"type": "DataRange1d", "id": "39f36f4d-f6d6-4d1e-bcd8-28f678dcd5c8"}, "ydata_range": {"type": "DataRange1d", "id": "57830532-25ec-40cd-ac01-e725c29a7512"}, "glyphspec": {"line_color": {"value": "#1f77b4"}, "line_alpha": 1.0, "fill_color": "#1f77b4", "fill_alpha": 1.0, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "type": "line"}, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "line_width": 1, "angle_units": "deg", "type": "line", "y": {"units": "data", "field": "y"}, "line_alpha": 0.1, "start_angle_units": "deg", "valign": null, "radius_units": "screen", "visible": null, "length_units": "screen", "end_angle_units": "deg", "line_dash_offset": 0, "line_cap": "butt", "line_dash": [], "x": {"units": "data", "field": "x"}, "margin": null, "line_join": "miter", "halign": null}}, "type": "Glyph", "id": "6c94e3fe-80a7-4d8b-84f3-93b91ce99ecd"}, {"attributes": {"plot": {"type": "Plot", "id": "e20f1f2c-1eb1-4f1f-a32c-424ae4578a86"}, "doc": null, "dimension": 0, "id": "21664eb3-a97d-49af-89e4-f6e9eb69006c"}, "type": "Grid", "id": "21664eb3-a97d-49af-89e4-f6e9eb69006c"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "39f36f4d-f6d6-4d1e-bcd8-28f678dcd5c8"}, {"type": "DataRange1d", "id": "57830532-25ec-40cd-ac01-e725c29a7512"}], "dimensions": ["width", "height"], "doc": null, "id": "b9e6ee4b-d172-4df1-a4f3-80c25aca6c6a"}, "type": "PanTool", "id": "b9e6ee4b-d172-4df1-a4f3-80c25aca6c6a"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "39f36f4d-f6d6-4d1e-bcd8-28f678dcd5c8"}, {"type": "DataRange1d", "id": "57830532-25ec-40cd-ac01-e725c29a7512"}], "dimensions": ["width", "height"], "id": "91f09096-74a6-406e-95b1-0e540661aad6"}, "type": "ZoomTool", "id": "91f09096-74a6-406e-95b1-0e540661aad6"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "7cc2ac13-7fdc-44da-9283-940c412df105"}, "columns": ["x"]}], "id": "39f36f4d-f6d6-4d1e-bcd8-28f678dcd5c8", "doc": null}, "type": "DataRange1d", "id": "39f36f4d-f6d6-4d1e-bcd8-28f678dcd5c8"}, {"attributes": {"plot": {"type": "Plot", "id": "e20f1f2c-1eb1-4f1f-a32c-424ae4578a86"}, "location": "min", "bounds": "auto", "doc": null, "id": "046babd7-403c-4296-af91-64ecdba12fea", "dimension": 0}, "type": "LinearAxis", "id": "046babd7-403c-4296-af91-64ecdba12fea"}, {"attributes": {"plot": {"type": "Plot", "id": "e20f1f2c-1eb1-4f1f-a32c-424ae4578a86"}, "id": "92089a7c-7179-4907-b7e3-3db8455d8727", "doc": null}, "type": "ResizeTool", "id": "92089a7c-7179-4907-b7e3-3db8455d8727"}, {"attributes": {"doc": null, "renderers": [{"type": "Glyph", "id": "6c94e3fe-80a7-4d8b-84f3-93b91ce99ecd"}], "id": "74573859-5bf6-49cd-9bdb-0192ecf80c1e"}, "type": "BoxSelectTool", "id": "74573859-5bf6-49cd-9bdb-0192ecf80c1e"}, {"attributes": {"doc": null, "tool": {"type": "BoxSelectTool", "id": "74573859-5bf6-49cd-9bdb-0192ecf80c1e"}, "id": "9d7509e7-24d8-48f6-81d6-d3e2a3a1964a"}, "type": "BoxSelection", "id": "9d7509e7-24d8-48f6-81d6-d3e2a3a1964a"}, {"attributes": {"plot": {"type": "Plot", "id": "e20f1f2c-1eb1-4f1f-a32c-424ae4578a86"}, "dataranges": [], "id": "9220e012-f48c-4fc4-8379-47621b6a419e", "doc": null}, "type": "PreviewSaveTool", "id": "9220e012-f48c-4fc4-8379-47621b6a419e"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [1, 1, 1, 1], "x": [1294012800000, 1309996800000, 1312934400000, 1299456000000]}, "id": "7cc2ac13-7fdc-44da-9283-940c412df105"}, "type": "ColumnDataSource", "id": "7cc2ac13-7fdc-44da-9283-940c412df105"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "e20f1f2c-1eb1-4f1f-a32c-424ae4578a86"}], "id": "5a8e29ba-a7fb-4444-beae-357ce1c7f0aa"}, "type": "PlotContext", "id": "5a8e29ba-a7fb-4444-beae-357ce1c7f0aa"}, {"attributes": {"plot": {"type": "Plot", "id": "e20f1f2c-1eb1-4f1f-a32c-424ae4578a86"}, "doc": null, "dimension": 1, "id": "c8f82be1-234c-47ee-ba42-c3774b2918df"}, "type": "Grid", "id": "c8f82be1-234c-47ee-ba42-c3774b2918df"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "39f36f4d-f6d6-4d1e-bcd8-28f678dcd5c8"}, "axes": [], "title": "Plot", "y_range": {"type": "DataRange1d", "id": "57830532-25ec-40cd-ac01-e725c29a7512"}, "outer_width": 600, "renderers": [{"type": "LinearAxis", "id": "046babd7-403c-4296-af91-64ecdba12fea"}, {"type": "LinearAxis", "id": "c8e6e0df-b7d2-4999-9601-9e0dfa5d185d"}, {"type": "Grid", "id": "21664eb3-a97d-49af-89e4-f6e9eb69006c"}, {"type": "Grid", "id": "c8f82be1-234c-47ee-ba42-c3774b2918df"}, {"type": "BoxSelection", "id": "9d7509e7-24d8-48f6-81d6-d3e2a3a1964a"}, {"type": "Glyph", "id": "6c94e3fe-80a7-4d8b-84f3-93b91ce99ecd"}], "outer_height": 600, "doc": null, "canvas_height": 600, "id": "e20f1f2c-1eb1-4f1f-a32c-424ae4578a86", "tools": [{"type": "PanTool", "id": "b9e6ee4b-d172-4df1-a4f3-80c25aca6c6a"}, {"type": "ZoomTool", "id": "91f09096-74a6-406e-95b1-0e540661aad6"}, {"type": "PreviewSaveTool", "id": "9220e012-f48c-4fc4-8379-47621b6a419e"}, {"type": "ResizeTool", "id": "92089a7c-7179-4907-b7e3-3db8455d8727"}, {"type": "BoxSelectTool", "id": "74573859-5bf6-49cd-9bdb-0192ecf80c1e"}], "canvas_width": 600}, "type": "Plot", "id": "e20f1f2c-1eb1-4f1f-a32c-424ae4578a86"}];
    var modeltype = "PlotContext";
    var elementid = "a042d16c-a630-4d3b-ab3c-d99bcf53a861";
    var plotID = "e20f1f2c-1eb1-4f1f-a32c-424ae4578a86";
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