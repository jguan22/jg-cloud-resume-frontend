import { ArrowLeft, Cpu, Terminal, FileText, ChevronRight, Activity, Layers, Server, Shield, Database, ExternalLink } from 'lucide-react';
import { Language } from '../types';

interface ProxyCacheDetailProps {
  lang: Language;
  onBack: () => void;
}

export default function ProxyCacheDetail({ lang, onBack }: ProxyCacheDetailProps) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-slate-900 selection:text-white pb-24">
      {/* Structural Dotted Backplane */}
      <div className="absolute inset-0 tech-dot-grid pointer-events-none opacity-[0.45] z-0" />
      <div className="absolute inset-0 tech-grid-lines pointer-events-none opacity-[0.1] z-0" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        {/* Navigation / Header */}
        <div className="mb-12 flex items-center justify-between border-b border-slate-300 pb-6">
          <button
            onClick={onBack}
            className="group flex items-center gap-2 px-3 py-1.5 border border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white font-mono text-xs font-black uppercase tracking-widest transition-all duration-200"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform" />
            <span>{lang === 'zh' ? '返回主页' : 'Return to Portfolio'}</span>
          </button>

          <span className="font-mono text-[10px] text-slate-400 font-black tracking-widest uppercase">
            // DOCUMENT CLASSIFICATION: SYSTEMS_ARCHITECTURE_BLUEPRINT //
          </span>
        </div>

        {/* Technical Document Banner */}
        <div className="border border-slate-900 bg-white p-8 mb-12 shadow-[6px_6px_0px_0px_#091e42] relative overflow-hidden">
          <div className="absolute top-0 right-0 h-28 w-28 translate-x-8 -translate-y-8 rounded-none bg-slate-100 border-l border-b border-slate-200 flex items-end justify-start p-4">
            <Cpu className="h-6 w-6 text-slate-300" />
          </div>
          <div className="space-y-4">
            <span className="inline-block rounded-none bg-slate-900 border border-slate-900 px-2.5 py-0.5 font-mono text-[9px] font-black text-white tracking-widest uppercase">
              {lang === 'zh' ? '学术与工程实践说明' : 'TECHNICAL BLUEPRINT'}
            </span>
            <h1 className="font-display text-3xl sm:text-4xl font-black text-slate-900 uppercase tracking-tighter leading-none">
              {lang === 'zh' ? '多线程代理缓存系统架构说明' : 'Multi-Threaded Proxy-Cache System'}
            </h1>
            <p className="font-mono text-xs text-slate-500 font-bold uppercase tracking-wider">
              {lang === 'zh' 
                ? '设计机制: gFS 协议、C 语言并发编程、POSIX 多线程 (Pthreads) 与共享内存级核间通信 (IPC)'
                : 'ENGINEERING SPEC: gFS Protocol, C Systems Concurrency, POSIX Multi-threading & Shared Memory IPC'}
            </p>
          </div>
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Quick navigation index for desktop */}
          <div className="lg:col-span-1 hidden lg:block space-y-4 sticky top-24 self-start">
            <h3 className="font-mono text-[9px] font-black uppercase tracking-widest text-slate-400 border-b border-slate-200 pb-1.5">
              // {lang === 'zh' ? '蓝图目录' : 'SPEC SECTIONS'}
            </h3>
            <ul className="space-y-2">
              {[
                { id: 'section-foreword', titleZh: '1. 项目前言', titleEn: '1. Foreword' },
                { id: 'section-part1', titleZh: '2. 代理服务器 (Part 1)', titleEn: '2. Proxy Server (Part 1)' },
                { id: 'section-part1-flow', titleZh: '2.2 工作控制流', titleEn: '2.2 Control Flow' },
                { id: 'section-part2', titleZh: '3. 缓存服务器 (Part 2)', titleEn: '3. Cache Server (Part 2)' },
                { id: 'section-part2-ipc', titleZh: '3.2 IPC 通信媒介', titleEn: '3.2 IPC Decision Matrix' },
                { id: 'section-part2-sync', titleZh: '3.3 读写同步机制', titleEn: '3.3 Read-Write Sync' },
                { id: 'section-testing', titleZh: '4. 系统测试与健壮性', titleEn: '4. System Validation' },
                { id: 'section-reference', titleZh: '5. 文档引用说明', titleEn: '5. Architect References' },
              ].map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="group flex items-center gap-1.5 text-xs font-mono font-bold text-slate-500 hover:text-slate-950 transition-colors"
                  >
                    <ChevronRight className="h-3 w-3 text-slate-300 group-hover:text-slate-950 transition-colors group-hover:translate-x-0.5" />
                    <span>{lang === 'zh' ? item.titleZh : item.titleEn}</span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="pt-6 border-t border-slate-200 mt-6 space-y-3">
              <div className="font-mono text-[9px] font-black uppercase tracking-widest text-slate-400">
                {lang === 'zh' ? '设计指标概览' : 'METRIC TELEMETRY'}
              </div>
              <div className="bg-white border border-slate-300 p-4 space-y-3.5 rounded-none shadow-sm">
                <div>
                  <span className="block text-[8px] font-mono text-slate-400 font-black tracking-wider uppercase">{lang === 'zh' ? '系统数据平面' : 'DATA PLANE'}</span>
                  <span className="font-mono text-sm font-black text-slate-900 uppercase">ZERO-COPY IPC</span>
                </div>
                <div>
                  <span className="block text-[8px] font-mono text-slate-400 font-black tracking-wider uppercase">{lang === 'zh' ? '请求池多线程模式' : 'CONCURRENCY PATTERN'}</span>
                  <span className="font-mono text-sm font-black text-slate-900 uppercase">BOSS-WORKER</span>
                </div>
                <div>
                  <span className="block text-[8px] font-mono text-slate-400 font-black tracking-wider uppercase">{lang === 'zh' ? '同步屏障控制' : 'SYNCHRONIZATION'}</span>
                  <span className="font-mono text-sm font-black text-slate-900 uppercase">2X SEMAPHORES</span>
                </div>
              </div>
            </div>
          </div>

          {/* Deep-dive Specifications Main Content (3 cols) */}
          <div className="lg:col-span-3 space-y-16">
            
            {/* 1 FOREWORD */}
            <section id="section-foreword" className="scroll-mt-24 space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-300 pb-2">
                <FileText className="h-5 w-5 text-slate-950" />
                <h2 className="font-mono text-base font-black uppercase tracking-wider text-slate-950">
                  1. {lang === 'zh' ? '项目前言' : 'FOREWORD'}
                </h2>
              </div>
              <p className="font-sans text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                {lang === 'zh' 
                  ? '多线程代理缓存系统是在经典系统级开发规范下构建的、极具生产健壮性的高性能本地数据分发网关。系统分为两大核心引擎：其一，多线程代理服务器（Proxy Server），基于 POSIX Threads 调度模型设计，用于并发转化来自客户端的 Getfile 文件请求并通过高稳定 libcurl API 极速由外部 HTTP 源拉取对象；其二，高性能本地缓存服务器（Cache Server），用于大幅拦截不必要的外部 HTTP 重复轮询，代理与缓存服务器之间通过微秒级的 POSIX Shared Memory 共享内存通道与 POSIX Message Queues 消息队列打通，实现精雕细琢的高并发零拷贝（Zero-Copy）数据交换。'
                  : 'This technical blueprint documents the design and multi-engineered implementation of an enterprise-level, high-concurrency systems software Proxy-Cache architecture. The project consists of two core, highly coordinated processes: (1) a multi-threaded Proxy Server built upon the POSIX Threads (Pthreads) standard wrapping low-latency external network retrieval via libcurl, and (2) a high-speed local Cache Server that intercepts external redundant requests and streams data using localized POSIX Shared Memory (SHM) segments and POSIX Message Queues (MQ) IPC.'}
              </p>
            </section>

            {/* 2 PART ONE: PROXY SERVER */}
            <section id="section-part1" className="scroll-mt-24 space-y-6">
              <div className="flex items-center gap-2 border-b border-slate-300 pb-2">
                <Server className="h-5 w-5 text-slate-950" />
                <h2 className="font-mono text-base font-black uppercase tracking-wider text-slate-950">
                  2. {lang === 'zh' ? '代理服务器' : 'PART ONE: PROXY SERVER'}
                </h2>
              </div>
              
              <div className="space-y-4 text-xs sm:text-sm text-slate-705 font-medium">
                <p>
                  {lang === 'zh'
                    ? '代理服务器作为系统的入口网关，负责接收并翻译来自客户端的高频 Getfile 传输指令。该模块内置了系统级多线程池控制栈，平滑将网络 I/O 轮询负载与物理文件拉取解耦，确保对上游微服务的非阻塞高通量响应。'
                    : 'The Proxy Server acts as the core gateway, taking in file path parameters from custom application socket connections. To isolate CPU workflows from socket blocking, a robust Boss-Worker thread model is leveraged, scheduling operations safely to backend worker queues.'}
                </p>

                {/* Sub: Project description */}
                <div className="border-l-2 border-slate-900 pl-4 py-1.5 my-4 bg-white/50">
                  <h4 className="font-mono text-xs font-black text-slate-950 uppercase tracking-widest mb-1">
                    {lang === 'zh' ? '工作线程回调：handle_with_url' : 'Worker Thread Callback: handle_with_url'}
                  </h4>
                  <p className="text-slate-600 text-xs">
                    {lang === 'zh'
                      ? '通过自主构建的回调函数 handle_with_url，工作线程在接收到拉取任务后，会调配 libcurl Easy API，设置专属网络选项。'
                      : 'Each worker thread within the boss-worker scheduling block maps to a registered callback called handle_with_url. When invoked, it translates client configurations into valid HTTP retrieval blocks.'}
                  </p>
                </div>

                {/* SVG Architecture Diagram 1 */}
                <div className="bg-white border border-slate-300 p-6 my-6 flex flex-col items-center justify-center space-y-4 shadow-sm">
                  <div className="font-mono text-[9px] font-black uppercase text-slate-400 tracking-widest">
                    // {lang === 'zh' ? '图一: 代理服务器远程拉取控制流' : 'DIAGRAM 1: PROXY REMOTE NETWORK FLOW'}
                  </div>
                  
                  {/* Clean SVG Flow representation */}
                  <svg viewBox="0 0 540 120" className="w-full max-w-lg h-auto">
                    <rect x="10" y="30" width="100" height="45" fill="#f8fafc" stroke="#0f172a" strokeWidth="1.5" />
                    <text x="60" y="58" textAnchor="middle" className="font-mono text-xs font-bold fill-slate-900">Client</text>

                    <line x1="110" y1="52.5" x2="210" y2="52.5" stroke="#0f172a" strokeWidth="1.5" markerEnd="url(#arrow)" />
                    <text x="160" y="44" textAnchor="middle" className="font-mono text-[10px] font-bold fill-slate-500">Getfile msg</text>

                    <rect x="220" y="30" width="100" height="45" fill="#ffffff" stroke="#0f172a" strokeWidth="2" />
                    <text x="270" y="58" textAnchor="middle" className="font-mono text-xs font-black fill-slate-900">Proxy Server</text>

                    <line x1="320" y1="52.5" x2="420" y2="52.5" stroke="#0f172a" strokeWidth="1.5" markerEnd="url(#arrow)" />
                    <text x="370" y="44" textAnchor="middle" className="font-mono text-[10px] font-bold fill-slate-500">libcurl HTTP</text>

                    <rect x="430" y="30" width="100" height="45" fill="#f8fafc" stroke="#0f172a" strokeWidth="1.5" />
                    <text x="480" y="58" textAnchor="middle" className="font-mono text-xs font-bold fill-slate-900">Web Repo</text>

                    <defs>
                      <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M 0 1 L 10 5 L 0 9 z" fill="#0f172a" />
                      </marker>
                    </defs>
                  </svg>
                  <p className="font-mono text-[10px] text-slate-400 text-center uppercase tracking-wide">
                    {lang === 'zh'
                      ? '利用 gfserver 底座建立的并发调度，代理接收 Getfile 指令，多路转发 HTTP 请求至外部节点'
                      : 'gfs protocol translating requests to standard high-availability edge HTTP calls'}
                  </p>
                </div>
              </div>

              {/* 2.2 Flow of control */}
              <div id="section-part1-flow" className="scroll-mt-24 space-y-4 pt-4">
                <h3 className="font-mono text-sm font-black text-slate-900 uppercase tracking-widest border-l-4 border-slate-900 pl-3">
                  2.2 {lang === 'zh' ? '工作控制流与内存自适应' : 'Flow of Control & Dynamic Buffers'}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                  {lang === 'zh'
                    ? '收到任务分派后，代理服务器的工作线程调用 handle_with_curl 进行任务包装。通过将 CURLOPT_WRITEFUNCTION 注册至 C 回调机制，工作线程自定义了动态数据归集函数 retrieve_data。当远端服务器响应头部并下发数据切片时，retrieve_data 依据实际载荷大小实时动态执行 memory 结构体重分配（reallocate memory），彻底攻克了传输变长实体（Variable Response Sizes）时的爆内存及缓冲区截断隐患。'
                    : 'To scale memory dynamically based on content length headers, a custom retrieve_data handler is bound to CURLOPT_WRITEFUNCTION. When incoming packets land from the network interfaces, libcurl invokes this chunk-level pipeline, progressively performing reallocations (realloc) on a heap-backed dynamic "memory" struct with maximum performance.'}
                </p>

                {/* Flow Diagram representation */}
                <div className="bg-slate-900 text-slate-100 p-6 rounded-none font-mono text-[11px] space-y-2 border-l-4 border-slate-500 overflow-x-auto">
                  <div className="text-slate-400">// {lang === 'zh' ? '代理控制流状态跳转' : 'STATE TRANSITION FOR PROXY WORKER'}</div>
                  <div>[Client Request Received] --&gt; Enqueue in Request Steque</div>
                  <div>Boss Thread --(gfs_perform)--&gt; Dispatches task to idle Pthread</div>
                  <div>Worker Thread --(handle_with_curl)--&gt; Prepares Curl Handles</div>
                  <div>Worker Thread --(curl_easy_perform)--&gt; Performs Socket Read Loop</div>
                  <div className="pl-4 text-emerald-400">|- IF File Not Found (404) --&gt; Send GF_FILE_NOT_FOUND (404 Header)</div>
                  <div className="pl-4 text-emerald-400">|- IF Found (200 OK) --&gt; Send GF_OK Header &amp; Stream Body via gfs_send</div>
                  <div>Worker Thread --(curl_easy_cleanup)--&gt; Tears down network handles</div>
                </div>
              </div>
            </section>

            {/* 3 PART TWO: CACHE SERVER */}
            <section id="section-part2" className="scroll-mt-24 space-y-6">
              <div className="flex items-center gap-2 border-b border-slate-300 pb-2">
                <Database className="h-5 w-5 text-slate-950" />
                <h2 className="font-mono text-base font-black uppercase tracking-wider text-slate-950">
                  3. {lang === 'zh' ? '缓存服务器' : 'PART TWO: CACHE SERVER'}
                </h2>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700 font-medium">
                <p>
                  {lang === 'zh'
                    ? '在 Part 2 中，系统增加了高性能本地缓存层（Cache Server）。代理服务器通过该模块，能直接在微秒级内拉取热点文件，极大降低网络传输代价。两大物理进程（Proxy 进程 与 Cache 进程）通过核间极速通信，极尽释放多核芯片的计算潜力。'
                    : 'In Part 2, a detached Cache Server manages local database partitions. Instead of firing endless out-of-process HTTP socket checks, the system establishes lightningfast IPC. Command signals are handled through stable message queues, whilst large payloads route via zero-copy private Shared Memory blocks.'}
                </p>

                {/* Sub: IPC Decision Matrix */}
                <div id="section-part2-ipc" className="scroll-mt-24 space-y-3 pt-4">
                  <h3 className="font-mono text-sm font-black text-slate-900 uppercase tracking-widest border-l-4 border-slate-900 pl-3">
                    3.2 {lang === 'zh' ? '核间通信 (IPC) 媒介选型矩阵' : 'IPC Inter-Process Architecture Decision'}
                  </h3>
                  <p className="leading-relaxed">
                    {lang === 'zh'
                      ? '在设计两端通信数据、指令传递通道时，对各种底层 Linux 核间通信媒介（IPC Mechanisms）开展了深度的选型剖析：'
                      : 'To select the ideal IPC plumbing, several POSIX interfaces were rigorously evaluated against systems throughput metrics:'}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="border border-slate-305 bg-white p-4 space-y-2 rounded-none">
                      <div className="font-mono text-xs font-black text-slate-950 uppercase">// PIPES &amp; SOCKETS</div>
                      <div className="font-mono text-[9px] text-red-500 font-bold uppercase tracking-widest">{lang === 'zh' ? '局限：单向与高协议栈开销' : 'CON: STRICT COPYING & PROTOCOL OVERHEAD'}</div>
                      <p className="text-xs text-slate-600">
                        {lang === 'zh'
                          ? '管道设计非常传统简捷，但极度缺乏双向交互韧性；由于本地双环中存在套接字栈协议封包、解包等巨大系统开销（TCP/UDP state logs），性能瓶颈不可控。'
                          : 'Pipes lack bi-directional versatility. Sockets introduce severe networking protocol wrappers, adding heavy microsecond degradation on local transfers.'}
                      </p>
                    </div>

                    <div className="border border-slate-305 bg-white p-4 space-y-2 rounded-none">
                      <div className="font-mono text-xs font-black text-slate-950 uppercase">// POSIX MSG QUEUES &amp; SHM</div>
                      <div className="font-mono text-[9px] text-emerald-700 font-bold uppercase tracking-widest">{lang === 'zh' ? '优势：可控指令群与零拷贝共享内存' : 'PRO: DISPATCH QUEUES & TRUE ZERO-COPY'}</div>
                      <p className="text-xs text-slate-600">
                        {lang === 'zh'
                          ? '消息队列天然具备排序、异常状态恢复、按优先级抢断处理能力，是小字节指令（Command Channel）的绝佳选择；而共享内容允许双端极速直读同一片 RAM 段（Data Channel），完全免去多次内核级复制。'
                          : 'Message Queues guarantee reliable asynchronous command order. Shared memory creates complete zero-copy RAM regions, fully avoiding multiple kernel boundary reads.'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Sub: Struct declarations */}
                <div className="space-y-4 pt-6">
                  <h4 className="font-mono text-xs font-black text-slate-950 uppercase tracking-widest">
                    {lang === 'zh' ? 'C 语言底层指令消息结构体定义' : 'C System Structure Definitions'}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <div className="bg-slate-900 text-slate-300 p-4 rounded-none font-mono text-[10.5px] overflow-x-auto select-all leading-normal border border-slate-800">
                        <span className="text-slate-500">// Command Request Structure</span>
                        <br />
                        <span className="text-blue-400">typedef struct</span> &#123;
                        <br />
                        &nbsp;&nbsp;<span className="text-blue-400">char</span> file_path[BUFSIZE];
                        <br />
                        &nbsp;&nbsp;<span className="text-blue-400">char</span> server_name[BUFSIZE];
                        <br />
                        &nbsp;&nbsp;<span className="text-blue-400">char</span> shm_name[NAME];
                        <br />
                        &nbsp;&nbsp;<span className="text-blue-400">char</span> sem_w_name[NAME];
                        <br />
                        &nbsp;&nbsp;<span className="text-blue-400">char</span> sem_r_name[NAME];
                        <br />
                        &nbsp;&nbsp;<span className="text-blue-400">size_t</span> seg_size;
                        <br />
                        &#125; <span className="text-amber-400">proxy_msg_t</span>;
                      </div>
                    </div>

                    <div>
                      <div className="bg-slate-900 text-slate-300 p-4 rounded-none font-mono text-[10.5px] overflow-x-auto select-all leading-normal border border-slate-800">
                        <span className="text-slate-500">// Response Status Structure</span>
                        <br />
                        <span className="text-blue-400">typedef struct</span> &#123;
                        <br />
                        &nbsp;&nbsp;<span className="text-blue-400">int</span> find;
                        <br />
                        &nbsp;&nbsp;<span className="text-blue-400">size_t</span> file_size;
                        <br />
                        &#125; <span className="text-amber-400">cache_msg_t</span>;
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sub: Synchronizations */}
                <div id="section-part2-sync" className="scroll-mt-24 space-y-4 pt-4">
                  <h3 className="font-mono text-sm font-black text-slate-900 uppercase tracking-widest border-l-4 border-slate-900 pl-3">
                    3.3 {lang === 'zh' ? '交叉双信号量交替同步机制' : 'Alternating Twin Semaphores Synchronization'}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                    {lang === 'zh'
                      ? '为了保障共享内存数据在极高速写、读并发时绝对不发生竟态读写错乱（race conditions），系统严密设计了经典的生产者-消费者变种：“交叉双信号量交替同步架构（Reader-Writer Semaphore Pattern）”。系统分配了两套 POSIX 命名信号量（Reader 信号量 与 Writer 信号量）。'
                      : 'Because shared RAM does not block parallel writes natively, an outstanding "Alternating Twin Semaphore Synchronization" was engineered. Two discrete POSIX named semaphores (Reader and Writer) synchronize block access dynamically.'}
                  </p>

                  {/* Flow representation 2 */}
                  <div className="bg-white border border-slate-300 p-6 flex flex-col items-center justify-center space-y-4 shadow-sm">
                    <div className="font-mono text-[9px] font-black uppercase text-slate-400 tracking-widest">
                      // {lang === 'zh' ? '图二: 信号量交替锁闭运转' : 'DIAGRAM 2: ALTERNATING LOCK BOUNDARY'}
                    </div>

                    <svg viewBox="0 0 540 180" className="w-full max-w-lg h-auto">
                      {/* Writer Cache block */}
                      <rect x="10" y="30" width="110" height="120" fill="#f8fafc" stroke="#0f172a" strokeWidth="1.5" />
                      <text x="65" y="55" textAnchor="middle" className="font-mono text-xs font-black fill-slate-900">Cache Server</text>
                      <text x="65" y="80" textAnchor="middle" className="font-mono text-[9px] font-bold fill-slate-500">(Writer)</text>
                      <text x="65" y="110" textAnchor="middle" className="font-sans text-[10px] text-slate-600 bg-slate-100">[P-1] Writes Chunk</text>
                      <text x="65" y="125" textAnchor="middle" className="font-sans text-[10px] text-slate-600 bg-slate-100">[P-3] sem_post(R)</text>

                      {/* Direction flow lines */}
                      <path d="M 120 60 L 210 60" fill="none" stroke="#0f172a" strokeWidth="1.5" markerEnd="url(#arrow)" />
                      <text x="165" y="50" textAnchor="middle" className="font-mono text-[8px] font-black fill-slate-500">1. WRITE DATA</text>

                      <path d="M 210 120 L 120 120" fill="none" stroke="#0f172a" strokeWidth="1.5" markerEnd="url(#arrow)" strokeDasharray="3,3" />
                      <text x="165" y="140" textAnchor="middle" className="font-mono text-[8px] font-black fill-slate-500">4. SEM_WAIT(W)</text>

                      {/* Shared memory block in the middle */}
                      <rect x="220" y="45" width="100" height="90" fill="#ffffff" stroke="#0f172a" strokeWidth="2.5" />
                      <text x="270" y="85" textAnchor="middle" className="font-mono text-xs font-black fill-slate-900">SHARED</text>
                      <text x="270" y="105" textAnchor="middle" className="font-mono text-xs font-black fill-slate-900">MEMORY</text>

                      {/* Right Reader block */}
                      <path d="M 320 60 L 410 60" fill="none" stroke="#0f172a" strokeWidth="1.5" markerEnd="url(#arrow)" />
                      <text x="365" y="50" textAnchor="middle" className="font-mono text-[8px] font-black fill-slate-500">2. SEM_WAIT(R)</text>

                      <path d="M 410 120 L 320 120" fill="none" stroke="#0f172a" strokeWidth="1.5" markerEnd="url(#arrow)" strokeDasharray="3,3" />
                      <text x="365" y="140" textAnchor="middle" className="font-mono text-[8px] font-black fill-slate-500">3. READ DATA</text>

                      <rect x="420" y="30" width="110" height="120" fill="#f8fafc" stroke="#0f172a" strokeWidth="1.5" />
                      <text x="475" y="55" textAnchor="middle" className="font-mono text-xs font-black fill-slate-900">Proxy Server</text>
                      <text x="475" y="80" textAnchor="middle" className="font-mono text-[9px] font-bold fill-slate-500">(Reader)</text>
                      <text x="475" y="110" textAnchor="middle" className="font-sans text-[10px] text-slate-600">[P-2] Reads Chunk</text>
                      <text x="475" y="125" textAnchor="middle" className="font-sans text-[10px] text-slate-600">[P-4] sem_post(W)</text>
                    </svg>

                    <p className="font-mono text-[10px] text-slate-400 text-center uppercase tracking-wide leading-relaxed max-w-md">
                      {lang === 'zh'
                        ? '系统写入线程与读取线程交替上锁与释放。Writer 在共享空间写满一块即挂起（sem_wait），通过 Post(Reader) 唤醒 Reader 执行 Socket 消费；消费毕触发 Post(Writer) 握手周而复始。'
                        : 'Controlled alternating loops: Writer halts upon filling block, triggers Reader, which copies data to client, post-signals Writer back.'}
                    </p>
                  </div>

                  <p className="font-sans text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                    {lang === 'zh'
                      ? '另外，针对外部强制中断或系统异常崩溃等突发场景，两端进程均注册了底层的系统 sig_handler 信号捕获函数。在接收到 SIGINT (Ctrl+C) 或 SIGTERM 时，自动进入全局回滚清理，调用 mq_close, mq_unlink 并对 shm_unlink 段执行销毁归还。此举完全防御了系统崩溃导致的僵尸 IPC 内存文件与宿主节点内存泄漏漏洞。'
                      : 'Additionally, to shield host machines against memory leaking upon ungraceful exits, signal intercept handlers (sig_handler) capture SIGINT or SIGTERM flags immediately. The clean routines securely close and unlink POSIX files (mq_unlink, shm_unlink, sem_unlink) to complete perfect garbage collection.'}
                  </p>
                </div>
              </div>
            </section>

            {/* 4 SYSTEM TESTING */}
            <section id="section-testing" className="scroll-mt-24 space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-300 pb-2">
                <Activity className="h-5 w-5 text-slate-950" />
                <h2 className="font-mono text-base font-black uppercase tracking-wider text-slate-950">
                  4. {lang === 'zh' ? '系统测试与健壮性验证' : 'SYSTEM TEST VALIDATION'}
                </h2>
              </div>
              <p className="font-sans text-xs sm:text-sm text-slate-700 leading-relaxed font-semibold">
                {lang === 'zh'
                  ? '为了全维验证系统的稳定性与极致数据吞吐，我们在严格的沙盒拓扑中开展了全方位的自动化压力校验：'
                  : 'To verify system limits under deep load and guarantee absolute zero-leak runtime operations, a robust suite was deployed:'}
              </p>

              <div className="space-y-4 pt-2">
                <div className="border border-slate-300 bg-white p-4 space-y-2 rounded-none">
                  <div className="font-mono text-xs font-black text-slate-950 flex items-center gap-1.5 uppercase">
                    <span className="h-2 w-2 bg-slate-900 rounded-none"></span>
                    <span>01. {lang === 'zh' ? '基础功能测试 (Functional Testing)' : 'Functional Verification'}</span>
                  </div>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    {lang === 'zh'
                      ? '应用工具 gfclient_download 下载并捕获多重极限文件切片，比对 SHA 哈希数据包一致性，从而验证文件精准获取与 404 Header 错误的容错捕获能力。'
                      : 'Utilized gfclient_download parameters to request files across wide ranges, validating target md5/sha outputs and correct 404 response routing.'}
                  </p>
                </div>

                <div className="border border-slate-300 bg-white p-4 space-y-2 rounded-none">
                  <div className="font-mono text-xs font-black text-slate-950 flex items-center gap-1.5 uppercase">
                    <span className="h-2 w-2 bg-slate-900 rounded-none"></span>
                    <span>02. {lang === 'zh' ? '多并发性能测试 (Performance Testing)' : 'Multi-threaded Telemetry'}</span>
                  </div>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    {lang === 'zh'
                      ? '配置 gfclient_measure 负载压力器。通过设置极其繁复的高频吞吐负载，验证 POSIX 线程池在海量重放与极端网络拥塞下的多路并发负荷能力。'
                      : 'Configured gfclient_measure with automated metrics. Measures requests/sec, thread lifecycle allocations, and IPC sync speeds under massive client counts.'}
                  </p>
                </div>

                <div className="border border-slate-300 bg-white p-4 space-y-2 rounded-none">
                  <div className="font-mono text-xs font-black text-slate-950 flex items-center gap-1.5 uppercase">
                    <span className="h-2 w-2 bg-slate-900 rounded-none"></span>
                    <span>03. {lang === 'zh' ? '极限负载边界测试 (Edge & Stress Testing)' : 'Stress Testing via ipcstress.py'}</span>
                  </div>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    {lang === 'zh'
                      ? '自主开发 Python 压测脚本 ipcstress.py，对代理和缓存两端注入大量超限兆级大文件请求、毫秒级超高压入栈指令。结果证实，双端依靠交替信号量屏障与稳健的消息生命周期，完美抵御了高负荷冲击，完全无崩溃及句柄耗尽现象。'
                      : 'Implemented custom Python tool ipcstress.py. Injecting high-frequency large-size segments alongside random system signal disruptions. Confirmed 100% thread stability, zero race lockups, and clean memory exits.'}
                  </p>
                </div>
              </div>
            </section>

            {/* 5 REFERENCES */}
            <section id="section-reference" className="scroll-mt-24 space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-300 pb-2">
                <Shield className="h-5 w-5 text-slate-950" />
                <h2 className="font-mono text-base font-black uppercase tracking-wider text-slate-950">
                  5. {lang === 'zh' ? '系统规范及文献引用' : 'REFERENCES'}
                </h2>
              </div>
              <ul className="space-y-3 font-mono text-[11px] font-bold text-slate-500">
                <li className="flex gap-2">
                  <span className="text-slate-900 select-none">[1]</span>
                  <div>
                    <span className="text-slate-900 font-black">Libcurl documentation:</span> Multi-platform easy network socket transfers. 
                    <a href="https://curl.se/libcurl/" target="_blank" rel="noopener noreferrer" className="ml-1 text-slate-600 hover:text-slate-950 underline inline-flex items-center gap-0.5">
                      curl.se/libcurl <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-slate-900 select-none">[2]</span>
                  <div>
                    <span className="text-slate-900 font-black">POSIX message queues api:</span> man7 standard message queue specifications. 
                    <a href="https://man7.org/linux/man-pages/man7/mq_overview.7.html" target="_blank" rel="noopener noreferrer" className="ml-1 text-slate-600 hover:text-slate-950 underline inline-flex items-center gap-0.5">
                      man7.org/mq_overview <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-slate-900 select-none">[3]</span>
                  <div>
                    <span className="text-slate-900 font-black">POSIX shared memory api:</span> Kernel level shm specifications. 
                    <a href="https://man7.org/linux/man-pages/man7/shm_overview.7.html" target="_blank" rel="noopener noreferrer" className="ml-1 text-slate-600 hover:text-slate-950 underline inline-flex items-center gap-0.5">
                      man7.org/shm_overview <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-slate-900 select-none">[4]</span>
                  <div>
                    <span className="text-slate-900 font-black">Multithreading in C with POSIX threads:</span> Guide to Pthreads allocation. 
                    <span className="text-slate-400 font-normal ml-1">(LLNL Computer Technical Resources)</span>
                  </div>
                </li>
              </ul>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}
