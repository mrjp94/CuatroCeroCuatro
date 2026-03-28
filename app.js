const links = [
  {
    label: "Instagram",
    description: "Fotos, lanzamientos y novedades de 404 Cerveza.",
    href: "https://www.instagram.com/404cerveza?utm_source=qr",
    icon: "instagram",
    meta: "@404cerveza",
  },
  {
    label: "Correo",
    description: "Reservaciones, colaboraciones y contacto directo.",
    href: "mailto:hello@404brewery.com",
    icon: "mail",
    meta: "contacto",
  },
];

const icons = {
  instagram: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="currentColor" stroke-width="1.8"></rect>
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="1.8"></circle>
      <circle cx="17.5" cy="6.8" r="1.2" fill="currentColor"></circle>
    </svg>
  `,
  mail: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 6.5h16v11H4z" fill="none" stroke="currentColor" stroke-width="1.8"></path>
      <path d="M4.7 7.3 12 13l7.3-5.7" fill="none" stroke="currentColor" stroke-width="1.8"></path>
    </svg>
  `,
  link: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M10.8 13.2 8.9 15a3.7 3.7 0 1 1-5.2-5.2l3-3A3.7 3.7 0 0 1 12 9" fill="none" stroke="currentColor" stroke-width="1.8"></path>
      <path d="m13.2 10.8 1.9-1.8a3.7 3.7 0 1 1 5.2 5.2l-3 3A3.7 3.7 0 0 1 12 15" fill="none" stroke="currentColor" stroke-width="1.8"></path>
    </svg>
  `,
};

const linksContainer = document.querySelector("#links");

links.forEach((link, index) => {
  const anchor = document.createElement("a");
  anchor.className = "link-card";
  anchor.href = link.href;
  anchor.target = link.href.startsWith("mailto:") ? "_self" : "_blank";
  anchor.rel = link.href.startsWith("mailto:") ? "" : "noreferrer";
  anchor.style.animation = `fadeUp 480ms ease ${index * 90}ms both`;

  anchor.innerHTML = `
    <div class="link-icon">
      ${icons[link.icon] || icons.link}
    </div>
    <div class="link-copy">
      <em>${link.meta || "enlace"}</em>
      <strong>${link.label}</strong>
      <span>${link.description}</span>
    </div>
    <div class="link-arrow" aria-hidden="true">↗</div>
  `;

  linksContainer.appendChild(anchor);
});

const style = document.createElement("style");
style.textContent = `
  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(18px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .link-icon svg {
    width: 22px;
    height: 22px;
  }

  .link-copy em {
    display: block;
    margin-bottom: 4px;
    color: var(--accent-2);
    font-family: "IBM Plex Mono", monospace;
    font-size: 0.68rem;
    font-style: normal;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }
`;
document.head.appendChild(style);
