// Main TypeScript logic for Szirák Szabolcs CV Website
import './style.css';

document.addEventListener('DOMContentLoaded', () => {
  initClipboardCopy();
  initScrollSpy();
  initMobileMenu();
  initCurrentYear();
});

/**
 * Initializes clipboard copying with visual toast feedback
 */
function initClipboardCopy(): void {
  const copyButtons = document.querySelectorAll<HTMLElement>('[data-copy-email]');
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');

  let toastTimer: number | null = null;

  copyButtons.forEach((btn) => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      const email = btn.dataset.copyEmail || 'sziraksz@gmail.com';

      try {
        await navigator.clipboard.writeText(email);
        showToast(`Email-cím (${email}) kimásolva a vágólapra!`);
      } catch (err) {
        console.error('Nem sikerült a vágólapra másolás:', err);
        // Fallback for older browsers or denied permissions
        const textArea = document.createElement('textarea');
        textArea.value = email;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showToast(`Email-cím (${email}) kimásolva!`);
      }
    });
  });

  function showToast(message: string): void {
    if (!toast || !toastMessage) return;

    if (toastTimer !== null) {
      window.clearTimeout(toastTimer);
    }

    toastMessage.textContent = message;
    toast.classList.remove('hidden');
    toast.classList.add('toast-enter');

    toastTimer = window.setTimeout(() => {
      toast.classList.add('hidden');
      toast.classList.remove('toast-enter');
      toastTimer = null;
    }, 3200);
  }
}

/**
 * Initializes IntersectionObserver to track and highlight the currently active section
 */
function initScrollSpy(): void {
  const sections = document.querySelectorAll<HTMLElement>('section[id]');
  const navLinks = document.querySelectorAll<HTMLAnchorElement>('.nav-link');
  const mobileLinks = document.querySelectorAll<HTMLAnchorElement>('.mobile-nav-link');

  if (sections.length === 0) return;

  const observerOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: '-20% 0px -65% 0px',
    threshold: 0,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        if (!id) return;

        // Desktop nav
        navLinks.forEach((link) => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });

        // Mobile nav
        mobileLinks.forEach((link) => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('text-navy-800', 'font-semibold', 'bg-slate-100');
            link.classList.remove('text-slate-600');
          } else {
            link.classList.remove('text-navy-800', 'font-semibold', 'bg-slate-100');
            link.classList.add('text-slate-600');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach((section) => observer.observe(section));
}

/**
 * Handles mobile hamburger navigation toggle
 */
function initMobileMenu(): void {
  const toggleBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll<HTMLAnchorElement>('.mobile-nav-link');

  if (!toggleBtn || !mobileMenu) return;

  const toggle = (): void => {
    const isHidden = mobileMenu.classList.contains('hidden');
    if (isHidden) {
      mobileMenu.classList.remove('hidden');
      toggleBtn.setAttribute('aria-expanded', 'true');
    } else {
      mobileMenu.classList.add('hidden');
      toggleBtn.setAttribute('aria-expanded', 'false');
    }
  };

  toggleBtn.addEventListener('click', toggle);

  // Close menu upon clicking any mobile navigation link
  mobileLinks.forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      toggleBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

/**
 * Sets current year in the copyright notice
 */
function initCurrentYear(): void {
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear().toString();
  }
}
