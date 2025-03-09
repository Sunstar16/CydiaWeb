window.applicationCache.addEventListener('updateready', function() {
    if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
        window.applicationCache.swapCache();
        window.location.reload();
    }
});
