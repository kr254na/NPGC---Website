/**
 * common.js - Shared utilities for NPGC College Portal
 */

/**
 * Global Reveal Observer
 * Automatically animates elements with .rv or .reveal classes when they enter the viewport.
 */
class RevealObserver {
    constructor() {
        this.options = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active', 'on');
                    // Once animated, we don't need to observe it anymore
                    this.observer.unobserve(entry.target);
                }
            });
        }, this.options);
    }

    observe(selector = '.rv, .reveal') {
        document.querySelectorAll(selector).forEach(el => this.observer.observe(el));
    }
}

/**
 * Global Counter Utility
 * Animates numerical values when they become visible.
 */
class CounterUtility {
    static init() {
        const obs = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const target = parseInt(el.getAttribute('data-count') || el.innerText.match(/\d+/)[0]);
                    const suffix = el.innerText.replace(/\d+/, '');
                    this.animate(el, target, suffix);
                    obs.unobserve(el);
                }
            });
        }, { threshold: 0.5 });

        document.querySelectorAll('.stat-num, .counter').forEach(el => obs.observe(el));
    }

    static animate(el, target, suffix = '') {
        let cur = 0;
        const duration = 1500;
        const stepTime = 20;
        const steps = duration / stepTime;
        const increment = target / steps;
        
        const timer = setInterval(() => {
            cur += increment;
            if (cur >= target) {
                el.innerText = target + suffix;
                clearInterval(timer);
            } else {
                el.innerText = Math.ceil(cur) + suffix;
            }
        }, stepTime);
    }
}

/**
 * PortalTable - Advanced Data Table Handler
 */
class PortalTable {
    constructor(config) {
        this.data = config.data || [];
        this.container = document.getElementById(config.containerId);
        this.renderRow = config.renderRow;
        this.filterFields = config.filterFields || []; // Fields to search in
        this.onAfterRender = config.onAfterRender || null;
        
        this.state = {
            searchQ: '',
            activeFilter: 'all',
            filterKey: config.filterKey || '',
            sortCol: null,
            sortDir: 1
        };

        this.elements = {
            searchInput: document.getElementById(config.searchInputId),
            filterButtons: document.querySelectorAll(config.filterBtnSelector),
            countDisplay: document.getElementById(config.countDisplayId),
            sortableHeaders: document.querySelectorAll(config.sortHeaderSelector)
        };

        this.init();
    }

    init() {
        if (!this.container) return;

        // Search event
        if (this.elements.searchInput) {
            this.elements.searchInput.addEventListener('input', (e) => {
                this.state.searchQ = e.target.value.toLowerCase();
                this.render();
            });
        }

        // Filter events
        this.elements.filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                this.elements.filterButtons.forEach(b => b.classList.remove('active', 'on'));
                btn.classList.add('active', 'on');
                this.state.activeFilter = btn.dataset.filter || btn.dataset.k;
                this.render();
            });
        });

        // Sort events
        this.elements.sortableHeaders.forEach(th => {
            th.addEventListener('click', () => {
                const col = th.dataset.col;
                if (this.state.sortCol === col) {
                    this.state.sortDir *= -1;
                } else {
                    this.state.sortCol = col;
                    this.state.sortDir = 1;
                }
                
                // Update icons
                this.elements.sortableHeaders.forEach(h => {
                    const icon = h.querySelector('i');
                    if (icon) icon.className = 'fa-solid fa-sort ms-1 opacity-50 small';
                });
                
                const activeIcon = th.querySelector('i');
                if (activeIcon) {
                    activeIcon.className = `fa-solid ${this.state.sortDir === 1 ? 'fa-sort-up' : 'fa-sort-down'} ms-1 opacity-100 small`;
                }

                this.render();
            });
        });

        this.render();
    }

    render() {
        let filtered = this.data.filter(item => {
            // Category Filter
            const val = item[this.state.filterKey];
            const matchesFilter = this.state.activeFilter === 'all' || 
                                (val === this.state.activeFilter) ||
                                (val && val.toString().toLowerCase().includes(this.state.activeFilter.toLowerCase()));
            
            // Search Filter
            const matchesSearch = !this.state.searchQ || this.filterFields.some(field => {
                const val = item[field];
                return val && val.toString().toLowerCase().includes(this.state.searchQ);
            });

            return matchesFilter && matchesSearch;
        });

        // Sorting
        if (this.state.sortCol) {
            filtered.sort((a, b) => {
                let valA = a[this.state.sortCol];
                let valB = b[this.state.sortCol];
                
                if (typeof valA === 'string') {
                    valA = valA.toLowerCase();
                    valB = valB.toLowerCase();
                }

                if (valA < valB) return -1 * this.state.sortDir;
                if (valA > valB) return 1 * this.state.sortDir;
                return 0;
            });
        }

        // Render rows
        if (this.container) {
            if (filtered.length === 0) {
                const cols = this.container.closest('table').querySelectorAll('thead th').length;
                this.container.innerHTML = `<tr><td colspan="${cols}" class="text-center py-5 text-muted"><i class="fa-solid fa-magnifying-glass d-block mb-2 fs-2"></i>No matching records found.</td></tr>`;
            } else {
                this.container.innerHTML = filtered.map((item, idx) => this.renderRow(item, idx)).join('');
            }
        }

        // Update count
        if (this.elements.countDisplay) {
            this.elements.countDisplay.innerHTML = `Showing <strong>${filtered.length}</strong> of <strong>${this.data.length}</strong> records`;
        }

        if (this.onAfterRender) this.onAfterRender(filtered);
    }

    setData(newData) {
        this.data = newData || [];
        this.render();
    }
}

// Global initialization
window.addEventListener('DOMContentLoaded', () => {
    const reveal = new RevealObserver();
    reveal.observe();
    CounterUtility.init();
});
