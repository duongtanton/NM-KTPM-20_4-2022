const toasts = document.querySelectorAll("#toast-message.toast-message");
window.onload = (e) => {
    toasts.forEach(async toast => {
        if (toast) {
            toast.style.transform = "translateX(-60px)";
            toast.style.transition = "transform 0.5s linear";
            await new Promise(resolve => setTimeout(() => {
                toast.style.transform = "translateX(0)";
                toast.style.transition = "transform 0.45s linear";
                resolve();
            }, 500))
            await new Promise(resolve => setTimeout(() => {
                toast.style.transform = "translateX(-30px)";
                toast.style.transition = "transform 0.4s linear";
                resolve();
            }, 450))
            await new Promise(resolve => setTimeout(() => {
                toast.style.transform = "translateX(0)";
                toast.style.transition = "transform 0.35s linear";
                resolve();
            }, 400))
            await new Promise(resolve => setTimeout(() => {
                toast.style.transform = "translateX(-20px)";
                toast.style.transition = "transform 0.3s linear";
                resolve();
            }, 350))
            await new Promise(resolve => setTimeout(() => {
                toast.classList.add("hiden");
                toast.style.transition = "transform 0s linear";
                resolve();
            }, 1400))
        }
    })
}