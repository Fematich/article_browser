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

    var all_models = [{"attributes": {"plot": {"type": "Plot", "id": "7827af82-8a16-4b89-a3d4-31e45517e102"}, "doc": null, "dimension": 0, "id": "44aa79f8-da7b-41b3-bf5e-480ed4ed5d74"}, "type": "Grid", "id": "44aa79f8-da7b-41b3-bf5e-480ed4ed5d74"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "a2f5e8b9-ca69-4237-9709-2817a1ae50c3"}, "axes": [], "title": "Plot", "y_range": {"type": "DataRange1d", "id": "276ec794-431f-47ac-8ea3-f8d8d60e9385"}, "outer_width": 600, "renderers": [{"type": "LinearAxis", "id": "0f58afe5-3eaa-48f4-997b-cc6a668479be"}, {"type": "LinearAxis", "id": "9c5e9ce0-6daf-4c91-9512-9f0149dc1d70"}, {"type": "Grid", "id": "44aa79f8-da7b-41b3-bf5e-480ed4ed5d74"}, {"type": "Grid", "id": "898ddddf-d8bc-4d94-83f1-a6b6bef1856b"}, {"type": "BoxSelection", "id": "efb6fd46-def4-4e6e-a2e7-f8bf68893403"}, {"type": "Legend", "id": "d8ca7797-d776-4360-9457-a7285ed9a1e2"}, {"type": "Glyph", "id": "46c539ac-966a-440d-b08c-10b1fe4bd01f"}, {"type": "Glyph", "id": "97aa0aa5-6151-40d8-814e-46b88565d25c"}], "outer_height": 600, "doc": null, "canvas_height": 600, "id": "7827af82-8a16-4b89-a3d4-31e45517e102", "tools": [{"type": "PanTool", "id": "ba6d3deb-6e0e-4a32-86f0-2e734dad1bd7"}, {"type": "ZoomTool", "id": "39e0b84f-62be-4dee-893e-51ffdb02845a"}, {"type": "PreviewSaveTool", "id": "e611430c-f84f-4f2b-913c-93c991b8e78a"}, {"type": "ResizeTool", "id": "eabc5a95-4c4b-4826-8e46-04ef44faf47f"}, {"type": "BoxSelectTool", "id": "b53b8c81-2a32-40b8-8278-060e3ae903d2"}], "canvas_width": 600}, "type": "Plot", "id": "7827af82-8a16-4b89-a3d4-31e45517e102"}, {"attributes": {"plot": {"type": "Plot", "id": "7827af82-8a16-4b89-a3d4-31e45517e102"}, "doc": null, "dimension": 1, "id": "898ddddf-d8bc-4d94-83f1-a6b6bef1856b"}, "type": "Grid", "id": "898ddddf-d8bc-4d94-83f1-a6b6bef1856b"}, {"attributes": {"plot": {"type": "Plot", "id": "7827af82-8a16-4b89-a3d4-31e45517e102"}, "id": "eabc5a95-4c4b-4826-8e46-04ef44faf47f", "doc": null}, "type": "ResizeTool", "id": "eabc5a95-4c4b-4826-8e46-04ef44faf47f"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "bcd53cb1-217e-4dc0-844c-a418295bed13"}, "columns": ["y"]}, {"ref": {"type": "ColumnDataSource", "id": "a129d6ae-81c7-4e24-9759-e3ee8f335611"}, "columns": ["y"]}], "id": "276ec794-431f-47ac-8ea3-f8d8d60e9385", "doc": null}, "type": "DataRange1d", "id": "276ec794-431f-47ac-8ea3-f8d8d60e9385"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "a129d6ae-81c7-4e24-9759-e3ee8f335611"}, "doc": null, "id": "97aa0aa5-6151-40d8-814e-46b88565d25c", "xdata_range": {"type": "DataRange1d", "id": "a2f5e8b9-ca69-4237-9709-2817a1ae50c3"}, "ydata_range": {"type": "DataRange1d", "id": "276ec794-431f-47ac-8ea3-f8d8d60e9385"}, "glyphspec": {"line_color": {"value": "blue"}, "line_alpha": 1.0, "fill_color": {"value": "blue"}, "fill_alpha": 1.0, "radius": {"units": "screen", "value": 4}, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "type": "circle", "size": {"units": "screen", "field": null, "default": 4}}, "nonselection_glyphspec": {"line_color": {"value": "blue"}, "angle_units": "deg", "fill_color": {"value": "blue"}, "visible": null, "radius": {"units": "screen", "value": 4}, "line_dash_offset": 0, "line_join": "miter", "size": {"units": "screen", "default": 4, "field": null}, "line_alpha": 0.1, "radius_units": "screen", "end_angle_units": "deg", "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": 1, "type": "circle", "fill_alpha": 0.1, "halign": null, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "margin": null}}, "type": "Glyph", "id": "97aa0aa5-6151-40d8-814e-46b88565d25c"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [0.6310415215391938, 0.3910645335729241, 0.6404549086682197, 0.40700732429331365, 0.6352641386294299, 0.41056344844815096, 0.5948290600531481, 0.4068472977110742, 0.5063627155721406, 0.38982051925537126, 0.6365227065305923, 0.39841732472539176, 0.6389211003618512, 0.40416414771245157, 0.6397195935959784, 0.40542303131521124], "x": [1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0]}, "id": "bcd53cb1-217e-4dc0-844c-a418295bed13"}, "type": "ColumnDataSource", "id": "bcd53cb1-217e-4dc0-844c-a418295bed13"}, {"attributes": {"doc": null, "tool": {"type": "BoxSelectTool", "id": "b53b8c81-2a32-40b8-8278-060e3ae903d2"}, "id": "efb6fd46-def4-4e6e-a2e7-f8bf68893403"}, "type": "BoxSelection", "id": "efb6fd46-def4-4e6e-a2e7-f8bf68893403"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "bcd53cb1-217e-4dc0-844c-a418295bed13"}, "doc": null, "id": "46c539ac-966a-440d-b08c-10b1fe4bd01f", "xdata_range": {"type": "DataRange1d", "id": "a2f5e8b9-ca69-4237-9709-2817a1ae50c3"}, "ydata_range": {"type": "DataRange1d", "id": "276ec794-431f-47ac-8ea3-f8d8d60e9385"}, "glyphspec": {"line_color": {"value": "green"}, "line_alpha": 1.0, "fill_color": {"value": "green"}, "fill_alpha": 1.0, "radius": {"units": "screen", "value": 4}, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "type": "circle", "size": {"units": "screen", "field": null, "default": 4}}, "nonselection_glyphspec": {"line_color": {"value": "green"}, "angle_units": "deg", "fill_color": {"value": "green"}, "visible": null, "radius": {"units": "screen", "value": 4}, "line_dash_offset": 0, "line_join": "miter", "size": {"units": "screen", "default": 4, "field": null}, "line_alpha": 0.1, "radius_units": "screen", "end_angle_units": "deg", "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": 1, "type": "circle", "fill_alpha": 0.1, "halign": null, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "margin": null}}, "type": "Glyph", "id": "46c539ac-966a-440d-b08c-10b1fe4bd01f"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "bcd53cb1-217e-4dc0-844c-a418295bed13"}, "columns": ["x"]}, {"ref": {"type": "ColumnDataSource", "id": "a129d6ae-81c7-4e24-9759-e3ee8f335611"}, "columns": ["x"]}], "id": "a2f5e8b9-ca69-4237-9709-2817a1ae50c3", "doc": null}, "type": "DataRange1d", "id": "a2f5e8b9-ca69-4237-9709-2817a1ae50c3"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [0.6518520179012196, 0.37417726789254124, 0.5835905348366873, 0.36905785884017345, 0.6290313330543595, 0.3613394501168779, 0.6489496252297695, 0.372900694468285, 0.6593135364206558, 0.3779757729546526], "x": [1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0, 0.0]}, "id": "a129d6ae-81c7-4e24-9759-e3ee8f335611"}, "type": "ColumnDataSource", "id": "a129d6ae-81c7-4e24-9759-e3ee8f335611"}, {"attributes": {"plot": {"type": "Plot", "id": "7827af82-8a16-4b89-a3d4-31e45517e102"}, "doc": null, "legends": {"splits1540": [{"type": "Glyph", "id": "46c539ac-966a-440d-b08c-10b1fe4bd01f"}], "log_boost_splits1540": [{"type": "Glyph", "id": "97aa0aa5-6151-40d8-814e-46b88565d25c"}]}, "id": "d8ca7797-d776-4360-9457-a7285ed9a1e2"}, "type": "Legend", "id": "d8ca7797-d776-4360-9457-a7285ed9a1e2"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "a2f5e8b9-ca69-4237-9709-2817a1ae50c3"}, {"type": "DataRange1d", "id": "276ec794-431f-47ac-8ea3-f8d8d60e9385"}], "dimensions": ["width", "height"], "id": "39e0b84f-62be-4dee-893e-51ffdb02845a"}, "type": "ZoomTool", "id": "39e0b84f-62be-4dee-893e-51ffdb02845a"}, {"attributes": {"plot": {"type": "Plot", "id": "7827af82-8a16-4b89-a3d4-31e45517e102"}, "location": "min", "bounds": "auto", "doc": null, "id": "9c5e9ce0-6daf-4c91-9512-9f0149dc1d70", "dimension": 1}, "type": "LinearAxis", "id": "9c5e9ce0-6daf-4c91-9512-9f0149dc1d70"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "a2f5e8b9-ca69-4237-9709-2817a1ae50c3"}, {"type": "DataRange1d", "id": "276ec794-431f-47ac-8ea3-f8d8d60e9385"}], "dimensions": ["width", "height"], "doc": null, "id": "ba6d3deb-6e0e-4a32-86f0-2e734dad1bd7"}, "type": "PanTool", "id": "ba6d3deb-6e0e-4a32-86f0-2e734dad1bd7"}, {"attributes": {"plot": {"type": "Plot", "id": "7827af82-8a16-4b89-a3d4-31e45517e102"}, "location": "min", "bounds": "auto", "doc": null, "id": "0f58afe5-3eaa-48f4-997b-cc6a668479be", "dimension": 0}, "type": "LinearAxis", "id": "0f58afe5-3eaa-48f4-997b-cc6a668479be"}, {"attributes": {"plot": {"type": "Plot", "id": "7827af82-8a16-4b89-a3d4-31e45517e102"}, "dataranges": [], "id": "e611430c-f84f-4f2b-913c-93c991b8e78a", "doc": null}, "type": "PreviewSaveTool", "id": "e611430c-f84f-4f2b-913c-93c991b8e78a"}, {"attributes": {"doc": null, "renderers": [{"type": "Glyph", "id": "46c539ac-966a-440d-b08c-10b1fe4bd01f"}, {"type": "Glyph", "id": "97aa0aa5-6151-40d8-814e-46b88565d25c"}], "id": "b53b8c81-2a32-40b8-8278-060e3ae903d2"}, "type": "BoxSelectTool", "id": "b53b8c81-2a32-40b8-8278-060e3ae903d2"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "7827af82-8a16-4b89-a3d4-31e45517e102"}], "id": "9bde001f-8c15-401a-8372-52da9e169a7b"}, "type": "PlotContext", "id": "9bde001f-8c15-401a-8372-52da9e169a7b"}];
    var modeltype = "PlotContext";
    var elementid = "87890036-8c8c-4712-957d-16e218af21f7";
    var plotID = "7827af82-8a16-4b89-a3d4-31e45517e102";
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