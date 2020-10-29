# C++

## Object Oriented Programming
The "three pillars" of OOP are generally taken to be:
- Encapsulation - In object-oriented programming, encapsulation refers to the bundling of data with the methods that operate on that data, or the restricting of direct access to some of an object's components. This concept is also often used to hide the internal representation, or state, of an object from the outside.
    Eg:
    ```C++
    //bad
    int i = 0;
    ...
    void f() {
        i = 42; // since i is global, any function may modify it
    }
    // good
    class c0 {
    private:
        int i = 0;
        void f() {
            i = 42; // fine because f is the only function meant to modify i
        }
    }
    ```
- Inheritance - In object-oriented programming, inheritance is the mechanism of basing an object or class upon another object (prototype-based inheritance) or class (class-based inheritance), retaining similar implementation. The relationships of objects or classes through inheritance give rise to a directed graph.
    Eg:
    ```C++
    // Base class
    class Animal {
        int weight;
        int height;
        int color;
    };

    // Derived classes
    class Tiger: public Animal {
        int numTeeth;
    };
    class Horse: public Animal {
        char* breed;
    };

    int main(void) {
        Tiger t;
        t.weight = 100;
        t.numTeeth = 40;

        Horse h;
        h.height = 6;
        h.breed = "Mustang";
    }
    ```
- Polymorphism - the ability of derived classes to redifine inherited methods
    Eg:
    ```C++
    // Base class
    class Animal {
      public:
        void animalSound() {
        cout << "The animal makes a sound \n" ;
      }
    };

    // Derived class
    class Pig : public Animal {
      public:
        void animalSound() {
        cout << "The pig says: wee wee \n" ;
      }
    };

    // Derived class
    class Dog : public Animal {
      public:
        void animalSound() {
        cout << "The dog says: bow wow \n" ;
      }
    };
    ```
    - good practice would be to define the base class animalSound function as virtual, so that the correct functions are called for each respective derived object's various functions
    Eg:
    ```C++
    // Base class
    class Animal {
      public:
        virtual void animalSound() {
        cout << "The animal makes a sound \n" ;
      }
    };
    ```
    - Better yet, if the base class function is never intended to be used, make it a pure virtual function so that it can not be accidentally used, and derived classes MUST redefine the function for themselves if they intend to use it.
    Eg:
    ```C++
    // Base class
    class Animal {
      public:
        virtual void animalSound() = 0;
    };
    ```
Great video on virtual functions by [*The Cherno*](https://www.youtube.com/user/TheChernoProject) can be found [here](https://www.youtube.com/watch?v=oIV2KchSyGQ&ab_channel=TheCherno).
