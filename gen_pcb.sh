#!/bin/bash

# generate PCBs from input/* config files, using ergogen
for f in ./input/*; do
    filename=${f##*/}
    file=${filename%.*}
    ergogen $f -o output/$file
done
