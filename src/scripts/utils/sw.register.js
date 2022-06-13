import runtime from 'serviceworker-webpack-plugin/lib/runtime';

const swResigter = async () => {
    if ('serviceWorker' in navigator) {
        await runtime.register();
        return;
    }
    console.log('Browser tidak mendukung service worker');
};

export default swResigter;