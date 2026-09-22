const contactDetails = {
  email: "duyhiepnguyen.dev@gmail.com",
  github: "https://github.com/hiepnguyndev",
  linkedin: "https://www.linkedin.com/in/hiepnguyndev/",
};

const contactItems = [
  {
    id: "email",
    value: contactDetails.email,
    href: contactDetails.email ? `mailto:${contactDetails.email}` : "",
    label: contactDetails.email,
  },
  {
    id: "github",
    value: contactDetails.github,
    href: contactDetails.github,
    label: contactDetails.github.replace(/^https?:\/\/(www\.)?/, ""),
  },
  {
    id: "linkedin",
    value: contactDetails.linkedin,
    href: contactDetails.linkedin,
    label: contactDetails.linkedin.replace(/^https?:\/\/(www\.)?/, ""),
  },
];

let hasContactDetail = false;

contactItems.forEach(({ id, value, href, label }) => {
  const link = document.querySelector(`#contact-${id}-link`);
  const text = document.querySelector(`#contact-${id}`);

  if (!link || !text || !value || !href) {
    link?.setAttribute("aria-disabled", "true");
    return;
  }

  hasContactDetail = true;

  text.textContent = label;
  link.href = href;

  // Email mở ứng dụng mail,
  // GitHub và LinkedIn mở tab mới
  link.target = id === "email" ? "_self" : "_blank";
  link.rel = id === "email" ? "" : "noreferrer";
});

const contactNote = document.querySelector("#contact-note");

if (contactNote) {
  contactNote.textContent = hasContactDetail
    ? "Bạn có thể liên hệ với tôi qua các kênh bên trên."
    : "Thông tin liên hệ đang được cập nhật.";
}

// Tự động cập nhật năm ở footer
const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}