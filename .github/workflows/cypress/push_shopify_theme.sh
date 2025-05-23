#!/bin/bash
theme_name="$1"
if shopify theme list | grep -q "$theme_name"; then
   shopify theme push --path ./ --theme="$theme_name"
else
   shopify theme push --path ./ --theme="$theme_name" --unpublished
fi