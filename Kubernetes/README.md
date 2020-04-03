# Kubernetes

## Background
Kubernetes is a portable, extensible, open-source container-orchestration system for automating application deployment, scaling, and management that facilitates both declarative configuration and automation. It was originally designed by Google, and is now maintained by the Cloud Native Computing Foundation. The name Kubernetes originates from Greek, meaning helmsman or pilot. Google open-sourced the Kubernetes project in 2014. Kubernetes builds upon a decade and a half of experience that Google has with running production workloads at scale, combined with best-of-breed ideas and practices from the community.

## [Tutorial](https://kubernetes.io/docs/tutorials/kubernetes-basics/)
This tutorial demonstrates how to:
1. Create a Kubernetes cluster
1. Deploy an app
1. Explore your app
1. Expose your app publicly
1. Scale up your app
1. Update your app

### Create a Kubernetes cluster
![alt text](https://d33wubrfki0l68.cloudfront.net/99d9808dcbf2880a996ed50d308a186b5900cec9/40b94/docs/tutorials/kubernetes-basics/public/images/module_01_cluster.svg "Kubernetes Cluster")
Check minikube version
`minikube version`
Start Kubernetes cluster
`minikube start`
Check kubectl version
`kubectl version`
Check cluster info
`kubectl cluster-info`
List nodes in cluster
`kubectl get nodes`

### Deploy an app
![alt text](https://d33wubrfki0l68.cloudfront.net/152c845f25df8e69dd24dd7b0836a289747e258a/4a1d2/docs/tutorials/kubernetes-basics/public/images/module_02_first_app.svg "Kubernetes Cluster with Applications")
Deploy a containerized app on the Kubernetes cluster via an image (include the full repository url for images hosted outside Docker hub)
    Command will:
    - search for a suitable node where an instance of the application could be run
    - schedule the application to run on that Node
    - configure the cluster to reschedule the instance on a new Node when needed
`kubectl create deployment <app-name> --image=<image-URL>`
List deployments
`kubectl get deployments`
Create proxy between host and the Kubernetes cluster. The proxy enables direct access to the API from the terminal. The API server will automatically create an endpoint for each pod, based on the pod name, that is also accessible through the proxy.
`kubectl proxy`
To test Kubernetes cluster API endpoint
`curl http://localhost:8001/version`

### Explore your app
### Expose your app publicly
### Scale up your app
### Update your app

## Commands

List Pod, Service, Deployment, and ReplicaSet info:
`kubectl get all`

List StorageClasses:
`kubectl get sc`

List Persistent Volumes and Persistent Volume Claims:
`kubectl get pv,pvc`

List ingress info:
`kubectl get ingress`

List ingress more detailed info:
`kubectl describe ingress pelion-ml-ingress`

List pods:
`kubectl get pods`

List logs for specific Pod:
`kubectl logs <pod-name>`

List Kubernetes Events (good for debugging):
`kubectl get events`

List the names of cluster’s Nodes:
`kubectl get nodes`

To run a bash shell in a specified Pod container:
`kubectl exec -it <pod-name> -- /bin/bash`

Create a Kubernetes object:
`kubectl apply -f <obj-file>`

Delete a Persistent Volume:
`kubectl delete pv <pv-name>`

Delete a Persistent Volume Claim:
`kubectl delete pvc <pvc-name>`

Delete an ingress:
`kubectl delete ingress <ingress-name>`

## Terms
- **Pod** - models an application-specific "logical host" and can contain different application containers which are relatively tightly coupled. It is a Kubernetes abstraction that represents a group of one or more application containers (such as Docker or rkt), and some shared resources for those containers. Those resources include:
    - Shared storage, as Volumes
    - Networking, as a unique cluster IP address
    - Information about how to run each container, such as the container image version or specific ports to use
In case of a node failure, identical pods are scheduled on other available Nodes in the cluster.
- **Node** - a worker machine in Kubernetes and may be either a virtual or a physical machine, depending on the cluster. Each Node is managed by the Master. A Node can have multiple pods, and the Kubernetes master automatically handles scheduling the pods across the Nodes in the cluster. The Master's automatic scheduling takes into account the available resources on each Node. Every Kubernetes Node runs at least:
    - Kubelet, a process responsible for communication between the Kubernetes Master and the Node; it manages the Pods and the containers running on a machine.
    - A container runtime (like Docker, rkt) responsible for pulling the container image from a registry, unpacking the container, and running the application.
- **Service** - An abstract way to expose an application running on a set of Pods as a network service.
With Kubernetes you don’t need to modify your application to use an unfamiliar service discovery mechanism. Kubernetes gives Pods their own IP addresses and a single DNS name for a set of Pods, and can load-balance across them.
A Service in Kubernetes is a REST object, similar to a Pod. Like all of the REST objects, you can `POST` a Service definition to the API server to create a new instance.
For example, suppose you have a set of Pods that each listen on TCP port 9376 and carry a label `app=MyApp`
- **Deployment** - A Deployment provides declarative updates for Pods and ReplicaSets.
You describe a desired state in a Deployment, and the Deployment Controller changes the actual state to the desired state at a controlled rate. You can define Deployments to create new ReplicaSets, or to remove existing Deployments and adopt all their resources with new Deployments.

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
