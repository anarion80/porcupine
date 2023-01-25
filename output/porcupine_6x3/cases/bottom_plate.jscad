function bottom_outline_outline_fn(){
    return new CSG.Path2D([[138.8685029,-146.0833979],[155.1256838,-141.1130789]]).appendArc([156.3743603,-141.777012],{"radius":1,"clockwise":true,"large":false}).appendPoint([160.4928598,-155.2480172]).appendArc([161.7798784,-155.8993766],{"radius":1,"clockwise":false,"large":false}).appendArc([273.0131169,-183.078129],{"radius":105,"clockwise":true,"large":false}).appendArc([274.4488741,-183.10035],{"radius":1,"clockwise":false,"large":false}).appendPoint([293.472721,-164.0765031]).appendArc([293.5251049,-162.7188781],{"radius":1,"clockwise":false,"large":false}).appendPoint([272.8453355,-138.5749056]).appendArc([272.6048262,-137.9243874],{"radius":1,"clockwise":true,"large":false}).appendPoint([272.6048262,-81.6744754]).appendArc([270.6048262,-79.6744754],{"radius":2,"clockwise":false,"large":false}).appendPoint([251.6048262,-79.6744754]).appendArc([251.2048262,-79.7148836],{"radius":2,"clockwise":false,"large":false}).appendArc([250.0048262,-78.7350877],{"radius":1,"clockwise":true,"large":false}).appendPoint([250.0048262,-77.8244754]).appendArc([249.0048262,-76.8244754],{"radius":1,"clockwise":false,"large":false}).appendPoint([231.6048262,-76.8244754]).appendArc([230.6048262,-75.8244754],{"radius":1,"clockwise":true,"large":false}).appendPoint([230.6048262,-75.3911421]).appendArc([229.6048262,-74.3911421],{"radius":1,"clockwise":false,"large":false}).appendPoint([208.7914594,-74.3911421]).appendArc([207.7952647,-73.4782978],{"radius":1,"clockwise":true,"large":false}).appendPoint([207.54424,-70.6090716]).appendArc([206.4608896,-69.7000326],{"radius":1,"clockwise":false,"large":false}).appendPoint([188.330146,-71.2862672]).appendArc([187.421107,-72.3696176],{"radius":1,"clockwise":false,"large":false}).appendPoint([187.6781784,-75.3079569]).appendArc([186.8556319,-76.3799204],{"radius":1,"clockwise":true,"large":false}).appendPoint([165.6060743,-80.1267907]).appendArc([164.7949147,-81.2852467],{"radius":1,"clockwise":false,"large":false}).appendPoint([167.6831138,-97.6650381]).appendArc([166.9906777,-98.7949911],{"radius":1,"clockwise":true,"large":false}).appendPoint([128.0507498,-110.7001218]).appendArc([127.3868167,-111.9487983],{"radius":1,"clockwise":false,"large":false}).appendPoint([137.6198264,-145.4194648]).appendArc([138.8685029,-146.0833979],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
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

        