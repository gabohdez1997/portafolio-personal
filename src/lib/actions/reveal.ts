export function reveal(node: HTMLElement) {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    node.classList.add('visible');
                } else {
                    node.classList.remove('visible');
                }
            });
        },
        {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        }
    );

    observer.observe(node);

    return {
        destroy() {
            observer.disconnect();
        }
    };
}
