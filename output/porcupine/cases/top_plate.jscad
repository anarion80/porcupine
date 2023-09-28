function top_outline_extrude_1_outline_fn(){
    return new CSG.Path2D([[138.25,-160],[159.125,-160]]).appendArc([160.125,-159],{"radius":1,"clockwise":false,"large":false}).appendPoint([160.125,-150.3]).appendArc([160.425,-150],{"radius":0.3,"clockwise":true,"large":false}).appendPoint([160.825,-150]).appendArc([161.125,-150.3],{"radius":0.3,"clockwise":true,"large":false}).appendPoint([161.125,-159]).appendArc([162.125,-160],{"radius":1,"clockwise":false,"large":false}).appendPoint([168.7480392,-160]).appendArc([219.0538709,-185.0721663],{"radius":63,"clockwise":true,"large":false}).appendArc([220.1786587,-185.4153988],{"radius":1,"clockwise":false,"large":false}).appendArc([280.7866453,-196.3358252],{"radius":63,"clockwise":true,"large":false}).appendArc([280.8487868,-196.3830558],{"radius":1,"clockwise":false,"large":false}).appendPoint([284.7119309,-199.0880584]).appendArc([286.1046593,-198.8424827],{"radius":1,"clockwise":false,"large":false}).appendPoint([298.723341,-180.8211378]).appendArc([298.4777654,-179.4284094],{"radius":1,"clockwise":false,"large":false}).appendPoint([290.6764236,-173.9658511]).appendArc([290.25,-173.1466991],{"radius":1,"clockwise":true,"large":false}).appendPoint([290.25,-99.5]).appendArc([288.25,-97.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([199.75,-97.5]).appendArc([198.75,-98.5],{"radius":1,"clockwise":false,"large":false}).appendPoint([198.75,-100.75]).appendArc([197.75,-101.75],{"radius":1,"clockwise":true,"large":false}).appendPoint([180.75,-101.75]).appendArc([179.75,-102.75],{"radius":1,"clockwise":false,"large":false}).appendPoint([179.75,-105]).appendArc([178.75,-106],{"radius":1,"clockwise":true,"large":false}).appendPoint([162.125,-106]).appendArc([161.125,-107],{"radius":1,"clockwise":false,"large":false}).appendPoint([161.125,-115.7]).appendArc([160.825,-116],{"radius":0.3,"clockwise":true,"large":false}).appendPoint([160.425,-116]).appendArc([160.125,-115.7],{"radius":0.3,"clockwise":true,"large":false}).appendPoint([160.125,-107]).appendArc([159.125,-106],{"radius":1,"clockwise":false,"large":false}).appendPoint([138.25,-106]).appendArc([137.25,-107],{"radius":1,"clockwise":false,"large":false}).appendPoint([137.25,-159]).appendArc([138.25,-160],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
.subtract(
    CAG.circle({"center":[285.75,-115.5833333],"radius":1})
.union(
    CAG.circle({"center":[278.1358292,-174.3125039],"radius":1.1})
).union(
    CAG.circle({"center":[285.75,-124.0833333],"radius":1.1})
).union(
    CAG.circle({"center":[235.9615488,-170.7511374],"radius":1.1})
).union(
    CAG.circle({"center":[237.75,-114.8666667],"radius":1.1})
).union(
    CAG.circle({"center":[180.75,-154.675],"radius":1.1})
).union(
    CAG.circle({"center":[180.75,-120.25],"radius":1.1})
).union(
    new CSG.Path2D([[160.425,-148],[160.825,-148]]).appendArc([161.125,-147.7],{"radius":0.3,"clockwise":false,"large":false}).appendPoint([161.125,-142.4797959]).appendArc([161.125,-140.5202041],{"radius":1.1,"clockwise":false,"large":false}).appendPoint([161.125,-134.3]).appendArc([160.825,-134],{"radius":0.3,"clockwise":false,"large":false}).appendPoint([160.425,-134]).appendArc([160.125,-134.3],{"radius":0.3,"clockwise":false,"large":false}).appendPoint([160.125,-140.5202041]).appendArc([160.125,-142.4797959],{"radius":1.1,"clockwise":false,"large":false}).appendPoint([160.125,-147.7]).appendArc([160.425,-148],{"radius":0.3,"clockwise":false,"large":false}).close().innerToCAG()
).union(
    new CSG.Path2D([[160.425,-132],[160.825,-132]]).appendArc([161.125,-131.7],{"radius":0.3,"clockwise":false,"large":false}).appendPoint([161.125,-125.4797959]).appendArc([161.125,-123.5202041],{"radius":1.1,"clockwise":false,"large":false}).appendPoint([161.125,-118.3]).appendArc([160.825,-118],{"radius":0.3,"clockwise":false,"large":false}).appendPoint([160.425,-118]).appendArc([160.125,-118.3],{"radius":0.3,"clockwise":false,"large":false}).appendPoint([160.125,-123.5202041]).appendArc([160.125,-125.4797959],{"radius":1.1,"clockwise":false,"large":false}).appendPoint([160.125,-131.7]).appendArc([160.425,-132],{"radius":0.3,"clockwise":false,"large":false}).close().innerToCAG()
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
).union(
    new CSG.Path2D([[259.75,-142.1833333],[280.75,-142.1833333]]).appendArc([282.75,-140.1833333],{"radius":2,"clockwise":false,"large":false}).appendPoint([282.75,-101.1833333]).appendArc([280.75,-99.1833333],{"radius":2,"clockwise":false,"large":false}).appendPoint([259.75,-99.1833333]).appendArc([257.75,-101.1833333],{"radius":2,"clockwise":false,"large":false}).appendPoint([257.75,-140.1833333]).appendArc([259.75,-142.1833333],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
)).extrude({ offset: [0, 0, 1] });
}




                function top_plate_case_fn() {
                    

                // creating part 0 of case top_plate
                let top_plate__part_0 = top_outline_extrude_1_outline_fn();

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

        