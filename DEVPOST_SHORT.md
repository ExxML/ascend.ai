# Ascend.ai - Devpost Submission (Short Version)

## 🎯 Inspiration

Financial planning is overwhelming. With countless options and conflicting advice, most people don't know where to begin. **Ascend.ai** transforms financial planning from a confusing maze into a clear, personalized roadmap.

## 🏗️ The Custom Engine: Our Core Innovation

**We built a production-grade, proprietary recommendation engine from scratch.** This isn't a wrapper around existing APIs—it's a sophisticated, modular system that processes user profiles and generates personalized financial roadmaps through a 6-stage pipeline.

### Engine Architecture:
1. **Input Normalizer**: Handles diverse inputs and computes financial health indicators
2. **Action Registry**: 50+ financial actions with dynamic generation capabilities
3. **Multi-Factor Scorer**: 8 weighted dimensions (priority, risk, goal alignment, profile fit, urgency, impact, feasibility, priority match)
4. **DAG Builder**: Dependency graph with cycle detection and path optimization
5. **Recommendation Engine**: Horizon-based grouping and sequential path generation
6. **Personalization Layer**: Contextual descriptions and timeline estimation

**Why This Matters:** The engine is modular, extensible, and production-ready. It can be white-labeled, customized for specific financial products, and scaled to enterprise use cases.

## 💡 What It Does

Ascend.ai generates personalized, actionable financial roadmaps based on your profile, current situation, and goals. Our custom engine provides:

- **Personalized Recommendations**: Engine-powered suggestions tailored to your age, income, debt, investments, and risk tolerance
- **Staged Roadmap**: Organized into Short-Term, Medium-Term, and Long-Term actions with clear dependencies
- **Interactive Visualization**: Beautiful roadmap showing how each action connects to your goals
- **Real-Time Adaptation**: Adjust your profile and watch your roadmap update instantly (sub-100ms API response)
- **Educational Resources**: Curated links to trusted financial resources for each recommendation

## 🛠️ How We Built It

**Frontend:**
- React.js with modern hooks
- Firebase Authentication
- Custom CSS animations and SVG visualizations
- Responsive design

**Backend: The Ascend Engine**
- **Python 3.10+** with modular architecture
- **Multi-factor scoring system** (8 weighted dimensions)
- **DAG (Directed Acyclic Graph) builder** for logical sequencing and dependency resolution
- **Flask REST API** with sub-100ms response times
- **Zero external ML dependencies**—pure algorithmic approach for transparency

**Key Technical Features:**
- Action Registry System (50+ actions, extensible)
- Multi-factor scoring with configurable weights
- DAG-based dependency resolution (cycle detection, topological sorting)
- Real-time API integration with instant updates

## 🏆 What Makes It Special

1. **Proprietary Engine**: Built from scratch—not a wrapper around generic APIs. Full control and transparency.
2. **DAG-Based Dependencies**: Ensures logical sequencing (e.g., emergency fund before investing)
3. **Multi-Factor Scoring**: 8 dimensions provide nuanced, explainable recommendations
4. **Real-Time Adaptation**: Change your profile and see instant updates
5. **Production-Ready**: Modular, extensible, and scalable architecture

## 💼 For Financial Industry Sponsors

**Connnr, Clark, and Lumm Investment**—our engine is a **proprietary technology asset** that can be:
- Integrated into existing financial platforms
- White-labeled for your products
- Customized for specific investment strategies
- Scaled to enterprise-level traffic

## 🎯 Impact

Ascend.ai democratizes financial planning by making it accessible, personalized, actionable, and educational—building a pathway to financial confidence.

## 🛠️ Tech Stack

React.js | Python | Flask | Firebase | DAG Architecture | REST API | Custom Recommendation Engine

---

**Built for nwHacks 2026**

**The Engine is the Innovation. The UI is the Experience.**
