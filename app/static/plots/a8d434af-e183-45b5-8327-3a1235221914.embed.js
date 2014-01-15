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

    var all_models = [{"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [0.6310415215391938, 0.6404549086682197, 0.6352641386294299, 0.5948290600531481, 0.5063627155721406, 0.6365227065305923, 0.6389211003618512, 0.6397195935959784], "x": [0.1, 0.2, 0.3, 0.4, 0.5, 0.15, 0.18, 0.19]}, "id": "85ae603f-6d91-4477-abfb-a23c27baaa27"}, "type": "ColumnDataSource", "id": "85ae603f-6d91-4477-abfb-a23c27baaa27"}, {"attributes": {"plot": {"type": "Plot", "id": "a8d434af-e183-45b5-8327-3a1235221914"}, "id": "68c260d1-ff05-4f00-9692-2e61c884c866", "doc": null}, "type": "ResizeTool", "id": "68c260d1-ff05-4f00-9692-2e61c884c866"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [0.6518520179012196, 0.5835905348366873, 0.6290313330543595, 0.6489496252297695, 0.6593135364206558], "x": [0.4, 0.5, 0.1, 0.2, 0.3]}, "id": "8df3c4bd-5cb1-454d-ad51-84db83ea6bf3"}, "type": "ColumnDataSource", "id": "8df3c4bd-5cb1-454d-ad51-84db83ea6bf3"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "e0d542ed-816a-4205-858b-d501806a96cc"}, {"type": "DataRange1d", "id": "c6a84f98-5baa-4cc8-a778-bd34109b5c88"}], "dimensions": ["width", "height"], "id": "251ac70f-169d-47d4-9926-ac33a5646890"}, "type": "ZoomTool", "id": "251ac70f-169d-47d4-9926-ac33a5646890"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "85ae603f-6d91-4477-abfb-a23c27baaa27"}, "columns": ["x"]}, {"ref": {"type": "ColumnDataSource", "id": "8df3c4bd-5cb1-454d-ad51-84db83ea6bf3"}, "columns": ["x"]}], "id": "e0d542ed-816a-4205-858b-d501806a96cc", "doc": null}, "type": "DataRange1d", "id": "e0d542ed-816a-4205-858b-d501806a96cc"}, {"attributes": {"doc": null, "renderers": [{"type": "Glyph", "id": "88689c98-0f9d-4173-805d-1499381c4d1f"}, {"type": "Glyph", "id": "1ecc0416-5771-4474-bdea-a3a6145a338d"}], "id": "035753b5-f4a1-43c1-aeaf-6fd97de4c745"}, "type": "BoxSelectTool", "id": "035753b5-f4a1-43c1-aeaf-6fd97de4c745"}, {"attributes": {"plot": {"type": "Plot", "id": "a8d434af-e183-45b5-8327-3a1235221914"}, "dataranges": [], "id": "1219b325-b1d7-4cca-8ed2-2df9a89f49fd", "doc": null}, "type": "PreviewSaveTool", "id": "1219b325-b1d7-4cca-8ed2-2df9a89f49fd"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "85ae603f-6d91-4477-abfb-a23c27baaa27"}, "columns": ["y"]}, {"ref": {"type": "ColumnDataSource", "id": "8df3c4bd-5cb1-454d-ad51-84db83ea6bf3"}, "columns": ["y"]}], "id": "c6a84f98-5baa-4cc8-a778-bd34109b5c88", "doc": null}, "type": "DataRange1d", "id": "c6a84f98-5baa-4cc8-a778-bd34109b5c88"}, {"attributes": {"plot": {"type": "Plot", "id": "a8d434af-e183-45b5-8327-3a1235221914"}, "doc": null, "dimension": 0, "id": "7bad0871-ce34-49de-8dc8-0db7693a3529"}, "type": "Grid", "id": "7bad0871-ce34-49de-8dc8-0db7693a3529"}, {"attributes": {"doc": null, "tool": {"type": "BoxSelectTool", "id": "035753b5-f4a1-43c1-aeaf-6fd97de4c745"}, "id": "08458fa6-479c-462a-bb3f-4f4ee6db894e"}, "type": "BoxSelection", "id": "08458fa6-479c-462a-bb3f-4f4ee6db894e"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "a8d434af-e183-45b5-8327-3a1235221914"}], "id": "5016de6d-5563-469f-9b6f-fce05bf7d963"}, "type": "PlotContext", "id": "5016de6d-5563-469f-9b6f-fce05bf7d963"}, {"attributes": {"plot": {"type": "Plot", "id": "a8d434af-e183-45b5-8327-3a1235221914"}, "doc": null, "legends": {"splits1540": [{"type": "Glyph", "id": "88689c98-0f9d-4173-805d-1499381c4d1f"}], "log_boost_splits1540": [{"type": "Glyph", "id": "1ecc0416-5771-4474-bdea-a3a6145a338d"}]}, "id": "76c8fea2-1462-45c9-9216-0e6ce2a8a37b"}, "type": "Legend", "id": "76c8fea2-1462-45c9-9216-0e6ce2a8a37b"}, {"attributes": {"plot": {"type": "Plot", "id": "a8d434af-e183-45b5-8327-3a1235221914"}, "location": "min", "bounds": "auto", "doc": null, "id": "acc48214-920d-4b1e-8c83-476fa5f92c59", "dimension": 0}, "type": "LinearAxis", "id": "acc48214-920d-4b1e-8c83-476fa5f92c59"}, {"attributes": {"plot": {"type": "Plot", "id": "a8d434af-e183-45b5-8327-3a1235221914"}, "doc": null, "dimension": 1, "id": "555345d9-d3ca-4e61-808f-a05d24414db9"}, "type": "Grid", "id": "555345d9-d3ca-4e61-808f-a05d24414db9"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "e0d542ed-816a-4205-858b-d501806a96cc"}, "axes": [], "title": "Plot", "y_range": {"type": "DataRange1d", "id": "c6a84f98-5baa-4cc8-a778-bd34109b5c88"}, "outer_width": 600, "renderers": [{"type": "LinearAxis", "id": "acc48214-920d-4b1e-8c83-476fa5f92c59"}, {"type": "LinearAxis", "id": "9817798e-f9b1-4152-b26b-100976390cb5"}, {"type": "Grid", "id": "7bad0871-ce34-49de-8dc8-0db7693a3529"}, {"type": "Grid", "id": "555345d9-d3ca-4e61-808f-a05d24414db9"}, {"type": "BoxSelection", "id": "08458fa6-479c-462a-bb3f-4f4ee6db894e"}, {"type": "Legend", "id": "76c8fea2-1462-45c9-9216-0e6ce2a8a37b"}, {"type": "Glyph", "id": "88689c98-0f9d-4173-805d-1499381c4d1f"}, {"type": "Glyph", "id": "1ecc0416-5771-4474-bdea-a3a6145a338d"}], "outer_height": 600, "doc": null, "canvas_height": 600, "id": "a8d434af-e183-45b5-8327-3a1235221914", "tools": [{"type": "PanTool", "id": "ea8c4411-34d0-4037-84b7-d81b27962875"}, {"type": "ZoomTool", "id": "251ac70f-169d-47d4-9926-ac33a5646890"}, {"type": "PreviewSaveTool", "id": "1219b325-b1d7-4cca-8ed2-2df9a89f49fd"}, {"type": "ResizeTool", "id": "68c260d1-ff05-4f00-9692-2e61c884c866"}, {"type": "BoxSelectTool", "id": "035753b5-f4a1-43c1-aeaf-6fd97de4c745"}], "canvas_width": 600}, "type": "Plot", "id": "a8d434af-e183-45b5-8327-3a1235221914"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "e0d542ed-816a-4205-858b-d501806a96cc"}, {"type": "DataRange1d", "id": "c6a84f98-5baa-4cc8-a778-bd34109b5c88"}], "dimensions": ["width", "height"], "doc": null, "id": "ea8c4411-34d0-4037-84b7-d81b27962875"}, "type": "PanTool", "id": "ea8c4411-34d0-4037-84b7-d81b27962875"}, {"attributes": {"plot": {"type": "Plot", "id": "a8d434af-e183-45b5-8327-3a1235221914"}, "location": "min", "bounds": "auto", "doc": null, "id": "9817798e-f9b1-4152-b26b-100976390cb5", "dimension": 1}, "type": "LinearAxis", "id": "9817798e-f9b1-4152-b26b-100976390cb5"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "8df3c4bd-5cb1-454d-ad51-84db83ea6bf3"}, "doc": null, "id": "1ecc0416-5771-4474-bdea-a3a6145a338d", "xdata_range": {"type": "DataRange1d", "id": "e0d542ed-816a-4205-858b-d501806a96cc"}, "ydata_range": {"type": "DataRange1d", "id": "c6a84f98-5baa-4cc8-a778-bd34109b5c88"}, "glyphspec": {"line_color": {"value": "blue"}, "line_alpha": 1.0, "fill_color": {"value": "blue"}, "fill_alpha": 1.0, "radius": {"units": "screen", "value": 4}, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "type": "circle", "size": {"units": "screen", "field": null, "default": 4}}, "nonselection_glyphspec": {"line_color": {"value": "blue"}, "angle_units": "deg", "fill_color": {"value": "blue"}, "visible": null, "radius": {"units": "screen", "value": 4}, "line_dash_offset": 0, "line_join": "miter", "size": {"units": "screen", "default": 4, "field": null}, "line_alpha": 0.1, "radius_units": "screen", "end_angle_units": "deg", "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": 1, "type": "circle", "fill_alpha": 0.1, "halign": null, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "margin": null}}, "type": "Glyph", "id": "1ecc0416-5771-4474-bdea-a3a6145a338d"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "85ae603f-6d91-4477-abfb-a23c27baaa27"}, "doc": null, "id": "88689c98-0f9d-4173-805d-1499381c4d1f", "xdata_range": {"type": "DataRange1d", "id": "e0d542ed-816a-4205-858b-d501806a96cc"}, "ydata_range": {"type": "DataRange1d", "id": "c6a84f98-5baa-4cc8-a778-bd34109b5c88"}, "glyphspec": {"line_color": {"value": "green"}, "line_alpha": 1.0, "fill_color": {"value": "green"}, "fill_alpha": 1.0, "radius": {"units": "screen", "value": 4}, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "type": "circle", "size": {"units": "screen", "field": null, "default": 4}}, "nonselection_glyphspec": {"line_color": {"value": "green"}, "angle_units": "deg", "fill_color": {"value": "green"}, "visible": null, "radius": {"units": "screen", "value": 4}, "line_dash_offset": 0, "line_join": "miter", "size": {"units": "screen", "default": 4, "field": null}, "line_alpha": 0.1, "radius_units": "screen", "end_angle_units": "deg", "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": 1, "type": "circle", "fill_alpha": 0.1, "halign": null, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "margin": null}}, "type": "Glyph", "id": "88689c98-0f9d-4173-805d-1499381c4d1f"}];
    var modeltype = "PlotContext";
    var elementid = "c468d443-d8b6-448d-bb30-e9b212dafcee";
    var plotID = "a8d434af-e183-45b5-8327-3a1235221914";
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