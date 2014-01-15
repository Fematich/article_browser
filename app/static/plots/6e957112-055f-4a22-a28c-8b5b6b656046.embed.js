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

    var all_models = [{"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "d9e07974-778f-437f-8117-68d6e9db579c"}, "columns": ["x"]}], "id": "fe75a960-aa37-4878-864b-da2627ea86bf", "doc": null}, "type": "DataRange1d", "id": "fe75a960-aa37-4878-864b-da2627ea86bf"}, {"attributes": {"column_names": ["fill_color", "line_color", "x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"line_color": [["tomato", "tomato"], ["navy", "navy"]], "x": [[1, 2], [1, 2]], "fill_color": [["tomato", "tomato"], ["navy", "navy"]], "y": [[3, 4], [3, 4]]}, "id": "cbf2df39-4865-4c88-b421-74698695cfd2"}, "type": "ColumnDataSource", "id": "cbf2df39-4865-4c88-b421-74698695cfd2"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "afe6271f-237b-49f0-a4bc-f6459c980c3f"}, "axes": [], "title": "Plot", "y_range": {"type": "DataRange1d", "id": "fa7153db-75a3-43ba-bf35-bf3b4d8c2b76"}, "outer_width": 600, "renderers": [{"type": "LinearAxis", "id": "57b7efcd-9561-4378-991f-f8e73c97a902"}, {"type": "LinearAxis", "id": "848f2148-93e1-4d4b-ace4-58fac509d5b7"}, {"type": "Grid", "id": "75e3dec2-43be-4c66-9044-dbeb38560ea7"}, {"type": "Grid", "id": "8c2169db-f061-4dd8-97c4-5aedff403afe"}, {"type": "BoxSelection", "id": "1de67d0b-3390-4e06-97ec-d1ca014998f3"}, {"type": "Glyph", "id": "56786acd-6371-47dc-af57-493e8b736048"}], "outer_height": 600, "doc": null, "canvas_height": 600, "id": "db6d243c-a4ef-4665-af8c-3775a9886425", "tools": [{"type": "PanTool", "id": "82530afa-c547-416f-bc49-0605e09749ce"}, {"type": "ZoomTool", "id": "0c593069-c790-4454-b705-005914a36a93"}, {"type": "PreviewSaveTool", "id": "1ff4721d-1a14-4cca-a101-2651ae96c54b"}, {"type": "ResizeTool", "id": "e69c3da4-65d8-4b2c-8c51-73d86d407a60"}, {"type": "BoxSelectTool", "id": "e5a5db2c-e5e7-40e1-92bb-9255af2186ef"}], "canvas_width": 600}, "type": "Plot", "id": "db6d243c-a4ef-4665-af8c-3775a9886425"}, {"attributes": {"plot": {"type": "Plot", "id": "db6d243c-a4ef-4665-af8c-3775a9886425"}, "doc": null, "dimension": 1, "id": "8c2169db-f061-4dd8-97c4-5aedff403afe"}, "type": "Grid", "id": "8c2169db-f061-4dd8-97c4-5aedff403afe"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "cbf2df39-4865-4c88-b421-74698695cfd2"}, "columns": ["x"]}], "id": "afe6271f-237b-49f0-a4bc-f6459c980c3f", "doc": null}, "type": "DataRange1d", "id": "afe6271f-237b-49f0-a4bc-f6459c980c3f"}, {"attributes": {"plot": {"type": "Plot", "id": "db6d243c-a4ef-4665-af8c-3775a9886425"}, "doc": null, "dimension": 0, "id": "75e3dec2-43be-4c66-9044-dbeb38560ea7"}, "type": "Grid", "id": "75e3dec2-43be-4c66-9044-dbeb38560ea7"}, {"attributes": {"plot": {"type": "Plot", "id": "6e957112-055f-4a22-a28c-8b5b6b656046"}, "location": "min", "bounds": "auto", "doc": null, "id": "7030b9e3-15d6-4b6b-b45d-99ef10b6ba1a", "dimension": 0}, "type": "LinearAxis", "id": "7030b9e3-15d6-4b6b-b45d-99ef10b6ba1a"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "fe75a960-aa37-4878-864b-da2627ea86bf"}, {"type": "DataRange1d", "id": "dad18815-882d-428b-8d1f-82ba25e08867"}], "dimensions": ["width", "height"], "doc": null, "id": "9b7cf36f-359c-48b9-b73e-f8193c760195"}, "type": "PanTool", "id": "9b7cf36f-359c-48b9-b73e-f8193c760195"}, {"attributes": {"plot": {"type": "Plot", "id": "6e957112-055f-4a22-a28c-8b5b6b656046"}, "doc": null, "dimension": 1, "id": "9a65f180-1cdc-4422-bb5f-7b295fb201ba"}, "type": "Grid", "id": "9a65f180-1cdc-4422-bb5f-7b295fb201ba"}, {"attributes": {"plot": {"type": "Plot", "id": "db6d243c-a4ef-4665-af8c-3775a9886425"}, "id": "e69c3da4-65d8-4b2c-8c51-73d86d407a60", "doc": null}, "type": "ResizeTool", "id": "e69c3da4-65d8-4b2c-8c51-73d86d407a60"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "fe75a960-aa37-4878-864b-da2627ea86bf"}, {"type": "DataRange1d", "id": "dad18815-882d-428b-8d1f-82ba25e08867"}], "dimensions": ["width", "height"], "id": "133dad73-1b67-4f11-a3fc-c7571ec0cdc9"}, "type": "ZoomTool", "id": "133dad73-1b67-4f11-a3fc-c7571ec0cdc9"}, {"attributes": {"plot": {"type": "Plot", "id": "db6d243c-a4ef-4665-af8c-3775a9886425"}, "dataranges": [], "id": "1ff4721d-1a14-4cca-a101-2651ae96c54b", "doc": null}, "type": "PreviewSaveTool", "id": "1ff4721d-1a14-4cca-a101-2651ae96c54b"}, {"attributes": {"plot": {"type": "Plot", "id": "db6d243c-a4ef-4665-af8c-3775a9886425"}, "location": "min", "bounds": "auto", "doc": null, "id": "848f2148-93e1-4d4b-ace4-58fac509d5b7", "dimension": 1}, "type": "LinearAxis", "id": "848f2148-93e1-4d4b-ace4-58fac509d5b7"}, {"attributes": {"doc": null, "tool": {"type": "BoxSelectTool", "id": "e5a5db2c-e5e7-40e1-92bb-9255af2186ef"}, "id": "1de67d0b-3390-4e06-97ec-d1ca014998f3"}, "type": "BoxSelection", "id": "1de67d0b-3390-4e06-97ec-d1ca014998f3"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "fe75a960-aa37-4878-864b-da2627ea86bf"}, "axes": [], "title": "Plot", "y_range": {"type": "DataRange1d", "id": "dad18815-882d-428b-8d1f-82ba25e08867"}, "outer_width": 600, "renderers": [{"type": "LinearAxis", "id": "7030b9e3-15d6-4b6b-b45d-99ef10b6ba1a"}, {"type": "LinearAxis", "id": "8d3f68d5-f31a-41b7-85cf-c71d0415fb58"}, {"type": "Grid", "id": "6f9b3f90-3096-47be-a110-f9c629894703"}, {"type": "Grid", "id": "9a65f180-1cdc-4422-bb5f-7b295fb201ba"}, {"type": "BoxSelection", "id": "23140997-34b5-4147-876e-37223e281c56"}, {"type": "Glyph", "id": "148dd999-3567-44bb-9b0c-de35c8234806"}], "outer_height": 600, "doc": null, "canvas_height": 600, "id": "6e957112-055f-4a22-a28c-8b5b6b656046", "tools": [{"type": "PanTool", "id": "9b7cf36f-359c-48b9-b73e-f8193c760195"}, {"type": "ZoomTool", "id": "133dad73-1b67-4f11-a3fc-c7571ec0cdc9"}, {"type": "PreviewSaveTool", "id": "8a0ff6e0-6da9-4d4f-ba39-f204425d9400"}, {"type": "ResizeTool", "id": "dcba5791-2bf6-41fe-b041-682bc61530c0"}, {"type": "BoxSelectTool", "id": "0eb8984c-79ee-4c34-af11-ecf1e501b4a4"}], "canvas_width": 600}, "type": "Plot", "id": "6e957112-055f-4a22-a28c-8b5b6b656046"}, {"attributes": {"plot": {"type": "Plot", "id": "6e957112-055f-4a22-a28c-8b5b6b656046"}, "dataranges": [], "id": "8a0ff6e0-6da9-4d4f-ba39-f204425d9400", "doc": null}, "type": "PreviewSaveTool", "id": "8a0ff6e0-6da9-4d4f-ba39-f204425d9400"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "db6d243c-a4ef-4665-af8c-3775a9886425"}, {"type": "Plot", "id": "6e957112-055f-4a22-a28c-8b5b6b656046"}], "id": "631df1af-e1a8-488f-8191-fe898c9d9484"}, "type": "PlotContext", "id": "631df1af-e1a8-488f-8191-fe898c9d9484"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "cbf2df39-4865-4c88-b421-74698695cfd2"}, "doc": null, "id": "56786acd-6371-47dc-af57-493e8b736048", "xdata_range": {"type": "DataRange1d", "id": "afe6271f-237b-49f0-a4bc-f6459c980c3f"}, "ydata_range": {"type": "DataRange1d", "id": "fa7153db-75a3-43ba-bf35-bf3b4d8c2b76"}, "glyphspec": {"line_color": {"units": "data", "field": "line_color"}, "line_alpha": 1.0, "fill_color": {"units": "data", "field": "fill_color"}, "fill_alpha": 1.0, "radius": {"units": "screen", "value": 4}, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "type": "circle", "size": {"units": "screen", "field": null, "default": 4}}, "nonselection_glyphspec": {"line_color": {"units": "data", "field": "line_color"}, "angle_units": "deg", "fill_color": {"units": "data", "field": "fill_color"}, "visible": null, "radius": {"units": "screen", "value": 4}, "line_dash_offset": 0, "line_join": "miter", "size": {"units": "screen", "default": 4, "field": null}, "line_alpha": 0.1, "radius_units": "screen", "end_angle_units": "deg", "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": 1, "type": "circle", "fill_alpha": 0.1, "halign": null, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "margin": null}}, "type": "Glyph", "id": "56786acd-6371-47dc-af57-493e8b736048"}, {"attributes": {"doc": null, "renderers": [{"type": "Glyph", "id": "148dd999-3567-44bb-9b0c-de35c8234806"}], "id": "0eb8984c-79ee-4c34-af11-ecf1e501b4a4"}, "type": "BoxSelectTool", "id": "0eb8984c-79ee-4c34-af11-ecf1e501b4a4"}, {"attributes": {"doc": null, "renderers": [{"type": "Glyph", "id": "56786acd-6371-47dc-af57-493e8b736048"}], "id": "e5a5db2c-e5e7-40e1-92bb-9255af2186ef"}, "type": "BoxSelectTool", "id": "e5a5db2c-e5e7-40e1-92bb-9255af2186ef"}, {"attributes": {"plot": {"type": "Plot", "id": "6e957112-055f-4a22-a28c-8b5b6b656046"}, "location": "min", "bounds": "auto", "doc": null, "id": "8d3f68d5-f31a-41b7-85cf-c71d0415fb58", "dimension": 1}, "type": "LinearAxis", "id": "8d3f68d5-f31a-41b7-85cf-c71d0415fb58"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "afe6271f-237b-49f0-a4bc-f6459c980c3f"}, {"type": "DataRange1d", "id": "fa7153db-75a3-43ba-bf35-bf3b4d8c2b76"}], "dimensions": ["width", "height"], "id": "0c593069-c790-4454-b705-005914a36a93"}, "type": "ZoomTool", "id": "0c593069-c790-4454-b705-005914a36a93"}, {"attributes": {"plot": {"type": "Plot", "id": "6e957112-055f-4a22-a28c-8b5b6b656046"}, "id": "dcba5791-2bf6-41fe-b041-682bc61530c0", "doc": null}, "type": "ResizeTool", "id": "dcba5791-2bf6-41fe-b041-682bc61530c0"}, {"attributes": {"column_names": ["fill_color", "line_color", "x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"line_color": [["tomato", "tomato"], ["navy", "navy"]], "x": [[1, 2], [1, 2]], "fill_color": [["tomato", "tomato"], ["navy", "navy"]], "y": [[3, 4], [3, 4]]}, "id": "d9e07974-778f-437f-8117-68d6e9db579c"}, "type": "ColumnDataSource", "id": "d9e07974-778f-437f-8117-68d6e9db579c"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "afe6271f-237b-49f0-a4bc-f6459c980c3f"}, {"type": "DataRange1d", "id": "fa7153db-75a3-43ba-bf35-bf3b4d8c2b76"}], "dimensions": ["width", "height"], "doc": null, "id": "82530afa-c547-416f-bc49-0605e09749ce"}, "type": "PanTool", "id": "82530afa-c547-416f-bc49-0605e09749ce"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "d9e07974-778f-437f-8117-68d6e9db579c"}, "columns": ["y"]}], "id": "dad18815-882d-428b-8d1f-82ba25e08867", "doc": null}, "type": "DataRange1d", "id": "dad18815-882d-428b-8d1f-82ba25e08867"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "d9e07974-778f-437f-8117-68d6e9db579c"}, "doc": null, "id": "148dd999-3567-44bb-9b0c-de35c8234806", "xdata_range": {"type": "DataRange1d", "id": "fe75a960-aa37-4878-864b-da2627ea86bf"}, "ydata_range": {"type": "DataRange1d", "id": "dad18815-882d-428b-8d1f-82ba25e08867"}, "glyphspec": {"line_color": {"units": "data", "field": "line_color"}, "line_alpha": 1.0, "fill_color": {"units": "data", "field": "fill_color"}, "fill_alpha": 1.0, "radius": {"units": "screen", "value": 4}, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "type": "circle", "size": {"units": "screen", "field": null, "default": 4}}, "nonselection_glyphspec": {"line_color": {"units": "data", "field": "line_color"}, "angle_units": "deg", "fill_color": {"units": "data", "field": "fill_color"}, "visible": null, "radius": {"units": "screen", "value": 4}, "line_dash_offset": 0, "line_join": "miter", "size": {"units": "screen", "default": 4, "field": null}, "line_alpha": 0.1, "radius_units": "screen", "end_angle_units": "deg", "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": 1, "type": "circle", "fill_alpha": 0.1, "halign": null, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "margin": null}}, "type": "Glyph", "id": "148dd999-3567-44bb-9b0c-de35c8234806"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "cbf2df39-4865-4c88-b421-74698695cfd2"}, "columns": ["y"]}], "id": "fa7153db-75a3-43ba-bf35-bf3b4d8c2b76", "doc": null}, "type": "DataRange1d", "id": "fa7153db-75a3-43ba-bf35-bf3b4d8c2b76"}, {"attributes": {"plot": {"type": "Plot", "id": "db6d243c-a4ef-4665-af8c-3775a9886425"}, "location": "min", "bounds": "auto", "doc": null, "id": "57b7efcd-9561-4378-991f-f8e73c97a902", "dimension": 0}, "type": "LinearAxis", "id": "57b7efcd-9561-4378-991f-f8e73c97a902"}, {"attributes": {"plot": {"type": "Plot", "id": "6e957112-055f-4a22-a28c-8b5b6b656046"}, "doc": null, "dimension": 0, "id": "6f9b3f90-3096-47be-a110-f9c629894703"}, "type": "Grid", "id": "6f9b3f90-3096-47be-a110-f9c629894703"}, {"attributes": {"doc": null, "tool": {"type": "BoxSelectTool", "id": "0eb8984c-79ee-4c34-af11-ecf1e501b4a4"}, "id": "23140997-34b5-4147-876e-37223e281c56"}, "type": "BoxSelection", "id": "23140997-34b5-4147-876e-37223e281c56"}];
    var modeltype = "PlotContext";
    var elementid = "6501f731-9fc0-421d-8a0f-7e0e55ce88b4";
    var plotID = "6e957112-055f-4a22-a28c-8b5b6b656046";
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