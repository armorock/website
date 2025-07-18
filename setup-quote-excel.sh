#!/bin/bash
cd "$(dirname "$0")"
cd ..
node scripts/create-quote-excel-file.js
