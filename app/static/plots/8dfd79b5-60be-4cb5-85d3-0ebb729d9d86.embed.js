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

    var all_models = [{"attributes": {"x_range": {"type": "DataRange1d", "id": "df89661f-43de-4593-ab80-7b76a49506ed"}, "axes": [], "title": "Plot", "y_range": {"type": "DataRange1d", "id": "cdb58b30-331e-493d-bb99-ea8b8127c945"}, "outer_width": 600, "renderers": [{"type": "LinearAxis", "id": "5477644e-ec8e-4172-9a38-eaf7880fb150"}, {"type": "LinearAxis", "id": "2a09221d-650f-4eee-a49c-2c57525cc83b"}, {"type": "Grid", "id": "275ef78d-1e27-44e7-bcaf-d46afff08cc9"}, {"type": "Grid", "id": "0ee0bdd7-3a8b-421a-8c83-432b2e35ebd2"}, {"type": "BoxSelection", "id": "5317629d-cfda-4c82-97b8-4a45b3c89573"}, {"type": "Legend", "id": "f70f45b6-9474-466c-bc82-ce1db71010a6"}, {"type": "Glyph", "id": "5bf37773-1984-4f05-9c83-7972b9e9efcc"}, {"type": "Glyph", "id": "279fe971-faef-48cd-b1ec-3ebb7e793cf4"}], "outer_height": 600, "doc": null, "canvas_height": 600, "id": "8dfd79b5-60be-4cb5-85d3-0ebb729d9d86", "tools": [{"type": "PanTool", "id": "4e8233e6-4627-4d43-b753-9f86cdb2e016"}, {"type": "ZoomTool", "id": "d8d73cc4-ae7e-4379-a105-67cd598447a5"}, {"type": "PreviewSaveTool", "id": "05f7219f-6722-492d-8e7e-2edabe301929"}, {"type": "ResizeTool", "id": "c04240fc-d76d-4f6c-a1ab-5292d13dd8e9"}, {"type": "BoxSelectTool", "id": "6db0c109-fe29-45fc-8249-bd82596ad259"}], "canvas_width": 600}, "type": "Plot", "id": "8dfd79b5-60be-4cb5-85d3-0ebb729d9d86"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "8dfd79b5-60be-4cb5-85d3-0ebb729d9d86"}], "id": "7ae43079-0153-4c69-a623-c25d3d53c58a"}, "type": "PlotContext", "id": "7ae43079-0153-4c69-a623-c25d3d53c58a"}, {"attributes": {"doc": null, "tool": {"type": "BoxSelectTool", "id": "6db0c109-fe29-45fc-8249-bd82596ad259"}, "id": "5317629d-cfda-4c82-97b8-4a45b3c89573"}, "type": "BoxSelection", "id": "5317629d-cfda-4c82-97b8-4a45b3c89573"}, {"attributes": {"plot": {"type": "Plot", "id": "8dfd79b5-60be-4cb5-85d3-0ebb729d9d86"}, "dataranges": [], "id": "05f7219f-6722-492d-8e7e-2edabe301929", "doc": null}, "type": "PreviewSaveTool", "id": "05f7219f-6722-492d-8e7e-2edabe301929"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "df89661f-43de-4593-ab80-7b76a49506ed"}, {"type": "DataRange1d", "id": "cdb58b30-331e-493d-bb99-ea8b8127c945"}], "dimensions": ["width", "height"], "id": "d8d73cc4-ae7e-4379-a105-67cd598447a5"}, "type": "ZoomTool", "id": "d8d73cc4-ae7e-4379-a105-67cd598447a5"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [0.6518520179012196, 0.5835905348366873, 0.6290313330543595, 0.6489496252297695, 0.6593135364206558], "x": [0.4, 0.5, 0.1, 0.2, 0.3]}, "id": "fa8ffa14-29f5-4f2b-946a-619c292ea217"}, "type": "ColumnDataSource", "id": "fa8ffa14-29f5-4f2b-946a-619c292ea217"}, {"attributes": {"plot": {"type": "Plot", "id": "8dfd79b5-60be-4cb5-85d3-0ebb729d9d86"}, "location": "min", "bounds": "auto", "doc": null, "id": "2a09221d-650f-4eee-a49c-2c57525cc83b", "dimension": 1}, "type": "LinearAxis", "id": "2a09221d-650f-4eee-a49c-2c57525cc83b"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "df89661f-43de-4593-ab80-7b76a49506ed"}, {"type": "DataRange1d", "id": "cdb58b30-331e-493d-bb99-ea8b8127c945"}], "dimensions": ["width", "height"], "doc": null, "id": "4e8233e6-4627-4d43-b753-9f86cdb2e016"}, "type": "PanTool", "id": "4e8233e6-4627-4d43-b753-9f86cdb2e016"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [0.6310415215391938, 0.6404549086682197, 0.6352641386294299, 0.5948290600531481, 0.5063627155721406, 0.6365227065305923, 0.6389211003618512, 0.6397195935959784], "x": [0.1, 0.2, 0.3, 0.4, 0.5, 0.15, 0.18, 0.19]}, "id": "bef57844-ba8b-4afb-89c4-2cda526d823e"}, "type": "ColumnDataSource", "id": "bef57844-ba8b-4afb-89c4-2cda526d823e"}, {"attributes": {"plot": {"type": "Plot", "id": "8dfd79b5-60be-4cb5-85d3-0ebb729d9d86"}, "location": "min", "bounds": "auto", "doc": null, "id": "5477644e-ec8e-4172-9a38-eaf7880fb150", "dimension": 0}, "type": "LinearAxis", "id": "5477644e-ec8e-4172-9a38-eaf7880fb150"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "bef57844-ba8b-4afb-89c4-2cda526d823e"}, "columns": ["x"]}, {"ref": {"type": "ColumnDataSource", "id": "fa8ffa14-29f5-4f2b-946a-619c292ea217"}, "columns": ["x"]}], "id": "df89661f-43de-4593-ab80-7b76a49506ed", "doc": null}, "type": "DataRange1d", "id": "df89661f-43de-4593-ab80-7b76a49506ed"}, {"attributes": {"plot": {"type": "Plot", "id": "8dfd79b5-60be-4cb5-85d3-0ebb729d9d86"}, "id": "c04240fc-d76d-4f6c-a1ab-5292d13dd8e9", "doc": null}, "type": "ResizeTool", "id": "c04240fc-d76d-4f6c-a1ab-5292d13dd8e9"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "bef57844-ba8b-4afb-89c4-2cda526d823e"}, "columns": ["y"]}, {"ref": {"type": "ColumnDataSource", "id": "fa8ffa14-29f5-4f2b-946a-619c292ea217"}, "columns": ["y"]}], "id": "cdb58b30-331e-493d-bb99-ea8b8127c945", "doc": null}, "type": "DataRange1d", "id": "cdb58b30-331e-493d-bb99-ea8b8127c945"}, {"attributes": {"plot": {"type": "Plot", "id": "8dfd79b5-60be-4cb5-85d3-0ebb729d9d86"}, "doc": null, "legends": {"splits1540": [{"type": "Glyph", "id": "5bf37773-1984-4f05-9c83-7972b9e9efcc"}], "log_boost_splits1540": [{"type": "Glyph", "id": "279fe971-faef-48cd-b1ec-3ebb7e793cf4"}]}, "id": "f70f45b6-9474-466c-bc82-ce1db71010a6"}, "type": "Legend", "id": "f70f45b6-9474-466c-bc82-ce1db71010a6"}, {"attributes": {"plot": {"type": "Plot", "id": "8dfd79b5-60be-4cb5-85d3-0ebb729d9d86"}, "doc": null, "dimension": 0, "id": "275ef78d-1e27-44e7-bcaf-d46afff08cc9"}, "type": "Grid", "id": "275ef78d-1e27-44e7-bcaf-d46afff08cc9"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "fa8ffa14-29f5-4f2b-946a-619c292ea217"}, "doc": null, "id": "279fe971-faef-48cd-b1ec-3ebb7e793cf4", "xdata_range": {"type": "DataRange1d", "id": "df89661f-43de-4593-ab80-7b76a49506ed"}, "ydata_range": {"type": "DataRange1d", "id": "cdb58b30-331e-493d-bb99-ea8b8127c945"}, "glyphspec": {"line_color": {"value": "blue"}, "line_alpha": 1.0, "fill_color": {"value": "blue"}, "fill_alpha": 1.0, "radius": {"units": "screen", "value": 4}, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "type": "circle", "size": {"units": "screen", "field": null, "default": 4}}, "nonselection_glyphspec": {"line_color": {"value": "blue"}, "angle_units": "deg", "fill_color": {"value": "blue"}, "visible": null, "radius": {"units": "screen", "value": 4}, "line_dash_offset": 0, "line_join": "miter", "size": {"units": "screen", "default": 4, "field": null}, "line_alpha": 0.1, "radius_units": "screen", "end_angle_units": "deg", "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": 1, "type": "circle", "fill_alpha": 0.1, "halign": null, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "margin": null}}, "type": "Glyph", "id": "279fe971-faef-48cd-b1ec-3ebb7e793cf4"}, {"attributes": {"doc": null, "renderers": [{"type": "Glyph", "id": "5bf37773-1984-4f05-9c83-7972b9e9efcc"}, {"type": "Glyph", "id": "279fe971-faef-48cd-b1ec-3ebb7e793cf4"}], "id": "6db0c109-fe29-45fc-8249-bd82596ad259"}, "type": "BoxSelectTool", "id": "6db0c109-fe29-45fc-8249-bd82596ad259"}, {"attributes": {"plot": {"type": "Plot", "id": "8dfd79b5-60be-4cb5-85d3-0ebb729d9d86"}, "doc": null, "dimension": 1, "id": "0ee0bdd7-3a8b-421a-8c83-432b2e35ebd2"}, "type": "Grid", "id": "0ee0bdd7-3a8b-421a-8c83-432b2e35ebd2"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "bef57844-ba8b-4afb-89c4-2cda526d823e"}, "doc": null, "id": "5bf37773-1984-4f05-9c83-7972b9e9efcc", "xdata_range": {"type": "DataRange1d", "id": "df89661f-43de-4593-ab80-7b76a49506ed"}, "ydata_range": {"type": "DataRange1d", "id": "cdb58b30-331e-493d-bb99-ea8b8127c945"}, "glyphspec": {"line_color": {"value": "green"}, "line_alpha": 1.0, "fill_color": {"value": "green"}, "fill_alpha": 1.0, "radius": {"units": "screen", "value": 4}, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "type": "circle", "size": {"units": "screen", "field": null, "default": 4}}, "nonselection_glyphspec": {"line_color": {"value": "green"}, "angle_units": "deg", "fill_color": {"value": "green"}, "visible": null, "radius": {"units": "screen", "value": 4}, "line_dash_offset": 0, "line_join": "miter", "size": {"units": "screen", "default": 4, "field": null}, "line_alpha": 0.1, "radius_units": "screen", "end_angle_units": "deg", "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": 1, "type": "circle", "fill_alpha": 0.1, "halign": null, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "margin": null}}, "type": "Glyph", "id": "5bf37773-1984-4f05-9c83-7972b9e9efcc"}];
    var modeltype = "PlotContext";
    var elementid = "89ee1dca-9dcd-4f50-a34a-8aaa43745fbc";
    var plotID = "8dfd79b5-60be-4cb5-85d3-0ebb729d9d86";
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