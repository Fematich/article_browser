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

    var all_models = [{"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "47faa9ce-fc93-4c39-b190-1fdf02bc052e"}, {"type": "DataRange1d", "id": "b2cee5eb-68bf-4033-9fe6-a77dbb27a22a"}], "dimensions": ["width", "height"], "id": "f920ff8a-dbea-47b6-9c71-9ffeddc14be1"}, "type": "ZoomTool", "id": "f920ff8a-dbea-47b6-9c71-9ffeddc14be1"}, {"attributes": {"plot": {"type": "Plot", "id": "59038575-2b1a-4a9b-b07d-ebb82aa9efbc"}, "location": "min", "bounds": "auto", "doc": null, "id": "2fc92f82-144b-4b8e-9b07-97f5c0d3b5ce", "dimension": 0}, "type": "LinearAxis", "id": "2fc92f82-144b-4b8e-9b07-97f5c0d3b5ce"}, {"attributes": {"plot": {"type": "Plot", "id": "59038575-2b1a-4a9b-b07d-ebb82aa9efbc"}, "doc": null, "legends": {"splits1540": [{"type": "Glyph", "id": "10368206-e8b1-40c2-8c5e-e4e0c7418256"}], "log_boost_splits1540": [{"type": "Glyph", "id": "09015148-2609-4e00-8b50-0bdea40c568a"}]}, "id": "757a2c0a-0f21-440a-9bac-a99714894c9f"}, "type": "Legend", "id": "757a2c0a-0f21-440a-9bac-a99714894c9f"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "47faa9ce-fc93-4c39-b190-1fdf02bc052e"}, "axes": [], "title": "Plot", "y_range": {"type": "DataRange1d", "id": "b2cee5eb-68bf-4033-9fe6-a77dbb27a22a"}, "outer_width": 600, "renderers": [{"type": "LinearAxis", "id": "2fc92f82-144b-4b8e-9b07-97f5c0d3b5ce"}, {"type": "LinearAxis", "id": "1678961e-a390-4975-bb40-3fcc92ebdad4"}, {"type": "Grid", "id": "4b78070a-7c2a-49de-adeb-0d509f465628"}, {"type": "Grid", "id": "d569306a-68af-42ef-94ea-f14436a4d9d4"}, {"type": "BoxSelection", "id": "91b1be1f-3374-4d5e-8f15-8d7e71d74943"}, {"type": "Legend", "id": "757a2c0a-0f21-440a-9bac-a99714894c9f"}, {"type": "Glyph", "id": "10368206-e8b1-40c2-8c5e-e4e0c7418256"}, {"type": "Glyph", "id": "09015148-2609-4e00-8b50-0bdea40c568a"}], "outer_height": 600, "doc": null, "canvas_height": 600, "id": "59038575-2b1a-4a9b-b07d-ebb82aa9efbc", "tools": [{"type": "PanTool", "id": "fa54681b-b852-435f-848c-bc3a00ab6207"}, {"type": "ZoomTool", "id": "f920ff8a-dbea-47b6-9c71-9ffeddc14be1"}, {"type": "PreviewSaveTool", "id": "ed1afdfa-060e-438d-90ab-dae3a2751de8"}, {"type": "ResizeTool", "id": "1525e766-978c-4049-b4dd-f179fa3847db"}, {"type": "BoxSelectTool", "id": "3dd06244-2539-472b-ad66-f0575a348b4a"}], "canvas_width": 600}, "type": "Plot", "id": "59038575-2b1a-4a9b-b07d-ebb82aa9efbc"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "89961355-c658-4882-8e69-4350ca09a483"}, "doc": null, "id": "10368206-e8b1-40c2-8c5e-e4e0c7418256", "xdata_range": {"type": "DataRange1d", "id": "47faa9ce-fc93-4c39-b190-1fdf02bc052e"}, "ydata_range": {"type": "DataRange1d", "id": "b2cee5eb-68bf-4033-9fe6-a77dbb27a22a"}, "glyphspec": {"line_color": {"value": "green"}, "line_alpha": 1.0, "fill_color": {"value": "green"}, "fill_alpha": 1.0, "radius": {"units": "screen", "value": 4}, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "type": "circle", "size": {"units": "screen", "field": null, "default": 4}}, "nonselection_glyphspec": {"line_color": {"value": "green"}, "angle_units": "deg", "fill_color": {"value": "green"}, "visible": null, "radius": {"units": "screen", "value": 4}, "line_dash_offset": 0, "line_join": "miter", "size": {"units": "screen", "default": 4, "field": null}, "line_alpha": 0.1, "radius_units": "screen", "end_angle_units": "deg", "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": 1, "type": "circle", "fill_alpha": 0.1, "halign": null, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "margin": null}}, "type": "Glyph", "id": "10368206-e8b1-40c2-8c5e-e4e0c7418256"}, {"attributes": {"plot": {"type": "Plot", "id": "59038575-2b1a-4a9b-b07d-ebb82aa9efbc"}, "doc": null, "dimension": 0, "id": "4b78070a-7c2a-49de-adeb-0d509f465628"}, "type": "Grid", "id": "4b78070a-7c2a-49de-adeb-0d509f465628"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "59038575-2b1a-4a9b-b07d-ebb82aa9efbc"}], "id": "6dc2941d-8222-4d68-9a01-6daeedb5aa3a"}, "type": "PlotContext", "id": "6dc2941d-8222-4d68-9a01-6daeedb5aa3a"}, {"attributes": {"plot": {"type": "Plot", "id": "59038575-2b1a-4a9b-b07d-ebb82aa9efbc"}, "doc": null, "dimension": 1, "id": "d569306a-68af-42ef-94ea-f14436a4d9d4"}, "type": "Grid", "id": "d569306a-68af-42ef-94ea-f14436a4d9d4"}, {"attributes": {"doc": null, "tool": {"type": "BoxSelectTool", "id": "3dd06244-2539-472b-ad66-f0575a348b4a"}, "id": "91b1be1f-3374-4d5e-8f15-8d7e71d74943"}, "type": "BoxSelection", "id": "91b1be1f-3374-4d5e-8f15-8d7e71d74943"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "47faa9ce-fc93-4c39-b190-1fdf02bc052e"}, {"type": "DataRange1d", "id": "b2cee5eb-68bf-4033-9fe6-a77dbb27a22a"}], "dimensions": ["width", "height"], "doc": null, "id": "fa54681b-b852-435f-848c-bc3a00ab6207"}, "type": "PanTool", "id": "fa54681b-b852-435f-848c-bc3a00ab6207"}, {"attributes": {"plot": {"type": "Plot", "id": "59038575-2b1a-4a9b-b07d-ebb82aa9efbc"}, "dataranges": [], "id": "ed1afdfa-060e-438d-90ab-dae3a2751de8", "doc": null}, "type": "PreviewSaveTool", "id": "ed1afdfa-060e-438d-90ab-dae3a2751de8"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "89961355-c658-4882-8e69-4350ca09a483"}, "columns": ["y"]}, {"ref": {"type": "ColumnDataSource", "id": "4e8862ec-3bdc-4dd6-8488-e47583d24f33"}, "columns": ["y"]}], "id": "b2cee5eb-68bf-4033-9fe6-a77dbb27a22a", "doc": null}, "type": "DataRange1d", "id": "b2cee5eb-68bf-4033-9fe6-a77dbb27a22a"}, {"attributes": {"plot": {"type": "Plot", "id": "59038575-2b1a-4a9b-b07d-ebb82aa9efbc"}, "location": "min", "bounds": "auto", "doc": null, "id": "1678961e-a390-4975-bb40-3fcc92ebdad4", "dimension": 1}, "type": "LinearAxis", "id": "1678961e-a390-4975-bb40-3fcc92ebdad4"}, {"attributes": {"doc": null, "renderers": [{"type": "Glyph", "id": "10368206-e8b1-40c2-8c5e-e4e0c7418256"}, {"type": "Glyph", "id": "09015148-2609-4e00-8b50-0bdea40c568a"}], "id": "3dd06244-2539-472b-ad66-f0575a348b4a"}, "type": "BoxSelectTool", "id": "3dd06244-2539-472b-ad66-f0575a348b4a"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "4e8862ec-3bdc-4dd6-8488-e47583d24f33"}, "doc": null, "id": "09015148-2609-4e00-8b50-0bdea40c568a", "xdata_range": {"type": "DataRange1d", "id": "47faa9ce-fc93-4c39-b190-1fdf02bc052e"}, "ydata_range": {"type": "DataRange1d", "id": "b2cee5eb-68bf-4033-9fe6-a77dbb27a22a"}, "glyphspec": {"line_color": {"value": "blue"}, "line_alpha": 1.0, "fill_color": {"value": "blue"}, "fill_alpha": 1.0, "radius": {"units": "screen", "value": 4}, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "type": "circle", "size": {"units": "screen", "field": null, "default": 4}}, "nonselection_glyphspec": {"line_color": {"value": "blue"}, "angle_units": "deg", "fill_color": {"value": "blue"}, "visible": null, "radius": {"units": "screen", "value": 4}, "line_dash_offset": 0, "line_join": "miter", "size": {"units": "screen", "default": 4, "field": null}, "line_alpha": 0.1, "radius_units": "screen", "end_angle_units": "deg", "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": 1, "type": "circle", "fill_alpha": 0.1, "halign": null, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "margin": null}}, "type": "Glyph", "id": "09015148-2609-4e00-8b50-0bdea40c568a"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "89961355-c658-4882-8e69-4350ca09a483"}, "columns": ["x"]}, {"ref": {"type": "ColumnDataSource", "id": "4e8862ec-3bdc-4dd6-8488-e47583d24f33"}, "columns": ["x"]}], "id": "47faa9ce-fc93-4c39-b190-1fdf02bc052e", "doc": null}, "type": "DataRange1d", "id": "47faa9ce-fc93-4c39-b190-1fdf02bc052e"}, {"attributes": {"plot": {"type": "Plot", "id": "59038575-2b1a-4a9b-b07d-ebb82aa9efbc"}, "id": "1525e766-978c-4049-b4dd-f179fa3847db", "doc": null}, "type": "ResizeTool", "id": "1525e766-978c-4049-b4dd-f179fa3847db"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [0.6518520179012196, 0.7305086335200187, 0.37417726789254124, 0.5835905348366873, 0.6992718623044549, 0.36905785884017345, 0.6290313330543595, 0.7188833455688067, 0.3613394501168779, 0.6489496252297695, 0.7285606218760784, 0.372900694468285, 0.6593135364206558, 0.7339579398817141, 0.3779757729546526], "x": [true, null, false, true, null, false, true, null, false, true, null, false, true, null, false]}, "id": "4e8862ec-3bdc-4dd6-8488-e47583d24f33"}, "type": "ColumnDataSource", "id": "4e8862ec-3bdc-4dd6-8488-e47583d24f33"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [0.6310415215391938, 0.6700979636447748, 0.3910645335729241, 0.6404549086682197, 0.6794961436856841, 0.40700732429331365, 0.6352641386294299, 0.6848892018073277, 0.41056344844815096, 0.5948290600531481, 0.6797476125456291, 0.4068472977110742, 0.5063627155721406, 0.6420034336380134, 0.38982051925537126, 0.6365227065305923, 0.674210069523634, 0.39841732472539176, 0.6389211003618512, 0.6784710322533719, 0.40416414771245157, 0.6397195935959784, 0.6796249170928611, 0.40542303131521124], "x": [true, null, false, true, null, false, true, null, false, true, null, false, true, null, false, true, null, false, true, null, false, true, null, false]}, "id": "89961355-c658-4882-8e69-4350ca09a483"}, "type": "ColumnDataSource", "id": "89961355-c658-4882-8e69-4350ca09a483"}];
    var modeltype = "PlotContext";
    var elementid = "5c11a921-1ab3-4ca5-9373-92e99a3cabac";
    var plotID = "59038575-2b1a-4a9b-b07d-ebb82aa9efbc";
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