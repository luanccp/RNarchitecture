
Each folder represent one feature.

Each feature is structured like:
- service
- infra
- presentation
- dtos (optional)

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


### 🧩 dtos:
DTO means **D**ata **T**ransfer **O**bjects. 
So here we can create interfaces and types to drive how the information will be navigated from one side to another. And yet, to extract the best what Typescript can offer.

examples:
`ICreateSession`
`TRecommendationsQuery`

> I'd recommend to add, as first letters, `I` to create interfaces and `T` to create types. We can use this eslint rule to help us:
`"@typescript-eslint/interface-name-prefix": ["error", {"prefixWithI": "always"}]`

Just a reminder about **Interface X Types**:
> The key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable. [Typescript docs](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces)
