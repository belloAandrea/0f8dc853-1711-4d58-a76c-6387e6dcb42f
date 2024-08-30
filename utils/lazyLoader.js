const lazyLoader = (callback) => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                callback();
                observer.unobserve(entry.target);
            }
        });
    });

    return (element) => {
        observer.observe(element);
    };
};

export default lazyLoader;