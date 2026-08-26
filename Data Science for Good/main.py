# This code is written in python
# The pandas library is used for data processing and to read data files
import pandas as pd 
#The matplotlib library is used to plot histograms and scatter plots
import matplotlib.pyplot as plt
# The GWCutilities has functions to help format data printed to the console
import GWCutilities as util

# Read a comma separated values (CSV) files into a variable
# as a pandas DataFrame
lwd=pd.read_csv("livwell135.csv")

print("\nBangladesh is a low-lying delta dominated by massive river systems and seasonal floods, whereas Indonesia is a tropical volcanic archipelago made up of over 17,000 islands. Lets compare how temperatures and water access vary between these countries.\n ")

input("Press return to continue.\n")

# Print out the number of rows and columns
print(lwd.shape)

listOfcountries = lwd["country_name"].unique()
print(util.vformat_list(listOfcountries))

oneCountryBooleanList = lwd["country_name"] == "Bangladesh"
print(oneCountryBooleanList)
anotherCountryBooleanList = lwd["country_name"] == "Indonesia"
print(anotherCountryBooleanList)

oneCountryData = lwd.loc[oneCountryBooleanList]
print(oneCountryData)
anotherCountryData = lwd.loc[anotherCountryBooleanList]
print(anotherCountryData)

#Bangladesh
plt.scatter(x = 'tmp_mean36', y = "HH_water_high_p", data = oneCountryData, color = "teal", label = "Bangladesh")

#Indonesia
plt.scatter(x = 'tmp_mean36', y = "HH_water_high_p", data = anotherCountryData, color = "orange", label = "Indonesia")

plt.xlabel("Mean Temperature over 36 Months (°C)")
plt.ylabel("Percentage of Households with High Water Access")
plt.title("Temperature vs. High Water Access (Bangladesh vs. Indonesia)")
plt.legend()
plt.ylim(0,50)
plt.show()

print("\nDespite having an abundance of surface water, Bangladesh faces severe groundwater contamination issues, specifically naturally occurring arsenic in shallow wells and rising saltwater intrusion in coastal aquifers caused by sea level rise.\n \nThe flat trend line for Bangladesh reflects widespread lack of piped, high quality and treated household water infrastructure compared to Indonesia’s more variable development.\n \nIn regions with poor household water access, the physical burden of collecting drinking water often falls on teenage girls and women, directly cutting into study time and school attendance. Lets hear more about their stories.\n")

input("Press return to continue.\n")

print("\nAmina, a 16 year old student in Bangladesh, has to walk over an hour each morning to fetch clean drinking water because local wells are contaminated.\n \nLestari, a 17 year old student living in Java, notices how piped water infrastructure rapidly drops off once you move away from main commercial hubs. \n")

input("Press return to continue.\n")

print("Based on these findings, my proposed reserach question is:\n \nWhy does high quality household water access remain consistently below 8% across regions in Bangladesh regardless of mean temperature, while Indonesia shows a sharp upward variation across similar temperature ranges?")
