/**
 * 知图 (Atlas) 官网 — 中英文案字典
 *
 * 用法：
 *  - HTML 元素加 `data-i18n="key"` → 切换时更新 textContent
 *  - placeholder 用 `data-i18n-placeholder="key"`
 *  - HTML lang 属性会同步切换（zh-CN / en）
 *  - <title> / meta description 由本脚本同步切换
 */
export type Lang = 'zh' | 'en';

export const SUPPORTED_LANGS: Lang[] = ['zh', 'en'];
export const DEFAULT_LANG: Lang = 'zh';
export const LANG_STORAGE_KEY = 'atlas.lang';

export interface Dict {
    htmlLang: string;
    title: string;
    description: string;
    [key: string]: string;
}

export const translations: Record<Lang, Dict> = {
    zh: {
        htmlLang: 'zh-CN',
        title: '知图 · 本地知识库 + AI 问答 + Word 文档生成',
        description:
            '知图（Atlas）：一个轻量的本地知识库体系。上传文档自动入库，基于 RAG 向大模型提问获得流式回答，一句话就能生成排版好的 Word 文档。你的数据留在本地，模型由你自由配置。',

        // Hero
        'hero.title': '知图',
        'hero.subtitle': '本地知识库 · AI 问答 · 文档生成',
        'hero.desc.1': '上传文档，问库即答，一句话成文。',
        'hero.desc.2': '你的资料留在本地，大模型只负责思考。',
        'hero.cta.primary': '了解功能',
        'hero.cta.github': 'GitHub',
        'hero.window.label': '知图',
        'hero.card.knowledge.title': '知识库',
        'hero.card.knowledge.desc': 'PDF / Word / TXT / MD 拖入即入库，自动向量化',
        'hero.card.ask.title': '智能问答',
        'hero.card.ask.desc': 'RAG 检索 + 大模型流式回答，附来源标注',
        'hero.card.doc.title': '文档生成',
        'hero.card.doc.desc': '一句话描述需求，一键下载排版好的 Word',

        // About
        'about.eyebrow': '关于知图',
        'about.title': '你的文档库，配上一个大模型脑袋。',
        'about.p1':
            '知图（Atlas）是一个轻量的本地知识库工具。把 PDF、Word、TXT、Markdown 拖进来，系统自动切块、向量化，成为属于你自己的知识库。',
        'about.p2':
            '之后你可以直接向它提问，模型会先检索你的文档、再综合回答，流式输出并附上来源片段；也可以给它一句话，让它翻着知识库给你生成一份排版好的 Word 文档。',
        'about.p3':
            '你的文件只存在本地，模型用哪家、配什么 Key，都由你说了算，支持任何 OpenAI 兼容接口。',
        'about.quote.1': '“知识不该被锁在文件柜里，也不该被送进别人的服务器。”',
        'about.quote.2':
            '知图的第一个原则是资料本地化，所有文档、向量、检索都跑在你自己的机器上；第二个原则是模型自由，换来换去、随时可测。',
        'about.quote.3': '它不追求做一个庞大的平台，只做好一件事：',
        'about.quote.3.highlight': '让你的文档真正被用起来。',
        'about.caption': '—— 知图设计理念',

        // Features
        'features.eyebrow': '核心功能',
        'features.title': '三个动作，盘活你的文档。',
        'features.subtitle': '上传入库 · 向库提问 · 一键成文。模型的配置始终握在你手里。',
        'features.core.knowledge.title': '知识库',
        'features.core.knowledge.desc':
            'PDF / Word / TXT / Markdown 拖入即自动入库，语义切块 + 向量化，边存边可查。',
        'features.core.ask.title': '智能问答',
        'features.core.ask.desc':
            '基于 RAG 检索你的文档，交给任意大模型综合回答，流式输出并标注引用来源。',
        'features.core.doc.title': '文档生成',
        'features.core.doc.desc':
            '一句话描述需求，模型翻阅知识库后生成 Markdown，一键渲染成排版好的 .docx。',

        'features.feat.local.title': '资料本地化',
        'features.feat.local.desc':
            '文档、向量库、检索全部跑在本地，不上传任何服务器。你的资料，你做主。',
        'features.feat.key.title': '自备 API Key',
        'features.feat.key.desc':
            '连接你自己的 Endpoint、Key、Model，OpenAI / DeepSeek / Moonshot 等任意兼容接口。',
        'features.feat.stream.title': '流式输出',
        'features.feat.stream.desc': '问答逐字流式返回，边生成边显示，不干等一整个大段落。',
        'features.feat.cite.title': '引用来源',
        'features.feat.cite.desc':
            '每条回答都标注来自哪份文档、相似度多少，关键内容可溯源核对。',
        'features.feat.prompt.title': '提示词可定制',
        'features.feat.prompt.desc':
            '内置默认角色，也可自定义 system prompt，问答与生成共用一套规则。',
        'features.feat.run.title': '本地运行',
        'features.feat.run.desc': 'Python 一条命令启动，单机即可跑，浏览器里打开就能用。',

        // TechStack
        'tech.eyebrow': '技术架构',
        'tech.title': '轻量，但该有的都有。',
        'tech.subtitle': '依赖收敛、单机可跑，所有数据落在你本地。',
        'tech.col.layer': '层级',
        'tech.col.tech': '技术',
        'tech.row.backend': '后端',
        'tech.row.vec': '向量检索',
        'tech.row.chunk': '文本切块',
        'tech.row.llm': 'LLM 接入',
        'tech.row.doc': '文档生成',
        'tech.row.frontend': '前端',
        'tech.row.config': '配置',
        'tech.note':
            '开源协议：Apache License 2.0 ·',
        'tech.note.link': '在 GitHub 查看源码 →',

        // Footer
        'footer.brand': '知图',
        'footer.tag.1': '本地知识库 · AI 问答 · 文档生成',
        'footer.tag.2': '你的资料留在本地，模型由你配置。',

        // Lang switcher aria
        'lang.aria': '切换语言',
    },

    en: {
        htmlLang: 'en',
        title: 'Atlas · Local Knowledge Base + AI Q&A + Word Generator',
        description:
            'Atlas: a lightweight local knowledge base. Drop in your documents, ask questions via RAG with streaming answers from any LLM, and generate polished Word docs in one sentence. Your data stays local; the model is yours to pick.',

        // Hero
        'hero.title': 'Atlas',
        'hero.subtitle': 'Local KB · AI Q&A · Doc Generation',
        'hero.desc.1': 'Upload, ask, and generate — all in one sentence.',
        'hero.desc.2': 'Your files stay on your machine. The model only does the thinking.',
        'hero.cta.primary': 'See Features',
        'hero.cta.github': 'GitHub',
        'hero.window.label': 'Atlas',
        'hero.card.knowledge.title': 'Knowledge Base',
        'hero.card.knowledge.desc': 'Drop PDF / Word / TXT / MD in — vectorized automatically',
        'hero.card.ask.title': 'AI Q&A',
        'hero.card.ask.desc': 'RAG retrieval + streaming LLM answers, with citations',
        'hero.card.doc.title': 'Doc Generation',
        'hero.card.doc.desc': 'Describe what you need, download a polished Word file',

        // About
        'about.eyebrow': 'About Atlas',
        'about.title': 'Your document library, with a language-model brain on top.',
        'about.p1':
            'Atlas is a lightweight local knowledge base. Drag in your PDFs, Word files, TXT and Markdown — the system chunks and vectorizes them into a knowledge base of your own.',
        'about.p2':
            'Then ask it questions: the model retrieves relevant passages first, then answers in a stream with inline citations. Or hand it one sentence and let it draft a fully formatted Word document from your library.',
        'about.p3':
            'Your files never leave your machine. Which model to use, which API key to plug in — entirely up to you. Any OpenAI-compatible endpoint works.',
        'about.quote.1':
            '“Knowledge shouldn’t be locked in a filing cabinet, nor shipped to someone else’s server.”',
        'about.quote.2':
            'Atlas’s first principle is local-first: every document, vector, and retrieval runs on your own machine. The second principle is model freedom — swap and test anytime.',
        'about.quote.3': 'It does not aim to be a platform. It does one thing well:',
        'about.quote.3.highlight': 'putting your documents to work.',
        'about.caption': '— Atlas design philosophy',

        // Features
        'features.eyebrow': 'Core',
        'features.title': 'Three moves. Your documents, alive.',
        'features.subtitle': 'Upload · Ask · Generate. The model config always stays in your hands.',
        'features.core.knowledge.title': 'Knowledge Base',
        'features.core.knowledge.desc':
            'Drop PDF / Word / TXT / Markdown in — automatic chunking and vectorizing, searchable as it loads.',
        'features.core.ask.title': 'AI Q&A',
        'features.core.ask.desc':
            'RAG retrieves from your docs, any LLM synthesizes the answer — streamed live, with source citations.',
        'features.core.doc.title': 'Doc Generation',
        'features.core.doc.desc':
            'Describe the brief; the model flips through your KB, drafts Markdown, and renders a clean .docx.',

        'features.feat.local.title': 'Local-first',
        'features.feat.local.desc':
            'Documents, vectors, and retrieval all run locally. Nothing is uploaded to any server. Your data, your call.',
        'features.feat.key.title': 'Bring Your Own Key',
        'features.feat.key.desc':
            'Plug in your own Endpoint, Key, and Model — OpenAI, DeepSeek, Moonshot, any compatible API.',
        'features.feat.stream.title': 'Streaming Output',
        'features.feat.stream.desc':
            'Answers stream token by token, rendered as they generate. No waiting for the whole paragraph.',
        'features.feat.cite.title': 'Inline Citations',
        'features.feat.cite.desc':
            'Every answer is tagged with source document and similarity score — verify anything, anytime.',
        'features.feat.prompt.title': 'Custom Prompts',
        'features.feat.prompt.desc':
            'Sensible defaults built in; override the system prompt anytime. Shared across Q&A and generation.',
        'features.feat.run.title': 'Runs Locally',
        'features.feat.run.desc':
            'One Python command to boot. Single machine, opens right in your browser.',

        // TechStack
        'tech.eyebrow': 'Stack',
        'tech.title': 'Lightweight, but everything you need.',
        'tech.subtitle': 'Few dependencies, single-machine, all data local.',
        'tech.col.layer': 'Layer',
        'tech.col.tech': 'Technology',
        'tech.row.backend': 'Backend',
        'tech.row.vec': 'Vector Retrieval',
        'tech.row.chunk': 'Text Chunking',
        'tech.row.llm': 'LLM Access',
        'tech.row.doc': 'Doc Generation',
        'tech.row.frontend': 'Frontend',
        'tech.row.config': 'Config',
        'tech.note': 'Released under the Apache License 2.0 ·',
        'tech.note.link': 'View source on GitHub →',

        // Footer
        'footer.brand': 'Atlas',
        'footer.tag.1': 'Local KB · AI Q&A · Doc Generation',
        'footer.tag.2': 'Your data stays local. The model is yours to pick.',

        // Lang switcher aria
        'lang.aria': 'Switch language',
    },
};
