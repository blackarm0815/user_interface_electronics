echo
echo "eslint code.ts"
if npx eslint --fix code.ts
then
  echo "done"
else
  exit
fi
echo
#
echo "transpiling code.ts"
if npx tsc
then
  echo "done"
else
  exit
fi
echo
scp code.js pi:/var/www/html/joystick
scp index.html pi:/var/www/html/joystick