const swRegister = async () => {
    if ('serviceWorker' in navigator) {
        try {
            await navigator.serviceWorker.register('../sw.js');
            console.log('ServiceWorker is registered');
        } catch (err) {
            console.log('ServiceWorker is not registered', err);
        }
    } else {
        console.log('Serviceworker is not supported in this browser');
    }
};

export default swRegister;