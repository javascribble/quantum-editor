import { modulify } from '@javascribble/rollup-plugin-modulify';
import { terser } from "rollup-plugin-terser";
import multi from '@rollup/plugin-multi-entry';
import resolve from '@rollup/plugin-node-resolve';

const editor = './editor/main.js';

const bundles = [
	{ name: 'editor', input: [editor] }
];

const output = (name, plugins) => ({
	file: `./build/quantum-editor.${name}.js`,
	format: 'es',
	plugins,
	name
});

const development = bundle => [output(bundle.name, [])];
const production = bundle => [...development(bundle), output(`${bundle.name}.min`, [terser()])];

const debug = process.argv.includes('-w');
export default bundles.map(bundle => ({
	input: bundle.input,
	output: debug ? development(bundle) : production(bundle),
	plugins: [
		multi(),
		resolve(),
		modulify()
	]
}));