#! /usr/bin/env node
import open from 'open'
import fetch from 'node-fetch'
import yargs from 'yargs'

console.log('hello from the reddit cli')

const {argv} = yargs(process.argv)

const res = await fetch('https://www.reddit.com/.json')
const data = await res.json()
const children = data.data.chilgrenrargs
const randomIndex = children[Math.random(Math.floor(children.length))]