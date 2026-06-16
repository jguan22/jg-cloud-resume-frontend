import { Project, Experience, Education, SkillGroup } from './types';

export const PERSONAL_INFO = {
  name: {
    zh: '管劼昊',
    en: 'Jiehao Guan'
  },
  title: {
    zh: '系统软件工程师',
    en: 'Systems & Software Engineer'
  },
  about: {
    zh: '系统软件工程专家师，拥有佐治亚理工学院 (Georgia Tech) 计算机科学硕士学位与威斯康星大学麦迪逊分校 (UW-Madison) 生物系统工程博士学位。专注于设计高并发、健壮容错的分布式系统与高能效 Serverless 混合架构。在行业中熟练应用 Java/C++/Python/SQL，实操落地大规模基因组关系型数据库架构、全自动化定价交易微服务、基于高效 RAG 与 Gemini 生态的技术决策系统并实现 100% 的基础设施代码化 (Terraform IaC/DevOps)。致力于学术前沿算法在工程化生产领域的性能变现。',
    en: 'Performance-driven Systems Software Engineer holding a Master of Science in Computer Science from Georgia Institute of Technology and a Ph.D. in Biological Systems Engineering from UW-Madison. Proficient in Java, C++, Python, and SQL, with rigorous hands-on depth in architecting fault-tolerant distributed systems, scaling transactional relational engines, automating mission-critical AWS Serverless clusters, and crafting production-grade Gemini RAG pipelines.'
  },
  location: {
    zh: '西雅图，华盛顿州，美国',
    en: 'Seattle, WA, USA'
  },
  email: 'jguan221990@gmail.com',
  github: 'https://github.com/jguan22',
  linkedin: 'https://www.linkedin.com/in/jiehao-guan/',
  status: {
    zh: '// SYSTEMS & SOFTWARE ENGINEER',
    en: '// SYSTEMS & SOFTWARE ENGINEER'
  }
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: {
      zh: '系统与分布式开发 (Systems & Distributed)',
      en: 'Systems & Distributed Engineering'
    },
    skills: [
      { 
        name: 'C / C++ (Pthreads / Multi-threading)', 
        badge: { zh: '核心精通', en: 'Core Mastery' },
        context: { zh: '硕士核心课程与高并发系统项目实践', en: "Master's core work & high-concurrency systems" }
      },
      { 
        name: 'Distributed Systems & gRPC / Protobuf', 
        badge: { zh: '深度掌握', en: 'Advanced' },
        context: { zh: '自主研发高性能分布式副本文件系统', en: 'Architected distributed file system from scratch' }
      },
      { 
        name: 'Java / Python / SQL Core Systems', 
        badge: { zh: '工业实践', en: 'Applied' },
        context: { zh: '企业生产级数据库集成与自动化工具链', en: 'Production database integration & auto-tooling' }
      },
      { 
        name: 'IPC (Shared Memory / Semaphores)', 
        badge: { zh: '系统底层', en: 'OS Internals' },
        context: { zh: '佐治亚理工研究生实验：多线程网关代理', en: 'GT Graduate work: Multi-threaded Proxy-Cache' }
      },
      { 
        name: 'High-Throughput Analytical Pipelines', 
        badge: { zh: '数据管道', en: 'Data Engine' },
        context: { zh: '博士科学计算课题：TB级大规模脚本调度', en: 'Ph.D. research: Dispatching terabyte-scale scientific scripts' }
      }
    ]
  },
  {
    category: {
      zh: '云平台与自动化 DevOps (Cloud & DevOps)',
      en: 'Cloud Platform & DevOps Systems'
    },
    skills: [
      { 
        name: 'AWS (Lambda / S3 / DynamoDB / API Gateway)', 
        badge: { zh: 'Serverless', en: 'Serverless' },
        context: { zh: 'MEI 企业生产集群与云端自动化部署', en: 'MEI production clusters & cloud resume setup' }
      },
      { 
        name: 'Amazon CloudFront & Origin Access Control', 
        badge: { zh: '全球分发', en: 'CDN OAC' },
        context: { zh: '构建静态边缘托管与受控源站访问机制', en: 'Secure static web hosting & edge delivery' }
      },
      { 
        name: 'Terraform (Infrastructure as Code - IaC)', 
        badge: { zh: '基础代码化', en: 'IaC' },
        context: { zh: '100% 声明式定义云端服务以实现一键部署', en: '100% declarative cloud provisioning' }
      },
      { 
        name: 'CI/CD (GitHub Actions Flows)', 
        badge: { zh: '持续集成', en: 'CI/CD' },
        context: { zh: '严密流水线：自动化测试套件与安全部署', en: 'Strict pipelines: multi-tier build & deploy actions' }
      },
      { 
        name: 'Docker & Linux Environment Integration', 
        badge: { zh: '容器化', en: 'Containers' },
        context: { zh: '多架构镜像混合构建与底层运行沙箱配置', en: 'Multi-arch builds & runtime sandbox optimization' }
      }
    ]
  },
  {
    category: {
      zh: '数据库与智能大语言应用 (Databases & AI)',
      en: 'Databases & GenAI RAG'
    },
    skills: [
      { 
        name: 'PostgreSQL / MySQL Schema Optimization', 
        badge: { zh: '关系优化', en: 'Relational' },
        context: { zh: '基因组千万级关系数据检索性能提升 80%', en: 'Optimized MEI genomic queries, cutting latency by 80%' }
      },
      { 
        name: 'ChromaDB / Vector Database Integrations', 
        badge: { zh: '向量检索', en: 'Vector DB' },
        context: { zh: '精细化自动报价系统：规则库检索与缓存', en: 'High-precision pricing retrieval & caching layer' }
      },
      { 
        name: 'GenAI RAG (Gemini SDK / Semantic Ingestion)', 
        badge: { zh: '智能代理', en: 'AI Agent' },
        context: { zh: '自研科研大纲提案与成本预测智能生成流', en: 'Automated study proposal & cost analysis generators' }
      },
      { 
        name: 'Hibernate ORM / Database Relational Scaling', 
        badge: { zh: '模型重构', en: 'ORM / Scaling' },
        context: { zh: '面向大规模业务逻辑进行冗余消除与调优', en: 'Performance tuning & schema refactoring on key pipelines' }
      },
      { 
        name: 'Modern Package Tooling (uv / poetry / pipenv)', 
        badge: { zh: '工程依赖', en: 'Workflows' },
        context: { zh: '特定引物定向优化引擎 Python 依赖精准管护', en: 'Rigorous dependency mapping for scientific software' }
      }
    ]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp1',
    period: '2025.01 - 2026.03',
    role: {
      zh: '系统与资深软件工程师',
      en: 'Systems Software Engineer'
    },
    company: 'Molecular Epidemiology, Inc.',
    location: {
      zh: '美国西雅图，华盛顿州',
      en: 'Seattle, WA, USA'
    },
    description: {
      zh: [
        '设计并重构了中心机构基因微数据的高性能关系型数据库集群，完全废弃了之前低效、易出错的传统表单文件，将高频基因链检索耗时直降 80%，极大提升了下游科研人员 30% 左右的并发运算流转。',
        '基于大语言模型（LLMs）精心构建并上线了一套 GenAI 驱动的 RAG 系统，通过智能结构化分词重组，实现了科研实验大纲提案生成与成本预测的多重自动化。',
        '自研开发了高能效的“确定性定价转换引擎 (Deterministic Pricing Engine)”，结合高精度缓存向量索引数据库。精准匹配多项物理实验室实验测算规则，自动产出 100% 精确的客户专属报价凭证，消除 90% 的手工作业时间差。',
        '基于 Python 开发了基于数值计算和算法优化的特定引物定向优化引擎 (Primer Design Engine)，精细匹配变体，在超高吞吐并行多重 PCR 学术级检验测绘中斩获 90% 以上的数据信号降噪表现。'
      ],
      en: [
        'Designed and maintained a high-performance relational database cluster to centralize massive genomic data assets, successfully deprecating legacy spreadsheet trackers to reduce data query latencies by 80% and accelerate computational workflow pipes by 30%.',
        'Engineered a comprehensive GenAI-powered RAG pipeline leveraging Large Language Models (LLMs) to automatically generate research proposals and predict project resource costs by querying relevant ISO specifications and past study registers.',
        'Developed an automated, high-precision Deterministic Pricing Engine paired with a vector storage tier, linking retrieved laboratory workflows directly to granular pricing matrices to produce 100% accurate, ready-to-sign quotes, eliminating manual drafting delays by 90%.',
        'Authored and fine-tuned a Python-based primer optimization engine incorporating complex algorithmic parameter screening, yielding a massive 90% signal noise reduction for extreme high-throughput multiplex PCR assays.'
      ]
    },
    skills: ['Python', 'PostgreSQL', 'GenAI RAG', 'Vector Database', 'Algorithmic Optimization', 'boto3', 'AWS', 'Database Scaling']
  }
];

export const EDUCATIONS: Education[] = [
  {
    id: 'edu1',
    period: '2023.08 - 2025.12',
    degree: {
      zh: '计算机科学硕士 (M.S. in Computer Science)',
      en: 'Master of Science in Computer Science'
    },
    school: {
      zh: '佐治亚理工学院 (Georgia Institute of Technology)',
      en: 'Georgia Institute of Technology'
    },
    highlights: {
      zh: [
        '研究重点：分布式系统架构设计、大规模并发程序性能调优、分布式通信存储网络及底层并发计算同步。',
        '平均学业成绩绩点 (GPA) 达 3.7 / 4.0，主研了高并发文件分发、系统底层级多线程代理缓存等多项复杂工程项目实践。'
      ],
      en: [
        'Concentrations: Distributed Computing Systems, High-Concurrency Network Architecture, Operating System Performance Tuning.',
        'Academic Performance: Outstanding GPA of 3.7 / 4.0. Completed master-tier distributed storage and high-throughput proxy implementations.'
      ]
    }
  },
  {
    id: 'edu2',
    period: '2013.09 - 2022.05',
    degree: {
      zh: '生物系统工程学博士学位 (Ph.D. in Biological Systems Engineering)',
      en: 'Ph.D. in Biological Systems Engineering'
    },
    school: {
      zh: '威斯康星大学麦迪逊分校 (University of Wisconsin-Madison)',
      en: 'University of Wisconsin-Madison'
    },
    highlights: {
      zh: [
        '研究重点：大批量多维变量解析、数值模拟计算算法、计算系统流体控制与科学算法管道编排部署。',
        '获得完备的定量分析和科学编程能力，利用高吞吐并行计算与分布式脚本调度处理 TB 级别的科学实验模型。'
      ],
      en: [
        'Concentrations: Complex Numerical Computation, Scientific Computing Pipelines, Biological System Modeling and Simulation.',
        'Developed robust quantitative modeling proficiency, managing distributed script dispatch systems of terabyte-scale analytical data environments.'
      ]
    }
  },
  {
    id: 'edu3',
    period: '2009.09 - 2013.05',
    degree: {
      zh: '工学学士学位 (B.S. in Biological System Engineering)',
      en: 'Bachelor of Science in Biological System Engineering'
    },
    school: {
      zh: '浙江大学 (Zhejiang University)',
      en: 'Zhejiang University'
    },
    highlights: {
      zh: [
        '主修系统理论、数值算法方法、建模计算等基础课程，连续多年获得学业优秀奖学金。'
      ],
      en: [
        'Core domains: System Analysis Methods, Numerical Calculations, System Control Theory. Received several academic awards.'
      ]
    }
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'proj1',
    title: {
      zh: '分布式高并发文件系统 (Distributed File System - DFS)',
      en: 'Distributed File System (DFS)'
    },
    subtitle: {
      zh: '基于 C++ / gRPC 实现的高可靠弱一致性并发同步分布式系统',
      en: 'C++, gRPC, Protocol Buffers, Linux (inotify)'
    },
    description: {
      zh: '从底层手动构建的基于 C++ 和 gRPC 架构的高吞吐分布式文件同步系统。项目基于弱一致性存储分发模型实现，采用高级的读写异步并发流调度大幅缓和物理磁盘读写堵塞。前端与本地内核文件变动搭载 Linux (inotify) 网络，并自研缓存对比哈希（CRC Checksum）校验机制以避免未修改文件的无效全球传输负载。',
      en: 'A high-concurrency Distributed File System constructed in C++ and gRPC from scratch. Employs a robust Weak Consistency Synchronization Model. Integrated a localized caching layer utilizing Linux kernel inotify event structures alongside CRC checksum checks, optimizing WAN network utilization by fully eliminating redundant block updates.'
    },
    tags: ['C++', 'gRPC', 'Protocol Buffers', 'Linux (inotify)', 'Concurrency'],
    category: 'systems',
    demoUrl: '#demo',
    githubUrl: 'https://github.com/jguan22/High-Concurrency-Distributed-File-System',
    metrics: [
      { label: { zh: '同步延迟降低', en: 'Sync Latency' }, value: '-35%' },
      { label: { zh: '数据吞吐提升', en: 'Throughput' }, value: '+60%' },
      { label: { zh: '并发读写锁定', en: 'Concurrency' }, value: 'SR/UW Mutex' }
    ],
    features: {
      zh: [
        '使用 gRPC 和 C++ 研发高并发分布式文件系统，并实现弱一致性同步模型，利用异步 RPC 减少 35% 同步延迟并维持缓存一致性。',
        '设计定制化客户端缓存层与 CRC 校验验证机制，消除未修改文件的冗余传输流转，优化网络吞吐高达 60%。',
        '设计基于“共享读锁/排他写锁 (Shared-Reader/Unique-Writer)”的轻量级分布式锁服务，杜绝多客户端并发访问的竞态漏洞。'
      ],
      en: [
        'Engineered a high-concurrency DFS using gRPC and C++, implementing a Weakly Consistent Synchronization Model; reduced synchronization latency by 35% via asynchronous RPCs while maintaining cache integrity',
        'Optimized network throughput by 60% through a custom client-side caching layer and CRC checksum-based validation, eliminating redundant data transfers for unmodified files',
        'Designed a distributed locking service using a Shared-Reader/Unique-Writer mutex pattern, ensuring data consistency and preventing race conditions during concurrent multi-client access'
      ]
    }
  },
  {
    id: 'proj2',
    title: {
      zh: '多线程代理缓存系统 (Multi-threaded Proxy-Cache System)',
      en: 'Multi-threaded Proxy-Cache System'
    },
    subtitle: {
      zh: '基于 C + Pthreads 底层构建的高效零拷贝进程通信缓存代理',
      en: 'C, POSIX Threads, Shared Memory, IPC'
    },
    description: {
      zh: '底层采用纯 C 语言编写、融合多线程 POSIX 线程多核并发控制的代理网络缓存架构。作为旧协议与现代多维存储库的翻译网关层。系统构建了特有的进程间安全通信（Shared Memory 与 POSIX Message Queues 混编），最大化地省去不必要的系统内存频繁拷贝与 CPU 上下文开销，支持局部极速本地文件数据热更新。',
      en: 'Built a high-performance C proxy translating Getfile requests from legacy clients to modern repositories via libcurl. Utilizes a Boss-Worker (Pthreads) model with condition variables to manage high-concurrency request synchronization. Implements a zero-copy data plane using Shared Memory (SHM) and POSIX Message Queues to reduce CPU overhead.'
    },
    tags: ['C', 'POSIX Threads', 'Shared Memory', 'IPC', 'libcurl'],
    category: 'systems',
    demoUrl: '#demo',
    githubUrl: 'https://github.com/jguan22/Multi-Threaded-Proxy-Cache-System',
    metrics: [
      { label: { zh: '并发控制模型', en: 'Threading Model' }, value: 'Boss-Worker' },
      { label: { zh: '系统复制开销', en: 'Data Copy' }, value: 'Zero-Copy' },
      { label: { zh: '本地调取响应', en: 'File Retrieval' }, value: 'O(1)' }
    ],
    features: {
      zh: [
        '基于 C 语言完全自主架构高性能代理网关，平滑承接旧版客户端 Getfile 协议请求并经由 libcurl 桥接分流至现代对象存储中。',
        '深度结合 Pthreads 的 Boss-Worker 双线程池机制，联动条件变量实现高频、极限并发请求的无缝协调管理。',
        '使用共享内存（SHM）与 POSIX 消息队列，在本地多进程架构间打通极速零拷贝数据平面，节省大量内核拷贝及开销。',
        '定制共享内存段静态分配池与高速交叉信号量（Semaphores）调配器，打通本地文件缓存极速数据复用通道。'
      ],
      en: [
        'Built a high-performance C proxy translating Getfile requests from legacy clients to modern repositories via libcurl',
        'Utilized a Boss-Worker (Pthreads) model with condition variables to manage high-concurrency request synchronization',
        'Implemented a zero-copy data plane using Shared Memory (SHM) and POSIX Message Queues, significantly reducing CPU overhead compared to standard pipe-based IPC',
        'Optimized I/O throughput by designing a Shared Memory Segment Pool and an alternating semaphore pattern, achieving near-instantaneous local file retrieval'
      ]
    }
  },
  {
    id: 'proj3',
    title: {
      zh: '系统设计智能 RAG 顾问 (System Design RAG Tutor)',
      en: 'System Design RAG Tutor'
    },
    subtitle: {
      zh: '基于 Gemini 2.5 和 ChromaDB 构建的高可用专业 RAG 语义解答系统',
      en: 'Python, Gemini 2.5, ChromaDB, uv'
    },
    description: {
      zh: '基于企业检索增强生成（RAG）原理设计的高精简解答专家。项目针对复杂的分布式系统设计模式与高层网络工程范式知识组。结合 ChromaDB 开源向量库对海量异构工程数据执行深度的块分割、文本关系网络标记，并联合使用 Gemini 2.5 API 完成对架构概念、元数据拓扑的高置信自然语言极速解析。',
      en: 'Built a Retrieval-Augmented Generation (RAG) system utilizing Gemini and ChromaDB to automate technical interview preparation, enabling semantic search across a local knowledge base of distributed system design patterns. Features header-based parsing, semantic chunking, and modern dependency tooling.'
    },
    tags: ['Python', 'Gemini 2.5', 'ChromaDB', 'uv', 'Markdown Parsing'],
    category: 'ai',
    demoUrl: '#demo',
    githubUrl: 'https://github.com/jguan22/RAG-for-system-design-study',
    metrics: [
      { label: { zh: '语义精准过滤', en: 'Semantic Search' }, value: 'ChromaDB' },
      { label: { zh: '信息召回置信', en: 'RAG Accuracy' }, value: 'High-Fidelity' },
      { label: { zh: '依赖管理工具', en: 'Dependency Engine' }, value: 'uv' }
    ],
    features: {
      zh: [
        '基于 Gemini 和 ChromaDB 构建高可用语义 RAG 检索模型，针对多类分布式高并发设计样式及技术大图提供微秒级智算检索解答。',
        '开发了一套感知文档结构上下文的入库（Ingestion）流水线，通过基于 Markdown 标头的提取与语义分块技术，保证提取关系链的高保真表现。',
        '在极速 Python 工具链 uv 管理下部署，利用其特有的高速瞬时依赖解析搭建高效的本地开发及交付态。'
      ],
      en: [
        'Built a Retrieval-Augmented Generation (RAG) system utilizing Gemini and ChromaDB to automate technical interview preparation, enabling semantic search across a local knowledge base of distributed system design patterns',
        'Developed a context-aware ingestion pipeline that implements header-based Markdown parsing and semantic chunking, ensuring high-fidelity retrieval of complex architectural relationships and metadata',
        'Leveraged and integrated Developer AI tools and APIs within a modular ecosystem, utilizing high-performance dependency management to maintain production-grade software engineering standards'
      ]
    }
  },
  {
    id: 'proj4',
    title: {
      zh: '经典云履历 Serverless 架构 (Cloud Resume Challenge)',
      en: 'Cloud Resume Challenge'
    },
    subtitle: {
      zh: '基于 AWS 托管全球分发、自动化部署及 DynamoDB 事务计数的云履历系统',
      en: 'AWS (S3, CloudFront, Lambda, DynamoDB), Python, Terraform, CI/CD'
    },
    description: {
      zh: '专为高级云计算工程师设计的完全 Serverless 云原生数据与展示载体。网络端由 AWS S3 做超低摩擦静态托管，通过全球边缘 CDN Amazon CloudFront 完成 HTTPS 安全连接分发。后台无缝整合 API Gateway、Python Lambda 极简微服务以及带原子悲观并发控制锁的 DynamoDB 流量累加库。基础设施由 Terraform 100% 书写交付。',
      en: 'A high-availability, fully automated serverless application hosted across AWS. Serves web client assets directly out of Amazon S3, using CloudFront edge points to enforce secure TLS. Includes atomic click counters authored in Python AWS Lambda storing states on target DynamoDB, managed entirely under declarative Infrastructure-as-Code (Terraform) templates.'
    },
    tags: ['AWS', 'Lambda', 'Terraform', 'CI/CD', 'Python', 'DynamoDB', 'CloudFront', 'S3'],
    category: 'fullstack',
    demoUrl: '#demo',
    githubUrl: 'https://github.com/jguan22/jg-cloud-resume-frontend',
    metrics: [
      { label: { zh: 'CDN边缘节点延迟', en: 'S3 CDN Edge' }, value: '<100ms' },
      { label: { zh: '全静态服务可用率', en: 'Uptime SLA' }, value: '99.9%' },
      { label: { zh: '基础设施可扩展', en: 'IaC Delivery' }, value: '100% IaC' }
    ],
    features: {
      zh: [
        '自主搭建跨越 S3 与全球边缘节点 CDN CloudFront 的极低延迟静态分发面，依靠边缘缓存安全输出并承诺 99.9% 可用性。',
        '基于 RESTful Lambda、AWS API Gateway 联动多并发 DynamoDB 存储，实现高并发极速记录并捕获累进式访客浏览历史。',
        '基础设施利用声明式 Terraform 进行 100% 自动化代码化（IaC），并与 GitHub Actions 完成完整的自动化单测与 CI/CD 部署。',
        '强制收紧 S3 存储桶安全防护规则（OAC），设置严密的 API Gateway 跨域策略 (CORS) 彻底防守前端未经授权的注入。'
      ],
      en: [
        'Built a serverless, full-stack application with 99.9% uptime using AWS CloudFront for global content delivery and S3 for static hosting, serving content from edge locations worldwide',
        'Developed a RESTful Lambda/API Gateway backend with DynamoDB, achieving sub-100ms latency for visitor tracking',
        'Automated 100% of infrastructure via Terraform and GitHub Actions for a Python/NoSQL serverless stack',
        'Implemented security best practices including Origin Access Control (OAC) for S3 bucket protection and resolved CORS configuration for cross-origin API requests'
      ]
    }
  },
  {
    id: 'proj5',
    title: {
      zh: '经典问答知识库键值内存网络 (Key-Value Memory Network for QA)',
      en: 'Key-Value Memory Network for Question-Answering'
    },
    subtitle: {
      zh: '基于 PyTorch 自研注意力得分矩阵与神经嵌入式的 Wikipedia QA 查询模型',
      en: 'Python, PyTorch, NLP'
    },
    description: {
      zh: '基于 PyTorch 从底层纯手工复现构建的 Key-Value Memory Network（键值记忆网络）深度学习文本匹配系统。提出并设计了双重嵌入式注意力张量映射核心，可在无需在应用侧二次重训参数的情况下，通过关系注意力机制，精准实现结构化关系型数据库与大篇幅自然语言问答交互的原子对齐。',
      en: 'Built an advanced KVMemNet from scratch in PyTorch, implementing a neural attention-scoring mechanism and dual linear embedding layers to synchronize natural language queries with relational databases without requiring model retraining. Features a bespoke massive semantic ingestion pipeline.'
    },
    tags: ['Python', 'PyTorch', 'NLP', 'SpaCy', 'NLTK', 'Unidecode'],
    category: 'ai',
    demoUrl: '#demo',
    githubUrl: 'https://github.com/jguan22',
    metrics: [
      { label: { zh: '维基生物段落处理', en: 'Wiki Bios Parsed' }, value: '580k+' },
      { label: { zh: '核心结构索引项', en: 'Structured Terms' }, value: '96k+' },
      { label: { zh: '实体对齐低延迟', en: 'Search Overhead' }, value: 'Low Latency' }
    ],
    features: {
      zh: [
        '在 PyTorch 中从零实现高级神经网络，结合多层线性权重注意力评分机制与记忆检索矩阵，免去大范围反复训练微调即可精准同步异构数据源之间的交互。',
        '自主打通一站式高度对齐的文本解析管道，对超过 580,000 条非结构化维基百科历史传记文献进行分析，高效压缩整合为包含了 96,000+ 个专业实体的紧凑序列化常识图谱字典。',
        '使用 SpaCy 高速抽取实体标签，协同 NLTK Porter Stemming 还原词干并采用 Unidecode 正则字符归一化，极大削减分布式模糊匹配的计算负荷。'
      ],
      en: [
        'Built a KVMemNet from scratch in PyTorch, implementing a neural attention-scoring mechanism and dual linear embedding layers to synchronize natural language queries with relational databases without requiring model retraining',
        'Engineered an end-to-end NLP data pipeline that processed over 580,000 unstructured Wikipedia biography entries into a structured dictionary of 96,000+ terms, precisely mapping entities to discrete lifecycle and relational data matrices',
        'Optimized information retrieval paths by developing a text preprocessing suite utilizing SpaCy for entity extraction, NLTK for Porter Stemming, and Unidecode for character normalization to guarantee robust, low-overhead query matching'
      ]
    }
  },
  {
    id: 'proj6',
    title: {
      zh: '分布式本地版本控制系统 (Distributed Version Control System)',
      en: 'Distributed Version Control System'
    },
    subtitle: {
      zh: '面向对象设计、SHA-1 加密哈希与序列化持久层的本地版本备份系统',
      en: 'Java, OOP, SHA-1 Serialization'
    },
    description: {
      zh: '基于纯 Java 面向对象设计和文件树底座自主研发的分布式本地版本控制工具。完全从零实现类似于 Git 的经典核心算子：包括提交历史有向图、代码暂存区索引跟踪、差异化版本日志记录以及自动判定合并冲突的分支三路合并算法。',
      en: 'Architected a robust, local version control system from scratch in Java, implementing core Git features including commit history trees, staging areas, logging, and multi-branch merging. Employs SHA-1 object serialization and complex state transition algorithms.'
    },
    tags: ['Java', 'OOP', 'SHA-1 Hashing', 'Serialization'],
    category: 'systems',
    demoUrl: '#demo',
    githubUrl: 'https://github.com/jguan22/Gitlet-app',
    metrics: [
      { label: { zh: '序列化提交寻址', en: 'Crypto Persist' }, value: 'SHA-1 / Ser' },
      { label: { zh: '合并冲突判断', en: 'Merge Strategy' }, value: '3-Way Merge' },
      { label: { zh: '面向对象构架', en: 'Design Quality' }, value: 'Clean OOP' }
    ],
    features: {
      zh: [
        '利用 Java 完全架构并组装起版本本地有向树，模拟 Git 流程开发一整套分支克隆、差异合并、历史树追溯的核心算子及功能。',
        '定制基于 SHA-1 加密算法生成对象唯一签名，并配套高效序列化流（Object Serialization），在深层嵌套目录层级间实现原子级别的瞬时寻址和还原。',
        '自主攻克在多分支合并及状态回滚过程中的三路自动合并（Three-way merge）分叉判定，严格遵循高内聚低耦合的代码开发哲学。'
      ],
      en: [
        'Architected a robust, local version control system from scratch in Java, implementing core Git features including commit history trees, staging areas, logging, and multi-branch merging',
        'Engineered a resilient data persistence layer utilizing SHA-1 cryptographic hashing and custom serialization to safely store, track, and retrieve object states across deep file directories ',
        'Implemented complex structural algorithms to handle state transitions and directory rollbacks during three-way merges, strictly adhering to high-quality, clean, and maintainable object-oriented design patterns'
      ]
    }
  }
];
