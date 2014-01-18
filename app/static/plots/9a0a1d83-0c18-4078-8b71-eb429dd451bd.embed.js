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

    var all_models = [{"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "24d8cbb9-6e62-4385-a8a9-77419dbd294c"}, "columns": ["y"]}], "id": "98e54ef3-e1b7-49d5-be9c-cad03db5b47a", "doc": null}, "type": "DataRange1d", "id": "98e54ef3-e1b7-49d5-be9c-cad03db5b47a"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "9a0a1d83-0c18-4078-8b71-eb429dd451bd"}], "id": "1a1f37ca-301d-4ef8-ac23-5e6ff54214e5"}, "type": "PlotContext", "id": "1a1f37ca-301d-4ef8-ac23-5e6ff54214e5"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [], "x": []}, "id": "24d8cbb9-6e62-4385-a8a9-77419dbd294c"}, "type": "ColumnDataSource", "id": "24d8cbb9-6e62-4385-a8a9-77419dbd294c"}, {"attributes": {"plot": {"type": "Plot", "id": "9a0a1d83-0c18-4078-8b71-eb429dd451bd"}, "doc": null, "bounds": "auto", "id": "1c69bbb5-471a-48e0-be43-f5a0f93d6efb", "location": "min", "formats": {"days": ["%m/%d/%Y"]}, "axis_label": "Datum", "dimension": 0}, "type": "DatetimeAxis", "id": "1c69bbb5-471a-48e0-be43-f5a0f93d6efb"}, {"attributes": {"plot": {"type": "Plot", "id": "9a0a1d83-0c18-4078-8b71-eb429dd451bd"}, "doc": null, "dimension": 1, "id": "95dc14c0-cc08-46aa-8706-cee639208469"}, "type": "Grid", "id": "95dc14c0-cc08-46aa-8706-cee639208469"}, {"attributes": {"plot": {"type": "Plot", "id": "9a0a1d83-0c18-4078-8b71-eb429dd451bd"}, "id": "eb16961d-0a1f-448d-b97e-542beaa193ae", "doc": null}, "type": "ResizeTool", "id": "eb16961d-0a1f-448d-b97e-542beaa193ae"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "24d8cbb9-6e62-4385-a8a9-77419dbd294c"}, "columns": ["x"]}], "id": "c6e85bcb-efcf-4e5d-bdee-6b6c44888ef1", "doc": null}, "type": "DataRange1d", "id": "c6e85bcb-efcf-4e5d-bdee-6b6c44888ef1"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "24d8cbb9-6e62-4385-a8a9-77419dbd294c"}, "doc": null, "id": "d0fb37d6-8c44-4b5f-83a4-c9b92c1af860", "xdata_range": {"type": "DataRange1d", "id": "c6e85bcb-efcf-4e5d-bdee-6b6c44888ef1"}, "ydata_range": {"type": "DataRange1d", "id": "98e54ef3-e1b7-49d5-be9c-cad03db5b47a"}, "glyphspec": {"line_color": {"value": "#1f77b4"}, "line_alpha": 1.0, "fill_color": "#1f77b4", "title": "voorkomens", "type": "line", "fill_alpha": 1.0, "height": 300, "width": 400, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "tools": "pan,zoom,resize", "x_axis_type": "datetime"}, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "line_width": 1, "angle_units": "deg", "type": "line", "y": {"units": "data", "field": "y"}, "line_alpha": 0.1, "start_angle_units": "deg", "valign": null, "radius_units": "screen", "visible": null, "length_units": "screen", "end_angle_units": "deg", "line_dash_offset": 0, "line_cap": "butt", "line_dash": [], "x": {"units": "data", "field": "x"}, "margin": null, "line_join": "miter", "halign": null}}, "type": "Glyph", "id": "d0fb37d6-8c44-4b5f-83a4-c9b92c1af860"}, {"attributes": {"plot": {"type": "Plot", "id": "9a0a1d83-0c18-4078-8b71-eb429dd451bd"}, "doc": null, "bounds": "auto", "dimension": 1, "location": "min", "axis_label": "# artikels", "id": "c06de929-9f2e-43d7-9c4c-1300aff91082"}, "type": "LinearAxis", "id": "c06de929-9f2e-43d7-9c4c-1300aff91082"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "c6e85bcb-efcf-4e5d-bdee-6b6c44888ef1"}, {"type": "DataRange1d", "id": "98e54ef3-e1b7-49d5-be9c-cad03db5b47a"}], "dimensions": ["width", "height"], "doc": null, "id": "f487064c-7fc4-4b88-80da-dfb1198c4925"}, "type": "PanTool", "id": "f487064c-7fc4-4b88-80da-dfb1198c4925"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "c6e85bcb-efcf-4e5d-bdee-6b6c44888ef1"}, "axes": [], "title": "voorkomens", "y_range": {"type": "DataRange1d", "id": "98e54ef3-e1b7-49d5-be9c-cad03db5b47a"}, "outer_width": 400, "renderers": [{"type": "DatetimeAxis", "id": "1c69bbb5-471a-48e0-be43-f5a0f93d6efb"}, {"type": "LinearAxis", "id": "c06de929-9f2e-43d7-9c4c-1300aff91082"}, {"type": "Grid", "id": "eceea159-5320-4da1-954a-236e9ae375d9"}, {"type": "Grid", "id": "95dc14c0-cc08-46aa-8706-cee639208469"}, {"type": "Glyph", "id": "d0fb37d6-8c44-4b5f-83a4-c9b92c1af860"}], "outer_height": 300, "width": 400, "doc": null, "canvas_height": 300, "id": "9a0a1d83-0c18-4078-8b71-eb429dd451bd", "height": 300, "tools": [{"type": "PanTool", "id": "f487064c-7fc4-4b88-80da-dfb1198c4925"}, {"type": "ZoomTool", "id": "93099c20-de0c-4576-b8f3-7c136cbb2733"}, {"type": "ResizeTool", "id": "eb16961d-0a1f-448d-b97e-542beaa193ae"}], "canvas_width": 400}, "type": "Plot", "id": "9a0a1d83-0c18-4078-8b71-eb429dd451bd"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "c6e85bcb-efcf-4e5d-bdee-6b6c44888ef1"}, {"type": "DataRange1d", "id": "98e54ef3-e1b7-49d5-be9c-cad03db5b47a"}], "dimensions": ["width", "height"], "id": "93099c20-de0c-4576-b8f3-7c136cbb2733"}, "type": "ZoomTool", "id": "93099c20-de0c-4576-b8f3-7c136cbb2733"}, {"attributes": {"plot": {"type": "Plot", "id": "9a0a1d83-0c18-4078-8b71-eb429dd451bd"}, "doc": null, "dimension": 0, "id": "eceea159-5320-4da1-954a-236e9ae375d9"}, "type": "Grid", "id": "eceea159-5320-4da1-954a-236e9ae375d9"}];
    var modeltype = "PlotContext";
    var elementid = "20f6d84a-3ac0-4bf6-86a8-2e8312836e3d";
    var plotID = "9a0a1d83-0c18-4078-8b71-eb429dd451bd";
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