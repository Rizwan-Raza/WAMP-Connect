$(() => {
    $("#qq").submit(e => {
        e.preventDefault();
        $(" #progress,  .prevent-overlay").removeClass("hide");

        // console.log($(e.target).serialize());
        $.ajax({
            url: "https://www.wampinfotech.com/php/contact.php",
            method: "POST",
            data: $(e.target).serialize(),
            success: (data, status) => {
                // console.log(data, status);
                var object = JSON.parse(data);
                alert(object.message);
                if (object.status == "server_error") {
                    return;
                }
            },
            error: (data, status) => {
                console.log(data, status);
            },
            complete: () => {
                $(" #progress, .prevent-overlay").addClass("hide");
            }
        });
    });
});