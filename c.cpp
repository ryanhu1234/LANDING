#include <iostream>
#include <string>
#include <cmath>
using namespace std;

int main()
{
        int trigchoice;
        char choice;
        float x;
        float y;

    while( 1 == 1 ) {
        cout << "What operation would you like to do + | - | / | * ";
        cin  >> choice;
        if ( choice == '+')
            {
            cout << "Input first number";
            cin >> x;
            cout << "Input second number";
            cin >> y;
            cout << x + y;
    }
        else if ( choice == '-')
    {
            cout << "Input first number";
            cin >> x;
            cout << "Input second number";
            cin >> y;
            cout << x - y;
    }
            else if (choice == '/')
    {
            cout << "Input first number";
            cin >> x;
            cout << "Input second number";
            cin >> y;
            cout << x / y;
    }
        else if (choice == '*')
    {
            cout << "Input first number";
            cin >> x;
            cout << "Input second number";
            cin >> y;
            cout << x * y;
    }
        else if ( choice == 5)
    {
            cout << "Welcome to trig 1. Cos 2. Sine 3. Tan";
            cin >> trigchoice;
            cin >> x;
        if ( trigchoice == 1)
    {
        cout << cos(x);
    }
        if ( trigchoice == 2)
    {
            cout << sin(x);
    }
        if ( trigchoice == 3)
    {
            cout << tan(x);
    }


    }
        else if ( choice != '+',-,/,*,5)
    {
            cout << "Not a choice you idiot";
    }
    cout << " " << endl;
   }


    return 0;
}
