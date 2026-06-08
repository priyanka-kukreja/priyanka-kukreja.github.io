---
title: "Reinforcement Learning 201"
description: "Going one level deeper: MDPs, value-based and policy-based methods, and the gotchas of deep RL."
date: 2022-04-19
topic: AI
draft: true
---

Reinforcement learning is a mathematical framework for training an agent to take actions in an environment to maximize a reward signal. The goal is to learn an optimal policy — a function that maps states to actions to maximize the cumulative reward over time.

Formally, we can define a reinforcement learning problem as a Markov Decision Process (MDP) represented by a tuple (S, A, P, R, γ), where:

* **S** is the set of possible states of the environment.
* **A** is the set of possible actions that the agent can take.
* **P** is the transition probability function, which defines the probability of transitioning from one state to another given an action. Formally, P(s′, r | s, a) = Pr(s<sub>t+1</sub> = s′, r<sub>t+1</sub> = r | s<sub>t</sub> = s, a<sub>t</sub> = a).
* **R** is the reward function, which defines the immediate reward received by the agent for taking a particular action in a particular state. Formally, R(s, a) = E[r<sub>t+1</sub> | s<sub>t</sub> = s, a<sub>t</sub> = a].
* **γ** is the discount factor, which determines the importance of future rewards. The discounted cumulative reward, or return, is G<sub>t</sub> = ∑<sub>k=0..∞</sub> γ<sup>k</sup> r<sub>t+k+1</sub>.

The agent's goal is to learn a policy π : S → A that maximizes the expected cumulative reward:

> J(π) = E<sub>π</sub>[G<sub>t</sub>]

There are two main types of reinforcement learning algorithms: model-based and model-free.

**Model-based algorithms** try to learn the transition probabilities P and the reward function R to compute an optimal policy π*. One example is the *value iteration* algorithm, which iteratively computes the optimal value function V* for each state and then derives the optimal policy from V*.

**Model-free algorithms** do not require a model of the environment and learn policies directly from experience. There are two main types of model-free algorithms: value-based and policy-based.

**Value-based algorithms** try to learn the value function V<sup>π</sup>, which estimates the expected cumulative reward starting from a given state and following a certain policy π. One example is the **Q-learning** algorithm, which iteratively updates the Q-values, defined as the expected cumulative reward starting from a state-action pair, by minimizing the temporal difference error:

> δ<sub>t</sub> = r<sub>t+1</sub> + γ max<sub>a′</sub> Q(s<sub>t+1</sub>, a′) − Q(s<sub>t</sub>, a<sub>t</sub>)
>
> Q(s<sub>t</sub>, a<sub>t</sub>) ← Q(s<sub>t</sub>, a<sub>t</sub>) + α · δ<sub>t</sub>

**Policy-based algorithms** try to learn the policy π directly. One example is the **policy gradient** algorithm, which updates the policy parameters θ to increase the expected cumulative reward:

> ∇<sub>θ</sub> J(π<sub>θ</sub>) = E<sub>π<sub>θ</sub></sub>[∇<sub>θ</sub> log π<sub>θ</sub>(s, a) · Q<sup>π</sup>(s, a)]
>
> θ ← θ + α · ∇<sub>θ</sub> J(π<sub>θ</sub>)

**Deep reinforcement learning** is a variant that uses deep neural networks to represent the policy or value function. Deep RL has achieved remarkable success in recent years, with applications in games, robotics, and healthcare. However, deep RL faces several persistent challenges: instability of the learning process, the high computational cost of training, and the difficulty of generalizing to new environments.
