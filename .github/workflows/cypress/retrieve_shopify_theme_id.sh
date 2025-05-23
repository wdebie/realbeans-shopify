#!/bin/bash
if [ "$#" -ne 1 ]; then
   echo "Invalid theme name: $0 'command'"
   exit 1
fi

THEME_ID=$(shopify theme list | grep $1 | awk '{print $3}' | sed 's/#//g')
echo $THEME_ID