const installBtn = document.getElementById('buttonInstall');
let deferredPrompt;

const showInstallButton = () => {
  installBtn.classList.remove('hidden');
};

const hideInstallButton = () => {
  installBtn.classList.add('hidden');
};

const promptInstall = () => {
  if (!deferredPrompt) {
    return;
  }

  deferredPrompt.prompt();
  deferredPrompt = null;
  hideInstallButton();
};

window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  deferredPrompt = event;
  showInstallButton();
});

installBtn.addEventListener('click', promptInstall);

window.addEventListener('appinstalled', () => {
  deferredPrompt = null;
});