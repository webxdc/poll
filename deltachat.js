// debug friend: document.writeln(JSON.stringify(value));

window.deltachat = (() => {
    var update_listener = () => {};

    window.__w30update = (statusUpdateId) => {
        var updates = JSON.parse(InternalJSApi.getStatusUpdates(statusUpdateId));
        if (updates.lenght == 1) {
            update_listener(updates[0]);
        }
    };

    return {
        selfAddr: () => "foo@bar.dex",
        setStatusUpdateListener: (cb) => (update_listener = cb),
        getAllStatusUpdates: () => {
            return JSON.parse(
                '[]'
                //'[{"action":"configure", "question":"your favorite colorxx", "answers":["red","green","blue","yellow","purple1"]},{"action":"vote", "sender":"foo2@bar.de", "vote":0},{"action":"vote", "sender":"foo@bar.de", "vote":0}]'
            );
        },
        sendStatusUpdate: (description, payload) => {
            alert(description+"\n\n"+JSON.stringify(payload));
        },
    };
})();