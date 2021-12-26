
Each folder represent one feature.

Each feature is structured like:
- infra
- presentation
- service



### 🎯 services:

Here we go with our business rules.

Each service must do one specific thing per file. And of course, should be connected to the feature.

We can change and modify our rules here.

### 🛠 infra:
This folder contain everything to support the presentation layer.

This folder consume the services.

This folder has the state management for the feature.

Here we can have presentation logic but no business rule.

### 💅 presentation:
Here we have just and only visual components.

No logic must be built here.

No service request must be called here.
