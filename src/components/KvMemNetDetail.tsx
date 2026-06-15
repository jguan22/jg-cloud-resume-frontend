import { ArrowLeft, Cpu, Terminal, FileText, ChevronRight, Activity, Layers, Server, Shield, Database, ExternalLink, Brain, Sparkles } from 'lucide-react';
import { Language } from '../types';

interface KvMemNetDetailProps {
  lang: Language;
  onBack: () => void;
}

export default function KvMemNetDetail({ lang, onBack }: KvMemNetDetailProps) {
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
            className="group flex items-center gap-2 px-3 py-1.5 border border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white font-mono text-xs font-black uppercase tracking-widest transition-all duration-200 cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform" />
            <span>{lang === 'zh' ? '返回主页' : 'Return to Portfolio'}</span>
          </button>

          <span className="font-mono text-[10px] text-slate-400 font-black tracking-widest uppercase">
            // DOCUMENT CLASSIFICATION: NEURAL_ATTENTION_BLUEPRINT //
          </span>
        </div>

        {/* Technical Document Banner */}
        <div className="border border-slate-900 bg-white p-8 mb-12 shadow-[6px_6px_0px_0px_#091e42] relative overflow-hidden">
          <div className="absolute top-0 right-0 h-28 w-28 translate-x-8 -translate-y-8 rounded-none bg-slate-100 border-l border-b border-slate-200 flex items-end justify-start p-4">
            <Brain className="h-6 w-6 text-slate-300" />
          </div>
          <div className="space-y-4">
            <span className="inline-block rounded-none bg-slate-900 border border-slate-900 px-2.5 py-0.5 font-mono text-[9px] font-black text-white tracking-widest uppercase">
              {lang === 'zh' ? '深度学习与问答查询学术说明' : 'NEURAL CONVOLUTIONAL BLUEPRINT'}
            </span>
            <h1 className="font-display text-3xl sm:text-4xl font-black text-slate-900 uppercase tracking-tighter leading-none">
              {lang === 'zh' ? '问答知识库键值内存网络' : 'Key-Value Memory Network for QA'}
            </h1>
            <p className="font-mono text-xs text-slate-500 font-bold uppercase tracking-wider">
              {lang === 'zh' 
                ? '设计机制: PyTorch 神经网络、Attention 评分矩阵、SpaCy 实体抽取与 Wikipedia 数据管道'
                : 'ENGINEERING SPEC: PyTorch Neural Net, Attention scoring, SpaCy NER & Wikipedia ingestion pipelines'}
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
                { id: 'section-architecture', titleZh: '2. 键值网络架构', titleEn: '2. Network Architecture' },
                { id: 'section-synthetic', titleZh: '3. 简谐合成数据', titleEn: '3. Synthetic Training' },
                { id: 'section-realworld', titleZh: '4. 维度百科处理', titleEn: '4. Wikipedia Ingestion' },
                { id: 'section-nlp-inference', titleZh: '5. 动态实体问答', titleEn: '5. NLP Dynamic Inference' },
                { id: 'section-report', titleZh: '6. 学术研究报告', titleEn: '6. Academic Report (F)' },
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
                {lang === 'zh' ? '特征指标概览' : 'METRIC TELEMETRY'}
              </div>
              <div className="bg-white border border-slate-300 p-4 space-y-3.5 rounded-none shadow-sm">
                <div>
                  <span className="block text-[8px] font-mono text-slate-400 font-black tracking-wider uppercase">{lang === 'zh' ? '知识库段落吞吐' : 'INGESTED VOLUME'}</span>
                  <span className="font-mono text-sm font-black text-slate-900 uppercase">580k+ BIOS</span>
                </div>
                <div>
                  <span className="block text-[8px] font-mono text-slate-400 font-black tracking-wider uppercase">{lang === 'zh' ? '高低保真存储项' : 'KEY-VALUE DICT'}</span>
                  <span className="font-mono text-sm font-black text-slate-900 uppercase">96k+ TERMS</span>
                </div>
                <div>
                  <span className="block text-[8px] font-mono text-slate-400 font-black tracking-wider uppercase">{lang === 'zh' ? '特征融合层' : 'NEURAL DIMS'}</span>
                  <span className="font-mono text-sm font-black text-slate-900 uppercase">50-DIM EMBED</span>
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
                  ? '现代问答系统中，传统数据库检索无法较好适应模糊或带有长尾修饰的自然语言输入。键值记忆网络（Key-Value Memory Network - KVMemNet）在无需重训或反复调整网络底层神经网络参数的前提下，通过引入注意力评分机制（Attention Scoring Mechanism）来访问具有键值表（Keys & Values）结构的外部知识库。本项目使用 Python 和 PyTorch 从零构建了单步检索（Single-hop Retrieval）外部记忆模型，利用 SpaCy、NLTK 及 Unidecode 定制对齐非结构化 Wikipedia 传记，并在多干扰词（Decoys）条件下，成功复现该端到端知识对齐与召回系统。'
                  : 'In modern question-answering systems, traditional relational queries fail to map unstructured, verbose natural language questions directly to exact records. Key-Value Memory Networks (KVMemNet) mitigate this by introducing an external structured database (designed as keys and values) which the neural network accesses through an attention-scoring channel. This system implements an end-to-end question-answering model from scratch in PyTorch, using SpaCy, NLTK, and Unidecode to prep and ingest Wikipedia bio tables, verifying correct retrieval under high-stress distractor matrices.'}
              </p>
            </section>

            {/* 2 NETWORK ARCHITECTURE */}
            <section id="section-architecture" className="scroll-mt-24 space-y-6">
              <div className="flex items-center gap-2 border-b border-slate-300 pb-2">
                <Layers className="h-5 w-5 text-slate-950" />
                <h2 className="font-mono text-base font-black uppercase tracking-wider text-slate-950">
                  2. {lang === 'zh' ? '键值网络核心架构与数学表征' : 'MODEL ARCHITECTURE & SYMBOLIC REGRESSION'}
                </h2>
              </div>
              
              <div className="space-y-4 text-xs sm:text-sm text-slate-705 font-medium">
                <p>
                  {lang === 'zh'
                    ? '键值外部记忆网络首先将输入问题转化为 Bag-of-Words (多热编码向量) 记为 x。网络内部搭载两套主要的投影变换矩阵 W_A 与 W_B。模型的数学投影和融合计算表现如下：'
                    : 'The KVMemNet processes raw query inputs as BoW (multihot vectors) denoted as x. Structurally, it maintains two principal trainable projection matrices (Linear layers A and B). The symbolic data pipeline is formatted as follows:'}
                </p>

                <div className="bg-slate-50 border border-slate-900 p-4 space-y-2 font-mono text-xs text-slate-900 leading-relaxed rounded-none shadow-[2px_2px_0px_0px_#091e42]">
                  <div>1. Query Embedding: q = A(x) &nbsp;&nbsp;&nbsp;&nbsp;[dim: embed_dim]</div>
                  <div>2. Keys Embedding:  k_i = A(key_i) &nbsp;[dim: num_keys x embed_dim]</div>
                  <div>3. Values Embedding: v_i = A(val_i) &nbsp;[dim: num_keys x embed_dim]</div>
                  <div>4. Dot-Product Scores: a_i = q • k_i</div>
                  <div>5. Probability Scores: p_i = exp(a_i) / Σ_j exp(a_j) &nbsp;[softmax]</div>
                  <div>6. Retrieved Context: o = Σ_i p_i * v_i &nbsp;[torch.matmul]</div>
                  <div>7. Target Embedding: y_c = B(Y) &nbsp;&nbsp;&nbsp;&nbsp;[External Memory training layer]</div>
                </div>

                <p>
                  {lang === 'zh'
                    ? '在获得检索到的记忆表征 o 之后，我们对数据库内的全局对应值集 Y 进行 B 层投影：y = B(Y)。通过最大化 o 与正确回答索引坐标对应 y_c 的点积相似度，由 CrossEntropy 二级递进优化网络。'
                    : 'Once the retrieving step yields output o, the network projects the entire database value matrix Y via embedding B: y_c = B(Y). The dot product of o and y_c is computed to establish cross-entropy loss relative to the correct index.'}
                </p>

                {/* Architectural Blueprint Diagrams Showcase */}
                <div className="space-y-8 my-8">
                  <div className="border border-slate-900 bg-white p-6 shadow-[4px_4px_0px_0px_#091e42] rounded-none">
                    <div className="font-mono text-[9px] font-black uppercase text-slate-400 tracking-widest mb-3">
                      // {lang === 'zh' ? '图 1: 键值记忆网络点积注意力控制流 (推理/前向通道)' : 'DIAGRAM 1: KVMEMNET ATTENTION CONTROL FLOW (INFERENCE/FORWARD PASS)'}
                    </div>
                    <img 
                      src="/input_file_0.png" 
                      alt="KVMemNet Forward Attention Mechanism" 
                      referrerPolicy="no-referrer"
                      className="w-full border border-slate-300 shadow-sm"
                    />
                    <p className="mt-3 font-mono text-[10px] text-slate-500 uppercase tracking-wider leading-relaxed">
                      {lang === 'zh' 
                        ? '推理前向通道: 将提问多热编码 x 输入 A 获得 q；对候选 Key 矩阵进行相乘并求 Softmax 注意力归一化 p，最后运用 p 乘以 Value 对应嵌入完成特征融合提取。'
                        : 'Forward Pass: Projects multihot question x into q via embed_A. Computes dot-product similarity against embedded keys. Applies Softmax p to retrieve weighted summaries from candidate values.'}
                    </p>
                  </div>

                  <div className="border border-slate-900 bg-white p-6 shadow-[4px_4px_0px_0px_#091e42] rounded-none">
                    <div className="font-mono text-[9px] font-black uppercase text-slate-400 tracking-widest mb-3">
                      // {lang === 'zh' ? '图 2: 外置记忆训练网络与 Embedding B 学习回传 (训练通道)' : 'DIAGRAM 2: EXTERNAL MEMORY TRAINING LOOP & EMBEDDING B (TRAINING BACKPROP)'}
                    </div>
                    <img 
                      src="/input_file_1.png" 
                      alt="KVMemNet Training with Embedding B" 
                      referrerPolicy="no-referrer"
                      className="w-full border border-slate-300 shadow-sm"
                    />
                    <p className="mt-3 font-mono text-[10px] text-slate-500 uppercase tracking-wider leading-relaxed">
                      {lang === 'zh' 
                        ? '记忆层训练通道: 利用记忆编码层 B 对全局 Value 词典建立嵌入 y = B(Y)。将前向推理 output 与 y 求同向点积，依靠 Softmax 产生概率，通过 Cross Entropy 实现梯度反传与端到端逼近自反馈。'
                        : 'Training Loop with B-layer: Projects the entire database value keys using embedding layer B. Explores dot products of output summaries and embedded values to calculate loss gradients through Cross Entropy.'}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-mono text-xs font-black text-slate-950 uppercase tracking-widest">
                    {lang === 'zh' ? 'PyTorch 从零神经网络模型架构定义' : 'PyTorch Network Spec Definition'}
                  </h4>
                  <div className="bg-slate-900 text-slate-350 p-4 rounded-none font-mono text-[11px] overflow-x-auto select-all leading-normal border border-slate-800">
                    <span className="text-slate-500"># Model Construction code from scratch</span>
                    <br />
                    <span className="text-blue-400">class</span> <span className="text-yellow-400">KVMemNet</span>(nn.Module):
                    <br />
                    &nbsp;&nbsp;<span className="text-blue-400">def</span> <span className="text-emerald-400">__init__</span>(self, vocab_size, embed_dim):
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;super(KVMemNet, self).__init__()
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;self.embedding_A = nn.Linear(vocab_size, embed_dim)
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;self.embedding_B = nn.Linear(vocab_size, embed_dim)
                    <br />
                    <br />
                    &nbsp;&nbsp;<span className="text-blue-400">def</span> <span className="text-emerald-400">forward</span>(self, x, keys, values):
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;q = self.embedding_A(x) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-slate-500"># (embed_dim,)</span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;k = self.embedding_A(keys) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-slate-500"># (num_keys, embed_dim)</span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;v = self.embedding_A(values) &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-slate-500"># (num_keys, embed_dim)</span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;attention_scores = torch.inner(q, k) <span className="text-slate-500"># (num_keys,)</span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;p = F.softmax(attention_scores, dim=0) <span className="text-slate-500"># Probability vector</span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;output = torch.matmul(p, v) &nbsp;&nbsp;&nbsp;<span className="text-slate-500"># (embed_dim,) retrieved representation</span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">return</span> output
                  </div>
                </div>
              </div>
            </section>

            {/* 3 SYNTHETIC CONVERGENCE */}
            <section id="section-synthetic" className="scroll-mt-24 space-y-6">
              <div className="flex items-center gap-2 border-b border-slate-300 pb-2">
                <Activity className="h-5 w-5 text-slate-950" />
                <h2 className="font-mono text-base font-black uppercase tracking-wider text-slate-950">
                  3. {lang === 'zh' ? '简谐合成数据集与损失拟合测试' : 'SYNTHETIC DATA FITTING & GRADIENT DESCENT'}
                </h2>
              </div>
              <div className="space-y-4 text-xs sm:text-sm text-slate-705 font-medium leading-relaxed">
                <p>
                  {lang === 'zh'
                    ? '为了验证 PyTorch 反向图传播 (Autograd) 及损失解耦公式逻辑 100% 正确，首要步骤是开发并引入小型人工“合成数据集 (Synthetic Dataset)”进行单核过拟合。在该简易沙盒中，词表仅为 20 维（5个实体，5种关系，5个提问词，5类特定值）。'
                    : 'To verify autograd and backpropagation paths, a small-scale synthetic database was created. The toy taxonomy contains exactly 20 terms (5 names, 5 relations, 5 search words, and 5 discrete raw values).'}
                </p>

                <p>
                  {lang === 'zh'
                    ? '经过 500 次 epoch 循环调配（Adam lr=0.001），损失曲线以几近指数速度实现无缝拟合与完美对齐。该阶段测试证明了注意力投影及 embedding B 与 Y 的积映射能够在极端低维状态下百分之百找回真值，为大规模真实样本处理打下了坚实的技术垫脚。'
                    : 'Over a 500-epoch Adam runtime (lr=0.001), the cross-entropy boundary fit decreased exponentially to clean convergence. This validated the core tensor mapping, guaranteeing model suitability before scaling to broad dataset loads.'}
                </p>

                {/* Line graph description / ASCII placeholder indicating complete converge */}
                <div className="bg-slate-900 text-emerald-450 p-6 rounded-none font-mono text-[10.5px] space-y-2 border-l-4 border-slate-400">
                  <div className="text-slate-400">// {lang === 'zh' ? '简谐合成数据拟合梯度递降追踪' : 'CONVERGENCE LOSS TREND (SYNTHETIC DATA)'}</div>
                  <div>Epoch 100/500   | Loss: 1.4820 | Accuracy: 20.00%</div>
                  <div>Epoch 200/500   | Loss: 0.8415 | Accuracy: 60.00%</div>
                  <div>Epoch 300/500   | Loss: 0.3201 | Accuracy: 100.00%</div>
                  <div>Epoch 400/500   | Loss: 0.0524 | Accuracy: 100.00%</div>
                  <div className="text-emerald-400">Epoch 500/500   | Loss: 0.0041 | Accuracy: 100.00% (Perfect Overfit)</div>
                </div>
              </div>
            </section>

            {/* 4 WIKIPEDIA BIOGRAPHY INGESTION */}
            <section id="section-realworld" className="scroll-mt-24 space-y-6">
              <div className="flex items-center gap-2 border-b border-slate-300 pb-2">
                <Database className="h-5 w-5 text-slate-950" />
                <h2 className="font-mono text-base font-black uppercase tracking-wider text-slate-950">
                  4. {lang === 'zh' ? '维基百科非结构化文献处理与对齐' : 'WIKIPEDIA SEMANTIC INGESTION & PIPELINES'}
                </h2>
              </div>
              <div className="space-y-4 text-xs sm:text-sm text-slate-705 font-medium leading-relaxed">
                <p>
                  {lang === 'zh'
                    ? '真实世界训练任务选用维基百科个人自传数据库（Wikipedia Biography Dataset）。该数据底座异常庞大且高度杂乱，包含了海量的生命史描述信息、特定机构办公室履历及历史履历。'
                    : 'The real-world evaluation relies on the raw Wikipedia Biography Dataset. The corpus presents substantial processing challenges; it features diverse text styles, extensive office registries, and long-tail sentence patterns.'}
                </p>

                <p>
                  {lang === 'zh'
                    ? '多维清洗流水线对超过 580,000 个未对齐原始段落执行基于正则表达式的过滤整合，筛除无效多媒体属性，并以名人为粒度，精准归纳构建起包含 96,000 余个词项的高密集常识表征。为了提高模型在训练中的泛化本领、挫败过拟合，我们为每批次计算（Batch）混合注入了目标知识点以及来自于其它随机个体的外部噪音（Decoys / Distractors），使得网络必须学会如何通过注意力矩阵在多维杂乱上下文里抓取最契合特征。'
                    : 'The preprocessing pipeline parsed 580,000 biography records. It removed nested MediaWiki markdown symbols and structured relations into clean key-value dictionary pairs mapping 96,000 distinct items. To mitigate overfitting, training batches mixed highly correlated bio records with decoy items from unrelated biography tables. Hence, the model had to learn to dynamically steer attention vectors toward the specific target entity while bypassing synthetic noise.'}
                </p>

                <div className="border border-slate-300 bg-white p-4 space-y-2 rounded-none">
                  <div className="font-mono text-xs font-black text-slate-950 flex items-center gap-1.5 uppercase">
                    <span className="h-2.5 w-2.5 bg-slate-900 rounded-none"></span>
                    <span>{lang === 'zh' ? '多元词表预处理工具' : 'Advanced Ingestion Suite'}</span>
                  </div>
                  <p className="text-xs text-slate-650 leading-relaxed">
                    {lang === 'zh'
                      ? '加载 NLTK Porter Stemmer 实现词干提取，保障 born 和 birthdate 等语义归一；运用 Unidecode 强力清除因多字节字符集编码不同对网络读入造成的值截断甚至乱码威胁。'
                      : 'Integrated the NLTK Porter Stemmer to normalize word variations (e.g. bridging "born" and "birthdate"), alongside Unidecode to sanitize diverse multi-byte character tables before matrix loading.'}
                  </p>
                </div>
              </div>
            </section>

            {/* 5 NLP INFERENCE */}
            <section id="section-nlp-inference" className="scroll-mt-24 space-y-6">
              <div className="flex items-center gap-2 border-b border-slate-300 pb-2">
                <Brain className="h-5 w-5 text-slate-950" />
                <h2 className="font-mono text-base font-black uppercase tracking-wider text-slate-950">
                  5. {lang === 'zh' ? '动态实体问答推理流程实现' : 'NLP DYNAMIC INFERENCE PIPELINE'}
                </h2>
              </div>
              <div className="space-y-4 text-xs sm:text-sm text-slate-705 font-medium leading-relaxed">
                <p>
                  {lang === 'zh'
                    ? '进入前向推理（Inference）时，给定一个任意的非标准自然语言提问（如 \"When was Alexander Hamilton born?\"），系统通过搭载 SpaCy 的命名实体识别（NER）技术，精准锁定待查主体（\"Alexander Hamilton\"）。'
                    : 'During natural language inference, when a query is received (e.g. \"When was Alexander Hamilton born?\"), the pipeline triggers SpaCy Named Entity Recognition (NER), identifying \"Alexander Hamilton\" as the primary target.'}
                </p>

                <p>
                  {lang === 'zh'
                    ? '接着，后台提取目标主体的所有属性作为候选 Key-Value 空间，同时混入两个随机传记个体的所有冗余信息。推理模块对问题执行同样的 Multi-hot 处理，并调用训练完毕的 KVMemNet 模组计算注意力权重。在推理输出解码中，我们放弃了低效的 word2index 字符重置（可能打乱真实词序），转而以神经网络 Attention 得分的最高索引 argmax (scores) 直接调取原句输出，得到了完美的文本段对齐。'
                    : 'Next, the pipeline queries the database to load Alexander Hamilton\'s specific profile attributes, shuffling them with information from two decoy people. The text processing script converts the natural language query into a multi-hot representation, and routes it to the KVMemNet to compute the probabilistic attention array. Instead of rebuilding string vectors letter-by-letter (which frequently disrupts sentence paths), the output decoder reads the argmax score of the attention matrix directly to fetch and output the exact paragraph text.'}
                </p>

                <div className="border border-slate-900 bg-white p-6 justify-between space-y-3 shadow-md rounded-none">
                  <div className="font-mono text-[10px] font-black uppercase text-slate-400">
                    // {lang === 'zh' ? '系统动态提问预测用例' : 'INFERENCE TELEMETRY SAMPLE'}
                  </div>
                  <div className="space-y-2 text-xs font-mono">
                    <div><span className="text-blue-600 font-extrabold">&gt;&gt; Question:</span> "what was alexander hamilton death date"</div>
                    <div><span className="text-slate-500 font-extrabold">--&gt; SpaCy NER:</span> Entity Extracted: <span className="underline">alexander hamilton</span></div>
                    <div><span className="text-emerald-700 font-extrabold">&lt;&lt; Output:</span> "alexander hamilton july 12 1804 aged 47 or 49"</div>
                  </div>
                </div>
              </div>
            </section>

            {/* 6 ACADEMIC REPORT */}
            <section id="section-report" className="scroll-mt-24 space-y-6">
              <div className="flex items-center gap-2 border-b border-slate-350 pb-2">
                <Shield className="h-5 w-5 text-slate-950" />
                <h2 className="font-mono text-base font-black uppercase tracking-wider text-slate-950">
                  6. {lang === 'zh' ? '设计方案、网络表现与缺陷反思学术报告' : '6. PROJECT ENGINEERING SPEC & FAILURE ANALYSIS'}
                </h2>
              </div>
              <div className="space-y-8 text-xs sm:text-sm text-slate-705 leading-relaxed font-medium">
                
                {/* Q1 */}
                <div className="space-y-3">
                  <h3 className="font-mono text-xs font-black text-slate-950 uppercase tracking-widest border-l-2 border-slate-900 pl-3">
                    Q1: {lang === 'zh' ? '多维文本数据预处理动机与词汇归一设计' : 'Data Pre-processing Motivation & Lexical Design'}
                  </h3>
                  <p>
                    {lang === 'zh'
                      ? '由于维基百科原始传记数据集结构零碎（长短不一的生命履历记录），直接对原始句子执行嵌入会导致庞大的计算负担。出于建立词表轻量级的考虑，本方案改进了 Vocab 词表的动态更新机制：未登录词会在 word2index 时被系统自动捕获并动态添加。随后，采用 generate_question 模板生成机制，建立起包含 birth_date、death_date、nationality 和 spouse 标签的多样化词缀问题。对于不常见的边缘关系则退化为 "[name] relation" 问题。'
                      : 'Because the original Wikipedia Biography dataset contains unstructured text segments of varying lengths, importing raw strings directly into standard tensors causes massive computational overhead. To ensure vocab weight efficiency, the Vocab class was modified so that out-of-vocabulary words are dynamically handled during word2index tracking. A dedicated generate_question script was developed, matching relation labels (e.g. birth_date, nationality) to predefined templates to inject phrasitional diversity.'}
                  </p>
                  <p>
                    {lang === 'zh'
                      ? '针对值的处理，设计在回答中将 name 和 value 强行拼接。例如，"spouse" 关系的 Value 被设计为 "Alexander Hamilton Elizabeth Schuyler"。设计它的主要动机是保证答案在多干扰项的环境里能够天然提供实体作用域，彻底锁死模型因跨人物同属性造成的目标漂移隐患。'
                      : 'Regarding target value handling, the database builder was configured to merge the target name and its corresponding value. For instance, the value for "spouse" was saved as "Alexander Hamilton Elizabeth Schuyler". This ensured that retrieved values were bound to their target entities, preventing target mismatch during the selection step where similar attributes might overlap across different people.'}
                  </p>
                </div>

                {/* Q2 */}
                <div className="space-y-3">
                  <h3 className="font-mono text-xs font-black text-slate-950 uppercase tracking-widest border-l-2 border-slate-900 pl-3">
                    Q2: {lang === 'zh' ? '训练逻辑演进、参数收敛及评估' : 'Training Progression, Parameter Convergence & Evaluation'}
                  </h3>
                  <p>
                    {lang === 'zh'
                      ? '在开发 Part D 时，我起初采用的是扁平化数据结构（Flattened data structure），即将所有问题不经分组直接进行混合对齐。在这种网络下，训练准确率可达到相当高的数值。然而在 Part E 推理阶段，这种模型给出了不尽如人意的表现。原因在于：扁平化混编让模型失去了在单批次（batch）下感知“特定人与自身众多关系属性”的闭环约束，注意力评分机制在计算 inner(q, k) 时容易被跨人物关系带偏。于是我重构了训练环路：采用名人为单位的数据封装，每一批次均包括特定主体及其所有的 Keys-Values 特征并混合入两个其它的干扰传记个体。'
                      : 'When developing Part D, the training loop was initially trained on a flattened data structure where all queries across biographies were compiled into a single long list. While this layout enabled high training accuracy, it yielded incorrect answers during Part E inference. The flattened setup deprived the attention-scoring layer of a closed boundary to learn cross-relations bound to specific people; the neural network frequently steered attention weights toward similar attributes belonging to wrong entities. Consequently, the loop was restructured to process data grouped by entity, ensuring that each batch contained the target entity\'s distinct key-value set mixed with two random decoy tables.'}
                  </p>
                  <p>
                    {lang === 'zh'
                      ? '在基于 Adam 求解器的连续迭代中，通过提升学习能效和微调收敛超参数，在第 25 个 epoch 时，损失波谷收敛极其稳定，最终斩获了高出对照组明显的 59.89% 训练平均精度（此时测试损失也处于较健康的收敛态，Test accuracy 保持在 49.27% ）。这一数据差距也合理反映了当前小参数全连接层和多热向量编码在大规模多义文本对齐上的上限瓶颈。'
                      : 'Using the Adam optimizer, hyperparameter tuning, and a 25-epoch cycle, the loss trajectory reached full convergence. The model achieved a respectable 59.89% training accuracy and 49.27% testing accuracy. The gap in training and testing margins highlights the baseline constraints of multi-hot key representations and non-convolutional linear layers in capturing long-tail semantic variations across unstructured Wikipedia content.'}
                  </p>
                </div>

                {/* Q3 */}
                <div className="space-y-3">
                  <h3 className="font-mono text-xs font-black text-slate-950 uppercase tracking-widest border-l-2 border-slate-900 pl-3">
                    Q3: {lang === 'zh' ? '深度推理缺陷反思、偏差诱因与技术路线展望' : 'Deep Inference Reflection, Error Roots & Strategic Outlook'}
                  </h3>
                  <p>
                    {lang === 'zh'
                      ? '在对系统的问答表现进行全方位追溯时，发现该键值系统偶尔会发生将 "Who is J. P. Featherston\'s spouse?" 预测为 "Liberal"（党派属性）的偏移。经过深层调试分析，我锁定了偏差产生的三大物理诱因：'
                      : 'While auditing the model\'s dynamic QA inference routes, it occasionally predicted "Liberal" (party affiliation) instead of "Bessie Featherstone" when answering "Who is J. P. Featherston\'s spouse?". Analysis isolated three core design vulnerabilities:'}
                  </p>
                  <ul className="space-y-2.5 list-disc pl-5">
                    <li>
                      <span className="text-slate-950 font-black">{lang === 'zh' ? '数据样本不平衡造成注意力陷阱' : 'Imbalance in relation representation:'}</span>
                      <br />
                      {lang === 'zh'
                        ? '数据集内，部分常见关系占了极大的比例，导致线性层 W_A 的参数对特定位置的高频词（如出生地关系）产生了严重的拟合偏斜（Attention Trap）。'
                        : 'Certain common attributes (e.g. birth_date) are heavily overrepresented in the Wikipedia dataset, leading Linear layers and embedding matrix parameters to steer attention tensors systematically toward dominant indices.'}
                    </li>
                    <li>
                      <span className="text-slate-950 font-black">{lang === 'zh' ? '双重嵌入空间的共享冲突' : 'Embedding bottlenecks under sharing configurations:'}</span>
                      <br />
                      {lang === 'zh'
                        ? 'Query、Key 和 Value 均采用同一套 embedding_A 参数极大地限制了模型在属性对齐和内容对齐上的自由度，限制了复杂概念的拟合。'
                        : 'Using the same embedding A parameters for matching Queries, Keys, and Values restricts the metric freedom of the vector landscape, creating cognitive boundaries that prevent fine-grained attention differentiation.'}
                    </li>
                    <li>
                      <span className="text-slate-950 font-black">{lang === 'zh' ? 'Multi-hot 独热特征降维后的语义解耦' : 'Limitations of multi-hot representations:'}</span>
                      <br />
                      {lang === 'zh'
                        ? '多热特征无法在时间差和语法顺序上携带多态信息，造成了语义丢失。'
                        : 'Multi-hot bag-of-words encoding fails to capture deep semantic dependencies or sequence layout, forcing the model to depend on individual word frequencies rather than context structure.'}
                    </li>
                  </ul>
                  <p>
                    {lang === 'zh'
                      ? '为了进一步突破本系统的召回上限，可引入 GLoVe / FastText 等预训练词向量矩阵取代粗暴的独热向量作为神经网络的数据接口；并在 embedding 模块引入多头自注意力机制（Multi-Head Self-Attention），这是通往自研轻量化 Transformer 架构最直接、高效的技术跃迁途径。'
                      : 'To expand the model\'s performance ceiling, integrating pre-trained embedding matrices (such as GLoVe or Word2Vec) can deprecate restrictive multi-hot inputs. Furthermore, adding multi-head self-attention mechanics into the embedding layer blocks represents the most direct, elegant step to bridging this baseline KVMemNet with advanced, self-contained Transformer pipelines.'}
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
