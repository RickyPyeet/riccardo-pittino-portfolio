const timelineItems = [
  {
    title: 'Machine Learning Foundations',
    description: 'PyTorch, neural networks, optimization, training loops, evaluation metrics, and experiment tracking.',
  },
  {
    title: 'Computer Vision',
    description: 'Classification, object detection, grid-based prediction, custom loss functions, IoU, NMS, and mAP evaluation.',
  },
  {
    title: 'Generative Modeling',
    description: 'Noise schedules, denoising objectives, EMA, DDIM sampling, classifier-free guidance, and training stability.',
  },
  {
    title: 'Conditioning',
    description: 'Class embeddings, CLIP embeddings, latent representations, cross-attention, VAE integration, and text-to-image generation.',
  },
  {
    title: 'Current Focus',
    description: 'Building deeper expertise in computer vision, generative AI, and machine learning engineering through implementation-focused projects and technical writing.',
  },
];

export function TechnicalProgression() {
  return (
    <section aria-labelledby="journey-heading">
      <div className="container-app py-xl">
        <div className="max-w-3xl">
          <p className="text-small font-medium uppercase tracking-wide text-accent-dark dark:text-accent">
            Technical Progression
          </p>
          <h2 id="journey-heading" className="mt-sm">
            Key concepts explored through hands-on implementation
          </h2>
          <p className="mt-md text-secondary">
            Each project introduced new challenges and concepts, 
            gradually expanding my understanding of modern deep learning systems.
          </p>
        </div>

        <ol className="mt-xl space-y-8">
          {timelineItems.map((item, index) => (
            <li key={item.title} className="relative pl-10">
              {index < timelineItems.length - 1 && (
                <span
                  className="absolute left-[11px] top-7 h-full w-px bg-border"
                  aria-hidden="true"
                />
              )}

              <span
                className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full border border-accent bg-background"
                aria-hidden="true"
              >
                <span className="h-2 w-2 rounded-full bg-accent" />
              </span>

              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 max-w-2xl text-secondary">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}