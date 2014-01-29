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

    var all_models = [{"attributes": {"plot": {"type": "Plot", "id": "5f7b2b33-b4f2-41aa-9b89-7941f878d466"}, "dataranges": [], "id": "4cb9f5c3-57eb-48fb-bf45-166492634bd9", "doc": null}, "type": "PreviewSaveTool", "id": "4cb9f5c3-57eb-48fb-bf45-166492634bd9"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "614f2c77-de98-4bd2-8cc4-fdbf0985f5e1"}, {"type": "DataRange1d", "id": "3069465d-5997-416f-be5e-05291f6d1e7b"}], "dimensions": ["width", "height"], "doc": null, "id": "b3cd1331-c0d6-45df-911f-f72d874866c8"}, "type": "PanTool", "id": "b3cd1331-c0d6-45df-911f-f72d874866c8"}, {"attributes": {"plot": {"type": "Plot", "id": "5f7b2b33-b4f2-41aa-9b89-7941f878d466"}, "doc": null, "dimension": 0, "id": "f0a5b3b1-38e2-4550-ac4e-e80a6b172556"}, "type": "Grid", "id": "f0a5b3b1-38e2-4550-ac4e-e80a6b172556"}, {"attributes": {"plot": {"type": "Plot", "id": "5f7b2b33-b4f2-41aa-9b89-7941f878d466"}, "doc": null, "dimension": 1, "id": "17660673-7fac-40ba-a28b-e20f948a257a"}, "type": "Grid", "id": "17660673-7fac-40ba-a28b-e20f948a257a"}, {"attributes": {"doc": null, "tool": {"type": "BoxSelectTool", "id": "81e25e92-b9dd-4e78-9297-8491c818e9b8"}, "id": "4ab9432b-cf85-4223-8032-13499df5b555"}, "type": "BoxSelection", "id": "4ab9432b-cf85-4223-8032-13499df5b555"}, {"attributes": {"plot": {"type": "Plot", "id": "5f7b2b33-b4f2-41aa-9b89-7941f878d466"}, "id": "ea97cf43-772c-4a02-a196-c290757dac19", "doc": null}, "type": "ResizeTool", "id": "ea97cf43-772c-4a02-a196-c290757dac19"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [0.6518520179012196, 0.7305086335200187, 0.37417726789254124, 0.5835905348366873, 0.6992718623044549, 0.36905785884017345, 0.6290313330543595, 0.7188833455688067, 0.3613394501168779, 0.6489496252297695, 0.7285606218760784, 0.372900694468285, 0.6593135364206558, 0.7339579398817141, 0.3779757729546526], "x": [0.4, 0.4, 0.4, 0.5, 0.5, 0.5, 0.1, 0.1, 0.1, 0.2, 0.2, 0.2, 0.3, 0.3, 0.3]}, "id": "42aa8cfe-2086-4500-aa73-eb2612edae43"}, "type": "ColumnDataSource", "id": "42aa8cfe-2086-4500-aa73-eb2612edae43"}, {"attributes": {"plot": {"type": "Plot", "id": "5f7b2b33-b4f2-41aa-9b89-7941f878d466"}, "location": "min", "bounds": "auto", "doc": null, "id": "6f9c8956-5ad9-4603-b771-0dff625c6032", "dimension": 1}, "type": "LinearAxis", "id": "6f9c8956-5ad9-4603-b771-0dff625c6032"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "8daddde0-9540-4689-9183-7e0acbe9c8a2"}, "doc": null, "id": "9833cc77-92fd-4a5c-a113-54ce55a3c7db", "xdata_range": {"type": "DataRange1d", "id": "614f2c77-de98-4bd2-8cc4-fdbf0985f5e1"}, "ydata_range": {"type": "DataRange1d", "id": "3069465d-5997-416f-be5e-05291f6d1e7b"}, "glyphspec": {"line_color": {"value": "green"}, "line_alpha": 1.0, "fill_color": {"value": "green"}, "fill_alpha": 1.0, "radius": {"units": "screen", "value": 4}, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "type": "circle", "size": {"units": "screen", "field": null, "default": 4}}, "nonselection_glyphspec": {"line_color": {"value": "green"}, "angle_units": "deg", "fill_color": {"value": "green"}, "visible": null, "radius": {"units": "screen", "value": 4}, "line_dash_offset": 0, "line_join": "miter", "size": {"units": "screen", "default": 4, "field": null}, "line_alpha": 0.1, "radius_units": "screen", "end_angle_units": "deg", "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": 1, "type": "circle", "fill_alpha": 0.1, "halign": null, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "margin": null}}, "type": "Glyph", "id": "9833cc77-92fd-4a5c-a113-54ce55a3c7db"}, {"attributes": {"plot": {"type": "Plot", "id": "5f7b2b33-b4f2-41aa-9b89-7941f878d466"}, "doc": null, "legends": {"splits1540": [{"type": "Glyph", "id": "9833cc77-92fd-4a5c-a113-54ce55a3c7db"}], "log_boost_splits1540": [{"type": "Glyph", "id": "ff00fa92-9bf8-4705-80f2-b0706ae38c34"}]}, "id": "c287d006-7ea6-42d0-a2e6-4ee6156e0860"}, "type": "Legend", "id": "c287d006-7ea6-42d0-a2e6-4ee6156e0860"}, {"attributes": {"doc": null, "renderers": [{"type": "Glyph", "id": "9833cc77-92fd-4a5c-a113-54ce55a3c7db"}, {"type": "Glyph", "id": "ff00fa92-9bf8-4705-80f2-b0706ae38c34"}], "id": "81e25e92-b9dd-4e78-9297-8491c818e9b8"}, "type": "BoxSelectTool", "id": "81e25e92-b9dd-4e78-9297-8491c818e9b8"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "614f2c77-de98-4bd2-8cc4-fdbf0985f5e1"}, "axes": [], "title": "Plot", "y_range": {"type": "DataRange1d", "id": "3069465d-5997-416f-be5e-05291f6d1e7b"}, "outer_width": 600, "renderers": [{"type": "LinearAxis", "id": "8204807a-4603-47af-acef-775bfbf0a680"}, {"type": "LinearAxis", "id": "6f9c8956-5ad9-4603-b771-0dff625c6032"}, {"type": "Grid", "id": "f0a5b3b1-38e2-4550-ac4e-e80a6b172556"}, {"type": "Grid", "id": "17660673-7fac-40ba-a28b-e20f948a257a"}, {"type": "BoxSelection", "id": "4ab9432b-cf85-4223-8032-13499df5b555"}, {"type": "Legend", "id": "c287d006-7ea6-42d0-a2e6-4ee6156e0860"}, {"type": "Glyph", "id": "9833cc77-92fd-4a5c-a113-54ce55a3c7db"}, {"type": "Glyph", "id": "ff00fa92-9bf8-4705-80f2-b0706ae38c34"}], "outer_height": 600, "doc": null, "canvas_height": 600, "id": "5f7b2b33-b4f2-41aa-9b89-7941f878d466", "tools": [{"type": "PanTool", "id": "b3cd1331-c0d6-45df-911f-f72d874866c8"}, {"type": "ZoomTool", "id": "1383fe37-2288-4e8f-bd50-ed467349c22c"}, {"type": "PreviewSaveTool", "id": "4cb9f5c3-57eb-48fb-bf45-166492634bd9"}, {"type": "ResizeTool", "id": "ea97cf43-772c-4a02-a196-c290757dac19"}, {"type": "BoxSelectTool", "id": "81e25e92-b9dd-4e78-9297-8491c818e9b8"}], "canvas_width": 600}, "type": "Plot", "id": "5f7b2b33-b4f2-41aa-9b89-7941f878d466"}, {"attributes": {"plot": {"type": "Plot", "id": "5f7b2b33-b4f2-41aa-9b89-7941f878d466"}, "location": "min", "bounds": "auto", "doc": null, "id": "8204807a-4603-47af-acef-775bfbf0a680", "dimension": 0}, "type": "LinearAxis", "id": "8204807a-4603-47af-acef-775bfbf0a680"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "8daddde0-9540-4689-9183-7e0acbe9c8a2"}, "columns": ["x"]}, {"ref": {"type": "ColumnDataSource", "id": "42aa8cfe-2086-4500-aa73-eb2612edae43"}, "columns": ["x"]}], "id": "614f2c77-de98-4bd2-8cc4-fdbf0985f5e1", "doc": null}, "type": "DataRange1d", "id": "614f2c77-de98-4bd2-8cc4-fdbf0985f5e1"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [0.6310415215391938, 0.6700979636447748, 0.3910645335729241, 0.6404549086682197, 0.6794961436856841, 0.40700732429331365, 0.6352641386294299, 0.6848892018073277, 0.41056344844815096, 0.5948290600531481, 0.6797476125456291, 0.4068472977110742, 0.5063627155721406, 0.6420034336380134, 0.38982051925537126, 0.6365227065305923, 0.674210069523634, 0.39841732472539176, 0.6389211003618512, 0.6784710322533719, 0.40416414771245157, 0.6397195935959784, 0.6796249170928611, 0.40542303131521124], "x": [0.1, 0.1, 0.1, 0.2, 0.2, 0.2, 0.3, 0.3, 0.3, 0.4, 0.4, 0.4, 0.5, 0.5, 0.5, 0.15, 0.15, 0.15, 0.18, 0.18, 0.18, 0.19, 0.19, 0.19]}, "id": "8daddde0-9540-4689-9183-7e0acbe9c8a2"}, "type": "ColumnDataSource", "id": "8daddde0-9540-4689-9183-7e0acbe9c8a2"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "8daddde0-9540-4689-9183-7e0acbe9c8a2"}, "columns": ["y"]}, {"ref": {"type": "ColumnDataSource", "id": "42aa8cfe-2086-4500-aa73-eb2612edae43"}, "columns": ["y"]}], "id": "3069465d-5997-416f-be5e-05291f6d1e7b", "doc": null}, "type": "DataRange1d", "id": "3069465d-5997-416f-be5e-05291f6d1e7b"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "5f7b2b33-b4f2-41aa-9b89-7941f878d466"}], "id": "80eac722-730f-46ff-bee6-6c27e8c4813a"}, "type": "PlotContext", "id": "80eac722-730f-46ff-bee6-6c27e8c4813a"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "614f2c77-de98-4bd2-8cc4-fdbf0985f5e1"}, {"type": "DataRange1d", "id": "3069465d-5997-416f-be5e-05291f6d1e7b"}], "dimensions": ["width", "height"], "id": "1383fe37-2288-4e8f-bd50-ed467349c22c"}, "type": "ZoomTool", "id": "1383fe37-2288-4e8f-bd50-ed467349c22c"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "42aa8cfe-2086-4500-aa73-eb2612edae43"}, "doc": null, "id": "ff00fa92-9bf8-4705-80f2-b0706ae38c34", "xdata_range": {"type": "DataRange1d", "id": "614f2c77-de98-4bd2-8cc4-fdbf0985f5e1"}, "ydata_range": {"type": "DataRange1d", "id": "3069465d-5997-416f-be5e-05291f6d1e7b"}, "glyphspec": {"line_color": {"value": "blue"}, "line_alpha": 1.0, "fill_color": {"value": "blue"}, "fill_alpha": 1.0, "radius": {"units": "screen", "value": 4}, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "type": "circle", "size": {"units": "screen", "field": null, "default": 4}}, "nonselection_glyphspec": {"line_color": {"value": "blue"}, "angle_units": "deg", "fill_color": {"value": "blue"}, "visible": null, "radius": {"units": "screen", "value": 4}, "line_dash_offset": 0, "line_join": "miter", "size": {"units": "screen", "default": 4, "field": null}, "line_alpha": 0.1, "radius_units": "screen", "end_angle_units": "deg", "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": 1, "type": "circle", "fill_alpha": 0.1, "halign": null, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "margin": null}}, "type": "Glyph", "id": "ff00fa92-9bf8-4705-80f2-b0706ae38c34"}];
    var modeltype = "PlotContext";
    var elementid = "cf6c0998-0897-447d-a043-d157885cfd98";
    var plotID = "5f7b2b33-b4f2-41aa-9b89-7941f878d466";
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