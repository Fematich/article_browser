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

    var all_models = [{"attributes": {"data_source": {"type": "ColumnDataSource", "id": "cdbdb384-7214-4d9e-9998-f28ad0b08627"}, "doc": null, "id": "114618e4-368f-4781-9645-4b10a6ff0f15", "xdata_range": {"type": "DataRange1d", "id": "6627cc51-f345-4137-8921-fe2701d5563a"}, "ydata_range": {"type": "DataRange1d", "id": "acaa2591-56e7-44e9-8e50-db69060a9a3b"}, "glyphspec": {"line_color": {"value": "blue"}, "line_alpha": 1.0, "fill_color": {"value": "blue"}, "fill_alpha": 1.0, "radius": {"units": "screen", "value": 4}, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "type": "circle", "size": {"units": "screen", "field": null, "default": 4}}, "nonselection_glyphspec": {"line_color": {"value": "blue"}, "angle_units": "deg", "fill_color": {"value": "blue"}, "visible": null, "radius": {"units": "screen", "value": 4}, "line_dash_offset": 0, "line_join": "miter", "size": {"units": "screen", "default": 4, "field": null}, "line_alpha": 0.1, "radius_units": "screen", "end_angle_units": "deg", "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": 1, "type": "circle", "fill_alpha": 0.1, "halign": null, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "margin": null}}, "type": "Glyph", "id": "114618e4-368f-4781-9645-4b10a6ff0f15"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [0.6290313330543595, 0.7188833455688067, 0.3613394501168779, 0.6489496252297695, 0.7285606218760784, 0.372900694468285, 0.6593135364206558, 0.7339579398817141, 0.3779757729546526, 0.6518520179012196, 0.7305086335200187, 0.37417726789254124, 0.5835905348366873, 0.6992718623044549, 0.36905785884017345], "x": [0.1, 0.1, 0.1, 0.2, 0.2, 0.2, 0.3, 0.3, 0.3, 0.4, 0.4, 0.4, 0.5, 0.5, 0.5]}, "id": "cdbdb384-7214-4d9e-9998-f28ad0b08627"}, "type": "ColumnDataSource", "id": "cdbdb384-7214-4d9e-9998-f28ad0b08627"}, {"attributes": {"doc": null, "renderers": [{"type": "Glyph", "id": "0792694c-938f-436b-9070-c2885624e5dc"}, {"type": "Glyph", "id": "114618e4-368f-4781-9645-4b10a6ff0f15"}], "id": "71abed02-5775-4bc2-b6af-f6434fb53b5d"}, "type": "BoxSelectTool", "id": "71abed02-5775-4bc2-b6af-f6434fb53b5d"}, {"attributes": {"doc": null, "tool": {"type": "BoxSelectTool", "id": "71abed02-5775-4bc2-b6af-f6434fb53b5d"}, "id": "a020e82a-f54e-4910-96d2-0da9c00321fd"}, "type": "BoxSelection", "id": "a020e82a-f54e-4910-96d2-0da9c00321fd"}, {"attributes": {"plot": {"type": "Plot", "id": "8ff83e14-b9dd-4d22-9356-998dd2105587"}, "doc": null, "legends": {"sym_log_boost_splits1540": [{"type": "Glyph", "id": "114618e4-368f-4781-9645-4b10a6ff0f15"}], "splits1540": [{"type": "Glyph", "id": "0792694c-938f-436b-9070-c2885624e5dc"}]}, "id": "929dc794-2429-4e6b-98f4-6c78d32a066d"}, "type": "Legend", "id": "929dc794-2429-4e6b-98f4-6c78d32a066d"}, {"attributes": {"plot": {"type": "Plot", "id": "8ff83e14-b9dd-4d22-9356-998dd2105587"}, "location": "min", "bounds": "auto", "doc": null, "id": "29522721-f32d-4940-ab6c-501f32ff1618", "dimension": 1}, "type": "LinearAxis", "id": "29522721-f32d-4940-ab6c-501f32ff1618"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "5e739924-8deb-4355-bd5d-8261a3f47228"}, "doc": null, "id": "0792694c-938f-436b-9070-c2885624e5dc", "xdata_range": {"type": "DataRange1d", "id": "6627cc51-f345-4137-8921-fe2701d5563a"}, "ydata_range": {"type": "DataRange1d", "id": "acaa2591-56e7-44e9-8e50-db69060a9a3b"}, "glyphspec": {"line_color": {"value": "green"}, "line_alpha": 1.0, "fill_color": {"value": "green"}, "fill_alpha": 1.0, "radius": {"units": "screen", "value": 4}, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "type": "circle", "size": {"units": "screen", "field": null, "default": 4}}, "nonselection_glyphspec": {"line_color": {"value": "green"}, "angle_units": "deg", "fill_color": {"value": "green"}, "visible": null, "radius": {"units": "screen", "value": 4}, "line_dash_offset": 0, "line_join": "miter", "size": {"units": "screen", "default": 4, "field": null}, "line_alpha": 0.1, "radius_units": "screen", "end_angle_units": "deg", "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": 1, "type": "circle", "fill_alpha": 0.1, "halign": null, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "margin": null}}, "type": "Glyph", "id": "0792694c-938f-436b-9070-c2885624e5dc"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "6627cc51-f345-4137-8921-fe2701d5563a"}, "axes": [], "title": "Plot", "y_range": {"type": "DataRange1d", "id": "acaa2591-56e7-44e9-8e50-db69060a9a3b"}, "outer_width": 600, "renderers": [{"type": "LinearAxis", "id": "d893d8bc-c736-4d4d-af68-6493bc67cb8d"}, {"type": "LinearAxis", "id": "29522721-f32d-4940-ab6c-501f32ff1618"}, {"type": "Grid", "id": "6b473a7d-e70b-4922-9165-23685142e355"}, {"type": "Grid", "id": "9d18ab3f-d52c-41f4-a081-ba61bc2cfc91"}, {"type": "BoxSelection", "id": "a020e82a-f54e-4910-96d2-0da9c00321fd"}, {"type": "Legend", "id": "929dc794-2429-4e6b-98f4-6c78d32a066d"}, {"type": "Glyph", "id": "0792694c-938f-436b-9070-c2885624e5dc"}, {"type": "Glyph", "id": "114618e4-368f-4781-9645-4b10a6ff0f15"}], "outer_height": 600, "doc": null, "canvas_height": 600, "id": "8ff83e14-b9dd-4d22-9356-998dd2105587", "tools": [{"type": "PanTool", "id": "f9f951db-84dc-4496-bc73-37f556dc5463"}, {"type": "ZoomTool", "id": "16b39456-694e-4e8f-8268-deaef5031a24"}, {"type": "PreviewSaveTool", "id": "6813e173-bc39-4f95-ba98-19f509f25651"}, {"type": "ResizeTool", "id": "512bf260-95d6-48e6-b2ce-d1a964276bac"}, {"type": "BoxSelectTool", "id": "71abed02-5775-4bc2-b6af-f6434fb53b5d"}], "canvas_width": 600}, "type": "Plot", "id": "8ff83e14-b9dd-4d22-9356-998dd2105587"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "6627cc51-f345-4137-8921-fe2701d5563a"}, {"type": "DataRange1d", "id": "acaa2591-56e7-44e9-8e50-db69060a9a3b"}], "dimensions": ["width", "height"], "doc": null, "id": "f9f951db-84dc-4496-bc73-37f556dc5463"}, "type": "PanTool", "id": "f9f951db-84dc-4496-bc73-37f556dc5463"}, {"attributes": {"plot": {"type": "Plot", "id": "8ff83e14-b9dd-4d22-9356-998dd2105587"}, "id": "512bf260-95d6-48e6-b2ce-d1a964276bac", "doc": null}, "type": "ResizeTool", "id": "512bf260-95d6-48e6-b2ce-d1a964276bac"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "5e739924-8deb-4355-bd5d-8261a3f47228"}, "columns": ["y"]}, {"ref": {"type": "ColumnDataSource", "id": "cdbdb384-7214-4d9e-9998-f28ad0b08627"}, "columns": ["y"]}], "id": "acaa2591-56e7-44e9-8e50-db69060a9a3b", "doc": null}, "type": "DataRange1d", "id": "acaa2591-56e7-44e9-8e50-db69060a9a3b"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "5e739924-8deb-4355-bd5d-8261a3f47228"}, "columns": ["x"]}, {"ref": {"type": "ColumnDataSource", "id": "cdbdb384-7214-4d9e-9998-f28ad0b08627"}, "columns": ["x"]}], "id": "6627cc51-f345-4137-8921-fe2701d5563a", "doc": null}, "type": "DataRange1d", "id": "6627cc51-f345-4137-8921-fe2701d5563a"}, {"attributes": {"plot": {"type": "Plot", "id": "8ff83e14-b9dd-4d22-9356-998dd2105587"}, "doc": null, "dimension": 1, "id": "9d18ab3f-d52c-41f4-a081-ba61bc2cfc91"}, "type": "Grid", "id": "9d18ab3f-d52c-41f4-a081-ba61bc2cfc91"}, {"attributes": {"plot": {"type": "Plot", "id": "8ff83e14-b9dd-4d22-9356-998dd2105587"}, "doc": null, "dimension": 0, "id": "6b473a7d-e70b-4922-9165-23685142e355"}, "type": "Grid", "id": "6b473a7d-e70b-4922-9165-23685142e355"}, {"attributes": {"plot": {"type": "Plot", "id": "8ff83e14-b9dd-4d22-9356-998dd2105587"}, "dataranges": [], "id": "6813e173-bc39-4f95-ba98-19f509f25651", "doc": null}, "type": "PreviewSaveTool", "id": "6813e173-bc39-4f95-ba98-19f509f25651"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [0.6310415215391938, 0.6700979636447748, 0.3910645335729241, 0.6404549086682197, 0.6794961436856841, 0.40700732429331365, 0.6352641386294299, 0.6848892018073277, 0.41056344844815096, 0.5948290600531481, 0.6797476125456291, 0.4068472977110742, 0.5063627155721406, 0.6420034336380134, 0.38982051925537126, 0.6365227065305923, 0.674210069523634, 0.39841732472539176, 0.6389211003618512, 0.6784710322533719, 0.40416414771245157, 0.6397195935959784, 0.6796249170928611, 0.40542303131521124], "x": [0.1, 0.1, 0.1, 0.2, 0.2, 0.2, 0.3, 0.3, 0.3, 0.4, 0.4, 0.4, 0.5, 0.5, 0.5, 0.15, 0.15, 0.15, 0.18, 0.18, 0.18, 0.19, 0.19, 0.19]}, "id": "5e739924-8deb-4355-bd5d-8261a3f47228"}, "type": "ColumnDataSource", "id": "5e739924-8deb-4355-bd5d-8261a3f47228"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "6627cc51-f345-4137-8921-fe2701d5563a"}, {"type": "DataRange1d", "id": "acaa2591-56e7-44e9-8e50-db69060a9a3b"}], "dimensions": ["width", "height"], "id": "16b39456-694e-4e8f-8268-deaef5031a24"}, "type": "ZoomTool", "id": "16b39456-694e-4e8f-8268-deaef5031a24"}, {"attributes": {"plot": {"type": "Plot", "id": "8ff83e14-b9dd-4d22-9356-998dd2105587"}, "location": "min", "bounds": "auto", "doc": null, "id": "d893d8bc-c736-4d4d-af68-6493bc67cb8d", "dimension": 0}, "type": "LinearAxis", "id": "d893d8bc-c736-4d4d-af68-6493bc67cb8d"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "8ff83e14-b9dd-4d22-9356-998dd2105587"}], "id": "8db29b5f-7c42-4fec-831b-3850b7cbf31e"}, "type": "PlotContext", "id": "8db29b5f-7c42-4fec-831b-3850b7cbf31e"}];
    var modeltype = "PlotContext";
    var elementid = "35cbd67d-6270-40bb-9c0f-ba902db0a3ea";
    var plotID = "8ff83e14-b9dd-4d22-9356-998dd2105587";
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