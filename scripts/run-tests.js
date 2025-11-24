#!/usr/bin/env node

const cp = require('child_process');

const nodeVersion = parseInt(process.version.slice(1));
const env = { ...process.env };

// For Node 22+, disable experimental strip types warning
if (nodeVersion >= 22) {
	env.NODE_OPTIONS = '--no-experimental-strip-types';
}

// Run mocha with ts-node
cp.execSync('mocha -r ts-node/register tests/**/*.spec.ts', {
	stdio: 'inherit',
	env,
});
