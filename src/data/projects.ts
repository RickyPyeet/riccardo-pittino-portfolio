import type { Project } from '@/types';

export const projects: Project[] = [
  {
    slug: 'yolov1',
    title: 'YOLOv1',
    summary:
      'Implemented the original YOLO object detection architecture in PyTorch, including the backbone, detection head, loss function, mAP evaluation, and NMS.',

    dataset: 'Pascal VOC 2007 + 2012',
    architecture: 'YOLOv1',
    framework: 'PyTorch',
    duration: '8 weeks',
    status: 'Completed',

    result: '0.50 mAP',
    challenge: 'Implementing YOLO loss, responsible box assignment, and NMS.',

    problem:
      'Object detection requires predicting both object classes and bounding boxes in a single model. YOLOv1 was selected because it exposes the core engineering challenges behind one-stage detectors.',
    decision:
      'Recreated the YOLOv1 pipeline with a custom PyTorch implementation, including dataset parsing, grid-cell target construction, loss computation, mAP evaluation, and inference-time post-processing.',
    outcome:
      'Built a complete object detection system and reached approximately 0.50 mAP after improving normalization, loss behavior, and evaluation consistency.',
    caseStudy: {
      overview: {
        title: 'Overview',
        body:
          'I implemented the original YOLOv1 object detector from scratch in PyTorch to better understand how modern object detection systems perform localization and classification in a single forward pass. The project included rebuilding the backbone, detection head, loss function, evaluation pipeline, and inference workflow rather than relying on existing detection frameworks.',
      },
      architecture: {
        title: 'Architecture',
        body:
          'The implementation follows the original YOLOv1 architecture: a convolutional backbone produces a 7×7 feature grid which is processed by a detection head predicting bounding boxes, objectness scores, and class probabilities. To understand the model end-to-end, I implemented the full detection pipeline, including responsible box assignment, IoU computation, non-maximum suppression, and mAP evaluation.',
      },
      dataset: {
        title: 'Dataset',
        body:
          'Training was performed on Pascal VOC 2007 and 2012. Building the dataset pipeline required parsing XML annotations, converting bounding boxes into YOLO grid-cell targets, handling data augmentation, and ensuring consistency between transformed images and bounding box coordinates.',
      },
      training: {
        title: 'Training',
        body:
          'Training began with backbone pretraining on Tiny ImageNet before fine-tuning the detector on Pascal VOC. A significant portion of the work involved debugging the YOLO loss, balancing localization and no-object terms, validating mAP calculations, and experimenting with normalization strategies. One particularly impactful improvement came from replacing parts of the normalization pipeline, which noticeably improved detection performance.',
      },
      results: {
        title: 'Results',
        body:
          'The final model achieved approximately 0.50 mAP on Pascal VOC and produced reliable detections across multiple object categories. Beyond the metric itself, the project resulted in a complete object detection system including training, evaluation, inference, visualization, and deployment.',
      },
      challenges: {
        title: 'Challenges & Fixes',
        body:
          'The most challenging part of the project was implementing the YOLO loss correctly. Small mistakes in responsible box assignment, IoU computation, target construction, or loss weighting produced significant performance degradation. Debugging required extensive validation of intermediate tensors, visualization of predictions, and verification of the mAP and NMS implementations.',
      },
      lessons: {
        title: 'Lessons Learned',
        body:
          'This project transformed object detection from a high-level concept into a practical engineering problem. Concepts such as IoU, NMS, grid-based prediction, detection losses, and evaluation metrics became tangible implementation details. The instability of training was also mitigated via techniques such as learning rate warm-up and learning rate scheduling, in addition to gradient clipping to avoid exploding gradients.',
      },
    },

    visuals: {
      trainingLoss: '/images/projects/yolov1/yolo_train_loss.png',
      validationLoss: '/images/projects/yolov1/yolo_val_loss.png',
      metricPlot: '/images/projects/yolov1/yolo_map_score.png',
      resultImage: '/images/projects/yolov1/yolo-detection.webp',
    },

    tags: ['PyTorch', 'Object Detection', 'YOLOv1', 'Pascal VOC', 'mAP', 'NMS'],
    categories: ['computer-vision'],
    difficulty: 'advanced',

    featured: true,

    image: '/images/projects/yolov1/yolo-detection.webp',
    imageAlt: 'YOLOv1 object detection examples on Pascal VOC images',

    githubUrl: '',
    liveUrl: 'https://huggingface.co/spaces/Pitto16/YOLOv1',

    publishedAt: '2026-03-30',
  },
  {
    slug: 'ddpm',
    title: 'DDPM',
    summary:
      'Implemented a class-conditional diffusion model with a UNet denoiser, EMA weights, DDIM sampling, and classifier-free guidance.',

    dataset: 'CIFAR-10',
    architecture: 'DDPM + UNet',
    framework: 'PyTorch',
    duration: '6 weeks',
    status: 'Completed',

    result: 'Class-conditional image generation',
    challenge: 'Improving sampling quality, training stability, and guidance behavior.',

    problem:
      'Diffusion models require learning a denoising process over many timesteps, making them difficult to debug, evaluate, and sample efficiently.',
    decision:
      'Built the diffusion training and sampling pipeline in PyTorch, including noise schedules, timestep conditioning, EMA, DDIM sampling, and classifier-free guidance.',
    outcome:
      'Produced class-conditional CIFAR-10 samples and developed a clearer understanding of denoising objectives, sampling tradeoffs, and training stability.',
    caseStudy: {
      overview: {
        title: 'Overview',
        body:
          'This project explores diffusion-based generative modeling by implementing a Denoising Diffusion Probabilistic Model (DDPM) from scratch in PyTorch. The goal was to understand how modern generative models learn to reverse a gradual noise process and how architectural and training decisions affect sample quality.',
      },
      architecture: {
        title: 'Architecture',
        body:
          'The model uses a UNet-based denoiser with residual blocks, timestep conditioning, normalization layers, and attention mechanisms. During development I progressively extended the implementation with class conditioning, classifier-free guidance both in training and inference, DDIM sampling, exponential moving average (EMA) weights, and alternative prediction objectives such as v-prediction.',
      },
      dataset: {
        title: 'Dataset',
        body:
          'Training was performed on CIFAR-10. While relatively small, the dataset provides a practical environment for studying diffusion training dynamics, evaluating sampling strategies, and experimenting with conditioning techniques without requiring excessive computational resources.',
      },
      training: {
        title: 'Training',
        body:
          'Training evolved through multiple iterations. Starting from a basic DDPM implementation, I gradually introduced EMA weights, DDIM sampling, classifier-free guidance, and alternative prediction targets. A significant amount of experimentation focused on understanding how these components influence convergence speed, training stability, and generation quality.',
      },
      results: {
        title: 'Results',
        body:
          'The final system produced class-conditional CIFAR-10 generations and clearly demonstrated the impact of training improvements such as EMA weighting and DDIM sampling. Beyond image generation itself, the project resulted in a complete diffusion pipeline including training, evaluation, sampling, conditioning, and inference workflows.',
      },
      challenges: {
        title: 'Challenges & Fixes',
        body:
          'One of the most challenging aspects was connecting the mathematical formulation of diffusion models with their practical implementation. Debugging the sampling process, validating noise schedules, integrating guidance mechanisms, and understanding the differences between prediction objectives required extensive experimentation and verification.',
      },
      lessons: {
        title: 'Lessons Learned',
        body:
          'Implementing a diffusion model from scratch provided a much deeper understanding of modern generative AI systems. Concepts such as denoising objectives, sampling tradeoffs, EMA, guidance techniques, and conditioning mechanisms became practical engineering tools rather than theoretical concepts.',
      },

    },
    visuals: {
      trainingLoss: '/images/projects/ddpm/ddpm-train-loss.png',
      resultImage: '/images/projects/ddpm/ddim-sampling-collage.png',
      gif: '/images/projects/ddpm/ddpm-gif.gif',
    },

    tags: ['PyTorch', 'Diffusion Models', 'DDPM', 'DDIM', 'EMA', 'CFG'],
    categories: ['generative-ai', 'research'],
    difficulty: 'advanced',

    featured: true,

    image: '/images/projects/ddpm/ddim-sampling-collage.png',
    imageAlt: 'DDPM denoising progression and generated CIFAR-10 samples',

    githubUrl: '',
    liveUrl: '#',

    publishedAt: '2026-02-01',
  },
   {
    slug: 'latent-diffusion',
    title: 'Latent Diffusion',
    summary:
      'Built a text-to-image latent diffusion pipeline using a frozen VAE, CLIP text encoder, and cross-attention conditioned UNet.',

    dataset: 'COCO Captions 2017',
    architecture: 'Latent Diffusion + Cross-Attention UNet',
    framework: 'PyTorch',
    duration: 'In progress',
    status: 'In Progress',

    result: 'Text-to-image generation with COCO captions',
    challenge: 'Training an efficient latent-space pipeline with text conditioning and model size limitations',

    problem:
      'Pixel-space diffusion is computationally expensive for image generation. Latent diffusion reduces training cost by learning the denoising process in a compressed latent space.',
    decision:
      'Combined a frozen pretrained VAE, frozen CLIP text encoder, and a custom cross-attention UNet trained on COCO image-caption pairs.',
    outcome:
      'Built a working text-conditioned latent diffusion pipeline and began producing prompt-conditioned samples while iterating on attention placement, learning rate, and training stability.',
    caseStudy: {
      overview: {
        title: 'Overview',
        body:
          'This project extends diffusion modeling into latent space by combining a pretrained VAE, a CLIP text encoder, and a custom text-conditioned UNet. The goal was to understand the core ideas behind modern text-to-image systems.',
      },
      architecture: {
        title: 'Architecture',
        body:
          'The pipeline consists of a frozen VAE for image compression, a frozen CLIP text encoder for prompt conditioning, and a diffusion UNet with cross-attention operating in latent space.',
      },
      dataset: {
        title: 'Dataset',
        body:
          'Training uses COCO 2017 image-caption pairs. Each image is paired with natural language descriptions, enabling text-conditioned image generation.',
      },
      training: {
        title: 'Training',
        body:
          'Experiments focused on latent-space diffusion, prompt conditioning, cross-attention placement, learning-rate tuning, EMA, and efficient training with frozen pretrained components.',
      },
      results: {
        title: 'Results',
        body:
          'The model produces prompt-conditioned image generations and demonstrates the complete text-to-image pipeline used by modern latent diffusion systems.',
      },
      challenges: {
        title: 'Challenges & Fixes',
        body:
          'Major challenges included integrating multiple pretrained components, handling latent representations correctly, debugging text conditioning, and optimizing training speed.',
      },
      lessons: {
        title: 'Lessons Learned',
        body:
          'This project connected multiple areas of deep learning: VAEs, transformers, cross-attention, diffusion models, and multimodal learning. It significantly improved my understanding of modern generative AI architectures.',
      },
    },
    visuals: {
      trainingLoss: '/images/projects/ddpm/ddpm-train-loss.png',
      resultImage: '/images/projects/ddpm/ddim-sampling-collage.png',
      gif: '/images/projects/ddpm/ddpm-gif.gif',
    },
    tags: ['PyTorch', 'Latent Diffusion', 'VAE', 'CLIP', 'Cross Attention', 'COCO'],
    categories: ['generative-ai', 'research'],
    difficulty: 'research-level',

    featured: true,

    image: '/images/projects/latent-diffusion.webp',
    imageAlt: 'Latent diffusion text-to-image generated samples from COCO captions',

    githubUrl: '',
    liveUrl: '#',

    publishedAt: '2026-06-13',
  },
 ];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export const projectCategories = [
  { value: 'all', label: 'All' },
  { value: 'computer-vision', label: 'Computer Vision' },
  { value: 'generative-ai', label: 'Generative AI'},
  { value: 'research', label: 'Research' },
] as const;
