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

    var all_models = [{"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "3e3a1f72-2e9a-40f5-988b-408b0af1d0c7"}, {"type": "DataRange1d", "id": "6199530b-fc0a-4212-a099-154855ac47b9"}], "dimensions": ["width", "height"], "doc": null, "id": "b1a8fdc3-d9f7-477b-834d-9acfe5c540de"}, "type": "PanTool", "id": "b1a8fdc3-d9f7-477b-834d-9acfe5c540de"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "fddd1227-c7f5-45e9-870d-b8fec06b0ac6"}, "columns": ["x"]}], "id": "3e3a1f72-2e9a-40f5-988b-408b0af1d0c7", "doc": null}, "type": "DataRange1d", "id": "3e3a1f72-2e9a-40f5-988b-408b0af1d0c7"}, {"attributes": {"plot": {"type": "Plot", "id": "4f27d61d-1e1a-4e70-8346-6c4b64f6d193"}, "doc": null, "dimension": 0, "id": "a2ba7ce7-817d-4efd-9036-f8e54530b8ca"}, "type": "Grid", "id": "a2ba7ce7-817d-4efd-9036-f8e54530b8ca"}, {"attributes": {"doc": null, "tool": {"type": "BoxSelectTool", "id": "50581dd1-8152-489e-9b15-b621450781a2"}, "id": "71174d80-405b-4190-af3b-17ad998194c0"}, "type": "BoxSelection", "id": "71174d80-405b-4190-af3b-17ad998194c0"}, {"attributes": {"plot": {"type": "Plot", "id": "4f27d61d-1e1a-4e70-8346-6c4b64f6d193"}, "doc": null, "dimension": 1, "id": "9de10b93-1067-4c06-93da-1255f0f526ff"}, "type": "Grid", "id": "9de10b93-1067-4c06-93da-1255f0f526ff"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "4f27d61d-1e1a-4e70-8346-6c4b64f6d193"}], "id": "8ab229ef-1899-4ce7-9962-e791af13bb29"}, "type": "PlotContext", "id": "8ab229ef-1899-4ce7-9962-e791af13bb29"}, {"attributes": {"plot": {"type": "Plot", "id": "4f27d61d-1e1a-4e70-8346-6c4b64f6d193"}, "location": "min", "bounds": "auto", "doc": null, "id": "aa352cf2-3ae0-4ae4-b7b0-2c6f8efe0a65", "dimension": 1}, "type": "LinearAxis", "id": "aa352cf2-3ae0-4ae4-b7b0-2c6f8efe0a65"}, {"attributes": {"plot": {"type": "Plot", "id": "4f27d61d-1e1a-4e70-8346-6c4b64f6d193"}, "id": "7fb9ccc4-193a-49da-b93c-f87f197122c8", "doc": null}, "type": "ResizeTool", "id": "7fb9ccc4-193a-49da-b93c-f87f197122c8"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "3e3a1f72-2e9a-40f5-988b-408b0af1d0c7"}, {"type": "DataRange1d", "id": "6199530b-fc0a-4212-a099-154855ac47b9"}], "dimensions": ["width", "height"], "id": "da6d4e6d-669e-466c-980c-db81e50b612d"}, "type": "ZoomTool", "id": "da6d4e6d-669e-466c-980c-db81e50b612d"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "3e3a1f72-2e9a-40f5-988b-408b0af1d0c7"}, "axes": [], "title": "Plot", "y_range": {"type": "DataRange1d", "id": "6199530b-fc0a-4212-a099-154855ac47b9"}, "outer_width": 600, "renderers": [{"type": "LinearAxis", "id": "78ef6c3b-4b12-4424-8366-ccbcbb78627b"}, {"type": "LinearAxis", "id": "aa352cf2-3ae0-4ae4-b7b0-2c6f8efe0a65"}, {"type": "Grid", "id": "a2ba7ce7-817d-4efd-9036-f8e54530b8ca"}, {"type": "Grid", "id": "9de10b93-1067-4c06-93da-1255f0f526ff"}, {"type": "BoxSelection", "id": "71174d80-405b-4190-af3b-17ad998194c0"}, {"type": "Legend", "id": "b20035ed-562b-4bc6-83cd-752ea1b79d6c"}, {"type": "Glyph", "id": "e1091698-7733-45c8-b190-407f8cb18ed6"}], "outer_height": 600, "doc": null, "canvas_height": 600, "id": "4f27d61d-1e1a-4e70-8346-6c4b64f6d193", "tools": [{"type": "PanTool", "id": "b1a8fdc3-d9f7-477b-834d-9acfe5c540de"}, {"type": "ZoomTool", "id": "da6d4e6d-669e-466c-980c-db81e50b612d"}, {"type": "PreviewSaveTool", "id": "d64053eb-8c53-40e7-8f4b-9938686f6efd"}, {"type": "ResizeTool", "id": "7fb9ccc4-193a-49da-b93c-f87f197122c8"}, {"type": "BoxSelectTool", "id": "50581dd1-8152-489e-9b15-b621450781a2"}], "canvas_width": 600}, "type": "Plot", "id": "4f27d61d-1e1a-4e70-8346-6c4b64f6d193"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "fddd1227-c7f5-45e9-870d-b8fec06b0ac6"}, "doc": null, "id": "e1091698-7733-45c8-b190-407f8cb18ed6", "xdata_range": {"type": "DataRange1d", "id": "3e3a1f72-2e9a-40f5-988b-408b0af1d0c7"}, "ydata_range": {"type": "DataRange1d", "id": "6199530b-fc0a-4212-a099-154855ac47b9"}, "glyphspec": {"line_color": {"value": "green"}, "line_alpha": 1.0, "fill_color": {"value": "green"}, "fill_alpha": 1.0, "radius": {"units": "screen", "value": 4}, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "type": "circle", "size": {"units": "screen", "field": null, "default": 4}}, "nonselection_glyphspec": {"line_color": {"value": "green"}, "angle_units": "deg", "fill_color": {"value": "green"}, "visible": null, "radius": {"units": "screen", "value": 4}, "line_dash_offset": 0, "line_join": "miter", "size": {"units": "screen", "default": 4, "field": null}, "line_alpha": 0.1, "radius_units": "screen", "end_angle_units": "deg", "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": 1, "type": "circle", "fill_alpha": 0.1, "halign": null, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "margin": null}}, "type": "Glyph", "id": "e1091698-7733-45c8-b190-407f8cb18ed6"}, {"attributes": {"doc": null, "renderers": [{"type": "Glyph", "id": "e1091698-7733-45c8-b190-407f8cb18ed6"}], "id": "50581dd1-8152-489e-9b15-b621450781a2"}, "type": "BoxSelectTool", "id": "50581dd1-8152-489e-9b15-b621450781a2"}, {"attributes": {"plot": {"type": "Plot", "id": "4f27d61d-1e1a-4e70-8346-6c4b64f6d193"}, "location": "min", "bounds": "auto", "doc": null, "id": "78ef6c3b-4b12-4424-8366-ccbcbb78627b", "dimension": 0}, "type": "LinearAxis", "id": "78ef6c3b-4b12-4424-8366-ccbcbb78627b"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "fddd1227-c7f5-45e9-870d-b8fec06b0ac6"}, "columns": ["y"]}], "id": "6199530b-fc0a-4212-a099-154855ac47b9", "doc": null}, "type": "DataRange1d", "id": "6199530b-fc0a-4212-a099-154855ac47b9"}, {"attributes": {"plot": {"type": "Plot", "id": "4f27d61d-1e1a-4e70-8346-6c4b64f6d193"}, "doc": null, "legends": {"compare_event_cos:sym_log_boost_splits1550d0.3m0.1s2": [{"type": "Glyph", "id": "e1091698-7733-45c8-b190-407f8cb18ed6"}]}, "id": "b20035ed-562b-4bc6-83cd-752ea1b79d6c"}, "type": "Legend", "id": "b20035ed-562b-4bc6-83cd-752ea1b79d6c"}, {"attributes": {"plot": {"type": "Plot", "id": "4f27d61d-1e1a-4e70-8346-6c4b64f6d193"}, "dataranges": [], "id": "d64053eb-8c53-40e7-8f4b-9938686f6efd", "doc": null}, "type": "PreviewSaveTool", "id": "d64053eb-8c53-40e7-8f4b-9938686f6efd"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [0.5511551155115512, 0.5510440835266822, 0.7574850299401197, 0.5264873675631622, 0.6510500807754444, 0.7913907284768211, 0.635666836995401, 0.642080378250591, 0.6320754716981133, 0.1078180889115994, 0.6276747503566333, 0.5427830596369921, 0.8578680203045685, 0.4818304172274562, 0.8923076923076922, 0.5722379603399433, 0.9003783102143759, 0.7857829010566763, 0.8249027237354085, 0.7514044943820225, 0.5341745531019978, 0.6822157434402332, 0.667802385008518, 0.7320574162679426, 0.6230769230769231, 0.695, 0.8, 0.641025641025641, 0.9119496855345911, 0.7614213197969544, 0.7266881028938905, 0.6357142857142858, 0.44670050761421315, 0.582010582010582, 0.5654450261780105, 0.8431771894093687, 0.47500000000000003, 0.47706422018348627, 0.4946236559139785, 0.8080133555926544, 0.7799227799227799, 0.6421052631578947, 0.8717948717948717, 0.7719298245614035, 0.5466448445171849, 0.6583850931677018, 0.8727272727272727, 0.7207792207792209, 0.6779661016949152, 0.288135593220339, 0.5897435897435898, 0.08333333333333333, 0.0858085808580858, 0.5051546391752577, 0.4090909090909091, 0.5714285714285714, 0.07142857142857144, 0.2748091603053436, 0.023744292237442923, 0.005893909626719057, 0.2727272727272727, 0.24793388429752064, 0.20000000000000004, 0.03636363636363636, 0.625, 0.0625, 0.01824561403508772, 0.7352941176470588, 0.5625000000000001, 0.6000000000000001, 0.010112359550561797, 0.14285714285714288, 0.018808777429467082, 0.4736842105263158, 0.02749832327297116, 0.75, 0.33043478260869563, 0.00411522633744856, 0.15555555555555556, 0.7116564417177915, 0.0028818443804034585, 0.42857142857142855, 0.5915492957746479, 0.717391304347826, 0.7393939393939394, 0.9242424242424242, 0.8108108108108109, 0.035398230088495575, 0.49438202247191004, 0.7671232876712328, 0.6666666666666666, 0.20390455531453364, 0.5925925925925926, 0.5000000000000001, 0.36111111111111105, 0.24615384615384614, 0.5486111111111112, 0.0040885860306643955, 0.6804123711340205, 0.6363636363636365, 0.272108843537415, 0.014792899408284023, 0.10810810810810811, 0.8169014084507041, 0.7714285714285715, 0.4868421052631579, 0.016824395373291272, 0.35714285714285715], "x": [6.0497334552319577, 6.5957805139613113, 5.855071922202427, 6.3456363608285962, 6.3561076606958915, 6.4232469635335194, 7.0925737159746784, 6.6580110458707482, 5.1647859739235145, 7.8524390853575099, 6.0063531596017325, 5.8833223884882786, 5.9053618480545707, 5.5333894887275203, 5.6629604801359461, 6.2971093199339352, 5.9989365619466826, 6.9828627514689421, 5.9135030056382698, 6.3851943989977258, 6.2126060957515188, 5.8998973535824915, 7.7877968781811706, 5.3612921657094255, 4.9487598903781684, 4.9972122737641147, 4.0943445622221004, 4.6728288344619058, 5.0106352940962555, 4.6539603501575231, 5.1532915944977793, 5.3752784076841653, 4.5849674786705723, 4.7361984483944957, 4.8441870864585912, 5.389071729816501, 3.6109179126442243, 4.3040650932041702, 5.0039463059454592, 5.5683445037610966, 5.0039463059454592, 4.6249728132842707, 4.6443908991413725, 4.5108595065168497, 5.1704839950381514, 5.1873858058407549, 4.6821312271242199, 4.9558270576012609, 2.9957322735539909, 3.6375861597263857, 4.2766661190160553, 2.5649493574615367, 2.6390573296152584, 4.5325994931532563, 3.4965075614664802, 3.1354942159291497, 2.7725887222397811, 4.3174881135363101, 3.7376696182833684, 3.044522437723423, 2.7725887222397811, 4.5538768916005408, 1.6094379124341003, 2.9444389791664403, 4.2766661190160553, 2.4849066497880004, 3.713572066704308, 3.2580965380214821, 2.6390573296152584, 3.044522437723423, 2.9444389791664403, 2.3978952727983707, 2.9957322735539909, 3.4011973816621555, 4.3438054218536841, 4.4773368144782069, 4.5325994931532563, 2.4849066497880004, 3.1780538303479458, 4.2626798770413155, 2.4849066497880004, 2.7080502011022101, 3.3322045101752038, 3.8286413964890951, 4.4067192472642533, 4.1896547420264252, 3.044522437723423, 2.7080502011022101, 3.3322045101752038, 3.5553480614894135, 3.8501476017100584, 4.2341065045972597, 2.8903717578961645, 3.3672958299864741, 2.9444389791664403, 3.4657359027997265, 4.3820266346738812, 3.3672958299864741, 4.3307333402863311, 2.3025850929940459, 3.1780538303479458, 3.044522437723423, 2.5649493574615367, 3.6888794541139363, 3.5553480614894135, 4.1108738641733114, 2.5649493574615367, 3.5553480614894135]}, "id": "fddd1227-c7f5-45e9-870d-b8fec06b0ac6"}, "type": "ColumnDataSource", "id": "fddd1227-c7f5-45e9-870d-b8fec06b0ac6"}];
    var modeltype = "PlotContext";
    var elementid = "b8649332-ecec-4814-b97e-a49f2399ea14";
    var plotID = "4f27d61d-1e1a-4e70-8346-6c4b64f6d193";
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