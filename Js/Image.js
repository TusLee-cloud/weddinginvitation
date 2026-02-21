document.addEventListener("DOMContentLoaded", function(){

    const track = document.querySelector(".thumb-track");
    const mainImage = document.getElementById("mainImage");
    const mainCaption = document.querySelector(".main-caption");

    /* =========================
       1️⃣  NHÂN BẢN ẢNH
    ========================== */

    const originalItems = Array.from(track.children);

    for(let i = 0; i < 3; i++){
        originalItems.forEach(item => {
            const clone = item.cloneNode(true);
            track.appendChild(clone);
        });
    }

    /* =========================
       2️⃣  SCROLL VÔ HẠN
    ========================== */

    let position = 0;
    let speed = 0.6;

    function animate(){
        position -= speed;

        if(Math.abs(position) >= track.scrollWidth / 4){
            position = 0;
        }

        track.style.transform = `translateX(${position}px)`;
        requestAnimationFrame(animate);
    }

    animate();

    /* =========================
       3️⃣  CLICK ĐỔI ẢNH CHÍNH
       (DÙNG EVENT DELEGATION)
    ========================== */

    track.addEventListener("click", function(e){

        const card = e.target.closest(".polaroid");
        if(!card) return;

        // bỏ active cũ
        document.querySelectorAll(".polaroid").forEach(p => {
            p.classList.remove("active");
        });

        card.classList.add("active");

        const newSrc = card.querySelector("img").src;
        const caption = card.dataset.caption || "";

        mainImage.style.opacity = "0";

        setTimeout(() => {
            mainImage.src = newSrc;
            mainCaption.textContent = caption;
            mainImage.style.opacity = "1";
        }, 200);
    });

});


document.addEventListener("DOMContentLoaded", function(){

    const giftBtn = document.querySelector(".btn-secondary");
    const giftModal = document.getElementById("giftModal");
    const closeBtn = document.querySelector(".gift-close");
    const overlay = document.querySelector(".gift-overlay");

    giftBtn.addEventListener("click", function(){
        giftModal.classList.add("active");
        document.body.style.overflow = "hidden";
    });

    function closeModal(){
        giftModal.classList.remove("active");
        document.body.style.overflow = "auto";
    }

    closeBtn.addEventListener("click", closeModal);
    overlay.addEventListener("click", closeModal);
});




document.querySelectorAll(".gift-card").forEach((card) => {

    const downloadBtn = card.querySelector(".download-btn");
    const img = card.querySelector(".qr-box img");

    downloadBtn.addEventListener("click", function(){

        const link = document.createElement("a");

        link.href = img.src;

        if(card.classList.contains("bride-card")){
            link.download = "qr-co-dau.png";
        } else if(card.classList.contains("groom-card")){
            link.download = "qr-chu-re.png";
        }

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

    });

});

// COPY CHÚ RỂ
// ===== SHOW DIALOG =====
function showDialog(message) {
    const dialog = document.getElementById("copyDialog");
    const msg = document.getElementById("dialogMessage");

    msg.innerText = message;
    dialog.classList.add("active");

    // Tự đóng sau 2.5s
    setTimeout(() => {
        dialog.classList.remove("active");
    }, 2500);
}

// ===== ĐÓNG DIALOG KHI BẤM NÚT =====
document.getElementById("closeDialog").addEventListener("click", function() {
    document.getElementById("copyDialog").classList.remove("active");
});

// ===== COPY CHÚ RỂ =====
document.querySelector(".copy-groom").addEventListener("click", function () {

    const bankName = document.querySelector(".groom-bank-name").innerText;
    const bankNumber = document.querySelector(".groom-bank-number").innerText;
    const bankOwner = document.querySelector(".groom-bank-owner").innerText;

    const text = `Ngân hàng: ${bankName}
STK: ${bankNumber}
Chủ tài khoản: ${bankOwner}`;

    navigator.clipboard.writeText(text).then(() => {
        showDialog("Đã sao chép thông tin chú rể 💌");
    }).catch(() => {
        showDialog("Không thể sao chép ❌");
    });
});

// ===== COPY CÔ DÂU =====
document.querySelector(".copy-bride").addEventListener("click", function () {

    const bankName = document.querySelector(".bride-bank-name").innerText;
    const bankNumber = document.querySelector(".bride-bank-number").innerText;
    const bankOwner = document.querySelector(".bride-bank-owner").innerText;

    const text = `Ngân hàng: ${bankName}
STK: ${bankNumber}
Chủ tài khoản: ${bankOwner}`;

    navigator.clipboard.writeText(text).then(() => {
        showDialog("Đã sao chép thông tin cô dâu 💐");
    }).catch(() => {
        showDialog("Không thể sao chép ❌");
    });
});
