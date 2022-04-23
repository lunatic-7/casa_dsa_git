import React, { useState, useEffect } from 'react'
import Content from '../models/Content'
import Spinner from './Spinner'

const Code = ({ mode }) => {

    const code1 = `
    #include <stdio.h>
    #include <stdlib.h>
    
    struct myArray
    {
        int total_size;
        int used_size;
        int *ptr;
    };
    
    void createArray(struct myArray *a, int tSize, int uSize)
    {
        // (*a).total_size = tSize;
        // (*a).used_size = uSize;
        // (*a).ptr = (int *)malloc(tSize * sizeof(int));
        
        // Short-cut of writing above code: 
        a->total_size = tSize;
        a->used_size = uSize;
        a->ptr = (int *)malloc(tSize * sizeof(int));  // Reserving memory.
    }
    
    void setValue(struct myArray *a)
    {
        int n;
        for (int i = 0; i < a->used_size; i++)  //  Using necessary memory and setting value from reserved memory.
        {
            printf("Enter the value of Element %d: ", i);
            scanf("%d", &n);
            (a->ptr)[i] = n;
        }
        
    }
    
    void show(struct myArray *a)
    {
        for (int i = 0; i < a->used_size; i++)
        {
            printf("%d\\n", (a->ptr)[i]);
        }
        
    }
    
    
    int main()
    {
        struct myArray marks;
        createArray(&marks, 10, 7);
        printf("We are running setValue now: \\n");
        setValue(&marks);
    
        printf("We are running show now: \\n");
        show(&marks);
        
        return 0;
    }`

    const code2 = `
    #include <stdio.h>

    void display(int arr[], int n)
    {
        //code for Traversal
        for (int i = 0; i < n; i++)
        {
            printf("%d ", arr[i]);
        }
        printf("\\n");
        
    }
    
    int indInsertion(int arr[] , int size, int element, int capacity, int index)
    {
        // code for insertion
        if (size >= capacity)
        {
             return -1;
        }
        else
        {
            for (int i = size-1; i <= index ; i--)
            {
                arr[i+1] = arr[i];
            }
            arr[index] = element;
            return 1;
        }
        
    }
    
    int main()
    {
        int arr[100] = {12, 3, 233, 7, 43};
        int size = 5, element = 77, index = 3;
        display(arr, size);
    
        indInsertion(arr , size, element, 100, index);
        size += 1;
        display(arr, size);
    
        return 0;
    }`

    const code3 = `
    #include <stdio.h>

    void display(int arr[], int n)
    {
        //code for Traversal
        for (int i = 0; i < n; i++)
        {
            printf("%d ", arr[i]);
        }
        printf("\\n");
    }
    
    int indDeletion(int arr[], int size, int index)
    {
        // code for deletion
        for (int i = index; i < size - 1; i++)
        {
            arr[i] = arr[i + 1];
        }
    }
    
    int main()
    {
        int arr[100] = {12, 3, 233, 7, 43};
        int size = 5, index = 2;
        display(arr, size);
    
        indDeletion(arr, size, index);
        size -= 1;
        display(arr, size);
    
        return 0;
    }`

    const code4 = `
    #include <stdio.h>

    int linearSearch(int arr[], int size, int element)
    {
        for (int i = 0; i < size; i++)
        {
            if (arr[i] == element)
            {
                return i;
            }
            
        }
        return -1;
        
    }
    
    int binarySearch(int arr[], int size, int element)
    {
        int low, mid, high;
        low = 0;
        high = size - 1;
    
        // Start Searching...
        while (low <= high)
        {
            mid = (low + high)/2;
            if (arr[mid] == element)
            {
                return mid;
            }
            else if (arr[mid] < element)
            {
                low = mid + 1;
            }
            else
            {
                high = mid - 1;
            }
        }
        // Search Ends.
        
    }
    
    int main()
    {
        int arrL[] = {1,2,3,27,4,55,6,7,654}; // Unsorted array for linear search.
        int elementL = 7;
        int sizeL = sizeof(arrL)/ sizeof(int); // Trick to find array size, without manually counting.
        int searchIndexL = linearSearch(arrL, sizeL, elementL);
        printf("The element: %d is found at index: %d\\n\\n", elementL, searchIndexL);
        
        int arrB[] = {1,2,3,27,44,55,61,77,654,1023}; // Sorted array for binary search.
        int elementB = 77;
        int sizeB = sizeof(arrB)/ sizeof(int); // Trick to find array size, without manually counting.
        int searchIndexB = linearSearch(arrB, sizeB, elementB);
        printf("The element: %d is found at index: %d", elementB, searchIndexB);
    
        return 0;
    }`

    const code5 = `
    #include <stdio.h>
    #include <stdlib.h>
    
    struct Node
    {
        int data;
        struct Node *next;
    };
    
    // Traversing linked list.
    
    void linkedListTraversal(struct Node *ptr)
    {
        while (ptr != NULL)
        {
            printf("%d ", ptr->data);
            ptr = ptr->next;
        }
        
    }
    
    int main()
    {
        struct Node *head;
        struct Node *second;
        struct Node *third;
        struct Node *fourth;
    
        // Allocating memory for the nodes in linked list in heap.
        head = (struct Node *)malloc(sizeof(struct Node));
        second = (struct Node *)malloc(sizeof(struct Node));
        third = (struct Node *)malloc(sizeof(struct Node));
        fourth = (struct Node *)malloc(sizeof(struct Node));
    
        // Link first and second nodes.
        head -> data = 7;
        head -> next = second;
        
        // Link second and third nodes.
        second -> data = 12;
        second -> next = third;
        
        // Link third and fourth nodes.
        third -> data = 70;
        third -> next = fourth;
        
        // Terminate the list at the fourth node.
        fourth -> data = 159;
        fourth -> next = NULL;
    
        linkedListTraversal(head);
        return 0;
    }`

    const code6 = `
    #include <stdio.h>
    #include <stdlib.h>
    
    struct Node
    {
        int data;
        struct Node *next;
    };
    
    // Traversing linked list.
    
    void linkedListTraversal(struct Node *ptr)
    {
        while (ptr != NULL)
        {
            printf("%d ", ptr->data);
            ptr = ptr->next;
        }
        
    }
    
    // Insert at the beginning
    struct Node *insertAtFirst(struct Node *head, int data)
    {
        struct Node *ptr = (struct Node *)malloc(sizeof(struct Node));
        ptr->data = data;
        
        ptr->next = head;
        return ptr;
    }
    
    // Insert at end
    struct Node *insertAtEnd(struct Node *head, int data)
    {
        struct Node *ptr = (struct Node *)malloc(sizeof(struct Node));
        ptr->data = data;
        
        struct Node *p = head;
        while (p->next !=NULL)
        {
            p = p->next;
        }
        
        p->next = ptr;
        ptr->next = NULL;
        return head;
    }
    
    // Insert after node
    struct Node *insertAfterNode(struct Node *head, struct Node *prevNode, int data)
    {
        struct Node *ptr = (struct Node *)malloc(sizeof(struct Node));
        ptr->data = data;
        
        ptr->next = prevNode->next;
        prevNode->next = ptr;
        return head;
    }
    
    // Insert in between
    struct Node *insertAtIndex(struct Node *head, int data, int index)
    {
        struct Node *ptr = (struct Node *)malloc(sizeof(struct Node));
        struct Node *p = head;
    
        int i = 0;
        while (i != index - 1)
        {
            p = p->next;
            i++;
        }
        ptr->data = data;
        ptr->next = p->next;
        p->next = ptr;
        return head;
    }
    
    
    
    int main()
    {
        struct Node *head;
        struct Node *second;
        struct Node *third;
        struct Node *fourth;
    
        // Allocating memory for the nodes in linked list in heap.
        head = (struct Node *)malloc(sizeof(struct Node));
        second = (struct Node *)malloc(sizeof(struct Node));
        third = (struct Node *)malloc(sizeof(struct Node));
        fourth = (struct Node *)malloc(sizeof(struct Node));
    
        // Link first and second nodes.
        head -> data = 7;
        head -> next = second;
        
        // Link second and third nodes.
        second -> data = 12;
        second -> next = third;
        
        // Link third and fourth nodes.
        third -> data = 70;
        third -> next = fourth;
        
        // Terminate the list at the fourth node.
        fourth -> data = 159;
        fourth -> next = NULL;
    
        linkedListTraversal(head);
        printf("\\n");
    
        head = insertAtFirst(head, 0);
        linkedListTraversal(head);
        printf("\\n");
    
        head = insertAtIndex(head, 670, 1);
        linkedListTraversal(head);
        printf("\\n");
    
        head = insertAtEnd(head, 89);
        linkedListTraversal(head);
        printf("\\n");
    
        head = insertAfterNode(head, second, 10);
        linkedListTraversal(head);
    
        return 0;
    }`

    const code7 = `
    #include <stdio.h>
    #include <stdlib.h>
    
    struct Node
    {
        int data;
        struct Node *next;
    };
    
    // Traversing linked list.
    
    void linkedListTraversal(struct Node *ptr)
    {
        while (ptr != NULL)
        {
            printf("%d ", ptr->data);
            ptr = ptr->next;
        }
        printf("\\n");
        
    }
    
    // Deleting the first Node.
    struct Node *deleteAtFirst(struct Node *head)
    {
        struct Node *p = head;
        head = head->next;
        free(p);
        
        return head;
    }
    
    // Deleting in between
    struct Node *deleteAtIndex(struct Node *head, int index)
    {
        struct Node *p = head;
        struct Node *q = head;
    
        int i = 0;
        int j = 0;
    
        while (i != index - 1)
        {
            p = p->next;
            i++;
        }
        
        while (j != index)
        {
            q = q->next;
            j++;
        }
    
        p->next = q->next;
        free(q);
        return head;
    }
    
    // Delete at end
    struct Node *deleteAtEnd(struct Node *head)
    {
    
        
        struct Node *p = head;
        struct Node *q = head->next;
    
        int i = 0;
        int j = 0;
    
        while (q->next != NULL)
        {
            p = p->next;
            q = q->next;
        }
        
        
        p->next = NULL;
        free(q);
        return head;
    }
    
    // Deleting the element with a given value from the linked list
    struct Node *deleteByValue(struct Node *head, int value){
        struct Node *p = head;
        struct Node *q = head->next;
        while(q->data!=value && q->next!= NULL)
        {
            p = p->next;
            q = q->next;
        }
        
        if(q->data == value){
            p->next = q->next;
            free(q);
        }
        return head;
    }
    
    
    int main()
    {
        struct Node *head;
        struct Node *second;
        struct Node *third;
        struct Node *fourth;
    
        // Allocating memory for the nodes in linked list in heap.
        head = (struct Node *)malloc(sizeof(struct Node));
        second = (struct Node *)malloc(sizeof(struct Node));
        third = (struct Node *)malloc(sizeof(struct Node));
        fourth = (struct Node *)malloc(sizeof(struct Node));
    
        // Link first and second nodes.
        head -> data = 7;
        head -> next = second;
        
        // Link second and third nodes.
        second -> data = 12;
        second -> next = third;
        
        // Link third and fourth nodes.
        third -> data = 70;
        third -> next = fourth;
        
        // Terminate the list at the fourth node.
        fourth -> data = 159;
        fourth -> next = NULL;
    
        linkedListTraversal(head);
        
        head = deleteAtFirst(head);
        linkedListTraversal(head);
    
        head = deleteAtIndex(head, 2);
        linkedListTraversal(head);
       
        head = deleteAtEnd(head);
        linkedListTraversal(head);
        
        head = deleteByValue(head, 12);
        linkedListTraversal(head);
    
        return 0;
    }`

    const code8 = `
    #include <stdio.h>
    #include <stdlib.h>
    
    struct Node
    {
        int data;
        struct Node *next;
    };
    
    // Traversing linked list.
    
    void linkedListTraversal(struct Node *head)
    {
        struct Node *ptr = head;
    
        // printf("%d ", ptr->data);
        // ptr = ptr->next;
    
        // while (ptr != head)
        // {
        //     printf("%d ", ptr->data);
        //     ptr = ptr->next;
        // }
    
        // Better way to write upper code.
    
        do
        {
            printf("%d ", ptr->data);
            ptr = ptr->next;
        } while (ptr != head);
        printf("\\n");
    }
    
    // Inserting at the beginning and making it head.
    struct Node *insertAtFirst(struct Node *head, int data)
    {
        struct Node *ptr = (struct Node *)malloc(sizeof(struct Node));
        ptr->data = data;
        
        struct Node *p = head->next;
    
        while (p->next != head)
        {
            p = p->next;
        }
        // At this point p points to the last element of circular linked list.
    
        p->next = ptr;
        ptr->next = head;
        head = ptr;
    
        return head;
    }
    
    int main()
    {
        struct Node *head;
        struct Node *second;
        struct Node *third;
        struct Node *fourth;
    
        // Allocating memory for the nodes in linked list in heap.
        head = (struct Node *)malloc(sizeof(struct Node));
        second = (struct Node *)malloc(sizeof(struct Node));
        third = (struct Node *)malloc(sizeof(struct Node));
        fourth = (struct Node *)malloc(sizeof(struct Node));
    
        // Link first and second nodes.
        head->data = 7;
        head->next = second;
    
        // Link second and third nodes.
        second->data = 12;
        second->next = third;
    
        // Link third and fourth nodes.
        third->data = 70;
        third->next = fourth;
    
        // Link fourth and head.
        fourth->data = 159;
        fourth->next = head;
    
        linkedListTraversal(head);
        head = insertAtFirst(head, 17);
        head = insertAtFirst(head, 170);
        linkedListTraversal(head);
        return 0;
    }`

    const code9 = `
    #include <stdio.h>
    #include <stdlib.h>
    
    struct Node
    {
        int data;
        struct Node *next;
        struct Node *prev;
    };
    
    // Traversing linked list forward.
    
    void linkedListTraversalF(struct Node *ptr)
    {
        while (ptr != NULL)
        {
            printf("%d ", ptr->data);
            ptr = ptr->next;
        }
        
    }
    
    // Traversing linked list backward.
    
    void linkedListTraversalB(struct Node *ptr)
    {
        while (ptr != NULL)
        {
            printf("%d ", ptr->data);
            ptr = ptr->prev;
        }
        
    }
    
    int main()
    {
        struct Node *head;
        struct Node *second;
        struct Node *third;
        struct Node *fourth;
    
        // Allocating memory for the nodes in linked list in heap.
        head = (struct Node *)malloc(sizeof(struct Node));
        second = (struct Node *)malloc(sizeof(struct Node));
        third = (struct Node *)malloc(sizeof(struct Node));
        fourth = (struct Node *)malloc(sizeof(struct Node));
    
    
        head -> data = 7;
        head -> next = second;
        head -> prev = NULL;
        
    
        second -> data = 12;
        second -> next = third;
        second -> prev = head;
        
    
        third -> data = 70;
        third -> next = fourth;
        third -> prev = second;
        
    
        fourth -> data = 159;
        fourth -> next = NULL;
        fourth -> prev = third;
    
        linkedListTraversalF(head);
        printf("\\n");
        linkedListTraversalB(fourth);
        return 0;
    }`

    const code10 = `
    #include <stdio.h>
    #include <stdlib.h>
    
    struct stack
    {
        int size;
        int top;
        int *arr;
    };
    
    // Check if stack is empty
    void isEmpty(struct stack *ptr)
    {
        if (ptr->top == -1)
        {
            printf("The stack is Empty.\\n");
        }
        else
        {
            printf("The stack is not Empty.\\n");
        }
        
    }
    
    // Check if stack is full
    void isFull(struct stack *ptr)
    {
        if (ptr->top == ptr->size - 1)
        {
            printf("The stack is Full.\\n");
        }
        else
        {
            printf("The stack is not Full.\\n");
        }
        
    }
    
    int main()
    {
        struct stack *s;
    
        s->size = 5;
        s->top = -1;
        s->arr = (int *)malloc(s->size * (sizeof(int)));
    
        isEmpty(s);
        isFull(s);
        return 0;
    }`

    const code11 = `
    #include <stdio.h>
    #include <stdlib.h>
    
    struct stack
    {
        int size;
        int top;
        int *arr;
    };
    
    // Check if stack is empty
    void isEmpty(struct stack *ptr)
    {
        if (ptr->top == -1)
        {
            printf("The stack is Empty.\\n");
        }
        else
        {
            printf("The stack is not Empty.\\n");
        }
        
    }
    
    // Check if stack is full
    void isFull(struct stack *ptr)
    {
        if (ptr->top == ptr->size - 1)
        {
            printf("The stack is Full.\\n");
        }
        else
        {
            printf("The stack is not Full.\\n");
        }
        
    }
    
    int main()
    {
        struct stack *s;
    
        s->size = 5;
        s->top = -1;
        s->arr = (int *)malloc(s->size * (sizeof(int)));
    
        isEmpty(s);
        isFull(s);
        return 0;
    }`

    const code12 = `
    #include <stdio.h>
    #include <stdlib.h>
    
    struct stack
    {
        int size;
        int top;
        int *arr;
    };
    
    // Check if stack is empty
    int isEmpty(struct stack *ptr)
    {
        if (ptr->top == -1)
        {
            return 1;
        }
        else
        {
            return 0;
        }
    }
    
    // Check if stack is full
    int isFull(struct stack *ptr)
    {
        if (ptr->top == ptr->size - 1)
        {
            return 1;
        }
        else
        {
            return 0;
        }
    }
    
    void push(struct stack *ptr, int val)
    {
        if (isFull(ptr))
        {
            printf("Stack Overflow! Your value %d can't be added.\\n", val);
        }
        else
        {
            ptr->top++;
            ptr->arr[ptr->top] = val;
        }
    }
    
    int pop(struct stack *ptr)
    {
        if (isEmpty(ptr))
        {
            printf("Stack Underflow! Nothing to be popped!.\\n");
            return -1;
        }
        else
        {
            int var = ptr->arr[ptr->top];
            ptr->top--;
            return var;
        }
    }
    
    int peek(struct stack *ptr, int i)
    {
        int arrayInd = ptr->top - i + 1;
        if (arrayInd < 0)
        {
            printf("Not a valid position for stack!");
            return -1;
        }
        else
        {
            return ptr->arr[arrayInd];
        }
    }
    
    int stackTop(struct stack *sp)
    {
        return sp->arr[sp->top];
    }
    
    int stackBottom(struct stack *sp)
    {
        return sp->arr[0];
    }
    
    int main()
    {
        struct stack *sp = (struct stack *)malloc(sizeof(struct stack));
        sp->size = 10;
        sp->top = -1;
        sp->arr = (int *)malloc(sp->size * sizeof(int));
    
        push(sp, 17);
        push(sp, 137);
        push(sp, 7);
        push(sp, 34);
        push(sp, 82);
        push(sp, 1);
        push(sp, 1);
        push(sp, 0);
        push(sp, 93);
        push(sp, 14); // Pushed 10 values
        push(sp, 27); // Stack overflow since the size of stack is 10.
    
        for (int j = 1; j <= sp->top + 1; j++)
        {
            printf("The value at position %d is %d\\n", j, peek(sp, j));
        }
        printf("The value of topmost element in our stack is: %d\\n", stackTop(sp));
        printf("The value of bottomost element in our stack is: %d\\n", stackBottom(sp));
        
        return 0;
    }`

    const code13 = `
    #include <stdio.h>
    #include <stdlib.h>
    
    struct stack
    {
        int size;
        int top;
        int *arr;
    };
    
    // Check if stack is empty
    int isEmpty(struct stack *ptr)
    {
        if (ptr->top == -1)
        {
            return 1;
        }
        else
        {
            return 0;
        }
    }
    
    // Check if stack is full
    int isFull(struct stack *ptr)
    {
        if (ptr->top == ptr->size - 1)
        {
            return 1;
        }
        else
        {
            return 0;
        }
    }
    
    void push(struct stack *ptr, int val)
    {
        if (isFull(ptr))
        {
            printf("Stack Overflow! Your value %d can't be added.\\n", val);
        }
        else
        {
            ptr->top++;
            ptr->arr[ptr->top] = val;
        }
    }
    
    int pop(struct stack *ptr)
    {
        if (isEmpty(ptr))
        {
            printf("Stack Underflow! Nothing to be popped!.\\n");
            return -1;
        }
        else
        {
            int var = ptr->arr[ptr->top];
            ptr->top--;
            return var;
        }
    }
    
    int peek(struct stack *ptr, int i)
    {
        int arrayInd = ptr->top - i + 1;
        if (arrayInd < 0)
        {
            printf("Not a valid position for stack!");
            return -1;
        }
        else
        {
            return ptr->arr[arrayInd];
        }
    }
    
    int stackTop(struct stack *sp)
    {
        return sp->arr[sp->top];
    }
    
    int stackBottom(struct stack *sp)
    {
        return sp->arr[0];
    }
    
    int main()
    {
        struct stack *sp = (struct stack *)malloc(sizeof(struct stack));
        sp->size = 10;
        sp->top = -1;
        sp->arr = (int *)malloc(sp->size * sizeof(int));
    
        push(sp, 17);
        push(sp, 137);
        push(sp, 7);
        push(sp, 34);
        push(sp, 82);
        push(sp, 1);
        push(sp, 1);
        push(sp, 0);
        push(sp, 93);
        push(sp, 14); // Pushed 10 values
        push(sp, 27); // Stack overflow since the size of stack is 10.
    
        for (int j = 1; j <= sp->top + 1; j++)
        {
            printf("The value at position %d is %d\\n", j, peek(sp, j));
        }
        printf("The value of topmost element in our stack is: %d\\n", stackTop(sp));
        printf("The value of bottomost element in our stack is: %d\\n", stackBottom(sp));
        
        return 0;
    }`

    const code14 = `
    #include <stdio.h>
    #include <stdlib.h>
    
    struct Node
    {
        int data;
        struct Node *next;
    };
    
    struct Node *top = NULL;
    
    void linkedListTraversal(struct Node *ptr)
    {
        while (ptr != NULL)
        {
            printf("Element: %d\\n", ptr->data);
            ptr = ptr->next;
        }
    }
    
    int isEmpty(struct Node *top)
    {
        if (top == NULL)
        {
            return 1;
        }
        else
        {
            return 0;
        }
    }
    
    int isFull(struct Node *top)
    {
        struct Node *p = (struct Node *)malloc(sizeof(struct Node));
        if (p == NULL)
        {
            return 1;
        }
        else
        {
            return 0;
        }
    }
    
    struct Node *push(struct Node *top, int x)
    {
        if (isFull(top))
        {
            printf("Stack Overflow\\n");
        }
        else
        {
            struct Node *n = (struct Node *)malloc(sizeof(struct Node));
            n->data = x;
            n->next = top;
            top = n;
            return top;
        }
    }
    
    int pop(struct Node *tp)
    {
        if (isEmpty(tp))
        {
            printf("Stack Underflow\\n");
        }
        else
        {
            struct Node *n = tp;
            top = (tp)->next;
            int x = n->data;
            free(n);
            return x;
        }
    }
    
    int peek(int pos)
    {
        struct Node *ptr = top;
        for (int i = 0; i < pos - 1 && ptr != NULL; i++)
        {
            ptr = ptr->next;
        }
        if (ptr != NULL)
        {
            return ptr->data;
        }
        else
        {
            return -1;
        }
    }
    
    int stackTop()
    {
        return top->data;
    }
    
    int stackBottom()
    {
        struct Node *ptr = top;
        while (ptr->next != NULL)
        {
            ptr = ptr->next;
        }
        return ptr->data;
    }
    
    int main()
    {
        top = push(top, 17);
        top = push(top, 15);
        top = push(top, 12);
        top = push(top, 7);
    
        linkedListTraversal(top);
    
        printf("The value at position 1 is: %d\\n", peek(1));
    
        printf("The Topmost value is: %d\\n", stackTop());
        printf("The BottomMost value is: %d\\n", stackBottom());
        return 0;
    }`

    const code15 = `
    #include <stdio.h>
    #include <stdlib.h>
    
    struct stack
    {
        int size;
        int top;
        char *arr;
    };
    
    int isEmpty(struct stack *ptr)
    {
        if (ptr->top == -1)
        {
            return 1;
        }
        else
        {
            return 0;
        }
    }
    
    int isFull(struct stack *ptr)
    {
        if (ptr->top == ptr->size - 1)
        {
            return 1;
        }
        else
        {
            return 0;
        }
    }
    
    void push(struct stack *ptr, int val)
    {
        if (isFull(ptr))
        {
            printf("Stack Overflow! Your value %d can't be added.\\n", val);
        }
        else
        {
            ptr->top++;
            ptr->arr[ptr->top] = val;
        }
    }
    
    char pop(struct stack *ptr)
    {
        if (isEmpty(ptr))
        {
            printf("Stack Underflow! Nothing to be popped!.\\n");
            return -1;
        }
        else
        {
            char var = ptr->arr[ptr->top];
            ptr->top--;
            return var;
        }
    }
    
    int checkValidity(char *exp)
    {
    
        struct stack *sp;
    
        sp->size = 20;
        sp->top = -1;
        sp->arr = (char *)malloc(sp->size * sizeof(char));
        for (int i = 0; i < sp->size; i++)
        {
            if (exp[i] == '(')
            {
                push(sp, exp[i]);
            }
            else if (exp[i] == ')')
            {
                if (isEmpty(sp))
                {
                    return 0;
                }
                pop(sp);
            }
        }
    
        if (isEmpty(sp))
        {
            return 1;
        }
        return 0;
    }
    
    int main()
    {
    
        // char array[20] = {'(', 1, '*', '(', 8, '-', '(', 3, '+', ')', ')'};
        char *exp = "(()))";
    
        // '(' = value = 41
        // ')' = value = 40
    
        // printf("Popped %d from the stack.\\n", pop(sp));
    
        if (checkValidity(exp))
        {
            printf("You parenthsis is valid");
        }
        else
        {
            printf("You parenthsis is Invalid");
        }
    
        return 0;
    }`

    const code16 = `
    #include <stdio.h>
    #include <stdlib.h>
    
    struct stack
    {
        int size;
        int top;
        char *arr;
    };
    
    int isEmpty(struct stack *ptr)
    {
        if (ptr->top == -1)
        {
            return 1;
        }
        else
        {
            return 0;
        }
    }
    
    int isFull(struct stack *ptr)
    {
        if (ptr->top == ptr->size - 1)
        {
            return 1;
        }
        else
        {
            return 0;
        }
    }
    
    void push(struct stack *ptr, int val)
    {
        if (isFull(ptr))
        {
            printf("Stack Overflow! Your value %d can't be added.\\n", val);
        }
        else
        {
            ptr->top++;
            ptr->arr[ptr->top] = val;
        }
    }
    
    char pop(struct stack *ptr)
    {
        if (isEmpty(ptr))
        {
            printf("Stack Underflow! Nothing to be popped!.\\n");
            return -1;
        }
        else
        {
            char var = ptr->arr[ptr->top];
            ptr->top--;
            return var;
        }
    }
    
    char match(char a, char b)
    {
        if (a == '{' && b == '}')
        {
            return 1;
        }
        if (a == '(' && b == ')')
        {
            return 1;
        }
        if (a == '[' && b == ']')
        {
            return 1;
        }
        return 0;
    }
    
    int checkValidity(char *exp)
    {
    
        struct stack *sp;
    
        sp->size = 20;
        sp->top = -1;
        sp->arr = (char *)malloc(sp->size * sizeof(char));
        char popped_ch;
    
        for (int i = 0; i < sp->size; i++)
        {
            if (exp[i] == '(' || exp[i] == '{' || exp[i] == '[')
            {
                push(sp, exp[i]);
            }
            else if (exp[i] == ')' || exp[i] == '}' || exp[i] == ']')
            {
                if (isEmpty(sp))
                {
                    return 0;
                }
           
                popped_ch = pop(sp);
           
                if (!match(popped_ch, exp[i]))
                {
                    return 0;
                }
            }
        }
    
        if (isEmpty(sp))
        {
            return 1;
        }
        return 0;
    }
    
    int main()
    {
    
        // char array[20] = {'(', 1, '*', '(', 8, '-', '(', 3, '+', ')', ')'};
        char *exp = "(([{}()])";
    
        // '(' = value = 41
        // ')' = value = 40
    
        // printf("Popped %d from the stack.\\n", pop(sp));
    
        if (checkValidity(exp))
        {
            printf("You parenthsis is valid");
        }
        else
        {
            printf("You parenthsis is Invalid");
        }
    
        return 0;
    }`

    const code17 = `
    #include <stdio.h>
    #include <stdlib.h>
    #include <string.h>
    
    struct stack
    {
        int size;
        int top;
        char *arr;
    };
    
    int isEmpty(struct stack *ptr)
    {
        if (ptr->top == -1)
        {
            return 1;
        }
        else
        {
            return 0;
        }
    }
    
    int isFull(struct stack *ptr)
    {
        if (ptr->top == ptr->size - 1)
        {
            return 1;
        }
        else
        {
            return 0;
        }
    }
    
    void push(struct stack *ptr, int val)
    {
        if (isFull(ptr))
        {
            printf("Stack Overflow! Your value %d can't be added.\\n", val);
        }
        else
        {
            ptr->top++;
            ptr->arr[ptr->top] = val;
        }
    }
    
    char pop(struct stack *ptr)
    {
        if (isEmpty(ptr))
        {
            printf("Stack Underflow! Nothing to be popped!.\\n");
            return -1;
        }
        else
        {
            char var = ptr->arr[ptr->top];
            ptr->top--;
            return var;
        }
    }
    
    int stackTop(struct stack *sp)
    {
        return sp->arr[sp->top];
    }
    
    int precedence(char ch)
    {
        if (ch == '*' || ch == '/')
        {
            return 3;
        }
        else if (ch == '+' || ch == '-')
        {
            return 2;
        }
        return 0;
    }
    
    int isOperator(char ch)
    {
        if (ch == '+' || ch == '-' || ch == '*' || ch == '/')
        {
            return 1;
        }
        return 0;
    }
    
    char *infixToPostfix(char *infix)
    {
        struct stack *sp = (struct stack *)malloc(sizeof(struct stack));
        sp->size = 100;
        sp->top = -1;
        sp->arr = (char *)malloc(sp->size * sizeof(char));
        char *postfix = (char *)malloc((strlen(infix) + 1) * sizeof(char));
        int i = 0; // Track infix traversal.
        int j = 0; // Track postfix traversal.
    
        while (infix[i] != 0)
        {
            if (!isOperator(infix[i]))
            {
                postfix[j] = infix[i];
                j++;
                i++;
            }
            else
            {
                if (precedence(infix[i]) > precedence(stackTop(sp)))
                {
                    push(sp, infix[i]);
                    i++;
                }
                else
                {
                    postfix[j] = pop(sp);
                    j++;
                }
            }
        }
        while (!isEmpty(sp))
        {
            postfix[j] = pop(sp);
            j++;
        }
        postfix[j] = '\\0';
        return postfix;
    }
    
    int main()
    {
    
        char *infix = "x-y/z-k*a";
        printf("Postfix is: %s", infixToPostfix(infix));
    
        return 0;
    }`

    const code18 = `
    #include <stdio.h>
    #include <stdlib.h>
    
    struct queue
    {
        int size;
        int f;
        int r;
        int *arr;
    };
    
    int isFull(struct queue *ptr)
    {
        if (ptr->r == ptr->size-1)
        {
            return 1;
        }
        return 0;
    }
    
    int isEmpty(struct queue *ptr)
    {
        if (ptr->f == ptr->r)
        {
            return 1;
        }
        return 0;
    }
    
    void enqueue(struct queue *ptr, int val)
    {
        if (isFull(ptr))
        {
            printf("Your queue is full!\\n");
        }
    
        else
        {
            ptr->r++;
            ptr->arr[ptr->r] = val;
        }
    }
    
    int dequeue(struct queue *ptr)
    {
        int a = -1;  // Simply denotes a wrong dequeued index.
        if (isEmpty(ptr))
        {
            printf("Your queue is Empty!\\n");
        }
    
        else
        {
            ptr->f++;
            a = ptr->arr[ptr->f];
        }
        return a;
    }
    
    void firstVal(struct queue *ptr)
    {
        printf("First value in this queue is: %d\\n", ptr->arr[ptr->f+1]);
    }
    
    void lastVal(struct queue *ptr)
    {
        printf("Last value in this queue is: %d\\n", ptr->arr[ptr->r]);
    }
    
    int peek(struct queue *ptr, int index)
    {
        if (index <= ptr->size - 1)
        {
            return ptr->arr[index];
        }
        else
        {
            printf("Enter a Valid Index!");
        }
        
    }
    
    int main()
    {
        struct queue qu;
        qu.size = 20;
        qu.f = qu.r = -1;
        qu.arr = (int *)malloc(qu.size * sizeof(int));    
    
        enqueue(&qu, 7);
        enqueue(&qu, 17);
        enqueue(&qu, 77);
        enqueue(&qu, 23);
       
        printf("Your dequeued element is: %d\\n", dequeue(&qu));      
    
        firstVal(&qu);
        lastVal(&qu);
        printf("The value at index is: %d", peek(&qu, 2));
        return 0;
    }`

    const code19 = `
    #include <stdio.h>
    #include <stdlib.h>
    
    struct circularqueue
    {
        int size;
        int f;
        int r;
        int *arr;
    };
    
    int isFull(struct circularqueue *ptr)
    {
        if ((ptr->r + 1) % ptr->size == ptr->f)
        {
            return 1;
        }
        return 0;
    }
    
    int isEmpty(struct circularqueue *ptr)
    {
        if (ptr->r == ptr->f)
        {
            return 1;
        }
        return 0;
    }
    
    void enqueue(struct circularqueue *ptr, int val)
    {
        if (isFull(ptr))
        {
            printf("Your queue is full!\\n");
        }
    
        else
        {
            ptr->r = (ptr->r + 1) % ptr->size;
            ptr->arr[ptr->r] = val;
            printf("Enquing element %d\\n", val);
        }
    }
    
    int dequeue(struct circularqueue *ptr)
    {
        int a = -1;  // Simply denotes a wrong dequeued index.
        if (isEmpty(ptr))
        {
            printf("Your queue is Empty!\\n");
        }
    
        else
        {
            ptr->f = (ptr->f + 1) % ptr->size;
            a = ptr->arr[ptr->f];
        }
        return a;
    }
    
    void firstVal(struct circularqueue *ptr)
    {
        printf("First value in this queue is: %d\\n", ptr->arr[ptr->f+1]);
    }
    
    void lastVal(struct circularqueue *ptr)
    {
        printf("Last value in this queue is: %d\\n", ptr->arr[ptr->r]);
    }
    
    int peek(struct circularqueue *ptr, int index)
    {
        if (index <= ptr->size - 1)
        {
            return ptr->arr[index];
        }
        else
        {
            return -1; // represents invalid index.
        }
        
    }
    
    int main()
    {
        struct circularqueue qu;
        qu.size = 4;
        qu.f = qu.r = 0;
        qu.arr = (int *)malloc(qu.size * sizeof(int));    
    
        enqueue(&qu, 7);
        enqueue(&qu, 17);
        enqueue(&qu, 77);
        enqueue(&qu, 23);
       
        printf("Your dequeued element is: %d\\n", dequeue(&qu));      
    
        firstVal(&qu);
        lastVal(&qu);
        printf("The value at index is: %d", peek(&qu, 4));
        return 0;
    }`

    const code20 = `
    #include <stdio.h>
    #include <stdlib.h>
    
    struct Node
    {
        int data;
        struct Node *next;
    };
    
    struct Node *f = NULL;
    struct Node *r = NULL;
    
    void linkedListTraversal(struct Node *ptr)
    {
        while (ptr != NULL)
        {
            printf("Element: %d\\n", ptr->data);
            ptr = ptr->next;
        }
    }
    
    int isEmpty(struct Node *f)
    {
        if (f == NULL)
        {
            return 1;
        }
        else
        {
            return 0;
        }
    }
    
    int isFull(struct Node *p)
    {
        struct Node *n = (struct Node *)malloc(sizeof(struct Node));
        if (n->next == NULL)
        {
            return 1;
        }
        else
        {
            return 0;
        }
    }
    
    void enqueue(int x)
    {
        if (isFull(r))
        {
            printf("Queue Overflow\\n");
        }
        else
        {
            struct Node *n = (struct Node *)malloc(sizeof(struct Node));
            n->data = x;
            n->next = NULL;
            if (f == NULL)
            {
                f = r = n;
                printf("Enqueing element: %d\\n", x);
            }
            else
            {
                r->next = n;
                r = n;
                printf("Enqueing element: %d\\n", x);
            }
        }
    }
    
    int dequeue()
    {
        int x = -1;
        struct Node *ptr = f;
    
        if (isEmpty(ptr))
        {
            printf("Queue Underflow\\n");
        }
        else
        {
            f = f->next;
            x = ptr->data;
            free(ptr);
        }
        return x;
    }
    
    int peek(int pos)
    {
        struct Node *ptr = f;
        for (int i = 0; i < pos - 1 && ptr != NULL; i++)
        {
            ptr = ptr->next;
        }
        if (ptr != NULL)
        {
            return ptr->data;
        }
        else
        {
            return -1;
        }
    }
    
    int main()
    {
        printf("Dequeing Element: %d\\n", dequeue());
        enqueue(17);
        enqueue(15);
        enqueue(12);
        enqueue(7);
    
        printf("Dequeing Element: %d\\n", dequeue());
        printf("Dequeing Element: %d\\n", dequeue());
    
        linkedListTraversal(f);
    
        printf("The value at position 1 is: %d\\n", peek(1));
    
        return 0;
    }`

    const code21 = `
    #include <stdio.h>

    void aTrav(int *A, int size)
    {
        for (int i = 0; i < size; i++)
        {
            printf("%d ", A[i]);
        }
        printf("\\n");
    }
    
    // Modified bubble sort
    void bubbleSortAdaptive(int *A, int size)
    {
        int temp;
        int isSorted = 0;
        for (int i = 0; i < size - 1; i++) // for number of pass.
        {
            printf("Working on pass no. : %d\\n", i + 1);
            isSorted = 1;
            for (int j = 0; j < (size - 1 - i); j++) // for comparison in each pass.
            {
                if (A[j] > A[j + 1])
                {
                    temp = A[j];
                    A[j] = A[j + 1];
                    A[j + 1] = temp;
                    isSorted = 0;
                }
            }
            if (isSorted)
            {
                return;
            }
        }
    }
    
    int bubbleSort(int *A, int size)
    {
        int temp;
        for (int i = 0; i < size - 1; i++) // for number of pass.
        {
            for (int j = 0; j < (size - 1 - i); j++) // for comparison in each pass.
            {
                if (A[j] > A[j + 1])
                {
                    temp = A[j];
                    A[j] = A[j + 1];
                    A[j + 1] = temp;
                }
            }
        }
    }
    
    int main()
    {
        int A[] = {12, 3, 4, 5, 56, 213, 432, 21, 3, 0};
        // int A[] = {1, 3, 4, 5, 56, 233, 433, 621, 773, 880};
    
        int size = sizeof(A) / sizeof(int);
    
        aTrav(A, size); // Before sorting
        bubbleSortAdaptive(A, size);
        bubbleSort(A, size);
        aTrav(A, size); // After sorting
    
        return 0;
    }`

    const code22 = `
    #include <stdio.h>

    void aTrav(int *A, int size)
    {
        for (int i = 0; i < size; i++)
        {
            printf("%d ", A[i]);
        }
        printf("\\n");
    }
    
    void insertionSort(int *A, int size)
    {
        int key, j;
        for (int i = 1; i <= size - 1; i++) // for number of pass.
        {
            key = A[i];
            j = i - 1;
            while (j >= 0 && A[j] > key)
            {
                A[j + 1] = A[j];
                j--;
            }
            A[j + 1] = key;
        }
    }
    
    int main()
    {
        // -1   0    1   2   3   4   5
        //      12,| 54, 65, 07, 23, 09 --> i=1, key=54, j=0
        //      12,| 54, 65, 07, 23, 09 --> 1st pass done (i=1)!
    
        //      12, 54,| 65, 07, 23, 09 --> i=2, key=65, j=1
        //      12, 54,| 65, 07, 23, 09 --> 2nd pass done (i=2)!
    
        //      12, 54, 65,| 07, 23, 09 --> i=3, key=7, j=2
        //      12, 54, 65,| 65, 23, 09 --> i=3, key=7, j=1
        //      12, 54, 54,| 65, 23, 09 --> i=3, key=7, j=0
        //      12, 12, 54,| 65, 23, 09 --> i=3, key=7, j=-1
        //      07, 12, 54,| 65, 23, 09 --> i=3, key=7, j=-1--> 3rd pass done (i=3)!
    
        // Fast forwarding and 4th and 5th pass will give:
        //      07, 12, 54, 65,| 23, 09 --> i=4, key=23, j=3
        //      07, 12, 23, 54,| 65, 09 --> After the 4th pass
    
        //      07, 12, 23, 54, 65,| 09 --> i=5, key=09, j=4
        //      07, 09, 12, 23, 54, 65| --> After the 5th pass
    
        int A[] = {12, 54, 65, 7, 23, 9};
        int size = sizeof(A) / sizeof(int);
    
        aTrav(A, size); // Before sorting
        insertionSort(A, size);
        aTrav(A, size); // After sorting
    
        return 0;
    }`

    const code23 = `
    #include <stdio.h>

    void arrTrav(int *A, int size)
    {
        for (int i = 0; i < size; i++)
        {
            printf("%d ", A[i]);
        }
        printf("\\n");
    }
    
    void selectionSort(int *A, int size)
    {
        int temp;
        int indexOfMin;
        for (int i = 0; i < size - 1; i++)
        {
            indexOfMin = i;
            for (int j = i + 1; j < size; j++)
            {
                if (A[j] < A[indexOfMin])
                {
                    indexOfMin = j;
                }
            }
            temp = A[i];
            A[i] = A[indexOfMin];
            A[indexOfMin] = temp;
        }
    }
    
    int main()
    {
        int A[] = {8, 0, 7, 1, 3};
    
        int size = sizeof(A) / sizeof(int);
    
        arrTrav(A, size);
        selectionSort(A, size);
        arrTrav(A, size);
        return 0;
    }`

    const code24 = `
    #include <stdio.h>

    void arrTrav(int *A, int size)
    {
        for (int i = 0; i < size; i++)
        {
            printf("%d ", A[i]);
        }
        printf("\\n");
    }
    
    int partition(int A[], int low, int high)
    {
        int pivot = A[low];
        int i = low + 1;
        int j = high;
        int temp;
    
        do
        {
            while (A[i] <= pivot)
            {
                i++;
            }
    
            while (A[j] > pivot)
            {
                j--;
            }
    
            if (i < j)
            {
                temp = A[i];
                A[i] = A[j];
                A[j] = temp;
            }
    
        } while (i < j);
    
        // Swap A[low] and A[j]
        temp = A[low];
        A[low] = A[j];
        A[j] = temp;
        return j;
    }
    
    void quickSort(int *A, int low, int high)
    {
        int partitionIndex; // Index of pivot after partition
    
        if (low < high)
        {
            partitionIndex = partition(A, low, high); 
            quickSort(A, low, partitionIndex - 1);  // sort left subarray
            quickSort(A, partitionIndex + 1, high); // sort right subarray
        }
    }
    
    int main()
    {
        int A[] = {8, 0, 7, 1, 3, 9, 2, 0, 7};
    
        int size = sizeof(A) / sizeof(int);
    
        arrTrav(A, size);
        quickSort(A, 0, size - 1);
        arrTrav(A, size);
        return 0;
    }`

    const code25 = `
    #include <stdio.h>

    void arrTrav(int *A, int size)
    {
        for (int i = 0; i < size; i++)
        {
            printf("%d ", A[i]);
        }
        printf("\\n");
    }
    
    void merge(int A[], int mid, int low, int high)
    {
        int i, j, k, B[100];
        i = low;
        j = mid + 1;
        k = low;
    
        while (i <= mid && j <= high)
        {
            if (A[i] < A[j])
            {
                B[k] = A[i];
                i++;
                k++;
            }
            else
            {
                B[k] = A[j];
                j++;
                k++;
            }
        }
        while (i <= mid)
        {
            B[k] = A[i];
            k++;
            i++;
        }
        while (j <= high)
        {
            B[k] = A[j];
            k++;
            j++;
        }
        for (int i = low; i <= high; i++)
        {
            A[i] = B[i];
        }
    }
    
    void ms(int A[], int low, int high)
    {
        int mid;
        if (low < high)
        {
            mid = (low + high) / 2;
            ms(A, low, mid);
            ms(A, mid + 1, high);
            merge(A, mid, low, high);
        }
    }
    
    int main()
    {
        // int A[] = {8, 0, 7, 1, 3};
        int A[] = {9, 1, 4, 14, 4, 15, 6};
    
        int size = sizeof(A) / sizeof(int);
    
        arrTrav(A, size);
        ms(A, 0, size - 1);
        arrTrav(A, size);
        return 0;
    }`

    const code26 = `
    #include <stdio.h>
    #include <limits.h> // For using INT_MIN and INT_MAX
    #include <stdlib.h>
    
    // Values of INT_MAX and INT_MIN may vary
    // from compiler to compiler. Following are
    // typical values in a compiler where integers
    // are stored using 32 bits.
    
    // Value of INT_MAX is +2147483647.
    // Value of INT_MIN is -2147483648.
    
    void arrTrav(int *A, int size)
    {
        for (int i = 0; i < size; i++)
        {
            printf("%d ", A[i]);
        }
        printf("\\n");
    }
    
    // Function to find maximum no. in an array
    int maximum(int *A, int size)
    {
        int max = INT_MIN;
    
        for (int i = 0; i < size; i++)
        {
            if (max < A[i])
            {
                max = A[i];
            }
        }
        return max;
    }
    
    void countSort(int *A, int size)
    {
        int i, j;
    
        // Find the maximum element in A
        int max = maximum(A, size);
    
        // Create the count array
        int *count = (int *)malloc((max + 1) * sizeof(int));
    
        // We can also use calloc and skip the following part of initializing all the values with 0,
        // bc calloc itself initializes all the value with 0, whereas malloc initializes with garbage value.
    
        // Initialize the count array elements to 0
        for (i = 0; i < max + 1; i++)
        {
            count[i] = 0;
        }
    
        // Increment the corresponding index in the count array
        for (i = 0; i < size; i++)
        {
            count[A[i]] = count[A[i]] + 1; // Can be written as count[A[i]]++
        }
    
        i = 0; // Counter for count array
        j = 0; // Counter for given array
    
        while (i < max + 1)
        {
            if (count[i] > 0)
            {
                A[j] = i;
                count[i]--;
                j++;
            }
            else
            {
                i++;
            }
        }
    }
    
    int main()
    {
        int A[] = {8, 0, 7, 1, 3, 9, 2, 99, 7};
    
        int size = sizeof(A) / sizeof(int);
    
        arrTrav(A, size);
        countSort(A, size);
        arrTrav(A, size);
        return 0;
    }`

    const code27 = `
    #include <stdio.h>
    #include <stdlib.h>
    
    struct node
    {
        int data;
        struct node *left;
        struct node *right;
    };
    
    struct node *createNode(int data)
    {
        struct node *n;  // Creating a node pointer
        n = (struct node *)malloc(sizeof(struct node));  // Allocating memory in the heap
        n->data = 2;  // setting the data
        n->left = NULL;  // setting left to NULL
        n->right = NULL;  // setting right to NULL
        return n;  // Finally returning the created node
    }
    
    int main()
    {
        
        /*  This method is repetitive so not recommended
    
        // Constructing the root node
        struct node *p;
        p = (struct node *)malloc(sizeof(struct node));
        p->data = 2;
        p->left = NULL;
        p->right = NULL;
    
        // Constructing the second node
        struct node *p1;
        p1 = (struct node *)malloc(sizeof(struct node));
        p1->data = 2;
        p1->left = NULL;
        p1->right = NULL;
    
        // Constructing the third node
        struct node *p2;
        p2 = (struct node *)malloc(sizeof(struct node));
        p2->data = 2;
        p2->left = NULL;
        p2->right = NULL;
    
        // Linking the root node with left and right children
        p->left = p1;
        p->right = p2;
        */
    
        // Constructing the root node - Using Function (Recommended)
        struct node *p = createNode(2);
        struct node *p1 = createNode(1);
        struct node *p2 = createNode(4);
    
        // Linking the root node with left and right children
        p->left = p1;
        p->right = p2;
    
        return 0;
    }`

    const code28 = `
    #include <stdio.h>
    #include <stdlib.h>
    
    struct node
    {
        int data;
        struct node *left;
        struct node *right;
    };
    
    struct node *createNode(int data)
    {
        struct node *n;
        n = (struct node *)malloc(sizeof(struct node));
        n->data = data;
        n->left = NULL; 
        n->right = NULL;
        return n; 
    }
    
    void preOrder(struct node *root)
    {
        if (root != NULL)
        {
            printf("%d ", root->data);
            preOrder(root->left);
            preOrder(root->right);
        }
        
    }
    
    int main()
    {
        /*  This is the given tree to traverse:
        
                4
               / \\
              /   \\
             1     6
            / \\
           /   \\
          5     2
    
        */  
        struct node *p = createNode(4);
        struct node *p1 = createNode(1);
        struct node *p2 = createNode(6);
        struct node *p3 = createNode(5);
        struct node *p4 = createNode(2);
    
        p->left = p1;
        p->right = p2;
        p1->left = p3;
        p1->right = p4;
    
        preOrder(p);
        return 0;
    }`

    const code29 = `
    #include <stdio.h>
    #include <stdlib.h>
    
    struct node
    {
        int data;
        struct node *left;
        struct node *right;
    };
    
    struct node *createNode(int data)
    {
        struct node *n;
        n = (struct node *)malloc(sizeof(struct node));
        n->data = data;
        n->left = NULL; 
        n->right = NULL;
        return n; 
    }
    
    void postOrder(struct node *root)
    {
        if (root != NULL)
        {
            postOrder(root->left);
            postOrder(root->right);
            printf("%d ", root->data);
        }
        
    }
    
    int main()
    {
        /*  This is the given tree to traverse:
        
                4
               / \\
              /   \\
             1     6
            / \\
           /   \\
          5     2
    
        */  
        struct node *p = createNode(4);
        struct node *p1 = createNode(1);
        struct node *p2 = createNode(6);
        struct node *p3 = createNode(5);
        struct node *p4 = createNode(2);
    
        p->left = p1;
        p->right = p2;
        p1->left = p3;
        p1->right = p4;
    
        postOrder(p);
        return 0;
    }`

    const code30 = `
    #include <stdio.h>
    #include <stdlib.h>
    
    struct node
    {
        int data;
        struct node *left;
        struct node *right;
    };
    
    struct node *createNode(int data)
    {
        struct node *n;
        n = (struct node *)malloc(sizeof(struct node));
        n->data = data;
        n->left = NULL;
        n->right = NULL;
        return n;
    }
    
    void inOrder(struct node *root)
    {
        if (root != NULL)
        {
            inOrder(root->left);
            printf("%d ", root->data);
            inOrder(root->right);
        }
    }
    
    int main()
    {
        /*  This is the given tree to traverse:
    
                4
               / \\
              /   \\
             1     6
            / \\
           /   \\
          5     2
    
        */
        struct node *p = createNode(4);
        struct node *p1 = createNode(1);
        struct node *p2 = createNode(6);
        struct node *p3 = createNode(5);
        struct node *p4 = createNode(2);
    
        p->left = p1;
        p->right = p2;
        p1->left = p3;
        p1->right = p4;
    
        inOrder(p);
        return 0;
    }`

    const code31 = `
    #include <stdio.h>
    #include <stdlib.h>
    
    struct node
    {
        int data;
        struct node *left;
        struct node *right;
    };
    
    struct node *createNode(int data)
    {
        struct node *n;
        n = (struct node *)malloc(sizeof(struct node));
        n->data = data;
        n->left = NULL;
        n->right = NULL;
        return n;
    }
    
    void inOrder(struct node *root)
    {
        if (root != NULL)
        {
            inOrder(root->left);
            printf("%d ", root->data);
            inOrder(root->right);
        }
    }
    
    int isBST(struct node *root)
    {
        static struct node *prev = NULL;
        if (root != NULL)
        {
            if (!isBST(root->left))
            {
                return 0;
            }
            if (prev != NULL && root->data <= prev->data)
            {
                return 0;
            }
            prev = root;
            return isBST(root->right);
        }
        else
        {
            return 1;
        }
        
    }
    
    int main()
    {
        /*  This is the given tree to traverse:
    
                5
               / \\
              /   \\
             3     6
            / \\
           /   \\
          1     4
    
        */
        struct node *p = createNode(5);
        struct node *p1 = createNode(3);
        struct node *p2 = createNode(6);
        struct node *p3 = createNode(1);
        struct node *p4 = createNode(4);
    
        p->left = p1;
        p->right = p2;
        p1->left = p3;
        p1->right = p4;
    
        inOrder(p);
        printf("\\n");
        printf("%d", isBST(p));
        return 0;
    }`

    const code32 = `
    #include <stdio.h>
    #include <stdlib.h>
    
    struct node
    {
        int data;
        struct node *left;
        struct node *right;
    };
    
    struct node *createNode(int data)
    {
        struct node *n;
        n = (struct node *)malloc(sizeof(struct node));
        n->data = data;
        n->left = NULL;
        n->right = NULL;
        return n;
    }
    
    void inOrder(struct node *root)
    {
        if (root != NULL)
        {
            inOrder(root->left);
            printf("%d ", root->data);
            inOrder(root->right);
        }
    }
    
    int isBST(struct node *root)
    {
        static struct node *prev = NULL;
        if (root != NULL)
        {
            if (!isBST(root->left))
            {
                return 0;
            }
            if (prev != NULL && root->data <= prev->data)
            {
                return 0;
            }
            prev = root;
            return isBST(root->right);
        }
        else
        {
            return 1;
        }
    }
    
    struct node *search(struct node *root, int key)
    {
        if (root == NULL)
        {
            return NULL;
        }
        if (key == root->data)
        {
            return root;
        }
        else if (key < root->data)
        {
            return search(root->left, key);
        }
        else
        {
            return search(root->right, key);
        }
    }
    
    int main()
    {
        /*  This is the given tree to traverse:
    
                50
               /  \\
             40    60
            /  \\   /  \\
          20   45  55  70
    
        */
        struct node *p = createNode(50);
        struct node *p1 = createNode(40);
        struct node *p2 = createNode(60);
        struct node *p3 = createNode(20);
        struct node *p4 = createNode(45);
        struct node *p5 = createNode(55);
        struct node *p6 = createNode(70);
    
        p->left = p1;
        p->right = p2;
        p1->left = p3;
        p1->right = p4;
        p2->left = p5;
        p2->right = p6;
    
        inOrder(p);
        printf("\\n");
        printf("%d", isBST(p));
        printf("\\n");
    
        struct node *n = search(p, 70);
    
        if (n != NULL)
        {
            printf("FOUND : %d", n->data);
        }
        else
        {
            printf("Element Not Found!");
        }
    
        return 0;
    }`

    const code33 = `
    #include <stdio.h>
    #include <stdlib.h>
    
    struct node
    {
        int data;
        struct node *left;
        struct node *right;
    };
    
    struct node *createNode(int data)
    {
        struct node *n;
        n = (struct node *)malloc(sizeof(struct node));
        n->data = data;
        n->left = NULL;
        n->right = NULL;
        return n;
    }
    
    void inOrder(struct node *root)
    {
        if (root != NULL)
        {
            inOrder(root->left);
            printf("%d ", root->data);
            inOrder(root->right);
        }
    }
    
    int isBST(struct node *root)
    {
        static struct node *prev = NULL;
        if (root != NULL)
        {
            if (!isBST(root->left))
            {
                return 0;
            }
            if (prev != NULL && root->data <= prev->data)
            {
                return 0;
            }
            prev = root;
            return isBST(root->right);
        }
        else
        {
            return 1;
        }
    }
    
    struct node *search(struct node *root, int key)
    {
        while (root != NULL)
        {
            if (key == root->data)
            {
                return root;
            }
            else if (key < root->data)
            {
                root = root->left;
            }
            else
            {
                root = root->right;
            }
        }
        return NULL;
    }
    
    int main()
    {
        /*  This is the given tree to traverse:
    
                50
               /  \\
             40    60
            /  \\   /  \\
          20   45  55  70
    
        */
        struct node *p = createNode(50);
        struct node *p1 = createNode(40);
        struct node *p2 = createNode(60);
        struct node *p3 = createNode(20);
        struct node *p4 = createNode(45);
        struct node *p5 = createNode(55);
        struct node *p6 = createNode(70);
    
        p->left = p1;
        p->right = p2;
        p1->left = p3;
        p1->right = p4;
        p2->left = p5;
        p2->right = p6;
    
        inOrder(p);
        printf("\n");
        printf("%d", isBST(p));
        printf("\\n");
    
        struct node *n = search(p, 70);
    
        if (n != NULL)
        {
            printf("FOUND : %d", n->data);
        }
        else
        {
            printf("Element Not Found!");
        }
    
        return 0;
    }`

    const code34 = `
    #include <stdio.h>
    #include <stdlib.h>
    
    struct node
    {
        int data;
        struct node *left;
        struct node *right;
    };
    
    struct node *createNode(int data)
    {
        struct node *n;
        n = (struct node *)malloc(sizeof(struct node));
        n->data = data;
        n->left = NULL;
        n->right = NULL;
        return n;
    }
    
    void inOrder(struct node *root)
    {
        if (root != NULL)
        {
            inOrder(root->left);
            printf("%d ", root->data);
            inOrder(root->right);
        }
    }
    
    void insert(struct node *root, int key)
    {
        struct node *prev = NULL;
        while (root != NULL)
        {
            prev = root;
            if (key == root->data)
            {
                printf("Cannot insert %d, already in BST.", key);
                return;
            }
            else if (key < root->data)
            {
                root = root->left;
            }
            else
            {
                root = root->right;
            }
        }
        struct node *new = createNode(key);
        if (key < prev->data)
        {
            prev->left = new;
        }
        else
        {
            prev->right = new;
        }
    }
    
    int main()
    {
        /*  This is the given tree to traverse:
    
                50
               /  \\
             40    60
            /  \\     \\
          20   45    70
    
        */
        struct node *p = createNode(50);
        struct node *p1 = createNode(40);
        struct node *p2 = createNode(60);
        struct node *p3 = createNode(20);
        struct node *p4 = createNode(45);
        struct node *p5 = createNode(70);
    
        p->left = p1;
        p->right = p2;
        p1->left = p3;
        p1->right = p4;
        p2->right = p5;
    
        inOrder(p);
        printf("\\n");
    
        insert(p, 2);
        insert(p, 50);
        printf("\\n");
        insert(p, 57);
    
        printf("Added: %d\\n", p->left->left->left->data);
        printf("Added: %d\\n", p->right->left->data);
    
        inOrder(p);
    
        return 0;
    }`

    const code35 = `
    #include <stdio.h>
    #include <stdlib.h>
    
    struct node
    {
        int data;
        struct node *left;
        struct node *right;
    };
    
    struct node *createNode(int data)
    {
        struct node *n;
        n = (struct node *)malloc(sizeof(struct node));
        n->data = data;
        n->left = NULL;
        n->right = NULL;
        return n;
    }
    
    void inOrder(struct node *root)
    {
        if (root != NULL)
        {
            inOrder(root->left);
            printf("%d ", root->data);
            inOrder(root->right);
        }
    }
    
    struct node *inOrderPredecessor(struct node *root)
    {
        root = root->left;
        while (root->right != NULL)
        {
            root = root->right;
        }
        return root;
    }
    
    struct node *deleteNode(struct node *root, int value)
    {
    
        struct node *iPre;
        if (root == NULL)
        {
            return NULL;
        }
        if (root->left == NULL && root->right == NULL)
        {
            free(root);
            return NULL;
        }
    
        // searching for the node to be deleted
        if (value < root->data)
        {
            root->left = deleteNode(root->left, value);
        }
        else if (value > root->data)
        {
            root->right = deleteNode(root->right, value);
        }
        // deletion strategy when the node is found
        else
        {
            iPre = inOrderPredecessor(root);
            root->data = iPre->data;
            root->left = deleteNode(root->left, iPre->data);
        }
        return root;
    }
    
    int main()
    {
        /*  This is the given tree to traverse:
    
                50
               /  \\
             40    60
            /  \\     \\
          20   45    70
    
        */
        struct node *p = createNode(50);
        struct node *p1 = createNode(40);
        struct node *p2 = createNode(60);
        struct node *p3 = createNode(20);
        struct node *p4 = createNode(45);
        struct node *p5 = createNode(70);
    
        p->left = p1;
        p->right = p2;
        p1->left = p3;
        p1->right = p4;
        p2->right = p5;
    
        inOrder(p);
        printf("\\n");
        
        // deleteNode(p, 77);  // bug
        deleteNode(p, 50); 
        inOrder(p);
        printf("\\n");
        printf("%d", p->data);
    
        return 0;
    }`

    const code36 = `
    #include <stdio.h>
    #include <stdlib.h>
    
    struct Node
    {
        int key;
        struct Node *left;
        struct Node *right;
        int height;
    };
    
    int getHeight(struct Node *n)
    {
        if (n == NULL)
        {
            return 0;
        }
        return n->height;
    }
    
    struct Node *createNode(int key)
    {
        struct Node *node;
        node = (struct Node *)malloc(sizeof(struct Node));
        node->key = key;
        node->left = NULL;
        node->right = NULL;
        node->height = 1;
        return node;
    }
    
    int maximum(int a, int b)
    {
        return (a > b) ? a : b;
    }
    
    int getBalanceFactor(struct Node *n)
    {
        if (n == NULL)
        {
            return 0;
        }
        return (getHeight(n->left)) - (getHeight(n->right));
    }
    
    struct Node *rightRotate(struct Node *y)
    {
        struct Node *x = y->left;
        struct Node *T2 = x->right;
    
        x->right = y;
        y->left = T2;
    
        y->height = maximum(getHeight(y->right), getHeight(y->left)) + 1;
        x->height = maximum(getHeight(x->right), getHeight(x->left)) + 1;
    
        return x;
    }
    
    struct Node *leftRotate(struct Node *x)
    {
        struct Node *y = x->right;
        struct Node *T2 = y->left;
    
        y->left = x;
        x->right = T2;
    
        y->height = maximum(getHeight(y->right), getHeight(y->left)) + 1;
        x->height = maximum(getHeight(x->right), getHeight(x->left)) + 1;
    
        return y;
    }
    
    struct Node *insert(struct Node *node, int key)
    {
    
        if (node == NULL)
        {
            return createNode(key);
        }
        if (key < node->key)
        {
            node->left = insert(node->left, key);
        }
        else if (key > node->key)
        {
            node->right = insert(node->right, key);
        }
    
        node->height = 1 + maximum(getHeight(node->right), getHeight(node->left));
        int bf = getBalanceFactor(node);
    
        // Left Left Case
        if (bf > 1 && key < node->left->key)
        {
            return rightRotate(node);
        }
    
        // Right Right Case
        if (bf < -1 && key > node->right->key)
        {
            return leftRotate(node);
        }
    
        // Left Right Case
        if (bf > 1 && key > node->left->key)
        {
            node->left = leftRotate(node->left);
            return rightRotate(node);
        }
        // Right Left Case
        if (bf < -1 && key < node->right->key)
        {
            node->right = rightRotate(node->right);
            return leftRotate(node);
        }
        return node;
    }
    
    void preOrder(struct Node *root)
    {
        if (root != NULL)
        {
            printf("%d ", root->key);
            preOrder(root->left);
            preOrder(root->right);
        }
    }
    
    void inOrder(struct Node *root)
    {
        if (root != NULL)
        {
            inOrder(root->left);
            printf("%d ", root->key);
            inOrder(root->right);
        }
        
    }
    
    
    int main()
    {
        struct Node *root = NULL;
        root = insert(root, 1);
        root = insert(root, 2);
        root = insert(root, 4);
        root = insert(root, 5);
        root = insert(root, 6);
        root = insert(root, 3);
    
        preOrder(root);
        printf("\\n");
        inOrder(root);
    
        return 0;
    }`

    const code37 = `
    #include <stdio.h>
    #include <stdlib.h>
    
    struct queue
    {
        int size;
        int f;
        int r;
        int *arr;
    };
    
    int isFull(struct queue *ptr)
    {
        if (ptr->r == ptr->size - 1)
        {
            return 1;
        }
        return 0;
    }
    
    int isEmpty(struct queue *ptr)
    {
        if (ptr->f == ptr->r)
        {
            return 1;
        }
        return 0;
    }
    
    void enqueue(struct queue *ptr, int val)
    {
        if (isFull(ptr))
        {
            printf("Your queue is full!\\n");
        }
    
        else
        {
            ptr->r++;
            ptr->arr[ptr->r] = val;
        }
    }
    
    int dequeue(struct queue *ptr)
    {
        int a = -1; // Simply denotes a wrong dequeued index.
        if (isEmpty(ptr))
        {
            printf("Your queue is Empty!\\n");
        }
    
        else
        {
            ptr->f++;
            a = ptr->arr[ptr->f];
        }
        return a;
    }
    
    void firstVal(struct queue *ptr)
    {
        printf("First value in this queue is: %d\\n", ptr->arr[ptr->f + 1]);
    }
    
    void lastVal(struct queue *ptr)
    {
        printf("Last value in this queue is: %d\\n", ptr->arr[ptr->r]);
    }
    
    int peek(struct queue *ptr, int index)
    {
        if (index <= ptr->size - 1)
        {
            return ptr->arr[index];
        }
        else
        {
            printf("Enter a Valid Index!");
        }
    }
    
    int main()
    {
        struct queue qu;
        qu.size = 400;
        qu.f = qu.r = 0;
        qu.arr = (int *)malloc(qu.size * sizeof(int));
    
        // BFS implementation
        int node;
        int i = 0;
        int visited[7] = {0, 0, 0, 0, 0, 0, 0};
        int a[7][7] = {
            {0, 1, 1, 1, 0, 0, 0},
            {1, 0, 1, 0, 0, 0, 0},
            {1, 1, 0, 1, 0, 0, 0},
            {1, 0, 1, 0, 1, 0, 0},
            {0, 0, 1, 1, 0, 1, 1},
            {0, 0, 0, 0, 1, 0, 0},
            {0, 0, 0, 0, 1, 0, 0},
        };
        printf("%d", i);
        visited[i] = 1;
        enqueue(&qu, i); // Enqueue i for exploration
        while (!isEmpty(&qu))
        {
            int node = dequeue(&qu);
            for (int j = 0; j < 7; j++)
            {
                if (a[node][j] == 1 && visited[j] == 0)
                {
                    printf("%d", j);
                    visited[j] = 1;
                    enqueue(&qu, j);
                }
            }
        }
        return 0;
    }`

    const code38 = `
    #include <stdio.h>

    // DFS implementation
    int visited[7] = {0, 0, 0, 0, 0, 0, 0};
    int A[7][7] = {
        {0, 1, 1, 1, 0, 0, 0},
        {1, 0, 1, 0, 0, 0, 0},
        {1, 1, 0, 1, 0, 0, 0},
        {1, 0, 1, 0, 1, 0, 0},
        {0, 0, 1, 1, 0, 1, 1},
        {0, 0, 0, 0, 1, 0, 0},
        {0, 0, 0, 0, 1, 0, 0},
    };
    
    void DFS(int i)
    {
        printf("%d ", i);
        visited[i] = 1;
        for (int j = 0; j < 7; j++)
        {
            if (A[i][j] == 1 && !visited[j])
            {
                DFS(j);
            }
        }
    }
    
    int main()
    {
        DFS(0);
        
        return 0;
    }`

    // Set loading state to true initially
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Wait for two second
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    })

    // If page is in loading state, display 
    // loading message. Modify it as per your 
    // requirement.
    if (loading) {
        return <div className="container text-center" style={{ marginTop: "10rem", marginBottom: "9rem" }}>
            <Spinner />
        </div>
    }

    // If page is not in loading state, display page.
    else {
        return (
            <>
                <div className="accordion accordion-flush" id="accordionFlushExample" style={{ marginTop: "6rem", marginBottom: "5rem", marginLeft: "2rem", width: "85%" }}>
                    <h6 className={`text-center my-5 text-${mode === "dark" ? "light" : "dark"}`}><i>TopicWise Data Structure and Algorithm <b>(DSA)</b> Code with Hand-written Notes..</i></h6>
                    <Content mode={mode} code={code1} count="One" title="8. Array_ADT" id="1" />
                    <Content mode={mode} code={code2} count="Two" title="10. Insertion" id="2" />
                    <Content mode={mode} code={code3} count="Three" title="11. Deletion" id="3" />
                    <Content mode={mode} code={code4} count="Four" title="12. Linear Binary Search" id="4" />
                    <Content mode={mode} code={code5} count="Five" title="14. Linked List" id="5" />
                    <Content mode={mode} code={code6} count="Six" title="16. Linked List Insertion" id="6" />
                    <Content mode={mode} code={code7} count="Seven" title="18. Linked List Deletion" id="7" />
                    <Content mode={mode} code={code8} count="Eight" title="20. Circular Linked List Traversal" id="8" />
                    <Content mode={mode} code={code9} count="Nine" title="21. Doubly Linked List" id="9" />
                    <Content mode={mode} code={code10} count="Ten" title="24. Stack Using Array" id="10" />
                    <Content mode={mode} code={code11} count="Eleven" title="26. Stack Operations" id="11" />
                    <Content mode={mode} code={code12} count="Twelve" title="27. Stack Peek" id="12" />
                    <Content mode={mode} code={code13} count="Thirteen" title="30. Stack Linked List" id="13" />
                    <Content mode={mode} code={code14} count="Fourteen" title="31. Stack Linked List Operations" id="14" />
                    <Content mode={mode} code={code15} count="Fifteen" title="33. Parenthesis Matching" id="15" />
                    <Content mode={mode} code={code16} count="Sixteen" title="34. Multi Parenthesis Matching" id="16" />
                    <Content mode={mode} code={code17} count="Seventeen" title="37. Infix to Postfix" id="17" />
                    <Content mode={mode} code={code18} count="Eighteen" title="41. Queue Using Array" id="18" />
                    <Content mode={mode} code={code19} count="Ninteen" title="44. Circular Queue" id="19" />
                    <Content mode={mode} code={code20} count="Twenty" title="46. Queue Linked List" id="20" />
                    <Content mode={mode} code={code21} count="TwentyOne" title="51. Bubble Sort" id="21" />
                    <Content mode={mode} code={code22} count="TwentyTwo" title="53. Insertion Sort" id="22" />
                    <Content mode={mode} code={code23} count="TwentyThree" title="55. Selection Sort" id="23" />
                    <Content mode={mode} code={code24} count="TwentyFour" title="56. Quick Sort" id="24" />
                    <Content mode={mode} code={code25} count="TwentyFive" title="59. Merge Sort" id="25" />
                    <Content mode={mode} code={code26} count="TwentySix" title="60. Count Sort" id="26" />
                    <Content mode={mode} code={code27} count="TwentySeven" title="65. Linked Representation of Binary Tree" id="27" />
                    <Content mode={mode} code={code28} count="TwentyEight" title="67. Preorder Traversal" id="28" />
                    <Content mode={mode} code={code29} count="TwentyNine" title="68. Postorder Traversal" id="29" />
                    <Content mode={mode} code={code30} count="Thirty" title="69. Inorder Traversal" id="30" />
                    <Content mode={mode} code={code31} count="ThirtyOne" title="72. Binary Search Tree" id="31" />
                    <Content mode={mode} code={code32} count="ThirtyTwo" title="74. Recursive Search in Binary Search Tree" id="32" />
                    <Content mode={mode} code={code33} count="ThirtyThree" title="75. Iterative Search in Binary Search Tree" id="33" />
                    <Content mode={mode} code={code34} count="ThirtyFour" title="76. Insertion in Binary Search Tree" id="34" />
                    <Content mode={mode} code={code35} count="ThirtyFive" title="78. Deletion in Binary Search Tree" id="35" />
                    <Content mode={mode} code={code36} count="ThirtySix" title="82. AVL Tree Insertion and Rotation (LL, RR, LR and RL Rotation)" id="36" />
                    <Content mode={mode} code={code37} count="ThirtySeven" title="87. Binary First Search (BFS)" id="37" />
                    <Content mode={mode} code={code38} count="ThirtyEight" title="89. Depth First Search (DFS)" id="38" />
                </div>
            </>
        )
    }
}

export default Code