#!/bin/sh
HOSTS="www.google.com www.yahoo.com www.bing.com"
USERNAME="alex"
SCRIPT="pwd; ls"
for HOST in ${HOSTS} ; do
  #ping ${HOST} "${SCRIPT}"
  ping ${HOST}
done
