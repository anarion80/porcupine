function plate_curved_outline_fn(){
    return new CSG.Path2D([[152.5334464,-113.0741393],[167.7674767,-162.9024073]]).appendArc([168.9011446,-163.5941811],{"radius":1,"clockwise":false,"large":false}).appendArc([260.9807777,-189.1843506],{"radius":110,"clockwise":true,"large":false}).appendArc([262.347609,-189.1399498],{"radius":1,"clockwise":false,"large":false}).appendPoint([281.5225181,-169.9650408]).appendArc([281.604326,-168.6434313],{"radius":1,"clockwise":false,"large":false}).appendPoint([257.4996284,-137.6971891]).appendArc([257.3582381,-137.4494733],{"radius":1,"clockwise":true,"large":false}).appendPoint([256.980782,-136.4921073]).appendArc([256.911087,-136.1253204],{"radius":1,"clockwise":true,"large":false}).appendPoint([256.911087,-83.6835173]).appendArc([255.911087,-82.6835173],{"radius":1,"clockwise":false,"large":false}).appendPoint([238.511087,-82.6835173]).appendArc([237.511087,-81.6835173],{"radius":1,"clockwise":true,"large":false}).appendPoint([237.511087,-81.2501839]).appendArc([236.511087,-80.2501839],{"radius":1,"clockwise":false,"large":false}).appendPoint([215.6977203,-80.2501839]).appendArc([214.7015256,-79.3373396],{"radius":1,"clockwise":true,"large":false}).appendPoint([214.4505009,-76.4681136]).appendArc([213.3671505,-75.5590746],{"radius":1,"clockwise":false,"large":false}).appendPoint([195.2364069,-77.1453092]).appendArc([194.3273679,-78.2286596],{"radius":1,"clockwise":false,"large":false}).appendPoint([194.7083816,-82.5836655]).appendArc([193.8858351,-83.655629],{"radius":1,"clockwise":true,"large":false}).appendPoint([172.7583366,-87.380977]).appendArc([171.947177,-88.539433],{"radius":1,"clockwise":false,"large":false}).appendPoint([174.7304048,-104.3239023]).appendArc([174.0379687,-105.4538553],{"radius":1,"clockwise":true,"large":false}).appendPoint([153.1973795,-111.8254628]).appendArc([152.5334464,-113.0741393],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
.subtract(
    CAG.circle({"center":[256.9388309,-164.6381112],"radius":1.05})
.union(
    CAG.circle({"center":[235.511087,-138.3001839],"radius":1.05})
).union(
    CAG.circle({"center":[236.871087,-92.6835173],"radius":1.05})
).union(
    CAG.circle({"center":[185.3577724,-147.5852047],"radius":1.05})
).union(
    CAG.circle({"center":[175.7032049,-113.8720651],"radius":1.05})
).union(
    new CSG.Path2D([[264.5755841,-182.1743593],[274.475079,-172.2748644]]).appendPoint([264.5755841,-162.3753695]).appendPoint([254.6760892,-172.2748644]).appendPoint([264.5755841,-182.1743593]).close().innerToCAG()
).union(
    new CSG.Path2D([[249.8108385,-168.5416262],[256.8108385,-156.4172706]]).appendPoint([244.6864829,-149.4172706]).appendPoint([237.6864829,-161.5416262]).appendPoint([249.8108385,-168.5416262]).close().innerToCAG()
).union(
    new CSG.Path2D([[177.7089926,-103.3641245],[191.4963011,-100.93305]]).appendPoint([189.0652266,-87.1457415]).appendPoint([175.2779181,-89.576816]).appendPoint([177.7089926,-103.3641245]).close().innerToCAG()
).union(
    new CSG.Path2D([[180.6610116,-120.1058563],[194.4483201,-117.6747818]]).appendPoint([192.0172456,-103.8874733]).appendPoint([178.2299371,-106.3185478]).appendPoint([180.6610116,-120.1058563]).close().innerToCAG()
).union(
    new CSG.Path2D([[183.6130306,-136.8475881],[197.4003391,-134.4165136]]).appendPoint([194.9692646,-120.6292051]).appendPoint([181.1819561,-123.0602796]).appendPoint([183.6130306,-136.8475881]).close().innerToCAG()
).union(
    new CSG.Path2D([[170.3821496,-159.4835543],[183.7704162,-155.3903505]]).appendPoint([179.6772124,-142.0020839]).appendPoint([166.2889458,-146.0952877]).appendPoint([170.3821496,-159.4835543]).close().innerToCAG()
).union(
    new CSG.Path2D([[165.4118306,-143.2263734],[178.8000972,-139.1331696]]).appendPoint([174.7068934,-125.744903]).appendPoint([161.3186268,-129.8381068]).appendPoint([165.4118306,-143.2263734]).close().innerToCAG()
).union(
    new CSG.Path2D([[160.4415116,-126.9691925],[173.8297782,-122.8759887]]).appendPoint([169.7365744,-109.4877221]).appendPoint([156.3483078,-113.5809259]).appendPoint([160.4415116,-126.9691925]).close().innerToCAG()
).union(
    new CSG.Path2D([[239.411087,-99.6835173],[253.411087,-99.6835173]]).appendPoint([253.411087,-85.6835173]).appendPoint([239.411087,-85.6835173]).appendPoint([239.411087,-99.6835173]).close().innerToCAG()
).union(
    new CSG.Path2D([[239.411087,-116.6835173],[253.411087,-116.6835173]]).appendPoint([253.411087,-102.6835173]).appendPoint([239.411087,-102.6835173]).appendPoint([239.411087,-116.6835173]).close().innerToCAG()
).union(
    new CSG.Path2D([[239.411087,-133.6835173],[253.411087,-133.6835173]]).appendPoint([253.411087,-119.6835173]).appendPoint([239.411087,-119.6835173]).appendPoint([239.411087,-133.6835173]).close().innerToCAG()
).union(
    new CSG.Path2D([[220.411087,-96.8501839],[234.411087,-96.8501839]]).appendPoint([234.411087,-82.8501839]).appendPoint([220.411087,-82.8501839]).appendPoint([220.411087,-96.8501839]).close().innerToCAG()
).union(
    new CSG.Path2D([[220.411087,-113.8501839],[234.411087,-113.8501839]]).appendPoint([234.411087,-99.8501839]).appendPoint([220.411087,-99.8501839]).appendPoint([220.411087,-113.8501839]).close().innerToCAG()
).union(
    new CSG.Path2D([[220.411087,-130.8501839],[234.411087,-130.8501839]]).appendPoint([234.411087,-116.8501839]).appendPoint([220.411087,-116.8501839]).appendPoint([220.411087,-130.8501839]).close().innerToCAG()
).union(
    new CSG.Path2D([[219.3178321,-155.9110095],[232.8407937,-159.5344761]]).appendPoint([236.4642603,-146.0115145]).appendPoint([222.9412987,-142.3880479]).appendPoint([219.3178321,-155.9110095]).close().innerToCAG()
).union(
    new CSG.Path2D([[200.0576098,-110.4518551],[214.0043356,-109.2316747]]).appendPoint([212.7841552,-95.2849489]).appendPoint([198.8374294,-96.5051293]).appendPoint([200.0576098,-110.4518551]).close().innerToCAG()
).union(
    new CSG.Path2D([[198.7752011,-93.4991141],[212.7219269,-92.2789337]]).appendPoint([211.5017465,-78.3322079]).appendPoint([197.5550207,-79.5523883]).appendPoint([198.7752011,-93.4991141]).close().innerToCAG()
).union(
    new CSG.Path2D([[201.3400185,-127.4045961],[215.2867443,-126.1844157]]).appendPoint([214.0665639,-112.2376899]).appendPoint([200.1198381,-113.4578703]).appendPoint([201.3400185,-127.4045961]).close().innerToCAG()
)).extrude({ offset: [0, 0, 1] });
}




                function top_plate_case_fn() {
                    

                // creating part 0 of case top_plate
                let top_plate__part_0 = plate_curved_outline_fn();

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

        