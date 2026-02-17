document.addEventListener("DOMContentLoaded", function () {

    const API_URL = "https://weddingrsvp2026.tulevan600.workers.dev/";

    const rsvpForm = document.getElementById("rsvpForm");
    const submitBtn = document.getElementById("submitBtn");

    const popup = document.getElementById("rsvpPopup");
    const closePopup = document.getElementById("closePopup");

    rsvpForm.addEventListener("submit", async function (e) {
        e.preventDefault();

        const formData = new FormData(rsvpForm);

        const data = {
            name: formData.get("name"),
            message: formData.get("message"),
            attending: formData.get("attending"),
            guests: formData.get("guests"),
            estimated: formData.get("estimated"),
            side: formData.get("side")
        };

        submitBtn.disabled = true;
        submitBtn.innerText = "ĐANG GỬI...";

        try {

            const response = await fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });

            const result = await response.json();
            console.log(result);

            if (result.status === "ok" || result.status === "success") {
                rsvpForm.reset();
                popup.classList.add("active");
            } else {
                alert("Có lỗi xảy ra.");
            }

        } catch (err) {
            alert("Không thể kết nối server.");
        }

        submitBtn.disabled = false;
        submitBtn.innerText = "GỬI LỜI NHẮN VÀ XÁC NHẬN";

    });

    closePopup.addEventListener("click", function () {
        popup.classList.remove("active");
    });

});
