/**
 * @file attaches jump menu visibility toggler.
 */
(function () {
  const toggleMenuMenuItemsVisibility = (
    isHidden,
    jumpMenuItems,
    jumpMenuToggle,
  ) => {
    if (isHidden) {
      jumpMenuItems.removeAttribute("aria-hidden");
      jumpMenuToggle.setAttribute("aria-expanded", "true");
    } else {
      jumpMenuItems.setAttribute("aria-hidden", "true");
      jumpMenuToggle.setAttribute("aria-expanded", "false");
    }
  };

  const initialiseJumpMenu = (jumpMenuToggle) => {
    // Check if this toggle has already been initialised
    if (jumpMenuToggle.hasAttribute("data-jump-menu-initialised")) {
      return;
    }

    // Find the corresponding menu items within the same jump menu container
    const jumpMenuContainer = jumpMenuToggle.closest(".iati-jump-menu");
    if (!jumpMenuContainer) {
      return;
    }

    const jumpMenuItems = jumpMenuContainer.querySelector(
      ".js-jump-menu-items",
    );
    if (!jumpMenuItems) {
      return;
    }

    // Mark as initialised to prevent duplicate event listeners
    jumpMenuToggle.setAttribute("data-jump-menu-initialised", "true");

    // Initialise menu as hidden on mobile
    jumpMenuItems.setAttribute("aria-hidden", "true");
    jumpMenuToggle.setAttribute("aria-expanded", "false");

    const handleToggleClick = (event) => {
      event.preventDefault();
      event.stopPropagation();
      const isHidden = jumpMenuItems.getAttribute("aria-hidden") === "true";
      toggleMenuMenuItemsVisibility(isHidden, jumpMenuItems, jumpMenuToggle);
    };

    jumpMenuToggle.addEventListener("click", handleToggleClick);
  };

  const initialiseAllJumpMenus = () => {
    const jumpMenuToggles = document.querySelectorAll(".js-jump-menu-toggle");

    jumpMenuToggles.forEach((toggle) => {
      initialiseJumpMenu(toggle);
    });
  };

  document.addEventListener("DOMContentLoaded", () => {
    initialiseAllJumpMenus();
  });
})();
