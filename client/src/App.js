import React from "react";
import Directory from "./components/Directory";
import ProductInfo from "./components/ProductInfo";

class App extends React.Component {
  constructor() {
    super();
    this.thumbnailClicker = this.thumbnailClicker.bind(this);
    this.selectOnChange = this.selectOnChange.bind(this);
    this.geekSquad = this.geekSquad.bind(this);
    this.locationClicker = this.locationClicker.bind(this);

    // state is rendered off of the product id in the fetch request
    // except for the star ratings which come from the ratings and reviews on a mutation observer
    this.state = {
      location: 'South Austin',
      clicked: false,
      option: 'black',
      mainImage: `https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5388/5388900_sd.jpg;maxHeight=640;maxWidth=550`,
      uniqueID: 1,
      name: "Sony - PlayStation 4 1TB Console - Jet Black",
      description: `
      Battle friends and foes with the Sony PlayStation 4 Pro console. Its 1TB capacity lets you store plenty of games without an external hard drive, and the dual-shock controller improves your hands-on gaming experience. See enemies in clear, vibrant detail with the included HDMI cable of the Sony PlayStation 4 Pro console.`,
      brand: "Sony",
      department: "Video Games",
      color: "Jet Black",
      subDept: "PlayStation 4",
      sku: 5388900,
      price: 399.99,
      avgRating: 4.8,
      colors: ["black"],
      images: [
        `https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5388/5388900_sd.jpg;maxHeight=640;maxWidth=550`,
        `https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5388/5388900_rd.jpg;maxHeight=640;maxWidth=550`,
        `https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5388/5388900cv11d.jpg;maxHeight=640;maxWidth=550`,
      ],
    };
  }

  // live updates main image based on mouseover handler in the thumbnail images
  thumbnailClicker(e) {
    this.setState({ mainImage: e.target.src })
  }

  // updates state when locations in the "change location" modal are clicked
  locationClicker(e) {
    this.setState({ location: e.target.parentNode.firstChild.nextSibling.innerHTML });
  }

  // listens for changes to the select (drop down) options and updates state
  selectOnChange(e) {
    this.setState({ option: e.target.value })
  }

  // listens for clicking on the geek squad button and toggles state
  // used in the add to cart modal
  geekSquad() {
    this.setState({ clicked: !this.state.clicked })
  }

  // listens for changes from searchbar component and fires fetch to update state
  watchDiv(div) {
    // Select the node that will be observed for mutations
    const targetNode = document.getElementById(`${div}`);

    // Options for the observer (which mutations to observe)
    const config = { attributes: true, childList: false, subtree: false };

    // Callback function to execute when mutations are observed
    let callback = (mutationsList, observer) => {
      let id = mutationsList[0].target.className;
      if (mutationsList[0].attributeName === 'class') {
        fetch(`http://ec2-3-15-234-135.us-east-2.compute.amazonaws.com/api/products/${id}`)
          .then(response => response.json())
          .then(data => {
            this.setState({
              uniqueID: data.uniqueID,
              name: data.name,
              description: data.description,
              brand: data.brand,
              department: data.department,
              color: data.color,
              subDept: data.subDept,
              sku: data.sku,
              price: data.price,
              colors: data.colors,
              images: data.images,
              mainImage: data.images[0],
              option: data.colors[0]
            });
          })
      }
    };
    callback = callback.bind(this);
    // Create an observer instance linked to the callback function
    const observer = new MutationObserver(callback);

    // Start observing the target node for configured mutations
    observer.observe(targetNode, config);
  }

  // listens to changes of star rating from the ratings component
  watchStarDiv(div) {
    // Select the node that will be observed for mutations
    const targetNode = document.getElementById(`${div}`);

    // Options for the observer (which mutations to observe)
    const config = { attributes: true, childList: false, subtree: false };

    // Callback function to execute when mutations are observed
    let callback = (mutationsList, observer) => {
      let rating = mutationsList[0].target.className;
      if (mutationsList[0].attributeName === 'class') {
        this.setState({ avgRating: Number(rating) })
      }
    };
    callback = callback.bind(this);
    // Create an observer instance linked to the callback function
    const observer = new MutationObserver(callback);

    // Start observing the target node for configured mutations
    observer.observe(targetNode, config);
  }

  componentDidMount() {
    this.watchDiv("searchbar_app")
    this.watchStarDiv("Champagne")
  }


  render() {
    // destructures this.state
    const { department, subDept, brand, sku, location,
      avgRating, name, images, mainImage, price, colors, option, clicked
    } = this.state
    return (
      <div id="main-component-container">
        <Directory
          department={department}
          subDept={subDept}
        />
        <div id="main display">
          <ProductInfo
            name={name}
            brand={brand}
            sku={sku}
            avgRating={avgRating}
            images={images}
            mainImage={mainImage}
            thumbnailClicker={this.thumbnailClicker}
            price={price}
            options={colors}
            option={option}
            selectOnChange={this.selectOnChange}
            clicked={clicked}
            geekSquad={this.geekSquad}
            locationClicker={this.locationClicker}
            location={location}
          />
        </div>
      </div>
    );
  }
}

export default App;
