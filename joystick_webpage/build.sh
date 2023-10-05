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
echo "uploading"
./upload.sh
