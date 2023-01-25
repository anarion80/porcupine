function plate_outline_fn(){
    return new CSG.Path2D([[138.8685029,-146.0833979],[155.1256838,-141.1130789]]).appendArc([156.3743603,-141.777012],{"radius":1,"clockwise":true,"large":false}).appendPoint([160.4928598,-155.2480172]).appendArc([161.7798784,-155.8993766],{"radius":1,"clockwise":false,"large":false}).appendArc([273.0131169,-183.078129],{"radius":105,"clockwise":true,"large":false}).appendArc([274.4488741,-183.10035],{"radius":1,"clockwise":false,"large":false}).appendPoint([293.3008849,-164.2483392]).appendArc([293.1830241,-162.7332787],{"radius":1,"clockwise":false,"large":false}).appendPoint([250.8972288,-131.8939682]).appendArc([250.5579981,-131.4574052],{"radius":1,"clockwise":true,"large":false}).appendPoint([250.0763495,-130.2532837]).appendArc([250.0048262,-129.8818929],{"radius":1,"clockwise":true,"large":false}).appendPoint([250.0048262,-77.8244754]).appendArc([249.0048262,-76.8244754],{"radius":1,"clockwise":false,"large":false}).appendPoint([231.6048262,-76.8244754]).appendArc([230.6048262,-75.8244754],{"radius":1,"clockwise":true,"large":false}).appendPoint([230.6048262,-75.3911421]).appendArc([229.6048262,-74.3911421],{"radius":1,"clockwise":false,"large":false}).appendPoint([208.7914594,-74.3911421]).appendArc([207.7952647,-73.4782978],{"radius":1,"clockwise":true,"large":false}).appendPoint([207.54424,-70.6090716]).appendArc([206.4608896,-69.7000326],{"radius":1,"clockwise":false,"large":false}).appendPoint([188.330146,-71.2862672]).appendArc([187.421107,-72.3696176],{"radius":1,"clockwise":false,"large":false}).appendPoint([187.6781784,-75.3079569]).appendArc([186.8556319,-76.3799204],{"radius":1,"clockwise":true,"large":false}).appendPoint([165.6060743,-80.1267907]).appendArc([164.7949147,-81.2852467],{"radius":1,"clockwise":false,"large":false}).appendPoint([167.6831138,-97.6650381]).appendArc([166.9906777,-98.7949911],{"radius":1,"clockwise":true,"large":false}).appendPoint([128.0507498,-110.7001218]).appendArc([127.3868167,-111.9487983],{"radius":1,"clockwise":false,"large":false}).appendPoint([137.6198264,-145.4194648]).appendArc([138.8685029,-146.0833979],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
.subtract(
    CAG.circle({"center":[268.918931,-158.7196763],"radius":1.05})
.union(
    CAG.circle({"center":[228.6048262,-130.7411421],"radius":1.05})
).union(
    CAG.circle({"center":[229.9648262,-86.8244754],"radius":1.05})
).union(
    CAG.circle({"center":[178.4978818,-141.2873232],"radius":1.05})
).union(
    CAG.circle({"center":[168.8461445,-108.292052],"radius":1.05})
).union(
    new CSG.Path2D([[276.5556842,-176.2559244],[286.4551791,-166.3564295]]).appendPoint([276.5556842,-156.4569346]).appendPoint([266.6561893,-166.3564295]).appendPoint([276.5556842,-176.2559244]).close().innerToCAG()
).union(
    new CSG.Path2D([[261.7909386,-162.6231913],[268.7909386,-150.4988357]]).appendPoint([256.666583,-143.4988357]).appendPoint([249.666583,-155.6231913]).appendPoint([261.7909386,-162.6231913]).close().innerToCAG()
).union(
    new CSG.Path2D([[170.5567303,-96.1099382],[184.3440388,-93.6788637]]).appendPoint([181.9129643,-79.8915552]).appendPoint([168.1256558,-82.3226297]).appendPoint([170.5567303,-96.1099382]).close().innerToCAG()
).union(
    new CSG.Path2D([[173.5087493,-112.85167],[187.2960578,-110.4205955]]).appendPoint([184.8649833,-96.633287]).appendPoint([171.0776748,-99.0643615]).appendPoint([173.5087493,-112.85167]).close().innerToCAG()
).union(
    new CSG.Path2D([[176.4607683,-129.5934018],[190.2480768,-127.1623273]]).appendPoint([187.8170023,-113.3750188]).appendPoint([174.0296938,-115.8060933]).appendPoint([176.4607683,-129.5934018]).close().innerToCAG()
).union(
    new CSG.Path2D([[163.522259,-153.1856728],[176.9105256,-149.092469]]).appendPoint([172.8173218,-135.7042024]).appendPoint([159.4290552,-139.7974062]).appendPoint([163.522259,-153.1856728]).close().innerToCAG()
).union(
    new CSG.Path2D([[140.3821496,-142.4835543],[153.7704162,-138.3903505]]).appendPoint([149.6772124,-125.0020839]).appendPoint([136.2889458,-129.0952877]).appendPoint([140.3821496,-142.4835543]).close().innerToCAG()
).union(
    new CSG.Path2D([[158.55194,-136.9284919],[171.9402066,-132.8352881]]).appendPoint([167.8470028,-119.4470215]).appendPoint([154.4587362,-123.5402253]).appendPoint([158.55194,-136.9284919]).close().innerToCAG()
).union(
    new CSG.Path2D([[153.581621,-120.671311],[166.9698876,-116.5781072]]).appendPoint([162.8766838,-103.1898406]).appendPoint([149.4884172,-107.2830444]).appendPoint([153.581621,-120.671311]).close().innerToCAG()
).union(
    new CSG.Path2D([[135.4118306,-126.2263734],[148.8000972,-122.1331696]]).appendPoint([144.7068934,-108.744903]).appendPoint([131.3186268,-112.8381068]).appendPoint([135.4118306,-126.2263734]).close().innerToCAG()
).union(
    new CSG.Path2D([[232.5048262,-93.8244754],[246.5048262,-93.8244754]]).appendPoint([246.5048262,-79.8244754]).appendPoint([232.5048262,-79.8244754]).appendPoint([232.5048262,-93.8244754]).close().innerToCAG()
).union(
    new CSG.Path2D([[232.5048262,-110.8244754],[246.5048262,-110.8244754]]).appendPoint([246.5048262,-96.8244754]).appendPoint([232.5048262,-96.8244754]).appendPoint([232.5048262,-110.8244754]).close().innerToCAG()
).union(
    new CSG.Path2D([[232.5048262,-127.8244754],[246.5048262,-127.8244754]]).appendPoint([246.5048262,-113.8244754]).appendPoint([232.5048262,-113.8244754]).appendPoint([232.5048262,-127.8244754]).close().innerToCAG()
).union(
    new CSG.Path2D([[213.5048262,-90.9911421],[227.5048262,-90.9911421]]).appendPoint([227.5048262,-76.9911421]).appendPoint([213.5048262,-76.9911421]).appendPoint([213.5048262,-90.9911421]).close().innerToCAG()
).union(
    new CSG.Path2D([[213.5048262,-107.9911421],[227.5048262,-107.9911421]]).appendPoint([227.5048262,-93.9911421]).appendPoint([213.5048262,-93.9911421]).appendPoint([213.5048262,-107.9911421]).close().innerToCAG()
).union(
    new CSG.Path2D([[213.5048262,-124.9911421],[227.5048262,-124.9911421]]).appendPoint([227.5048262,-110.9911421]).appendPoint([213.5048262,-110.9911421]).appendPoint([213.5048262,-124.9911421]).close().innerToCAG()
).union(
    new CSG.Path2D([[231.2979323,-149.9925746],[244.8208939,-153.6160412]]).appendPoint([248.4443605,-140.0930796]).appendPoint([234.9213989,-136.469613]).appendPoint([231.2979323,-149.9925746]).close().innerToCAG()
).union(
    new CSG.Path2D([[191.8689402,-87.6400721],[205.815666,-86.4198917]]).appendPoint([204.5954856,-72.4731659]).appendPoint([190.6487598,-73.6933463]).appendPoint([191.8689402,-87.6400721]).close().innerToCAG()
).union(
    new CSG.Path2D([[194.4337576,-121.5455541],[208.3804834,-120.3253737]]).appendPoint([207.160303,-106.3786479]).appendPoint([193.2135772,-107.5988283]).appendPoint([194.4337576,-121.5455541]).close().innerToCAG()
).union(
    new CSG.Path2D([[212.2939876,-147.8806701],[226.2407134,-149.1008505]]).appendPoint([227.4608938,-135.1541247]).appendPoint([213.514168,-133.9339443]).appendPoint([212.2939876,-147.8806701]).close().innerToCAG()
).union(
    new CSG.Path2D([[193.1513489,-104.5928131],[207.0980747,-103.3726327]]).appendPoint([205.8778943,-89.4259069]).appendPoint([191.9311685,-90.6460873]).appendPoint([193.1513489,-104.5928131]).close().innerToCAG()
)).extrude({ offset: [0, 0, 1] });
}




                function top_plate_case_fn() {
                    

                // creating part 0 of case top_plate
                let top_plate__part_0 = plate_outline_fn();

                // make sure that rotations are relative
                let top_plate__part_0_bounds = top_plate__part_0.getBounds();
                let top_plate__part_0_x = top_plate__part_0_bounds[0].x + (top_plate__part_0_bounds[1].x - top_plate__part_0_bounds[0].x) / 2
                let top_plate__part_0_y = top_plate__part_0_bounds[0].y + (top_plate__part_0_bounds[1].y - top_plate__part_0_bounds[0].y) / 2
                top_plate__part_0 = translate([-top_plate__part_0_x, -top_plate__part_0_y, 0], top_plate__part_0);
                top_plate__part_0 = rotate([0,0,0], top_plate__part_0);
                top_plate__part_0 = translate([top_plate__part_0_x, top_plate__part_0_y, 0], top_plate__part_0);

                top_plate__part_0 = translate([0,0,0], top_plate__part_0);
                let result = top_plate__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return top_plate_case_fn();
            }

        