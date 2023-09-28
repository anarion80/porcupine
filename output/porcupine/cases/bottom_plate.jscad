function bottom_outline_extrude_1_outline_fn(){
    return new CSG.Path2D([[138.25,-160],[159.125,-160]]).appendArc([160.125,-159],{"radius":1,"clockwise":false,"large":false}).appendPoint([160.125,-150.3]).appendArc([160.425,-150],{"radius":0.3,"clockwise":true,"large":false}).appendPoint([160.825,-150]).appendArc([161.125,-150.3],{"radius":0.3,"clockwise":true,"large":false}).appendPoint([161.125,-159]).appendArc([162.125,-160],{"radius":1,"clockwise":false,"large":false}).appendPoint([168.7480392,-160]).appendArc([219.0538709,-185.0721663],{"radius":63,"clockwise":true,"large":false}).appendArc([220.1786587,-185.4153988],{"radius":1,"clockwise":false,"large":false}).appendArc([280.7866453,-196.3358252],{"radius":63,"clockwise":true,"large":false}).appendArc([280.8487868,-196.3830558],{"radius":1,"clockwise":false,"large":false}).appendPoint([284.7119309,-199.0880584]).appendArc([286.1046593,-198.8424827],{"radius":1,"clockwise":false,"large":false}).appendPoint([298.723341,-180.8211378]).appendArc([298.4777654,-179.4284094],{"radius":1,"clockwise":false,"large":false}).appendPoint([290.6764236,-173.9658511]).appendArc([290.25,-173.1466991],{"radius":1,"clockwise":true,"large":false}).appendPoint([290.25,-99.5]).appendArc([288.25,-97.5],{"radius":2,"clockwise":false,"large":false}).appendPoint([199.75,-97.5]).appendArc([198.75,-98.5],{"radius":1,"clockwise":false,"large":false}).appendPoint([198.75,-100.75]).appendArc([197.75,-101.75],{"radius":1,"clockwise":true,"large":false}).appendPoint([180.75,-101.75]).appendArc([179.75,-102.75],{"radius":1,"clockwise":false,"large":false}).appendPoint([179.75,-105]).appendArc([178.75,-106],{"radius":1,"clockwise":true,"large":false}).appendPoint([162.125,-106]).appendArc([161.125,-107],{"radius":1,"clockwise":false,"large":false}).appendPoint([161.125,-115.7]).appendArc([160.825,-116],{"radius":0.3,"clockwise":true,"large":false}).appendPoint([160.425,-116]).appendArc([160.125,-115.7],{"radius":0.3,"clockwise":true,"large":false}).appendPoint([160.125,-107]).appendArc([159.125,-106],{"radius":1,"clockwise":false,"large":false}).appendPoint([138.25,-106]).appendArc([137.25,-107],{"radius":1,"clockwise":false,"large":false}).appendPoint([137.25,-159]).appendArc([138.25,-160],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
.subtract(
    CAG.circle({"center":[278.1358292,-174.3125039],"radius":1.1})
.union(
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
)).extrude({ offset: [0, 0, 1] });
}




                function bottom_plate_case_fn() {
                    

                // creating part 0 of case bottom_plate
                let bottom_plate__part_0 = bottom_outline_extrude_1_outline_fn();

                // make sure that rotations are relative
                let bottom_plate__part_0_bounds = bottom_plate__part_0.getBounds();
                let bottom_plate__part_0_x = bottom_plate__part_0_bounds[0].x + (bottom_plate__part_0_bounds[1].x - bottom_plate__part_0_bounds[0].x) / 2
                let bottom_plate__part_0_y = bottom_plate__part_0_bounds[0].y + (bottom_plate__part_0_bounds[1].y - bottom_plate__part_0_bounds[0].y) / 2
                bottom_plate__part_0 = translate([-bottom_plate__part_0_x, -bottom_plate__part_0_y, 0], bottom_plate__part_0);
                bottom_plate__part_0 = rotate([0,0,0], bottom_plate__part_0);
                bottom_plate__part_0 = translate([bottom_plate__part_0_x, bottom_plate__part_0_y, 0], bottom_plate__part_0);

                bottom_plate__part_0 = translate([0,0,0], bottom_plate__part_0);
                let result = bottom_plate__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return bottom_plate_case_fn();
            }

        