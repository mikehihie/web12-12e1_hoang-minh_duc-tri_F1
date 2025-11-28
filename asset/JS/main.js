/* main.js */

// 1. Định nghĩa nội dung Contact Form và Footer
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
                    <input type="text" placeholder="Họ và Tên" required>
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

// 2. Tìm vị trí cần chèn và hiển thị ra
// Khi trang web tải xong, nó sẽ tự động tìm thẻ có id="global-footer" để chèn code vào
document.addEventListener("DOMContentLoaded", function() {
    const footerPlaceholder = document.getElementById("global-footer");
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = footerComponent;
    }
});