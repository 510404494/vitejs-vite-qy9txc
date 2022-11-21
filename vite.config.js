import vue from '@vitejs/plugin-vue';
import { defineConfig, loadEnv } from 'vite';
import path from 'path';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';
const resolve = (str) => path.resolve(__dirname, str);
console.log(resolve('src'));
export default defineConfig(({ command, mode }) => {
  // 根据当前工作目录中的 `mode` 加载 .env 文件
  // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
  const env = loadEnv(mode, process.cwd(), '');
  console.log(env);
  return {
    // vite 配置
    resolve: {
      // 设置别名
      alias: {
        '@': resolve('src'),
      },
      // 忽略拓展名字
      extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue', '.mjs'],
    },
    plugins: [vue(),
    Components({
      resolvers: [VantResolver()],
    })],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "./src/style/_variables.scss";'
        }
      },
    }
  };
});
