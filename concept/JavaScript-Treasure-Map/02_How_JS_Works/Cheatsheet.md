# Cheatsheet
Here’s your **GitHub repo folder structure** for **How JavaScript Works** 📂.  

---

### 📁 **Folder Structure:**  
```
📂 02-how-js-works  
│── 📜 how-it-works.md  
│── 📜 practice.md  
│── 📜 real-life-example.md  
│── 📜 revision-notes.md  
│── 📜 cheatsheet.md  
```

---

### 📜 `how-it-works.md`  
```md
# 🚀 How JavaScript Works (For Absolute Beginners)  

## 🏆 The Goal  
You want to **work with JavaScript** without hesitation.  
You want to **crack an IT job** with JavaScript skills.  
First, you need to **understand how JavaScript works**.  

---

## 🔥 JavaScript in Simple Words  
JavaScript is like a **chef** in a kitchen:  
1️⃣ **Thinks** 🤔 → Plans how to cook.  
2️⃣ **Reads the Recipe** 📖 → Understands what to do.  
3️⃣ **Cooks & Serves** 🍽 → Executes the plan.  

JavaScript works the **same way**:  
✅ First, it **scans the code** and prepares memory.  
✅ Then, it **executes the code line by line**.  
✅ Some tasks (like API calls) take time, but JS **handles them smartly**.  

---

## 🏗 Two Phases of JavaScript Execution  

### 1️⃣ **Memory Creation Phase (Setup)**  
- JS scans the code and **reserves memory**.  
- **Variables** get `undefined`.  
- **Functions** are fully stored (hoisted).  

### 2️⃣ **Execution Phase (Action!)**  
- JS **runs the code line by line**.  
- It **updates variable values**.  
- It **executes function calls**.  

📝 **Example:**  
```js
console.log(name); // ❓ What happens?
var name = "Gwen";
console.log(name); // ✅ Outputs: "Gwen"
```
📌 **Why?**  
- `name` is **reserved in memory** as `undefined` first.  
- Later, `"Gwen"` is assigned.  

---

## 🛠 How JavaScript Handles Work  

JavaScript has a **smart system** to manage tasks:  
1️⃣ **Call Stack** → Handles function calls like a To-Do List.  
2️⃣ **Heap** → Stores large data.  
3️⃣ **Event Loop** → Manages background tasks (like API calls).  

📝 **Example:**  
```js
console.log("Start");  

setTimeout(() => {  
  console.log("Inside Timeout");  
}, 0);  

console.log("End");
```
📌 **What will print?**  
```
Start
End
Inside Timeout
```
📌 **Why?**  
- `"Start"` prints.  
- `setTimeout` goes to **Web APIs** and waits.  
- `"End"` prints first.  
- Then `"Inside Timeout"` prints when the stack is free.  

---

## 🗑 Memory Management (Garbage Collection)  
JavaScript **removes unused data** automatically.  

📝 **Example:**  
```js
let user = { name: "Gwen" };  
user = null; // JS will remove this from memory.
```

---

## 🎯 The Key Takeaways  
✅ **JS runs in two phases** (Memory → Execution).  
✅ **It handles async tasks smartly** (Event Loop).  
✅ **It automatically manages memory** (Garbage Collection).  
✅ **Mastering this removes hesitation & makes you confident in JavaScript!** 🚀  

---

💡 **Next Step?** Move to the next `.md` file and keep going!  
```

---

### 📜 `practice.md`  
```md
# 🎯 Practice: How JavaScript Works  

## 🔥 Task 1: Memory Creation & Execution  
🔹 What will be printed?  
```js
console.log(a);
var a = 10;
console.log(a);
```
📝 **Answer:**  

---

## 🔥 Task 2: Call Stack & Event Loop  
🔹 Predict the output:  
```js
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

console.log("C");
```
📝 **Answer:**  

---

🚀 **Try running these examples to master JavaScript!**  
```

---

### 📜 `real-life-example.md`  
```md
# 🌍 Real-Life Example: How JavaScript Works  

## 🚀 Scenario: Ordering Food in a Restaurant  

1️⃣ **You place an order** (Function Call).  
2️⃣ **Waiter writes it down** (Call Stack).  
3️⃣ **Chef prepares food** (Execution Phase).  
4️⃣ **Meanwhile, the waiter takes other orders** (Event Loop).  
5️⃣ **Your food is ready & served** (Callback Function).  

📝 **Code Representation:**  
```js
console.log("Customer orders food");

setTimeout(() => {
  console.log("Chef prepares and serves food");
}, 5000);

console.log("Waiter takes another order");
```

📌 **Understanding:**  
- Even though cooking takes time, the **waiter (JavaScript) keeps taking orders**.  
- The food is **served only when ready** (Asynchronous Behavior).  
- This is how JavaScript handles tasks **without blocking the main process**! 🚀  
```

---

### 📜 `revision-notes.md`  
```md
# ✨ Quick Revision: How JavaScript Works  

1️⃣ **JavaScript works in 2 phases** → Memory Creation & Execution.  
2️⃣ **Hoisting happens** → Variables get `undefined`, functions are stored.  
3️⃣ **Call Stack manages function calls** → Last In, First Out.  
4️⃣ **Event Loop handles async tasks** → Waits & executes when free.  
5️⃣ **Garbage Collection** → JavaScript clears unused memory automatically.  

🚀 **Remember this & you’re already ahead of many!**  
```

---

### 📜 `cheatsheet.md`  
```md
# 🏆 JavaScript Cheatsheet: How It Works  

## 🛠 Key Concepts  
- **Hoisting** → `var` is `undefined`, functions are stored.  
- **Call Stack** → Functions run in order, last in → first out.  
- **Event Loop** → Manages async tasks like setTimeout.  
- **Garbage Collection** → JS removes unused memory.  

## 🔥 Quick Example  
```js
console.log(x); // undefined
var x = 10;
console.log(x); // 10
```
✅ **This is how JavaScript works!** 🚀  
```

---

### ✅ How to Use This Repo?  
- **Start with `how-it-works.md`** to understand the concept.  
- **Practice in `practice.md`** with real problems.  
- **Read `real-life-example.md`** to see how it applies.  
- **Revise with `revision-notes.md`** before interviews.  
- **Use `cheatsheet.md`** for quick reference.  

---

### 🎯 **This repo will make you job-ready in JavaScript!**  
Now, just **upload this to GitHub** and keep building! 🚀🔥
