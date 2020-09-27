# Amazon

## Background
Amazon.com, Inc. is an American multinational technology company based in Seattle that focuses on e-commerce, cloud computing, digital streaming, and artificial intelligence. It is considered one of the Big Four tech companies, along with Google, Apple, and Facebook.

Amazon is known for its disruption of well-established industries through technological innovation and mass scale. It is the world's largest online marketplace, AI assistant provider, and cloud computing platform as measured by revenue and market capitalization. Amazon is the largest Internet company by revenue in the world. It is the second largest private employer in the United States and one of the world's most valuable companies.

Amazon was founded by Jeff Bezos in Bellevue, Washington, in July 1994. The company initially started as an online marketplace for books but later expanded to sell electronics, software, video games, apparel, furniture, food, toys, and jewelry. In 2015, Amazon surpassed Walmart as the most valuable retailer in the United States by market capitalization. In 2017, Amazon acquired Whole Foods Market for US$13.4 billion, which vastly increased Amazon's presence as a brick-and-mortar retailer. In 2018, Bezos announced that its two-day delivery service, Amazon Prime, had surpassed 100 million subscribers worldwide.

Amazon distributes downloads and streaming of video, music, and audiobooks through its Amazon Prime Video, Amazon Music, and Audible subsidiaries. Amazon also has a publishing arm, Amazon Publishing, a film and television studio, Amazon Studios, and a cloud computing subsidiary, Amazon Web Services. It produces consumer electronics including Kindle e-readers, Fire tablets, Fire TV, and Echo devices. In addition, Amazon acquisitions include Ring, Twitch, Whole Foods Market, and IMDb. Among various controversies, the company has been criticized for technological surveillance overreach, a hyper-competitive and demanding work culture, tax avoidance, and anti-competitive practices.

## Services

### [Amazon AWS](https://aws.amazon.com/)
Amazon Web Services (AWS) is a subsidiary of Amazon that provides on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered pay-as-you-go basis. In aggregate, these cloud computing web services provide a set of primitive abstract technical infrastructure and distributed computing building blocks and tools.

The AWS technology is implemented at server farms throughout the world, and maintained by the Amazon subsidiary. Fees are based on a combination of usage (known as a "Pay-as-you-go" model), the hardware/OS/software/networking features chosen by the subscriber, required availability, redundancy, security, and service options. Subscribers can pay for a single virtual AWS computer, a dedicated physical computer, or clusters of either. As part of the subscription agreement, Amazon provides security for subscribers' system. AWS operates from many global geographical regions including 6 in North America.

In 2019, AWS comprised more than 165 services spanning a wide range including computing, storage, networking, database, analytics, application services, deployment, management, mobile, developer tools, and tools for the Internet of Things. The most popular include Amazon Elastic Compute Cloud (EC2) and Amazon Simple Storage Service (Amazon S3). Most services are not exposed directly to end users, but instead offer functionality through APIs for developers to use in their applications. Amazon Web Services' offerings are accessed over HTTP, using the REST architectural style and SOAP protocol for older APIs and exclusively JSON for newer ones.

Amazon markets AWS to subscribers as a way of obtaining large scale computing capacity more quickly and cheaply than building an actual physical server farm. All services are billed based on usage, but each service measures usage in varying ways. As of 2017, AWS owns a dominant 34% of all cloud (IaaS, PaaS) while the next three competitors Microsoft, Google, and IBM have 11%, 8%, 6% respectively according to Synergy Group.

### [Amazon EC2](https://aws.amazon.com/ec2/)
Amazon Elastic Compute Cloud (EC2) forms a central part of Amazon.com's cloud-computing platform, Amazon Web Services (AWS), by allowing users to rent virtual computers on which to run their own computer applications. EC2 encourages scalable deployment of applications by providing a web service through which a user can boot an Amazon Machine Image (AMI) to configure a virtual machine, which Amazon calls an "instance", containing any software desired. A user can create, launch, and terminate server-instances as needed, paying by the second for active servers – hence the term "elastic". EC2 provides users with control over the geographical location of instances that allows for latency optimization and high levels of redundancy.

In November 2010, Amazon switched its own retail website to use EC2 and AWS.

### [Amazon ECR](https://aws.amazon.com/ecr/)
Amazon Elastic Container Registry (ECR) is a fully-managed Docker container registry that makes it easy for developers to store, manage, and deploy Docker container images. Amazon ECR is integrated with Amazon Elastic Container Service (ECS), simplifying your development to production workflow. Amazon ECR eliminates the need to operate your own container repositories or worry about scaling the underlying infrastructure. Amazon ECR hosts your images in a highly available and scalable architecture, allowing you to reliably deploy containers for your applications. Integration with AWS Identity and Access Management (IAM) provides resource-level control of each repository. With Amazon ECR, there are no upfront fees or commitments. You pay only for the amount of data you store in your repositories and data transferred to the Internet.

### [Amazon S3](https://aws.amazon.com/s3/)
Amazon S3 or Amazon Simple Storage Service is a service offered by Amazon Web Services (AWS) that provides object storage through a web service interface. Amazon S3 uses the same scalable storage infrastructure that Amazon.com uses to run its global e-commerce network. Amazon S3 can be employed to store any type of object which allows for uses like storage for Internet applications, backup and recovery, disaster recovery, data archives, data lakes for analytics, and hybrid cloud storage. In its service-level agreement, Amazon S3 guarantees 99.9% uptime, which works out to less than 43 minutes of downtime per month.[4] AWS launched Amazon S3 in the United States on March 14, 2006, then in Europe in November 2007.

### [Amazon EKS](https://aws.amazon.com/eks/)
Amazon Elastic Kubernetes Service (Amazon EKS) is a managed service that makes it easy for you to run Kubernetes on AWS without needing to stand up or maintain your own Kubernetes control plane. EKS runs Kubernetes control plane instances across multiple Availability Zones to ensure high availability. EKS automatically detects and replaces unhealthy control plane instances, and it provides automated version upgrades and patching for them.

Amazon EKS is also integrated with many AWS services to provide scalability and security for your applications, including the following:
- Amazon ECR for container images
- Elastic Load Balancing for load distribution
- IAM for authentication
- Amazon VPC for isolation

Amazon EKS runs up-to-date versions of the open-source Kubernetes software, so you can use all the existing plugins and tooling from the Kubernetes community. Applications running on Amazon EKS are fully compatible with applications running on any standard Kubernetes environment, whether running in on-premises data centers or public clouds. This means that you can easily migrate any standard Kubernetes application to Amazon EKS without any code modification required.

### [Amazon RDS](https://aws.amazon.com/rds/)
- Automates database administration
    - Installs
    - Patching
    - Monitoring
    - Performance Tuning
    - Back-ups
    - Scaling
    - Security
    - Hardware Upgrades
    - Storage Management
- Snapshotting available

### [Amazon EFS](https://aws.amazon.com/efs/)
- Cloud native data store (cloud shared filesystem)
- Provides simple, scalable, elastic shared file storage for linux based business applications
- Can grow to petabytes, great performance
- Fully managed

### [Amazon EBS](https://aws.amazon.com/ebs/)
- Provides persistent block storage for use with Amazon EC2 instances
- Great performance, low latency block storage
- 4 different volume types,
    - SSD backed low latency, highest I ops, best for boot volumes or transactional workloads like enterprise applications, relational and noSQL dbs (2 types)
    - HDD deliver highest throughput, best for apps producing streaming IO, big data apps, data warehouses apps, log processing apps (2 types)
- Live volumes may be modified, allows for easy adaptation
- Snapshotting available
- High security
Cons:
    - when container is stopped, storage is detached, when container starts up, it takes a long time to attach the storage back up to the container
    - doesn't offer global availability zones

### [Amazon Sagemaker](https://aws.amazon.com/sagemaker/)
- Amazon SageMaker is a fully managed service that provides every developer and data scientist with the ability to build, train, and deploy machine learning (ML) models quickly. SageMaker removes the heavy lifting from each step of the machine learning process to make it easier to develop high quality models.
