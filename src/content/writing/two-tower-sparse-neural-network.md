---
title: "Two-tower Sparse Neural Networks"
description: "Two towers, sparse weights, one output — and the surprising number of places this architecture earns its keep."
date: 2022-04-21
topic: AI
---

Two-tower Sparse Neural Network (or TTSN for short) is a NN architecture that consists of two separate branches, or "towers," of layers. Each tower processes a different type of input, and the outputs from each tower are then combined in some way to produce the final output.

The term *sparse* is often used in ML to refer to models that have a large number of parameters but only a relatively small number of active (non-zero) parameters at any given time. See [Sparse Neural Networks](/writing/sparse-neural-networks/) for more.

### Applications

TTSN has a wide range of applications:

1. **Recommendation systems.** Two-tower networks can build recommendation systems that suggest products, services, or content to users based on their past behavior or preferences. One tower represents the user; the other represents the item being recommended.
2. **Natural language processing.** Tasks such as sentiment analysis, language translation, and named entity recognition. One tower can represent the input text, while the other represents the context or task.
3. **Computer vision.** Image classification, object detection, segmentation. One tower can represent image features, while the other represents the object class or category.
4. **Fraud detection.** One tower can represent user behavior, while the other represents the historical patterns of fraudulent behavior.

### Implementation

Each tower consists of a sequence of layers. Let h<sub>k</sub>(x) be the output of the *k*-th layer in the first tower and g<sub>k</sub>(y) the output of the *k*-th layer in the second tower.

The outputs of the two towers are combined to produce the final output. One common approach is to concatenate the outputs of the last layer in each tower and feed them into a final layer:

> f([h<sub>L</sub>(x), g<sub>L</sub>(y)])

where L is the number of layers in each tower.

To enforce sparsity in the model, we can use regularization techniques such as L1 regularization or dropout, which encourage some of the weights in the network to be zero. This can help reduce the number of active parameters in the model and improve its generalization performance.

The specific mathematical details of a TTSN will depend on the specific architecture and regularization techniques used, but the above gives a general idea of how the model works.
