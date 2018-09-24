# MedalsWidget!

##Introduction
This is my attempt at the MedalsWidget test.  I used webpack for my bundling, development, and translation needs.  Just follow the documentation and it should explain everything in the App.

I decided not to use any extra libs in this project becuase it felt right making it by hand.  Normally for other projects such as my [app](https://github.com/Afro523/MineralID-Meteor "app") I have used [Material UI](https://material-ui.com/ "Material UI") for a quicker development.

Enjoy!
##Installation
```bash
git clone https://github.com/Afro523/Reuters_Medal_Test.git
cd Reuters_Medal_Test
npm install
npm start
```
Navigate to http://localhost:8080/

## Use
Aside from using the app in the browser you can also change the intial input values.

Now that the server is running, if you open up the root folder in your favorite text-editor you can change the initial input in dist/index.html.

##dist/Index.html
This is where everything is rendered. From this file you can change the arguments in the MedalWidget.init function.  I also imported Roboto font because it looked like both "MEDAL COUNT" and "Title" were different fonts.

##src/Index.js
Here we init the app, this is the entry point in webpack.  There is a little logic to take care of both arguments intial sort  and target-id.  This is why the initial render is wrapped in a function call and exposed using webpack.

##src/components/MedalWidgetContainer.jsx
This is meant to be our data layer to manage the state and functionality of the widget.
####Functions
#####getFlagPosAndTotal(dataSet)
Used to add 2 needed variables to the fetched JSON dataset.  I use flagPos as a way to keep the Y position of the flag on the downloaded image.  Later when rendering the flags I use `background-position(0, flagPos)`.  

There is also addition of the 3 different medal categories to get totalMedals and add it to the dataset.  This is then stored in the state and is never mutated again.
*This is a one time helper function and is not repeated throughout the use of the app*

#####sortByMedals(sort, data)
The switch statement is used to sort array based on the supplied sort arg.  The data arg is the supplied original array from the state, thus it does not have to be downloaded multiple times.  I added some extra logic for fringe cases of ties with 2-3 categories, after running through the provided specs.

#####changeSort(sort)
Decivingly small, this function is actually passed down to the TopBanner.jsx to change the state of the widget.  It changes the state based on the button clicked.  It then calls  sortByMedals to change the props passed down and trigger a re-render.

#####componentDidMount()
After the component mounts, fetch the JSON data.  Run the provided initial sort category and pass the data to MedalContainer as a prop.

##src/components/MedalContainer.jsx
- Supplied Props
--sortFunc: This is the sorting function being passed to the banner.
--data: This is the dataset to be rendered
--sort: Share the current category

This is where the UI elements are rendered together to create the widget.  No state here!

####Functions
#####renderMedals()
This function maps based on the supplied array and returns 10 CountryBar components.

#####render()
Little bit of logic to determine what should be rendered. The variable elToBeRendered is either going to be a div with the loader class or the 10 CountryBar components.

TopBanner component is rendered here recieves this.props.sort and this.props.sortFunc.  The specs are in the next portion of this readme.

##src/components/TopBanner.jsx
- Supplied Props
--sort: String that is used to determine which div gets the activeMedal class attached
--sortFunc: Function which is used to update the state of the app based on which onClick event is fired

Here is where the changing of the app occurs.  When clicking on a medalContainer div will execute a change in the app's sort state and trigger a re-sorting and rerender the newly sorted array.

##src/components/Medal.jsx
- Supplied Props
--color: String that is used to determine the color of the div

Just returns a div with the medal class applied and a background-color that is applied through the props.

##src/components/CountryBar.jsx
- Supplied Props
--countryData: Single set of data to represent one country

Main use is just to display the data of each country object.

####Functions
#####getImageStyle()
This is where the bgPos variable comes into play so that way the flag can be rendered appropriately.  The entire style for the image is here so that way there is only one source of truth, thus changes are easier to make in the future.
