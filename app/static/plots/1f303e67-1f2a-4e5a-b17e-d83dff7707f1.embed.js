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

    var all_models = [{"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "ba377f6a-64ba-4d61-9aba-e88f645b11ba"}, "columns": ["y"]}], "id": "811b6a74-8b16-4687-9082-32a24a358afe", "doc": null}, "type": "DataRange1d", "id": "811b6a74-8b16-4687-9082-32a24a358afe"}, {"attributes": {"plot": {"type": "Plot", "id": "1f303e67-1f2a-4e5a-b17e-d83dff7707f1"}, "location": "min", "bounds": "auto", "doc": null, "id": "95aa24ad-6b1b-453c-b255-e69a929fdb9a", "dimension": 0}, "type": "LinearAxis", "id": "95aa24ad-6b1b-453c-b255-e69a929fdb9a"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "ee1d1084-4fd3-4c67-973b-acf07a3bde02"}, "axes": [], "title": "Plot", "y_range": {"type": "DataRange1d", "id": "811b6a74-8b16-4687-9082-32a24a358afe"}, "outer_width": 600, "renderers": [{"type": "LinearAxis", "id": "95aa24ad-6b1b-453c-b255-e69a929fdb9a"}, {"type": "LinearAxis", "id": "670e09a2-40ec-4882-a712-019076a5a154"}, {"type": "Grid", "id": "b5e36df6-e9c5-4112-bd19-5234163e32d1"}, {"type": "Grid", "id": "788e1600-6052-4c8c-9703-f9278276fef1"}, {"type": "BoxSelection", "id": "212e7ca6-69a3-476e-8b5e-9bf40ea54bc1"}, {"type": "Glyph", "id": "a97c0cc0-edf8-4734-8a59-271388ab08ca"}], "outer_height": 600, "doc": null, "canvas_height": 600, "id": "1f303e67-1f2a-4e5a-b17e-d83dff7707f1", "tools": [{"type": "PanTool", "id": "7bed5d4c-2172-4a6d-aca8-1df8f6da4f89"}, {"type": "ZoomTool", "id": "31e6313a-3759-4462-9a9e-6beaf8e9a678"}, {"type": "PreviewSaveTool", "id": "ed7c0daf-98ab-4326-ac7a-334a948b5649"}, {"type": "ResizeTool", "id": "a69927dd-4f33-49da-81c3-b3d2e5128efc"}, {"type": "BoxSelectTool", "id": "7b0139f0-e11a-4e9b-83f8-0a848258382b"}], "canvas_width": 600}, "type": "Plot", "id": "1f303e67-1f2a-4e5a-b17e-d83dff7707f1"}, {"attributes": {"plot": {"type": "Plot", "id": "1f303e67-1f2a-4e5a-b17e-d83dff7707f1"}, "dataranges": [], "id": "ed7c0daf-98ab-4326-ac7a-334a948b5649", "doc": null}, "type": "PreviewSaveTool", "id": "ed7c0daf-98ab-4326-ac7a-334a948b5649"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "1f303e67-1f2a-4e5a-b17e-d83dff7707f1"}], "id": "8f157c7e-5edc-4206-b9f4-c78a91e40f1e"}, "type": "PlotContext", "id": "8f157c7e-5edc-4206-b9f4-c78a91e40f1e"}, {"attributes": {"plot": {"type": "Plot", "id": "1f303e67-1f2a-4e5a-b17e-d83dff7707f1"}, "doc": null, "dimension": 1, "id": "788e1600-6052-4c8c-9703-f9278276fef1"}, "type": "Grid", "id": "788e1600-6052-4c8c-9703-f9278276fef1"}, {"attributes": {"plot": {"type": "Plot", "id": "1f303e67-1f2a-4e5a-b17e-d83dff7707f1"}, "id": "a69927dd-4f33-49da-81c3-b3d2e5128efc", "doc": null}, "type": "ResizeTool", "id": "a69927dd-4f33-49da-81c3-b3d2e5128efc"}, {"attributes": {"doc": null, "tool": {"type": "BoxSelectTool", "id": "7b0139f0-e11a-4e9b-83f8-0a848258382b"}, "id": "212e7ca6-69a3-476e-8b5e-9bf40ea54bc1"}, "type": "BoxSelection", "id": "212e7ca6-69a3-476e-8b5e-9bf40ea54bc1"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "ba377f6a-64ba-4d61-9aba-e88f645b11ba"}, "columns": ["x"]}], "id": "ee1d1084-4fd3-4c67-973b-acf07a3bde02", "doc": null}, "type": "DataRange1d", "id": "ee1d1084-4fd3-4c67-973b-acf07a3bde02"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [1, 1, 1, 1], "x": [1294012800000, 1309996800000, 1312934400000, 1299456000000]}, "id": "ba377f6a-64ba-4d61-9aba-e88f645b11ba"}, "type": "ColumnDataSource", "id": "ba377f6a-64ba-4d61-9aba-e88f645b11ba"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "ba377f6a-64ba-4d61-9aba-e88f645b11ba"}, "doc": null, "id": "a97c0cc0-edf8-4734-8a59-271388ab08ca", "xdata_range": {"type": "DataRange1d", "id": "ee1d1084-4fd3-4c67-973b-acf07a3bde02"}, "ydata_range": {"type": "DataRange1d", "id": "811b6a74-8b16-4687-9082-32a24a358afe"}, "glyphspec": {"line_color": {"value": "#1f77b4"}, "line_alpha": 1.0, "fill_color": "#1f77b4", "fill_alpha": 1.0, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "type": "line"}, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "line_width": 1, "angle_units": "deg", "type": "line", "y": {"units": "data", "field": "y"}, "line_alpha": 0.1, "start_angle_units": "deg", "valign": null, "radius_units": "screen", "visible": null, "length_units": "screen", "end_angle_units": "deg", "line_dash_offset": 0, "line_cap": "butt", "line_dash": [], "x": {"units": "data", "field": "x"}, "margin": null, "line_join": "miter", "halign": null}}, "type": "Glyph", "id": "a97c0cc0-edf8-4734-8a59-271388ab08ca"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "ee1d1084-4fd3-4c67-973b-acf07a3bde02"}, {"type": "DataRange1d", "id": "811b6a74-8b16-4687-9082-32a24a358afe"}], "dimensions": ["width", "height"], "id": "31e6313a-3759-4462-9a9e-6beaf8e9a678"}, "type": "ZoomTool", "id": "31e6313a-3759-4462-9a9e-6beaf8e9a678"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "ee1d1084-4fd3-4c67-973b-acf07a3bde02"}, {"type": "DataRange1d", "id": "811b6a74-8b16-4687-9082-32a24a358afe"}], "dimensions": ["width", "height"], "doc": null, "id": "7bed5d4c-2172-4a6d-aca8-1df8f6da4f89"}, "type": "PanTool", "id": "7bed5d4c-2172-4a6d-aca8-1df8f6da4f89"}, {"attributes": {"plot": {"type": "Plot", "id": "1f303e67-1f2a-4e5a-b17e-d83dff7707f1"}, "location": "min", "bounds": "auto", "doc": null, "id": "670e09a2-40ec-4882-a712-019076a5a154", "dimension": 1}, "type": "LinearAxis", "id": "670e09a2-40ec-4882-a712-019076a5a154"}, {"attributes": {"plot": {"type": "Plot", "id": "1f303e67-1f2a-4e5a-b17e-d83dff7707f1"}, "doc": null, "dimension": 0, "id": "b5e36df6-e9c5-4112-bd19-5234163e32d1"}, "type": "Grid", "id": "b5e36df6-e9c5-4112-bd19-5234163e32d1"}, {"attributes": {"doc": null, "renderers": [{"type": "Glyph", "id": "a97c0cc0-edf8-4734-8a59-271388ab08ca"}], "id": "7b0139f0-e11a-4e9b-83f8-0a848258382b"}, "type": "BoxSelectTool", "id": "7b0139f0-e11a-4e9b-83f8-0a848258382b"}];
    var modeltype = "PlotContext";
    var elementid = "a015a26e-3c30-4f53-aa91-60b97177af94";
    var plotID = "1f303e67-1f2a-4e5a-b17e-d83dff7707f1";
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