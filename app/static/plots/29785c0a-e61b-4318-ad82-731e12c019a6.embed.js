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

    var all_models = [{"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "4cdc1d42-607d-4f65-92fc-5b95d7851b6c"}, {"type": "DataRange1d", "id": "2d3acffe-27d9-4770-8202-9fb4655e55bf"}], "dimensions": ["width", "height"], "doc": null, "id": "908d9121-357b-4982-8bd9-c511a84e9961"}, "type": "PanTool", "id": "908d9121-357b-4982-8bd9-c511a84e9961"}, {"attributes": {"doc": null, "renderers": [{"type": "Glyph", "id": "65b2fec6-6aec-4181-9e79-a5c70da70759"}, {"type": "Glyph", "id": "76c0396d-744d-43b9-888d-adc360f7c9ab"}], "id": "3a78b247-b27a-4c05-ae7d-a78a95e85756"}, "type": "BoxSelectTool", "id": "3a78b247-b27a-4c05-ae7d-a78a95e85756"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "4cdc1d42-607d-4f65-92fc-5b95d7851b6c"}, "axes": [], "title": "Plot", "y_range": {"type": "DataRange1d", "id": "2d3acffe-27d9-4770-8202-9fb4655e55bf"}, "outer_width": 600, "renderers": [{"type": "LinearAxis", "id": "aa4c7de7-a458-404d-aad6-eb39a6aba2f9"}, {"type": "LinearAxis", "id": "1206d7ea-7f86-4a61-aea1-09650833499d"}, {"type": "Grid", "id": "71818ad9-086f-4be7-a234-fccc06faaec6"}, {"type": "Grid", "id": "0eb8fc98-ec28-465c-b989-c2551049cf54"}, {"type": "BoxSelection", "id": "51619088-e7b1-413e-8976-f2a9a6bdba4c"}, {"type": "Legend", "id": "267305ca-9e25-4f37-bce7-81fd8ed424d3"}, {"type": "Glyph", "id": "65b2fec6-6aec-4181-9e79-a5c70da70759"}, {"type": "Glyph", "id": "76c0396d-744d-43b9-888d-adc360f7c9ab"}], "outer_height": 600, "doc": null, "canvas_height": 600, "id": "29785c0a-e61b-4318-ad82-731e12c019a6", "tools": [{"type": "PanTool", "id": "908d9121-357b-4982-8bd9-c511a84e9961"}, {"type": "ZoomTool", "id": "0a04a1fb-d405-43f4-a77e-a748902172a6"}, {"type": "PreviewSaveTool", "id": "601f64fd-6b8b-4122-8c1c-872c57b9bbbd"}, {"type": "ResizeTool", "id": "e7817707-c34e-4061-a284-fedc27a1514b"}, {"type": "BoxSelectTool", "id": "3a78b247-b27a-4c05-ae7d-a78a95e85756"}], "canvas_width": 600}, "type": "Plot", "id": "29785c0a-e61b-4318-ad82-731e12c019a6"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "fdb2032d-b9a7-43ee-be3c-bd4e1dcbfdf5"}, "columns": ["y"]}, {"ref": {"type": "ColumnDataSource", "id": "26dbef4a-9ef8-40d1-a77a-33ec685a0edf"}, "columns": ["y"]}], "id": "2d3acffe-27d9-4770-8202-9fb4655e55bf", "doc": null}, "type": "DataRange1d", "id": "2d3acffe-27d9-4770-8202-9fb4655e55bf"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "fdb2032d-b9a7-43ee-be3c-bd4e1dcbfdf5"}, "columns": ["x"]}, {"ref": {"type": "ColumnDataSource", "id": "26dbef4a-9ef8-40d1-a77a-33ec685a0edf"}, "columns": ["x"]}], "id": "4cdc1d42-607d-4f65-92fc-5b95d7851b6c", "doc": null}, "type": "DataRange1d", "id": "4cdc1d42-607d-4f65-92fc-5b95d7851b6c"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "fdb2032d-b9a7-43ee-be3c-bd4e1dcbfdf5"}, "doc": null, "id": "65b2fec6-6aec-4181-9e79-a5c70da70759", "xdata_range": {"type": "DataRange1d", "id": "4cdc1d42-607d-4f65-92fc-5b95d7851b6c"}, "ydata_range": {"type": "DataRange1d", "id": "2d3acffe-27d9-4770-8202-9fb4655e55bf"}, "glyphspec": {"line_color": {"value": "green"}, "line_alpha": 1.0, "fill_color": {"value": "green"}, "fill_alpha": 1.0, "radius": {"units": "screen", "value": 4}, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "type": "circle", "size": {"units": "screen", "field": null, "default": 4}}, "nonselection_glyphspec": {"line_color": {"value": "green"}, "angle_units": "deg", "fill_color": {"value": "green"}, "visible": null, "radius": {"units": "screen", "value": 4}, "line_dash_offset": 0, "line_join": "miter", "size": {"units": "screen", "default": 4, "field": null}, "line_alpha": 0.1, "radius_units": "screen", "end_angle_units": "deg", "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": 1, "type": "circle", "fill_alpha": 0.1, "halign": null, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "margin": null}}, "type": "Glyph", "id": "65b2fec6-6aec-4181-9e79-a5c70da70759"}, {"attributes": {"doc": null, "tool": {"type": "BoxSelectTool", "id": "3a78b247-b27a-4c05-ae7d-a78a95e85756"}, "id": "51619088-e7b1-413e-8976-f2a9a6bdba4c"}, "type": "BoxSelection", "id": "51619088-e7b1-413e-8976-f2a9a6bdba4c"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [0.6518520179012196, 0.7305086335200187, 0.37417726789254124, 0.5835905348366873, 0.6992718623044549, 0.36905785884017345, 0.6290313330543595, 0.7188833455688067, 0.3613394501168779, 0.6489496252297695, 0.7285606218760784, 0.372900694468285, 0.6593135364206558, 0.7339579398817141, 0.3779757729546526], "x": [true, null, false, true, null, false, true, null, false, true, null, false, true, null, false]}, "id": "26dbef4a-9ef8-40d1-a77a-33ec685a0edf"}, "type": "ColumnDataSource", "id": "26dbef4a-9ef8-40d1-a77a-33ec685a0edf"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "29785c0a-e61b-4318-ad82-731e12c019a6"}], "id": "f4974733-bca9-4270-855a-c86ba558892b"}, "type": "PlotContext", "id": "f4974733-bca9-4270-855a-c86ba558892b"}, {"attributes": {"plot": {"type": "Plot", "id": "29785c0a-e61b-4318-ad82-731e12c019a6"}, "doc": null, "legends": {"splits1540": [{"type": "Glyph", "id": "65b2fec6-6aec-4181-9e79-a5c70da70759"}], "log_boost_splits1540": [{"type": "Glyph", "id": "76c0396d-744d-43b9-888d-adc360f7c9ab"}]}, "id": "267305ca-9e25-4f37-bce7-81fd8ed424d3"}, "type": "Legend", "id": "267305ca-9e25-4f37-bce7-81fd8ed424d3"}, {"attributes": {"plot": {"type": "Plot", "id": "29785c0a-e61b-4318-ad82-731e12c019a6"}, "id": "e7817707-c34e-4061-a284-fedc27a1514b", "doc": null}, "type": "ResizeTool", "id": "e7817707-c34e-4061-a284-fedc27a1514b"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [0.6310415215391938, 0.6700979636447748, 0.3910645335729241, 0.6404549086682197, 0.6794961436856841, 0.40700732429331365, 0.6352641386294299, 0.6848892018073277, 0.41056344844815096, 0.5948290600531481, 0.6797476125456291, 0.4068472977110742, 0.5063627155721406, 0.6420034336380134, 0.38982051925537126, 0.6365227065305923, 0.674210069523634, 0.39841732472539176, 0.6389211003618512, 0.6784710322533719, 0.40416414771245157, 0.6397195935959784, 0.6796249170928611, 0.40542303131521124], "x": [true, null, false, true, null, false, true, null, false, true, null, false, true, null, false, true, null, false, true, null, false, true, null, false]}, "id": "fdb2032d-b9a7-43ee-be3c-bd4e1dcbfdf5"}, "type": "ColumnDataSource", "id": "fdb2032d-b9a7-43ee-be3c-bd4e1dcbfdf5"}, {"attributes": {"plot": {"type": "Plot", "id": "29785c0a-e61b-4318-ad82-731e12c019a6"}, "location": "min", "bounds": "auto", "doc": null, "id": "1206d7ea-7f86-4a61-aea1-09650833499d", "dimension": 1}, "type": "LinearAxis", "id": "1206d7ea-7f86-4a61-aea1-09650833499d"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "4cdc1d42-607d-4f65-92fc-5b95d7851b6c"}, {"type": "DataRange1d", "id": "2d3acffe-27d9-4770-8202-9fb4655e55bf"}], "dimensions": ["width", "height"], "id": "0a04a1fb-d405-43f4-a77e-a748902172a6"}, "type": "ZoomTool", "id": "0a04a1fb-d405-43f4-a77e-a748902172a6"}, {"attributes": {"plot": {"type": "Plot", "id": "29785c0a-e61b-4318-ad82-731e12c019a6"}, "doc": null, "dimension": 0, "id": "71818ad9-086f-4be7-a234-fccc06faaec6"}, "type": "Grid", "id": "71818ad9-086f-4be7-a234-fccc06faaec6"}, {"attributes": {"plot": {"type": "Plot", "id": "29785c0a-e61b-4318-ad82-731e12c019a6"}, "doc": null, "dimension": 1, "id": "0eb8fc98-ec28-465c-b989-c2551049cf54"}, "type": "Grid", "id": "0eb8fc98-ec28-465c-b989-c2551049cf54"}, {"attributes": {"plot": {"type": "Plot", "id": "29785c0a-e61b-4318-ad82-731e12c019a6"}, "dataranges": [], "id": "601f64fd-6b8b-4122-8c1c-872c57b9bbbd", "doc": null}, "type": "PreviewSaveTool", "id": "601f64fd-6b8b-4122-8c1c-872c57b9bbbd"}, {"attributes": {"plot": {"type": "Plot", "id": "29785c0a-e61b-4318-ad82-731e12c019a6"}, "location": "min", "bounds": "auto", "doc": null, "id": "aa4c7de7-a458-404d-aad6-eb39a6aba2f9", "dimension": 0}, "type": "LinearAxis", "id": "aa4c7de7-a458-404d-aad6-eb39a6aba2f9"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "26dbef4a-9ef8-40d1-a77a-33ec685a0edf"}, "doc": null, "id": "76c0396d-744d-43b9-888d-adc360f7c9ab", "xdata_range": {"type": "DataRange1d", "id": "4cdc1d42-607d-4f65-92fc-5b95d7851b6c"}, "ydata_range": {"type": "DataRange1d", "id": "2d3acffe-27d9-4770-8202-9fb4655e55bf"}, "glyphspec": {"line_color": {"value": "blue"}, "line_alpha": 1.0, "fill_color": {"value": "blue"}, "fill_alpha": 1.0, "radius": {"units": "screen", "value": 4}, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "type": "circle", "size": {"units": "screen", "field": null, "default": 4}}, "nonselection_glyphspec": {"line_color": {"value": "blue"}, "angle_units": "deg", "fill_color": {"value": "blue"}, "visible": null, "radius": {"units": "screen", "value": 4}, "line_dash_offset": 0, "line_join": "miter", "size": {"units": "screen", "default": 4, "field": null}, "line_alpha": 0.1, "radius_units": "screen", "end_angle_units": "deg", "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": 1, "type": "circle", "fill_alpha": 0.1, "halign": null, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "margin": null}}, "type": "Glyph", "id": "76c0396d-744d-43b9-888d-adc360f7c9ab"}];
    var modeltype = "PlotContext";
    var elementid = "60a930c5-58c7-4a70-9960-cda5f307bf4b";
    var plotID = "29785c0a-e61b-4318-ad82-731e12c019a6";
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