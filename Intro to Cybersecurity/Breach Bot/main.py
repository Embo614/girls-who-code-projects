breachYear = 2014

#Greets user
print("Hello! I'm Breach Bot.")
userName = input("What is your name?\n")
print("Nice to meet you " + userName)

#Recounts year of breach
todaysYear = input("What year is it?\n")
timePassed = int(todaysYear) - breachYear
print("Wow! That means it has been " + str(timePassed) + " years since the Yahoo data breach!")

#Introduces breach
print("Would you like to learn about the Yahoo data breach?")
giveInfo = input("Type 'yes' or 'no'\n")

#Explains breach
while giveInfo.lower() == "yes":
  print("What would you like to learn more about? Enter the lowercase letter of the following options: \n(a) breach details, (b) organisation's response, or (c) I would like to hear your reflection")
  topic = input()
  
  if topic.lower() == "a":
    print("500 million accounts were involved during the Yahoo Data Breach in 2014. Yahoo emails, real names, phone numbers, dates of birth and passwords are examples of the types of information that were taken and Yahoo has yet to announce what truly happened.")
  
  elif topic.lower() == "b":
    print("In terms of actions the company is taking, Yahoo says that federal agents are investigating the foreign government that was supposedly behind this. Furthermore, Yahoo has advised users to change their passwords since the incident.")
  
  elif topic.lower() == "c":
    break
  
  else:
    print("Sorry, I didn't catch that. Choose one of the options listed.")
  
  input("Press enter to continue\n")

#Introduces my take
print("\nI'm excited to share my perspective with you. Are you ready to hear my take?")
giveInfo = input("Type 'yes' or 'no'\n")

#Shares my take
while giveInfo.lower() == "yes":
  print("What would you like to learn more about? Enter the lowercase letter of the following options: \n(a) relation to the CIA Triad, (b) my reaction, (c) my advice, or (d) none")
  topic = input()
  
  if topic.lower() == "a":
    print("This data breach links to availability because Yahoo emails, real names, phone numbers, dates of birth, and passwords are examples of the type of information that was taken. It also links to integrity as Yahoo has yet to announce what truly happened.")
  
  elif topic.lower() == "b":
    print("We disagree with the organization's response because they have not been clear or sincere to their users and have seemingly tried to sweep this incident under the rug as if it did not happen rather than being truly honest with everyone.")
  
  elif topic.lower() == "c":
     print("I would convince victims to take action by saying that personal information can be used to steal their identity and can be used against them in a different context. My advice would be to change their passwords for their Yahoo accounts, especially if it has been a while since they have done so. This has even been advised by the company so it seems a logical thing to do.")

  elif topic.lower() == "d":
   break
    
  else:
    print("Sorry, I didn't catch that. Choose one of the options listed.")
  
  input("Press enter to continue\n")

#Chatbot ends conversation
print("Thanks for chatting with me, and I hope you learned something new!")
