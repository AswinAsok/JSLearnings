### What is Event Loop & Async Behaviour?

-   We need to precisely know which all keywords to tell so that the interview becomes a discussion. Don't make it a dead conversation. Give some tail end so that intevier could ask followup questions

-   JavaScript is Single-Threaded Language

-   Eventhough JavaScript is a SingleThreaded Language it has a async, non-blocking behaviour, which occurs because of the event loop.

-   These async behaviour are due to the Browser API or some runtime environement trying to mimicing the browser api behaviour.

```javascript
const one = () => console.log("First");
const two = () => setTimeout(() => console.log("Second"), 500);
const three = () => console.log("Third");

two();
one();
three();

/*
 First
 Third
 Second
*/
```

-   In JavaScript, we have:
    -   Call Stack: When the call stack has a task for execution, it gets executed immediately.
    -   Browser API: Certain tasks, such as setTimeout, require the Browser API for execution. These tasks are placed in the Browser API and then added to the Task Queue or the Micro Task Queue based on priority. Broweser API can't directly sent to the task it has to be passed through any one of the queues first.
    -   Task Queue
    -   Micro Task Queue (High Priority)
