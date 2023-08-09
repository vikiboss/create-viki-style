#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

const dirents = fs.readdirSync(path.join(__dirname, './templates'), { withFileTypes: true }) || []

dirents.forEach(file => {
  const src = path.join(__dirname, './templates', file.name)
  const dest = path.join(process.cwd(), file.name)

  fs.copyFileSync(src, dest)
})
