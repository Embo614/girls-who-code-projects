#Part 2 Setting up the program
import pandas as pd
import matplotlib.pyplot as plt

pd.set_option('display.max_columns', None)
pd.set_option('max_colwidth', None)

movieData = pd.read_csv('./rotten_tomatoes_movies.csv')
favMovie = "Back to the Future"

print("My favourite movie is "+favMovie)


#Part 3 Investigate the data
#print(movieData.head())
#print(movieData["movie_title"])


#Part 4 Filter data
print("\nThe data for my favorite movie is:\n")
#Create a new variable to store your favorite movie information
favMovieleBooleanList = movieData["movie_title"] == favMovie
#print(favMovieleBooleanList)

favMovieData = movieData.loc[favMovieleBooleanList]
print(favMovieData)

print("\n\n")

#Create a new variable to store a new data set with a certain genre
scienceFictionMovieBooleanList = movieData["genres"].str.contains("Science Fiction")

scienceFictionMovieData = movieData.loc[scienceFictionMovieBooleanList]

numOfMovies = scienceFictionMovieData.shape[0]

print("We will be comparing " + favMovie +
      " to other movies under the genre Science Fiction in the data set.\n")
print("There are " + str(numOfMovies) + " movies under the category Science Fiction.")

print("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n")
input("Press enter to see more information about how " + favMovie +
      " compares to other movies in this genre.\n")

#Part 5 Describe data
#min
min = scienceFictionMovieData["audience_rating"].min()
print("The min audience rating of the data set is: " + str(min))
print(favMovie + " is rated 84 points higher than the lowest rated movie.")
print()

#find max
max = scienceFictionMovieData["audience_rating"].max()
print("The max audience rating of the data set is: " + str(max))
print(favMovie + " is rated 6 points lower than the highest rated movie.")
print()

#find mean
mean = scienceFictionMovieData["audience_rating"].mean()
print("The mean audience rating of the data set is: " + str(mean))
print(favMovie + " is higher than the mean movie rating.")

#find median
median = scienceFictionMovieData["audience_rating"].median()
print("The median audience rating of the data set is: " + str(median))
print(favMovie + " is higher than the median movie rating.")

print("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n")
input("Press enter to see data visualizations.\n")

#Part 6 Create graphs
#Create histogram
plt.hist(scienceFictionMovieData["audience_rating"], range = (0, 100), bins = 20)

#Adds labels and adjusts histogram
plt.grid(True)
plt.title("Audience Ratings of Science Fiction Movies Histogram")
plt.xlabel("Audience Ratings")
plt.ylabel("Number of Science Fiction Movies")

#Prints interpretation of histogram
print(
  "According to the histogram, the modal value for the audience rating of science fiction movies is between 55 and 60. The histogram is overall a hill-like shape which begins at 5 and ends at 100. However, it is interesting that there is a clear fluctuation in the number of science fiction movies between audience ratings of 40 and 75."
)
print()

#Show histogram
plt.show()
input("Press enter to see the next data visualization.\n")
plt.close()

#Create scatterplot
plt.scatter(data = scienceFictionMovieData, x = "audience_rating", y = "critic_rating", label = "Science Fiction Movies")

#Adds labels and adjusts scatterplot
plt.grid(True)
plt.title("Audience Rating vs Critic Rating")
plt.xlabel("Audience Rating")
plt.ylabel("Critic Rating")
plt.xlim(0, 100)
plt.ylim(0, 100)

plt.scatter(data = favMovieData, x = "audience_rating", y = "critic_rating", label = favMovie)
plt.legend()

#Prints interpretation of scatterplot
print(
  "According to the scatter plot, there is a positive correlation between the critic rating and audience rating of science fiction movies. However, there are a few outliers including a few movies where the critic rating is near to 100 but the audience rating is much lower (and vice versa). Despite the outliers, the positive correlation is clear due to the dataset containing so many movies that do follow this general trend. This includes my own favourite movie, Back to the Future, which you can see follows this positive correlation trend."
)
print()


#Show scatterplot
plt.show()

print("\nThank you for reading through my data analysis!")
