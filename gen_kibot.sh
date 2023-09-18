#!/bin/bash

container_cmd=docker
container_args="-w /board -v $(pwd):/board -v /tmp/.X11-unix:/tmp/.X11-unix --rm"
docker_image="ghcr.io/inti-cmnb/kicad_auto_full"
docker_tag="dev_k7"

for d in ./output/*; do
    if [ -d $d ]; then
        for f in $d/pcbs/*; do
            filename=${f##*/}
            file=${filename%.*}
            ${container_cmd} run ${container_args} ${docker_image}:${docker_tag} /bin/bash -c "cd $d/pcbs; kibot -b $filename -c /board/config.kibot.yaml"
        done
    fi
done
