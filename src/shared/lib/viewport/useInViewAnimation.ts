import { onBeforeUnmount, onMounted, ref } from 'vue';

export function useInViewAnimation(threshold = 0.15) {
  const target = ref<HTMLElement | null>(null);
  const isInView = ref(false);

  let observer: IntersectionObserver | null = null;

  onMounted(() => {
    if (!('IntersectionObserver' in window)) {
      isInView.value = true;
      return;
    }

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isInView.value = true;
            if (observer && target.value) {
              observer.unobserve(target.value);
            }
          }
        });
      },
      {
        threshold,
      },
    );

    if (target.value) {
      observer.observe(target.value);
    }
  });

  onBeforeUnmount(() => {
    if (observer) {
      observer.disconnect();
      observer = null;
    }
  });

  return {
    target,
    isInView,
  };
}

