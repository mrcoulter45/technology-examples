# Kubernetes

## Background
Kubernetes is a portable, extensible, open-source container-orchestration system for automating application deployment, scaling, and management that facilitates both declarative configuration and automation. It was originally designed by Google, and is now maintained by the Cloud Native Computing Foundation. The name Kubernetes originates from Greek, meaning helmsman or pilot. Google open-sourced the Kubernetes project in 2014. Kubernetes builds upon a decade and a half of experience that Google has with running production workloads at scale, combined with best-of-breed ideas and practices from the community.

## Installation

## Notes
Desired State Management
1. A YAML file (Deployment YAML File) with list of desired container configs is created
    - file contains a series of POD configs, which is the smallest unit of deployment in Kubernetes
    - a POD may contain 1 or more running containers
    - in order to run a POD, 1 or more container images for that POD need to be specified in the Deployment YAML File
    - Deployment YAML File can specify which PODs need to be replicated across workers
1. The Deployment YAML File is fed to the Kubernetes Cluster Service
1. The Kubernetes Cluster Service is responsible for dynamically deploying the containers specified by the Deployment YAML File to an array of host machines ('workers')
    - The Kubernetes Cluster Service communicates with workers via the workers' Kubelet process that is always running
    - if a worker goes down, it is up to the Kubernetes Cluster Services to re-deploy the containers that were running on the dead worker to different available worker(s)
    - workers are allowed to run more than 1 container
    - The Kubernetes Cluster Services combined with all of the workers are what make up the 'Kubernetes Cluster'

Kubernetes can be told how much CPU and memory (RAM) each container needs

## References
1. Overview: https://kubernetes.io/docs/concepts/
1. Tutorials: https://kubernetes.io/docs/tutorials/
1. Kubernetes General Overview: https://www.youtube.com/watch?v=PH-2FfFD2PU
