## ⚙️ Providers:

Here we have the app providers which might change dependent our needs.

Each provider should have the model well defined. We must be able to say what is expected from this provider. Those functions will be used on features, inside the infra folder.

**It's not recommended use provider original functions outside the implementation folder.**

For now we have at least 3 folders:

### model
Here we describe functions that is expected from the provider.
### implementation
Here we can add multiple providers implementing what was defined on the model.
### fake
We can create implementations here to make our provider testable. So when we create test files for the services and sagas we can use the fake implementations


