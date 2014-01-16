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

    var all_models = [{"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [0.6518520179012196, 0.7305086335200187, 0.37417726789254124, 0.5835905348366873, 0.6992718623044549, 0.36905785884017345, 0.6290313330543595, 0.7188833455688067, 0.3613394501168779, 0.6489496252297695, 0.7285606218760784, 0.372900694468285, 0.6593135364206558, 0.7339579398817141, 0.3779757729546526], "x": [0.4, 0.4, 0.4, 0.5, 0.5, 0.5, 0.1, 0.1, 0.1, 0.2, 0.2, 0.2, 0.3, 0.3, 0.3]}, "id": "ac6852f1-1fd0-43b6-b7c1-f8db4587061a"}, "type": "ColumnDataSource", "id": "ac6852f1-1fd0-43b6-b7c1-f8db4587061a"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "75e65dc3-32a1-4817-96c3-d806febf3794"}, "doc": null, "id": "21cb7744-1b68-44e1-bfac-9281ca67c1c6", "xdata_range": {"type": "DataRange1d", "id": "d6bbf6c1-b7fa-412c-bc53-277e8eb5eb26"}, "ydata_range": {"type": "DataRange1d", "id": "9ef70b28-47d3-4079-8567-274c7f5c3cf7"}, "glyphspec": {"line_color": {"value": "green"}, "line_alpha": 1.0, "fill_color": {"value": "green"}, "fill_alpha": 1.0, "radius": {"units": "screen", "value": 4}, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "type": "circle", "size": {"units": "screen", "field": null, "default": 4}}, "nonselection_glyphspec": {"line_color": {"value": "green"}, "angle_units": "deg", "fill_color": {"value": "green"}, "visible": null, "radius": {"units": "screen", "value": 4}, "line_dash_offset": 0, "line_join": "miter", "size": {"units": "screen", "default": 4, "field": null}, "line_alpha": 0.1, "radius_units": "screen", "end_angle_units": "deg", "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": 1, "type": "circle", "fill_alpha": 0.1, "halign": null, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "margin": null}}, "type": "Glyph", "id": "21cb7744-1b68-44e1-bfac-9281ca67c1c6"}, {"attributes": {"doc": null, "tool": {"type": "BoxSelectTool", "id": "491efd3a-e568-46dd-a036-49e66ff2db80"}, "id": "e74ef4d6-3543-42f5-b4c8-94e79c512354"}, "type": "BoxSelection", "id": "e74ef4d6-3543-42f5-b4c8-94e79c512354"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "75e65dc3-32a1-4817-96c3-d806febf3794"}, "columns": ["x"]}, {"ref": {"type": "ColumnDataSource", "id": "ac6852f1-1fd0-43b6-b7c1-f8db4587061a"}, "columns": ["x"]}], "id": "d6bbf6c1-b7fa-412c-bc53-277e8eb5eb26", "doc": null}, "type": "DataRange1d", "id": "d6bbf6c1-b7fa-412c-bc53-277e8eb5eb26"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [0.6310415215391938, 0.6700979636447748, 0.3910645335729241, 0.6404549086682197, 0.6794961436856841, 0.40700732429331365, 0.6352641386294299, 0.6848892018073277, 0.41056344844815096, 0.5948290600531481, 0.6797476125456291, 0.4068472977110742, 0.5063627155721406, 0.6420034336380134, 0.38982051925537126, 0.6365227065305923, 0.674210069523634, 0.39841732472539176, 0.6389211003618512, 0.6784710322533719, 0.40416414771245157, 0.6397195935959784, 0.6796249170928611, 0.40542303131521124], "x": [0.1, 0.1, 0.1, 0.2, 0.2, 0.2, 0.3, 0.3, 0.3, 0.4, 0.4, 0.4, 0.5, 0.5, 0.5, 0.15, 0.15, 0.15, 0.18, 0.18, 0.18, 0.19, 0.19, 0.19]}, "id": "75e65dc3-32a1-4817-96c3-d806febf3794"}, "type": "ColumnDataSource", "id": "75e65dc3-32a1-4817-96c3-d806febf3794"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "d6bbf6c1-b7fa-412c-bc53-277e8eb5eb26"}, {"type": "DataRange1d", "id": "9ef70b28-47d3-4079-8567-274c7f5c3cf7"}], "dimensions": ["width", "height"], "id": "b330770e-457f-4105-bd36-4d68221f9e8d"}, "type": "ZoomTool", "id": "b330770e-457f-4105-bd36-4d68221f9e8d"}, {"attributes": {"plot": {"type": "Plot", "id": "b0271fde-dc96-4307-869a-e5231e5c8f63"}, "location": "min", "bounds": "auto", "doc": null, "id": "fea77cc8-4da8-4932-8267-5154dfb69674", "dimension": 1}, "type": "LinearAxis", "id": "fea77cc8-4da8-4932-8267-5154dfb69674"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "75e65dc3-32a1-4817-96c3-d806febf3794"}, "columns": ["y"]}, {"ref": {"type": "ColumnDataSource", "id": "ac6852f1-1fd0-43b6-b7c1-f8db4587061a"}, "columns": ["y"]}], "id": "9ef70b28-47d3-4079-8567-274c7f5c3cf7", "doc": null}, "type": "DataRange1d", "id": "9ef70b28-47d3-4079-8567-274c7f5c3cf7"}, {"attributes": {"plot": {"type": "Plot", "id": "b0271fde-dc96-4307-869a-e5231e5c8f63"}, "doc": null, "dimension": 0, "id": "c8531d8f-1c25-46bc-a37f-b42ddb34b3e9"}, "type": "Grid", "id": "c8531d8f-1c25-46bc-a37f-b42ddb34b3e9"}, {"attributes": {"plot": {"type": "Plot", "id": "b0271fde-dc96-4307-869a-e5231e5c8f63"}, "doc": null, "legends": {"splits1540": [{"type": "Glyph", "id": "21cb7744-1b68-44e1-bfac-9281ca67c1c6"}], "log_boost_splits1540": [{"type": "Glyph", "id": "45cee255-f12b-4e5d-a865-33272b70a310"}]}, "id": "c70978f7-2982-41eb-a453-45507840250a"}, "type": "Legend", "id": "c70978f7-2982-41eb-a453-45507840250a"}, {"attributes": {"plot": {"type": "Plot", "id": "b0271fde-dc96-4307-869a-e5231e5c8f63"}, "id": "01042d0c-1d24-48f6-8075-32fbd1315898", "doc": null}, "type": "ResizeTool", "id": "01042d0c-1d24-48f6-8075-32fbd1315898"}, {"attributes": {"plot": {"type": "Plot", "id": "b0271fde-dc96-4307-869a-e5231e5c8f63"}, "location": "min", "bounds": "auto", "doc": null, "id": "94b4921d-8743-4e86-b87c-66a3a985006b", "dimension": 0}, "type": "LinearAxis", "id": "94b4921d-8743-4e86-b87c-66a3a985006b"}, {"attributes": {"doc": null, "renderers": [{"type": "Glyph", "id": "21cb7744-1b68-44e1-bfac-9281ca67c1c6"}, {"type": "Glyph", "id": "45cee255-f12b-4e5d-a865-33272b70a310"}], "id": "491efd3a-e568-46dd-a036-49e66ff2db80"}, "type": "BoxSelectTool", "id": "491efd3a-e568-46dd-a036-49e66ff2db80"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "ac6852f1-1fd0-43b6-b7c1-f8db4587061a"}, "doc": null, "id": "45cee255-f12b-4e5d-a865-33272b70a310", "xdata_range": {"type": "DataRange1d", "id": "d6bbf6c1-b7fa-412c-bc53-277e8eb5eb26"}, "ydata_range": {"type": "DataRange1d", "id": "9ef70b28-47d3-4079-8567-274c7f5c3cf7"}, "glyphspec": {"line_color": {"value": "blue"}, "line_alpha": 1.0, "fill_color": {"value": "blue"}, "fill_alpha": 1.0, "radius": {"units": "screen", "value": 4}, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "type": "circle", "size": {"units": "screen", "field": null, "default": 4}}, "nonselection_glyphspec": {"line_color": {"value": "blue"}, "angle_units": "deg", "fill_color": {"value": "blue"}, "visible": null, "radius": {"units": "screen", "value": 4}, "line_dash_offset": 0, "line_join": "miter", "size": {"units": "screen", "default": 4, "field": null}, "line_alpha": 0.1, "radius_units": "screen", "end_angle_units": "deg", "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": 1, "type": "circle", "fill_alpha": 0.1, "halign": null, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "margin": null}}, "type": "Glyph", "id": "45cee255-f12b-4e5d-a865-33272b70a310"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "b0271fde-dc96-4307-869a-e5231e5c8f63"}], "id": "84dcd9c7-4b51-45b8-a390-fb5a5bef045a"}, "type": "PlotContext", "id": "84dcd9c7-4b51-45b8-a390-fb5a5bef045a"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "d6bbf6c1-b7fa-412c-bc53-277e8eb5eb26"}, "axes": [], "title": "Plot", "y_range": {"type": "DataRange1d", "id": "9ef70b28-47d3-4079-8567-274c7f5c3cf7"}, "outer_width": 600, "renderers": [{"type": "LinearAxis", "id": "94b4921d-8743-4e86-b87c-66a3a985006b"}, {"type": "LinearAxis", "id": "fea77cc8-4da8-4932-8267-5154dfb69674"}, {"type": "Grid", "id": "c8531d8f-1c25-46bc-a37f-b42ddb34b3e9"}, {"type": "Grid", "id": "9c1fc554-0b05-450c-b42b-49ba17488b74"}, {"type": "BoxSelection", "id": "e74ef4d6-3543-42f5-b4c8-94e79c512354"}, {"type": "Legend", "id": "c70978f7-2982-41eb-a453-45507840250a"}, {"type": "Glyph", "id": "21cb7744-1b68-44e1-bfac-9281ca67c1c6"}, {"type": "Glyph", "id": "45cee255-f12b-4e5d-a865-33272b70a310"}], "outer_height": 600, "doc": null, "canvas_height": 600, "id": "b0271fde-dc96-4307-869a-e5231e5c8f63", "tools": [{"type": "PanTool", "id": "025ceac8-caee-4c99-aa9b-57291e5b0c5a"}, {"type": "ZoomTool", "id": "b330770e-457f-4105-bd36-4d68221f9e8d"}, {"type": "PreviewSaveTool", "id": "305561d8-0c76-426a-a505-e4d75abb4fc6"}, {"type": "ResizeTool", "id": "01042d0c-1d24-48f6-8075-32fbd1315898"}, {"type": "BoxSelectTool", "id": "491efd3a-e568-46dd-a036-49e66ff2db80"}], "canvas_width": 600}, "type": "Plot", "id": "b0271fde-dc96-4307-869a-e5231e5c8f63"}, {"attributes": {"plot": {"type": "Plot", "id": "b0271fde-dc96-4307-869a-e5231e5c8f63"}, "doc": null, "dimension": 1, "id": "9c1fc554-0b05-450c-b42b-49ba17488b74"}, "type": "Grid", "id": "9c1fc554-0b05-450c-b42b-49ba17488b74"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "d6bbf6c1-b7fa-412c-bc53-277e8eb5eb26"}, {"type": "DataRange1d", "id": "9ef70b28-47d3-4079-8567-274c7f5c3cf7"}], "dimensions": ["width", "height"], "doc": null, "id": "025ceac8-caee-4c99-aa9b-57291e5b0c5a"}, "type": "PanTool", "id": "025ceac8-caee-4c99-aa9b-57291e5b0c5a"}, {"attributes": {"plot": {"type": "Plot", "id": "b0271fde-dc96-4307-869a-e5231e5c8f63"}, "dataranges": [], "id": "305561d8-0c76-426a-a505-e4d75abb4fc6", "doc": null}, "type": "PreviewSaveTool", "id": "305561d8-0c76-426a-a505-e4d75abb4fc6"}];
    var modeltype = "PlotContext";
    var elementid = "72bcb185-fd8a-4299-8b9e-e47d396b00bb";
    var plotID = "b0271fde-dc96-4307-869a-e5231e5c8f63";
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