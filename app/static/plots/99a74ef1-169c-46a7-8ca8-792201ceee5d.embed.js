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

    var all_models = [{"attributes": {"plot": {"type": "Plot", "id": "99a74ef1-169c-46a7-8ca8-792201ceee5d"}, "id": "8037b5bc-896b-4f44-a1ad-3998ac481ee4", "doc": null}, "type": "ResizeTool", "id": "8037b5bc-896b-4f44-a1ad-3998ac481ee4"}, {"attributes": {"doc": null, "renderers": [{"type": "Glyph", "id": "b1896c46-9fb6-45bc-bb2d-ecf29cf82431"}, {"type": "Glyph", "id": "62bd7f66-8311-43ed-8421-82661d53e67d"}], "id": "60883843-ede6-49d4-9d83-a9536e150248"}, "type": "BoxSelectTool", "id": "60883843-ede6-49d4-9d83-a9536e150248"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "f6fb4455-b7fc-41b3-a97e-d517a9c59f81"}, {"type": "DataRange1d", "id": "7695e692-fa40-4332-a7d0-796909f1f557"}], "dimensions": ["width", "height"], "doc": null, "id": "4464c386-2d3e-4bd5-a842-104d29a7d982"}, "type": "PanTool", "id": "4464c386-2d3e-4bd5-a842-104d29a7d982"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "f6fb4455-b7fc-41b3-a97e-d517a9c59f81"}, "axes": [], "title": "Plot", "y_range": {"type": "DataRange1d", "id": "7695e692-fa40-4332-a7d0-796909f1f557"}, "outer_width": 600, "renderers": [{"type": "LinearAxis", "id": "1085e21b-c3fc-4044-9cac-d425e09505df"}, {"type": "LinearAxis", "id": "1e844c0c-1835-4969-972c-94973a89ee66"}, {"type": "Grid", "id": "a633700c-d70e-4e19-be95-34ff8f5878c6"}, {"type": "Grid", "id": "8e56a9cc-b451-4bb8-ab5d-0d734f203d64"}, {"type": "BoxSelection", "id": "31f179a6-6de0-48d3-80c5-46e8fd8bd3e9"}, {"type": "Legend", "id": "c207382f-e264-400a-84ac-f719077efdd7"}, {"type": "Glyph", "id": "b1896c46-9fb6-45bc-bb2d-ecf29cf82431"}, {"type": "Glyph", "id": "62bd7f66-8311-43ed-8421-82661d53e67d"}], "outer_height": 600, "doc": null, "canvas_height": 600, "id": "99a74ef1-169c-46a7-8ca8-792201ceee5d", "tools": [{"type": "PanTool", "id": "4464c386-2d3e-4bd5-a842-104d29a7d982"}, {"type": "ZoomTool", "id": "16bb3204-ef11-4e25-a4af-26ac7b0afe5b"}, {"type": "PreviewSaveTool", "id": "216f0710-3147-4fcb-83c4-da62379d4783"}, {"type": "ResizeTool", "id": "8037b5bc-896b-4f44-a1ad-3998ac481ee4"}, {"type": "BoxSelectTool", "id": "60883843-ede6-49d4-9d83-a9536e150248"}], "canvas_width": 600}, "type": "Plot", "id": "99a74ef1-169c-46a7-8ca8-792201ceee5d"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "3277bb97-7723-4f75-8b48-5cb90802e4e9"}, "doc": null, "id": "b1896c46-9fb6-45bc-bb2d-ecf29cf82431", "xdata_range": {"type": "DataRange1d", "id": "f6fb4455-b7fc-41b3-a97e-d517a9c59f81"}, "ydata_range": {"type": "DataRange1d", "id": "7695e692-fa40-4332-a7d0-796909f1f557"}, "glyphspec": {"line_color": {"value": "green"}, "line_alpha": 1.0, "fill_color": {"value": "green"}, "fill_alpha": 1.0, "radius": {"units": "screen", "value": 4}, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "type": "circle", "size": {"units": "screen", "field": null, "default": 4}}, "nonselection_glyphspec": {"line_color": {"value": "green"}, "angle_units": "deg", "fill_color": {"value": "green"}, "visible": null, "radius": {"units": "screen", "value": 4}, "line_dash_offset": 0, "line_join": "miter", "size": {"units": "screen", "default": 4, "field": null}, "line_alpha": 0.1, "radius_units": "screen", "end_angle_units": "deg", "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": 1, "type": "circle", "fill_alpha": 0.1, "halign": null, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "margin": null}}, "type": "Glyph", "id": "b1896c46-9fb6-45bc-bb2d-ecf29cf82431"}, {"attributes": {"doc": null, "tool": {"type": "BoxSelectTool", "id": "60883843-ede6-49d4-9d83-a9536e150248"}, "id": "31f179a6-6de0-48d3-80c5-46e8fd8bd3e9"}, "type": "BoxSelection", "id": "31f179a6-6de0-48d3-80c5-46e8fd8bd3e9"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "f6fb4455-b7fc-41b3-a97e-d517a9c59f81"}, {"type": "DataRange1d", "id": "7695e692-fa40-4332-a7d0-796909f1f557"}], "dimensions": ["width", "height"], "id": "16bb3204-ef11-4e25-a4af-26ac7b0afe5b"}, "type": "ZoomTool", "id": "16bb3204-ef11-4e25-a4af-26ac7b0afe5b"}, {"attributes": {"plot": {"type": "Plot", "id": "99a74ef1-169c-46a7-8ca8-792201ceee5d"}, "doc": null, "legends": {"compare_event:splits1540d0.2m0.1s2": [{"type": "Glyph", "id": "62bd7f66-8311-43ed-8421-82661d53e67d"}], "compare_event:sym_log_boost_splits1550d0.3m0.1s2": [{"type": "Glyph", "id": "b1896c46-9fb6-45bc-bb2d-ecf29cf82431"}]}, "id": "c207382f-e264-400a-84ac-f719077efdd7"}, "type": "Legend", "id": "c207382f-e264-400a-84ac-f719077efdd7"}, {"attributes": {"plot": {"type": "Plot", "id": "99a74ef1-169c-46a7-8ca8-792201ceee5d"}, "doc": null, "dimension": 0, "id": "a633700c-d70e-4e19-be95-34ff8f5878c6"}, "type": "Grid", "id": "a633700c-d70e-4e19-be95-34ff8f5878c6"}, {"attributes": {"plot": {"type": "Plot", "id": "99a74ef1-169c-46a7-8ca8-792201ceee5d"}, "location": "min", "bounds": "auto", "doc": null, "id": "1e844c0c-1835-4969-972c-94973a89ee66", "dimension": 1}, "type": "LinearAxis", "id": "1e844c0c-1835-4969-972c-94973a89ee66"}, {"attributes": {"plot": {"type": "Plot", "id": "99a74ef1-169c-46a7-8ca8-792201ceee5d"}, "dataranges": [], "id": "216f0710-3147-4fcb-83c4-da62379d4783", "doc": null}, "type": "PreviewSaveTool", "id": "216f0710-3147-4fcb-83c4-da62379d4783"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [0.6451612903225806, 0.2735042735042735, 0.5668449197860963, 0.08383233532934133, 0.08201892744479496, 0.5096153846153847, 0.5757575757575758, 0.5454545454545454, 0.7586206896551724, 0.44594594594594594, 0.006829046209879353, 0.004851425106124924, 0.4827586206896552, 0.22031823745410037, 0.1818181818181818, 0.326530612244898, 0.5303030303030303, 0.3333333333333333, 0.676923076923077, 0.5625, 0.5853658536585367, 0.631578947368421, 0.002664298401420959, 0.02192982456140351, 0.4423076923076923, 0.10169491525423728, 0.8, 0.3228346456692914, 0.0019240019240019239, 0.1443298969072165, 0.7407407407407407, 0.6, 0.14285714285714288, 0.022857142857142857, 0.7010309278350515, 0.745945945945946, 0.9117647058823529, 0.8108108108108109, 0.0032206119162640897, 0.5, 0.8533333333333333, 0.011730205278592374, 0.7457627118644067, 0.07692307692307693, 0.888888888888889, 0.20659340659340658, 0.5384615384615385, 0.5, 0.3516483516483516, 0.3392857142857143, 0.5473684210526316, 0.44067796610169496, 0.6258503401360545, 0.6666666666666667, 0.016997167138810197, 0.20833333333333331, 0.8461538461538461, 0.7407407407407407, 0.522875816993464, 0.021116138763197585, 0.15980629539951574, 0.47717842323651455, 0.3673163418290854, 0.7668097281831187, 0.5118858954041204, 0.6701119724375538, 0.8186119873817035, 0.6793697325027482, 0.6717451523545707, 0.06091370558375635, 0.2671437090041741, 0.6314363143631435, 0.568695652173913, 0.8477987421383648, 0.6004056795131846, 0.8645833333333333, 0.5593525179856115, 0.6964560862865948, 0.792910447761194, 0.8071519795657727, 0.7474472430224642, 0.3421461897356143, 0.6706408345752608, 0.6060288335517693, 0.3914209115281501, 0.624, 0.6789838337182449, 0.8095238095238095, 0.5650557620817844, 0.9148264984227129, 0.6985645933014354, 0.74375, 0.8172043010752689, 0.547085201793722, 0.49090909090909085, 0.5662100456621005, 0.8178137651821862, 0.6499999999999999, 0.4716981132075472, 0.6106194690265487, 0.8092105263157896, 0.8106060606060606, 0.6731707317073171, 0.8376068376068375, 0.7685589519650655, 0.7989690721649485, 0.6303030303030304, 0.5806451612903226], "x": [2.9957322735539909, 3.6375861597263857, 4.2766661190160553, 2.5649493574615367, 2.6390573296152584, 4.5325994931532563, 3.4965075614664802, 3.1354942159291497, 2.7725887222397811, 4.3174881135363101, 3.7376696182833684, 3.044522437723423, 2.7725887222397811, 4.5538768916005408, 1.6094379124341003, 2.9444389791664403, 4.2766661190160553, 2.4849066497880004, 3.713572066704308, 3.2580965380214821, 2.6390573296152584, 3.044522437723423, 2.3978952727983707, 2.9957322735539909, 3.4011973816621555, 4.3438054218536841, 4.4773368144782069, 4.5325994931532563, 2.4849066497880004, 3.1780538303479458, 4.2626798770413155, 2.4849066497880004, 2.7080502011022101, 3.3322045101752038, 3.8286413964890951, 4.4067192472642533, 4.1896547420264252, 3.044522437723423, 2.7080502011022101, 3.3322045101752038, 3.5553480614894135, 2.4849066497880004, 3.8501476017100584, 2.3978952727983707, 2.3025850929940459, 4.2341065045972597, 2.8903717578961645, 3.3672958299864741, 2.9444389791664403, 3.4657359027997265, 4.3820266346738812, 3.3672958299864741, 4.3307333402863311, 2.3025850929940459, 3.044522437723423, 2.5649493574615367, 3.6888794541139363, 3.5553480614894135, 4.1108738641733114, 2.5649493574615367, 3.5553480614894135, 6.0497334552319577, 6.5957805139613113, 5.855071922202427, 6.3456363608285962, 6.3561076606958915, 6.4232469635335194, 7.0925737159746784, 6.6580110458707482, 5.1647859739235145, 7.8524390853575099, 6.0063531596017325, 5.8833223884882786, 5.9053618480545707, 5.5333894887275203, 5.6629604801359461, 6.2971093199339352, 5.9989365619466826, 6.9828627514689421, 5.9135030056382698, 6.3851943989977258, 6.2126060957515188, 5.8998973535824915, 7.7877968781811706, 5.3612921657094255, 4.9487598903781684, 4.9972122737641147, 4.0943445622221004, 4.6728288344619058, 5.0106352940962555, 4.6539603501575231, 5.1532915944977793, 5.3752784076841653, 4.5849674786705723, 4.7361984483944957, 4.8441870864585912, 5.389071729816501, 3.6109179126442243, 4.3040650932041702, 5.0039463059454592, 5.5683445037610966, 5.0039463059454592, 4.6249728132842707, 4.6443908991413725, 4.5108595065168497, 5.1704839950381514, 5.1873858058407549, 4.6821312271242199]}, "id": "b71eae9b-912c-4de9-8cf7-ec5d19d46997"}, "type": "ColumnDataSource", "id": "b71eae9b-912c-4de9-8cf7-ec5d19d46997"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [0.6804123711340205, 0.6666666666666666, 0.75, 0.02749832327297116, 0.009378663540445484, 0.023744292237442923, 0.4090909090909091, 0.0015704750687082843, 0.7352941176470588, 0.0011337868480725624, 0.007962840079628402, 0.15555555555555556, 0.014792899408284023, 0.36111111111111105, 0.5915492957746479, 0.10810810810810811, 0.005893909626719057, 0.42857142857142855, 0.5897435897435898, 0.33043478260869563, 0.0858085808580858, 0.6000000000000001, 0.4736842105263158, 0.5925925925925926, 0.08333333333333333, 0.011516314779270634, 0.20390455531453364, 0.5051546391752577, 0.717391304347826, 0.24615384615384614, 0.4868421052631579, 0.0625, 0.0028818443804034585, 0.0040885860306643955, 0.5486111111111112, 0.016824395373291272, 0.35714285714285715, 0.012081274025260847, 0.24793388429752064, 0.49438202247191004, 0.7116564417177915, 0.6779661016949152, 0.7714285714285715, 0.7671232876712328, 0.625, 0.272108843537415, 0.010112359550561797, 0.5625000000000001, 0.9242424242424242, 0.019896193771626297, 0.01824561403508772, 0.8169014084507041, 0.5714285714285714, 0.7393939393939394, 0.20000000000000004, 0.288135593220339, 0.6363636363636365, 0.03636363636363636, 0.8108108108108109, 0.5000000000000001, 0.5510440835266822, 0.7857829010566763, 0.635666836995401, 0.9003783102143759, 0.8249027237354085, 0.7574850299401197, 0.5341745531019978, 0.7913907284768211, 0.8923076923076922, 0.6276747503566333, 0.5427830596369921, 0.5511551155115512, 0.642080378250591, 0.5722379603399433, 0.667802385008518, 0.6510500807754444, 0.1078180889115994, 0.5264873675631622, 0.8578680203045685, 0.6822157434402332, 0.4818304172274562, 0.6320754716981133, 0.7514044943820225, 0.7320574162679426, 0.6230769230769231, 0.695, 0.8, 0.641025641025641, 0.9119496855345911, 0.7614213197969544, 0.7266881028938905, 0.6357142857142858, 0.44670050761421315, 0.582010582010582, 0.5654450261780105, 0.8431771894093687, 0.47500000000000003, 0.47706422018348627, 0.4946236559139785, 0.8080133555926544, 0.7799227799227799, 0.6421052631578947, 0.8717948717948717, 0.7719298245614035, 0.5466448445171849, 0.6583850931677018, 0.8727272727272727, 0.7207792207792209], "x": [4.3307333402863311, 3.8501476017100584, 4.4773368144782069, 4.3438054218536841, 2.7725887222397811, 3.7376696182833684, 3.4965075614664802, 2.3978952727983707, 3.2580965380214821, 2.7080502011022101, 2.9957322735539909, 3.1780538303479458, 3.044522437723423, 2.9444389791664403, 3.3322045101752038, 2.5649493574615367, 3.044522437723423, 2.7080502011022101, 4.2766661190160553, 4.5325994931532563, 2.6390573296152584, 3.044522437723423, 3.4011973816621555, 2.8903717578961645, 2.5649493574615367, 2.4849066497880004, 4.2341065045972597, 4.5325994931532563, 3.8286413964890951, 3.4657359027997265, 4.1108738641733114, 2.4849066497880004, 2.4849066497880004, 3.3672958299864741, 4.3820266346738812, 2.5649493574615367, 3.5553480614894135, 2.7725887222397811, 4.5538768916005408, 3.3322045101752038, 4.2626798770413155, 2.9957322735539909, 3.5553480614894135, 3.5553480614894135, 4.2766661190160553, 3.1780538303479458, 2.9444389791664403, 2.6390573296152584, 4.1896547420264252, 4.3174881135363101, 3.713572066704308, 3.6888794541139363, 3.1354942159291497, 4.4067192472642533, 1.6094379124341003, 3.6375861597263857, 2.3025850929940459, 2.9444389791664403, 3.044522437723423, 3.3672958299864741, 6.5957805139613113, 6.9828627514689421, 7.0925737159746784, 5.9989365619466826, 5.9135030056382698, 5.855071922202427, 6.2126060957515188, 6.4232469635335194, 5.6629604801359461, 6.0063531596017325, 5.8833223884882786, 6.0497334552319577, 6.6580110458707482, 6.2971093199339352, 7.7877968781811706, 6.3561076606958915, 7.8524390853575099, 6.3456363608285962, 5.9053618480545707, 5.8998973535824915, 5.5333894887275203, 5.1647859739235145, 6.3851943989977258, 5.3612921657094255, 4.9487598903781684, 4.9972122737641147, 4.0943445622221004, 4.6728288344619058, 5.0106352940962555, 4.6539603501575231, 5.1532915944977793, 5.3752784076841653, 4.5849674786705723, 4.7361984483944957, 4.8441870864585912, 5.389071729816501, 3.6109179126442243, 4.3040650932041702, 5.0039463059454592, 5.5683445037610966, 5.0039463059454592, 4.6249728132842707, 4.6443908991413725, 4.5108595065168497, 5.1704839950381514, 5.1873858058407549, 4.6821312271242199, 4.9558270576012609]}, "id": "3277bb97-7723-4f75-8b48-5cb90802e4e9"}, "type": "ColumnDataSource", "id": "3277bb97-7723-4f75-8b48-5cb90802e4e9"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "99a74ef1-169c-46a7-8ca8-792201ceee5d"}], "id": "47c1500c-ad34-4b44-a0db-23213883107c"}, "type": "PlotContext", "id": "47c1500c-ad34-4b44-a0db-23213883107c"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "3277bb97-7723-4f75-8b48-5cb90802e4e9"}, "columns": ["y"]}, {"ref": {"type": "ColumnDataSource", "id": "b71eae9b-912c-4de9-8cf7-ec5d19d46997"}, "columns": ["y"]}], "id": "7695e692-fa40-4332-a7d0-796909f1f557", "doc": null}, "type": "DataRange1d", "id": "7695e692-fa40-4332-a7d0-796909f1f557"}, {"attributes": {"plot": {"type": "Plot", "id": "99a74ef1-169c-46a7-8ca8-792201ceee5d"}, "doc": null, "dimension": 1, "id": "8e56a9cc-b451-4bb8-ab5d-0d734f203d64"}, "type": "Grid", "id": "8e56a9cc-b451-4bb8-ab5d-0d734f203d64"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "b71eae9b-912c-4de9-8cf7-ec5d19d46997"}, "doc": null, "id": "62bd7f66-8311-43ed-8421-82661d53e67d", "xdata_range": {"type": "DataRange1d", "id": "f6fb4455-b7fc-41b3-a97e-d517a9c59f81"}, "ydata_range": {"type": "DataRange1d", "id": "7695e692-fa40-4332-a7d0-796909f1f557"}, "glyphspec": {"line_color": {"value": "blue"}, "line_alpha": 1.0, "fill_color": {"value": "blue"}, "fill_alpha": 1.0, "radius": {"units": "screen", "value": 4}, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "type": "circle", "size": {"units": "screen", "field": null, "default": 4}}, "nonselection_glyphspec": {"line_color": {"value": "blue"}, "angle_units": "deg", "fill_color": {"value": "blue"}, "visible": null, "radius": {"units": "screen", "value": 4}, "line_dash_offset": 0, "line_join": "miter", "size": {"units": "screen", "default": 4, "field": null}, "line_alpha": 0.1, "radius_units": "screen", "end_angle_units": "deg", "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": 1, "type": "circle", "fill_alpha": 0.1, "halign": null, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "margin": null}}, "type": "Glyph", "id": "62bd7f66-8311-43ed-8421-82661d53e67d"}, {"attributes": {"plot": {"type": "Plot", "id": "99a74ef1-169c-46a7-8ca8-792201ceee5d"}, "location": "min", "bounds": "auto", "doc": null, "id": "1085e21b-c3fc-4044-9cac-d425e09505df", "dimension": 0}, "type": "LinearAxis", "id": "1085e21b-c3fc-4044-9cac-d425e09505df"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "3277bb97-7723-4f75-8b48-5cb90802e4e9"}, "columns": ["x"]}, {"ref": {"type": "ColumnDataSource", "id": "b71eae9b-912c-4de9-8cf7-ec5d19d46997"}, "columns": ["x"]}], "id": "f6fb4455-b7fc-41b3-a97e-d517a9c59f81", "doc": null}, "type": "DataRange1d", "id": "f6fb4455-b7fc-41b3-a97e-d517a9c59f81"}];
    var modeltype = "PlotContext";
    var elementid = "6906c7d5-bb57-4fbc-b599-e82b512ce1b0";
    var plotID = "99a74ef1-169c-46a7-8ca8-792201ceee5d";
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