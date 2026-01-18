# Ascend.ai

## Inspiration

Access to good financial advice is broken, and personalized guidance is expensive, while free tools offer generic, one-size-fits-all answers. We wanted to build a system that delivers meaningful, personalized financial advice to people who are usually overlooked, something that could suit all ages and individuals.

Most financial planning tools either use generic templates or rely on black-box AI that can't explain its reasoning. We saw an opportunity to build something different: a custom recommendation engine that combines structured logic with intelligent personalization, giving users transparent, actionable advice they can actually trust.

## What it does

Ascend.ai is a personalized financial advisor engine that adapts its recommendations based on user context. Using the same underlying engine, it produces different advice for different users by accounting for constraints like age, income, debt levels, investments, risk tolerance, and financial goals.

The engine processes a user's complete financial profile and generates a staged roadmap organized into short-term, medium-term, and long-term actions. Each recommendation includes dependencies, so users understand not just what to do, but the logical sequence of steps. The system also provides real-time adaptation—when users adjust their profile through interactive toggles, the entire roadmap recalculates instantly to reflect their new situation.

The frontend presents this as an interactive visualization where users can explore their personalized roadmap, see how actions connect to each other, and access curated educational resources for each recommendation.

## How we built it

We built a heuristic-based decision framework that sits above any AI model. User personas and constraints guide the reasoning process, while AI is used to support explanation and adaptability rather than drive decisions blindly. This keeps outputs structured, explainable, and consistent.

The core engine is built in Python and consists of several modular components. An input normalizer handles diverse user inputs and computes financial health indicators. An action registry contains 50+ financial actions, each with metadata about risk level, expected impact, effort required, and dependencies. A multi-factor scorer evaluates each action across eight weighted dimensions: base priority, risk alignment, goal alignment, profile fit, urgency, impact potential, feasibility, and priority area match.

The most critical component is our DAG builder, which constructs a directed acyclic graph of financial actions with their dependencies. This ensures logical sequencing—for example, building an emergency fund always comes before starting to invest. The graph structure also enables path optimization and parallel action identification.

The recommendation engine then groups scored actions by time horizon, applies diversity filters, and generates personalized descriptions that reference the user's specific situation. All of this runs through a Flask REST API that serves the React frontend, with response times under 100 milliseconds for real-time updates.

The frontend is built in React with Firebase authentication. We focused on creating an intuitive interface where users can input their financial situation and goals, adjust their profile through interactive toggles, and explore their personalized roadmap through an interactive node graph visualization.

## Challenges we ran into

Balancing personalization with reliability was difficult. Pure AI approaches often hallucinate or overgeneralize, while rigid logic can feel inflexible. Designing heuristics that were both expressive and robust took significant iteration.

Building the dependency graph system was particularly challenging. We needed to ensure that recommendations always made logical sense—no suggesting investments before emergency funds, no debt payoff strategies that ignored income constraints. We implemented cycle detection and topological sorting to maintain graph integrity, but getting the dependency rules right required many rounds of testing with different user profiles.

Another challenge was making the scoring system transparent while keeping it sophisticated. We wanted users to understand why certain recommendations were prioritized, but we also needed the scoring to be nuanced enough to handle edge cases. We ended up with a multi-factor approach that provides score breakdowns, allowing users to see exactly how each dimension contributed to a recommendation's final score.

Performance was also a concern. With 50+ actions being scored across multiple dimensions for each user, we needed to optimize the engine to maintain sub-100ms response times for real-time updates. This required careful attention to data structures and algorithm efficiency.

## Accomplishments that we're proud of

We demonstrated that the same engine can generate vastly different, sensible advice for different users. A 22-year-old with student debt gets a completely different roadmap than a 45-year-old homeowner with investments, even though they're using the same underlying system.

We built a system that prioritizes trust, transparency, and real-world constraints over flashy API calls. Every recommendation can be explained through score breakdowns, and the dependency graph ensures logical consistency that users can actually follow.

The real-time adaptation feature works seamlessly—users can adjust their age, income, debt, or investments and watch their entire roadmap recalculate instantly. This creates an engaging experience that helps users understand how different financial factors impact their recommended path forward.

We're particularly proud of the engine's architecture. It's modular and extensible, meaning new financial actions can be added easily, scoring weights can be customized for different use cases, and the entire system can be adapted for different financial products or regulations. This makes it more than just a hackathon project—it's a foundation that could power real financial planning applications.

## What we learned

Context is more important than raw intelligence in financial decision-making. AI is most effective when paired with deterministic logic and clear constraints. Explainability and trust matter just as much as accuracy.

Building a recommendation engine from scratch taught us that transparency isn't just nice to have—it's essential for financial applications. Users need to understand why they're being recommended certain actions, especially when it comes to their money. Our multi-factor scoring system with breakdowns provides this transparency while maintaining sophisticated personalization.

We also learned that dependency management is crucial for actionable advice. Simply ranking actions by score doesn't work—you need to understand which actions depend on others and ensure users follow a logical sequence. The DAG structure we built handles this elegantly, and it's something that generic recommendation systems often miss.

Finally, we discovered that real-time adaptation creates a much more engaging user experience. When users can see their roadmap update instantly as they adjust their profile, it helps them understand the relationships between different financial factors and builds confidence in the recommendations.

## What's next for Ascend.ai

Further additions to the project would include options to expand the heuristic system, add real user inputs, and integrate verified financial data sources.

Specifically, we'd like to add more financial actions to the registry, particularly around tax optimization, insurance planning, and retirement strategies. We're also interested in integrating with financial APIs to automatically pull user account data, which would make profile setup seamless and enable progress tracking.

The scoring system could be enhanced with machine learning models trained on user outcomes, but we'd keep the heuristic foundation to maintain transparency. We're also considering adding A/B testing capabilities to optimize recommendation strategies based on what actually helps users achieve their goals.

For enterprise applications, we'd build out compliance modules for different jurisdictions, add analytics dashboards for tracking recommendation effectiveness, and create SDKs for mobile app integration. The modular architecture we built makes all of these extensions straightforward.

## Built With

Python, Flask, React, Firebase, DAG Architecture, REST API
