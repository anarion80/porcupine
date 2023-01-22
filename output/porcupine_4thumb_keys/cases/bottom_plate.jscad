function bottom_outline_outline_fn(){
    return new CSG.Path2D([[152.5334464,-113.0741393],[167.4023608,-161.7081671]]).appendArc([168.7176507,-162.3491387],{"radius":1,"clockwise":false,"large":false}).appendArc([281.7091714,-187.1709622],{"radius":105,"clockwise":true,"large":false}).appendArc([283.1334028,-187.181124],{"radius":1,"clockwise":false,"large":false}).appendPoint([300.3789818,-169.935545]).appendArc([300.4313657,-168.57792],{"radius":1,"clockwise":false,"large":false}).appendPoint([279.6515963,-144.3171959]).appendArc([279.411087,-143.6666777],{"radius":1,"clockwise":true,"large":false}).appendPoint([279.411087,-87.1335173]).appendArc([277.411087,-85.1335173],{"radius":2,"clockwise":false,"large":false}).appendPoint([257.911087,-85.1335173]).appendArc([256.911087,-84.1335173],{"radius":1,"clockwise":true,"large":false}).appendPoint([256.911087,-83.6835173]).appendArc([255.911087,-82.6835173],{"radius":1,"clockwise":false,"large":false}).appendPoint([238.511087,-82.6835173]).appendArc([237.511087,-81.6835173],{"radius":1,"clockwise":true,"large":false}).appendPoint([237.511087,-81.2501839]).appendArc([236.511087,-80.2501839],{"radius":1,"clockwise":false,"large":false}).appendPoint([215.6977203,-80.2501839]).appendArc([214.7015256,-79.3373396],{"radius":1,"clockwise":true,"large":false}).appendPoint([214.4505009,-76.4681136]).appendArc([213.3671505,-75.5590746],{"radius":1,"clockwise":false,"large":false}).appendPoint([195.2364069,-77.1453092]).appendArc([194.3273679,-78.2286596],{"radius":1,"clockwise":false,"large":false}).appendPoint([194.7083816,-82.5836655]).appendArc([193.8858351,-83.655629],{"radius":1,"clockwise":true,"large":false}).appendPoint([172.7583366,-87.380977]).appendArc([171.947177,-88.539433],{"radius":1,"clockwise":false,"large":false}).appendPoint([174.7304048,-104.3239023]).appendArc([174.0379687,-105.4538553],{"radius":1,"clockwise":true,"large":false}).appendPoint([153.1973795,-111.8254628]).appendArc([152.5334464,-113.0741393],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
.subtract(
    CAG.circle({"center":[275.8251918,-164.5787182],"radius":1.05})
.union(
    CAG.circle({"center":[235.511087,-136.6001839],"radius":1.05})
).union(
    CAG.circle({"center":[236.871087,-92.6835173],"radius":1.05})
).union(
    CAG.circle({"center":[185.3577724,-147.5852047],"radius":1.05})
).union(
    CAG.circle({"center":[175.7032049,-113.8720651],"radius":1.05})
)).extrude({ offset: [0, 0, 1] });
}




                function bottom_plate_case_fn() {
                    

                // creating part 0 of case bottom_plate
                let bottom_plate__part_0 = bottom_outline_outline_fn();

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

        