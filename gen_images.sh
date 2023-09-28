#!/bin/bash

mkdir -p images

container_cmd=docker
container_args="-w /board -v $(pwd):/board --rm"
docker_image="yaqwsx/kikit"
docker_tag="v1.0.0"

for d in ./output/*; do
    if [ -d $d ]; then
        for f in $d/pcbs/*.kicad_pcb; do
            filename=${f##*/}
            file=${filename%.*}

            ${container_cmd} run ${container_args} ${docker_image}:${docker_tag} pcbdraw --style style.json --silent $f images/$file-front.png
            ${container_cmd} run ${container_args} ${docker_image}:${docker_tag} pcbdraw -b --style style.json --silent $f images/$file-back.png
        done
    fi
done
