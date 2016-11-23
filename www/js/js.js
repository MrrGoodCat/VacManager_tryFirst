function valid (form)
{
        var fail = false;
        var email = form.email.value;
        var adr_pattern = /[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}/i;
        var password = form.password.value;
        if(adr_pattern.test(email) == false)
        {
            fail = "You haven't write your name";
        }
        else if(password == "")
        {
            fail = "You haven't write your password.";
        }
        if(fail)
        {
            alert(fail);
        }
        else
        {
            window.location.href="index.html";
        }
}