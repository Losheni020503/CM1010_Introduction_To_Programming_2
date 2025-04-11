# 📊 Data Visualization App – Python Project

A modular and beginner-friendly **Python data visualization application** built using core programming principles like **recursion**, **file handling**, and **functional decomposition**. This project focuses on transforming raw data into meaningful insights using visual graphs and error-resilient code.

---

## 🎯 Key Features

### 📂 File Handling & Parsing
- Reads structured `.csv` or `.txt` datasets
- Implements error-checking on file input
- Handles invalid or missing data gracefully

### 🔁 Programming Concepts
- Utilizes **recursion** for directory traversal or nested data analysis
- Employs **modular functions** to separate data logic, rendering, and file operations
- Robust error handling to avoid crashes during runtime

### 📈 Visualization Output
- Plots bar charts, line graphs, or pie charts
- Uses **Matplotlib** for graphical rendering
- Supports dynamic user selection of visualization type and data column

---

## 🧰 Tech Stack

| Component       | Technology            |
|----------------|------------------------|
| Language        | Python (v3.8+)         |
| Libraries       | `matplotlib`, `csv`, `os`, `tkinter` |
| IDE             | IDLE / VS Code / PyCharm |
| Output Format   | Graphs in new window or PNG |

---

## 💻 How to Run

1. Clone the repository:
```bash
git clone https://github.com/yourusername/data-visualization-app.git
cd data-visualization-app
Install the required Python libraries:
```

2. Install the required Python libraries:

```bash
pip install matplotlib
Run the main application:
```
```bash
python main.py
Follow the prompts to:
```
3. Load a data file

4. Choose visualization type (bar, line, pie)

5. Select columns to plot

## 🔍 Sample Usage
```bash
# Inside visualizer.py
def plot_bar_chart(data, labels):
    plt.bar(labels, data)
    plt.title("Sample Bar Chart")
    plt.xlabel("Categories")
    plt.ylabel("Values")
    plt.show()
```

🧠 Learning Outcomes
Strengthened understanding of recursion and file I/O in Python

Gained experience using Matplotlib for data-driven insights

Applied principles of modular design and scalable development

Learned error handling and defensive coding practices


## 📌 Future Enhancements
Add GUI using Tkinter or PyQt

Support live data from APIs

Export graphs as .png or .pdf

Add support for JSON and Excel file types

## 👤 Author
- Losheni Meenakshi Sundaram
- Student at University of London, Singapore Institute of Management
- 📫 Email: losheni.ms@gmail.com

📄 License
This project is for academic and personal learning use only.
