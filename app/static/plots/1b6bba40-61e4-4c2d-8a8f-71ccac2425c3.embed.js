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

    var all_models = [{"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "bc8e68c0-2442-4b6f-a2c1-7e54f48604f9"}, "columns": ["x"]}, {"ref": {"type": "ColumnDataSource", "id": "18a897ef-afbc-4643-afa3-daea06bd5e23"}, "columns": ["x"]}, {"ref": {"type": "ColumnDataSource", "id": "6eb1068c-a04f-42db-aa66-ca4078e3bf72"}, "columns": ["x"]}], "id": "d1708978-ec58-41b0-b21d-f35e5f65da58", "doc": null}, "type": "DataRange1d", "id": "d1708978-ec58-41b0-b21d-f35e5f65da58"}, {"attributes": {"plot": {"type": "Plot", "id": "1b6bba40-61e4-4c2d-8a8f-71ccac2425c3"}, "id": "ef636fc3-97e7-42f1-b096-e7ee3821525f", "doc": null}, "type": "ResizeTool", "id": "ef636fc3-97e7-42f1-b096-e7ee3821525f"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [0.6518520179012196, 0.5835905348366873, 0.6290313330543595, 0.6489496252297695, 0.6593135364206558], "x": [0.4, 0.5, 0.1, 0.2, 0.3]}, "id": "18a897ef-afbc-4643-afa3-daea06bd5e23"}, "type": "ColumnDataSource", "id": "18a897ef-afbc-4643-afa3-daea06bd5e23"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [0.6290313330543595, 0.6489496252297695, 0.6593135364206558, 0.6518520179012196, 0.5835905348366873], "x": [0.1, 0.2, 0.3, 0.4, 0.5]}, "id": "6eb1068c-a04f-42db-aa66-ca4078e3bf72"}, "type": "ColumnDataSource", "id": "6eb1068c-a04f-42db-aa66-ca4078e3bf72"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "d1708978-ec58-41b0-b21d-f35e5f65da58"}, {"type": "DataRange1d", "id": "62e33953-6a8b-4144-8020-a8bd33c98d81"}], "dimensions": ["width", "height"], "doc": null, "id": "bce38f09-0e39-4bba-955c-461c8d992c72"}, "type": "PanTool", "id": "bce38f09-0e39-4bba-955c-461c8d992c72"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "1b6bba40-61e4-4c2d-8a8f-71ccac2425c3"}], "id": "cf013d86-5f76-47bf-ab7a-b137e286a661"}, "type": "PlotContext", "id": "cf013d86-5f76-47bf-ab7a-b137e286a661"}, {"attributes": {"plot": {"type": "Plot", "id": "1b6bba40-61e4-4c2d-8a8f-71ccac2425c3"}, "dataranges": [], "id": "82414184-993c-41fc-8c77-9c02d474d2e0", "doc": null}, "type": "PreviewSaveTool", "id": "82414184-993c-41fc-8c77-9c02d474d2e0"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "18a897ef-afbc-4643-afa3-daea06bd5e23"}, "doc": null, "id": "d1e5a627-4ce9-49c5-9f23-c98490a2d773", "xdata_range": {"type": "DataRange1d", "id": "d1708978-ec58-41b0-b21d-f35e5f65da58"}, "ydata_range": {"type": "DataRange1d", "id": "62e33953-6a8b-4144-8020-a8bd33c98d81"}, "glyphspec": {"line_color": {"value": "blue"}, "line_alpha": 1.0, "fill_color": {"value": "blue"}, "fill_alpha": 1.0, "radius": {"units": "screen", "value": 4}, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "type": "circle", "size": {"units": "screen", "field": null, "default": 4}}, "nonselection_glyphspec": {"line_color": {"value": "blue"}, "angle_units": "deg", "fill_color": {"value": "blue"}, "visible": null, "radius": {"units": "screen", "value": 4}, "line_dash_offset": 0, "line_join": "miter", "size": {"units": "screen", "default": 4, "field": null}, "line_alpha": 0.1, "radius_units": "screen", "end_angle_units": "deg", "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": 1, "type": "circle", "fill_alpha": 0.1, "halign": null, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "margin": null}}, "type": "Glyph", "id": "d1e5a627-4ce9-49c5-9f23-c98490a2d773"}, {"attributes": {"plot": {"type": "Plot", "id": "1b6bba40-61e4-4c2d-8a8f-71ccac2425c3"}, "location": "min", "bounds": "auto", "doc": null, "id": "9e0a4f71-a09e-4be0-823e-d26685a764df", "dimension": 1}, "type": "LinearAxis", "id": "9e0a4f71-a09e-4be0-823e-d26685a764df"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "d1708978-ec58-41b0-b21d-f35e5f65da58"}, {"type": "DataRange1d", "id": "62e33953-6a8b-4144-8020-a8bd33c98d81"}], "dimensions": ["width", "height"], "id": "f470f21a-e119-4c49-a110-28bdc94c1a64"}, "type": "ZoomTool", "id": "f470f21a-e119-4c49-a110-28bdc94c1a64"}, {"attributes": {"plot": {"type": "Plot", "id": "1b6bba40-61e4-4c2d-8a8f-71ccac2425c3"}, "doc": null, "legends": {"sym_log_boost_splits1540": [{"type": "Glyph", "id": "76f0a772-1efa-4dd5-a855-21db9d922cd8"}], "splits1540": [{"type": "Glyph", "id": "9deb362d-2b8c-4c74-9aae-854b32a883f1"}], "log_boost_splits1540": [{"type": "Glyph", "id": "d1e5a627-4ce9-49c5-9f23-c98490a2d773"}]}, "id": "c981d050-ad89-4145-83cb-0a310adf4158"}, "type": "Legend", "id": "c981d050-ad89-4145-83cb-0a310adf4158"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "6eb1068c-a04f-42db-aa66-ca4078e3bf72"}, "doc": null, "id": "76f0a772-1efa-4dd5-a855-21db9d922cd8", "xdata_range": {"type": "DataRange1d", "id": "d1708978-ec58-41b0-b21d-f35e5f65da58"}, "ydata_range": {"type": "DataRange1d", "id": "62e33953-6a8b-4144-8020-a8bd33c98d81"}, "glyphspec": {"line_color": {"value": "yellow"}, "line_alpha": 1.0, "fill_color": {"value": "yellow"}, "fill_alpha": 1.0, "radius": {"units": "screen", "value": 4}, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "type": "circle", "size": {"units": "screen", "field": null, "default": 4}}, "nonselection_glyphspec": {"line_color": {"value": "yellow"}, "angle_units": "deg", "fill_color": {"value": "yellow"}, "visible": null, "radius": {"units": "screen", "value": 4}, "line_dash_offset": 0, "line_join": "miter", "size": {"units": "screen", "default": 4, "field": null}, "line_alpha": 0.1, "radius_units": "screen", "end_angle_units": "deg", "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": 1, "type": "circle", "fill_alpha": 0.1, "halign": null, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "margin": null}}, "type": "Glyph", "id": "76f0a772-1efa-4dd5-a855-21db9d922cd8"}, {"attributes": {"doc": null, "renderers": [{"type": "Glyph", "id": "9deb362d-2b8c-4c74-9aae-854b32a883f1"}, {"type": "Glyph", "id": "d1e5a627-4ce9-49c5-9f23-c98490a2d773"}, {"type": "Glyph", "id": "76f0a772-1efa-4dd5-a855-21db9d922cd8"}], "id": "a82f5e0e-ed26-4f31-9542-eb29b84b1b15"}, "type": "BoxSelectTool", "id": "a82f5e0e-ed26-4f31-9542-eb29b84b1b15"}, {"attributes": {"doc": null, "tool": {"type": "BoxSelectTool", "id": "a82f5e0e-ed26-4f31-9542-eb29b84b1b15"}, "id": "59fffeda-8094-4552-a903-dc73854935d2"}, "type": "BoxSelection", "id": "59fffeda-8094-4552-a903-dc73854935d2"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [0.6310415215391938, 0.6404549086682197, 0.6352641386294299, 0.5948290600531481, 0.5063627155721406, 0.6365227065305923, 0.6389211003618512, 0.6397195935959784], "x": [0.1, 0.2, 0.3, 0.4, 0.5, 0.15, 0.18, 0.19]}, "id": "bc8e68c0-2442-4b6f-a2c1-7e54f48604f9"}, "type": "ColumnDataSource", "id": "bc8e68c0-2442-4b6f-a2c1-7e54f48604f9"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "bc8e68c0-2442-4b6f-a2c1-7e54f48604f9"}, "doc": null, "id": "9deb362d-2b8c-4c74-9aae-854b32a883f1", "xdata_range": {"type": "DataRange1d", "id": "d1708978-ec58-41b0-b21d-f35e5f65da58"}, "ydata_range": {"type": "DataRange1d", "id": "62e33953-6a8b-4144-8020-a8bd33c98d81"}, "glyphspec": {"line_color": {"value": "green"}, "line_alpha": 1.0, "fill_color": {"value": "green"}, "fill_alpha": 1.0, "radius": {"units": "screen", "value": 4}, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "type": "circle", "size": {"units": "screen", "field": null, "default": 4}}, "nonselection_glyphspec": {"line_color": {"value": "green"}, "angle_units": "deg", "fill_color": {"value": "green"}, "visible": null, "radius": {"units": "screen", "value": 4}, "line_dash_offset": 0, "line_join": "miter", "size": {"units": "screen", "default": 4, "field": null}, "line_alpha": 0.1, "radius_units": "screen", "end_angle_units": "deg", "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": 1, "type": "circle", "fill_alpha": 0.1, "halign": null, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "margin": null}}, "type": "Glyph", "id": "9deb362d-2b8c-4c74-9aae-854b32a883f1"}, {"attributes": {"plot": {"type": "Plot", "id": "1b6bba40-61e4-4c2d-8a8f-71ccac2425c3"}, "doc": null, "dimension": 0, "id": "45f0f907-5a86-4a0a-9884-b47c6f4dcadf"}, "type": "Grid", "id": "45f0f907-5a86-4a0a-9884-b47c6f4dcadf"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "bc8e68c0-2442-4b6f-a2c1-7e54f48604f9"}, "columns": ["y"]}, {"ref": {"type": "ColumnDataSource", "id": "18a897ef-afbc-4643-afa3-daea06bd5e23"}, "columns": ["y"]}, {"ref": {"type": "ColumnDataSource", "id": "6eb1068c-a04f-42db-aa66-ca4078e3bf72"}, "columns": ["y"]}], "id": "62e33953-6a8b-4144-8020-a8bd33c98d81", "doc": null}, "type": "DataRange1d", "id": "62e33953-6a8b-4144-8020-a8bd33c98d81"}, {"attributes": {"plot": {"type": "Plot", "id": "1b6bba40-61e4-4c2d-8a8f-71ccac2425c3"}, "doc": null, "dimension": 1, "id": "498b11bc-8f56-4f69-b043-e70d85aee77b"}, "type": "Grid", "id": "498b11bc-8f56-4f69-b043-e70d85aee77b"}, {"attributes": {"plot": {"type": "Plot", "id": "1b6bba40-61e4-4c2d-8a8f-71ccac2425c3"}, "location": "min", "bounds": "auto", "doc": null, "id": "68c5c517-8600-41c2-b84e-f6805805cbd8", "dimension": 0}, "type": "LinearAxis", "id": "68c5c517-8600-41c2-b84e-f6805805cbd8"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "d1708978-ec58-41b0-b21d-f35e5f65da58"}, "axes": [], "title": "Plot", "y_range": {"type": "DataRange1d", "id": "62e33953-6a8b-4144-8020-a8bd33c98d81"}, "outer_width": 600, "renderers": [{"type": "LinearAxis", "id": "68c5c517-8600-41c2-b84e-f6805805cbd8"}, {"type": "LinearAxis", "id": "9e0a4f71-a09e-4be0-823e-d26685a764df"}, {"type": "Grid", "id": "45f0f907-5a86-4a0a-9884-b47c6f4dcadf"}, {"type": "Grid", "id": "498b11bc-8f56-4f69-b043-e70d85aee77b"}, {"type": "BoxSelection", "id": "59fffeda-8094-4552-a903-dc73854935d2"}, {"type": "Legend", "id": "c981d050-ad89-4145-83cb-0a310adf4158"}, {"type": "Glyph", "id": "9deb362d-2b8c-4c74-9aae-854b32a883f1"}, {"type": "Glyph", "id": "d1e5a627-4ce9-49c5-9f23-c98490a2d773"}, {"type": "Glyph", "id": "76f0a772-1efa-4dd5-a855-21db9d922cd8"}], "outer_height": 600, "doc": null, "canvas_height": 600, "id": "1b6bba40-61e4-4c2d-8a8f-71ccac2425c3", "tools": [{"type": "PanTool", "id": "bce38f09-0e39-4bba-955c-461c8d992c72"}, {"type": "ZoomTool", "id": "f470f21a-e119-4c49-a110-28bdc94c1a64"}, {"type": "PreviewSaveTool", "id": "82414184-993c-41fc-8c77-9c02d474d2e0"}, {"type": "ResizeTool", "id": "ef636fc3-97e7-42f1-b096-e7ee3821525f"}, {"type": "BoxSelectTool", "id": "a82f5e0e-ed26-4f31-9542-eb29b84b1b15"}], "canvas_width": 600}, "type": "Plot", "id": "1b6bba40-61e4-4c2d-8a8f-71ccac2425c3"}];
    var modeltype = "PlotContext";
    var elementid = "d3f3b2b3-6844-4159-8553-6cf09033b2b3";
    var plotID = "1b6bba40-61e4-4c2d-8a8f-71ccac2425c3";
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