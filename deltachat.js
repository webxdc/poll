window.deltachat = (() => {
    var update_listener = () => {};

    window.__w30update = (statusUpdateId) => {
        var updates = JSON.parse(InternalJSApi.getStatusUpdates(statusUpdateId));
        if (updates.lenght == 1) {
            update_listener(updates[0]);
        }
    };

    return {
        selfAddr: () => "foo@bar.de",
        setStatusUpdateListener: (cb) => (update_listener = cb),
        getAllStatusUpdates: () => {
            return JSON.parse('[{"action":"configure", "question":"your favorite color", "answers":["red","green","blue","yellow","purple"]}]');
        },
        sendStatusUpdate: (description, payload) => {
            InternalJSApi.sendStatusUpdate(description, payload);
        },
    };
})();