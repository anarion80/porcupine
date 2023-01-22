function plate_outline_fn(){
    return new CSG.Path2D([[143.8388219,-162.3405788],[160.0960027,-157.3702598]]).appendArc([161.3446792,-158.0341929],{"radius":1,"clockwise":true,"large":false}).appendPoint([165.4631787,-171.505198]).appendArc([166.7501973,-172.1565574],{"radius":1,"clockwise":false,"large":false}).appendArc([277.9834358,-199.3353098],{"radius":105,"clockwise":true,"large":false}).appendArc([279.419193,-199.3575308],{"radius":1,"clockwise":false,"large":false}).appendPoint([298.2712039,-180.50552]).appendArc([298.1533431,-178.9904595],{"radius":1,"clockwise":false,"large":false}).appendPoint([255.8675478,-148.151149]).appendArc([255.5283171,-147.714586],{"radius":1,"clockwise":true,"large":false}).appendPoint([255.0466685,-146.5104644]).appendArc([254.9751452,-146.1390737],{"radius":1,"clockwise":true,"large":false}).appendPoint([254.9751452,-94.0816562]).appendArc([253.9751452,-93.0816562],{"radius":1,"clockwise":false,"large":false}).appendPoint([236.5751451,-93.0816562]).appendArc([235.5751451,-92.0816562],{"radius":1,"clockwise":true,"large":false}).appendPoint([235.5751451,-91.6483229]).appendArc([234.5751451,-90.6483229],{"radius":1,"clockwise":false,"large":false}).appendPoint([213.7617784,-90.6483229]).appendArc([212.7655837,-89.7354786],{"radius":1,"clockwise":true,"large":false}).appendPoint([212.514559,-86.8662525]).appendArc([211.4312086,-85.9572135],{"radius":1,"clockwise":false,"large":false}).appendPoint([193.300465,-87.5434481]).appendArc([192.391426,-88.6267985],{"radius":1,"clockwise":false,"large":false}).appendPoint([192.6484974,-91.5651379]).appendArc([191.8259509,-92.6371014],{"radius":1,"clockwise":true,"large":false}).appendPoint([170.5763933,-96.3839717]).appendArc([169.7652337,-97.5424277],{"radius":1,"clockwise":false,"large":false}).appendPoint([172.6534328,-113.922219]).appendArc([171.9609967,-115.052172],{"radius":1,"clockwise":true,"large":false}).appendPoint([133.0210688,-126.9573027]).appendArc([132.3571357,-128.2059792],{"radius":1,"clockwise":false,"large":false}).appendPoint([142.5901454,-161.6766457]).appendArc([143.8388219,-162.3405788],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
.subtract(
    CAG.circle({"center":[273.88925,-174.9768571],"radius":1.05})
.union(
    CAG.circle({"center":[233.5751451,-146.9983229],"radius":1.05})
).union(
    CAG.circle({"center":[234.9351452,-103.0816562],"radius":1.05})
).union(
    CAG.circle({"center":[183.4682007,-157.5445041],"radius":1.05})
).union(
    CAG.circle({"center":[173.8164635,-124.549233],"radius":1.05})
).union(
    new CSG.Path2D([[281.5260032,-192.5131052],[291.4254981,-182.6136103]]).appendPoint([281.5260032,-172.7141154]).appendPoint([271.6265083,-182.6136103]).appendPoint([281.5260032,-192.5131052]).close().innerToCAG()
).union(
    new CSG.Path2D([[266.7612576,-178.8803721],[273.7612576,-166.7560165]]).appendPoint([261.636902,-159.7560165]).appendPoint([254.636902,-171.8803721]).appendPoint([266.7612576,-178.8803721]).close().innerToCAG()
).union(
    new CSG.Path2D([[175.5270493,-112.3671192],[189.3143578,-109.9360447]]).appendPoint([186.8832833,-96.1487362]).appendPoint([173.0959748,-98.5798107]).appendPoint([175.5270493,-112.3671192]).close().innerToCAG()
).union(
    new CSG.Path2D([[178.4790683,-129.108851],[192.2663768,-126.6777765]]).appendPoint([189.8353023,-112.890468]).appendPoint([176.0479938,-115.3215425]).appendPoint([178.4790683,-129.108851]).close().innerToCAG()
).union(
    new CSG.Path2D([[181.4310873,-145.8505828],[195.2183958,-143.4195083]]).appendPoint([192.7873213,-129.6321998]).appendPoint([179.0000128,-132.0632743]).appendPoint([181.4310873,-145.8505828]).close().innerToCAG()
).union(
    new CSG.Path2D([[163.5222589,-153.1856728],[176.9105255,-149.092469]]).appendPoint([172.8173217,-135.7042024]).appendPoint([159.4290551,-139.7974062]).appendPoint([163.5222589,-153.1856728]).close().innerToCAG()
).union(
    new CSG.Path2D([[168.4925779,-169.4428537],[181.8808445,-165.3496499]]).appendPoint([177.7876407,-151.9613833]).appendPoint([164.3993741,-156.0545871]).appendPoint([168.4925779,-169.4428537]).close().innerToCAG()
).union(
    new CSG.Path2D([[145.3524686,-158.7407352],[158.7407352,-154.6475314]]).appendPoint([154.6475314,-141.2592648]).appendPoint([141.2592648,-145.3524686]).appendPoint([145.3524686,-158.7407352]).close().innerToCAG()
).union(
    new CSG.Path2D([[140.3821496,-142.4835543],[153.7704162,-138.3903505]]).appendPoint([149.6772124,-125.0020839]).appendPoint([136.2889458,-129.0952877]).appendPoint([140.3821496,-142.4835543]).close().innerToCAG()
).union(
    new CSG.Path2D([[158.5519399,-136.9284919],[171.9402065,-132.8352881]]).appendPoint([167.8470027,-119.4470215]).appendPoint([154.4587361,-123.5402253]).appendPoint([158.5519399,-136.9284919]).close().innerToCAG()
).union(
    new CSG.Path2D([[237.4751452,-110.0816562],[251.4751452,-110.0816562]]).appendPoint([251.4751452,-96.0816562]).appendPoint([237.4751452,-96.0816562]).appendPoint([237.4751452,-110.0816562]).close().innerToCAG()
).union(
    new CSG.Path2D([[237.4751452,-127.0816562],[251.4751452,-127.0816562]]).appendPoint([251.4751452,-113.0816562]).appendPoint([237.4751452,-113.0816562]).appendPoint([237.4751452,-127.0816562]).close().innerToCAG()
).union(
    new CSG.Path2D([[237.4751452,-144.0816562],[251.4751452,-144.0816562]]).appendPoint([251.4751452,-130.0816562]).appendPoint([237.4751452,-130.0816562]).appendPoint([237.4751452,-144.0816562]).close().innerToCAG()
).union(
    new CSG.Path2D([[218.4751451,-107.2483229],[232.4751451,-107.2483229]]).appendPoint([232.4751451,-93.2483229]).appendPoint([218.4751451,-93.2483229]).appendPoint([218.4751451,-107.2483229]).close().innerToCAG()
).union(
    new CSG.Path2D([[218.4751451,-124.2483229],[232.4751451,-124.2483229]]).appendPoint([232.4751451,-110.2483229]).appendPoint([218.4751451,-110.2483229]).appendPoint([218.4751451,-124.2483229]).close().innerToCAG()
).union(
    new CSG.Path2D([[218.4751451,-141.2483229],[232.4751451,-141.2483229]]).appendPoint([232.4751451,-127.2483229]).appendPoint([218.4751451,-127.2483229]).appendPoint([218.4751451,-141.2483229]).close().innerToCAG()
).union(
    new CSG.Path2D([[236.2682513,-166.2497554],[249.7912129,-169.873222]]).appendPoint([253.4146795,-156.3502604]).appendPoint([239.8917179,-152.7267938]).appendPoint([236.2682513,-166.2497554]).close().innerToCAG()
).union(
    new CSG.Path2D([[217.2643066,-164.1378509],[231.2110324,-165.3580313]]).appendPoint([232.4312128,-151.4113055]).appendPoint([218.484487,-150.1911251]).appendPoint([217.2643066,-164.1378509]).close().innerToCAG()
).union(
    new CSG.Path2D([[198.1216679,-120.849994],[212.0683937,-119.6298136]]).appendPoint([210.8482133,-105.6830878]).appendPoint([196.9014875,-106.9032682]).appendPoint([198.1216679,-120.849994]).close().innerToCAG()
).union(
    new CSG.Path2D([[196.8392592,-103.897253],[210.785985,-102.6770726]]).appendPoint([209.5658046,-88.7303468]).appendPoint([195.6190788,-89.9505272]).appendPoint([196.8392592,-103.897253]).close().innerToCAG()
).union(
    new CSG.Path2D([[199.4040766,-137.802735],[213.3508024,-136.5825546]]).appendPoint([212.130622,-122.6358288]).appendPoint([198.1838962,-123.8560092]).appendPoint([199.4040766,-137.802735]).close().innerToCAG()
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

        