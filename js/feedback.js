var feedback_window = document.getElementById("feedback_window");
//$("#feedback_window").hide();
var count = sessionStorage.getItem("count");
var ok = [0, 0, 0, 0];
if (Number(count) !== 1) {
    $("#feedback_window").fadeIn(500);
}
$(" .close").click(function () {
    setTimeout(function () {
        $("#feedback_window").fadeOut(500);
        ok = [0, 0, 0, 0];
    }, 500);
    if (Number(count) !== 1) {
        show_submenu();
    }
});
$(".feedback").click(function () {
    ok = [0, 0, 0, 0];
    document.getElementById("name_input").value = '';
    document.getElementById("phone_input").value = '';
    document.getElementById("email_input").value = '';
    document.getElementById("message_text").value = '';
    $("#thanks").hide();
    setTimeout(function () {
        $("#feedback_window").fadeIn(500);
        document.getElementById("feedback_table").style.display = null;
        document.getElementById("message_text").style.display = null;
        document.getElementById("mandatori_field").style.display = null;
        //      button_message.disabled = false;
    }, 100);
});
$("#name_error_message").hide();
$("#phone_error_message").hide();
$("#email_error_message").hide();
$("#thanks").hide();



var button_message = document.getElementById("button_message");

button_message.disabled = true;

$("#name_input").focusout(function () {
    check_name();
  //  alert(ok);
});
$("#phone_input").focusout(function () {
    check_phone();
 //   alert(ok);
});
$("#email_input").focusout(function () {
    check_email();
 //   alert(ok);
});

$("#message_text").focusout(function () {
    check_message();
 //   alert(ok);
});


function check_name() {
    var name_length = $("#name_input").val().length;
    var name = $("#name_input").val();
    if (name_length === 0 || name_length > 15) {
        $("#name_error_message").html();
        $("#name_error_message").show();
    }
    if (!isNaN(name)) {
        $("#name_error_message").html();
        $("#name_error_message").show();
    }
    if (name_length > 0 && name_length < 15) {
        if (isNaN(name)) {
            $("#name_error_message").hide();
            ok[0] = 1;
            if (ok[0] === 1 && ok[1] === 1 && ok[2] === 1 && ok[3] === 1) {
                button_message.disabled = false;
            }
        }
    } else {
        ok[0] = 0;
        button_message.disabled = true;
    }
}
function check_phone() {
    var phone_length = $("#phone_input").val().length;
    var phone = $("#phone_input").val();
    if (phone_length < 5) {
        $("#phone_error_message").html();
        $("#phone_error_message").show();
    }
    if (phone_length > 5) {
        if (isNaN(phone)) {
            $("#phone_error_message").html();
            $("#phone_error_message").show();
        } else {
            if (phone_length < 15) {
                $("#phone_error_message").hide();
                ok[1] = 1;
                if (ok[0] === 1 && ok[1] === 1 && ok[2] === 1 && ok[3] === 1) {
                    button_message.disabled = false;
                }
            } else {
                ok[1] = 0;
                button_message.disabled = true;
            }
        }
    }
}
function check_email() {
//    var pattern = new RegExp(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i); 
    var pattern = new RegExp(/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/);

    if (!pattern.test($("#email_input").val())) {
        $("#email_error_message").html();
        $("#email_error_message").show();
    }
    if (pattern.test($("#email_input").val())) {
        $("#email_error_message").hide();
        ok[2] = 1;
        if (ok[0] === 1 && ok[1] === 1 && ok[2] === 1 && ok[3] === 1) {
            button_message.disabled = false;
        }
    } else {
        ok[2] = 0;
        button_message.disabled = true;
    }
} //function check_email()

function check_message() {
    var message_length = $("#message_text").val().length;
    if (message_length > 0 && message_length < 150) {
        ok[3] = 1;
        if (ok[0] === 1 && ok[1] === 1 && ok[2] === 1 && ok[3] === 1) {
            button_message.disabled = false;
        }
    } else {
        ok[3] = 0;
        button_message.disabled = true;
    }
}
$(" .button_message").click(function () {
    document.getElementById("feedback_table").style.display = "none";
    document.getElementById("message_text").style.display = "none";
    document.getElementById("mandatori_field").style.display = "none";
    setTimeout(function () {
        $("#thanks").fadeIn(1000);
    }, 1000);

    setTimeout(function () {
        $("#feedback_window").fadeOut(1000);
        if (Number(count) !== 1) {
            show_submenu();
        }
    }, 3000);
    button_message.disabled = true;
});

function show_submenu() {
    var menu = document.getElementById("catalog");
    var submenu_1 = document.getElementById("submenu_1_ul");
    var household = document.getElementById("household");
    var submenu_2 = document.getElementById("submenu_2_ul");
    var dishwasher = document.getElementById("dishwasher");

    setTimeout(function () {
        menu.style.background = "#777777";
    }, 2000);
    setTimeout(function () {
        submenu_1.style.display = "block";
    }, 2500);
    setTimeout(function () {
        household.style.background = "#777777";
    }, 3000);
    setTimeout(function () {
        submenu_2.style.display = "block";
    }, 3500);
    setTimeout(function () {
        dishwasher.style.background = "#777777";
    }, 4000);
    /***************************************************/
    setTimeout(function () {
        dishwasher.style.background = "#dcdcdc";
    }, 5000);
    setTimeout(function () {
        submenu_2.style.display = "none";
    }, 5500);
    setTimeout(function () {
        household.style.background = "#dcdcdc";
    }, 6000);
    setTimeout(function () {
        submenu_1.style.display = "none";
    }, 6500);
    setTimeout(function () {
        menu.style.background = "#dcdcdc";
    }, 7000);
    setTimeout(function () {
        //     location.reload();
        menu.style.background = null;
        submenu_1.style.display = null;
        household.style.background = null;
        submenu_2.style.display = null;
        dishwasher.style.background = null;
    }, 7000);
    count = 1;
    sessionStorage.setItem("count", count);
}