function plate_extrude_1_outline_fn(){
    return new CSG.Path2D([[138.25,-160],[199.0384539,-160]]).appendArc([199.4434231,-160.0856697],{"radius":1,"clockwise":true,"large":false}).appendPoint([212.2081795,-165.7393512]).appendArc([212.7429029,-166.3116614],{"radius":1,"clockwise":true,"large":false}).appendPoint([219.4851417,-184.8358102]).appendArc([220.7668544,-185.4334827],{"radius":1,"clockwise":false,"large":false}).appendPoint([233.7519247,-180.7073036]).appendArc([234.1811005,-180.6508015],{"radius":1,"clockwise":true,"large":false}).appendPoint([254.875552,-182.4613314]).appendArc([255.1304164,-182.5178335],{"radius":1,"clockwise":true,"large":false}).appendPoint([268.0069922,-187.2045238]).appendPoint([267.9193139,-187.3297414]).appendPoint([277.3395624,-193.9258705]).appendPoint([284.7119309,-199.0880584]).appendArc([286.1046593,-198.8424828],{"radius":1,"clockwise":false,"large":false}).appendPoint([298.723341,-180.8211378]).appendArc([298.4777654,-179.4284094],{"radius":1,"clockwise":false,"large":false}).appendPoint([286.7927187,-171.2464516]).appendArc([286.3758621,-170.289305],{"radius":1,"clockwise":true,"large":false}).appendPoint([290.091446,-143.6213279]).appendArc([289.101013,-142.4833333],{"radius":1,"clockwise":false,"large":false}).appendPoint([258.41,-142.4833333]).appendPoint([257.75,-141.8387096]).appendPoint([257.75,-105.5833333]).appendArc([256.75,-104.5833333],{"radius":1,"clockwise":false,"large":false}).appendPoint([239.75,-104.5833333]).appendArc([238.75,-103.5833333],{"radius":1,"clockwise":true,"large":false}).appendPoint([238.75,-102.75]).appendArc([237.75,-101.75],{"radius":1,"clockwise":false,"large":false}).appendPoint([220.75,-101.75]).appendArc([219.75,-100.75],{"radius":1,"clockwise":true,"large":false}).appendPoint([219.75,-98.5]).appendArc([218.75,-97.5],{"radius":1,"clockwise":false,"large":false}).appendPoint([199.75,-97.5]).appendArc([198.75,-98.5],{"radius":1,"clockwise":false,"large":false}).appendPoint([198.75,-100.75]).appendArc([197.75,-101.75],{"radius":1,"clockwise":true,"large":false}).appendPoint([180.75,-101.75]).appendArc([179.75,-102.75],{"radius":1,"clockwise":false,"large":false}).appendPoint([179.75,-105]).appendArc([178.75,-106],{"radius":1,"clockwise":true,"large":false}).appendPoint([138.25,-106]).appendArc([137.25,-107],{"radius":1,"clockwise":false,"large":false}).appendPoint([137.25,-159]).appendArc([138.25,-160],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
.subtract(
    CAG.circle({"center":[278.1358292,-174.3125039],"radius":1.1})
.union(
    CAG.circle({"center":[235.9615488,-170.7511374],"radius":1.1})
).union(
    CAG.circle({"center":[237.75,-114.8666667],"radius":1.1})
).union(
    CAG.circle({"center":[180.75,-154.675],"radius":1.1})
).union(
    CAG.circle({"center":[180.75,-120.25],"radius":1.1})
).union(
    CAG.circle({"center":[160.625,-141.5],"radius":1.1})
).union(
    CAG.circle({"center":[160.625,-124.5],"radius":1.1})
).union(
    new CSG.Path2D([[233.6219893,-175.4337073],[228.8337073,-162.2780107]]).appendPoint([215.6780107,-167.0662927]).appendPoint([220.4662927,-180.2219893]).appendPoint([233.6219893,-175.4337073]).close().innerToCAG()
).union(
    new CSG.Path2D([[270.9592127,-183.4902442],[275.7474947,-170.3345476]]).appendPoint([262.5917981,-165.5462656]).appendPoint([257.8035161,-178.7019622]).appendPoint([270.9592127,-183.4902442]).close().innerToCAG()
).union(
    new CSG.Path2D([[240.25,-121.5833333],[254.25,-121.5833333]]).appendPoint([254.25,-107.5833333]).appendPoint([240.25,-107.5833333]).appendPoint([240.25,-121.5833333]).close().innerToCAG()
).union(
    new CSG.Path2D([[240.25,-138.5833333],[254.25,-138.5833333]]).appendPoint([254.25,-124.5833333]).appendPoint([240.25,-124.5833333]).appendPoint([240.25,-138.5833333]).close().innerToCAG()
).union(
    new CSG.Path2D([[240.25,-155.5833333],[254.25,-155.5833333]]).appendPoint([254.25,-141.5833333]).appendPoint([240.25,-141.5833333]).appendPoint([240.25,-155.5833333]).close().innerToCAG()
).union(
    new CSG.Path2D([[221.25,-118.75],[235.25,-118.75]]).appendPoint([235.25,-104.75]).appendPoint([221.25,-104.75]).appendPoint([221.25,-118.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[221.25,-135.75],[235.25,-135.75]]).appendPoint([235.25,-121.75]).appendPoint([221.25,-121.75]).appendPoint([221.25,-135.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[221.25,-152.75],[235.25,-152.75]]).appendPoint([235.25,-138.75]).appendPoint([221.25,-138.75]).appendPoint([221.25,-152.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[202.25,-114.5],[216.25,-114.5]]).appendPoint([216.25,-100.5]).appendPoint([202.25,-100.5]).appendPoint([202.25,-114.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[202.25,-131.5],[216.25,-131.5]]).appendPoint([216.25,-117.5]).appendPoint([202.25,-117.5]).appendPoint([202.25,-131.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[202.25,-148.5],[216.25,-148.5]]).appendPoint([216.25,-134.5]).appendPoint([202.25,-134.5]).appendPoint([202.25,-148.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[183.25,-118.75],[197.25,-118.75]]).appendPoint([197.25,-104.75]).appendPoint([183.25,-104.75]).appendPoint([183.25,-118.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[183.25,-135.75],[197.25,-135.75]]).appendPoint([197.25,-121.75]).appendPoint([183.25,-121.75]).appendPoint([183.25,-135.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[183.25,-152.75],[197.25,-152.75]]).appendPoint([197.25,-138.75]).appendPoint([183.25,-138.75]).appendPoint([183.25,-152.75]).close().innerToCAG()
).union(
    new CSG.Path2D([[164.25,-123],[178.25,-123]]).appendPoint([178.25,-109]).appendPoint([164.25,-109]).appendPoint([164.25,-123]).close().innerToCAG()
).union(
    new CSG.Path2D([[164.25,-140],[178.25,-140]]).appendPoint([178.25,-126]).appendPoint([164.25,-126]).appendPoint([164.25,-140]).close().innerToCAG()
).union(
    new CSG.Path2D([[164.25,-157],[178.25,-157]]).appendPoint([178.25,-143]).appendPoint([164.25,-143]).appendPoint([164.25,-157]).close().innerToCAG()
).union(
    new CSG.Path2D([[143,-123],[157,-123]]).appendPoint([157,-109]).appendPoint([143,-109]).appendPoint([143,-123]).close().innerToCAG()
).union(
    new CSG.Path2D([[143,-140],[157,-140]]).appendPoint([157,-126]).appendPoint([143,-126]).appendPoint([143,-140]).close().innerToCAG()
).union(
    new CSG.Path2D([[143,-157],[157,-157]]).appendPoint([157,-143]).appendPoint([143,-143]).appendPoint([143,-157]).close().innerToCAG()
).union(
    new CSG.Path2D([[253.6363703,-177.8357278],[254.8565507,-163.889002]]).appendPoint([240.9098249,-162.6688216]).appendPoint([239.6896445,-176.6155474]).appendPoint([253.6363703,-177.8357278]).close().innerToCAG()
).union(
    new CSG.Path2D([[286.2282972,-193.4355693],[294.2583673,-181.9674406]]).appendPoint([282.7902386,-173.9373705]).appendPoint([274.7601685,-185.4054992]).appendPoint([286.2282972,-193.4355693]).close().innerToCAG()
)).extrude({ offset: [0, 0, 1] });
}




                function top_plate_case_fn() {
                    

                // creating part 0 of case top_plate
                let top_plate__part_0 = plate_extrude_1_outline_fn();

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

        