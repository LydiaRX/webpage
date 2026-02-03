import { isHomePath } from './utils.js';

const normalizePath = (path) => {
  const raw = String(path || '');
  const withoutIndex = raw.replace(/\/index\.html$/, '/');
  const trimmed = withoutIndex.replace(/\/+$/, '');
  return trimmed === '' ? '/' : trimmed;
};

const getLinkPath = (link) => {
  if (!link || !link.href) {
    return '';
  }
  try {
    return normalizePath(new URL(link.href, window.location.origin).pathname);
  } catch (error) {
    return '';
  }
};

const isSameOrChildPath = (currentPath, linkPath) => {
  if (!linkPath) {
    return false;
  }
  if (linkPath === '/') {
    return isHomePath();
  }
  return currentPath === linkPath || currentPath.startsWith(`${linkPath}/`);
};

export function initActiveNav() {
  const currentPath = normalizePath(window.location.pathname || '');

  document.querySelectorAll('.nav_link.w-nav-link').forEach((link) => {
    const linkPath = getLinkPath(link);
    link.classList.toggle('w--current', isSameOrChildPath(currentPath, linkPath));
  });

  document.querySelectorAll('.nav_link-wrapper.dropdown').forEach((wrapper) => {
    const toggle = wrapper.querySelector('.nav_link.is-for-dropdown');
    if (!toggle) {
      return;
    }
    const dropdownLinks = Array.from(wrapper.querySelectorAll('.dropdownItem'));
    const isActive = dropdownLinks.some((link) => getLinkPath(link) === currentPath);
    toggle.classList.toggle('is-active', isActive);
  });
}

export function initDropdowns() {
  const dropdownElements = document.querySelectorAll('.nav_link-wrapper.dropdown');

  dropdownElements.forEach(dropdownEl => {
    const dropdownContainer = dropdownEl.querySelector('.dropdown-container');

    if (dropdownContainer) {
      // Replicating the style from the React component to hide/show.
      dropdownContainer.style.clipPath = 'inset(10% 50% 90% 50% round 10px)';
      dropdownContainer.style.pointerEvents = 'none';
      dropdownContainer.style.transition = 'clip-path 0.4s ease, -webkit-clip-path 0.4s ease'; // Added vendor prefix for broader compatibility

      dropdownEl.addEventListener('mouseenter', () => {
        dropdownContainer.style.clipPath = 'inset(0% 0% 0% 0% round 10px)';
        dropdownContainer.style.pointerEvents = 'auto';
      });

      dropdownEl.addEventListener('mouseleave', () => {
        dropdownContainer.style.clipPath = 'inset(10% 50% 90% 50% round 10px)';
        dropdownContainer.style.pointerEvents = 'none';
      });
    }
  });
}
