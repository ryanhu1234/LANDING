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

pagecode = 'import math
while 1 == 1:
  cho1 = input("normal or trig ")
  if cho1 == \'normal\':
    print ("This is a basic four function calculator")

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
        print("Nonexistant operation!")
  elif cho1 == \'trig\':
    cho2 = input(\'convert or functions \')
    if cho2 == \'convert\':
      #asks what calc they want
      print ("What would you like to convert")

      #takes input and populates variable conchoice and numconvert
      conchoice = str(input(\'r to d or d to r \'))
      numconvert = float(input("what value would you like to convert "))

    #uses variable q and e to choose between math.degrees and math.radians
      if conchoice == \'r to d\':
          print (math.degrees(numconvert))
      elif conchoice == \'d to r\':
         print (math.radians(numconvert))
      elif conchoice != \'d to r\' or \'r to d\':
          print ("You typed an incorrect choice!")
    if cho2 == \'functions\':
      #outputs options
      print ("This is a Cosine, Sine, and Tangent calculator")
      print(\'cos\')
      print(\'sin\')
      print(\'tan\')

       #inputs
      func = str(input(\'What trig function would you like \'))
      inval = float(input("Input value "))

      #does the selected option and uses variable var 
      if func == \'cos\' :
          print (math.cos(inval))
      elif func == \'sin\' :
          print (math.sin(inval))
      elif func == \'tan\' :
          print (math.tan(inval))
      elif func != \'cos\' or \'sin\' or \'tan\':
          print ("You typed an incorect value or function type!")'

document.write(pagecode);

</script>
