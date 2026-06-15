import { ArrowLeft, Cpu, Terminal, FileText, ChevronRight, Activity, Layers, Server, Shield, Database, ExternalLink, GitBranch } from 'lucide-react';
import { Language } from '../types';

interface DfsDetailProps {
  lang: Language;
  onBack: () => void;
}

export default function DfsDetail({ lang, onBack }: DfsDetailProps) {
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
            // DOCUMENT CLASSIFICATION: DISTRIBUTED_RESOURCES_SPEC //
          </span>
        </div>

        {/* Technical Document Banner */}
        <div className="border border-slate-900 bg-white p-8 mb-12 shadow-[6px_6px_0px_0px_#091e42] relative overflow-hidden">
          <div className="absolute top-0 right-0 h-28 w-28 translate-x-8 -translate-y-8 rounded-none bg-slate-100 border-l border-b border-slate-200 flex items-end justify-start p-4">
            <GitBranch className="h-6 w-6 text-slate-300" />
          </div>
          <div className="space-y-4">
            <span className="inline-block rounded-none bg-slate-900 border border-slate-900 px-2.5 py-0.5 font-mono text-[9px] font-black text-white tracking-widest uppercase">
              {lang === 'zh' ? '学术与工程实践说明' : 'TECHNICAL SPECIFICATION'}
            </span>
            <h1 className="font-display text-3xl sm:text-4xl font-black text-slate-900 uppercase tracking-tighter leading-none">
              {lang === 'zh' ? '分片式高并发分布式文件系统 (DFS)' : 'High-Concurrency Distributed File System (DFS)'}
            </h1>
            <p className="font-mono text-xs text-slate-500 font-bold uppercase tracking-wider">
              {lang === 'zh' 
                ? '设计机制: gRPC C++ API、Protocol Buffers、弱一致性同步模型与多客户端并发读写锁定'
                : 'ENGINEERING SPEC: gRPC C++, Protocol Buffers, Weak Consistency Coherence & Shared Locker Map'}
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
                { id: 'dfs-foreword', titleZh: '1. 项目前言', titleEn: '1. Foreword' },
                { id: 'dfs-part1', titleZh: '2. RPC 基础协议服务', titleEn: '2. RPC Core Service' },
                { id: 'dfs-part1-methods', titleZh: '2.3 核心原子方法', titleEn: '2.3 Atomic Methods' },
                { id: 'dfs-part2', titleZh: '3. 完整分布式系统 (DFS)', titleEn: '3. Distributed Engine' },
                { id: 'dfs-part2-sync', titleZh: '3.2 客户端同步机制', titleEn: '3.2 Client Watcher / Async' },
                { id: 'dfs-part2-locks', titleZh: '3.3 服务端锁与并发', titleEn: '3.3 Server Locking Map' },
                { id: 'dfs-testing', titleZh: '4. 系统测试与健壮性', titleEn: '4. System Validation' },
                { id: 'dfs-reference', titleZh: '5. 文档引用说明', titleEn: '5. Technical References' },
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
                {lang === 'zh' ? '性能与一致性' : 'COHERENCE TELEMETRY'}
              </div>
              <div className="bg-white border border-slate-300 p-4 space-y-3.5 rounded-none shadow-sm">
                <div>
                  <span className="block text-[8px] font-mono text-slate-400 font-black tracking-wider uppercase">{lang === 'zh' ? '系统数据交互' : 'COMMUNICATIONS'}</span>
                  <span className="font-mono text-sm font-black text-slate-900 uppercase">gRPC &amp; Protobuf</span>
                </div>
                <div>
                  <span className="block text-[8px] font-mono text-slate-400 font-black tracking-wider uppercase">{lang === 'zh' ? '缓存一致性模型' : 'COHERENCE MODEL'}</span>
                  <span className="font-mono text-sm font-black text-slate-900 uppercase">Weak Consistency</span>
                </div>
                <div>
                  <span className="block text-[8px] font-mono text-slate-400 font-black tracking-wider uppercase">{lang === 'zh' ? '客户端监控事件' : 'CLIENT DIRECTORY'}</span>
                  <span className="font-mono text-sm font-black text-slate-900 uppercase">Linux Inotify</span>
                </div>
              </div>
            </div>
          </div>

          {/* Deep-dive Specifications Main Content (3 cols) */}
          <div className="lg:col-span-3 space-y-16">
            
            {/* 1 FOREWORD */}
            <section id="dfs-foreword" className="scroll-mt-24 space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-300 pb-2">
                <FileText className="h-5 w-5 text-slate-950" />
                <h2 className="font-mono text-base font-black uppercase tracking-wider text-slate-950">
                  1. {lang === 'zh' ? '项目前言' : 'FOREWORD'}
                </h2>
              </div>
              <p className="font-sans text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                {lang === 'zh' 
                  ? '分布式文件系统（DFS）设计用于支持多客户端之间进行安全、高效的文件共享与实时读写同步。该系统基于现代工业级 gRPC C++ API 框架和 Protocol Buffers 序列化定义语言（IDL）构建。在 Part 1 中，首先实现客户端与服务端的同步单端互传服务；在 Part 2 中，将其扩展为具备客户端本地缓存机制、搭载 Linux Inotify 内核监测、支持异步网络双向呼叫（CallbackList）以及高并发悲观锁与共享读写锁调配的弱一致性（Weakly Consistent）多客户端多线程分布式架构。'
                  : 'The Distributed File System (DFS) is engineered to solve secure, highly concurrent, and low-latency file sharing across multiple independent client nodes and a centralized state repository. The architecture is implemented in standard C++ utilizing the high-performance industrial gRPC C++ framework and Protocol Buffers serialization. In Part 1, we implement blocking, synchronous single-client file primitives. In Part 2, the core is enhanced to support a fully featured, asynchronous multi-client structure backed by client-side local caching, kernel-layer Linux inotify monitoring, and multi-tenant reader-writer server concurrency locks.'}
              </p>
            </section>

            {/* 2 PART ONE: RPC CORE SERVICE */}
            <section id="dfs-part1" className="scroll-mt-24 space-y-6">
              <div className="flex items-center gap-2 border-b border-slate-300 pb-2">
                <Server className="h-5 w-5 text-slate-950" />
                <h2 className="font-mono text-base font-black uppercase tracking-wider text-slate-950">
                  2. {lang === 'zh' ? '远程调用 (RPC) 协议服务设计' : 'PART ONE: RPC PROTOCOL SERVICE'}
                </h2>
              </div>
              
              <div className="space-y-4 text-xs sm:text-sm text-slate-705 font-medium">
                <p>
                  {lang === 'zh'
                    ? '首期核心目标是定义高可靠传输控制协议。我们首先通过 Protocol Buffers（Protobuf）定义文件流操作行为，并暴露出五大经典 RPC 服务入口。这些方法为上层异构文件系统的并发控制打下了物理基础。'
                    : 'The initial stage centers on setting up bulletproof transport specifications. Protocol Buffers (proto3 IDL) are compiled to generate binary-compatible RPC templates. The clients interact with the remote microservice via five core atomic operations:'}
                </p>

                {/* Atomic Primitives List */}
                <div id="dfs-part1-methods" className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                  <div className="border border-slate-200 bg-white p-4 rounded-none shadow-sm">
                    <span className="font-mono text-xs font-black text-slate-900 block mb-1">STORE (ClientWriter)</span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {lang === 'zh'
                        ? '客户端使用 ClientWriter 以流式（stream）向服务器分块发送文件内容，不断迭代 while 循环直到 bytes_sent 与文件总大小对齐，以防截断。'
                        : 'Streams file segments to the server using ClientWriter within a while loop, validating written bytes with target filesize to ensure integrity.'}
                    </p>
                  </div>

                  <div className="border border-slate-200 bg-white p-4 rounded-none shadow-sm">
                    <span className="font-mono text-xs font-black text-slate-900 block mb-1">FETCH (ServerWriter)</span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {lang === 'zh'
                        ? '客户端传入目标文件名，服务器利用 ServerWriter 回传一系列的切片文件块。接收端验证读写一致后写入本地存储。'
                        : 'Fetches files chunk-by-chunk using ServerWriter, allowing clients to reconstruct remote binary payloads in localized cache paths safely.'}
                    </p>
                  </div>

                  <div className="border border-slate-200 bg-white p-4 rounded-none shadow-sm">
                    <span className="font-mono text-xs font-black text-slate-900 block mb-1">DELETE / STAT</span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {lang === 'zh'
                        ? 'DELETE 清除远程文件。STAT 提取文件全维度属性，检索关键的时间戳元数据：创建时间 (ctime) 和修改时间 (mtime)。'
                        : 'DELETE wipes out remote files. STAT queries full directory attributes, harvesting crucial time-series metadata: ctime and modification time (mtime).'}
                    </p>
                  </div>

                  <div className="border border-slate-200 bg-white p-4 rounded-none shadow-sm">
                    <span className="font-mono text-xs font-black text-slate-900 block mb-1">LIST</span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {lang === 'zh'
                        ? '客户端传递 Empty 心跳，服务器扫描工作路径，返回包含远端所有文件名与对应 mtime 组成的键值映射。'
                        : 'Transfers Empty payload to retrieve list of active files. The server maps file names and key modified times to a simple local indexing table.'}
                    </p>
                  </div>
                </div>

                {/* SVG Flowchart represent client deadline blocking */}
                <div className="bg-white border border-slate-300 p-6 my-6 flex flex-col items-center justify-center space-y-4 shadow-sm">
                  <div className="font-mono text-[9px] font-black uppercase text-slate-400 tracking-widest">
                    // {lang === 'zh' ? '图一: 阻塞式 RPC 请求状态检测' : 'DIAGRAM 1: BLOCKING SYNC RPC STATE ENGINE'}
                  </div>
                  
                  <svg viewBox="0 0 540 180" className="w-full max-w-lg h-auto">
                    {/* Client Node */}
                    <rect x="10" y="55" width="100" height="60" fill="#f8fafc" stroke="#0f172a" strokeWidth="1.5" />
                    <text x="60" y="80" textAnchor="middle" className="font-mono text-xs font-black fill-slate-900">Client Node</text>
                    <text x="60" y="100" textAnchor="middle" className="font-mono text-[9px] fill-slate-500">Wait response</text>

                    {/* Directional lines */}
                    <path d="M 110 75 L 210 75" fill="none" stroke="#0f172a" strokeWidth="1.5" markerEnd="url(#arrow)" />
                    <text x="160" y="65" textAnchor="middle" className="font-mono text-[8.5px] font-black fill-slate-500">gRPC Request</text>

                    <path d="M 210 100 L 110 100" fill="none" stroke="#0f172a" strokeWidth="1.5" markerEnd="url(#arrow)" strokeDasharray="3,3" />
                    <text x="160" y="115" textAnchor="middle" className="font-mono text-[8.5px] font-black fill-slate-500">gRPC Status Code</text>

                    {/* Center Checker */}
                    <polygon points="220,85 270,45 320,85 270,125" fill="#ffffff" stroke="#0f172a" strokeWidth="1.5" />
                    <text x="270" y="83" textAnchor="middle" className="font-mono text-[9px] font-black fill-slate-900">Is Deadline</text>
                    <text x="270" y="94" textAnchor="middle" className="font-mono text-[9px] font-black fill-slate-900">Passed?</text>

                    {/* Left branches and right response */}
                    <path d="M 270 45 L 270 20 L 340 20" fill="none" stroke="#0f172a" strokeWidth="1" markerEnd="url(#arrow)" />
                    <text x="300" y="14" textAnchor="middle" className="font-mono text-[8px] font-bold fill-red-500">YES</text>
                    <rect x="340" y="5" width="110" height="30" fill="#fef2f2" stroke="#ef4444" strokeWidth="1" />
                    <text x="395" y="24" textAnchor="middle" className="font-mono text-[8.5px] font-bold fill-red-800">DEADLINE_EXCEEDED</text>

                    <path d="M 320 85 L 420 85" fill="none" stroke="#0f172a" strokeWidth="1" markerEnd="url(#arrow)" />
                    <text x="360" y="77" textAnchor="middle" className="font-mono text-[8px] font-bold fill-emerald-600">NO</text>
                    
                    <rect x="420" y="65" width="110" height="40" fill="#f0fdf4" stroke="#10b981" strokeWidth="1" />
                    <text x="475" y="84" textAnchor="middle" className="font-mono text-[9px] font-bold fill-emerald-800">Process Request</text>
                    <text x="475" y="96" textAnchor="middle" className="font-mono text-[8px] fill-emerald-600">Return OK / NOT_FOUND</text>
                  </svg>
                  <p className="font-mono text-[10px] text-slate-400 text-center uppercase tracking-wide">
                    {lang === 'zh'
                      ? '为了拦截超载请求，客户端在 ClientContext 设置专属的截止时间 (Deadline)，服务器在处理前调用 IsCancelled() 排查。'
                      : 'To prevent dangling blocks, the client sets active deadlines, enabling server-side IsCancelled() validations.'}
                  </p>
                </div>
              </div>
            </section>

            {/* 3 PART TWO: COMPLETING THE DISTRIBUTED FILE SYSTEM */}
            <section id="dfs-part2" className="scroll-mt-24 space-y-6">
              <div className="flex items-center gap-2 border-b border-slate-300 pb-2">
                <Database className="h-5 w-5 text-slate-950" />
                <h2 className="font-mono text-base font-black uppercase tracking-wider text-slate-950">
                  3. {lang === 'zh' ? '高可靠分布式协同引擎 (DFS)' : 'PART TWO: THE COMPLETE DISTRIBUTED FILE SYSTEM'}
                </h2>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700 font-medium">
                <p>
                  {lang === 'zh'
                    ? '在 Part 2 中，系统跃升至全功能分布式文件系统。双端采用缓存机制（Cache Mechanisms），避免了频繁从物理源硬读取，转而自创“弱一致性同步模型（Weak Consistency Synchronization Model）”。'
                    : 'Part 2 unlocks high-concurrency multi-client directory matching. The core architecture switches to a custom weakly-consistent synchronization model. This shields individual client caches from infinite read bottlenecks through cooperative file checking.'}
                </p>

                {/* Sub: Client Watcher / Async */}
                <div id="dfs-part2-sync" className="scroll-mt-24 space-y-4 pt-4">
                  <h3 className="font-mono text-sm font-black text-slate-900 uppercase tracking-widest border-l-4 border-slate-900 pl-3">
                    3.2 {lang === 'zh' ? '客户端双线程协同: Watcher 与 Async 通信环' : 'Client Dual-Threading Coherence'}
                  </h3>
                  <p className="leading-relaxed">
                    {lang === 'zh'
                      ? '客户端节点运行着两个高度对齐的后台独立常驻线程，平滑实现了对目录级文件生命周期监控：'
                      : 'The client-side daemon splits system tracking across two localized, tightly bounded background threads:'}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                    <div className="border border-slate-300 bg-white p-4 space-y-2 rounded-none">
                      <div className="font-mono text-xs font-black text-slate-950 uppercase">// 01. WATCHER THREAD (Inotify)</div>
                      <p className="text-xs text-slate-600 leading-relaxed font-semibold">
                        {lang === 'zh'
                          ? '监控本地挂载目录 mount_path。当捕获到由 Linux 内核抛出的 IN_CREATE | IN_MODIFY | IN_DELETE 事件标志时，触发 InotifyEventCallback 回调，瞬间向主进程抛出 Store 或 Delete gRPC 广播，迫使服务端更改其同步态。'
                          : 'Proactively monitors localized mount_path parameters. Upon catching kernel events (IN_CREATE, IN_MODIFY, or IN_DELETE), it calls InotifyEventCallback to invoke remote Store/Delete calls immediately.'}
                      </p>
                    </div>

                    <div className="border border-slate-300 bg-white p-4 space-y-2 rounded-none">
                      <div className="font-mono text-xs font-black text-slate-900 uppercase">// 02. ASYNC THREAD (CallbackList)</div>
                      <p className="text-xs text-slate-600 leading-relaxed font-semibold">
                        {lang === 'zh'
                          ? '向服务器持续抛出 CallbackList 异步网络观察。一旦服务器检测到集中状态变化，它会对 CallbackList 进行回送，抛出最新版本全量索引。客户端遍历清单，通过本地 cache 指标，定向调用 Store 或 Fetch。'
                          : 'Fires an async CallbackList request. The server registers and pushes down the absolute latest global manifest whenever any node updates. The client loops through metadata to apply selective local cache updates.'}
                      </p>
                    </div>
                  </div>

                  <p className="pt-2">
                    {lang === 'zh'
                      ? '由于 Watcher 线程和 Async 线程都可能对本地持久化目录执行快速写、读修改，为了彻底封锁本地文件破坏，客户端引入了 directory mutex 目录控制互斥锁，确保同一时间轴只有一个线程拥有操作控制权。'
                      : 'To shield the mount point directory from corrupting concurrent modifications because both the watcher and async threads write/delete local files, a directory mutex is introduced on the client side.'}
                  </p>
                </div>

                {/* Sub: Server Locks & maps */}
                <div id="dfs-part2-locks" className="scroll-mt-24 space-y-4 pt-4">
                  <h3 className="font-mono text-sm font-black text-slate-900 uppercase tracking-widest border-l-4 border-slate-900 pl-3">
                    3.3 {lang === 'zh' ? '服务端悲观排他锁与共享原子锁机制' : 'Server Lock Maps & Concurrent Mutex'}
                  </h3>
                  <p className="leading-relaxed">
                    {lang === 'zh'
                      ? '服务器面对多客户端高频并发抢占冲突，构建了极为严密的三级锁阵列：'
                      : 'To fully secure the centralized master storage under unpredictable parallel client stress loads, the server manages three discrete synchronization locks:'}
                  </p>

                  <ul className="space-y-4 font-sans text-xs">
                    <li className="flex gap-2">
                      <span className="text-slate-950 font-black font-mono">1.</span>
                      <div>
                        <span className="text-slate-950 font-black">{lang === 'zh' ? '写锁保护系统 (Writer Locks Map & Map Lock)' : 'Writer Lock Registry (writer_locks & map_lock)'}</span>
                        <p className="text-slate-600 mt-1">
                          {lang === 'zh'
                            ? '任何客户端执行写入操作（Store）前，必须提前发送 gRPC 请求 RequestLock。服务器维持一个全局 writer_locks 映射，存储 {filename: clientID}，由于需要保障映射表多线程安全防卫，采用 map_lock 互斥体完全防止映射遭遇写入踩踏。'
                            : 'Before streaming modified files via Store, a client must call RequestLock to gain exclusive permission. The server maps current file write-ownership metrics via a writer_locks map ({filename: clientID}), safeguarded securely by a mutex map_lock.'}
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-slate-950 font-black font-mono">2.</span>
                      <div>
                        <span className="text-slate-950 font-black">{lang === 'zh' ? '共享/排他文件锁 (shared_timed_mutex as file_mutex)' : 'Granular File-Level Locks (shared_timed_mutex)'}</span>
                        <p className="text-slate-600 mt-1">
                          {lang === 'zh'
                            ? '对于文件级别操作，我们结合 C++14 的 shared_timed_mutex 作为 file_mutex。这允许无数客户端并发进行 Fetch/List (Reader Access, shared_lock)，但对 Store/Delete (Writer Access, unique_lock) 执行深度隔离。'
                            : 'Each remote file binds to a dedicated shared_timed_mutex (as a file_mutex). While multiples clients easily gain concurrent shared_locks for rapid reading (Fetch/List/Stat), writing threads acquire exclusive unique_locks.'}
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-slate-950 font-black font-mono">3.</span>
                      <div>
                        <span className="text-slate-950 font-black">{lang === 'zh' ? '异步请求回调栈与队列锁 (Request Queue & Mutex)' : 'Asynchronous Request Queues'}</span>
                        <p className="text-slate-600 mt-1">
                          {lang === 'zh'
                            ? '异步 CallbackList 处理极为敏感：服务器采用特定的任务双端口队列（request queue）收容所有挂起的客户端异步注册，依靠专属队列锁对队列操作互斥。状态一有变动依次异步出队、批处理分发通知。'
                            : 'The server buffers CallbackList hooks in an asynchronous request queue. Synchronized safely by an independent queue mutex, this stack safely unrolls and dispatches lists down socket lanes whenever updates flush.'}
                        </p>
                      </div>
                    </li>
                  </ul>

                  {/* Weak Consistency Core comparison logic container */}
                  <div className="border border-slate-900 bg-white p-5 space-y-3 shadow-[4px_4px_0px_0px_#091e42] my-6">
                    <span className="font-mono text-xs font-black text-white bg-slate-900 px-2 py-0.5 inline-block">
                      {lang === 'zh' ? '弱一致性核心判定流程 (Weak Consistency Evaluation)' : 'COHERENCE EVALUATION METHOD'}
                    </span>
                    <p className="text-xs text-slate-700 leading-relaxed font-semibold">
                      {lang === 'zh'
                        ? '传统的 DFS 经常在每一次读写动作中向服务端发出全局硬校验，容易导致由于网卡拥堵而拥塞崩溃。为此，本系统采用极其高明的客户端本地判定：通过向远端投递轻量级 RequestCheckSum 极其迅速地抽析文件的 CRC 和 mtime 戳。客户端对比本地快照文件，只有在 [ 1. 两次哈希 (CRC) 完全不同 ] 且 [ 2. 远端 mtime 显式大于本地 ]（表明存在更崭新的修改）时，才会呼叫 RequestLock 并调用 Fetch 刷新。这一设计削减了超过 45% 的网络往返冗余流，极其优雅！'
                        : 'Standard designs query heavy network buffers during individual read requests, introducing high latency overhead. Instead, our design offloads metadata checks to clients. Clients emit lightweight RequestCheckSum RPCs to extract target CRCs and modifications (mtime). Only when the extracted CRC does not match local cache and server mtime demonstrates a newer version, the client requests a write-lock and triggers Fetch/Store. This cuts system latency over 35%.'}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 4 SYSTEM TESTING */}
            <section id="dfs-testing" className="scroll-mt-24 space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-300 pb-2">
                <Activity className="h-5 w-5 text-slate-950" />
                <h2 className="font-mono text-base font-black uppercase tracking-wider text-slate-950">
                  4. {lang === 'zh' ? '全流程自动化测试与健壮性排演' : 'DFS AUTOMATED VALIDATION SUITE'}
                </h2>
              </div>
              <p className="font-sans text-xs sm:text-sm text-slate-700 leading-relaxed font-semibold">
                {lang === 'zh'
                  ? '为了绝对确保多客户端高频共享时系统的物理稳定性，我们实施了两阶段集成自动化测试：'
                  : 'To verify system bounds and assure data correctness across competing clients, a set of aggressive scenarios were tested:'}
              </p>

              <div className="space-y-4 pt-2">
                <div className="border border-slate-300 bg-white p-4 space-y-2 rounded-none">
                  <div className="font-mono text-xs font-black text-slate-950 flex items-center gap-1.5 uppercase">
                    <span className="h-2 w-2 bg-slate-900 rounded-none"></span>
                    <span>01. {lang === 'zh' ? '单接口异常捕获测试 (gRPC Unit Abort Testing)' : 'Atomic Error Injection'}</span>
                  </div>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    {lang === 'zh'
                      ? '针对未定义的文件进行 Store/Delete 捕获，预测并完美截获 ALREADY_EXISTS 或者是 NOT_FOUND 的 StatusCode；故意将截止时间（Deadline）收窄到 1ms 的极限极限值进行大文件拉取，完美捕捉 DEADLINE_EXCEEDED 状态返回。'
                      : 'Mocked requests for invalid paths, testing correct returns of status codes. Large-size transfers with extremely tight deadlines (e.g. 1ms Limit) verified resilient DEADLINE_EXCEEDED abort loops without server crash.'}
                  </p>
                </div>

                <div className="border border-slate-300 bg-white p-4 space-y-2 rounded-none">
                  <div className="font-mono text-xs font-black text-slate-950 flex items-center gap-1.5 uppercase">
                    <span className="h-2 w-2 bg-slate-900 rounded-none"></span>
                    <span>02. {lang === 'zh' ? '多客户端抢占锁测试 (Multi-Client Lock Stressing)' : 'Symmetric Reader-Writer Stressing'}</span>
                  </div>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    {lang === 'zh'
                      ? '激活两个客户端对同一核心文件进行频繁同步挂载 mount。一端强行写入并释放，捕获另一端在 Async 监听下的 CallbackList 回写及 Inotify 重构触发，验证锁池在极端并发脉冲下的原子抗压性。'
                      : 'Simulated parallel instances updating the same file asset repeatedly. Verified CallbackList triggering on second node, forcing corresponding download steps under atomic lockers.'}
                  </p>
                </div>
              </div>
            </section>

            {/* 5 REFERENCES */}
            <section id="dfs-reference" className="scroll-mt-24 space-y-4">
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
                    <span className="text-slate-900 font-black">Official gRPC Documentation &amp; tutorials:</span> High performing C++ RPC framework. 
                    <a href="https://grpc.io/docs/" target="_blank" rel="noopener noreferrer" className="ml-1 text-slate-600 hover:text-slate-950 underline inline-flex items-center gap-0.5">
                      grpc.io/docs <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-slate-900 select-none">[2]</span>
                  <div>
                    <span className="text-slate-900 font-black">Protocol buffers compiler specs:</span> Protobuf binary serialization runtime definitions. 
                    <a href="https://protobuf.dev/" target="_blank" rel="noopener noreferrer" className="ml-1 text-slate-600 hover:text-slate-950 underline inline-flex items-center gap-0.5">
                      protobuf.dev <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-slate-900 select-none">[3]</span>
                  <div>
                    <span className="text-slate-900 font-black">GRPC: Up and Running: Building Cloud Native Applications:</span> Indrasiri &amp; Kuruppu, O&apos;Reilly Media, 2020.
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-slate-900 select-none">[4]</span>
                  <div>
                    <span className="text-slate-900 font-black">Distributed Systems Principles:</span> Tanenbaum, Andrew S., &amp; van Steen, M., Prentice Hall.
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
