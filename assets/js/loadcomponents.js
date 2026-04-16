async function loadComponent(id, file) {
  try {
    const res = await fetch(file);
    if (!res.ok) throw new Error(`Could not fetch ${file}`);
    let data = await res.text();
    const container = document.getElementById(id);
    if (!container) return;

    // Dynamically fix paths in the loaded HTML based on basePath
    if (window.basePath) {
        data = data.replace(/src="\.\.\//g, `src="${window.basePath}/`);
        data = data.replace(/href="\.\.\//g, `href="${window.basePath}/`);
    }

    container.innerHTML = data;

    // Execute scripts in the loaded HTML
    const scripts = container.querySelectorAll("script");
    const scriptPromises = Array.from(scripts).map((oldScript) => {
      return new Promise((resolve) => {
        const newScript = document.createElement("script");
        Array.from(oldScript.attributes).forEach((attr) =>
          newScript.setAttribute(attr.name, attr.value)
        );
        newScript.appendChild(document.createTextNode(oldScript.innerHTML));
        
        // If it's an external script, wait for it to load
        if (newScript.src) {
           newScript.onload = resolve;
           newScript.onerror = resolve; // Continue even on error
        } else {
           // Inline scripts execute immediately upon insertion
           resolve();
        }
        oldScript.parentNode.replaceChild(newScript, oldScript);
      });
    });
    
    await Promise.all(scriptPromises);
  } catch (error) {
    console.error("Error loading component:", error);
  }
}

// Dynamically determine the base path
const scriptTagForPath = document.currentScript;
if (scriptTagForPath) {
    const scriptSrcPath = scriptTagForPath.src;
    const scriptsIndexPath = scriptSrcPath.lastIndexOf('/assets/js/');
    window.basePath = scriptsIndexPath !== -1 ? scriptSrcPath.substring(0, scriptsIndexPath) : '';
}

document.addEventListener("DOMContentLoaded", async () => {
  const bp = window.basePath || '';
  
  // Load components and wait for them to finish
  await Promise.all([
    loadComponent("navbar-placeholder", `${bp}/components/navbar.html`),
    loadComponent("footer-placeholder", `${bp}/components/footer.html`)
  ]);

  // Dispatch global event when all components are injected AND their scripts executed
  document.dispatchEvent(new CustomEvent('components-loaded'));
  window.componentsLoaded = true;
});
