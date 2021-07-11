import svelte from "rollup-plugin-svelte";
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import image from "@rollup/plugin-image";

export default {
    input: './src/App.ssr.svelte',
    plugins: [
        nodeResolve(),
        commonjs(),
        image(),
        svelte({
            emitCss: true,
            hotReload: true,
            hydratable: true,
            generate: 'ssr'
        })
    ],
    output: {
        dir: './ssr',
        format: 'commonjs',
    }
}
