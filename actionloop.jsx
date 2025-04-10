var actionSetName = "RemoveWartermark";   // Tên folder chứa action
var actionName2 = "Action 2";    // Tên của action
var actionName3 = "Action 3";    // Tên của action

// app.doAction(actionName, actionSetName);
var originalDialogMode = app.displayDialogs;
app.displayDialogs = DialogModes.NO; //
while (true) {
    try {
        app.doAction(actionName2, actionSetName);
    } catch (e) {
        try {
            app.doAction(actionName3, actionSetName);
        } catch (e) {
            // alert("Kết thúc: Error " + e.message);
            break;
        }
    
    }
}
app.displayDialogs = originalDialogMode; // Khôi phục lại trạng thái ban đầu
alert("Kết thúc: End ");