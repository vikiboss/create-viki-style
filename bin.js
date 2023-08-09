#!/usr/bin/env node

const fs = require('fs')

const eslintConfig = JSON.stringify({ extends: '@vmoe' }, null, 2)

fs.writeFileSync('.eslintrc', eslintConfig)
fs.writeFileSync('.prettierrc', '"@vmoe/prettier-config"')
