import { nodeResolve } from '@rollup/plugin-node-resolve';
import { dts } from 'rollup-plugin-dts';
import tsConfig from "./tsconfig.json" assert {type: "json"};

const config = [
	{
		input: 'src/index.js',
		output: {
			file: 'dist/index.js',
			format: 'es',
		},
		external: [/resource:\/\/.*/, /gi:\/\/.*/],
		plugins: [
			nodeResolve({
				extensions: ['.js'],
			}),
		],
	},
	{
		input: 'src/index.d.ts',
		output: {
			file: 'dist/index.d.ts',
			format: 'es',
		},
		plugins: [dts({
            compilerOptions: {
                baseUrl: tsConfig.compilerOptions.baseUrl,
                paths: tsConfig.compilerOptions.paths
            }
        })],
	},
];

export default config;
