import React from 'react';
import Pdf from '../models/Pdf';
import NavCode from '../models/NavCode';
import p_1 from "../assets/1. Intro.pdf";
import p_2 from "../assets/2. Time complexity and Big O notation.pdf";
import p_3 from "../assets/3. Asymptotic Notations.pdf";
import p_4 from "../assets/4. Best case Worst case Expected case.pdf";
import p_5 from "../assets/5. Techniques to calc complexity.pdf";
import p_6 from "../assets/6. Abstract Data Type and Arrays.pdf";
import p_9 from "../assets/9. Operations on an Array.pdf";
import p_12 from "../assets/12. Linear vs Binary Search.pdf";
import p_13 from "../assets/13. Introduction to Linked List.pdf";
import p_15 from "../assets/15. Insertion in a Linked List.pdf";
import p_17 from "../assets/17. Deletion in a Linked list.pdf";
import p_19 from "../assets/19. Circular Linked list.pdf";
import p_21 from "../assets/21. Doubly Linked list.pdf";
import p_22 from "../assets/22. Introduction to Stack data structure.pdf";
import p_23 from "../assets/23. Implementing Stack using Array.pdf";
import p_25 from "../assets/25. Push() and Pop().pdf";
import p_27 from "../assets/27. Peek Operation.pdf";
import p_28 from "../assets/28. Stack top and Stack bottom.pdf";
import p_29 from "../assets/29. Stack using Linked list.pdf";
import p_32 from "../assets/32. Parenthesis matching problem using Stack data structure.pdf";
import p_34 from "../assets/34. Multi parenthesis matching.pdf";
import p_35 from "../assets/35. Infix Prefix and Postfix.pdf";
import p_36 from "../assets/36. Infix to Postfix using stack.pdf";
import p_38 from "../assets/38. Queue Data structure.pdf";
import p_39 from "../assets/39. Array implementation of queue.pdf";
import p_42 from "../assets/42. Circular Queue.pdf";
import p_43 from "../assets/43. Enqueue and Dequeue in Circular queue.pdf";
import p_45 from "../assets/45. Enqueue in a queue Linked list.pdf";
import p_47 from "../assets/47. Double Ended Queue.pdf";
import p_48 from "../assets/48. Introduction to Sorting Algorithm.pdf";
import p_49 from "../assets/49. Criteria for Analysis of Sorting Algorithm.pdf";
import p_50 from "../assets/50. Bubble Sort Algorithm.pdf";
import p_52 from "../assets/52. Insertion Sort Algorithm.pdf";
import p_54 from "../assets/54. Selection Sort Algorithm.pdf";
import p_56 from "../assets/56. Quick Sort Algorithm.pdf";
import p_57 from "../assets/57. Quicksort Analysis.pdf";
import p_58 from "../assets/58. Merge Sort Algorithm.pdf";
import p_60 from "../assets/60. Count Sort Algorithm.pdf";
import p_61 from "../assets/61. Introduction to trees.pdf";
import p_62 from "../assets/62. Few additional points.pdf";
import p_63 from "../assets/63. Types of Binary trees.pdf";
import p_64 from "../assets/64. Representing of a Binary Tree.pdf";
import p_66 from "../assets/66. Traversal in a Binary Tree.pdf";
import p_70 from "../assets/70. Trick to find preorder postorder and inorder traversal.pdf";
import p_71 from "../assets/71. Binary Search Tree (BST).pdf";
import p_73 from "../assets/73. Searching in a Binary search tree (BST).pdf";
import p_77 from "../assets/77. Deletion in Binary search tree (BST).pdf";
import p_79 from "../assets/79. AVL Trees.pdf";
import p_80 from "../assets/80. Insertion and Rotation in AVL Trees.pdf";
import p_81 from "../assets/81. LL RR LR RL rotations.pdf";
import p_83 from "../assets/83. Introduction to Graphs.pdf";
import p_84 from "../assets/84. Representation of Graphs.pdf";
import p_85 from "../assets/85. Graph Traversal and Graph Traversal Algorithm.pdf";
import p_86 from "../assets/86. Breadth First Search (BFS).pdf";
import p_88 from "../assets/88. Depth First Search (DFS).pdf";
import p_90 from "../assets/90. Spanning Trees.pdf";
import p_91 from "../assets/91. Calculating Spanning tree Cost and Maximum Spanning Tree.pdf";
import p_92 from "../assets/92. Prims Algorithm.pdf";

const Notes = ({mode}) => {
  return (
    <>
      <h4 className={`mx-4 text-${mode === "dark" ? "secondary" : "dark"}`} style={{marginTop: "6rem", textDecoration: "underline"}}>Download Notes</h4>
      <div className={`d-flex flex-column mx-4 list-group`}>
        <Pdf pdf={p_1} mode={mode} topic="1. Intro" />
        <Pdf pdf={p_2} mode={mode} topic="2. Time complexity and Big O notation" />
        <Pdf pdf={p_3} mode={mode} topic="3. Asymptotic Notations" />
        <Pdf pdf={p_4} mode={mode} topic="4. Best case Worst case Expected case" />
        <Pdf pdf={p_5} mode={mode} topic="5. Techniques to calc complexity" />
        <Pdf pdf={p_6} mode={mode} topic="6. Abstract Data Type and Arrays" />
        <Pdf mode={mode} topic="7. NO NOTES" />
        <NavCode mode={mode} c_topic="8. Array ADT (CODE)" />
        <Pdf mode={mode} pdf={p_9} topic="9. Operations on an Array" />
        <NavCode mode={mode} c_topic="10. Insertion (CODE)" />
        <NavCode mode={mode} c_topic="11. Deletion (CODE)" />
        <Pdf mode={mode} pdf={p_12} topic="12. Linear vs Binary Search" />
        <Pdf mode={mode} pdf={p_13} topic="13. Introduction to Linked List" />
        <NavCode mode={mode} c_topic="14. Linked List (CODE)" />
        <Pdf mode={mode} pdf={p_15} topic="15. Insertion in a Linked List" />
        <NavCode mode={mode} c_topic="16. Linked List Insertion (CODE)" />
        <Pdf mode={mode} pdf={p_17} topic="17. Deletion in a Linked list" />
        <NavCode mode={mode} c_topic="18. Linked List Deletion (CODE)" />
        <Pdf mode={mode} pdf={p_19} topic="19. Circular Linked list" />
        <NavCode mode={mode} c_topic="20. Circular Linked list Traversal (CODE)" />
        <Pdf mode={mode} pdf={p_21} topic="21. Doubly Linked list" />
        <NavCode mode={mode} c_topic="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Doubly Linked list (CODE)" />
        <Pdf mode={mode} pdf={p_22} topic="22. Introduction to Stack data structure" />
        <Pdf mode={mode} pdf={p_23} topic="23. Implementing Stack using Array" />
        <NavCode mode={mode} c_topic="24. Stack using Array (CODE)" />
        <Pdf mode={mode} pdf={p_25} topic="25. Push() and Pop()" />
        <NavCode mode={mode} c_topic="26. Stack Operations (CODE)" />
        <Pdf mode={mode} pdf={p_27} topic="27. Peek Operation" />
        <NavCode mode={mode} c_topic="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Stack Peek (CODE)" />
        <Pdf mode={mode} pdf={p_28} topic="28. Stack top and Stack bottom" />
        <Pdf mode={mode} pdf={p_29} topic="29. Stack using Linked list" />
        <NavCode mode={mode} c_topic="30. Stack Linked list (CODE)" />
        <NavCode mode={mode} c_topic="31. Stack Linked list Operations (CODE)" />
        <Pdf mode={mode} pdf={p_32} topic="32. Parenthesis matching problem using Stack data structure" />
        <NavCode mode={mode} c_topic="33. Parenthesis Matching (CODE)" />
        <Pdf mode={mode} pdf={p_34} topic="34. Multi parenthesis matching" />
        <NavCode mode={mode} c_topic="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Multi parenthesis Matching (CODE)" />
        <Pdf mode={mode} pdf={p_35} topic="35. Infix Prefix and Postfix" />
        <Pdf mode={mode} pdf={p_36} topic="36. Infix to Postfix using stack" />
        <NavCode mode={mode} c_topic="37. Infix to Postfix (CODE)" />
        <Pdf mode={mode} pdf={p_38} topic="38. Queue Data structure" />
        <Pdf mode={mode} pdf={p_39} topic="39. Array implementation of queue" />
        <Pdf mode={mode} topic="40. NO NOTES" />
        <NavCode mode={mode} c_topic="41. Queue Using Array (CODE)" />
        <Pdf mode={mode} pdf={p_42} topic="42. Circular Queue" />
        <Pdf mode={mode} pdf={p_43} topic="43. Enqueue and Dequeue in Circular queue" />
        <NavCode mode={mode} c_topic="44. Circular Queue (CODE)" />
        <Pdf mode={mode} pdf={p_45} topic="45. Enqueue in a queue Linked list" />
        <NavCode mode={mode} c_topic="46. Queue Linked list (CODE)" />
        <Pdf mode={mode} pdf={p_47} topic="47. Double Ended Queue" />
        <Pdf mode={mode} pdf={p_48} topic="48. Introduction to Sorting Algorithm" />
        <Pdf mode={mode} pdf={p_49} topic="49. Criteria for Analysis of Sorting Algorithm" />
        <Pdf mode={mode} pdf={p_50} topic="50. Bubble Sort Algorithm" />
        <NavCode mode={mode} c_topic="51. Bubble Sort (CODE)" />
        <Pdf mode={mode} pdf={p_52} topic="52. Insertion Sort Algorithm" />
        <NavCode mode={mode} c_topic="53. Insertion Sort (CODE)" />
        <Pdf mode={mode} pdf={p_54} topic="54. Selection Sort Algorithm" />
        <NavCode mode={mode} c_topic="55. Selection Sort (CODE)" />
        <Pdf mode={mode} pdf={p_56} topic="56. Quick Sort Algorithm" />
        <NavCode mode={mode} c_topic="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Quick Sort (CODE)" />
        <Pdf mode={mode} pdf={p_57} topic="57. Quicksort Analysis" />
        <Pdf mode={mode} pdf={p_58} topic="58. Merge Sort Algorithm" />
        <NavCode mode={mode} c_topic="59. Merge Sort (CODE)" />
        <Pdf mode={mode} pdf={p_60} topic="60. Count Sort Algorithm" />
        <NavCode mode={mode} c_topic="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Count Sort (CODE)" />
        <Pdf mode={mode} pdf={p_61} topic="61. Introduction to trees" />
        <Pdf mode={mode} pdf={p_62} topic="62. Few additional points" />
        <Pdf mode={mode} pdf={p_63} topic="63. Types of Binary trees" />
        <Pdf mode={mode} pdf={p_64} topic="64. Representing of a Binary Tree" />
        <NavCode mode={mode} c_topic="65. Linked Representation of Binary Tree (CODE)" />
        <Pdf mode={mode} pdf={p_66} topic="66. Traversal in a Binary Tree" />
        <NavCode mode={mode} c_topic="67. Preorder Traversal (CODE)" />
        <NavCode mode={mode} c_topic="68. Postorder Traversal (CODE)" />
        <NavCode mode={mode} c_topic="69. Inorder Traversal (CODE)" />
        <Pdf mode={mode} pdf={p_70} topic="70. Trick to find preorder postorder and inorder traversal" />
        <Pdf mode={mode} pdf={p_71} topic="71. Binary Search Tree (BST)" />
        <NavCode mode={mode} c_topic="72. Binary Search Tree (CODE)" />
        <Pdf mode={mode} pdf={p_73} topic="73. Searching in a Binary search tree (BST)" />
        <NavCode mode={mode} c_topic="74. Recursive Search in Binary Search Tree (CODE)" />
        <NavCode mode={mode} c_topic="75. Iterative Search in Binary Search Tree (CODE)" />
        <NavCode mode={mode} c_topic="76. Insertion in Binary Search Tree (CODE)" />
        <Pdf mode={mode} pdf={p_77} topic="77. Deletion in Binary search tree (BST)" />
        <NavCode mode={mode} c_topic="78. Deletion in Binary Search Tree (CODE)" />
        <Pdf mode={mode} pdf={p_79} topic="79. AVL Trees" />
        <Pdf mode={mode} pdf={p_80} topic="80. Insertion and Rotation in AVL Trees" />
        <Pdf mode={mode} pdf={p_81} topic="81. LL RR LR RL rotations" />
        <NavCode mode={mode} c_topic="82. AVL Tree Insertion and Rotation (LL, RR, LR and RL Rotation) (CODE)" />
        <Pdf mode={mode} pdf={p_83} topic="83. Introduction to Graphs" />
        <Pdf mode={mode} pdf={p_84} topic="84. Representation of Graphs" />
        <Pdf mode={mode} pdf={p_85} topic="85. Graph Traversal and Graph Traversal Algorithm" />
        <Pdf mode={mode} pdf={p_86} topic="86. Breadth First Search (BFS)" />
        <NavCode mode={mode} c_topic="87. Binary First Search (BFS) (CODE)" />
        <Pdf mode={mode} pdf={p_88} topic="88. Depth First Search (DFS)" />
        <NavCode mode={mode} c_topic="89. Depth First Search (CODE)" />
        <Pdf mode={mode} pdf={p_90} topic="90. Spanning Trees" />
        <Pdf mode={mode} pdf={p_91} topic="91. Calculating Spanning tree Cost and Maximum Spanning Tree" />
        <Pdf mode={mode} pdf={p_92} topic="92. Prims Algorithm" />

      </div>
    </>
  )
}

export default Notes