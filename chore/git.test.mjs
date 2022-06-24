#!/usr/bin/env zx

let branch = await $`git branch --show-current`
console.log('branch', branch)
