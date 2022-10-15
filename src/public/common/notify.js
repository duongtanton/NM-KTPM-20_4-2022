const toastRoot = document.querySelector("#toast-message-group.toast-message-group");
const showToastMessage = async (notify) => {
    if (!notify?.type || !notify?.content) { return; }
    const element = document.createElement("div");
    element.classList.add("toast-message", notify.type)
    element.id = "toast-message";
    element.innerHTML = `
        <div class="image">
          <img src="https://cdn-icons-png.flaticon.com/512/2097/2097710.png" alt="Notify">
        </div>
        <div class="content">
          <div class="warning">Warning!</div>
          <div class="success">Success!</div>
          <div class="error">Error!</div>
          <div class="info">Info!</div>
          <div class="message">
            ${notify.content}
        </div>
      `;
    toastRoot.append(element);
    const toasts = document.querySelectorAll("#toast-message.toast-message");
    const toast = toasts[toasts.length - 1];
    if (toast) {
        toast.style.transform = "translateX(calc(100% + 40px))";
        toast.style.transition = "transform 0.8s linear";
        await new Promise(resolve => setTimeout(() => {
            toast.style.transform = "translateX(0)";
            toast.style.transition = "transform 0.5s linear";
            resolve();
        }, 550))
        await new Promise(resolve => setTimeout(() => {
            toast.style.transform = "translateX(-30px)";
            toast.style.transition = "transform 0.45s linear";
            resolve();
        }, 500))
        await new Promise(resolve => setTimeout(() => {
            toast.style.transform = "translateX(0)";
            toast.style.transition = "transform 0.40s linear";
            resolve();
        }, 450))
        await new Promise(resolve => setTimeout(() => {
            toast.style.transform = "translateX(-20px)";
            toast.style.transition = "transform 0.35s linear";
            resolve();
        }, 400))
        await new Promise(resolve => setTimeout(() => {
            toast.classList.add("hiden");
            toast.style.transition = "transform 0.3s linear";
            toast.remove();
            resolve();
        }, 1400))
    }
}
