#!/usr/bin/env bash

rm -rf server/falcor/db/
mkdir -p server/falcor/db/rdb
mkdir -p server/falcor/db/sdb
mkdir -p server/falcor/db/tdb

cp -r dbTemplates/rdb server/falcor/db/rdb
cp -r dbTemplates/sdb server/falcor/db/sdb
cp -r dbTemplates/tdb server/falcor/db/tdb


