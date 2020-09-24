#!/bin/sh

read -p "Are you 21 or older ? [y/N]" ANSWER
case "$ANSWER" in
  [yY] | [yY][eE][sS])
    echo "You can have beer :)"
    ;;
  [nN] | [nN][oO])
    echo "Sorry, no drinking"
    ;;
*)
  echo "Please type y/yes or n/no"
  ;;
esac