

function valid(form)
    {
        var fail = false;
        var name = form.name.value;
        var password = form.password.value;
        var RePassword = form.RePassword.value;
        var state = form.state.value;
        if(name == "" || name == " ")
            {
                fail = "You haven't write your name";
            }
        else if(password == "")
            {
                fail = "You haven't write your password.";
            }
        else if(RePassword != password)
            {
                fail = "The passwords are not matched.";
            }
        if(fail)
            {
                alert(fail);
            }
        else {
            window.location = "index.html";
        }
    }