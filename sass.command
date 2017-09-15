#!/bin/sh

cd $(dirname $0)
#sass --watch input:output
#sass --watch -t nested input:output
#sass --watch -t expanded input:output
sass --watch -t compact input:output
#sass --watch -t compressed input:output