#!/bin/sh

if [ $# -eq 0 ]
then
    PACKAGE_NAME=${PWD##*/}
elif [ "$1" = "-h" ]
then
    echo "usage: ${0##*/} [PACKAGE_NAME]"
    exit
else
    PACKAGE_NAME=$1
fi

rm $PACKAGE_NAME.xdc 2> /dev/null
zip -9 --recurse-paths $PACKAGE_NAME.xdc * --exclude README.md webxdc.js "*.sh" "*.xdc"

echo "success, archive contents:"
unzip -l $PACKAGE_NAME.xdc
