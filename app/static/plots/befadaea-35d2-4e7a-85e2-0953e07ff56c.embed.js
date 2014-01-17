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

    var all_models = [{"attributes": {"plot": {"type": "Plot", "id": "befadaea-35d2-4e7a-85e2-0953e07ff56c"}, "location": "min", "bounds": "auto", "doc": null, "id": "b2a222c2-2dd4-4677-be3c-8ccc2cc8bc11", "dimension": 0}, "type": "LinearAxis", "id": "b2a222c2-2dd4-4677-be3c-8ccc2cc8bc11"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "872f24c8-e43b-41b8-8233-bbc7f0866393"}, "columns": ["x"]}], "id": "73d0f57c-be38-4603-81b3-7636fa503dbd", "doc": null}, "type": "DataRange1d", "id": "73d0f57c-be38-4603-81b3-7636fa503dbd"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "73d0f57c-be38-4603-81b3-7636fa503dbd"}, {"type": "DataRange1d", "id": "6dff3406-1144-4d90-8887-1ca2d007ad3d"}], "dimensions": ["width", "height"], "doc": null, "id": "47b72796-84d8-4002-ad40-2c4cf377969c"}, "type": "PanTool", "id": "47b72796-84d8-4002-ad40-2c4cf377969c"}, {"attributes": {"plot": {"type": "Plot", "id": "befadaea-35d2-4e7a-85e2-0953e07ff56c"}, "doc": null, "dimension": 1, "id": "1e097591-4620-4ea0-a17a-edea8a9f16ff"}, "type": "Grid", "id": "1e097591-4620-4ea0-a17a-edea8a9f16ff"}, {"attributes": {"plot": {"type": "Plot", "id": "befadaea-35d2-4e7a-85e2-0953e07ff56c"}, "doc": null, "dimension": 0, "id": "606e27d1-c564-42d6-92c2-24b851214ba4"}, "type": "Grid", "id": "606e27d1-c564-42d6-92c2-24b851214ba4"}, {"attributes": {"doc": null, "tool": {"type": "BoxSelectTool", "id": "f5954f14-920b-41c5-884e-58ded18a2657"}, "id": "746e09c5-c493-4157-9cac-efda81cbd53b"}, "type": "BoxSelection", "id": "746e09c5-c493-4157-9cac-efda81cbd53b"}, {"attributes": {"plot": {"type": "Plot", "id": "befadaea-35d2-4e7a-85e2-0953e07ff56c"}, "dataranges": [], "id": "cc2fdb4b-3ab1-4fc8-8104-b370e85bc656", "doc": null}, "type": "PreviewSaveTool", "id": "cc2fdb4b-3ab1-4fc8-8104-b370e85bc656"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "872f24c8-e43b-41b8-8233-bbc7f0866393"}, "columns": ["y"]}], "id": "6dff3406-1144-4d90-8887-1ca2d007ad3d", "doc": null}, "type": "DataRange1d", "id": "6dff3406-1144-4d90-8887-1ca2d007ad3d"}, {"attributes": {"plot": {"type": "Plot", "id": "befadaea-35d2-4e7a-85e2-0953e07ff56c"}, "id": "6036b627-f5fc-4de7-aaf4-923a45e5dfc7", "doc": null}, "type": "ResizeTool", "id": "6036b627-f5fc-4de7-aaf4-923a45e5dfc7"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "872f24c8-e43b-41b8-8233-bbc7f0866393"}, "doc": null, "id": "7446a928-7a74-4a51-a044-1715c8a15eb5", "xdata_range": {"type": "DataRange1d", "id": "73d0f57c-be38-4603-81b3-7636fa503dbd"}, "ydata_range": {"type": "DataRange1d", "id": "6dff3406-1144-4d90-8887-1ca2d007ad3d"}, "glyphspec": {"line_color": {"value": "#1f77b4"}, "line_alpha": 1.0, "fill_color": "#1f77b4", "fill_alpha": 1.0, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "type": "line"}, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "line_width": 1, "angle_units": "deg", "type": "line", "y": {"units": "data", "field": "y"}, "line_alpha": 0.1, "start_angle_units": "deg", "valign": null, "radius_units": "screen", "visible": null, "length_units": "screen", "end_angle_units": "deg", "line_dash_offset": 0, "line_cap": "butt", "line_dash": [], "x": {"units": "data", "field": "x"}, "margin": null, "line_join": "miter", "halign": null}}, "type": "Glyph", "id": "7446a928-7a74-4a51-a044-1715c8a15eb5"}, {"attributes": {"plot": {"type": "Plot", "id": "befadaea-35d2-4e7a-85e2-0953e07ff56c"}, "location": "min", "bounds": "auto", "doc": null, "id": "0319459e-e402-49a9-9e29-5c3af380e38a", "dimension": 1}, "type": "LinearAxis", "id": "0319459e-e402-49a9-9e29-5c3af380e38a"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "befadaea-35d2-4e7a-85e2-0953e07ff56c"}], "id": "baa162ad-c775-4ade-8abd-c4a8326421f8"}, "type": "PlotContext", "id": "baa162ad-c775-4ade-8abd-c4a8326421f8"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [1, 1, 1, 1, 1], "x": [1294012800000, 1309996800000, 1312934400000, 1321660800000, 1299456000000]}, "id": "872f24c8-e43b-41b8-8233-bbc7f0866393"}, "type": "ColumnDataSource", "id": "872f24c8-e43b-41b8-8233-bbc7f0866393"}, {"attributes": {"doc": null, "renderers": [{"type": "Glyph", "id": "7446a928-7a74-4a51-a044-1715c8a15eb5"}], "id": "f5954f14-920b-41c5-884e-58ded18a2657"}, "type": "BoxSelectTool", "id": "f5954f14-920b-41c5-884e-58ded18a2657"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "73d0f57c-be38-4603-81b3-7636fa503dbd"}, {"type": "DataRange1d", "id": "6dff3406-1144-4d90-8887-1ca2d007ad3d"}], "dimensions": ["width", "height"], "id": "bd860dd0-52e1-4d45-85d9-2420e943bdf7"}, "type": "ZoomTool", "id": "bd860dd0-52e1-4d45-85d9-2420e943bdf7"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "73d0f57c-be38-4603-81b3-7636fa503dbd"}, "axes": [], "title": "Plot", "y_range": {"type": "DataRange1d", "id": "6dff3406-1144-4d90-8887-1ca2d007ad3d"}, "outer_width": 600, "renderers": [{"type": "LinearAxis", "id": "b2a222c2-2dd4-4677-be3c-8ccc2cc8bc11"}, {"type": "LinearAxis", "id": "0319459e-e402-49a9-9e29-5c3af380e38a"}, {"type": "Grid", "id": "606e27d1-c564-42d6-92c2-24b851214ba4"}, {"type": "Grid", "id": "1e097591-4620-4ea0-a17a-edea8a9f16ff"}, {"type": "BoxSelection", "id": "746e09c5-c493-4157-9cac-efda81cbd53b"}, {"type": "Glyph", "id": "7446a928-7a74-4a51-a044-1715c8a15eb5"}], "outer_height": 600, "doc": null, "canvas_height": 600, "id": "befadaea-35d2-4e7a-85e2-0953e07ff56c", "tools": [{"type": "PanTool", "id": "47b72796-84d8-4002-ad40-2c4cf377969c"}, {"type": "ZoomTool", "id": "bd860dd0-52e1-4d45-85d9-2420e943bdf7"}, {"type": "PreviewSaveTool", "id": "cc2fdb4b-3ab1-4fc8-8104-b370e85bc656"}, {"type": "ResizeTool", "id": "6036b627-f5fc-4de7-aaf4-923a45e5dfc7"}, {"type": "BoxSelectTool", "id": "f5954f14-920b-41c5-884e-58ded18a2657"}], "canvas_width": 600}, "type": "Plot", "id": "befadaea-35d2-4e7a-85e2-0953e07ff56c"}];
    var modeltype = "PlotContext";
    var elementid = "ce4f4518-1529-4150-8fcc-af3bdd127e4f";
    var plotID = "befadaea-35d2-4e7a-85e2-0953e07ff56c";
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