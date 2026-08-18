---
description: Invoke any installed skill by name
agent: build
---

Invoke the skill named "$1" using the skill tool.

- If "$1" matches an available skill, load it and follow its instructions for the task.
- If it does not match, list the available skills and ask which to use.
- Remaining arguments ($2, $3, ...) are the skill's target/arguments.

Example: /skill ui-styling — run the ui-styling workflow.