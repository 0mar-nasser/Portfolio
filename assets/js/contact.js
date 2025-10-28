/*=============== Form ===============*/
// تهيئة EmailJS
// ✅ تهيئة EmailJS بمفتاحك العام
(function () {
  emailjs.init("HPu1IQqFtYCWgYSYn"); // المفتاح العام (Public Key)
})();

// ✅ تحديد الفورم
const form = document.getElementById("contact-form");

// ✅ عند إرسال الفورم
form.addEventListener("submit", function (e) {
  e.preventDefault();

  // ممكن تضيف "تحميل" أثناء الإرسال (اختياري)
  const submitButton = form.querySelector("button");
  submitButton.textContent = "Sending...";
  submitButton.disabled = true;

  // ✅ إرسال البيانات إلى EmailJS
  emailjs
    .send("service_g2578wg", "template_91rg4tm", {
      name: form.name.value,
      email: form.email.value,
      message: form.project.value, // لاحظ هنا: project → message
      time: new Date().toLocaleString(), // يرسل الوقت لو حابب تستخدمه في القالب
    })
    .then(
      function () {
        Swal.fire("✅ Success!", "تم إرسال الرسالة بنجاح!", "success");
        form.reset();
        submitButton.textContent = "Send Message";
        submitButton.disabled = false;
      },
      function (error) {
        alert("❌ حدث خطأ أثناء الإرسال:\n" + JSON.stringify(error));
        submitButton.textContent = "Send Message";
        submitButton.disabled = false;
      }
    );
});