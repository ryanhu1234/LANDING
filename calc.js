<script language="JavaScript">

var nl = getNewLine()

function getNewLine() {
	var agent = navigator.userAgent

	if (agent.indexOf("Win") >= 0)
		return "\r\n"
	else
		if (agent.indexOf("Mac") >= 0)
			return "\r"

 	return "\r"

}

pagecode = 'print ("This is a basic four function calculator")

    #define the operations
    def add (x, y):return x + y
    def subtract (x, y):return x - y
    def multiply (x, y):return x * y
    def divide (x, y):return x / y

    #shows options
    print ("Select operation.")
    print ("+")
    print ("-")
    print ("*")
    print ("/")


    #inputs
    typ = input (\'Please input your choice \')
    in2 = float (input ("please input your first number "))
    in3 = float (input ("please input your second number "))

    #does correct operation and does the math
    if typ == \'+\':
        print (add (in2, in3)) 
    elif typ == \'-\':
        print (subtract (in2, in3)) 
    elif typ == \'*\':
        print (multiply (in2, in3)) 
    elif typ == \'/\':
        print (divide (in2, in3))
    elif typ != \'+\' or \'-\' or \'*\' or \'/\':
        print("Nonexistant operation!")'

document.write(pagecode);

</script>
