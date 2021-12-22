// debug friend: document.writeln(JSON.stringify(value));

window.deltachat = (() => {
    var update_listener = () => {};

    window.__w30update = (updateId) => {
        var updates = JSON.parse(InternalJSApi.getStatusUpdates(updateId));
        if (updates.length === 1) {
            update_listener(updates[0]);
        }
    };

    return {
        selfAddr: () => "foo@bar.dex",
        setUpdateListener: (cb) => (update_listener = cb),
        getAllUpdates: () => {
            return JSON.parse(
                '[]'
                //'[{"action":"configure", "question":"your favorite colorxx", "answers":["red","green","blue","yellow","purple1"]},{"action":"vote", "sender":"foo2@bar.de", "vote":0},{"action":"vote", "sender":"foo@bar.de", "vote":0}]'
            );
        },
        sendUpdate: (description, payload) => {
            alert(description+"\n\n"+JSON.stringify(payload));
        },
    };
})();