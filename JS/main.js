/* main.js */

// NAV
const navComponent = `
    <nav>
        <a href="index.html" class="logo-container">
            <img class="f1-logo-svg" src="asset/img/F1.svg.png" alt="F1 Logo">
            <div class="logo"></div>
        </a>
        <ul>
            <li><a href="teams.html">Đội Đua</a></li>
            <li><a href="calendar.html">Lịch Trình</a></li>
            <li><a href="rules.html">Luật & Cờ</a></li>
            <li><a href="tech.html">Kỹ Thuật</a></li>
            <li><a href="gallery.html">Thư Viện</a></li>
        </ul>
    </nav>
`;

// footer
const footerComponent = `
    <section id="contact" style="border-top: 1px solid var(--f1-gray);">
        <h2>Liên Hệ & Góp Ý</h2>
        <div class="contact-wrapper">
            <div class="contact-info">
                <h3>Kết Nối Với Chúng Tôi</h3>
                <p>Mọi thắc mắc về giải đua, luật lệ hay góp ý về website, vui lòng để lại tin nhắn.</p>
                <ul class="contact-list">
                    <li><strong>Email:</strong> contact@f1guide.vn</li>
                    <li><strong>Hotline:</strong> 1900 2025</li>
                    <li><strong>Địa chỉ:</strong> TP. Hồ Chí Minh, Việt Nam</li>
                </ul>
            </div>
            <form class="contact-form">
                <div class="input-group">
                    <input type="text" id="nameInput" placeholder="Họ và Tên" required>
                    <input type="email" placeholder="Email của bạn" required>
                </div>
                <input type="text" placeholder="Tiêu đề" required>
                <textarea rows="5" placeholder="Nội dung tin nhắn..." required></textarea>
                <button type="submit" class="btn">Gửi Tin Nhắn</button>
            </form>
        </div>
    </section>
    <footer>
        <p>&copy; 2025 F1 Guide Vietnam. Trang web giáo dục do người hâm mộ thực hiện.</p>
        <p class="note">F1, FORMULA ONE, FORMULA 1, FIA FORMULA ONE WORLD CHAMPIONSHIP, GRAND PRIX và các nhãn hiệu liên quan là thương hiệu của Formula One Licensing B.V.</p>
    </footer>
`;

// nav link active highlight
function highlightActiveLink() {
    const currentPage = window.location.pathname.split("/").pop(); // Lấy tên file (vd: teams.html)
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        // Nếu tên file khớp hoặc đang ở trang chủ (index.html hoặc rỗng)
        if (linkPage === currentPage || (currentPage === "" && linkPage === "index.html")) {
            link.classList.add('active');
        }
    });
}

// Hàm khởi tạo chính
function initMain() {
    
    // A. Chèn Nav
    const navPlaceholder = document.getElementById("global-nav");
    if (navPlaceholder) {
        navPlaceholder.innerHTML = navComponent;
        highlightActiveLink(); // Gọi hàm tô đậm link
    }

    // B. Chèn Footer
    const footerPlaceholder = document.getElementById("global-footer");
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = footerComponent;
        
        // Xử lý gửi form
        const contactForm = document.querySelector(".contact-form");
        if (contactForm) {
            contactForm.addEventListener("submit", function(event) {
                event.preventDefault();
                const nameUser = document.getElementById("nameInput").value;
                alert(`Cảm ơn ${nameUser}! Tin nhắn của bạn đã được gửi thành công.\nChúng tôi sẽ phản hồi sớm nhất.`);
                contactForm.reset();
            });
        }
    }

    // C. Xử lý Lightbox (Gallery)
    const lightbox = document.getElementById("lightbox");
    if (lightbox) {
        const lightboxImg = document.getElementById("lightbox-img");
        const lightboxVideo = document.getElementById("lightbox-video");
        const captionText = document.getElementById("caption");
        const closeBtn = document.querySelector(".close");
        const galleryItems = document.querySelectorAll(".gallery-item");

        const closeLightbox = function() {
            lightbox.style.display = "none";
            // Stop video
            if (lightboxVideo) {
                lightboxVideo.src = "";
            }
        };

        galleryItems.forEach(item => {
            item.addEventListener('click', function() {
                const img = this.querySelector('img');
                const title = this.querySelector('.gallery-title');
                const videoId = this.getAttribute('data-video-id');

                if (title) {
                    lightbox.style.display = "flex";
                    captionText.innerText = title.innerText;

                    if (videoId && lightboxVideo) {
                        // Video mode
                        lightboxImg.style.display = "none";
                        lightboxVideo.style.display = "block";
                        lightboxVideo.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
                    } else if (img) {
                        // Image mode
                        if (lightboxVideo) {
                            lightboxVideo.style.display = "none";
                            lightboxVideo.src = "";
                        }
                        lightboxImg.style.display = "block";
                        lightboxImg.src = img.src;
                    }
                }
            });
        });

        if (closeBtn) {
            closeBtn.onclick = closeLightbox;
        }

        lightbox.onclick = function(e) {
            if(e.target !== lightboxImg && e.target !== lightboxVideo) {
                closeLightbox();
            }
        }
    }

}

if (document.readyState === 'loading') {
    document.addEventListener("DOMContentLoaded", initMain);
} else {
    initMain();
}