const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
  const active = nav.classList.toggle("active");
  menuBtn.setAttribute("aria-expanded", active ? "true" : "false");
});

nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

const form = document.getElementById("contactForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const level = document.getElementById("level").value;
  const message = document.getElementById("message").value.trim();

  const text =
`السلام عليكم مستر محمد صلاح،
أنا ولي أمر/طالب وأرغب في الاستفسار عن دروس اللغة الإنجليزية.

الاسم: ${name}
رقم الهاتف: ${phone}
المرحلة: ${level}
الرسالة: ${message || "لا توجد رسالة إضافية"}`;

  const whatsappNumber = "201234567890";
  window.open(
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`,
    "_blank"
  );
});

document.getElementById("year").textContent = new Date().getFullYear();
