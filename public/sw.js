if ('caches' in window) {
  caches.keys()
    .then(keys => {
      return Promise.all(keys.map(key => caches.delete(key)));
    })
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.getRegistrations()
      .then(registrations => {
        for (let registration of registrations) {
          registration.unregister().then(hasUnregistered => {console.log('Unregistered: ', hasUnregistered);});
        }
        window.location.reload();
      });
  });
}