"use client";

import { useState } from "react";

export default function Curriculum() {
  const rawData = [
    {
      heading: "Understanding Generative AI",
      Lessons: "What is Generative AI?",
    },
    {
      heading: "Understanding Generative AI",
      Lessons: "The Need for Generative Models",
    },
    {
      heading: "Understanding Generative AI",
      Lessons: "An Overview of Generative Models and Their Importance",
    },
    {
      heading: "Understanding Generative AI",
      Lessons: "Generative AI vs. Discriminative Models",
    },
    {
      heading: "Understanding Generative AI",
      Lessons: "Recent Advances and Research in Generative AI",
    },
    {
      heading: "Understanding Generative AI",
      Lessons: "End-to-End Project Lifecycle of Generative AI",
    },
    {
      heading: "Understanding Generative AI",
      Lessons: "Key Applications of Generative Models",
    },

    {
      heading: "Text Processing and Encoding Techniques",
      Lessons: "Segmentation and Tokenization",
    },
    {
      heading: "Text Processing and Encoding Techniques",
      Lessons: "Changing Case and Spell Correction",
    },
    {
      heading: "Text Processing and Encoding Techniques",
      Lessons: "Removing Stop Words, Punctuation, and Whitespace",
    },
    {
      heading: "Text Processing and Encoding Techniques",
      Lessons: "Stemming and Lemmatization",
    },
    {
      heading: "Text Processing and Encoding Techniques",
      Lessons: "Parts of Speech (POS) Tagging",
    },
    {
      heading: "Text Processing and Encoding Techniques",
      Lessons: "Text Normalization",
    },
    {
      heading: "Text Processing and Encoding Techniques",
      Lessons: "Text Rephrasing",
    },
    {
      heading: "Text Processing and Encoding Techniques",
      Lessons: "One-Hot Encoding and Index-Based Encoding",
    },
    {
      heading: "Text Processing and Encoding Techniques",
      Lessons: "Bag of Words Model",
    },
    {
      heading: "Text Processing and Encoding Techniques",
      Lessons: "Term Frequency-Inverse Document Frequency (TF-IDF)",
    },
    {
      heading: "Text Processing and Encoding Techniques",
      Lessons: "Word2Vec Representation",
    },
    {
      heading: "Text Processing and Encoding Techniques",
      Lessons: "FastText Embeddings",
    },
    {
      heading: "Text Processing and Encoding Techniques",
      Lessons: "N-Grams Analysis",
    },
    {
      heading: "Text Processing and Encoding Techniques",
      Lessons: "ELMo (Embeddings from Language Models)",
    },
    {
      heading: "Text Processing and Encoding Techniques",
      Lessons: "BERT-Based Encoding",
    },

    {
      heading: "Advanced Topics in Transformers and LLMs",
      Lessons:
        "In-Depth Understanding of Transformer Architecture: The Attention Mechanism Explained",
    },
    {
      heading: "Advanced Topics in Transformers and LLMs",
      Lessons: "Comprehensive Guide to Transformer Variants",
    },
    {
      heading: "Advanced Topics in Transformers and LLMs",
      Lessons: "Choosing the Right Transformer Architecture: When to Use Which",
    },
    {
      heading: "Advanced Topics in Transformers and LLMs",
      Lessons: "Applications and Use Cases of Large Language Models (LLMs)",
    },
    {
      heading: "Advanced Topics in Transformers and LLMs",
      Lessons: "Transfer Learning in Natural Language Processing (NLP)",
    },
    {
      heading: "Advanced Topics in Transformers and LLMs",
      Lessons: "Utilizing Pretrained Transformer Models",
    },
    {
      heading: "Advanced Topics in Transformers and LLMs",
      Lessons: "Fine-Tuning Pretrained Transformer Models",
    },
    {
      heading: "Advanced Topics in Transformers and LLMs",
      Lessons: "Masked Language Modeling Techniques",
    },
    {
      heading: "Advanced Topics in Transformers and LLMs",
      Lessons: "BERT: Insights from Google",
    },
    {
      heading: "Advanced Topics in Transformers and LLMs",
      Lessons: "GPT: Innovations by OpenAI",
    },
    {
      heading: "Advanced Topics in Transformers and LLMs",
      Lessons: "T5: A Comprehensive Overview from Google",
    },
    {
      heading: "Advanced Topics in Transformers and LLMs",
      Lessons: "Megatron: NVIDIA's Approach to Transformers",
    },
    {
      heading: "Advanced Topics in Transformers and LLMs",
      Lessons: "Evaluation Metrics for LLMs",
    },
    {
      heading: "Advanced Topics in Transformers and LLMs",
      Lessons: "Use Cases for GPT-3 and GPT-3.5 Turbo",
    },
    {
      heading: "Advanced Topics in Transformers and LLMs",
      Lessons: "Understanding the Training Process of ChatGPT",
    },
    {
      heading: "Advanced Topics in Transformers and LLMs",
      Lessons: "Introduction to ChatGPT-4",
    },

    {
      heading: "Understanding Hugging Face and Its Applications",
      Lessons: "The Importance of Hugging Face in NLP",
    },
    {
      heading: "Understanding Hugging Face and Its Applications",
      Lessons: "Introduction to Hugging Face Transformers",
    },
    {
      heading: "Understanding Hugging Face and Its Applications",
      Lessons: "Generating an API Key for Hugging Face",
    },
    {
      heading: "Understanding Hugging Face and Its Applications",
      Lessons:
        "Transfer Learning Models in Hugging Face Based on State-of-the-Art Transformer Architectures",
    },
    {
      heading: "Understanding Hugging Face and Its Applications",
      Lessons: "Fine-Tuning Pretrained Models with Hugging Face",
    },
    {
      heading: "Understanding Hugging Face and Its Applications",
      Lessons: "Accessing Ready-to-Use Datasets and Evaluation Metrics for NLP",
    },
    {
      heading: "Understanding Hugging Face and Its Applications",
      Lessons:
        "Data Processing, Tokenization, and Feature Extraction with Hugging Face",
    },
    {
      heading: "Understanding Hugging Face and Its Applications",
      Lessons: "Standardizing the Workflow with Pipelines",
    },
    {
      heading: "Understanding Hugging Face and Its Applications",
      Lessons: "Training and Implementing Callbacks",
    },
    {
      heading: "Understanding Hugging Face and Its Applications",
      Lessons: "Language Translation Using Hugging Face Transformers",
    },

    {
      heading: "Generative AI with LLMs and LLM Powered Applications",
      Lessons: "Project: Multimodal Sentiment Analysis",
    },
    {
      heading: "Generative AI with LLMs and LLM Powered Applications",
      Lessons: "Project: Personalized News Aggregator",
    },
    {
      heading: "Generative AI with LLMs and LLM Powered Applications",
      Lessons: "Project: Code Generation Tool",
    },
    {
      heading: "Generative AI with LLMs and LLM Powered Applications",
      Lessons: "Project: Automated Essay Scoring",
    },

    {
      heading: "Guide to Open AI and it's Ready to use Models with Application",
      Lessons: "Introduction to OpenAI",
    },
    {
      heading: "Guide to Open AI and it's Ready to use Models with Application",
      Lessons: "Understanding the OpenAI API: Generating Your API Key",
    },
    {
      heading: "Guide to Open AI and it's Ready to use Models with Application",
      Lessons: "Installing the OpenAI Package",
    },
    {
      heading: "Guide to Open AI and it's Ready to use Models with Application",
      Lessons: "Experimenting in the OpenAI Playground",
    },
    {
      heading: "Guide to Open AI and it's Ready to use Models with Application",
      Lessons: "Setting Up Your Local Development Environment",
    },
    {
      heading: "Guide to Open AI and it's Ready to use Models with Application",
      Lessons: "Utilizing Different Prompting Templates",
    },
    {
      heading: "Guide to Open AI and it's Ready to use Models with Application",
      Lessons:
        "Exploring OpenAI Models: Practical Implementation of GPT-3.5 Turbo, DALL-E 2, Whisper, CLIP, Davinci, and GPT-4",
    },
    {
      heading: "Guide to Open AI and it's Ready to use Models with Application",
      Lessons:
        "Working with OpenAI Embeddings and Moderation: Practical Implementation",
    },
    {
      heading: "Guide to Open AI and it's Ready to use Models with Application",
      Lessons:
        "Implementing the Chat Completion API, Functional Calling, and Completion API",
    },
    {
      heading: "Guide to Open AI and it's Ready to use Models with Application",
      Lessons: "Managing Tokens Efficiently",
    },
    {
      heading: "Guide to Open AI and it's Ready to use Models with Application",
      Lessons: "Strategies for Optimizing Results",
    },
    {
      heading: "Guide to Open AI and it's Ready to use Models with Application",
      Lessons: "Image Generation Using OpenAI LLM Models",
    },
    {
      heading: "Guide to Open AI and it's Ready to use Models with Application",
      Lessons: "Converting Speech to Text with OpenAI",
    },
    {
      heading: "Guide to Open AI and it's Ready to use Models with Application",
      Lessons:
        "Utilizing Moderation to Ensure Content Compliance with OpenAI Guidelines",
    },
    {
      heading: "Guide to Open AI and it's Ready to use Models with Application",
      Lessons: "Understanding Rate Limits and Error Codes in the OpenAI API",
    },
    {
      heading: "Guide to Open AI and it's Ready to use Models with Application",
      Lessons:
        "Integrating OpenAI Plugins to Connect ChatGPT with Third-Party Applications",
    },
    {
      heading: "Guide to Open AI and it's Ready to use Models with Application",
      Lessons: "Fine-Tuning OpenAI Models with Custom Data",
    },

    {
      heading: "Open Ai Projects",
      Lessons:
        "Project 1: Building a Personalized Recommendation System Using GPT-4",
    },
    {
      heading: "Open Ai Projects",
      Lessons:
        "Create a system that recommends products, movies, or books based on user preferences and interactions.",
    },
    {
      heading: "Open Ai Projects",
      Lessons: "Project 2: Developing an Interactive Storytelling Application",
    },
    {
      heading: "Open Ai Projects",
      Lessons:
        "Use GPT-4 to generate interactive stories where users can influence the plot through their choices.",
    },
    {
      heading: "Open Ai Projects",
      Lessons: "Project 3: Automated Email Response Generator",
    },
    {
      heading: "Open Ai Projects",
      Lessons:
        "Implement a tool that uses OpenAI to draft responses to emails based on the content and context of the received messages.",
    },
    {
      heading: "Open Ai Projects",
      Lessons: "Project 4: Text Summarization Tool for Academic Papers",
    },
    {
      heading: "Open Ai Projects",
      Lessons:
        "Build an application that summarizes lengthy academic papers into concise abstracts using OpenAI models.",
    },
    {
      heading: "Open Ai Projects",
      Lessons: "Introduction to prompt engineering",
    },
    {
      heading: "Open Ai Projects",
      Lessons: "Different templates for prompting",
    },
    {
      heading: "Open Ai Projects",
      Lessons: "Prompt Engineering: What & Why?",
    },

    {
      heading: "Prompt Engineering and ChatGPT Custom Instructions",
      Lessons:
        "Prompt Engineering Fundamentals and Custom Instructions for ChatGPT",
    },
    {
      heading: "Prompt Engineering and ChatGPT Custom Instructions",
      Lessons: "Key Elements of an Effective Prompt",
    },
    {
      heading: "Prompt Engineering and ChatGPT Custom Instructions",
      Lessons: "Identifying the Appropriate Context to Include",
    },
    {
      heading: "Prompt Engineering and ChatGPT Custom Instructions",
      Lessons: "Zero-, One-, and Few-Shot Prompting Techniques",
    },
    {
      heading: "Prompt Engineering and ChatGPT Custom Instructions",
      Lessons: "Utilizing Output Templates for Structured Responses",
    },
    {
      heading: "Prompt Engineering and ChatGPT Custom Instructions",
      Lessons:
        "Incorporating Cues and Hints for Improved Interaction with ChatGPT",
    },
    {
      heading: "Prompt Engineering and ChatGPT Custom Instructions",
      Lessons: "Distinguishing Instructions from Content in Prompts",
    },
    {
      heading: "Prompt Engineering and ChatGPT Custom Instructions",
      Lessons: "Ask-Before-Answer Prompting Approach",
    },
    {
      heading: "Prompt Engineering and ChatGPT Custom Instructions",
      Lessons: "Perspective-Based Prompting Techniques",
    },
    {
      heading: "Prompt Engineering and ChatGPT Custom Instructions",
      Lessons: "Contextual Prompting for Enhanced Relevance",
    },
    {
      heading: "Prompt Engineering and ChatGPT Custom Instructions",
      Lessons: "Emotional Prompting to Influence Tone and Sentiment",
    },
    {
      heading: "Prompt Engineering and ChatGPT Custom Instructions",
      Lessons: "Laddering Prompting for In-Depth Responses",
    },
    {
      heading: "Prompt Engineering and ChatGPT Custom Instructions",
      Lessons: "Leveraging ChatGPT for Effective Prompting",
    },
    {
      heading: "Prompt Engineering and ChatGPT Custom Instructions",
      Lessons: "Identifying Missing Information with ChatGPT",
    },
    {
      heading: "Prompt Engineering and ChatGPT Custom Instructions",
      Lessons: "Self-Evaluative Prompting for Better Output Quality",
    },
    {
      heading: "Prompt Engineering and ChatGPT Custom Instructions",
      Lessons: "Problem-Splitting with ChatGPT Assistance",
    },
    {
      heading: "Prompt Engineering and ChatGPT Custom Instructions",
      Lessons: "Role Reversal Techniques in Prompting",
    },
    {
      heading: "Prompt Engineering and ChatGPT Custom Instructions",
      Lessons: "Exploring Additional Prompts and Finding Inspiration",
    },
    {
      heading: "Prompt Engineering and ChatGPT Custom Instructions",
      Lessons: "Creating Super Prompts: Techniques Like CAN and DAN",
    },
    {
      heading: "Prompt Engineering and ChatGPT Custom Instructions",
      Lessons: "Introduction to Vector Databases",
    },
    {
      heading: "Prompt Engineering and ChatGPT Custom Instructions",
      Lessons: "Foundational Concepts of Vector Databases",
    },
    {
      heading: "Prompt Engineering and ChatGPT Custom Instructions",
      Lessons: "Use Cases for Vector Databases in Real-World Applications",
    },

    {
      heading: "Vector Databases and LangChain Overview",
      Lessons: "Vector Similarity Search Techniques",
    },
    {
      heading: "Vector Databases and LangChain Overview",
      Lessons: "Using SQLite Database for Vector Data Management",
    },
    {
      heading: "Vector Databases and LangChain Overview",
      Lessons: "Storing and Retrieving Vector Data in SQLite",
    },
    {
      heading: "Vector Databases and LangChain Overview",
      Lessons:
        "Setting Up Chromadb Local Vector Database: Part 1 (Installation and Data Insertion)",
    },
    {
      heading: "Vector Databases and LangChain Overview",
      Lessons: "Querying Vector Data Effectively",
    },
    {
      heading: "Vector Databases and LangChain Overview",
      Lessons: "Fetching Data by Vector ID",
    },
    {
      heading: "Vector Databases and LangChain Overview",
      Lessons:
        "Database Operations: Create, Update, Retrieve, Delete, Insert, and Modify",
    },
    {
      heading: "Vector Databases and LangChain Overview",
      Lessons: "Applications of Vector Databases in Semantic Search",
    },
    {
      heading: "Vector Databases and LangChain Overview",
      Lessons: "Developing an AI Chat Agent with LangChain and OpenAI",
    },
    {
      heading: "Vector Databases and LangChain Overview",
      Lessons: "Exploring Weaviate Vector Database",
    },
    {
      heading: "Vector Databases and LangChain Overview",
      Lessons: "Utilizing Pinecone Vector Database",
    },
    {
      heading: "Vector Databases and LangChain Overview",
      Lessons: "Introduction to LangChain",
    },
    {
      heading: "Vector Databases and LangChain Overview",
      Lessons: "Understanding How LangChain Works",
    },
    {
      heading: "Vector Databases and LangChain Overview",
      Lessons: "Installing and Setting Up LangChain in Your Local Environment",
    },

    {
      heading: "LangChain Applications and Implementations",
      Lessons: "Hello World in LangChain: Chaining a Simple Prompt",
    },
    {
      heading: "LangChain Applications and Implementations",
      Lessons:
        "Key Components of LangChain: Schema, Model I\/O, Prompts, Indexes, Memory, Chains, Agents, and Callbacks",
    },
    {
      heading: "LangChain Applications and Implementations",
      Lessons: "Understanding Prompts, Language Models, and Output Parsers",
    },
    {
      heading: "LangChain Applications and Implementations",
      Lessons:
        "Concepts of Asynchronous APIs, Fake LLM Human Input, and LLM Caching",
    },
    {
      heading: "LangChain Applications and Implementations",
      Lessons:
        "Implementing Chat Models with Human Input, Chains, Prompts, and Streaming",
    },
    {
      heading: "LangChain Applications and Implementations",
      Lessons: "Output Parser Implementation: JSON, XML, and List Parsers",
    },
    {
      heading: "LangChain Applications and Implementations",
      Lessons:
        "Retrieval Implementation with Document Loader, Document Transformer, Text Embedding, and Vector Store",
    },
    {
      heading: "LangChain Applications and Implementations",
      Lessons:
        "Memory Implementation with Chat Messages, Conversational Knowledge Base, and Vector Store",
    },
    {
      heading: "LangChain Applications and Implementations",
      Lessons: "Text Summarization Using LangChain",
    },
    {
      heading: "LangChain Applications and Implementations",
      Lessons: "Question Answering with LangChain",
    },
    {
      heading: "LangChain Applications and Implementations",
      Lessons: "Building a Chatbot with LangChain",
    },
    {
      heading: "LangChain Applications and Implementations",
      Lessons: "LangChain Streaming Capabilities",
    },
    {
      heading: "LangChain Applications and Implementations",
      Lessons: "Embeddings and Vector Data Stores within LangChain",
    },
    {
      heading: "LangChain Applications and Implementations",
      Lessons:
        "Understanding PromptTemplate, LLM, and OutputParser Integration",
    },
    {
      heading: "LangChain Applications and Implementations",
      Lessons: "Exploring the LangChain Expression Language",
    },
    {
      heading: "LangChain Applications and Implementations",
      Lessons: "Binding Runtime Arguments",
    },
    {
      heading: "LangChain Applications and Implementations",
      Lessons: "Configurable Alternatives for Flexibility",
    },
    {
      heading: "LangChain Applications and Implementations",
      Lessons: "Implementing Fallback Mechanisms",
    },
    {
      heading: "LangChain Applications and Implementations",
      Lessons: "Executing Arbitrary Functions",
    },
    {
      heading: "LangChain Applications and Implementations",
      Lessons: "Utilizing RunnableParallel and RunnableMap",
    },
    {
      heading: "LangChain Applications and Implementations",
      Lessons: "Routing Between Multiple Runnables",
    },
    {
      heading: "LangChain Applications and Implementations",
      Lessons: "Document Loaders in LangChain",
    },
    {
      heading: "LangChain Applications and Implementations",
      Lessons: "Analyzing CSV, PDF, and JSON Files Using LangChain",
    },
    {
      heading: "LangChain Applications and Implementations",
      Lessons: "Prompt Templating and Management",
    },
    {
      heading: "LangChain Applications and Implementations",
      Lessons: "Retrieval-Augmented Generation Chain",
    },
    {
      heading: "LangChain Applications and Implementations",
      Lessons: "Creating Multiple Chains for Complex Tasks",
    },
    {
      heading: "LangChain Applications and Implementations",
      Lessons: "Querying a SQL Database",
    },
    {
      heading: "LangChain Applications and Implementations",
      Lessons: "Incorporating Moderation in Your LLM Application",
    },
    {
      heading: "LangChain Applications and Implementations",
      Lessons: "Integrating Hugging Face Models with LangChain",
    },
    {
      heading: "LangChain Applications and Implementations",
      Lessons: "Fine-Tuning Falcon 7B on a Custom Dataset",
    },
    {
      heading: "LangChain Applications and Implementations",
      Lessons: "Mistral 7B: Fine-Tuning and Inference for Custom Use Cases",
    },
    {
      heading: "LangChain Applications and Implementations",
      Lessons: "LangChain with Google PaLM2 Model",
    },
    {
      heading: "LangChain Applications and Implementations",
      Lessons: "LangChain with Facebook LLaMA2 Model",
    },
    {
      heading: "LangChain Applications and Implementations",
      Lessons: "Building a LangChain Web Application with Streamlit and Flask",
    },

    {
      heading: "Lanchain Projects",
      Lessons: "Project 1: Personalized Learning Recommendation System",
    },
    {
      heading: "Lanchain Projects",
      Lessons:
        "Develop a system that analyzes user preferences and learning patterns to recommend tailored educational resources or courses.",
    },
    {
      heading: "Lanchain Projects",
      Lessons: "Project 2: Social Media Sentiment Analyzer",
    },
    {
      heading: "Lanchain Projects",
      Lessons:
        "Create an application that fetches posts from various social media platforms and analyzes the sentiment behind them, providing insights on public opinion regarding specific topics or brands.",
    },
    {
      heading: "Lanchain Projects",
      Lessons: "Project 3: Virtual Health Assistant",
    },
    {
      heading: "Lanchain Projects",
      Lessons:
        "Build a chatbot that provides users with health information, medication reminders, and basic medical advice based on their input and queries.",
    },
    {
      heading: "Lanchain Projects",
      Lessons: "Project 4: Automated Financial Portfolio Tracker",
    },
    {
      heading: "Lanchain Projects",
      Lessons:
        "Develop a web application that allows users to input their investments and automatically tracks the performance of their financial portfolio, providing insights and suggestions based on market trends.",
    },

    {
      heading: "LlamaIndex Overview and Implementation",
      Lessons: "Introduction to LlamaIndex",
    },
    {
      heading: "LlamaIndex Overview and Implementation",
      Lessons: "Distinguishing Between LangChain and LlamaIndex",
    },
    {
      heading: "LlamaIndex Overview and Implementation",
      Lessons: "Understanding the Differences Between Llama and LlamaIndex",
    },
    {
      heading: "LlamaIndex Overview and Implementation",
      Lessons: "Setting Up LlamaIndex in Your Local Environment",
    },
    {
      heading: "LlamaIndex Overview and Implementation",
      Lessons: "Leveraging LLMs with LlamaIndex",
    },
    {
      heading: "LlamaIndex Overview and Implementation",
      Lessons: "Exploring LlamaHub",
    },
    {
      heading: "LlamaIndex Overview and Implementation",
      Lessons: "Connecting to External Data Sources",
    },
    {
      heading: "LlamaIndex Overview and Implementation",
      Lessons: "Understanding In-Context Learning and Fine-Tuning",
    },
    {
      heading: "LlamaIndex Overview and Implementation",
      Lessons: "The Importance of Indexing in LLM Applications",
    },
    {
      heading: "LlamaIndex Overview and Implementation",
      Lessons: "Persisting Indexes",
    },
    {
      heading: "LlamaIndex Overview and Implementation",
      Lessons: "Indexing Your Data: A How-To",
    },
    {
      heading: "LlamaIndex Overview and Implementation",
      Lessons: "Creating Document Objects",
    },
    {
      heading: "LlamaIndex Overview and Implementation",
      Lessons: "Different Document Loaders Available",
    },
    {
      heading: "LlamaIndex Overview and Implementation",
      Lessons: "Verifying Response Sources",
    },
    {
      heading: "LlamaIndex Overview and Implementation",
      Lessons: "Connecting with Various Document Formats (CSV, TXT, PDF, etc.)",
    },
    {
      heading: "LlamaIndex Overview and Implementation",
      Lessons: "Document Management Strategies",
    },
    {
      heading: "LlamaIndex Overview and Implementation",
      Lessons: "Recursive File Processing from Directories and Subdirectories",
    },
    {
      heading: "LlamaIndex Overview and Implementation",
      Lessons: "Building Applications with LlamaIndex",
    },
    {
      heading: "LlamaIndex Overview and Implementation",
      Lessons: "Customizing LLM Models within Applications",
    },
    {
      heading: "LlamaIndex Overview and Implementation",
      Lessons: "Integrating with Endpoints Using Flask and Streamlit",
    },
    {
      heading: "LlamaIndex Overview and Implementation",
      Lessons: "Enabling Streaming Responses",
    },
    {
      heading: "LlamaIndex Overview and Implementation",
      Lessons: "Chat Engine: Condense Mode",
    },
    {
      heading: "LlamaIndex Overview and Implementation",
      Lessons: "Chat Engine: React Mode",
    },
    {
      heading: "LlamaIndex Overview and Implementation",
      Lessons: "Customizing Prompts for Enhanced Interaction",
    },
    {
      heading: "LlamaIndex Overview and Implementation",
      Lessons:
        "Using Vector Databases like ChromaDB and Weaviate with LlamaIndex",
    },
    {
      heading: "LlamaIndex Overview and Implementation",
      Lessons: "Token Prediction and Cost Analysis",
    },
    {
      heading: "LlamaIndex Overview and Implementation",
      Lessons: "Integrating with OpenAI and Hugging Face",
    },

    {
      heading: "LLM Projects with LlamaIndex",
      Lessons: "Project 1: Smart Recipe Assistant with Llama 2",
    },
    {
      heading: "LLM Projects with LlamaIndex",
      Lessons:
        "Create a chatbot that suggests recipes based on user preferences, dietary restrictions, and available ingredients, utilizing Llama 2 for natural language understanding.",
    },
    {
      heading: "LLM Projects with LlamaIndex",
      Lessons:
        "Project 2: Mental Health Support Chatbot with Llama 2, Pinecone, and LangChain",
    },
    {
      heading: "LLM Projects with LlamaIndex",
      Lessons:
        "Develop a chatbot that provides mental health resources, coping strategies, and conversation support using Llama 2, with deployment on AWS.",
    },
    {
      heading: "LLM Projects with LlamaIndex",
      Lessons:
        "Project 3: Automated News Aggregator with LangChain, OpenAI, and ChromaDB",
    },
    {
      heading: "LLM Projects with LlamaIndex",
      Lessons:
        "Build a news aggregation tool that collects and summarizes articles from various sources based on user-defined topics, using LangChain and OpenAI for analysis.",
    },
    {
      heading: "LLM Projects with LlamaIndex",
      Lessons:
        "Project 4: Academic Paper Recommendation System with LangChain and Weaviate",
    },
    {
      heading: "LLM Projects with LlamaIndex",
      Lessons:
        "Design a system that recommends academic papers based on user queries and interests, integrating LangChain for querying and Weaviate for vector storage, with deployment on AWS.",
    },
    {
      heading: "LLM Projects with LlamaIndex",
      Lessons:
        "Chainlit: An asynchronous Python framework for building interactive applications.",
    },

    {
      heading: "End to End Projects",
      Lessons:
        "LIDA: A tool for automatically generating visualizations and infographics from data.",
    },
    {
      heading: "End to End Projects",
      Lessons:
        "Slidesgo: An AI-powered platform for creating stunning presentations quickly and easily.",
    },
    {
      heading: "End to End Projects",
      Lessons:
        "Content Creation Tools: Platforms like Jasper, Copy.ai, and Anyword that assist in generating high-quality written content.",
    },
    {
      heading: "End to End Projects",
      Lessons:
        "Grammar and Rewording Tools: Applications such as Grammarly, Wordtune, and ProWritingAid for improving writing through grammar checks and paraphrasing.",
    },
    {
      heading: "End to End Projects",
      Lessons:
        "Video Creation Software: Tools like Descript, Wondershare Filmora, and Runway for editing and producing videos effortlessly.",
    },
    {
      heading: "End to End Projects",
      Lessons:
        "Image Generation Tools: Platforms like DALL·E 2 and Midjourney that generate images based on textual descriptions.",
    },
    {
      heading: "End to End Projects",
      Lessons:
        "Research Tools: Tools like Genei and Aomni that help streamline the research process by organizing and summarizing information.",
    },
  ];
  const grouped = Object.values(
    rawData.reduce(
      (acc, item) => {
        if (!acc[item.heading]) {
          acc[item.heading] = {
            title: item.heading,
            lessons: [],
          };
        }
        acc[item.heading].lessons.push(item.Lessons);
        return acc;
      },
      {} as Record<string, { title: string; lessons: string[] }>,
    ),
  );

  const [active, setActive] = useState(grouped[0] || null);
  return (
    <section className="relative overflow-hidden bg-black py-6 md:py-10">
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="mb-10 text-center">
          <h2 className="bg-[linear-gradient(99deg,#61E6C6_6.97%,#127EF1_34.37%,#EF7D6E_88.36%)] bg-clip-text text-[26px] font-black leading-9.5 text-transparent md:text-[54px] md:leading-18.5">
            Industry Oriented Curriculum
          </h2>
        </div>
        <div className="rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(18,18,24,0.96)_0%,rgba(8,8,10,0.98)_100%)] p-4 sm:p-5 md:p-6">
          <div className="grid md:gap-5 gap-3 md:grid-cols-2 items-stretch">
            <div className="h-full md:overflow-hidden overflow-x-scroll">
              <div
                className="md:h-95 space-y-3 overflow-y-auto pr-2 flex gap-2 md:flex-wrap h-auto"
                style={{
                  scrollbarWidth: "thin",
                  scrollbarColor: "#EFD4CB #1a1a1a",
                }}
              >
                {grouped.map((module, i) => (
                  <button
                    key={module.title}
                    onClick={() => setActive(module)}
                    className={`relative md:w-full h-fit  overflow-hidden rounded-[22px] border p-4 text-left transition-all duration-200 min-w-fit cursor-pointer
                    ${
                      active?.title === module.title
                        ? "border-[#61E6C6]/35 bg-[linear-gradient(135deg,rgba(97,230,198,0.18)_0%,rgba(18,126,241,0.12)_48%,rgba(239,125,110,0.14)_100%)] shadow-[0_18px_40px_rgba(0,0,0,0.28)]"
                        : "border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.03)_100%)] hover:border-white/15 hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.07)_0%,rgba(255,255,255,0.04)_100%)]"
                    }`}
                  >
                    <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent)]" />
                    <p className="mb-2 md:text-[12px] text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">
                      Module {i + 1}
                    </p>
                    <h6 className="text-[13px] font-semibold md:leading-7 leading-5 text-white md:text-[20px]">
                      {module.title}
                    </h6>
                  </button>
                ))}
              </div>
            </div>
            <div
              className="h-95 rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(10,10,14,0.96)_0%,rgba(6,6,8,0.98)_100%)] p-4 sm:p-5"
              style={{
                scrollbarWidth: "thin",
                scrollbarColor: "#EFD4CB #1a1a1a",
              }}
            >
              <div className="h-full overflow-y-auto pr-2">
                <ul className="grid gap-3">
                  {active?.lessons?.map((lesson, i) => (
                    <li
                      key={`${lesson}-${i}`}
                      className="relative overflow-hidden rounded-[18px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07)_0%,rgba(255,255,255,0.03)_100%)] px-4 py-3.5 md:text-[15px] text-[13px] leading-5 md:leading-6 text-white sm:px-5"
                    >
                      <div className="absolute inset-y-3 left-0 w-1 rounded-full bg-[linear-gradient(180deg,#61E6C6_0%,#127EF1_55%,#EF7D6E_100%)]" />
                      <span className="block pl-3 capitalize">{lesson}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
