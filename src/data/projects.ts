import type { Project } from '@/types';

export const projects: Project[] = [
{
  slug: 'yolov1',
  title: 'YOLOv1',
  summary:
    'Implemented the original YOLOv1 detector in PyTorch and evaluated how learning rate scheduling and normalization affected training stability and mAP.',

  dataset: 'Pascal VOC 2007 + 2012',
  architecture: 'YOLOv1',
  framework: 'PyTorch',
  duration: '8 weeks',
  status: 'Completed',

  result: '0.50 mAP',
  challenge:
    'Implementing the detection loss, target assignment, evaluation pipeline, and stable training configuration.',

  problem:
    'The project focused on understanding the complete training and inference pipeline of a one-stage object detector, from annotation processing and target construction to bounding-box evaluation and post-processing.',

  decision:
    'YOLOv1 was implemented without relying on an existing detection framework. The convolutional backbone was pretrained on Tiny ImageNet and kept frozen while the detection head was trained on Pascal VOC.',

  outcome:
    'The final model reached approximately 0.50 mAP. Experiments with learning rate warm-up, cosine scheduling, and GroupNorm improved convergence and training stability compared with the initial baseline.',

  caseStudy: {
    overview: {
      title: 'Overview',
      body:
        'This project implements the original YOLOv1 object detector in PyTorch, including the Darknet backbone, detection head, YOLO loss, IoU, Non-Maximum Suppression, and mAP evaluation. Starting from a working baseline, the training pipeline was progressively refined through experiments on learning rate scheduling and normalization.',
    },

    architecture: {
      title: 'Architecture',
      body:
        'The model follows the original 7×7 grid-based prediction structure. Each grid cell predicts bounding boxes, objectness scores, and class probabilities. The remaining detection pipeline, including responsible-box assignment, IoU, NMS, and mAP, was implemented separately.',
    },

    dataset: {
      title: 'Dataset',
      body:
        'The convolutional backbone was pretrained on Tiny ImageNet-200 and then transferred to Pascal VOC 2007 and 2012. During detector training, the backbone remained frozen while the detection head was optimized on the combined VOC dataset.',
    },

    training: {
      title: 'Training & Experiments',
      body:
        'Four configurations were compared to evaluate the effect of the initial learning rate, linear warm-up, cosine scheduling, and normalization. Warm-up and scheduling improved early training stability, while replacing BatchNorm with GroupNorm produced the most stable optimization and the fastest convergence.',
    },

    results: {
      title: 'Results',
      body:
        'The final configuration reached approximately 0.50 mAP. Learning rate warm-up and cosine decay moved convergence forward by about 20 epochs, while the GroupNorm experiment converged roughly 40 epochs earlier than the baseline and achieved the best validation mAP.',
    },

    challenges: {
      title: 'Engineering Challenges',
      body:
        'The most error-prone components were target construction, responsible-box assignment, IoU calculation, and mAP evaluation. Small mistakes in these stages affected both training signals and reported performance, requiring intermediate tensor checks and visual inspection of detections.',
    },

    lessons: {
      title: 'Main Takeaway',
      body:
        'The experiments showed that training configuration had a substantial effect even when the architecture and dataset remained unchanged. In particular, normalization and learning rate behavior influenced both convergence speed and final detection performance.',
    },

    failures: {
      title: 'Current Limitations',
      body:
        'The detector still struggles with small objects, crowded scenes, and precise localization. Confidence is also uneven across classes: some predictions are overconfident, while others require a low inference threshold to be retained.',
    },
  },

  visuals: {
    items: [
      {
        src: '/images/projects/yolov1/yolo_train_loss.png',
        alt: 'YOLOv1 training loss across the compared training configurations',
        caption:
          'Training loss for the baseline, lower learning rate, warm-up with cosine scheduling, and GroupNorm experiments.',
        section: 'training',
      },
      {
        src: '/images/projects/yolov1/yolo_val_loss.png',
        alt: 'YOLOv1 validation loss across the compared training configurations',
        caption:
          'Validation loss across the four training configurations.',
        section: 'training',
      },
      {
        src: '/images/projects/yolov1/yolo_map_score.png',
        alt: 'YOLOv1 mean average precision across training',
        caption:
          'GroupNorm produced the fastest convergence and the highest validation mAP.',
        section: 'results',
      },
    ],
  },

  tags: [
    'PyTorch',
    'Object Detection',
    'YOLOv1',
    'Pascal VOC',
    'mAP',
    'NMS',
  ],
  categories: ['computer-vision'],
  difficulty: 'advanced',

  featured: true,

  image: '/images/projects/yolov1/yolo-detection.webp',
  imageAlt: 'YOLOv1 object detection examples on Pascal VOC images',

  githubUrl: 'https://github.com/RickyPyeet/yolov1-pytorch',
  liveUrl: 'https://huggingface.co/spaces/Pitto16/YOLOv1',

  publishedAt: '2026-03-30',
},
{
  slug: 'ddpm',
  title: 'DDPM',
  summary:
    'Implemented a DDPM training pipeline in PyTorch and extended it with modern diffusion techniques to study training objectives, sampling strategies, and stabilization methods.',

  dataset: 'CIFAR-10',
  architecture: 'DDPM + UNet',
  framework: 'PyTorch',
  duration: '6 weeks',
  status: 'Completed',

  result: 'Best FID: 12.3',
  challenge:
    'Designing controlled experiments to compare prediction targets while keeping the training recipe unchanged.',

  problem:
    'Beyond reproducing DDPM, the objective was to understand how different training objectives and sampling strategies affect optimization stability and generation quality.',

  decision:
    'Starting from the original DDPM formulation, the implementation was progressively extended with DDIM sampling, EMA, classifier-free guidance, class conditioning, mixed precision, and YAML-based configuration to support reproducible experiments.',

  outcome:
    'A controlled ablation study comparing ε, x₀ and velocity prediction showed that, under the selected training recipe, velocity prediction achieved the best FID while ε prediction failed to generate meaningful samples with a 100-step DDIM sampler.',

  caseStudy: {
    overview: {
      title: 'Overview',
      body:
        'This project implements a DDPM training pipeline in PyTorch and extends it with techniques commonly adopted by modern diffusion models. After reproducing the original algorithm, the project evolved into an experimental framework for studying training objectives, sampling strategies, and training stability.',
    },

    architecture: {
      title: 'Architecture',
      body:
        'The model uses a UNet denoiser with residual blocks, sinusoidal timestep embeddings and self-attention. The training pipeline supports DDPM and DDIM sampling, EMA weights, classifier-free guidance, class conditioning, mixed precision, checkpointing, and YAML-based configuration.',
    },

    dataset: {
      title: 'Dataset',
      body:
        'Training was performed on CIFAR-10. Its relatively small size allowed multiple controlled experiments to be completed while keeping the training recipe identical across all runs.',
    },

    training: {
      title: 'Training & Experiments',
      body:
        'Three controlled training runs were performed to compare ε, x₀ and velocity prediction while keeping the remaining hyperparameters fixed. Throughout training, loss, gradient norm and FID were monitored to evaluate optimization stability and generation quality.',
    },

    results: {
      title: 'Results',
      body:
        'Velocity prediction achieved the lowest FID, followed by x₀ prediction. Although the ε model remained numerically stable during training, it failed to generate meaningful samples when evaluated with a 100-step DDIM sampler, suggesting that the observed degradation was not caused by optimization instability alone.',
    },

    challenges: {
      title: 'Engineering Challenges',
      body:
        'Once the baseline implementation was complete, the focus shifted from implementation to experimentation. Each ablation required isolating a single variable while keeping the remaining training configuration unchanged to produce meaningful comparisons.',
    },

    lessons: {
      title: 'Main Takeaway',
      body:
        'Implementing the model was only the starting point. The most valuable part of the project was learning how seemingly small changes in the training recipe can substantially affect sample quality while leaving optimization metrics almost unchanged.',
    },

    failures: {
      title: 'Current Limitations',
      body:
        `The interaction between ε prediction and DDIM sampling still requires further investigation, as it remains unclear whether the observed degradation originates from the prediction target, the training recipe, or the sampling procedure. FID was computed on 10k generated samples, so the reported values should be validated using the standard 50k-sample protocol. Future work will also investigate how attention placement influences both generation quality and computational cost.`,
    },
  },

  visuals: {
    items: [
      {
        src: '/images/projects/ddpm/ddpm-fid-full.png',
        alt: 'FID comparison for epsilon, x0 and velocity prediction',
        caption:
          'FID measured every 100k training steps. Velocity achieved the best final result, while epsilon remained close to 220.',
        section: 'results',
      },
      {
        src: '/images/projects/ddpm/ddim-sampling-collage.png',
        alt: 'Generated CIFAR-10 samples from x0 and velocity prediction models',
        caption:
          'Qualitative comparison between samples generated by the x₀ and velocity models.',
        section: 'results',
      },
      {
        src: '/images/projects/ddpm/float16_divergence.png',
        alt: 'Training loss spikes caused by float16 mixed precision',
        caption:
          'Using float16 introduced instability in the epsilon run; switching to bfloat16 removed the divergence.',
        section: 'challenges',
      },
      {
        src: '/images/projects/ddpm/ddpm-gif.gif',
        alt: 'DDPM denoising process from random noise to a generated image',
        caption:
          'Denoising progression during sampling.',
        section: 'lessons',
        display: 'pixelated',
      },
    ],
  },

  tags: [
    'PyTorch',
    'Diffusion Models',
    'DDPM',
    'DDIM',
    'EMA',
    'CFG',
    'Research',
  ],

  categories: ['generative-ai', 'research'],
  difficulty: 'advanced',

  featured: true,

  image: '/images/projects/ddpm/ddim-sampling-collage.png',
  imageAlt: 'Class-conditional DDPM generations on CIFAR-10',

  githubUrl: 'https://github.com/RickyPyeet/ddpm-pytorch',
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
      failures: {
        title: 'Failures and Improvements',
        body:
          `While the model started generating some recognizable samples it still doesn't perform well over all its classes. 
          Geometrical classes such as "pizza" are better generated, while classes such as "person" or "bycicle" are still hard to sample correctly.`
      }
    },
  visuals: {
    items: [
      {
        src: '/images/projects/ddpm/ddpm-fid-full.png',
        alt: 'FID comparison for epsilon, x0 and velocity prediction',
        caption:
          'FID measured every 100k training steps. Velocity achieved the best final result, while epsilon remained close to 220.',
        section: 'results',
      },
      {
        src: '/images/projects/ddpm/ddim-sampling-collage.png',
        alt: 'Generated CIFAR-10 samples from x0 and velocity prediction models',
        caption:
          'Qualitative comparison between samples generated by the x₀ and velocity models.',
        section: 'results',
      },
      {
        src: '/images/projects/ddpm/float16_divergence.png',
        alt: 'Training loss spikes caused by float16 mixed precision',
        caption:
          'Using float16 introduced instability in the epsilon run; switching to bfloat16 removed the divergence.',
        section: 'challenges',
      },
      {
        src: '/images/projects/ddpm/ddpm-gif.gif',
        alt: 'DDPM denoising process from random noise to a generated image',
        caption:
          'Denoising progression during sampling.',
        section: 'lessons',
        display: 'pixelated',
      },
    ],
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
