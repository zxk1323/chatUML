import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    nav: {
      examples: 'UML Examples',
      documentation: 'UML Documentation',
      settings: 'Settings',
      goToApp: 'Create UML Diagram'
    },
    hero: {
      title: 'AI-Powered UML Diagram Generator | Create Professional UML Models Instantly',
      subtitle: 'Transform your ideas into professional UML diagrams in seconds with our AI tool. Generate class diagrams, sequence diagrams, use case diagrams and more through simple conversation - no complex software needed.',
      tryNow: 'Create UML Diagram Now',
      learnMore: 'Explore UML Features'
    },
    features: {
      title: 'ChatUML Features',
      aiPowered: {
        title: 'AI-Powered UML Generation',
        description: 'Our advanced AI technology understands your requirements and generates accurate UML diagrams with perfect PlantUML syntax'
      },
      realTime: {
        title: 'Instant UML Visualization',
        description: 'See your UML diagrams come to life in real-time as you describe them, with instant preview and code generation'
      },
      export: {
        title: 'Multiple UML Export Options',
        description: 'Export your UML diagrams in various formats including PNG, SVG, and PDF for easy sharing and documentation'
      }
    },
    settings: {
      title: 'Settings',
      apiSettings: 'API Settings',
      provider: 'AI Provider',
      providerHelp: 'Select the AI provider for generating diagrams',
      openai: 'OpenAI',
      claude: 'Claude',
      deepseek: 'DeepSeek',
      apiKey: 'API Key',
      apiKeyPlaceholder: 'Enter your OpenAI API key',
      claudeApiKeyPlaceholder: 'Enter your Anthropic API key',
      deepseekApiKeyPlaceholder: 'Enter your DeepSeek API key',
      apiKeyOpenAI: 'Enter your OpenAI API key',
      apiKeyClaude: 'Enter your Anthropic API key',
      apiKeyDeepSeek: 'Enter your DeepSeek API key',
      apiKeyHelp: 'Your API key will be stored locally and never sent to our servers',
      freeApiAvailable: 'Free API Available',
      freeApiHint: 'You can leave this field empty to use our free public API service',
      freeApiModelLimit: 'Free API only supports GPT-3.5-turbo model with limited requests per minute',
      model: 'AI Model',
      modelHelp: 'Select the AI model to use for generating diagrams',
      temperature: 'Temperature',
      temperatureHelp: 'Higher values make the output more random, lower values make it more focused',
      save: 'Save Settings',
      apiKeyRequired: 'API key is required',
      saveSuccess: 'Settings saved successfully'
    },
    chatuml: {
      welcome: 'Hello! I\'m your ChatUML assistant, the AI-powered UML diagram generator. I can help you create professional UML diagrams including class diagrams, sequence diagrams, use case diagrams, activity diagrams, and more. What type of UML diagram would you like to create today?',
      inputPlaceholder: 'Describe the diagram you want to create...',
      send: 'Send',
      clearChat: 'Clear Chat',
      confirmClear: 'Are you sure you want to clear the chat history?',
      plantUMLPreview: 'PlantUML Code',
      umlPreview: 'UML Preview',
      preview: 'Diagram Preview',
      freeApiTitle: 'Using Free Public API',
      freeApiDescription: 'You are using our free public API service. This supports GPT-4o-mini and GPT-3.5 models, limited to 96 requests per minute. For better performance, set your own API key in Settings.',
      noCodeYet: 'No PlantUML code generated yet. Start a conversation to generate a diagram.',
      noDiagramYet: 'Diagram preview will appear here once code is generated.'
    },
    footer: {
      product: 'Product',
      features: 'Features',
      pricing: 'Pricing',
      examples: 'Examples',
      resources: 'Resources',
      documentation: 'Documentation',
      support: 'Support',
      company: 'Company',
      about: 'About',
      contact: 'Contact',
      privacy: 'Privacy',
      rights: 'All rights reserved.'
    },
    documentation: {
      title: 'Documentation',
      needMoreHelp: 'Need more help?',
      contactUs: 'Contact us',
      
      sections: {
        gettingStarted: 'Getting Started',
        modelSelection: 'Model Selection',
        diagramTypes: 'Diagram Types',
        tipsTricks: 'Tips & Tricks',
        faq: 'FAQ'
      },
      
      // Getting Started Section
      welcome: 'Welcome to ChatUML',
      welcomeDesc: 'ChatUML is an AI-powered tool that helps you create UML diagrams through simple conversation. This guide will help you get started and make the most of our platform.',
      
      step1Title: 'Open the Chat Interface',
      step1Desc: 'Start by navigating to the ChatUML application. You\'ll see a clean interface with a chat panel on the left and preview areas on the right.',
      
      step2Title: 'Describe Your Diagram',
      step2Desc: 'Simply describe the diagram you want to create in natural language. Be as specific as possible about the type of diagram and what elements it should contain.',
      
      step3Title: 'Review and Refine',
      step3Desc: 'The AI will generate a PlantUML code and diagram preview. You can continue the conversation to refine the diagram until it meets your needs.',
      
      // Model Selection Section
      modelSelectionTitle: 'Choosing the Right AI Model',
      modelSelectionDesc: 'ChatUML supports multiple AI providers and models. Selecting the right model for your needs can improve the quality of your diagrams.',
      
      freeApiInfo: 'If you don\'t have your own API key, ChatUML automatically uses a free public API service with GPT-3.5-turbo and GPT-4o-mini models.',
      
      changeModelTitle: 'How to Change Models',
      changeModelStep1: 'Click on the Settings button in the top navigation bar.',
      changeModelStep2: 'In the API Settings section, select your preferred AI Provider.',
      changeModelStep3: 'Enter your API key for the selected provider. If you select OpenAI and leave the key empty, the free public API will be used.',
      changeModelStep4: 'Choose a model from the dropdown list and adjust the temperature setting if needed. Then click Save Settings.',
      
      modelComparisonTitle: 'Model Comparison',
      
      model35Feature1: 'Good for basic UML diagrams',
      model35Feature2: 'Fast response time',
      model35Feature3: 'Understands common diagram patterns',
      model35Recommendation: 'Recommended for beginners and simple diagrams',
      
      model4oMiniFeature1: 'Better understanding of complex requirements',
      model4oMiniFeature2: 'More accurate PlantUML syntax',
      model4oMiniFeature3: 'Improved interpretation of natural language',
      model4oMiniRecommendation: 'Great free option for more complex diagrams',
      
      claudeFeature1: 'Superior understanding of complex systems',
      claudeFeature2: 'Excellent code quality and syntax',
      claudeFeature3: 'Better handling of detailed specifications',
      claudeRecommendation: 'Best for professional and complex diagrams',
      
      // Diagram Types Section
      diagramTypesTitle: 'Supported Diagram Types',
      diagramTypesDesc: 'ChatUML can generate various types of UML diagrams. Here are some examples of diagrams you can create and prompts to use.',
      
      classTitle: 'Class Diagrams',
      classDesc: 'Visualize the structure of a system by showing classes, attributes, operations, and relationships.',
      classPrompt: 'Create a class diagram for a library management system with Book, Author, and User classes.',
      
      sequenceTitle: 'Sequence Diagrams',
      sequenceDesc: 'Show how objects interact with each other and the order of those interactions.',
      sequencePrompt: 'Create a sequence diagram for a user login process with authentication service.',
      
      useCaseTitle: 'Use Case Diagrams',
      useCaseDesc: 'Represent the functionality of a system and actors who interact with it.',
      useCasePrompt: 'Create a use case diagram for an e-commerce website with customer and admin actors.',
      
      mindMapTitle: 'Mind Maps',
      mindMapDesc: 'Organize ideas and concepts hierarchically around a central topic or theme.',
      mindMapPrompt: 'Create a mind map for a project management system with key components and features.',
      
      // Tips & Tricks Section
      tipsTitle: 'Tips for Better Results',
      tipsDesc: 'Here are some tips to help you get the best results when using ChatUML.',
      
      tipDetail1Title: 'Be Specific in Your Descriptions',
      tipDetail1: 'The more specific your description, the better the results. Include details about entities, relationships, and behaviors you want to represent.',
      
      tipDetail2Title: 'Iterative Refinement',
      tipDetail2: 'Don\'t expect perfect diagrams on the first try. Use follow-up messages to refine and improve the diagram based on the initial results.',
      
      tipDetail3Title: 'Use Diagram-Specific Language',
      tipDetail3: 'Mention the type of diagram you want (class, sequence, etc.) and use terminology relevant to that diagram type.',
      
      tipDetail4Title: 'Review the Generated Code',
      tipDetail4: 'Examine the PlantUML code to understand how the diagram is structured. This can help you make more precise refinement requests.',
      
      // FAQ Section
      faqTitle: 'Frequently Asked Questions',
      
      faq1Q: 'Do I need my own API key to use ChatUML?',
      faq1A: 'No, ChatUML provides a free public API service that you can use without your own API key. However, for higher usage limits and better performance, you can configure your own API keys from OpenAI, Claude, or DeepSeek.',
      
      faq2Q: 'Which diagram type is best for showing system structure?',
      faq2A: 'Class diagrams are ideal for representing system structure, showing classes, attributes, methods, and their relationships. For larger systems, component or package diagrams might be more appropriate.',
      
      faq3Q: 'Can I export or download my diagrams?',
      faq3A: 'Yes, you can right-click on the diagram preview and save the image to your device. We\'re also working on adding more export options in the future.',
      
      faq4Q: 'What if the AI doesn\'t understand my request?',
      faq4A: 'Try rephrasing your request with more specific details. You can also break down complex diagrams into smaller parts and build them up incrementally through conversation.',
      
      faq5Q: 'Why does the diagram look different from what I described?',
      faq5A: 'The AI interprets your natural language description and tries to create a suitable diagram. If the result doesn\'t match your expectations, provide more specific guidance in your follow-up messages about what needs to be changed.'
    }
  },
  zh: {
    nav: {
      examples: 'UML示例',
      documentation: 'UML文档',
      settings: '设置',
      goToApp: '创建UML图表'
    },
    hero: {
      title: 'AI驱动的UML图表生成工具 | 即时创建专业UML模型',
      subtitle: '通过我们的AI工具，在几秒钟内将您的想法转化为专业UML图表。通过简单对话生成类图、序列图、用例图等 - 无需复杂软件。',
      tryNow: '立即创建UML图表',
      learnMore: '探索UML功能'
    },
    features: {
      title: 'ChatUML功能特点',
      aiPowered: {
        title: 'AI驱动的UML生成',
        description: '我们的先进AI技术理解您的需求，生成准确的UML图表，具有完美的PlantUML语法'
      },
      realTime: {
        title: 'UML即时可视化',
        description: '当您描述图表时，实时查看UML图表生成，提供即时预览和代码生成'
      },
      export: {
        title: '多种UML导出选项',
        description: '以多种格式导出您的UML图表，包括PNG、SVG和PDF，便于分享和文档记录'
      }
    },
    settings: {
      title: '设置',
      apiSettings: 'API 设置',
      provider: 'AI 提供商',
      providerHelp: '选择用于生成图表的 AI 提供商',
      openai: 'OpenAI',
      claude: 'Claude',
      deepseek: 'DeepSeek',
      apiKey: 'API 密钥',
      apiKeyPlaceholder: '输入您的 OpenAI API 密钥',
      claudeApiKeyPlaceholder: '输入您的 Anthropic API 密钥',
      deepseekApiKeyPlaceholder: '输入您的 DeepSeek API 密钥',
      apiKeyOpenAI: '输入您的 OpenAI API 密钥',
      apiKeyClaude: '输入您的 Anthropic API 密钥',
      apiKeyDeepSeek: '输入您的 DeepSeek API 密钥',
      apiKeyHelp: '您的 API 密钥将存储在本地，永远不会发送到我们的服务器',
      freeApiAvailable: '免费 API 可用',
      freeApiHint: '您可以留空此字段以使用我们的免费公益 API 服务',
      freeApiModelLimit: '免费 API 仅支持 GPT-3.5-turbo 模型，且每分钟请求次数有限',
      model: 'AI 模型',
      modelHelp: '选择用于生成图表的 AI 模型',
      temperature: '温度',
      temperatureHelp: '较高的值使输出更随机，较低的值使其更专注',
      save: '保存设置',
      apiKeyRequired: '请输入 API 密钥',
      saveSuccess: '设置保存成功'
    },
    chatuml: {
      welcome: '你好！我是你的ChatUML助手，这是一个AI驱动的UML图表生成工具。我可以帮你创建专业的UML图表，包括类图、序列图、用例图、活动图等。今天你想创建哪种UML图表？',
      inputPlaceholder: '描述你想创建的图表...',
      send: '发送',
      clearChat: '清空对话',
      confirmClear: '确定要清空对话历史吗？',
      plantUMLPreview: 'PlantUML 代码',
      umlPreview: 'UML 预览',
      preview: '图表预览',
      freeApiTitle: '正在使用免费公益 API',
      freeApiDescription: '您正在使用我们的免费公益 API 服务，支持 GPT-4o-mini 和 GPT-3.5 系列模型，每分钟限制 96 次请求。如需更好的性能，请在设置中配置您自己的 API 密钥。',
      noCodeYet: '暂无 PlantUML 代码生成。开始对话来创建图表。',
      noDiagramYet: '一旦生成代码，图表预览将在此处显示。'
    },
    footer: {
      product: '产品',
      features: '功能',
      pricing: '定价',
      examples: '示例',
      resources: '资源',
      documentation: '文档',
      support: '支持',
      company: '公司',
      about: '关于',
      contact: '联系我们',
      privacy: '隐私政策',
      rights: '保留所有权利。'
    },
    documentation: {
      title: '使用文档',
      needMoreHelp: '需要更多帮助？',
      contactUs: '联系我们',
      
      sections: {
        gettingStarted: '快速入门',
        modelSelection: '模型选择',
        diagramTypes: '图表类型',
        tipsTricks: '技巧和窍门',
        faq: '常见问题'
      },
      
      // Getting Started Section
      welcome: '欢迎使用 ChatUML',
      welcomeDesc: 'ChatUML 是一个由 AI 驱动的工具，可以通过简单的对话帮助您创建 UML 图表。本指南将帮助您开始使用并充分利用我们的平台。',
      
      step1Title: '打开聊天界面',
      step1Desc: '首先导航到 ChatUML 应用程序。您将看到一个整洁的界面，左侧是聊天面板，右侧是预览区域。',
      
      step2Title: '描述您的图表',
      step2Desc: '只需用自然语言描述您想要创建的图表。尽可能具体地说明图表的类型和应包含的元素。',
      
      step3Title: '查看和完善',
      step3Desc: 'AI 将生成 PlantUML 代码和图表预览。您可以继续对话来完善图表，直到满足您的需求。',
      
      // Model Selection Section
      modelSelectionTitle: '选择合适的 AI 模型',
      modelSelectionDesc: 'ChatUML 支持多种 AI 提供商和模型。选择适合您需求的模型可以提高图表的质量。',
      
      freeApiInfo: '如果您没有自己的 API 密钥，ChatUML 将自动使用免费公益 API 服务，支持 GPT-3.5-turbo 和 GPT-4o-mini 模型。',
      
      changeModelTitle: '如何更换模型',
      changeModelStep1: '点击顶部导航栏中的设置按钮。',
      changeModelStep2: '在 API 设置部分，选择您偏好的 AI 提供商。',
      changeModelStep3: '输入所选提供商的 API 密钥。如果您选择 OpenAI 并留空密钥，将使用免费公益 API。',
      changeModelStep4: '从下拉列表中选择模型，并根据需要调整温度设置。然后点击保存设置。',
      
      modelComparisonTitle: '模型对比',
      
      model35Feature1: '适合基础 UML 图表',
      model35Feature2: '响应速度快',
      model35Feature3: '理解常见图表模式',
      model35Recommendation: '推荐给初学者和简单图表使用',
      
      model4oMiniFeature1: '更好地理解复杂需求',
      model4oMiniFeature2: '更准确的 PlantUML 语法',
      model4oMiniFeature3: '改进了对自然语言的理解',
      model4oMiniRecommendation: '复杂图表的绝佳免费选择',
      
      claudeFeature1: '对复杂系统有卓越的理解',
      claudeFeature2: '优秀的代码质量和语法',
      claudeFeature3: '更好地处理详细规格',
      claudeRecommendation: '最适合专业和复杂图表',
      
      // Diagram Types Section
      diagramTypesTitle: '支持的图表类型',
      diagramTypesDesc: 'ChatUML 可以生成各种类型的 UML 图表。以下是您可以创建的一些图表示例和使用提示。',
      
      classTitle: '类图',
      classDesc: '通过显示类、属性、操作和关系来可视化系统的结构。',
      classPrompt: '为图书馆管理系统创建一个包含图书、作者和用户类的类图。',
      
      sequenceTitle: '序列图',
      sequenceDesc: '展示对象之间如何交互以及这些交互的顺序。',
      sequencePrompt: '为带有身份验证服务的用户登录流程创建序列图。',
      
      useCaseTitle: '用例图',
      useCaseDesc: '表示系统的功能和与之交互的参与者。',
      useCasePrompt: '为电子商务网站创建一个包含客户和管理员角色的用例图。',
      
      mindMapTitle: '思维导图',
      mindMapDesc: '围绕中心主题或概念层次化地组织想法和概念。',
      mindMapPrompt: '为项目管理系统创建一个包含关键组件和功能的思维导图。',
      
      // Tips & Tricks Section
      tipsTitle: '获得更好结果的技巧',
      tipsDesc: '以下是一些帮助您在使用 ChatUML 时获得最佳结果的技巧。',
      
      tipDetail1Title: '描述要具体',
      tipDetail1: '描述越具体，结果就越好。包括您想要表示的实体、关系和行为的详细信息。',
      
      tipDetail2Title: '迭代完善',
      tipDetail2: '不要期望第一次尝试就能得到完美的图表。使用后续消息根据初始结果来完善和改进图表。',
      
      tipDetail3Title: '使用特定于图表的语言',
      tipDetail3: '提及您想要的图表类型（类图、序列图等）并使用与该图表类型相关的术语。',
      
      tipDetail4Title: '查看生成的代码',
      tipDetail4: '检查 PlantUML 代码以了解图表的结构。这可以帮助您提出更精确的完善请求。',
      
      // FAQ Section
      faqTitle: '常见问题',
      
      faq1Q: '我需要自己的 API 密钥才能使用 ChatUML 吗？',
      faq1A: '不需要，ChatUML 提供免费公益 API 服务，您无需自己的 API 密钥即可使用。但是，为了获得更高的使用限制和更好的性能，您可以配置自己的 OpenAI、Claude 或 DeepSeek API 密钥。',
      
      faq2Q: '哪种图表类型最适合显示系统结构？',
      faq2A: '类图非常适合表示系统结构，显示类、属性、方法及其关系。对于更大型的系统，组件图或包图可能更合适。',
      
      faq3Q: '我可以导出或下载我的图表吗？',
      faq3A: '是的，您可以右键点击图表预览并将图像保存到您的设备。我们也在努力在未来添加更多导出选项。',
      
      faq4Q: '如果 AI 不理解我的请求怎么办？',
      faq4A: '尝试使用更具体的细节重新表述您的请求。您还可以将复杂图表分解为较小的部分，并通过对话逐步构建它们。',
      
      faq5Q: '为什么图表看起来与我描述的不同？',
      faq5A: 'AI 会解释您的自然语言描述并尝试创建合适的图表。如果结果与您的期望不符，请在后续消息中提供更具体的指导，说明需要更改的内容。'
    }
  }
}

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages
})

export default i18n 