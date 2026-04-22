"use client";

import { useState } from "react";

export default function Curriculum() {
  const rawData = [
    {
    heading: "Python",
    Lessons: "Course Introduction"
   },
   {
    heading: "Python",
    Lessons: "Course Overview And Dashboard Description"
   },
   {
    heading: "Python",
    Lessons: "Introduction Of Data Industry"
   },
   {
    heading: "Python",
    Lessons: "Introduction Of Python And Comparison With Other Programming Language"
   },
   {
    heading: "Python",
    Lessons: "Python Objects, Number & Booleans, Strings."
   },
   {
    heading: "Python",
    Lessons: "Container Objects, Mutability Of Objects"
   },
   {
    heading: "Python",
    Lessons: "Operators - Arithmetic, Bitwise, Comparison And Assignment Operators, Operator's Precedence And Associativity"
   },
   {
    heading: "Python",
    Lessons: "Conditions (If Else, If-Elif-Else), Loops (While, For)"
   },
   {
    heading: "Python",
    Lessons: "Break And Continue Statement And Range Function"
   },
   {
    heading: "Python",
    Lessons: "Basic Data Structure In Python"
   },
   {
    heading: "Python",
    Lessons: "String Object Basics"
   },
   {
    heading: "Python",
    Lessons: "String Inbuilt Methods"
   },
   {
    heading: "Python",
    Lessons: "Splitting And Joining Strings"
   },
   {
    heading: "Python",
    Lessons: "String Format Functions"
   },
   {
    heading: "Python",
    Lessons: "List Methods"
   },
   {
    heading: "Python",
    Lessons: "List As Stack And Queues"
   },
   {
    heading: "Python",
    Lessons: "List Comprehensions"
   },
   {
    heading: "Python",
    Lessons: "Tuples, Sets & Dictionary Object Methods"
   },
   {
    heading: "Python",
    Lessons: "Dictionary Comprehensions"
   },
   {
    heading: "Python",
    Lessons: "Dictionary View Objects"
   },
   {
    heading: "Python",
    Lessons: "Functions Basics, Parameter Passing, Iterators."
   },
   {
    heading: "Python",
    Lessons: "Generator Functions"
   },
   {
    heading: "Python",
    Lessons: "Lambda Functions"
   },
   {
    heading: "Python",
    Lessons: "Map, Reduce, Filter Functions."
   },
   {
    heading: "Python",
    Lessons: "Oops Basic Concepts."
   },
   {
    heading: "Python",
    Lessons: "Creating Classes"
   },
   {
    heading: "Python",
    Lessons: "Pillars Of Oops"
   },
   {
    heading: "Python",
    Lessons: "Inheritance"
   },
   {
    heading: "Python",
    Lessons: "Polymorphism"
   },
   {
    heading: "Python",
    Lessons: "Encapsulation"
   },
   {
    heading: "Python",
    Lessons: "Abstraction"
   },
   {
    heading: "Python",
    Lessons: "Decorator"
   },
   {
    heading: "Python",
    Lessons: "Class Methods And Static Methods"
   },
   {
    heading: "Python",
    Lessons: "Special (Magic\/Dunder) Methods"
   },
   {
    heading: "Python",
    Lessons: "Property Decorators - Getters, Setters, And Deletes"
   },
   {
    heading: "Python",
    Lessons: "Working With Files"
   },
   {
    heading: "Python",
    Lessons: "Reading And Writing Files"
   },
   {
    heading: "Python",
    Lessons: "Buffered Read And Write"
   },
   {
    heading: "Python",
    Lessons: "Other File Methods."
   },
   {
    heading: "Python",
    Lessons: "Logging, Debugger"
   },
   {
    heading: "Python",
    Lessons: "Modules And Import Statements"
   },
   {
    heading: "Python",
    Lessons: "Exceptions Handling With Try-Except"
   },
   {
    heading: "Python",
    Lessons: "Custom Exception Handling"
   },
   {
    heading: "Python",
    Lessons: "List Of General Use Exception"
   },
   {
    heading: "Python",
    Lessons: "Best Practice Exception Handling"
   },
   {
    heading: "Python",
    Lessons: "Multithreading"
   },
   {
    heading: "Python",
    Lessons: "Multiprocessing"
   },
   {
    heading: "Python",
    Lessons: "Python Pandas - Series"
   },
   {
    heading: "Python",
    Lessons: "Python Pandas – Data Frame"
   },
   {
    heading: "Python",
    Lessons: "Python Pandas – Panel"
   },
   {
    heading: "Python",
    Lessons: "Python Pandas - Basic Functionality"
   },
   {
    heading: "Python",
    Lessons: "Reading Data From Different File System"
   },
   {
    heading: "Python",
    Lessons: "Python Pandas – Re Indexing Python"
   },
   {
    heading: "Python",
    Lessons: "Pandas – Iteration"
   },
   {
    heading: "Python",
    Lessons: "Python Pandas – Sorting."
   },
   {
    heading: "Python",
    Lessons: "Working With Text Data Options & Customization"
   },
   {
    heading: "Python",
    Lessons: "Indexing & Selecting"
   },
   {
    heading: "Python",
    Lessons: "Data Statistical Functions"
   },
   {
    heading: "Python",
    Lessons: "Python Pandas - Window Functions"
   },
   {
    heading: "Python",
    Lessons: "Python Pandas - Date Functionality"
   },
   {
    heading: "Python",
    Lessons: "Python Pandas –Time Delta"
   },
   {
    heading: "Python",
    Lessons: "Python Pandas - Categorical Data"
   },
   {
    heading: "Python",
    Lessons: "Python Pandas – Visualization"
   },
   {
    heading: "Python",
    Lessons: "Python Pandas - Tools"
   },
   {
    heading: "Python",
    Lessons: "Numpy - Nd Array Object."
   },
   {
    heading: "Python",
    Lessons: "Numpy - Data Types."
   },
   {
    heading: "Python",
    Lessons: "Numpy - Array Attributes."
   },
   {
    heading: "Python",
    Lessons: "Numpy - Array Creation Routines."
   },
   {
    heading: "Python",
    Lessons: "Numpy - Array From Existing."
   },
   {
    heading: "Python",
    Lessons: "Data Array From Numerical Ranges."
   },
   {
    heading: "Python",
    Lessons: "Numpy - Indexing & Slicing."
   },
   {
    heading: "Python",
    Lessons: "Numpy – Advanced Indexing."
   },
   {
    heading: "Python",
    Lessons: "Numpy – Broadcasting."
   },
   {
    heading: "Python",
    Lessons: "Numpy - Iterating Over Array."
   },
   {
    heading: "Python",
    Lessons: "Numpy - Array Manipulation."
   },
   {
    heading: "Python",
    Lessons: "Numpy - Binary Operators."
   },
   {
    heading: "Python",
    Lessons: "Numpy - String Functions."
   },
   {
    heading: "Python",
    Lessons: "Numpy - Mathematical Functions."
   },
   {
    heading: "Python",
    Lessons: "Numpy - Arithmetic Operations."
   },
   {
    heading: "Python",
    Lessons: "Numpy - Statistical Functions."
   },
   {
    heading: "Python",
    Lessons: "Sort, Search & Counting Functions."
   },
   {
    heading: "Python",
    Lessons: "Numpy - Byte Swapping."
   },
   {
    heading: "Python",
    Lessons: "Numpy - Copies &Views."
   },
   {
    heading: "Python",
    Lessons: "Numpy - Matrix Library."
   },
   {
    heading: "Python",
    Lessons: "Numpy - Linear Algebra"
   },
   {
    heading: "Python",
    Lessons: "Matplotlib"
   },
   {
    heading: "Python",
    Lessons: "Seaborn"
   },
   {
    heading: "Python",
    Lessons: "Plotly"
   },
   {
    heading: "Python",
    Lessons: "Bokeh"
   },
   
   {
    heading: "SQL",
    Lessons: "SQL Queries"
   },
   {
    heading: "SQL",
    Lessons: "SQL function and procedure"
   },
   {
    heading: "SQL",
    Lessons: "SQL primary and foreign key"
   },
   {
    heading: "SQL",
    Lessons: "Window Function"
   },
   {
    heading: "SQL",
    Lessons: "Partition"
   },
   {
    heading: "SQL",
    Lessons: "Joins ,Union , Indexing , CTE"
   },
   {
    heading: "SQL",
    Lessons: "Triggers & Case"
   },
   {
    heading: "SQL",
    Lessons: "NF & Pivote"
   },
   
   {
    heading: "No SQL",
    Lessons: "MongoDB Get Started"
   },
   {
    heading: "No SQL",
    Lessons: "MongoDB Create Database"
   },
   {
    heading: "No SQL",
    Lessons: "MongoDB Create Collection"
   },
   {
    heading: "No SQL",
    Lessons: "MongoDB Insert"
   },
   {
    heading: "No SQL",
    Lessons: "MongoDB Find"
   },
   {
    heading: "No SQL",
    Lessons: "MongoDB Query"
   },
   {
    heading: "No SQL",
    Lessons: "MongoDB Sort"
   },
   {
    heading: "No SQL",
    Lessons: "MongoDB Delete"
   },
   {
    heading: "No SQL",
    Lessons: "MongoDB Drop Collection"
   },
   {
    heading: "No SQL",
    Lessons: "MongoDB Update"
   },
   {
    heading: "No SQL",
    Lessons: "MongoDB Limit"
   },
   
   {
    heading: "Stats",
    Lessons: "Overview of Basic Statistical Terms"
   },
   {
    heading: "Stats",
    Lessons: "Types of Statistics"
   },
   {
    heading: "Stats",
    Lessons: "Data Types and Classification"
   },
   {
    heading: "Stats",
    Lessons: "Levels of Measurement"
   },
   {
    heading: "Stats",
    Lessons: "Measures of Central Tendency (Mean, Median, Mode)"
   },
   {
    heading: "Stats",
    Lessons: "Measures of Dispersion (Range, Variance, Standard Deviation)"
   },
   {
    heading: "Stats",
    Lessons: "Introduction to Random Variables"
   },
   {
    heading: "Stats",
    Lessons: "Set Theory in Statistics"
   },
   {
    heading: "Stats",
    Lessons: "Understanding Skewness"
   },
   {
    heading: "Stats",
    Lessons: "Covariance and Correlation"
   },
   {
    heading: "Stats",
    Lessons: "Probability Density and Distribution Functions"
   },
   {
    heading: "Stats",
    Lessons: "Types of Probability Distributions"
   },
   {
    heading: "Stats",
    Lessons: "Binomial Distribution"
   },
   {
    heading: "Stats",
    Lessons: "Poisson Distribution"
   },
   {
    heading: "Stats",
    Lessons: "Normal (Gaussian) Distribution"
   },
   {
    heading: "Stats",
    Lessons: "Probability Density vs. Mass Functions"
   },
   {
    heading: "Stats",
    Lessons: "Cumulative Density Functions"
   },
   {
    heading: "Stats",
    Lessons: "Examples of Normal Distribution"
   },
   {
    heading: "Stats",
    Lessons: "Bernoulli Distribution"
   },
   {
    heading: "Stats",
    Lessons: "Uniform Distribution"
   },
   {
    heading: "Stats",
    Lessons: "Z-Statistics and Applications"
   },
   {
    heading: "Stats",
    Lessons: "Central Limit Theorem"
   },
   {
    heading: "Stats",
    Lessons: "Statistical Estimation Techniques"
   },
   {
    heading: "Stats",
    Lessons: "Introduction to Hypotheses"
   },
   {
    heading: "Stats",
    Lessons: "Mechanisms of Hypothesis Testing"
   },
   {
    heading: "Stats",
    Lessons: "Understanding P-Value"
   },
   {
    heading: "Stats",
    Lessons: "T-Statistics and its Importance"
   },
   {
    heading: "Stats",
    Lessons: "Student’s T-Distribution"
   },
   {
    heading: "Stats",
    Lessons: "Comparison: T-Statistics vs. Z-Statistics"
   },
   {
    heading: "Stats",
    Lessons: "Guidelines for Using T-Tests vs. Z-Tests"
   },
   {
    heading: "Stats",
    Lessons: "Type I and Type II Errors in Hypothesis Testing"
   },
   {
    heading: "Stats",
    Lessons: "Bayes’ Theorem and Bayesian Statistics"
   },
   {
    heading: "Stats",
    Lessons: "Confidence Intervals (CI)"
   },
   {
    heading: "Stats",
    Lessons: "Confidence Intervals vs. Margin of Error"
   },
   {
    heading: "Stats",
    Lessons: "Interpreting Confidence Levels and Intervals"
   },
   {
    heading: "Stats",
    Lessons: "Chi-Square Test"
   },
   {
    heading: "Stats",
    Lessons: "Chi-Square Distribution in Python"
   },
   {
    heading: "Stats",
    Lessons: "Chi-Square Goodness of Fit Test"
   },
   
   {
    heading: "Feature Engineering",
    Lessons: "Addressing Imbalanced Data"
   },
   {
    heading: "Feature Engineering",
    Lessons: "Managing Missing Data"
   },
   {
    heading: "Feature Engineering",
    Lessons: "Up-Sampling Techniques"
   },
   {
    heading: "Feature Engineering",
    Lessons: "Data Interpolation Methods"
   },
   {
    heading: "Feature Engineering",
    Lessons: "Identifying and Handling Outliers"
   },
   {
    heading: "Feature Engineering",
    Lessons: "Filter Methods for Feature Selection"
   },
   {
    heading: "Feature Engineering",
    Lessons: "Wrapper Methods for Feature Selection"
   },
   {
    heading: "Feature Engineering",
    Lessons: "Embedded Methods for Feature Selection"
   },
   {
    heading: "Feature Engineering",
    Lessons: "Applying Feature Scaling"
   },
   {
    heading: "Feature Engineering",
    Lessons: "Principal Component Analysis (PCA)"
   },
   {
    heading: "Feature Engineering",
    Lessons: "Data Encoding Techniques"
   },
   {
    heading: "Feature Engineering",
    Lessons: "Nominal Encoding"
   },
   {
    heading: "Feature Engineering",
    Lessons: "One-Hot Encoding"
   },
   {
    heading: "Feature Engineering",
    Lessons: "One-Hot Encoding for Multiple Categories"
   },
   {
    heading: "Feature Engineering",
    Lessons: "Mean Encoding"
   },
   {
    heading: "Feature Engineering",
    Lessons: "Ordinal Encoding"
   },
   {
    heading: "Feature Engineering",
    Lessons: "Label Encoding"
   },
   {
    heading: "Feature Engineering",
    Lessons: "Target-Guided Ordinal Encoding"
   },
   {
    heading: "Feature Engineering",
    Lessons: "Understanding Covariance"
   },
   {
    heading: "Feature Engineering",
    Lessons: "Correlation Analysis"
   },
   {
    heading: "Feature Engineering",
    Lessons: "Pearson Correlation Coefficient"
   },
   {
    heading: "Feature Engineering",
    Lessons: "Spearman’s Rank Correlation"
   },
   {
    heading: "Feature Engineering",
    Lessons: "Assessing Variance Inflation Factor (VIF)"
   },
   {
    heading: "Feature Engineering",
    Lessons: "Feature Selection Techniques"
   },
   {
    heading: "Feature Engineering",
    Lessons: "Recursive Feature Elimination (RFE)"
   },
   {
    heading: "Feature Engineering",
    Lessons: "Backward Elimination"
   },
   {
    heading: "Feature Engineering",
    Lessons: "Forward Elimination"
   },
   
   {
    heading: " EDA",
    Lessons: "Analyzing TMDb 5000 Movies Dataset"
   },
   {
    heading: " EDA",
    Lessons: "Analyzing Boston Housing Dataset"
   },
   {
    heading: " EDA",
    Lessons: "Exploring Haberman’s Survival Dataset"
   },
   
   {
    heading: "Machine Learning",
    Lessons: "Analyzing IPL Trends."
   },
   {
    heading: "Machine Learning",
    Lessons: "Analyzing social media Sentiment."
   },
   {
    heading: "Machine Learning",
    Lessons: "Customer Segmentation And Effective Cross Selling."
   },
   {
    heading: "Machine Learning",
    Lessons: "Forecasting Stock And Commodity Prices"
   },
   {
    heading: "Machine Learning",
    Lessons: "AI Vs ML Vs DL Vs DS"
   },
   {
    heading: "Machine Learning",
    Lessons: "Types Of ML Technqiues"
   },
   {
    heading: "Machine Learning",
    Lessons: "Supervised vs unsupervised and semi supervised and reinforcement learning"
   },
   {
    heading: "Machine Learning",
    Lessons: "Simple Linear Regression with implementation"
   },
   {
    heading: "Machine Learning",
    Lessons: "Multiple Linear Regression with implementation"
   },
   {
    heading: "Machine Learning",
    Lessons: "MSE,MAE,RMSE"
   },
   {
    heading: "Machine Learning",
    Lessons: "Performance Metrics- Rsquare and Adjusted R squared"
   },
   {
    heading: "Machine Learning",
    Lessons: "Linear Regression With OLS with implementation"
   },
   {
    heading: "Machine Learning",
    Lessons: "Polynomial Regression with implementation"
   },
   {
    heading: "Machine Learning",
    Lessons: "Ridge,Lasso,Elasticnet with implementation"
   },
   {
    heading: "Machine Learning",
    Lessons: "Logistic Regression with implementation"
   },
   {
    heading: "Machine Learning",
    Lessons: "Performance Metrics- Confusion Matrix,accuracy,Precision,Recall,F Beta Score,ROC-AUC  Curve"
   },
   {
    heading: "Machine Learning",
    Lessons: "Logistic Regression OVR"
   },
   {
    heading: "Machine Learning",
    Lessons: "Support Vector Machines Classifiers  with implementation"
   },
   {
    heading: "Machine Learning",
    Lessons: "Support Vector Machines Regressor with implementation"
   },
   {
    heading: "Machine Learning",
    Lessons: "Support Vector Kernels with implementation"
   },
   {
    heading: "Machine Learning",
    Lessons: "Bayes Theorem And Naive Bayes Classifier with implementation"
   },
   {
    heading: "Machine Learning",
    Lessons: "Knn Classifier with implementation"
   },
   {
    heading: "Machine Learning",
    Lessons: "Knn Regressor with implementation"
   },
   {
    heading: "Machine Learning",
    Lessons: "Brute Force Knn,K-Dimension Tree,Ball Tree"
   },
   {
    heading: "Machine Learning",
    Lessons: "Decision Tree Classifier  with implementation"
   },
   {
    heading: "Machine Learning",
    Lessons: "Decision Tree Classifier  with implementation"
   },
   {
    heading: "Machine Learning",
    Lessons: "Bagging And Boosting with implementation"
   },
   {
    heading: "Machine Learning",
    Lessons: "Random Forest Classifier with implementation"
   },
   {
    heading: "Machine Learning",
    Lessons: "Ranfom Forest Regressor with implementation"
   },
   {
    heading: "Machine Learning",
    Lessons: "Out Of Bag Evaluation"
   },
   {
    heading: "Machine Learning",
    Lessons: "Adaboost Classifier with implementation"
   },
   {
    heading: "Machine Learning",
    Lessons: "Adaboost Regressor with implementation"
   },
   {
    heading: "Machine Learning",
    Lessons: "Gradient Boost Classifier with implementation"
   },
   {
    heading: "Machine Learning",
    Lessons: "Gradient Boost Regression with implementation"
   },
   {
    heading: "Machine Learning",
    Lessons: "Xgboost Classifier  with implementation"
   },
   {
    heading: "Machine Learning",
    Lessons: "Xgboost Regressor with implementation"
   },
   
   {
    heading: "Unsupervised ML",
    Lessons: "Introduction To Unsupervised ML"
   },
   {
    heading: "Unsupervised ML",
    Lessons: "KMeans Clutering "
   },
   {
    heading: "Unsupervised ML",
    Lessons: "Hierarichal Clustering"
   },
   {
    heading: "Unsupervised ML",
    Lessons: "DBSCan Clustering"
   },
   {
    heading: "Unsupervised ML",
    Lessons: "Silhouette Coefficient"
   },
   {
    heading: "Unsupervised ML",
    Lessons: "Davies-Bouldin Index"
   },
   {
    heading: "Unsupervised ML",
    Lessons: "Contingency Matrix"
   },
   {
    heading: "Unsupervised ML",
    Lessons: "Pair Confusion Matrix"
   },
   {
    heading: "Unsupervised ML",
    Lessons: "Extrinsic Measure"
   },
   {
    heading: "Unsupervised ML",
    Lessons: "Intrinsic Measure"
   },
   
   {
    heading: "Time Series",
    Lessons: "Arima"
   },
   {
    heading: "Time Series",
    Lessons: "Acf And Pacf"
   },
   {
    heading: "Time Series",
    Lessons: "Time-Dependent Seasonal Components."
   },
   
   {
    heading: "NLP for Machine Learning",
    Lessons: "Roadmap To Learn NLP For ML"
   },
   {
    heading: "NLP for Machine Learning",
    Lessons: "Practical USecases Of NLP"
   },
   {
    heading: "NLP for Machine Learning",
    Lessons: "Tokenization And Basic Terminology"
   },
   {
    heading: "NLP for Machine Learning",
    Lessons: "Text Preprocessing- Stemming And Lemmatization And Stopwords"
   },
   {
    heading: "NLP for Machine Learning",
    Lessons: "Parts Of Speech Tagging Using NLTK"
   },
   {
    heading: "NLP for Machine Learning",
    Lessons: "Named Entity Recognition"
   },
   {
    heading: "NLP for Machine Learning",
    Lessons: "One Hot Encoding"
   },
   {
    heading: "NLP for Machine Learning",
    Lessons: "Bag Of Words"
   },
   {
    heading: "NLP for Machine Learning",
    Lessons: "N Gram BOW"
   },
   {
    heading: "NLP for Machine Learning",
    Lessons: "Tf-Idf Intuition"
   },
   {
    heading: "NLP for Machine Learning",
    Lessons: "Word Embeddings"
   },
   {
    heading: "NLP for Machine Learning",
    Lessons: "Word2vec"
   },
   
   {
    heading: "Machine Learning Projects",
    Lessons: ""
   },
   
   {
    heading: "Deep Learning",
    Lessons: "Introduction"
   },
   {
    heading: "Deep Learning",
    Lessons: "Why Deep Learning Is Becoming Popular"
   },
   {
    heading: "Deep Learning",
    Lessons: "Perceptron Intuition"
   },
   {
    heading: "Deep Learning",
    Lessons: "Artifical Neural Network Working"
   },
   {
    heading: "Deep Learning",
    Lessons: "Back Propogation In ANN"
   },
   {
    heading: "Deep Learning",
    Lessons: "Chain Rule Of Derivatives"
   },
   {
    heading: "Deep Learning",
    Lessons: "Vanishing Gradient Problem"
   },
   {
    heading: "Deep Learning",
    Lessons: "Exploding Gradint Problem"
   },
   {
    heading: "Deep Learning",
    Lessons: "Different Activation functions"
   },
   {
    heading: "Deep Learning",
    Lessons: "Different types of  Loss Function"
   },
   {
    heading: "Deep Learning",
    Lessons: "Different types Of Optimizers"
   },
   {
    heading: "Deep Learning",
    Lessons: "Weight Initialization Technqiues"
   },
   {
    heading: "Deep Learning",
    Lessons: "Drop Out Layer"
   },
   {
    heading: "Deep Learning",
    Lessons: "Batch Normalization"
   },
   {
    heading: "Deep Learning",
    Lessons: "Visualization Of Neural Network"
   },
   {
    heading: "Deep Learning",
    Lessons: "Colab Pro Setup"
   },
   {
    heading: "Deep Learning",
    Lessons: "TensorFlow Installation 2.0 ."
   },
   {
    heading: "Deep Learning",
    Lessons: "TensorFlow 2.0 Neural Network Creation."
   },
   {
    heading: "Deep Learning",
    Lessons: "Netron"
   },
   {
    heading: "Deep Learning",
    Lessons: "Pytorch Installation."
   },
   {
    heading: "Deep Learning",
    Lessons: "Pytorch Neural Network Creation."
   },
   {
    heading: "Deep Learning",
    Lessons: "Cnn Fundamentals"
   },
   {
    heading: "Deep Learning",
    Lessons: "Cnn Explained In Detail - Cnnexplainer, Tensor space"
   },
   {
    heading: "Deep Learning",
    Lessons: "Various Cnn Based Architecture"
   },
   {
    heading: "Deep Learning",
    Lessons: "Training Cnn From Scratch"
   },
   {
    heading: "Deep Learning",
    Lessons: "Building Webapps For Cnn"
   },
   {
    heading: "Deep Learning",
    Lessons: "Various Cnn Architecture With Research Paper And Mathematics"
   },
   
   {
    heading: "Object Detection Models and Implementations",
    Lessons: "Faster R-CNN Overview"
   },
   {
    heading: "Object Detection Models and Implementations",
    Lessons: "Evolution and History of YOLO"
   },
   {
    heading: "Object Detection Models and Implementations",
    Lessons: "Introduction to YOLO v8"
   },
   {
    heading: "Object Detection Models and Implementations",
    Lessons: "Installing YOLO v8"
   },
   {
    heading: "Object Detection Models and Implementations",
    Lessons: "Data Annotation and Preparation for YOLO"
   },
   {
    heading: "Object Detection Models and Implementations",
    Lessons: "Data Download and Path Configuration for YOLO"
   },
   {
    heading: "Object Detection Models and Implementations",
    Lessons: "Downloading and Configuring Pretrained Weights for YOLO"
   },
   {
    heading: "Object Detection Models and Implementations",
    Lessons: "Beginning YOLO Model Training"
   },
   {
    heading: "Object Detection Models and Implementations",
    Lessons: "YOLO v8 Evaluation Curves"
   },
   {
    heading: "Object Detection Models and Implementations",
    Lessons: "Introduction to Detectron2"
   },
   {
    heading: "Object Detection Models and Implementations",
    Lessons: "Installing Detectron2"
   },
   {
    heading: "Object Detection Models and Implementations",
    Lessons: "Data Annotation and Preparation for Detectron2"
   },
   {
    heading: "Object Detection Models and Implementations",
    Lessons: "Data Download and Path Configuration for Detectron2"
   },
   {
    heading: "Object Detection Models and Implementations",
    Lessons: "Downloading and Configuring Pretrained Weights for Detectron2"
   },
   {
    heading: "Object Detection Models and Implementations",
    Lessons: "Starting Detectron2 Model Training"
   },
   {
    heading: "Object Detection Models and Implementations",
    Lessons: "Detectron2 Evaluation Curves"
   },
   {
    heading: "Object Detection Models and Implementations",
    Lessons: "Inferencing with Trained Detectron2 Model"
   },
   {
    heading: "Object Detection Models and Implementations",
    Lessons: "Introduction to TFOD2 (TensorFlow Object Detection API)"
   },
   {
    heading: "Object Detection Models and Implementations",
    Lessons: "Installing TFOD2"
   },
   {
    heading: "Object Detection Models and Implementations",
    Lessons: "Data Annotation and Preparation for TFOD2"
   },
   {
    heading: "Object Detection Models and Implementations",
    Lessons: "Data Download and Path Configuration for TFOD2"
   },
   {
    heading: "Object Detection Models and Implementations",
    Lessons: "Downloading and Configuring Pretrained Weights for TFOD2"
   },
   {
    heading: "Object Detection Models and Implementations",
    Lessons: "TFOD2 Evaluation Curves"
   },
   {
    heading: "Object Detection Models and Implementations",
    Lessons: "Inferencing with Trained TFOD2 Model"
   },
   
   {
    heading: "Deep Learning-NLP",
    Lessons: "Recurrent Neural Networks."
   },
   {
    heading: "Deep Learning-NLP",
    Lessons: "Long Short Term Memory (Lstm)"
   },
   {
    heading: "Deep Learning-NLP",
    Lessons: "Bi Lstm"
   },
   {
    heading: "Deep Learning-NLP",
    Lessons: "Stacked Lstm"
   },
   {
    heading: "Deep Learning-NLP",
    Lessons: "Gru Implementation"
   },
   {
    heading: "Deep Learning-NLP",
    Lessons: "Seq 2 Seq."
   },
   {
    heading: "Deep Learning-NLP",
    Lessons: "Encoders And Decoders"
   },
   {
    heading: "Deep Learning-NLP",
    Lessons: "Attention Mechanism"
   },
   {
    heading: "Deep Learning-NLP",
    Lessons: "Attention Neural Networks"
   },
   {
    heading: "Deep Learning-NLP",
    Lessons: "Self-Attention"
   },
   {
    heading: "Deep Learning-NLP",
    Lessons: "Introduction To Transformers"
   },
   {
    heading: "Deep Learning-NLP",
    Lessons: "Bert Model"
   },
   {
    heading: "Deep Learning-NLP",
    Lessons: "Gpt2 Model"
   },
   
   {
    heading: "Deep learning Projects",
     Lessons: ""
   },
   
   {
    heading: "Nlp Introduction",
    Lessons: "Overview Computational Linguistic."
   },
   {
    heading: "Nlp Introduction",
    Lessons: "History Of Nlp."
   },
   {
    heading: "Nlp Introduction",
    Lessons: "Why Nlp"
   },
   {
    heading: "Nlp Introduction",
    Lessons: "Use Of Nlp"
   },
   
   {
    heading: "NLP Text processing ",
    Lessons: "Introduction to Regular Expressions (Regex)"
   },
   {
    heading: "NLP Text processing ",
    Lessons: "Techniques for Text Normalization"
   },
   {
    heading: "NLP Text processing ",
    Lessons: "Implementing Word Count"
   },
   {
    heading: "NLP Text processing ",
    Lessons: "Understanding Frequency Distributions"
   },
   {
    heading: "NLP Text processing ",
    Lessons: "String Tokenization Methods"
   },
   {
    heading: "NLP Text processing ",
    Lessons: "Creating Annotators"
   },
   {
    heading: "NLP Text processing ",
    Lessons: "Advanced Sentence Processing Techniques"
   },
   
   {
    heading: "Networks & Libraries (NLP)",
    Lessons: "Introduction to NLTK"
   },
   {
    heading: "Networks & Libraries (NLP)",
    Lessons: "Exploring TextBlob"
   },
   {
    heading: "Networks & Libraries (NLP)",
    Lessons: "Understanding Recurrent Neural Networks (RNNs)"
   },
   {
    heading: "Networks & Libraries (NLP)",
    Lessons: "Deep Dive into Long Short-Term Memory (LSTM)"
   },
   {
    heading: "Networks & Libraries (NLP)",
    Lessons: "Bidirectional LSTM (Bi-LSTM) Techniques"
   },
   {
    heading: "Networks & Libraries (NLP)",
    Lessons: "Implementing Stacked LSTM"
   },
   {
    heading: "Networks & Libraries (NLP)",
    Lessons: "GRU Implementation"
   },
   
   {
    heading: "Advanced Neural Networks and NLP Models",
    Lessons: "Sequence-to-Sequence (Seq2Seq) Models"
   },
   {
    heading: "Advanced Neural Networks and NLP Models",
    Lessons: "Encoders and Decoders Architecture"
   },
   {
    heading: "Advanced Neural Networks and NLP Models",
    Lessons: "The Attention Mechanism"
   },
   {
    heading: "Advanced Neural Networks and NLP Models",
    Lessons: "Self-Attention Concepts"
   },
   {
    heading: "Advanced Neural Networks and NLP Models",
    Lessons: "Overview of Transformer Models"
   },
   {
    heading: "Advanced Neural Networks and NLP Models",
    Lessons: "Introduction to the BERT Model"
   },
   {
    heading: "Advanced Neural Networks and NLP Models",
    Lessons: "Exploring the GPT-2 Model"
   },
   
   {
    heading: "NLP Projects",
    Lessons: ""
   }
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
              <div className="md:h-95 space-y-3 overflow-y-auto pr-2 flex gap-2 md:flex-wrap h-auto"
                style={{
                    scrollbarWidth: "thin",
                    scrollbarColor: "#EFD4CB #1a1a1a",
                }}>
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
                    <h6 className="text-[13px] font-semibold md:leading-6 leading-5 text-white md:text-[16px]">
                      {module.title}
                    </h6>
                  </button>
                ))}
              </div>
            </div>
            <div className="h-95 rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(10,10,14,0.96)_0%,rgba(6,6,8,0.98)_100%)] p-4 sm:p-5"
             style={{
                    scrollbarWidth: "thin",
                    scrollbarColor: "#EFD4CB #1a1a1a",
                }}>
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
