function pcb_case_outline_fn(){
    return new CSG.Path2D([[143.8388219,-162.3405788],[160.0960027,-157.3702598]]).appendArc([161.3446792,-158.0341929],{"radius":1,"clockwise":true,"large":false}).appendPoint([165.4631787,-171.505198]).appendArc([166.7501973,-172.1565574],{"radius":1,"clockwise":false,"large":false}).appendArc([277.9834358,-199.3353098],{"radius":105,"clockwise":true,"large":false}).appendArc([279.419193,-199.3575308],{"radius":1,"clockwise":false,"large":false}).appendPoint([298.44304,-180.3336839]).appendArc([298.4954239,-178.9760589],{"radius":1,"clockwise":false,"large":false}).appendPoint([277.8156545,-154.8320864]).appendArc([277.5751452,-154.1815682],{"radius":1,"clockwise":true,"large":false}).appendPoint([277.5751452,-97.9316562]).appendArc([275.5751452,-95.9316562],{"radius":2,"clockwise":false,"large":false}).appendPoint([256.5751452,-95.9316562]).appendArc([256.1751452,-95.9720644],{"radius":2,"clockwise":false,"large":false}).appendArc([254.9751452,-94.9922685],{"radius":1,"clockwise":true,"large":false}).appendPoint([254.9751452,-94.0816562]).appendArc([253.9751452,-93.0816562],{"radius":1,"clockwise":false,"large":false}).appendPoint([236.5751451,-93.0816562]).appendArc([235.5751451,-92.0816562],{"radius":1,"clockwise":true,"large":false}).appendPoint([235.5751451,-91.6483229]).appendArc([234.5751451,-90.6483229],{"radius":1,"clockwise":false,"large":false}).appendPoint([213.7617784,-90.6483229]).appendArc([212.7655837,-89.7354786],{"radius":1,"clockwise":true,"large":false}).appendPoint([212.514559,-86.8662525]).appendArc([211.4312086,-85.9572135],{"radius":1,"clockwise":false,"large":false}).appendPoint([193.300465,-87.5434481]).appendArc([192.391426,-88.6267985],{"radius":1,"clockwise":false,"large":false}).appendPoint([192.6484974,-91.5651379]).appendArc([191.8259509,-92.6371014],{"radius":1,"clockwise":true,"large":false}).appendPoint([170.5763933,-96.3839717]).appendArc([169.7652337,-97.5424277],{"radius":1,"clockwise":false,"large":false}).appendPoint([172.6534328,-113.922219]).appendArc([171.9609967,-115.052172],{"radius":1,"clockwise":true,"large":false}).appendPoint([133.0210688,-126.9573027]).appendArc([132.3571357,-128.2059792],{"radius":1,"clockwise":false,"large":false}).appendPoint([142.5901454,-161.6766457]).appendArc([143.8388219,-162.3405788],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}




                function case_case_fn() {
                    

                // creating part 0 of case case
                let case__part_0 = pcb_case_outline_fn();

                // make sure that rotations are relative
                let case__part_0_bounds = case__part_0.getBounds();
                let case__part_0_x = case__part_0_bounds[0].x + (case__part_0_bounds[1].x - case__part_0_bounds[0].x) / 2
                let case__part_0_y = case__part_0_bounds[0].y + (case__part_0_bounds[1].y - case__part_0_bounds[0].y) / 2
                case__part_0 = translate([-case__part_0_x, -case__part_0_y, 0], case__part_0);
                case__part_0 = rotate([0,0,0], case__part_0);
                case__part_0 = translate([case__part_0_x, case__part_0_y, 0], case__part_0);

                case__part_0 = translate([0,0,0], case__part_0);
                let result = case__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return case_case_fn();
            }

        